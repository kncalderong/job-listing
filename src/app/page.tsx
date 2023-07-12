import { prisma } from '@/db'

export default async function Home() {
  /* const jobs = await prisma.job.findMany({
    include: {
      languages: true,
    },
  }) */ //this is called on the server because the whole component is server-side rendering

  return (
    <main className='font-league-spartan font-medium text-very-dark-grayish-cyan'>
      Senior Frontend Developer
    </main>
  )
}
