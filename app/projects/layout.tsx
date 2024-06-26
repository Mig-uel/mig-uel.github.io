import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '../globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Miguel | Projects',
  description: `Miguel's projects`,
}

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className='outline outline-red-500'>
      <div className='text-3xl my-10'>Projects</div>
      {children}
    </main>
  )
}
