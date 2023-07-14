import React from 'react'

type FormRowProps = {
  name: string
  label: string
  type: string
}

const FormRow = ({ name, label, type }: FormRowProps) => {
  return (
    <div className='w-full flex flex-col items-start justify-center gap-2'>
      <label
        htmlFor={name}
        className='text-desaturated-dark-cyan font-bold lg:text-lg'
      >
        {label}
      </label>
      <input
        required
        type={type}
        name={name}
        className='border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-desaturated-dark-cyan w-full lg:text-lg'
      />
    </div>
  )
}

export default FormRow
