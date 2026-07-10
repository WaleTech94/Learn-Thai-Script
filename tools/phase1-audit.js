#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const INDEX = path.join(ROOT, 'index.html');
const DOCS_DIR = path.join(ROOT, 'docs');
const JSON_OUT = path.join(DOCS_DIR, 'phase1_audit.json');
const MD_OUT = path.join(DOCS_DIR, 'phase1_audit.md');

function indexHtml(){
  return fs.readFileSync(INDEX, 'utf8');
}

function appVersionFromHtml(html){
  const match = html.match(/<span class="version-pill">[^<]*(v\d+\.\d+\.\d+)[^<]*<\/span>/);
  return match ? match[1] : null;
}

function appScript(html){
  const match = html.match(/<script>([\s\S]*)<\/script>/);
  if(!match) throw new Error('script block not found');
  return match[1].replace(/\n\(async function init\(\)\{[\s\S]*?\n\}\)\(\);\s*$/, '\n/* init skipped for phase1 audit */\n');
}

function seededRandom(seedText){
  let seed = 0x811c9dc5;
  String(seedText).split('').forEach(ch=>{
    seed ^= ch.charCodeAt(0);
    seed = Math.imul(seed, 0x01000193) >>> 0;
  });
  return function random(){
    seed = (seed + 0x6D2B79F5) >>> 0;
    let t = seed;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function deterministicMath(seedText){
  const math = Object.create(Math);
  math.random = seededRandom(seedText);
  return math;
}

function stubElement(){
  return {
    style:{},
    dataset:{},
    classList:{add(){}, remove(){}, toggle(){}, contains(){ return false; }},
    addEventListener(){},
    removeEventListener(){},
    querySelector(){ return stubElement(); },
    querySelectorAll(){ return []; },
    setAttribute(){},
    appendChild(){},
    focus(){},
    click(){},
    innerHTML:'',
    textContent:'',
    value:'',
    checked:false,
    disabled:false
  };
}

function styleTextFromHtml(htmlText){
  const match = String(htmlText || '').match(/<style>([\s\S]*?)<\/style>/);
  return match ? match[1] : '';
}

function sandbox(htmlText){
  const styleText = styleTextFromHtml(htmlText);
  const styleElement = Object.assign(stubElement(), {textContent:styleText});
  const math = deterministicMath('phase1-audit-v2');
  const doc = {
    body:{style:{}, classList:{add(){}, remove(){}, toggle(){}}},
    documentElement:{style:{}},
    addEventListener(){},
    removeEventListener(){},
    getElementById(){ return stubElement(); },
    querySelector(sel){ return sel === 'style' ? styleElement : stubElement(); },
    querySelectorAll(){ return []; },
    createElement(){ return stubElement(); }
  };
  const box = {
    console,
    setTimeout,
    clearTimeout,
    Date,
    Math:math,
    JSON,
    RegExp,
    navigator:{},
    location:{protocol:'http:'},
    document:doc,
    addEventListener(){},
    removeEventListener(){},
    localStorage:{getItem(){ return null; }, setItem(){}, removeItem(){}},
    speechSynthesis:{cancel(){}, resume(){}, speak(){}, getVoices(){ return []; }},
    SpeechSynthesisUtterance:function(){},
    window:null
  };
  box.window = box;
  box.globalThis = box;
  return box;
}

function auditSnippet(appVersion){
  return `
globalThis.__phase1Audit = (function(){
  function uniq(items){
    return [...new Set((items||[]).filter(Boolean))];
  }
  function countBy(items, fn){
    const out = {};
    (items||[]).forEach(item=>{
      const key = fn(item) || 'other';
      out[key] = (out[key] || 0) + 1;
    });
    return out;
  }
  function validatorResult(name, fn){
    try{ fn(); return {name, ok:true, issues:[]}; }
    catch(e){ return {name, ok:false, issues:String(e.message||e).split('\\n').slice(1).filter(Boolean)}; }
  }
  function isolatedValidatorResult(name, fn){
    const priorRandom = Math.random;
    let seed = 0x79c01d;
    Math.random = function(){
      seed = (seed + 0x6D2B79F5) >>> 0;
      let t = seed;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    try{ return validatorResult(name, fn); }
    finally{ Math.random = priorRandom; }
  }
  const TRUE_CLUSTER_ONSETS = ['กร','กล','กว','ขร','ขล','ขว','คร','คล','คว','ปร','ปล','พร','พล','ตร'];
  function trueClusterWord(word){
    const t = String(word || '').normalize('NFC');
    return TRUE_CLUSTER_ONSETS.some(onset=>t.startsWith(onset));
  }
  function gateSortKey(gate){
    const n = lessonNum(gate);
    return Number.isFinite(n) && n > 0 ? n : 999;
  }
  function wordRecurrenceAudit(){
    const rows = new Map();
    const add = (item, gate)=>{
      if(!item || !item.t) return;
      const word = String(item.t).normalize('NFC');
      const row = rows.get(word) || {
        word,
        tr:item.tr || '',
        earliestGate:gate,
        total:0,
        isCluster:trueClusterWord(word),
        status:'LOW'
      };
      row.total += 1;
      if(!row.tr && item.tr) row.tr = item.tr;
      if(gateSortKey(gate) < gateSortKey(row.earliestGate)) row.earliestGate = gate;
      rows.set(word, row);
    };
    STORIES.forEach(story=>(story.lines||[]).flat().forEach(item=>add(item, story.gate)));
    FLUENCY_READS.forEach(read=>(read.lines||[]).flat().forEach(item=>add(item, read.gate)));
    return Array.from(rows.values())
      .map(row=>Object.assign(row, {status:row.total >= (row.isCluster ? 6 : 4) ? 'OK' : 'LOW'}))
      .sort((a,b)=>gateSortKey(a.earliestGate) - gateSortKey(b.earliestGate) || a.word.localeCompare(b.word, 'th'));
  }
  function learnedGlyphIdsFor(doneIds){
    const doneSet = new Set(doneIds || []);
    const out = [];
    LESSONS.forEach(L=>{
      if(doneSet.has(L.id)){
        (L.glyphs||[]).forEach(g=>{ if(!out.includes(g)) out.push(g); });
      }
    });
    return out;
  }
  function quizPrompt(q){
    return {
      axis:q.axis || q._choice || q.kind || 'other',
      kind:q.kind || 'mcq',
      prompt:q.prompt || '',
      text:q.text || '',
      answer:q.answer || '',
      options:q.options || []
    };
  }
  function wordAudit(w){
    const f = wordFrame(w);
    return {
      thai:w.thai,
      tr:w.tr,
      role:wordRole(w),
      final:f && f.final || null,
      finalSound:f && (f.sound || (finalJob(f.final)||{}).sound) || null,
      hiddenVowel:f && f.hiddenVowel || null,
      vowelOrder:f && f.vowelOrder || null,
      vowelLength:f && f.vowelLength || null,
      cluster:f && f.clusterKind || null,
      focus:f && f.focus || null
    };
  }
  function issueText(i){
    return [i.surface, i.item, (i.missing||[]).join(', ')].filter(Boolean).join(' · ');
  }
  function itemKey(item){
    return itemThai(item) || (item && item.thai) || '';
  }
  function uniqueByThai(items){
    const seen = new Set(), out = [];
    (items||[]).forEach(item=>{
      const key = itemKey(item);
      if(!key || seen.has(key)) return;
      seen.add(key); out.push(item);
    });
    return out;
  }
  function roleCounts(items){
    return countBy(items||[], item=>{
      const thai = itemKey(item);
      const w = findWord(thai);
      return item.role || (w ? wordRole(w) : 'none');
    });
  }
  function roleContract(status, items, note, excludedCount){
    return {
      status,
      counts:roleCounts(items),
      excludedCount:excludedCount || 0,
      note:note || ''
    };
  }
  function prereqStatus(items, doneIds, surface){
    const issues = [];
    (items||[]).forEach(item=>{
      const thai = itemKey(item);
      const w = findWord(thai);
      prerequisiteIssuesForThai(thai, doneIds, surface, w ? wordFrame(w) : null).forEach(i=>issues.push(i));
    });
    return {status:issues.length ? 'FAIL' : 'PASS', issueCount:issues.length, issues:issues.slice(0, 12)};
  }
  function surfaceRow(id, name, availableItems, servedCount, cap, rawCount, prereq, role){
    const availableCount = Array.isArray(availableItems) ? availableItems.length : availableItems;
    const unit = ({'sound-twins':'sets','mixed-review':'questions','reading-stories':'stories','fluency-read':'reads','phase1-completion':'checks','sign-safari':'signs','mouth-coach':'cards','contrast-block':'blocks','bangkok-mission':'missions','axis-review':'cards','retention-check':'checks'}[id]) || 'items';
    return {
      id,
      name,
      unit,
      availableItemCount:availableCount,
      servedCount,
      cap,
      blockedExcludedCount:Math.max(0, (rawCount == null ? availableCount : rawCount) - availableCount),
      prerequisiteStatus:prereq || {status:'PASS', issueCount:0, issues:[]},
      roleContract:role || {status:'N/A', counts:{}, excludedCount:0, note:'not role-gated'}
    };
  }
  function rawToneItems(doneIds){
    return TONES.concat(TONES2).filter(t=>lessonGateMet(t.gate, doneIds));
  }
  function rawTwinSets(doneIds){
    return TONE_SETS.concat(LENGTH_PAIRS).filter(set=>set.every(w=>lessonGateMet(w.gate, doneIds)));
  }
  function rawEchoItems(doneIds){
    const lessonItems = learnedWords(doneIds).map(w=>({t:w.thai, tr:w.tr, en:w.en, role:wordRole(w)}));
    const toneItems = rawToneItems(doneIds).map(w=>({t:w.thai, tr:w.tr, en:w.en}));
    const twinItems = rawTwinSets(doneIds).flat().map(w=>({t:w.t, tr:w.tr, en:w.en}));
    return uniqueByThai(lessonItems.concat(toneItems, twinItems));
  }
  function hearPickSurface(doneIds){
    const raw = learnedWords(doneIds).map(w=>({thai:w.thai, tr:w.tr, en:w.en, role:wordRole(w)}));
    const available = raw.filter(w=>thaiItemPrereqsMet(w.thai, doneIds, wordFrame(findWord(w.thai))));
    const served = available.length >= 4 ? Math.min(10, available.length) : 0;
    return surfaceRow(
      'hear-pick-thai',
      'Hear & Pick Thai',
      available,
      served,
      10,
      raw.length,
      prereqStatus(available, doneIds, 'hear-pick-thai'),
      roleContract('PASS', available, 'script-recognition from covered Thai; no English cue')
    );
  }
  function spellSurface(doneIds){
    const raw = learnedWords(doneIds);
    const available = raw.filter(w=>wordRole(w)==='core' && !w.thai.includes(' ') && [...w.thai].length <= 7 && thaiItemPrereqsMet(w.thai, doneIds, wordFrame(w)));
    const served = available.length >= 4 ? Math.min(8, available.length) : 0;
    return surfaceRow(
      'spell-it',
      'Spell It',
      available.map(w=>({thai:w.thai, role:wordRole(w)})),
      served,
      8,
      raw.length,
      prereqStatus(available.map(w=>({thai:w.thai})), doneIds, 'spell-it'),
      roleContract('PASS', available.map(w=>({thai:w.thai, role:wordRole(w)})), 'core-only production/spelling surface', raw.length - available.length)
    );
  }
  function echoSurface(doneIds){
    const raw = rawEchoItems(doneIds);
    const available = readableEchoItems(doneIds);
    const served = available.length >= 4 ? Math.min(8, available.length) : 0;
    return surfaceRow(
      'echo',
      'Echo',
      available,
      served,
      8,
      raw.length,
      prereqStatus(available, doneIds, 'echo'),
      roleContract('PASS', available, 'script-cued read-aloud practice, not certified speaking mastery')
    );
  }
  function soundTwinsSurface(doneIds, taught){
    const raw = rawTwinSets(doneIds);
    const available = readableTwinSets(taught, doneIds);
    const served = available.length >= 2 ? Math.min(10, available.length) : 0;
    return surfaceRow(
      'sound-twins',
      'Sound Twins',
      available,
      served,
      10,
      raw.length,
      prereqStatus(available.flat(), doneIds, 'sound-twins'),
      roleContract('N/A', [], 'tone/length contrast sets are not lesson-word role gated')
    );
  }
  function toneListeningSurface(doneIds, taught){
    const raw = rawToneItems(doneIds);
    const available = readableToneItems(taught, doneIds);
    const served = available.length >= 4 ? Math.min(8, available.length) : 0;
    return surfaceRow(
      'tone-listening',
      'Tone listening',
      available,
      served,
      8,
      raw.length,
      prereqStatus(available, doneIds, 'tone-listening'),
      roleContract('N/A', [], 'tone examples are checked by tone/prerequisite gates')
    );
  }
  function mixedReviewSurface(doneIds, taught){
    const glyphs = learnedGlyphIdsFor(doneIds).filter(g=>GLYPHS[g] && GLYPHS[g].type==='c');
    const finals = learnedFinalGlyphIds(doneIds);
    const words = learnedWords(doneIds);
    const reviewWords = words.filter(w=>wordRole(w)!=='decode' && thaiItemPrereqsMet(w.thai, doneIds, wordFrame(w)));
    let questionCount = glyphs.length * 2 + finals.filter(ch=>finalJobQuestion(ch)).length;
    let noDistractorExcluded = 0;
    reviewWords.forEach(w=>{
      const wrongRead = wordReadingDistractors(w, reviewWords, 3);
      if(wrongRead.length===3) questionCount += 2;
      else noDistractorExcluded++;
      if(toneQuestion(w, doneIds.length ? Math.max(...doneIds.map(lessonNum)) : 0)) questionCount++;
    });
    const decodeExcluded = words.filter(w=>wordRole(w)==='decode').length;
    const served = questionCount ? Math.min(10, questionCount) : 0;
    const row = surfaceRow(
      'mixed-review',
      'Mixed review',
      questionCount,
      served,
      10,
      questionCount + decodeExcluded + noDistractorExcluded,
      prereqStatus(reviewWords.map(w=>({thai:w.thai})), doneIds, 'mixed-review'),
      roleContract('PASS', reviewWords.map(w=>({thai:w.thai, role:wordRole(w)})), 'decode words excluded; phrase cards must pass the same readability gate', decodeExcluded)
    );
    row.excludedDetail = {decodeRoleExcluded:decodeExcluded, insufficientDistractorWords:noDistractorExcluded};
    return row;
  }
  function payoffSurface(doneIds){
    const raw = doneIds.map(id=>lessonPayoff(lessonById(id))).filter(Boolean);
    return surfaceRow(
      'lesson-payoff',
      'Lesson payoff',
      raw.map(p=>({thai:p.thai})),
      raw.length ? 1 : 0,
      1,
      raw.length,
      prereqStatus(raw.map(p=>({thai:p.thai})), doneIds, 'lesson-payoff'),
      roleContract('N/A', [], 'decode first, then meaning/context/use reveal')
    );
  }
  function axisReviewSurface(doneIds){
    const raw = doneIds.flatMap(id=>axisCardIdsForLesson(lessonById(id)));
    const available = raw.filter(id=>axisCardAllowedForDone(id, doneIds));
    return surfaceRow(
      'axis-review',
      'Axis review',
      available,
      available.length ? buildBalancedReviewSession(available, 40).length : 0,
      40,
      raw.length,
      {status:available.length === raw.length ? 'PASS' : 'FAIL', issueCount:raw.length - available.length, issues:[]},
      roleContract('N/A', [], 'quota-balanced SRS axes for glyph/class/initial/final/live-dead/tone/listen/say/transfer')
    );
  }
  function retentionSurface(doneIds){
    return surfaceRow(
      'retention-check',
      'Delayed retention',
      doneIds.length,
      doneIds.length ? 1 : 0,
      1,
      doneIds.length,
      {status:'PASS', issueCount:0, issues:[]},
      roleContract('N/A', [], '+1 day retained and +7 day stabilised checks; one due lesson served per day')
    );
  }
  function storySurface(doneIds){
    const raw = STORIES.filter(s=>doneIds.includes(s.gate));
    const available = raw.filter(s=>!(s.lines||[]).flat().some(w=>prerequisiteIssuesForThai(itemThai(w), doneIds, 'story/' + s.id).length));
    const served = available.length ? 1 : 0;
    return surfaceRow(
      'reading-stories',
      'Reading/stories',
      available,
      served,
      1,
      raw.length,
      {status:available.length === raw.length ? 'PASS' : 'FAIL', issueCount:raw.length - available.length, issues:[]},
      roleContract('N/A', [], 'stories use their own decodability/prerequisite gate')
    );
  }
  function fluencySurface(doneIds){
    const raw = FLUENCY_READS.filter(read=>lessonGateMet(read.gate, doneIds));
    const available = fluencyReadsAvailable(doneIds);
    const flatItems = available.flatMap(read=>fluencyReadItems(read).map(item=>({thai:item.t})));
    return surfaceRow(
      'fluency-read',
      'Fluency reads',
      available,
      available.length ? 1 : 0,
      1,
      raw.length,
      prereqStatus(flatItems, doneIds, 'fluency-read'),
      roleContract('N/A', [], 'slow pass, smoother pass, decoding check and self-rating; no speech scoring')
    );
  }
  function writeItSurface(doneIds){
    if(!lessonGateMet('l2', doneIds)){
      return surfaceRow(
        'write-it',
        'Write it',
        [],
        0,
        8,
        0,
        {status:'PASS', issueCount:0, issues:[]},
        roleContract('N/A', [], 'Thai-keyboard recall unlocks after Lesson 2; no new SRS ids')
      );
    }
    const glyphs = learnedGlyphIdsFor(doneIds).filter(ch=>GLYPHS[ch] && GLYPHS[ch].type === 'c');
    const finals = learnedFinalGlyphIds(doneIds).filter(ch=>GLYPHS[ch] && finalJob(ch));
    const available = glyphs.map(ch=>({thai:ch})).concat(finals.map(ch=>({thai:ch})));
    return surfaceRow(
      'write-it',
      'Write it',
      available,
      available.length >= 3 ? Math.min(8, available.length) : 0,
      8,
      available.length,
      {status:'PASS', issueCount:0, issues:[]},
      roleContract('N/A', [], 'Thai-keyboard recall from existing g:/f: review eligibility; no new SRS ids')
    );
  }
  function routeTalkSurface(doneIds){
    if(!lessonGateMet('l13', doneIds)){
      return surfaceRow(
        'route-talk',
        'Route talk',
        [],
        0,
        5,
        0,
        {status:'PASS', issueCount:0, issues:[]},
        roleContract('N/A', [], 'spoken tone-route explanation unlocks after Lesson 13; no scoring')
      );
    }
    const raw = learnedWords(doneIds);
    const available = raw
      .filter(w=>thaiTextReadable(w.thai, taughtGlyphSet(doneIds)) && thaiItemPrereqsMet(w.thai, doneIds, wordFrame(w)))
      .map(w=>({word:w, route:toneRouteForWord(w, doneIds)}))
      .filter(x=>x.route)
      .map(x=>({thai:x.word.thai}));
    return surfaceRow(
      'route-talk',
      'Route talk',
      available,
      available.length >= 5 ? Math.min(5, available.length) : 0,
      5,
      raw.length,
      prereqStatus(available, doneIds, 'route-talk'),
      roleContract('N/A', [], 'spoken self-explanation of class/mark/live-dead/length/tone; no scoring')
    );
  }
  function decodeGymSurface(doneIds){
    const raw = DECODE_GYM.filter(item=>lessonGateMet(item.gate, doneIds));
    const available = decodeGymPool(doneIds).map(item=>({thai:item.thai}));
    return surfaceRow(
      'decode-gym',
      'Decode Gym',
      available,
      available.length >= 6 ? Math.min(10, available.length) : 0,
      10,
      raw.length,
      prereqStatus(available, doneIds, 'decode-gym'),
      roleContract('N/A', [], 'tone-verified non-lesson word mileage; no meanings and no SRS ids')
    );
  }
  function wildDeckSurface(doneIds){
    return surfaceRow(
      'wild-deck',
      'Wild deck',
      0,
      0,
      8,
      0,
      {status:'PASS', issueCount:0, issues:[]},
      roleContract('N/A', [], 'state-driven from local captures only; never creates SRS ids or blockers')
    );
  }
  function rareLetterSurface(doneIds){
    const available = rareLetterClassPool(doneIds).map(ch=>({thai:ch}));
    return surfaceRow(
      'rare-letter-class',
      'Rare-letter class',
      available,
      available.length,
      available.length,
      available.length,
      {status:'PASS', issueCount:0, issues:[]},
      roleContract('N/A', [], 'Lesson 21 class-only recognition material; definition-free and neutral before answer')
    );
  }
  function phase1CompletionSurface(doneIds){
    const raw = doneIds.length >= LESSONS.length ? 1 : 0;
    const qs = raw ? buildPhase1CompletionQuiz() : [];
    const thaiItems = qs.flatMap(q=>thaiStringsFromQuestion(q).map(thai=>({thai})));
    return surfaceRow(
      'phase1-completion',
      'Phase 1 completion checkpoint',
      raw ? qs : [],
      raw ? 1 : 0,
      1,
      raw,
      prereqStatus(thaiItems, doneIds, 'phase1-completion'),
      roleContract('N/A', [], 'final observable reading behaviours; 85% quiz plus smooth/slow final read')
    );
  }
  function chunkSurface(doneIds){
    const raw = CHUNK_ITEMS.filter(item=>lessonGateMet(item.gate, doneIds));
    const available = chunkItems(doneIds);
    const served = available.length >= 3 ? Math.min(8, available.length) : 0;
    return surfaceRow(
      'chunk-drill',
      'Chunk this word',
      available,
      served,
      8,
      raw.length,
      prereqStatus(available, doneIds, 'chunk-drill'),
      roleContract('N/A', [], 'definition-free script chunking; no meaning test')
    );
  }
  function signSafariSurface(doneIds){
    const raw = SIGN_SAFARI_ITEMS.filter(item=>lessonGateMet(item.gate, doneIds));
    const available = signSafariItems(doneIds);
    return surfaceRow(
      'sign-safari',
      'Seen in the wild',
      available,
      available.length,
      available.length,
      raw.length,
      prereqStatus(available, doneIds, 'sign-safari'),
      roleContract('N/A', [], 'self-paced local checklist; no camera, upload or location')
    );
  }
  function fontShockSurface(doneIds){
    const raw = FONT_SHOCK_ITEMS.filter(item=>lessonGateMet(item.gate, doneIds));
    const available = fontShockItems(doneIds);
    const served = available.length >= 4 ? Math.min(8, available.length) : 0;
    return surfaceRow(
      'font-shock',
      'Font Shock',
      available,
      served,
      8,
      raw.length,
      prereqStatus(available, doneIds, 'font-shock'),
      roleContract('N/A', [], 'same covered signs in CSS font/weight variations')
    );
  }
  function mouthCoachSurface(doneIds){
    const raw = MOUTH_COACH_CARDS.filter(card=>lessonGateMet(card.gate, doneIds));
    const available = mouthCoachCards(doneIds);
    return surfaceRow(
      'mouth-coach',
      'Mouth Coach',
      available.map(card=>({thai:card.thai})),
      available.length,
      available.length,
      raw.length,
      prereqStatus(available.map(card=>({thai:card.thai})), doneIds, 'mouth-coach'),
      roleContract('N/A', [], 'script-cued read-aloud coaching; no pronunciation score')
    );
  }
  function contrastSurface(doneIds){
    const raw = CONTRAST_BLOCKS.filter(block=>lessonGateMet(block.gate, doneIds));
    const available = contrastBlocks(doneIds);
    const flatItems = available.flatMap(block=>(block.items||[]).map(item=>({thai:item.thai})));
    return surfaceRow(
      'contrast-block',
      'Contrast Block',
      available,
      available.length ? 1 : 0,
      1,
      raw.length,
      prereqStatus(flatItems, doneIds, 'contrast-block'),
      roleContract('N/A', [], 'listen-first contrast plus script-cued record/compare; no pronunciation score')
    );
  }
  function missionSurface(doneIds){
    const raw = BANGKOK_MISSIONS.filter(mission=>lessonGateMet(mission.gate, doneIds));
    const available = bangkokMissions(doneIds);
    return surfaceRow(
      'bangkok-mission',
      'Bangkok Mission',
      available.map(mission=>({thai:mission.thai})),
      available.length ? 1 : 0,
      1,
      raw.length,
      prereqStatus(available.map(mission=>({thai:mission.thai})), doneIds, 'bangkok-mission'),
      roleContract('N/A', [], 'local self-check; no camera, upload, location or web access')
    );
  }
  function surfaceAudit(doneIds, taught){
    return [
      hearPickSurface(doneIds),
      spellSurface(doneIds),
      echoSurface(doneIds),
      soundTwinsSurface(doneIds, taught),
      toneListeningSurface(doneIds, taught),
      mixedReviewSurface(doneIds, taught),
      payoffSurface(doneIds),
      axisReviewSurface(doneIds),
      retentionSurface(doneIds),
      storySurface(doneIds),
      fluencySurface(doneIds),
      writeItSurface(doneIds),
      routeTalkSurface(doneIds),
      decodeGymSurface(doneIds),
      wildDeckSurface(doneIds),
      rareLetterSurface(doneIds),
      phase1CompletionSurface(doneIds),
      chunkSurface(doneIds),
      signSafariSurface(doneIds),
      fontShockSurface(doneIds),
      mouthCoachSurface(doneIds),
      contrastSurface(doneIds),
      missionSurface(doneIds)
    ];
  }
  function workloadAudit(L, index){
    const prevDoneIds = LESSONS.slice(0, index).map(x=>x.id);
    const doneIds = LESSONS.slice(0, index+1).map(x=>x.id);
    const prevGlyphs = new Set(learnedGlyphIdsFor(prevDoneIds));
    const prevFinals = new Set(learnedFinalGlyphIds(prevDoneIds));
    const learnedGlyphs = learnedGlyphIdsFor(doneIds);
    const learnedFinals = learnedFinalGlyphIds(doneIds);
    const taught = taughtGlyphSet(doneIds);
    const toneItems = readableToneItems(taught, doneIds);
    const twinSets = readableTwinSets(taught, doneIds);
    const echoItems = readableEchoItems(doneIds);
    const storyCount = STORIES.filter(s=>doneIds.includes(s.gate)).length;
    const fluencyCount = fluencyReadsAvailable(doneIds).length;
    const chunkCount = chunkItems(doneIds).length;
    const signCount = signSafariItems(doneIds).length;
    const fontCount = fontShockItems(doneIds).length;
    const mouthCount = mouthCoachCards(doneIds).length;
    const dueBeforeCap = learnedGlyphs.length + learnedFinals.length;
    const dueServedAfterCap = Math.min(REVIEW_TODAY_TARGET_MAX, dueBeforeCap);
    const dayType = (dueBeforeCap >= 45 || index === LESSONS.length - 1) ? 'Consolidation day' : 'Lesson day';
    const earlyFoundation = index < 3;
    const depthBlock = storyCount ? 'Reading room or drill' : 'Progression drill';
    return {
      newGlyphCards:(L.glyphs||[]).filter(g=>!prevGlyphs.has(g)).length,
      newFinalCards:finalGlyphsForLesson(L).filter(g=>!prevFinals.has(g)).length,
      lessonQuizCount:buildLessonQuiz(L).length,
      lessonPayloadIfTaken:{
        newGlyphCards:(L.glyphs||[]).filter(g=>!prevGlyphs.has(g)).length,
        newFinalCards:finalGlyphsForLesson(L).filter(g=>!prevFinals.has(g)).length,
        lessonQuizCount:buildLessonQuiz(L).length
      },
      availablePool:{
        glyphCards:learnedGlyphs.length,
        finalCards:learnedFinals.length,
        toneItems:toneItems.length,
        twinSets:twinSets.length,
        echoItems:echoItems.length,
        stories:storyCount,
        fluencyReads:fluencyCount,
        chunks:chunkCount,
        signs:signCount,
        fontShock:fontCount,
        mouthCoach:mouthCount
      },
      servedDailyLoad:{
        dueSrsBeforeCap:dueBeforeCap,
        dueSrsServedAfterCap:dueServedAfterCap,
        srsCap:REVIEW_TODAY_TARGET_MAX,
        manualReviewCap:REVIEW_MANUAL_CAP,
        consolidationTrigger:45,
        todayType:dayType,
        depthBlockLikely:depthBlock,
        earlyFoundationRule:earlyFoundation ? '20-30 minute foundation day; optional Lesson 2/3 stretch only before Lesson 4' : '45 minute target route',
        estimatedLoadBand:earlyFoundation ? '20-30 min core' : '45 min target'
      },
      todayGovernorRouteAtThisDueLoad:{
        dueSrsBeforeCap:dueBeforeCap,
        dueSrsServedAfterCap:dueServedAfterCap,
        srsCap:REVIEW_TODAY_TARGET_MAX,
        manualReviewCap:REVIEW_MANUAL_CAP,
        consolidationTrigger:45,
        todayType:dayType,
        depthBlockLikely:depthBlock,
        estimatedLoadBand:earlyFoundation ? '20-30 min core' : '45 min target'
      }
    };
  }
  function lessonAudit(L, index){
    const doneIds = LESSONS.slice(0, index+1).map(x=>x.id);
    const taught = taughtGlyphSet(doneIds);
    const quiz = buildLessonQuiz(L);
    const finalGlyphs = finalGlyphsForLesson(L);
    const finalJobs = finalGlyphs.map(ch=>({glyph:ch, sound:finalJob(ch).sound, group:finalJob(ch).group, effect:finalJob(ch).effect}));
    const quizAxes = countBy(quiz, q=>q.axis || q._choice || q.kind || 'other');
    const issues = [];
    if(lessonNum(L.id) >= 2 && L.id !== 'l12' && !finalGlyphs.length) issues.push('No explicit final-job teaching cards.');
    finalGlyphs.forEach(ch=>{
      if(!quiz.some(q=>q.axis === 'final-job' && q.prompt === ch)) issues.push('Missing final-job recall for ' + ch + '.');
    });
    const finalFrameGlyphs = uniq(L.words.map(w=>{ const f = wordFrame(w); return f && f.final; }));
    finalFrameGlyphs.forEach(ch=>{
      if(!finalJob(ch)) issues.push('Unknown final job in word frame: ' + ch + '.');
    });
    const echoItems = readableEchoItems(doneIds).map(itemThai);
    const toneItems = readableToneItems(taught, doneIds).map(itemThai);
    const twinSets = readableTwinSets(taught, doneIds).map(set=>set.map(itemThai));
    const learnedGlyphs = learnedGlyphIdsFor(doneIds);
    const surfaces = surfaceAudit(doneIds, taught);
    const prereqLessonIssues = prerequisite.lessonIssues.concat(prerequisite.roleIssues).filter(i=>i.lesson === L.id);
    const prereqPoolIssues = prerequisite.poolIssues.filter(i=>i.lesson === L.id || i.afterLesson === index+1);
    const prereqIssues = prereqLessonIssues.concat(prereqPoolIssues);
    return {
      id:L.id,
      day:index+1,
      title:L.title,
      unit:L.unit,
      glyphs:L.glyphs || [],
      newStarts:(L.glyphs||[]).filter(ch=>GLYPHS[ch] && GLYPHS[ch].type === 'c'),
      newVowels:(L.glyphs||[]).filter(ch=>GLYPHS[ch] && GLYPHS[ch].type === 'v'),
      newMarks:(L.glyphs||[]).filter(ch=>GLYPHS[ch] && GLYPHS[ch].type === 'm'),
      finalJobs,
      words:(L.words||[]).map(wordAudit),
      quiz:{count:quiz.length, axes:quizAxes, prompts:quiz.map(quizPrompt)},
      afterLesson:{
        learnedGlyphs,
        learnedStarts:learnedGlyphs.filter(ch=>GLYPHS[ch] && GLYPHS[ch].type === 'c'),
        learnedFinals:learnedFinalGlyphIds(doneIds),
        payoff:lessonPayoff(L),
        axisCards:doneIds.flatMap(id=>axisCardIdsForLesson(lessonById(id))).length,
        retention:{completed:doneIds.length, servedPerDay:doneIds.length ? 1 : 0},
        toneItems,
        twinSets,
        echoItems,
        unlockedDrills:DRILLS.filter(d=>d.gate && lessonGateMet(d.gate, doneIds)).map(d=>d.id),
        unlockedStories:STORIES.filter(s=>doneIds.includes(s.gate)).map(s=>s.id),
        unlockedFluencyReads:FLUENCY_READS.filter(read=>lessonGateMet(read.gate, doneIds)).map(read=>read.id)
      },
      surfaceAudit:surfaces,
      workload:workloadAudit(L, index),
      prerequisiteIssues:prereqIssues,
      issues:issues.concat(prereqIssues.map(issueText))
    };
  }
  const prerequisite = collectPrerequisiteIssues();
  const validators = [
    validatorResult('audio', validateAudioContracts),
    validatorResult('vocabulary', validateVocabularyContracts),
    validatorResult('coverage', validateCoverageContracts),
    validatorResult('prerequisites', validatePrerequisiteContracts),
    validatorResult('reviewChoices', validateReviewChoiceContracts),
    validatorResult('finalSounds', validateFinalSoundContracts),
    validatorResult('structuralClarity', validateStructuralClarityContracts),
    validatorResult('balancedChoices', validateBalancedComponentChoiceContracts),
    validatorResult('misconceptionChoices', validateMisconceptionChoiceContracts),
    validatorResult('v5Migration', validateV5MigrationContracts),
    validatorResult('v501FoundationRefresh', validateV501FoundationRefreshContracts),
    validatorResult('importRepair', validateImportContracts),
    validatorResult('v5Transfer', validateV5TransferContracts),
    validatorResult('v51Polish', validateV51PolishContracts),
    validatorResult('v52Bridge', validateV52BridgeContracts),
    validatorResult('v52FullBrief', validateV52FullBriefContracts),
    validatorResult('recallAxis', validateRecallAxisContracts),
    validatorResult('delayedMastery', validateDelayedMasteryContracts),
    validatorResult('contrastCoverage', validateContrastCoverageContracts),
    validatorResult('migrationTrust', validateMigrationTrustContracts),
    validatorResult('utilityMission', validateUtilityMissionContracts),
    validatorResult('noHumanAudio', validateNoHumanAudioContracts),
    validatorResult('ttsAssessmentSafety', validateTtsAssessmentSafetyContracts),
    validatorResult('phase1CompletionStandard', validatePhase1CompletionStandardContracts),
    validatorResult('productionSafety', validateProductionSafetyContracts),
    validatorResult('v521Hardening', validateV521HardeningContracts),
    validatorResult('v541AutoConfidence', validateV541AutoConfidenceContracts),
    validatorResult('v542StreamlinedCopy', validateV542StreamlinedCopyContracts),
    validatorResult('v543CorrectDwell', validateV543CorrectDwellContracts),
    validatorResult('v544AdaptiveCorrectDwell', validateV544AdaptiveCorrectDwellContracts),
    validatorResult('v601FirstRun', validateV601FirstRunContracts),
    validatorResult('v602AnswerFeedback', validateV602AnswerFeedbackContracts),
    validatorResult('v603ProgressInteraction', validateV603ProgressInteractionContracts),
    validatorResult('v525RouteSimplification', validateV525RouteSimplificationContracts),
    validatorResult('v526ToneSignReview', validateV526ToneSignReviewContracts),
    validatorResult('v53ReviewGovernor', validateV53ReviewGovernorContracts),
    validatorResult('v531TtsSafety', validateV531TtsSafetyContracts),
    validatorResult('v54Fluency', validateV54FluencyContracts),
    validatorResult('contentPedagogyHardening', validateContentPedagogyHardeningContracts),
    validatorResult('weaknessTargeting', validateWeaknessTargetingContracts),
    validatorResult('productionPass', validateProductionPassContracts),
    validatorResult('automaticity', validateAutomaticityContracts),
    validatorResult('captureLoop', validateCaptureLoopContracts),
    validatorResult('v65Feedback', validateV65FeedbackContracts),
    validatorResult('v66DataSafety', validateV66DataSafetyContracts),
    validatorResult('v67CompletionJourney', validateV67CompletionJourneyContracts),
    validatorResult('v70Onboarding', validateV70OnboardingContracts),
    validatorResult('v71VisualSound', validateV71VisualSoundContracts),
    validatorResult('themeContracts', validateThemeContracts),
    validatorResult('v72Shop', validateV72ShopContracts),
    validatorResult('v73ReadingMileage', validateV73ReadingMileageContracts),
    validatorResult('v74StreetRead', validateV74StreetReadContracts),
    validatorResult('timeAwareRoute', validateTimeAwareRouteContracts),
    validatorResult('freshDecode', validateFreshDecodeContracts),
    validatorResult('v77ColourFade', validateV77ColourFadeContracts),
    validatorResult('v78RequiredLoop', validateV78RequiredLoopContracts),
    isolatedValidatorResult('v79RetentionDecode', validateV79RetentionDecodeContracts),
    validatorResult('v8Visual', validateV8VisualContracts)
  ];
  return {
    generatedAt:new Date().toISOString(),
    appVersion:${JSON.stringify(appVersion)},
    lessonCount:LESSONS.length,
    validators,
    prerequisites:{
      lessonIssues:prerequisite.lessonIssues,
      poolIssues:prerequisite.poolIssues,
      roleIssues:prerequisite.roleIssues,
      all:prerequisite.lessonIssues.concat(prerequisite.poolIssues, prerequisite.roleIssues)
    },
    workload:{
      srsCap:REVIEW_TODAY_TARGET_MAX,
      manualReviewCap:REVIEW_MANUAL_CAP,
      consolidationTrigger:45,
      axisReviewDailyCap:AXIS_REVIEW_DAILY_CAP,
      axisReviewFirstDelay:AXIS_REVIEW_FIRST_DELAY,
      recoveryTargets:REVIEW_RECOVERY_TARGETS,
      note:'Lesson payload, available pools and Today governor served workload are separate. Today review serves a bounded default slice, full manual catch-up stays capped separately, axis review cards are staged into the due deck, due 25-44 recommends review without blocking a lesson, and due >= 45 creates a consolidation/recovery day.'
    },
    fluencyReads:FLUENCY_READS.map(read=>({
      id:read.id,
      gate:read.gate,
      title:read.title,
      realWorld:!!read.realWorld,
      itemCount:fluencyReadItems(read).length,
      check:read.check && read.check.text
    })),
    decodeGym:DECODE_GYM.map(item=>({
      gate:item.gate,
      thai:item.thai,
      tr:item.tr,
      tone:toneOf(item.tr),
      verified:decodeGymToneVerified(item)
    })),
    wordRecurrence:wordRecurrenceAudit(),
    freshDecode:{
      poolA:FRESH_DECODE.map(item=>({gate:item.gate, thai:item.thai, tr:item.tr, tone:toneOf(item.tr), verified:!!freshDecodeRoute(item)})),
      assessmentBank:ASSESSMENT_BANK.map(item=>({gate:item.gate, thai:item.thai, tr:item.tr, tone:toneOf(item.tr), verified:!!freshDecodeRoute(item)})),
      served:{
        lessonQuiz:'3 fresh words / 4 questions per lesson quiz from l4, class-coloured prompts',
        masteryCheckpoint:'3 assessment-bank words / 4 questions per checkpoint, neutral prompts',
        finalCheckpoint:'5 assessment-bank words / 6 questions incl >=1 cluster and >=1 silent leader, neutral prompts',
        maintenance:'5 fresh words / 6 questions as a maintenance rotation option'
      }
    },
    captureLoop:{
      stateKey:'captures',
      cap:200,
      entryPoints:['Read / Capture Thai','Read / Wild deck','Bangkok Mission / Capture Thai'],
      routeBoundary:'routes derive only when the captured Thai is taught, prerequisite-safe and grid-derivable'
    },
    phase1Completion:{
      questionCount:buildPhase1CompletionQuiz().length,
      axes:countBy(buildPhase1CompletionQuiz(), q=>q.axis || q._choice || q.kind || 'other'),
      pass:'85% quiz plus smooth or slow-but-correct final controlled read'
    },
    lessons:LESSONS.map(lessonAudit),
    retentionDecode:{
      bank:RETENTION_DECODE_BANK.map(item=>({gate:item.gate, stage:item.stage, thai:item.thai, tr:item.tr, tone:toneOf(item.tr), verified:!!freshDecodeRoute(item)})),
      served:{
        retained:'+1 day: 2 sealed words / 3 neutral transfer questions inside the existing 6-question check from l4',
        stabilised:'+7 day: 2 different sealed words / 3 neutral transfer questions inside the existing 8-question check from l4',
        cold30:'+30 day after Phase 1: all 12 reserved words / 14 neutral questions at 85%; failure keeps completion and routes to Fresh decode repair'
      },
      cold30QuestionCount:buildRetention30Quiz().length,
      state:'optional phase1Completion.firstPassedAt + phase1Completion.retention30; per-lesson firstPct stored under existing retention records'
    }
  };
})();
`;
}

function safeCell(value){
  return String(value || '').replace(/\|/g, '/').replace(/\n/g, ' ');
}

function renderMarkdown(audit){
  const lines = [];
  lines.push('# Phase 1 Audit');
  lines.push('');
  lines.push(`Generated: ${audit.generatedAt}`);
  lines.push(`App version: ${audit.appVersion || 'unknown'}`);
  lines.push(`Lessons: ${audit.lessonCount}`);
  lines.push('');
  lines.push('This is the generated review surface for Phase 1. The markdown gives a readable map; the adjacent `phase1_audit.json` contains the full extracted quiz prompts, options, lesson words, generated pools, prerequisite issue objects and workload estimates for scripted review.');
  lines.push('');
  lines.push('## Validator Status');
  audit.validators.forEach(v=>{
    lines.push(`- ${v.ok ? 'PASS' : 'FAIL'} ${v.name}${v.issues.length ? ': ' + v.issues.join('; ') : ''}`);
  });
  lines.push('');
  lines.push('## Prerequisite Audit');
  lines.push(`- Lesson prerequisite issues: ${audit.prerequisites.lessonIssues.length}`);
  lines.push(`- Pool prerequisite issues: ${audit.prerequisites.poolIssues.length}`);
  lines.push(`- Role-contract issues: ${audit.prerequisites.roleIssues.length}`);
  if(audit.prerequisites.all.length){
    audit.prerequisites.all.forEach(i=>lines.push(`- ${safeCell([i.lesson || (i.afterLesson != null ? 'after lesson ' + i.afterLesson : ''), i.surface, i.item, (i.missing||[]).join(', ')].filter(Boolean).join(' · '))}`));
  } else {
    lines.push('- No unresolved prerequisite issues.');
  }
  lines.push('');
  lines.push('## Workload Audit');
  lines.push('');
  lines.push('Lesson payload is the content added if that lesson is taken. Today governor route is the daily serving plan: review is capped by SRS, axis review cards are staged into the due deck, due 25-44 recommends review without blocking a lesson, due >= 45 creates a consolidation day, and Lessons 1-3 remain shorter foundation days.');
  lines.push('');
  lines.push("v8.0.0 is the Bangkok Street Atlas visual-completion pass: the generic aurora/glass/gradient layer is replaced by a code-native route-map shell, printed Today ticket and transit rail, compact practice field guide, workbook panels, six-stop tone board, reading signboards, collectible letter wall, coloured progress stamps, ruled lesson sheet, solid navigation and real theme swatches; existing progress becomes more visible without changing rewards, retention or route logic; decorative Thai marks are aria-hidden, class colours remain reserved for class meaning, all themes keep their atmosphere and validateV8VisualContracts guards the identity with no learner-state, curriculum, SRS, blocker, grading, economy, audio/font asset, runtime-network or service-worker change. v7.9.0 is the sealed retention-transfer pass: RETENTION_DECODE_BANK adds 96 real, tone-verified words that never appear outside delayed recall; Lessons 4-24 each have two +1-day words and two different +7-day words, contributing three neutral transfer questions while the existing 6/8-question size and 80% bar stay fixed; twelve further words are reserved for a 14-question 30-day cold decode at 85% after Phase 1; first-attempt percentages remain recorded, failure never removes completion and repair uses the separate maintenance Fresh decode pool; only optional nested phase1Completion retention fields and firstPct fields inside existing retention records are added. v7.8.0 is the required-surface mastery-loop pass: lesson quizzes cycle first-attempt misses until each is answered correctly once with scoring from the first pass only, mastery checkpoints and unit bosses gain one atomic live-dead/vowel-length-then-tone structure chain per build, the final completion checkpoint replaces its standalone 2-option structure singles with route chains, one lesson-quiz filler slot and the maintenance Fresh decode sample are weakness-first from existing errorProfile diagnostics with empty profiles degrading to random, and no SRS, blocker, economy, audio, network, service-worker or learner-state-schema change is made. v7.7.0 is the tone colour-fade pass: from Unit C, taught-word tone questions in lesson quizzes, mastery checkpoints, unit bosses and the final completion checkpoint render plain uncoloured Thai prompts with the class badge kept behind the TONE_FADE_KEEPS_BADGE constant and colour restored in post-answer feedback; lesson quizzes add a colour-assisted second attempt whose recovery counts for the lesson score while gates stay one-shot; one tone question is guaranteed per Unit C+ lesson quiz; review cards, tone drills, mixed review and Quick decode keep colours; no SRS, blocker, economy, audio, network or learner-state-schema change. v7.6.0 is the fresh-decode transfer pass: two reserved tone-verified corpora of never-taught real words (FRESH_DECODE 120, ASSESSMENT_BANK 56) certify decoding transfer instead of word memory; lesson quizzes from Lesson 4 add fresh route/read questions, mastery checkpoints and the Phase 1 completion checkpoint add sealed assessment-bank words, and completed-course maintenance gains Fresh decode. The remaining v7 release chain stays in place without changing curriculum, SRS intervals, lesson blockers, economy, audio/font assets, runtime network features or service-worker cache naming.");
  lines.push('');
  lines.push(`- Today review default max: ${audit.workload.srsCap} cards`);
  lines.push(`- Manual Review catch-up cap: ${audit.workload.manualReviewCap} cards`);
  lines.push(`- Axis review staging: up to ${audit.workload.axisReviewDailyCap} ordinary axis cards become due per day after a ${audit.workload.axisReviewFirstDelay}-day first delay; existing floods are repaired into that staged queue.`);
  lines.push(`- Consolidation trigger: due >= ${audit.workload.consolidationTrigger}`);
  lines.push('- Lessons 1-3: 20-30 minute foundation days, with only the existing optional Lesson 2/3 stretch before Lesson 4.');
  lines.push('');
  lines.push('| Day | Lesson payload | Available pool after lesson | Today governor route | Depth block |');
  lines.push('| --- | --- | --- | --- | --- |');
  audit.lessons.forEach(L=>{
    const w = L.workload;
    const payload = `glyph ${w.lessonPayloadIfTaken.newGlyphCards}, final ${w.lessonPayloadIfTaken.newFinalCards}, quiz ${w.lessonPayloadIfTaken.lessonQuizCount}`;
    const avail = `glyph ${w.availablePool.glyphCards}, final ${w.availablePool.finalCards}, tone ${w.availablePool.toneItems}, twins ${w.availablePool.twinSets}, echo ${w.availablePool.echoItems}, stories ${w.availablePool.stories}, fluency ${w.availablePool.fluencyReads}, chunks ${w.availablePool.chunks}, signs ${w.availablePool.signs}, font ${w.availablePool.fontShock}, mouth ${w.availablePool.mouthCoach}`;
    const route = `due ${w.todayGovernorRouteAtThisDueLoad.dueSrsBeforeCap} -> served ${w.todayGovernorRouteAtThisDueLoad.dueSrsServedAfterCap} / cap ${w.todayGovernorRouteAtThisDueLoad.srsCap}; ${w.todayGovernorRouteAtThisDueLoad.todayType}`;
    lines.push(`| ${L.day} | ${safeCell(payload)} | ${safeCell(avail)} | ${safeCell(route)} | ${safeCell(w.todayGovernorRouteAtThisDueLoad.depthBlockLikely)} |`);
  });
  lines.push('');
  lines.push('## v5.4 Fluency Reads');
  lines.push('');
  (audit.fluencyReads||[]).forEach(read=>{
    lines.push(`- Lesson ${String(read.gate||'').replace('l','')}: ${safeCell(read.title)}${read.realWorld ? ' (controlled real-world)' : ' (cumulative)'} · ${read.itemCount} Thai items · check: ${safeCell(read.check||'')}`);
  });
  lines.push(`- Final checkpoint: ${audit.phase1Completion.questionCount} questions; ${audit.phase1Completion.pass}.`);
  lines.push('');
  lines.push('## Reading Word Recurrence');
  lines.push('');
  lines.push('Corpus: Reading-room story tokens plus fluency-read tokens. Status is OK at 4+ encounters, or 6+ for true-cluster words.');
  lines.push('');
  lines.push('| Word | Reading | Earliest gate | Encounters | Cluster | Status |');
  lines.push('| --- | --- | --- | --- | --- | --- |');
  (audit.wordRecurrence||[]).forEach(row=>{
    lines.push(`| ${safeCell(row.word)} | ${safeCell(row.tr)} | ${safeCell(row.earliestGate)} | ${row.total} | ${row.isCluster ? 'yes' : 'no'} | ${safeCell(row.status)} |`);
  });
  lines.push('');
  lines.push('## v6.3 Decode Gym');
  lines.push('');
  lines.push('Seeded word-reading reps. Eligibility is gate-checked through the same prerequisite machinery as controlled reading surfaces; tone column is derived from the transliteration and verified against the route grid in the startup contract.');
  lines.push('');
  lines.push('| Gate | Thai | Reading | Tone | Verified |');
  lines.push('| --- | --- | --- | --- | --- |');
  (audit.decodeGym||[]).forEach(item=>{
    lines.push(`| ${safeCell(item.gate)} | ${safeCell(item.thai)} | ${safeCell(item.tr)} | ${safeCell(item.tone)} | ${item.verified ? 'yes' : 'NO'} |`);
  });
  lines.push('');
  lines.push('## v7.6 Fresh-decode transfer corpora');
  lines.push('');
  lines.push('Never-taught real words that certify decoding transfer rather than word memory. FRESH_DECODE feeds lesson quizzes (l4+) and the maintenance block with class-coloured prompts; ASSESSMENT_BANK is sealed for mastery checkpoints and the Phase 1 completion checkpoint with neutral prompts. Freshness (absence from every other app surface), tone routes, gate decodability and supply floors are re-verified per commit by tools/fresh-decode-check.js.');
  lines.push('');
  const freshServed = (audit.freshDecode||{}).served || {};
  Object.keys(freshServed).forEach(key=>lines.push(`- ${safeCell(key)}: ${safeCell(freshServed[key])}`));
  lines.push('');
  [['FRESH_DECODE (lesson quizzes + maintenance)', (audit.freshDecode||{}).poolA], ['ASSESSMENT_BANK (checkpoints + final, sealed)', (audit.freshDecode||{}).assessmentBank]].forEach(pair=>{
    lines.push(`### ${pair[0]}`);
    lines.push('');
    lines.push('| Gate | Thai | Reading | Tone | Verified |');
    lines.push('| --- | --- | --- | --- | --- |');
    (pair[1]||[]).forEach(item=>{
      lines.push(`| ${safeCell(item.gate)} | ${safeCell(item.thai)} | ${safeCell(item.tr)} | ${safeCell(item.tone)} | ${item.verified ? 'yes' : 'NO'} |`);
    });
    lines.push('');
  });
  lines.push('## v7.9 Sealed retention-decode corpus');
  lines.push('');
  lines.push('These real words appear only in delayed retention. Lesson-stage assignments are fixed: a +1 word cannot reappear at +7 or in another lesson check. The 30-day subset is isolated from all earlier surfaces.');
  lines.push('');
  const retentionServed = (audit.retentionDecode||{}).served || {};
  Object.keys(retentionServed).forEach(key=>lines.push(`- ${safeCell(key)}: ${safeCell(retentionServed[key])}`));
  lines.push(`- state: ${safeCell((audit.retentionDecode||{}).state || '')}`);
  lines.push('');
  lines.push('| Gate | Stage | Thai | Reading | Tone | Verified |');
  lines.push('| --- | --- | --- | --- | --- | --- |');
  ((audit.retentionDecode||{}).bank||[]).forEach(item=>{
    lines.push(`| ${safeCell(item.gate)} | ${safeCell(item.stage)} | ${safeCell(item.thai)} | ${safeCell(item.tr)} | ${safeCell(item.tone)} | ${item.verified ? 'yes' : 'NO'} |`);
  });
  lines.push('');
  lines.push('## v6.4 Capture Loop');
  lines.push('');
  lines.push(`Wild captures use local typed input only. State key: ${safeCell((audit.captureLoop||{}).stateKey)}; cap: ${safeCell((audit.captureLoop||{}).cap)}.`);
  lines.push(`Route boundary: ${safeCell((audit.captureLoop||{}).routeBoundary)}.`);
  lines.push(`Entry points: ${safeCell(((audit.captureLoop||{}).entryPoints||[]).join(', '))}.`);
  lines.push('');
  lines.push('## Named Surface Audit');
  lines.push('');
  lines.push('These rows reuse the app source gates. `Available` is the post-gate pool after each lesson; `Served` is the per-session cap where that surface has one; `Blocked/excluded` is the raw candidate count held back by prerequisite, role, form or option-building gates.');
  lines.push('');
  lines.push('| Day | Surface | Available | Served / cap | Blocked/excluded | Prerequisites | Role contract |');
  lines.push('| --- | --- | --- | --- | --- | --- | --- |');
  audit.lessons.forEach(L=>{
    (L.surfaceAudit||[]).forEach(s=>{
      const role = s.roleContract || {};
      const roleText = [role.status || 'N/A', role.note || '', role.excludedCount ? 'role-excluded ' + role.excludedCount : ''].filter(Boolean).join(' · ');
      lines.push(`| ${L.day} | ${safeCell(s.name)} | ${s.availableItemCount} ${safeCell(s.unit||'items')} | ${s.servedCount} / ${s.cap} | ${s.blockedExcludedCount} | ${safeCell((s.prerequisiteStatus||{}).status || 'PASS')} | ${safeCell(roleText)} |`);
    });
  });
  lines.push('');
  lines.push('## Lesson Map');
  lines.push('| Day | Lesson | New starts | Finals taught | Quiz axes | Available pools after lesson | Issues |');
  lines.push('| --- | --- | --- | --- | --- | --- | --- |');
  audit.lessons.forEach(L=>{
    const axes = Object.entries(L.quiz.axes).map(([k,v])=>`${k}:${v}`).join(', ');
    const finals = L.finalJobs.map(f=>`${f.glyph} ${f.sound}`).join(', ') || '-';
    const practice = [
      L.afterLesson.toneItems.length ? `tone ${L.afterLesson.toneItems.length}` : '',
      L.afterLesson.twinSets.length ? `twins ${L.afterLesson.twinSets.length}` : '',
      L.afterLesson.echoItems.length ? `echo ${L.afterLesson.echoItems.length}` : '',
      L.afterLesson.unlockedStories.length ? `stories ${L.afterLesson.unlockedStories.length}` : ''
    ].filter(Boolean).join(', ') || '-';
    lines.push(`| ${L.day} | ${safeCell(L.id + ' ' + L.title)} | ${safeCell(L.newStarts.join(' ') || '-')} | ${safeCell(finals)} | ${safeCell(axes)} | ${safeCell(practice)} | ${safeCell(L.issues.join('; ') || '-')} |`);
  });
  lines.push('');
  lines.push('## Per-Lesson Detail');
  audit.lessons.forEach(L=>{
    lines.push(`### ${L.id} - ${L.title}`);
    lines.push(`- Unit: ${L.unit}`);
    lines.push(`- Glyphs: ${(L.glyphs||[]).join(' ') || '-'}`);
    lines.push(`- Final jobs: ${L.finalJobs.map(f=>`${f.glyph} -> ${f.sound} (${f.group})`).join(', ') || '-'}`);
    lines.push(`- Quiz count: ${L.quiz.count}`);
    lines.push(`- Quiz axes: ${Object.entries(L.quiz.axes).map(([k,v])=>`${k} ${v}`).join(', ') || '-'}`);
    lines.push(`- Review after lesson: glyph cards ${L.afterLesson.learnedGlyphs.length}, start-consonant glyphs ${L.afterLesson.learnedStarts.length}, final cards ${L.afterLesson.learnedFinals.length}, echo pool ${L.afterLesson.echoItems.length}`);
    lines.push(`- Workload: lesson payload glyph ${L.workload.lessonPayloadIfTaken.newGlyphCards}, final ${L.workload.lessonPayloadIfTaken.newFinalCards}, quiz ${L.workload.lessonPayloadIfTaken.lessonQuizCount}; Today route due ${L.workload.todayGovernorRouteAtThisDueLoad.dueSrsBeforeCap}, served ${L.workload.todayGovernorRouteAtThisDueLoad.dueSrsServedAfterCap}/${L.workload.todayGovernorRouteAtThisDueLoad.srsCap}, ${L.workload.todayGovernorRouteAtThisDueLoad.todayType}`);
    lines.push(`- Surface audit: ${(L.surfaceAudit||[]).map(s=>`${s.name} ${s.availableItemCount} ${s.unit||'items'} -> ${s.servedCount}/${s.cap} ${s.prerequisiteStatus.status}`).join('; ') || '-'}`);
    lines.push(`- Unlocked drills: ${L.afterLesson.unlockedDrills.join(', ') || '-'}`);
    lines.push('- Quiz prompts:');
    L.quiz.prompts.forEach(q=>{
      const label = [q.axis, q.text || q.prompt].filter(Boolean).join(': ');
      lines.push(`  - ${label} -> ${q.answer}`);
    });
    lines.push('- Words:');
    L.words.forEach(w=>{
      const tags = [
        w.role,
        w.final ? `final ${w.final}${w.finalSound ? ' ' + w.finalSound : ''}` : '',
        w.hiddenVowel ? `hidden ${w.hiddenVowel}` : '',
        w.vowelOrder || '',
        w.vowelLength || '',
        w.cluster || ''
      ].filter(Boolean).join('; ');
      lines.push(`  - ${w.thai} (${w.tr}) - ${tags}`);
    });
    if(L.issues.length){
      lines.push('- Issues:');
      L.issues.forEach(i=>lines.push(`  - ${i}`));
    }
    lines.push('');
  });
  return lines.join('\n');
}

function stripGeneratedAt(audit){
  const copy = JSON.parse(JSON.stringify(audit));
  delete copy.generatedAt;
  return copy;
}

function preserveGeneratedAtIfContentSame(audit){
  try{
    const previous = JSON.parse(fs.readFileSync(JSON_OUT, 'utf8'));
    if(JSON.stringify(stripGeneratedAt(previous)) === JSON.stringify(stripGeneratedAt(audit)) && previous.generatedAt){
      audit.generatedAt = previous.generatedAt;
    }
  }catch(e){}
  return audit;
}

const html = indexHtml();
const box = sandbox(html);
vm.runInNewContext(appScript(html) + auditSnippet(appVersionFromHtml(html)), box, {filename:INDEX});
box.__phase1Audit = preserveGeneratedAtIfContentSame(box.__phase1Audit);
fs.mkdirSync(DOCS_DIR, {recursive:true});
fs.writeFileSync(JSON_OUT, JSON.stringify(box.__phase1Audit, null, 2));
fs.writeFileSync(MD_OUT, renderMarkdown(box.__phase1Audit));
console.log(`wrote ${path.relative(ROOT, JSON_OUT)}`);
console.log(`wrote ${path.relative(ROOT, MD_OUT)}`);
