# Jev Integration Proposal — Project REGULUS

## Status

**Proposal only. Do not implement or activate Jev from this document.**

This proposal asks for a deeper repository-level review of whether Jev, accessed through OpenRouter, can improve the consistency and independence of REGULUS scientific-rigor judgments. The intended role is **constrained adjudication at explicit decision boundaries**, not scientific reasoning, evidence retrieval, statistics, prose generation, or replacement of independent domain review.

## Why this repo is a high-priority candidate

REGULUS already has the right architecture for a judgment model: explicit branches, a claim ledger, adversarial evidence, a G0–G9 Scientific Rigor Gate, allowed gate states (`PASS`, `PARTIAL`, `FAIL`, `BLOCKED`, `N/A`), and a doctrine that prevents evidence from automatically propagating into stronger claims.

The proposed value of Jev is to provide a second, repeatable evaluator over narrow methodological questions so that the same generative system is not both producing a research packet and approving it.

**Working benefit hypothesis:** materially lower false promotion of claims/gates and improve reproducibility of gate decisions. This hypothesis must be benchmarked; it is not an assumed result.

## Proposed decision boundaries

The deep review should inspect the current repository and identify the exact locations where these judgments occur today. Candidate boundaries include:

1. G0–G9 gate adjudication for each branch.
2. Whether a branch is ready to advance from conceptual/exploratory work toward a frozen study design.
3. Whether rival hypotheses are sufficiently represented before a test advances.
4. Whether an operational definition is independently implementable.
5. Whether a proposed confirmation set is genuinely untouched or contaminated by discovery work.
6. Whether a bridge hypothesis satisfies the prerequisites for activation.
7. Whether a claim should remain speculative, be downgraded, or be escalated for independent human methods review.

## What Jev must not do

Jev must not:

- decide whether REGULUS, Vallée-style control, observer modulation, agency, or consciousness is true;
- retrieve or summarize evidence;
- perform statistics, arithmetic, power analysis, geometry, dates, or data-version reconciliation;
- invent missing evidence;
- write scientific conclusions;
- replace astronomy, statistics, cognitive-science, control-systems, or other independent expert review;
- convert model confidence into scientific confidence;
- upgrade a gate merely because another branch is supportive.

All deterministic calculations and provenance checks remain code/human responsibilities.

## Proposed state passed to Jev

The implementation should construct a small factual record for one gate/claim at a time, for example:

```json
{
  "branch": "V-A",
  "gate": "G3",
  "claim_id": "...",
  "claim": "...",
  "required_criteria": ["..."],
  "current_evidence": ["..."],
  "operational_definition": "...",
  "measurement_method": "...",
  "predefined_thresholds": "...",
  "rivals": ["..."],
  "counterevidence": ["..."],
  "known_missing_items": ["..."],
  "data_exposure": "...",
  "human_current_status": "PARTIAL"
}
```

Do not pass large narrative documents if a compact structured record can represent the same state.

## Candidate Jev questions

The deep review should reduce these further into the smallest useful independent questions. Examples:

- `required_definition_present` → yes/no
- `definition_is_independently_implementable` → yes/no
- `serious_rival_is_missing` → yes/no
- `decision_depends_on_unresolved_subjective_interpretation` → yes/no
- `confirmation_boundary_is_contaminated` → yes/no
- `evidence_supports_advancement` → choice: `no`, `partial`, `yes`
- `operationalization_maturity` → ordered score 0–3
- `methods_review_required_before_advancement` → yes/no

Jev outputs probabilities; deterministic project policy converts those probabilities into `PASS/PARTIAL/FAIL/BLOCKED/REVIEW` behavior.

## Proposed deterministic policy

The review must specify conservative thresholds. A starting principle is:

- a high-confidence blocking defect can prevent advancement;
- low-confidence or conflicting judgments route to human review;
- Jev alone never upgrades a scientifically consequential gate;
- false `PASS` is treated as a substantially more serious error than false `PARTIAL`;
- API/model failure leaves the existing REGULUS process unchanged.

## Benchmark requirement

Before activation, create a gold set from historical REGULUS decisions. Target roughly 150–250 independently reviewable judgments spanning positive, partial, failed, blocked, and intentionally parked cases.

Evaluate at minimum:

- agreement with final human/methodological labels;
- false-`PASS` rate;
- false-block rate;
- probability calibration;
- performance by branch and gate;
- disagreement cases where Jev identifies a real issue missed by the original reviewer;
- sensitivity to wording/order of equivalent records.

The benchmark must be versioned and frozen before claiming improvement.

## Shadow mode

If the benchmark supports proceeding, run Jev in shadow mode first. Log Jev's answer/probability beside the existing gate decision without changing repository state. Compare against subsequent human adjudication. Only after a defined shadow period should any automated blocking or routing behavior be considered.

## API / architecture requirements

- Access Jev through one adapter module rather than embedding OpenRouter calls throughout the codebase.
- Configure credentials only through `OPENROUTER_API_KEY` or an equivalent secret store; never commit a key.
- Pin the Jev model/version during benchmarking and record the version with every result.
- Version question sets separately from code.
- Hash or identify the input record used for each decision.
- Preserve an audit log that can reproduce why a gate was routed for review.
- Fail open to the current human process, never fail into an automatic scientific `PASS`.

## Required deep-review deliverable

Create `docs/jev/DEEP_REVIEW.md` after inspecting the current repo. It must contain:

1. **Recommendation:** `GO`, `MODIFY`, or `NO-GO`.
2. Exact current judgment boundaries and source files/workflows.
3. Which boundaries are deterministic and therefore inappropriate for Jev.
4. The minimum input schema for each proposed Jev decision.
5. The minimum typed question set.
6. Gold-set construction plan and benchmark metrics.
7. False-positive/false-negative cost analysis, especially false `PASS`.
8. Shadow-mode plan.
9. Security, reproducibility, and model-version risks.
10. Estimated scientific and workflow benefit if the benchmark succeeds.
11. A concrete implementation plan **only if** the recommendation is `GO` or `MODIFY`.

## Review instruction for Claude/Codex/Hermes

Do not simply endorse this proposal. Attempt to disprove the need for Jev. Search for places where deterministic validation, stronger schemas, unit tests, independent statistical review, or existing project rules would solve the problem better. Jev should be recommended only where semantic judgment remains after those cheaper/more reliable mechanisms are exhausted.
