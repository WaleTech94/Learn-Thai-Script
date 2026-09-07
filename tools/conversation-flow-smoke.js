#!/usr/bin/env node
const assert=require('assert/strict');
const fs=require('fs');
const path=require('path');
const vm=require('vm');
const {createConversationDocument}=require('./conversation-dom');
const ROOT=path.resolve(__dirname,'..');
const html=fs.readFileSync(path.join(ROOT,'index.html'),'utf8');
const embedded=html.match(/<script>([\s\S]*)<\/script>/)[1].replace(/\n\(async function init\(\)\{[\s\S]*?\n\}\)\(\);\s*$/,'\n');
const document=createConversationDocument();
document.body.innerHTML=html.split('<script src=')[0];
const sandbox={console,Date,Math,JSON,RegExp,Set,Map,Intl,URLSearchParams,document,navigator:{},location:{protocol:'http:',search:''},localStorage:{getItem(){return null;},setItem(){},removeItem(){}},sessionStorage:{getItem(){return null;},setItem(){},removeItem(){}},speechSynthesis:{cancel(){},resume(){},speak(){},getVoices(){return [];}},SpeechSynthesisUtterance:function(text){this.text=text;},setTimeout(){return 1;},clearTimeout(){},setInterval(){return 1;},clearInterval(){},matchMedia(){return {matches:false};},addEventListener(){},removeEventListener(){}};
sandbox.window=sandbox;sandbox.globalThis=sandbox;vm.createContext(sandbox);
vm.runInContext(require('./app-source').readConversationSource(ROOT)+'\n'+embedded,sandbox);
const flow=vm.runInContext(`(()=>{
 const initial=JSON.stringify(state);let pending=null,day=cvPlusDays(bangkokDayStr(),-14);bangkokDayStr=()=>day;
 speak=(thai,button,rate,callback,role)=>{pending={thai,callback,role};};
 playConversationTurns=(p,turns,button,options)=>{pending={thai:'scene',callback:options.onComplete};};
 stopConversationSpeech=()=>{};openOverlay=()=>{};closeOverlay=()=>{player=null;};setProg=()=>{};saveState=()=>{};renderHome=()=>{};sfxComplete=()=>{};clearLocalRecording=()=>{};
 return {
  reset:()=>{state=JSON.parse(initial);state.conversation=cvFreshConversationState();player=null;pending=null;},
  state:()=>state,p:()=>player,nextDay:()=>{day=cvPlusDays(day,1);},finishSpeech:(ok=true)=>{const call=pending;pending=null;if(call&&call.callback)call.callback(ok);},pending:()=>pending,
  startLesson:startConversationCourseLesson,startAssessment:startConversationAssessment,startConsolidation:startConversationConsolidation,
  resume:resumeConversationCourseTask,repair:()=>cvRepairConversationState(state),importValid:cvValidateConversationImport,
  snapshot:()=>JSON.stringify(state),roundtrip:()=>{state=JSON.parse(JSON.stringify(state));cvRepairConversationState(state);},
  lines:CV1_LINES,lessons:CV1_LESSONS,consolidation:CV1_CONSOLIDATION,gateId:CV1_WEEK1_GATE,forms:CV1_RETENTION_FORMS,gates:CV1_GATE_FORMS,archive:CV1_ARCHIVED_FORMS,
  objectives:cvBuildObjectives,spec:cvChoiceSpec,shuffle:cvShuffled,due:cvDueAssignments,
  check:startConversationLearningCheck,checkQuestions:cvCheckQuestions,checkValid:cvLearningCheckValid,checkSummary:cvCheckSummary,
  checkReading:cvCheckReadingQuestions,renderCheck:renderConversationLearningCheck,renderChoice:cvRenderChoiceQuestion,
  readingIds:LESSONS.map(x=>x.id),taught:taughtGlyphSet,prerequisites:prerequisiteIssuesForThai,
  setPlayer:p=>{player=p;},
  checkStore:cvCheckStore
 };
})()`,sandbox);
function el(id){const x=document.getElementById(id);assert(x,'Missing '+id+' in '+document.stage.innerHTML.slice(0,150));return x;}
function click(id){el(id).click();}
function buttons(selector){return document.stage.querySelectorAll(selector);}
function pass(text){console.log('PASS '+text);}
function answerChoice(correct=true){
 const p=flow.p();let spec;
 if(p.kind==='learning-check')spec=flow.checkQuestions(p.check)[p.check.index];
 else if(p.kind==='lesson')spec=flow.spec(p.objectives[p.guidedIndex*2]);
 else if(p.phase==='repair')spec=flow.spec(p.missed[p.repairIndex]);
 else spec=flow.spec(p.objectives[p.objectiveIndex]);
 const order=flow.shuffle(spec.options,(p.runSeed||p.taskId)+'|'+spec.id);
 if(spec.cue){assert(el('cv-choice-unsure').disabled);click('cv-choice-cue');flow.finishSpeech();}
 const index=order.findIndex(x=>correct?x.id===spec.answer:x.id!==spec.answer);
 const option=order[index];
 if(option.audio){const b=buttons('[data-cv-option-audio]').find(b=>Number(b.dataset.cvOptionAudio)===index);b.click();flow.finishSpeech();}
 buttons('[data-cv-option]').find(b=>Number(b.dataset.cvOption)===index).click();
}
function build(line){
 for(let i=0;i<line.segments.length;i++){
  const bank=el('cv-builder-bank');const b=bank.querySelectorAll('[data-cv-builder-part]').find(x=>Number(x.dataset.cvBuilderPart)===i);assert(b);b.click();
 }
 click('cv-builder-check');
}
function recall(help=false){
 if(document.getElementById('cv-recall-cue')){click('cv-recall-cue');flow.finishSpeech();}
 click(help?'cv-recall-help':'cv-recall-reveal');
 assert(document.stage.innerHTML.includes('Model for comparison'));
 if(document.getElementById('cv-recall-next'))click('cv-recall-next');
}
function completeLesson(id){
 flow.startLesson(id);click('cv-next');
 while(flow.p().phase==='pairs'){
  const p=flow.p(),item=p.lesson.interactions[p.pairIndex];
  assert(el('cv-next').disabled);click('cv-model-reply');
  flow.finishSpeech(false);assert(el('cv-next').disabled,'failed speech unlocked model');
  click('cv-model-reply');flow.finishSpeech();click('cv-next');
  if(item.cue){click('cv-pair-cue');flow.finishSpeech();}
  build(item.response);flow.finishSpeech();if(item.event&&item.partnerReply)flow.finishSpeech();
  const before=p.evidence.spokenBeforeRevealIds.length;
  assert(!p.evidence.spokenBeforeRevealIds.includes('cv1.spoken.lesson.w01.l0'+p.lesson.number+'.supported.0'+(p.pairIndex+1)),'playback credited speaking');
  click('cv-next');assert.equal(p.evidence.spokenBeforeRevealIds.length,before+1);
 }
 assert.equal(flow.p().phase,'scene');click('cv-scene-play');flow.finishSpeech();click('cv-next');
 while(flow.p().phase==='guided'||flow.p().phase==='resolution'){
  const p=flow.p();
  if(p.phase==='resolution'){if(p.resumable){const next=p.resolution.returnIndex;flow.roundtrip();assert(flow.resume());assert.equal(flow.p().resolution.returnIndex,next);}recall();continue;}
  const item=p.lesson.interactions[p.guidedIndex];
  answerChoice();click('cv-choice-next');build(item.response);
  assert(!document.getElementById('cv-builder'),'tiles still visible during recall');
  const count=p.evidence.spokenBeforeRevealIds.length;
  if(document.getElementById('cv-recall-cue')){click('cv-recall-cue');flow.finishSpeech();}
  assert.equal(p.evidence.spokenBeforeRevealIds.length,count,'hearing cue credited speaking');
  click('cv-recall-reveal');click('cv-recall-next');
 }
 assert.equal(flow.p().phase,'substitution');assert(el('cv-next').disabled);click('cv-model-reply');flow.finishSpeech();click('cv-next');
 build(flow.p().lesson.substitution.to);flow.finishSpeech(false);assert(el('cv-next').disabled);click('cv-builder-replay');flow.finishSpeech();click('cv-next');
 buttons('[data-cv-rating]')[0].click();assert(flow.p().completed);flow.importValid(flow.state().conversation);
}
flow.reset();
for(const id of Object.keys(flow.lessons)){completeLesson(id);flow.nextDay();}
pass('all three complete lessons: model gating, builders, explicit recall and repair resolution');
const completedState=JSON.stringify(flow.state());
if(process.argv.includes('--write-fixture'))fs.writeFileSync('/tmp/aan-week1-fixture.json',completedState);
const d7=flow.state().conversation.retention['cv1.retention.w01.l03.d7'];
assert(flow.due(flow.state(),'2099-01-01').some(x=>x.id==='cv1.retention.w01.l03.d7'));
assert(flow.forms['cv1.retention.w01.l03.d7'].every(form=>!JSON.stringify(form).includes('transport.')));
pass('Lesson 3 +7 review is available without Week 2 and uses Week 1 content');
// Verify every current question key and positional variety independently of UI.
const positions=new Set();
for(const form of [...flow.gates,...Object.values(flow.forms).flat()]){
 const mode=flow.gates.includes(form)?'gate':'assessment';
 for(const q of flow.objectives(form.items,form.id,mode)){
  const spec=flow.spec(q),key=form.id+'|'+q.id,order=flow.shuffle(spec.options,key);
  assert.equal(spec.options.filter(x=>x.id===spec.answer).length,1);
  assert.deepEqual(flow.shuffle(spec.options,key),order,'choice order rerolled');
  if(spec.skill==='listening'){positions.add(order.findIndex(x=>x.id===spec.answer));assert.equal(spec.heading,'What does the vendor mean?');}
 }
}
assert.equal(positions.size,3);
pass('all current forms: cue-derived keys, neutral listening prompts, stable varied positions');
// Preserve an immutable answered question and its feedback across reload.
flow.startAssessment('retention','cv1.retention.w01.l01.d1');click('cv-next');answerChoice(false);
const first=flow.p().evidence.firstCorrectIds.length,answered=flow.p().evidence.answeredIds.slice();
flow.roundtrip();flow.resume();assert(document.stage.innerHTML.includes('Your first answer is saved'));
assert.equal(flow.p().evidence.firstCorrectIds.length,first);assert.equal(JSON.stringify(flow.p().evidence.answeredIds),JSON.stringify(answered));
click('cv-choice-next');
pass('assessment miss and feedback survive reload without rewriting the first answer');
// Restore lesson-only baseline for supplementary check isolation.
Object.assign(flow.state(),JSON.parse(completedState));
flow.state().done=['l1','l2','l3','l4'];
flow.startAssessment('retention','cv1.retention.w01.l02.d1');
const protectedBefore=JSON.stringify({...flow.state(),conversation:{...flow.state().conversation,extensions:{}}});
flow.check();click('cv-check-start');answerChoice(false);
const savedAnswer=JSON.stringify(flow.p().check.answers);flow.roundtrip();flow.check();
assert.equal(JSON.stringify(flow.p().check.answers),savedAnswer);assert(document.stage.innerHTML.includes('Your first answer is saved'));click('cv-choice-next');
let seenReading=0,seenRecall=0;
while(flow.p().kind==='learning-check'){
 const p=flow.p(),q=flow.checkQuestions(p.check)[p.check.index];
 if(q.skill==='spoken'){
  seenRecall++;recall(true);
  assert(buttons('[data-cv-recall-rating]').find(x=>x.dataset.cvRecallRating==='independent').disabled);
  buttons('[data-cv-recall-rating]').find(x=>x.dataset.cvRecallRating==='model').click();
 }else{if(q.skill==='reading')seenReading++;answerChoice();click('cv-choice-next');}
}
assert.equal(seenRecall,3);assert.equal(seenReading,2);
assert.equal(JSON.stringify({...flow.state(),conversation:{...flow.state().conversation,extensions:{}}}),protectedBefore,'learning check changed course/Phase 1 authority');
const store=flow.checkStore();assert(flow.checkValid(store));assert.equal(store.runs.length,1);assert.equal(flow.checkSummary(store.runs[0]).spoken.independent,0);
const bad=JSON.parse(JSON.stringify(store));bad.runs[0].answers.find(x=>x.rating).rating='independent';assert(!flow.checkValid(bad),'supported answer accepted as independent');
flow.importValid(flow.state().conversation);
flow.state().conversation.extensions.learningCheck=bad;flow.repair();assert(!flow.state().conversation.extensions.learningCheck,'malformed optional check was trusted');
assert(flow.state().conversation.lessons[Object.keys(flow.lessons)[0]].firstCompleted);
pass('supplementary check: resume, separate scores, honest recall, strict import/recovery, progression isolation');
for(let n=0;n<=24;n++){
 const ids=Array.from(flow.readingIds).slice(0,n),qs=flow.checkReading(ids,'reading-coverage');
 assert.equal(qs.length,n?2:0);
 assert.equal(JSON.stringify(qs),JSON.stringify(flow.checkReading(ids,'reading-coverage')),'reading items/options rerolled');
 for(const q of qs){assert.equal(q.options.filter(x=>x.id===q.answer).length,1);if(q.id.startsWith('cvcheck.read.word.'))assert.equal(flow.prerequisites(q.id.slice('cvcheck.read.word.'.length),ids,'test').length,0);}
}
pass('reading check at all 25 entry points: taught prerequisites, stable questions, no early fresh-word testing');

// A stale cue callback must not unlock a different rendered question.
const standalone={taskId:'stale-test',runSeed:'stable'};flow.setPlayer(standalone);
const specs=flow.objectives(flow.gates[0].items,flow.gates[0].id,'gate').map(flow.spec).filter(x=>x.skill==='listening');
flow.renderChoice(standalone,specs[0],{onAnswer(){throw Error('unexpected answer');}});click('cv-choice-cue');
flow.renderChoice(standalone,specs[1],{onAnswer(){throw Error('unexpected answer');}});flow.finishSpeech();
assert(el('cv-choice-unsure').disabled,'stale playback unlocked the next prompt');
flow.state().conversation.recovery=null;
const unrelated=JSON.stringify(flow.state().conversation.resume);completeLesson(Object.keys(flow.lessons)[0]);
assert.equal(JSON.stringify(flow.state().conversation.resume),unrelated,'replay discarded another review');
pass('stale audio cannot unlock a new view; lesson replay preserves another review');
// Complete consolidation and fail/repair/retry the gate through real handlers.
Object.assign(flow.state(),JSON.parse(completedState));flow.nextDay();flow.startConsolidation();click('cv-next');
answerChoice(false);click('cv-choice-next');flow.roundtrip();flow.resume();
while(flow.p().phase==='objective'){answerChoice();click('cv-choice-next');}
while(flow.p().phase==='spoken')recall(true);
while(flow.p().phase==='transfer'){
 build(flow.consolidation.transfers[flow.p().transferIndex]);flow.finishSpeech(false);
 assert(el('cv-transfer').disabled);click('cv-builder-replay');flow.finishSpeech();click('cv-transfer');
}
click('cv-weak');assert(flow.p().completed);flow.importValid(flow.state().conversation);
assert.equal(flow.state().conversation.activities.consolidations[flow.consolidation.id].firstPct,Math.round(100*(flow.p().objectives.length-1)/flow.p().objectives.length));
flow.nextDay();flow.startAssessment('gate',flow.gateId);click('cv-next');
while(flow.p().phase==='objective'){answerChoice(flow.p().objectiveIndex%2===0);click('cv-choice-next');}
while(flow.p().phase==='spoken')recall(true);
assert.equal(flow.p().phase,'repair');const cold=flow.state().conversation.gates[flow.gateId].firstPct;
answerChoice(false);click('cv-choice-next');assert.equal(flow.p().repairIndex,0);
while(flow.p().phase==='repair'&&!flow.p().completed){answerChoice();click('cv-choice-next');}
assert.equal(flow.state().conversation.gates[flow.gateId].firstPct,cold);assert.equal(flow.state().conversation.gates[flow.gateId].passedAt,null);flow.importValid(flow.state().conversation);
flow.nextDay();flow.startAssessment('gate',flow.gateId);click('cv-next');
while(flow.p().phase==='objective'){answerChoice();click('cv-choice-next');}
while(flow.p().phase==='spoken')recall();
assert(flow.p().completed);assert(flow.state().conversation.gates[flow.gateId].passedAt);assert.equal(flow.state().conversation.gates[flow.gateId].firstPct,cold);flow.importValid(flow.state().conversation);
pass('full consolidation and failed gate: genuine repair, immutable cold score, next-day gate pass');
