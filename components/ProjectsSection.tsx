'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import alvira from "@/app/assets/projectimg/alv.png"
import codecollab from "@/app/assets/projectimg/codecollab.png"
import aliport from "@/app/assets/projectimg/aliportfolio.png"
import eventmind from "@/app/assets/projectimg/event.png"

const projects = [
  {
    title: 'Alvira Bags',
    description: 'An e-commerce platform for a luxury bag brand, offering advanced filtering for a seamless shopping experience.',
    image: alvira,
    link: 'https://alvirabag.vercel.app/'
  },
  {
    title: 'Event Mind',
    description: 'A productivity app to help organize events, manage tasks, and collaborate in real-time with calendar and reminder tools.',
    image: eventmind,
    link: 'https://event-mind.vercel.app/'
  },
  {
    title: 'CodeCollab',
    description: 'An AI-powered collaborative code editor that allows real-time code sharing and intelligent code completion.',
    image: codecollab,
    link: 'https://codecollab-sand.vercel.app/'
  },
  {
    title: 'Portfolio',
    description: 'A responsive portfolio website showcasing skills and projects with a clean design and smooth animations.',
    image: aliport,
    link: 'https://mohd-ali.vercel.app/'
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 font-poppins"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 font-poppins">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-flex items-center bg-purple-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-purple-700 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mr-2">View Live</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
