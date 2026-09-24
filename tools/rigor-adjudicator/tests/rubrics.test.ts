import assert from 'node:assert/strict'; import { test } from 'node:test'; import { loadRubric, loadRubrics } from '../src/rubrics.js';
test('loads all required rubrics',()=>{const ids=['G0','G1','G2','G3','G4','G5','G6','G7','G8','G9','bridge','observer-channel']; assert.equal(loadRubrics(ids).length,12);});
test('rejects unknown rubric',()=>assert.throws(()=>loadRubric('G99')));
test('question IDs are unique',()=>{const r=loadRubric('G6'); assert.equal(new Set(r.questions.map(q=>q.id)).size,r.questions.length);});
