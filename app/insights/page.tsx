import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import Reveal from "@/components/Reveal"
import { posts } from "@/lib/posts"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Insights — Web Performance, Security & SEO",
  description:
    "Practical, no-jargon articles from GeekyTechh on building fast, secure, high-ranking websites — website speed, security, and SEO for founders and growing businesses.",
  alternates: { canonical: `${site.url}/insights` },
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
}

export default function InsightsPage() {
  return (
    <main id="main-content" className="min-h-screen pt-28 xs:pt-32 sm:pt-36 pb-16 xs:pb-20 sm:pb-24 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-[13px] font-semibold text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back home
        </Link>

        <Reveal className="max-w-2xl mb-12 xs:mb-14 sm:mb-16">
          <p className="text-[11px] xs:text-[12px] sm:text-[13px] font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-[0.2em] mb-3">Insights</p>
          <h1 className="text-4xl xs:text-5xl sm:text-6xl font-bold tracking-[-0.02em] text-[hsl(var(--foreground))] font-heading mb-4">
            Notes on building better websites.
          </h1>
          <p className="text-[14px] xs:text-[15px] sm:text-base font-medium text-[hsl(var(--muted-foreground))] leading-relaxed">
            Practical, no-jargon takes on speed, security, and SEO — the things that actually decide whether a website earns its keep.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5 sm:gap-6">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.08}>
              <Link
                href={`/insights/${p.slug}`}
                className="group flex flex-col h-full p-6 xs:p-7 sm:p-8 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[hsl(var(--foreground))]/15 hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_16px_36px_rgba(0,0,0,0.22)] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block px-2.5 py-1 rounded-lg text-[10px] xs:text-[11px] font-semibold uppercase tracking-wider bg-[hsl(var(--pill))] text-[hsl(var(--muted-foreground))]">{p.tag}</span>
                  <span className="text-[12px] font-medium text-[hsl(var(--muted-foreground))]">{p.readingTime}</span>
                </div>
                <h2 className="text-xl xs:text-2xl font-bold font-heading text-[hsl(var(--foreground))] mb-3 leading-snug group-hover:text-[hsl(var(--accent-orange))] transition-colors">
                  {p.title}
                </h2>
                <p className="text-[13px] xs:text-[14px] sm:text-[15px] font-medium text-[hsl(var(--muted-foreground))] leading-relaxed flex-1">{p.excerpt}</p>
                <div className="flex items-center justify-between mt-6 pt-5 border-t border-[hsl(var(--border))]">
                  <span className="text-[12px] font-semibold text-[hsl(var(--muted-foreground))]">{formatDate(p.date)}</span>
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[hsl(var(--foreground))]">
                    Read <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  )
}
