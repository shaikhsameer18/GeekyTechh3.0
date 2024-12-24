'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X } from 'lucide-react'
import Image from 'next/image'
import blackLogo from '@/app/assets/blacklogo.png'
import whiteLogo from '@/app/assets/whitelogo.png'

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navItems = ['Home', 'Services', 'Skills', 'Projects', 'Team', 'Contact']

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-50 dark:bg-gray-800 shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <button
          className="md:hidden p-2 text-gray-800 dark:text-gray-200 order-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <Link href="/" className="flex items-center justify-center flex-1 md:flex-none order-2">
          {mounted && (
            <Image
              src={theme === 'dark' ? whiteLogo : blackLogo}
              alt="Logo"
              className="max-h-16 md:max-h-20 object-contain"
              style={{
                filter: theme === 'dark' ? 'brightness(0.9)' : 'none',
              }}
              width={160}
              height={160}
              priority
            />
          )}
        </Link>

        <div className="order-3 md:order-4">
          <button
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {mounted && (theme === 'dark' ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-purple-600" />
            ))}
          </button>
        </div>

        <nav className={`
          md:flex md:flex-row md:space-x-6 md:order-3
          absolute md:relative top-full left-0 right-0
          bg-gray-50 dark:bg-gray-800 md:bg-transparent md:dark:bg-transparent
          shadow-md md:shadow-none
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 md:max-h-screen md:opacity-100'}
          overflow-hidden md:overflow-visible
        `}>
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block md:inline-block text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 py-2 px-4 md:py-0 md:px-0"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

