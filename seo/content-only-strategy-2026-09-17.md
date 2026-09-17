# Content-Only Strategy — Getting a Service Page to Position 1 — 2026-09-17

Follow-up to `gsc-performance-analysis-2026-09-17.md`. Question: with content as the only lever
(no backlinks, citations, GBP, or reviews work), how do we get a service page to first position and
start generating calls?

## Diagnosis first — why service pages haven't moved despite lots of content

Checked two things that could explain why `fha-loans.html` / `conventional-loans.html` /
`va-loans.html` sit at positions 62–89 despite 1,500–1,900 words, tables, and FAQ schema each:

1. **Content depth is not the bottleneck.** All four core service pages already have real word
   count and structure. This isn't a thin-content problem.
2. **Internal linking looked universal (294–296/296 posts) but is mostly templated nav, not
   contextual.** Every blog post's shared header nav links to all four service pages — that's
   boilerplate Google discounts heavily. The *contextual*, in-article-body links (the kind that
   actually pass topical relevance) are much smaller: 77 to fha-loans.html, 94 to
   conventional-loans.html, 56 to va-loans.html, 49 to usda-loans.html, out of 296 posts — real,
   but using generic exact-match anchor text ("FHA loans," "VA loans") on head terms that are
   nationally competitive.
3. **The real constraint is domain authority, not content.** Live SERP checks (WebSearch, 2026-09-17)
   for "fha loan texas" and "fha loan qualifications texas" show Rocket Mortgage, LendingTree,
   Freedom Mortgage, and New American Funding mixed into the top results. No amount of on-page
   content moves a low-authority site past that mix quickly — that requires backlinks/citations/
   reviews, which is explicitly out of scope for this pass.

**This matches exactly what already happened with USDA:** the generic `usda-loans.html` service
page sits at position 62, while the ultra-specific long-tail post
`usda-loan-eligible-areas-dallas-texas.html` sits at position 6.3. Content already proved it can
win — just never on the broad national-style head term.

## The one real opportunity: "conventional loan requirements texas"

This is the single highest-impression query on the entire site — **240 impressions in 3 months,
2–4x every other query** — currently served by the generic `conventional-loans.html` at position
**82.75**. A live SERP check for this exact phrase found **zero national authorities** in the top 9
results: Herring Bank, Lone Star Financing, Texas United Mortgage, Texas Mortgage Consultants,
Bartling Lending, 1st Alliance Mortgage, The Texas Mortgage Pros, Hometownlend — every single result
is a small-to-mid Texas broker or bank, the identical weak-SERP signature that already worked for
"USDA loan Forney TX" in July. This is winnable in weeks, not months, using content alone.

Checked the same way for three other high-impression candidates:

| Query | Impressions | Current position | Verdict |
|---|---|---|---|
| **conventional loan requirements texas** | 240 | 82.75 | **WINNABLE** — no national authority in top 9 |
| fha loan qualifications texas | 52 | 74.73 | HARD — Rocket + LendingTree mixed in, top 20–30 realistic, not top 10 |
| fha loan texas | 90 | 71.76 | HARD — shorter/broader term pulls in more national brands |
| mortgage calculator texas | 102 | 90.1 | WINNABLE, conditional — confirmed `mortgage-calculators.html` already has a real interactive calculator (price/down payment/rate/tax/insurance/HOA sliders, not just prose); intent-match SERP where local community banks with basic calculators already outrank national brands |

## The playbook (repeat what already worked once)

1. **Make "conventional loan requirements Texas" this month's #1 content target.** Rebuild/expand
   `conventional-loans.html` into the single most comprehensive resource for that exact phrase —
   out-comprehensive the competing TX brokers, don't try to out-authority them: DFW-specific down
   payment stacking with named DPA programs, full 2026 conforming limit ($806,500) detail, credit
   score/DTI tiers by scenario, comparison table vs. FHA/USDA, dated 2026 freshness signals, FAQ
   schema. This is the same 7-Rules playbook already proven on the USDA hub — just pointed at a
   different, already-validated-winnable target.
2. **Build 3–4 supporting posts that contextually link to it with matching anchor text** ("read my
   full guide to conventional loan requirements in Texas") — not more city-permutation posts, and
   not more nav-menu links. This is the one lever the data shows can still move the needle without
   backlinks, precisely because this SERP has no authority wall to overcome.
3. **Second priority: strengthen contextual internal links into `mortgage-calculators.html`** from
   payment-math-heavy posts (property-tax posts, home-buying-process posts) — the tool itself is
   real and competitive, it's under-linked contextually relative to its winnability.
4. **Don't chase FHA/VA broad head terms right now.** "fha loan qualifications texas" and "fha loan
   texas" both have real national-lender authority mixed in; content alone gets these into the
   20–30 range at best in the near term, not position 1. Revisit after the conventional cluster
   proves the method again — same conclusion CLAUDE.md's own July research already reached for "FHA
   loan Garland TX" specifically (demoted to Tier 3 for the same reason).
5. **For "start getting called": fix conversion on what already ranks, in parallel.** Regardless of
   new rankings, the homepage (position 3.01, 10% CTR), the USDA hub (position 6.3), and the
   near-page-1 posts (how-long-to-close, reviews, about) already carry real impressions today.
   Audit each for an unmissable click-to-call/WhatsApp CTA above the fold (not just the sitewide
   sticky mobile bar) — this is the fastest realistic path to an actual phone call this month,
   independent of whether the conventional-loans push has landed yet.

## What this strategy explicitly does NOT attempt

Getting `fha-loans.html`, `va-loans.html`, or the broad head-term version of `conventional-loans.html`
to position 1 against Rocket Mortgage/LendingTree/Freedom Mortgage-class competitors is not
achievable with content alone on any short timeline — that requires the backlink/citation/review/GBP
work already tracked as pending in CLAUDE.md. This plan targets the specific queries where content
alone has already been shown to work, and where the SERP composition confirms it can work again.
