import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Reveal from "@/components/Reveal"
import { site, values, metrics } from "@/lib/site"

export const metadata: Metadata = {
  title: "About — Web & Product Development in Mumbai",
  description:
    "GeekyTechh is a web and product development company in Mumbai building fast, conversion-focused websites and web apps that ship to production. Learn how we work and what we value.",
  alternates: { canonical: `${site.url}/about` },
}

export default function AboutPage() {
  return (
      <main id="main-content" className="min-h-screen pt-28 xs:pt-32 sm:pt-36 pb-16 xs:pb-20 sm:pb-24 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-[13px] font-semibold text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back home
          </Link>

          <Reveal className="mb-14 xs:mb-16 sm:mb-20">
            <p className="text-[11px] xs:text-[12px] sm:text-[13px] font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-[0.2em] mb-3">About GeekyTechh</p>
            <h1 className="text-4xl xs:text-5xl sm:text-6xl font-bold tracking-[-0.02em] text-[hsl(var(--foreground))] font-heading mb-6 leading-[1.05]">
              We build software that earns its keep.
            </h1>
            <p className="text-[15px] xs:text-base sm:text-lg font-medium text-[hsl(var(--muted-foreground))] leading-relaxed">
              GeekyTechh is a web and product development company based in {site.location}. We design and build fast,
              conversion-focused websites and web apps for founders and growing businesses — and we ship them to
              production, not just to a prototype.
            </p>
          </Reveal>

          {/* Metrics */}
          <Reveal className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-10 border-y border-[hsl(var(--border))] mb-14 xs:mb-16 sm:mb-20">
            {metrics.map((m) => (
              <div key={m.label}>
                <div className="text-3xl xs:text-4xl font-bold font-heading tracking-[-0.02em] text-[hsl(var(--foreground))]">{m.value}</div>
                <div className="mt-1 text-[11px] xs:text-[12px] font-semibold uppercase tracking-wider text-[hsl(var(--muted-foreground))]">{m.label}</div>
              </div>
            ))}
          </Reveal>

          {/* Story */}
          <Reveal className="mb-14 xs:mb-16 sm:mb-20 max-w-2xl">
            <h2 className="text-2xl xs:text-3xl font-bold font-heading text-[hsl(var(--foreground))] mb-5">How we got here</h2>
            <div className="space-y-4 text-[15px] xs:text-base font-medium text-[hsl(var(--muted-foreground))] leading-relaxed">
              <p>
                GeekyTechh started with a simple frustration: too many businesses were paying for slow, generic websites
                that looked fine in a demo and fell apart in the real world — slow on mobile, invisible on search, and
                impossible to update.
              </p>
              <p>
                So we do the opposite. Every project is built on a modern stack (Next.js, React), engineered for speed and
                SEO from day one, and designed around the one thing that matters: turning visitors into customers. You
                deal directly with the people building your product, and everything we take on gets finished and deployed.
              </p>
            </div>
          </Reveal>

          {/* Values */}
          <Reveal className="mb-14 xs:mb-16 sm:mb-20">
            <h2 className="text-2xl xs:text-3xl font-bold font-heading text-[hsl(var(--foreground))] mb-8">What we value</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-5">
              {values.map((v) => (
                <div key={v.title} className="p-6 xs:p-7 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]">
                  <h3 className="text-lg xs:text-xl font-bold font-heading text-[hsl(var(--foreground))] mb-2">{v.title}</h3>
                  <p className="text-[14px] font-medium text-[hsl(var(--muted-foreground))] leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal>
            <div className="p-8 xs:p-10 sm:p-14 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--muted))]/40 text-center">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold font-heading text-[hsl(var(--foreground))] mb-3">Have a project in mind?</h2>
              <p className="text-[14px] xs:text-[15px] font-medium text-[hsl(var(--muted-foreground))] mb-6 max-w-md mx-auto">
                We&apos;d love to hear about it. Reply within 24 hours, guaranteed.
              </p>
              <Link href="/#contact" className="inline-flex items-center gap-2 px-6 py-3.5 text-[15px] font-semibold rounded-full bg-[hsl(var(--foreground))] text-[hsl(var(--background))] hover:opacity-90 transition-opacity">
                Get in touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </main>
  )
}
