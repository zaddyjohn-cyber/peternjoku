# Competitor Teardown — "usda loan closing costs texas — who pays what"

Date: 2026-09-11

## SERP snapshot (WebSearch, queries: "USDA loan closing costs Texas who pays what" / "USDA loan closing costs Texas guarantee fee seller concessions")

| Rank source | URL | Type | Texas-specific? | Notes |
|---|---|---|---|---|
| 1 | rocketmortgage.com/learn/usda-loan-closing-costs | National lender explainer | No | High DA, WebFetch timed out (ETIMEOUT) — could not extract structure directly, relied on search snippet only |
| 2 | neighborsbank.com/usda-loans/closing-costs | National lender explainer | No | Snippet only |
| 3 | fairway.com/articles/... | National lender explainer | No | Snippet only |
| 4 | **coast2coastlending.com/usda-closing-costs-texas** | **Texas-specific lender page** | **Yes** | WebFetch timed out twice (ETIMEOUT — likely blocking or DNS issue on this host). Could not extract on-page structure. This is the only Texas-specific competitor found in either query and should be assumed to be the strongest direct competitor even though I couldn't confirm its content directly. |
| 5 | mrrate.com/guide/usda-closing-costs... | National guide | No | Snippet only |
| 6 | usdaloans.com/articles/usda-loan-closing-costs | National, USDA-loan-focused site | No | **Fetched successfully — see full teardown below** |
| 7 | usdamortgagesource.com/blog/usda-home-loan-closing-costs | National lender blog | No | Snippet only |
| 8 | societymortgage.com/usda-home-loans/usda-closing-costs | National lender page | No | Snippet only |

**Access notes:** Per playbook budget (3-4 WebFetch calls), spent the budget on: 1 successful fetch (usdaloans.com) + 2 failed attempts on coast2coastlending.com (the one genuinely Texas-specific competitor, DNS/timeout both attempts) + 1 failed attempt on rocketmortgage.com (timeout). No CAPTCHA encountered; no google.com browsing used — all via WebSearch/WebFetch tools.

## Strongest competitor structure (usdaloans.com — the only page I could fully fetch)

- H1: "USDA Loan Closing Costs: What You Can Expect to Pay"
- ~2,400 words
- H2/H3 flow: How much are closing costs → down payment vs. closing costs → what costs cover (loan-related / property-related) → do costs vary by state → comparison to other loan types → who pays → how to lower/cover costs (seller concessions, lender credits, roll into loan, gift funds, state/local assistance, pay out of pocket) → refundability if deal falls through → next steps
- 3 tables: loan-related cost line items, property-related cost line items, loan-type comparison (USDA/FHA/VA/Conventional)
- Figures used: closing costs 3-6% of price; $300K example costed at $9,000-$18,000 (4% midpoint = $12,000); upfront guarantee fee 1%; annual fee 0.35%; seller can contribute up to 6% of purchase price; USDA closing costs run $1,000-$2,000 more than conventional
- No FAQ schema/section observed
- No named Texas cities, no DFW-specific content, no worked example tied to a specific county
- CTA: generic "Check your 0% down eligibility" / "Get a $0 down USDA quote" — no phone number, no named loan officer, no NMLS disclosure visible in extracted content

## DATA FLAG

Every competitor source (search snippets + usdaloans.com) describes the seller-paid closing-cost cap as **"up to 6% of the purchase price / sales price."** The playbook's verified data (line 18) states it as **"seller can pay up to 6% of buyer's closing costs."** These are two different bases (6% of sale price vs. 6% of closing costs) and the industry-standard USDA/RD interested-party-contribution rule is actually 6% of the sales price, not 6% of closing costs. Per Step A rule 5, I did not adopt the competitor figure — the article uses the playbook's verified wording ("seller can contribute up to 6% of the buyer's closing costs") as instructed, but this flag is logged here for Peter's review since it diverges from the standard RD guidance description. Recommend Peter double check this wording against the RD Handbook figure before next revision.

No other verified figures (guarantee fee 1%, annual fee 0.35%, DFW-metro USDA income limits) were contradicted by any source — all competitor snippets that mentioned guarantee/annual fee numbers (usdaloans.com, WebSearch AI summaries) matched the playbook's verified figures exactly.

## Gap sheet — what this post must do that no competitor found in the SERP does

1. **Be Texas/DFW-specific with a real worked example.** No fully-accessible competitor ties the math to a specific Texas county. Use a $300,000 Kaufman County home with real dollar closing-cost line items (title, escrow, appraisal, survey, recording — DFW-typical figures) plus the 1% upfront guarantee fee and 0.35% annual fee math.
2. **Cover the "0% down ≠ $0 to close" nuance explicitly and early**, since that's the exact intent behind the "who pays what" framing of the target keyword — no accessible competitor frames it that sharply.
3. **Add a comparison table distinguishing USDA's upfront/annual fee structure from FHA's** (per playbook's verified "much cheaper than FHA MIP" framing) — the one competitor table I saw does a 4-program comparison but not a fee-structure deep dive.
4. **Give the seller-concession and gift-fund paths concretely**, with the 6%-cap figure stated per verified data, not vaguely ("it depends").
5. **First-person, named-officer, NMLS+phone-everywhere voice** — every competitor found is third-person/faceless with generic CTAs; this is a straightforward differentiation.
6. **Internal-link into Peter's existing USDA cluster** (eligible areas, income limits, Royse City location page) — no competitor is part of a topical cluster like this.
7. **FAQPage schema with 4+ real Q&As** — usdaloans.com has no FAQ section at all; this is free structured-data territory.
8. **A named composite buyer scenario** grounded in a DFW-eligible city (Royse City/Kaufman County) — humanizes the math example competitors present as abstract tables.
