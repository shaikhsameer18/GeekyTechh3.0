"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useTheme } from "next-themes"
import { Github, Linkedin, Instagram, ArrowRight } from "lucide-react"
import blackLogo from "@/app/assets/blacklogo.png"
import whiteLogo from "@/app/assets/whitelogo.png"
import { motion } from "framer-motion"

export default function Footer() {
  const { theme } = useTheme()
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState<string>("")
  const [status, setStatus] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus("Submitting...")

    try {
      const response = await fetch("https://formspree.io/f/xdkkobwo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      })

      if (response.ok) {
        setStatus("Subscribed successfully")
        setEmail("")
      } else {
        setStatus("Something went wrong")
      }
    } catch {
      setStatus("Something went wrong")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-black/10 dark:border-white/10 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            <div className="flex items-center gap-3">
              <Image
                src={theme === "dark" ? whiteLogo : blackLogo}
                alt="Geeky Techh"
                width={160}
                height={64}
                className="h-16 w-auto object-contain"
              />
              <span className="text-2xl font-bold text-black dark:text-white" style={{ fontFamily: 'var(--font-poppins)', letterSpacing: '0.01em' }}>
                Geeky<span className="text-gray-500">Techh</span>
              </span>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-sm leading-relaxed">
              Crafting exceptional digital experiences with precision and care.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Github, href: "https://github.com/geekytechh", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/geekytechh", label: "LinkedIn" },
                { icon: Instagram, href: "https://www.instagram.com/geeky.techh/", label: "Instagram" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white rounded-xl transition-all"
                  aria-label={social.label}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 text-black dark:text-white" strokeWidth={1.5} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-heading font-semibold text-black dark:text-white mb-4 uppercase tracking-[0.2em]">
              Navigation
            </h4>
            <nav className="space-y-2.5">
              {["Home", "Services", "Skills", "Projects", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors font-medium"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-heading font-semibold text-black dark:text-white mb-4 uppercase tracking-[0.2em]">
              Newsletter
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Subscribe for updates and insights.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-3">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Your email"
                  required
                  className="flex-1 px-5 py-3 bg-white dark:bg-black border border-black/10 dark:border-white/10 focus:border-black dark:focus:border-white rounded-xl outline-none text-black dark:text-white text-sm transition-all"
                />
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl hover:bg-black/90 dark:hover:bg-white/90 transition-all disabled:opacity-50 shadow-lg hover:shadow-xl"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
              {status && (
                <p className={`text-xs font-medium ${status.includes("success") ? "text-green-600" : "text-gray-600 dark:text-gray-400"}`}>
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-black/10 dark:border-white/10">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center font-medium">
            © {currentYear} Geeky Techh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
