import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, Globe, Bot, Palette, Server, Shield, Briefcase } from "lucide-react"
import Reveal from "@/components/Reveal"
import { services, faqs, processSteps, site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Services — Web, E-Commerce, UI/UX & More",
  description:
    "GeekyTechh services: custom web development, e-commerce, UI/UX design, backend & APIs, network security, and AI/IT consulting. Fast, conversion-focused, and shipped to production.",
  alternates: { canonical: `${site.url}/services` },
}

const iconMap = { globe: Globe, bot: Bot, palette: Palette, server: Server, shield: Shield, briefcase: Briefcase }

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.url },
    { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
  ],
}

export default function ServicesPage() {
  return (
      <main id="main-content" className="min-h-screen pt-28 xs:pt-32 sm:pt-36 pb-16 xs:pb-20 sm:pb-24 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-[13px] font-semibold text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back home
          </Link>

          <Reveal className="max-w-2xl mb-14 xs:mb-16 sm:mb-20">
            <p className="text-[11px] xs:text-[12px] sm:text-[13px] font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-[0.2em] mb-3">What We Do</p>
            <h1 className="text-4xl xs:text-5xl sm:text-6xl font-bold tracking-[-0.02em] text-[hsl(var(--foreground))] font-heading mb-4">
              Services built to ship.
            </h1>
            <p className="text-[14px] xs:text-[15px] sm:text-base font-medium text-[hsl(var(--muted-foreground))] leading-relaxed">
              End-to-end product work — design, build, and launch. Everything below is delivered to production, fast, and engineered to convert.
            </p>
          </Reveal>

          {/* Service blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5 sm:gap-6">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon]
              return (
                <Reveal key={s.key} delay={(i % 2) * 0.08}>
                  <div className="h-full p-6 xs:p-7 sm:p-8 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[hsl(var(--foreground))]/15 transition-colors duration-300">
                    <div className="inline-flex p-3 rounded-xl bg-[hsl(var(--pill))] mb-5">
                      <Icon className="w-6 h-6 text-[hsl(var(--foreground))]" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-xl xs:text-2xl font-bold text-[hsl(var(--foreground))] font-heading">{s.title}</h2>
                    <p className="text-[13px] font-semibold text-[hsl(var(--accent-orange))] mt-1 mb-3">{s.tagline}</p>
                    <p className="text-[14px] xs:text-[15px] font-medium text-[hsl(var(--muted-foreground))] leading-relaxed mb-5">{s.description}</p>
                    <ul className="space-y-2">
                      {s.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 mt-0.5 text-[hsl(var(--accent-orange))] flex-shrink-0" strokeWidth={3} />
                          <span className="text-[13px] xs:text-[14px] font-medium text-[hsl(var(--foreground))]/85">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )
            })}
          </div>

          {/* Process recap */}
          <Reveal className="mt-16 xs:mt-20 sm:mt-24">
            <h2 className="text-2xl xs:text-3xl font-bold font-heading text-[hsl(var(--foreground))] mb-8">How every project runs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {processSteps.map((p) => (
                <div key={p.step} className="p-6 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]">
                  <span className="text-3xl font-bold font-heading text-[hsl(var(--accent-orange))]/25">{p.step}</span>
                  <h3 className="mt-2 text-lg font-bold font-heading text-[hsl(var(--foreground))]">{p.title}</h3>
                  <p className="mt-1.5 text-[13px] font-medium text-[hsl(var(--muted-foreground))] leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* FAQ */}
          <Reveal className="mt-16 xs:mt-20 sm:mt-24 max-w-3xl">
            <h2 className="text-2xl xs:text-3xl font-bold font-heading text-[hsl(var(--foreground))] mb-6">Frequently asked</h2>
            <div className="divide-y divide-[hsl(var(--border))] border-y border-[hsl(var(--border))]">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="text-[15px] xs:text-base font-semibold text-[hsl(var(--foreground))] pr-4">{f.q}</span>
                    <span className="flex-shrink-0 text-[hsl(var(--muted-foreground))] transition-transform duration-300 group-open:rotate-45 text-2xl leading-none">+</span>
                  </summary>
                  <p className="mt-3 text-[14px] xs:text-[15px] font-medium text-[hsl(var(--muted-foreground))] leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal className="mt-16 xs:mt-20">
            <div className="p-8 xs:p-10 sm:p-14 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--muted))]/40 text-center">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold font-heading text-[hsl(var(--foreground))] mb-3">Let&apos;s build your project</h2>
              <p className="text-[14px] xs:text-[15px] font-medium text-[hsl(var(--muted-foreground))] mb-6 max-w-md mx-auto">
                Tell us what you need and we&apos;ll reply within 24 hours with next steps.
              </p>
              <Link href="/#contact" className="inline-flex items-center gap-2 px-6 py-3.5 text-[15px] font-semibold rounded-full bg-[hsl(var(--foreground))] text-[hsl(var(--background))] hover:opacity-90 transition-opacity">
                Start a project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </main>
  )
}
