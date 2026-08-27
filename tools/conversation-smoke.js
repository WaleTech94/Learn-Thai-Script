#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const HTML = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const match = HTML.match(/<script>([\s\S]*)<\/script>/);
if(!match) throw new Error('embedded app script not found');
const script = match[1].replace(/\n\(async function init\(\)\{[\s\S]*?\n\}\)\(\);\s*$/, '\n/* init skipped by conversation smoke */\n');

function stubElement(){
  const attrs = new Map();
  return {
    style:{}, dataset:{}, innerHTML:'', textContent:'', value:'', disabled:false, hidden:false,
    classList:{add(){},remove(){},toggle(){},contains(){ return false; }},
    addEventListener(){},removeEventListener(){},appendChild(){},remove(){},focus(){},click(){},
    querySelector(){ return stubElement(); },querySelectorAll(){ return []; },closest(){ return null; },
    setAttribute(key,value){ attrs.set(key,String(value)); },removeAttribute(key){ attrs.delete(key); },hasAttribute(key){ return attrs.has(key); },
    getAttribute(key){ return attrs.get(key) || null; },scrollIntoView(){}
  };
}
const body = stubElement();
const documentStub = {
  body, activeElement:stubElement(), documentElement:stubElement(),
  addEventListener(){},removeEventListener(){},getElementById(){ return stubElement(); },
  querySelector(){ return stubElement(); },querySelectorAll(){ return []; },createElement(){ return stubElement(); }
};
const sandbox = {
  console, Date, Math, JSON, RegExp, Set, Map, Intl,
  setTimeout,clearTimeout,setInterval,clearInterval,
  document:documentStub,navigator:{},location:{protocol:'http:',search:''},
  localStorage:{getItem(){ return null; },setItem(){},removeItem(){}},
  sessionStorage:{getItem(){ return null; },setItem(){},removeItem(){}},
  speechSynthesis:{cancel(){},resume(){},speak(){},getVoices(){ return []; }},
  SpeechSynthesisUtterance:function(text){ this.text=text; },
  matchMedia(){ return {matches:false}; },addEventListener(){},removeEventListener(){},
  window:null,globalThis:null
};
sandbox.window = sandbox;
sandbox.globalThis = sandbox;
vm.createContext(sandbox);
vm.runInContext(script, sandbox, {filename:'index.html'});

const api = vm.runInContext(`({
  scene:FOOD_ORDER_PILOT,
  optionIds:conversationResponseOptionIds,
  evidenceComplete:conversationEvidenceComplete,
  recordRun:recordConversationRun,
  todayComplete:conversationTodayComplete,
  freshConversationState,
  todayStr,
  exitGuard:conversationPilotExitWouldDiscard,
  onboardingEligible:onboardingEligibleForState,
  completeOnboarding,
  responseSource:String(renderConversationPilotResponse),
  recordSource:String(renderConversationPilotRecord),
  swapSource:String(renderConversationPilotSwap),
  roleplaySource:String(renderConversationPilotRoleplay),
  playbackSource:String(playConversationTurns)+String(setConversationActiveTurn)+String(stopConversationSpeech),
  sceneSource:String(renderConversationPilotScene),
  resetSource:String(resetProgressNow),
  recorderSource:String(toggleLocalRecording),
  recordLimit:LOCAL_RECORDING_LIMIT_MS,
  version:APP_VERSION
})`, sandbox);

function assert(ok, message){ if(!ok) throw new Error(message); }
function pass(message){ console.log('PASS ' + message); }

const active = api.scene.chunks.filter(chunk=>chunk.practiceMode === 'active');
const routines = api.scene.chunks.filter(chunk=>chunk.practiceMode === 'routine');
assert(api.scene.chunks.length === 6 && active.length === 4 && routines.length === 2, 'expected six moves split into four active and two routines');
assert(JSON.stringify(active.map(x=>x.id).sort()) === JSON.stringify(api.scene.responses.map(x=>x.answer).sort()), 'active response coverage drifted');
assert(api.swapSource.indexOf('Preteach the change') < api.swapSource.indexOf('Try it with support'), 'substitution production appears before preteach');
pass('move coverage and no-cold-production guard');

const positions = new Set(), permutations = new Set();
for(let offset=0;offset<3;offset++){
  api.scene.responses.forEach((item,index)=>{
    const p = {optionOffset:offset,responseOptionOrders:{}};
    const first = api.optionIds(p,item,index), again = api.optionIds(p,item,index);
    assert(JSON.stringify(first) === JSON.stringify(again), 'option order changed during repair');
    positions.add(first.indexOf(item.answer));
    permutations.add(first.join('|'));
  });
}
assert(positions.size === 3 && permutations.size > 3, 'response choices do not exercise every answer position');
pass('shuffled stable response options');

assert(api.responseSource.includes('Say it, then retry this cue'), 'wrong answer has no required retry');
assert(api.responseSource.includes('playConversationTurns') && !api.responseSource.includes('item.options.map'), 'wrong repair or rotated choices are not wired');
assert(api.responseSource.includes('p.responseIndex++') && api.responseSource.indexOf('p.responseIndex++') < api.responseSource.lastIndexOf('return;'), 'correct clear path missing');
pass('wrong-answer cue/reply repair and required retry');
assert(api.responseSource.includes("scheduleConversationSpeech(p, 'responses', answer.thai") && api.roleplaySource.includes("scheduleConversationSpeech(p, 'roleplay', answer.thai"), 'active learner models do not play after supported actions');
pass('active learner-model playback');

assert(api.sceneSource.indexOf('conversation-playback-panel') < api.sceneSource.indexOf('conversationTranscriptHtml'), 'playback controls are below transcript');
assert(api.sceneSource.includes('data-conversation-stop') && api.playbackSource.includes('aria-current') && api.playbackSource.includes('scrollIntoView'), 'active turn or Stop is missing');
assert(api.playbackSource.includes('speechSynthesis.cancel') && api.playbackSource.includes('setTimeout(next, 900)'), 'stop/restart or turn gap is missing');
pass('active-turn highlight, scroll, stop and restart');

assert(api.recordLimit >= 30000 && api.recordSource.includes('Record one useful reply'), 'conversation recording is too short or too broad');
assert(api.recorderSource.includes('■ Stop recording') && api.recorderSource.includes('rec.stop()'), 'recording is not manually stoppable');
assert(!api.recordSource.includes('scene.chunks.map'), 'recording screen still concatenates all learner lines');
pass('45-second recorder and manual stop');

assert(api.exitGuard({type:'conversation-pilot',phase:'chunks',completed:false}), 'progressed conversation does not warn on exit');
assert(!api.exitGuard({type:'conversation-pilot',phase:'intro',completed:false}) && !api.exitGuard({type:'conversation-pilot',phase:'rating',completed:true}), 'conversation exit guard overreaches');
const resetState = {done:[],srs:{},notices:{onboardAfterReset:true}};
assert(api.onboardingEligible(resetState,true), 'reset marker cannot restore onboarding');
api.completeOnboarding('finish',resetState);
assert(!resetState.notices.onboardAfterReset && !api.onboardingEligible(resetState,true), 'reset onboarding marker does not clear');
assert(api.resetSource.includes('onboardAfterReset:true'), 'reset state does not set onboarding marker');
pass('conversation exit guard and reset onboarding');

const evidence = {completed:api.todayStr(),pairAdvances:6,pairPlaybacks:6,scenePlaybackCompleted:true,responseChoices:4,responseFirstCorrect:2,roleplayReveals:4,swapRevealed:true,recordStepCompleted:true,recordingAttempted:false};
assert(api.evidenceComplete(evidence,api.scene), 'complete interaction evidence rejected');
const target = {done:['l1'],srs:{x:{iv:0,due:api.todayStr(),lapses:0}},days:{d:{r:1}},baht:11,streak:{count:2,last:null},checks:{x:true},retention:{x:true},conversation:api.freshConversationState()};
const before = JSON.stringify({done:target.done,srs:target.srs,days:target.days,baht:target.baht,streak:target.streak,checks:target.checks,retention:target.retention});
api.recordRun(api.scene.id,'getting-there',target,evidence);
assert(api.todayComplete(api.scene.id,target), 'complete run did not satisfy current-day spoken minimum');
assert(before === JSON.stringify({done:target.done,srs:target.srs,days:target.days,baht:target.baht,streak:target.streak,checks:target.checks,retention:target.retention}), 'conversation run mutated Phase 1 or reward state');
pass('current-day conversation credit isolated from literacy');

const thai = JSON.stringify(api.scene);
assert(!thai.includes('ค่ะ') && api.scene.chunks.every(chunk=>chunk.thai.endsWith('ครับ') && chunk.cue.thai.endsWith('ครับ')), 'male-polite Thai contract failed');
assert(!/https?:|\.(?:mp3|m4a|wav|ogg|aac|flac|webm)/i.test(thai), 'conversation data contains authored or remote audio');
assert(api.playbackSource.includes('SpeechSynthesisUtterance') && api.playbackSource.includes('speechSynthesis.speak'), 'device TTS playback missing');
const mediaFiles = [];
function walk(dir){
  fs.readdirSync(dir,{withFileTypes:true}).forEach(entry=>{
    if(entry.name === '.git') return;
    const full = path.join(dir,entry.name);
    if(entry.isDirectory()) walk(full);
    else if(/\.(?:mp3|m4a|wav|ogg|aac|flac|webm)$/i.test(entry.name)) mediaFiles.push(path.relative(ROOT,full));
  });
}
walk(ROOT);
assert(mediaFiles.length === 0, 'unexpected authored audio assets: ' + mediaFiles.join(', '));
pass('male-polite and device-TTS-only boundary');
assert(api.version === 'v8.2.3', 'expected v8.2.3 identity');
pass('v8.2.3 conversation smoke');
