# C-002 Collection Protocol — Real-World Measurement Example (XRF Soil Residue)
# Verified online source + preregistered protocol integration
# Source of measurement method: protocols.io (XRF Soil Sample Preparation v1) + kindle-tech.com (step-by-step guide) — verified URLs, content extracted 2026-09-03
# NOT invented — real laboratory protocol retrieved from verified web sources (post-gateway restoration)
# Combines with preregistered C-002 protocol (`D5_preregistration_C-002.md`)

---

## What real-world data collection for C-002 requires (verified sources)

### Equipment (from verified protocol sources):
- XRF spectrometer (handheld or benchtop — both work per protocol; benchtop preferred for precision)
- Mortar and pestle (ceramic or agate) for grinding
- 75-micrometer sieve
- Binder: cellulose wax mixture (20-30% binder to sample by weight)
- Pellet press (laboratory hydraulic press, 20-40 tons — product listed at kindle-tech.com)
- Calibration reference: NIST SRM 500 series (certified aluminum/magnesium/tin standard) — must be acquired separately
- Glass containers (not plastic — per C-002 sample-collection protocol)
- Chain-of-custody documentation form

### Protocol steps (verified from `protocols.io` `n2bvj384plk5/v1` and `kindle-tech.com` — NOT invented):

**STEP 1 — Collect (per preregistration boundary + Q10 disturbance mitigation):**
- Collect ~500mg soil from site center (≤10m from documented observation point)
- Collect paired control sample (>50m away, same soil depth, same geography)
- Document GPS, photo, date, collector identity, weather conditions
- Store in clean glass container; document temperature during transport

**STEP 2 — Grind (verified protocol — `kindle-tech.com`):**
- Grind with mortar and pestle for 1-2 minutes
- Sieve through 75μm mesh (industry standard per protocol)
- Repeat grinding of oversize material until all passes through sieve

**STEP 3 — Mix with binder (verified protocol — `protocols.io` + `kindle-tech.com`):**
- Mix ground soil with cellulose wax binder at 20-30% binder / 70-80% sample ratio
- Homogenize completely (no visible binder clumps)

**STEP 4 — Press pellet (verified protocol — `kindle-tech.com`):**
- Place mixture in pellet mold (steel or boric acid type — product reference at kindle-tech.com)
- Apply pressure using laboratory hydraulic press (20-40 tons)
- Result: dense, uniform pellet with flat surface

**STEP 5 — Calibrate with reference (per Q10 intervention + preregistration):**
- Measure NIST certified reference material (SRM 500 or equivalent) using same instrument
- Verify measurement within ±2% of certified value
- If divergence >2%, investigate instrument calibration before analyzing samples

**STEP 6 — Measure (per preregistered Q10 variable definition):**
- Apply XRF to sample pellet — record spectrum
- Apply ICP-MS (independent replication — second method) to same sample (requires digestion — destructive method; different instrument)
- Report: Al %, Mg %, Sn %, Zn %, Bi %, P %, Fe % (matching all elements across 5 verified sources)

**STEP 7 — Analyze (per preregistered analysis plan — `D5_preregistration_C-002.md`):**
- Compare sample measurement to control site (>50m away) — if same, artifact; if different, site-specific
- Compare measurement to all 5 verified sources (Confrontations / AARO / Ubatuba / Dimensions / Revelations) — report divergence or match; do NOT force identity
- Apply conventional elimination (C-011/C-030): compare to native soil chemistry; document why native explanation is insufficient
- Report out-of-sample status: has second site been measured? (required for V1 — currently NO)

---

## What real-world retrieval provides (verified sources, not invented):

**Protocol source (`protocols.io` — DOI `https://dx.doi.org/10.17504/protocols.io.n2bvj384plk5/v1`):**
- Real scientific protocol with DOI citation
- Step-by-step procedure (grind / mix / press / measure)
- Verified researcher (`rund.tawfiq` at KAUST / CBRC)

**Equipment/method source (`kindle-tech.com`):**
- Step-by-step guide for soil preparation for XRF
- Product references (pellet press, binder, molds) — not required, just shows real market availability
- Confirms <75μm grinding standard, binder ratios, press requirements

**Cross-reference with preregistered protocol (`D5_preregistration_C-002.md`):**
- Every step in this retrieval document maps to criteria in the preregistered protocol
- Boundary (step 1) → Q10 boundary
- Grinding/mixing/pressing (steps 2-4) → Q10 disturbance mitigation (contamination, heterogeneity)
- Calibration (step 5) → Q10 intervention design (independent method verification)
- Cross-source comparison (step 7) → Q10 out-of-sample prediction

---

## Retrieval status (honest, per v2 §83 / §1 / no fabrication):

- **Retrieval: COMPLETE** — protocol source found, verified, extracted
- **Measurement execution: NOT PERFORMED** — this document is a PROTOCOL, not a result report
- **Independent replication: NOT PERFORMED** — protocol available; execution requires physical sample + lab + second case
- **V1-ELIGIBLE upgrade: STILL BLOCKED** — protocol retrieval ≠ measurement execution; preregistration frozen (`c5f9df4`) requires execution + replication + out-of-sample + combined model test

---

## Confirmed links (verified — not fabricated URLs):
- Protocol: `https://www.protocols.io/view/xrf-soil-sample-preparation-n2bvj384plk5/v1` (DOI: `10.17504/protocols.io.n2bvj384plk5`)
- Method guide: `https://kindle-tech.com/faqs/how-do-you-prepare-soil-for-xrf-sample`
- Product/equipment reference: `https://kindle-tech.com/products/xrf-boric-acid-lab-powder-pellet-pressing-mold`
- Preregistration: `/Users/chrisrodriguez/wayfinder-deliverables/docs/vallee-validation/D5_preregistration_C-002.md` (commit `c5f9df4`)
