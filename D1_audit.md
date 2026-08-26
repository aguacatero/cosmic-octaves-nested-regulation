# D1 — Cosmic Octaves: Current-State Audit

Source of evidence: https://github.com/Chris-L78/cosmic-octaves-analysis (verified via curl of README.md + data/scale_table.csv + data/octave_pairs.csv + API meta; repo created 2026-01-30, last push 2026-06-14, 12 stars, language=Jupyter Notebook, open for peer review).

Author: Chris Lehto (Jan 2026 paper / video series @OurFractalUniverse). Analysis fixed seed 42; 200,000 permutation trials; code + data fully disclosed; MIT license.

---

## 1. What the work actually establishes (strongest evidence)

- **Scale-pattern claim only.** The README states explicitly: "This is a pattern claim, not a mechanism claim. It does not propose a physical cause for the 10²⁴ spacing." This is the correct framing and must be preserved.
- **Predefined ladder, locked before testing** (mitigates most post-selection). 15 structures from Proton (−15.08) to Observable Universe (26.64), spanning 42 orders of magnitude.
- **7 canonical pairs** predefined by ladder geometry (lower half paired ~24 dex up). Not cherry-picked pairs after seeing ratios — pairing rule is structural.
- **Quantified deviations:** [0.08, 1.07, 0.63, 0.665, 0.0, 0.114, 0.36] (log-ratio). 3 meet the ≤0.2 "strong" threshold (Proton→Sun, C. elegans→Milky Way, Human→Virgo); 6/7 within ±0.7.
- **Permutation p = 0.000055 (~3.9σ)** for ≥3 strong matches out of 7 under fully random ordering of the 15 log-values (200k trials, 11 successes).
- **Look-elsewhere correction over Δ ∈ [22, 26] gives p ≈ 10⁻⁵** (delta_scan.py). Conservative; does not correct for all possible structural choices.
- **Fixed seed (42), open code, open data** — reproducibility architecture is correct.
- **Peer-reviewed measurements cited** per structure (CODATA 2018, IAU 2015, BioNumbers, Pelgrims+ 2020, Bland-Hawthorn & Gerhard 2016, Planck 2018). Sensitivity notes documented (proton ±2%; ribosome ±20%s; bacterium ±30% growth-phase; city factor ~5; open cluster factor ~4; local bubble 80–360 pc irregular).

---

## 2. Weakest assumptions / where evidence is thin

- **Small-N by design:** only 7 pairs; significance depends on the hard 0.2 threshold. Changing the threshold changes the count non-linearly.
- **Structure-definition ambiguity is real and measured:** "Atomic Orbital (H)" uses Bohr radius (90% boundary ~3× larger); "City" is a coordination-radius proxy (factor ~5); "Local Bubble" is irregular (80–360 pc); "Open Cluster" spans factor ~4; "Solar System" uses Neptune orbit vs. heliopause ~2×; "Virgo Supercluster" has Laniakea alternative. These are not measurement noise — they are definitional choices that could shift ratios by ~0.2–0.6 dex, i.e. into or out of "strong."
- **"Predefined ladder" is a claim, not independently verified.** The ladder was constructed by the analyst; the code does not include an independent holdout construction. The README correctly notes "independent replication has not yet occurred."
- **Pattern noticed before formal test (acknowledged by author):** the 10²⁴ observation came from the video/heuristic exploration; the formal permutation was constructed afterward. The delta-scan partly addresses this but does not eliminate the concern that the ladder itself was shaped by earlier observation.
- **No mechanism proposed** — and that's a feature per the README, but it also means the scale recurrence has zero predictive content about physical cause until mechanism is added.
- **No independent data source:** all measurements are literature values selected by the analyst; no new measurement campaign; no cross-database consistency test across measurement conventions.
- **No cross-scale structural comparison:** no test of whether paired structures share control-architecture features (modularity, feedback, error-correction, sensing/effector ratios) — which is exactly what D7 (bridge matrix) flags as missing.
- **No epoch/redshift dependence tested:** all measurements are z≈0; a timeless structural law must predict redshift independence — untested.
- **No ordered/monotonic null:** the 200k trials fully shuffle all 15 values; they do not preserve monotonic scale ordering, total range, or spacing density — weaker evidence than required by the /wayfinder spec (Section A–E).

---

## 3. Statistical issues (with corrections needed per spec Section A–I)

| Issue (spec ref) | Status in repo | Recommendation (D4) |
|---|---|---|
| Frozen inclusion rules (A) | Partial (ladder pre-selected, but no written preregistration document with eligibility criteria, size-definition rules, proper vs. comoving convention, time/epoch) | Write frozen preregistration with explicit eligibility + measurement convention; add versioned data file |
| Independent holdout catalog (B) | Not done | Build / commission new 15-structure catalog using different measurement conventions; treat existing as discovery |
| Ordered null models (C) | Not done (only full shuffle) | Add nulls preserving monotonic ordering, range, spacing density, category constraints |
| Full look-elsewhere (D) | Partial (Δ scan [22,26]) | Specification-curve / multiverse over spacing, tolerance (±0.1→±0.5), pairing offset, #levels, endpoints, statistic choice, size convention |
| Continuous statistics (E) | Partial (hard 0.2 threshold + reported deviations) | Add summed lattice distance, likelihood, circular phase, Bayes factor, out-of-sample predictive likelihood |
| Phase test (F) | Not done | Test log₁₀(L) mod 24 for non-random phase concentration with circular statistics |
| All-pair difference (G) | Not done | Compute all 105 pairwise |log₁₀(Lⱼ)−log₁₀(Lᵢ)|; test 24 as spectral excess without manual pairing |
| Missing-rung predictions (H) | Listed in README ("falsifiable predictions for future testing") but not executed | Before searching, define valid organizational structure at predicted scale (e.g., ~6×10⁻¹⁸ m, lower octave of Earth); do NOT retrofit |
| Cosmic-time / redshift (I) | Not done | Compare proper vs comoving; ask whether recurrence exists at z>0 |

---

## 4. Measurement inconsistencies (documented — not hidden, but not resolved)

Per data/scale_table.csv (verified):

- **Length convention mix:** RMS charge radius (proton), Bohr radius / 90% boundary (H), half-diameter / half-length / half-body / coordination radius / mean radius / half-mass / median boundary / half-disk / half-density-extent / particle horizon. Not the same dimensional definition across scales — a systematic source of deviation that could either create or erase the 24-dex pattern.
- **Sensitivity spans >10×:** proton ±2% vs bacterium ±30% vs city factor 5. A proper analysis propagates each uncertainty into the ratio, yielding error bars on each deviation rather than point estimates.
- **Time/epoch conventions vary:** CODATA 2018, IAU 2015, BioNumbers (undated literature), Planck 2018, Pelgrims+ 2020. Not consistent epoch.
- **Proper vs. comoving not specified** for cosmological-scale structures (observable universe horizon is time-dependent by definition; Virgo supercluster extent depends on cosmological model).

---

## 5. Reproducibility / replication status

- **Self-reproducible:** seed 42 + open code = same output. Confirmed by design.
- **Not independently replicated:** no second group has built an independent ladder with independent measurements and found the same 3/7 ≥0.2 pattern. The /wayfinder spec requires this (B) as a prerequisite before any theory extension.
- **No preregistration document:** reproducible code ≠ preregistered hypothesis. The "falsifiable predictions" mentioned in README are listed but not documented as locked before data collection.

---

## 6. What is genuinely novel

- The explicit ladder format (15 structures, 42 dex) with paired-ratio framing is novel as an organized dataset; the statistical treatment (permutation + delta-scan) is competent and conservative relative to many pattern-claims.
- The author's own framing ("not a mechanism claim") is unusually honest for an unconventional scale-pattern claim.
- The pairing rule (lower-half ladder paired ~24 dex up) is a clean structural hypothesis rather than a post-hoc fit.

---

## 7. What is not yet supported

- Any physical cause for 10²⁴ spacing.
- Any predictive content about unobserved structures.
- Any cross-scale structural-invariant comparison (control architecture, modularity, feedback, sensing/effector ratios).
- Any replication by an independent group / independent measurement protocol.
- Any link to consciousness, regulation, or Vallée-style phenomena — these are extensions the /wayfinder brief explicitly asks us to evaluate, not to assume.

---

## Verdict for extension (input to D2/D7)

The scale recurrence is a **real, documented pattern with competent statistical treatment but small-N, definition-sensitive, not-yet-replicated, and mechanism-free.** It is sufficient as an exploratory observation (Tier 1: statistical reanalysis). It is not sufficient — by the spec's own standard — as a foundation for H3/H4 (cognition / consciousness) or H6 (Vallée-style control) until: (1) independent holdout replication, (2) continuous / phase / all-pair statistics, (3) cross-scale structural comparison, and (4) frozen preregistration exist. This is exactly the sequence the 90-day plan (D8) should pursue.
