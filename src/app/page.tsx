import { prisma } from '@/db'

export default async function Home() {
  /* const jobCreated = await prisma.job.create({
    data: {
      company: 'Photosnap',
      logo: './images/photosnap.svg',
      new: true,
      featured: true,
      position: 'Senior Frontend Developer',
      role: 'Frontend',
      level: 'Senior',
      postedAt: '1d ago',
      contract: 'Full Time',
      location: 'USA Only',
      languages: {
        create: [{ name: 'HTML' }, { name: 'CSS' }, { name: 'JavaScript' }],
      },
      tools: [],
    },
  }) */

  /* const languagesCreated = await prisma.lenguages.createMany({
    data: [{
      name: 'Python'
    }]
  }) */
  /* await prisma.lenguages.deleteMany()
  await prisma.job.deleteMany() */
  const jobs = await prisma.job.findMany() //this is called on the server because the whole component is server-side

  console.log('jobs', jobs)

  return <main>Hello wolrd</main>
}
