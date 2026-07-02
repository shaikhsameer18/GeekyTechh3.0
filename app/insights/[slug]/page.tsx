import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { posts, getPost } from "@/lib/posts"
import { site } from "@/lib/site"

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: "Post Not Found" }
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${site.url}/insights/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, url: `${site.url}/insights/${post.slug}`, type: "article", publishedTime: post.date },
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    url: `${site.url}/insights/${post.slug}`,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/insights/${post.slug}`,
  }

  return (
    <main id="main-content" className="min-h-screen pt-28 xs:pt-32 sm:pt-36 pb-16 xs:pb-20 sm:pb-24 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className="max-w-2xl mx-auto">
        <Link href="/insights" className="inline-flex items-center gap-2 text-[13px] font-semibold text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          All insights
        </Link>

        <div className="flex items-center gap-3 mb-5">
          <span className="inline-block px-2.5 py-1 rounded-lg text-[11px] font-semibold uppercase tracking-wider bg-[hsl(var(--pill))] text-[hsl(var(--muted-foreground))]">{post.tag}</span>
          <span className="text-[12px] font-medium text-[hsl(var(--muted-foreground))]">{post.readingTime}</span>
          <span className="text-[12px] font-medium text-[hsl(var(--muted-foreground))]">· {formatDate(post.date)}</span>
        </div>

        <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-[-0.02em] text-[hsl(var(--foreground))] font-heading mb-6 leading-[1.1]">
          {post.title}
        </h1>
        <p className="text-[16px] xs:text-lg font-medium text-[hsl(var(--muted-foreground))] leading-relaxed mb-10 pb-10 border-b border-[hsl(var(--border))]">
          {post.excerpt}
        </p>

        <div className="space-y-6">
          {post.content.map((block, i) => {
            if (block.type === "h2") {
              return <h2 key={i} className="text-xl xs:text-2xl font-bold font-heading text-[hsl(var(--foreground))] pt-4">{block.text}</h2>
            }
            if (block.type === "ul") {
              return (
                <ul key={i} className="space-y-2.5 pl-1">
                  {block.items?.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-[15px] xs:text-[16px] font-medium text-[hsl(var(--foreground))]/85 leading-relaxed">
                      <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent-orange))] flex-shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
              )
            }
            return <p key={i} className="text-[15px] xs:text-[16px] font-medium text-[hsl(var(--foreground))]/85 leading-[1.8]">{block.text}</p>
          })}
        </div>

        <div className="mt-14 p-8 xs:p-10 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--muted))]/40 text-center">
          <h2 className="text-xl xs:text-2xl font-bold font-heading text-[hsl(var(--foreground))] mb-3">Want a site that does this right?</h2>
          <p className="text-[14px] font-medium text-[hsl(var(--muted-foreground))] mb-6 max-w-sm mx-auto">
            We build fast, secure, well-ranked websites — and reply within 24 hours.
          </p>
          <Link href="/#contact" className="inline-flex items-center gap-2 px-6 py-3.5 text-[15px] font-semibold rounded-full bg-[hsl(var(--foreground))] text-[hsl(var(--background))] hover:opacity-90 transition-opacity">
            Start a project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </article>
    </main>
  )
}
