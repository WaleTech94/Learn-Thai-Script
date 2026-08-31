#!/usr/bin/env node
const fs = require('fs');
const os = require('os');
const path = require('path');
const vm = require('vm');
const {spawnSync} = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const INDEX = path.join(ROOT, 'index.html');

function readIndex(){
  return fs.readFileSync(INDEX, 'utf8');
}

function appScript(html){
  const match = html.match(/<script>([\s\S]*)<\/script>/);
  if(!match) throw new Error('script block not found');
  const course = fs.readFileSync(path.join(ROOT, 'conversation-course.js'), 'utf8');
  return course + '\n' + match[1].replace(/\n\(async function init\(\)\{[\s\S]*?\n\}\)\(\);\s*$/, '\n/* init skipped for precommit check */\n');
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
    remove(){},
    innerHTML:'',
    textContent:'',
    value:'',
    checked:false,
    disabled:false
  };
}

function sandbox(){
  const doc = {
    body:{style:{}, classList:{add(){}, remove(){}, toggle(){}}, appendChild(){}},
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
    location:{protocol:'http:', search:''},
    document:doc,
    addEventListener(){},
    removeEventListener(){},
    localStorage:{getItem(){ return null; }, setItem(){}, removeItem(){}},
    sessionStorage:{getItem(){ return null; }, setItem(){}, removeItem(){}},
    speechSynthesis:{cancel(){}, resume(){}, speak(){}, getVoices(){ return []; }},
    SpeechSynthesisUtterance:function(){},
    window:null
  };
  box.window = box;
  box.globalThis = box;
  return box;
}

function runCheck(name, fn){
  try{
    const detail = fn() || '';
    console.log(`PASS ${name}${detail ? ' - ' + detail : ''}`);
    return true;
  }catch(e){
    console.log(`FAIL ${name} - ${e.message || e}`);
    return false;
  }
}

function checkScriptSyntax(html){
  const script = appScript(html);
  const temp = path.join(os.tmpdir(), `aan-thai-script-${process.pid}.js`);
  fs.writeFileSync(temp, script);
  const result = spawnSync(process.execPath, ['--check', temp], {encoding:'utf8'});
  fs.rmSync(temp, {force:true});
  if(result.status !== 0){
    throw new Error((result.stderr || result.stdout || 'node --check failed').trim());
  }
  return 'embedded script parses';
}

function checkNfc(html){
  if(html !== html.normalize('NFC')) throw new Error('index.html is not NFC-normalized');
  return 'index.html is NFC-normalized';
}

function checkParticle(html){
  if(html.includes('ค่ะ')) throw new Error('female polite particle ค่ะ found in index.html');
  return 'no ค่ะ found';
}

function checkCurrency(html){
  const hits = [...html.matchAll(/฿/g)];
  if(hits.length !== 1) throw new Error(`expected exactly one ฿ occurrence, found ${hits.length}`);
  const start = Math.max(0, hits[0].index - 90);
  const end = Math.min(html.length, hits[0].index + 90);
  const context = html.slice(start, end);
  if(!/thai:"บาท"[\s\S]{0,90}baht \((?:฿)\)/.test(context)){
    throw new Error('the only ฿ must be the Lesson 3 บาท content');
  }
  return 'only Lesson 3 บาท uses ฿';
}

function checkConversationFrontDoor(html){
  const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'manifest.json'), 'utf8'));
  const sw = fs.readFileSync(path.join(ROOT, 'sw.js'), 'utf8');
  const onboardingStart = html.indexOf('const ONBOARDING_STEPS = [');
  const onboardingEnd = html.indexOf('function onboardingStepHtml', onboardingStart);
  if(onboardingStart < 0 || onboardingEnd < 0) throw new Error('onboarding source boundary is missing');
  const onboardingSource = html.slice(onboardingStart, onboardingEnd);
  if(!html.includes("const APP_VERSION = 'v8.4.0'") || !html.includes('Order something in your first lesson') || !html.includes('Start Lesson 1')){
    throw new Error('v8.4.0 conversation-course onboarding identity is incomplete');
  }
  if(/Read Thai from zero|This is letters, not phrase memorising|Start reading/.test(onboardingSource)){
    throw new Error('retired reading-first onboarding copy remains');
  }
  const readingPanelStart = html.indexOf('<div id="reading-companion-panel" hidden>');
  const readingPanelEnd = html.indexOf('<div class="settings-row">', readingPanelStart);
  if(readingPanelStart < 0 || readingPanelEnd < 0 || !['class="today-focus"','class="daily-section"','id="course-map-drawer"'].every(marker=>html.slice(readingPanelStart, readingPanelEnd).includes(marker))){
    throw new Error('complete literacy surface must remain collapsed inside the optional reading companion');
  }
  if(!/usable conversational Thai/i.test(manifest.description || '') || !/reading as a gradual companion/i.test(manifest.description || '')){
    throw new Error('manifest must describe conversation first and gradual reading');
  }
  if(!sw.includes("const CACHE = 'aan-thai-v8-4-0'") || !sw.includes("'./conversation-course.js'")) throw new Error('service-worker cache must include the v8.4 course module');
  return 'spoken goal, gradual-reading manifest and cache refresh aligned';
}

function checkBeginnerConversation(html){
  const course = fs.readFileSync(path.join(ROOT, 'conversation-course.js'), 'utf8');
  const source = html + '\n' + course;
  const required = [
    'Order something in your first lesson',
    'Tap phrase parts into the right order',
    'Test vendor',
    'Test your reply',
    'Build your reply',
    'Check my sentence',
    'Build it again with less help',
    'Change one part',
    'Pronunciation-spelling key',
    'conversationVoiceForRole',
    'pauseAfter || 1000',
    'validateV840ConversationBuilderContracts'
  ];
  const missing = required.filter(text=>!source.includes(text));
  if(missing.length) throw new Error('beginner conversation scaffold missing: ' + missing.join(', '));
  if(/scene\.gist|renderConversationPilotGist/.test(source)) throw new Error('cold gist-first conversation surface remains');
  return 'short meaning-first lessons, tap builders and separated conversation roles present';
}

function toneSnippet(){
  return `
globalThis.__precommitTone = (function(){
  const PREPOSED = new Set(['เ','แ','โ','ใ','ไ']);
  const SHORT_VOWELS = new Set(['ะ','ั','ิ','ึ','ุ','็']);
  const LONG_VOWELS = new Set(['า','ี','ื','ู','อ']);
  const STOP_FINALS = new Set(['ก','ข','ค','ฆ','จ','ช','ซ','ฎ','ฏ','ฐ','ฑ','ฒ','ด','ต','ถ','ท','ธ','บ','ป','พ','ฟ','ภ','ศ','ษ','ส']);
  const THAI_RE = /[\\u0E00-\\u0E7F]/;

  function firstTrTone(tr){
    const parts = String(tr || '').normalize('NFD').split(/[\\s·\\-]+/).filter(Boolean);
    return toneOf(parts[0] || tr || '');
  }
  function firstTrHasToneMark(tr){
    const first = (String(tr || '').normalize('NFD').split(/[\\s·\\-]+/).filter(Boolean)[0] || '');
    return /[\\u0300\\u0301\\u0302\\u030C]/.test(first);
  }
  function isConsonant(ch){
    return !!(GLYPHS[ch] && GLYPHS[ch].type === 'c');
  }
  function consonantAt(chars, from){
    for(let i=from;i<chars.length;i++){
      if(isConsonant(chars[i])) return i;
    }
    return -1;
  }
  function nextConsonant(chars, from){
    for(let i=from;i<chars.length;i++){
      if(isConsonant(chars[i])) return {index:i, ch:chars[i]};
      if(PREPOSED.has(chars[i])) break;
    }
    return null;
  }
  function consonantIsFinal(after, index){
    const rest = after.slice(index + 1).filter(ch=>!/^[่้๊๋์]$/.test(ch));
    const next = rest[0];
    if(!next) return true;
    if(PREPOSED.has(next)) return true;
    if(SHORT_VOWELS.has(next) || LONG_VOWELS.has(next) || next === 'ำ') return false;
    return true;
  }
  function firstSyllableMark(chars, soundIndex){
    const index = chars.findIndex(ch=>/[่้๊๋]/.test(ch));
    return index >= 0 && index <= soundIndex + 3 ? chars[index] : '';
  }
  function liveDeadLength(chars, soundIndex, preposed){
    const after = chars.slice(soundIndex + 1).filter(ch=>!/^[่้๊๋์]$/.test(ch));
    if(preposed === 'ไ' || preposed === 'ใ') return {liveDead:'Live', length:'not needed'};
    if(preposed === 'โ' || preposed === 'เ' || preposed === 'แ'){
      const nextC = nextConsonant(after, 0);
      const final = nextC && consonantIsFinal(after, nextC.index) && nextC.ch;
      const shortPreposed = after.includes('็');
      if(final) return {liveDead:STOP_FINALS.has(final) ? 'Dead' : 'Live', length:STOP_FINALS.has(final) ? (shortPreposed ? 'Short' : 'Long') : 'not needed'};
      return {liveDead:'Live', length:'not needed'};
    }
    const vowelIndex = after.findIndex(ch=>SHORT_VOWELS.has(ch) || LONG_VOWELS.has(ch) || ch === 'ำ');
    const vowel = vowelIndex >= 0 ? after[vowelIndex] : '';
    const nextC = nextConsonant(after, vowelIndex >= 0 ? vowelIndex + 1 : 0);
    if(vowel === 'ำ') return {liveDead:'Live', length:'not needed'};
    if(vowel && SHORT_VOWELS.has(vowel)){
      const final = nextC && consonantIsFinal(after, nextC.index) && nextC.ch;
      if(final) return {liveDead:STOP_FINALS.has(final) ? 'Dead' : 'Live', length:STOP_FINALS.has(final) ? 'Short' : 'not needed'};
      return {liveDead:'Dead', length:'Short'};
    }
    if(vowel && LONG_VOWELS.has(vowel)){
      const final = nextC && consonantIsFinal(after, nextC.index) && nextC.ch;
      if(final) return {liveDead:STOP_FINALS.has(final) ? 'Dead' : 'Live', length:STOP_FINALS.has(final) ? 'Long' : 'not needed'};
      return {liveDead:'Live', length:'not needed'};
    }
    if(nextC && consonantIsFinal(after, nextC.index)){
      return {liveDead:STOP_FINALS.has(nextC.ch) ? 'Dead' : 'Live', length:STOP_FINALS.has(nextC.ch) ? 'Short' : 'not needed'};
    }
    if(nextC) return {liveDead:'Dead', length:'Short'};
    return {liveDead:'Live', length:'not needed'};
  }
  function fallbackTone(thai, tr){
    const firstWord = String(thai || '').trim().split(/\\s+/)[0];
    const chars = [...firstWord].filter(ch=>THAI_RE.test(ch));
    if(!chars.length) return null;
    const preposed = PREPOSED.has(chars[0]) ? chars[0] : '';
    const initialIndex = consonantAt(chars, preposed ? 1 : 0);
    if(initialIndex < 0) return null;
    let initial = chars[initialIndex];
    let cls = GLYPHS[initial] && GLYPHS[initial].cls;
    let soundIndex = initialIndex;
    const next = consonantAt(chars, initialIndex + 1);
    if(initial === 'ห' && next >= 0 && GLYPHS[chars[next]] && GLYPHS[chars[next]].cls === 'low'){
      cls = 'high';
      soundIndex = next;
    } else if(initial === 'อ' && next >= 0 && chars[next] === 'ย'){
      cls = 'mid';
      soundIndex = next;
    }
    const mark = firstTrHasToneMark(tr) ? firstSyllableMark(chars, soundIndex) : '';
    const route = liveDeadLength(chars, soundIndex, preposed);
    return expectedToneFromRoute(cls, mark, route.liveDead, route.length);
  }
  function routeTone(item){
    const thai = item.thai || item.t || '';
    if(/^(SLANG|PHRASES|TEACHER|FOOD2|TAXI_GRAB|MARKET_BARGAIN)/.test(item.path || '') && item.path !== 'PHRASES[0]') return null;
    if(/^(FRESH_DECODE|ASSESSMENT_BANK|RETENTION_DECODE_BANK)/.test(item.path || '')){
      const freshRoute = freshDecodeRoute({thai, tr:item.tr});
      return freshRoute ? freshRoute.tone : 'unverifiable fresh-decode entry';
    }
    const source = Object.assign({}, findWord(thai) || {}, item, {thai, tr:item.tr});
    const doneIds = item.gate ? lessonIdsThroughGate(item.gate) : LESSONS.map(L=>L.id);
    const route = toneRouteForWord(source, doneIds);
    if(route) return route.tone;
    if(item.name && TONE_NAMES.includes(item.name)) return item.name;
    return fallbackTone(thai, item.tr);
  }
  function collect(value, path, out, seen){
    if(!value || typeof value !== 'object' || seen.has(value)) return;
    seen.add(value);
    if(typeof value.tr === 'string' && (typeof value.thai === 'string' || typeof value.t === 'string')){
      out.push({path, thai:value.thai || value.t, tr:value.tr, gate:value.gate, name:value.name, frame:value.frame});
    }
    if(Array.isArray(value)){
      value.forEach((item,i)=>collect(item, path + '[' + i + ']', out, seen));
    } else {
      Object.keys(value).forEach(key=>collect(value[key], path + '.' + key, out, seen));
    }
  }
  const roots = {LESSONS, TONES, TONES2, TONE_SETS, LENGTH_PAIRS, SLANG, PHRASES, TEACHER, FOOD2, TAXI_GRAB, MARKET_BARGAIN, POSTCARDS, STORIES, FLUENCY_READS, DECODE_GYM, FRESH_DECODE, ASSESSMENT_BANK, RETENTION_DECODE_BANK, CHUNK_ITEMS, SIGN_SAFARI_ITEMS, FONT_SHOCK_ITEMS, MOUTH_COACH_CARDS, CONTRAST_BLOCKS, BANGKOK_MISSIONS, LESSON_PAYOFFS};
  const items = [];
  Object.keys(roots).forEach(key=>collect(roots[key], key, items, new Set()));
  const issues = [];
  let checked = 0;
  let skipped = 0;
  items.forEach(item=>{
    const expected = routeTone(item);
    if(!expected){ skipped++; return; }
    checked++;
    const actual = firstTrTone(item.tr);
    if(expected !== actual){
      issues.push(item.path + ': ' + item.thai + ' / ' + item.tr + ' expected ' + expected + ' but tr gives ' + actual);
    }
  });
  return {checked, skipped, issues};
})();
`;
}

function decodabilitySnippet(){
  return `
globalThis.__precommitStories = (function(){
  const issues = [];
  STORIES.forEach(story=>{
    const doneIds = lessonIdsThroughGate(story.gate);
    const taught = taughtGlyphSet(doneIds);
    (story.lines || []).flat().forEach(item=>{
      const thai = itemThai(item);
      if(!thaiTextReadable(thai, taught)){
        issues.push(story.id + ' (' + story.gate + '): ' + thai + ' is not readable at gate');
      }
    });
  });
  return {checked:STORIES.length, issues};
})();
`;
}

function runAppSnippet(snippet, prop){
  const html = readIndex();
  const box = sandbox();
  vm.runInNewContext(appScript(html) + snippet, box, {filename:INDEX});
  return box[prop];
}

function checkToneGrid(){
  const result = runAppSnippet(toneSnippet(), '__precommitTone');
  if(result.issues.length) throw new Error(result.issues.slice(0, 12).join('; '));
  return `${result.checked} tr items checked${result.skipped ? ', ' + result.skipped + ' skipped' : ''}`;
}

function checkStories(){
  const result = runAppSnippet(decodabilitySnippet(), '__precommitStories');
  if(result.issues.length) throw new Error(result.issues.slice(0, 12).join('; '));
  return `${result.checked} stories readable at gate`;
}

function checkFreshDecode(){
  const result = spawnSync(process.execPath, [path.join(__dirname, 'fresh-decode-check.js')], {encoding:'utf8'});
  if(result.status !== 0){
    throw new Error(String(result.stderr || result.stdout || 'fresh-decode-check failed').split('\n').slice(0, 12).join('; '));
  }
  return String(result.stdout || '').trim().replace(/^fresh-decode corpus check OK: /, '');
}

function checkConversationSmoke(){
  const result = spawnSync(process.execPath, [path.join(__dirname, 'conversation-smoke.js')], {encoding:'utf8'});
  if(result.status !== 0){
    throw new Error(String(result.stderr || result.stdout || 'conversation smoke failed').split('\n').slice(0, 16).join('; '));
  }
  return 'v8.4.0 builder, route, state and role-voice boundaries verified';
}

const html = readIndex();
const results = [
  runCheck('embedded script syntax', ()=>checkScriptSyntax(html)),
  runCheck('NFC normalization', ()=>checkNfc(html)),
  runCheck('male-particle policy', ()=>checkParticle(html)),
  runCheck('currency policy', ()=>checkCurrency(html)),
  runCheck('conversation-first front door', ()=>checkConversationFrontDoor(html)),
  runCheck('zero-knowledge conversation lesson', ()=>checkBeginnerConversation(html)),
  runCheck('conversation interaction smoke', checkConversationSmoke),
  runCheck('tone-grid transliteration', checkToneGrid),
  runCheck('reading-story decodability', checkStories),
  runCheck('fresh-decode corpora', checkFreshDecode)
];

if(results.some(ok=>!ok)) process.exit(1);
