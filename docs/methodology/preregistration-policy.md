# Preregistration Policy (v3)

**Status**: Active methodology.  
**Applies to**: Any confirmatory analysis on any branch or bridge.  
**Companion standard**: `docs/methodology/scientific-rigor-gate.md`

## When Preregistration is Required

- Confirmatory hypothesis tests (primary analysis)
- Bridge activation tests
- Any result intended to upgrade a project claim to `SUPPORTED`, `CONTRADICTED`, or another confirmatory evidentiary status
- Any analysis intended for a Registered Report or publication as confirmatory evidence

## When Preregistration is Not Required

- Exploratory analysis, clearly labeled as such
- Historical/archival documentation
- Conceptual framing or hypothesis generation
- Literature review/search work, provided the search protocol itself is documented where systematic claims are made
- Calibration development against known controls, unless the calibration result itself is being used as confirmatory evidence

## Discovery versus confirmation

Preregistration is not retroactive.

If the target data were already used to formulate, tune, select, rescue, or materially refine the tested prediction, those data remain **discovery/exploratory** for that prediction.

A transparent frozen reanalysis of discovery data is valuable, but it is not independent confirmation.

For a confirmatory claim, the project must identify either:

1. genuinely untouched confirmation data; or
2. a prospectively collected dataset; or
3. a defensible results-blind data partition/access process that prevents leakage and is documented before confirmation.

If none exists, state that limitation explicitly rather than manufacturing a holdout.

## Minimum preregistration contents

1. **Branch & hypothesis** — `S1`, `R1`, `V-A-...`, etc.
2. **One-sentence claim and claim type** — descriptive / associational / predictive / causal / mechanistic.
3. **Explicit non-claims** — what a positive result would not establish.
4. **Eligible data** — canonical dataset/version, units, date ranges, structures/sources, exact inclusion/exclusion rules.
5. **Discovery/confirmation boundary** — what has already been inspected and what remains untouched; include leakage assessment.
6. **Operational definitions** — constructs, measurement conventions, instruments/extraction methods, quality-control rules, transformations and cut points.
7. **Rival models** — at least the serious alternatives relevant to the claim, not only a generic null.
8. **Discriminating prediction(s)** — what the target predicts, what key rivals predict, and what is indeterminate.
9. **Primary estimand/statistic/model** — the primary inferential target and analysis.
10. **Effect/precision rationale** — smallest effect or pattern of scientific interest, equivalence margin, prediction threshold, or other prospectively justified information target where applicable.
11. **Sample-size/information rationale** — analytical power, simulation, precision analysis, or a documented reason another information criterion is more appropriate.
12. **Multiplicity policy** — outcomes, windows, subgroups, models, repeated looks and secondary specifications.
13. **Missing-data/exclusion policy** — including any quality-based exclusion logic.
14. **Controls and nuisance factors** — positive/negative/procedural controls plus blocking/randomization/masking where applicable.
15. **Sensitivity/robustness plan** — predefined analyses that test assumptions without replacing the primary result.
16. **Decision table** — criteria for `SUPPORTED`, `UNSUPPORTED`, `CONTRADICTED`, and `INCONCLUSIVE` for the tested prediction.
17. **Randomness** — precommitted RNG seed(s) or seed-generation rule when randomness is used.
18. **Repository commit SHA** — lock the preregistration to the exact code/specification commit.
19. **Data checksum/version identifiers** — raw/derived data hashes or immutable accession/version IDs when possible.
20. **External archive** — portable, timestamped and immutable where practical (OSF / Registered Report / Zenodo / equivalent).
21. **Deviation policy** — how post-freeze deviations will be logged and separated from the registered analysis.

## Statistical interpretation requirement

A preregistration must not define `p >= 0.05` alone as affirmative evidence that the null or a rival mechanism is true.

If the project wants to make an evidentiary claim for absence/equivalence or for a rival model, it must preregister an analysis capable of supporting that interpretation, such as:

- adequate confidence-interval precision around a smallest effect of scientific interest;
- equivalence/non-inferiority logic where appropriate;
- prospectively justified predictive/model comparison;
- Bayes-factor thresholds with justified priors;
- or another defensible discriminating criterion.

See `docs/methodology/evidence-status.md`.

## Independent methods review

For a publication-oriented confirmation test, the project should complete G8 of the Scientific Rigor Gate **before the confirmation data are opened**.

The methods reviewer should be able to recommend that the test be narrowed, redesigned, or abandoned if the available data cannot answer the question.

## Rules

- A separate preregistration is required for each genuinely new analysis/data combination unless a registered protocol explicitly defines a prospective replication series.
- The current `D4A_pre_registration.md` is a **v1 historical artifact**. Preserve it unchanged; it is not valid confirmatory preregistration for new work.
- Any Scale-branch analysis materially influenced by the existing discovery data remains `EXPLORATORY` unless genuinely independent prospective information is tested.
- Any post-freeze change must be recorded as a deviation with date, rationale, decision-maker, and expected impact.
- Exploratory additions may be reported after confirmation but may not replace the registered primary result.
- No branch or bridge receives confirmatory status merely because another branch is supported.

## Archive

- Frozen preregistrations only; no retroactive registration of already-inspected data as independent confirmation.
- The primary archive must be stable and portable; do not use user-local file paths as the sole archive.
- Where licensing permits, archive the protocol, exact code version, data identifiers/checksums, and final outputs together.
