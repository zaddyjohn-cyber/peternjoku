# Teardown — "seller concession rate buydown DFW 2026 how to convert"

Target file: `blog/seller-concession-rate-buydown-dfw-2026.html`
Teardown date: 2026-10-08
Primary keyword: seller concession rate buydown DFW / convert seller credit to discount points

## Live SERP (WebSearch, 2026-10-08)

| # | URL | Type |
|---|---|---|
| 1,5 | opendoor.com/articles/how-to-buy-down-mortgage-rate | National iBuyer explainer, twice |
| 2,4 | biggerpockets.com "Why Buying Down Your Interest Rate Makes a Lot of Sense" | Investor blog, national |
| 3 | har.com/web/marysol/blogs/148171 | Single TX agent blog post, thin |
| 6 | mortgageresearch.com/articles/rate-buydown-vs-price-reduction/ | National comparison article |
| 7,8 | **gustancho.com/interest-rate-buydowns/** | **Strongest lender competitor** — twice |
| 9 | thenewslinkgroup.org (Hoosier Banker 2023) | Trade magazine, irrelevant |

Read: **zero DFW-specific results.** No page on this SERP shows the actual conversion math from a
dollar concession to a permanent rate buydown at a given loan size. Confirms the Tier 10 thesis.
Note the site already has `dfw-buyers-market-seller-concessions-october-2026.html` (negotiation
strategy) and `mortgage-rate-buydown-texas.html` / `mortgage-points-buydown-texas-2026.html` — this
post must be the **conversion-math** page, not another concession-strategy page, to avoid
cannibalizing them.

## Strongest competitor: gustancho.com "Interest Rate Buydowns With Seller Concessions"

- ~2,000 words. Published Jan 11 2024; byline update Sept 29 2026; body text says "updated May 29
  2024" — three conflicting dates.
- H2s: Interest Rate Buydowns with Seller Concessions · Seller Concessions For Closing Costs And
  Buying Points · Benefits · Risks · What Are Interest Rate Buydowns · How Do Interest Rate
  Buydowns Work · Interest Rate Buydowns With Discount Points · Benefits and Drawbacks · Drawbacks ·
  Summary · FAQ · (CTA ×2)
- H3s are benefit/risk bullets: Lower Initial Monthly Payment, Less Cash at Closing, Better Offer
  Structure, High-Rate Markets, Builder Incentives / Payment Will Increase Later, Must Be Prepared
  for Full Payment, Not Every Program Allows Every Structure, Must Be Negotiated in the Contract
- **Tables: NONE.** Everything is bulleted prose.
- 9 FAQs
- Data: 1 point = 1% of loan amount · concession caps cited as **FHA 6%, VA 4%, Fannie/Freddie 3%** ·
  worked example $200,000 loan at 5%, $1,074/mo; 2-1 buydown pays $843 (yr 1 at 3%), $955 (yr 2 at
  4%), lender still receives $1,074 from an escrowed upfront fee · 3-2-1 example 2%/3%/4% then 5% ·
  temporary buydowns 1–3 years · FAQ credit guidance: 740+ FICO, 20% down, DTI <40%

### Competitor weaknesses to exploit
1. **No conversion table.** It states "1 point = 1% of loan" and stops. It never shows how many
   points a given concession buys at a given loan amount — the exact thing the searcher wants.
2. **No break-even math at all.** Zero months-to-recoup analysis. This is the single biggest gap.
3. **No numeric temporary-vs-permanent comparison.** It describes both separately and only gives
   figures for the 2-1.
4. **No tables anywhere** — all prose. Tables are the highest-value element per our Rule 3.
5. **Concession caps are oversimplified and partly wrong.** It says "Fannie Mae and Freddie Mac 3%"
   flat. The real conventional cap is **LTV-tiered** on a primary residence: >90% LTV = 3%,
   75.01–90% = 6%, ≤75% = 9%; investment property = 2% at any LTV. Our existing Oct 7 post already
   has the tiers right — stay consistent.
6. **Zero DFW/Texas specificity.** Texas appears only in a state-selector dropdown.
7. **No rate-to-points pricing reality.** It never says that the 0.25%-per-point rule of thumb is a
   rule of thumb, that pricing is tiered and moves daily, or that the first point usually buys more
   rate than the third (diminishing returns).
8. Conflicting dates (three different ones) hurt freshness.
9. Example built on a 5% rate — badly stale for October 2026.

## ⚠️ DATA FLAG — none raised against our files; competitor figure rejected

Competitor's flat "Fannie/Freddie 3%" concession cap is **not adopted**. We keep the LTV-tiered
conventional limits (3% / 6% / 9% by LTV band on a primary residence, 2% investment), which is what
`dfw-buyers-market-seller-concessions-october-2026.html` already published and what Fannie's
Selling Guide B3-4.1-02 provides. FHA 6%, VA 4% (plus the seller may additionally pay the buyer's
customary closing costs), USDA 6% — unchanged from SKILL.md.

Rate used for all math: **7.0%** per SKILL.md Rule 4. Points-to-rate: ~0.25% per point as a stated
rule of thumb, explicitly flagged as approximate and lender/day dependent.

DFW October 2026 context (from the existing Oct 7 post, already published): **49% of DFW closings
include a seller concession, median above $17,000.** Reused here.

## GAP SHEET — must cover

Everything the competitor has:
1. What a seller concession is and that it must be written into the contract
2. What a discount point is (1 point = 1% of loan amount)
3. How a permanent buydown differs from a temporary (2-1, 3-2-1) buydown
4. Temporary buydown mechanics — escrowed subsidy, lender receives the full payment
5. Concession caps by loan program
6. Benefits and risks, including the payment step-up on a temporary buydown
7. That concessions cannot fund the down payment
8. Builder-incentive context

Gaps to fill (our differentiators):
9. **The conversion table — the centerpiece.** Concession dollars → points → rate at $300K, $350K
   and $400K loan amounts. Show, e.g., a $17,000 median DFW concession on a $350K loan = 4.86% of
   the loan; after ~$6,000 of unavoidable closing costs/prepaids, ~$11,000 remains ≈ 3.14 points ≈
   ~0.75% of rate. Make every cell auditable.
10. **Break-even in months**, explicitly, with the formula: points cost ÷ monthly savings = months.
    Table at 1, 2 and 3 points on a $350K loan at 7.0%. Note that when the *seller* funds the
    points, the buyer's break-even is effectively immediate — the real comparison is against the
    alternative uses of the same concession dollars.
11. **Three-way comparison table of what to do with the same $17,000**: permanent buydown vs 2-1
    temporary buydown vs price reduction vs closing-cost credit — monthly payment, year-1 payment,
    total 5-year cost, who it suits. The SERP's "buydown vs price reduction" article does two of
    these; nobody does four.
12. **Why a buydown usually beats an equivalent price cut** — computed, not asserted: $17,000 off a
    $350K price at 7.0% saves ~$113/mo; $17,000 of points (~3 points, ~0.75%) saves ~$175/mo.
13. **Diminishing returns + the cap trap**: asking for more concession than the program allows, or
    more than the eligible costs can absorb, wastes negotiating capital — unused concession is not
    refunded as cash. Tie to the concession-cap table.
14. **When the temporary 2-1 beats the permanent buydown** — short expected tenure, expectation of
    refinancing, income ramping; and the refinance/sale question (whether unused subsidy is credited
    to principal).
15. **DFW October 2026 framing** — 49% of closings, >$17K median, so this is the live question for
    roughly half of DFW buyers right now.
16. Named composite scenario in Mesquite.
17. 4 FAQs with NMLS + phone, first person. Question-format H2s.

Internal links (required): dfw-buyers-market-seller-concessions-october-2026.html ·
mortgage-rate-buydown-texas.html · mortgage-calculators.html ·
mortgage-points-buydown-texas-2026.html · seller-concessions-texas-closing-costs-2026.html ·
2-1-buydown-new-construction-texas-dfw-2026.html
