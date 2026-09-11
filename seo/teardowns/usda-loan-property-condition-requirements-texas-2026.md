# Competitor Teardown — "usda loan property condition requirements texas — what fails inspection"

Date: 2026-09-11
Searched: "USDA loan property condition requirements Texas what fails inspection"

## SERP Table (top results found)

| # | URL | Type | Notes |
|---|---|---|---|
| 1 | gomortgage.com/usda-loan-appraisal-inspection/ | Lender blog | Timed out on fetch (network ETIMEOUT) — noted, not scored |
| 2 | dsldmortgage.com/blog/what-disqualifies-a-home-from-usda-financing/ | Lender blog | Timed out on fetch (ETIMEOUT twice) — title alone signals a "disqualifiers" listicle angle |
| 3 | usdaloanpro.com/part-5-usda-property-eligibility-what-are-usda-home-inspection-requirements/ | Lender blog (Sean S., MPLX/NMLS #185288) | Fetched successfully — see teardown below |
| 4 | usdaloanpro.com/what-usda-loan-inspections-are-required-in-florida-texas-tennessee-and-alabama/ | Lender blog, same author | Companion post, not fetched (budget) |
| 5 | mrrate.com/guide/usda-loan-requirements-texas-home-mortgage-approval/ | Lender guide | Fetched successfully — see teardown below |
| 6 | officeconsumer.com/do-usda-loans-require-inspection-w-examples-faqs/ | Generic finance content site | Not fetched — low relevance, aggregator-style |

No pure directories, job boards, or Redfin/Zillow listing pages surfaced for this query — the SERP is dominated by lender blog content, unlike the thinner "USDA loan Forney TX" SERP noted in CLAUDE.md. This keyword is more competitive on content depth than on domain authority.

## Strongest competitor: mrrate.com (USDA Loan Requirements Texas guide)

- ~2,800–3,200 words, 18 H2s covering the entire USDA loan lifecycle (not just property condition — property/inspection is one section of a much broader guide)
- Section "USDA Appraisal And Inspection Rules For Texas Homes" only briefly states properties must meet "HUD's minimum property standards" (safety, structural soundness, living conditions) and that vacation homes/investment properties/fixer-uppers are ineligible — **no specific fail-point detail** (no roof years, no septic detail, no termite report, no lead paint, no DFW-specific rural context)
- No county/city-level Texas references — treats "Texas" as one undifferentiated market
- Data points: 640 min credit score, 29%/41% DTI, 0% down, 30–45 day approval timeline — all consistent with our verified data, no conflicts
- CTA: generic "get a rate quote" / "apply now" — no phone number as primary CTA, no named loan officer

## Second competitor: usdaloanpro.com (Part 5 — Home Inspection Requirements)

- ~1,200 words, narrowly focused on the inspection-vs-appraisal distinction
- Key point competitors are making: appraisals are REQUIRED, home inspections are "encouraged" but not mandated by USDA itself — this is a nuance our post should also make clear (the appraisal enforces HUD Handbook 4000.1 minimum property standards; a full home inspection is optional buyer protection, not a USDA requirement)
- Covers private well water-quality tests and septic tanks at a high level; explicitly says termite/pest inspections are "not required unless specified" — this is a national framing. **Texas requires a wood-destroying insect (WDI) report as a matter of state/lender practice in most purchase transactions**, which this competitor does not surface as a Texas-specific point. This is a gap we exploit, not a data conflict (their claim is about USDA's own requirement; ours is about the TX-standard WDI report that comes with almost every TX purchase transaction).
- No DFW/Kaufman/Rockwall specificity, no dollar-figure repair-cost examples, no named-client scenario, no comparison table, no math example
- CTA is a licensed loan officer's direct phone/text/email (Sean S., NMLS #185288) — same first-person-direct pattern we use, but zero geographic localization

## GAP SHEET — what our post must cover that competitors don't

1. **DFW/Kaufman-Rockwall specificity** — neither competitor names a single Texas county or rural-suburban submarket. Our post must anchor every fail-point to the Royse City / Kaufman-Rockwall rural-suburban housing stock (well + septic lots, older roofing, expansive clay soil).
2. **Concrete fail-point list with numbers**, not a vague "must meet HUD standards" line: roof with under ~2 years remaining life, non-functioning well/septic (with note that septic often needs its own separate inspection), missing handrails, broken windows, exposed wiring, non-functioning HVAC/plumbing/electrical.
3. **Texas-specific wood-destroying insect (WDI) report** — neither competitor's fetched content flags this as a Texas-standard requirement; usdaloanpro.com actually undersells it by framing termite inspections as generally optional.
4. **Foundation / expansive clay soil** — a Texas-specific structural risk neither competitor mentions at all.
5. **Pre-1978 lead-based paint (peeling/chipping paint)** — mentioned nowhere in the fetched competitor content; HUD Handbook 4000.1 requires it be addressed. Include for completeness since older homes exist in this corridor.
6. **What happens after a fail** — seller-paid repairs, re-inspection, renegotiation, or walking away — neither competitor walks through the actual next-steps process.
7. **Comparison table: USDA/FHA-style minimum property standards vs. a conventional loan's appraisal-only approach** — nobody in the SERP does this comparison explicitly, even though both fetched competitors gesture at "similar to FHA" without spelling out the delta vs. conventional.
8. **Full worked dollar example** — nobody shows real repair-cost or re-inspection-fee numbers; we should include one.
9. **Named composite client scenario** — absent from every competitor page found; this is our clearest differentiator alongside direct phone CTA (which usdaloanpro.com also does, so we're not alone there, but we pair it with hyper-local detail they lack).

## DATA FLAG

None. No competitor page fetched contained a numeric figure (credit score, DTI, fee, income limit) that contradicts the verified 2026 data in CLAUDE.md/playbook. The 640 credit score cited by mrrate.com matches our verified figure. No USDA income-limit or fee figures appeared in the property-condition-focused competitor content at all, so there was nothing to cross-check against the $139,300/$183,900 Dallas-metro figures for this specific post.

## Fetch notes

- gomortgage.com and dsldmortgage.com both returned `getaddrinfo ETIMEOUT` on fetch (network-level, not a 403/blocked page) and were not retried a third time per the ~3-4 WebFetch budget in the playbook. Their listicle-style titles ("What Disqualifies a Home from USDA Financing") were still useful signal for the GAP SHEET even without fetching full content.
- No CAPTCHA encountered or solved; no Google SERP browser navigation was performed — used WebSearch tool only, per playbook rule.
