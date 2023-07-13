'use server'

import { FilterType } from '@/types/Job'
import { prisma } from '@/db'

const getJobs = async (filters: FilterType[] = []) => {
  console.log('filters: ', filters)

  const jobs = await prisma.job.findMany({
    include: {
      languages: true,
    },
  })
  return jobs
}

export default getJobs
