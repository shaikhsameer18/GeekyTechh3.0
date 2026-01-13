"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import codecollab from "@/app/assets/projectimg/codecollab.png"
import aliport from "@/app/assets/projectimg/aliportfolio.png"
import eventmind from "@/app/assets/projectimg/event.png"
import searchbag from "@/app/assets/projectimg/search.png"
import portfolio from "@/app/assets/projectimg/portfolio.png"
import reflectblog from "@/app/assets/projectimg/reflectblog.png"
import reflectcode from "@/app/assets/projectimg/reflectcode.png"
import alvira from "@/app/assets/projectimg/alv.png"

const projects = [
  {
    title: "Event Mind",
    category: "Productivity",
    description: "Event management platform with real-time collaboration.",
    image: eventmind,
    link: "https://event-mind.vercel.app/",
  },
  {
    title: "CodeCollab",
    category: "Developer Tools",
    description: "AI-powered collaborative code editor with real-time sharing.",
    image: codecollab,
    link: "https://codecollabfinal.vercel.app/",
  },
  {
    title: "Search Bags",
    category: "E-Commerce",
    description: "Luxury bag e-commerce platform with advanced filtering.",
    image: searchbag,
    link: "https://www.searchbag.in/",
  },
  {
    title: "Ali Portfolio",
    category: "Personal",
    description: "Responsive portfolio with clean design and smooth animations.",
    image: aliport,
    link: "https://mohd-ali.vercel.app/",
  },
  {
    title: "Developer Portfolio",
    category: "Personal",
    description: "Modern portfolio showcasing development work and skills.",
    image: portfolio,
    link: "#",
  },
  {
    title: "Reflect Blog",
    category: "Content",
    description: "Minimal blogging platform with markdown support.",
    image: reflectblog,
    link: "#",
  },
  {
    title: "Reflect Code",
    category: "Developer Tools",
    description: "Code snippet manager with syntax highlighting.",
    image: reflectcode,
    link: "#",
  },
  {
    title: "Alvira Bags",
    category: "E-Commerce",
    description: "Premium bag collection showcase with wholesale pricing.",
    image: alvira,
    link: "#",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen flex items-center bg-gray-50 dark:bg-gray-950 py-20 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs tracking-[0.3em] text-gray-500 dark:text-gray-400 uppercase font-medium mb-4">
            Selected Work
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-semibold text-black dark:text-white tracking-tight">
            Projects
          </h2>
        </motion.div>

        <div className="space-y-8">
          {/* PATTERN A: Left Vertical + Right 2 Stacked + Bottom Horizontal */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-[240px_240px_280px] gap-4 sm:gap-6">
            {/* Left: Vertical Card - Spans 2 rows */}
            <motion.a
              href={projects[0].link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-black rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 md:row-span-2 h-[500px] md:h-auto mb-6 md:mb-0"
            >
              <div className="relative h-1/2 md:h-3/5 bg-gray-100 dark:bg-gray-900">
                <Image
                  src={projects[0].image}
                  alt={projects[0].title}
                  fill
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6 h-1/2 md:h-2/5 flex flex-col">
                <div className="space-y-2 mb-4">
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">{projects[0].category}</p>
                  <h3 className="text-xl font-heading font-semibold text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">{projects[0].title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">{projects[0].description}</p>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-black dark:text-white mt-auto">
                  <span>View Project</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.a>

            {/* Right: Stacked Card 1 */}
            <motion.a
              href={projects[1].link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-black rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-[500px] md:h-auto mb-6 md:mb-0"
            >
              <div className="relative h-1/2 md:h-2/3 bg-gray-100 dark:bg-gray-900">
                <Image
                  src={projects[1].image}
                  alt={projects[1].title}
                  fill
                  className="object-contain p-3 group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-5 h-1/2 md:h-1/3 flex flex-col">
                <div className="space-y-2 mb-4">
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">{projects[1].category}</p>
                  <h3 className="text-base font-heading font-semibold text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">{projects[1].title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">{projects[1].description}</p>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-black dark:text-white mt-auto">
                  <span>View Project</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.a>

            {/* Right: Stacked Card 2 */}
            <motion.a
              href={projects[2].link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-black rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-[500px] md:h-auto mb-6 md:mb-0"
            >
              <div className="relative h-1/2 md:h-2/3 bg-gray-100 dark:bg-gray-900">
                <Image
                  src={projects[2].image}
                  alt={projects[2].title}
                  fill
                  className="object-contain p-3 group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-5 h-1/2 md:h-1/3 flex flex-col">
                <div className="space-y-2 mb-4">
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">{projects[2].category}</p>
                  <h3 className="text-base font-heading font-semibold text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">{projects[2].title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">{projects[2].description}</p>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-black dark:text-white mt-auto">
                  <span>View Project</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.a>

            {/* Bottom: Horizontal Card - Spans 2 columns */}
            <motion.a
              href={projects[3].link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-black rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 md:col-span-2 h-[500px] md:h-auto mb-6 md:mb-0"
            >
              <div className="flex flex-col sm:flex-row h-full">
                <div className="relative sm:w-1/2 h-1/2 sm:h-full bg-gray-100 dark:bg-gray-900">
                  <Image
                    src={projects[3].image}
                    alt={projects[3].title}
                    fill
                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 sm:w-1/2 flex flex-col">
                  <div className="space-y-2 mb-4">
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase mb-2 tracking-wider">{projects[3].category}</p>
                    <h3 className="text-xl font-heading font-semibold text-black dark:text-white mb-3 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">{projects[3].title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">{projects[3].description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-black dark:text-white mt-auto">
                    <span>View Project</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.a>
          </div>

          {/* PATTERN B: MIRRORED - Right Vertical + Left 2 Stacked + Bottom Horizontal */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-[240px_240px_280px] gap-4 sm:gap-6">
            {/* Right: Vertical Card - Spans 2 rows (placed second in source for mobile, positioned right on desktop) */}
            <motion.a
              href={projects[4].link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-black rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 md:row-span-2 md:col-start-2 md:row-start-1 h-[500px] md:h-auto mb-6 md:mb-0"
            >
              <div className="relative h-1/2 md:h-3/5 bg-gray-100 dark:bg-gray-900">
                <Image
                  src={projects[4].image}
                  alt={projects[4].title}
                  fill
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6 h-1/2 md:h-2/5 flex flex-col">
                <div className="space-y-2 mb-4">
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">{projects[4].category}</p>
                  <h3 className="text-xl font-heading font-semibold text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">{projects[4].title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">{projects[4].description}</p>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-black dark:text-white mt-auto">
                  <span>View Project</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.a>

            {/* Left: Stacked Card 1 */}
            <motion.a
              href={projects[5].link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-black rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 md:col-start-1 md:row-start-1 h-[500px] md:h-auto mb-6 md:mb-0"
            >
              <div className="relative h-1/2 md:h-2/3 bg-gray-100 dark:bg-gray-900">
                <Image
                  src={projects[5].image}
                  alt={projects[5].title}
                  fill
                  className="object-contain p-3 group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-5 h-1/2 md:h-1/3 flex flex-col">
                <div className="space-y-2 mb-4">
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">{projects[5].category}</p>
                  <h3 className="text-base font-heading font-semibold text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">{projects[5].title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">{projects[5].description}</p>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-black dark:text-white mt-auto">
                  <span>View Project</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.a>

            {/* Left: Stacked Card 2 */}
            <motion.a
              href={projects[6].link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-black rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 md:col-start-1 md:row-start-2 h-[500px] md:h-auto mb-6 md:mb-0"
            >
              <div className="relative h-1/2 md:h-2/3 bg-gray-100 dark:bg-gray-900">
                <Image
                  src={projects[6].image}
                  alt={projects[6].title}
                  fill
                  className="object-contain p-3 group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-5 h-1/2 md:h-1/3 flex flex-col">
                <div className="space-y-2 mb-4">
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">{projects[6].category}</p>
                  <h3 className="text-base font-heading font-semibold text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">{projects[6].title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">{projects[6].description}</p>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-black dark:text-white mt-auto">
                  <span>View Project</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.a>

            {/* Bottom: Horizontal Card - Spans 2 columns */}
            <motion.a
              href={projects[7].link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-black rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 md:col-span-2 md:row-start-3 h-[500px] md:h-auto mb-6 md:mb-0"
            >
              <div className="flex flex-col sm:flex-row h-full">
                <div className="relative sm:w-1/2 h-1/2 sm:h-full bg-gray-100 dark:bg-gray-900">
                  <Image
                    src={projects[7].image}
                    alt={projects[7].title}
                    fill
                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 sm:w-1/2 flex flex-col">
                  <div className="space-y-2 mb-4">
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase mb-2 tracking-wider">{projects[7].category}</p>
                    <h3 className="text-xl font-heading font-semibold text-black dark:text-white mb-3 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">{projects[7].title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">{projects[7].description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-black dark:text-white mt-auto">
                    <span>View Project</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
