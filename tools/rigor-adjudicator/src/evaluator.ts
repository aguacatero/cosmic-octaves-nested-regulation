import type { EvidencePacket, Rubric, JevEvaluation, JevCriterionResult } from './types.js';
import type { JevClient } from './jev-client.js';
import { buildDecisionRequest } from './jev-client.js';
import { sha256Json, sanitizeProviderMetadata } from './io.js';

function normalizeCriterion(id: string, value: any): JevCriterionResult {
  // No PASS/FAIL threshold is applied in Plan 1. The raw typed Jev answer and
  // its probability are evidence for later calibration, not an authoritative status.
  if (value?.type === 'noul' && typeof value.noul === 'number') {
    return {
      criterion_id: id,
      status: 'UNCERTAIN',
      probability: value.noul,
      answer: value,
    };
  }

  if (value?.type === 'choice') {
    const selectedProbability =
      typeof value.choice === 'string' && typeof value.probabilities?.[value.choice] === 'number'
        ? value.probabilities[value.choice]
        : null;
    return {
      criterion_id: id,
      status: 'UNCERTAIN',
      probability: selectedProbability,
      answer: value,
    };
  }

  if (value?.type === 'score') {
    return {
      criterion_id: id,
      status: 'UNCERTAIN',
      probability: null,
      answer: value,
    };
  }

  return {
    criterion_id: id,
    status: 'UNCERTAIN',
    probability: null,
    answer: value,
  };
}

export async function evaluateWithJev(
  packet: EvidencePacket,
  rubrics: Rubric[],
  client: JevClient,
  provenance: { code_commit_sha: string },
): Promise<JevEvaluation> {
  const base = {
    schema_version: '1.0' as const,
    packet_id: packet.packet_id,
    model_id: 'typesafe/jev-1.13' as const,
    rubric_version: rubrics[0]?.rubric_version ?? 'v1',
    packet_sha256: sha256Json(packet),
    promotion_eligible: false as const,
  };

  try {
    const raw = await client.decide(buildDecisionRequest(packet, rubrics));
    const answers = raw.answers ?? {};
    const criteria = Object.entries(answers as Record<string, unknown>).map(([id, value]) =>
      normalizeCriterion(id, value),
    );

    return {
      ...base,
      status: 'OK',
      criteria,
      provider_metadata: {
        ...sanitizeProviderMetadata(raw),
        code_commit_sha: provenance.code_commit_sha,
      },
    };
  } catch (error) {
    return {
      ...base,
      status: 'MODEL_ERROR',
      criteria: [],
      provider_metadata: { code_commit_sha: provenance.code_commit_sha },
      error: error instanceof Error ? error.message : String(error),
    };
  }
}
