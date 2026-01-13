"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { ArrowRight, Phone } from "lucide-react"

const roles = [
  "Web Developer?",
  "Software Engineer?",
  "UI/UX Designer?",
  "Graphic Designer?",
  "AI/ML Engineer?"
]

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const typingSpeed = isDeleting ? 50 : 100 // Backspace faster than typing

    const timer = setTimeout(() => {
      if (isDeleting) {
        // Backspacing
        setDisplayText(currentRole.substring(0, displayText.length - 1))

        if (displayText.length === 0) {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      } else {
        // Typing
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.substring(0, displayText.length + 1))
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-white dark:bg-black px-4 sm:px-6 lg:px-8 pt-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Small Label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xs tracking-[0.3em] text-gray-500 dark:text-gray-400 uppercase font-medium"
          >
            Digital Excellence
          </motion.p>

          {/* Main Heading */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-semibold text-black dark:text-white tracking-tight leading-[1.1]">
              Looking for a
            </h1>

            {/* Typing Animation */}
            <div className="min-h-[1.3em] flex items-center">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-black dark:text-white tracking-tight">
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-1 h-[0.9em] bg-black dark:bg-white ml-1 align-middle"
                />
              </h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-600 dark:text-gray-400 pt-4"
            >
              You&apos;ve come to the right place.
            </motion.p>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed"
          >
            We craft exceptional digital experiences with precision and care.
            Every project is an opportunity to create something remarkable.
          </motion.p>

          {/* CTA Buttons - Smaller & Minimal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4"
          >
            {/* Primary CTA */}
            <motion.a
              href="tel:+917774897159"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-xl hover:bg-black/90 dark:hover:bg-white/90 transition-all shadow-md hover:shadow-lg"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-4 h-4" />
              <div className="flex flex-col items-start">
                <span className="text-[10px] opacity-70">Amanullah Shaikh</span>
                <span className="font-heading font-semibold text-sm">+91 77748 97159</span>
              </div>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 border border-black dark:border-white text-black dark:text-white text-sm font-medium rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-all"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-heading font-semibold">View Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
