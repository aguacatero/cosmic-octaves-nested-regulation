# D6 — UAP / Control-System Research Design

Evidence layers separated independently (brief "Vallée-Style Event Dataset"). All designs preregistered; blinding specified; confound-control plan explicit.

---

## A. Retrospective study design

### A1. Dataset construction

Source candidates (pre-specify; do NOT change after viewing data):
- **Physical-layer subset:** cases with ≥2 independent sensor corroboration (radar + optical / optical + IR / multi-sensor) per brief physical criteria. Use existing archives (NARCAP, NICAP dataset, FAA reports, military files where released — specify which files, versions, access dates).
- **Psychological-layer subset:** documented witness reports with pre-event expectation / emotional state / memory / attention / prior belief records (pre-incident surveys where available; post-event structured interviews — use standardized protocol, not open-ended recall only).
- **Physiological-layer subset:** cases with documented medical evidence (burns, paralysis, autonomic changes, sleep effects, neurological effects, injury — with medical records / independent physician reports, not self-report only).
- **Cultural-layer subset:** documented long-term community / media / belief / technological-inspiration / political / religious effects — with timestamped media coverage, institutional response, technological innovation records.
- **Anomalous cognition / information claims:** separate coding (telepathy / precognition / symbolic / hidden / synchronicity) — scored independently from physical evidence.

### A2. Evidentiary grading system (pre-specify; apply blindly)

| Grade | Physical | Psychological / Physiological | Cultural | Cognition claim |
|---|---|---|---|---|
| 0 — None / unverified | No sensor; only witness recall | Only self-report; no documentation | No documented effect | No independent record |
| 1 — Single / weak | Single sensor; no corroboration | Structured interview; one witness | Media mention only; no measurable shift | Single witness claim; no verification |
| 2 — Corroborated / moderate | ≥2 sensors or material evidence | Multiple witnesses + some documentation | Documented belief / policy change; some community measurement | Some verification; pattern across events |
| 3 — Strong / independent | Multi-sensor + independent confirmation; material; residual | Medical / clinical / physiological measurement; expert evaluation | Long-term institutional / technological / cultural change verified by independent sources | Independent prediction / hidden target / corroboration |

Apply grades independently per layer; total is NOT a simple sum — layers are reported separately.

### A3. Blinding plan

- **Team A:** builds manifestation dataset; scores physical / psychological / physiological evidence; assigns grades; does NOT see collective-state indices.
- **Team B:** builds collective-state timelines (Section A3 of D5); defines state variables, thresholds, ranges; does NOT see manifestation dataset.
- **Team C:** analyzes relationships; receives both datasets only after design is frozen; uses pre-specified temporal methods (cross-correlation, state-space, change-point); reports all results (positive and null).
- **Independent auditor:** reviews coding to check consistency / reliability (inter-rater agreement on subset of 10% of events); reports κ.

### A4. Temporal methods (pre-specify)

For assessing the core predictive sequence (brief Section "Primary temporal test"):

- Pre-register collective-state deviation event definitions (what counts as deviation; how defined; threshold); timestamp independently.
- Pre-register manifestation event definitions (what counts as event; by grade; by layer); timestamp independently.
- Pre-register lag window τ ∈ [τ_min, τ_max] (e.g., 0 to 12 months; do NOT adjust).
- Compute cross-correlation at pre-registered lags; report confidence intervals; report null (permutation / synthetic control).
- Change-point analysis: does a change-point in S(t) predict a change-point in manifestation rate?
- Survival / hazard models: does state deviation increase hazard of manifestation? Does manifestation reduce subsequent deviation?
- Synthetic control: for each deviation event, build a synthetic counterfactual S(t) from comparable non-deviation periods; compare manifestation rates.

---

## B. Prospective passive study design

### B1. Inputs (all timestamped, provenance-tracked, versioned, scored, preserved regardless of outcome)

- Multi-sensor UAP / anomaly observation (specify which sensors; calibration; sync; data retention; chain of custody).
- Environmental monitoring (specify which environmental variables; sampling frequency; calibration).
- Immediate witness testimony (structured, timestamped, with expectation / emotional state / prior belief / attention records — collected BEFORE awareness of any outcome).
- Physiological measures (where ethically and practically obtainable: heart-rate, sleep-quality, autonomic measures — pre-specified; consent documented; de-identified for analysis).
- Media exposure (timestamp of first report; reach; source; replication across platforms).
- Subsequent behavioral change (pre-registered measures of belief / behavior / community-level measures; collected at fixed intervals, not only after events).
- Predefined collective-state indices (same as retrospective; updated at fixed intervals; versioned).

### B2. Core prediction (pre-register; keep after reveal)

> Predefined systemic deviations should predict manifestations with specified timing and characteristics; manifestations should predict movement in a specified corrective direction.

Format as two predictions:
1. **Trigger prediction:** If S(t) deviates by ≥ D_critical within window W, then manifestation with characteristics C will occur within τ ± σ with probability p > p_null.
2. **Corrective prediction:** If manifestation with characteristics C occurs, then S(t) will move toward S_target by amount ≥ A within τ_corrective with probability q > q_null.

Both predictions must specify: S, D_critical, W, C, τ, σ, p, A, τ_corrective, q. Do NOT adjust after observation.

### B3. Preservation / versioning

- Every observation file versioned (date / source / version tag).
- Every score applied by a trained rater; inter-rater agreement reported; disagreements resolved by third rater with documented rule.
- Negative results preserved in same archive; not excluded; reported.
- Audit trail: who modified what, when, and why.

---

## C. Statistical methods (pre-specified)

- Point-process models for event times; intensity models conditional on state.
- Bayesian hierarchical time-series for S(t) and manifestation rate simultaneously; report posterior for state→manifestation coefficient; report Bayes factor for regulatory vs null model.
- Change-point + hidden Markov model for state transitions.
- Cross-correlation with pre-registered lag and significance threshold.
- Survival analysis (Cox proportional hazards) with state deviation as time-varying covariate.
- Synthetic control comparison for each deviation event.
- Model comparison: regulatory model (state → manifestation → correction → termination) vs random-event, media-attention, reporting-bias, stress/misperception, and conventional non-human technology models. Compare by AIC / BIC / predictive likelihood; do NOT report only whether one model fits — report relative performance.

---

## D. Confound-control plan (all 12 alternatives from brief)

For each competing explanation (1–12 in spec Section "Competing Explanations"), design a control:

1. **Random-event model:** compare to randomized event times; use point-process null.
2. **Measurement-error model:** use independent measurement of S(t) from different sources; compare agreement.
3. **Reporting / attention model:** control for media coverage / attention cycles / social amplification; test whether S-independent events also increase after high-attention periods.
4. **Media-contagion model:** compare geographic distribution to media-market distribution.
5. **Folklore / cultural adaptation:** control for historical folklore cycles; compare with non-event cultural-change timelines.
6. **Stress / misperception:** include physiological/psychological baseline measures; compare events with / without stress indicators.
7. **Deliberate human manipulation / deception:** include evidence-quality grading (grade 3 requires independent physical confirmation); compare grade-3 vs grade-0/1 events.
8. **Unknown non-conscious natural phenomenon:** compare to physical-model predictions; require predictive, not just descriptive, fit.
9. **Conventional non-human technological intelligence:** compare to technology-capability predictions; separate from regulatory-model predictions.
10. **Emergent collective-human dynamics:** build agent-based model; compare to regulatory predictions.
11. **Higher-level non-conscious regulatory system:** test whether dynamics match a non-conscious feedback model (e.g., thermostat, immune) without requiring cognition.
12. **Higher-level conscious regulatory system:** test whether dynamics require conscious indicators (flexible goal, context-sensitive, novel integration, counterfactual) — this only after 1–11 fail to explain.

---

## E. Preregistration template (use for both retrospective and prospective studies)

Fields: study title / version / date / analyst / institution; dataset specification (sources, versions, access dates, file IDs); inclusion/exclusion rules; evidentiary grading rules; blinding plan; temporal-method specification (lag windows, statistical models, significance thresholds); predictive hypotheses (both directions); falsification criteria; persistence / audit / version-control plan.

Produce as locked PDF + markdown; version-numbered; timestamped; archived; linked from repository D6.
