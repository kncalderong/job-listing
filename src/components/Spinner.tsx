const Spinner = () => {
  return (
    <>
      <div className='relative'>
        <div className='w-20 h-20 border-light-bg-grayish-cyan border-2 rounded-full'></div>
        <div className='w-20 h-20 border-desaturated-dark-cyan border-t-2 animate-spin rounded-full absolute left-0 top-0'></div>
      </div>

      <div className='relative'>
        <div className='w-10 h-10 border-light-bg-grayish-cyan border-2 rounded-full'></div>
        <div className='w-10 h-10 border-desaturated-dark-cyan border-t-2 animate-spin rounded-full absolute left-0 top-0'></div>
      </div>

      <div className='relative'>
        <div className='w-5 h-5 border-light-bg-grayish-cyan border-2 rounded-full'></div>
        <div className='w-5 h-5 border-desaturated-dark-cyan border-t-2 animate-spin rounded-full absolute left-0 top-0'></div>
      </div>
    </>
  )
}

export default Spinner
