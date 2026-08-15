# AI FAQ Question-Generation Prompt — Mortgage Niche

Adapted for Bond Peter Njoku from the "AI FAQ silo" strategy (Tim The SEO Guru, Aug 2026).
Purpose: generate bottom-of-funnel FAQ questions phrased the way real buyers type them into
ChatGPT / Perplexity / Gemini, so those pages get cited in AI-generated answers.

**Where to run it:** ChatGPT, Perplexity, or Gemini (per the source video). Perplexity is best if
you want it to check live SERPs; ChatGPT/Gemini are better for volume.

**Before running:** paste the current blog filename list into the EXCLUSION LIST section. Generate
it with:

```bash
ls blog/*.html | xargs -n1 basename
```

---

## THE PROMPT (copy everything below this line)

You are a local SEO strategist who specializes in AI search visibility for licensed mortgage
professionals. Your job is to generate FAQ questions that will get a specific loan officer cited
inside AI-generated answers when prospective borrowers ask ChatGPT, Perplexity, or Gemini for
mortgage help in the Dallas–Fort Worth area.

### BUSINESS DETAILS

- **Name:** Bond Peter Njoku, Mortgage Loan Officer
- **License:** NMLS #2670329, with Mortgage Funding Solutions (Company NMLS #1972934)
- **Location:** 1919 S. Shiloh Rd, Suite 518, Garland, TX 75043
- **Website:** bondmortgagesolutions.com
- **Contact:** 469-545-7180 (call/text/WhatsApp)

**Loan programs offered:** FHA (580+ FICO, 3.5% down), VA ($0 down, no monthly MIP), USDA (100%
financing in eligible rural/suburban areas), Conventional (620+ FICO, 3–20% down), Refinance
(rate/term, cash-out under Texas 50(a)(6), FHA Streamline, VA IRRRL), and Down Payment Assistance
programs (TSAHC Home Sweet Texas, TDHCA My First Texas Home, Dallas DHAP, Fort Worth HAP).

**Service area (22 cities):** Garland, Mesquite, Dallas, Plano, Frisco, McKinney, Allen,
Richardson, Rockwall, Royse City, Forney, Terrell, Fort Worth, Arlington, Irving, Denton,
Lewisville, Flower Mound, Grapevine, Mansfield, Southlake, Prosper.

**2026 reference figures (use these, do not invent others):**
- Conforming loan limit: $806,500
- FHA loan limit: $524,225
- DPA income limits: ~$97,200 (Dallas/Tarrant counties), ~$119,700 (Collin/Denton/Rockwall)
- USDA income limits: ~$112,450 for 1–4 person households, ~$148,450 for 5–8 person households
  (Kaufman, Ellis, Hunt, Henderson counties); ~$119,700 / ~$157,950 (Rockwall County)
- Property tax effective rates: Rockwall ~1.8%, Collin ~1.5%, Dallas ~2.0%, Tarrant ~2.1%

**Unique selling points:** works solo and personally originates every loan (not a call-center
handoff); stacks down payment assistance with FHA for buyers who assume they can't afford to buy;
checks USDA address eligibility and income eligibility for free before a client writes an offer;
handles fully remote pre-approval for out-of-state relocating buyers in 24–48 hours; builds actual
county-specific property tax rates into pre-approvals instead of generic statewide estimates.

**Ideal customers, in priority order:**
1. First-time buyers in Garland, Mesquite, and Dallas — often renters, 580–680 credit, need DPA
   stacking, shopping $200K–$350K
2. DFW veterans and active-duty service members using VA benefits
3. USDA-eligible area buyers in Royse City, Forney, and Terrell — income-qualified, want zero down
4. Move-up buyers in Collin County (Plano, McKinney, Frisco, Allen) — 680–760 credit, $400K–$600K
5. Existing homeowners refinancing, including Texas 50(a)(6) cash-out

### EXCLUSION LIST — DO NOT GENERATE QUESTIONS ALREADY COVERED

This site already has 234 published blog posts. Below is the full list of existing post
filenames. Any question whose primary search intent is already served by one of these is a
DUPLICATE and must not be proposed — generating one would split ranking signals between two pages
competing for the same query.

```
[PASTE THE OUTPUT OF `ls blog/*.html | xargs -n1 basename` HERE]
```

Before you output any question, check it against that list. If a filename already covers the same
city + loan program + intent combination, discard the question and find a genuinely uncovered
angle instead. Err toward discarding.

### WHAT TO GENERATE

Produce **60 questions**, distributed across these nine categories:

1. **Qualification and credit** — what buyers ask when they doubt they can qualify at all
2. **Down payment and assistance programs** — TSAHC/TDHCA/DHAP/HAP eligibility, stacking, repayment
3. **Loan program comparisons** — FHA vs conventional vs USDA vs VA, and when each wins
4. **Costs, rates, and monthly payment** — closing costs, PMI/MIP, escrow, buydowns, points
5. **The loan process and timeline** — pre-approval through closing, document requirements
6. **City and county specifics** — the 22 service-area cities, county tax rates, USDA boundaries
7. **Texas-specific rules** — 50(a)(6) cash-out restrictions, homestead exemption, property taxes
8. **Trust and credentials** — licensing, NMLS verification, working with a solo LO vs a bank
9. **Underserved edge cases competitors ignore** — self-employed and 1099 income, recent
   bankruptcy or foreclosure, ITIN borrowers, non-occupant co-borrowers, gift funds, new
   construction financing, buying while still selling, deferred student loans in DTI

### HOW TO WRITE EACH QUESTION

- Write it **exactly as a real person would type or speak it into an AI assistant** — conversational
  and often grammatically loose, not a polished headline. "can i buy a house in garland with a 590
  credit score" beats "FHA Credit Score Requirements in Garland."
- Make it **specific**. Name a city, a dollar amount, a credit score, a loan program, or a county.
  Reject anything that would read identically for a lender in Ohio.
- Weight toward **bottom-of-funnel buying intent** — someone weeks from applying, not someone idly
  researching. Roughly: 60% buying intent, 25% comparison, 15% general awareness.
- Include a realistic mix of question types: eligibility ("can I…", "do I qualify…"), cost ("how
  much…", "what will my payment be…"), comparison ("what's the difference between…", "which is
  better…"), location ("do you lend in…", "is [city] USDA eligible…"), and trust ("are you
  licensed…", "how do I verify…").
- **Compliance constraint:** these will become pages published by a licensed MLO. Do not write
  questions that invite guaranteed-approval claims, promised interest rates, or anything implying
  a lending commitment. Questions must be answerable factually without promising an outcome.

### OUTPUT FORMAT

For each of the nine categories, output a numbered list of questions. After each question, add a
short bracketed tag with the primary city or program it targets, e.g. `[Garland · FHA + DPA]`.

Then produce three closing sections:

1. **TOP 10 GAP OPPORTUNITIES** — the ten questions you believe competitors in DFW are least
   likely to have answered with a dedicated page. For each, state in one sentence why you think
   it's a gap. These get built first.
2. **CLUSTER MAP** — group the 60 questions into 4–6 topical clusters, and for each cluster name
   the single existing page on bondmortgagesolutions.com it should link to as its hub (choose from
   the service pages: fha-loans.html, va-loans.html, usda-loans.html, conventional-loans.html,
   refinance.html, down-payment-assistance.html, pre-approval.html, or a locations/[city].html).
3. **FIVE BLOG POST IDEAS** — drawn from the clusters, each with a proposed slug in the site's
   existing kebab-case convention (e.g. `usda-loan-income-limits-dfw-by-county-2026.html`), and a
   one-line note on which cluster hub it supports.

---

## Notes on using the output

- Cross-check every proposed slug against `blog/` **programmatically** before writing anything:
  ```bash
  ls blog/ | grep -i "proposed-slug-fragment"
  ```
  A visual scan of a 234-line filename list is not reliable — that failure overwrote a live post
  on 2026-08-14.
- Feed accepted topics into the `daily-blog-posts-bond-peter` scheduled task's priority queue in
  `~/.claude/scheduled-tasks/daily-blog-posts-bond-peter/SKILL.md`.
- Per the source video's step 5: paste the same questions back into ChatGPT afterward to check
  whether the site is being cited yet, and re-check periodically to track movement.
