'use client'

import { MenuContext } from '@/app/_providers/providers'
import Link from 'next/link'
import { MouseEventHandler, useContext } from 'react'

const Menu = () => {
  const { isMenuActive, handleMenuButtonClick } = useContext(MenuContext)

  return (
    <div
      className={`text-lg md:text-xl h-screen w-full flex flex-col justify-center items-center absolute gap-5 uppercase font-medium bg-white ${
        !isMenuActive && 'hidden'
      }`}
      onClick={handleMenuButtonClick}
    >
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/projects'>Projects</Link>
    </div>
  )
}
export default Menu
