export type JobType = {
  id: string
  createdAt: Date
  updatedAt: Date
  company: string
  logo: string
  isNew?: boolean
  new?: boolean
  featured: boolean
  position: string
  role: string
  level: string
  postedAt: string
  contract: string
  location: string
  tools: string[]
  languages: languageType[]
}

export interface languageType {
  id: string
  name: string
}

export type FilterType = {
  name: string
  type: string
}
