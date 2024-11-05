'use client'

import { createContext, useState } from 'react'

export const MenuContext = createContext<{
  isMenuActive?: boolean
  handleMenuButtonClick?: () => void
}>({})

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false)

  const handleMenuButtonClick = () => setIsMenuActive((prev) => !prev)

  return (
    <MenuContext.Provider value={{ isMenuActive, handleMenuButtonClick }}>
      {children}
    </MenuContext.Provider>
  )
}

export default Providers
