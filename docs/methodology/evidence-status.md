# Evidence Status Vocabulary

**Status**: Defined in methodology; used across all branches and bridges.

## Recommended Status Ladder

```text
UNTESTED → EXPLORATORY → PREREGISTERED → SUPPORTED / UNSUPPORTED / CONTRADICTED / INCONCLUSIVE / REPLICATED / SUPERSEDED / INVALIDATED
```

These labels apply to a **specific claim under a specific test**. They are not global truth labels for an entire branch or theory.

## Definitions

- **UNTESTED**: No adequate analysis or observation yet performed.
- **EXPLORATORY**: Analysis performed but not prospectively preregistered on genuinely independent confirmation data; hypothesis-generating only.
- **PREREGISTERED**: Confirmatory test was frozen before target-outcome inspection on the stated confirmation dataset.
- **SUPPORTED**: The preregistered result met the prospectively defined criterion for the specific tested prediction, with adequate data quality/precision for that interpretation.
- **UNSUPPORTED**: The preregistered prediction did not meet its support criterion **and the design had adequate precision/information to evaluate the prespecified effect or pattern of interest**. This means the tested prediction was not supported; it does not automatically prove a statistical null or a rival mechanism.
- **CONTRADICTED**: A sufficiently precise result was materially opposite to the preregistered directional/structural prediction or met a prospectively defined criterion favoring an incompatible rival.
- **INCONCLUSIVE**: The result cannot materially discriminate the target from relevant alternatives because precision, data quality, assumptions, sample/information content, or model separation is inadequate.
- **REPLICATED**: A genuinely independent dataset or study, prospectively specified for the same material claim, also supports the result. Re-running code on the same data is reproducibility, not replication.
- **SUPERSEDED**: Later analysis with better design, data, measurement, or corrected assumptions replaces the earlier evidentiary interpretation. Preserve both records.
- **INVALIDATED**: The earlier result was shown to be invalid because of a material flaw in design, execution, mathematics, data, or assumptions. This invalidates that result; it does not automatically falsify every parent hypothesis.

## Statistical interpretation guardrails

1. `p < alpha` is not the probability that a hypothesis is true and does not establish practical/mechanistic importance.
2. `p >= alpha` is not, by itself, affirmative evidence for a null hypothesis.
3. If the study is too imprecise to distinguish a meaningful effect from no effect, prefer `INCONCLUSIVE` over `UNSUPPORTED`.
4. Affirmative evidence for a null/rival requires a prospectively justified discriminating design, such as adequate confidence-interval precision around a smallest effect of interest, equivalence testing, model/predictive comparison, Bayes-factor thresholds, or another appropriate criterion.
5. A rejected simple null does not establish a preferred mechanism when serious alternatives predict the same observation.
6. Status is scoped to the exact population/system, measurement, data boundary, analysis, and assumptions tested.

## Usage Rules

- Never silently change a status; always document why.
- Failed, null, contradictory, inconclusive, and invalidated results are valuable; preserve them.
- Do not upgrade status because a result fits the larger narrative.
- Do not upgrade an exploratory analysis to `SUPPORTED` merely because a later preregistration restates rules after the data were already inspected.
- A bridge cannot inherit status from its parent branches.
- When a result is `SUPERSEDED`, preserve the original result and document the relationship.
- Use `docs/methodology/scientific-rigor-gate.md` to determine methodological readiness before a confirmatory result is interpreted.
