"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import blackLogo from "@/app/assets/blacklogo.png"
import whiteLogo from "@/app/assets/whitelogo.png"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navItems = ["Home", "Services", "Skills", "Projects", "Team", "Contact"]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white dark:bg-gray-900 shadow-md py-4" : "bg-transparent py-2"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-14 mt-2">
        {/* Mobile Menu Toggle Button */}
        <motion.button
          className="md:hidden p-2 text-gray-800 dark:text-gray-200"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>

        {/* Logo */}
        <Link href="/" className="flex items-center justify-center md:justify-start flex-grow md:flex-grow-0">
          {mounted && (
            <Image
              src={theme === "dark" ? whiteLogo : blackLogo}
              alt="Logo"
              className="max-h-16 md:max-h-28 object-contain"
              width={180}
              height={180}
              priority
            />
          )}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-2">
          {navItems.map((item) => (
            <motion.div key={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="block text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 px-3"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Theme Toggle Button */}
        <motion.button
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {mounted &&
            (theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-purple-600" />
            ))}
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <motion.div
          className={`
      absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-md md:hidden flex flex-col items-start space-y-2 py-4 px-4 
      transition-all duration-300 ease-in-out 
      ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 md:max-h-screen md:opacity-100'}
      overflow-hidden md:overflow-visible
    `}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full"
            >
              <Link
                href={`#${item.toLowerCase()}`}
                className="block text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}


    </motion.header>
  )
}

