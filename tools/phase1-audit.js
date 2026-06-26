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
  const match = html.match(/<span class="version-pill">(v[^<]+)<\/span>/);
  return match ? match[1] : null;
}

function appScript(html){
  const match = html.match(/<script>([\s\S]*)<\/script>/);
  if(!match) throw new Error('script block not found');
  return match[1].replace(/\n\(async function init\(\)\{[\s\S]*?\n\}\)\(\);\s*$/, '\n/* init skipped for phase1 audit */\n');
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

function sandbox(){
  const doc = {
    body:{style:{}, classList:{add(){}, remove(){}, toggle(){}}},
    documentElement:{style:{}},
    addEventListener(){},
    removeEventListener(){},
    getElementById(){ return stubElement(); },
    querySelector(){ return stubElement(); },
    querySelectorAll(){ return []; },
    createElement(){ return stubElement(); }
  };
  const box = {
    console,
    setTimeout,
    clearTimeout,
    Date,
    Math,
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
    const unit = ({'sound-twins':'sets','mixed-review':'questions','reading-stories':'stories','sign-safari':'signs','mouth-coach':'cards','contrast-block':'blocks','bangkok-mission':'missions','axis-review':'cards','retention-check':'checks'}[id]) || 'items';
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
      available.length ? Math.min(40, available.length) : 0,
      40,
      raw.length,
      {status:available.length === raw.length ? 'PASS' : 'FAIL', issueCount:raw.length - available.length, issues:[]},
      roleContract('N/A', [], 'separate SRS axes for glyph/class/initial/final/live-dead/tone/listen/say/transfer')
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
    const chunkCount = chunkItems(doneIds).length;
    const signCount = signSafariItems(doneIds).length;
    const fontCount = fontShockItems(doneIds).length;
    const mouthCount = mouthCoachCards(doneIds).length;
    const dueBeforeCap = learnedGlyphs.length + learnedFinals.length;
    const dueServedAfterCap = Math.min(40, dueBeforeCap);
    const dayType = (dueBeforeCap > 45 || index === LESSONS.length - 1) ? 'Consolidation day' : 'Lesson day';
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
        chunks:chunkCount,
        signs:signCount,
        fontShock:fontCount,
        mouthCoach:mouthCount
      },
      servedDailyLoad:{
        dueSrsBeforeCap:dueBeforeCap,
        dueSrsServedAfterCap:dueServedAfterCap,
        srsCap:40,
        consolidationTrigger:45,
        todayType:dayType,
        depthBlockLikely:depthBlock,
        earlyFoundationRule:earlyFoundation ? '20-30 minute foundation day; optional Lesson 2/3 stretch only before Lesson 4' : '45 minute target route',
        estimatedLoadBand:earlyFoundation ? '20-30 min core' : '45 min target'
      },
      todayGovernorRouteAtThisDueLoad:{
        dueSrsBeforeCap:dueBeforeCap,
        dueSrsServedAfterCap:dueServedAfterCap,
        srsCap:40,
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
        unlockedDrills:DRILLS.filter(d=>lessonGateMet(d.gate, doneIds)).map(d=>d.id),
        unlockedStories:STORIES.filter(s=>doneIds.includes(s.gate)).map(s=>s.id)
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
    validatorResult('v5Transfer', validateV5TransferContracts),
    validatorResult('v51Polish', validateV51PolishContracts),
    validatorResult('v52Bridge', validateV52BridgeContracts),
    validatorResult('v52FullBrief', validateV52FullBriefContracts)
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
      srsCap:40,
      consolidationTrigger:45,
      note:'Lesson payload, available pools and Today governor served workload are separate. Served review is capped by Today/SRS, and due > 45 creates a consolidation day.'
    },
    lessons:LESSONS.map(lessonAudit)
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
  lines.push('Lesson payload is the content added if that lesson is taken. Today governor route is the daily serving plan: review is capped by SRS, due loads over the consolidation trigger become consolidation days, and Lessons 1-3 remain shorter foundation days.');
  lines.push('');
  lines.push(`- SRS cap: ${audit.workload.srsCap} cards per review session`);
  lines.push(`- Consolidation trigger: due > ${audit.workload.consolidationTrigger}`);
  lines.push('- Lessons 1-3: 20-30 minute foundation days, with only the existing optional Lesson 2/3 stretch before Lesson 4.');
  lines.push('');
  lines.push('| Day | Lesson payload | Available pool after lesson | Today governor route | Depth block |');
  lines.push('| --- | --- | --- | --- | --- |');
  audit.lessons.forEach(L=>{
    const w = L.workload;
    const payload = `glyph ${w.lessonPayloadIfTaken.newGlyphCards}, final ${w.lessonPayloadIfTaken.newFinalCards}, quiz ${w.lessonPayloadIfTaken.lessonQuizCount}`;
    const avail = `glyph ${w.availablePool.glyphCards}, final ${w.availablePool.finalCards}, tone ${w.availablePool.toneItems}, twins ${w.availablePool.twinSets}, echo ${w.availablePool.echoItems}, stories ${w.availablePool.stories}, chunks ${w.availablePool.chunks}, signs ${w.availablePool.signs}, font ${w.availablePool.fontShock}, mouth ${w.availablePool.mouthCoach}`;
    const route = `due ${w.todayGovernorRouteAtThisDueLoad.dueSrsBeforeCap} -> served ${w.todayGovernorRouteAtThisDueLoad.dueSrsServedAfterCap} / cap ${w.todayGovernorRouteAtThisDueLoad.srsCap}; ${w.todayGovernorRouteAtThisDueLoad.todayType}`;
    lines.push(`| ${L.day} | ${safeCell(payload)} | ${safeCell(avail)} | ${safeCell(route)} | ${safeCell(w.todayGovernorRouteAtThisDueLoad.depthBlockLikely)} |`);
  });
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

const html = indexHtml();
const box = sandbox();
vm.runInNewContext(appScript(html) + auditSnippet(appVersionFromHtml(html)), box, {filename:INDEX});
fs.mkdirSync(DOCS_DIR, {recursive:true});
fs.writeFileSync(JSON_OUT, JSON.stringify(box.__phase1Audit, null, 2));
fs.writeFileSync(MD_OUT, renderMarkdown(box.__phase1Audit));
console.log(`wrote ${path.relative(ROOT, JSON_OUT)}`);
console.log(`wrote ${path.relative(ROOT, MD_OUT)}`);
