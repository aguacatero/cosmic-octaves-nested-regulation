import assert from 'node:assert/strict';
import { test } from 'node:test';
import { buildDecisionRequest, createJevClient } from '../src/jev-client.js';
import { validPacket } from './fixtures/packet.js';
import { loadRubric } from '../src/rubrics.js';

test('uses pinned Jev model and Decisions request shape', async () => {
  let seen: any;
  const client = createJevClient({
    transport: async (request: any) => {
      seen = request;
      return {
        answers: { prior_exposure_disclosed: { type: 'noul', noul: 0.9 } },
        id: 'r1',
      };
    },
  });

  await client.decide(buildDecisionRequest(validPacket, [loadRubric('G6')]));

  assert.equal(seen.decisionsRequest.model, 'typesafe/jev-1.13');
  assert.equal(seen.decisionsRequest.state.records[0].id, 'X-1');
  assert.deepEqual(seen.decisionsRequest.questions.prior_exposure_disclosed.criteria, {
    true: 'The evidence packet explicitly and adequately satisfies this criterion.',
    false: 'The criterion is absent, ambiguous, contradicted, or inadequate.',
  });
});
