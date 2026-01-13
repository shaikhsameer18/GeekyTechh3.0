# Fix Google Crawling Old Netlify Domain

## Problem
Google Search Console is showing that your site is being crawled from the old Netlify domain (`https://geekytechh.netlify.app/`) instead of your new domain (`https://www.geekytechh.in`).

## Solution Steps

### 1. ✅ Update Current Project (COMPLETED)
All configuration files in your Vercel deployment now correctly reference `www.geekytechh.in`:
- `next-sitemap.config.js` ✅
- `app/layout.tsx` (metadata) ✅
- `app/sitemap.ts` ✅
- `public/robots.txt` ✅
- Generated sitemaps ✅
- `vercel.json` (NEW) ✅

### 2. 🚀 Deploy to Vercel
Push these changes to your repository and deploy to Vercel:

```bash
git add .
git commit -m "Fix domain references and add redirects"
git push origin main
```

### 3. 🔧 Fix Old Netlify Site (CRITICAL)
You need to add a redirect on your old Netlify deployment. There are two options:

**Option A: If you still have access to Netlify**
1. Log in to Netlify
2. Go to your old `geekytechh` project
3. Deploy the `netlify.toml` file that I created (it's in your project root)
4. This will redirect ALL traffic from `geekytechh.netlify.app` to `www.geekytechh.in`

**Option B: If you don't have access**
Contact Netlify support or delete the old deployment entirely.

### 4. 📝 Google Search Console Actions

**For the NEW domain (www.geekytechh.in):**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add `www.geekytechh.in` as a new property (if not already added)
3. Verify ownership using one of these methods:
   - DNS verification (recommended)
   - HTML file upload
   - Google Analytics (if already set up)
4. Submit your sitemap:
   - Go to "Sitemaps" in the left menu
   - Add sitemap URL: `https://www.geekytechh.in/sitemap.xml`
   - Click Submit

**For the OLD domain (geekytechh.netlify.app):**
1. If you still have access, submit a removal request:
   - Tools & Settings → Removals → New Request
   - Request removal of entire site
2. Mark it as the old domain and set up a Change of Address:
   - Settings → Change of Address
   - Select new property as `www.geekytechh.in`

### 5. 🔍 Force Google to Recrawl
1. In Google Search Console for the NEW domain:
   - Go to URL Inspection tool
   - Enter your homepage URL: `https://www.geekytechh.in`
   - Click "Request Indexing"
2. Repeat for important pages

### 6. ⏱️ Wait for Google to Update (1-4 weeks)
- Google may take 1-4 weeks to fully update its index
- Monitor "Coverage" in Google Search Console to track progress
- Old URLs should gradually be replaced with new ones

## Additional Recommendations

### 7. Set up 301 Redirects on Netlify
If you can access the old Netlify site, the `netlify.toml` file I created will:
- Redirect ALL traffic from `*.netlify.app` to `www.geekytechh.in`
- Add `noindex` headers to prevent further crawling
- Use 301 (permanent) status codes to signal the move to search engines

### 8. Update External Links
Update any external backlinks you control:
- Social media profiles
- Business directories
- Portfolio sites
- Third-party listings

### 9. Monitor Progress
Check weekly in Google Search Console:
- Search Results → Performance
- Coverage → Valid pages (should show www.geekytechh.in URLs)
- URL Inspection → Check individual pages

## Files Changed
- ✅ `vercel.json` - Added (security headers + www redirect)
- ✅ `netlify.toml` - Added (for old Netlify site redirects)
- ✅ `public/robots.txt` - Already correct
- ✅ `app/layout.tsx` - Already correct
- ✅ `app/sitemap.ts` - Already correct
- ✅ `next-sitemap.config.js` - Already correct

## Next Steps
1. Deploy these changes to Vercel
2. Upload `netlify.toml` to your old Netlify site (if accessible)
3. Submit sitemap to Google Search Console
4. Request indexing for key pages
5. Monitor for 2-4 weeks

---
**Note**: The issue you're seeing is because Google cached the old Netlify domain. Following these steps will resolve it permanently.
