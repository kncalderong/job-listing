import React from 'react'
import Image from 'next/image'
import { JobTypeWithToggle } from '@/types/Job'

const JobCard = ({
  company,
  logo,
  featured,
  position,
  role,
  postedAt,
  level,
  contract,
  location,
  tools,
  languages,
  isNew,
  toggleFilters,
}: JobTypeWithToggle) => {
  return (
    <div className='relative p-6 rounded-md bg-white shadow-lg w-full'>
      <div className='like-before absolute h-full w-[5px] left-0 top-0 bg-desaturated-dark-cyan rounded-tl-md rounded-bl-md'></div>
      <div className='imageContainer relative rounded-full overflow-hidden w-[48px] h-[48px] mt-[-48px] mb-4'>
        <Image
          src={`${logo}`}
          alt={`${company}-logo`}
          fill={true}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className='flex justify-start items-center mb-3'>
        <div className='company text-desaturated-dark-cyan font-bold mr-8'>
          {company}
        </div>
        {isNew && (
          <div className='rounded-xl bg-desaturated-dark-cyan text-white font-bold mr-2 h-[25px] px-3 pt-[3px] text-[14px]'>
            NEW!
          </div>
        )}
        {featured && (
          <div className='rounded-xl bg-very-dark-grayish-cyan text-white font-bold mr-2 h-[25px] px-3 pt-[3px] text-[14px]'>
            FEATURED
          </div>
        )}
      </div>
      <div className='font-bold mb-3'>{position}</div>
      <div className='flex justify-start items-center gap-[10px] pb-4 border-b-[1px] border-dark-grayish-cyan mb-4'>
        <div className='text-dark-grayish-cyan text-[16px]'>{postedAt}</div>
        <div className='rounded-full w-1 h-1 bg-dark-grayish-cyan'></div>
        <div className='text-dark-grayish-cyan text-[16px]'>{contract}</div>
        <div className='rounded-full w-1 h-1 bg-dark-grayish-cyan'></div>
        <div className='text-dark-grayish-cyan text-[16px]'>{location}</div>
      </div>
      <div className='flex flex-wrap gap-4'>
        <div
          className='bg-light-bg-grayish-cyan text-desaturated-dark-cyan p-2 rounded-md font-bold'
          onClick={() =>
            toggleFilters({
              name: role,
              type: 'role',
            })
          }
        >
          {role}
        </div>
        <div
          className='bg-light-bg-grayish-cyan text-desaturated-dark-cyan p-2 rounded-md font-bold'
          onClick={() =>
            toggleFilters({
              name: level,
              type: 'level',
            })
          }
        >
          {level}
        </div>
        {tools.map((tool) => {
          return (
            <div
              className='bg-light-bg-grayish-cyan text-desaturated-dark-cyan p-2 rounded-md font-bold'
              key={tool}
              onClick={() =>
                toggleFilters({
                  name: tool,
                  type: 'tools',
                })
              }
            >
              {tool}
            </div>
          )
        })}
        {languages.map((language) => {
          return (
            <div
              className='bg-light-bg-grayish-cyan text-desaturated-dark-cyan p-2 rounded-md font-bold'
              key={language.id}
              onClick={() =>
                toggleFilters({
                  name: language.name,
                  type: 'languages',
                })
              }
            >
              {language.name}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default JobCard
