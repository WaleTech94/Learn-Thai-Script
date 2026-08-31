#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const course = fs.readFileSync(path.join(ROOT, 'conversation-course.js'), 'utf8');
const match = html.match(/<script>([\s\S]*)<\/script>/);
if(!match) throw new Error('embedded app script not found');
const embedded = match[1].replace(/\n\(async function init\(\)\{[\s\S]*?\n\}\)\(\);\s*$/, '\n/* init skipped by conversation smoke */\n');

function stubElement(){
  const attrs = new Map();
  return {
    style:{},dataset:{},innerHTML:'',textContent:'',value:'',disabled:false,hidden:false,
    classList:{add(){},remove(){},toggle(){},contains(){return false;}},
    addEventListener(){},removeEventListener(){},appendChild(){},remove(){},focus(){},click(){},
    querySelector(){return stubElement();},querySelectorAll(){return [];},closest(){return null;},
    setAttribute(key,value){attrs.set(key,String(value));},removeAttribute(key){attrs.delete(key);},hasAttribute(key){return attrs.has(key);},getAttribute(key){return attrs.get(key)||null;},scrollIntoView(){}
  };
}
const body=stubElement();
const documentStub={body,activeElement:stubElement(),documentElement:stubElement(),addEventListener(){},removeEventListener(){},getElementById(){return stubElement();},querySelector(){return stubElement();},querySelectorAll(){return [];},createElement(){return stubElement();}};
const sandbox={console,Date,Math,JSON,RegExp,Set,Map,Intl,URLSearchParams,setTimeout,clearTimeout,setInterval,clearInterval,document:documentStub,navigator:{},location:{protocol:'http:',search:''},localStorage:{getItem(){return null;},setItem(){},removeItem(){}},sessionStorage:{getItem(){return null;},setItem(){},removeItem(){}},speechSynthesis:{cancel(){},resume(){},speak(){},getVoices(){return [];}},SpeechSynthesisUtterance:function(text){this.text=text;},matchMedia(){return {matches:false};},addEventListener(){},removeEventListener(){},window:null,globalThis:null};
sandbox.window=sandbox;sandbox.globalThis=sandbox;
vm.createContext(sandbox);vm.runInContext(course+'\n'+embedded,sandbox,{filename:'app-bundle.js'});

const api=vm.runInContext(`({
  version:APP_VERSION,
  lessons:CV1_LESSONS,
  scenes:CV1_SCENES,
  lines:CV1_LINES,
  consolidation:CV1_CONSOLIDATION,
  gateMeta:CV1_GATE_META,
  supportRatings:CV1_SUPPORT_RATINGS,
  gateForms:CV1_GATE_FORMS,
  gatePool:CV1_GATE_POOL,
  retentionForms:CV1_RETENTION_FORMS,
  fresh:cvFreshConversationState,
  repair:cvRepairConversationState,
  validateImport:cvValidateConversationImport,
  objectives:cvBuildObjectives,
  plusDays:cvPlusDays,
  bangkokDayStr,
  schedule:cvScheduleLessonRetention,
  due:cvDueAssignments,
  plannedDue:cvPlannedDueAssignments,
  claim:cvClaimMainCredit,
  resumeValid:cvResumeValid,
  resumeMatches:cvResumeMatchesAuthority,
  recoverResume:cvRecoveredAssessmentResume,
  assessmentRecord:cvAssessmentRecord,
  assessmentSpoken:cvAssessmentSpoken,
  weaknessSeen:cvWeaknessSeen,
  validator:validateV841ConversationTeachingContracts,
  courseSource:String(renderConversationCourseLesson)+String(cvRenderLessonPair)+String(cvRenderLessonGuided)+String(cvRenderLessonSubstitution)+String(cvRenderConsolidationTransfer),
  teachingSource:String(cvTeachingModelHtml),
  teachingHtml:line=>cvTeachingModelHtml(line),
  builderSource:String(cvSentenceBuilderHtml)+String(cvBindSentenceBuilder),
  builderBlocked:cvBuilderIsBlocked,
  builderOrder:cvBuilderOrder,
  pairSource:String(cvRenderLessonPair)+String(cvPronunciationKeyHtml),
  spokenSource:String(cvRenderAssessmentSpoken),
  assessmentSource:String(cvRenderAssessmentObjective)+String(cvFinishAssessment),
  playbackSource:String(playConversationTurns)+String(stopConversationSpeech),
  deviceSource:String(speakWithDeviceVoice),
  pickVoice,
  roleVoiceName:role=>(conversationVoiceForRole(role)||{}).name||null,
  roleRate:thaiRoleRate,
  resolveTurn:resolvedConversationTurn,
  resetSource:String(resetProgressNow)
})`,sandbox);

function assert(ok,message){if(!ok)throw new Error(message);}
function pass(message){console.log('PASS '+message);}

assert(api.version==='v8.4.1','expected v8.4.1 identity');
assert(api.validator(),'v8.4.1 validator failed');
assert(Object.keys(api.lessons).length===3,'expected three Week 1 lessons');
assert(api.scenes.l01.turns.length===8&&api.scenes.l02.turns.length===10&&api.scenes.l03.turns.length===13,'scene turn counts drifted');
assert(Object.values(api.lines).every(line=>line.revision===1&&['active','recognition','routine','slot','transfer-only'].includes(line.role)),'Thai line revision/role metadata drifted');
assert(api.lessons['cv1.lesson.w01.l01.food-order'].totalMinutes===10&&api.lessons['cv1.lesson.w01.l02.food-options'].totalMinutes===12&&api.lessons['cv1.lesson.w01.l03.repair'].totalMinutes===12,'lesson workloads drifted');
assert(api.consolidation.coreMinutes===8&&api.consolidation.ordinaryRepairMinutes===2&&api.consolidation.totalMinutes===10,'consolidation workload drifted');
assert(api.gateMeta.coreMinutes===10&&api.gateMeta.ordinaryRepairMinutes===2&&api.gateMeta.totalMinutes===12,'gate workload drifted');
assert(api.supportRatings.map(item=>item.id).join('|')==='full-support|some-support|minimal-support','course support-rating enum drifted');
pass('canonical Week 1 lesson and scene registry');

Object.values(api.lessons).forEach(lesson=>{
  const form=`cv1.form.lesson.w01.l0${lesson.number}.a`;
  assert(api.objectives(lesson.interactions,form,'lesson').length===6,'lesson objective count drifted');
});
assert(api.gateForms.length===3&&api.gateForms.every(form=>form.revision===1&&api.objectives(form.items,form.id,'gate').length===12),'gate forms drifted');
assert(Object.keys(api.gatePool).length===24,'Week 1 gate must retain 24 disjoint sealed interactions');
assert(api.gateForms.flatMap(form=>form.items.map(item=>item.id)).length===new Set(api.gateForms.flatMap(form=>form.items.map(item=>item.id))).size,'gate source interactions leaked across forms');
const gateA=api.gateForms[0],gateAObjectives=api.objectives(gateA.items,gateA.id,'gate');
assert(gateA.items.map(item=>item.id).join('|')==='cv1.interaction.assessment.w01.pool-a.l01.01|cv1.interaction.assessment.w01.pool-a.l02.01|cv1.interaction.assessment.w01.pool-a.l03.01|cv1.interaction.assessment.w01.pool-a.l01.02|cv1.interaction.assessment.w01.pool-a.l02.02|cv1.interaction.assessment.w01.pool-a.l03.02|cv1.interaction.assessment.w01.pool-a.l02.03|cv1.interaction.assessment.w01.pool-a.l03.03','gate A manifest drifted');
assert(gateAObjectives.slice(0,4).every(item=>item.direction==='intent')&&gateAObjectives.slice(4,8).every(item=>item.direction==='response'),'gate objective ordering drifted');
Object.entries(api.retentionForms).forEach(([id,forms])=>{
  const expected=id.endsWith('d1')?6:id.endsWith('d7')?8:12;
  assert(forms.length===2&&forms.every(form=>form.revision===1&&api.objectives(form.items,form.id,'assessment').length===expected),'retention form drifted: '+id);
});
['cv1.retention.w01.l01.d7','cv1.retention.w01.l02.d7','cv1.retention.w01.l03.d7'].forEach(id=>{
  const [a,b]=api.retentionForms[id];assert(a.items.every(item=>!b.items.some(other=>other.id===item.id)),'parallel +7 source IDs overlap: '+id);
});
pass('lesson, retention and gate form sizes');

const phase1={done:['l1'],srs:{g:{iv:2,due:'2026-08-28'}},days:{x:{r:1}},baht:17,streak:{count:4,last:'2026-08-27'},checks:{a:true},conversation:{schema:1,scenes:{old:{runs:2,firstCompleted:'2026-08-01',lastCompleted:'2026-08-02',selfRating:'ready',lastRun:null}}}};
const before=JSON.stringify({done:phase1.done,srs:phase1.srs,days:phase1.days,baht:phase1.baht,streak:phase1.streak,checks:phase1.checks});
api.repair(phase1);
assert(phase1.conversation.schema===2&&phase1.conversation.pace.cursor===0&&Object.keys(phase1.conversation.lessons).length===0,'legacy pilot invented course authority');
assert(before===JSON.stringify({done:phase1.done,srs:phase1.srs,days:phase1.days,baht:phase1.baht,streak:phase1.streak,checks:phase1.checks}),'conversation migration changed Phase 1');
const once=JSON.stringify(phase1.conversation);api.repair(phase1);assert(once===JSON.stringify(phase1.conversation),'migration is not idempotent');
const future={done:['l1'],conversation:{schema:3,authority:{bad:true}}};api.repair(future);assert(future.done.join('|')==='l1'&&future.conversation.schema===2&&future.conversation.recovery&&future.conversation.recovery.reason==='future-schema','future conversation schema was not isolated');
pass('schema-1 history migration and Phase 1 isolation');

const c=api.fresh(),lesson=api.lessons['cv1.lesson.w01.l01.food-order'];
api.schedule(c,lesson,'2026-08-28');
assert(c.retention['cv1.retention.w01.l01.d1'].due==='2026-08-29','+1 due date wrong');
assert(c.retention['cv1.retention.w01.l01.d7'].due==='2026-09-04','+7 due date wrong');
assert(api.bangkokDayStr(new Date('2026-08-28T16:59:59Z'))==='2026-08-28'&&api.bangkokDayStr(new Date('2026-08-28T17:00:00Z'))==='2026-08-29','Bangkok midnight wrong');
assert(api.validateImport(api.fresh()),'fresh schema-2 state should pass strict import validation');
const unknown=api.fresh();unknown.unexpected=true;let rejected=false;try{api.validateImport(unknown);}catch(_){rejected=true;}assert(rejected,'unknown schema-2 fields must reject import');
const l1=api.lessons['cv1.lesson.w01.l01.food-order'],spoken=l1.interactions.flatMap((_,index)=>['supported','reduced'].map(mode=>`cv1.spoken.lesson.w01.l01.${mode}.${String(index+1).padStart(2,'0')}`));
assert(api.resumeValid({taskId:l1.id,taskKind:'lesson',taskRevision:1,curriculumRevision:1,formId:null,formCycle:null,attemptOrdinal:1,runSeed:l1.id+'|1',startedDay:'2026-08-28',savedDay:'2026-08-28',stageId:'intro',stageIndex:0,itemIndex:0,evidence:{pairIdsPlayed:[],sceneIdsPlayed:[],responsePromptIds:[],responseFirstCorrectIds:[],responseRepairIds:[],itemIds:[],answeredIds:[],firstCorrectIds:[],clearedIds:[],spokenPromptIds:spoken,spokenBeforeRevealIds:[],modelRevealIds:[],supportOpenedIds:[],substitutionIds:[],transferIds:[],transferCompletedIds:[],recordStepCompleted:false,recordingAttempted:false}}),'valid Lesson 1 resume rejected');
const recoveryForm=api.gateForms[0],recoveryObjectives=api.objectives(recoveryForm.items,recoveryForm.id,'gate'),recoverySpoken=api.assessmentSpoken(recoveryForm,'gate'),recoverySpokenIds=recoverySpoken.map((_,i)=>`${recoveryForm.id}.spoken.${String(i+1).padStart(2,'0')}`),recoveryFirst=recoveryObjectives.slice(0,10).map(item=>item.id),recoveryMissed=recoveryObjectives.slice(10).map(item=>item.id),partialRun={completed:'2026-08-28',revision:1,formId:recoveryForm.id,itemIds:recoveryObjectives.map(item=>item.id),answeredIds:recoveryObjectives.map(item=>item.id),firstCorrectIds:recoveryFirst,feedbackAcknowledgedIds:recoveryMissed,spokenPromptIds:recoverySpokenIds,spokenBeforeRevealIds:recoverySpokenIds.slice(0,2),modelRevealIds:recoverySpokenIds.slice(0,2),supportOpenedIds:[],objectiveCorrect:10,objectiveTotal:12,objectivePassed:true,spokenCompleted:2,spokenRequired:6,participationPassed:false};
const partialRecord=api.assessmentRecord(null);Object.assign(partialRecord,{attempts:1,firstPct:83,lastPct:83,bestPct:83,lastAttempt:'2026-08-28',formCycle:1,usedFormIds:[recoveryForm.id],lastFormId:recoveryForm.id,lastRun:partialRun});
const reconstructed=api.recoverResume('gate','cv1.gate.w01',partialRecord);assert(reconstructed&&reconstructed.stageId==='spoken'&&reconstructed.stageIndex===2&&reconstructed.itemIndex===12&&api.resumeValid(reconstructed),'partial cold assessment did not reconstruct an exact spoken-stage resume');
const failedFullRun=JSON.parse(JSON.stringify(partialRun));failedFullRun.spokenBeforeRevealIds=recoverySpokenIds.slice();failedFullRun.modelRevealIds=recoverySpokenIds.slice();failedFullRun.spokenCompleted=6;failedFullRun.participationPassed=true;partialRecord.lastRun=failedFullRun;
const repairResume=api.recoverResume('gate','cv1.gate.w01',partialRecord);assert(repairResume&&repairResume.stageId==='repair'&&repairResume.stageIndex===0&&api.resumeValid(repairResume),'failed cold assessment did not reconstruct its separate repair stage');
const resumeAuthority=api.fresh();resumeAuthority.gates['cv1.gate.w01']=partialRecord;
assert(api.resumeMatches(repairResume,resumeAuthority),'assessment resume did not match its exact attempt/form authority');
const wrongAttempt=JSON.parse(JSON.stringify(repairResume));wrongAttempt.attemptOrdinal++;wrongAttempt.runSeed=wrongAttempt.taskId+'|'+wrongAttempt.attemptOrdinal;
assert(!api.resumeMatches(wrongAttempt,resumeAuthority),'assessment resume accepted a different attempt ordinal');
pass('Bangkok dates and delayed scheduling');

const weakness=api.fresh(),objective=api.objectives(l1.interactions,'cv1.form.lesson.w01.l01.a','lesson')[0];api.weaknessSeen(weakness,objective,false,'wrong');
const weaknessItem=weakness.weakness.items[objective.interaction.id+'>'+objective.direction];assert(weaknessItem.seen===1&&weaknessItem.firstMisses===1,'one first attempt must update weakness exactly once');
pass('strict import, resume and weakness evidence');

const order=api.builderOrder(api.lines.orderThis,'lesson-1-order');
assert(order.length===api.lines.orderThis.segments.length&&new Set(order).size===order.length&&order.some((value,index)=>value!==index),'builder tile order is not a complete deterministic shuffle');
const teachingHtml=api.teachingHtml(api.lines.orderThis);
assert(teachingHtml.includes('เอาอันนี้ครับ')&&teachingHtml.includes('ao an níi khráp')&&teachingHtml.includes('I will have this one.')&&teachingHtml.indexOf('เอา')<teachingHtml.indexOf('อันนี้')&&teachingHtml.indexOf('อันนี้')<teachingHtml.indexOf('ครับ'),'new phrase is not explicitly presented whole and unpacked in the correct order before practice');
assert(api.teachingSource.includes('What each part means')&&api.teachingSource.includes('Hear the complete phrase'),'model-first teaching card is incomplete');
assert(api.builderSource.includes('state.selected.every')&&api.builderSource.includes('onFirstWrong')&&api.builderSource.includes('onCorrect')&&api.builderSource.includes('cvBuilderIsBlocked'),'sentence builder does not check order, dynamic cue unlock and support retry');
let cueHeard=false;const cueGate={disabled:()=>!cueHeard};assert(api.builderBlocked(cueGate),'builder must stay blocked before vendor playback');cueHeard=true;assert(!api.builderBlocked(cueGate),'builder must unlock when vendor playback completes');
assert(api.courseSource.includes("'teach'")&&api.courseSource.includes("'practice'")&&api.courseSource.includes('Build it again with less help'),'lesson does not move from supported to less-supported sentence building');
assert(api.courseSource.includes('spokenBeforeRevealIds'),'spoken-use evidence missing');
assert(api.pairSource.includes('cv-pair-cue')&&api.pairSource.includes('cv-pair-reply')&&!api.pairSource.includes('playConversationTurns(p,turns'),'teaching pair still uses a passive timed gap instead of learner-controlled reply playback');
assert(api.pairSource.includes("pairMode==='model'")&&api.pairSource.includes('cvTeachingModelHtml')&&api.pairSource.includes('heard.model=true')&&api.pairSource.includes('if(!heard.model)return'),'builder can appear before the complete reply has been taught and heard');
assert(api.pairSource.includes('disabled:()=>!heard.cue'),'builder captured the pre-playback vendor state and cannot unlock after the learner hears the cue');
assert(api.pairSource.includes('if(!ok||!stillHere())return'),'teaching pair can award playback evidence before successful device speech completion');
assert(api.pairSource.includes('cvBuilderState')&&api.pairSource.includes('.complete')&&!api.pairSource.includes('p.evidence.responsePromptIds.includes'),'a wrong saved builder attempt could restore as completed after reload');
assert(['bp','dt','ph','th','kh','ng','ʉ','Doubled vowels','caron (ǎ)'].every(term=>api.pairSource.includes(term)),'pronunciation-spelling key is incomplete');
assert(api.spokenSource.includes('cv-assessment-support')&&api.spokenSource.includes('supportOpenedIds'),'assessment spoken support is not bounded and recorded');
assert(api.assessmentSource.includes('feedbackAcknowledgedIds')&&api.assessmentSource.includes('repairCompletedAt'),'cold evidence or repair boundary missing');
assert(api.assessmentSource.includes("p.phase='repair'")&&api.assessmentSource.includes('cvPersistCourseResume'),'post-check repair is not action-boundary resumable');
assert(api.assessmentSource.includes('You already answered this before leaving the app')&&api.assessmentSource.includes('p.objectiveIndex++'),'interrupted first answer could be answered again or rewritten');
assert(api.playbackSource.includes('SpeechSynthesisUtterance')&&api.playbackSource.includes('pauseAfter || 1000')&&api.playbackSource.includes('speechSynthesis.cancel'),'guarded device-TTS playback missing');
const mealTurn=api.resolveTurn(api.scenes.l02,api.scenes.l02.turns[5]);
assert(mealTurn&&mealTurn.speaker==='learner'&&mealTurn.pauseAfter===1800,'resolved learner chunk lost the meal-to-payment pause');
assert(api.playbackSource.includes('utteranceWatchdog')&&api.deviceSource.includes('watchdog')&&api.deviceSource.includes('onComplete')&&api.deviceSource.includes('speechRun === deviceSpeechRun'),'TTS stalled/interrupted/error completion guard missing');
assert(api.deviceSource.includes('conversationVoiceForRole')&&!api.deviceSource.includes('.pitch'),'role voices must not alter pitch in tonal Thai');
sandbox.speechSynthesis.getVoices=()=>[{name:'Thai A',lang:'th-TH',voiceURI:'a',localService:true,default:true},{name:'Thai B',lang:'th-TH',voiceURI:'b',localService:true,default:false}];api.pickVoice();
assert(api.roleVoiceName('vendor')==='Thai A'&&api.roleVoiceName('learner')==='Thai B','two available Thai voices were not assigned to different roles');
sandbox.speechSynthesis.getVoices=()=>[{name:'Thai Solo',lang:'th-TH',voiceURI:'solo',localService:true,default:true}];api.pickVoice();
assert(api.roleVoiceName('vendor')==='Thai Solo'&&api.roleVoiceName('learner')==='Thai Solo'&&api.roleRate(.72,'vendor')!==api.roleRate(.72,'learner'),'single-voice fallback does not separate roles with pacing');
assert(api.resetSource.includes('conversation:freshConversationState()'),'reset does not clear schema-2 conversation state');
pass('model-before-practice teaching, builder unlock, assessment, role-voice and reset boundaries');

const thai=JSON.stringify({lessons:api.lessons,scenes:api.scenes,forms:api.retentionForms});
assert(!thai.includes('ค่ะ'),'female polite particle leaked into course');
assert(!/https?:|\.(?:mp3|m4a|wav|ogg|aac|flac|webm)/i.test(thai),'authored or remote audio leaked into course');
pass('male-polite and device-TTS-only content');
pass('v8.4.1 conversation smoke');
