'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Phone } from 'lucide-react'
// import Image from 'next/image'

const roles = [
  "Web Developer",
  "Software Engineer",
  "Graphic Designer",
  "Full Stack Developer",
  "AI/ML Developer"
]

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1))
        if (text === '') {
          setIsDeleting(false)
          setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)
        }
      } else {
        setText(roles[roleIndex].slice(0, text.length + 1))
        if (text === roles[roleIndex]) {
          setIsDeleting(true)
        }
      }
    }, isDeleting ? 50 : 150)

    return () => clearTimeout(timer)
  }, [text, isDeleting, roleIndex])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-purple-400 to-indigo-600 dark:from-purple-900 dark:to-indigo-800">
      {/* Background Image */}
      <div className="relative z-10 text-center max-w-4xl px-4 py-16">
        {/* Top Text */}
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-4 font-poppins text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Looking for a <span className="font-bold text-yellow-300">{text}</span>
          <span className="animate-blink">|</span>
        </motion.h1>

        {/* Bottom Text */}
        <motion.p
          className="text-xl md:text-2xl font-bold font-poppins text-white mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Bringing Your Digital Ideas to Life
        </motion.p>

        {/* Contact Buttons */}
        <motion.div
          className="flex flex-col items-center justify-center gap-3 mt-8 sm:flex-row sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="tel:+917774897159"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-indigo-600 transition-transform duration-300 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 w-full sm:w-auto"
          >
            <Phone className="mr-2" size={18} />
            Amanullah Shaikh (+91) 77748 97159
          </a>
          <a
            href="tel:+919892506004"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white transition-transform duration-300 bg-indigo-600 rounded-lg shadow-md hover:shadow-lg hover:scale-105 w-full sm:w-auto"
          >
            <Phone className="mr-2" size={18} />
            Ali Shaikh (+91) 98925 06004
          </a>
        </motion.div>
      </div>
    </section>
  )
}
