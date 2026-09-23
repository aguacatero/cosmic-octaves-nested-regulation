# Jev Rigor Adjudicator Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a reproducible, advisory-first Jev adjudication subsystem that evaluates Project REGULUS Scientific Rigor Gate criteria without allowing model confidence to override deterministic scientific rules or substitute for scientific evidence.

**Architecture:** A small TypeScript CLI under `tools/rigor-adjudicator/` reads immutable evidence packets, validates them against committed JSON schemas, runs deterministic hard rules, optionally queries pinned `typesafe/jev-1.13` through OpenRouter's Decisions API, computes calibration metrics against a human-reviewed gold set, and writes versioned audit artifacts. Scientific status remains the existing non-numeric `PASS/PARTIAL/FAIL/BLOCKED/N/A`; Jev is advisory until calibration requirements are met and never emits a global probability that REGULUS or any source hypothesis is true.

**Tech Stack:** Node.js 22, TypeScript ESM, `@openrouter/sdk@1.3.11`, Ajv JSON Schema validation, Node's built-in `node:test`, `tsx`, SHA-256 via `node:crypto`, JSON/JSONL artifacts, GitHub Actions for offline verification.

**Spec:** `docs/superpowers/specs/2026-09-20-jev-rigor-adjudication-design.md`

## Global Constraints

- Pin Jev exactly to `typesafe/jev-1.13`; never use `~typesafe/jev-latest` for archived or publication-supporting evaluations.
- Use OpenRouter Decisions API via `openrouter.alpha.decisions.create()`; do not implement Jev through chat completions.
- Required secret is `OPENROUTER_API_KEY`; never commit it or echo it into artifacts.
- Hard rules override Jev, adversarial LLM, or human-readable model confidence.
- Official Scientific Rigor Gate states remain exactly `PASS`, `PARTIAL`, `FAIL`, `BLOCKED`, `N/A`.
- No code path may emit a project-wide probability that REGULUS, Vallée, Jackson, VASCO, the ECM hypothesis, or a conscious controller is true.
- Previously inspected target data cannot be labeled untouched confirmation.
- A preregistration after target-data exposure cannot manufacture independent confirmation.
- `p >= alpha` alone cannot establish a null or rival model.
- Same-data rerun is reproducibility, not independent replication.
- A bridge cannot inherit evidentiary status from a parent.
- Observer discrepancy, regulation, or coordination cannot directly promote a cognition/agency/consciousness claim.
- Missing required provenance blocks confirmatory promotion.
- Jev remains advisory until the gold-set calibration is explicitly approved; the first implementation must fail closed for promotion.
- V1 does not include autonomous literature search, paper ingestion, autonomous branch promotion, a dashboard, adaptive rubric rewriting, or automated publication claims.

## Review Focus

1. **Malformed or incomplete evidence packet** — validation must fail before Jev is called and must not create partial confirmatory artifacts.
2. **Previously inspected data mislabeled as confirmation** — deterministic rule must force `FAIL`/promotion blocked even if Jev says the criterion passes with high confidence.
3. **Jev/API outage or response-shape change** — evaluation must preserve existing project status, log a model failure, and block any promotion dependent on the missing adjudication.
4. **Uncalibrated high-confidence model output** — Jev can write advisory results but cannot make gate status authoritative before calibration approval.
5. **Secret/PII leakage into stored raw response** — artifact writer must whitelist metadata and reject obvious secret fields instead of blindly serializing request environment or headers.

---

## File Map

### Tool package

- Create `tools/rigor-adjudicator/package.json` — isolated scripts and dependency manifest.
- Create `tools/rigor-adjudicator/package-lock.json` — generated lockfile; committed for reproducibility.
- Create `tools/rigor-adjudicator/tsconfig.json` — strict TypeScript configuration.
- Create `tools/rigor-adjudicator/.gitignore` — ignore `node_modules/`, coverage, local `.env`, and transient output.
- Create `tools/rigor-adjudicator/README.md` — usage, scientific scope, advisory status, and security rules.
- Create `tools/rigor-adjudicator/src/types.ts` — canonical TypeScript interfaces.
- Create `tools/rigor-adjudicator/src/io.ts` — JSON/JSONL load/write, hashing, canonical serialization.
- Create `tools/rigor-adjudicator/src/schemas.ts` — Ajv schema loading/validation.
- Create `tools/rigor-adjudicator/src/rubrics.ts` — versioned rubric loader.
- Create `tools/rigor-adjudicator/src/deterministic-rules.ts` — hard scientific rules.
- Create `tools/rigor-adjudicator/src/jev-client.ts` — isolated OpenRouter Decisions API client.
- Create `tools/rigor-adjudicator/src/evaluator.ts` — combines packet + rubric + Jev result into evaluation artifact.
- Create `tools/rigor-adjudicator/src/calibration.ts` — accuracy, false-pass/false-fail, Brier, balanced accuracy, per-gate summaries.
- Create `tools/rigor-adjudicator/src/adjudication.ts` — merges deterministic/Jev/human inputs while failing closed.
- Create `tools/rigor-adjudicator/src/verify.ts` — offline integrity verifier.
- Create `tools/rigor-adjudicator/src/cli.ts` — `evaluate`, `calibrate`, `adjudicate`, `verify` commands.

### Tests

- Create `tools/rigor-adjudicator/tests/schemas.test.ts`.
- Create `tools/rigor-adjudicator/tests/deterministic-rules.test.ts`.
- Create `tools/rigor-adjudicator/tests/jev-client.test.ts`.
- Create `tools/rigor-adjudicator/tests/calibration.test.ts`.
- Create `tools/rigor-adjudicator/tests/adjudication.test.ts`.
- Create `tools/rigor-adjudicator/tests/verify.test.ts`.
- Create `tools/rigor-adjudicator/tests/fixtures/` with valid/invalid packets and canned Jev responses.

### Methodology data

- Create `rigor/schemas/evidence-packet.schema.json`.
- Create `rigor/schemas/jev-evaluation.schema.json`.
- Create `rigor/schemas/deterministic-evaluation.schema.json`.
- Create `rigor/schemas/adjudication.schema.json`.
- Create `rigor/schemas/calibration-report.schema.json`.
- Create `rigor/rubrics/v1/G0-scope.json` through `G9-confirmation.json`.
- Create `rigor/rubrics/v1/bridge.json`.
- Create `rigor/rubrics/v1/observer-channel.json`.
- Create `rigor/gold/v1/cases.jsonl`, `labels.jsonl`, and `README.md` with an explicitly advisory seed set and human-review status.
- Create `rigor/evaluations/README.md`.

### Pilot and integration

- Create `analysis/exploratory/V-A-POSS-I/rigor/evidence-packet.json` — first VASCO methodological packet; exploratory until Issue #3 resolves data/holdout facts.
- Create `.github/workflows/rigor-adjudicator.yml` — offline typecheck/test/fixture verification only; no API secret required.
- Modify `README.md` — add a short "Jev methodological adjudication" section beneath Scientific Rigor Gate.
- Modify `SCIENTIFIC_RIGOR_AUDIT.md` — record adjudicator status as methodological infrastructure, not evidence.

---

### Task 1: Scaffold the isolated TypeScript tool

**Files:**
- Create: `tools/rigor-adjudicator/package.json`
- Create: `tools/rigor-adjudicator/tsconfig.json`
- Create: `tools/rigor-adjudicator/.gitignore`
- Create: `tools/rigor-adjudicator/src/types.ts`
- Test: `tools/rigor-adjudicator/tests/schemas.test.ts`

**Interfaces:**
- Produces `GateStatus`, `EvidencePacket`, `Rubric`, `RubricQuestion`, `RuleResult`, `JevCriterionResult`, `JevEvaluation`, `CalibrationReport`, and `Adjudication` interfaces used by every later task.

- [ ] **Step 1: Create package metadata and scripts**

Use ESM and Node 22. Initial `package.json`:

```json
{
  "name": "@regulus/rigor-adjudicator",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "engines": { "node": ">=22 <23" },
  "scripts": {
    "typecheck": "tsc --noEmit",
    "test": "tsx --test tests/**/*.test.ts",
    "rigor": "tsx src/cli.ts"
  },
  "dependencies": {
    "@openrouter/sdk": "1.3.11",
    "ajv": "^8.17.1"
  },
  "devDependencies": {
    "tsx": "^4.20.6",
    "typescript": "^5.9.2"
  }
}
```

Run `npm install` inside `tools/rigor-adjudicator/` and commit the generated lockfile.

- [ ] **Step 2: Create strict TypeScript config**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*.ts", "tests/**/*.ts"]
}
```

- [ ] **Step 3: Define canonical types**

At minimum:

```ts
export type GateStatus = 'PASS' | 'PARTIAL' | 'FAIL' | 'BLOCKED' | 'N/A';
export type CriterionStatus = 'PASS' | 'FAIL' | 'UNCERTAIN' | 'N/A';

export interface EvidencePacket {
  schema_version: '1.0';
  packet_id: string;
  packet_version: number;
  branch_id: string;
  hypothesis_id: string;
  claim: string;
  claim_type: 'descriptive' | 'associational' | 'predictive' | 'causal' | 'mechanistic';
  non_claims: string[];
  evidence_boundary_date: string;
  sources: Array<{
    source_id: string;
    type: 'peer_reviewed' | 'preprint' | 'data' | 'code' | 'review' | 'primary_source' | 'secondary_source';
    citation: string;
    claim_relevance: string;
    limitations: string[];
  }>;
  data: {
    dataset: string;
    version: string | null;
    checksum: string | null;
    discovery_status: 'inspected' | 'uninspected' | 'mixed' | 'unknown';
    confirmation_status: 'untouched' | 'previously_inspected' | 'prospective' | 'results_blind' | 'none' | 'unknown';
    prior_exposure: string;
    preregistration_timestamp: string | null;
    target_exposure_timestamp: string | null;
  };
  design: Record<string, unknown>;
  statistics: Record<string, unknown>;
  rivals: Array<Record<string, unknown>>;
  controls: Array<Record<string, unknown>>;
  known_disagreements: string[];
  attachments: Array<{ path: string; sha256: string }>;
}
```

- [ ] **Step 4: Add the first compile-only test**

Write a fixture typed as `EvidencePacket`; run `npm run typecheck` and `npm test`. Expected: PASS with zero tests failing.

- [ ] **Step 5: Commit**

```bash
git add tools/rigor-adjudicator
git commit -m "feat: scaffold rigor adjudicator tool"
```

---

### Task 2: Add committed schemas and strict validation

**Files:**
- Create: `rigor/schemas/evidence-packet.schema.json`
- Create: `rigor/schemas/jev-evaluation.schema.json`
- Create: `rigor/schemas/deterministic-evaluation.schema.json`
- Create: `rigor/schemas/adjudication.schema.json`
- Create: `rigor/schemas/calibration-report.schema.json`
- Create: `tools/rigor-adjudicator/src/schemas.ts`
- Modify/Test: `tools/rigor-adjudicator/tests/schemas.test.ts`

**Interfaces:**
- Produces `validateEvidencePacket(value: unknown): EvidencePacket` and parallel validators for each artifact type.

- [ ] **Step 1: Write failing validation tests**

Required cases:

```ts
it('rejects a packet with no packet_id', () => { /* expect throw */ });
it('rejects an invalid gate/status enum', () => { /* expect throw */ });
it('rejects additional top-level properties', () => { /* expect throw */ });
it('accepts the canonical valid fixture', () => { /* no throw */ });
```

- [ ] **Step 2: Run tests and confirm failure**

Run `npm test -- --test-name-pattern="packet"`. Expected: failures because validators do not exist.

- [ ] **Step 3: Implement schemas with `additionalProperties: false` at load-bearing levels**

`evidence-packet.schema.json` must require `schema_version`, `packet_id`, `packet_version`, `branch_id`, `hypothesis_id`, `claim`, `claim_type`, `non_claims`, `evidence_boundary_date`, `sources`, `data`, `design`, `statistics`, `rivals`, `controls`, `known_disagreements`, and `attachments`.

- [ ] **Step 4: Implement Ajv loader**

```ts
export function validateEvidencePacket(value: unknown): EvidencePacket {
  if (!validateEvidencePacketSchema(value)) {
    throw new ValidationError('evidence-packet', validateEvidencePacketSchema.errors ?? []);
  }
  return value as EvidencePacket;
}
```

- [ ] **Step 5: Re-run tests and commit**

```bash
npm run typecheck && npm test
git add rigor/schemas tools/rigor-adjudicator/src/schemas.ts tools/rigor-adjudicator/tests/schemas.test.ts
git commit -m "feat: add rigor artifact schemas"
```

---

### Task 3: Freeze versioned G0–G9, bridge, and observer rubrics

**Files:**
- Create: `rigor/rubrics/v1/*.json`
- Create: `tools/rigor-adjudicator/src/rubrics.ts`
- Create: `tools/rigor-adjudicator/tests/rubrics.test.ts`

**Interfaces:**
- Produces `loadRubric(id: string, version='v1'): Rubric` and `loadRubrics(ids: string[]): Rubric[]`.

- [ ] **Step 1: Write failing tests for required rubric IDs and unique question IDs**

Assert the loader finds exactly `G0` through `G9`, `bridge`, and `observer-channel`; reject duplicate question IDs and question IDs absent from the design spec.

- [ ] **Step 2: Create rubric JSON structure**

Each file follows:

```json
{
  "rubric_version": "v1",
  "rubric_id": "G6",
  "title": "Data provenance, discovery, confirmation, preregistration",
  "questions": [
    {
      "id": "prior_exposure_disclosed",
      "type": "noul",
      "instructions": "Does the packet explicitly disclose prior exposure to target data?",
      "criteria": {
        "true": "Prior exposure is explicitly described or explicitly stated to be absent with provenance.",
        "false": "Prior exposure is omitted, ambiguous, or contradicted by the packet."
      },
      "consequential": true
    }
  ]
}
```

Use the question IDs from sections 6–7 of the approved design verbatim.

- [ ] **Step 3: Implement loader and validation**

Loader must reject unknown rubric IDs, mixed rubric versions in one evaluation, and duplicate criterion IDs.

- [ ] **Step 4: Run tests**

Run `npm test -- --test-name-pattern="rubric"`. Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add rigor/rubrics tools/rigor-adjudicator/src/rubrics.ts tools/rigor-adjudicator/tests/rubrics.test.ts
git commit -m "feat: freeze scientific rigor rubrics v1"
```

---

### Task 4: Implement deterministic hard rules before any Jev call

**Files:**
- Create: `tools/rigor-adjudicator/src/deterministic-rules.ts`
- Create: `tools/rigor-adjudicator/tests/deterministic-rules.test.ts`
- Create fixtures under `tools/rigor-adjudicator/tests/fixtures/`

**Interfaces:**
- Produces `runDeterministicRules(packet: EvidencePacket, context: DeterministicContext): DeterministicEvaluation`.

- [ ] **Step 1: Write tests for all eight hard rules**

At minimum include:

```ts
it('blocks untouched confirmation when target was previously inspected', () => {
  const result = runDeterministicRules(packet({
    data: { confirmation_status: 'untouched', discovery_status: 'inspected' }
  }), context());
  assert.equal(result.rules['HR-01'].status, 'FAIL');
  assert.equal(result.promotion_blocked, true);
});

it('rejects preregistration after target exposure', () => { /* timestamps */ });
it('rejects p>=alpha alone as affirmative null evidence', () => { /* statistics flag */ });
it('does not call same-data rerun independent replication', () => { /* design flag */ });
it('blocks bridge evidence inheritance', () => { /* branch B-* */ });
it('blocks direct consciousness promotion from lower rungs', () => { /* C-* claim */ });
it('blocks missing required provenance for confirmatory promotion', () => { /* null version/checksum as applicable */ });
it('marks hard rule as authoritative over model result', () => { /* adjudication fixture */ });
```

- [ ] **Step 2: Run tests and confirm failure**

`npm test -- --test-name-pattern="hard rule"` should fail because implementation does not exist.

- [ ] **Step 3: Implement pure deterministic rules**

Rules must be side-effect free. Each `RuleResult` records `rule_id`, `status`, `authoritative: true`, `rationale`, and `affected_gate_ids`.

- [ ] **Step 4: Run full test suite**

`npm run typecheck && npm test`. Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add tools/rigor-adjudicator/src/deterministic-rules.ts tools/rigor-adjudicator/tests
git commit -m "feat: enforce deterministic scientific hard rules"
```

---

### Task 5: Add immutable I/O, hashing, and safe artifact writing

**Files:**
- Create: `tools/rigor-adjudicator/src/io.ts`
- Create: `tools/rigor-adjudicator/tests/io.test.ts`

**Interfaces:**
- Produces `sha256Json(value)`, `readJson(path)`, `readJsonl(path)`, `writeJsonAtomic(path, value)`, and `sanitizeProviderMetadata(value)`.

- [ ] **Step 1: Write failing tests**

Cover stable hash regardless of object-key insertion order, atomic write behavior, rejection of `.env`/secret-looking fields in stored provider metadata, and JSONL parse failure with line number.

- [ ] **Step 2: Implement canonical serialization**

Use recursively sorted object keys before hashing; arrays retain order.

```ts
export function sha256Json(value: unknown): string {
  return createHash('sha256').update(canonicalJson(value)).digest('hex');
}
```

- [ ] **Step 3: Implement metadata whitelist**

Persist only provider/model/request identifiers, usage fields, timestamps, and response metadata explicitly returned by the Decisions API. Never serialize process environment or request headers.

- [ ] **Step 4: Verify tests and commit**

```bash
npm run typecheck && npm test
git add tools/rigor-adjudicator/src/io.ts tools/rigor-adjudicator/tests/io.test.ts
git commit -m "feat: add immutable rigor artifact IO"
```

---

### Task 6: Integrate pinned Jev 1.13 through OpenRouter Decisions API

**Files:**
- Create: `tools/rigor-adjudicator/src/jev-client.ts`
- Create: `tools/rigor-adjudicator/src/evaluator.ts`
- Create: `tools/rigor-adjudicator/tests/jev-client.test.ts`
- Create: `tools/rigor-adjudicator/tests/evaluator.test.ts`

**Interfaces:**
- Produces `createJevClient(options)` and `evaluateWithJev(packet, rubrics, client, provenance): Promise<JevEvaluation>`.
- Accept an injectable transport/client so unit tests never require network access.

- [ ] **Step 1: Write a test that asserts the exact model and API request shape**

The canned transport must observe:

```ts
{
  decisionsRequest: {
    model: 'typesafe/jev-1.13',
    state: {
      description: 'Project REGULUS methodological evidence packet',
      records: [{ id: packet.packet_id, record: packet }]
    },
    questions: expect.any(Object)
  }
}
```

- [ ] **Step 2: Write an outage test**

When the transport throws, `evaluateWithJev` must return/write a model-error artifact with `promotion_eligible: false`; it must not fabricate criterion answers.

- [ ] **Step 3: Implement the isolated OpenRouter client**

```ts
const openrouter = new OpenRouter({ apiKey });
const response = await openrouter.alpha.decisions.create({
  decisionsRequest: request
});
```

Reject startup without `OPENROUTER_API_KEY` only for commands that actually call Jev; offline `verify` and `calibrate` over existing results must still work.

- [ ] **Step 4: Normalize Jev answers**

Map `noul`, `choice`, and `score` response forms into explicit criterion records including returned probabilities. Preserve the raw response body only after metadata sanitization.

- [ ] **Step 5: Run tests and commit**

```bash
npm run typecheck && npm test
git add tools/rigor-adjudicator/src/jev-client.ts tools/rigor-adjudicator/src/evaluator.ts tools/rigor-adjudicator/tests
git commit -m "feat: integrate pinned Jev decisions client"
```

---

### Task 7: Implement calibration metrics and advisory-authority boundary

**Files:**
- Create: `tools/rigor-adjudicator/src/calibration.ts`
- Create: `tools/rigor-adjudicator/tests/calibration.test.ts`
- Create: `rigor/gold/v1/cases.jsonl`
- Create: `rigor/gold/v1/labels.jsonl`
- Create: `rigor/gold/v1/README.md`

**Interfaces:**
- Produces `calculateCalibration(cases, labels, evaluations): CalibrationReport`.

- [ ] **Step 1: Write metric tests with hand-calculable fixtures**

For four binary cases with labels `[1,1,0,0]` and probabilities `[0.9,0.6,0.4,0.1]`, assert Brier score `0.085` and zero false passes at threshold `0.8`. Add a second fixture that includes both a false pass and false fail.

- [ ] **Step 2: Implement required metrics**

Report decisive-case accuracy, balanced accuracy, false-pass rate, false-fail rate, Brier score, per-rubric counts, confidence buckets, and disagreement rate.

- [ ] **Step 3: Enforce no production threshold before approval**

`CalibrationReport` includes:

```ts
{
  authority_status: 'ADVISORY_ONLY' | 'CALIBRATED_APPROVED';
  threshold_policy: null | { pass: number; escalate_below: number };
  gold_case_count: number;
  human_reviewed_case_count: number;
}
```

The code must refuse `CALIBRATED_APPROVED` when `human_reviewed_case_count < 150`.

- [ ] **Step 4: Add a transparent seed gold set**

Create at least 30 seed atomic cases spanning: obvious pass/fail, discovery/confirmation leakage, HARKing, invalid null interpretation, pseudoreplication, evidence inheritance, causal overclaim, bridge misuse, observer-channel overclaim, and adversarial wording. Every label includes `label`, `rationale`, `review_status`, and optional `hard_rule_id`.

Mark all initial labels `review_status: "MODEL_DRAFT_REQUIRES_HUMAN_REVIEW"`; therefore the system remains advisory. Do not pretend these are a calibrated human gold set.

- [ ] **Step 5: Run calibration on a canned Jev-evaluation fixture and commit**

```bash
npm run typecheck && npm test
npm run rigor -- calibrate ../../rigor/gold/v1 --evaluations tests/fixtures/gold-evaluations.jsonl
git add tools/rigor-adjudicator/src/calibration.ts tools/rigor-adjudicator/tests/calibration.test.ts rigor/gold/v1
git commit -m "feat: add transparent Jev calibration framework"
```

---

### Task 8: Merge deterministic and Jev results into fail-closed adjudication

**Files:**
- Create: `tools/rigor-adjudicator/src/adjudication.ts`
- Create: `tools/rigor-adjudicator/tests/adjudication.test.ts`

**Interfaces:**
- Produces `adjudicate(input: AdjudicationInput): Adjudication`.

- [ ] **Step 1: Write conflict tests**

Required cases:

```ts
it('hard-rule fail beats Jev 0.99 pass', () => { /* final FAIL, promotion blocked */ });
it('uncalibrated Jev cannot produce authoritative PASS', () => { /* final PARTIAL or escalation */ });
it('missing Jev on required criterion blocks promotion but preserves prior project status', () => {});
it('promotion to CONFIRMATION-READY always requires human review', () => {});
```

- [ ] **Step 2: Implement precedence**

Use explicit precedence:

```text
hard-rule FAIL
  > missing mandatory evidence / BLOCKED
  > required human-review unresolved
  > calibrated criterion result
  > advisory Jev result
```

Never derive `PASS` by averaging probabilities.

- [ ] **Step 3: Emit disagreement records**

Each disagreement stores criterion ID, channel results, consequential flag, escalation reason, and resolution status.

- [ ] **Step 4: Run tests and commit**

```bash
npm run typecheck && npm test
git add tools/rigor-adjudicator/src/adjudication.ts tools/rigor-adjudicator/tests/adjudication.test.ts
git commit -m "feat: add fail-closed rigor adjudication"
```

---

### Task 9: Build CLI and offline verifier

**Files:**
- Create: `tools/rigor-adjudicator/src/verify.ts`
- Create: `tools/rigor-adjudicator/src/cli.ts`
- Create: `tools/rigor-adjudicator/tests/verify.test.ts`
- Create: `rigor/evaluations/README.md`

**Interfaces:**
- CLI commands exactly: `evaluate`, `calibrate`, `adjudicate`, `verify`.

- [ ] **Step 1: Write verifier tests**

`verify` must detect packet-hash mismatch, wrong model ID, mixed rubric version, missing expected artifact, unresolved consequential disagreement, and a hard-rule failure incorrectly marked promotion-eligible.

- [ ] **Step 2: Implement CLI using Node `parseArgs`**

Expected usage:

```bash
npm run rigor -- evaluate ../../analysis/exploratory/V-A-POSS-I/rigor/evidence-packet.json --rubric G6
npm run rigor -- evaluate <packet> --all
npm run rigor -- calibrate ../../rigor/gold/v1 --evaluations <path>
npm run rigor -- adjudicate <evaluation-directory>
npm run rigor -- verify <evaluation-directory>
```

- [ ] **Step 3: Make `verify` entirely offline**

It must not instantiate `OpenRouter` or read `OPENROUTER_API_KEY`.

- [ ] **Step 4: Add exit codes**

Use `0` for structurally valid/advisory-complete, `2` for validation/integrity failure, `3` for unresolved promotion-blocking conditions, and `4` for Jev/API failure during `evaluate`.

- [ ] **Step 5: Run CLI tests and commit**

```bash
npm run typecheck && npm test
git add tools/rigor-adjudicator/src/cli.ts tools/rigor-adjudicator/src/verify.ts tools/rigor-adjudicator/tests/verify.test.ts rigor/evaluations/README.md
git commit -m "feat: add rigor adjudicator CLI and verifier"
```

---

### Task 10: Create the first VASCO/POSS-I evidence packet as an exploratory pilot

**Files:**
- Create: `analysis/exploratory/V-A-POSS-I/rigor/evidence-packet.json`
- Create: `analysis/exploratory/V-A-POSS-I/rigor/README.md`
- Test/verify with CLI.

**Interfaces:**
- Packet must validate under `evidence-packet.schema.json` and explicitly preserve unresolved Issue #3 items rather than filling them with guesses.

- [ ] **Step 1: Populate only facts already established in repository evidence**

Use `CLAIM_LEDGER.md`, `ADVERSARIAL_EVIDENCE.md`, `SCIENTIFIC_RIGOR_AUDIT.md`, and `PEER_REVIEW_ROADMAP.md`. Include the supportive and critical VASCO literature already tracked there.

- [ ] **Step 2: Encode unresolved data/holdout facts explicitly**

Until Issue #3 is resolved:

```json
{
  "version": null,
  "checksum": null,
  "confirmation_status": "unknown",
  "prior_exposure": "Existing published and repository analyses mean the original inspected material cannot automatically be treated as untouched confirmation."
}
```

Do not invent a holdout.

- [ ] **Step 3: Run deterministic evaluation and offline validation**

Expected result: no false `CONFIRMATION-READY`; G6 should remain partial/failing/blocking according to the missing provenance/holdout fields.

- [ ] **Step 4: If `OPENROUTER_API_KEY` is available, run Jev advisory evaluation**

Archive the resulting Jev artifact under the pilot directory. If the key is unavailable, commit the validated packet and deterministic results only; missing Jev is an explicit pilot limitation, not a reason to fabricate output.

- [ ] **Step 5: Commit**

```bash
git add analysis/exploratory/V-A-POSS-I/rigor
git commit -m "test: add VASCO rigor adjudication pilot"
```

---

### Task 11: Add documentation and CI without creating scientific authority

**Files:**
- Create: `tools/rigor-adjudicator/README.md`
- Create: `.github/workflows/rigor-adjudicator.yml`
- Modify: `README.md`
- Modify: `SCIENTIFIC_RIGOR_AUDIT.md`

**Interfaces:**
- CI runs only reproducible offline checks; it never requires or receives the OpenRouter key.

- [ ] **Step 1: Add tool README**

State prominently:

> Jev adjudication improves consistency of methodological judgments. It does not create evidence, estimate whether Project REGULUS is true, or replace human/expert review.

Document setup, commands, artifact layout, advisory/calibrated states, and gold-set review requirements.

- [ ] **Step 2: Add GitHub Actions workflow**

Workflow uses Node 22, `npm ci`, `npm run typecheck`, and `npm test` from `tools/rigor-adjudicator`. Do not expose repository secrets.

- [ ] **Step 3: Update project README**

Add a concise section beneath Scientific Rigor Gate showing:

```text
Evidence packet
  -> deterministic hard rules
  -> Jev atomic adjudication (advisory until calibrated)
  -> disagreement/human review
  -> existing non-numeric G0-G9 gate status
```

- [ ] **Step 4: Update Scientific Rigor Audit**

Record the adjudicator as methodological infrastructure. It must not upgrade any branch status merely because the tool exists.

- [ ] **Step 5: Run full offline verification and commit**

```bash
cd tools/rigor-adjudicator
npm ci
npm run typecheck
npm test
npm run rigor -- verify ../../analysis/exploratory/V-A-POSS-I/rigor
git add ../../README.md ../../SCIENTIFIC_RIGOR_AUDIT.md ../../.github/workflows/rigor-adjudicator.yml README.md
git commit -m "docs: integrate Jev rigor adjudication workflow"
```

---

### Task 12: Final branch verification and scientific acceptance check

**Files:**
- No new files unless verification exposes a defect.

**Interfaces:**
- Demonstrates every implementation acceptance criterion in the approved design.

- [ ] **Step 1: Run clean install verification**

```bash
cd tools/rigor-adjudicator
rm -rf node_modules
npm ci
npm run typecheck
npm test
```

Expected: exit 0 for all commands.

- [ ] **Step 2: Verify the VASCO pilot offline**

```bash
npm run rigor -- verify ../../analysis/exploratory/V-A-POSS-I/rigor
```

Expected: structurally valid artifacts; promotion remains blocked/advisory where unresolved scientific prerequisites exist.

- [ ] **Step 3: Prove the hard-rule override regression**

Run the dedicated test whose Jev fixture says `untouched_confirmation = YES` with probability `0.99` while the packet records prior inspection. Expected final adjudication: `FAIL` and `promotion_blocked: true`.

- [ ] **Step 4: Prove no global truth score exists**

Search source and generated schemas for forbidden output keys such as `regulus_probability`, `theory_probability`, `controller_probability`, or `truth_score`; test must fail if any such field is introduced.

- [ ] **Step 5: Compare implementation against all 15 acceptance criteria in the design**

Record pass/fail evidence in the PR description. Any unmet criterion remains explicit; do not call implementation complete if a criterion is only planned.

- [ ] **Step 6: Whole-branch review**

Review the final diff specifically for scientific overclaim, hidden thresholds, rubric drift, API-version drift, secret leakage, and any path that could promote a branch without human/expert review.

- [ ] **Step 7: Merge only after verification evidence is attached to the PR**

Use squash merge after the branch is clean and all offline tests pass. A live Jev smoke test is useful if the key is available, but lack of network credentials must not weaken offline integrity guarantees.

---

## Follow-on calibration work before Jev can become authoritative

The implementation above deliberately ships Jev in `ADVISORY_ONLY` mode. Moving to `CALIBRATED_APPROVED` is a separate scientific-governance event, not a code toggle.

Before authority can change:

1. Expand the seed gold set to at least 150 atomic cases.
2. Have those cases reviewed by humans with relevant methodology/statistics expertise; replace `MODEL_DRAFT_REQUIRES_HUMAN_REVIEW` with documented review status.
3. Run Jev 1.13 across the frozen set.
4. Publish false-pass rate, false-fail rate, Brier score, balanced accuracy, per-gate performance, and ambiguous-case behavior.
5. Freeze any uncertainty/escalation thresholds from those observed results rather than choosing them in advance.
6. Re-run the hard-rule conflict suite.
7. Require explicit human approval of the calibration report before `authority_status` can become `CALIBRATED_APPROVED`.
8. Recalibrate from scratch before any future Jev model upgrade.

This follow-on is intentionally required because a repeatable evaluator that has not been calibrated against reviewed cases is not yet a scientific quality gate.