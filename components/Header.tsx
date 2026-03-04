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
      setIsScrolled(window.scrollY > 24)
      const sections = ["home", "services", "skills", "projects", "contact"]
      const current = sections.find(id => {
        const el = document.getElementById(id)
        if (!el) return false
        const { top, bottom } = el.getBoundingClientRect()
        return top <= 120 && bottom >= 120
      })
      if (current) setActiveItem(current.charAt(0).toUpperCase() + current.slice(1))
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = ["Home", "Services", "Skills", "Projects", "Contact"]

  const handleNavClick = (item: string) => {
    setActiveItem(item)
    setIsMenuOpen(false)
  }

  const logoEl = mounted && (
    <Link href="/" className={`flex items-center shrink-0 gap-0 ${isScrolled ? "mr-6" : "mr-12"}`} onClick={() => handleNavClick("Home")}>
      <span className={`inline-flex shrink-0 leading-[0] overflow-hidden ${isScrolled ? "h-9 sm:h-10" : "h-10 sm:h-11"}`}>
        <Image
          src={theme === "dark" ? whiteLogo : blackLogo}
          alt="Geeky Techh"
          className="object-contain object-left h-full w-auto block"
          style={{ margin: 0, display: "block" }}
          width={120}
          height={48}
          priority
          sizes="(max-width: 640px) 40px, 48px"
        />
      </span>
      <span className={`hidden sm:inline text-lg font-bold tracking-tight whitespace-nowrap font-heading text-[hsl(var(--foreground))] leading-none self-center ${isScrolled ? "text-base" : ""}`}>
        Geeky<span className="text-[hsl(var(--muted-foreground))]">Techh</span>
      </span>
    </Link>
  )

  const rightEl = (
    <div className={`flex items-center shrink-0 ${isScrolled ? "gap-3 pl-4 ml-4 min-w-0" : "gap-4 pl-8 ml-6"} border-l border-[hsl(var(--border))]/50`}>
      <Link
        href="#contact"
        onClick={() => handleNavClick("Contact")}
        className={`hidden sm:inline-flex items-center justify-center font-semibold rounded-full bg-[hsl(var(--foreground))] text-[hsl(var(--background))] hover:opacity-90 transition-all duration-200 whitespace-nowrap ${isScrolled ? "px-4 py-1.5 text-[13px]" : "px-5 py-2 text-[14px]"}`}
      >
        Get in Touch
      </Link>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="hidden md:flex p-2 rounded-full text-[hsl(var(--foreground))] hover:bg-[hsl(var(--border))]/40 transition-colors duration-200"
        aria-label="Toggle theme"
      >
        {mounted && (theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />)}
      </button>
      <div className="md:hidden flex items-center gap-1">
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-1.5 rounded-full hover:bg-[hsl(var(--border))]/40" aria-label="Toggle theme">
          {mounted && (theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />)}
        </button>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-1.5 rounded-full hover:bg-[hsl(var(--border))]/40" aria-label="Menu">
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
    </div>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className={`mx-auto transition-all duration-300 ease-smooth ${isScrolled ? "px-3 xs:px-4 pt-2.5 w-full max-w-4xl" : "px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 max-w-7xl pt-5 xs:pt-6 w-full"} flex justify-center`}>
        <motion.div
          layout
          className={`relative flex items-center justify-between w-full min-w-0 ${isScrolled ? "max-w-4xl gap-4" : "max-w-7xl gap-6"}`}
          initial={false}
          animate={{
            padding: isScrolled ? "6px 16px" : "0",
            borderRadius: isScrolled ? 9999 : 0,
            backgroundColor: isScrolled ? "hsl(var(--pill))" : "transparent",
            backdropFilter: isScrolled ? "blur(12px)" : "none",
            boxShadow: isScrolled ? "0 1px 3px rgba(0,0,0,0.06)" : "none",
            border: isScrolled ? "1px solid hsl(var(--border))" : "1px solid transparent",
          }}
          transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
        >
          <motion.div layout className="shrink-0" transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}>
            {logoEl}
          </motion.div>

          <nav className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 shrink-0">
            <div className={`flex items-center rounded-full ${!isScrolled ? "bg-[hsl(var(--pill))]" : "bg-transparent"} ${isScrolled ? "gap-0.5 px-1.5 py-1" : "gap-1 px-2 py-1"}`}>
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => handleNavClick(item)}
                  className={`rounded-full transition-all duration-200 shrink-0 ${isScrolled ? "px-2.5 py-1 text-[13px]" : "px-3 py-1.5 text-[14px]"} font-semibold ${
                    activeItem === item
                      ? "bg-[hsl(var(--foreground))] text-[hsl(var(--background))]"
                      : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--border))]/40"
                  }`}
                >
                  {item}
                </Link>
              ))}
            </div>
          </nav>

          <motion.div layout className="shrink-0" transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}>
            {rightEl}
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="md:hidden mx-4 mt-2 rounded-xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] shadow-lg overflow-hidden max-w-sm"
          >
            <nav className="p-2 space-y-0.5">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => handleNavClick(item)}
                  className={`block px-4 py-2.5 text-[14px] font-semibold rounded-lg transition-colors ${
                    activeItem === item ? "bg-[hsl(var(--pill))] text-[hsl(var(--foreground))]" : "text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--pill))] hover:text-[hsl(var(--foreground))]"
                  }`}
                >
                  {item}
                </Link>
              ))}
              <Link href="#contact" onClick={() => handleNavClick("Contact")} className="flex items-center justify-center mx-2 mt-2 py-2.5 text-[14px] font-semibold rounded-lg bg-[hsl(var(--foreground))] text-[hsl(var(--background))]">
                Get in Touch
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
