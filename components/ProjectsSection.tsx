"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import codecollab from "@/app/assets/projectimg/codecollab.png"
import aliport from "@/app/assets/projectimg/aliportfolio.png"
import eventmind from "@/app/assets/projectimg/event.png"
import searchbag from "@/app/assets/projectimg/search.png"
import lainabag from "@/app/assets/projectimg/laina.png"
import alvira from "@/app/assets/projectimg/alvira.png"

const projects = [
  {
    title: "Event Mind",
    category: "Productivity",
    description: "Event management platform with real-time collaboration.",
    image: eventmind,
    link: "https://event-mind.vercel.app/"
  },
  {
    title: "Laina Bags",
    category: "E-Commerce",
    description: "Premium fashion bags e-commerce platform.",
    image: lainabag,
    link: "https://www.lainabags.com/"
  },
  {
    title: "CodeCollab",
    category: "Developer Tools",
    description: "AI-powered collaborative code editor.",
    image: codecollab,
    link: "https://codecollabfinal.vercel.app/"
  },
  {
    title: "Search Bags",
    category: "E-Commerce",
    description: "Luxury bag e-commerce platform.",
    image: searchbag,
    link: "https://www.searchbag.in/"
  },
  {
    title: "Ali Portfolio",
    category: "Personal",
    description: "Responsive portfolio with clean design.",
    image: aliport,
    link: "https://mohd-ali.vercel.app/"
  },

  {
    title: "Alvira Bags",
    category: "E-Commerce",
    description: "Premium bag collection website.",
    image: alvira,
    link: "https://alvirabag.vercel.app/"
  },
];

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
          className="mb-12 xs:mb-14 sm:mb-16 md:mb-20"
        >
          <p className="text-[11px] xs:text-[12px] sm:text-[13px] font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-[0.15em] xs:tracking-[0.2em] mb-2 xs:mb-3">Selected Work</p>
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] text-[hsl(var(--foreground))] font-heading mb-3 xs:mb-4">
            Projects
          </h2>
          <p className="text-[13px] xs:text-[14px] sm:text-base font-medium text-[hsl(var(--muted-foreground))] max-w-xl">
            A selection of our recent work—from e-commerce to developer tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group block rounded-xl xs:rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] overflow-hidden hover:border-[hsl(var(--foreground))]/15 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] transition-all duration-300"
            >
              <div className="relative aspect-[16/10] bg-[hsl(var(--pill))] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-contain p-4 xs:p-5 sm:p-6 md:p-8 group-hover:scale-[1.04] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--card))]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[hsl(var(--foreground))] text-[hsl(var(--background))] text-[14px] font-semibold">
                    View Project
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
                  {p.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
