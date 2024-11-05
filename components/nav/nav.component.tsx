'use client'

import { usePathname } from 'next/navigation'
import Title from '../general/title.component'
import { BiSolidLeftArrow } from 'react-icons/bi'
import Link from 'next/link'

const Nav = ({ title, className }: { title: string; className?: string }) => {
  const pathname = usePathname()

  const pathnameArray = pathname.split('/')

  const isChild = pathnameArray.length > 2

  const href = isChild ? `/${pathnameArray[1]}` : ''

  return (
    <div className={`flex justify-center items-center gap-x-2 ${className}`}>
      {isChild && (
        <Link href={href}>
          <BiSolidLeftArrow className='inline' />
        </Link>
      )}
      <Title text={title} className='inline' />
    </div>
  )
}
export default Nav
