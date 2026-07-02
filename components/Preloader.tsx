"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import NextImage from "next/image"
import Logo from "@/app/assets/whitelogo.png"
import BlackLogo from "@/app/assets/blacklogo.png"

/**
 * Self-dismissing brand overlay. Content is server-rendered underneath, so the
 * preloader NEVER blocks LCP/SEO — it just fades away once the page is ready.
 * No artificial multi-second delay (the old version forced 1.8s and hid all HTML
 * from the server, tanking performance and crawlability).
 */
export default function Preloader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Short brand moment, capped tight. Dismiss as soon as the page is ready.
    const MIN_MS = 500
    const MAX_MS = 1400
    const start = performance.now()

    const dismiss = () => {
      const elapsed = performance.now() - start
      const wait = Math.max(0, MIN_MS - elapsed)
      window.setTimeout(() => setVisible(false), wait)
    }

    if (document.readyState === "complete") {
      dismiss()
    } else {
      window.addEventListener("load", dismiss, { once: true })
    }
    // Hard cap so a slow asset never traps the user behind the overlay.
    const cap = window.setTimeout(() => setVisible(false), MAX_MS)

    return () => {
      window.removeEventListener("load", dismiss)
      window.clearTimeout(cap)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-black"
          aria-hidden
        >
          <div className="flex flex-col items-center gap-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <NextImage src={BlackLogo} alt="GeekyTechh" width={200} height={80} priority className="block dark:hidden" />
              <NextImage src={Logo} alt="GeekyTechh" width={200} height={80} priority className="hidden dark:block" />
            </motion.div>

            <motion.div
              className="w-32 h-0.5 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="h-full bg-black dark:bg-white rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
