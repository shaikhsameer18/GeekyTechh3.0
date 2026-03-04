"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const slideInVariants = {
  left: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  center: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
}

const defaultTransition = {
  duration: 0.85,
  ease: [0.25, 0.46, 0.45, 0.94] as const, // ease-out curve
}

interface ScrollRevealProps {
  children: React.ReactNode
  direction?: "left" | "right" | "center"
  delay?: number
  className?: string
}

/**
 * Wraps content and animates it when it enters the viewport.
 * - Left: slides in from the left toward center
 * - Right: slides in from the right toward center
 * - Center: subtle fade + slide up
 * Triggers once when visible. Optimized with useInView.
 */
export function ScrollReveal({
  children,
  direction = "center",
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px", amount: 0.15 })

  const variant = slideInVariants[direction]

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variant}
      transition={{
        ...defaultTransition,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
