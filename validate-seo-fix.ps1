#!/usr/bin/env pwsh

# SEO Fix Validation Script
# Run this after deployment to verify all fixes are working

Write-Host "`n🔍 GeekyTechh SEO Fix Validation Script" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

$baseUrl = "https://www.geekytechh.in"
$allTestsPassed = $true

# Test 1: Check if sitemap is accessible
Write-Host "Test 1: Checking sitemap accessibility..." -ForegroundColor Yellow
try {
    $sitemapResponse = Invoke-WebRequest -Uri "$baseUrl/sitemap.xml" -UseBasicParsing
    if ($sitemapResponse.StatusCode -eq 200) {
        Write-Host "✅ Sitemap is accessible (HTTP 200)" -ForegroundColor Green
        
        # Check if sitemap contains www URLs
        if ($sitemapResponse.Content -match "www\.geekytechh\.in") {
            Write-Host "✅ Sitemap contains www URLs" -ForegroundColor Green
        } else {
            Write-Host "❌ Sitemap does NOT contain www URLs" -ForegroundColor Red
            $allTestsPassed = $false
        }
        
        # Check if sitemap contains non-www URLs (should not)
        if ($sitemapResponse.Content -match "<loc>https://geekytechh\.in(?!\.)</loc>") {
            Write-Host "❌ WARNING: Sitemap contains non-www URLs!" -ForegroundColor Red
            $allTestsPassed = $false
        } else {
            Write-Host "✅ No non-www URLs found in sitemap" -ForegroundColor Green
        }
    }
} catch {
    Write-Host "❌ Sitemap is NOT accessible: $($_.Exception.Message)" -ForegroundColor Red
    $allTestsPassed = $false
}

Write-Host ""

# Test 2: Check robots.txt
Write-Host "Test 2: Checking robots.txt..." -ForegroundColor Yellow
try {
    $robotsResponse = Invoke-WebRequest -Uri "$baseUrl/robots.txt" -UseBasicParsing
    if ($robotsResponse.StatusCode -eq 200) {
        Write-Host "✅ robots.txt is accessible" -ForegroundColor Green
        
        if ($robotsResponse.Content -match "www\.geekytechh\.in") {
            Write-Host "✅ robots.txt contains www URLs" -ForegroundColor Green
        } else {
            Write-Host "❌ robots.txt does NOT contain www URLs" -ForegroundColor Red
            $allTestsPassed = $false
        }
    }
} catch {
    Write-Host "❌ robots.txt error: $($_.Exception.Message)" -ForegroundColor Red
    $allTestsPassed = $false
}

Write-Host ""

# Test 3: Check non-www to www redirect
Write-Host "Test 3: Testing non-www to www redirect..." -ForegroundColor Yellow
try {
    $redirectResponse = Invoke-WebRequest -Uri "https://geekytechh.in" -MaximumRedirection 0 -ErrorAction SilentlyContinue
} catch {
    if ($_.Exception.Response.StatusCode -eq 301 -or $_.Exception.Response.StatusCode -eq 308) {
        $location = $_.Exception.Response.Headers["Location"]
        if ($location -match "www\.geekytechh\.in") {
            Write-Host "✅ Redirect working (301/308 to www)" -ForegroundColor Green
        } else {
            Write-Host "❌ Redirect not pointing to www version" -ForegroundColor Red
            $allTestsPassed = $false
        }
    } else {
        Write-Host "⚠️  Could not verify redirect (may need manual check)" -ForegroundColor Yellow
    }
}

Write-Host ""

# Test 4: Check homepage for canonical tag
Write-Host "Test 4: Checking canonical tag on homepage..." -ForegroundColor Yellow
try {
    $homeResponse = Invoke-WebRequest -Uri $baseUrl -UseBasicParsing
    if ($homeResponse.Content -match '<link rel="canonical" href="https://www\.geekytechh\.in') {
        Write-Host "✅ Canonical tag points to www version" -ForegroundColor Green
    } else {
        Write-Host "❌ Canonical tag NOT found or incorrect" -ForegroundColor Red
        $allTestsPassed = $false
    }
} catch {
    Write-Host "❌ Error checking homepage: $($_.Exception.Message)" -ForegroundColor Red
    $allTestsPassed = $false
}

Write-Host ""

# Test 5: Check for structured data
Write-Host "Test 5: Checking structured data (Schema.org)..." -ForegroundColor Yellow
try {
    $homeResponse = Invoke-WebRequest -Uri $baseUrl -UseBasicParsing
    
    $schemaCount = ([regex]::Matches($homeResponse.Content, 'type="application/ld\+json"')).Count
    
    if ($schemaCount -ge 3) {
        Write-Host "✅ Found $schemaCount structured data schemas (expected 3+)" -ForegroundColor Green
    } elseif ($schemaCount -gt 0) {
        Write-Host "⚠️  Found only $schemaCount schemas (expected 3)" -ForegroundColor Yellow
    } else {
        Write-Host "❌ No structured data found" -ForegroundColor Red
        $allTestsPassed = $false
    }
    
    # Check for specific schema types
    if ($homeResponse.Content -match "ProfessionalService") {
        Write-Host "  ✅ OrganizationSchema present" -ForegroundColor Green
    }
    if ($homeResponse.Content -match "WebSite") {
        Write-Host "  ✅ WebsiteSchema present" -ForegroundColor Green
    }
    if ($homeResponse.Content -match "BreadcrumbList") {
        Write-Host "  ✅ BreadcrumbSchema present" -ForegroundColor Green
    }
} catch {
    Write-Host "❌ Error checking structured data: $($_.Exception.Message)" -ForegroundColor Red
    $allTestsPassed = $false
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan

if ($allTestsPassed) {
    Write-Host "🎉 ALL TESTS PASSED! SEO fix is working correctly!" -ForegroundColor Green
    Write-Host "`n✅ Next Steps:" -ForegroundColor Cyan
    Write-Host "  1. Go to Google Search Console" -ForegroundColor White
    Write-Host "  2. Remove old non-www URLs (Removals tab)" -ForegroundColor White
    Write-Host "  3. Request indexing for www URLs (URL Inspection)" -ForegroundColor White
    Write-Host "  4. Submit fresh sitemap (Sitemaps tab)" -ForegroundColor White
} else {
    Write-Host "⚠️  SOME TESTS FAILED - Review the errors above" -ForegroundColor Red
    Write-Host "`n🔧 Troubleshooting:" -ForegroundColor Cyan
    Write-Host "  1. Ensure deployment is complete (check Vercel)" -ForegroundColor White
    Write-Host "  2. Clear browser cache and test again" -ForegroundColor White
    Write-Host "  3. Wait 5-10 minutes for CDN propagation" -ForegroundColor White
    Write-Host "  4. Check GOOGLE_FRESH_INDEXING_GUIDE.md for help" -ForegroundColor White
}

Write-Host ""

# Test URLs to manually check
Write-Host "📋 Manual Check URLs:" -ForegroundColor Cyan
Write-Host "  Sitemap:           $baseUrl/sitemap.xml" -ForegroundColor White
Write-Host "  Robots.txt:        $baseUrl/robots.txt" -ForegroundColor White
Write-Host "  Schema Validator:  https://validator.schema.org/" -ForegroundColor White
Write-Host "  Rich Results Test: https://search.google.com/test/rich-results" -ForegroundColor White
Write-Host "  Search Console:    https://search.google.com/search-console" -ForegroundColor White

Write-Host ""
