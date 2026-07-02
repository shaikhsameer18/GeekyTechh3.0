"use client"

import { useEffect, useRef } from "react"

/**
 * Signature 3D hero backdrop — an interactive rotating particle globe with
 * depth-shaded constellation links. Real 3D projection math on a 2D canvas, so
 * there are NO heavy dependencies (no three.js): fast, mobile-safe, Lighthouse-green.
 *
 * - Auto-rotates; drifts toward the pointer for interactivity.
 * - Adapts color to light/dark theme each frame.
 * - Respects prefers-reduced-motion (renders one static frame).
 * - Caps particle count on small screens for performance.
 */
export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const isMobile = window.innerWidth < 640

    // --- Build points on a sphere (Fibonacci distribution) ---
    const COUNT = isMobile ? 120 : 260
    const points: { x: number; y: number; z: number }[] = []
    const golden = Math.PI * (3 - Math.sqrt(5))
    for (let i = 0; i < COUNT; i++) {
      const y = 1 - (i / (COUNT - 1)) * 2
      const r = Math.sqrt(1 - y * y)
      const theta = golden * i
      points.push({ x: Math.cos(theta) * r, y, z: Math.sin(theta) * r })
    }

    // --- Precompute near-neighbour links once (depth-shaded constellation) ---
    const links: [number, number][] = []
    const LINK_DIST = 0.42
    for (let i = 0; i < COUNT; i++) {
      for (let j = i + 1; j < COUNT; j++) {
        const dx = points[i].x - points[j].x
        const dy = points[i].y - points[j].y
        const dz = points[i].z - points[j].z
        if (dx * dx + dy * dy + dz * dz < LINK_DIST * LINK_DIST) links.push([i, j])
      }
    }

    let width = 0
    let height = 0
    let radius = 0
    let dpr = 1

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      radius = Math.min(width, height) * (isMobile ? 0.42 : 0.36)
    }
    resize()
    window.addEventListener("resize", resize)

    // Pointer drives ambient drift; click-drag directly spins the globe.
    const pointer = { x: 0, y: 0 }
    let dragging = false
    let last = { x: 0, y: 0 }
    let velX = 0
    let velY = 0

    const onMove = (e: MouseEvent) => {
      pointer.x = (e.clientX / window.innerWidth - 0.5) * 2
      pointer.y = (e.clientY / window.innerHeight - 0.5) * 2
      if (dragging) {
        const dx = e.clientX - last.x
        const dy = e.clientY - last.y
        velY = dx * 0.006
        velX = dy * 0.006
        last = { x: e.clientX, y: e.clientY }
      }
    }
    const onDown = (e: MouseEvent) => {
      // Don't hijack clicks on buttons / links / form fields.
      if ((e.target as HTMLElement)?.closest("a,button,input,textarea,select")) return
      const rect = canvas.getBoundingClientRect()
      if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) return
      dragging = true
      last = { x: e.clientX, y: e.clientY }
    }
    const onUp = () => {
      dragging = false
    }
    window.addEventListener("mousemove", onMove)
    window.addEventListener("mousedown", onDown)
    window.addEventListener("mouseup", onUp)

    let angleX = 0.2
    let angleY = 0
    let raf = 0

    const render = () => {
      const dark = document.documentElement.classList.contains("dark")
      const baseRGB = dark ? "245,245,245" : "24,24,27"
      const accentRGB = "249,115,22" // orange accent

      ctx.clearRect(0, 0, width, height)
      const cx = width / 2
      const cy = height / 2
      const fov = radius * 2.4

      const sinX = Math.sin(angleX)
      const cosX = Math.cos(angleX)
      const sinY = Math.sin(angleY)
      const cosY = Math.cos(angleY)

      // project all points
      const proj = points.map((p) => {
        // rotate Y then X
        const x = p.x * cosY - p.z * sinY
        let z = p.x * sinY + p.z * cosY
        const y = p.y * cosX - z * sinX
        z = p.y * sinX + z * cosX
        const scale = fov / (fov + z * radius)
        return { sx: cx + x * radius * scale, sy: cy + y * radius * scale, z, scale }
      })

      // links (depth-faded)
      for (const [a, b] of links) {
        const pa = proj[a]
        const pb = proj[b]
        const depth = (pa.z + pb.z) / 2 // -1 (near) .. 1 (far)
        const alpha = (1 - (depth + 1) / 2) * (dark ? 0.22 : 0.16)
        if (alpha <= 0.01) continue
        ctx.strokeStyle = `rgba(${baseRGB},${alpha})`
        ctx.lineWidth = 0.6
        ctx.beginPath()
        ctx.moveTo(pa.sx, pa.sy)
        ctx.lineTo(pb.sx, pb.sy)
        ctx.stroke()
      }

      // points
      for (let i = 0; i < proj.length; i++) {
        const p = proj[i]
        const near = 1 - (p.z + 1) / 2 // 1 near, 0 far
        const size = (near * 1.8 + 0.5) * p.scale
        const alpha = 0.25 + near * 0.6
        // a few accent nodes for life
        const accent = i % 11 === 0
        ctx.fillStyle = accent ? `rgba(${accentRGB},${alpha})` : `rgba(${baseRGB},${alpha})`
        ctx.beginPath()
        ctx.arc(p.sx, p.sy, Math.max(0.4, size), 0, Math.PI * 2)
        ctx.fill()
      }

      if (!reduced) {
        if (dragging) {
          angleY += velY
          angleX += velX
        } else {
          // inertia after release, decaying back to a gentle ambient spin
          velY += (0.0016 + pointer.x * 0.0025 - velY) * 0.04
          velX += (pointer.y * 0.0010 - velX) * 0.04
          angleY += velY
          angleX += velX
          angleX += (0.2 - angleX) * 0.002 // settle vertical tilt
        }
        raf = requestAnimationFrame(render)
      }
    }

    render()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mousedown", onDown)
      window.removeEventListener("mouseup", onUp)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 h-full w-full pointer-events-none"
    />
  )
}
