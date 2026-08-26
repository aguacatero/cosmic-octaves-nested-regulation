# D5 — Nested Regulation Test Framework

Quantitative measures for the 8 properties a higher-level regulatory system must exhibit (brief Section "What a Regulatory System Should Predict"). Each measure operationalizes a prediction from H2/H3/H5/H6; each must be measurable at multiple organizational scales to support cross-scale comparison.

---

## 5.1 — System State (the "what is regulated" variable)

**Definition:** a scalar or vector quantity representing a global property of the lower-level system that a higher-level controller would need to monitor.

**Candidate state variables** (pre-specify before testing; do NOT choose retrospectively):
- Nuclear escalation risk index (e.g., ICRIS, GPI, or custom composite of DoS data + conflict indicators)
- Ecological stress (e.g., planetary boundaries framework: biosphere integrity, climate change, biogeochemical flows)
- Technological transition velocity (patent flux, energy transition rate, AI capability index)
- Social fragmentation (polarization indices, trust surveys, institutional stability scores)
- Existential-risk proxy (annual existential-risk report composite, GPT-structured from domain expert surveys)
- Collective attention (media salience indices, social-media engagement, academic publication rates on specific topics)
- Biospheric productivity (NPP deviation, biodiversity indices, extinction rate)
- Information entropy of collective discourse (compressed signal diversity of major media)

**Measurement requirements:**
- Construct from raw indicators BEFORE viewing manifestation timeline (blinding; see D6).
- Document source, construction, version, update frequency.
- Pre-register the index formula, weights, and data sources.
- State the proposed viable / setpoint range — MUST be specified before testing.

---

## 5.2 — Deviation (distance from viable range)

**Definition:** D(t) = |S(t) − S_target| or directional if setpoint has asymmetric bounds.

**Specification:**
- Pre-specify threshold D_critical at which the controller activates (if any).
- If setpoint is a range, model D as distance from nearest boundary.
- Specify whether deviation is relative (% change) or absolute.
- Specify update frequency of S(t) relative to manifestation timescale.

**Operational note:** If setpoint and viable range cannot be pre-specified prospectively, the homeostatic analogy is weak. Do not define D(t) by fitting it to the manifestation timeline.

---

## 5.3 — Sensing / Detection Latency (τ_sense)

**Definition:** time between a deviation occurring and the controller detecting it.

**Cross-scale candidate measures (to test whether octave-paired structures share similar τ_sense / T_dynamical):**
- Biological: neural transduction delay; hormone circulation time; immune recognition time
- Social: news-cycle latency; institutional response time; market-price response time
- Planetary: climate response time (radiative forcing lag); ocean circulation mixing time
- Stellar: star-spot cycle; flare frequency response to magnetic reversal
- Galactic: star-formation response to density-wave passage; spiral-arm crossing timescale
- Cosmological: structure-formation response to initial-conditions perturbation

**Test:** for each pair, compute τ_sense / T_dynamical; compare octave-paired vs randomly paired; use pre-registered similarity metric.

---

## 5.4 — Response Latency (τ_response = t_manifestation − t_disturbance)

**Definition:** time between controller detecting a deviation and manifestation appearing.

**Cross-scale test:**
- For each octave pair, identify plausible dynamical timescales; compute τ_response / T_dynamical.
- Test: do paired structures have similar latency ratios?
- Test: is τ_response reproducible (low variance across events)?

**Specification for H6 (Vallée):**
- Pre-define the candidate deviation events (e.g., specific historical crises, escalation points).
- Pre-define the manifestation events (timestamped, with evidentiary quality grade ≥2 per D6).
- Pre-define the lag window (e.g., 1 day to 1 year; do NOT adjust post-hoc).
- Compute cross-correlation; report null distribution; report p for non-zero correlation at specified lags.

---

## 5.5 — Manifestation Strength / Channel

**Definition:** measurable intensity of the regulatory output, independent of lower-level perception.

**Candidate strength measures (pre-specify; use at least two):**
- Physical sensor corroboration (number of independent sensor types; signal-to-noise; multiple-witness count)
- Physiological severity (injury/medical documentation; autonomic change magnitude; sleep disruption severity)
- Information novelty (bits of compressed unexpected content; presence of foreknowledge; prediction accuracy)
- Witness effect magnitude (reported belief change; behavioral change; community cultural shift)
- Media penetration (reach; cross-platform replication; duration in discourse)

**Dose-response test (D5.3 of brief):**
- For each pre-specified deviation event, assign D (deviation magnitude) and M (manifestation strength).
- Test: monotonic relationship between D and M (Spearman ρ; pre-specify threshold ρ > 0.4 to favor regulatory model).
- Test: threshold model (manifestations only above D_critical).
- Test: ceiling effect (manifestations saturate at extreme D — controller has limited capacity).

---

## 5.6 — Corrective Direction

**Definition:** the direction in which the manifestation pushes the regulated variable S(t).

**Critical requirement (brief Section "Required specification"):** "What is the variable? What constitutes deviation? What is the proposed viable/setpoint range? What direction should the response push? On what timescale?"

**Pre-specification checklist:**
1. Name S(t) explicitly.
2. Document S_target (point or range).
3. Document direction: does manifestation → (a) reduce D(t)? (b) increase S(t)? (c) stabilize S(t)? (d) signal a different deviation? Must be pre-specified.
4. Document timescale: τ_corrective (expected time from manifestation onset to measurable S(t) change).
5. Pre-register: if S(t) moves in the predicted direction within τ_corrective after a manifestation → count +1. If not → count −1. Report total +1s vs −1s across events.

**Failure mode to avoid:** post-hoc attribution of "corrective" to any event — this is the main confound in Vallée-style accounts.

---

## 5.7 — Feedback Termination

**Definition:** manifestations should decline, cease, change category, move spatially, or switch modality as the lower-level state returns toward viability.

**Test:**
- For each manifestation event, assign: start_time, peak_strength, end_time, termination_mode (declined / ceased / moved / shifted / escalated).
- For each event, compute: did S(t) move toward viability in the window [start, end]? Did manifestation then terminate?
- Test: is termination correlated with S(t) returning to viability, controlling for event duration?

**Competing explanation test:**
- If manifestations terminate independently of S(t) (e.g., always end within 48 hours regardless of S), the regulatory model weakens.
- If termination is better explained by media attention cycles, social fatigue, or reporting bias, H6 weakens.

---

## 5.8 — Adaptation (controller changes strategy when prior output fails)

**Definition:** if a particular manifestation no longer produces behavioral or cultural impact, the controller alters its strategy.

**Candidate adaptation signatures:**
- Change in presentation (visual → physiological → informational)
- Escalation (stronger manifestation when weaker ones failed)
- Different witness selection (previously unaffected demographic now affected)
- Culturally updated symbolism (manifestation incorporates current cultural markers)
- Altered timing (response latency changes after prior failure)
- Channel switching (physical → dreams → symbolic → informational)

**Critical controls (brief Section "Crucially"):** apparent adaptation must survive controls for:
- Changing media technology and reporting channels
- Changing cultural expectations and folklore
- Observer interpretation bias (new observers interpret differently)
- Reporting practice changes (data quality improvements over time)

**Test:** code manifestation events by channel (physical / physiological / psychological / informational / cultural). For each multi-event sequence where one channel "failed" (no documented effect), test whether the subsequent event: (a) switches channel, (b) escalates, (c) changes witness demographics, (d) changes timing. Pre-register the hypothesis (channel switch OR escalation OR witness change). Control against historical media/coverage changes.

---

## 5.9 — Memory (path dependence; controller behaves differently based on prior interactions)

**Candidate memory signatures:**
- Hysteresis: response to a given deviation depends on whether system previously experienced the deviation
- Repeated-location effects: manifestations cluster at specific geographic or temporal locations across events
- Repeated-witness effects: specific individuals or communities show altered response on subsequent exposure
- Altered response following prior exposure: response magnitude or direction changes on repeat exposure
- Long-term changes inconsistent with a memoryless process: slow drift in baseline S(t) that cannot be explained by physical drivers alone

**Test (pre-register):**
- Define a repeated-event sequence (same or proximate location/time within 5 years).
- Compare response on first vs subsequent exposures using pre-registered outcome measures.
- Use survival / hazard models: does time-since-last-event predict manifestation probability or type?

---

## 5.10 — Overshoot and Oscillation (damped oscillation around setpoint)

**Definition:** genuine feedback with delay produces overshoot, not just smooth correction.

**Test:**
- For each S(t) trajectory around a manifestation event, fit a damped-oscillation model: S(t) = S_target + A·e^(−λt)·cos(ωt + φ).
- Pre-specify: λ > 0 (damped), ω > 0 (oscillatory), and A/φ relative to the manifestation timing.
- Report: what fraction of events show oscillatory correction pattern vs monotonic correction?
- Control: compare to S(t) trajectories that occur without manifestation events — does oscillatory pattern appear only in the presence of manifestation?

---

## Cross-scale comparison protocol (for H2)

To test whether octave-paired structures share regulatory dynamics (not just size):

For each control-dynamics measure above (5.3–5.10), for each of the 7 octave pairs, attempt to compute the analogous quantity at both scales. Then:

1. Compute the ratio R = measure_lower / measure_upper (or analogous dimensionless comparison).
2. Compare R across pairs: is R similar across the 7 pairs (suggesting similar control architecture)?
3. Compare R for octave-pairs vs R for randomly paired non-octave structures from the ladder.
4. Pre-register similarity metric (e.g., coefficient of variation of R across pairs; pre-specify threshold for "similar").
5. Pre-register: if octave-paired R variance < random-pair R variance AND octave-paired R mean ≠ random-pair R mean → H2 gains support.

This is the central test for the spec's key question: "Are the proposed scale pairs unusually similar in control architecture compared with non-paired structures?"
