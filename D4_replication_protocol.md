# D4 — Cosmic Octaves Replication Protocol (preregistered; frozen rules)

Principle: distinguish exploratory (current repo) from confirmatory (this protocol); preregister before execution; retain null results; avoid arbitrary thresholding; document every researcher degree of freedom; use independent holdout; compare alternative models.

---

## A. Freeze the hypothesis (pre-specification — write this document, version, timestamp)

- **Eligible structures:** must satisfy ALL of (i) peer-reviewed measurement; (ii) organizational / collective, not isolated particle; (iii) defined by a characteristic length with documented measurement convention; (iv) not speculative / not yet observed (e.g., Oort Cloud, dark-matter halos without confirmed boundary). If a structure is added later, it must be added to BOTH discovery and holdout, not only the favorable set.
- **Characteristic-size definition:** pre-select ONE convention: half-maximum radius / half-diameter / coordination radius / mean radius / half-mass extent / half-disk scale — specify per category; do NOT switch conventions between structures or between discovery/holdout.
- **Length convention:** specify proper vs comoving; apply consistently; specify cosmological-model parameters for cosmological-scale structures (H₀, Ωₘ, Ω_Λ).
- **Time / epoch:** specify z or time (all current measurements are z≈0; if comparing across epochs, must specify epoch selection rules).
- **Octave interval:** 24.0 dex (pre-specify; do NOT adjust after seeing data).
- **Tolerance:** define both primary (≤0.2 "strong") and exploratory (≤0.7) thresholds; do NOT treat exploratory as confirmatory.
- **Pairing rule:** lower-half ladder (rungs 1–7) paired with rung (lower log₁₀ + 24) — pre-specify; if pairing is changed, treat as new specification.
- **Uncertainty handling:** propagate each structure's documented sensitivity (see D1) into a confidence interval on log-ratio; report point estimate + propagated error bar; do not report point alone.
- **Primary statistic:** number of strong matches (≤0.2) out of 7 pairs (matches current repo; must be locked).
- **Falsification threshold:** fewer than 2 strong matches in holdout under identical protocol = H1 significantly weakened on scale-recurrence component.

---

## B. Independent holdout catalog (required before any H2+ claim)

- Build or commission a NEW 15-structure ladder using different sources / measurement conventions / selection criteria from the discovery ladder. Treat existing repo data as discovery only.
- If independent build is impractical, use a structured split of literature: e.g., measurement sources from one reference family (CODATA + IAU) vs another (BioNumbers + literature values); split by measurement convention (radius vs diameter); split by time (pre-2020 vs post-2020 sources); each split produces a holdout; must replicate the primary statistic in at least 2 of 3 splits.
- Holdout must be analyzed with identical protocol, same frozen rules; analyst must not see holdout results before specifying rules.

---

## C. Ordered null models (required — current repo uses only full shuffle)

Construct at minimum:

1. **Full shuffle** (current): fully randomized ordering of 15 log₁₀ values (200k+ samples).
2. **Monotonic-preserving null:** preserve ordering of log₁₀ values, preserve total range, preserve approximate spacing density; only randomize which structure is assigned which log value within ordering constraints.
3. **Category-constrained null:** preserve category groupings (subatomic / atomic / molecular / cellular / organism / social / planetary / stellar / system / cluster / bubble / galactic / supercluster / universe); only randomize within-category assignments.
4. **Spaced null:** preserve pair separation statistics (mean / sd of adjacent differences) but randomize absolute positions.

Compare p-value across all four; report all, not only best.

---

## D. Full look-elsewhere / specification-curve

Parameters to vary (multiverse / specification-curve):
- Spacing Δ ∈ 20 → 28 (step 0.5 or continuous); not just [22, 26].
- Tolerance τ ∈ 0.05 → 1.00 (not just 0.2).
- Pairing offset (which rung of lower half pairs with which rung of upper).
- Number of levels (10, 12, 15, 18, 20, 25).
- Endpoints (exclude proton; exclude universe; include only 4–4; include 7–7; include 10–10).
- Structure inclusion (drop ambiguous: H orbital / city / local bubble / open cluster / supercluster; re-run with reduced set).
- Measurement convention (radius vs diameter vs half-mass; apply consistently to all).
- Statistic choice (count of strong; mean deviation; max deviation; summed lattice distance; circular-phase concentration; spectrum at 24.

Report specification-curve: for each parameter combination, report statistic, significance, and whether it favors H1 or H0. Use the method from the brief: "compare conclusions across multiple plausible null models."

---

## E. Continuous statistics (do not depend solely on 0.2 threshold)

- **Summed lattice distance:** Σᵢ min_k |log₁₀(Lᵢ) − (k·24 + offset)| for all eligible structures; compare to null.
- **Likelihood / Bayes factor:** model with periodic lattice vs non-periodic baseline; report Bayes factor (not just p).
- **Circular phase:** φ = log₁₀(L) mod 24; test non-random concentration with Rayleigh / Kuiper / von Mises statistics.
- **Out-of-sample predictive likelihood:** hold out 3 structures; predict from ladder; compare predicted vs observed log-ratio.
- **Spectral / autocorrelation:** treat ladder as 1-d series; test excess at lag 24 in frequency domain.

---

## F. Phase test (new)

For all eligible structures, compute φ = (log₁₀ L) mod 24 (or mod interval being tested). Use circular statistics to test for non-uniform distribution. If a periodic scale law exists, independent structures should show phase clustering near 0 (or near the phased offset defined by pairing rule). Report p, confidence interval on mean phase, and whether clustering is consistent with pairing rule.

---

## G. All-pair difference test (new)

For all 15×14/2 = 105 pairs (or eligible subset), compute d = |log₁₀ Lⱼ − log₁₀ Lᵢ|. Build histogram / density. Test whether 24 dex appears as an excess relative to continuous or null distributions, WITHOUT selecting pairs by hand first. Report significance; report whether the 7 canonical pairs are outliers in this full spectrum.

---

## H. Missing-rung predictions (prospective — must be pre-specified; do NOT retrofit)

Per brief: Earth at log₁₀ ≈ 6.8 → lower octave ≈ 6.8 − 24 = −17.2, ~6×10⁻¹⁸ m.

Procedure:
1. Pre-register the target log-range and the definition of what counts as a valid organizational structure at that scale.
2. Before searching, specify: (a) measurement convention, (b) source family required, (c) exclusion rules, (d) prediction window (timeframe), (e) criterion for "confirmed" (e.g., peer-reviewed measurement within ±0.2 dex of prediction; at least 2 independent measurements).
3. Search; report full search trajectory; do NOT change definition of "valid structure" after searching; if no match found, that IS a result (falsifies predictive content of H1 for that rung).
4. Repeat for 2–3 additional missing-rung predictions (e.g., 3.0 − 24 = −21; 26.64 − 24 = 2.64) — this builds predictive content rather than one-shot retrofitting.

---

## I. Cosmic-time / epoch / redshift test

- For cosmological structures (observable universe horizon; supercluster extents), compare proper length vs comoving length at z≈0 and at relevant redshifts.
- Ask: does the 24-dex recurrence hold in comoving units? In proper units? Only at z≈0? Only at one epoch?
- A timeless structural law predicts independence (or a specific redshift dependence). Specify the prediction before comparing.

---

## Pre-registration template fields (use before analysis)

- Title / version / date / analyst / institution
- Discovery / holdout designation (file IDs / version tags)
- Frozen eligibility rules
- Frozen measurement convention (with examples per structure category)
- Frozen pairing rule
- Frozen interval (Δ = 24.0)
- Frozen tolerance set (primary 0.2, exploratory 0.7, and continuous metrics)
- Frozen statistics (primary + secondary list)
- Null-model list (ordered, category-constrained, spaced, shuffle)
- Falsification thresholds per layer (H0 / H1 / H2 / ...)
- Planned visualizations / figures (pre-specify; do NOT add post-hoc)
- Data preservation plan (all results preserved regardless of outcome; negative results reported)

Produce PDF + version-controlled markdown of this template; time-stamp; do not edit after analysis begins (if change needed, create new version, document change reason, treat as new specification).
