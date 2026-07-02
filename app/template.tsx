"use client"

import { motion } from "framer-motion"

/**
 * Route-change transition. Next.js remounts this on every navigation, so page
 * content fades/rises in. It wraps ONLY the page content (Header/Footer live in
 * the layout, outside this file) — critical, because a transformed/opacity
 * ancestor would otherwise break the fixed header's positioning.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}
