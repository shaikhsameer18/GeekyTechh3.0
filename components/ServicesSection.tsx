"use client";

import { motion } from "framer-motion";
import { Palette, Bot, Briefcase, Globe, Server, Cpu } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Creating modern, responsive websites with cutting-edge technologies",
  },
  {
    icon: Bot,
    title: "AI/ML Solutions",
    description: "Implementing intelligent systems and machine learning algorithms",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Crafting intuitive and visually appealing user experiences",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Building scalable and secure server-side architectures",
  },
  {
    icon: Cpu,
    title: "IoT Solutions",
    description: "Developing connected device solutions for the modern world",
  },
  {
    icon: Briefcase,
    title: "IT Consulting",
    description: "Strategic technology guidance for business growth",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <div className="h-px w-24 bg-purple-600 dark:bg-purple-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative p-8 border border-gray-200 dark:border-gray-800 rounded-lg transition-all duration-300 hover:border-purple-600 dark:hover:border-purple-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-2 rounded-lg bg-purple-50 dark:bg-gray-800">
                  <service.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
