'use client'

import { faHouse, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()
  return (
    <header className='w-full h-[156px] bg-[url("/bg-header-mobile.svg")] bg-desaturated-dark-cyan lg:bg-[url("/bg-header-desktop.svg")] relative'>
      <div className='w-full lg:max-w-[1100px] mx-auto group'>
        {pathname === '/' ? (
          <div className='w-full flex justify-end p-6 lg:px-0 lg:pt-10'>
            <Link
              className='flex items-center bg-light-bg-grayish-cyan p-2 rounded-full w-[120px] gap-3'
              href={'/new'}
            >
              <div className='bg-desaturated-dark-cyan rounded-full relative w-[25px] h-[25px] flex justify-center items-center'>
                <FontAwesomeIcon
                  icon={faPlus}
                  color='#fff'
                  className='text-sm'
                />
              </div>
              <p className='text-desaturated-dark-cyan font-bold leading-[initial] group-hover:underline'>
                New Job
              </p>
            </Link>
          </div>
        ) : (
          <div className='w-full flex justify-end p-6 lg:px-0 lg:pt-10'>
            <Link
              className='flex items-center bg-light-bg-grayish-cyan p-2 rounded-full w-[100px] gap-3 group'
              href={'/'}
            >
              <div className='bg-desaturated-dark-cyan rounded-full relative w-[25px] h-[25px] flex justify-center items-center'>
                <FontAwesomeIcon
                  icon={faHouse}
                  color='#fff'
                  className='text-sm'
                />
              </div>
              <p className='text-desaturated-dark-cyan font-bold leading-[initial] group-hover:underline'>
                Home
              </p>
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
