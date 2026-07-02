"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, UserCheck, Zap, Rocket, MessageCircle } from "lucide-react"

/**
 * Photo-free trust block. We deliberately do NOT show a personal photo — the
 * brand is judged on shipped work + process, not on a face or perceived age.
 * This converts better than a founder headshot for cold B2B leads.
 */
const reasons = [
  {
    icon: UserCheck,
    title: "Senior hands on your build",
    desc: "You work with the people who actually design and write the code — no sales layer, no juniors learning on your budget.",
  },
  {
    icon: Rocket,
    title: "Shipped, not just designed",
    desc: "Every project in our work is live in production. We finish and deploy — not leave you with a pretty prototype.",
  },
  {
    icon: Zap,
    title: "Built to convert",
    desc: "Fast load times, clean SEO structure, and layouts designed around the action you want visitors to take.",
  },
  {
    icon: MessageCircle,
    title: "Clear, fast communication",
    desc: "A reply within 24 hours, a transparent process, and plain language — you always know what's happening and what's next.",
  },
]

export default function FounderSection() {
  return (
    <section id="about" className="relative py-16 xs:py-20 sm:py-24 md:py-28 lg:py-32 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 overflow-hidden border-t border-[hsl(var(--border))]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,hsl(var(--muted))/0.3,transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 xs:mb-14 sm:mb-16 max-w-2xl"
        >
          <p className="text-[11px] xs:text-[12px] sm:text-[13px] font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-[0.15em] xs:tracking-[0.2em] mb-3 xs:mb-4">Why GeekyTechh</p>
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] text-[hsl(var(--foreground))] font-heading">
            Why teams trust us with their build
          </h2>
          <p className="mt-3 xs:mt-4 text-[14px] xs:text-[15px] sm:text-base font-medium text-[hsl(var(--muted-foreground))]">
            We keep it simple: real work in production, direct communication, and websites engineered to earn their keep.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-5 sm:gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="flex gap-4 xs:gap-5 p-6 xs:p-7 sm:p-8 rounded-xl xs:rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[hsl(var(--foreground))]/15 transition-colors duration-300"
            >
              <div className="flex-shrink-0 inline-flex p-3 rounded-xl bg-[hsl(var(--pill))] h-fit">
                <r.icon className="w-5 h-5 xs:w-6 xs:h-6 text-[hsl(var(--foreground))]" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-lg xs:text-xl font-bold text-[hsl(var(--foreground))] mb-2 font-heading">{r.title}</h3>
                <p className="text-[13px] xs:text-[14px] sm:text-[15px] font-medium text-[hsl(var(--muted-foreground))] leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 xs:mt-12 flex justify-center"
        >
          <Link href="/#contact" className="inline-flex items-center gap-2 px-6 py-3.5 text-[15px] font-semibold rounded-full bg-[hsl(var(--foreground))] text-[hsl(var(--background))] hover:opacity-90 transition-opacity">
            Start your project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
