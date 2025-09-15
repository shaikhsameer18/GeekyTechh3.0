"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import blackLogo from "@/app/assets/blacklogo.png"
import whiteLogo from "@/app/assets/whitelogo.png"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState("Home")

  // Force immediate theme application
  useEffect(() => {
    setMounted(true)
    // Apply theme class directly to document for immediate effect
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    if (resolvedTheme) {
      root.classList.add(resolvedTheme)
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Update active section based on scroll position
      const sections = ["home", "services", "skills", "projects", "contact"]
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveItem(currentSection.charAt(0).toUpperCase() + currentSection.slice(1))
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [resolvedTheme])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Handle theme toggle with immediate visual feedback
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    // Apply theme class directly for immediate effect
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(newTheme)
  }

  const navItems = ["Home", "Services", "Skills", "Projects", "Contact"]

  const handleNavClick = (item: string) => {
    setActiveItem(item)
    if (isMenuOpen) setIsMenuOpen(false)
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg py-2"
        : "bg-transparent py-4"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Mobile Menu Toggle - Left aligned on mobile only */}
        <div className="flex-none md:hidden">
          {/* Menu Toggle - Mobile */}
          <motion.button
            className={`p-2 rounded-full ${isMenuOpen
              ? "bg-purple-600 text-white"
              : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              }`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>

        {/* Logo - Center aligned on mobile, left-aligned on desktop */}
        <div className="flex-1 flex justify-center md:flex-none md:justify-start">
          <Link href="/" className="flex items-center">
            {mounted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={theme === "dark" ? whiteLogo : blackLogo}
                  alt="Geeky Techh Logo"
                  className="h-auto w-auto object-contain"
                  width={200}
                  height={75}
                  style={{ minWidth: '150px', maxHeight: '75px' }}
                  priority
                />
              </motion.div>
            )}
          </Link>
        </div>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-2 flex items-center">
            {navItems.map((item) => (
              <motion.div key={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  onClick={() => handleNavClick(item)}
                  className={`px-4 py-2 mx-1 rounded-full text-sm font-medium transition-all duration-300 ${activeItem === item
                    ? "bg-purple-600 text-white shadow-md"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                >
                  {item}
                </Link>
              </motion.div>
            ))}

            {/* Theme Toggle - Inside nav for desktop */}
            <motion.button
              className={`ml-2 p-2 rounded-full ${theme === "dark"
                ? "bg-gray-700 text-yellow-400"
                : "bg-gray-200 text-purple-600"
                } shadow-md transition-all duration-200`}
              onClick={toggleTheme}
              aria-label="Toggle theme"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mounted && (
                  <motion.div
                    key={theme}
                    initial={{ rotate: -30, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 30, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === "dark" ? (
                      <Sun className="w-4 h-4" />
                    ) : (
                      <Moon className="w-4 h-4" />
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>

        {/* Theme Toggle - Right aligned on mobile only */}
        <div className="flex-none md:hidden flex justify-end">
          <motion.button
            className={`p-2 rounded-full ${theme === "dark"
              ? "bg-gray-700 text-yellow-400"
              : "bg-gray-200 text-purple-600"
              } shadow-md transition-all duration-200`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mounted && (
                <motion.div
                  key={theme}
                  initial={{ rotate: -30, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 30, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === "dark" ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg md:hidden z-50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="py-3 px-4 flex flex-col">
              {navItems.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="py-1.5"
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    onClick={() => handleNavClick(item)}
                    className={`block py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${activeItem === item
                      ? "bg-purple-600 text-white"
                      : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

