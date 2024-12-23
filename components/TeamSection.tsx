'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, Linkedin, Globe, BrainCircuit, BriefcaseBusiness, Code, Palette } from 'lucide-react'
import sameer from "@/app/assets/team/sam.jpg"
import ali from "@/app/assets/team/ali.jpg"
import amanu from "@/app/assets/team/amanu.jpg"
import irfan from "@/app/assets/team/irfan.jpg"

const team = [
  {
    name: 'Sameer Ahmed',
    role: 'Web Developer & ML Engineer',
    image: sameer,
    icon: Code,
    linkedin: 'https://www.linkedin.com/in/sameerahmed08',
    github: 'https://github.com/shaikhsameer18',
    portfolio: 'https://dollarsportfolio.vercel.app/'
  },
  {
    name: "Ali Shaikh",
    role: "Web Developer & Graphic Designer",
    image: ali,
    icon: Palette,
    linkedin: "https://www.linkedin.com/in/mohdali0",
    github: "https://github.com/mohdali03",
    portfolio: "https://mohd-ali.vercel.app/"
  },
  {
    name: "Amanullah Shaikh",
    role: "Web Developer & Digital Marketing Specialist",
    image: amanu,
    icon: BriefcaseBusiness,
    linkedin: "https://www.linkedin.com/in/mohd-amanullah-1282a2242",
    github: "https://github.com/shaikhmohdamanullah04"
  },
  {
    name: "Irfan Ansari",
    role: "Web Developer & AI Engineer",
    image: irfan,
    icon: BrainCircuit,
    linkedin: "https://www.linkedin.com/in/ansari-irfan-/",
    github: "https://github.com/Ansari-Irfan-360",
    portfolio: "https://ansariirfan.vercel.app/"
  }
]

export default function TeamSection() {
  return (
    <section id="team" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 font-poppins"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Team
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover object-center" // Using object-cover with object-center for middle zoom
                />
                <div className="absolute top-0 right-0 bg-purple-600 p-2 rounded-bl-lg">
                  <member.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 font-poppins">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{member.role}</p>
                <div className="flex space-x-4">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
                    <Github className="w-5 h-5" />
                  </a>
                  {member.portfolio && (
                    <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
                      <Globe className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
