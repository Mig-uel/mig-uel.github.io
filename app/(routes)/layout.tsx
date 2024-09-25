'use client'

import Title from '@/components/general/title.component'
import { Home } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const RoutesLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()

  return (
    <div className='py-10'>
      <div className='flex items-center justify-center gap-x-2'>
        <Link href='/'>
          <Home fill='' size='1.5rem' className='mt-1.5' />
        </Link>
        <Title text={pathname} className='pl-0' />
      </div>

      <section className='flex flex-col items-center'>{children}</section>
    </div>
  )
}
export default RoutesLayout
