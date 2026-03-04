"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useTheme } from "next-themes"
import { Github, Linkedin, Instagram, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import blackLogo from "@/app/assets/blacklogo.png"
import whiteLogo from "@/app/assets/whitelogo.png"

const socials = [
  { icon: Github, href: "https://github.com/geekytechh", label: "GitHub", color: "#c9d1d9", lightBgColor: "#1f2328" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/geekytechh", label: "LinkedIn", color: "#0A66C2", lightBgColor: "#0A66C2" },
  { icon: Instagram, href: "https://www.instagram.com/geeky.techh/", label: "Instagram", color: "#E4405F", lightBgColor: "#E4405F" },
]

export default function Footer() {
  const { theme } = useTheme()
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus("Submitting...")
    try {
      const res = await fetch("https://formspree.io/f/xdkkobwo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus("Subscribed")
        setEmail("")
      } else setStatus("Error")
    } catch {
      setStatus("Error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const navItems = ["Home", "Services", "Skills", "Projects", "Contact"]
  const isDarkFooter = theme !== "dark" // light theme = dark footer, dark theme = light footer

  return (
    <footer className="relative border-t border-[hsl(var(--border))] bg-[hsl(var(--foreground))] text-[hsl(var(--background))] overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 py-10 sm:py-12 md:py-14">
        <div className="grid grid-cols-1 gap-10 xs:gap-12 sm:gap-10 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-5 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-1.5 mb-4 sm:mb-5 group">
              <Image
                src={theme === "dark" ? blackLogo : whiteLogo}
                alt="Geeky Techh"
                width={120}
                height={44}
                className="h-10 xs:h-11 sm:h-12 w-auto object-contain"
              />
              <span className="text-lg xs:text-xl font-bold tracking-[-0.02em] font-heading leading-none self-center">
                Geeky<span className="opacity-75">Techh</span>
              </span>
            </Link>
            <p className="text-[13px] xs:text-[14px] font-medium opacity-85 max-w-sm mb-5 sm:mb-6 leading-relaxed">
              Crafting exceptional digital experiences. From idea to deployment - we build it right.
            </p>
            <div className="flex gap-2 xs:gap-2.5">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 xs:p-3 rounded-lg xs:rounded-xl transition-colors duration-300 [&>svg]:w-5 [&>svg]:h-5 xs:[&>svg]:w-6 xs:[&>svg]:h-6 ${isDarkFooter ? "bg-white/12 hover:bg-white/25" : "bg-black/10 hover:bg-black/20"}`}
                  aria-label={s.label}
                  style={{ color: isDarkFooter ? s.color : s.lightBgColor }}
                  whileHover={{ y: -4, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <s.icon strokeWidth={2} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[11px] xs:text-[12px] font-semibold uppercase tracking-[0.15em] opacity-60 mb-3 xs:mb-4">Navigation</h4>
            <nav className="flex flex-col gap-2.5 xs:gap-3">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[13px] xs:text-[14px] font-medium opacity-90 hover:opacity-100 hover:underline hover:underline-offset-2 transition-all duration-300 hover:translate-x-1 w-fit"
                >
                  {item}
                </Link>
              ))}
              <Link href="#contact" className="text-[13px] xs:text-[14px] font-medium opacity-90 hover:opacity-100 hover:underline hover:underline-offset-2 transition-all duration-300 hover:translate-x-1 w-fit">
                Get in Touch
              </Link>
            </nav>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] xs:text-[12px] font-semibold uppercase tracking-[0.15em] opacity-60 mb-3 xs:mb-4">Newsletter</h4>
            <p className="text-[13px] xs:text-[14px] font-medium opacity-90 mb-3 xs:mb-4">
              Stay updated with our latest work and insights.
            </p>
            <form onSubmit={handleSubmit} className="space-y-1.5">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className={`flex-1 min-w-0 px-3 xs:px-3.5 py-2.5 xs:py-3 rounded-lg border-2 text-[13px] xs:text-[14px] font-medium focus:outline-none focus:ring-2 transition-all shadow-sm ${
                    isDarkFooter
                      ? "border-white/40 bg-white/20 text-white placeholder:text-white focus:ring-white/50 focus:border-white/70"
                      : "border-black/25 bg-black/10 text-[hsl(var(--foreground))] placeholder:text-black/70 focus:ring-black/30 focus:border-black/40"
                  }`}
                />
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex-shrink-0 p-2.5 xs:p-3 rounded-lg font-semibold disabled:opacity-50 transition-opacity ${
                    isDarkFooter ? "bg-white text-[hsl(var(--foreground))] hover:opacity-90" : "bg-[hsl(var(--foreground))] text-[hsl(var(--background))] hover:opacity-90"
                  } shadow-md`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
              {status && (
                <span className={`text-[11px] xs:text-[12px] font-medium block ${status === "Subscribed" ? "text-green-400 dark:text-green-500" : "opacity-70"}`}>
                  {status}
                </span>
              )}
            </form>
          </div>
        </div>

        <div className="mt-8 xs:mt-10 pt-5 xs:pt-6 border-t border-white/15 dark:border-black/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-[11px] xs:text-[12px] font-medium opacity-70">
            © {new Date().getFullYear()} Geeky Techh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
