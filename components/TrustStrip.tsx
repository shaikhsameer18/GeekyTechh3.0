"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { metrics, clientBrands } from "@/lib/site"

export default function TrustStrip() {
  return (
    <section aria-label="Proof and trusted brands" className="relative border-t border-[hsl(var(--border))] bg-[hsl(var(--muted))]/25">
      <div className="max-w-6xl mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 py-10 xs:py-12 sm:py-14">
        {/* Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 xs:gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="text-center sm:text-left"
            >
              <div className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-[-0.02em] font-heading text-[hsl(var(--foreground))]">
                {m.value}
              </div>
              <div className="mt-1 text-[12px] xs:text-[13px] font-semibold uppercase tracking-wider text-[hsl(var(--muted-foreground))]">
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trusted-by brand strip (real live clients) */}
        <div className="mt-10 xs:mt-12 pt-8 xs:pt-10 border-t border-[hsl(var(--border))]">
          <p className="text-center text-[11px] xs:text-[12px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))] mb-6">
            Trusted by real businesses in production
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:gap-x-10">
            {clientBrands.map((b, i) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg xs:text-xl sm:text-2xl font-bold tracking-tight font-heading text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors duration-200"
                >
                  {b.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
