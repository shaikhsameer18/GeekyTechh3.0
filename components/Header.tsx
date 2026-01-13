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
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState("Home")

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

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
  }, [])

  const navItems = ["Home", "Services", "Skills", "Projects", "Contact"]

  const handleNavClick = (item: string) => {
    setActiveItem(item)
    if (isMenuOpen) setIsMenuOpen(false)
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-black/10 dark:border-white/10"
        : "bg-transparent"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo + Brand Name */}
          <Link href="/" className="flex items-center gap-3">
            {mounted && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={theme === "dark" ? whiteLogo : blackLogo}
                    alt="Geeky Techh"
                    className="h-16 w-auto object-contain"
                    width={160}
                    height={64}
                    priority
                  />
                </motion.div>
                <span className="text-2xl font-bold text-black dark:text-white hidden sm:block" style={{ fontFamily: 'var(--font-poppins)', letterSpacing: '0.01em' }}>
                  Geeky<span className="text-gray-500">Techh</span>
                </span>
              </>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => handleNavClick(item)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${activeItem === item
                  ? "text-black dark:text-white"
                  : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                  }`}
              >
                {item}
              </Link>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-4 p-2.5 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && (
                <>
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </>
              )}
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 text-black dark:text-white"
              aria-label="Toggle theme"
            >
              {mounted && (
                <>
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </>
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-black dark:text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-black border-t border-black/10 dark:border-white/10"
          >
            <nav className="px-6 py-6 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => handleNavClick(item)}
                  className={`block px-4 py-3 text-base font-medium transition-colors rounded-lg ${activeItem === item
                    ? "text-black dark:text-white bg-black/5 dark:bg-white/5"
                    : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                    }`}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
