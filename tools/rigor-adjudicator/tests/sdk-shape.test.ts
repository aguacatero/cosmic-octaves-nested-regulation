import assert from 'node:assert/strict';
import { test } from 'node:test';
import { OpenRouter } from '@openrouter/sdk';

test('pinned OpenRouter SDK exposes alpha.decisions.create',()=>{
  const client = new OpenRouter({apiKey:'test-only-not-used'});
  assert.equal(typeof client.alpha?.decisions?.create,'function');
});
