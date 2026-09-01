# Research Architecture v2 (Constitutional)

**Status**: Active architecture (supersedes v1 Wayfinder package).  
**Date**: 2026-09-01.  
**Source**: `cosmic_octaves_vallee_handoff_v2.md` (grilling outcomes, 26 locked decisions).

---

## Core Doctrine (Locked)

1. **Evidence independence** — no branch inherits evidence from another.
2. **Bridge non-transitivity** — `A supported` + `B supported` ≠ `A causes B` or shared mechanism.
3. **Novel joint prediction required** — bridge must predict something neither parent alone predicts.
4. **Theory-neutral measurement first** — measure dynamics, apply labels (regulation, sensing, memory, agency, consciousness) only after independent criteria met.
5. **Model-specific failure** — register models tightly so they can fail; failed models stay failed.
6. **Preserve nulls & mistakes** — never delete failed analyses, superseded designs, negative results. Mark clearly, archive.
7. **Discovery ≠ confirmation** — existing Cosmic Octaves data are discovery; analyses influenced by those data are exploratory.
8. **Consciousness is not a free inference** — regulation ≠ cognition ≠ agency ≠ consciousness.
9. **Extraordinary branch separation** — UAP/anomalous observations earn V0→V1 independently.

---

## Hypothesis Families (Independent)

### S — SCALE RECURRENCE
- S0  Statistical / selection explanation
- S1  Genuine scale recurrence
- S2  Recurrent scale-linked dynamics

### R — REGULATION
- R0  Passive dynamics / apparent regulation
- R1  Causal feedback regulation
- R2  Recurrent regulatory architecture

### C — COGNITION / AGENCY
- C0  Complex dynamics
- C1  Learning / information processing
- C2  Agency
- C3  Consciousness — operationally unresolved

### I — CROSS-LEVEL INFLUENCE
- I0  Confounding / ordinary shared causes
- I1  Predictive macro→micro relationship
- I2a Ordinary mediated macro→micro causation
- I2b Additional higher-level predictive/causal value after known lower-level mediators
- I3  Regulatory higher→lower influence

### V — ANOMALOUS MANIFESTATION / UAP
- V0  Observation quality / conventional explanations
- V1  Reproducible residual anomaly
- V2  State-dependent relationship
- V3  Closed-loop regulatory manifestation

---

## Bridges (Must Earn Activation)

| Bridge | Parents | Status | Promotion Gates |
|--------|---------|--------|-----------------|
| B-SR   | Scale ↔ Regulation | SPECULATIVE | Q23: both parents ≥1 preregistered +, out-of-sample replication, novel joint prediction, frozen before joint data, combined model beats independent |
| B-RC   | Regulation ↔ Cognition/Agency | SPECULATIVE | Same |
| B-RI   | Regulation ↔ Cross-level Influence | SPECULATIVE | Same |
| B-IV   | Influence ↔ Anomalous Manifestation | SPECULATIVE | Same |

---

## MVP Scope (Active vs Parked)

**ACTIVE**
- Repository / data integrity (archive v1, restore upstream snapshot, record SHA/checksums, mark Rank-1 invalidated, automated validation)
- Scale branch `S` (corrected reanalysis, generative selection null, measurement replication, selection replication, primary out-of-sample statistic, diagnostics)
- Regulation-method calibration `R` (discriminate known regulators vs passive systems; Q10 causal-feedback criteria; do NOT connect to Scale during MVP)

**PARKED**
- Cognition / Agency (C) — framework may be written, no claims without candidate system
- Consciousness (C3) — document operational unresolved; no generic IIT/GWT scoring

**ACTIVE ONLY AT V0/V1**
- Vallée / UAP (V) — source validation for provenance, candidate hypotheses, event archives; do NOT activate V2/V3 merely from textual interpretation

---

## Vallée Role (Locked)

> Jacques Vallée's work is treated as **theoretical and historical provenance** for candidate anomalous-manifestation hypotheses. Primary-source observations, case reports, interpretations, control-system proposals, and later reinterpretations are recorded separately. Vallée's control-system model is **not used as evidence** that a regulatory system exists.

**May**: generate candidate V hypotheses; suggest variables; identify event archives; supply theoretical provenance; identify testable claims; identify explicit statements on adaptation/culture/witness/physical effects/control systems; identify where retellings overstate Vallée.

**Must not**: treat reputation as evidence; treat interpretation as observed mechanism; use Cosmic Octaves as corroboration; use UAP as evidence for Cosmic Octaves; infer consciousness from anomalies; infer agency from adaptation without Q12 tests; infer regulation from temporal correlation alone; define variable/setpoint after inspecting timeline; activate bridge because branches "feel related."

---

## Evidence Status Vocabulary

```
UNTESTED → EXPLORATORY → PREREGISTERED → SUPPORTED / UNSUPPORTED / CONTRADICTED / INCONCLUSIVE / REPLICATED / SUPERSEDED / INVALIDATED
```

Avoid: "interesting" → "supported"; "significant" → "established"; "unexplained" → "anomalous mechanism"; "adaptive-looking" → "agentic"; "regulatory" → "conscious."

---

## V2 File Structure (Conceptual)

```
archive/wayfinder-v1/          # v1 artifacts with archival notices
docs/
  research-architecture-v2.md   # this file
  hypothesis-families/          # scale.md, regulation.md, cognition-agency.md, cross-level-influence.md, anomalous-manifestation-uap.md, consciousness-status.md
  bridges/                      # README.md + 4 bridge docs
  methodology/                  # evidence-status.md, preregistration-policy.md, model-falsification-policy.md, bridge-promotion-policy.md, terminology.md
  vallee-validation/            # primary-source-register.md, claim-evidence-matrix.md, theoretical-provenance.md, validation-notes/
data/
  discovery/chris-lehto/        # exact immutable upstream snapshot (15 structures)
  replication/measurement/      # independent measurement replication
  replication/selection/        # independent selection replication
  derived/                      # derived/corrected datasets (separate from discovery)
analysis/
  exploratory/
  confirmatory/
preregistrations/               # only genuinely frozen, prospectively valid registrations
```

---

## Migration Notes (v1 → v2)

| v1 file | v2 disposition |
|---------|----------------|
| D1_audit.md | archive/wayfinder-v1/D1_audit.md (factual source-audit retained) |
| D2_hypothesis_ladder.md | archive; superseded by hypothesis-families/ |
| D3_vallee_synthesis.md | archive; replaced by docs/vallee-validation/ |
| D4A_pre_registration.md | archive; historical protocol-design artifact |
| D4_replication_protocol.md | archive; ideas salvaged into S branch |
| D5_nested_regulation_framework.md | archive; rebuild theory-neutral + Q10 |
| D6_uap_research_design.md | archive; ideas salvaged into V0/V1 |
| D7_bridge_matrix.md | archive; replaced by bridge registry with promotion states |
| D8_roadmap_90day.md | archive; replaced by v2 MVP (integrity + S + R calibration) |
| rank1_phase_allpair.py | archive with invalidated notice (math defect §4.1) |
| scale_table.csv | NOT canonical; vendor exact upstream separately |
| octave_pairs.csv | historical discovery data only after consistency verified |

---

## Definition of Done for v2 Architecture

- [ ] Archive v1 complete with notices
- [ ] Upstream discovery snapshot vendored (15 structures, checksums)
- [ ] Rank-1 marked invalidated/superseded
- [ ] Automated validation scripts (structure count, names, hashes, pair-table consistency)
- [ ] Reproducible environment established
- [ ] Scale branch S active with corrected exploratory + generative null + replications + primary out-of-sample statistic
- [ ] Regulation calibration R active with Q10 criteria + positive/negative controls
- [ ] Vallée primary-source register + claim-evidence matrix (framework ready; awaiting book data)
- [ ] Bridge registry with promotion states (all SPECULATIVE)
- [ ] README v2 with TLDR for marketable accessibility

