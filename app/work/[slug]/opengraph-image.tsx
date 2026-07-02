import { ogResponse, ogSize, ogContentType } from "@/lib/og"
import { caseStudies, getCaseStudy } from "@/lib/projects"

export const alt = "GeekyTechh case study"
export const size = ogSize
export const contentType = ogContentType

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  return ogResponse({
    tag: study ? `${study.category} · Case Study` : "Case Study",
    title: study ? study.title : "GeekyTechh",
  })
}
