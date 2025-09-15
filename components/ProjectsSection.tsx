"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Code, Calendar, ShoppingBag, User } from "lucide-react"
import codecollab from "@/app/assets/projectimg/codecollab.png"
import aliport from "@/app/assets/projectimg/aliportfolio.png"
import eventmind from "@/app/assets/projectimg/event.png"
import searchbag from "@/app/assets/projectimg/search.png"

const projects = [
  {
    title: "Event Mind",
    description:
      "A productivity app to help organize events, manage tasks, and collaborate in real-time with calendar and reminder tools.",
    image: eventmind,
    link: "https://event-mind.vercel.app/",
    icon: Calendar,
    category: "Productivity",
    tech: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
    featured: true
  },
  {
    title: "CodeCollab",
    description:
      "An AI-powered collaborative code editor that allows real-time code sharing and intelligent code completion.",
    image: codecollab,
    link: "https://codecollabfinal.vercel.app/",
    icon: Code,
    category: "Developer Tools",
    tech: ["React", "Socket.io", "OpenAI", "Github API"],
    featured: true
  },
  {
    title: "Search Bags",
    description:
      "An e-commerce platform for a luxury bag brand, offering advanced filtering for a seamless shopping experience.",
    image: searchbag,
    link: "https://www.searchbag.in/",
    icon: ShoppingBag,
    category: "E-Commerce",
    tech: ["Next.js", "Ingest", "Tailwind CSS", "MongoDB"]
  },
  {
    title: "Portfolio",
    description:
      "A responsive portfolio website showcasing skills and projects with a clean design and smooth animations.",
    image: aliport,
    link: "https://mohd-ali.vercel.app/",
    icon: User,
    category: "Personal",
    tech: ["React", "Framer Motion", "Tailwind CSS"]
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-white dark:bg-gray-900 py-16">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20 dark:opacity-10">
        <div className="absolute top-0 left-1/4 w-48 h-48 bg-blue-200 dark:bg-blue-900 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-purple-200 dark:bg-purple-900 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden h-48">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 group-hover:opacity-70 transition-opacity"></div>

                {/* Category badge */}
                <div className="absolute top-3 left-3 z-20">
                  <div className="flex items-center gap-1.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
                    <project.icon className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                    <span className="font-medium text-gray-800 dark:text-gray-200">{project.category}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 flex-grow flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="mt-auto flex gap-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-3 py-1.5 rounded-md transition-all duration-300"
                  >
                    <span>View Live</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div className="absolute transform rotate-45 bg-gradient-to-r from-purple-600 to-blue-600 w-20 h-5 -top-2 right-0 opacity-80"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

