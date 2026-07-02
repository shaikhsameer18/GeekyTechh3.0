import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ArrowLeft } from "lucide-react"
import { caseStudies } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Work — Case Studies & Live Projects",
  description:
    "Selected work from GeekyTechh — real websites and web apps live in production, from e-commerce storefronts to developer tools. See the challenge, approach, and outcome for each.",
  alternates: { canonical: "https://www.geekytechh.in/work" },
}

export default function WorkPage() {
  return (
      <main id="main-content" className="min-h-screen pt-28 xs:pt-32 sm:pt-36 pb-16 xs:pb-20 sm:pb-24 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-[13px] font-semibold text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back home
          </Link>

          <header className="mb-12 xs:mb-14 sm:mb-16 md:mb-20 max-w-2xl">
            <p className="text-[11px] xs:text-[12px] sm:text-[13px] font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-[0.2em] mb-3">Selected Work</p>
            <h1 className="text-4xl xs:text-5xl sm:text-6xl font-bold tracking-[-0.02em] text-[hsl(var(--foreground))] font-heading mb-4">
              Real products, in production.
            </h1>
            <p className="text-[14px] xs:text-[15px] sm:text-base font-medium text-[hsl(var(--muted-foreground))] leading-relaxed">
              Every project below is live and shipping. Open any one to see the challenge, how we approached it, and what we delivered.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10">
            {caseStudies.map((p) => (
              <Link
                key={p.slug}
                href={`/work/${p.slug}`}
                className="group block rounded-xl xs:rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] overflow-hidden hover:border-[hsl(var(--foreground))]/15 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] transition-all duration-300"
              >
                <div className="relative aspect-[16/10] bg-[hsl(var(--pill))] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-contain p-4 xs:p-5 sm:p-6 md:p-8 group-hover:scale-[1.04] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-4 xs:p-5 sm:p-6 lg:p-8">
                  <div className="flex items-center gap-2 mb-3 xs:mb-4">
                    <span className="inline-block px-2.5 xs:px-3 py-1 xs:py-1.5 rounded-lg text-[10px] xs:text-[11px] font-semibold uppercase tracking-wider bg-[hsl(var(--pill))] text-[hsl(var(--muted-foreground))]">
                      {p.category}
                    </span>
                    {p.live && (
                      <span className="inline-flex items-center gap-1.5 text-[10px] xs:text-[11px] font-semibold uppercase tracking-wider text-[hsl(var(--muted-foreground))]">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500" /> Live
                      </span>
                    )}
                  </div>
                  <h2 className="text-lg xs:text-xl font-bold text-[hsl(var(--foreground))] mb-2 font-heading group-hover:text-[hsl(var(--accent-orange))] transition-colors">
                    {p.title}
                  </h2>
                  <p className="text-[13px] xs:text-[14px] sm:text-[15px] font-medium text-[hsl(var(--muted-foreground))] line-clamp-2 leading-relaxed mb-4">
                    {p.summary}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[hsl(var(--foreground))]">
                    View case study
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
  )
}
