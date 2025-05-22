"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Github, Linkedin, Globe } from "lucide-react"
import sameer from "@/app/assets/team/sam.jpg"
import ali from "@/app/assets/team/ali.jpg"
import amanu from "@/app/assets/team/amanu.jpg"
import irfan from "@/app/assets/team/irfan.jpg"

const team = [
  {
    name: "Sameer Ahmed",
    role: "Web Developer & ML Engineer",
    image: sameer,

    linkedin: "https://www.linkedin.com/in/sameerahmed08",
    github: "https://github.com/shaikhsameer18",
    portfolio: "https://dollarsportfolio.vercel.app/",
  },
  {
    name: "Ali Shaikh",
    role: "Web Developer & Graphic Designer",
    image: ali,

    linkedin: "https://www.linkedin.com/in/mohdali0",
    github: "https://github.com/mohdali03",
    portfolio: "https://mohd-ali.vercel.app/",
  },
  {
    name: "Amanullah Shaikh",
    role: "Web Developer & Digital Marketer",
    image: amanu,
    linkedin: "https://www.linkedin.com/in/mohd-amanullah-1282a2242",
  },
  {
    name: "Irfan Ansari",
    role: "Web Developer & AI Engineer",
    image: irfan,
    linkedin: "https://www.linkedin.com/in/ansari-irfan-/",
    github: "https://github.com/Ansari-Irfan-360",
    portfolio: "https://ansariirfan.vercel.app/",
  },
]

export default function TeamSection() {
  return (
    <section id="team" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text mb-4">
            Our Team
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-center space-x-4">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors duration-300"
                        >
                          <Linkedin className="w-5 h-5 text-white" />
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors duration-300"
                        >
                          <Github className="w-5 h-5 text-white" />
                        </a>
                      )}
                      {member.portfolio && (
                        <a
                          href={member.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors duration-300"
                        >
                          <Globe className="w-5 h-5 text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold mb-1 text-gray-800 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
