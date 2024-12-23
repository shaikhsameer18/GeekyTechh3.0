'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
// import Image from 'next/image'
// import hero1 from "@/app/assets/hero2.jpg"

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
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-purple-400 to-indigo-600 dark:from-purple-900 dark:to-indigo-800">
      {/* Background Image using next/image */}
      <div className="absolute inset-0">
        {/* <Image
          src={hero1}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        /> */}
      </div>

      <div className="relative z-10 text-center max-w-4xl px-4">
        {/* Top Text */}
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-4 font-poppins text-white dark:text-gray-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Looking for a <span className="font-bold text-yellow-300">{text}</span>
          <span className="animate-blink">|</span>
        </motion.h1>

        {/* Bottom Text */}
        <motion.p
          className="text-xl md:text-2xl font-bold font-poppins text-white dark:text-gray-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Bringing Your Digital Ideas to Life
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="space-x-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="#contact" className="bg-purple-600 text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-purple-700 transition duration-300 inline-block">
            Get Started
          </Link>
          <Link href="#services" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition duration-300 inline-block">
            View Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
