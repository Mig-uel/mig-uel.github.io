'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <Button
      className='hover:bg-gray-800 dark:hover:bg-accent'
      size='icon'
      asChild
      variant='ghost'
      onClick={() =>
        setTheme((prevTheme) => {
          if (prevTheme === 'light') return 'dark'
          else if (prevTheme === 'dark') return 'light'
          else if (prevTheme === 'system') return 'light'
          else if (prevTheme === 'undefined') return 'light'
          else return prevTheme
        })
      }
    >
      <div>
        <Sun className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 text-white' />
        <Moon className='absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
        <span className='sr-only'>Toggle theme</span>
      </div>
    </Button>
  )
}
