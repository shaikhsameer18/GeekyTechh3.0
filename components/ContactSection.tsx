"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MessageCircle, Mail, Phone, MapPin, Linkedin, Instagram, Github } from "lucide-react"

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

  const [status, setStatus] = useState<string | null>(null) // Allow status to be null

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
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 font-poppins text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Left Column: Contact Information */}
          <motion.div
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md md:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 font-poppins text-gray-800 dark:text-gray-200">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-4" />
                <span className="text-gray-600 dark:text-gray-400">geekytechh@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-4" />
                <span className="text-gray-600 dark:text-gray-400">+91 7774897159 / +91 9892506004</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-4" />
                <span className="text-gray-600 dark:text-gray-400">Mumbai, Maharashtra - 400011</span>
              </div>
            </div>

            <hr className="my-6 border-gray-300 dark:border-gray-600" />

            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold mb-2 font-poppins text-gray-800 dark:text-gray-200">
                  Working Hours
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Monday to Friday: 10:00 AM - 8:00 PM <br />
                  Saturday: 10:00 AM - 6:00 PM
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 font-poppins text-gray-800 dark:text-gray-200">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/company/geekytechh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200 transition"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/geeky.techh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200 transition"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com/geekytechh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200 transition"
                    aria-label="Instagram"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <hr className="my-6 border-gray-300 dark:border-gray-600" />
              <div>
                <h4 className="text-lg font-semibold mb-2 font-poppins">Join Our Newsletter</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Stay updated with our latest news and updates.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.form
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md md:col-span-3"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 font-poppins text-gray-800 dark:text-gray-200">Contact Us</h3>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              ></textarea>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={status === "Submitting..."}
                className="bg-purple-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-purple-700 transition duration-300"
              >
                {status === "Submitting..." ? "Submitting..." : "Send Message"}
              </motion.button>
              <a
                href="https://wa.me/917774897159"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-400 font-semibold hover:underline"
              >
                <MessageCircle className="w-5 h-5 inline-block mr-2" />
                Let&apos;s Connect on WhatsApp
              </a>
            </div>
          </motion.form>
        </div>

        {/* Status Message */}
        {status && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400"
          >
            {status}
          </motion.p>
        )}
      </div>
    </section>
  )
}
