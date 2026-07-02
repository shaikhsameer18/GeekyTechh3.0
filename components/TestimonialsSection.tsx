"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Quote } from "lucide-react"
import { testimonials } from "@/lib/site"
import SectionWatermark from "./SectionWatermark"

export default function TestimonialsSection() {
  if (testimonials.length === 0) return null

  return (
    <section id="testimonials" className="relative py-16 xs:py-20 sm:py-24 md:py-28 lg:py-32 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 overflow-hidden border-t border-[hsl(var(--border))] bg-[hsl(var(--muted))]/25">
      <SectionWatermark position="top-left" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 xs:mb-14 sm:mb-16 text-center"
        >
          <p className="text-[11px] xs:text-[12px] sm:text-[13px] font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-[0.15em] xs:tracking-[0.2em] mb-3 xs:mb-4">What Clients Say</p>
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] text-[hsl(var(--foreground))] font-heading">
            Trusted by the people we build for
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative flex flex-col p-7 xs:p-8 sm:p-10 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]"
            >
              <Quote className="w-8 h-8 text-[hsl(var(--accent-orange))]/30 mb-5" strokeWidth={1.5} />
              <blockquote className="text-[15px] xs:text-base sm:text-lg font-medium text-[hsl(var(--foreground))]/90 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-[hsl(var(--border))]">
                <div className="text-[15px] font-bold font-heading text-[hsl(var(--foreground))]">{t.name}</div>
                {t.href ? (
                  <Link href={t.href} target="_blank" rel="noopener noreferrer" className="text-[13px] font-semibold text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--accent-orange))] transition-colors">
                    {t.role}
                  </Link>
                ) : (
                  <div className="text-[13px] font-semibold text-[hsl(var(--muted-foreground))]">{t.role}</div>
                )}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
