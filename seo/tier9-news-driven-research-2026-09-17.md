# Tier 9 — Fresh Keyword Research Pass (2026-09-17)

## Why this pass happened

The daily automation's priority queue (SKILL.md: Cluster A/B/C + Tiers 2–8, 109 keyword targets)
was confirmed 100% published on 2026-09-17 — every filename in the queue already existed in
`blog/`, including one apparent gap (`usda-vs-fha-loan-texas-2026.html`) that turned out to be a
redirect stub to an existing post. Zero keywords remained. Per the SKILL's own rule ("If ALL tiers
are exhausted, produce a blocker report — do NOT invent unvetted keywords"), a blocker report was
issued instead of writing speculative posts, then this research pass was run on request to refill
the queue with genuinely new, vetted targets.

## Tooling note

DataForSEO MCP tools (search volume, ranked keywords, related keywords, keyword difficulty, Google
Trends) all returned **HTTP 403** on every call attempted — an account/auth issue on that connector,
not something fixable from this session. Per explicit user instruction, do not use DataForSEO again;
all research here was done with WebSearch/WebFetch only, cross-checking each factual claim with a
second independent search before it was used to justify a topic.

## Method

Rather than continue the city × loan-program permutation grid — which `seo/sept-2026-page1-plan.md`
(2026-08-15 GSC pull) already found produces ~0.3 impressions/post/day and was explicitly called out
as "the lowest-value action available" — this pass looked for **real, dated, currently-live news
events** in the mortgage/DFW-housing space with a natural 2–4 week search-interest window, then
checked whether the existing SERP for the obvious query has room for a DFW mortgage-officer angle
(same weak-SERP test CLAUDE.md used for the original July 2026 Tier 1 reordering).

## Verified findings

1. **Mortgage rates hit a 1-year high.** 30-year fixed at 6.88% the week of Sept 14, 2026 (up from
   6.66% at the start of September). Fannie Mae's baseline projects ~6.4% average for the rest of
   2026. Sources: mortgagedaily.com weekly rate forecast, bankrate.com rate-trends page. This makes
   the existing `blog/current-mortgage-rates-texas-july-2026.html` (published 2026-07-11) stale —
   it still frames rates as declining.

2. **Government funding: Oct 1, 2026 shutdown averted, new cliff Dec 11, 2026.** Confirmed via two
   independent searches: House passed a continuing resolution Sept 2, 2026 (370–48), Senate had
   already passed it Aug 8 before recess, signed ahead of the Oct 1 deadline. New funding deadline:
   **December 11, 2026** — landing in the middle of typical Q4 closing season. Sources: ASAHP
   newswire, AHA News, The Hill, Federal News Network (all reporting the same House-passage date and
   Dec 11 deadline). USDA Rural Development's own shutdown-contingency plan confirms new Loan Note
   Guarantee issuance is suspended during any lapse — this is standing USDA policy, not something
   specific to the Sept 2 CR, and should be cited as such rather than implying the CR text mentions
   USDA by name.

3. **WalletHub's 2026 Best Real Estate Markets report ranked Frisco, TX #1 and McKinney, TX #2.**
   Confirmed via WalletHub's own report plus four independent news write-ups (Fox 4 DFW, CultureMap
   Dallas, Local Profile, Fox Business), all agreeing: 300 US cities compared across 17 metrics,
   published ~Sept 10–12, 2026. Frisco jumped from #6 last year to #1; McKinney had been #1 for the
   three prior years and dropped to #2. Denton, TX also landed at #5; Allen, TX in the top 10. No
   financing-angle content exists yet on this specific ranking — only real-estate-agent and general
   news coverage.

## SERP spot-checks (same weak-SERP test as the original Tier 1 reorder)

- "mortgage rates forecast October 2026" — dominated by Bankrate/Forbes/US News/LendingTree
  (national authority wall), but zero DFW-specific take exists.
- "should I refinance my mortgage October 2026" — mix of national sites AND small regional loan-
  officer blogs ranking on first-person voice — confirms a solo local LO's voice can compete in this
  query class, same as it already does on `how-to-get-pre-approved-mortgage-rockwall-tx.html`.
- "government shutdown mortgage 2026" — all national lender blogs (Rocket, Freedom, Veterans
  United); zero DFW/local angle, zero mention of the Sept 2 CR / Dec 11 cliff specifically.
- "Dallas Fort Worth housing market October 2026" — CNBC/HousingWire/Redfin plus local real-estate-
  agent blogs, none from a mortgage-financing perspective.

## Resulting queue

Full item list with target filenames, angles, and internal-link requirements is now in the
scheduled task file:
`C:\Users\Johno\.claude\scheduled-tasks\daily-blog-posts-bond-peter\SKILL.md` → "Tier 9 — News-
Driven Queue." Six items: 4 new news-hook posts (rates update + refinance decision + shutdown/USDA
+ Frisco/McKinney ranking) plus 2 evergreen items carried over from
`seo/sept-2026-page1-plan.md` Tier C that were vetted in August but never written (homestead
exemption filing timing, Texas MUD district effect on payment).

## Shelf-life warning

Items 1–4 are news-hook posts with a roughly 2–4 week relevance window. If Tier 9 is still being
worked more than ~2 weeks after 2026-09-17, re-verify the rate figure and shutdown-deadline status
via WebSearch before publishing — both move fast. Items 5–6 are evergreen Texas-law facts and do
not carry the same expiration risk.

## Recommendation for future queue refills

Do not return to city × loan-program permutation posts (Tiers 2–8's pattern) once Tier 9 is
exhausted — `seo/sept-2026-page1-plan.md` already demonstrated that pattern's low yield. Instead,
repeat this method: WebSearch for current mortgage-rate/housing-market/government-policy news with
a DFW angle, verify each candidate fact independently, and check the SERP is weak before writing.
