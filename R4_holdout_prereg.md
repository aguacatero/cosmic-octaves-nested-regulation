# R4 — Independent Holdout Pre-Registration (DRAFT, awaiting freeze + user input)

Status: **DRAFT — separate from D4-A.** Must be registered BEFORE any holdout data
is collected. Holds immutably once frozen. References D4-A section 7.3.

---

## 1. Identity
- Name: R4-Holdout-Scale-Pattern (Cosmic Octaves / Lehto reanalysis)
- Author / owner: aguacatero
- Project: p_bb1ac287 "Cosmic Octives <> Jack Synth"
- Repo: github.com/aguacatero/cosmic-octaves-nested-regulation
- Preregistration: this document, plus user-supplied holdout dataset.
- Date of freeze: 2026-08-26 (target).

---

## 2. Why a separate preregistration?
Per D4-A §7.3: holdout data must be preregistered BEFORE collection. The original
D4-A (commit 6371fb5, sha 939967af...) is the preregistration for the discovery
dataset only. A SECOND, independent preregistration is required for the holdout,
and the rules of the holdout must NOT reference the discovery result.

---

## 3. Holdout structure (USER MUST DECIDE)
This is the question that gates R4. Until user picks a holdout, this prereg is incomplete.

### 3.1 Options (user picks one):
- [ ] (A) **Re-measure an existing structure** with a different method (e.g., compute Earth-Sun distance from ephemeris instead of citing Lehto's value; independent source).
- [ ] (B) **Add a new structure** not in Lehto's 15 (e.g., a different atom — Cesium, Rubidium; or a different galaxy — Andromeda, M87).
- [ ] (C) **Different physical model** of an existing structure (e.g., compute Solar System boundary as Oort-cloud radius, not Earth-orbit).
- [ ] (D) **Multiple new structures** in a single scale range (e.g., 5 new protein/RNA structures vs Ribosome — narrower scale but more data points).
- [ ] (E) **Different dataset entirely** (e.g., a published independent analysis like those listed in DATA_SOURCES_free.md or in literature).

### 3.2 Hard rules (regardless of which holdout):
- The holdout must NOT be from `Chris-L78/cosmic-octaves-analysis` or any project that already references Lehto's repo.
- The holdout must be a real, verifiable measurement (publication, government database, or user-supplied primary measurement with method).
- The holdout must be gathered AFTER this preregistration is frozen (no prior accumulation).
- The holdout's method must be declared BEFORE the analysis is run (e.g., what was measured, how, with what source).
- A null result on the holdout (e.g., pattern fails) MUST be reported, not dropped.

---

## 4. Frozen analysis rules (mirror D4-A where appropriate)
- Same tolerance: |Δ-24| <= 0.2 strong; <= 0.5 weak; > 0.5 no match.
- Same statistic: pair count + phase + all-pair difference.
- Same null: ordered null (preserve monotonic ordering); fully-random null as sensitivity.
- Same multiverse: spec-curve across convention / pairing / tolerance / interval.
- Same seed: separate seed, preregistered (not 42, not 137).
- Same scope: H0 only. NO mechanism / H2-H6 / Vallée / consciousness / manifestation.
- Independent holdout preregistered with a SEPARATE SHA chain (this prereg freezes separately; this SHA is the holdout ID).

---

## 5. Frozen falsification criteria
- Primary negative: ordered null p >= 0.05 OR phi_bar > 30deg OR MAD > 45deg.
- Secondary negative: < 3/7 strong-match pairs in holdout.
- A failed holdout means: the scale-pattern is not robust to independent measurement; the D4-A preregistered result is a discovery-only result that did not generalize.

---

## 6. Reporting rules
- All preregistered outputs (positive and negative) must be published.
- The holdout result must include: timestamp, archive link, the holdout data (with method), the analysis script, the preregistered null result, and a one-paragraph comparison to the discovery result.
- ANY divergence from frozen rules must be labeled "post-preregistration exploratory".

---

## 7. USER CONFIRMATION REQUIRED (before this prereg is frozen)

- [ ] Pick one of: (A) re-measure existing; (B) new structure; (C) different model; (D) multiple new; (E) independent dataset
- [ ] Confirm holdout data source (URL / publication / method)
- [ ] Confirm method (what's measured, how)
- [ ] Confirm size convention (radius / containment / other — per D5 / D1 fix)
- [ ] Confirm scope = H0 only
- [ ] Confirm seed (separate from 42 and 137) — suggest 0xC05A1C (hex; user can override)
- [ ] Confirm SHA-256 capture on freeze (current doc SHA is on freeze)

---

## 8. Pre-freeze SHA-256 (placeholder)
This document's SHA-256 will be locked at freeze. Until frozen, the SHA is the
SHA of THIS draft. Verify: `sha256sum R4_holdout_prereg.md`.

---

## 9. Stopping rules
- If user does NOT pick a holdout dataset and method, R4 prereg CANNOT be frozen; package halts at gap.
- If user does pick, prereg is frozen; analysis is run; result is reported regardless of outcome.

---

## 10. Archive location
- Local: /Users/chrisrodriguez/wayfinder-deliverables/R4_holdout_prereg.md
- Remote: github.com/aguacatero/cosmic-octaves-nested-regulation (committed only after freeze)

---

## 11. Reference
- D4-A (commit 6371fb5, sha 939967af...)
- D5 framework (D5_measure_quant.md)
- DATA_SOURCES_free.md (free data sources)
- /wayfinder brief (D1, D4, D7, D8 references)
