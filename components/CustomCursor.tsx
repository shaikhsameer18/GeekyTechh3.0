"use client"

import { useEffect, useRef } from "react"

/**
 * Awwwards-style custom cursor: an instant dot + a trailing ring that grows on
 * interactive elements. Desktop only (pointer:fine) — never shown on touch.
 * Uses mix-blend-difference so a single white cursor stays visible on any
 * background or theme, with no per-theme logic.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    document.body.classList.add("cursor-none")

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx
    let ry = my
    let raf = 0

    const move = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`
    }
    const over = (e: MouseEvent) => {
      const t = (e.target as HTMLElement)?.closest("a,button,input,textarea,select,[data-cursor='hover']")
      ring.classList.toggle("cursor-ring--hover", !!t)
    }
    const leave = () => {
      dot.style.opacity = "0"
      ring.style.opacity = "0"
    }
    const enter = () => {
      dot.style.opacity = "1"
      ring.style.opacity = "1"
    }
    const loop = () => {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener("mousemove", move)
    window.addEventListener("mouseover", over)
    document.addEventListener("mouseleave", leave)
    document.addEventListener("mouseenter", enter)
    loop()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mouseover", over)
      document.removeEventListener("mouseleave", leave)
      document.removeEventListener("mouseenter", enter)
      document.body.classList.remove("cursor-none")
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden />
      <div ref={dotRef} className="cursor-dot" aria-hidden />
    </>
  )
}
