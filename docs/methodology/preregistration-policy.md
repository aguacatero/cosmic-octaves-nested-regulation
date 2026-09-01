# Preregistration Policy (v2)

**Status**: Active methodology.  
**Applies to**: Any confirmatory analysis on any branch.

## When Preregistration is Required
- Confirmatory hypothesis tests (primary analysis)
- Bridge activation tests
- Any result intended to be published or used to support a claim

## When Preregistration is Not Required
- Exploratory analysis (labeled as such)
- Historical/archival documentation
- Conceptual framing or hypothesis generation
- Calibration against known controls (positive/negative control identification is descriptive)

## Preregistration Format (minimum)
1. **Branch & hypothesis**: S1, R1, V1, etc.
2. **Eligible data**: which dataset, which structures/sources, exact inclusion rules
3. **Frozen rules**: measurement conventions, tolerances, thresholds, statistics, null models
4. **Primary statistic**: the one preregistered number / decision rule
5. **Falsification criteria**: what counts as a fail / negative
6. **Separate seed**: any RNG must use a precommitted seed (not source seed 42)
7. **Repository commit SHA**: lock to a specific commit hash
8. **External archive link**: portable, timestamped (OSF / AsPredicted / git tag / timestamped dir)

## Rules
- A separate preregistration is required for each genuinely new analysis/data combination.
- The current `D4A_pre_registration.md` (archive/wayfinder-v1) is **v1 historical artifact** — it is not valid confirmatory preregistration for new work.
- Any analysis influenced by discovery data (S branch) must be labeled EXPLORATORY unless genuinely independent prospective information exists.

## Archive
- Frozen preregistrations only; no retroactive registration of already-inspected data.
- Archive link must be stable; do not use user-local file paths as primary archive.