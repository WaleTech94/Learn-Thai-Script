#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const INDEX = path.join(ROOT, 'index.html');

function appScript(html){
  const match = html.match(/<script>([\s\S]*)<\/script>/);
  if(!match) throw new Error('script block not found');
  const course = require('./app-source').readConversationSource(ROOT);
  return course + '\n' + match[1].replace(/\n\(async function init\(\)\{[\s\S]*?\n\}\)\(\);\s*$/, '\n/* init skipped for arcade smoke */\n');
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

class StubElement {
  constructor(){
    this.style = {};
    this.dataset = {};
    this.classList = {add(){}, remove(){}, toggle(){}, contains(){ return false; }};
    this.innerHTML = '';
    this.textContent = '';
    this.value = '';
    this.checked = false;
    this.disabled = false;
  }
  addEventListener(){}
  removeEventListener(){}
  querySelector(){ return new StubElement(); }
  querySelectorAll(){ return []; }
  setAttribute(){}
  appendChild(){}
  focus(){}
  click(){}
  remove(){}
}

function makeAudioParam(value, events, label){
  return {
    value,
    setValueAtTime(next, at){ this.value = next; events.push({kind:label + ':set', value:next, at}); },
    exponentialRampToValueAtTime(next, at){ this.value = next; events.push({kind:label + ':ramp', value:next, at}); }
  };
}

function makeSandbox(){
  const elements = new Map();
  const audioEvents = [];
  const getElement = id=>{
    if(!elements.has(id)) elements.set(id, new StubElement());
    return elements.get(id);
  };
  class FakeAudioContext {
    constructor(){ this.currentTime = 0; this.state = 'running'; this.destination = {}; }
    createOscillator(){
      const oscillator = {
        type:'sine',
        frequency:makeAudioParam(0, audioEvents, 'frequency'),
        detune:makeAudioParam(0, audioEvents, 'detune'),
        connect(){},
        start(at){ audioEvents.push({kind:'oscillator', type:this.type, frequency:this.frequency.value, detune:this.detune.value, at}); },
        stop(){}
      };
      return oscillator;
    }
    createGain(){
      return {gain:makeAudioParam(0, audioEvents, 'gain'), connect(){}};
    }
    resume(){ this.state = 'running'; return Promise.resolve(); }
  }
  const body = getElement('body');
  body.dataset = {};
  body.appendChild = ()=>{};
  const document = {
    body,
    documentElement:{style:{}},
    visibilityState:'visible',
    hasFocus(){ return true; },
    addEventListener(){},
    removeEventListener(){},
    getElementById:getElement,
    querySelector(){ return new StubElement(); },
    querySelectorAll(){ return []; },
    createElement(){ return new StubElement(); }
  };
  const math = Object.create(Math);
  math.random = seededRandom('street-arcade-smoke-v1');
  const box = {
    console,
    setTimeout(){ return 1; },
    clearTimeout(){},
    setInterval(){ return 1; },
    clearInterval(){},
    Date,
    Math:math,
    JSON,
    RegExp,
    navigator:{},
    location:{protocol:'http:', search:'', reload(){}},
    document,
    localStorage:{getItem(){ return null; }, setItem(){}, removeItem(){}},
    sessionStorage:{getItem(){ return null; }, setItem(){}, removeItem(){}},
    speechSynthesis:{cancel(){}, resume(){}, speak(){}, getVoices(){ return []; }},
    SpeechSynthesisUtterance:function(){},
    AudioContext:FakeAudioContext,
    matchMedia(){ return {matches:false, addEventListener(){}, removeEventListener(){}}; },
    addEventListener(){},
    removeEventListener(){},
    window:null
  };
  box.window = box;
  box.globalThis = box;
  box.__smokeHost = {elements, audioEvents};
  return box;
}

function exposureSnippet(){
  return `
globalThis.__arcadeSmoke = {
  ARCADE_GAMES, LESSONS, FRESH_DECODE, ASSESSMENT_BANK, RETENTION_DECODE_BANK,
  ensureStateCollections, arcadeGameGateMet, ownsArcadeGame, arcadeRoundsForGame,
  startArcadeGame, submitArcadeAnswer, advanceArcadeRound,
  startThemePreview, stopThemePreview,
  sfxArcadeStart, sfxArcadeCorrect, sfxArcadeWrong, sfxArcadeFinish,
  get state(){ return state; }, set state(value){ state = value; },
  get player(){ return player; }, set player(value){ player = value; }
};
`;
}

function assert(condition, message){
  if(!condition) throw new Error(message);
}

function snapshotProgress(state){
  return JSON.stringify({
    baht:state.baht,
    done:state.done,
    srs:state.srs,
    checks:state.checks,
    streak:state.streak,
    phase1Completion:state.phase1Completion
  });
}

function main(){
  const html = fs.readFileSync(INDEX, 'utf8');
  const box = makeSandbox();
  vm.createContext(box);
  vm.runInContext(appScript(html) + exposureSnippet(), box, {filename:'index.html'});
  const api = box.__arcadeSmoke;
  const host = box.__smokeHost;
  const baseState = JSON.parse(JSON.stringify(api.state));
  const doneFor = count=>api.LESSONS.slice(0, count).map(lesson=>lesson.id);
  const freshState = count=>{
    const next = JSON.parse(JSON.stringify(baseState));
    next.done = doneFor(count);
    next.packs = [];
    next.themes = [];
    next.soundPacks = [];
    next.sfxVoice = 'default';
    next.sfx = true;
    next.theme = 'night';
    next.drillLog = {};
    next.errorProfile = {};
    api.ensureStateCollections(next);
    api.state = next;
    api.player = null;
    return next;
  };

  const expected = [
    {id:'arcade-parcel', lesson:2, rounds:10, free:true},
    {id:'arcade-market', lesson:4, rounds:8, free:false},
    {id:'arcade-tuktuk', lesson:13, rounds:10, free:false}
  ];
  expected.forEach(spec=>{
    const game = api.ARCADE_GAMES.find(item=>item.id === spec.id);
    assert(game, spec.id + ' missing');
    freshState(spec.lesson - 1);
    assert(!api.arcadeGameGateMet(game), spec.id + ' opened before its lesson gate');
    freshState(spec.lesson);
    assert(api.arcadeGameGateMet(game), spec.id + ' did not open at its lesson gate');
    assert(api.ownsArcadeGame(game) === spec.free, spec.id + ' ownership boundary is wrong');
    if(!spec.free){ api.state.packs.push(game.id); assert(api.ownsArcadeGame(game), spec.id + ' did not honour packs[] ownership'); }
  });
  console.log('PASS arcade gates and packs[] ownership');

  const sealed = new Set([
    ...api.FRESH_DECODE.map(item=>item.thai),
    ...api.ASSESSMENT_BANK.map(item=>item.thai),
    ...api.RETENTION_DECODE_BANK.map(item=>item.thai)
  ]);
  expected.forEach(spec=>{
    const game = api.ARCADE_GAMES.find(item=>item.id === spec.id);
    freshState(spec.lesson);
    if(!spec.free) api.state.packs.push(game.id);
    const rounds = api.arcadeRoundsForGame(game, api.state.done);
    assert(rounds.length === spec.rounds, `${spec.id} made ${rounds.length}/${spec.rounds} rounds at its gate`);
    rounds.forEach(round=>{
      const word = round.target && round.target.thai;
      assert(!word || !sealed.has(word), spec.id + ' leaked a sealed decode word');
    });
  });
  console.log('PASS exact-gate round supply and sealed-bank isolation');

  expected.forEach(spec=>{
    const game = api.ARCADE_GAMES.find(item=>item.id === spec.id);
    const state = freshState(spec.lesson);
    if(!spec.free) state.packs.push(game.id);
    const before = snapshotProgress(state);
    api.startArcadeGame(game.id);
    assert(api.player && api.player.type === 'arcade', spec.id + ' did not start');
    assert(api.player.rounds.length === spec.rounds, spec.id + ' started with the wrong round count');
    assert(host.elements.get('stage').innerHTML.includes(`data-game="${game.id}"`), spec.id + ' did not render its cabinet');
    for(let i=0; i<spec.rounds; i++){
      const round = api.player.rounds[api.player.i];
      const choice = i % 2 === 0 ? round.answer : '__intentional_miss__';
      const result = api.submitArcadeAnswer(choice);
      assert(result && result.ok === (i % 2 === 0), spec.id + ' answer result mismatch at round ' + (i+1));
      assert(host.elements.get('stage').innerHTML.includes('arcade-feedback'), spec.id + ' did not render feedback');
      assert(api.advanceArcadeRound(), spec.id + ' did not advance at round ' + (i+1));
    }
    const record = state.drillLog[game.id];
    assert(record && record.n === 1, spec.id + ' did not save one result');
    assert(record.lastScore === Math.ceil(spec.rounds / 2), spec.id + ' saved the wrong score');
    assert(api.player.result && api.player.result.stars === 1, spec.id + ' result stars are wrong');
    assert(snapshotProgress(state) === before, spec.id + ' changed progression, currency, SRS, mastery or streak');
  });
  console.log('PASS three complete game runs, feedback, misses and personal records');

  const previewState = freshState(13);
  api.startThemePreview('yaowarat');
  assert(box.document.body.dataset.theme === 'yaowarat', 'theme preview did not apply');
  assert(previewState.theme === 'night', 'theme preview changed saved theme');
  api.stopThemePreview();
  assert(box.document.body.dataset.theme === 'night', 'theme preview did not restore saved theme');
  console.log('PASS temporary theme preview and restore');

  const soundState = freshState(13);
  function soundSignature(fn){
    host.audioEvents.length = 0;
    fn();
    return host.audioEvents.filter(event=>event.kind === 'oscillator').map(event=>`${event.type}:${Math.round(event.frequency)}`).join('|');
  }
  const signatures = [
    soundSignature(()=>api.sfxArcadeStart('arcade-parcel')),
    soundSignature(()=>api.sfxArcadeStart('arcade-market')),
    soundSignature(()=>api.sfxArcadeStart('arcade-tuktuk')),
    soundSignature(()=>api.sfxArcadeCorrect('arcade-market', 5)),
    soundSignature(()=>api.sfxArcadeWrong('arcade-tuktuk')),
    soundSignature(()=>api.sfxArcadeFinish(3))
  ];
  assert(signatures.every(Boolean), 'one or more arcade sound events scheduled no oscillators');
  assert(new Set(signatures).size === signatures.length, 'arcade sound signatures are not distinct');
  const defaultOscillators = signatures[3].split('|').length;
  soundState.soundPacks = ['ranat'];
  soundState.sfxVoice = 'ranat';
  const ranatSignature = soundSignature(()=>api.sfxArcadeCorrect('arcade-market', 5));
  assert(ranatSignature.split('|').length > defaultOscillators, 'Ranat voice did not schedule its richer sound');
  soundState.sfx = false;
  assert(soundSignature(()=>api.sfxArcadeFinish(3)) === '', 'muted sound path still scheduled audio');
  console.log('PASS distinct default sounds, Ranat voice and mute path');

  console.log('PASS Street Arcade deterministic smoke (3 games, preview and sound)');
}

try{ main(); }
catch(error){ console.error('FAIL Street Arcade smoke - ' + (error && error.message || error)); process.exit(1); }
