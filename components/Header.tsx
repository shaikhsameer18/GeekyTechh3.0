'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X } from 'lucide-react'
import Image from 'next/image'
import blackLogo from '@/app/assets/blacklogo.png'  // Import the black logo
import whiteLogo from '@/app/assets/whitelogo.png'  // Import the white logo

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          {mounted && (
            <Image
              src={theme === 'dark' ? whiteLogo : blackLogo}
              alt="Logo"
              className="max-h-20 md:max-h-24 object-contain" // Increase size but keep navbar height consistent
              style={{
                filter: theme === 'dark' ? 'brightness(0.9)' : 'none', // Adjust brightness for visibility
              }}
              width={200} // Larger width for better visibility
              height={200} // Larger height for better visibility
              priority
            />
          )}
        </Link>

        {/* Navigation menu */}
        <nav className={`md:flex md:flex-row space-x-6 ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 py-1 md:py-0 bg-transparent"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
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

          <button
            className="md:hidden p-2 text-gray-800 dark:text-gray-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </header>
  )
}
