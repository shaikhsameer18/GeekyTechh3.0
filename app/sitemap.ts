import { MetadataRoute } from 'next'
import { caseStudies } from '@/lib/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.geekytechh.in'
  const currentDate = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: currentDate, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/work`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/services`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/#contact`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
  ]

  const workRoutes: MetadataRoute.Sitemap = caseStudies.map((c) => ({
    url: `${baseUrl}/work/${c.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticRoutes, ...workRoutes]
}
