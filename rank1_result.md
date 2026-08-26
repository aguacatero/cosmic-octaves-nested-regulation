# Rank 1 — Exploratory Phase + All-Pair Results (exploratory; NOT preregistered)

Source: data/octave_pairs.csv + data/scale_table.csv (verified via curl from repo)
Script: rank1_phase_allpair.py  (rewrit from scratch — no external packages used)

## Phase test (D4 F)
- Circular mean: 14.89° (n=14 phases from 7 pair sides)
- No tight 0°/180° concentration; spread [8.92 ... 2.64]
=> No evidence of a single lattice-phase; consistent with D1 (selection-driven pairing)

## All-pair difference (D4 G)
- 91 pairwise differences across 14 structures
- 2 pairs with |Δ-24| ≤ 0.2 (tight): Proton↔Sun (Δ=23.92), City↔Observable Universe (Δ=23.94)
- 5 of the 7 "canonical" pairs match closely (≤±0.2); 2 loose (Atomic Orbital+1.07; Ribosome+0.63)
=> Scale recurrence is pair-selective, not universal lattice — confirms D4 G requirement for all-pair analysis (not only manual pairs)

## Status (per D4)
- EXPLORATORY — no preregistration; no independent holdout (D1); discovery-only
- Confirmatory version requires: preregistered rules (D4 A), holdout (D4 B), ordered null (D4 C)
