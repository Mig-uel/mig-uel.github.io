'use client'

import { Menu } from 'lucide-react'
import { Button } from './ui/button'
import { useContext } from 'react'
import { MenuContext } from '@/app/_providers/providers'

const MenuButton = () => {
  const { handleMenuButtonClick } = useContext(MenuContext)

  return (
    <Button
      onClick={handleMenuButtonClick}
      type='button'
      size='icon'
      className='rounded-full w-12 h-12 md:w-14 md:h-14 absolute bottom-5 left-5 shadow-lg'
    >
      <Menu className='w-5 h-5 md:w-12 md:h-6' />
    </Button>
  )
}
export default MenuButton
