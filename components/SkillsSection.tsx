"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import SectionWatermark from "./SectionWatermark"
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws } from "react-icons/fa"
import {
  SiJavascript, SiTypescript, SiCss3, SiMongodb, SiTailwindcss, SiNextdotjs, SiHtml5,
  SiGraphql, SiFirebase, SiExpress, SiPrisma, SiPostgresql, SiRedis, SiVite, SiVercel,
  SiVuedotjs, SiSvelte, SiAngular, SiRedux, SiGit, SiGithub, SiNginx, SiLinux,
  SiFigma, SiPostman, SiSupabase, SiStrapi, SiCloudflare, SiPfsense, SiNpm,
  SiKalilinux, SiWireshark, SiBurpsuite,
} from "react-icons/si"

const skills = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000", darkColor: "#e5e5e5" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#000", darkColor: "#e5e5e5" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "GraphQL", icon: SiGraphql, color: "#E535AB" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Vercel", icon: SiVercel, color: "#000", darkColor: "#e5e5e5" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#000", darkColor: "#e5e5e5" },
  { name: "Nginx", icon: SiNginx, color: "#009639" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Strapi", icon: SiStrapi, color: "#2F2E8B" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "npm", icon: SiNpm, color: "#CB3837" },
  { name: "Networking", icon: SiCloudflare, color: "#F38020" },
  { name: "Firewall", icon: SiPfsense, color: "#212121", darkColor: "#e5e5e5" },
  { name: "Cybersecurity", icon: SiPfsense, color: "#FF6B35", darkColor: "#FF6B35" },
  { name: "Kali Linux", icon: SiKalilinux, color: "#557C94", darkColor: "#68A0B8" },
  { name: "Wireshark", icon: SiWireshark, color: "#1679A7", darkColor: "#1E9AD6" },
  { name: "Burp Suite", icon: SiBurpsuite, color: "#FF6633", darkColor: "#FF6633" },
]

export default function SkillsSection() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <section id="skills" className="relative py-16 xs:py-20 sm:py-24 md:py-28 lg:py-32 xl:py-36 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 overflow-hidden border-t border-[hsl(var(--border))]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,hsl(var(--muted))/0.25,transparent_70%)]" />

      <SectionWatermark position="center-right" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 xs:mb-14 sm:mb-16 md:mb-20 text-center"
        >
          <p className="text-[11px] xs:text-[12px] sm:text-[13px] font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-[0.15em] xs:tracking-[0.2em] mb-3 xs:mb-4">Technologies</p>
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] text-[hsl(var(--foreground))] font-heading mb-3 xs:mb-4">
            Skills
          </h2>
          <p className="text-[13px] xs:text-[14px] sm:text-base font-medium text-[hsl(var(--muted-foreground))] max-w-xl mx-auto px-2">
            The modern stack we use to build scalable, performant products.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 px-1">
          {skills.map((skill, i) => {
            const iconColor = isDark && "darkColor" in skill ? (skill as { darkColor?: string }).darkColor : skill.color
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: Math.min(i * 0.012, 0.4) }}
                className="inline-flex items-center gap-1.5 xs:gap-2 sm:gap-2.5 md:gap-3 px-2.5 xs:px-3 sm:px-4 md:px-5 py-2 xs:py-2.5 sm:py-3 md:py-3.5 rounded-lg xs:rounded-xl sm:rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-[hsl(var(--foreground))] text-[12px] xs:text-[13px] sm:text-[14px] md:text-[15px] font-semibold hover:border-[hsl(var(--foreground))]/15 hover:shadow-[0_4px_14px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_4px_14px_rgba(0,0,0,0.15)] transition-all duration-200 cursor-default shrink-0"
              >
                <skill.icon className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" style={{ color: iconColor }} />
                {skill.name}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
