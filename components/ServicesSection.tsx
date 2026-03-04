"use client"

import { motion, useInView } from "framer-motion"
import { Globe, Bot, Palette, Server, Shield, Briefcase } from "lucide-react"
import { useRef } from "react"
import SectionWatermark from "./SectionWatermark"

const services = [
  { icon: Globe, title: "Web Development", desc: "Modern, responsive websites built with cutting-edge technologies." },
  { icon: Bot, title: "AI/ML Solutions", desc: "Intelligent systems and machine learning tailored to your needs." },
  { icon: Palette, title: "UI/UX Design", desc: "Intuitive and visually compelling experiences that drive engagement." },
  { icon: Server, title: "Backend Development", desc: "Scalable and secure server-side architectures." },
  { icon: Shield, title: "Network & Cybersecurity", desc: "Secure network infrastructure, firewall setup, and comprehensive cybersecurity solutions." },
  { icon: Briefcase, title: "IT Consulting", desc: "Strategic technology guidance to accelerate growth." },
]

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })
  return (
    <motion.div ref={ref} className={className} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}>
      {children}
    </motion.div>
  )
}

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-16 xs:py-20 sm:py-24 md:py-28 lg:py-32 xl:py-36 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 overflow-hidden border-t border-[hsl(var(--border))]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--muted))/0.15_100%)]" />

      <SectionWatermark position="top-left" />

      <div className="relative max-w-6xl mx-auto">
        <FadeUp className="mb-12 xs:mb-14 sm:mb-16 md:mb-20">
          <p className="text-[11px] xs:text-[12px] sm:text-[13px] font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-[0.15em] xs:tracking-[0.2em] mb-3 xs:mb-4">What We Do</p>
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] text-[hsl(var(--foreground))] font-heading">
            Services
          </h2>
          <p className="mt-3 xs:mt-4 text-[14px] xs:text-[15px] sm:text-base font-medium text-[hsl(var(--muted-foreground))] max-w-xl">
            End-to-end solutions tailored to transform your digital presence.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 lg:gap-8 items-stretch">
          {services.map((s, i) => (
            <FadeUp key={i} delay={i * 0.06} className="flex h-full">
              <div className="group flex flex-col w-full p-5 xs:p-6 sm:p-7 md:p-8 lg:p-10 rounded-xl xs:rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[hsl(var(--foreground))]/15 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-300">
                <div className="inline-flex p-3 xs:p-4 rounded-xl xs:rounded-2xl bg-[hsl(var(--pill))] group-hover:bg-[hsl(var(--muted))] mb-4 xs:mb-5 sm:mb-6 transition-colors duration-300 w-fit">
                  <s.icon className="w-6 xs:w-7 sm:w-8 h-6 xs:h-7 sm:h-8 text-[hsl(var(--foreground))]" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg xs:text-xl font-bold text-[hsl(var(--foreground))] mb-2 xs:mb-3 font-heading">
                  {s.title}
                </h3>
                <p className="text-[13px] xs:text-[14px] sm:text-[15px] font-medium text-[hsl(var(--muted-foreground))] leading-relaxed flex-1">
                  {s.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
