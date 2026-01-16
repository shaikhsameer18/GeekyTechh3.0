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
$commitMessage = "Fix Google indexing: Update canonical URLs and sitemap`n`n- Set canonical URL to geekytechh.in (without www)`n- Update vercel.json to redirect www to non-www`n- Remove hash URLs from sitemap`n- Update all metadata and robots.txt`n- Fix 'Alternate page with proper canonical tag' error"
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
Write-Host "2. Verify your site at: https://geekytechh.in" -ForegroundColor White
Write-Host "3. Check sitemap at: https://geekytechh.in/sitemap.xml" -ForegroundColor White
Write-Host "4. Submit sitemap to Google Search Console" -ForegroundColor White
Write-Host "5. Request re-indexing in Search Console" -ForegroundColor White
Write-Host ""
Write-Host "📖 See SEO-INDEXING-FIX.md for detailed instructions" -ForegroundColor Yellow
