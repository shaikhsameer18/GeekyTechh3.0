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
    <footer className="bg-white dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Brand Section */}
          <div className="lg:col-span-5 sm:col-span-1">
            <div className="flex items-center space-x-3 mb-3">
              <Image
                src={theme === "dark" ? whiteLogo : blackLogo}
                alt="Geekytechh Logo"
                className="h-16 w-auto object-contain"
                width={160}
                height={64}
                priority
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Geeky Techh
              </h3>
            </div>

            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 max-w-md leading-relaxed">
              Bringing your digital ideas to life with innovative solutions and cutting-edge technology.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://github.com/geekytechh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-500 hover:text-white dark:hover:bg-purple-600 transform hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/geekytechh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transform hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/geeky.techh/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-pink-600 hover:text-white dark:hover:bg-pink-600 transform hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 sm:col-span-1">
            <h4 className="text-base font-bold text-gray-900 dark:text-white mb-3 pb-1 border-b border-gray-200 dark:border-gray-700">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              {["Home", "Services", "Skills", "Projects", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 flex items-center group transition-all duration-300"
                >
                  <span className="w-0 h-0.5 bg-purple-500 group-hover:w-4 mr-0 group-hover:mr-1 transition-all duration-300"></span>
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4 sm:col-span-2">
            <h4 className="text-base font-bold text-gray-900 dark:text-white mb-3 pb-1 border-b border-gray-200 dark:border-gray-700">
              Newsletter
            </h4>
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 p-1 flex">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-3 py-2 text-sm border-0 focus:outline-none bg-transparent dark:text-white"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-4 py-2 text-xs font-medium text-white rounded-lg bg-purple-600 hover:bg-purple-700 transform hover:-translate-y-0.5 transition-all duration-300 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                >
                  {isSubmitting ? "..." : "Subscribe"}
                </button>
              </div>
              {status && (
                <p
                  className={`mt-1 text-xs ${status === "Subscription successful!"
                    ? "text-green-500"
                    : status === "Submitting..."
                      ? "text-blue-500"
                      : "text-red-500"
                    }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 text-center w-full">
          <p className="text-xs text-gray-600 dark:text-gray-400">
            © {currentYear} Geeky Techh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

