"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
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
  { name: "HTML", icon: SiHtml5, lightColor: "#E34F26", darkColor: "#E34F26" },
  { name: "CSS3", icon: SiCss3, lightColor: "#1572B6", darkColor: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, lightColor: "#000000", darkColor: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, lightColor: "#3178C6", darkColor: "#3178C6" },
  { name: "React.js", icon: FaReact, lightColor: "#61DAFB", darkColor: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, lightColor: "#000000", darkColor: "#FFFFFF" },
  { name: "Tailwind CSS", icon: SiTailwindcss, lightColor: "#06B6D4", darkColor: "#06B6D4" },
  { name: "Node.js", icon: FaNodeJs, lightColor: "#339933", darkColor: "#339933" },
  { name: "Express.js", icon: SiExpress, lightColor: "#000000", darkColor: "#FFFFFF" },
  { name: "MongoDB", icon: SiMongodb, lightColor: "#47A248", darkColor: "#47A248" },
  { name: "Docker", icon: FaDocker, lightColor: "#2496ED", darkColor: "#2496ED" },
  { name: "AWS", icon: FaAws, lightColor: "#FF9900", darkColor: "#FF9900" },
  { name: "GraphQL", icon: SiGraphql, lightColor: "#E535AB", darkColor: "#E535AB" },
  { name: "Google Ads", icon: SiGoogleads, lightColor: "#F4B400", darkColor: "#F4B400" },
  { name: "Firebase", icon: SiFirebase, lightColor: "#FFCA28", darkColor: "#FFCA28" },
  { name: "PHP", icon: FaPhp, lightColor: "#777BB4", darkColor: "#777BB4" },
  { name: "Java", icon: FaJava, lightColor: "#007396", darkColor: "#007396" },
  { name: "Python", icon: FaPython, lightColor: "#3776AB", darkColor: "#3776AB" },
  { name: "TensorFlow", icon: SiTensorflow, lightColor: "#FF6F00", darkColor: "#FF6F00" },
  { name: "Scikit-learn", icon: SiScikitlearn, lightColor: "#F7931E", darkColor: "#F7931E" },
]

export default function SkillsSection() {
  const { theme } = useTheme()

  return (
    <section id="skills" className="min-h-screen flex items-center bg-white dark:bg-black py-20 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <p className="text-xs tracking-[0.3em] text-gray-500 dark:text-gray-400 uppercase font-medium mb-4">
            Technologies
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-semibold text-black dark:text-white tracking-tight">
            Skills
          </h2>
        </motion.div>

        {/* Skills Cloud - Compact Boxes */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.02 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -4 }}
              className="group"
            >
              {/* Compact Cloud Box - Auto Size */}
              <div className="relative inline-flex items-center gap-2 sm:gap-2.5 p-3 sm:p-4 bg-white dark:bg-gray-950 rounded-xl sm:rounded-2xl border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 shadow-md hover:shadow-xl">
                <skill.icon
                  size={28}
                  className="transition-transform duration-300 group-hover:scale-110 flex-shrink-0"
                  style={{
                    color: theme === "dark" ? skill.darkColor : skill.lightColor
                  }}
                />
                <span className="text-xs sm:text-sm font-heading font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
