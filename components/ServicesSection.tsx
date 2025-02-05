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
    title: "AI/ML-based Application",
    description: "Intelligent applications powered by AI and ML",
  },
  {
    icon: Palette,
    title: "Graphic Designing",
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
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 font-poppins text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <service.icon className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 font-poppins text-gray-800 dark:text-gray-200">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
