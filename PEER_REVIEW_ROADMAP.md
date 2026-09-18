# Peer-Review Roadmap

**Date:** 2026-09-18  
**Goal:** Move from a rigorous research architecture to conventional scientific legitimacy through narrow, independently reviewable studies.

## Strategic rule

Do **not** submit the full Lehto–Vallée–Jackson–VASCO–observer synthesis as the first empirical paper.

Treat the synthesis as the research program. Publish narrow empirical questions first. The grand model should become stronger only if independently tested branches and bridge predictions survive.

---

# Publication sequence

## Paper 1 — VASCO/POSS-I adversarial replication

### Working title

**A Preregistered Adversarial Reanalysis of Pre-Sputnik POSS-I Transients, Atmospheric Nuclear Tests, and Earth-Shadow Geometry**

### Question

When the strongest published supportive and critical analysis choices are declared in advance and applied transparently, which claims survive?

### Why first

The literature now contains a useful scientific disagreement rather than a one-sided claim:

- Bruehl & Villarroel 2025, Scientific Reports — supportive nuclear-window result;
- Watters et al. 2026, PASA — peer-reviewed methodological/data critique;
- Villarroel et al. 2026 — preprint response;
- Doherty 2026 — independent preprint replication;
- Bruehl et al. 2026, Scientific Reports — ML-based artifact validation supporting persistence of effects.

This gives the project an opportunity to contribute as an **adjudicator**, not an advocate.

### Preferred publication format

**Registered Report**, if the data-access situation and journal requirements permit it.

Scientific Reports currently accepts Registered Reports, including scientifically justified replication studies. At Stage 1, the research question, hypotheses, methods, analysis pipeline, sampling/statistical plan, exclusions, controls, and outcome-neutral quality checks are peer reviewed before confirmatory analysis. Final publication is then based on protocol adherence and defensible interpretation rather than whether the primary result is positive.

Important nuance for existing datasets: Scientific Reports distinguishes primary and secondary Registered Reports. For a secondary Registered Report using existing data, the confirmatory analyses must not be run on those data before Stage 1 acceptance in principle, apart from permitted pilot material. Confirm current journal instructions immediately before submission.

### Minimum protocol contents

1. Canonical dataset versions and checksums.
2. Clear unit of analysis: feature, plate, observation day, sky region, etc.
3. Inclusion/exclusion rules fixed before confirmatory analysis.
4. Plate-quality and spatial-systematics model.
5. Observation-opportunity/schedule normalization.
6. Artifact/feature-validity treatment, including ML probabilities where available.
7. Earth-shadow geometry implementation and validation tests.
8. Nuclear-window definition fixed in advance.
9. Multiple-testing correction and specification-curve/sensitivity policy.
10. Positive and negative controls.
11. Discovery dataset vs untouched confirmation dataset.
12. A result table stating in advance which outcomes support, weaken, or leave each claim unresolved.

### Success condition

Not "VASCO wins."

Success means another researcher can reproduce the analysis and the result materially discriminates between competing explanations.

---

## Paper 2 — Jackson-derived network prediction test

### Question

Does a quantitative network model derived from Patrick Jackson's claims predict unseen event structure better than independent-event, shared-cause, and survey-geometry alternatives?

### Gate before starting

Complete the Jackson provenance audit and obtain source correction from Jackson if possible.

### Requirements

- observed vs inferred vs speculative claim table;
- frozen network motifs;
- role-class definitions;
- temporal/relay predictions;
- null network models;
- out-of-sample dataset;
- no use of literal `sphere identity` unless shape-resolving evidence exists.

### Publication interpretation

A negative result should be publishable and should demote N without affecting unrelated branches.

---

## Paper 3 — Observer-channel masking

### Question

Do human observers show reproducible, directional divergence from independent sensor/objective channels beyond matched conventional perception and memory models?

### Why masking before steering

Masking can be compared against a ground-truth proxy or independent channel. Societal steering contains many more latent causal variables and should remain downstream.

### Preferred data

- simultaneous or near-simultaneous human + sensor observations;
- precise timestamps;
- immediate witness reports before social contamination where possible;
- conventional matched events;
- independent scoring/blinding.

### Primary model comparison

`ordinary cognition/social model` vs `observer-modulation model` on unseen cases.

A useful positive result would be **directional functional distortion**, not merely high eyewitness error.

---

## Paper 4 — Regulation / control bridge

### Question

Does any surviving event/network/observer effect participate in a genuine corrective feedback loop?

### Required before the word `regulation`

- system boundary;
- protected state/viability region;
- disturbance/error signal;
- response latency;
- measurable corrective direction;
- feedback/recovery/adaptation;
- non-regulatory coordination/response alternatives.

A correlation between a disturbance and anomalous event is not sufficient.

---

## Paper 5 — Scale↔Regulation bridge

Only after the corrected Scale branch and Regulation branch independently survive.

Candidate comparison dimensions should be dimensionless and predefined, such as normalized relaxation/response times, hierarchical depth, feedback topology, perturbation recovery, or other measures that can be applied equally to octave-paired and matched non-octave systems.

---

## Final synthesis paper

Only after multiple independent branches or bridges survive.

The synthesis paper would ask whether a single nested-regulation architecture predicts the surviving evidence better than separate independent models.

It should **not** be written as though the sources collectively prove one theory.

---

# Scientific infrastructure needed before Paper 1

## Repository organization

The confirmatory empirical work should converge on something like:

```text
/data/raw
/data/derived
/src
/tests
/notebooks/exploratory
/analysis/confirmatory
/results
/manuscript
```

Add when the analysis implementation begins:

- `CITATION.cff`
- locked computational environment (`environment.yml`, `requirements.lock`, or equivalent)
- `DATA_DICTIONARY.md`
- `REPRODUCIBILITY.md`
- `CHANGELOG.md`
- data/code availability statements
- immutable dataset/code release with DOI when practical

Ideal end state: a clean command/workflow that regenerates the registered result tables/figures from the archived inputs.

## External infrastructure

- **GitHub:** living code/research repository.
- **OSF or equivalent:** immutable preregistration/registration.
- **Zenodo/figshare or equivalent:** versioned archival data/code DOI when licensing permits.
- **Journal:** external peer review.

---

# Independent methods review

Before confirmatory analysis, recruit at least one methodologist without a stake in the outcome, ideally:

- an astronomer familiar with photographic plates/survey systematics;
- a statistician familiar with count/time-series models and observational causal inference;
- preferably both.

Their job is not to endorse the hypothesis. Their job is to identify whether the proposed test can actually discriminate the hypotheses.

A strong collaborator must be free to conclude: **the available data cannot answer the question.**

---

# External source review

Before treating the repo as presentation-ready, ask each source to correct only the representation of their own work. Do not request endorsement of the synthesis.

See `docs/external-review/README.md`.

---

# Review-readiness gate

Before sending a manuscript to a journal, require all of the following:

- [ ] primary claim fits in one sentence without invoking the grand synthesis;
- [ ] source literature includes the strongest criticism;
- [ ] data provenance/version is frozen;
- [ ] exclusions and covariates are declared before confirmation;
- [ ] competing models are implemented;
- [ ] discovery/confirmation split is explicit;
- [ ] power/information-content analysis is documented;
- [ ] code reproduces tables/figures from archived inputs;
- [ ] null/negative result remains scientifically interpretable;
- [ ] conclusions are scoped only to the tested hypothesis;
- [ ] data/code availability conforms to target-journal requirements;
- [ ] at least one independent methods review has been completed.

---

# Immediate next work package

1. Get source corrections from Lehto, Vallée, Jackson, and Villarroel.
2. Complete Wayfinder research tickets #2, #3, #4, and #10.
3. For publication priority, emphasize #3 (VASCO evidence/data/holdout audit).
4. Build a `VASCO_ADVERSARIAL_REPLICATION_SPEC.md` only after the data/version/holdout facts are resolved.
5. Freeze the spec through Registered Report Stage 1 or an immutable preregistration **before confirmatory analysis**.
6. Run the analysis and publish the result even if it is null.
