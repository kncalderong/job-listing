'use server'

import { FilterType } from '@/types/Job'
import { prisma } from '@/db'

const getJobs = async (filters: FilterType[]) => {
  const tempFilters: any = {}
  const tempFiltersLanguages: any = []
  const tempTools: any = []

  filters.map((filter) => {
    if (filter.type === 'role' || filter.type === 'level') {
      tempFilters[filter.type] = filter.name
    }
    if (filter.type === 'tools') {
      tempTools.push(filter.name)
      tempFilters[filter.type] = {
        equals: [...tempTools],
      }
    }
    if (filter.type === 'languages') {
      tempFiltersLanguages.push({
        languages: { some: { name: { equals: filter.name } } },
      })
    }
  })

  const jobs = await prisma.job.findMany({
    where: {
      ...tempFilters,
      AND: [...tempFiltersLanguages],
    },
    include: {
      languages: true,
    },
  })
  return jobs
}

export default getJobs
