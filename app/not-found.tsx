import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <main id="main-content" className="min-h-screen flex flex-col items-center justify-center text-center px-4 xs:px-5 sm:px-6 pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.15)_1px,transparent_1px)] bg-[size:56px_56px]" />

      <p className="text-[11px] xs:text-[12px] font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-[0.2em] mb-6">Error 404</p>
      <h1 className="text-6xl xs:text-7xl sm:text-8xl font-bold tracking-[-0.03em] font-heading text-[hsl(var(--foreground))] mb-5">
        <span className="hero-gradient-text">Lost the thread.</span>
      </h1>
      <p className="text-[14px] xs:text-[15px] sm:text-base font-medium text-[hsl(var(--muted-foreground))] max-w-md mb-10">
        This page doesn&apos;t exist — but plenty of our real, shipped work does. Let&apos;s get you back on track.
      </p>
      <div className="flex flex-col xs:flex-row items-center gap-3 xs:gap-4">
        <Link href="/" className="inline-flex items-center gap-2 px-6 py-3.5 text-[15px] font-semibold rounded-full bg-[hsl(var(--foreground))] text-[hsl(var(--background))] hover:opacity-90 transition-opacity w-full xs:w-auto justify-center">
          Back home
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="/work" className="inline-flex items-center gap-2 px-6 py-3.5 text-[15px] font-semibold rounded-full border border-[hsl(var(--border))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--pill))] transition-colors w-full xs:w-auto justify-center">
          View our work
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </main>
  )
}
