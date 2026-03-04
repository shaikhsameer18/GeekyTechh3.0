"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import SectionWatermark from "./SectionWatermark"

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
    const current = roles[roleIndex]
    const speed = isDeleting ? 40 : 80
    const timer = setTimeout(() => {
      if (isDeleting) {
        if (displayText.length === 0) {
          setIsDeleting(false)
          setRoleIndex((p) => (p + 1) % roles.length)
        } else {
          setDisplayText(current.slice(0, displayText.length - 1))
        }
      } else {
        if (displayText.length < current.length) {
          setDisplayText(current.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 1800)
        }
      }
    }, speed)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section id="home" className="relative min-h-screen min-h-[100dvh] flex flex-col items-center justify-center px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 pt-24 xs:pt-28 sm:pt-28 pb-16 xs:pb-20 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--muted))/0.4,transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.15)_1px,transparent_1px)] bg-[size:48px_48px] xs:bg-[size:56px_56px] sm:bg-[size:64px_64px] md:bg-[size:72px_72px]" />
      </div>

      <SectionWatermark position="bottom-right" />

      <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[11px] xs:text-[12px] sm:text-[13px] font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-[0.15em] xs:tracking-[0.2em] mb-6 xs:mb-8 sm:mb-10"
        >
          Digital Excellence
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.02em] text-[hsl(var(--foreground))] leading-[1.1] mb-4 xs:mb-5 sm:mb-6 font-heading"
        >
          Looking for a
        </motion.h1>

        <div className="min-h-[1.2em] flex justify-center items-center mb-4 xs:mb-5 sm:mb-6">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.02em] font-heading flex items-center justify-center gap-1"
          >
            <span className="hero-gradient-text">{displayText}</span>
            <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.6, repeat: Infinity }} className="inline-block w-0.5 h-[0.85em] bg-[hsl(var(--accent-orange))] ml-0.5 align-middle rounded" />
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-base xs:text-lg sm:text-xl md:text-2xl font-medium text-[hsl(var(--muted-foreground))] mb-4 xs:mb-5 sm:mb-6 max-w-2xl mx-auto"
        >
          You&apos;ve come to the <span className="text-[hsl(var(--accent-orange))] font-semibold">right place.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-[14px] xs:text-[15px] sm:text-base font-medium text-[hsl(var(--muted-foreground))] mb-10 xs:mb-12 sm:mb-14 max-w-lg mx-auto leading-relaxed px-2"
        >
          We craft exceptional digital experiences with precision and care.
          Every project is an opportunity to create something remarkable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col xs:flex-row flex-wrap items-center justify-center gap-3 xs:gap-4"
        >
          <Link href="#projects">
            <span className="inline-flex items-center gap-2 px-5 xs:px-6 sm:px-7 py-3 xs:py-3.5 sm:py-4 text-[14px] xs:text-[15px] font-semibold rounded-full bg-[hsl(var(--foreground))] text-[hsl(var(--background))] hover:opacity-90 transition-opacity duration-200 w-full xs:w-auto justify-center">
              View Work
              <ArrowRight className="w-4 h-4 shrink-0" />
            </span>
          </Link>
          <a href="tel:+917774897159">
            <span className="inline-flex items-center justify-center gap-2 px-5 xs:px-6 sm:px-7 py-3 xs:py-3.5 sm:py-4 text-[14px] xs:text-[15px] font-semibold rounded-full border border-[hsl(var(--border))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--pill))] transition-colors duration-200 w-full xs:w-auto">
              Call Us
              <Phone className="w-4 h-4 shrink-0" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
