# REGULUS Rigor Adjudicator

> **Jev adjudication improves consistency of methodological judgments. It does not create evidence, estimate whether Project REGULUS is true, or replace human/expert review.**

The tool validates frozen evidence packets, runs deterministic scientific hard rules, optionally asks pinned `typesafe/jev-1.13` atomic methodological questions through OpenRouter's Decisions API, computes calibration metrics, and writes auditable artifacts.

## Status

V1 ships in `ADVISORY_ONLY`. Model probabilities are audit metadata. Deterministic rules always outrank model output, and any move to `CONFIRMATION-READY`, `CONFIRMATORY RESULT`, or `REPLICATED` requires human/expert review.

## Setup

Use Node 22 and set `OPENROUTER_API_KEY` only for live `evaluate` calls. Never commit `.env` files or raw request headers.

```bash
npm ci
npm run typecheck
npm test
npm run rigor -- evaluate ../../analysis/exploratory/V-A-POSS-I/rigor/evidence-packet.json --rubric G6
npm run rigor -- verify ../../analysis/exploratory/V-A-POSS-I/rigor
```

At least 150 genuinely human-reviewed atomic cases are required before calibration authority can be considered. The committed seed set is explicitly model-drafted and cannot authorize Jev.
