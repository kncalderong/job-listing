'use client'

import FormRow from '@/components/FormRow'
import FormRowSelect from '@/components/FormRowSelect'
import Link from 'next/link'
import { useState } from 'react'
import { languages } from '../../../utils/populate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const toolsOptions = ['React', 'Sass', 'Ruby', 'RoR', 'Django', 'Vue']

export default function NewJobPage() {
  const [selectedLanguages, setSelectedLanguages] = useState<String[]>([])
  const [selectedTools, setSelectedTools] = useState<string[]>([])
  return (
    <main className='w-full min-h-screen bg-light-bg-grayish-cyan flex justify-center'>
      <form action='' className='w-5/6 flex flex-col gap-5 py-6'>
        <FormRow label='Company' name='company' type='text' />
        <FormRow label='Company Logo (url)' name='logo' type='text' />
        <FormRow label='Position' name='position' type='text' />
        <FormRowSelect
          label='Role'
          name='role'
          options={['Frontend', 'Fullstack', 'Backend']}
        />
        <FormRowSelect
          label='Level'
          name='level'
          options={['Junior', 'Mid', 'Senior']}
        />
        <FormRowSelect
          label='Contract'
          name='contract'
          options={['Full Time', 'Part Time', 'Contract']}
        />
        <FormRow label='Location' name='location' type='text' />
        <FormRowSelect
          label='Languages'
          name='languages'
          options={['Python', 'Javascript', 'HTML', 'CSS', 'Ruby']}
        />
        <div className='w-full flex flex-col gap-2'>
          <p className='text-desaturated-dark-cyan font-bold'>
            Select the languages required for this position
          </p>
          <div className='flex flex-wrap w-full gap-4'>
            {languages.map((language) => {
              return (
                <div
                  key={language.id}
                  className='p-3 leading-[initial] flex justify-center items-center rounded-full bg-light-bg-grayish-cyan text-desaturated-dark-cyan border-[1px] border-desaturated-dark-cyan gap-3 h-8'
                  onClick={() => {
                    const index = selectedLanguages.indexOf(language.name)
                    if (index === -1) {
                      setSelectedLanguages([
                        ...selectedLanguages,
                        language.name,
                      ])
                    }
                    if (index > -1) {
                      const tempLanguages = [...selectedLanguages]
                      tempLanguages.splice(index, 1)
                      setSelectedLanguages([...tempLanguages])
                    }
                  }}
                >
                  <p className='font-bold'>{language.name}</p>
                  <div className='rounded-full border-[1px] border-desaturated-dark-cyan w-5 h-5 bg-white flex justify-center items-center '>
                    {selectedLanguages.includes(language.name) && (
                      <FontAwesomeIcon icon={faCheck} />
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className='w-full flex flex-col gap-2 mb-6'>
          <p className='text-desaturated-dark-cyan font-bold'>
            Select the possible tools required for this position
          </p>
          <div className='flex flex-wrap w-full gap-4'>
            {toolsOptions.map((tool, idx) => {
              return (
                <div
                  key={idx}
                  className='p-3 leading-[initial] flex justify-center items-center rounded-full bg-light-bg-grayish-cyan text-desaturated-dark-cyan border-[1px] border-desaturated-dark-cyan gap-3 h-8'
                  onClick={() => {
                    const index = selectedTools.indexOf(tool)
                    if (index === -1) {
                      setSelectedTools([...selectedTools, tool])
                    }
                    if (index > -1) {
                      const tempTools = [...selectedTools]
                      tempTools.splice(index, 1)
                      setSelectedTools([...tempTools])
                    }
                  }}
                >
                  <p className='font-bold'>{tool}</p>
                  <div className='rounded-full border-[1px] border-desaturated-dark-cyan w-5 h-5 bg-white flex justify-center items-center '>
                    {selectedTools.includes(tool) && (
                      <FontAwesomeIcon icon={faCheck} />
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className='flex gap-3 justify-end'>
          <Link
            href='..'
            className='text-white p-3 leading-[initial] flex justify-center items-center rounded-full bg-desaturated-dark-cyan hover:bg-slate-700 focus-within:bg-slate-700 outline-none'
          >
            Cancel
          </Link>
          <button
            type='submit'
            className='text-white p-3 leading-[initial] flex justify-center items-center rounded-full bg-desaturated-dark-cyan hover:bg-slate-700 focus-within:bg-slate-700 outline-none'
          >
            Create
          </button>
        </div>
      </form>
    </main>
  )
}
