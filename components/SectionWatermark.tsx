"use client"

import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import blackLogo from "@/app/assets/blacklogo.png"
import whiteLogo from "@/app/assets/whitelogo.png"

type Position = "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center" | "center-right"

const positions: Record<Position, string> = {
  "top-left": "top-24 left-12 -rotate-6",
  "top-right": "top-20 right-12 rotate-6",
  "bottom-left": "bottom-24 left-12 -rotate-6",
  "bottom-right": "bottom-20 right-12 rotate-6",
  "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-3",
  "center-right": "top-1/2 right-12 -translate-y-1/2 rotate-3",
}

export default function SectionWatermark({ position = "bottom-right" }: { position?: Position }) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div
      className={`absolute pointer-events-none select-none ${positions[position]} opacity-[0.015] dark:opacity-[0.02]`}
      aria-hidden
    >
      <Image
        src={theme === "dark" ? whiteLogo : blackLogo}
        alt=""
        width={280}
        height={112}
        className="w-24 xs:w-28 sm:w-36 md:w-44 lg:w-52 h-auto object-contain"
      />
    </div>
  )
}
