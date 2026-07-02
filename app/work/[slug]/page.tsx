import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react"
import { caseStudies, getCaseStudy } from "@/lib/projects"
import { site } from "@/lib/site"

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) return { title: "Case Study Not Found" }
  return {
    title: `${study.title} — ${study.category} Case Study`,
    description: study.summary,
    alternates: { canonical: `${site.url}/work/${study.slug}` },
    openGraph: {
      title: `${study.title} — GeekyTechh Case Study`,
      description: study.summary,
      url: `${site.url}/work/${study.slug}`,
      type: "article",
    },
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) notFound()

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: study.title,
    about: study.summary,
    url: `${site.url}/work/${study.slug}`,
    creator: { "@type": "Organization", name: site.name, url: site.url },
    keywords: study.stack.join(", "),
  }

  return (
      <main id="main-content" className="min-h-screen pt-28 xs:pt-32 sm:pt-36 pb-16 xs:pb-20 sm:pb-24 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <article className="max-w-4xl mx-auto">
          <Link href="/work" className="inline-flex items-center gap-2 text-[13px] font-semibold text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            All work
          </Link>

          {/* Header */}
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block px-3 py-1.5 rounded-lg text-[11px] font-semibold uppercase tracking-wider bg-[hsl(var(--pill))] text-[hsl(var(--muted-foreground))]">
              {study.category}
            </span>
            {study.live && (
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[hsl(var(--muted-foreground))]">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" /> Live in production
              </span>
            )}
          </div>
          <h1 className="text-4xl xs:text-5xl sm:text-6xl font-bold tracking-[-0.02em] text-[hsl(var(--foreground))] font-heading mb-4">
            {study.title}
          </h1>
          <p className="text-[15px] xs:text-base sm:text-lg font-medium text-[hsl(var(--muted-foreground))] leading-relaxed max-w-2xl mb-8">
            {study.summary}
          </p>

          <a
            href={study.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-[14px] font-semibold rounded-full bg-[hsl(var(--foreground))] text-[hsl(var(--background))] hover:opacity-90 transition-opacity mb-10 xs:mb-12"
          >
            Visit live site
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Hero image */}
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[hsl(var(--border))] bg-[hsl(var(--pill))] mb-10 xs:mb-14">
            <Image
              src={study.image}
              alt={study.title}
              fill
              className="object-contain p-6 sm:p-10"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10 xs:mb-14">
            {study.metrics.map((m) => (
              <div key={m.label} className="p-5 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]">
                <div className="text-2xl xs:text-3xl font-bold font-heading text-[hsl(var(--foreground))]">{m.value}</div>
                <div className="mt-1 text-[11px] xs:text-[12px] font-semibold uppercase tracking-wider text-[hsl(var(--muted-foreground))]">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Body */}
          <div className="space-y-10 xs:space-y-12">
            <section>
              <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))] mb-3">The Challenge</h2>
              <p className="text-[15px] xs:text-base font-medium text-[hsl(var(--foreground))]/90 leading-relaxed">{study.challenge}</p>
            </section>

            <section>
              <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))] mb-4">Our Approach</h2>
              <ul className="space-y-3">
                {study.approach.map((a) => (
                  <li key={a} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 p-1 rounded-full bg-[hsl(var(--accent-orange))]/15">
                      <Check className="w-3.5 h-3.5 text-[hsl(var(--accent-orange))]" strokeWidth={3} />
                    </span>
                    <span className="text-[15px] xs:text-base font-medium text-[hsl(var(--foreground))]/90 leading-relaxed">{a}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))] mb-3">The Outcome</h2>
              <p className="text-[15px] xs:text-base font-medium text-[hsl(var(--foreground))]/90 leading-relaxed">{study.outcome}</p>
            </section>

            <section>
              <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))] mb-4">Built With</h2>
              <div className="flex flex-wrap gap-2">
                {study.stack.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-lg text-[13px] font-semibold border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-[hsl(var(--foreground))]">
                    {t}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-14 xs:mt-20 p-8 xs:p-10 sm:p-12 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--muted))]/40 text-center">
            <h2 className="text-2xl xs:text-3xl font-bold font-heading text-[hsl(var(--foreground))] mb-3">
              Want something like this?
            </h2>
            <p className="text-[14px] xs:text-[15px] font-medium text-[hsl(var(--muted-foreground))] mb-6 max-w-md mx-auto">
              Tell us about your project and we&apos;ll get back within 24 hours.
            </p>
            <Link href="/#contact" className="inline-flex items-center gap-2 px-6 py-3.5 text-[15px] font-semibold rounded-full bg-[hsl(var(--foreground))] text-[hsl(var(--background))] hover:opacity-90 transition-opacity">
              Start a project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </article>
      </main>
  )
}
