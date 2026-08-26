# D8 — 90-Day Research Roadmap + Final Wayfinder Answer

## Part 1 — Final Wayfinder Question

> **What is the smallest set of decisive experiments or analyses that could move this idea from an intriguing pattern plus philosophical analogy into a genuinely falsifiable research program about nested regulation, consciousness, and Vallée-style anomalous manifestations?**

Ranked by: (1) discriminating power / (2) feasibility / (3) cost / (4) dependence on subjective reports / (5) vulnerability to researcher degrees of freedom / (6) ability to produce a clear negative result / (7) value if positive.

---

### Rank 1 — The Cross-Scale Phase / All-Pair Test

**What it is:** Compute all 105 pairwise |log₁₀(Lⱼ) − log₁₀(Lᵢ)| from the ladder; test whether 24 dex appears as a spectral peak in the complete difference spectrum, without manually selecting the 7 pairs. Independently, test whether log₁₀(L) mod 24 shows non-random phase concentration using circular statistics (Rayleigh / Kuiper).

**Discriminating power:** 5/7. Tests H0 vs H1 at the most fundamental level: if 24 appears as an excess in the full spectrum, it cannot be attributed to pair selection. If it does NOT appear in the full spectrum, the 7-pair finding is likely selection-driven (H0 gains substantial credibility). If it does appear, H1 is strengthened without assuming pairing.

**Feasibility:** 7/7. Requires only the existing 15-structure dataset (already in the repo). Runs in minutes in Python. No new data collection, no new equipment, no human subjects.

**Cost:** ~$0 (existing code + free compute).

**Subjective report dependence:** 0/7. Fully objective; uses only published measurements.

**Research-degrees-of-freedom vulnerability:** 3/7. Must pre-register the full-statistic choice, null model, and significance threshold before running. Specification curve over null model choice partially mitigates.

**Clear negative result:** 7/7. If the all-pair spectrum shows no 24-dex excess and phase test shows uniform distribution → H0 is substantially strengthened; extension is not warranted. This is a clean binary.

**Value if positive:** 6/7. A positive result would be the strongest single evidence for a genuine periodic scale law beyond pair selection. It would: (a) survive the main H0 challenge, (b) motivate independent holdout replication, (c) justify the missing-rung prediction program, (d) provide the evidential basis for H1.

**Implementation:** D4 F + G + E (phase test + all-pair difference + continuous statistics). Pre-register: null model list, statistic, threshold, number of tests. Estimated time: 1–3 days.

---

### Rank 2 — Ordered Null Model Comparison

**What it is:** Re-run the permutation test under 4 null models: full shuffle (current) + monotonic-preserving + category-constrained + spaced-preserving. Compare p-values. Pre-specify: if full-shuffle p < 0.001 but monotonic p > 0.05 → pattern is likely an ordering artifact; if both p < 0.001 → pattern is robust to ordering constraints.

**Discriminating power:** 6/7. The ordered null models directly test whether the pattern survives the removal of researcher degrees of freedom around structure selection. Current full-shuffle null is the weakest possible null; ordered nulls are the spec's required upgrade.

**Feasibility:** 7/7. Uses existing data; runs in ~1 hour for 200k trials on 4 null types; existing permutation_test.py is the template.

**Cost:** ~$0.

**Subjective report dependence:** 0/7. Objective.

**Research-degrees-of-freedom vulnerability:** 2/7. Must pre-register null model list + thresholds. Fewer degrees of freedom than the phase/all-pair test because pairing rule is preserved.

**Clear negative result:** 7/7. If ordered nulls yield p > 0.05 while full-shuffle yields p < 0.001 → H0 is substantially strengthened; the pattern is likely an ordering artifact. The pattern surviving ordered nulls would be strong evidence for H1.

**Value if positive:** 5/7. Positive here (ordered nulls significant) would be strong evidence that the pattern is not a selection artifact and is robust to the primary H0 challenge. Combined with Rank 1, these two tests would constitute the strongest available evidence for H1.

**Implementation:** D4 C + D (ordered nulls + specification curve). Pre-register null model list, comparison criteria, threshold agreement rule. Estimated time: 3–7 days.

---

### Rank 3 — Independent Holdout Replication

**What it is:** Build or commission a second 15-structure ladder using different measurement sources / conventions / selection criteria. Analyze with identical frozen protocol (D4 A). Require ≥2 of 3 independent holdouts to show ≥2 strong matches.

**Discriminating power:** 6/7. This is the standard replication test; a pattern that survives independent construction is not a one-analyst artifact. Failure to replicate would not necessarily falsify H1 (could be measurement convention effect) but would substantially weaken it and halt extension.

**Feasibility:** 5/7. Requires expertise to build the holdout without knowledge of the discovery results; ideally an independent analyst. Can be done by the same analyst with strict blinding (construct holdout from literature review before seeing the discovery data's specifics).

**Cost:** ~$500–2,000 (independent analyst time; ~1–2 weeks). No equipment.

**Subjective report dependence:** 1/7. Holdout construction requires judgment on measurement sources, but this is documented and pre-specified.

**Research-degrees-of-freedom vulnerability:** 3/7. Must pre-specify holdout construction rules; must not see discovery data during construction; auditor reviews for protocol adherence.

**Clear negative result:** 7/7. If holdout fails to reproduce ≥2 strong matches under identical protocol → H1 on scale recurrence is significantly weakened for extension purposes. This is a clean replication failure.

**Value if positive:** 7/7. Independent holdout success is the strongest available evidence that the scale recurrence is real and not analyst-dependent. It is the prerequisite for all downstream work (H2–H6). Without it, nothing below this point is warranted.

**Implementation:** D4 B. Estimated time: 1–2 weeks for holdout construction + 3 days for analysis.

---

### Rank 4 — Cross-Scale Control-Architecture Comparison (A2 test)

**What it is:** For the 7 octave pairs, attempt to measure at least 3 of the 10 control-dynamics measures from D5 (sensing time, response latency, memory/lifetime, active/duty, signal propagation/system size, error-correction depth, modularity, hierarchical depth, boundary regulation, information integration). Test whether octave-paired structures are more similar than random pairs under pre-registered similarity metrics.

**Discriminating power:** 5/7. This directly tests A2 (the bridge from scale to organization to control) without needing consciousness claims. It is the central experiment for H2. A negative result (no unusual control-architecture similarity) blocks extension to H2/H3/H4 regardless of whether the scale recurrence survives replication.

**Feasibility:** 4/7. Requires literature search for each structure's control-dynamics characteristics. Some measures are well-documented (neuronal response time, stellar dynamo timescales); some are speculative (galaxy sensing time). Must pre-specify which measures are attempted and how they are operationalized.

**Cost:** ~$1,000–5,000 (literature review + analyst time; ~3–6 weeks). No equipment.

**Subjective report dependence:** 2/7. Similarity metric choices and operationalization of "control architecture" are researcher degrees of freedom; pre-registration mitigates.

**Research-degrees-of-freedom vulnerability:** 4/7. Pre-specify: measures attempted, data sources, similarity metric, threshold, comparison method, handling of missing measures.

**Clear negative result:** 7/7. If octave-paired structures are NOT more control-architecture-similar than random pairs → H2 is falsified; A2 is closed negatively. This is a decisive result for the bridge.

**Value if positive:** 6/7. A positive result (paired structures share unusual control architecture) would be the most interesting finding in the entire program — it would suggest that scale pairing carries functional significance, not just length coincidence. This is the finding that would justify the Vallée/control-system extension.

**Implementation:** D4 A2 / D5 cross-scale comparison protocol. Estimated time: 4–8 weeks (literature review + metric computation + statistical comparison).

---

### Rank 5 — Vallée Primary Source Verification + Retrospective Event Dataset

**What it is:** (a) Acquire and extract key Vallée primary texts (Dimensions / Confrontations / Revelations / Passport to Magonia + relevant Davis/Vallée papers). Code each observation/interpretation/speculation per D3 format. (b) Build a retrospective manifestation event dataset using the evidentiary grading system (D6 A2) from pre-specified sources, with blinding (Team A for manifestation, Team B for state indices). Score independently; pre-register the temporal analysis plan; report all results.

**Discriminating power:** 4/7. This does not directly test H6 but establishes whether Vallée's empirical claims survive scrutiny and whether there is sufficient event-grade evidence to justify prospective study. A weak retrospective (mostly grade 0–1 events) would argue against pursuing the full D6 protocol.

**Feasibility:** 4/7. Requires access to primary texts (~$50–200 + library); event dataset construction requires trained raters; blinding requires at least 2 team members.

**Cost:** ~$500–3,000 (books + analyst time 2–4 weeks). Moderate.

**Subjective report dependence:** 5/7. Primary source coding requires judgment; event scoring requires rater training. But: blinding + inter-rater reliability (κ) requirement partially mitigates.

**Research-degrees-of-freedom vulnerability:** 5/7. Must pre-specify source list, coding rules, event inclusion criteria, evidentiary grading rules, temporal analysis method, lag windows.

**Clear negative result:** 6/7. If retrospective shows no state-dependent triggering (D5.1 test) and no corrective direction (D5.6 test) → H6 is significantly weakened. However, absence of evidence ≠ evidence of absence; this is a moderate negative.

**Value if positive:** 5/7. A positive retrospective (significant state-triggering + corrective direction, surviving confound controls) would justify the full D6 prospective study. This is the gating decision for the Vallée program.

**Implementation:** D3 + D6 A1. Estimated time: 3–6 weeks (source verification) + 4–8 weeks (event dataset).

---

### Rank 6 — Prospective Hidden-Target Test (lowest-risk active experiment)

**What it is:** Only after positive results from Rank 5. (a) Cryptographically generate a hidden target (random string, image, or location). (b) Keep target inaccessible to participants and investigators. (c) Pre-define observation window. (d) Record manifestation / perception / physiological data before target reveal. (e) Use independent blinded scoring. (f) Pre-specify number of trials (at least 30). (g) Publish failures and successes. (h) Audit for sensory leakage.

**Discriminating power:** 5/7. A positive result would initially support anomalous information transfer — not automatically cosmic consciousness (per the brief: "not automatically higher cosmic consciousness"). It would discriminate H6 (anomalous information channel) from random-event / media-contagion / reporting-bias alternatives.

**Feasibility:** 3/7. Requires: ethical review (IRB); participant consent; cryptographic protocol; blinding infrastructure; independent scorer; sufficient trial count. Non-trivial logistics.

**Cost:** ~$5,000–20,000 (ethics review, participant compensation, cryptographic setup, analysis). Moderate-high.

**Subjective report dependence:** 6/7. Depends on participant perception, physiological measurement, and scorer judgment. Blinding + objective scoring (hit rate vs. chance, physiological response magnitude) mitigates.

**Research-degrees-of-freedom vulnerability:** 5/7. Must pre-register: target generation method, observation window, outcome measures, analysis plan, stopping rule.

**Clear negative result:** 6/7. Sufficiently powered null result (hit rate = chance; no physiological effect above noise) would argue against anomalous information transfer for H6. Moderate because even null here doesn't falsify all forms of H6 (the channel may not be directly accessible to human perception).

**Value if positive:** 7/7. Positive hidden-target result is the most extraordinary finding possible within this program: objective anomalous information transfer. Even if it does not prove cosmic consciousness, it would be a fundamental discovery. Per brief: "Only after this should the project seriously entertain the stronger claim of a conscious higher-level controller."

**Implementation:** D6 B (prospective) + brief "Active Tests" section. Estimated time: 8–16 weeks (ethics + setup + trials + analysis) — ONLY after positive Rank 5.

---

## Summary table: ranked decisive experiments

| Rank | Experiment | Disc. | Feas. | Cost | Subj. | RDF | Neg. | Pos. |
|---|---|---|---|---|---|---|---|---|
| 1 | All-pair + phase test | 5 | 7 | $0 | 0 | 3 | 7 | 6 |
| 2 | Ordered null comparison | 6 | 7 | $0 | 0 | 2 | 7 | 5 |
| 3 | Independent holdout | 6 | 5 | $2k | 1 | 3 | 7 | 7 |
| 4 | Cross-scale control-arch. | 5 | 4 | $5k | 2 | 4 | 7 | 6 |
| 5 | Vallée source + retrospective | 4 | 4 | $3k | 5 | 5 | 6 | 5 |
| 6 | Hidden-target prospective | 5 | 3 | $20k | 6 | 5 | 6 | 7 |

**Minimum viable falsifiable program (in order):**
1. Ranks 1+2 first (days; $0; no human subjects; maximally discriminating for H0 vs H1; clean negative)
2. Rank 3 second (weeks; ~$2k; prerequisite for any extension)
3. Rank 4 third (weeks; ~$5k; directly tests A2; no consciousness claims needed)
4. Rank 5 fourth (months; ~$3k; gates the Vallée extension)
5. Rank 6 last (months; ~$20k; only after positive Rank 5)

---

## Part 2 — 90-Day Research Program (Tier 1: existing data, passive methods)

**Phase 0 — Setup (Days 1–5)**

- Day 1: Create versioned project directory; set up git; write README with status and citations.
- Day 2–3: Clone the Lehto repo; read code (permutation_test.py, delta_scan.py); reproduce figures 1–5 locally.
- Day 4: Write frozen pre-registration document (D4 A) for all statistical tests. Lock: eligibility, size convention, interval, tolerance, pairing rule, statistics, null models, falsification thresholds, version. Timestamp. Archive.
- Day 5: Write blinding protocol for statistical analysis (who can see what, when).

---

**Phase 1 — Statistical upgrade (Days 6–30)**

- Day 6–10: Implement ordered null models (monotonic-preserving, category-constrained, spaced-preserving; D4 C).
- Day 11–15: Implement specification curve over: Δ ∈ [20,28] step 0.5; τ ∈ [0.05,1.0] step 0.05; pairing offset; structure inclusion/exclusion; statistic choice (count/mean-deviation/summed-distance/likelihood/Bayes factor). Run full multiverse. (D4 D + E)
- Day 16–20: Implement and run phase test (log₁₀(L) mod 24; Rayleigh/Kuiper; D4 F).
- Day 21–25: Implement and run all-pair difference test (105 pairs; spectral peak at 24; D4 G).
- Day 26–30: Report all results, positive and null, in structured format. Archive all versions. Write analysis report.

**Deliverable:** Statistical reanalysis report (Phase 1 report) covering Ranks 1 and 2. This determines whether the scale recurrence survives the primary H0 challenges. If it fails here, the 90-day program stops and the research program is halted.

---

**Phase 2 — Holdout + Vallée preparation (Days 31–60)**

- Day 31–40: Construct independent holdout catalog (D4 B). Use different literature sources; apply frozen eligibility rules; do NOT look at discovery results during construction. Document each measurement source, version, date, and convention.
- Day 41–50: Analyze holdout with frozen protocol; compare to discovery; report replication status.
- Day 41–45: Acquire key Vallée primary texts (Dimensions, Confrontations, Revelations; or verify via library/ebook). Begin coding per D3 format.
- Day 46–55: Build retrospective manifestation event candidate list from pre-specified sources (NARCAP, NICAP, published case catalogs). Apply D6 evidentiary grading. Pre-register temporal analysis (lag windows, methods, confound controls).
- Day 56–60: Synthesize Vallée coding (D3 update). Complete retrospective dataset with grades.

**Deliverable:** Holdout replication report (Phase 2a) + Vallée synthesis + retrospective dataset (Phase 2b).

---

**Phase 3 — Cross-scale comparison + synthesis (Days 61–90)**

- Day 61–75: Literature review for control-architecture measures for each of the 7 octave pairs. Pre-specify which measures to attempt, data sources, similarity metric, and comparison method. Implement cross-scale comparison (D4 A2 / D5 cross-scale protocol).
- Day 76–85: Run comparison; report results; apply pre-registered similarity threshold; test leave-one-out robustness.
- Day 86–90: Synthesize Phase 1–3 results. Write final 90-day research report: (a) what survived H0 challenges; (b) holdout status; (c) A2 status; (d) Vallée empirical basis; (e) decision: proceed to Phase 2 (prospective study) or halt extension.

**Deliverable:** Final 90-day synthesis report with: 7-arrow bridge status, decision criteria for extension, and ranked next steps (Phase 2 prospective study, or publication of null/negative results).

---

## Gates and stopping rules

| Day | Gate | If result | Decision |
|---|---|---|---|
| 30 | Phase 1 complete | Ranks 1+2 negative (pattern disappears under ordered nulls / phase test / all-pair test) | Halt program. Publish null result. No extension to H2–H6. |
| 30 | Phase 1 complete | Ranks 1+2 positive | Continue to Phase 2. |
| 60 | Holdout + Vallée | Holdout fails (no replication) | Publish. Significant caveat on H1. Halt H2+ until independent replication. |
| 60 | Holdout + Vallée | Vallée coding + retrospective shows insufficient evidence (mostly grade 0–1 events; no state-triggering) | Significant caveat on H6. Publish retrospective result. Continue Phase 3 for H2 test (A2) only. |
| 90 | Cross-scale + synthesis | A2 positive (paired structures share control architecture) | Justified to proceed to H3–H4 operationalization + prospective study design (Rank 4–6 pathway). |
| 90 | Cross-scale + synthesis | A2 negative | H2 falsified. A2 closed. Publish. Do not proceed to H3–H6. |

---

## Budget estimate (90 days, Tier 1 only)

| Item | Cost estimate |
|---|---|
| Analyst time (self or contractor, ~20 hr/week × 13 weeks) | $0–15,000 |
| Literature / primary sources (Vallée books) | $50–200 |
| Compute (local; no cloud needed for Phase 1–3) | $0 |
| Holdout catalog (independent analyst, 1–2 weeks) | $1,000–3,000 |
| **Total Tier 1 (90 days)** | **$1,050–18,200** |
| Tier 2 (prospective study; Rank 5–6) | $5,000–25,000 (if Phase 1–3 positive) |
| **Total if full program proceeds** | **$6,000–43,200** |
