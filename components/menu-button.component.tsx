'use client'

import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from './ui/button'

const MenuButton = () => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false)

  return (
    <div className='absolute bottom-5 left-5 rounded-full shadow-lg'>
      <Button size='icon' className='rounded-full w-12 h-12 md:w-14 md:h-14'>
        <Menu className='w-5 h-5 md:w-12 md:h-6' />
      </Button>
    </div>
  )
}
export default MenuButton
