import { createHash } from 'node:crypto'; import { readFileSync, writeFileSync, renameSync, mkdirSync } from 'node:fs'; import { dirname } from 'node:path';
function canonical(v:unknown):unknown { if(Array.isArray(v)) return v.map(canonical); if(v&&typeof v==='object'){ const out:Record<string,unknown>={}; for(const k of Object.keys(v as any).sort()) out[k]=canonical((v as any)[k]); return out;} return v; }
export function canonicalJson(v:unknown):string { return JSON.stringify(canonical(v)); }
export function sha256Json(v:unknown):string { return createHash('sha256').update(canonicalJson(v)).digest('hex'); }
export function readJson(path:string):unknown { return JSON.parse(readFileSync(path,'utf8')); }
export function readJsonl(path:string):unknown[] { return readFileSync(path,'utf8').split(/\r?\n/).filter(Boolean).map((line:string,i:number)=>{ try{return JSON.parse(line)}catch{throw new Error(`Invalid JSONL at line ${i+1}`)} }); }
export function writeJsonAtomic(path:string,value:unknown):void { mkdirSync(dirname(path),{recursive:true}); const tmp=`${path}.tmp-${process.pid}`; writeFileSync(tmp,JSON.stringify(value,null,2)+'\n'); renameSync(tmp,path); }
export function sanitizeProviderMetadata(value:Record<string,unknown>):Record<string,unknown> { const allow=new Set(['id','request_id','provider','model','usage','created','created_at','timestamp','finish_reason','latency_ms']); const out:Record<string,unknown>={}; for(const [k,v] of Object.entries(value??{})) if(allow.has(k)) out[k]=v; return out; }
