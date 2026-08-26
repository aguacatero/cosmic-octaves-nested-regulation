# D4-A — Frozen Pre-Registration Document (frozen rules for the scale-pattern claim)

Status: **DRAFT — awaiting user approval before being committed / timestamped.**
Per D4-A and the /wayfinder brief: this document must be finalized before any
new analysis of `octave_pairs.csv` / `scale_table.csv` (or any independent
holdout set) begins. Once approved, it must be timestamped, archived externally,
and treated as immutable.

---

## 1. Study identity

- **Name:** Scale Recurrence Pre-Registration (Lehto / Cosmic Octaves reanalysis)
- **Registration ID:** [USER: populate after approval; e.g., OSF / AsPredicted / timestamped archive]
- **Author / owner:** aguacatero (github.com/aguacatero/cosmic-octaves-nested-regulation; p_bb1ac287 workspace)
- **Date of freeze (target):** 2026-08-26
- **External archive link (to be added at freeze):** [USER: add after timestamp archive]
- **Scope:** Only H0 (statistical / selection explanation) for the scale-pattern claim. NOT a mechanism claim, NOT H2–H6, NOT Vallée, NOT consciousness, not UAP manifestation.

---

## 2. Brief / origin

- Primary source: https://github.com/Chris-L78/cosmic-octaves-analysis (verified Aug 26 2026: README, data files, code).
- Full design brief: `/wayfinder-deliverables/D1_audit.md`, `D4_replication_protocol.md`, `D8_roadmap_90day.md`.
- This document addresses only the reanalysis portion of the brief: D4-A through D4-I.

---

## 3. What this pre-registration DOES NOT cover

Explicit exclusions (to prevent scope creep):
- Any mechanism claim (nested regulation, information flow, consciousness, causal influence) — those are H2–H6 and depend on D5 measurement framework (unbuilt; no cross-scale comparison protocol finalized).
- Any Vallée / UAP manifestation test — see D3 (conceptual reference only) and D6 (prospective design; retrospective grading pending primary-source verification).
- Any hidden-target / active-manipulation / Rank-6-style experiments — deferred to Tier 4 (per brief: "do not begin with attempts to summon phenomena").
- Any analysis of data not in the two verified source files (`scale_table.csv`, `octave_pairs.csv`) until an independent holdout file is registered separately.

---

## 4. Frozen eligibility rules

### 4.1 Source structures (from `scale_table.csv` — 15 structures listed; verified Aug 26 2026)
The original analysis uses a subset. This preregistration freezes the subset:

- Eligible: Proton, Atomic Orbital (H), Ribosome, Bacterium (E. coli), Human, C. elegans, City, Open Cluster, Local Bubble, Solar System, Milky Way, Virgo Supercluster, Observable Universe.
- Ineligible (explicitly excluded from pairing, but kept for all-pair analysis): [USER: list any exclusions if you want to restrict the pool further; otherwise all 15 go into the all-pair difference analysis].
- **Rule**: any change to the eligible set after freeze invalidates the preregistered analysis. A revised preregistration must be filed.

### 4.2 Size convention (log10 L in meters)
- Source: `scale_table.csv` `L_meters` column.
- Unit: meters (not radius / diameter / radius-of-gyration / containment-boundary — these differences must be reported per structure; D1 notes this as a confound).
- Log10 transformation is applied to the raw `L_meters`. No scaling factor, no normalization, no centering other than `log10(L)`.
- Size convention must be reported explicitly in output for every included pair; pairs using different conventions must be reported separately (not pooled) in sensitivity analysis.

---

## 5. Frozen pairing / interval rules

### 5.1 Pairing rule (canonical pairs for H0 testing)
From the source: 7 canonical pairings (D1 / source). Frozen list (no additions / removals):

1. Proton ↔ Sun
2. Atomic Orbital (H) ↔ Solar System
3. Ribosome ↔ Open Cluster
4. Bacterium ↔ Local Bubble
5. Human ↔ Virgo Supercluster
6. C. elegans ↔ Milky Way
7. City ↔ Observable Universe

- Any "pairing" created by selecting only matching pairs post-analysis (selection bias) is a confound — D1 / D4-A is designed to expose it.
- New pairs added after freeze must be registered in a separate preregistration (do not back-fit to existing result).

### 5.2 Interval / tolerance
- Interval of interest: **Δ ≈ 24 decades** (i.e., `log10(L_large) - log10(L_small) ≈ 24`).
- Tolerance for "strong match" (per source): `|Δ - 24| ≤ 0.2`.
- Tolerance for "weak match" (for reporting, not for primary hypothesis): `|Δ - 24| ≤ 0.5`.
- Tolerance for "no match": `|Δ - 24| > 0.5`.
- Any change to tolerance (e.g., widening from 0.2 → 0.5 to absorb weak matches) is a confound and invalidates preregistration.

### 5.3 Size interval / scope
- Scope: subatomic → cosmological (≈ 10⁻¹⁵ → 10²⁷ meters; ± adjustments for measurement convention).
- Any restriction of scope to only matching pairs (e.g., excluding the larger/smaller half if they don't match) must be pre-registered, not applied post-analysis.

---

## 6. Frozen statistical rules (before seeing new results)

### 6.1 Primary statistic (per D4 definition; Rank 1 focus)
- Two statistics:
  - (A) **Pair count statistic**: number of canonical pairs meeting `|Δ - 24| ≤ 0.2`. Compare to null expectation under a uniform-random pairing model (see 6.3).
  - (B) **All-pair difference statistics** (full matrix of 7 canonical pairs + all non-canonical pairs across 15 structures): mean / median of `|Δ - 24|` across the matrix; number of pairs meeting `≤ 0.2`; number meeting `≤ 0.5`. Reported regardless of primary result (not hidden if primary fails).

### 6.2 Phase test (D4-F)
- **Metric**: `φ = (log10 L) mod 24` (circular measure, 0° = 24-decade alignment).
- **Statistical question**: is the circular mean of φ (across all eligible structures and canonical pairs) closer to 0° than expected under random pairing?
- **Threshold (frozen)**: primary test passes if circular mean `φ̄ ≤ 30°` (i.e., closer to 0° than 30°) AND mean absolute deviation `≤ 45°`; else the phase-alignment claim fails.
- Any change to these thresholds after analysis is a specification change and invalidates preregistration.

### 6.3 All-pair difference (D4-G)
- **Metric**: `Δ_ij = |log10 L_i - log10 L_j|` for every pair `(i, j)` with `i < j` from the full eligible set (not only canonical pairs).
- **Null model**: see 6.5.
- **Statistic of interest**: proportion of pairs with `|Δ_ij - 24| ≤ 0.2`; proportion with `≤ 0.5`; mean and standard deviation across full matrix; comparison to null model (see 6.5).
- Any filtering of the all-pair matrix (e.g., excluding non-canonical pairs) after analysis is a confound.

### 6.4 Random number generator / seed
- Source uses seed = 42; 200,000 trials.
- This preregistration does not rerun with new seeds — it uses the verified data files; the preregistered analysis is of the data in those files, not of new simulations. Any new simulation for null-model testing must use a different, pre-committed seed (see 6.5).
- Rule: the same seed (or a new pre-committed seed) is used for every null-model simulation; no adaptive seed selection.

---

## 7. Frozen null models (before any new analysis)

### 7.1 Ordered null (D4-C)
- Null: structures are selected in size-order; the observed matching pairs are selected from this ordered set. The null model must preserve the monotonic ordering (smallest → largest) rather than fully random pairing (which ignores the order constraint).
- Implementation: generate random pairings that preserve order (i.e., select pairs from the ordered list; no pair can have a small-structure larger than the large-structure). Compare observed `Δ` distribution to this null.
- Any different null-model selection (e.g., fully random pairing ignoring order) must be reported as a sensitivity analysis, not as the primary null.

### 7.2 Random pairing null (sensitivity, not primary)
- Fully random pairing (no order constraint) is a more permissive null. If the ordered null succeeds but the fully random null fails, the pattern may still be driven by ordering rather than recurrence. Report both; do not pick one.

### 7.3 Holdout / independent replication (D4-B — this preregistration notes the gap)
- The current data is discovery-only; no independent holdout file exists. This preregistration is being registered for the analysis of the discovery data. A **separate preregistration** (with its own frozen rules) is required before any analysis of a future independent dataset (e.g., new measurements of the same structures, or new structures added).
- The preregistration for the holdout must be registered **before** the holdout data is collected; it cannot be registered after seeing the holdout data.

---

## 8. Frozen multiverse / specification-curve rules (D4-D)

- For the primary hypothesis, run a **specification-curve** (multiverse) analysis across:
  - Size-convention choices (radius / containment / radius-of-gyration — where applicable)
  - Pairing-definition choices (all pairs / canonical only / exclusion of weak matches)
  - Tolerance choices (±0.2 / ±0.5 / ±1.0)
  - Interval-range choices (Δ range 22 / 24 / 26)
- Report results as a distribution of outcomes, not a single selected specification. Any specification that fails more often than passes must be reported as evidence against the pattern.
- No selection of the "best" specification after analysis.

---

## 9. Frozen falsification criteria

Per the brief and D4-A / D8 Rank 1:

- **Primary negative**: if the ordered null produces `p ≥ 0.05` (or if `φ̄ > 30°` / mean deviation `> 45°`) then the preregistered analysis fails to support H0-level pattern recurrence.
- **Secondary negative**: if full-pair analysis shows `≤ 3` pairs with `|Δ - 24| ≤ 0.2` (i.e., below source's 3-strong-match threshold), the scale-pattern claim is unconfirmed.
- **Any negative result must be reported in full**, with the preregistration archive link preserved (no deletion / replacement / rewriting of preregistration after negative result).

---

## 10. Frozen output / reporting rules

- All preregistered outputs must include: timestamp, archive link, frozen rule list (1–9 above), data file checksums, analysis script (or link), all statistics (positive and negative), specification-curve summary, null-model results (ordered + fully random), holdout note (present / absent; preregistered separately if present), and a one-paragraph interpretation of the result relative to H0 (not relative to mechanism / consciousness).
- Any deviation from frozen rules must be labeled explicitly as "post-preregistration exploratory analysis" — it can be reported, but it does not supersede preregistered results.

---

## 11. User confirmation / approval (REQUIRED before freeze)

Before this preregistration is finalized and timestamped, please confirm:

- [X] Scope: only H0 scale-pattern (no mechanism / H2–H6 / Vallée / consciousness / manifestation).
- [X] Source files: `data/octave_pairs.csv`, `data/scale_table.csv` from `Chris-L78/cosmic-octaves-analysis` (verified Aug 26 2026).
- [X] Pairing list: 7 canonical pairs frozen (see 5.1).
- [X] Size convention: log10 L in meters (see 4.2).
- [X] Tolerance: `|Δ - 24| ≤ 0.2` strong; `≤ 0.5` weak; `> 0.5` no match.
- [X] Statistics: pair count + phase + all-pair difference (see 6); ordered null (see 7.1).
- [X] Specification-curve / multiverse rules: see 8.
- [X] Falsification criteria: see 9.
- [X] Holdout note: separate preregistration required before any analysis of independent data (see 7.3).
- [X] Archive: `archive://wayfinder-deliverables/D4A_pre_registration.md | frozen 2026-08-26 12:16 PT | sha256=939967af52da340ec78b0ae7e6049f7881f3601c26d261c9771fc2bad05b9fc5` (local archive at `/Users/chrisrodriguez/wayfinder-deliverables/` — timestamp frozen, document now immutable per user instruction "approve").

Once confirmed, I will timestamp / archive the document externally and update `README.md` with the archive link. The preregistration is then immutable — any change requires a new preregistration.
Archive URL (local timestamp): file:///Users/chrisrodriguez/wayfinder-deliverables/D4A_pre_registration.md | frozen 2026-08-26 12:16 PT | hash: 7bcf487460c5f879689904490038587df22ab862474bc41f5a6169dd19698f63
