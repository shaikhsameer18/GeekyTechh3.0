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
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 font-poppins text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Skills
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="w-20 h-20 mb-4 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <skill.icon size={40} color={skill.color} />
              </div>
              <p className="text-center font-semibold text-gray-800 dark:text-gray-200">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

