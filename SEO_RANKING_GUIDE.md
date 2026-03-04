# SEO Ranking & Indexing Guide – GeekyTechh

This guide covers indexing, sitemap generation, and **ranking** optimizations for geekytechh.in.

---

## 1. Favicon Setup (Already Done)

All favicons are in `public/favicon/`. The site uses:

- `favicon.ico` – browser tab
- `favicon.svg` – scalable favicon
- `favicon-96x96.png` – standard size
- `apple-touch-icon.png` – iOS home screen (180×180)
- `web-app-manifest-192x192.png` – PWA 192px
- `web-app-manifest-512x512.png` – PWA 512px

Root URLs `/favicon.ico` and `/apple-touch-icon.png` redirect to the favicon folder.

---

## 2. robots.txt

Location: `public/robots.txt`

Configured to:

- Allow all crawlers (`*`)
- Disallow `/api/`, `/admin`, `/_next/`
- Point to sitemap
- Set host to canonical domain

---

## 3. Sitemap Generation

### How It Works

- Next.js generates `sitemap.xml` from `app/sitemap.ts` during build.
- It is served at: `https://www.geekytechh.in/sitemap.xml`

### Steps to Generate/Update Sitemap

1. Build the project:
   ```bash
   npm run build
   ```

2. Run the dev server or deploy:
   ```bash
   npm run dev
   ```

3. Check the sitemap:
   - Visit: `https://www.geekytechh.in/sitemap.xml` (production)
   - Or locally: `http://localhost:3000/sitemap.xml`

### Optional: next-sitemap

If you want extra URLs or a static sitemap file:

1. After build:
   ```bash
   npm run sitemap
   ```

2. This uses `next-sitemap.config.js` and writes to `public/sitemap.xml`.

For this single-page site, the built-in `app/sitemap.ts` is enough.

---

## 4. Google Search Console & Indexing

1. Go to [Google Search Console](https://search.google.com/search-console)

2. Add property for `https://www.geekytechh.in`

3. Verify ownership:
   - HTML tag in `app/layout.tsx` (replace `YOUR_GOOGLE_VERIFICATION_CODE_HERE`)
   - Or DNS TXT record

4. Submit sitemap:
   - Sitemaps → Add sitemap → `https://www.geekytechh.in/sitemap.xml`

5. Request indexing for the homepage:
   - URL Inspection → enter `https://www.geekytechh.in` → Request Indexing

---

## 5. Ranking Optimizations (Already Implemented)

### Structured Data (Schema.org)

- **Organization** – Company details, contact, services, geo
- **WebSite** – SearchAction for site search
- **BreadcrumbList** – Navigation
- **ItemList (Services)** – Service list for rich results

### Metadata

- Title and meta description (150–160 chars)
- Mumbai and India focus for local SEO
- Canonical URL
- Open Graph and Twitter cards

### Technical SEO

- Semantic HTML (headings, sections)
- Fast loading (Next.js)
- Mobile-friendly
- `robots` meta for index/follow

---

## 6. Additional Ranking Actions

### A. Add og-image.png

Create `public/og-image.png` (1200×630 px) for social sharing. Used in layout metadata.

### B. Content for Ranking

- Add an FAQ section and FAQ schema
- Add a blog or case studies for more indexed pages
- Use primary keywords (e.g. “web development Mumbai”) in headings and text

### C. Backlinks

- List on directories and review sites
- Guest posts and partner links
- GitHub, LinkedIn, and portfolio links

### D. Core Web Vitals

- Use Vercel Analytics and Speed Insights
- Optimize images with Next.js Image
- Minimize render-blocking scripts

### E. Local SEO

- Add Google Business Profile for Mumbai
- Ensure NAP (Name, Address, Phone) is consistent
- Collect and show client testimonials with schema

---

## 7. Checklist Before Launch

- [ ] Replace `YOUR_GOOGLE_VERIFICATION_CODE_HERE` in layout.tsx
- [ ] Add `public/og-image.png` (1200×630)
- [ ] Confirm `https://www.geekytechh.in/robots.txt` loads
- [ ] Confirm `https://www.geekytechh.in/sitemap.xml` loads
- [ ] Submit sitemap in Google Search Console
- [ ] Test with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Test mobile friendliness in Search Console
