"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react"

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
    setStatus("Sending...")

    try {
      const response = await fetch("https://formspree.io/f/mjkkvlob", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("Message sent successfully")
        setFormData({ fullName: "", email: "", message: "" })
      } else {
        setStatus("Something went wrong")
      }
    } catch {
      setStatus("Something went wrong")
    }
  }

  return (
    <section id="contact" className="min-h-screen flex items-center bg-white dark:bg-black py-20 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs tracking-[0.3em] text-gray-500 dark:text-gray-400 uppercase font-medium mb-4">
            Get In Touch
          </p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-heading font-semibold text-black dark:text-white tracking-tight">
            Contact
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="fullName" className="block text-sm font-heading font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-950 border border-black/10 dark:border-white/10 focus:border-black dark:focus:border-white rounded-2xl outline-none text-black dark:text-white transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-heading font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-950 border border-black/10 dark:border-white/10 focus:border-black dark:focus:border-white rounded-2xl outline-none text-black dark:text-white transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-heading font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-950 border border-black/10 dark:border-white/10 focus:border-black dark:focus:border-white rounded-2xl outline-none text-black dark:text-white resize-none transition-all"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "Sending..."}
                className="group inline-flex items-center gap-3 px-8 py-5 bg-black dark:bg-white text-white dark:text-black text-base font-heading font-semibold rounded-2xl hover:bg-black/90 dark:hover:bg-white/90 transition-all shadow-lg hover:shadow-xl disabled:opacity-50"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{status === "Sending..." ? "Sending..." : "Send Message"}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {status && status !== "Sending..." && (
                <p className={`text-sm font-medium ${status.includes("success") ? "text-green-600" : "text-red-600"}`}>
                  {status}
                </p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              { icon: Mail, label: "Email", value: "contact@geekytechh.in", href: "mailto:contact@geekytechh.in" },
              { icon: Phone, label: "Phone", value: "+91 77748 97159", href: "tel:+917774897159" },
              { icon: MapPin, label: "Location", value: "Mumbai, Maharashtra - 400011" },
              { icon: Clock, label: "Working Hours", value: "Mon-Fri: 10:00 AM - 8:00 PM\nSat: 10:00 AM - 6:00 PM" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-5 p-6 bg-gray-50 dark:bg-gray-950 rounded-2xl border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all"
              >
                <div className="p-3 bg-white dark:bg-black rounded-xl border border-black/10 dark:border-white/10">
                  <item.icon className="w-5 h-5 text-black dark:text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-sm font-heading font-semibold text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wider">
                    {item.label}
                  </h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-base font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-base font-medium text-black dark:text-white whitespace-pre-line">
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
