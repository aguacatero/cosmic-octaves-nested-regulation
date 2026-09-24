# Jev Rigor Adjudication Layer

**Status:** Plan 1 implemented in `ADVISORY_ONLY` mode  
**Applies to:** Methodological auditing beneath the existing Scientific Rigor Gate  
**Does not change:** Any branch's evidentiary status by itself

Project REGULUS uses pinned `typesafe/jev-1.13` as a narrow methodological adjudicator for atomic questions such as whether a dataset version is explicit, a rival model is represented, a unit of inference is defined, or a discovery/confirmation boundary is adequately documented.

Jev is **not** used to estimate whether REGULUS, Vallée's interpretation, Jackson's proposed network, the ECM observer-channel hypothesis, or a conscious controller is true. Its probabilities are audit metadata about bounded methodological questions.

## Authority order

```text
deterministic hard rules
        ↓
Jev typed methodological judgments (advisory)
        ↓
calibration / disagreement review
        ↓
human or external expert review where consequential
        ↓
official G0–G9 status
```

A deterministic failure cannot be overridden by model confidence. In particular, previously inspected data cannot become untouched confirmation, preregistration cannot erase prior exposure, `p >= alpha` alone cannot establish a null, same-data reruns are not independent replication, bridges cannot inherit evidence, and observer discrepancies cannot jump directly to agency or consciousness.

## Current authority state

The implementation is deliberately unable to promote itself beyond `ADVISORY_ONLY`. The committed 30-case seed set is model-drafted and exists only to test calibration plumbing. It is **not** a human-reviewed gold set.

A later governed authority transition requires the separate calibration plan, including at least 150 genuinely human-reviewed atomic cases, measured false-pass and calibration performance, empirically justified escalation thresholds, hash-bound approval artifacts, and continued human/expert control over consequential scientific promotion.

## VASCO pilot

The first packet lives at `analysis/exploratory/V-A-POSS-I/rigor/`. It preserves unresolved dataset-version, checksum, unit-of-inference, primary-estimand, multiplicity, and holdout questions rather than guessing them. The existence of this tooling does not upgrade VASCO evidence; the pilot remains exploratory/pre-confirmation until the scientific blockers themselves are resolved.

## Implementation

- Tool: `tools/rigor-adjudicator/`
- Rubrics: `rigor/rubrics/v1/`
- Schemas: `rigor/schemas/`
- Seed fixtures: `rigor/gold/v1/`
- CI: `.github/workflows/rigor-adjudicator.yml`

The tool pins OpenRouter's Jev model ID, records the exact served provider model snapshot when returned, hashes frozen evidence packets, validates artifacts, preserves deterministic failures, and refuses to invent a PASS threshold before empirical calibration.
