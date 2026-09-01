# Evidence Status Vocabulary

**Status**: Defined in methodology; used across all branches and bridges.

## Recommended Status Ladder
```
UNTESTED → EXPLORATORY → PREREGISTERED → SUPPORTED / UNSUPPORTED / CONTRADICTED / INCONCLUSIVE / REPLICATED / SUPERSEDED / INVALIDATED
```

## Definitions
- **UNTESTED**: No analysis or observation yet performed.
- **EXPLORATORY**: Analysis performed but not preregistered; hypothesis-generating only.
- **PREREGISTERED**: Analysis registered before data inspection; prospective test.
- **SUPPORTED**: Preregistered test passed (effect observed, p < threshold, etc.).
- **UNSUPPORTED**: Preregistered test failed (effect not observed, p ≥ threshold).
- **CONTRADICTED**: Result opposite to prediction (e.g., predicted increase, observed decrease beyond chance).
- **INCONCLUSIVE**: Result ambiguous (e.g., confidence interval includes null, or borderline).
- **REPLICATED**: Independent replication (new data, same preregistration) also SUPPORTED.
- **SUPERSEDED**: Later analysis with better design or data overrides this result.
- **INVALIDATED**: Result shown to be invalid due to flaw in design, execution, or assumptions.

## Usage Rules
- Never silently change a status; always document why.
- Failed results (UNSUPPORTED, CONTRADICTED, INVALIDATED) are valuable; preserve them.
- Do not upgrade status without new preregistered test.
- When a result is SUPERSEDED, keep both and note the relationship.