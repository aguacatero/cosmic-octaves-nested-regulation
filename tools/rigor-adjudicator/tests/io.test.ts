import assert from 'node:assert/strict'; import { test } from 'node:test'; import { sha256Json, sanitizeProviderMetadata } from '../src/io.js';
test('stable hash ignores object key insertion order',()=>assert.equal(sha256Json({a:1,b:2}),sha256Json({b:2,a:1})));
test('provider metadata whitelist drops secrets',()=>{const x=sanitizeProviderMetadata({id:'r1',usage:{tokens:1},authorization:'Bearer secret',api_key:'x'} as any); assert.equal('authorization' in x,false); assert.equal('api_key' in x,false);});
