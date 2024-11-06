'use client'

import { Button } from './ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MenuButton = () => {
  const path = usePathname()

  return (
    <div className='w-screen fixed bottom-5 flex justify-center z-30'>
      <div className='w-fit h-12 rounded-full shadow-lg flex justify-center items-center bg-black'>
        <div>
          <Button asChild variant='link'>
            <Link
              href='/'
              className={`text-white ${
                path === '/' ? 'opacity-100' : 'opacity-50'
              }`}
            >
              Home
            </Link>
          </Button>
        </div>

        <div>
          <Button asChild variant='link'>
            <Link
              href='/about'
              className={`text-white ${
                path === '/about' ? 'opacity-100' : 'opacity-50'
              }`}
            >
              About
            </Link>
          </Button>
        </div>

        <div>
          <Button asChild variant='link'>
            <Link
              href='/projects'
              className={`text-white ${
                path === '/projects' ? 'opacity-100' : 'opacity-50'
              }`}
            >
              Projects
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
export default MenuButton
