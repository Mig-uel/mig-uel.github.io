'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

//components
import { FaBars } from 'react-icons/fa6'

const Header = () => {
  const pathname = usePathname()

  return (
    <nav className='flex-col pl-5 font-bold h-20 content-center'>
      <div className='lg:hidden text-2xl md:text-3xl'>
        <FaBars className='cursor-pointer' />
      </div>
      <div className='hidden lg:flex gap-5 '>
        <Link
          href='/'
          className={`${pathname === '/' ? 'opacity-100' : 'opacity-60'}`}
        >
          HOME
        </Link>
        <Link
          href='/projects'
          className={`${
            pathname === '/projects' ? 'opacity-100' : 'opacity-60'
          }`}
        >
          PROJECTS
        </Link>
        <Link
          href='/resume'
          className={`${pathname === '/resume' ? 'opacity-100' : 'opacity-60'}`}
        >
          RESUME
        </Link>
      </div>
    </nav>
  )
}

export default Header
