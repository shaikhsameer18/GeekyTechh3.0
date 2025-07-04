"use client"

import { motion } from "framer-motion"
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaPhp, FaJava } from "react-icons/fa"
import {
  SiJavascript,
  SiTypescript,
  SiCss3,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiHtml5,
  SiGraphql,
  SiGoogleads,
  SiFirebase,
  SiTensorflow,
  SiScikitlearn,
  SiExpress,
} from "react-icons/si"

const skills = [
  // Frontend Technologies
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React.js", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },

  // Backend Technologies
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#000000" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },

  // Tools & Services
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "GraphQL", icon: SiGraphql, color: "#E535AB" },
  { name: "Google Ads", icon: SiGoogleads, color: "#F4B400" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },

  // Additional Technologies
  { name: "PHP", icon: FaPhp, color: "#777BB4" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "Python", icon: FaPython, color: "#3776AB" },

  // AI/ML Technologies
  { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
  { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Skills
          </h2>
          <div className="h-px w-24 bg-purple-600 dark:bg-purple-400 mx-auto"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 items-center max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="relative p-4 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="flex items-center space-x-3">
                  <skill.icon
                    size={32}
                    style={{ color: skill.color }}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 text-sm font-medium">
                    {skill.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

