#!/usr/bin/env node
/* Fresh-decode corpus validator (v7.6.0/v7.9.0).
   Loads the app script in a VM sandbox (same harness idea as phase1-audit.js) and
   validates FRESH_DECODE / ASSESSMENT_BANK / RETENTION_DECODE_BANK entries with the app's own gating code:
   - NFC + monosyllable + gate range l4-l24
   - decodable + prerequisite-safe at its own gate (visible glyphs, vowel patterns, mechanisms)
   - tone verified by route derivation (class x mark x live/dead x length) against the tr diacritic
   - zero overlap with ANY Thai token already present in index.html outside the three corpora
   - per-gate supply floors and pool sizes
   Modes:
     node tools/fresh-decode-check.js                 -> validate embedded corpora in index.html
     node tools/fresh-decode-check.js --inventory     -> dump per-lesson taught glyph/pattern inventory
     node tools/fresh-decode-check.js --candidates f  -> validate candidate JSON {A:[...],B:[...],C:[...]} before embedding */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const INDEX = path.join(ROOT, 'index.html');

function appScript(html){
  const match = html.match(/<script>([\s\S]*)<\/script>/);
  if(!match) throw new Error('script block not found');
  return match[1].replace(/\n\(async function init\(\)\{[\s\S]*?\n\}\)\(\);\s*$/, '\n/* init skipped for corpus check */\n');
}
function stubElement(){
  return {
    style:{}, dataset:{},
    classList:{add(){}, remove(){}, toggle(){}, contains(){ return false; }},
    addEventListener(){}, removeEventListener(){},
    querySelector(){ return stubElement(); }, querySelectorAll(){ return []; },
    setAttribute(){}, appendChild(){}, focus(){}, click(){},
    innerHTML:'', textContent:'', value:'', checked:false, disabled:false
  };
}
function sandbox(){
  const doc = {
    body:{style:{}, classList:{add(){}, remove(){}, toggle(){}}},
    documentElement:{style:{}},
    addEventListener(){}, removeEventListener(){},
    getElementById(){ return stubElement(); },
    querySelector(){ return stubElement(); }, querySelectorAll(){ return []; },
    createElement(){ return stubElement(); }
  };
  const box = {
    console, setTimeout, clearTimeout, Date, Math, JSON, RegExp,
    navigator:{}, location:{protocol:'http:'}, document:doc,
    addEventListener(){}, removeEventListener(){},
    localStorage:{getItem(){ return null; }, setItem(){}, removeItem(){}},
    speechSynthesis:{cancel(){}, resume(){}, speak(){}, getVoices(){ return []; }},
    SpeechSynthesisUtterance:function(){},
    window:null
  };
  box.window = box; box.globalThis = box;
  return box;
}

/* Thai tokens present anywhere in the file OUTSIDE the three corpus arrays. */
function corpusStrippedHtml(html){
  return html
    .replace(/const FRESH_DECODE = \[[\s\S]*?\n\];/, 'const FRESH_DECODE = [];')
    .replace(/const ASSESSMENT_BANK = \[[\s\S]*?\n\];/, 'const ASSESSMENT_BANK = [];')
    .replace(/const RETENTION_DECODE_BANK = \[[\s\S]*?\n\];/, 'const RETENTION_DECODE_BANK = [];');
}
function thaiTokensIn(text){
  return [...new Set(String(text).normalize('NFC').match(/[฀-๿]+/g) || [])];
}

/* This snippet runs INSIDE the app context so it can use the app's own functions. */
const IN_CONTEXT = `
globalThis.__freshCheck = function(mode, payload){
  const seenTokens = new Set(payload.seenTokens || []);
  function idsThroughGateNum(n){ return LESSONS.filter(L=>lessonNum(L.id) <= n).map(L=>L.id); }
  function routeFor(item){
    const w = Object.assign({}, item);
    if(!monoSyllable(w)) return {error:'not a monosyllable tr'};
    const cls = firstConsonantClass(w.thai);
    const initial = firstConsonantChar(w.thai);
    const mark = (w.thai.match(/[\\u0E48\\u0E49\\u0E4A\\u0E4B]/) || [''])[0];
    const liveDead = inferLiveDeadForDecode(w.thai, null);
    const needsLength = !mark && cls === 'low' && liveDead === 'Dead';
    const length = needsLength ? (/[\\u0E30\\u0E31\\u0E34\\u0E36\\u0E38\\u0E47]/.test(w.thai) ? 'Short' : 'Long') : 'not needed';
    const tone = toneOf(item.tr);
    const expected = expectedToneFromRoute(cls, mark, liveDead, length);
    if(!initial || !cls) return {error:'no initial consonant class'};
    if(!expected) return {error:'route gives no tone (class ' + cls + ' mark ' + (mark||'none') + ')'};
    if(expected !== tone) return {error:'route says ' + expected + ' but tr reads ' + tone + ' (' + cls + '/' + (mark||'no mark') + '/' + liveDead + '/' + length + ')'};
    return {ok:true, cls, mark, liveDead, length, tone};
  }
  function validateEntry(item){
    const errs = [];
    const thai = String(item.thai || '');
    if(thai.normalize('NFC') !== thai) errs.push('not NFC');
    if(!item.tr) errs.push('missing tr');
    if(item.tr && item.tr.normalize('NFC') !== item.tr) errs.push('tr not NFC');
    const gateN = lessonNum(item.gate);
    if(!(gateN >= 4 && gateN <= 24)) errs.push('gate out of range l4-l24: ' + item.gate);
    if(seenTokens.has(thai)) errs.push('already appears in app content (not fresh)');
    if(isLessonWord(thai)) errs.push('is a lesson word');
    if(DECODE_GYM.some(g=>g.thai === thai)) errs.push('is a Decode Gym word');
    if(gateN >= 4 && gateN <= 24){
      const ids = idsThroughGateNum(gateN);
      if(!thaiTextReadable(thai, taughtGlyphSet(ids))) errs.push('not decodable at ' + item.gate);
      if(!thaiItemPrereqsMet(thai, ids, null)) errs.push('prerequisite leak at ' + item.gate + ': ' + prerequisiteIssuesForThai(thai, ids, 'corpus').map(i=>i.missing.join(',')).join('; '));
    }
    const route = routeFor(item);
    if(!route.ok) errs.push('tone route: ' + route.error);
    return errs;
  }
  if(mode === 'inventory'){
    return LESSONS.map(L=>{
      const n = lessonNum(L.id);
      return L.id + ' | new: ' + (L.glyphs||[]).join(' ') +
        (L.classOnlyGlyphs ? ' | classOnly: ' + L.classOnlyGlyphs.join(' ') : '') +
        (n === 24 ? '\\nALL taught ids: ' + [...taughtGlyphIdSet(idsThroughGateNum(24))].join(' ') : '');
    }).join('\\n');
  }
  const A = payload.A != null ? payload.A : (typeof FRESH_DECODE !== 'undefined' ? FRESH_DECODE : null);
  const B = payload.B != null ? payload.B : (typeof ASSESSMENT_BANK !== 'undefined' ? ASSESSMENT_BANK : null);
  const C = payload.C != null ? payload.C : (typeof RETENTION_DECODE_BANK !== 'undefined' ? RETENTION_DECODE_BANK : null);
  if(!A || !B || !C) return {errors:['FRESH_DECODE / ASSESSMENT_BANK / RETENTION_DECODE_BANK not found; pass --candidates file.json']};
  const errors = [];
  const all = new Map();
  [['FRESH_DECODE', A], ['ASSESSMENT_BANK', B], ['RETENTION_DECODE_BANK', C]].forEach(pair=>{
    const name = pair[0], pool = pair[1];
    pool.forEach(item=>{
      const key = String(item.thai).normalize('NFC');
      if(all.has(key)) errors.push(name + ':' + key + ' duplicated (first in ' + all.get(key) + ')');
      all.set(key, name);
      validateEntry(item).forEach(e=>errors.push(name + ':' + item.thai + ' ' + e));
    });
  });
  if(A.length !== 120) errors.push('FRESH_DECODE should have exactly 120 entries, has ' + A.length);
  if(B.length !== 56) errors.push('ASSESSMENT_BANK should have exactly 56 entries, has ' + B.length);
  if(C.length !== 96) errors.push('RETENTION_DECODE_BANK should have exactly 96 entries, has ' + C.length);
  const aAtGate = n=>A.filter(x=>lessonNum(x.gate) <= n).length;
  if(A.filter(x=>lessonNum(x.gate) === 4).length < 10) errors.push('FRESH_DECODE needs >=10 words at gate l4');
  for(let n=4;n<=24;n++){
    const floor = Math.min(120, 10 + (n-4)*4);
    if(aAtGate(n) < floor) errors.push('FRESH_DECODE cumulative supply thin at l' + n + ': ' + aAtGate(n) + ' < ' + floor);
  }
  for(let w=0;w<7;w++){
    const lo = 4 + w*3, hi = Math.min(24, lo+2);
    const count = B.filter(x=>{ const n = lessonNum(x.gate); return n >= lo && n <= hi; }).length;
    if(count < 8) errors.push('ASSESSMENT_BANK window l' + lo + '-l' + hi + ' has ' + count + ' words, needs >=8');
  }
  for(let n=4;n<=24;n++){
    ['retained','stabilised'].forEach(stage=>{
      const count = C.filter(x=>lessonNum(x.gate) === n && x.stage === stage).length;
      if(count !== 2) errors.push('RETENTION_DECODE_BANK l' + n + ' ' + stage + ' needs exactly 2 words, has ' + count);
    });
  }
  const cold = C.filter(x=>x.stage === 'cold30');
  if(cold.length !== 12 || cold.some(x=>lessonNum(x.gate) !== 24)) errors.push('RETENTION_DECODE_BANK needs exactly 12 l24 cold30 words');
  if(C.some(x=>!['retained','stabilised','cold30'].includes(x.stage))) errors.push('RETENTION_DECODE_BANK has an invalid stage');
  return {errors, counts:{A:A.length, B:B.length, C:C.length}};
};
`;

function main(){
  const html = fs.readFileSync(INDEX, 'utf8');
  const box = sandbox();
  vm.createContext(box);
  vm.runInContext(appScript(html) + IN_CONTEXT, box, {filename:'index-app.js'});
  if(process.argv.includes('--inventory')){
    console.log(box.__freshCheck('inventory', {}));
    return;
  }
  const payload = {seenTokens:thaiTokensIn(corpusStrippedHtml(html))};
  const cIdx = process.argv.indexOf('--candidates');
  if(cIdx > -1){
    const data = JSON.parse(fs.readFileSync(process.argv[cIdx+1], 'utf8'));
    payload.A = data.A; payload.B = data.B; payload.C = data.C;
  }
  const result = box.__freshCheck('validate', payload);
  if(result.errors.length){
    console.error('FRESH-DECODE CORPUS CHECK FAILED (' + result.errors.length + '):');
    result.errors.forEach(e=>console.error('  ' + e));
    process.exit(1);
  }
  console.log('fresh-decode corpus check OK: ' + result.counts.A + ' fresh + ' + result.counts.B + ' assessment + ' + result.counts.C + ' retention words verified (tone route, decodability, prerequisites, freshness, supply floors).');
}
main();
