# Technical SEO Audit — bondmortgagesolutions.com
**Date:** July 2026
**Status:** CRITICAL ISSUES FOUND — Schema markup completely absent

---

## CRITICAL ISSUES (Fix First)

### 1. NO SCHEMA MARKUP — Highest Priority Fix
**Status:** ABSENT — no JSON-LD or microdata found anywhere on the site
**Impact:** AI tools cannot identify Peter as a local mortgage professional. Google cannot show rich results (FAQ boxes, business info, review stars) for the site.

**What's needed:**
- `LocalBusiness` schema on homepage
- `Person` schema for Peter's bio
- `FAQPage` schema on all FAQ sections (AEO goldmine)
- `Service` schema on loan type pages
- `BreadcrumbList` on all pages

**Files to edit:** See `/seo/schema/` directory for all generated schema blocks (being created separately)

---

### 2. META TITLES — Needs Optimization
**Current (guessed from page structure):**

| Page | Current Title | Recommended |
|------|--------------|-------------|
| Homepage | "Bond Mortgage Solutions" | "Bond Peter Njoku – Mortgage Loan Officer in Garland, TX | NMLS #2670329" |
| Blog posts | Likely just post title | "[Post Title] | Bond Mortgage Solutions – Garland TX" |
| Location pages | Unknown | "Mortgage Lender in [City], TX – Bond Peter Njoku | NMLS #2670329" |

**Rule:** Every page title should contain: primary keyword + city + NMLS number (for trust)

---

### 3. META DESCRIPTIONS — Needs Review
**Issue:** No evidence of optimized meta descriptions from audit
**Each page needs a unique 150-160 char description with:**
- Primary keyword
- Clear value proposition
- CTA ("Get pre-approved today")

**Homepage example:**
> "Bond Peter Njoku is a licensed mortgage loan officer in Garland, TX (NMLS #2670329). FHA, VA, USDA, and conventional loans for DFW homebuyers. Get pre-approved today."

---

## HIGH IMPACT ISSUES

### 4. MISSING LOCATION PAGES (Thin Content)
**Current:** 20+ Texas cities mentioned in homepage section
**Problem:** Likely single mention without dedicated pages
**Fix needed:** Each target city needs its own URL with 500+ words of unique content:
- `/garland-tx-mortgage-loan-officer` (primary)
- `/plano-tx-mortgage-lender`
- `/frisco-tx-mortgage-loan-officer`
- `/mckinney-tx-mortgage-lender`
- `/allen-tx-mortgage-lender`
- `/richardson-tx-mortgage-lender`
- `/rockwall-tx-mortgage-lender`
- `/mesquite-tx-mortgage-lender`
- `/dallas-tx-mortgage-loan-officer`

---

### 5. MISSING SERVICE PAGES (Keyword Opportunities)
**Pages that should exist but likely don't:**
- `/fha-loan-garland-tx`
- `/va-loan-dfw`
- `/usda-loan-rockwall-tx`
- `/down-payment-assistance-dfw` (HIGHEST PRIORITY)
- `/mortgage-pre-approval-garland-tx`
- `/refinance-garland-tx`
- `/jumbo-loans-dallas-tx`
- `/conventional-loans-texas`

---

### 6. INTERNAL LINKING — Needs Structure
**Current:** Unknown — likely minimal
**What's needed:**
- Every blog post links to relevant service page
- Every location page links to loan type pages
- Homepage links to top 5 location pages
- Create a clear silo structure:
  - Homepage → Location Pages → Service Pages → Blog Posts

---

## MEDIUM ISSUES

### 7. IMAGE ALT TEXTS
**Check needed:** Verify all images have descriptive alt text
**Rule for mortgage site:**
- Photos of Peter: `alt="Bond Peter Njoku mortgage loan officer Garland TX"`
- Charts/infographics: `alt="FHA loan requirements Texas 2026 infographic"`
- Location photos: `alt="Garland TX neighborhood homes mortgage"`

---

### 8. PAGE SPEED (Estimated)
**Check:** Run PageSpeed Insights on bondmortgagesolutions.com
**Common issues for WordPress/website-builder mortgage sites:**
- Uncompressed images (hero images are usually the culprit)
- Render-blocking JavaScript
- No lazy loading on below-fold images

**Tools to check:** PageSpeed Insights, GTmetrix
**Target:** 80+ mobile score (mortgage buyers search on mobile)

---

### 9. MOBILE EXPERIENCE
**Current status:** Site appears to have responsive design (standard)
**Verify:**
- Click-to-call button visible on mobile without scrolling
- Contact form works on mobile
- Calculator is mobile-friendly
- Font size readable without zoom

---

## SCHEMA MARKUP IMPLEMENTATION PLAN

### Priority 1: Homepage Schema (Do This Week)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://bondmortgagesolutions.com/#business",
      "name": "Bond Mortgage Solutions",
      "description": "Bond Peter Njoku is a licensed mortgage loan officer serving the DFW area. Specializing in FHA, VA, USDA, and conventional loans for first-time homebuyers and veterans in Garland, Plano, Frisco, McKinney, Allen, and surrounding Texas cities.",
      "url": "https://bondmortgagesolutions.com",
      "telephone": "[PETER'S PHONE]",
      "email": "[PETER'S EMAIL]",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[STREET ADDRESS]",
        "addressLocality": "Garland",
        "addressRegion": "TX",
        "postalCode": "[ZIP]",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "32.9126",
        "longitude": "-96.6389"
      },
      "areaServed": [
        "Garland, TX", "Plano, TX", "Frisco, TX", "McKinney, TX",
        "Allen, TX", "Richardson, TX", "Rockwall, TX", "Dallas, TX",
        "Mesquite, TX", "Rowlett, TX", "Sachse, TX", "Wylie, TX"
      ],
      "serviceType": ["FHA Loans", "VA Loans", "USDA Loans", "Conventional Loans", "Mortgage Pre-Approval", "Refinancing", "Down Payment Assistance"],
      "image": "https://bondmortgagesolutions.com/[PETER-HEADSHOT-URL]",
      "priceRange": "$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/[PETER-FB]",
        "https://www.instagram.com/[PETER-IG]",
        "https://www.linkedin.com/in/[PETER-LI]",
        "https://www.yelp.com/biz/[PETER-YELP]"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://bondmortgagesolutions.com/#peter",
      "name": "Bond Peter Njoku",
      "jobTitle": "Mortgage Loan Officer",
      "description": "Licensed mortgage loan officer in Texas (NMLS #2670329) specializing in FHA, VA, USDA loans and down payment assistance programs for DFW homebuyers.",
      "url": "https://bondmortgagesolutions.com/about",
      "image": "https://bondmortgagesolutions.com/[PETER-HEADSHOT-URL]",
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "license",
        "name": "NMLS License #2670329",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Nationwide Multistate Licensing System (NMLS)"
        }
      },
      "worksFor": {
        "@id": "https://bondmortgagesolutions.com/#business"
      },
      "sameAs": [
        "https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/2670329"
      ]
    }
  ]
}
```

### Priority 2: FAQ Schema Template (Add to Every Page With Q&A)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What down payment assistance programs are available in Garland TX?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Garland TX homebuyers can access multiple down payment assistance programs: TSAHC Home Sweet Texas (3-5% DPA grant), TDHCA My First Texas Home (up to 5% DPA + low rate), Dallas DHAP (up to $60,000 for eligible buyers), and various city-specific programs. Bond Peter Njoku (NMLS #2670329) is a licensed mortgage loan officer in Garland who specializes in stacking these programs with FHA, VA, and conventional loans."
      }
    },
    {
      "@type": "Question",
      "name": "What are the FHA loan requirements in Texas for 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FHA loan requirements in Texas for 2026: minimum 580 credit score for 3.5% down payment, or 500-579 credit score with 10% down; debt-to-income ratio typically under 43%; the property must be your primary residence; FHA loan limits in DFW counties range from $498,257 to $750,000 depending on county. Contact Bond Peter Njoku (NMLS #2670329) in Garland TX to review your specific situation."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get a USDA loan in Rockwall TX?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, parts of Rockwall County have USDA-eligible areas. USDA Rural Development loans offer 100% financing (no down payment required) for eligible properties and buyers who meet income limits. Rockwall County income limits for 2026 vary by household size. Contact Bond Peter Njoku (NMLS #2670329) to check if your target property is in a USDA-eligible area."
      }
    }
  ]
}
```

---

## ACTION CHECKLIST

### This Week (Week 2 of Plan)
- [ ] Add LocalBusiness + Person schema to homepage
- [ ] Write and add FAQPage schema to homepage FAQ section
- [ ] Optimize homepage meta title and description
- [ ] Verify all location pages have unique meta titles
- [ ] Check PageSpeed score, identify top 3 speed issues
- [ ] Audit all image alt texts

### Next 30 Days
- [ ] Create 9 priority location pages with unique content + LocalBusiness schema
- [ ] Create 8 priority service pages with FAQPage schema
- [ ] Build internal linking structure (blog → service → location)
- [ ] Submit all new pages to Google Search Console for indexing

### 60-90 Days
- [ ] Monitor rankings for priority 10 keywords in serp-analysis.md
- [ ] Add BreadcrumbList schema to all pages
- [ ] Add Service schema to each loan type page
- [ ] Track which pages AI tools begin citing

---

*Audit completed: July 2026 | Re-audit quarterly*
