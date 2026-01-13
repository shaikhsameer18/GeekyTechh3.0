"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import NextImage from "next/image"
import Logo from "@/app/assets/whitelogo.png"
import BlackLogo from "@/app/assets/blacklogo.png"

interface PreloaderProps {
  onFinish: () => void
}

export default function Preloader({ onFinish }: PreloaderProps) {
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = [
        new Promise(resolve => {
          const img = new window.Image()
          img.src = Logo.src
          img.onload = resolve
        })
      ]

      await Promise.all(imagePromises)

      setTimeout(() => {
        onFinish()
      }, 1800)
    }

    preloadImages()
  }, [onFinish])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-black"
      >
        <div className="flex flex-col items-center gap-3">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <NextImage
              src={BlackLogo}
              alt="Geeky Techh"
              width={200}
              height={80}
              priority
              className="block dark:hidden"
            />
            <NextImage
              src={Logo}
              alt="Geeky Techh"
              width={200}
              height={80}
              priority
              className="hidden dark:block"
            />
          </motion.div>

          {/* Loading bar directly below logo */}
          <motion.div
            className="w-32 h-0.5 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="h-full bg-black dark:bg-white rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
