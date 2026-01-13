"use client"

import { motion } from "framer-motion"
import { Globe, Bot, Palette, Server, Cpu, Briefcase } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites built with cutting-edge technologies and best practices.",
  },
  {
    icon: Bot,
    title: "AI/ML Solutions",
    description: "Intelligent systems and machine learning algorithms tailored to your needs.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Intuitive and visually compelling user experiences that drive engagement.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Scalable and secure server-side architectures built for performance.",
  },
  {
    icon: Cpu,
    title: "IoT Solutions",
    description: "Connected device solutions for the modern, interconnected world.",
  },
  {
    icon: Briefcase,
    title: "IT Consulting",
    description: "Strategic technology guidance to accelerate your business growth.",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="min-h-screen flex items-center bg-gray-50 dark:bg-gray-950 py-20 pt-32">
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
            What We Do
          </p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-heading font-semibold text-black dark:text-white tracking-tight">
            Services
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-white dark:bg-black p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-500 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex p-3 bg-black/5 dark:bg-white/5 rounded-2xl group-hover:bg-black/10 dark:group-hover:bg-white/10 transition-colors duration-500">
                <service.icon className="w-8 h-8 text-black dark:text-white" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-heading font-semibold text-black dark:text-white mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-10 right-10 h-1 bg-black dark:bg-white rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
