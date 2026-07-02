"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, Send, Check } from "lucide-react"

interface Brief {
  fullName: string
  email: string
  projectType: string
  budget: string
  timeline: string
  message: string
}

const projectTypes = ["Website", "E-commerce", "Web app", "UI/UX design", "Something else"]
const budgets = ["Under ₹25k", "₹25k – ₹75k", "₹75k – ₹2L", "₹2L+", "Not sure yet"]
const timelines = ["ASAP", "Within a month", "2–3 months", "Flexible"]

const inputClass =
  "w-full px-3.5 xs:px-4 py-3 xs:py-3.5 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] text-[hsl(var(--foreground))] text-[14px] xs:text-[15px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--accent-orange))]/40 focus-visible:border-[hsl(var(--accent-orange))]/40 transition-all"

function Chips({ options, value, onChange }: { options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const active = value === o
        return (
          <button
            key={o}
            type="button"
            onClick={() => onChange(o)}
            aria-pressed={active}
            className={`px-3.5 py-2 rounded-full text-[13px] font-semibold border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--accent-orange))]/40 ${
              active
                ? "bg-[hsl(var(--foreground))] text-[hsl(var(--background))] border-[hsl(var(--foreground))]"
                : "bg-[hsl(var(--card))] text-[hsl(var(--muted-foreground))] border-[hsl(var(--border))] hover:border-[hsl(var(--foreground))]/25 hover:text-[hsl(var(--foreground))]"
            }`}
          >
            {o}
          </button>
        )
      })}
    </div>
  )
}

export default function BriefForm() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<Brief>({ fullName: "", email: "", projectType: "", budget: "", timeline: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const set = (k: keyof Brief, v: string) => setData((p) => ({ ...p, [k]: v }))

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
  const canNext = step === 0 ? data.fullName.trim().length > 1 && emailValid : step === 1 ? !!data.projectType : true

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Honeypot: if the hidden field is filled, silently drop (bot).
    const hp = (e.currentTarget.elements.namedItem("_gotcha") as HTMLInputElement)?.value
    if (hp) return
    setStatus("sending")
    try {
      const res = await fetch("https://formspree.io/f/mjkkvlob", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.fullName,
          email: data.email,
          projectType: data.projectType,
          budget: data.budget,
          timeline: data.timeline,
          message: data.message,
        }),
      })
      setStatus(res.ok ? "success" : "error")
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center h-full min-h-[380px] p-8">
        <div className="p-4 rounded-full bg-green-500/15 mb-5">
          <Check className="w-8 h-8 text-green-600 dark:text-green-400" strokeWidth={2.5} />
        </div>
        <h3 className="text-xl xs:text-2xl font-bold font-heading text-[hsl(var(--foreground))] mb-2">Brief received 🎉</h3>
        <p className="text-[14px] xs:text-[15px] font-medium text-[hsl(var(--muted-foreground))] max-w-sm">
          Thanks, {data.fullName.split(" ")[0] || "there"}. We&apos;ll review your project and reply within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col h-full">
      {/* Progress */}
      <div className="flex items-center gap-2 mb-6 xs:mb-8">
        {[0, 1, 2].map((s) => (
          <div key={s} className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${s <= step ? "bg-[hsl(var(--accent-orange))]" : "bg-[hsl(var(--border))]"}`} />
        ))}
      </div>
      <p className="text-[11px] font-semibold uppercase tracking-wider text-[hsl(var(--muted-foreground))] mb-5">Step {step + 1} of 3</p>

      {/* Honeypot (hidden from humans) */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden className="absolute w-0 h-0 opacity-0 -z-10 pointer-events-none" />

      <div className="flex-1">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div key="s0" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: 0.25 }} className="space-y-5">
              <div>
                <label htmlFor="fullName" className="block text-[13px] font-semibold text-[hsl(var(--foreground))] mb-2">Your name</label>
                <input id="fullName" className={inputClass} value={data.fullName} onChange={(e) => set("fullName", e.target.value)} placeholder="Jane Doe" autoComplete="name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-[13px] font-semibold text-[hsl(var(--foreground))] mb-2">Email</label>
                <input id="email" type="email" className={inputClass} value={data.email} onChange={(e) => set("email", e.target.value)} placeholder="you@email.com" autoComplete="email" />
                {data.email.length > 0 && !emailValid && <p className="mt-1.5 text-[12px] font-medium text-red-500">Enter a valid email.</p>}
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div key="s1" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: 0.25 }} className="space-y-6">
              <div>
                <label className="block text-[13px] font-semibold text-[hsl(var(--foreground))] mb-3">What do you need?</label>
                <Chips options={projectTypes} value={data.projectType} onChange={(v) => set("projectType", v)} />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[hsl(var(--foreground))] mb-3">Budget range</label>
                <Chips options={budgets} value={data.budget} onChange={(v) => set("budget", v)} />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[hsl(var(--foreground))] mb-3">Timeline</label>
                <Chips options={timelines} value={data.timeline} onChange={(v) => set("timeline", v)} />
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="s2" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: 0.25 }}>
              <label htmlFor="message" className="block text-[13px] font-semibold text-[hsl(var(--foreground))] mb-2">Tell us about the project</label>
              <textarea id="message" rows={6} className={`${inputClass} resize-none`} value={data.message} onChange={(e) => set("message", e.target.value)} placeholder="Goals, links, references, anything useful…" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Nav */}
      <div className="flex items-center justify-between gap-3 mt-8">
        {step > 0 ? (
          <button type="button" onClick={() => setStep((s) => s - 1)} className="inline-flex items-center gap-1.5 px-4 py-2.5 text-[14px] font-semibold rounded-full text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--accent-orange))]/40">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        ) : (
          <span />
        )}

        {step < 2 ? (
          <button
            type="button"
            onClick={() => canNext && setStep((s) => s + 1)}
            disabled={!canNext}
            className="inline-flex items-center gap-2 px-6 py-3 text-[14px] xs:text-[15px] font-semibold rounded-full bg-[hsl(var(--foreground))] text-[hsl(var(--background))] hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--accent-orange))]/40"
          >
            Continue <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center gap-2 px-6 py-3 text-[14px] xs:text-[15px] font-semibold rounded-full bg-[hsl(var(--foreground))] text-[hsl(var(--background))] hover:opacity-90 disabled:opacity-50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--accent-orange))]/40"
          >
            {status === "sending" ? "Sending…" : "Send brief"} <Send className="w-4 h-4" />
          </button>
        )}
      </div>
      {status === "error" && <p className="mt-4 text-[14px] font-medium text-red-500">Something went wrong. Please email us directly.</p>}
    </form>
  )
}
