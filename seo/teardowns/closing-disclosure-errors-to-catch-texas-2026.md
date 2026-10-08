# Teardown — "closing disclosure errors to catch Texas 2026"

Target file: `blog/closing-disclosure-errors-to-catch-texas-2026.html`
Teardown date: 2026-10-08
Primary keyword: closing disclosure errors to catch Texas / what to check on closing disclosure

## Live SERP (WebSearch, 2026-10-08)

| # | URL | Type |
|---|---|---|
| 1,2,4,5,9 | lrgrealty.com — 5 results, incl. 3 raw `wp-json` REST endpoints | TX brokerage; "Closing Readiness Checklist", "What Can Delay Closing" |
| 6,7 | **harbertgroup.com "How to Read a Texas Closing Disclosure Line by Line: 2026 Buyer Guide"** — twice | **Strongest competitor** |
| 8 | docsdirect.com/services/document-preparation/ | Vendor service page, irrelevant |

Read: a genuinely weak SERP. Three results are **unrendered WordPress JSON API endpoints**
(`wp-json/wp/v2/posts/7480`), which means Google is indexing raw JSON because the site is thin.
The same harbertgroup page appears twice under different URLs. Confirms the Tier 10 thesis:
harbertgroup has near-duplicate "line by line" pages dominating, and the *intent gap* is real —
every ranking page describes **what the form contains**, none is organized around **what to
challenge**.

## Strongest competitor: harbertgroup.com "Read a Texas CD Line by Line"

- ~3,000 words body. Byline date broken ("January 1 2005"); MLS footer last update Oct 8 2026.
- H2/H3 structure is **page-by-page of the form**: What Is the CD · TRID Framework · Page 1 Loan
  Terms · Page 2 Closing Cost Details (H3s: Section A zero tolerance, Section B zero tolerance,
  Section C 10% tolerance, Sections E & F, Section G escrow) · Page 3 Cash to Close (H3: Lender
  Credit Math: A Common Error) · Page 4 Loan Disclosures · Page 5 Loan Calculations and APR ·
  Worked Example $385K Spring TX · Texas-Specific Items to Flag (H3s: T-2 simultaneous issue,
  MUD/PID disclosure, survey fee handling, prorated tax accuracy) · **Three Common CD Errors and
  How to Catch Them** (H3s: APR, missing lender credit, stale tax rates) · FAQ · CTA
- 5 tables: page-1 summary; Section A items; Section B typical ranges; Section F prepaids;
  Cash-to-Close LE-vs-CD comparison with a "Changed?" column
- 6 FAQs: three-business-day rule · CD before the three-day window · cost exceeding tolerance ·
  owner's title policy when seller pays · survey fee negotiable · TX tax prorations
- Data: zero-tolerance = Sections A & B · 10% aggregate = Section C · unlimited = E, F, G, H ·
  **APR tolerance 0.125%** fixed-rate · CD at least 3 business days before closing · example $385K,
  10% down, $346,500 at 6.75%, P&I $2,247, PMI 0.60%, total $3,445 · lender T-2 simultaneous issue
  $100 vs $1,700–1,900 full price · owner T-1 ~$2,205 · tax rate $2.02/$100, annual $7,777 ·
  proration 165/365 × $7,777 = $3,514 · survey $450–650 ($575 used) · Survey Deletion ~5% of basic
  premium (~$110) · prepaid interest ~$64/day, late-month closing saves ~$1,472 · escrow cushion
  2 months (RESPA cap) · no TX transfer tax · TIP ~141% · homestead deadline April 30
- Cities: Spring TX 77379, Harris County (MUD 501/208/502), Klein ISD, Port of Houston, The
  Woodlands, Tomball, Houston. **No DFW.**
- Covers TDI promulgated rates (T-2 simultaneous issue) and links TDI. Mentions T-19.1.

### Competitor weaknesses to exploit
1. **Wrong organizing principle.** It is a *form tour* (Page 1 → Page 5). Our post is a
   *challenge list* ranked by what actually costs buyers money. Different intent, same keyword.
2. **Only three errors, and it buries them** in an H3 block near the end. We lead with five,
   each with the specific remedy and the dollar exposure.
3. **Never states the remedy mechanics.** It explains that tolerance exists but not that a
   zero-tolerance breach obligates the lender to **cure** it — issue a corrected CD and refund the
   overage (within 60 days of consummation under TRID). That is the buyer's actual lever and it is
   absent.
4. **T-36 endorsement not covered at all** (it mentions only T-19.1). A T-36 is a condominium
   endorsement — being charged for one on a non-condo single-family purchase is a clean, checkable
   overcharge no competitor flags.
5. **Survey double-billing not covered.** It covers survey acceptance and the Survey Deletion
   endorsement, but not being charged for a new survey *and* the existing-survey T-47 path.
6. **Escrow error checks absent.** It explains the 2-month cushion cap but gives no test for whether
   the escrow was funded off the correct (unexempted, current-year) tax rate.
7. **Seller-credit/concession verification missing entirely** — critical in October 2026 DFW where
   49% of closings carry concessions. A concession that is agreed in the contract but missing from
   Section L / the seller-paid column is a live risk right now.
8. Houston/Harris only — Spring, Klein ISD, Harris MUDs. No Dallas/Collin/Denton/Tarrant/Kaufman.
9. Broken byline date. Duplicate near-identical pages (cannibalizing itself).

## ⚠️ DATA FLAG — none raised, one competitor claim corrected downstream

The SERP summary surfaced a claim from a brokerage blog that "misspelled names or wrong loan terms
can trigger a mandatory waiting period reset." **That is wrong and we must not repeat it.** Under
TRID, a new three-business-day waiting period is triggered by exactly three changes:
(a) the APR becomes inaccurate (>0.125% on fixed-rate), (b) the **loan product** changes, or
(c) a **prepayment penalty** is added. A typo, a fee change within tolerance, or a corrected
proration does **not** reset the clock. Our post states the three triggers explicitly — that
accuracy is itself a differentiator, since the ranking pages get it wrong.

APR tolerance 0.125% (fixed-rate) / 0.25% (irregular) confirmed. No SKILL.md or CLAUDE.md figure
is contradicted.

## GAP SHEET — must cover

Everything the competitor has:
1. What the CD is, TRID, the 3-business-day delivery rule
2. The tolerance framework: zero / 10% aggregate / unlimited, by section letter
3. Page-1 loan terms check: rate, term, loan amount, monthly payment, prepayment penalty, balloon
4. Cash to Close: LE vs CD comparison with a "did it change?" column
5. APR and the 0.125% tolerance
6. Texas title insurance / TDI promulgated rates and the T-2 simultaneous-issue price
7. Tax prorations and why TX makes them risky
8. Escrow Section G and the RESPA 2-month cushion
9. FAQ on tolerance breach, the 3-day rule, seller-paid owner's policy

Gaps to fill (our differentiators):
10. **Top 5 errors to catch, ranked, as the spine of the post** (not an appendix):
    1. Lender fee increased from the LE → zero-tolerance violation → demand a corrected CD + cure
    2. Wrong loan term / rate / ARM index or margin → resets the 3-day clock if product changed
    3. Texas fee overcharges → title premium above the TDI promulgated rate; **survey billed twice**
       (new survey + T-47 path); **T-36 condo endorsement charged on a non-condo**
    4. Escrow miscalculated → wrong (or prior-year, or exempted) tax rate used → short or
       over-funded account, then a payment jump at the first escrow analysis
    5. Seller credit / concession missing or wrong → the October 2026 DFW live risk
11. **The cure mechanic**: zero-tolerance breach → lender must refund the excess and deliver a
    corrected CD, and the cure may be made within 60 days of consummation. Buyers do not have to
    accept it at the table.
12. **CD vs LE tolerance table** — our version adds a "what to do if it increased" column, which
    the competitor's "Changed?" column lacks.
13. **The three real 3-day-reset triggers** stated correctly (see DATA FLAG).
14. **DFW specificity**: Dallas County 2.0% rate in the proration/escrow example; Garland scenario.
15. Named composite scenario — Garland buyer catching $2,100 of zero-tolerance violations, itemized
     so the number is auditable (not just asserted).
16. 4 FAQs with NMLS + phone, first person. Question-format H2s.

Internal links (required): closing-disclosure-explained-texas-mortgage-2026.html ·
seller-concessions-texas-closing-costs-2026.html · how-long-to-close-on-house-texas.html ·
understanding-closing-costs-texas-mortgage.html · texas-title-insurance-cost-2026-buyers-guide.html ·
property-tax-proration-closing-texas-2026.html
