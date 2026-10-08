# Teardown — "how Texas property taxes affect mortgage DTI 2026"

Target file: `blog/texas-property-tax-dti-mortgage-impact-2026.html`
Teardown date: 2026-10-08
Primary keyword: how Texas property taxes affect mortgage DTI / Texas property tax buying power

## Live SERP (WebSearch, 2026-10-08)

| # | URL | Type |
|---|---|---|
| 1,3,4,5 | herringbank.com (4 separate URLs/IDs) | Bank affordability calculators — "$400K house", "$300K income" |
| 2 | herringbank.com/learn/how-much-is-the-mortgage-on-a-400k-house-texas/ | Bank, calculator-style |
| 6 | trerc.tamu.edu PDF (article 2188) | Academic — Texas Real Estate Research Center |
| 7 | moneygeek.com/mortgage/how-to-buy-a-house-in-texas | National, generic 6-steps |
| 8 | lrgrealty.com/.../home-loan-preapproval-budget-planner-texas | TX brokerage budget planner |
| 9 | **harbertgroup.com Texas Home Affordability Calculator 2026** | **Strongest** — 3,500 words, Houston |

Read: the SERP is **all calculators and affordability pages**. Not one page is about the *mechanism* —
how the tax line inside PITI consumes DTI headroom and destroys buying power. Four of nine results
are the same bank's page under different IDs, which means the SERP is thin and duplicative.
Confirms the Tier 10 thesis.

## Strongest competitor: harbertgroup.com "Texas Home Affordability Calculator 2026"

- ~3,500 words. Byline date is a broken placeholder ("January 1 2005"); MLS footer says last update
  Oct 8 2026. Houston/Harris County focused.
- H2s: The Number Everyone Gets Wrong First · Understanding the 28/36 DTI Rule in Texas Context ·
  Why Texas Affordability Is Worse Than the Headline Income Suggests · Current Rate Environment ·
  FHA vs Conventional Under 20% Down · Worked Examples: Four Houston Income Brackets ·
  The PMI Threshold · The "$100K = $300K Home" Rule That Broke After 2022 · Summary Affordability
  Table · How to Apply These Numbers · FAQ · CTA
- 2 tables: PMI savings by purchase price (4 rows); income-to-price summary (7 rows)
- 6 FAQs, including "What happens if my back-end DTI is the binding constraint?" and "How does Texas
  compare to other states on total housing cost burden?"
- Data: front-end 28% / back-end 36%, stretch to 43–45% conv and 50% FHA · conv 6.5%, FHA 5.75% ·
  **conforming limit $832,750 (all TX counties)** · FHA Harris County limit $541,287 · FHA UFMIP
  1.75%, annual MIP 0.55% · PMI 0.7%/yr · Harris effective 2.4%, TX statewide 1.6–1.8%,
  Katy/Cypress MUD 2.6–3.0% · Houston insurance $5,300/yr, 119% above national · 2021 vs 2026 PITI
  on $300K: $2,344 → $3,009
- Does distinguish front-end vs back-end DTI (good — we must too)
- Compares TX to Nevada (0.5–0.7%) and Florida (~0.9%); claims a NV buyer affords 15–20% more home,
  **with no calculation shown**

### Competitor weaknesses to exploit
1. **Houston only.** Harris, Fort Bend, Montgomery, Spring, Katy, Cypress, Sugar Land, Klein ISD.
   **Dallas, Collin, Denton, Tarrant and Kaufman counties appear nowhere.** Total DFW vacuum.
2. **Never isolates the tax effect on buying power.** It shows taxes as a dollar line inside payment
   examples but explicitly does not compute how much maximum purchase price the tax rate costs you.
   That isolation *is* our post.
3. **The state comparison is asserted, not calculated.** "15–20% more home" with no math.
4. **Riddled with internal inconsistencies** (its own numbers disagree): "$6.5%" typo; $80K example
   says $150–175K but its summary table says $165–185K; $100K income text says $200–225K vs table
   $215–240K; the TL;DR says a $74K household qualifies for $220–250K at 5% down while the table
   says $155–175K for the same income. Also cites 2.4% Harris "combined" while its own SmartAsset
   source is 1.46% county-only.
5. **No county-rate comparison table.** Rates are scattered in prose.
6. No named client scenario. No LO voice — brokerage marketing with a CTA per section.
7. Broken publish date undermines freshness signals.

## ⚠️ DATA FLAG — none raised

Competitor's **$832,750 conforming limit for all Texas counties independently confirms** the
2026 figure already corrected in CLAUDE.md / SKILL.md on 2026-09-19. Good.

Its FHA limit of $541,287 is **Harris County** (Houston MSA) — not a contradiction of our
**$563,500**, which is the Dallas–Fort Worth–Arlington MSA figure. Different MSAs, both correct.
No change needed.

County effective rates used in this post are the SKILL.md Tier 8 set: Dallas 2.0% · Collin 1.5% ·
Denton 1.8% · Tarrant 2.2% · Kaufman 1.9% · Rockwall 1.8%.

## GAP SHEET — must cover

Everything the competitor has:
1. The 28/36 rule and where real lender overlays sit (conv ~45–50%, FHA to 56.9% with AUS approval)
2. Front-end vs back-end DTI defined, and which one binds
3. PITI defined with the tax component called out
4. Rate environment used in the math (7.0% per SKILL.md Rule 4)
5. Worked examples at multiple income levels
6. Texas vs low-tax-state comparison
7. FAQ on back-end being the binding constraint

Gaps to fill (our differentiators):
8. **The headline number, computed not asserted**: Dallas County 2.0% on a $350K home = $583/mo
   escrowed tax vs California's ~0.75% = $219/mo. The **$364/mo difference** is the whole post.
   Then convert that to lost buying power: at 43% back-end on an $80K income ($2,867/mo allowance),
   $364/mo of extra tax removed from the P&I budget at 7.0%/30yr buys **~$54,700 less** loan
   (1,000/mo P&I ≈ $150,300 at 7%, so $364 ≈ $54,700). Show the formula so the number is auditable.
   SKILL.md estimated "~$48K"; recompute precisely in the post and show the work.
9. **DFW county-rate comparison table** (5 counties) with monthly escrow on the same $350K home
   AND the buying-power delta vs the cheapest county — the table the competitor does not have.
10. **Same-income/different-county worked example**: identical $80K borrower approved in Collin
    (1.5%) vs Tarrant (2.2%) — show the two different maximum purchase prices. This is the most
    actionable thing on the page and nobody has it.
11. **How the lender actually estimates taxes on a new purchase** — not the seller's exempted bill.
    The under-appreciated trap: buyers are underwritten on the *unexempted assessed value*, and the
    homestead exemption they will claim does not help them qualify. Covers the $140,000 TX homestead
    exemption only as a post-closing escrow effect.
12. **New-construction / MUD warning for DFW** — Forney, Prosper, Royse City corridors; link to the
    existing MUD post. Tie to DTI, not just payment.
13. **60-day DTI reduction strategies framed for the Texas tax burden specifically** — pay down
    revolving balances (the $364 tax penalty means TX buyers need more non-housing headroom than
    buyers elsewhere), avoid new auto debt, use the tax-rate map to shop counties.
14. Named composite scenario, Mesquite/Garland (Dallas County, 2.0%).
15. 4 FAQs with NMLS + phone, first person. Question-format H2s throughout.

Internal links (required): debt-to-income-ratio-mortgage-texas-2026.html ·
texas-property-taxes-mortgage-payment.html · mortgage-calculators.html · fha-loans.html ·
texas-140000-homestead-exemption-mortgage-payment-2026.html · texas-mud-district-mortgage-payment-2026.html
