"use client"

import { motion } from "framer-motion"
import { processSteps } from "@/lib/site"
import SectionWatermark from "./SectionWatermark"

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-16 xs:py-20 sm:py-24 md:py-28 lg:py-32 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 overflow-hidden border-t border-[hsl(var(--border))]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--muted))/0.15_100%)]" />
      <SectionWatermark position="center-right" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 xs:mb-14 sm:mb-16 md:mb-20"
        >
          <p className="text-[11px] xs:text-[12px] sm:text-[13px] font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-[0.15em] xs:tracking-[0.2em] mb-3 xs:mb-4">How We Work</p>
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] text-[hsl(var(--foreground))] font-heading">
            A clear path from idea to launch
          </h2>
          <p className="mt-3 xs:mt-4 text-[14px] xs:text-[15px] sm:text-base font-medium text-[hsl(var(--muted-foreground))] max-w-xl">
            One point of contact, no hand-offs. You always know what&apos;s happening and what&apos;s next.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-6">
          {processSteps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative p-6 xs:p-7 sm:p-8 rounded-xl xs:rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[hsl(var(--foreground))]/15 transition-colors duration-300"
            >
              <span className="text-4xl xs:text-5xl font-bold tracking-tighter font-heading text-[hsl(var(--accent-orange))]/25">
                {s.step}
              </span>
              <h3 className="mt-3 xs:mt-4 text-lg xs:text-xl font-bold text-[hsl(var(--foreground))] font-heading">
                {s.title}
              </h3>
              <p className="mt-2 text-[13px] xs:text-[14px] font-medium text-[hsl(var(--muted-foreground))] leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
