'use client'

import Title from '@/components/general/title.component'
import { usePathname } from 'next/navigation'

const RoutesLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()

  return (
    <section className='flex flex-col items-center py-10'>
      <Title text={pathname} />
      {children}
    </section>
  )
}
export default RoutesLayout
