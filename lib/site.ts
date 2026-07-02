/**
 * Single source of truth for positioning, metrics, and navigation.
 * GeekyTechh is a startup brand; "we" is brand voice (not a headcount claim).
 * The site sells what we do + outcomes — never "studio", "agency", or "solo".
 * Founder credibility lives only in the About block.
 */

export const site = {
  name: "GeekyTechh",
  legalName: "GeekyTechh",
  // Outcome-led positioning (replaces the freelancer "Looking for a developer?" line)
  tagline: "We design & build software that ships.",
  subline:
    "We design and build fast, conversion-focused websites and web apps for founders and growing businesses.",
  location: "Mumbai, India",
  email: "geekytechh@gmail.com",
  phone: "+91 77748 97159",
  phoneHref: "tel:+917774897159",
  emailHref: "mailto:geekytechh@gmail.com",
  url: "https://www.geekytechh.in",
} as const

/** Honest, verifiable proof numbers. "98" = real avg mobile Lighthouse perf across client stores. */
export const metrics: { value: string; label: string }[] = [
  { value: "98", label: "Avg. performance" },
  { value: "100%", label: "Live in production" },
  { value: "5+", label: "Projects shipped" },
  { value: "24h", label: "Reply time" },
]

/** Real brands GeekyTechh has built for — used in the "trusted by" strip. */
export const clientBrands: { name: string; href: string }[] = [
  { name: "Laina Bags", href: "https://www.lainabags.com/" },
  { name: "Search Bag", href: "https://www.searchbag.in/" },
  { name: "CodeCollab", href: "https://codecollabfinal.vercel.app/" },
]

/**
 * Client testimonials — wording approved by Sohail (Laina Bags) and
 * Amanullah (Search Bags). Cleared for publication.
 */
export const testimonials: { quote: string; name: string; role: string; href?: string }[] = [
  {
    quote:
      "GeekyTechh gave Laina Bags a storefront that finally looks as premium as our products. It loads instantly, works flawlessly on phones, and customers can actually find what they want. Exactly what we needed.",
    name: "Sohail Shaikh",
    role: "Laina Bags",
    href: "https://www.lainabags.com/",
  },
  {
    quote:
      "The Search Bags site feels genuinely luxury — fast, clean, and effortless to browse. Sameer understood the brand and delivered a site that does it justice. Communication was quick and honest throughout.",
    name: "Amanullah Shaikh",
    role: "Search Bags",
    href: "https://www.searchbag.in/",
  },
]

export const navItems: { label: string; href: string }[] = [
  { label: "Home", href: "/#home" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
]

/**
 * Founder credibility for the About block. Real face + name build trust.
 * "Founder" is a startup title, not a "solo shop" confession — keep it confident.
 */
export const founder = {
  name: "Sameer Ahmed",
  role: "Founder & Lead Developer",
  bio: "Sameer founded GeekyTechh and stays hands-on across every project — from the first wireframe to the production deploy. That means senior involvement end to end and one clear point of contact, backed by a trusted network of specialists when a build calls for it. No hand-offs, no lost details.",
  linkedin: "https://www.linkedin.com/in/sameerahmed08",
  github: "https://github.com/shaikhsameer18",
  portfolio: "https://dollarsportfolio.vercel.app/",
}

/** Full service catalogue for the /services page. `icon` maps to a lucide icon in the page. */
export const services: {
  key: string
  icon: "globe" | "bot" | "palette" | "server" | "shield" | "briefcase"
  title: string
  tagline: string
  description: string
  deliverables: string[]
}[] = [
    {
      key: "web",
      icon: "globe",
      title: "Web Development",
      tagline: "Fast, modern sites that convert",
      description:
        "Custom websites and web apps built on Next.js and React — engineered for speed, SEO, and conversion, not dropped from a template.",
      deliverables: ["Custom responsive design", "Next.js / React build", "SEO & performance optimisation", "CMS or headless setup", "Deployment & analytics"],
    },
    {
      key: "ecommerce",
      icon: "briefcase",
      title: "E-Commerce",
      tagline: "Storefronts built to sell",
      description:
        "Premium, fast online stores that make browsing effortless and checkout frictionless — the same foundation behind our live retail clients.",
      deliverables: ["Product & catalogue UX", "Cart & checkout flow", "Payment integration", "Mobile-first performance", "SEO for product discovery"],
    },
    {
      key: "uiux",
      icon: "palette",
      title: "UI/UX Design",
      tagline: "Interfaces people enjoy using",
      description:
        "Clean, intuitive design mapped to your brand and the actions you want visitors to take — wireframes through polished, production-ready UI.",
      deliverables: ["Wireframes & user flows", "High-fidelity UI design", "Design system / components", "Prototypes", "Accessibility considerations"],
    },
    {
      key: "backend",
      icon: "server",
      title: "Backend & APIs",
      tagline: "Scalable foundations",
      description:
        "Secure, maintainable server-side architecture — APIs, databases, and integrations that hold up as you grow.",
      deliverables: ["REST / API design", "Database modelling", "Auth & security", "Third-party integrations", "Cloud deployment"],
    },
    {
      key: "security",
      icon: "shield",
      title: "Network & Cybersecurity",
      tagline: "Ship with confidence",
      description:
        "Secure network setup and practical hardening so your product and infrastructure stay protected.",
      deliverables: ["Security review", "Firewall & network setup", "Hardening best practices", "Monitoring guidance"],
    },
    {
      key: "consulting",
      icon: "bot",
      title: "AI & IT Consulting",
      tagline: "Right tech, right decisions",
      description:
        "Strategic guidance and AI/ML integration to help you pick the right stack and ship the right thing.",
      deliverables: ["Tech strategy", "AI/ML integration", "Architecture guidance", "Code & performance audits"],
    },
  ]

/** Company values for the /about page. */
export const values: { title: string; desc: string }[] = [
  { title: "Ship real things", desc: "We measure ourselves by what's live in production — not decks or prototypes." },
  { title: "Speed is a feature", desc: "Fast to load, fast to reply, fast to iterate. Slowness costs you customers." },
  { title: "Straight talk", desc: "Plain language, honest timelines, no jargon or surprise invoices." },
  { title: "Own the outcome", desc: "We care whether the site actually converts — not just whether it launched." },
]

/** FAQs for the /services page. */
export const faqs: { q: string; a: string }[] = [
  { q: "How long does a project take?", a: "A focused marketing site is typically 1–3 weeks; larger web apps and e-commerce builds run longer. You'll get a clear timeline before we start." },
  { q: "What does it cost?", a: "It depends on scope. Share your project in the contact form and you'll get a transparent quote — no hidden fees." },
  { q: "Do you work with clients outside Mumbai?", a: "Yes. We work remotely with clients anywhere; communication stays clear regardless of location." },
  { q: "Will I be able to update the site myself?", a: "Where it makes sense we set up a CMS so you can edit content without touching code, and we're available for ongoing support." },
]

/** The client-facing engagement steps — sells process + outcomes, not a tech dump. */
export const processSteps: { step: string; title: string; desc: string }[] = [
  {
    step: "01",
    title: "Discovery",
    desc: "We start with your goals, users, and constraints — so we build the right thing, not just a nice thing.",
  },
  {
    step: "02",
    title: "Design",
    desc: "Clean, conversion-focused UI mapped to your brand and the actions you want visitors to take.",
  },
  {
    step: "03",
    title: "Build",
    desc: "Fast, modern, maintainable code (Next.js / React) with performance and SEO baked in from day one.",
  },
  {
    step: "04",
    title: "Launch & Support",
    desc: "We ship to production, wire up analytics, and stay on to iterate as you grow.",
  },
]
