#!/usr/bin/env python3
"""
Rank 1 — EXPLORATORY (not preregistered confirmatory; per D4 B / D4 A.
Re-runs: (1) circular phase test (log10 L mod 24)  and  (2) all-pair
complete-pairwise difference spectrum.  Uses data/octave_pairs.csv +
data/scale_table.csv from the reference repo.
No holdout exists yet (D1 reports none) → results are discovery-only.
"""
import csv, math, statistics, sys
PAIRS = []
with open('octave_pairs.csv') as f:
    for r in csv.DictReader(f):
        PAIRS.append({k:(float(v) if k in ('Small_log10_L','Large_log10_L','Ratio_log','Deviation') else v) for k,v in r.items()})

# 1) PHASE TEST (F): log10 L mod 24 circular statistics
phases = []
labels = []
for p in PAIRS:
    for side in ('Small','Large'):
        logL = p[f"{side}_log10_L"]
        phases.append(logL % 24)
        labels.append(p[f"{side}_Structure"])

mean_angle = math.atan2(sum(math.sin(math.radians(p)) for p in phases)/len(phases),
                        sum(math.cos(math.radians(p)) for p in phases)/len(phases))
print(f"Phase (circular mean): {math.degrees(mean_angle):.2f} deg | n={len(phases)} | phases: {[round(p,2) for p in phases]}")

# 2) ALL-PAIR DIFFERENCE TEST (G): |logL_j - logL_i| across ALL pairings (not just manual 7)
all_logL = []
with open('scale_table.csv') as f:
    for r in csv.DictReader(f): all_logL.append((r['Structure'], float(r['log10_L'])))
diffs = sorted([(abs(a[1]-b[1]), a[0], b[0]) for i,a in enumerate(all_logL) for b in all_logL[i+1:]])
strong = [d for d in diffs if abs(d[0]-24.0) < 0.2]
print(f"All-pair |ΔlogL| spectrum size: {len(diffs)}  (n structures = {len(all_logL)})")
print(f"Pairs with |Δ -24| ≤0.2: {len(strong)}  (strong-match criterion per D4 G)")
for s in strong:
    print(f"  {s[1]} ↔ {s[2]} |Δ={s[0]:.3f}  (Δ-24 = {s[0]-24:+.3f})")

# 3) Original 7-pair deviations (reference only — exploratory)
print("\n=== Original 7 pair deviations (reference) ===")
for p in PAIRS:
    dev = p['Deviation']
    q   = p['Quality']
    print(f"  {p['Pair_Number']:>2}: {p['Small_Structure']:<14}↔{p['Large_Structure']:<22} dev={dev:+.3f}  {q}")


--- ARCHIVED v1 (2026-09-01) ---
Status: SUPERSEDED / HISTORICAL EXPLORATORY. Per handoff v2 (§5.6, §11). Not confirmed. Original file preserved at /Users/chrisrodriguez/wayfinder-deliverables/rank1_phase_allpair.py.
Defects noted (§4.1-4.6): rank1 phase math invalid; scale_table.csv 14-vs-15; D4A archive; D2/D5/D6/D7/D8 superseded.
