# D5 Measurement — Collection Guide (ELI5 / extreme concision / grammar-sacrificed / bullets / checkboxes)

**What D5 is:** A measurement protocol for the Vallée/UAP anomalous-manifestation branch (V-branch) in your project `cosmic-octaves-nested-regulation`. D5 measures the **dynamics** (energy, chemistry, biology, photo) WITHOUT deciding "this is regulation" first. Per v2 §83 / rule 4: measure theory-neutral → label AFTER evidence.

**Why it matters:** D5 is the ONLY way to anchor the bridge B-IV (Influence ↔ Anomalous Manifestation). Without D5 measurements, Vallée's claims stay "supported by author" / "theoretical" / "unverified" — and you cannot activate any bridge. This is the single biggest gap in the current repo state.

---

## 1. WHAT YOU HAVE READY (from claim-evidence-matrix.md + V0_frozen_protocol.md)

### D5-anchored claims (already tagged in the matrix — need MEASUREMENT not more extraction):

| Claim-ID | Case / page (Passport 1969) | D5 anchor type | What to measure | Source (for citation) | Current verdict |
|---|---|---|---|---|---|
| C-001 | §1 Key Insights §1 | energy (kW–MW) | Quantifiable energy output from physical-trace cases | Confrontations 1990 §1 | supported |
| C-002 | §2 Key Insights §2 | chemistry (Al/Mg/Sn alloys) | Metal residue composition; no exotic materials | Confrontations 1990 §2 | supported |
| C-003 | §3 Key Insights §3 | biological (chlorophyll, calcium) | Plant growth acceleration; soil chemistry | Confrontations 1990 §3 | supported |
| C-012 | §12 Key Insights §12 | bio + energy (microwave, CNS) | Brazilian pulsed microwave; lasting behavioral changes | Confrontations 1990 §12 | supported |
| C-021 | §21 Key Insights §21 | photo calibration | Known-light-source imaging for energy/distance calc | Confrontations 1990 §21 | supported |
| C-024 | Dense Summary §3 | energy (kW–MW range, EM + microwave) | Electromagnetic + microwave across cases | Confrontations 1990 §3 | supported |
| C-025 | Dense Summary §4 | biological (plant growth, soil compression, mineral) | Botanical + mineral markers near contact sites | Confrontations 1990 §4 | supported |
| C-026 | §5 Dense Summary §5 | biological (paralysis, skin, burns, fatalities) | Biophysical directed-energy effects | Confrontations 1990 §5 | supported |
| C-029 | §8 Dense Summary §8 | physiological (Brazilian concentrated lethal) | Lethal subset; high-impact biological cluster | Confrontations 1990 §8 | supported |

### What each D5 anchor requires (per v2 Q10 — regulation criteria, see docs/hypothesis-families/regulation.md):
1. **Independently defined system boundary** — what's inside vs outside the measurement
2. **Measurable protected variable or viability region** — what value stays within bounds (e.g., soil chemistry range, energy output threshold)
3. **Identified disturbances** — what pushes the variable away (e.g., EM pulse, thermal event)
4. **Feedback pathway** — how system state changes subsequent measurement
5. **Causal intervention test** — disrupting pathway changes disturbance rejection
6. **Closed-loop model beats open-loop** in out-of-sample prediction

---

## 2. HOW TO COLLECT D5 (concrete step-by-step — do THIS, not more interpretation)

### Step A — Pick ONE anchor to measure first (you choose; I recommend starting here):

**Recommended starting point: C-002 (residue chemistry — Al/Mg/Sn alloys)**
- Why: most concrete, physical, reproducible, least culturally-loaded
- Data needed: one physical-trace case with soil/residue chemistry analysis (from your open-notebook Vallée PDFs)
- Protocol: document metal composition + verify no exotic materials + replicate on at least one independent sample

**Alternative starting points (pick ONE, not all):**
- C-003 (botanical) — plant-growth + soil-chemistry markers; requires biological sampling
- C-012 (bio + energy) — Brazilian microwave + behavioral; requires physiological measurement
- C-021 (photo calibration) — imaging calibration for energy/distance; requires camera + known light source
- C-024/C-025/C-026/C-029 — energy range + biological markers; requires multi-case aggregation (harder — pick a single case first)

### Step B — Source the data:
- From `~/Downloads/JacquesValleePassporttoMagonia.pdf` (verified 16MB, Aug 2023) — pages 148–178 for observation cluster
- From `/Documents/open-notebook/` (user's Vallée books) — extract the specific passages
- From any independent physical-trace dataset you have (NARA/AARO if available — but do NOT use as evidence until independently verified)

### Step C — Measurement protocol (per v2 Q10):
- For chemistry (C-002): soil/residue sample → XRF / ICP-MS analysis → Al/Mg/Sn ratios → check for exotic elements → document
- For biological (C-003): plant sample near trace site vs control site → chlorophyll / calcium assay → document delta
- For photo (C-021): known-light-source imaging → calibration curve → apply to UFO image → energy/distance estimate → document
- For bio+energy (C-012): physiological monitoring (CNS, thermal) during event → document measurable output

### Step D — Record in the claim-evidence matrix:
- Add columns: `measurement_method`, `measurement_result`, `replication_count`, `control_site` (if applicable), `out_of_sample_test` (if applicable), `Q10_criteria_met` (yes/no for each of the 6 criteria)
- Tag D5 anchor status: `yes (energy)` / `yes (chemistry)` / `yes (bio)` / `yes (photo)` / `yes (mixed)`

### Step E — Freeze the measurement:
- Commit measurement log to `docs/vallee-validation/D5_measurements.md`
- Tag as V1-eligible IF: Q10 criteria met + independent replication + preregistered before analysis
- Stay SPECULATIVE if: partial Q10 + no replication + conventional explanations not eliminated

---

## 3. WHAT THE CURRENT MATRIX SHOWS (so you know what's NOT yet measured)

- D5 anchor tags present (energy / chemistry / bio / photo) but values = "theoretical / documentary" — NOT actual measurements
- All D5-anchored claims (C-001, C-002, C-003, C-012, C-021, C-024, C-025, C-026, C-029) have verdict = `supported` — but "supported" refers to Vallée's documentation, NOT to independent replication of the measurement
- Measurement replication is the missing step; the bridge B-IV cannot activate until D5 measurements are taken + replicated + Q10 criteria met

---

## 4. WHAT IS LOCKED (do NOT touch — verified, committed)

- v2 architecture: `docs/research-architecture-v2.md` (f11e7e0)
- Claim-evidence matrix v1 (120 claims): `docs/vallee-validation/claim-evidence-matrix.md` (c6c37cd)
- V0 frozen protocol: `docs/vallee-validation/V0_frozen_protocol.md` (1d97fcb)
- Primary-source register: `docs/vallee-validation/primary-source-register.md` (1d97fcb)
- V1 archive: `archive/wayfinder-v1/` (preserved)
- Session handoff: `SESSION_HANDOFF_2026-09-03.md` (32057dc)

---

## 5. NEXT CONCRETE STEP (your choice — I cannot invent)

- [ ] Pick ONE D5 anchor to measure first (recommend C-002 residue chemistry; alternatives: C-003 botanical / C-021 photo calibration)
- [ ] Source the measurement data from your Vallée PDFs (`~/Downloads/` or `/Documents/open-notebook/`)
- [ ] Apply Q10 criteria + record measurement method/result/replication
- [ ] Commit measurement log to `docs/vallee-validation/D5_measurements.md`
- [ ] Tag V1-eligible vs. still-SPECULATIVE

**Pick one anchor and say "measure X" — I'll guide the extraction and protocol.**
