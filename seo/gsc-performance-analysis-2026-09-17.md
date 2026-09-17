# GSC Performance Analysis — 2026-09-17

Source: Google Search Console "Performance on Search" export, last 3 months
(2026-06-26 → 2026-09-17), downloaded by the user to `~/Downloads/`. 590 queries, 87 pages tracked.

## Headline numbers

| Period | Clicks | Impressions | Notes |
|---|---|---|---|
| 2026-06 (partial) | 0 | 143 | pre-indexing |
| 2026-07 | 8 | 2,674 | initial indexing wave from bulk blog publishing |
| 2026-08 | 8 | 3,154 | +18% impressions, flat clicks |
| 2026-09 (14 days) | 5 | 1,182 | ~84/day, flat-to-down vs August's ~102/day |
| **3-month total** | **21** | **7,153** | 0.29% overall CTR |

**Growth has plateaued.** The July indexing bump has worn off; nothing published since has moved
the daily impression rate. This confirms `seo/sept-2026-page1-plan.md`'s core finding from a month
earlier still holds: publishing more posts in the same pattern is not producing more traffic.

## Biggest single finding: fha-loans.html is a sleeping giant

| Page | Impressions (3mo) | Position | Clicks |
|---|---|---|---|
| **fha-loans.html** | **948** | **78.34** | 0 |
| usda-loan-eligible-areas-dallas-texas.html | 486 | 6.3 | 5 |
| locations/garland.html | 473 | 44.32 | 0 |
| usda-loans.html | 445 | 62.41 | 0 |
| conventional-loans.html | 336 | 79.38 | 0 |
| locations/flower-mound.html | 334 | 46.38 | 0 |
| refinance/dallas.html | 307 | 76.75 | 0 |

`fha-loans.html` gets 2–4x the impressions of any other single page on the site — Google clearly
associates real search demand with it — but sits at position 78. This is a bigger number than the
Aug 15 plan had visibility into (it only knew "~pos 77," not the volume behind it). This is the
single highest-leverage page on the site if it can be moved.

## The homepage is the best-performing asset, by far

Position **3.01**, 80 impressions, 8 clicks = **10% CTR** (site average is 0.29% — ~34x better).
Worth protecting and understanding; likely branded/near-brand query mix.

## Confirmed winner, still compounding

`blog/usda-loan-eligible-areas-dallas-texas.html`: 486 impressions @ position 6.3 (was 229 @ 6.4 a
month ago per the Aug plan — genuine month-over-month growth while holding position). The only
piece of content on the site demonstrably working. Validates the USDA-cluster-consolidation
strategy already recommended in `seo/sept-2026-page1-plan.md`.

## Other pages near page 1 (all effectively 0 clicks despite decent position)

| Page | Position | Impressions |
|---|---|---|
| how-long-to-close-on-house-texas.html | 10.07 | 184 |
| about.html | 9.88 | 69 |
| reviews.html | 10.49 | 70 |
| usda-loan-income-limits-texas-2026.html | 11.23 | 145 |
| down-payment-assistance-garland-rockwall-forney.html | 9.74 | 43 (2 clicks) |
| texas-property-taxes-mortgage-payment.html | 15.97 | 154 |

Checked whether the Aug plan's "rewrite titles for CTR" recommendation was ever executed: **yes**,
for the key posts — clean, benefit-led titles, correct canonical tags, no accidental noindex on any
of them. Their near-zero clicks at these impression volumes (145–184 over 3 months) is statistically
unremarkable at a realistic 2–4% CTR for position 10–16, not a fixable defect. That lever has
already been pulled; it is not where the next gain is.

## Device split

| Device | Position (avg) | CTR |
|---|---|---|
| Desktop | 60.81 | 0.21% |
| Mobile | 21.88 | 0.66% |
| Tablet | 10.33 | 0% (3 impressions only) |

Mobile ranks dramatically better and converts 3x better than desktop. Medium-confidence signal
(could be query-mix driven) but worth a mobile Core Web Vitals sanity check at some point.

## Noise (not worth chasing)

"irving multifamily loan" (43 imp) and "garland apartment loans" (40 imp) — commercial/multifamily
loan queries; off-ICP (Peter does residential only), harmless impressions, no action needed.

## No rich-result data

`Search appearance.csv` was empty — no FAQ/rich-snippet appearances recorded despite FAQPage schema
on every page. Likely explained by Google's Aug 2023 policy restricting FAQ rich results to
government/health sites broadly, not a site defect.

## Implication for next content strategy

See the follow-up strategy note (same date) on how to pursue service-page rankings using content
only, given this data.
