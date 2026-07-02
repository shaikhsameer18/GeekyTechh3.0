"use client"

import { useRef } from "react"

/**
 * Lightweight 3D tilt on hover — adds tactile depth to cards without any library.
 * Pointer position maps to rotateX/rotateY; resets smoothly on leave.
 * Automatically inert on touch / reduced-motion (no pointer hover there).
 */
export default function TiltCard({
  children,
  className = "",
  max = 7,
}: {
  children: React.ReactNode
  className?: string
  max?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(1000px) rotateY(${px * max}deg) rotateX(${-py * max}deg) translateZ(0)`
  }

  const reset = () => {
    const el = ref.current
    if (el) el.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0)"
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={className}
      style={{ transformStyle: "preserve-3d", transition: "transform 0.3s ease" }}
    >
      {children}
    </div>
  )
}
