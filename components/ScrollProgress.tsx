"use client"

import { motion, useScroll, useSpring } from "framer-motion"

/** Thin top scroll-progress bar — subtle award-level polish, site-wide. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  return (
    <motion.div
      style={{ scaleX }}
      aria-hidden
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[9998] bg-gradient-to-r from-[hsl(var(--accent-orange))] via-[hsl(var(--accent-orange))] to-[hsl(var(--foreground))]"
    />
  )
}
