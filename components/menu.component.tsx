'use client'

import { useContext } from 'react'
import { MenuContext } from '@/app/_providers/providers'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type MenuLinks = {
  href: string
  label: string
}

const menuLinks: MenuLinks[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
]

const Menu = () => {
  const path = usePathname()
  const { isMenuActive, handleMenuButtonClick } = useContext(MenuContext)

  return (
    <div
      className={`text-lg md:text-xl w-full h-full flex flex-col justify-center items-center fixed z-20 gap-5 capitalize font-medium bg-white ${
        !isMenuActive && 'hidden'
      }`}
      onClick={handleMenuButtonClick}
    >
      {menuLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={`hover:opacity-100 ${
            path === link.href ? 'opacity-100' : 'opacity-50'
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}
export default Menu
