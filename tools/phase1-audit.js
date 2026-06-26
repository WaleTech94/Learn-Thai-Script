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
        toneItems,
        twinSets,
        echoItems,
        unlockedDrills:DRILLS.filter(d=>lessonGateMet(d.gate, doneIds)).map(d=>d.id),
        unlockedStories:STORIES.filter(s=>doneIds.includes(s.gate)).map(s=>s.id)
      },
      issues
    };
  }
  const validators = [
    validatorResult('audio', validateAudioContracts),
    validatorResult('vocabulary', validateVocabularyContracts),
    validatorResult('coverage', validateCoverageContracts),
    validatorResult('reviewChoices', validateReviewChoiceContracts),
    validatorResult('finalSounds', validateFinalSoundContracts),
    validatorResult('structuralClarity', validateStructuralClarityContracts),
    validatorResult('balancedChoices', validateBalancedComponentChoiceContracts),
    validatorResult('misconceptionChoices', validateMisconceptionChoiceContracts)
  ];
  return {
    generatedAt:new Date().toISOString(),
    appVersion:${JSON.stringify(appVersion)},
    lessonCount:LESSONS.length,
    validators,
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
  lines.push('This is the generated review surface for Phase 1. The markdown gives a readable map; the adjacent `phase1_audit.json` contains the full extracted quiz prompts, options, lesson words and generated pools for sub-agent or scripted review.');
  lines.push('');
  lines.push('## Validator Status');
  audit.validators.forEach(v=>{
    lines.push(`- ${v.ok ? 'PASS' : 'FAIL'} ${v.name}${v.issues.length ? ': ' + v.issues.join('; ') : ''}`);
  });
  lines.push('');
  lines.push('## Lesson Map');
  lines.push('| Day | Lesson | New starts | Finals taught | Quiz axes | Generated pools after lesson | Issues |');
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
