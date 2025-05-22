"use client";

import { motion } from "framer-motion";
import { Palette, Bot, Briefcase, Globe, Server, Cpu } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites tailored to your needs",
  },
  {
    icon: Bot,
    title: "AI/ML Solutions",
    description: "Intelligent applications powered by AI and ML",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Creative and visually appealing graphics for branding",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Robust and scalable server-side solutions",
  },
  {
    icon: Cpu,
    title: "IoT Solutions",
    description: "Innovative IoT projects for your business",
  },
  {
    icon: Briefcase,
    title: "IT Consulting",
    description: "Expert advice for your tech decisions",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 text-transparent bg-clip-text mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 mx-auto rounded-full mb-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-purple-50 dark:bg-gray-700">
                <service.icon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                {service.title}
              </h3>
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
