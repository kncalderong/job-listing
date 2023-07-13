'use client'

import React, { useEffect, useState } from 'react'
import { JobType, FilterType } from '@/types/Job'
import JobCard from './JobCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

type JobsDashboardProps = {
  jobs: JobType[]
  queryJobs: (filters?: FilterType[]) => Promise<JobType[]>
}

const JobsDashboard = ({ jobs, queryJobs }: JobsDashboardProps) => {
  const [filters, setFilters] = useState<FilterType[]>([])

  const toggleFilters = (filter: FilterType) => {
    console.log('this is executing')
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

  /* useEffect(() => {
    queryJobs([
      {
        name: 'this is a filter',
        id: 123,
        type: 'language',
      },
    ])
  }, []) */

  return (
    <>
      {filters.length > 0 && (
        <div className='w-full relative p-5 pr-6 rounded-md shadow-lg bg-white flex justify-between gap-5 items-center -mt-[7.25rem]'>
          <div className='flex flex-wrap gap-4'>
            {filters.map((filter) => {
              return (
                <div
                  key={filter.name}
                  className='flex justify-between items-center rounded-md overflow-hidden h-8'
                >
                  <div className='p-2 bg-light-bg-grayish-cyan text-desaturated-dark-cyan  text-base font-bold'>
                    {filter.name}
                  </div>
                  <div
                    className='h-full w-[32px] bg-desaturated-dark-cyan cursor-pointer font-bold flex justify-center items-center '
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
            className='text-[16px] font-bold text-dark-grayish-cyan'
            onClick={() => setFilters([])}
          >
            Clear
          </div>
        </div>
      )}
      {jobs.map((job) => {
        return (
          <JobCard
            isNew={job.new}
            {...job}
            key={job.id}
            toggleFilters={toggleFilters}
          />
        )
      })}
    </>
  )
}

export default JobsDashboard
