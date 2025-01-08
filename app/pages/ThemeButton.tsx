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

          <div className="relative top-0 w-full p-4">
            <div className="h-18 container flex items-center">

            <h1>Bill Manager</h1>
            <p>Managing made easy.</p>
            
          <div className='flex items-center justify-end flex-1'>
             
            <Button variant={'outline'} size={'icon'} onClick={toggleTheme}>
              {theme === 'dark' ? <Sun /> : <Moon />}
            </Button>
          </div> 
          </div>

          </div>
    )
}

export default ThemeButton;