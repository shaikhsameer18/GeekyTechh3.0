import { ogResponse, ogSize, ogContentType } from "@/lib/og"
import { posts, getPost } from "@/lib/posts"

export const alt = "GeekyTechh Insight"
export const size = ogSize
export const contentType = ogContentType

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  return ogResponse({ tag: post ? post.tag : "Insights", title: post ? post.title : "GeekyTechh Insights" })
}
