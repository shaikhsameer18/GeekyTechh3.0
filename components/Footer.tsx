"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useTheme } from "next-themes"
import { Github, Linkedin, Instagram } from "lucide-react"
import blackLogo from "@/app/assets/blacklogo.png"
import whiteLogo from "@/app/assets/whitelogo.png"

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
        setStatus("Subscription successful!")
        setEmail("")
      } else {
        setStatus("Something went wrong. Please try again.")
      }
    } catch {
      setStatus("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src={theme === "dark" ? whiteLogo : blackLogo}
                alt="Geekytechh Logo"
                className="h-12 w-auto object-contain"
                width={120}
                height={120}
                priority
              />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Geeky Techh</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 max-w-sm">
              Bringing your digital ideas to life with innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/geekytechh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/geekytechh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/geeky.techh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-800 dark:text-gray-200 mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {["Home", "Services", "Skills", "Projects", "Team", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-5">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-800 dark:text-gray-200 mb-4">Newsletter</h4>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-3 py-2 text-sm rounded-l-md border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-purple-500 dark:bg-gray-800 dark:text-white"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-4 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-r-md transition-colors duration-200 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {isSubmitting ? "..." : "Subscribe"}
                </button>
              </div>
              {status && (
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-xs text-center text-gray-600 dark:text-gray-400">
            &copy; 2022 - {currentYear} GeekyTechh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

