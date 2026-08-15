# Path to Page 1 by End of September 2026 — Data-Grounded Plan

Pulled from Google Search Console API on 2026-08-15, last 28 days (2026-07-18 → 2026-08-15).

---

## THE ACTUAL NUMBERS

| Metric | Value |
|---|---|
| Total US impressions (28 days) | **2,126** (~76/day) |
| Total clicks (28 days) | **12** |
| Distinct queries site appears for | 296 |
| Published blog posts | 234 |
| Impressions per post per day | **~0.3** |

**Best-performing page:** `/blog/usda-loan-eligible-areas-dallas-texas.html` — 229 impressions,
average position **6.4**. Its top query is "cities that qualifiy for usda loans in dfw" (note the
searcher's misspelling) at **position 6.2**.

**Pages already on page 1 or its edge** (position ≤ 11):

| Page | Pos | Impressions |
|---|---|---|
| /blog/usda-loan-eligible-areas-dallas-texas.html | 6.4 | 229 |
| /blog/down-payment-assistance-garland-rockwall-forney.html | 6.4 | 17 |
| /blog/dfw-housing-market-update-july-2026.html | 7.0 | 2 |
| /blog/fha-loan-limits-dallas-county-2026.html | 7.3 | 15 |
| /blog/debt-to-income-ratio-mortgage-texas.html | 8.9 | 17 |
| /blog/does-pre-approval-hurt-credit-score.html | 9.0 | 1 |
| /blog/down-payment-assistance-texas-homebuyers.html | 10.0 | 1 |
| /blog/fha-vs-usda-loan-texas.html | 11.0 | 1 |

**The Prosper cluster** (`/locations/prosper.html`, 50 impressions):
- "prosper mortgage officer" — pos 24.2, 16 imp
- "prosper tx loan officer" — pos 20.0, 12 imp
- "mortgage broker prosper texas" — pos 17.8, 6 imp
- "residential mortgage loan originators prosper" — pos 17.0, 1 imp

**"Near me" queries** — all appearing but far down: "mortgage lenders near me" (pos 24.5),
"mortgage banker near me" (23.5), "mortgage loans near me" (23.8), "mortgage near me" (24.8),
"mortgage lender near me mansfield" (11.0), "mortgage consultant near me" (25.0).

---

## HONEST READ ON THE SEPTEMBER GOAL

Two separate goals are bundled in "page 1 by end of September and lots of visitors." They have
very different odds.

**"Get pages to page 1" — achievable.** The site already has 8 pages at position ≤ 11 and a
cluster of Prosper queries at 17–24 in a SERP that CLAUDE.md's own research describes as weak
(directories, job boards, one real local competitor). Moving several of these into the top 3–5 by
end of September is realistic.

**"Lots of visitors" — not achievable by end of September, and page-1 rankings won't deliver it.**
This is the finding that matters most. The site's *entire* query footprint is 2,126 impressions
per month. Even in a fantasy scenario where every page ranked #1 tomorrow at a 30% click-through
rate, that ceiling is roughly 640 clicks/month. The realistic outcome of doing everything below
well is **40–100 clicks/month by October** — a 4–8× improvement over the current 12, but not
"lots of visitors."

**The root cause is topic selection, not content volume.** 234 posts generating 76 impressions per
day means the keywords being targeted have almost no search volume behind them. "prosper mortgage
officer" drew 16 impressions in 28 days — ranking #1 for it might yield 5 clicks a month. Writing
more posts in this same pattern adds pages, not traffic.

**Publishing more posts is the lowest-value action available right now.** Everything below is
ordered by actual leverage.

---

## PRIORITY 1 — Google Business Profile verification (Peter must do this)

At least six "near me" queries are already surfacing at positions 23–28. CLAUDE.md's own SERP
research recorded 74 near-me queries producing 342 impressions and 0 clicks, and concluded the
lever is GBP verification, not page content — "near me" searches resolve to the local map pack,
which a website page cannot enter.

For a local mortgage officer, the map pack is where the commercially valuable traffic is. This is
blocked on Peter completing video verification and is almost certainly worth more than every
content action on this list combined. **No amount of blog writing substitutes for it.**

## PRIORITY 2 — Fix click-through on the 8 pages already at position ≤ 11

These pages have earned impressions and convert almost none of them. A page at position 6 should
see roughly 5–6% CTR; `/blog/usda-loan-eligible-areas-dallas-texas.html` is at 229 impressions
with 2 clicks (~0.9%).

This requires **zero new content** — only rewriting `<title>` and `<meta description>` — and is
the fastest measurable win available, typically showing movement within 2–4 weeks.

Specific fixes:
- Lead titles with the benefit and a number, not the NMLS number. "NMLS #2670329" in the title
  consumes pixels and persuades nobody at the click stage — keep it in schema and on-page, drop it
  from the title tag on informational posts.
- Match the searcher's actual phrasing. The top query is *"cities that qualify for USDA loans in
  DFW"* — the page title should contain "Cities That Qualify," not "Eligible Areas."
- Put the concrete number in the description (income limits, the count of eligible cities).

## PRIORITY 3 — Consolidate the USDA cluster

USDA is the only topic on this site with proven traction, and it is now being actively
cannibalized. There are at least ten overlapping USDA posts:

```
usda-loan-eligible-areas-dallas-texas.html          ← the winner, pos 6.4, 229 imp
usda-loan-eligible-areas-forney-royse-city-terrell-2026.html
usda-loans-texas-eligibility.html
usda-loan-income-limits-texas-2026.html
usda-loan-income-limits-dfw-by-county-2026.html
do-i-qualify-usda-loan-texas-income-2026.html
usda-vs-fha-loan-texas-which-is-better.html
fha-vs-usda-loan-texas.html                         ← near-duplicate of the above
usda-loan-forney-tx-2026.html
usda-loan-rockwall-tx-2026.html / usda-loan-rockwall-tx.html  ← near-duplicate pair
usda-loan-royse-city-tx-2026.html
usda-loan-terrell-tx-2026.html
```

Actions:
1. Make `usda-loan-eligible-areas-dallas-texas.html` the explicit cluster hub. Every other USDA
   post links up to it with descriptive anchor text ("cities that qualify for USDA loans in DFW").
2. Merge the two genuine duplicate pairs (`usda-vs-fha` / `fha-vs-usda`, and the two Rockwall
   posts), 301-redirecting the weaker URL into the stronger one.
3. Expand the hub page into the definitive DFW USDA eligibility resource — every eligible city,
   income limits by county, address-check instructions.

Pushing one page from position 6.2 to top 3 on the site's highest-impression query is worth more
than 20 new posts on queries with no volume.

## PRIORITY 4 — Finish the Prosper push

The Prosper queries sit at 17–24 against a genuinely weak SERP. Every Cluster B post is written;
what's missing is internal link equity. Point descriptive internal links from the highest-authority
pages (homepage, about, blog index) at `/locations/prosper.html` using the exact query phrasing
buyers use: "Prosper TX loan officer," "mortgage broker Prosper Texas."

## PRIORITY 5 — Only now, new content — and only where volume plausibly exists

The pattern to stop: city × loan-program permutations. That grid is exhausted (234 posts) and it
is what produced 0.3 impressions per post per day.

The pattern to start: **borrower-situation questions**, which are a different axis entirely, carry
real search volume, and have thin competition because most lender sites won't touch them.

---

## CANDIDATE QUESTION BATCH

Generated against the exclusion list of all 234 existing posts. Anything already served by an
existing post was discarded. Ordered by realistic odds of ranking, not by volume.

### Tier A — Supports the USDA hub (best odds; builds on proven traction)

1. is my address eligible for a usda loan in texas — how do i check
2. what happens if my area loses usda eligibility before i close
3. can i use a usda loan on new construction in texas
4. usda loan closing costs texas — who pays what
5. how long does a usda loan take to close in texas vs fha
6. can i get a usda loan if i already own a home in texas
7. usda loan property condition requirements texas — what fails inspection
8. do usda loans have a maximum purchase price in texas

### Tier B — Borrower-situation gaps (thin competition, real volume)

9. can i get a mortgage in texas if i'm self employed with 1099 income
10. how long after chapter 7 bankruptcy can i buy a house in texas
11. can i buy a house in texas with an itin number
12. buying a house in texas while still selling my current one
13. do deferred student loans count against my dti in texas
14. can my parents be on my mortgage without living in the house texas
15. how much of my down payment can be a gift in texas
16. can i get a mortgage with a new job in texas — how long do i need
17. what happens if my appraisal comes in low in texas
18. can i buy a house in texas with collections on my credit report

### Tier C — Texas-specific rules (differentiated, defensible)

19. texas 50a6 cash out refinance rules — what makes texas different
20. when do i file my homestead exemption in texas after closing
21. why is my texas mortgage payment higher than the calculator said
22. how does a texas mud district affect my mortgage payment
23. do i need flood insurance in dfw and how much does it add

### Tier D — Higher volume, longer horizon (will not rank by September)

24. how much house can i afford on 60k salary in texas
25. how much do i need to make to buy a 300k house in texas
26. what credit score do i need to buy a house in texas in 2026
27. how much are closing costs on a 300k house in texas

**Realistic expectation:** Tier A and B items published in the next two weeks might reach page 1
for their exact long-tail phrasing by late September. Tier D will not — those are 6–12 month
targets requiring domain authority the site does not yet have.

---

## WHAT I'D ACTUALLY DO IN THE NEXT 6 WEEKS

| Week | Action | New posts |
|---|---|---|
| 1 | GBP verification (Peter). Rewrite titles/descriptions on the 8 page-1-edge pages. | 0 |
| 2 | USDA cluster consolidation: hub links, merge duplicates, expand hub page. | 0 |
| 3 | Prosper internal linking. Publish Tier A items 1–4. | 4 |
| 4 | Publish Tier A 5–8. Re-pull GSC and measure CTR change from week 1. | 4 |
| 5 | Publish Tier B 9–13. Begin directory citations (BBB, chamber listings). | 5 |
| 6 | Publish Tier B 14–18. Re-measure. | 5 |

That is **18 new posts in six weeks, not 30** — with the first two weeks spent on zero new content,
because fixing what already ranks beats adding more that doesn't.

**Recommend pausing the daily 5-post automation** while this runs. It is currently producing pages
faster than they can earn impressions, and duplicate-topic risk against 234 existing posts is now
the dominant failure mode — a live post was nearly overwritten on 2026-08-14 for exactly this
reason.
