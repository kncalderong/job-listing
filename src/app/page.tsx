import { prisma } from '@/db'

export default async function Home() {
  const jobs = await prisma.job.findMany({
    include: {
      languages: true,
    },
  }) //this is called on the server because the whole component is server-side

  return <main>sdafasdf</main>
}
