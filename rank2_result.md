# Rank 2 — Ordered Null (D4-A §7.1) — PARTIAL / FLAGGED

PRE-REG REF: D4A_pre_registration.md (freeze 6371fb5 / sha 939967af...)
SEED: 137 (D4-A 6.4 / 7.1 — separate from source 42)
SOURCE: octave_pairs.csv + scale_table.csv

## What worked
- Ordered null method defined (preserve monotonic ordering; not fully random).
- 100k trial simulation code written (`rank2_ordered_null.py`).
- Observed pair statistic computed for 7 canonical pairs (see R1 result: 4/7 strong).

## What is BLOCKED (honest — not invented)
- The source CSV uses incomplete structure names (`Atomic Orbital` vs `Atomic Orbital (H)`; `Solar System` absent — requires proxy). This is the D1 measurement-convention confound.
- Computing a "correct" ordered-null p requires correct measurement convention for every pair. The correct convention (radius / containment / orbit-radius) is different per structure (D1). Without that convention locked per pair, the null result would be confounded.
- Fix requires either: (a) D5 framework specifying convention per structure, or (b) source repo providing consistent convention labels.
- Per D4-A: this gap is reported, not hidden. No p claimed.

## Status
- Ordered-null SIMULATION NOT COMPLETED (would need correct conventions first).
- Fully-random null (sensitivity) NOT completed (same reason).
- No claim made. No selection. No hidden result.
- Per D8 / brief: package stops at gap; holds for independent holdout + measurement convention control.

## Next required (before R2 can report):
- D5 measurement convention per pair (§4.2 of D4-A) → then rerun with correct log L values.
- Prefer separate D4-A preregistration for the corrected run.
