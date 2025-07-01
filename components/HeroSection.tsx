"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Code2, Laptop, Palette, Layers, Brain, Phone } from "lucide-react"

const roles = [
  { text: "Web Developer", icon: Code2 },
  { text: "Software Engineer", icon: Laptop },
  { text: "UI/UX Designer", icon: Palette },
  { text: "Full Stack Dev", icon: Layers },
  { text: "AI/ML Engineer", icon: Brain }
]

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (isDeleting) {
          setText((prev) => prev.slice(0, -1));
          if (text === "") {
            setIsDeleting(false);
            setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
          }
        } else {
          setText(roles[roleIndex].text.slice(0, text.length + 1));
          if (text === roles[roleIndex].text) {
            setTimeout(() => setIsDeleting(true), 2500);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  const CurrentIcon = roles[roleIndex].icon;

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 dark:from-purple-900 dark:via-indigo-900 dark:to-blue-900"
    >
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 max-w-4xl mx-auto"
        >
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight">
              Looking for a{" "}
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-yellow-300 dark:text-yellow-400 inline-flex items-center gap-3"
              >
                {text}
                <motion.span
                  key={`icon-${roleIndex}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <CurrentIcon className="w-10 h-10 lg:w-12 lg:h-12" />
                </motion.span>
              </motion.span>
            </h1>
            <p className="text-xl md:text-2xl font-bold text-white/90 tracking-wide">
              Bringing Your Digital Ideas to Life
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-12 w-full max-w-[90%] sm:max-w-none mx-auto"
          >
            <a
              href="tel:+917774897159"
              className="group bg-white dark:bg-white/90 rounded-full py-3 sm:py-4 px-6 sm:px-8 flex items-center gap-3 sm:gap-4 hover:bg-opacity-95 transition-all duration-300 w-[90%] sm:w-auto sm:min-w-[360px] shadow-lg hover:shadow-xl mx-auto"
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-purple-800 dark:text-purple-900 shrink-0" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-1 sm:gap-0">
                <span className="text-base sm:text-lg text-purple-800 dark:text-purple-900 font-bold tracking-wide">
                  Amanullah Shaikh
                </span>
                <span className="text-sm sm:text-lg text-purple-600 dark:text-purple-800 font-semibold tracking-wide sm:ml-4">
                  +91 77748 97159
                </span>
              </div>
            </a>


          </motion.div>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </section>
  )
}
