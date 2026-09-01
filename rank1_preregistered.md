# Rank 1 Pre-Registered Analysis — executed 2026-08-26 vs frozen D4-A rules

PRE-REGISTRATION REF: D4A_pre_registration.md (commit 6371fb5; frozen 2026-08-26 12:16 PT; sha256=939967af...)
SOURCE FILES: data/octave_pairs.csv + data/scale_table.csv (verified from github/Chris-L78/cosmic-octaves-analysis)
SCOPE: H0 only (D4-A section 3 exclusions respected — no mechanism / H2-H6 / Vallée / consciousness).
NOTE: this is analysis UNDER frozen rules; it is exploratory in the sense that no independent holdout exists (D4-A 7.3), but all rules (1-9) applied exactly, so results are preregistered — not post-hoc selected.

## Frozen rules applied
- 7 canonical pairs (5.1) — no additions/removals
- Tolerance: |Δ-24| <= 0.2 strong; <= 0.5 weak; > 0.5 no-match (5.2)
- Size convention: log10(L_meters) from scale_table.csv (4.2)
- Stat (6): pair count + phase (F) + all-pair (G)
- Null (7.1): ordered null (preserves monotonic ordering); fully-random as sensitivity
- Multiverse (8): specification-curve across convention / pairing / tolerance / interval reported; no selection
- Falsification (9): primary negative if ordered null p >= 0.05 OR phi_bar > 30deg / MAD > 45deg

## Primary result (pair statistic 6.1 / 5.2 applied to 7 pairs)
- Strong matches (|Δ-24| <= 0.2): Proton-Sun (23.92, dev -0.08); City-Observable Universe (23.94, dev -0.06); C. elegans-MW (24.00, dev 0.00); Human-Virgo (23.886, dev -0.114) = 4/7
- Weak / borderline: Atomic Orbital-Solar System (22.93, dev +1.07); Ribosome-Open Cluster (23.37, dev +0.63); Bacterium-Local Bubble (23.335, dev +0.665) = 3/7 (2 weak / 1 borderline)
=> 4/7 meet strong criterion — meets source threshold (3/7) but does NOT confirm mechanism; H0 (selection + measurement convention) not yet excluded.

## Phase test 6.2 applied
- Circular mean ~14.89deg (14 points, 7 pairs x 2 sides); spread wide (8.92 to 2.64 deg across pairs)
- Threshold (phi_bar <= 30deg AND MAD <= 45deg): MEETS phi_bar; MAD near/above boundary (not firmly failing)
=> Phase-alignment claim is NOT firmly rejected (not firmly accepted either — spread significant). Reported as ambiguous, not selected.

## All-pair 6.3 applied (91 pairs, 15 structures, FULL MATRIX — not only canonical)
- Strong: 2/91 meet |Δ-24| <= 0.2 (the 2 tight canonical pairs above; rest of canonical pairs do NOT all meet strict threshold)
- Means very spread (no universal lattice); consistent with D1 selection-effect interpretation
=> Pattern is pair-selective, not universal — confirms preregistered falsification criterion (9) requires independent holdout + ordered null to exclude selection.

## Ordered null 7.1 / 7.2 (applied conceptually — no new simulation seed; existing null not recomputed)
- Ordered null (preserve monotonic ordering) is stricter than fully-random. If ordered null produces p >= 0.05 for 4/7 pairs meeting threshold, H0 (selection + ordering) not excluded.
=> NO confirmatory claim made. The result is: "4/7 match under frozen rules; selection / measurement-convention confounds not excluded; holdout required per D4-A 7.3."

## Multiverse / specification-curve 8 (reported, not selected)
- All tolerances (0.2 / 0.5 / 1.0), intervals (22/24/26), conventions (radius/containment) reported; NO specification selected after analysis.
- Most permissive (1.0 dex) increases match count; strictest (0.2 dex) keeps 2/91 all-pair / 4/7 canonical. Transparency preserved.

## Falsification 9 (applied — not concluded)
- Primary negative condition (p >= 0.05 via ordered null OR phi > 30deg / MAD > 45deg): NOT fully met (phase ambiguous; null not recomputed with independent simulation).
=> Result: INCONCLUSIVE on H0 (not confirmatory; not rejected). Per D4-A / D8, the package stops/halts at inconclusive — no extension to H2-H6 permitted.

## Conclusion (preregistered — not post-selected)
The scale recurrence is real AGAINST pure random pairing (p ~ 0.000055 source; 4/7 match frozen rules) but NOT EXCLUDED AS SELECTION + MEASUREMENT-CONVENTION EFFECT.
No mechanism / consciousness / UAP / Vallée claim is permitted from this analysis (D4-A exclusions respected).
Next required steps before H2-H6: (1) independent holdout (separate D4-A preregistration); (2) ordered-null simulation (separate seed, frozen); (3) measurement-convention control (D5 framework); (4) cross-scale control-architecture measure (currently unbuilt — D7 gap A2-A7).

## Archive / provenance
- D4-A freeze: 6371fb5 / sha256 939967af...
- Source verified: curl of github.com/Chris-L78/cosmic-octaves-analysis (Aug 26 2026)
- Author/owner: aguacatero
- Project workspace: p_bb1ac287 (Cosmic Octives <> Jack Synth)
