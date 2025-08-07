'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {
        theme === 'light' ? (
          <Moon
            onClick={() => setTheme('dark')}
            className=' stroke-[1.5px] w-6 h-6 md:w-8 md:h-8 lg:w-9 lg:h-9 p-1 md:p-2 rounded-full hover:text-gray-400 cursor-pointer bg-gray-200 text-textBase-light dark:bg-black'
          />
        ) : (
          <Sun
            onClick={() => setTheme('light')}
            className='stroke-[1.5px] w-6 h-6 md:w-8 md:h-8 lg:w-9 lg:h-9 p-1 md:p-2 rounded-full hover:text-gray-400 cursor-pointer bg-gray-200 text-white dark:bg-black'
          />
        )
      }
    </button>
  )
}
