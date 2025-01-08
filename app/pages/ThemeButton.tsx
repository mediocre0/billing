'use client'

import { Button } from '@/components/ui/button'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import React from 'react'

function ThemeButton() {
  
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
      setTheme(theme === 'dark' ? 'light':'dark')
    }
  
    return (
      <div className="sticky top-0 w-full p-4">
        <div className='flex items-center justify-end flex-1'>

          <Button variant={'outline'} size={'icon'} onClick={toggleTheme}>
            {theme === 'dark' ? <Sun /> : <Moon />}
          </Button>

        </div>
      </div>
    )
}

export default ThemeButton;