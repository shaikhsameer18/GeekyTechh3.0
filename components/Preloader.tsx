"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import NextImage from "next/image"
import Logo from "@/app/assets/whitelogo.png"

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
      }, 300)
    }

    preloadImages()
  }, [onFinish])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 dark:from-purple-900 dark:via-indigo-900 dark:to-blue-900"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <NextImage
            src={Logo}
            alt="Geeky Techh Logo"
            width={240}
            height={100}
            priority
            className="mx-auto filter drop-shadow-2xl"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
