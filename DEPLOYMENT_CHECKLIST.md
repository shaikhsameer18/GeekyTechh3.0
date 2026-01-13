# Quick Deployment Checklist

## Immediate Actions (Do this NOW)

### 1. ✅ Commit and Push Changes
```bash
git add .
git commit -m "Fix: Update domain configuration and add Netlify redirects"
git push origin main
```

### 2. ✅ Old Netlify Site (ALREADY DONE)
**Status:** You already deleted the Netlify project - Perfect! ✅

This is actually good because:
- The old site is no longer accessible
- No one can visit the old domain
- Google will eventually realize the site is gone

**However**, Google still has the old URLs in its index. We'll fix this in the next steps.

### 3. 📝 Google Search Console (PRIORITY)

**Add New Property:**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Enter: `https://www.geekytechh.in`
4. Verify using DNS or HTML file method

**Submit Sitemap:**
1. In GSC, go to "Sitemaps" (left menu)
2. Enter: `https://www.geekytechh.in/sitemap.xml`
3. Click "Submit"

**Request Indexing:**
1. Use URL Inspection tool
2. Enter: `https://www.geekytechh.in`
3. Click "Request Indexing"
4. Repeat for `/`, `/#services`, `/#projects`, `/#contact`

**Set up Change of Address (if old GSC property exists):**
1. Open old property (geekytechh.netlify.app) if you still have access
2. Go to Settings → Change of Address
3. Select new property: `www.geekytechh.in`
4. Follow the wizard

**Remove Old URLs from Google Index (IMPORTANT):**
Since the Netlify site is deleted, do this:
1. Still in the OLD property (if accessible), go to: **Removals** → **Outdated Content**
2. Request removal for:
   - `https://geekytechh.netlify.app/`
   - Any specific URLs you see indexed
3. If you don't have access to old property, use **[Google's URL Removal Tool](https://search.google.com/search-console/remove-outdated-content)**
4. Submit each old URL from the screenshot you showed me

### 4. 🔍 Force Recrawl
In the new GSC property, request indexing for:
- `https://www.geekytechh.in/`
- `https://www.geekytechh.in/#services`
- `https://www.geekytechh.in/#projects`
- `https://www.geekytechh.in/#contact`

## Verification Steps

### Check if it worked:
1. **Vercel Deployment:**
   - Visit `https://www.geekytechh.in`
   - Verify site loads correctly
   - Check `https://www.geekytechh.in/sitemap.xml`
   - Check `https://www.geekytechh.in/robots.txt`

2. **Netlify Redirect:**
   - Visit `https://geekytechh.netlify.app`
   - Should automatically redirect to `https://www.geekytechh.in`

3. **Google Search:**
   - Google: `site:geekytechh.netlify.app`
   - Should show no results after 2-4 weeks
   - Google: `site:www.geekytechh.in`
   - Should show your pages

## Timeline Expectations

- **Immediate (today):** Deploy changes, set up redirects
- **1-3 days:** Google starts recrawling new domain
- **1 week:** Some pages switch to new domain in search results
- **2-4 weeks:** All pages fully migrated in Google index

## Monitoring

Check weekly in Google Search Console:
- **Coverage** → Should show increasing valid pages
- **Performance** → Clicks/impressions for new domain
- **URL Inspection** → Test individual pages

## What I Fixed

### Files Created:
1. `vercel.json` - Ensures proper www redirect and security headers
2. `netlify.toml` - Redirects old Netlify domain to new domain
3. `DOMAIN_FIX_GUIDE.md` - Full documentation
4. `DEPLOYMENT_CHECKLIST.md` - This file

### Files Verified:
- ✅ `next-sitemap.config.js` - Correct domain
- ✅ `app/layout.tsx` - Correct metadata
- ✅ `app/sitemap.ts` - Correct URLs
- ✅ `public/robots.txt` - Correct sitemap reference
- ✅ Generated sitemaps - Correct URLs

## Need Help?

If you're stuck on any step, let me know which one and I'll provide more detailed instructions.

---
**Status**: Ready to deploy ✅
Build succeeded ✅
Configuration files correct ✅
