export interface PostBlock {
  type: "p" | "h2" | "ul"
  text?: string
  items?: string[]
}

export interface Post {
  slug: string
  title: string
  excerpt: string
  /** ISO date */
  date: string
  readingTime: string
  tag: string
  content: PostBlock[]
}

/** Published insights. Real, practical content — no placeholders. */
export const posts: Post[] = [
  {
    slug: "website-speed-is-a-growth-feature",
    title: "Website Speed Is a Growth Feature, Not a Nice-to-Have",
    excerpt:
      "A slow website quietly loses you customers before they ever see your product. Here's why speed is one of the highest-ROI investments you can make — and how we hit 98/100 on our client stores.",
    date: "2026-06-24",
    readingTime: "5 min read",
    tag: "Performance",
    content: [
      { type: "p", text: "Most businesses think of website speed as a technical detail — something for the developers to worry about after the design looks good. That's backwards. Speed isn't a finishing touch; it's one of the biggest levers you have on revenue, and it's usually the cheapest to pull." },
      { type: "h2", text: "Slow sites lose customers silently" },
      { type: "p", text: "The damage from a slow site is invisible. Nobody emails to say \"your page took four seconds to load, so I left.\" They just leave — and you never know they were there. Every extra second of load time increases the number of people who bounce before your content even appears. On mobile, where connections are slower and patience is thinner, the effect is brutal." },
      { type: "p", text: "For an e-commerce store, this is money walking out the door. A visitor who came from an ad you paid for, ready to buy, gone because the product images were still loading. You paid for that click twice: once to acquire it, once to lose it." },
      { type: "h2", text: "Google is watching too" },
      { type: "p", text: "Speed isn't only about the humans. Google has confirmed that page experience and Core Web Vitals — largely measures of loading speed and stability — are ranking signals. A slow site ranks lower, which means fewer people find you in the first place. So a slow site is hit twice: fewer visitors, and a higher share of them leaving." },
      { type: "h2", text: "What \"fast\" actually looks like" },
      { type: "p", text: "When we build a store, performance is designed in from the first line, not bolted on at the end. That means:" },
      { type: "ul", items: [
        "Modern frameworks (Next.js / React) that ship only what the page needs",
        "Images optimised and sized correctly for each device",
        "Server-rendered content so the page is useful the instant it loads",
        "Minimal third-party scripts, because each one is a tax on speed",
      ] },
      { type: "p", text: "The result isn't theoretical. Our client storefronts — Laina Bags and Search Bags — both score 98/100 on Google's mobile performance test, with perfect 100s for SEO. That's the difference between a site that feels instant and one that feels like work." },
      { type: "h2", text: "The takeaway" },
      { type: "p", text: "If you're choosing where to invest in your website, speed should be near the top of the list. It compounds: it lifts conversions, improves your search ranking, and makes every marketing rupee you spend go further. Fast isn't a luxury — it's the foundation everything else sits on." },
    ],
  },
  {
    slug: "website-security-is-not-optional",
    title: "Website Security Isn't Optional: How to Actually Secure Yours",
    excerpt:
      "You don't need to be a bank to be a target. Most attacks are automated and indiscriminate. Here's a practical, no-jargon guide to keeping your site — and your customers — safe.",
    date: "2026-06-10",
    readingTime: "6 min read",
    tag: "Security",
    content: [
      { type: "p", text: "There's a comforting myth that hackers only go after big companies. In reality, the vast majority of attacks are automated bots scanning the entire internet for known weaknesses. They don't care how small you are — if your site has an open door, they'll walk through it. A compromised website can mean stolen customer data, a defaced storefront, or your domain quietly turned into a spam machine." },
      { type: "h2", text: "The basics that stop most attacks" },
      { type: "p", text: "The good news: most break-ins exploit a handful of well-known gaps. Close these and you're ahead of the majority of sites online:" },
      { type: "ul", items: [
        "Serve everything over HTTPS — it encrypts data in transit and is now expected by both browsers and Google",
        "Keep every framework, plugin, and dependency updated; outdated software is the number-one entry point",
        "Use strong, unique passwords and turn on two-factor authentication for every admin account",
        "Validate and sanitise anything a user can type in, to block injection attacks",
        "Take regular, automated backups you can actually restore from",
      ] },
      { type: "h2", text: "Protect the forms and logins" },
      { type: "p", text: "Contact forms and login pages are the most-probed parts of any site. Add spam protection (a honeypot field or a challenge), rate-limit repeated attempts, and never trust data coming from the browser without checking it on the server. A surprising number of breaches start with a form field that was assumed to be harmless." },
      { type: "h2", text: "Think about the whole stack" },
      { type: "p", text: "Security isn't just the website code. It's the server, the network, and the accounts around it. Firewalls, sensible access controls, and monitoring for unusual activity all matter. If a build touches sensitive data or infrastructure, it deserves a proper security review — not an afterthought." },
      { type: "h2", text: "Security is a feature your customers feel" },
      { type: "p", text: "A secure site isn't only about avoiding disaster. That padlock in the address bar, a checkout that feels safe, a brand that hasn't made the news for the wrong reasons — these build the trust that makes people comfortable handing over their card details. Security and conversion are on the same team." },
      { type: "p", text: "You don't need to become a security expert. You do need to build on a foundation where these basics are handled by default — which is exactly how we approach every project." },
    ],
  },
  {
    slug: "why-seo-still-matters",
    title: "SEO in 2026: Why It Still Matters and How to Actually Rank",
    excerpt:
      "SEO isn't dead, and it isn't magic. It's the difference between a website people find and one that sits in the dark. Here's what actually moves the needle today.",
    date: "2026-05-27",
    readingTime: "6 min read",
    tag: "SEO",
    content: [
      { type: "p", text: "Every year someone declares SEO dead. Every year it quietly keeps driving the majority of trackable web traffic. The reason is simple: when people want something, they search for it. If your business doesn't show up, you don't exist for that customer — no matter how good your product is." },
      { type: "h2", text: "SEO is compounding, unpaid distribution" },
      { type: "p", text: "Ads stop the moment you stop paying. SEO works the other way: the effort you put in keeps returning visitors for months and years. A well-optimised page can quietly bring in customers long after it's published. For a small business, that's some of the highest-leverage marketing there is." },
      { type: "h2", text: "The foundations that still win" },
      { type: "p", text: "Search engines have gotten smarter, but the fundamentals haven't changed much. Get these right and you're doing more than most competitors:" },
      { type: "ul", items: [
        "Fast, mobile-friendly pages — speed and mobile usability are direct ranking factors",
        "Clean, semantic structure and proper metadata so crawlers understand each page",
        "Structured data (schema) so you're eligible for rich results and better listings",
        "Genuinely useful content that answers what people are actually searching for",
        "A logical site structure and internal links that guide both users and crawlers",
      ] },
      { type: "h2", text: "Technical SEO is invisible but decisive" },
      { type: "p", text: "A lot of SEO happens where visitors never look: how quickly pages load, whether they're server-rendered, how the HTML is structured, whether your sitemap and schema are correct. Get the technical foundation wrong and even great content struggles to rank. This is where a properly built site pulls ahead of a template — our client stores hit a perfect 100/100 SEO score on Google's mobile test because the groundwork was done right." },
      { type: "h2", text: "Content earns the ranking" },
      { type: "p", text: "Technical excellence gets you to the start line; content wins the race. Write for the questions your customers ask, be specific and honest, and update pages as things change. Search engines increasingly reward pages that clearly and genuinely help the person reading them." },
      { type: "h2", text: "The takeaway" },
      { type: "p", text: "SEO isn't a trick you add later — it's a property of a well-built, genuinely useful website. Build on a fast, clean, well-structured foundation, publish content that helps people, and let it compound. That's how you get found." },
    ],
  },
]

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
