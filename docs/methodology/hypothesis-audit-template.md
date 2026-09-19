# Hypothesis Rigor Audit Template

Use this template for every active branch hypothesis and every bridge intended for empirical confirmation.

**Audit date:** YYYY-MM-DD  
**Branch / hypothesis ID:**  
**Current evidence status:**  
**Current maturity state:** CONCEPTUAL / EXPLORATORY / CONFIRMATION-READY / CONFIRMATORY RESULT / REPLICATED  
**Accountable owner:**  

---

## 1. One-sentence claim

State the narrow claim without invoking the grand synthesis.

> 

### Claim type

- [ ] Descriptive
- [ ] Associational
- [ ] Predictive
- [ ] Causal
- [ ] Mechanistic

### Explicit non-claims

List what this result would **not** establish even if positive.

- 

---

## 2. Observation and provenance

- Observation/source:
- Population/system:
- Place/time:
- Unit of observation:
- Unit of analysis/inference:
- Missingness/exclusions/preprocessing:
- Was the pattern expected before inspection? YES / NO / MIXED
- Discovery data already inspected:
- Candidate untouched confirmation data:

---

## 3. Dated evidence boundary

- Search date/cutoff:
- Databases/indexes:
- Exact search queries or saved query files:
- Inclusion criteria:
- Exclusion criteria:
- Strongest supportive source(s):
- Strongest critical source(s):
- Relevant preprints:
- Known search limitations:
- Independent subject-matter expert consulted:

---

## 4. Hypothesis and serious rivals

### Target hypothesis

- ID:
- Mechanism/relationship proposed:
- Boundary conditions:

### Rival hypotheses

| Rival ID | Explanation | Why plausible | Key prediction that differs from target |
|---|---|---|---|
| RIV-1 | | | |
| RIV-2 | | | |
| RIV-3 | | | |

Include artifact, selection, shared-cause, stochastic, reporting/sensor, and ordinary-mechanism rivals where applicable.

---

## 5. Prediction / rival matrix

| Prediction ID | Observable | Target predicts | Rival predicts | Falsifier for target | Indeterminate outcome |
|---|---|---|---|---|---|
| P1 | | | | | |
| P2 | | | | | |

A useful prediction should discriminate models, not merely reject a generic null.

---

## 6. Operationalization

| Construct | Operational definition | Unit/timing | Instrument/method | Reliability/QC | Bias/failure modes |
|---|---|---|---|---|---|
| | | | | | |

Document proxies explicitly. A convenient proxy must not silently become the construct itself.

---

## 7. Study design

- Design type:
- Sampling frame:
- Experimental/observational unit:
- Unit of inference:
- Inclusion/exclusion rules:
- Positive controls:
- Negative controls:
- Procedural controls:
- Randomization/blocking:
- Masking/blinding:
- Known nuisance factors:
- Pseudoreplication risk:
- Causal identification assumptions, if applicable:

---

## 8. Statistical / inferential plan

- Primary estimand/statistic:
- Effect measure:
- Uncertainty interval:
- Primary model:
- Model assumptions:
- Smallest effect/pattern of scientific interest or precision target:
- Sample-size/information rationale:
- Power/simulation/sensitivity analysis:
- Multiplicity policy:
- Missing-data policy:
- Sensitivity/robustness analyses:
- Success rule:
- Contradiction rule:
- Indeterminate rule:
- Criterion, if any, that would provide affirmative evidence for a null/rival:

**Reminder:** `p >= alpha` alone is not affirmative evidence for the null.

---

## 9. Data provenance and confirmation boundary

- Canonical dataset name/version:
- Source/custodian:
- Raw-data checksum/location:
- Derived-data generation path:
- Discovery data:
- Untouched confirmation data:
- Leakage assessment:
- Preregistration/Registered Report URL:
- Frozen repository commit SHA:
- Immutable archive/DOI:
- Freeze date:

---

## 10. Reproducibility

- [ ] Raw data or immutable external source documented
- [ ] Derived-data generation code
- [ ] Analysis code
- [ ] Confirmatory entrypoint
- [ ] Exploratory and confirmatory code separated
- [ ] Environment lockfile
- [ ] Random seeds recorded
- [ ] Unit/integration tests for load-bearing steps
- [ ] Data dictionary
- [ ] Reproducibility instructions
- [ ] One command/workflow regenerates primary output

Reproduction command:

```text

```

---

## 11. Independent methods review

- Reviewer/expertise:
- Conflict declaration:
- Scope reviewed:
- Major objection(s):
- Changes made before freeze:
- Unresolved disagreements:
- Specialist review still needed:

---

## 12. Gate record

| Gate | Status | Evidence/artifact | Blocking gap |
|---|---|---|---|
| G0 Scope/claim isolation | | | |
| G1 Evidence boundary | | | |
| G2 Rivals/predictions | | | |
| G3 Operationalization | | | |
| G4 Study design | | | |
| G5 Statistics/precision/power | | | |
| G6 Data/holdout/preregistration | | | |
| G7 Reproducibility | | | |
| G8 Independent methods review | | | |
| G9 Confirmation/replication | | | |

Allowed statuses: `PASS`, `PARTIAL`, `FAIL`, `BLOCKED`, `N/A`.

---

## 13. Promotion decision

- Current maturity state:
- Can this hypothesis enter confirmation? YES / NO
- Exact reason:
- Next smallest piece of work that would change readiness:

No promotion should be based on narrative fit with another branch.
