import JobCard from '@/components/JobCard'
import { prisma } from '@/db'

export default async function Home() {
  const jobs = await prisma.job.findMany({
    include: {
      languages: true,
    },
  }) //this is called on the server because the whole component is server-side rendering

  return (
    <main className='min-h-screen py-14 px-6 bg-light-bg-grayish-cyan flex flex-col items-center gap-12'>
      {jobs.map((job) => {
        return <JobCard isNew={job.new} {...job} key={job.id} />
      })}
    </main>
  )
}
