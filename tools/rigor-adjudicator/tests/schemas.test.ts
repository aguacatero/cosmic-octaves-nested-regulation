import assert from 'node:assert/strict'; import { test } from 'node:test'; import { validateEvidencePacket } from '../src/schemas.js'; import { validPacket } from './fixtures/packet.js';
test('accepts canonical packet',()=>assert.equal(validateEvidencePacket(validPacket).packet_id,'X-1'));
test('rejects packet with no packet_id',()=>{const x={...validPacket} as any; delete x.packet_id; assert.throws(()=>validateEvidencePacket(x));});
test('rejects additional top-level properties',()=>assert.throws(()=>validateEvidencePacket({...validPacket,surprise:true} as any)));
test('rejects invalid claim type',()=>assert.throws(()=>validateEvidencePacket({...validPacket,claim_type:'truth'} as any)));
test('rejects malformed nested data enum',()=>assert.throws(()=>validateEvidencePacket({...validPacket,data:{...validPacket.data,confirmation_status:'invented'}} as any)));
test('rejects extra nested data property',()=>assert.throws(()=>validateEvidencePacket({...validPacket,data:{...validPacket.data,secret:'x'}} as any)));
