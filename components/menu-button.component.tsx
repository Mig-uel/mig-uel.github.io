'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useUserWithToken } from '@/hooks/useUserWithToken'
import { Button } from './ui/button'
import { ThemeToggle } from './theme-toggle'

const MenuButton = () => {
  const path = usePathname()

  const { user } = useUserWithToken()

  return (
    <div className='w-screen fixed bottom-5 flex justify-center z-30'>
      <div className='w-fit h-12 rounded-full shadow-lg flex justify-center items-center  bg-black'>
        <div>
          <Button
            asChild
            variant='link'
          >
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
          <Button
            asChild
            variant='link'
          >
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
          <Button
            asChild
            variant='link'
          >
            <Link
              href='/projects'
              className={`text-white ${
                path.includes('projects') ? 'opacity-100' : 'opacity-50'
              }`}
            >
              Projects
            </Link>
          </Button>
        </div>

        {user && (
          <div>
            <Button
              asChild
              variant='link'
            >
              <Link
                href='/admin'
                className={`text-white ${
                  path === '/admin' ? 'opacity-100' : 'opacity-50'
                }`}
              >
                Admin
              </Link>
            </Button>
          </div>
        )}

        <div className='pr-2'>
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
export default MenuButton
