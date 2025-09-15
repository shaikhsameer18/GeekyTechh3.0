"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

interface FormData {
  fullName: string
  email: string
  message: string
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    message: "",
  })

  const [status, setStatus] = useState<string | null>(null)

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 5000)
      return () => clearTimeout(timer)
    }
  }, [status])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("Submitting...")

    try {
      const response = await fetch("https://formspree.io/f/mjkkvlob", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("Message sent successfully!")
        setFormData({ fullName: "", email: "", message: "" })
      } else {
        setStatus("Something went wrong. Please try again.")
      }
    } catch {
      setStatus("Something went wrong. Please try again.")
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gray-100 dark:bg-gray-900"></div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="h-px w-24 bg-purple-600 dark:bg-purple-400 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Main contact card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Contact Form - Takes 3/5 of the space on large screens */}
              <div className="lg:col-span-3 p-6 md:p-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="relative">
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all duration-300 text-gray-900 dark:text-white peer placeholder-transparent"
                        placeholder="Full Name"
                        id="fullName"
                      />
                      <label
                        htmlFor="fullName"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-50 dark:bg-gray-800 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-purple-600 dark:peer-focus:text-purple-400 left-4"
                      >
                        Full Name
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all duration-300 text-gray-900 dark:text-white peer placeholder-transparent"
                        placeholder="Email Address"
                        id="email"
                      />
                      <label
                        htmlFor="email"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-50 dark:bg-gray-800 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-purple-600 dark:peer-focus:text-purple-400 left-4"
                      >
                        Email Address
                      </label>
                    </div>
                  </div>

                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-5 py-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all duration-300 text-gray-900 dark:text-white resize-none peer placeholder-transparent"
                      placeholder="Your message here..."
                      id="message"
                    />
                    <label
                      htmlFor="message"
                      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-50 dark:bg-gray-800 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-purple-600 dark:peer-focus:text-purple-400 left-4"
                    >
                      Your message
                    </label>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                    disabled={status === "Submitting..."}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="w-5 h-5" />
                    {status === "Submitting..." ? "Sending..." : "Send Message"}
                  </motion.button>

                  {status && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`text-sm font-medium ${status.includes("success") ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
                    >
                      {status}
                    </motion.p>
                  )}
                </form>
              </div>

              {/* Contact Info - Takes 2/5 of the space on large screens */}
              <div className="lg:col-span-2 bg-gradient-to-br from-purple-600 to-blue-600 dark:from-purple-700 dark:to-blue-700 p-6 md:p-10 text-white">
                <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

                <div className="space-y-8">
                  {/* Contact Info Items */}
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-white/80">Email</h3>
                      <a href="mailto:contact@geekytechh.in" className="text-white hover:text-white/80 transition-colors duration-300 font-medium">
                        contact@geekytechh.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-white/80">Phone</h3>
                      <a href="tel:+917774897159" className="text-white hover:text-white/80 transition-colors duration-300 font-medium">
                        +91 77748 97159
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-white/80">Location</h3>
                      <p className="text-white">
                        Mumbai, Maharashtra - 400011
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-white/80">Working Hours</h3>
                      <p className="text-white">
                        Mon-Fri: 10:00 AM - 8:00 PM<br />
                        Sat: 10:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute bottom-5 right-5 w-24 h-24 rounded-full border border-white/20 opacity-50"></div>
                <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full border border-white/20 opacity-50"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
