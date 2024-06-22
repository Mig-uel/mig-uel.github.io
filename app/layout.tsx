import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/header.component'

const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Miguel | Home',
  description: `Miguel's portfolio`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <Header />
        <main className='flex flex-col justify-center h-dvh mt-10 mb-10 outline outline-1'>
          {children}
        </main>
      </body>
    </html>
  )
}
