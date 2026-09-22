# Jev Integration Proposal — Project REGULUS

## Status

**Proposal only. Do not implement or activate Jev from this document.**

Evaluate Jev, accessed through OpenRouter, as a constrained adjudication layer at explicit scientific-rigor decision boundaries. Jev is not a scientific authority and must not replace evidence retrieval, statistics, deterministic validation, or independent domain review.

## Working benefit hypothesis

REGULUS already has explicit branches, a claim ledger, adversarial evidence, a G0–G9 Scientific Rigor Gate, and gate states (`PASS`, `PARTIAL`, `FAIL`, `BLOCKED`, `N/A`). Jev may improve consistency and independence of narrow gate judgments and reduce false promotion. This is a hypothesis to test, not an assumed benefit.

## Candidate decision boundaries

Review the current repository and locate the exact files/workflows for:

1. G0–G9 gate adjudication.
2. Conceptual/exploratory → frozen-design advancement.
3. Rival-hypothesis completeness.
4. Operational-definition implementability.
5. Discovery/confirmation contamination.
6. Bridge-hypothesis activation.
7. Speculative/downgrade/escalate-for-methods-review decisions.

## What Jev must not do

Jev must not decide whether REGULUS, Vallée-style control, observer modulation, agency, or consciousness is true; retrieve or summarize evidence; perform statistics, geometry, arithmetic, or provenance reconciliation; invent evidence; write scientific conclusions; replace specialist review; convert model confidence into scientific confidence; or upgrade one branch because another is supportive.

## Proposed record and question style

Pass one compact factual record per claim/gate. Candidate fields: branch, gate, claim ID, required criteria, verified evidence IDs, operational definition, measurement method, thresholds, rivals, counterevidence, missing items, data exposure, and current human status.

Questions must be atomic and typed, for example:

- `required_definition_present` → yes/no
- `definition_is_independently_implementable` → yes/no
- `serious_rival_is_missing` → yes/no
- `confirmation_boundary_is_contaminated` → yes/no
- `evidence_supports_advancement` → `no | partial | yes`
- `operationalization_maturity` → ordered score
- `methods_review_required_before_advancement` → yes/no

Deterministic policy converts probabilities into `PASS/PARTIAL/FAIL/BLOCKED/REVIEW`. Jev alone never upgrades a consequential gate. False `PASS` is the highest-cost classifier error.

# Required deep-review skill stack

A fresh repo session should **use this stack in order**. Do not substitute a generic “deep review.”

## Skill sources

**Matt Pocock engineering/productivity skills**  
Source: `https://github.com/mattpocock/skills`

**K-Dense Scientific Agent Skills**  
Source: `https://github.com/K-Dense-AI/scientific-agent-skills`

If the local agent supports installed skills, invoke the named skills directly. If not, read the referenced `SKILL.md` files from those repositories and follow their procedures explicitly.

## Pass 1 — Repository comprehension

**Call:** Matt `research`

Purpose: inspect primary repo artifacts before recommending anything. Read the rigor gate, claim ledger, scientific-rigor audit, adversarial evidence, bridge matrix, preregistration/replication material, current issues/workflows, and this proposal.

Output: `docs/jev/review/01_REPO_MAP.md`

Required contents: current judgment graph; exact source files; deterministic checks already available; current human/expert review points; candidate Jev seams; missing facts. **No GO/NO-GO recommendation yet.**

## Pass 2 — Scientific adversarial critique

**Call:** K-Dense `scientific-critical-thinking`

Purpose: try to falsify the proposed Jev role. Examine construct validity, bias, confounding, circular labeling, data leakage, confirmation bias, claim/evidence separation, exploratory-vs-confirmatory boundaries, and whether probabilities would be misinterpreted as scientific confidence.

Output: `docs/jev/review/02_SCIENTIFIC_CRITIQUE.md`

Explicitly answer: What would make Jev appear useful when it is not? Could question wording leak the desired gate outcome? Are labels independent of the system being evaluated? Could one generative model effectively grade another model sharing the same source bias?

## Pass 3 — Peer-review simulation

**Call:** K-Dense `peer-review`

Treat the proposed method as if a methods paper claimed: **“Jev improves the reliability of REGULUS scientific-rigor adjudication.”** Apply claim–evidence mapping, methods/statistics/reproducibility review, and identify specialist-review requirements.

Output: `docs/jev/review/03_PEER_REVIEW.md`

Separate major concerns, minor concerns, missing evidence, required controls, currently supportable claims, and unsupported claims.

## Pass 4 — Relevant literature/method standards

**Call:** K-Dense `literature-review` **only where external methodological evidence is needed**.

Scope this to classifier calibration, human-vs-model adjudication, inter-rater reliability, preregistration/holdout design, LLM evaluation bias, or a specific REGULUS scientific construct. Do not create an unfocused UAP literature dump.

Output when used: `docs/jev/review/04_METHOD_LITERATURE.md`

Record search boundaries, dates, inclusion/exclusion criteria, and primary citations.

## Pass 5 — Benchmark experiment design

**Call:** K-Dense `experimental-design`

Design an actual comparison, not just a “gold set.” At minimum compare:

- current human/methods adjudication;
- deterministic/rule-only baseline;
- current general LLM baseline if one exists;
- Jev candidate.

Use a frozen development/calibration set and an untouched holdout that was not used while designing Jev questions. Define the unit of inference and prevent pseudoreplication from multiple near-identical gate records.

Output: `docs/jev/review/05_BENCHMARK_DESIGN.md`

## Pass 6 — Benchmark size / precision

**Call:** K-Dense `statistical-power`

Do not accept “150–250 examples” merely because this proposal suggested it. Determine how many cases are needed to estimate the most important error rates—especially false `PASS`—with useful precision. Include enough true `FAIL/PARTIAL/BLOCKED` cases to estimate harmful promotion errors.

Output: `docs/jev/review/06_SAMPLE_PRECISION.md`

## Pass 7 — Decision-domain modeling

**Call:** Matt `domain-modeling`

Sharpen and record canonical meanings for terms such as `gate`, `judgment`, `scientific status`, `model probability`, `human review`, `false PASS`, `advancement`, `block`, `holdout contamination`, and `bridge activation`. Cross-check terminology against actual repo behavior.

Output: update/create the appropriate glossary/ADR artifacts only where useful; summarize Jev-specific definitions in `docs/jev/review/07_DECISION_MODEL.md`.

## Pass 8 — Integration architecture

**Call:** Matt `codebase-design`

Find the smallest, highest-level seam. Prefer one swappable adapter such as `judge(record, question_set)` rather than OpenRouter calls scattered through the repo. Specify deterministic policy before/after the adapter, logging, versioning, replayability, failure behavior, and a fake adapter for tests.

Output: `docs/jev/review/08_ARCHITECTURE.md`

## Pass 9 — Grill unresolved decisions

**Call:** Matt `grill-with-docs` (which combines `grilling` + `domain-modeling`)

Use this only after facts and scientific critique are complete. Grill unresolved *decisions*, not facts that can be looked up. Examples: acceptable false-PASS ceiling, shadow duration, escalation threshold, whether Jev may block but never promote, and model-upgrade policy.

Output: decisions/ADRs as appropriate plus `docs/jev/review/09_DECISIONS.md`.

## Pass 10 — Final synthesis

Create `docs/jev/DEEP_REVIEW.md` with:

1. `GO`, `MODIFY`, or `NO-GO`.
2. Exact judgment boundaries and current workflows.
3. Boundaries that should remain deterministic.
4. Minimal input schemas and typed question sets.
5. Scientific critique and peer-review findings.
6. Gold/development/holdout construction plan.
7. Baseline comparison plan.
8. False-positive/false-negative cost analysis, especially false `PASS`.
9. Benchmark sample/precision rationale.
10. Shadow-mode design.
11. Security, privacy, reproducibility, model-version, and question-version risks.
12. Estimated scientific/workflow benefit if—and only if—the benchmark succeeds.
13. Concrete implementation plan only for `GO`/`MODIFY`.

## Pass 11 — Convert an accepted review into build work

**Call only after GO/MODIFY:** Matt `to-spec`

Turn the accepted deep review into an implementation spec. Do not let `to-spec` override scientific constraints established above.

## Pass 12 — Post-implementation validation

After implementation:

- **Call:** Matt `code-review` to check standards vs spec.
- **Call:** K-Dense `statistical-analysis` on shadow/holdout results to compute error rates, confidence intervals/calibration where appropriate, subgroup behavior, and comparison with baselines.

Do not claim improvement until the untouched benchmark supports it.

## Required benchmark principles

- Frozen human-labeled development/gold data.
- Untouched holdout created before final question tuning.
- Versioned Jev model and question set.
- Direction/order/wording sensitivity tests.
- False-PASS rate treated as primary safety metric.
- API failure leaves the existing human process unchanged.
- Jev confidence is never presented as scientific confidence.

## Review instruction for Claude/Codex/Hermes

Attempt to **disprove the need for Jev**. Prefer deterministic validation, stronger schemas, unit tests, explicit project rules, and independent specialist review wherever they solve the problem better. Jev should survive the review only at repeated residual semantic judgments that can be independently benchmarked.
