import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluateWithJev } from '../src/evaluator.js';
import { validPacket } from './fixtures/packet.js';
import { loadRubric } from '../src/rubrics.js';

test('Jev outage returns model-error and cannot promote', async () => {
  const client = { decide: async () => { throw new Error('offline'); } } as any;
  const result = await evaluateWithJev(validPacket, [loadRubric('G6')], client, { code_commit_sha: 'abc' });
  assert.equal(result.status, 'MODEL_ERROR');
  assert.equal(result.promotion_eligible, false);
  assert.equal(result.criteria.length, 0);
});

test('parses Noul as the returned yes probability without inventing a PASS threshold', async () => {
  const client = {
    decide: async () => ({
      model: 'typesafe/jev-1.13-20260917',
      answers: {
        prior_exposure_disclosed: { type: 'noul', noul: 0.99 },
      },
      usage: { input_tokens: 100, output_tokens: 20 },
      id: 'decision-1',
      provider: 'TypeSafe',
    }),
  } as any;

  const result = await evaluateWithJev(validPacket, [loadRubric('G6')], client, { code_commit_sha: 'abc' });
  assert.equal(result.status, 'OK');
  assert.equal(result.criteria[0]?.probability, 0.99);
  assert.equal(result.criteria[0]?.status, 'UNCERTAIN');
  assert.equal(result.provider_metadata.model, 'typesafe/jev-1.13-20260917');
  assert.equal(result.promotion_eligible, false);
});
