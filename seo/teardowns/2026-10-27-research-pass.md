# Research pass — 2026-10-27

Queue state at start: **435 .html files** in `blog/`, git clean (no orphaned posts from a prior day).
Cluster A/B/C and Tiers 2–16 are all published. Per the standing instruction after Tier 16, this run
ran a fresh WebSearch pass. No DataForSEO / keyword-volume tools were touched.

## Rate benchmark — CHANGED, update the default

**Freddie Mac PMMS, week of 2026-10-22, read directly from freddiemac.com/pmms:**

| Series | 10/22/2026 | Prior week (10/15) | Year ago |
|---|---|---|---|
| 30-year fixed | **7.32%** | 7.40% | 6.19% |
| 15-year fixed | **6.68%** | 6.71% | 5.44% |

This is the **first PMMS decline after the run-up that peaked at 7.40%** (7.40% on 10/08, held 10/15,
then −8 bps). The 7.40% default in SKILL.md is now stale — **new posts use 7.32%.** SKILL.md and
CLAUDE.md updated in this run.

Do **not** write "first decline in seven weeks." That framing belongs to a different series: MBA's
contract rate fell 9 bps to 7.41% for the week ended 2026-10-16, which trade press called the first
decline in 11 weeks, ending eight straight increases. PMMS and MBA are different surveys — cite PMMS
as the benchmark and never blend them.

P&I at 7.32%, 30-year (used across this run's posts): $240K $1,649 · $275K $1,889 · $280K $1,923 ·
$285K $1,958 · $300K $2,061 · $320K $2,198 · $337,750 $2,320 · $350K $2,404 · $400K $2,748.

## Why no rate-direction post this run

A "rates are falling" post written 2026-10-27 would be stale within 24 hours — **the FOMC decision
lands 2026-10-28**, and `fomc-october-28-2026-mortgage-rates-texas.html` already exists and is the
right home for the outcome. Five existing posts already frame rates as rising
(`mortgage-rates-3-year-high-october-2026-dfw-buyers`, `mortgage-rates-7-5-percent-texas-october-2026-buyer-guide`,
`current-mortgage-rates-texas-october-2026`, `why-mortgage-rates-rising-10-year-treasury-october-2026`,
`should-i-wait-for-mortgage-rates-to-drop-texas-2026`). After the 10-28 decision those need dated
update blocks carrying the 7.32% turn — **not a sixth rate post.**

## Leads checked and closed this run

- **IRS 2027 inflation adjustments — still NOT released.** Latest official is Rev. Proc. 2025-32 (2025-10-09)
  for tax year 2026: standard deduction $16,100 single / $32,200 joint / $24,150 HoH. 2027 figures are
  projections only (~$16,600 single). When the revenue procedure lands, add a line to
  `texas-property-tax-deduction-salt-cap-2026-homeowners.html`. Do not write a new post.
- **FHFA LLPA decision — still NOT announced.** Pulte said on X the agency is "nearing the end" of its
  LLPA review; reporting suggests a narrow change, possibly aimed at new-build financing, not a broad
  regrid. Fannie's current matrix is effective 2026-01-28. When it lands, update
  `credit-score-pricing-grid-llpa-mortgage-rate-2026.html`.
- **Texas Realtors Q3 2026 report — NOT published yet.** Latest official is Q2 2026: statewide median
  **$340,000**, flat YoY, closed sales up in 23 of 26 metros, median up in 17 metros. Note the
  syndicated "$333,628 / −0.4%" figure logged in Tier 15 does **not** match the Q2 release — do not
  cite it. Check Texas Realtors or TRERC (Texas A&M) in early November.
- **Texas divorce / owelty timing — REJECTED as a duplicate.** `divorce-buyout-mortgage-texas-owelty-2026.html`
  (2,567 words) already covers owelty mechanics, the 95%-vs-80% LTV distinction, decree language,
  alimony/child-support income and a worked Garland buyout. Do not write a second one.

## The 5 slugs chosen — each fills a named SERP gap

All five SERPs were read live on 2026-10-27. Three are news-hooked with verified primary or
near-primary sources; two are evergreen Texas-process gaps where every ranking page is written for
sellers, agents or a national audience and **none** has the loan-officer angle.

1. `texas-roof-age-home-insurance-rule-mortgage-closing-2026.html` — TDI, 2026-09-29
2. `fha-well-water-distance-waiver-texas-2026.html` — FHA 4000.1 waiver, 2026
3. `texas-water-notice-trec-61-0-seller-disclosure-mortgage-2026.html` — TREC 61-0, eff. 2026-07-01
4. `home-inspection-vs-appraisal-texas-2026.html` — evergreen
5. `buying-house-with-pool-texas-mortgage-2026.html` — evergreen

Per-slug gap sheets follow in the sibling files in this directory.

## ⚠️ DATA FLAGS raised this run

1. **SKILL.md / CLAUDE.md rate default 7.40% → 7.32%.** Fixed in this run.
2. **"Seven consecutive weekly increases"** language in SKILL.md describes the 10-08 PMMS print and is
   no longer the current state. Corrected in this run.
3. **Roof-age denial thresholds.** `lrgrealty.com` asserts "Texas insurers frequently deny coverage on
   roofs older than 15–20 years." Could not be verified against a carrier or TDI source. **Not used as
   fact** in the post — the post describes roof age as a basis carriers have used, without a year number.
4. **TREC Seller's Disclosure Notice effective date conflict.** Republic Title and HAR say mandatory
   2026-07-01; neuhausre.com says TREC 55-0 took effect 2026-05-28. July 1 is better supported.
   trec.texas.gov **refused connection** to WebFetch on this run (ECONNREFUSED), so the primary text
   could not be read — the post states July 1 and flags the conflict rather than asserting one date.
5. **FHA pool rules.** No current HUD 4000.1 pool language could be sourced. The 1970s handbooks
   (4940.1, 4516.1) that search surfaces are **cancelled**. The post frames pools under 4000.1's
   safety/soundness principles and appraiser discretion, and labels the "empty pool must be filled
   before closing" point as how it plays out in practice, not as handbook text.
6. **FHA well waiver has no published number.** Both sources name only the title "Waiver to Individual
   Water Well Distance Requirements" against Handbook 4000.1, effective immediately, reported
   2026-07-27 (tenaco) / 2026-07-30 (WBK). hud.gov 403s to WebFetch as in prior runs. The post
   attributes mechanics to those summaries and tells readers to have the lender confirm.

## Verified NEGATIVE — do not re-run blind

- No IRS 2027 rev proc. No FHFA LLPA announcement. No Texas Realtors Q3 2026 release.
- Freddie Mac **Bulletin 2026-13 — search abandoned per Tier 16.** Not retried.
- Appraiser-forum claims about a flat "100-foot well rule" contradict HUD's own reference table
  (10 ft to property line, 50 ft to septic tank, 100 ft to drain field / 75 ft where locally allowed).
  Do not cite forums.

## Leads for the next run (verify first)

- **2026-10-28 FOMC result** → dated update blocks on the FOMC post and, if the Fed moves, the payment
  table in `heloc-payment-prime-rate-fed-hike-texas-2026.html`.
- **PMMS 10-29 and 11-05** → confirm whether 7.32% is a turn or a one-week dip before any rate post.
- **2026-11-03 Dallas County Prop A** → update BOTH Dallas County property-tax posts with the final rate
  and bill mailing date. `dallas-county-property-tax-increase-2026-mortgage-impact.html` still describes
  the pass case in its body and FAQ and needs a rewrite after the vote.
- IRS 2027 rev proc; FHFA LLPA; Texas Realtors Q3; FHA annual report to Congress (~November, refreshes
  MMIF figures); Q3 2026 MBA National Delinquency Survey (~November).
- **TREC**: retry trec.texas.gov when it is reachable to confirm the Seller's Disclosure Notice mandatory
  date and the 61-0 text, then tighten the post written this run.
- Unchecked evergreen gap candidates in the same pattern as slugs 4–5: buying a home with an existing
  tenant/lease in Texas; power of attorney at a Texas mortgage closing; mineral rights and oil-and-gas
  lease title exceptions on a Texas mortgage.

## ⚠️ Image generation still blocked 2026-10-27

OpenAI returned 429 `insufficient_quota` / `credit_balance_exhausted` — **seventh consecutive run**.
Tested explicitly this run with `gpt-image-1-mini`; the key is present and the account has no credits.
Peter or John needs to add OpenAI credits. All 5 posts reuse existing on-topic heroes:

| Post | Hero reused |
|---|---|
| roof age / insurance | `homeowners-insurance-cost-dfw-mortgage-payment-2026-hero.jpg` |
| FHA well waiver | `usda-loan-property-condition-requirements-texas-2026-hero.jpg` |
| TREC water notice | `closing-disclosure-explained-texas-mortgage-2026-hero.jpg` |
| inspection vs appraisal | `uad-3-6-new-appraisal-form-dfw-texas-2026-hero.jpg` |
| pool | `new-construction-vs-existing-homes-dfw-2026-hero.jpg` |

**After this pass, run another WebSearch research pass — do not fall back to city × loan-program
permutations.**
