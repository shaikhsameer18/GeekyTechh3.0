"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import dynamic from "next/dynamic"
import SectionWatermark from "./SectionWatermark"

// 3D globe is a client-only island — never blocks SSR/LCP of the hero text.
const HeroCanvas = dynamic(() => import("./HeroCanvas"), { ssr: false })

// Outcome-led rotations (replaces the freelancer "Looking for a Web Developer?").
const outcomes = [
  "software that ships.",
  "sites that convert.",
  "web apps that scale.",
  "brands that load fast.",
]

export default function HeroSection() {
  const [index, setIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = outcomes[index]
    const speed = isDeleting ? 40 : 80
    const timer = setTimeout(() => {
      if (isDeleting) {
        if (displayText.length === 0) {
          setIsDeleting(false)
          setIndex((p) => (p + 1) % outcomes.length)
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
  }, [displayText, isDeleting, index])

  return (
    <section id="home" className="relative min-h-screen min-h-[100dvh] flex flex-col items-center justify-center px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 pt-24 xs:pt-28 sm:pt-28 pb-16 xs:pb-20 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.15)_1px,transparent_1px)] bg-[size:48px_48px] xs:bg-[size:56px_56px] sm:bg-[size:64px_64px] md:bg-[size:72px_72px]" />
        {/* Signature interactive 3D globe */}
        <HeroCanvas />
        {/* Readability mask: keeps hero text crisp over the particles on both themes */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_50%,hsl(var(--background))_0%,hsl(var(--background))/0.55_45%,transparent_75%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--muted))/0.4,transparent)]" />
      </div>

      <SectionWatermark position="bottom-right" />

      <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 xs:mb-8 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--pill))]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--accent-orange))] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[hsl(var(--accent-orange))]" />
          </span>
          <span className="text-[11px] xs:text-[12px] font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-[0.15em]">
            Web &amp; Product Development · Mumbai
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.02em] text-[hsl(var(--foreground))] leading-[1.1] mb-4 xs:mb-5 sm:mb-6 font-heading"
        >
          We design &amp; build
        </motion.h1>

        <div className="min-h-[1.2em] flex justify-center items-center mb-5 xs:mb-6 sm:mb-7">
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
          className="text-[14px] xs:text-[15px] sm:text-lg font-medium text-[hsl(var(--muted-foreground))] mb-10 xs:mb-12 sm:mb-14 max-w-xl mx-auto leading-relaxed px-2"
        >
          We design and build fast, conversion-focused websites and web apps for founders and growing businesses — engineered to load fast, rank well, and turn visitors into customers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col xs:flex-row flex-wrap items-center justify-center gap-3 xs:gap-4"
        >
          <Link href="/#contact" className="w-full xs:w-auto">
            <span className="group inline-flex items-center gap-2 px-5 xs:px-6 sm:px-7 py-3 xs:py-3.5 sm:py-4 text-[14px] xs:text-[15px] font-semibold rounded-full bg-[hsl(var(--foreground))] text-[hsl(var(--background))] hover:opacity-90 active:scale-[0.98] transition-all duration-200 w-full xs:w-auto justify-center">
              Start a project
              <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </Link>
          <Link href="/work" className="w-full xs:w-auto">
            <span className="group inline-flex items-center justify-center gap-2 px-5 xs:px-6 sm:px-7 py-3 xs:py-3.5 sm:py-4 text-[14px] xs:text-[15px] font-semibold rounded-full border border-[hsl(var(--border))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--pill))] active:scale-[0.98] transition-all duration-200 w-full xs:w-auto">
              View Work
              <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
