# Research pass — 2026-10-30

Queue state at start: **440 .html files** in `blog/`, git clean. No orphaned posts from 10-28 or 10-29
(there was no run on either day; last commit was 21b83e4, 2026-10-27). Cluster A/B/C and Tiers 2–16
are all published. Per the standing instruction, this run did a fresh WebSearch pass. No
DataForSEO / keyword-volume tools were touched.

## Rate benchmark — CHANGED AGAIN, update the default

**Freddie Mac PMMS, week of 2026-10-29:**

| Series | 10/29/2026 | 10/22 | 10/15 | Year ago |
|---|---|---|---|---|
| 30-year fixed | **7.24%** | 7.32% | 7.40% | 6.17% |
| 15-year fixed | **6.60%** | 6.68% | 6.71% | 5.44% |

**Second consecutive weekly decline** (7.40% → 7.32% → 7.24%). Freddie's chief economist called it the
lowest level of the month. **New posts use 7.24%.** SKILL.md and CLAUDE.md updated in this run.

Mortgage News Daily's separate daily index read **7.29%** on 10/29. Cite PMMS as the benchmark; never
blend MND, MBA and PMMS into one number.

P&I at 7.24%, 30-year (used across this run's posts): $150K $1,022 · $250K $1,704 · $275K $1,874 ·
$280K $1,908 · $300K $2,044 · $320K $2,181 · $330K $2,249 · $350K $2,385 · $385K $2,624 ·
$400K $2,726 · $420K $2,862 · $450K $3,067 · $480K $3,271.

## FOMC 2026-10-28 — HELD. Two dissents wanted a HIKE.

The FOMC **held** the federal funds target at **3.75%–4.00%** on 2026-10-28. The vote was **10–2**, and
both dissenters — Governor Lisa Cook and Cleveland Fed President Beth Hammack — wanted a **quarter-point
increase**, not a cut. Futures pricing after the meeting pointed to a real possibility of a **hike** at
the December meeting. 10-year Treasury rose 4.99% → 5.05% and the 30-year 5.30% → 5.37% between 10/27
and 10/28.

**No new rate post was written.** Six posts already frame the rate story, and
`fomc-october-28-2026-mortgage-rates-texas.html` is the right home for the outcome. The decision and the
7.24% PMMS turn belong in **dated update blocks** on the existing posts — see "Follow-ups" below. Note
the genuinely unusual fact for whoever writes those: **prime rate is unchanged at 7.00%** because the Fed
held, so `heloc-payment-prime-rate-fed-hike-texas-2026.html` needs a "no change in October, December is
the risk" line rather than a new payment table.

## Leads checked and CLOSED this run

- **IRS 2027 inflation adjustments — still NOT released.** Latest official remains Rev. Proc. 2025-32
  (tax year 2026: standard deduction $16,100 single / $32,200 joint / $24,150 HoH). Wolters Kluwer
  *projects* 2027 at $33,200 joint / $24,950 HoH / $16,600 single and warns that missing October 2025 CPI
  data could move the official figures. Do not publish the projections as fact. When the rev proc lands,
  add a line to `texas-property-tax-deduction-salt-cap-2026-homeowners.html`.
- **FHFA LLPA — no broad cut announced.** What DID happen: Fannie and Freddie now price Classic FICO and
  VantageScore 4.0 on **one LLPA grid**, effective for loans settled or issued **on or after 2026-10-01**,
  which removes the prior 20-point downward adjustment on VantageScore 4.0 scores. Pulte has said an LLPA
  decision is expected by end of 2026; Barry Habib is leading the review; analysts think a broad cut is
  unlikely because of the earnings hit. → update block for
  `credit-score-pricing-grid-llpa-mortgage-rate-2026.html`, not a new post.
- **Texas Realtors Q3 2026 — still NOT published.** Latest official is Q2 2026 (statewide median
  $340,000, flat YoY). Do not cite the syndicated "$333,628 / −0.4%" figure. Check TRERC in November.
- **Non-borrowing spouse — REJECTED as duplicate.** `non-borrowing-spouse-mortgage-texas-community-property.html`
  exists. But this run turned up a **correction worth applying to it**: the signature requirement on a
  Texas homestead comes from **homestead law, not community property**, with an exception for
  purchase-money mortgages, and a prenup does not override it. Candidate update block, not a new post.

## The 5 slugs chosen

One news-hooked post from a **primary source read end to end** (the Executive Order itself), and four
evergreen Texas-process gaps where every ranking page is written for agents, sellers or attorneys and
**none** has the loan-officer angle. Per-slug gap sheets are the sibling files in this directory.

1. `housing-executive-order-october-2026-refinance-pmi-title-texas.html` — EO 14438, signed 2026-10-22
2. `power-of-attorney-mortgage-closing-texas-2026.html` — 7 TAC §153.15
3. `buying-house-with-tenant-lease-texas-mortgage-2026.html` — Prop. Code §92.105, §91.001
4. `mineral-rights-oil-gas-lease-texas-mortgage-2026.html` — T-19.2/T-19.3, GSE exceptions
5. `texas-pid-assessment-mortgage-escrow-dti-2026.html` — Prop. Code §5.014–5.0143, HB 1543

## ⚠️ DATA FLAGS raised this run

1. **SKILL.md / CLAUDE.md rate default 7.32% → 7.24%.** Fixed in this run.
2. **NAR misstates the EO's mortgage-insurance threshold.** NAR's Washington Report says homeowners
   "must request the release of mortgage insurance when the mortgage is 78% or less." Under the
   **Homeowners Protection Act of 1998** cancellation at **78%** is *automatic*; the *borrower-request*
   thresholds are below 75% (2–5 years of seasoning) and below 80% (more than 5 years). The post states
   the HPA framework and does not repeat NAR's version.
3. **NAR adds a limit the EO does not contain.** NAR says the VA/USDA direct-loan rate reduction is "for
   home purchases." **Sec. 5 of the signed order has no purchase-only limit.** NAR also says FHFA will
   waive title insurance "requirements and fees" — the order does not mention fees.
4. **HousingWire overstates the EO's verbs.** It says the order "calls for" appraisal waivers and LLPA
   reductions. **Sec. 4(b) says "the Director shall consider."** The post uses a verb column so readers
   can see which items are mandated and which are only under consideration.
5. **HB 1543 year.** This file's own earlier note and one search framing said 2019. **Wrong — HB 1543 is
   87th Legislature, signed 2021-06-04, effective 2021-09-01**, and it added Prop. Code §§5.0141–5.0145.
   Corrected here; the post uses 2021.
6. **PID notice form numbering conflict.** LRG Realty calls it TREC Form 53-0; the Texas Realtors legal
   memo dated 2021-09-01 calls it TXR-1955. Both appear to name the same *Addendum Containing Notice of
   Obligation to Pay Improvement District Assessment*. The post gives both numbers and does not pick one.
7. **PID late-notice remedy conflict.** LRG reads §5.0141 as a **7-day** termination right after late
   notice; TRERC says the buyer may terminate **any time prior to closing**. These describe **different
   facts** (notice delivered late vs. notice never delivered), and the post explains both rather than
   averaging them.
8. **MUD statute chapter conflict.** LRG cites Water Code **Ch. 54**; TRERC cites **Ch. 49**. Both are
   right about different things — Ch. 49 carries the notice sections (§49.452, §49.4521), Ch. 54 the
   district creation and bond authority. The post says so explicitly.
9. **"Fannie Mae will not purchase a Texas home equity loan closed by POA."** Surfaced from an aged
   compliance summary and **not verified against the Selling Guide**. The POA post does **not** assert it;
   it says instead that many Texas lenders and title companies refuse a POA on a 50(a)(6) outright and
   that the borrower must confirm with the lender first.
10. **Estates Code §751.151 30-day recording.** Secondary sources only; primary text not read. The POA
    post attributes the recording requirement to Property Code §12.001 (recording in the county where the
    property sits) and frames the 30-day figure as what Texas practitioners cite, not as verified statute.
11. **"75% of gross rent."** Standard practice (a 25% vacancy factor) but taken from secondary lender
    blogs in this pass, not from the Selling Guide directly. The tenant post says "typically 75%" and
    tells the reader the exact treatment is the underwriter's call.
12. **Fannie's 60-day occupancy requirement.** Cited by secondary sources to B2-1-3-04; primary text not
    read this run. The post frames it as the standard primary-residence occupancy expectation and says
    the deadline lives in the note and the occupancy affidavit the borrower signs.

## Verified NEGATIVE — do not re-run these blind

- No IRS 2027 rev proc. No broad FHFA LLPA cut. No Texas Realtors Q3 2026 release.
- **No government shutdown.** H.R. 6500 still funds through **2026-12-11**. Revisit late November.
- Freddie Mac **Bulletin 2026-13 — search abandoned per Tier 16.** Not retried.
- The **200-foot** figure in mineral underwriting is **Freddie Mac's**, not Fannie's. Fannie's
  B7-2-05 standard is the "customarily waived / does not materially impair" test. Texas law also has a
  *separate, unrelated* 200-foot rule (coal, lignite and iron ore within 200 feet of the surface are not
  "minerals" where production would destroy the surface) — do not merge the two.
- Fannie's **multifamily** guide uses other distances (250-foot subsurface, 600-foot equipment setback).
  Those are multifamily. Do not apply them to a single-family loan.

## Pages that refused WebFetch this run

`texasnationaltitle.com` (403), `bairdlaw.com` (307 with no target), `amerisave.com` (403),
`lexology.com` (403), `virtualunderwriter.com` (loaded but the manual body is behind a sign-in),
`destinationnorthtexas.com` (DNS failure). hud.gov and trec.texas.gov were not needed this run.

## Follow-ups for the next run (verify first)

- **Update blocks owed from this run, none written yet:** FOMC 10-28 hold + 10–2 split with two
  hike dissents → `fomc-october-28-2026-mortgage-rates-texas.html`; prime unchanged at 7.00% and December
  as the risk → `heloc-payment-prime-rate-fed-hike-texas-2026.html`; the 7.24% two-week turn → the five
  rates-are-rising posts; unified FICO/VantageScore LLPA grid effective 10-01 →
  `credit-score-pricing-grid-llpa-mortgage-rate-2026.html`; homestead-not-community-property correction →
  `non-borrowing-spouse-mortgage-texas-community-property.html`.
- **2026-11-03 Dallas County Prop A** — update BOTH Dallas County property-tax posts with the final rate
  and the bill mailing date. `dallas-county-property-tax-increase-2026-mortgage-impact.html` still
  describes the pass case in its body and FAQ and needs a rewrite after the vote.
- **2026-12-09/10 FOMC** — a hike is now live. If it happens, the HELOC payment table moves.
- PMMS 11-05 and 11-12; IRS 2027 rev proc; FHFA LLPA decision; Texas Realtors Q3; FHA annual report to
  Congress (~November); Q3 2026 MBA National Delinquency Survey (~November).
- **EO 14438 implementation** — the only deadline in the order is Sec. 3(b), task force recommendations
  within 180 days (≈2027-04-20). Watch for an FHFA announcement actually establishing the MI pilot or
  expanding the title acceptance program; that is when the EO post gets its update block.
- Unchecked evergreen gap candidates in the same pattern: buying a Texas home at a trustee/foreclosure
  sale and why it can't be financed; the Texas 50(a)(6) notice-and-cure framework and the
  forfeiture-of-principal-and-interest penalty; what a Texas survey "T-47.1" declaration changes.

## ⚠️ Image generation still blocked 2026-10-30

OpenAI returned 429 `insufficient_quota` / `credit_balance_exhausted` — **eighth consecutive run.**
Tested explicitly with `gpt-image-1-mini`; the key is present and the account has no credits. Peter or
John needs to add credits at platform.openai.com. All 5 posts reuse existing on-topic heroes:

| Post | Hero reused |
|---|---|
| EO 14438 | `fha-streamline-refinance-texas-2026-hero.jpg` |
| power of attorney | `texas-lien-release-after-mortgage-payoff-2026-hero.jpg` |
| tenant-occupied purchase | `rental-income-qualify-mortgage-texas-2026-hero.jpg` |
| mineral rights | `texas-title-insurance-cost-2026-buyers-guide-hero.jpg` |
| PID assessments | `2-1-buydown-new-construction-texas-dfw-2026-hero.jpg` |

**After this pass, run another WebSearch research pass — do not fall back to city × loan-program
permutations.**
