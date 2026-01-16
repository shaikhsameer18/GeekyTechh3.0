# Quick Deployment Script for SEO Fixes
# Run this script to deploy your SEO improvements

Write-Host "🚀 Deploying SEO Fixes to Vercel..." -ForegroundColor Cyan
Write-Host ""

# Check git status
Write-Host "📊 Checking git status..." -ForegroundColor Yellow
git status
Write-Host ""

# Stage all changes
Write-Host "📦 Staging changes..." -ForegroundColor Yellow
git add .
Write-Host ""

# Commit changes
Write-Host "💾 Committing changes..." -ForegroundColor Yellow
$commitMessage = "Final SEO Fix: Set www.geekytechh.in as canonical URL`n`n- Set canonical URL to www.geekytechh.in`n- Fixed redirect loop by excluding static assets`n- Re-added section fragments to sitemap for crawlability`n- Finalized all metadata and structured data with www"
git commit -m $commitMessage
Write-Host ""

# Push to GitHub
Write-Host "🌐 Pushing to GitHub..." -ForegroundColor Yellow
git push origin main
Write-Host ""

Write-Host "✅ Deployment Started!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Next Steps:" -ForegroundColor Cyan
Write-Host "1. Wait for Vercel to deploy (1-2 minutes)" -ForegroundColor White
Write-Host "2. Verify your site at: https://www.geekytechh.in" -ForegroundColor White
Write-Host "3. Check sitemap at: https://www.geekytechh.in/sitemap.xml" -ForegroundColor White
Write-Host "4. Submit sitemap to Google Search Console" -ForegroundColor White
Write-Host "5. Request re-indexing in Search Console" -ForegroundColor White
Write-Host ""
Write-Host "📖 See SEO-INDEXING-FIX.md for detailed instructions" -ForegroundColor Yellow
