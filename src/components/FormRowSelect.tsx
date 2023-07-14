import React from 'react'

type FormRowSelectProps = {
  name: string
  label: string
  options: string[]
}

const FormRowSelect = ({ label, name, options }: FormRowSelectProps) => {
  return (
    <div className='w-full flex flex-col items-start justify-center gap-2'>
      <label htmlFor={name} className='text-desaturated-dark-cyan font-bold'>
        {label}
      </label>
      <select
        name={name}
        className='border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-desaturated-dark-cyan w-full h-[32px] '
        required
      >
        <option value=''>--Please choose an option--</option>
        {options.map((option, idx) => {
          return (
            <option value={option} key={idx}>
              {option}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default FormRowSelect
