"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import alvira from "@/app/assets/projectimg/alv.png"
import codecollab from "@/app/assets/projectimg/codecollab.png"
import aliport from "@/app/assets/projectimg/aliportfolio.png"
import eventmind from "@/app/assets/projectimg/event.png"

const projects = [

  {
    title: "Event Mind",
    description:
      "A productivity app to help organize events, manage tasks, and collaborate in real-time with calendar and reminder tools.",
    image: eventmind,
    link: "https://event-mind.vercel.app/",
  },
  {
    title: "CodeCollab",
    description:
      "An AI-powered collaborative code editor that allows real-time code sharing and intelligent code completion.",
    image: codecollab,
    link: "https://codecollabfinal.vercel.app/",
  },
  {
    title: "Alvira Bags",
    description:
      "An e-commerce platform for a luxury bag brand, offering advanced filtering for a seamless shopping experience.",
    image: alvira,
    link: "https://alvirabag.vercel.app/",
  },
  {
    title: "Portfolio",
    description:
      "A responsive portfolio website showcasing skills and projects with a clean design and smooth animations.",
    image: aliport,
    link: "https://mohd-ali.vercel.app/",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Projects
          </h2>
          <div className="h-px w-24 bg-purple-600 dark:bg-purple-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <motion.a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-sm bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-shadow duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

