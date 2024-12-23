'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Logo from "@/app/assets/whitelogo.png"; // Assuming you're using a logo file

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Preloader duration: 3 seconds

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-r from-purple-400 to-indigo-600 dark:from-purple-900 dark:to-indigo-800"
          aria-label="Loading"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
              duration: 0.8,
            }}
            className="text-center"
          >
            {/* Logo with even larger size */}
            {Logo ? (
              <div className="flex items-center justify-center">
                <Image
                  src={Logo}
                  alt="Geeky Techh Logo"
                  width={350} // Increased size of the logo
                  height={350} // Increased size of the logo
                  priority
                  className="rounded-full object-contain" // Ensure the logo fits well
                  sizes="(max-width: 768px) 50vw, 100vw"
                />
              </div>
            ) : (
              <div
                role="status"
                className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"
              ></div> // Spinner fallback
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
