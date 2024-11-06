import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import MenuButton from '@/components/menu-button.component'
import Providers from './_providers/providers'

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative m-0 p-0`}
      >
        <Providers>
          <MenuButton />
          <main className='container mx-auto w-full relative'>
            {children}
            {/* TODO: <Footer /> */}
          </main>
        </Providers>
      </body>
    </html>
  )
}
