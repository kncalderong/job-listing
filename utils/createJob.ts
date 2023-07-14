'use server'

import { languageType } from './../src/types/Job'
import { prisma } from '@/db'

type languageToSubmit = {
  id: string
}

const createJob = async (data: FormData) => {
  const objectToSubmit: any = {}

  objectToSubmit['company'] = data.get('company')?.valueOf()
  objectToSubmit['logo'] = data.get('logo')?.valueOf()
  objectToSubmit['new'] = true
  objectToSubmit['featured'] = true
  objectToSubmit['position'] = data.get('position')?.valueOf()
  objectToSubmit['role'] = data.get('role')?.valueOf()
  objectToSubmit['level'] = data.get('level')?.valueOf()
  objectToSubmit['postedAt'] = 'now'
  objectToSubmit['contract'] = data.get('contract')?.valueOf()
  objectToSubmit['location'] = data.get('location')?.valueOf()
  const tools: any = data.get('tools')?.valueOf()
  objectToSubmit['tools'] = JSON.parse(tools)

  const getLanguagesJSON: any = data.get('languages')?.valueOf()
  const getLanguages = JSON.parse(getLanguagesJSON)
  const languagesToSubmit: languageToSubmit[] = []

  if (Array.isArray(getLanguages)) {
    getLanguages.forEach((language: languageType) => {
      languagesToSubmit.push({ id: language.id })
    })
  }

  await prisma.job.create({
    data: {
      ...objectToSubmit,
      languages: {
        connect: [...languagesToSubmit],
      },
    },
  })
}

export default createJob
