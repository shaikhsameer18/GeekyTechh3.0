import type { StaticImageData } from "next/image"
import codecollab from "@/app/assets/projectimg/codecollab.png"
import aliport from "@/app/assets/projectimg/aliportfolio.png"
import eventmind from "@/app/assets/projectimg/event.png"
import searchbag from "@/app/assets/projectimg/search.png"
import lainabag from "@/app/assets/projectimg/laina.png"
import alvira from "@/app/assets/projectimg/alvira.png"

export interface CaseStudyMetric {
  /** Big number / short value, e.g. "95+" or "100%" */
  value: string
  /** What it measures, e.g. "Lighthouse performance" */
  label: string
}

export interface CaseStudy {
  slug: string
  title: string
  /** Client / brand this was built for */
  client: string
  category: "E-Commerce" | "Web App" | "Developer Tools" | "Portfolio"
  /** One line for cards */
  summary: string
  /** Whether this is a live production site we can point clients to */
  live: boolean
  link: string
  image: StaticImageData
  /** Tech used on this project */
  stack: string[]
  /** The client's situation / what they needed */
  challenge: string
  /** How we approached and solved it */
  approach: string[]
  /** What was delivered. Keep these honest + defensible. */
  outcome: string
  /** Verifiable, defensible metrics (no invented business KPIs) */
  metrics: CaseStudyMetric[]
  /** Show on the home "Featured Work" strip */
  featured: boolean
}

/**
 * NOTE ON HONESTY: Every project here is real and live. Metrics are limited to
 * things Sameer can defend in a sales call — production status, responsive
 * coverage, performance posture, feature scope. Replace `metrics` with real
 * Lighthouse / analytics numbers once measured, and add client quotes to
 * `lib/site.ts` testimonials as they come in.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "laina-bags",
    title: "Laina Bags",
    client: "Laina Bags",
    category: "E-Commerce",
    summary: "A premium fashion-bags storefront built to sell — fast, mobile-first, and conversion-focused.",
    live: true,
    link: "https://www.lainabags.com/",
    image: lainabag,
    stack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    challenge:
      "Laina needed a storefront that felt as premium as its products — quick to browse on mobile, easy to update, and built to turn visitors into buyers rather than a generic template drop.",
    approach: [
      "Designed a clean, product-first layout that puts the bags front and centre.",
      "Built a mobile-first responsive experience for shoppers browsing on phones.",
      "Optimised images and page loads so the catalogue feels instant.",
      "Structured the site for SEO so products are discoverable on search.",
    ],
    outcome:
      "A live, production storefront the owner can point customers to with confidence — fast, polished, and consistent across every screen size.",
    metrics: [
      { value: "Live", label: "In production" },
      { value: "100%", label: "Mobile responsive" },
      { value: "SEO", label: "Search-structured" },
    ],
    featured: true,
  },
  {
    slug: "search-bags",
    title: "Search Bags",
    client: "Search Bag",
    category: "E-Commerce",
    summary: "A luxury bag e-commerce platform with a refined catalogue and smooth browsing.",
    live: true,
    link: "https://www.searchbag.in/",
    image: searchbag,
    stack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    challenge:
      "Search Bag wanted a luxury shopping experience that reflected the quality of the collection while staying fast and simple to browse.",
    approach: [
      "Crafted a refined, high-contrast catalogue layout for a premium feel.",
      "Prioritised performance so large product imagery stays snappy.",
      "Made the full journey responsive from phone to desktop.",
    ],
    outcome:
      "A live luxury storefront running in production with a consistent, premium browsing experience.",
    metrics: [
      { value: "Live", label: "In production" },
      { value: "100%", label: "Responsive" },
    ],
    featured: true,
  },
  {
    slug: "event-mind",
    title: "Event Mind",
    client: "Event Mind",
    category: "Web App",
    summary: "An event-management platform with real-time collaboration for planning teams.",
    live: true,
    link: "https://event-mind.vercel.app/",
    image: eventmind,
    stack: ["Next.js", "React", "Node.js", "Tailwind CSS"],
    challenge:
      "Planning teams needed one place to organise events and collaborate without the mess of spreadsheets and scattered chats.",
    approach: [
      "Designed an intuitive dashboard around the real planning workflow.",
      "Built collaborative, real-time-friendly interactions.",
      "Kept the UI clean so non-technical users stay oriented.",
    ],
    outcome:
      "A working product that turns event planning into a single, shared, organised workspace.",
    metrics: [
      { value: "Live", label: "In production" },
      { value: "Real-time", label: "Collaboration" },
    ],
    featured: true,
  },
  {
    slug: "codecollab",
    title: "CodeCollab",
    client: "CodeCollab",
    category: "Developer Tools",
    summary: "An AI-assisted collaborative code editor for developers working together in the browser.",
    live: true,
    link: "https://codecollabfinal.vercel.app/",
    image: codecollab,
    stack: ["Next.js", "React", "Node.js", "AI"],
    challenge:
      "Developers wanted to write and review code together in real time, with AI assistance, straight from the browser — no setup friction.",
    approach: [
      "Built a browser-based editor focused on live collaboration.",
      "Integrated AI assistance into the coding flow.",
      "Kept latency and UX tight so collaboration feels natural.",
    ],
    outcome:
      "A live developer tool that pairs real-time collaboration with AI assistance in one place.",
    metrics: [
      { value: "Live", label: "In production" },
      { value: "AI", label: "Assisted editing" },
    ],
    featured: true,
  },
  {
    slug: "alvira-bags",
    title: "Alvira Bags",
    client: "Alvira",
    category: "E-Commerce",
    summary: "A premium bag-collection website with a clean, catalogue-driven layout.",
    live: true,
    link: "https://alvirabag.vercel.app/",
    image: alvira,
    stack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    challenge:
      "Alvira needed a simple, elegant home for its bag collection that looked premium and loaded fast.",
    approach: [
      "Designed a minimal, product-forward catalogue.",
      "Ensured a fully responsive experience across devices.",
    ],
    outcome: "A live, polished collection site running in production.",
    metrics: [
      { value: "Live", label: "In production" },
      { value: "100%", label: "Responsive" },
    ],
    featured: false,
  },
  {
    slug: "ali-portfolio",
    title: "Ali Portfolio",
    client: "Mohd Ali",
    category: "Portfolio",
    summary: "A responsive personal portfolio with a clean, modern design.",
    live: true,
    link: "https://mohd-ali.vercel.app/",
    image: aliport,
    stack: ["React", "Tailwind CSS", "Vercel"],
    challenge:
      "A clean, fast personal portfolio that presents work clearly and works perfectly on every device.",
    approach: [
      "Built a minimal, content-first layout.",
      "Made it fully responsive and quick to load.",
    ],
    outcome: "A live portfolio that presents work cleanly across all screens.",
    metrics: [
      { value: "Live", label: "In production" },
      { value: "100%", label: "Responsive" },
    ],
    featured: false,
  },
]

export const featuredCaseStudies = caseStudies.filter((c) => c.featured)

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}
