# Scientific Rigor Gate

**Status:** Active methodology for v3 and all future confirmatory work  
**Date:** 2026-09-19  
**Purpose:** Prevent a hypothesis from advancing because it is narratively attractive, internally coherent, or supported by selective evidence. Advancement requires explicit methodological gates that an outside reviewer can audit.

This gate applies to every empirical branch (`S`, `R`, `N`, `V`, `O`, `I`, `C`) and every bridge hypothesis.

The gate is deliberately **non-scoring**. A branch does not receive points for looking scientific. Each gate is recorded as:

- `PASS` — required artifacts exist and are adequate for the stated stage;
- `PARTIAL` — some required work exists, but material gaps remain;
- `FAIL` — the current design or evidence does not satisfy the gate;
- `BLOCKED` — the gate cannot currently be completed because a required dataset, sample, access path, or external dependency is unavailable;
- `N/A` — genuinely not applicable, with a written reason.

A `PASS` means only that the methodological requirement has been met. It is not evidence that the underlying hypothesis is true.

---

## Core rule

> **No confirmatory claim advances because a pattern is interesting. It advances only after the question, rivals, measurements, design, statistics, data boundary, reproducibility path, and independent review are frozen before confirmation.**

This methodology is informed by established open-science practice and by the procedural structure in K-Dense Scientific Agent Skills, especially hypothesis generation, scientific critical thinking, experimental design, statistical power/precision, literature review, and peer review. Those skills are used as procedural checklists, **not as validators of scientific truth**.

Reference: Kassis, T., Agarwal, V., He, Y., Patel, D., & Brueckner, A. M. (2026). *Scientific Agent Skills: A Library of Procedural Knowledge for Research Agents*. arXiv:2609.00065. https://doi.org/10.48550/arXiv.2609.00065

---

# The gates

## G0 — Scope, claim type, and branch isolation

Before evidence is interpreted, record:

- branch and hypothesis ID;
- exact research question;
- claim type: descriptive, associational, predictive, causal, or mechanistic;
- unit of observation and unit of inference;
- what the claim **does not** imply;
- parent/bridge relationships;
- accountable human owner and domain-expertise limits.

### PASS requires

The primary claim fits in one sentence without invoking the grand synthesis, and no evidence is inherited from another branch.

---

## G1 — Dated evidence boundary and systematic source map

Before making literature-dependent claims, record:

- search date/cutoff;
- databases/indexes searched;
- exact search strings or reproducible query logic;
- inclusion/exclusion criteria;
- source-type distinctions: peer reviewed, preprint, primary source, secondary account, commentary;
- strongest supportive evidence;
- strongest critical evidence;
- known search limitations;
- source-to-claim links.

For a publication-oriented branch, informal web searching is not enough. The evidence boundary must be reproducible.

### PASS requires

Another researcher can understand what was searched, what was excluded, and why the literature summary is not a convenience sample.

---

## G2 — Hypothesis, rivals, and discriminating predictions

For every target hypothesis, define credible rivals before choosing the confirmation test. Rivals should include, where plausible:

- measurement or processing artifact;
- selection effects;
- shared/common causes;
- survey/sensor geometry;
- reporting or social effects;
- stochastic variation;
- reverse causation;
- ordinary mechanisms at the same or another scale.

Create a prediction/rival matrix containing:

- candidate hypothesis;
- rival hypothesis;
- conditions/boundary conditions;
- observable variable;
- expected direction or structure;
- result incompatible with the candidate;
- result favoring the rival;
- indeterminate outcome.

### PASS requires

At least one planned observation distinguishes the preferred hypothesis from a serious rival. Merely rejecting a simple null is insufficient for a mechanism claim.

---

## G3 — Operationalization and measurement validity

Every construct must be translated into auditable measurements.

Record:

- construct;
- operational definition;
- measurement unit and timing;
- instrument or extraction method;
- calibration/quality-control procedure;
- reliability/repeatability evidence;
- detection limits and missingness;
- transformations/cut points and their rationale;
- measurement bias and known failure modes;
- whether the variable is direct or a proxy.

Examples important to this project:

- `regulation` cannot mean merely “response after disturbance”;
- `network coordination` cannot be inferred from apparent geometry alone;
- `observer masking` must be separated from ordinary detection error and memory decay;
- `scale` requires explicit and comparable size conventions.

### PASS requires

A skeptical external researcher could implement the measurement without deciding what the hypothesis “really meant.”

---

## G4 — Study design, controls, and unit of inference

Define the design before confirmation:

- sampling frame;
- experimental/observational unit;
- unit of inference;
- inclusion/exclusion rules;
- positive controls;
- negative/procedural controls;
- masking/blinding where possible;
- randomization/blocking where applicable;
- batch, plate, survey, site, day, observer, and instrument effects where relevant;
- pseudoreplication risks;
- causal identification assumptions for causal claims.

### PASS requires

The design can answer the stated question and does not treat dependent observations as independent evidence.

---

## G5 — Statistical plan, precision, power, and multiplicity

Before confirmatory outcomes are inspected, declare:

- primary estimand/statistic;
- effect measure;
- uncertainty interval;
- model and assumptions;
- smallest effect/pattern of scientific interest or other precision target;
- sample-size/information-content rationale;
- power or simulation-based sensitivity analysis where appropriate;
- multiplicity handling across outcomes, windows, subgroups, models, and repeated looks;
- missing-data handling;
- robustness and sensitivity analyses;
- decision rules for support, contradiction, and indeterminate results.

### Critical interpretation rule

`p >= alpha` means that the planned test did not reject its statistical null. It is **not**, by itself, affirmative evidence that the null or a rival model is true.

Evidence favoring a null/rival requires a design capable of discriminating it, such as adequate precision around a smallest effect of interest, equivalence testing, model comparison, predictive comparison, Bayes-factor thresholds, or another prospectively justified criterion.

### PASS requires

The result can be interpreted without changing thresholds or choosing a preferred specification after seeing confirmation data.

---

## G6 — Data provenance, discovery/confirmation boundary, and preregistration

Record:

- canonical dataset/version;
- source and chain of custody;
- raw-data checksum where possible;
- derived-data generation process;
- exactly which data were used for discovery;
- exactly which data remain untouched for confirmation;
- leakage risks;
- preregistration/Registered Report location;
- repository commit SHA tied to the frozen analysis plan;
- date and immutable archive identifier.

### PASS requires

The confirmation dataset was not used to formulate, tune, select, or rescue the tested prediction, and the analysis plan was frozen before target-outcome inspection.

A preregistration on already-inspected discovery data is useful for transparent reanalysis but does **not** convert those data into independent confirmation.

---

## G7 — Computational reproducibility

For empirical work, provide:

- `/data/raw` or documented external immutable source;
- `/data/derived` generation code;
- `/src` reusable analysis code;
- `/analysis/confirmatory` frozen analysis entrypoint;
- `/notebooks/exploratory` clearly separated from confirmation;
- environment lockfile;
- software/package versions;
- random seeds where applicable;
- tests for load-bearing transformations/geometry/statistics;
- `DATA_DICTIONARY.md`;
- `REPRODUCIBILITY.md`;
- one documented command/workflow that regenerates registered tables/figures.

### PASS requires

An independent researcher with authorized data access can regenerate the primary result from the archived inputs without undocumented manual choices.

---

## G8 — Independent methods review before confirmation

Before a publication-oriented confirmation dataset is opened, obtain review from at least one qualified methodologist without a stake in a positive outcome.

For the current first-priority VASCO program, preferred coverage is:

- astronomy / photographic-plate or survey-systematics expertise;
- statistics / observational inference / count or time-series modeling expertise.

The reviewer must be free to conclude:

> The available data cannot answer the question.

Record:

- reviewer competence area;
- conflicts;
- scope reviewed;
- material concerns;
- changes made before freeze;
- unresolved disagreements.

### PASS requires

Major methodological objections have been addressed or explicitly retained as limitations before confirmatory analysis.

---

## G9 — Confirmatory execution, reporting, and independent replication

After G0–G8 are satisfied and the protocol is frozen:

1. execute the frozen confirmatory analysis;
2. report all preregistered primary outcomes;
3. label deviations and exploratory additions;
4. preserve negative and null results;
5. scope conclusions only to the tested claim;
6. archive code/data/results when permitted;
7. seek independent replication on new data or a genuinely independent study.

### Status distinctions

- A single successful preregistered test can support the **specific tested prediction**.
- Computational reruns on the same data establish reproducibility, not replication.
- `REPLICATED` requires independent data/study evidence.
- A positive branch does not activate a bridge automatically.

---

# Maturity states

## CONCEPTUAL

G0 may be satisfied; predictions and measurements are still being defined.

## EXPLORATORY

Evidence and analyses exist, but discovery and confirmation are not independent enough for a confirmatory claim.

## CONFIRMATION-READY

G0–G8 are `PASS` for the exact test, the plan is frozen, and the target confirmation data remain untouched.

## CONFIRMATORY RESULT

G9 has been executed according to the frozen protocol. Result is classified using `docs/methodology/evidence-status.md`.

## REPLICATED

An independent dataset/study has reproduced the material result under a prospectively specified design.

---

# Bridge-specific gate

A bridge such as `B-SR`, `B-NR`, `B-NV`, `B-OV`, `B-OR`, `B-RI`, or `B-IV` may enter confirmatory work only when:

1. each parent branch is independently measurable;
2. the bridge specifies a **novel joint prediction** not expected from either parent alone;
3. explicit non-bridge alternatives are defined;
4. G0–G8 pass for the bridge-specific prediction;
5. a negative result prevents activation.

Two supported parent branches do not, by themselves, support their bridge.

---

# Special rule for consciousness and agency

`C` remains downstream.

Evidence of anomaly, observer discrepancy, coordination, feedback, or even regulation cannot be promoted directly to system consciousness or agency.

A `C2` agency or `C3` consciousness test requires:

- a specified candidate system boundary;
- a named theory/operational criterion;
- predictions that distinguish agency/consciousness from non-agentic information processing;
- explicit rivals;
- full G0–G9 treatment.

The same discipline applies to observer-channel hypotheses: `O-M` can be tested without asserting that a controller is conscious.

---

# Required audit artifact

Each active branch must maintain a current rigor record using:

`docs/methodology/hypothesis-audit-template.md`

The project-level snapshot is:

`SCIENTIFIC_RIGOR_AUDIT.md`

The audit is a map of missing work. It is not a vote on whether the hypothesis is interesting or true.
