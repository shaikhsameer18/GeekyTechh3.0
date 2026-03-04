"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react"
import SectionWatermark from "./SectionWatermark"

interface FormData {
  fullName: string
  email: string
  message: string
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({ fullName: "", email: "", message: "" })
  const [status, setStatus] = useState<string | null>(null)

  useEffect(() => {
    if (status) {
      const t = setTimeout(() => setStatus(null), 5000)
      return () => clearTimeout(t)
    }
  }, [status])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("Sending...")
    try {
      const res = await fetch("https://formspree.io/f/mjkkvlob", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus("Message sent successfully")
        setFormData({ fullName: "", email: "", message: "" })
      } else setStatus("Something went wrong")
    } catch {
      setStatus("Something went wrong")
    }
  }

  const contacts: { icon: typeof Mail; label: string; value: string; href?: string }[] = [
    { icon: Mail, label: "Email", value: "geekytechh@gmail.com", href: "mailto:geekytechh@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 77748 97159", href: "tel:+917774897159" },
    { icon: MapPin, label: "Location", value: "Mumbai, Maharashtra" },
    { icon: Clock, label: "Hours", value: "Mon–Fri: 10AM–8PM" },
  ]

  return (
    <section id="contact" className="relative py-16 xs:py-20 sm:py-24 md:py-28 lg:py-32 xl:py-36 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 overflow-hidden border-t border-[hsl(var(--border))] bg-[hsl(var(--muted))]/25">
      <SectionWatermark position="top-right" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 xs:mb-14 sm:mb-16 md:mb-20"
        >
          <p className="text-[11px] xs:text-[12px] sm:text-[13px] font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-[0.15em] xs:tracking-[0.2em] mb-2 xs:mb-3">Get In Touch</p>
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] text-[hsl(var(--foreground))] font-heading mb-3 xs:mb-4">
            Let&apos;s Build Together
          </h2>
          <p className="text-[13px] xs:text-[14px] sm:text-base font-medium text-[hsl(var(--muted-foreground))] max-w-xl mx-auto px-2">
            Ready to transform your digital presence? Drop a message and we&apos;ll get back within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 xs:gap-10 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-3 xs:space-y-4"
          >
            {contacts.map((c, i) => {
              const Wrapper = c.href ? motion.a : motion.div
              return (
                <Wrapper
                  key={c.label}
                  {...(c.href ? { href: c.href } : {})}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className={`group flex items-center gap-3 xs:gap-4 sm:gap-5 p-4 xs:p-5 rounded-xl xs:rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] transition-all duration-300 ${
                    c.href ? "hover:border-[hsl(var(--foreground))]/15 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] cursor-pointer" : ""
                  }`}
                >
                  <div className="flex-shrink-0 p-2.5 xs:p-3 rounded-xl xs:rounded-2xl bg-[hsl(var(--pill))] group-hover:bg-[hsl(var(--muted))] transition-colors">
                    <c.icon className="w-4 h-4 xs:w-5 xs:h-5 text-[hsl(var(--foreground))]" strokeWidth={2} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] xs:text-[11px] font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-wider mb-0.5 xs:mb-1">{c.label}</p>
                    <span className="text-[13px] xs:text-[14px] sm:text-[15px] font-semibold text-[hsl(var(--foreground))] block truncate">{c.value}</span>
                  </div>
                </Wrapper>
              )
            })}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 p-5 xs:p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl xs:rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.12)] space-y-5 xs:space-y-6"
          >
            <div className="flex items-center gap-3 xs:gap-4 mb-6 xs:mb-8">
              <div className="p-2.5 xs:p-3 rounded-xl xs:rounded-2xl bg-[hsl(var(--pill))]">
                <MessageSquare className="w-5 h-5 xs:w-6 xs:h-6 text-[hsl(var(--foreground))]" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-lg xs:text-xl font-bold text-[hsl(var(--foreground))] font-heading">Send a Message</h3>
                <p className="text-[13px] xs:text-[14px] sm:text-[15px] font-medium text-[hsl(var(--muted-foreground))]">We&apos;ll reply as soon as we can.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-5 sm:gap-6">
              <div>
                <label htmlFor="fullName" className="block text-[12px] xs:text-[13px] font-semibold text-[hsl(var(--foreground))] mb-1.5 xs:mb-2">Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 xs:px-4 py-3 xs:py-3.5 rounded-lg xs:rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] text-[hsl(var(--foreground))] text-[14px] xs:text-[15px] font-medium focus:outline-none focus:ring-2 focus:ring-[hsl(var(--foreground))]/15 focus:border-[hsl(var(--foreground))]/25 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[12px] xs:text-[13px] font-semibold text-[hsl(var(--foreground))] mb-1.5 xs:mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 xs:px-4 py-3 xs:py-3.5 rounded-lg xs:rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] text-[hsl(var(--foreground))] text-[14px] xs:text-[15px] font-medium focus:outline-none focus:ring-2 focus:ring-[hsl(var(--foreground))]/15 focus:border-[hsl(var(--foreground))]/25 transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-[12px] xs:text-[13px] font-semibold text-[hsl(var(--foreground))] mb-1.5 xs:mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3.5 xs:px-4 py-3 xs:py-3.5 rounded-lg xs:rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] text-[hsl(var(--foreground))] text-[14px] xs:text-[15px] font-medium focus:outline-none focus:ring-2 focus:ring-[hsl(var(--foreground))]/15 focus:border-[hsl(var(--foreground))]/25 resize-none transition-all"
                placeholder="Tell us about your project..."
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 xs:gap-4">
              <button
                type="submit"
                disabled={status === "Sending..."}
                className="inline-flex items-center justify-center gap-2 px-6 xs:px-7 sm:px-8 py-3 xs:py-3.5 sm:py-4 text-[14px] xs:text-[15px] font-semibold rounded-lg xs:rounded-xl bg-[hsl(var(--foreground))] text-[hsl(var(--background))] hover:opacity-90 disabled:opacity-50 transition-all duration-200"
              >
                {status === "Sending..." ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4" />
              </button>
              {status && status !== "Sending..." && (
                <p className={`text-[14px] xs:text-[15px] font-medium ${status.includes("success") ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>{status}</p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
