"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import { featuredCaseStudies } from "@/lib/projects"
import TiltCard from "./TiltCard"

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-16 xs:py-20 sm:py-24 md:py-28 lg:py-32 xl:py-36 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 overflow-hidden border-t border-[hsl(var(--border))]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,hsl(var(--muted))/0.1_50%,transparent_100%)]" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 xs:mb-14 sm:mb-16 md:mb-20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <p className="text-[11px] xs:text-[12px] sm:text-[13px] font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-[0.15em] xs:tracking-[0.2em] mb-2 xs:mb-3">Selected Work</p>
            <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] text-[hsl(var(--foreground))] font-heading mb-3 xs:mb-4">
              Featured Projects
            </h2>
            <p className="text-[13px] xs:text-[14px] sm:text-base font-medium text-[hsl(var(--muted-foreground))] max-w-xl">
              Real products, live in production — from e-commerce to developer tools.
            </p>
          </div>
          <Link href="/work" className="inline-flex items-center gap-2 text-[14px] font-semibold text-[hsl(var(--foreground))] hover:text-[hsl(var(--accent-orange))] transition-colors shrink-0">
            View all work
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10">
          {featuredCaseStudies.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <TiltCard
                max={5}
                className="group h-full rounded-xl xs:rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] overflow-hidden hover:border-[hsl(var(--foreground))]/15 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
              >
                <Link href={`/work/${p.slug}`} className="block h-full">
                  <div className="relative aspect-[16/10] bg-[hsl(var(--pill))] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-contain p-4 xs:p-5 sm:p-6 md:p-8 group-hover:scale-[1.04] transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--card))]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-6">
                      <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[hsl(var(--foreground))] text-[hsl(var(--background))] text-[14px] font-semibold" style={{ transform: "translateZ(30px)" }}>
                        View Case Study
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                  <div className="p-4 xs:p-5 sm:p-6 lg:p-8">
                    <span className="inline-block px-2.5 xs:px-3 py-1 xs:py-1.5 rounded-lg text-[10px] xs:text-[11px] font-semibold uppercase tracking-wider bg-[hsl(var(--pill))] text-[hsl(var(--muted-foreground))] mb-3 xs:mb-4">
                      {p.category}
                    </span>
                    <h3 className="text-lg xs:text-xl font-bold text-[hsl(var(--foreground))] mb-2 font-heading">
                      {p.title}
                    </h3>
                    <p className="text-[13px] xs:text-[14px] sm:text-[15px] font-medium text-[hsl(var(--muted-foreground))] line-clamp-2 leading-relaxed">
                      {p.summary}
                    </p>
                  </div>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
