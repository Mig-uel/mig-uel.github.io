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
  { href: '/contact', label: 'Contact' },
]

const Menu = () => {
  const path = usePathname()
  const { isMenuActive, handleMenuButtonClick } = useContext(MenuContext)

  return (
    <div
      className={`text-lg md:text-xl h-screen w-full flex flex-col justify-center items-center absolute gap-5 uppercase font-medium bg-white ${
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
