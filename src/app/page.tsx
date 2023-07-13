import JobsDashboard from '@/components/JobsDashboard'
import { prisma } from '@/db'
import { FilterType } from '@/types/Job'

const queryJobs = async (filters: FilterType[] = []) => {
  'use server'

  console.log('filters: ', filters)

  const jobs = await prisma.job.findMany({
    include: {
      languages: true,
    },
  })
  return jobs
}

export default async function Home() {
  //this is called on the server because the whole component is server-side rendering
  const jobs = await queryJobs()
  return (
    <main className='min-h-screen py-14 px-6 bg-light-bg-grayish-cyan flex flex-col items-center gap-16'>
      <JobsDashboard jobs={jobs} queryJobs={queryJobs} />
    </main>
  )
}
