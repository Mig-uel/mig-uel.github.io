import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import MenuButton from '@/components/menu-button.component'
import Menu from '@/components/menu.component'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Miguel Castillo | Home',
  description: 'A personal portfolio showcasing about me.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <MenuButton />

        <main className='container mx-auto h-screen w-full relative'>
          <Menu />

          {children}
        </main>
      </body>
    </html>
  )
}
