"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Logo from "@/app/assets/whitelogo.png"

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    if (!imageLoaded) return

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [imageLoaded])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 dark:from-purple-900 dark:via-indigo-900 dark:to-blue-900"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: imageLoaded ? 1 : 0,
              scale: imageLoaded ? 1 : 0.8
            }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <Image
              src={Logo}
              alt="Geeky Techh Logo"
              width={300}
              height={300}
              priority
              onLoadingComplete={() => setImageLoaded(true)}
              className="mx-auto filter drop-shadow-2xl transition-transform duration-700"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

