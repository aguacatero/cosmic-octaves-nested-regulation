# Project REGULUS — Jev Rigor Adjudication Design

**Date:** 2026-09-20  
**Status:** Design specification — implementation not yet started  
**Project:** Anomalous System of Control: Project REGULUS  
**Purpose:** Add a reproducible, calibrated methodological-adjudication layer beneath the existing Scientific Rigor Gate without allowing model confidence to substitute for scientific evidence.

---

## 1. Objective

Project REGULUS already separates claims into independent branches, requires adversarial alternatives, and gates confirmatory promotion through G0–G9. The remaining weakness is that many gate judgments are still made by humans or general-purpose LLMs reading prose and deciding whether a requirement is satisfied.

This design adds **Jev as a narrow decision engine** for atomic methodological questions.

The subsystem will not answer:

> “How likely is Project REGULUS to be true?”

It will answer questions such as:

- Is the exact dataset version identified?
- Is the unit of inference explicit?
- Is the confirmation dataset genuinely untouched?
- Is a rival artifact model specified?
- Is multiplicity handled prospectively?
- Does the analysis incorrectly treat `p >= alpha` as evidence for the null?
- Does a bridge inherit evidence from a parent branch without a novel joint prediction?

The output is an auditable methodological decision record, not a probability that an anomalous control system exists.

---

## 2. Design principles

### 2.1 Jev is an adjudicator, not a scientist

Jev may classify whether frozen criteria appear satisfied. It does not create evidence, determine scientific truth, infer mechanisms, or promote a hypothesis by itself.

### 2.2 Hard rules outrank model judgments

Any deterministic rule encoded by REGULUS overrides Jev confidence.

Example:

```text
Jev: untouched_confirmation = YES (0.93)
Hard check: confirmation dataset was previously inspected
Final adjudication: FAIL — not untouched
```

Model confidence cannot waive preregistration, provenance, leakage, or branch-isolation rules.

### 2.3 Official gate statuses remain non-numerical

The Scientific Rigor Gate continues to use:

- `PASS`
- `PARTIAL`
- `FAIL`
- `BLOCKED`
- `N/A`

Jev probabilities are retained internally as audit metadata. They are not converted into a project-wide “science score,” hypothesis probability, or confidence that REGULUS is correct.

### 2.4 Small questions beat holistic judgments

The evaluator asks many narrow typed questions instead of one question such as “Is this rigorous?”

Atomic decisions are easier to test, calibrate, challenge, and reproduce.

### 2.5 Calibration must precede authority

Jev will not be allowed to autonomously determine gate status until it has been evaluated against a human-labeled REGULUS gold set.

### 2.6 Disagreement is a first-class output

Differences among Jev, deterministic checks, general-purpose LLM review, and human/expert review are preserved rather than collapsed away.

The disagreement queue is expected to reveal ambiguous criteria, evaluator weakness, and hidden methodological assumptions.

---

## 3. Model and API policy

### 3.1 Pinned model

Initial implementation uses:

```text
typesafe/jev-1.13
```

through OpenRouter.

The moving alias `~typesafe/jev-latest` must not be used for archived or publication-supporting evaluations because silent model changes would damage reproducibility.

A future model upgrade requires a new calibration run against the full gold set and a versioned comparison report.

### 3.2 API surface

The implementation should use OpenRouter's Decisions API rather than ordinary chat completion when available.

Conceptual request shape:

```text
model: typesafe/jev-1.13
state:
  description: <what the evidence packet contains>
  records: [...]
questions:
  <question_id>:
    type: <typed decision>
    instructions: <frozen criterion>
```

Raw provider output must be preserved in the evaluation artifact.

### 3.3 Environment

Required secret:

```text
OPENROUTER_API_KEY
```

Secrets must never be committed.

Every evaluation artifact records:

- model ID;
- evaluation schema version;
- rubric version;
- code commit SHA;
- evidence-packet SHA-256;
- timestamp;
- API/provider metadata available from the response;
- deterministic-rule version.

---

## 4. Proposed repository structure

```text
tools/
  rigor-adjudicator/
    README.md
    package.json
    package-lock.json
    src/
      cli.ts
      evaluator.ts
      deterministic-rules.ts
      schemas.ts
      calibration.ts
      scoring.ts
      disagreement.ts
    tests/
      deterministic-rules.test.ts
      schemas.test.ts
      calibration.test.ts
      fixtures/

rigor/
  rubrics/
    v1/
      G0-scope.json
      G1-evidence-boundary.json
      G2-rivals.json
      G3-operationalization.json
      G4-design.json
      G5-statistics.json
      G6-provenance.json
      G7-reproducibility.json
      G8-independent-review.json
      G9-confirmation.json
      bridge.json
      observer-channel.json
  gold/
    v1/
      cases.jsonl
      labels.jsonl
      README.md
  schemas/
    evidence-packet.schema.json
    evaluation.schema.json
    adjudication.schema.json
    calibration-report.schema.json
  evaluations/
    README.md

analysis/
  confirmatory/
    <branch>/<study>/
      evidence-packet.json
      jev-evaluation.json
      deterministic-evaluation.json
      llm-review.json
      adjudication.json
      calibration-context.json
```

Generated evaluation artifacts for exploratory work may live outside `analysis/confirmatory`, but anything used in publication or confirmation must use the canonical structure above.

---

## 5. Evidence packet

Jev must not be given an unconstrained dump of the whole repository.

Each evaluation receives a **frozen evidence packet** with explicit provenance.

Minimum schema:

```json
{
  "packet_id": "V-A-POSS-I-001",
  "branch_id": "V-A",
  "hypothesis_id": "...",
  "claim": "...",
  "claim_type": "associational",
  "non_claims": ["..."],
  "evidence_boundary_date": "2026-09-20",
  "sources": [
    {
      "source_id": "...",
      "type": "peer_reviewed|preprint|data|code|review",
      "citation": "...",
      "claim_relevance": "...",
      "limitations": ["..."]
    }
  ],
  "data": {
    "dataset": "...",
    "version": "...",
    "checksum": "...",
    "discovery_status": "...",
    "confirmation_status": "...",
    "prior_exposure": "..."
  },
  "design": {},
  "statistics": {},
  "rivals": [],
  "controls": [],
  "known_disagreements": [],
  "attachments": []
}
```

Evidence packets are immutable once used for an archived evaluation. Corrections create a new packet version.

---

## 6. Rubric architecture

Each Scientific Rigor Gate receives its own versioned set of atomic questions.

### G0 — Scope and claim isolation

Example questions:

- `claim_is_single_and_testable`
- `claim_type_is_explicit`
- `unit_of_observation_defined`
- `unit_of_inference_defined`
- `non_claims_explicit`
- `branch_evidence_not_inherited`

### G1 — Dated evidence boundary

- `search_date_recorded`
- `search_sources_named`
- `search_queries_preserved`
- `inclusion_exclusion_defined`
- `peer_review_status_distinguished`
- `strongest_supportive_evidence_included`
- `strongest_critical_evidence_included`
- `source_claim_mapping_present`

### G2 — Serious rivals and discriminating predictions

- `ordinary_artifact_rival_present`
- `selection_bias_rival_present`
- `shared_cause_rival_present`
- `stochastic_rival_present`
- `domain_specific_rivals_present`
- `target_and_rivals_make_different_predictions`
- `simple_null_rejection_not_equated_with_mechanism`

### G3 — Operationalization and measurement

- `construct_operationally_defined`
- `measurement_unit_defined`
- `instrument_or_extraction_defined`
- `quality_control_defined`
- `reliability_or_error_characterized`
- `missingness_defined`
- `transformations_justified`
- `proxy_vs_direct_measurement_explicit`

### G4 — Design, controls, and inference

- `sampling_process_defined`
- `experimental_or_observational_unit_defined`
- `controls_present`
- `masking_addressed`
- `randomization_or_reason_na_present`
- `batch_plate_site_observer_effects_addressed`
- `pseudoreplication_avoided`
- `causal_claim_matches_design`

### G5 — Statistics, precision, power, multiplicity

- `primary_estimand_defined`
- `primary_model_defined`
- `effect_measure_defined`
- `uncertainty_interval_defined`
- `sesoi_or_precision_target_defined`
- `sample_information_rationale_present`
- `power_or_simulation_present_where_relevant`
- `multiplicity_plan_defined`
- `missing_data_plan_defined`
- `sensitivity_plan_defined`
- `p_ge_alpha_not_used_as_null_evidence`
- `affirmative_null_has_valid_criterion`

### G6 — Provenance, discovery, confirmation, preregistration

- `canonical_dataset_identified`
- `dataset_checksum_present`
- `derivation_process_reproducible`
- `discovery_data_identified`
- `confirmation_data_identified`
- `prior_exposure_disclosed`
- `leakage_assessed`
- `preregistration_precedes_confirmation_exposure`
- `reanalysis_not_mislabeled_confirmation`

### G7 — Computational reproducibility

- `environment_locked`
- `software_versions_recorded`
- `random_seeds_recorded`
- `tests_exist`
- `data_dictionary_exists`
- `reproducibility_instructions_exist`
- `single_command_or_equivalent_pipeline_exists`

### G8 — Independent methods review

- `required_domain_reviewer_identified`
- `statistics_reviewer_identified_where_needed`
- `review_precedes_confirmation_opening`
- `reviewer_can_reject_design`
- `review_comments_preserved`
- `unresolved_concerns_preserved`

### G9 — Confirmation and replication

- `all_preregistered_outcomes_reported`
- `deviations_declared`
- `negative_and_null_results_preserved`
- `claim_scope_matches_result`
- `archive_created`
- `independent_replication_distinguished_from_reproduction`

---

## 7. Special REGULUS rubrics

### 7.1 Bridge rubric

Bridge hypotheses require additional atomic questions:

- `both_parent_branches_independently_measurable`
- `novel_joint_prediction_exists`
- `joint_prediction_not_implied_by_parent_a_alone`
- `joint_prediction_not_implied_by_parent_b_alone`
- `bridge_specific_rivals_defined`
- `prediction_frozen_before_confirmation`
- `negative_result_can_block_bridge`

A bridge must never be promoted merely because two parent branches are individually interesting.

### 7.2 Observer-channel / ECM rubric

For O-M masking and later O-S steering:

- `independent_reference_channel_exists`
- `observer_record_time_locked`
- `ordinary_perception_error_controlled`
- `memory_reconstruction_controlled`
- `expectation_priming_controlled`
- `social_contamination_controlled`
- `reporting_selection_controlled`
- `fraud_model_considered`
- `sensor_limitation_considered`
- `distortion_direction_predefined`
- `distortion_is_directional_not_merely_large`
- `modulation_model_outperforms_cognitive_rival`
- `adaptive_context_prediction_predefined`
- `observer_modulation_not_equated_with_controller_consciousness`

This rubric is designed specifically to make the ECM hypothesis difficult to support accidentally.

---

## 8. Deterministic hard rules

Some criteria should not be delegated to Jev.

Initial hard rules:

1. **Previously inspected target data cannot be labeled untouched confirmation.**
2. **A preregistration timestamp after target-data exposure cannot create independent confirmation.**
3. **`p >= alpha` cannot by itself establish the null or a rival model.**
4. **Same-data rerun is reproducibility, not independent replication.**
5. **A bridge cannot inherit evidentiary status from either parent.**
6. **Cognition/agency/consciousness cannot be promoted directly from anomaly, coordination, regulation, or observer discrepancy.**
7. **Missing required provenance fields block confirmatory promotion.**
8. **A model probability cannot override a hard rule.**

Hard-rule failures are recorded explicitly so reviewers can tell whether a gate was blocked by policy, data, or evaluator judgment.

---

## 9. Gold-set calibration

### 9.1 Purpose

Before Jev influences gate status, REGULUS must measure how reliably it applies the project's criteria.

### 9.2 Initial target

Build an initial gold set of approximately **150–300 labeled atomic cases** spanning:

- obvious pass cases;
- obvious fail cases;
- genuinely ambiguous cases;
- historical REGULUS mistakes;
- HARKing;
- discovery/confirmation leakage;
- invalid null interpretation;
- pseudoreplication;
- evidence inheritance;
- missing rivals;
- causal overclaim;
- valid and invalid bridge activation;
- valid and invalid observer-channel claims;
- adversarial wording intended to induce a false pass.

Gold labels should include a short human rationale and, where relevant, the deterministic rule that decides the case.

### 9.3 Calibration metrics

At minimum report:

- accuracy on decisive cases;
- balanced accuracy if class imbalance exists;
- false-pass rate;
- false-fail rate;
- Brier score for binary/probabilistic judgments;
- reliability/calibration curve or expected calibration error when meaningful;
- confidence distribution on ambiguous cases;
- disagreement rate against human labels;
- stability across repeated identical evaluations if the endpoint is nondeterministic;
- per-gate performance.

### 9.4 Critical metric: false-pass rate

For REGULUS, a false methodological pass is more dangerous than an unnecessary escalation to human review.

Therefore the calibration report must separately track false passes on criteria that protect confirmation integrity, especially:

- untouched confirmation;
- prior exposure;
- preregistration timing;
- evidence inheritance;
- null evidence;
- causal scope;
- bridge activation.

### 9.5 Thresholds

No production thresholds are frozen in this design.

They must be learned from the gold-set calibration.

Until then:

- Jev outputs are advisory only;
- any ambiguous or consequential judgment goes to human review;
- deterministic rules remain authoritative.

---

## 10. Multi-reviewer adjudication

The final adjudication object should combine four evidence channels:

```text
Evidence packet
      |
      +--> deterministic rules
      |
      +--> Jev typed decisions
      |
      +--> general-purpose LLM adversarial review
      |
      +--> human / external expert review when required
      |
      v
Disagreement + adjudication record
      |
      v
Official G0–G9 status
```

The general-purpose LLM is not a tie-breaking oracle. Its role is to surface overlooked assumptions, contradictions, and alternative interpretations.

Human review is mandatory when:

- a hard rule and Jev disagree;
- Jev confidence falls in a calibration-defined uncertainty band;
- Jev and the adversarial LLM disagree on a consequential criterion;
- the gold set shows weak performance for that rubric;
- the criterion depends on domain expertise not represented in the packet;
- the decision could upgrade a branch to `CONFIRMATION-READY`, `CONFIRMATORY RESULT`, or `REPLICATED`.

---

## 11. Output artifacts

### 11.1 `jev-evaluation.json`

Contains:

- model/version;
- rubric version;
- evidence-packet hash;
- question IDs;
- typed answers;
- probabilities/scores returned by Jev;
- raw response metadata;
- timestamp.

### 11.2 `deterministic-evaluation.json`

Contains each hard rule and pass/fail/not-applicable result.

### 11.3 `llm-review.json`

Contains a structured adversarial review with no authority to overwrite hard rules.

### 11.4 `adjudication.json`

Contains:

- final atomic criterion status;
- source of final determination;
- disagreements;
- rationale;
- required escalation;
- official gate status;
- promotion eligibility;
- reviewer identity/role where applicable.

### 11.5 `calibration-report.json` and Markdown companion

Contains the gold-set metrics, confidence bands, known weaknesses, model version, and approval status for use in research gating.

---

## 12. CLI behavior

Proposed commands:

```bash
npm run rigor -- evaluate <evidence-packet.json> --rubric G6
npm run rigor -- evaluate <evidence-packet.json> --all
npm run rigor -- calibrate rigor/gold/v1
npm run rigor -- adjudicate <evaluation-directory>
npm run rigor -- verify <evaluation-directory>
```

`verify` must work without an API call and check:

- JSON schema validity;
- evidence packet hash;
- expected artifact set;
- deterministic-rule evaluation;
- model ID;
- rubric version;
- commit SHA;
- unresolved disagreements;
- confirmation-blocking conditions.

---

## 13. Failure behavior

The subsystem must fail closed for scientific promotion.

If Jev is unavailable, malformed, or changes output shape:

- research work may continue;
- no existing scientific status is downgraded solely because the service is unavailable;
- no new confirmation promotion may rely on a missing required adjudication;
- the failure is logged;
- human review may explicitly substitute if documented.

If the model is upgraded:

- archived evaluations remain tied to the prior model;
- no historical record is silently rewritten;
- the new model must be recalibrated before becoming authoritative.

---

## 14. Security and privacy

- Never store `OPENROUTER_API_KEY` in the repository.
- Evidence packets must not contain private witness PII unless a separate approved data-handling protocol exists.
- Publication artifacts should prefer IDs/pseudonyms and public-source references.
- Raw API payload logging must be reviewed for accidental secret or PII inclusion.

---

## 15. First pilot: VASCO / POSS-I

VASCO V-A should be the first real pilot after calibration scaffolding exists.

The pilot should not ask Jev whether the VASCO interpretation is correct.

It should adjudicate methodological questions such as:

- Is the canonical data version explicit?
- Are competing sample definitions represented?
- Are feature-validity disputes represented?
- Is observing opportunity normalized?
- Are plate/systematic alternatives represented?
- Is Earth-shadow geometry operationally frozen?
- Is the nuclear-test window frozen?
- Is multiplicity addressed?
- Is the primary estimand frozen?
- Is the data genuinely untouched for confirmation?
- If not, is the study correctly labeled reanalysis/reproducibility?

The first success criterion for the subsystem is therefore:

> Produce a reproducible methodological adjudication of the VASCO replication specification that can be independently inspected and that does not change the scientific result merely because a different LLM reviews the prose.

---

## 16. Relationship to confidence in REGULUS

The subsystem can increase confidence in **the process** by making methodological judgments:

- explicit;
- versioned;
- repeatable;
- calibrated;
- adversarial;
- auditable;
- resistant to narrative drift.

It cannot directly increase confidence that an anomalous control system exists.

Confidence in that hypothesis must still come from successful measurements, discriminating predictions, untouched confirmation, effect sizes and uncertainty, failed rival models, independent methods review, and independent replication.

The expected benefit is indirect but important:

> If REGULUS eventually produces positive results, a calibrated adjudication layer makes it harder for those results to be artifacts of flexible methodological interpretation.

---

## 17. Acceptance criteria for implementation

Implementation is complete only when all of the following are demonstrated:

1. `typesafe/jev-1.13` is pinned.
2. The Decisions API is used through an isolated client module.
3. Evidence packets and outputs validate against committed JSON schemas.
4. G0–G9 rubrics are versioned data files, not hidden prompt text.
5. Deterministic hard rules are implemented and tested.
6. Jev cannot override a hard-rule failure.
7. Gold-set calibration can run end-to-end.
8. Calibration outputs false-pass rate and Brier score at minimum.
9. Thresholds remain unset until calibration evidence exists.
10. Identical archived inputs can be independently verified offline except for reproducing the external Jev inference itself.
11. Model/rubric/code/evidence versions are recorded.
12. A VASCO evidence packet can be evaluated as the first pilot.
13. Scientific gate status remains `PASS/PARTIAL/FAIL/BLOCKED/N/A`.
14. No feature emits a global probability that REGULUS, Vallée, Jackson, the ECM hypothesis, or a conscious controller is true.
15. Documentation explicitly states that the evaluator improves methodological consistency, not evidentiary strength by itself.

---

## 18. Non-goals for v1

Do not build in v1:

- automatic paper ingestion;
- autonomous literature search;
- autonomous branch promotion;
- global hypothesis scoring;
- automated publication claims;
- a web dashboard;
- model ensembles beyond one adversarial general-purpose LLM review;
- automated expert replacement;
- adaptive rubric rewriting based on desired outcomes.

Those additions would enlarge the attack surface for bias before the core evaluator is calibrated.

---

## 19. Open implementation decisions

These are implementation choices, not conceptual blockers:

- TypeScript vs Python. **Recommendation: TypeScript**, because OpenRouter's current Decisions API examples use its official SDK and the repo's future tool can remain a small typed CLI.
- Exact general-purpose adversarial-review model. This should be configurable and recorded, not hard-coded as scientific authority.
- Gold-set authoring workflow. Initial labels should be human-reviewed; later examples can be proposed automatically but not silently accepted.
- Calibration threshold values. These must be chosen only after empirical calibration.

---

## 20. Recommended implementation sequence

1. Create schemas and frozen rubric v1.
2. Implement deterministic hard rules first.
3. Add Jev/OpenRouter client pinned to `typesafe/jev-1.13`.
4. Implement evaluation artifact writer and verifier.
5. Build initial synthetic/historical gold cases.
6. Implement calibration metrics.
7. Run calibration and define uncertainty/escalation bands.
8. Add adversarial LLM reviewer.
9. Implement final adjudication merge logic.
10. Build VASCO V-A evidence packet and run the first real pilot.
11. Only after successful pilot consider using the subsystem in other branches.

This ordering ensures that model inference is added inside a pre-existing methodological framework rather than becoming the framework itself.
