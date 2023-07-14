'use client'

import React, { useEffect, useState } from 'react'
import { JobType, FilterType } from '@/types/Job'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import JobCard from '@/components/JobCard'
import getJobs from '../../utils/getJobs'
import Spinner from '@/components/Spinner'

export default function Home() {
  //this is called on the server because the whole component is server-side rendering

  const [filters, setFilters] = useState<FilterType[]>([])
  const [jobs, setJobs] = useState<any>([])
  const [isLoading, setIsLoading] = useState(false)

  const toggleFilters = (filter: FilterType) => {
    const newFilters = [...filters]
    const index = filters.findIndex((element) => {
      return element.name === filter.name
    })
    if (index === -1) {
      newFilters.push(filter)
    }
    if (index !== -1) {
      newFilters.splice(index, 1)
    }
    setFilters(newFilters)
  }

  useEffect(() => {
    ;(async () => {
      setIsLoading(true)
      const jobs = await getJobs([...filters])
      setJobs(jobs)
      setIsLoading(false)
    })()
  }, [filters])

  return (
    <main className='min-h-screen py-14 px-6 bg-light-bg-grayish-cyan flex flex-col items-center gap-16 lg:gap-6'>
      {filters.length > 0 && (
        <div className='w-full relative p-5 pr-6 rounded-md shadow-lg bg-white flex justify-between gap-5 items-center -mt-[7.25rem] lg:max-w-[1110px] lg:py-5 lg:px-10 lg:mb-6'>
          <div className='flex flex-wrap gap-4'>
            {filters.map((filter) => {
              return (
                <div
                  key={filter.name}
                  className='flex justify-between items-center rounded-md overflow-hidden h-[32px] '
                >
                  <div className='p-2 flex justify-center items-center h-full bg-light-bg-grayish-cyan text-desaturated-dark-cyan  text-base font-bold lg:text-[16px] lg:pt-[5px] lg:pb-0'>
                    {filter.name}
                  </div>
                  <div
                    className='h-full w-[32px] bg-desaturated-dark-cyan cursor-pointer font-bold flex justify-center items-center lg:hover:bg-very-dark-grayish-cyan '
                    onClick={() => toggleFilters(filter)}
                  >
                    <FontAwesomeIcon
                      icon={faXmark}
                      color={'#fff'}
                      className='text-[1.4rem]'
                    />
                  </div>
                </div>
              )
            })}
          </div>
          <div
            className='text-[16px] font-bold text-dark-grayish-cyan cursor-pointer lg:hover:underline lg:hover:text-desaturated-dark-cyan'
            onClick={() => setFilters([])}
          >
            Clear
          </div>
        </div>
      )}
      {isLoading ? (
        <Spinner />
      ) : (
        jobs.map((job: JobType) => {
          return (
            <JobCard
              isNew={job.new}
              {...job}
              key={job.id}
              toggleFilters={toggleFilters}
            />
          )
        })
      )}
    </main>
  )
}
