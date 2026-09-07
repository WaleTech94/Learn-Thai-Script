/* Conversation state, scheduling and shared lesson/assessment player.
   Authored content lives in conversation-content.js; supplementary checks in conversation-check.js. */
'use strict';

function cvPlain(value){ return !!value && typeof value === 'object' && !Array.isArray(value); }
function cvClone(value){ return JSON.parse(JSON.stringify(value)); }
function bangkokDayStr(now){
  const date = now instanceof Date ? now : new Date(now == null ? Date.now() : now);
  const parts = new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Bangkok',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(date);
  const out = {};
  parts.forEach(part=>{ if(part.type !== 'literal') out[part.type] = part.value; });
  return `${out.year}-${out.month}-${out.day}`;
}
function cvPlusDays(iso, amount){
  const date = new Date(iso + 'T00:00:00Z');
  date.setUTCDate(date.getUTCDate() + amount);
  return date.toISOString().slice(0,10);
}
function cvIsoDay(value){
  if(value == null) return true;
  if(!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(value + 'T00:00:00Z');
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0,10) === value;
}
function cvEmptyPace(){ return {anchor:null,cursor:0,lastMainCreditDay:null}; }
function cvFreshConversationState(){
  return {
    schema:2,courseId:CV1_COURSE_ID,curriculumRevision:CV1_CURRICULUM_REVISION,
    pace:cvEmptyPace(),migrations:{v1ToV2:null},legacyScenes:{},lessons:{},
    activities:{consolidations:{},optional:{}},gates:{},retention:{},weakness:{items:{},confusions:{}},
    days:{},resume:null,completion:null,recovery:null,extensions:{}
  };
}
function cvLegacyEvidenceValid(value){
  if(!cvPlain(value) || !cvIsoDay(value.completed)) return false;
  const ints = ['pairAdvances','pairPlaybacks','responseChoices','responseFirstCorrect','roleplayReveals'];
  const allowed=['completed',...ints,'scenePlaybackCompleted','swapRevealed','recordStepCompleted','recordingAttempted'];
  if(Object.keys(value).some(key=>!allowed.includes(key)))return false;
  if(ints.some(key=>!Number.isInteger(value[key]) || value[key] < 0)) return false;
  if(value.responseFirstCorrect > value.responseChoices) return false;
  return ['scenePlaybackCompleted','swapRevealed','recordStepCompleted','recordingAttempted'].every(key=>typeof value[key] === 'boolean');
}
function cvMigrateLegacyScene(raw, strict){
  if(!cvPlain(raw)){
    if(strict) throw new Error('legacy conversation scene must be an object');
    return null;
  }
  const allowed = new Set(['runs','firstCompleted','lastCompleted','selfRating','lastRun']);
  if(strict && Object.keys(raw).some(key=>!allowed.has(key))) throw new Error('legacy conversation scene has an unknown field');
  if(!Number.isInteger(raw.runs) || raw.runs < 0){ if(strict) throw new Error('legacy runs is invalid'); return null; }
  const ratingOkay = raw.selfRating == null || ['need-support','getting-there','ready'].includes(raw.selfRating);
  const datesOkay = cvIsoDay(raw.firstCompleted) && cvIsoDay(raw.lastCompleted);
  const runOkay = raw.lastRun == null || cvLegacyEvidenceValid(raw.lastRun);
  const zeroOkay = raw.runs > 0 || (!raw.firstCompleted && !raw.lastCompleted && !raw.selfRating && !raw.lastRun);
  if(!ratingOkay || !datesOkay || !runOkay || !zeroOkay){
    if(strict) throw new Error('legacy conversation scene evidence is invalid');
    return null;
  }
  const runs = Math.max(0,raw.runs || 0);
  return {
    sourceSchema:1,runs,
    firstCompleted:runs && cvIsoDay(raw.firstCompleted) ? (raw.firstCompleted || null) : null,
    lastCompleted:runs && cvIsoDay(raw.lastCompleted) ? (raw.lastCompleted || null) : null,
    legacySelfRating:runs && ratingOkay ? (raw.selfRating || null) : null,
    lastRun:runs && cvLegacyEvidenceValid(raw.lastRun) ? Object.assign({evidenceVersion:1},cvClone(raw.lastRun)) : null
  };
}
function cvLessonRecord(raw){
  const base = {runs:0,objectiveAttempts:0,firstPct:null,lastPct:null,bestPct:null,firstCompleted:null,lastCompleted:null,completedRevision:null,selfRating:null,lastRun:null};
  if(!cvPlain(raw)) return base;
  const out = Object.assign({},base,raw);
  ['runs','objectiveAttempts'].forEach(key=>{ if(!Number.isInteger(out[key]) || out[key] < 0) out[key]=0; });
  ['firstPct','lastPct','bestPct'].forEach(key=>{ if(out[key] != null && (!Number.isFinite(out[key]) || out[key] < 0 || out[key] > 100)) out[key]=null; });
  ['firstCompleted','lastCompleted'].forEach(key=>{ if(!cvIsoDay(out[key])) out[key]=null; });
  if(!CV1_SUPPORT_RATINGS.some(item=>item.id===out.selfRating) && out.selfRating!==null) out.selfRating=null;
  return out;
}
function cvAssessmentRecord(raw, due){
  const base = {attempts:0,revision:1,firstPct:null,lastPct:null,bestPct:null,lastAttempt:null,passedAt:null,repairCompletedAt:null,formCycle:0,usedFormIds:[],lastFormId:null,lastRun:null,lastRepairRun:null};
  if(due != null) base.due=due;
  const out = Object.assign({},base,cvPlain(raw)?raw:{});
  ['attempts','formCycle'].forEach(key=>{ if(!Number.isInteger(out[key]) || out[key] < 0) out[key]=0; });
  if(!Array.isArray(out.usedFormIds)) out.usedFormIds=[];
  out.usedFormIds=[...new Set(out.usedFormIds.filter(id=>typeof id === 'string'))];
  ['lastAttempt','passedAt','repairCompletedAt'].forEach(key=>{ if(!cvIsoDay(out[key])) out[key]=null; });
  return out;
}
function cvExactKeys(value,allowed){return cvPlain(value)&&Object.keys(value).every(key=>allowed.includes(key));}
function cvIdList(value,allowed,exact){
  if(!Array.isArray(value)||value.some(id=>typeof id!=='string')||new Set(value).size!==value.length)return false;
  if(allowed&&value.some(id=>!allowed.includes(id)))return false;
  return !exact||(value.length===allowed.length&&allowed.every(id=>value.includes(id)));
}
function cvResumeValid(raw){
  const rootKeys=['taskId','taskKind','taskRevision','curriculumRevision','formId','formCycle','attemptOrdinal','runSeed','startedDay','savedDay','stageId','stageIndex','itemIndex','evidence'];
  const evidenceKeys=['pairIdsPlayed','sceneIdsPlayed','responsePromptIds','responseFirstCorrectIds','responseRepairIds','itemIds','answeredIds','firstCorrectIds','clearedIds','spokenPromptIds','spokenBeforeRevealIds','modelRevealIds','supportOpenedIds','substitutionIds','transferIds','transferCompletedIds','recordStepCompleted','recordingAttempted'];
  if(!cvExactKeys(raw,rootKeys)||!['lesson','consolidation','gate','retention'].includes(raw.taskKind)||raw.taskRevision!==1||raw.curriculumRevision!==CV1_CURRICULUM_REVISION||!Number.isInteger(raw.attemptOrdinal)||raw.attemptOrdinal<1||raw.runSeed!==`${raw.taskId}|${raw.attemptOrdinal}`||!cvDayNotFuture(raw.startedDay)||!cvDayNotFuture(raw.savedDay)||raw.startedDay>raw.savedDay||!Number.isInteger(raw.stageIndex)||raw.stageIndex<0||!Number.isInteger(raw.itemIndex)||raw.itemIndex<0||!cvExactKeys(raw.evidence,evidenceKeys))return false;
  const e=raw.evidence;
  if(!evidenceKeys.filter(key=>key.endsWith('Ids')||['itemIds','answeredIds','firstCorrectIds','clearedIds'].includes(key)).every(key=>cvIdList(e[key]||[],null,false))||typeof e.recordStepCompleted!=='boolean'||typeof e.recordingAttempted!=='boolean')return false;
  if(!cvIdList(e.spokenBeforeRevealIds,e.spokenPromptIds,false)||!cvIdList(e.modelRevealIds,e.spokenPromptIds,false)||!cvIdList(e.supportOpenedIds,e.spokenPromptIds,false)||e.modelRevealIds.length!==e.spokenBeforeRevealIds.length||e.modelRevealIds.some(id=>!e.spokenBeforeRevealIds.includes(id)))return false;
  if(raw.taskKind==='lesson'){
    const lesson=CV1_LESSONS[raw.taskId];if(!lesson||raw.formId!==null||raw.formCycle!==null)return false;
    const stages=['intro','map','pairs','scene','guided','objective','substitution','roleplay-supported','roleplay-reduced','resolution-guided','resolution-objective','record','rating'];if(!stages.includes(raw.stageId))return false;
    if(['pairs','guided'].includes(raw.stageId)&&raw.itemIndex>lesson.interactions.length)return false;
    if(raw.stageId.startsWith('resolution-')&&(!lesson.interactions[raw.itemIndex]||!lesson.interactions[raw.itemIndex].resolution||raw.stageIndex>(raw.stageId==='resolution-objective'?6:3)))return false;
    const interactions=lesson.interactions.map(item=>item.id),objectiveIds=cvBuildObjectives(lesson.interactions,`cv1.form.lesson.w01.l0${lesson.number}.a`,'lesson').map(item=>item.id),spoken=lesson.interactions.flatMap((_,index)=>['supported','reduced'].map(mode=>`cv1.spoken.lesson.w01.l0${lesson.number}.${mode}.${String(index+1).padStart(2,'0')}`));
    if(!cvIdList(e.pairIdsPlayed,interactions,false)||!cvIdList(e.sceneIdsPlayed,[lesson.scene.id],false)||!cvIdList(e.responsePromptIds,interactions,false)||!cvIdList(e.responseFirstCorrectIds,interactions,false)||!cvIdList(e.responseRepairIds,interactions,false)||e.responseFirstCorrectIds.some(id=>e.responseRepairIds.includes(id))||!cvIdList(e.itemIds,objectiveIds,e.itemIds.length>0)||!cvIdList(e.answeredIds,objectiveIds,false)||!cvIdList(e.firstCorrectIds,e.answeredIds,false)||!cvIdList(e.clearedIds,objectiveIds,false)||!cvIdList(e.spokenPromptIds,spoken,true)||!cvIdList(e.substitutionIds,[lesson.substitution.id],false)||e.transferIds.length||e.transferCompletedIds.length)return false;
    return true;
  }
  if(raw.taskKind==='consolidation'){
    const objectiveIds=cvBuildObjectives(CV1_CONSOLIDATION.interactions,CV1_CONSOLIDATION.formId,'assessment').map(item=>item.id),spoken=CV1_CONSOLIDATION.spoken.map((_,i)=>`cv1.spoken.consolidation.w01.${String(i+1).padStart(2,'0')}`),transfers=CV1_CONSOLIDATION.transfers.map((_,i)=>`cv1.transfer.consolidation.w01.${String(i+1).padStart(2,'0')}`);
    return raw.taskId===CV1_WEEK1_CONSOLIDATION&&raw.formId===CV1_CONSOLIDATION.formId&&raw.formCycle===null&&['intro','objective','spoken','transfer','weakness','finish'].includes(raw.stageId)&&cvIdList(e.itemIds,objectiveIds,true)&&cvIdList(e.answeredIds,objectiveIds,false)&&cvIdList(e.firstCorrectIds,e.answeredIds,false)&&cvIdList(e.clearedIds,objectiveIds,false)&&cvIdList(e.spokenPromptIds,spoken,true)&&cvIdList(e.transferIds,transfers,true)&&cvIdList(e.transferCompletedIds,transfers,false)&&!e.pairIdsPlayed.length&&!e.sceneIdsPlayed.length&&!e.responsePromptIds.length&&!e.substitutionIds.length;
  }
  const form=cvFindForm(raw.formId),taskOkay=raw.taskKind==='gate'?raw.taskId===CV1_WEEK1_GATE:!!CV1_RETENTION_FORMS[raw.taskId];
  if(!form||!taskOkay||!Number.isInteger(raw.formCycle)||raw.formCycle<0||!['intro','objective','spoken','result','repair'].includes(raw.stageId))return false;
  const objectives=cvBuildObjectives(form.items,form.id,raw.taskKind==='gate'?'gate':'assessment').map(item=>item.id),stage=raw.taskKind==='gate'?'gate':raw.taskId.split('.').pop(),spoken=cvAssessmentSpoken(form,stage).map((_,i)=>`${form.id}.spoken.${String(i+1).padStart(2,'0')}`);
  return cvIdList(e.itemIds,objectives,true)&&cvIdList(e.answeredIds,objectives,false)&&cvIdList(e.firstCorrectIds,e.answeredIds,false)&&!e.clearedIds.length&&cvIdList(e.spokenPromptIds,spoken,true)&&!e.pairIdsPlayed.length&&!e.sceneIdsPlayed.length&&!e.responsePromptIds.length&&!e.substitutionIds.length&&!e.transferIds.length;
}
function cvSafeTree(value,seen){
  if(value==null||typeof value!=='object')return true;
  const visited=seen||new Set();if(visited.has(value))return false;visited.add(value);
  if(Object.keys(value).some(key=>['__proto__','prototype','constructor'].includes(key)))return false;
  return Object.keys(value).every(key=>cvSafeTree(value[key],visited));
}
function cvPercent(value){return value==null||(Number.isInteger(value)&&value>=0&&value<=100);}
function cvDayNotFuture(value){return cvIsoDay(value)&&(value==null||value<=bangkokDayStr());}
function cvSameIds(actual,expected){return cvIdList(actual,expected,true);}
function cvLessonRunValid(lesson,run){
  const keys=['completed','revision','pairIdsPlayed','sceneIdsPlayed','responsePromptIds','responseFirstCorrectIds','responseRepairIds','spokenBeforeRevealIds','modelRevealIds','supportOpenedIds','substitutionIds','recordStepCompleted','recordingAttempted','objective'];
  if(!cvExactKeys(run,keys)||run.revision!==1||!cvDayNotFuture(run.completed)||typeof run.recordStepCompleted!=='boolean'||!run.recordStepCompleted||typeof run.recordingAttempted!=='boolean'||!cvExactKeys(run.objective,['itemIds','firstCorrectIds','clearedIds']))return false;
  const interactions=lesson.interactions.map(item=>item.id),objectives=cvBuildObjectives(lesson.interactions,`cv1.form.lesson.w01.l0${lesson.number}.a`,'lesson').map(item=>item.id),spoken=lesson.interactions.flatMap((_,index)=>['supported','reduced'].map(mode=>`cv1.spoken.lesson.w01.l0${lesson.number}.${mode}.${String(index+1).padStart(2,'0')}`));
  return cvSameIds(run.pairIdsPlayed,interactions)&&cvSameIds(run.sceneIdsPlayed,[lesson.scene.id])&&cvSameIds(run.responsePromptIds,interactions)&&cvIdList(run.responseFirstCorrectIds,interactions,false)&&cvIdList(run.responseRepairIds,interactions,false)&&run.responseFirstCorrectIds.length+run.responseRepairIds.length===interactions.length&&run.responseFirstCorrectIds.every(id=>!run.responseRepairIds.includes(id))&&cvSameIds(run.spokenBeforeRevealIds,spoken)&&cvSameIds(run.modelRevealIds,spoken)&&cvIdList(run.supportOpenedIds,spoken,false)&&cvSameIds(run.substitutionIds,[lesson.substitution.id])&&cvSameIds(run.objective.itemIds,objectives)&&cvIdList(run.objective.firstCorrectIds,objectives,false)&&cvSameIds(run.objective.clearedIds,objectives);
}
function cvLessonRecordValid(record,lesson,consolidation){
  const allowed=['runs','objectiveAttempts','firstPct','lastPct','bestPct','firstCompleted','lastCompleted','completedRevision','selfRating','lastRun'];
  if(!cvExactKeys(record,allowed)||!Number.isInteger(record.runs)||record.runs<0||!Number.isInteger(record.objectiveAttempts)||record.objectiveAttempts!==record.runs*(consolidation?8:6)||!(record.selfRating===null||CV1_SUPPORT_RATINGS.some(item=>item.id===record.selfRating))||!cvPercent(record.firstPct)||!cvPercent(record.lastPct)||!cvPercent(record.bestPct)||!cvDayNotFuture(record.firstCompleted)||!cvDayNotFuture(record.lastCompleted))return false;
  if(record.runs===0)return record.firstCompleted==null&&record.lastCompleted==null&&record.completedRevision==null&&record.lastRun==null&&record.firstPct==null&&record.lastPct==null&&record.bestPct==null;
  if(record.completedRevision!==1||!record.firstCompleted||!record.lastCompleted||!record.lastRun||record.lastRun.completed!==record.lastCompleted||record.bestPct<record.lastPct||record.bestPct<record.firstPct)return false;
  if(!consolidation)return cvLessonRunValid(lesson,record.lastRun);
  const run=record.lastRun,objectives=cvBuildObjectives(CV1_CONSOLIDATION.interactions,CV1_CONSOLIDATION.formId,'assessment').map(item=>item.id),spoken=CV1_CONSOLIDATION.spoken.map((_,i)=>`cv1.spoken.consolidation.w01.${String(i+1).padStart(2,'0')}`),transfers=CV1_CONSOLIDATION.transfers.map((_,i)=>`cv1.transfer.consolidation.w01.${String(i+1).padStart(2,'0')}`),weak=['cv1.practice.consolidation.w01.weakness.01'];
  const keys=['completed','revision','formId','itemIds','firstCorrectIds','clearedIds','spokenPromptIds','spokenBeforeRevealIds','modelRevealIds','supportOpenedIds','transferIds','transferCompletedIds','weaknessRepairItemIds','weaknessRepairClearedIds'];
  return cvExactKeys(run,keys)&&run.completed===record.lastCompleted&&run.revision===1&&run.formId===CV1_CONSOLIDATION.formId&&cvSameIds(run.itemIds,objectives)&&cvIdList(run.firstCorrectIds,objectives,false)&&cvSameIds(run.clearedIds,objectives)&&cvSameIds(run.spokenPromptIds,spoken)&&cvSameIds(run.spokenBeforeRevealIds,spoken)&&cvSameIds(run.modelRevealIds,spoken)&&cvIdList(run.supportOpenedIds,spoken,false)&&cvSameIds(run.transferIds,transfers)&&cvSameIds(run.transferCompletedIds,transfers)&&cvSameIds(run.weaknessRepairItemIds,weak)&&cvSameIds(run.weaknessRepairClearedIds,weak);
}
function cvAssessmentRunValid(run,forms,stage){
  if(!cvPlain(run)||!Array.isArray(run.firstCorrectIds))return false;const form=forms.find(item=>item.id===run.formId);if(!form)return false;
  const objectives=cvBuildObjectives(form.items,form.id,stage==='gate'?'gate':'assessment').map(item=>item.id),spoken=cvAssessmentSpoken(form,stage).map((_,i)=>`${form.id}.spoken.${String(i+1).padStart(2,'0')}`),missed=objectives.filter(id=>!run.firstCorrectIds.includes(id)),keys=['completed','revision','formId','itemIds','answeredIds','firstCorrectIds','feedbackAcknowledgedIds','spokenPromptIds','spokenBeforeRevealIds','modelRevealIds','supportOpenedIds','objectiveCorrect','objectiveTotal','objectivePassed','spokenCompleted','spokenRequired','participationPassed'];
  return cvExactKeys(run,keys)&&run.revision===1&&cvDayNotFuture(run.completed)&&cvSameIds(run.itemIds,objectives)&&cvSameIds(run.answeredIds,objectives)&&cvIdList(run.firstCorrectIds,objectives,false)&&cvSameIds(run.feedbackAcknowledgedIds,missed)&&cvSameIds(run.spokenPromptIds,spoken)&&cvIdList(run.spokenBeforeRevealIds,spoken,false)&&cvSameIds(run.modelRevealIds,run.spokenBeforeRevealIds)&&cvIdList(run.supportOpenedIds,spoken,false)&&run.objectiveCorrect===run.firstCorrectIds.length&&run.objectiveTotal===objectives.length&&run.objectivePassed===(run.objectiveCorrect>=cvAssessmentThreshold(stage))&&run.spokenCompleted===run.spokenBeforeRevealIds.length&&run.spokenRequired===spoken.length&&run.participationPassed===(run.spokenCompleted===spoken.length);
}
function cvAssessmentRecordValid(record,forms,stage,due){
  const allowed=['attempts','revision','firstPct','lastPct','bestPct','lastAttempt','passedAt','repairCompletedAt','formCycle','usedFormIds','lastFormId','lastRun','lastRepairRun'].concat(due?['due']:[]);
  if(!cvExactKeys(record,allowed)||record.revision!==1||!Number.isInteger(record.attempts)||record.attempts<0||!Number.isInteger(record.formCycle)||record.formCycle<0||!cvPercent(record.firstPct)||!cvPercent(record.lastPct)||!cvPercent(record.bestPct)||!cvDayNotFuture(record.lastAttempt)||!cvDayNotFuture(record.passedAt)||!cvDayNotFuture(record.repairCompletedAt)||!cvIdList(record.usedFormIds,forms.map(form=>form.id),false)||record.lastFormId!=null&&!forms.some(form=>form.id===record.lastFormId)||due&&record.due!==due)return false;
  if(record.attempts===0)return record.firstPct==null&&record.lastPct==null&&record.bestPct==null&&record.lastAttempt==null&&record.passedAt==null&&record.lastRun==null;
  if(!record.lastRun||!cvAssessmentRunValid(record.lastRun,forms,stage)||record.lastAttempt!==record.lastRun.completed||record.bestPct<record.lastPct||record.bestPct<record.firstPct)return false;
  const passed=record.lastRun.objectivePassed&&record.lastRun.participationPassed;if(!!record.passedAt!==passed)return false;
  if(record.lastRepairRun){const repair=record.lastRepairRun,repairKeys=['completed','revision','practiceFormId','sourceMissedObjectiveIds','practiceItemIds','firstCorrectIds','clearedIds'];if(!cvExactKeys(repair,repairKeys)||repair.revision!==1||!cvDayNotFuture(repair.completed)||!/^cv1\.form\.repair\.[a-z0-9.-]+\.a$/.test(repair.practiceFormId)||!cvIdList(repair.sourceMissedObjectiveIds,null,false)||!cvIdList(repair.practiceItemIds,null,false)||!cvIdList(repair.firstCorrectIds,repair.practiceItemIds,false)||!cvSameIds(repair.clearedIds,repair.practiceItemIds)||repair.practiceItemIds.some(id=>id.startsWith('cv1.objective.')))return false;}
  if(!passed&&record.repairCompletedAt){const repair=record.lastRepairRun;if(!repair||repair.completed!==record.repairCompletedAt||!cvSameIds(repair.sourceMissedObjectiveIds,record.lastRun.feedbackAcknowledgedIds))return false;}
  return true;
}
function cvResumeMatchesAuthority(raw,c){
  if(!cvResumeValid(raw)||!c)return false;
  if(raw.taskKind==='lesson'){
    const rec=c.lessons[raw.taskId];
    return (!rec||!rec.firstCompleted)&&raw.attemptOrdinal===(rec&&rec.runs||0)+1&&raw.formId===null&&raw.formCycle===null;
  }
  if(raw.taskKind==='consolidation'){
    const rec=c.activities&&c.activities.consolidations&&c.activities.consolidations[raw.taskId];
    return (!rec||!rec.firstCompleted)&&raw.attemptOrdinal===(rec&&rec.runs||0)+1&&raw.formId===CV1_CONSOLIDATION.formId&&raw.formCycle===null;
  }
  const rec=raw.taskKind==='gate'?(c.gates&&c.gates[raw.taskId]):(c.retention&&c.retention[raw.taskId]);
  if(!rec||rec.passedAt||rec.lastFormId!==raw.formId||rec.formCycle!==raw.formCycle||!rec.usedFormIds.includes(raw.formId))return false;
  const coldRecorded=rec.attempts===raw.attemptOrdinal&&rec.lastRun&&rec.lastRun.formId===raw.formId;
  const beforeCold=rec.attempts+1===raw.attemptOrdinal;
  if(coldRecorded)return ['objective','spoken','result','repair'].includes(raw.stageId);
  return beforeCold&&['intro','objective'].includes(raw.stageId);
}
function cvRecoveredAssessmentResume(taskKind,taskId,record){
  if(!record||record.passedAt||record.repairCompletedAt||!record.lastRun)return null;
  const form=cvFindForm(record.lastRun.formId);if(!form)return null;
  const stage=taskKind==='gate'?'gate':taskId.split('.').pop(),objectives=cvBuildObjectives(form.items,form.id,taskKind==='gate'?'gate':'assessment'),spoken=cvAssessmentSpoken(form,stage),run=record.lastRun;
  const resumeStage=run.participationPassed?'repair':'spoken';
  const resume={taskId,taskKind,taskRevision:1,curriculumRevision:CV1_CURRICULUM_REVISION,formId:form.id,formCycle:record.formCycle,attemptOrdinal:record.attempts,runSeed:`${taskId}|${record.attempts}`,startedDay:record.lastAttempt,savedDay:bangkokDayStr(),stageId:resumeStage,stageIndex:resumeStage==='spoken'?run.spokenCompleted:0,itemIndex:objectives.length,evidence:{pairIdsPlayed:[],sceneIdsPlayed:[],responsePromptIds:[],responseFirstCorrectIds:[],responseRepairIds:[],itemIds:run.itemIds.slice(),answeredIds:run.answeredIds.slice(),firstCorrectIds:run.firstCorrectIds.slice(),clearedIds:[],spokenPromptIds:run.spokenPromptIds.slice(),spokenBeforeRevealIds:run.spokenBeforeRevealIds.slice(),modelRevealIds:run.modelRevealIds.slice(),supportOpenedIds:run.supportOpenedIds.slice(),substitutionIds:[],transferIds:[],transferCompletedIds:[],recordStepCompleted:false,recordingAttempted:false}};
  return cvResumeValid(resume)?resume:null;
}
function cvNormalizeSchema2(raw){
  const c=cvFreshConversationState(),issues=[];
  if(!cvPlain(raw)||!cvSafeTree(raw))return c;
  const knownRoot=new Set(['schema','courseId','curriculumRevision','pace','migrations','legacyScenes','lessons','activities','gates','retention','weakness','days','resume','completion','recovery','extensions']);
  Object.keys(raw).forEach(key=>{if(!knownRoot.has(key))issues.push('conversation.'+key);});
  if(cvPlain(raw.migrations)&&raw.migrations.v1ToV2!=null&&cvExactKeys(raw.migrations.v1ToV2,['date','legacySceneCount'])&&cvDayNotFuture(raw.migrations.v1ToV2.date)&&Number.isInteger(raw.migrations.v1ToV2.legacySceneCount)&&raw.migrations.v1ToV2.legacySceneCount>=0)c.migrations.v1ToV2=cvClone(raw.migrations.v1ToV2);
  if(cvPlain(raw.legacyScenes))Object.keys(raw.legacyScenes).forEach(id=>{const item=raw.legacyScenes[id];if(cvPlain(item)&&item.sourceSchema===1&&Number.isInteger(item.runs)&&item.runs>=0)c.legacyScenes[id]=cvClone(item);else issues.push('legacyScenes.'+id);});
  if(cvPlain(raw.lessons))Object.keys(raw.lessons).forEach(id=>{if(CV1_LESSONS[id]&&cvLessonRecordValid(raw.lessons[id],CV1_LESSONS[id],false))c.lessons[id]=cvClone(raw.lessons[id]);else issues.push('lessons.'+id);});
  const lessonOrder=Object.keys(CV1_LESSONS),firstLessonGap=lessonOrder.findIndex(id=>!(c.lessons[id]&&c.lessons[id].firstCompleted));
  if(firstLessonGap>=0)lessonOrder.slice(firstLessonGap+1).forEach(id=>{if(c.lessons[id]){delete c.lessons[id];issues.push('lessons.'+id+'.prerequisite');}});
  const rawConsolidations=cvPlain(raw.activities)&&cvPlain(raw.activities.consolidations)?raw.activities.consolidations:{};
  const allLessons=lessonOrder.every(id=>c.lessons[id]&&c.lessons[id].firstCompleted),rawConsolidation=rawConsolidations[CV1_WEEK1_CONSOLIDATION];
  if(rawConsolidation){if(allLessons&&cvLessonRecordValid(rawConsolidation,null,true))c.activities.consolidations[CV1_WEEK1_CONSOLIDATION]=cvClone(rawConsolidation);else issues.push('activities.consolidations.'+CV1_WEEK1_CONSOLIDATION);}
  if(cvPlain(raw.activities)&&cvPlain(raw.activities.optional))Object.keys(raw.activities.optional).forEach(id=>{const item=raw.activities.optional[id];if(cvExactKeys(item,['runs','lastCompleted'])&&Number.isInteger(item.runs)&&item.runs>=0&&cvDayNotFuture(item.lastCompleted))c.activities.optional[id]=cvClone(item);else issues.push('activities.optional.'+id);});
  const consolidationDone=!!(c.activities.consolidations[CV1_WEEK1_CONSOLIDATION]&&c.activities.consolidations[CV1_WEEK1_CONSOLIDATION].firstCompleted),rawGate=cvPlain(raw.gates)&&raw.gates[CV1_WEEK1_GATE];
  if(rawGate){if(consolidationDone&&cvAssessmentRecordValid(rawGate,CV1_GATE_FORMS,'gate',null))c.gates[CV1_WEEK1_GATE]=cvClone(rawGate);else issues.push('gates.'+CV1_WEEK1_GATE);}
  Object.values(CV1_LESSONS).forEach(lesson=>{const record=c.lessons[lesson.id];if(!record||!record.firstCompleted)return;['d1','d7'].forEach(stage=>{const id=`cv1.retention.w01.l0${lesson.number}.${stage}`,due=cvPlusDays(record.firstCompleted,stage==='d1'?1:7),candidate=cvPlain(raw.retention)&&raw.retention[id];if(candidate&&cvAssessmentRecordValid(candidate,cvFormsForHistory(id),stage,due))c.retention[id]=cvClone(candidate);else{c.retention[id]=cvAssessmentRecord(null,due);if(candidate)issues.push('retention.'+id);}});});
  const gate=c.gates[CV1_WEEK1_GATE];if(gate&&gate.passedAt){const id='cv1.retention.w01.d30',due=cvPlusDays(gate.passedAt,30),candidate=cvPlain(raw.retention)&&raw.retention[id];if(candidate&&cvAssessmentRecordValid(candidate,CV1_RETENTION_FORMS[id],'d30',due))c.retention[id]=cvClone(candidate);else{c.retention[id]=cvAssessmentRecord(null,due);if(candidate)issues.push('retention.'+id);}}
  if(cvPlain(raw.retention))Object.keys(raw.retention).forEach(id=>{if(!Object.prototype.hasOwnProperty.call(c.retention,id))issues.push('retention.'+id);});
  if(cvPlain(raw.weakness)&&cvPlain(raw.weakness.items))Object.keys(raw.weakness.items).forEach(id=>{const item=raw.weakness.items[id];if(cvExactKeys(item,['seen','firstMisses','reviewMisses','correctStreak','lastSeen','lastMiss'])&&['seen','firstMisses','reviewMisses','correctStreak'].every(key=>Number.isInteger(item[key])&&item[key]>=0)&&item.firstMisses<=item.seen&&cvDayNotFuture(item.lastSeen)&&cvDayNotFuture(item.lastMiss))c.weakness.items[id]=cvClone(item);else issues.push('weakness.items.'+id);});
  if(cvPlain(raw.weakness)&&cvPlain(raw.weakness.confusions))Object.keys(raw.weakness.confusions).forEach(id=>{const count=raw.weakness.confusions[id];if(id.startsWith('cv1.interaction.')&&id.includes('>')&&Number.isInteger(count)&&count>0)c.weakness.confusions[id]=count;else issues.push('weakness.confusions.'+id);});
  const knownMain=new Set(CV1_MAIN_SEQUENCE),knownRetention=new Set(Object.keys(CV1_RETENTION_FORMS));if(cvPlain(raw.days))Object.keys(raw.days).forEach(day=>{const item=raw.days[day];if(cvDayNotFuture(day)&&cvExactKeys(item,['secs','main','reviews','repairs'])&&Number.isFinite(item.secs)&&item.secs>=0&&(item.main==null||knownMain.has(item.main))&&cvIdList(item.reviews,[...knownRetention],false)&&cvIdList(item.repairs,[...knownRetention,CV1_WEEK1_GATE],false))c.days[day]=cvClone(item);else issues.push('days.'+day);});
  const authoritative=CV1_MAIN_SEQUENCE.map(id=>CV1_LESSONS[id]?!!(c.lessons[id]&&c.lessons[id].firstCompleted):id===CV1_WEEK1_CONSOLIDATION?!!(c.activities.consolidations[id]&&c.activities.consolidations[id].firstCompleted):!!(c.gates[id]&&c.gates[id].passedAt)),gap=authoritative.findIndex(done=>!done);c.pace.cursor=gap<0?CV1_MAIN_SEQUENCE.length:gap;c.pace.anchor=c.lessons['cv1.lesson.w01.l01.food-order']&&c.lessons['cv1.lesson.w01.l01.food-order'].firstCompleted||null;
  const mainDays=Object.keys(c.days).filter(day=>c.days[day].main).sort();c.pace.lastMainCreditDay=mainDays.length?mainDays[mainDays.length-1]:null;
  if(raw.resume!=null){if(cvResumeValid(raw.resume)){const currentMain=CV1_MAIN_SEQUENCE[c.pace.cursor],resumeCurrent=['lesson','consolidation','gate'].includes(raw.resume.taskKind)?raw.resume.taskId===currentMain:!!c.retention[raw.resume.taskId]&&!c.retention[raw.resume.taskId].passedAt;if(resumeCurrent&&cvResumeMatchesAuthority(raw.resume,c))c.resume=cvClone(raw.resume);else issues.push('resume.stale');}else issues.push('resume.invalid');}
  if(!c.resume){
    const candidates=[];
    if(c.gates[CV1_WEEK1_GATE])candidates.push(['gate',CV1_WEEK1_GATE,c.gates[CV1_WEEK1_GATE]]);
    Object.keys(c.retention).sort((a,b)=>(c.retention[a].due||'').localeCompare(c.retention[b].due||'')).forEach(id=>candidates.push(['retention',id,c.retention[id]]));
    for(const [kind,id,record] of candidates){const recovered=cvRecoveredAssessmentResume(kind,id,record);if(recovered){c.resume=recovered;issues.push('resume.reconstructed');break;}}
  }
  if(cvPlain(raw.extensions)&&cvSafeTree(raw.extensions))c.extensions=cvClone(raw.extensions);else if(raw.extensions!=null)issues.push('extensions');
  if(c.extensions.learningCheck!=null&&!cvLearningCheckValid(c.extensions.learningCheck)){delete c.extensions.learningCheck;issues.push('extensions.learningCheck');}
  if(cvPlain(raw.recovery)&&cvExactKeys(raw.recovery,['recoveryId','capturedAt','reason','sourceSchema','quarantinedCount']))c.recovery=cvClone(raw.recovery);
  if(issues.length&&!c.recovery){const capturedAt=new Date().toISOString(),recoveryId=`conversation-${capturedAt}-${issues.length}`;c.recovery={recoveryId,capturedAt,reason:issues.some(path=>path.startsWith('resume'))?'invalid-resume':'invalid-authority-record',sourceSchema:2,quarantinedCount:issues.length};try{localStorage.setItem('thai_state_v1_conversation_recovery',JSON.stringify({app:'aan-thai',key:'thai_state_v1',kind:'conversation-recovery',recoveryVersion:1,recoveryId,capturedAt,reason:c.recovery.reason,sourceSchema:2,conversation:{issues,raw:cvClone(raw)}}));}catch(_){}}
  return c;
}
function cvRepairConversationState(target){
  const holder = target || state;
  const before = JSON.stringify(holder.conversation);
  const raw = holder.conversation;
  if(cvPlain(raw) && raw.schema === 1){
    const next = cvFreshConversationState();
    const scenes = cvPlain(raw.scenes) ? raw.scenes : {};
    const quarantined = {};
    Object.keys(raw).forEach(key=>{if(!['schema','scenes'].includes(key))quarantined['root.'+key]=cvClone(raw[key]);});
    Object.keys(scenes).forEach(id=>{
      const migrated = cvMigrateLegacyScene(scenes[id],false);
      if(migrated) next.legacyScenes[id]=migrated;
      else quarantined[id]=cvClone(scenes[id]);
    });
    next.migrations.v1ToV2={date:bangkokDayStr(),legacySceneCount:Object.keys(next.legacyScenes).length};
    if(Object.keys(quarantined).length){
      next.extensions.quarantinedLegacyScenes=quarantined;
      const capturedAt=new Date().toISOString(),recoveryId=`conversation-${capturedAt}-legacy`;
      next.recovery={recoveryId,capturedAt,reason:'invalid-authority-record',sourceSchema:1,quarantinedCount:Object.keys(quarantined).length};
      try{localStorage.setItem('thai_state_v1_conversation_recovery',JSON.stringify({app:'aan-thai',key:'thai_state_v1',kind:'conversation-recovery',recoveryVersion:1,recoveryId,capturedAt,reason:'invalid-authority-record',sourceSchema:1,conversation:quarantined}));}catch(_){}
    }
    holder.conversation=next;
  } else if(cvPlain(raw) && raw.schema === 2){
    holder.conversation=cvNormalizeSchema2(raw);
  } else {
    holder.conversation=cvFreshConversationState();
    if(raw != null){
      const capturedAt=new Date().toISOString(),reason=cvPlain(raw)&&Number.isInteger(raw.schema)&&raw.schema>2?'future-schema':'invalid-authority-record',recoveryId=`conversation-${capturedAt}-root`;
      holder.conversation.recovery={recoveryId,capturedAt,reason,sourceSchema:cvPlain(raw)&&Number.isInteger(raw.schema)?raw.schema:null,quarantinedCount:1};
      try{localStorage.setItem('thai_state_v1_conversation_recovery',JSON.stringify({app:'aan-thai',key:'thai_state_v1',kind:'conversation-recovery',recoveryVersion:1,recoveryId,capturedAt,reason,sourceSchema:holder.conversation.recovery.sourceSchema,conversation:cvClone(raw)}));}catch(_){}
    }
  }
  return {changed:before !== JSON.stringify(holder.conversation)};
}
function cvValidateConversationImport(raw){
  if(raw == null) return true;
  if(!cvPlain(raw)) throw new Error('progress.conversation must be an object');
  if(raw.schema === 1){
    if(!cvPlain(raw.scenes)) throw new Error('progress.conversation.scenes must be an object');
    const allowedRoot=new Set(['schema','scenes']);
    if(Object.keys(raw).some(key=>!allowedRoot.has(key))) throw new Error('schema-1 conversation has an unknown field');
    Object.keys(raw.scenes).forEach(id=>cvMigrateLegacyScene(raw.scenes[id],true));
    return true;
  }
  if(raw.schema !== 2) throw new Error('progress.conversation.schema must be 1 or 2');
  if(raw.courseId !== CV1_COURSE_ID || raw.curriculumRevision !== 1) throw new Error('conversation course identity is invalid');
  const rootKeys=['schema','courseId','curriculumRevision','pace','migrations','legacyScenes','lessons','activities','gates','retention','weakness','days','resume','completion','recovery','extensions'];
  if(!cvExactKeys(raw,rootKeys)||!cvSafeTree(raw)) throw new Error('schema-2 conversation contains an unknown or unsafe field');
  ['pace','migrations','legacyScenes','lessons','activities','gates','retention','weakness','days','extensions'].forEach(key=>{ if(!cvPlain(raw[key])) throw new Error('progress.conversation.'+key+' must be an object'); });
  if(!cvExactKeys(raw.pace,['anchor','cursor','lastMainCreditDay'])||!cvExactKeys(raw.migrations,['v1ToV2'])||!cvExactKeys(raw.activities,['consolidations','optional'])||!cvExactKeys(raw.weakness,['items','confusions']))throw new Error('conversation state has an unknown structural field');
  if(!Number.isInteger(raw.pace.cursor) || raw.pace.cursor<0 || raw.pace.cursor>CV1_MAIN_SEQUENCE.length) throw new Error('conversation cursor is invalid');
  if(!cvDayNotFuture(raw.pace.anchor)||!cvDayNotFuture(raw.pace.lastMainCreditDay)) throw new Error('conversation pace dates are invalid');
  if(raw.migrations.v1ToV2!=null&&(!cvExactKeys(raw.migrations.v1ToV2,['date','legacySceneCount'])||!cvDayNotFuture(raw.migrations.v1ToV2.date)||!Number.isInteger(raw.migrations.v1ToV2.legacySceneCount)||raw.migrations.v1ToV2.legacySceneCount<0))throw new Error('conversation migration stamp is invalid');
  Object.keys(raw.legacyScenes).forEach(id=>{const item=raw.legacyScenes[id],legacyRun=item&&item.lastRun?cvClone(item.lastRun):null;if(legacyRun)delete legacyRun.evidenceVersion;if(!cvExactKeys(item,['sourceSchema','runs','firstCompleted','lastCompleted','legacySelfRating','lastRun'])||item.sourceSchema!==1||item.lastRun&&item.lastRun.evidenceVersion!==1||!cvMigrateLegacyScene({runs:item.runs,firstCompleted:item.firstCompleted,lastCompleted:item.lastCompleted,selfRating:item.legacySelfRating,lastRun:legacyRun},false))throw new Error('invalid legacy conversation history '+id);});
  Object.keys(raw.lessons).forEach(id=>{ if(!CV1_LESSONS[id]||!cvLessonRecordValid(raw.lessons[id],CV1_LESSONS[id],false)) throw new Error('invalid conversation lesson '+id); });
  if(!cvPlain(raw.activities.consolidations)||!cvPlain(raw.activities.optional))throw new Error('conversation activities are invalid');
  Object.keys(raw.activities.consolidations).forEach(id=>{if(id!==CV1_WEEK1_CONSOLIDATION||!cvLessonRecordValid(raw.activities.consolidations[id],null,true))throw new Error('invalid conversation consolidation '+id);});
  Object.keys(raw.activities.optional).forEach(id=>{const item=raw.activities.optional[id];if(!cvExactKeys(item,['runs','lastCompleted'])||!Number.isInteger(item.runs)||item.runs<0||!cvDayNotFuture(item.lastCompleted))throw new Error('invalid optional conversation activity '+id);});
  Object.keys(raw.gates).forEach(id=>{if(id!==CV1_WEEK1_GATE||!cvAssessmentRecordValid(raw.gates[id],CV1_GATE_FORMS,'gate',null))throw new Error('invalid conversation gate '+id);});
  Object.keys(raw.retention).forEach(id=>{if(!CV1_RETENTION_FORMS[id])throw new Error('unknown conversation retention '+id);const stage=id.split('.').pop();if(!cvAssessmentRecordValid(raw.retention[id],cvFormsForHistory(id),stage,raw.retention[id].due))throw new Error('invalid conversation retention '+id);});
  Object.keys(raw.weakness.items).forEach(id=>{const item=raw.weakness.items[id];if(!cvExactKeys(item,['seen','firstMisses','reviewMisses','correctStreak','lastSeen','lastMiss'])||['seen','firstMisses','reviewMisses','correctStreak'].some(key=>!Number.isInteger(item[key])||item[key]<0)||item.firstMisses>item.seen||!cvDayNotFuture(item.lastSeen)||!cvDayNotFuture(item.lastMiss))throw new Error('invalid conversation weakness item '+id);});
  Object.keys(raw.weakness.confusions).forEach(id=>{if(!Number.isInteger(raw.weakness.confusions[id])||raw.weakness.confusions[id]<1||!id.startsWith('cv1.interaction.')||!id.includes('>'))throw new Error('invalid conversation confusion '+id);});
  const knownMain=new Set(CV1_MAIN_SEQUENCE),knownRetention=new Set(Object.keys(CV1_RETENTION_FORMS));
  Object.keys(raw.days).forEach(day=>{const item=raw.days[day];if(!cvDayNotFuture(day)||!cvExactKeys(item,['secs','main','reviews','repairs'])||!Number.isFinite(item.secs)||item.secs<0||item.main!=null&&!knownMain.has(item.main)||!cvIdList(item.reviews,[...knownRetention],false)||!cvIdList(item.repairs,[...knownRetention,CV1_WEEK1_GATE],false))throw new Error('invalid conversation day '+day);});
  if(raw.extensions.learningCheck!=null&&!cvLearningCheckValid(raw.extensions.learningCheck))throw new Error('invalid supplementary learning check');
  if(raw.completion!=null||raw.recovery!=null)throw new Error('v8.5.0 cannot import final completion or unresolved recovery authority');
  const authoritative=CV1_MAIN_SEQUENCE.map(id=>CV1_LESSONS[id]?!!(raw.lessons[id]&&raw.lessons[id].firstCompleted):id===CV1_WEEK1_CONSOLIDATION?!!(raw.activities.consolidations[id]&&raw.activities.consolidations[id].firstCompleted):!!(raw.gates[id]&&raw.gates[id].passedAt));
  const expectedCursor=authoritative.findIndex(done=>!done),cursor=expectedCursor<0?CV1_MAIN_SEQUENCE.length:expectedCursor;if(raw.pace.cursor!==cursor||authoritative.slice(cursor+1).some(Boolean))throw new Error('conversation progression is inconsistent');
  if(Object.keys(raw.activities.consolidations).length&&raw.pace.cursor<3)throw new Error('consolidation exists before its lesson prerequisites');
  if(Object.keys(raw.gates).length&&raw.pace.cursor<4)throw new Error('gate record exists before consolidation authority');
  const l1=raw.lessons['cv1.lesson.w01.l01.food-order'],l1Anchor=l1&&l1.firstCompleted||null;if(l1Anchor!==raw.pace.anchor)throw new Error('conversation anchor does not match Lesson 1');
  Object.values(CV1_LESSONS).forEach(lesson=>{const record=raw.lessons[lesson.id];['d1','d7'].forEach(stage=>{const id=`cv1.retention.w01.l0${lesson.number}.${stage}`,expected=record&&record.firstCompleted?cvPlusDays(record.firstCompleted,stage==='d1'?1:7):null;if(expected==null&&raw.retention[id])throw new Error('retention exists before lesson authority '+id);if(expected&&(!raw.retention[id]||raw.retention[id].due!==expected))throw new Error('retention due date mismatch '+id);});});
  const gate=raw.gates[CV1_WEEK1_GATE],d30=raw.retention['cv1.retention.w01.d30'];if(gate&&gate.passedAt){if(!d30||d30.due!==cvPlusDays(gate.passedAt,30))throw new Error('Week 1 +30 due date mismatch');}else if(d30)throw new Error('Week 1 +30 exists before gate pass');
  const mainDays=Object.keys(raw.days).filter(day=>raw.days[day].main).sort(),lastMain=mainDays.length?mainDays[mainDays.length-1]:null;if(raw.pace.lastMainCreditDay!==lastMain)throw new Error('last main-credit day is inconsistent');
  if(raw.resume!=null){
    if(!cvResumeValid(raw.resume))throw new Error('conversation resume is invalid');
    const currentMain=CV1_MAIN_SEQUENCE[raw.pace.cursor],resumeCurrent=['lesson','consolidation','gate'].includes(raw.resume.taskKind)?raw.resume.taskId===currentMain:!!raw.retention[raw.resume.taskId]&&!raw.retention[raw.resume.taskId].passedAt;
    if(!resumeCurrent||!cvResumeMatchesAuthority(raw.resume,raw))throw new Error('conversation resume does not match current authority');
  }
  return true;
}

function cvConversation(target){ const holder=target||state; cvRepairConversationState(holder); return holder.conversation; }
function cvMainTask(taskId){
  if(CV1_LESSONS[taskId]) return {id:taskId,kind:'lesson',title:CV1_LESSONS[taskId].title,minutes:CV1_LESSONS[taskId].totalMinutes};
  if(taskId===CV1_WEEK1_CONSOLIDATION) return {id:taskId,kind:'consolidation',title:CV1_CONSOLIDATION.title,minutes:CV1_CONSOLIDATION.totalMinutes};
  if(taskId===CV1_WEEK1_GATE) return {id:taskId,kind:'gate',title:CV1_GATE_META.title,minutes:CV1_GATE_META.totalMinutes};
  return null;
}
function cvNextMain(target){
  const c=cvConversation(target);
  return cvMainTask(CV1_MAIN_SEQUENCE[c.pace.cursor] || null);
}
function cvMainAvailableToday(target,day){
  const c=cvConversation(target),today=day||bangkokDayStr();
  return c.pace.lastMainCreditDay !== today;
}
function cvDelayedMinutes(taskId){const stage=taskId&&taskId.split('.').pop(),work=CV1_DELAYED_WORKLOADS[stage];return work?work.totalMinutes:0;}
function cvTodayAuthoredMinutes(target,day){
  const c=cvConversation(target),today=day||bangkokDayStr(),record=c.days[today];if(!record)return 0;
  const main=record.main?cvMainTask(record.main):null;
  return (main?main.minutes:0)+(record.reviews||[]).reduce((sum,id)=>sum+cvDelayedMinutes(id),0);
}
function cvMainFitsToday(task,target,day){return !task||cvTodayAuthoredMinutes(target,day)+task.minutes<=45;}
function cvEnsureConversationDay(c,day){
  if(!cvPlain(c.days[day])) c.days[day]={secs:0,main:null,reviews:[],repairs:[]};
  if(!Array.isArray(c.days[day].reviews)) c.days[day].reviews=[];
  if(!Array.isArray(c.days[day].repairs)) c.days[day].repairs=[];
  return c.days[day];
}
function cvAccumulateActiveSeconds(seconds,target,day){
  const amount=Math.floor(Number(seconds));if(!Number.isFinite(amount)||amount<=0)return false;
  const c=cvConversation(target),record=cvEnsureConversationDay(c,day||bangkokDayStr());record.secs=Math.max(0,Math.floor(Number(record.secs)||0))+amount;return true;
}
function cvClaimMainCredit(c,taskId,day){
  if(c.pace.lastMainCreditDay===day) return false;
  if(CV1_MAIN_SEQUENCE[c.pace.cursor]!==taskId) return false;
  if(!c.pace.anchor) c.pace.anchor=day;
  c.pace.cursor++;
  c.pace.lastMainCreditDay=day;
  cvEnsureConversationDay(c,day).main=taskId;
  return true;
}
function cvScheduleLessonRetention(c,lesson,day){
  ['d1','d7'].forEach(stage=>{
    const id=`cv1.retention.w01.l0${lesson.number}.${stage}`;
    if(!c.retention[id]) c.retention[id]=cvAssessmentRecord(null,cvPlusDays(day,stage==='d1'?1:7));
  });
}
function cvDueAssignments(target,day){
  const c=cvConversation(target),today=day||bangkokDayStr();
  const stageRank={d1:0,d7:1,d30:2};
  return Object.keys(c.retention).map(id=>({id,rec:c.retention[id],stage:id.split('.').pop()}))
    .filter(item=>item.rec.due&&item.rec.due<=today&&!item.rec.passedAt&&item.rec.lastAttempt!==today&&(item.rec.attempts===0||(item.rec.repairCompletedAt&&item.rec.lastAttempt&&item.rec.repairCompletedAt>=item.rec.lastAttempt&&item.rec.lastAttempt<today)))
    .sort((a,b)=>a.rec.due.localeCompare(b.rec.due)||(stageRank[a.stage]-stageRank[b.stage])||a.id.localeCompare(b.id));
}
function cvPlannedDueAssignments(target,day){
  const c=cvConversation(target),today=day||bangkokDayStr(),worked=cvPlain(c.days[today])&&Array.isArray(c.days[today].reviews)?c.days[today].reviews.length:0;
  if(worked>=2)return [];
  const all=cvDueAssignments(target,today),never=all.filter(item=>item.rec.attempts===0),failed=all.filter(item=>item.rec.attempts>0).sort((a,b)=>(a.rec.lastAttempt||'').localeCompare(b.rec.lastAttempt||'')||a.rec.due.localeCompare(b.rec.due)||a.id.localeCompare(b.id)),picked=[];
  const take=list=>{const item=list.shift();if(item&&!picked.includes(item))picked.push(item);};
  if(never.length)take(never);else take(failed);
  if(failed.length)take(failed);else take(never);
  return picked.slice(0,2-worked);
}
function cvBacklogBlocksMain(target,day){
  const c=cvConversation(target),today=day||bangkokDayStr(),remaining=cvDueAssignments(target,today).filter(item=>item.rec.attempts===0),worked=cvPlain(c.days[today])&&Array.isArray(c.days[today].reviews)?c.days[today].reviews.length:0;
  return remaining.length>2||remaining.reduce((sum,item)=>sum+cvBuildObjectives(CV1_RETENTION_FORMS[item.id][0].items,CV1_RETENTION_FORMS[item.id][0].id,'assessment').length,0)>16||(worked>=2&&remaining.length>0);
}
function cvSelectForm(forms,rec){
  const unused=forms.filter(form=>!rec.usedFormIds.includes(form.id));
  if(unused.length) return unused[0];
  rec.formCycle++;
  const last=rec.lastFormId;
  rec.usedFormIds=[];
  return forms.find(form=>form.id!==last) || forms[0];
}
function cvConsumeForm(rec,form){
  if(!rec.usedFormIds.includes(form.id)) rec.usedFormIds.push(form.id);
  rec.lastFormId=form.id;
}
function cvObjectiveId(formId,index){ return formId.replace('cv1.form','cv1.objective')+'.'+String(index+1).padStart(2,'0'); }
function cvBuildObjectives(interactions,formId,mode){
  const out=[];
  const add=(direction,interaction)=>out.push({id:cvObjectiveId(formId,out.length),revision:1,formId,sourceInteractionId:interaction.id,direction,interaction});
  if(mode==='gate'){
    const paired=interactions.slice(0,4);
    paired.forEach(interaction=>add(interaction.event?'event-request':'intent',interaction));
    paired.forEach(interaction=>add(interaction.event?'partner-reply-intent':'response',interaction));
    interactions.slice(4,8).forEach(interaction=>add(interaction.event?'event-request':'response',interaction));
    return out;
  }
  interactions.forEach(interaction=>{
    add(interaction.event?'event-request':'intent',interaction);
    add(interaction.event?'partner-reply-intent':'response',interaction);
  });
  return out;
}
function cvWeaknessSeen(c,objective,correct,selected){
  const skill=objective.interaction.id+'>'+objective.direction;
  const raw=cvPlain(c.weakness.items[skill])?c.weakness.items[skill]:{seen:0,firstMisses:0,reviewMisses:0,correctStreak:0,lastSeen:null,lastMiss:null};
  raw.seen++;raw.lastSeen=bangkokDayStr();
  if(correct) raw.correctStreak++; else { raw.firstMisses++;raw.correctStreak=0;raw.lastMiss=raw.lastSeen; if(selected) c.weakness.confusions[objective.interaction.id+'>'+selected]=(c.weakness.confusions[objective.interaction.id+'>'+selected]||0)+1; }
  c.weakness.items[skill]=raw;
}

function cvPushUnique(list,value){ if(value && !list.includes(value)) list.push(value); }
function cvLessonEvidence(){
  return {pairIdsPlayed:[],sceneIdsPlayed:[],responsePromptIds:[],responseFirstCorrectIds:[],responseRepairIds:[],spokenBeforeRevealIds:[],modelRevealIds:[],supportOpenedIds:[],substitutionIds:[],recordStepCompleted:false,recordingAttempted:false,objective:{itemIds:[],answeredIds:[],firstCorrectIds:[],clearedIds:[]}};
}
function cvResumeEvidence(p){
  if(p.kind==='lesson')return {
    pairIdsPlayed:p.evidence.pairIdsPlayed.slice(),sceneIdsPlayed:p.evidence.sceneIdsPlayed.slice(),responsePromptIds:p.evidence.responsePromptIds.slice(),responseFirstCorrectIds:p.evidence.responseFirstCorrectIds.slice(),responseRepairIds:p.evidence.responseRepairIds.slice(),
    itemIds:p.evidence.objective.itemIds.slice(),answeredIds:p.evidence.objective.answeredIds.slice(),firstCorrectIds:p.evidence.objective.firstCorrectIds.slice(),clearedIds:p.evidence.objective.clearedIds.slice(),
    spokenPromptIds:p.lesson.interactions.flatMap((_,index)=>['supported','reduced'].map(mode=>`cv1.spoken.lesson.w01.l0${p.lesson.number}.${mode}.${String(index+1).padStart(2,'0')}`)),spokenBeforeRevealIds:p.evidence.spokenBeforeRevealIds.slice(),modelRevealIds:p.evidence.modelRevealIds.slice(),supportOpenedIds:p.evidence.supportOpenedIds.slice(),substitutionIds:p.evidence.substitutionIds.slice(),transferIds:[],transferCompletedIds:[],recordStepCompleted:!!p.evidence.recordStepCompleted,recordingAttempted:!!p.evidence.recordingAttempted
  };
  return {
    pairIdsPlayed:[],sceneIdsPlayed:[],responsePromptIds:[],responseFirstCorrectIds:[],responseRepairIds:[],
    itemIds:p.evidence.itemIds.slice(),answeredIds:(p.evidence.answeredIds||[]).slice(),firstCorrectIds:p.evidence.firstCorrectIds.slice(),clearedIds:(p.evidence.clearedIds||[]).slice(),spokenPromptIds:p.evidence.spokenPromptIds.slice(),spokenBeforeRevealIds:p.evidence.spokenBeforeRevealIds.slice(),modelRevealIds:p.evidence.modelRevealIds.slice(),supportOpenedIds:p.evidence.supportOpenedIds.slice(),substitutionIds:[],transferIds:(p.evidence.transferIds||[]).slice(),transferCompletedIds:(p.evidence.transferCompletedIds||[]).slice(),recordStepCompleted:false,recordingAttempted:false
  };
}
function cvResumeStage(p){
  if(p.kind==='lesson'){
    if(p.phase==='resolution')return {stageId:`resolution-${p.resolution&&p.resolution.returnPhase||'guided'}`,stageIndex:p.resolution&&p.resolution.returnIndex||0,itemIndex:p.lesson.interactions.indexOf(p.resolution&&p.resolution.item)};
    const index=p.phase==='pairs'?p.pairIndex:p.phase==='guided'?p.guidedIndex:0;
    return {stageId:p.phase,stageIndex:p.step,itemIndex:Math.max(0,index||0)};
  }
  const index=p.phase==='objective'?p.objectiveIndex:p.phase==='spoken'?p.spokenIndex:p.phase==='repair'?p.repairIndex:p.phase==='transfer'?p.transferIndex:0;
  return {stageId:p.phase,stageIndex:index||0,itemIndex:p.objectiveIndex||0};
}
function cvPersistCourseResume(p){
  if(!p||!p.resumable)return false;
  const c=cvConversation(),stage=cvResumeStage(p),old=cvPlain(c.resume)&&c.resume.taskId===p.taskId?c.resume:null;
  c.resume={taskId:p.taskId,taskKind:p.taskKind||p.kind,taskRevision:1,curriculumRevision:CV1_CURRICULUM_REVISION,formId:p.form?p.form.id:(p.formId||null),formCycle:p.formCycle==null?null:p.formCycle,attemptOrdinal:p.attemptOrdinal||1,runSeed:p.runSeed||`${p.taskId}|${p.attemptOrdinal||1}`,startedDay:p.startedDay||(old&&old.startedDay)||bangkokDayStr(),savedDay:bangkokDayStr(),stageId:stage.stageId,stageIndex:stage.stageIndex,itemIndex:stage.itemIndex,evidence:cvResumeEvidence(p)};
  saveState();return true;
}
// One choice renderer serves lesson comprehension, consolidation, gates and checks.
// Stable item-keyed shuffles survive reload without fixed correct-answer positions.
function cvShuffled(values, key){
  let seed=2166136261;
  for(const ch of String(key)){seed=Math.imul(seed^ch.charCodeAt(0),16777619)>>>0;}
  const out=values.slice();
  for(let i=out.length-1;i>0;i--){
    seed=(seed+0x6D2B79F5)>>>0;
    let t=Math.imul(seed^(seed>>>15),seed|1);t^=t+Math.imul(t^(t>>>7),t|61);
    const j=Math.floor((((t^(t>>>14))>>>0)/4294967296)*(i+1));
    [out[i],out[j]]=[out[j],out[i]];
  }
  return out;
}
function cvCueIntent(cue){
  const family=cvCueFamilyId(cue);
  const intents={
    'cv1.cue-family.social.greeting':'A polite greeting.',
    'cv1.cue-family.food.what-would-you-like':'The vendor asks what you would like.',
    'cv1.cue-family.food.spice-choice':'The vendor asks about spice.',
    'cv1.cue-family.food.service-choice':'The vendor asks where you will eat.',
    'cv1.cue-family.food.drink-choice':'The vendor asks which drink you want.',
    'cv1.cue-family.food.total':'The vendor gives the total.'
  };
  const answer=intents[family];
  if(!answer)throw new Error('Untaught listening cue: '+(cue&&cue.id));
  const neighbours={
    'cv1.cue-family.social.greeting':['The vendor gives the total.','The vendor asks what you would like.'],
    'cv1.cue-family.food.what-would-you-like':['The vendor asks about spice.','The vendor asks where you will eat.'],
    'cv1.cue-family.food.spice-choice':['The vendor asks where you will eat.','The vendor asks which drink you want.'],
    'cv1.cue-family.food.service-choice':['The vendor asks which drink you want.','The vendor asks about spice.'],
    'cv1.cue-family.food.drink-choice':['The vendor asks where you will eat.','The vendor asks what you would like.'],
    'cv1.cue-family.food.total':['The vendor asks about spice.','The vendor asks where you will eat.']
  };
  return {answer,choices:[answer,...neighbours[family]]};
}
function cvChoiceSpec(objective){
  const item=objective.interaction;
  const intent=['intent','event-request','partner-reply-intent'].includes(objective.direction);
  const situation=objective.direction==='event-request'||(objective.direction==='intent'&&!!item.resolution);
  const cue=objective.direction==='partner-reply-intent'?(item.partnerReply||CV1_LINES.total):item.cue;
  const data=intent?(situation?{answer:item.intent,choices:item.intentOptions}:cvCueIntent(cue)):null;
  return {
    id:objective.id,skill:situation?'situation':intent?'listening':'response',
    heading:situation||!intent?item.context:'What does the vendor mean?',
    instruction:situation?'Choose what you need to communicate.':intent?'Listen before choosing.':'Listen to the vendor and the possible replies.',
    cue:situation?null:cue,
    options:intent?data.choices.map(label=>({id:label,label})):item.options.map(id=>({id,audio:CV1_RESPONSE_BY_ID[id]})),
    answer:intent?data.answer:item.response.id,
    explanation:intent?(situation?item.intent:cue.en):item.response.en,
    revealLine:intent?(situation?item.response:cue):item.response
  };
}
function cvChoiceReady(spec, heard, option){
  return (!spec.cue||heard.cue)&&(!option.audio||heard.options.includes(option.id));
}
function cvRenderChoiceQuestion(p,spec,config){
  const opts=config||{},view={};p.choiceView=view;
  const stillHere=()=>player===p&&p.choiceView===view;
  const order=cvShuffled(spec.options,(p.runSeed||p.taskId)+'|'+spec.id);
  if(opts.result){
    const result=opts.result;
    el('stage').innerHTML=`<div class="q-prompt"><div class="eyebrow">${esc(opts.label||'Check')}</div><h2>${esc(spec.heading)}</h2><p class="sub">Your first answer is saved.</p></div><div class="q-feedback ${result.correct?'ok answer-correct':'no answer-wrong'}"><b>${result.correct?'That fits.':'This needs practice.'}</b><p>${esc(spec.explanation)}</p>${spec.revealLine?cvLinePanel(spec.revealLine,'Compare with the model'):''}${spec.feedbackHtml||''}<button class="btn full" id="cv-choice-next">${esc(opts.nextLabel||'Continue')} →</button></div>`;
    el('cv-choice-next').onclick=()=>{if(stillHere())opts.onNext();};
    return;
  }
  const heard={cue:!spec.cue,options:[]};
  el('stage').innerHTML=`<div class="q-prompt"><div class="eyebrow">${esc(opts.label||'Check')}</div><h2>${esc(spec.heading)}</h2>${spec.promptHtml||''}<p class="sub">${esc(spec.instruction)}</p>${spec.cue?'<button class="btn full ghost" id="cv-choice-cue">▶ Hear the vendor</button>':''}</div><div class="q-options">${order.map((option,index)=>option.audio?`<div class="cv-audio-option"><button class="btn ghost" data-cv-option-audio="${index}">▶ Hear option ${String.fromCharCode(65+index)}</button><button class="btn" data-cv-option="${index}" disabled>Choose ${String.fromCharCode(65+index)}</button></div>`:`<button class="q-opt" data-cv-option="${index}" ${spec.cue?'disabled':''}>${esc(option.label)}</button>`).join('')}</div><button class="btn full ghost" id="cv-choice-unsure" ${spec.cue?'disabled':''}>I don’t know yet</button>`;
  const buttons=[...el('stage').querySelectorAll('[data-cv-option]')];
  const refresh=()=>{
    buttons.forEach(button=>{button.disabled=!cvChoiceReady(spec,heard,order[Number(button.dataset.cvOption)]);});
    el('cv-choice-unsure').disabled=!heard.cue;
  };
  if(spec.cue)el('cv-choice-cue').onclick=()=>speak(spec.cue.thai,el('cv-choice-cue'),spec.cue.rate,ok=>{if(!ok||!stillHere())return;heard.cue=true;refresh();},'vendor');
  el('stage').querySelectorAll('[data-cv-option-audio]').forEach(button=>button.onclick=()=>{
    const option=order[Number(button.dataset.cvOptionAudio)];
    speak(option.audio.thai,button,option.audio.rate,ok=>{if(!ok||!stillHere())return;cvPushUnique(heard.options,option.id);refresh();},'learner');
  });
  let answered=false;
  const choose=option=>{
    if(answered||!stillHere()||!heard.cue||(option&&!cvChoiceReady(spec,heard,option)))return;
    answered=true;buttons.forEach(button=>button.disabled=true);
    opts.onAnswer(option?option.id:null,!!option&&option.id===spec.answer);
  };
  buttons.forEach(button=>button.onclick=()=>choose(order[Number(button.dataset.cvOption)]));
  el('cv-choice-unsure').onclick=()=>choose(null);
}
function cvAssessmentBreakdown(p){
  const groups={listening:{correct:0,total:0},response:{correct:0,total:0},situation:{correct:0,total:0}};
  for(const objective of p.objectives){const group=groups[cvChoiceSpec(objective).skill];group.total++;if(p.evidence.firstCorrectIds.includes(objective.id))group.correct++;}
  return Object.entries(groups).filter(([,x])=>x.total).map(([key,x])=>`${x.correct}/${x.total} ${key==='listening'?'heard meanings':key==='response'?'reply choices':'situation choices'}`).join(' · ');
}

// Spoken practice uses explicit learner actions; playback never creates recall evidence.
function cvRenderRecall(p,line,config){
  const opts=config,view={};p.recallView=view;
  const stillHere=()=>player===p&&p.recallView===view;
  const revealed=!!opts.revealed;
  el('stage').innerHTML=`<div class="q-prompt"><div class="eyebrow">${esc(opts.label||'Your turn without tiles')}</div><h2>${esc(opts.prompt||line.en)}</h2><p class="sub">${revealed?'Compare your attempt with the phrase.':'Try a reply aloud. If you cannot remember it, use the help button.'}</p>${opts.cue?'<button class="btn full ghost" id="cv-recall-cue">▶ Hear the vendor</button>':''}</div>${revealed?cvLinePanel(line,'Model for comparison'):'<div class="cv-support-hidden"><b>Your reply is hidden.</b></div><details class="conversation-transcript-drawer" id="cv-recall-support"><summary>Show the phrase parts</summary>'+cvChunkSupportHtml(line)+'</details>'}<div class="stage-actions">${revealed?'<button class="btn full ghost" id="cv-recall-model">▶ Hear the model</button>'+ (opts.onRate?'<p class="sub">Your own report of this attempt; pronunciation is not scored.</p>'+CV_CHECK_RATINGS.map(r=>`<button class="btn full" data-cv-recall-rating="${r.id}" ${opts.supported&&r.id==='independent'?'disabled':''}>${esc(r.label)}</button>`).join(''):'<button class="btn full" id="cv-recall-next">I practised the reply · continue →</button>'):'<button class="btn full" id="cv-recall-reveal" '+(opts.cue?'disabled':'')+'>I tried a reply · compare</button><button class="btn full ghost" id="cv-recall-help" '+(opts.cue?'disabled':'')+'>I need the model</button>'}</div>`;
  let heard=!opts.cue||revealed;
  if(opts.cue)el('cv-recall-cue').onclick=()=>speak(opts.cue.thai,el('cv-recall-cue'),opts.cue.rate,ok=>{
    if(!ok||!stillHere())return;heard=true;
    if(!revealed){el('cv-recall-reveal').disabled=false;el('cv-recall-help').disabled=false;}
  },'vendor');
  if(revealed){
    el('cv-recall-model').onclick=()=>speak(line.thai,el('cv-recall-model'),line.rate,null,'learner');
    if(opts.onRate)el('stage').querySelectorAll('[data-cv-recall-rating]').forEach(button=>button.onclick=()=>{if(stillHere()&&!(opts.supported&&button.dataset.cvRecallRating==='independent'))opts.onRate(button.dataset.cvRecallRating);});
    else el('cv-recall-next').onclick=()=>{if(stillHere())opts.onNext();};
  }else{
    const support=el('cv-recall-support');
    support.addEventListener('toggle',()=>{if(support.open&&stillHere())opts.onSupport();});
    el('cv-recall-reveal').onclick=()=>{if(heard&&stillHere())opts.onReveal(false);};
    el('cv-recall-help').onclick=()=>{if(heard&&stillHere())opts.onReveal(true);};
  }
}

function cvLinePanel(line,label){
  return `<div class="conversation-turn learner"><div class="conversation-speaker">${esc(label||'You say')}</div><div class="p-en"><b>${esc(line.en)}</b></div><div class="p-thai" lang="th">${esc(line.thai)}</div><div class="p-tr">${esc(line.tr)}</div>${conversationSegmentsHtml(line.segments,'Phrase parts')}</div>`;
}
function cvPronunciationKeyHtml(open){
  return `<details class="conversation-pronunciation-key" ${open?'open':''}><summary>Pronunciation-spelling key (optional)</summary><div class="mt-10"><b>This is an English reading aid, not Thai spelling or a pronunciation score.</b></div><div class="sub mt-10"><b>bp</b> and <b>dt</b> are the unpuffed sounds between English b/p and d/t. <b>ph</b>, <b>th</b> and <b>kh</b> include a puff of air. <b>ng</b> can begin a Thai word. <b>ʉ</b> is a central vowel with rounded lips. Doubled vowels such as <b>aa</b>, <b>ii</b> and <b>uu</b> are long.</div><div class="sub mt-10">Pitch marks: unmarked = mid, grave (à) = low, circumflex (â) = falling, acute (á) = high and caron (ǎ) = rising. Keep this key as support; it is never tested.</div></details>`;
}
function cvLessonPhases(lesson){
  return 4 + (lesson.interactions.length*2);
}
function cvSetCourseProgress(p){ setProg(Math.round(100*Math.min(p.step||0,p.total||1)/Math.max(1,p.total||1))); }
function cvAdvanceLesson(phase){ clearLocalRecording(); player.phase=phase; player.step++;cvPersistCourseResume(player);renderConversationCourseLesson(); }
function cvBuilderState(p,key){
  if(!p.builders)p.builders={};
  if(!p.builders[key])p.builders[key]={selected:[],attempted:false,complete:false};
  return p.builders[key];
}
function cvBuilderOrder(line,key){
  const count=line.segments.length,base=Array.from({length:count},(_,index)=>index);
  if(count<2)return base;
  const score=Array.from(key).reduce((sum,ch)=>sum+ch.charCodeAt(0),0),shift=score%count;
  const order=base.slice(shift).concat(base.slice(0,shift));
  if(order.every((value,index)=>value===index))order.reverse();
  return order;
}
function cvBuilderTileHtml(part,index,mode,inAnswer){
  return `<button type="button" class="cv-word-tile${inAnswer?' in-answer':''}" data-cv-builder-part="${index}" aria-label="${escAttr((inAnswer?'Remove ':'Add ')+part.en)}"><span class="thai" lang="th">${esc(part.thai)}</span><span class="tr">${esc(part.tr)}</span>${mode==='teach'?`<span class="en">${esc(part.en)}</span>`:''}</button>`;
}
function cvTeachingModelHtml(line){
  const note=CV1_PATTERN_NOTES[line.id];
  return `<div class="cv-teach-phrase"><div class="conversation-speaker">Your new reply</div><div class="p-en"><b>${esc(line.en)}</b></div><div class="p-thai" lang="th">${esc(line.thai)}</div><div class="p-tr">${esc(line.tr)}</div><div><div class="conversation-speaker">What each part means</div><div class="cv-teach-parts">${line.segments.map(part=>`<div class="cv-teach-part"><div class="thai" lang="th">${esc(part.thai)}</div><div class="meaning"><b>${esc(part.en)}</b><span>${esc(part.tr)}</span></div></div>`).join('')}</div></div>${note?`<div class="notebox"><b>${esc(note.title)}</b><p>${esc(note.text)}</p></div>`:''}<button class="btn full" id="cv-model-reply">▶ Hear the complete phrase</button></div>`;
}
function cvSentenceBuilderHtml(p,line,key,mode,complete){
  const state=cvBuilderState(p,key);if(complete){state.complete=true;if(state.selected.length!==line.segments.length)state.selected=line.segments.map((_,index)=>index);}
  return `<div class="cv-builder${state.complete?' complete':''}" id="cv-builder"><div><div class="conversation-speaker">${mode==='teach'?'Now put it together':'Build it from memory'}</div><b>${esc(line.en)}</b></div><div class="cv-builder-target" id="cv-builder-target"></div><div class="cv-builder-bank" id="cv-builder-bank"></div><div class="cv-builder-feedback${state.complete?' ok':''}" id="cv-builder-feedback" role="status" aria-live="polite">${state.complete?'Ready to use.':''}</div><button class="btn full" id="cv-builder-check" ${state.complete?'disabled':''}>Check my sentence</button></div>`;
}
function cvBuilderIsBlocked(options){
  const opts=options||{};return typeof opts.disabled==='function'?!!opts.disabled():!!opts.disabled;
}
function cvBindSentenceBuilder(p,line,key,mode,options){
  const opts=options||{},state=cvBuilderState(p,key),order=cvBuilderOrder(line,key),target=el('cv-builder-target'),bank=el('cv-builder-bank'),feedback=el('cv-builder-feedback'),check=el('cv-builder-check'),blocked=()=>cvBuilderIsBlocked(opts);
  if(!target||!bank||!feedback||!check)return;
  const draw=()=>{
    target.innerHTML=state.selected.map(index=>cvBuilderTileHtml(line.segments[index],index,mode,true)).join('');
    bank.innerHTML=order.filter(index=>!state.selected.includes(index)).map(index=>cvBuilderTileHtml(line.segments[index],index,mode,false)).join('');
    target.querySelectorAll('[data-cv-builder-part]').forEach(button=>button.onclick=()=>{if(state.complete)return;const index=Number(button.dataset.cvBuilderPart),position=state.selected.indexOf(index);if(position>=0)state.selected.splice(position,1);feedback.textContent='';feedback.className='cv-builder-feedback';draw();});
    bank.querySelectorAll('[data-cv-builder-part]').forEach(button=>button.onclick=()=>{if(state.complete)return;state.selected.push(Number(button.dataset.cvBuilderPart));feedback.textContent='';feedback.className='cv-builder-feedback';draw();});
    check.disabled=state.complete||blocked()||state.selected.length!==line.segments.length;
  };
  check.onclick=()=>{
    const correct=state.selected.every((value,index)=>value===index);
    if(!correct){const first=!state.attempted;state.attempted=true;feedback.className='cv-builder-feedback no';feedback.textContent='Almost. Tap a part above to move it back, then try again.';if(first&&typeof opts.onFirstWrong==='function')opts.onFirstWrong();return;}
    const first=!state.attempted;state.attempted=true;state.complete=true;feedback.className='cv-builder-feedback ok';feedback.textContent='That works. Say it with the voice.';draw();if(typeof opts.onCorrect==='function')opts.onCorrect(first);
  };
  draw();
}
function cvBindBuilderPlayback(p,line,key,mode,done,onHeard){
  const replay=el('cv-builder-replay'),phase=p.phase;
  const play=()=>{
    if(!cvBuilderState(p,key).complete)return;
    speak(line.thai,replay,line.rate,ok=>{if(ok&&player===p&&p.phase===phase)onHeard();},'learner');
  };
  replay.disabled=!done;replay.onclick=play;
  cvBindSentenceBuilder(p,line,key,mode,{onCorrect:()=>{replay.disabled=false;play();}});
}
function cvLessonSpokenId(p,index,mode){return `cv1.spoken.lesson.w01.l0${p.lesson.number}.${mode}.${String(index+1).padStart(2,'0')}`;}
function cvMarkLessonBuilderAttempt(p,item,correct){
  if(!p.evidence.responsePromptIds.includes(item.id)){cvPushUnique(p.evidence.responsePromptIds,item.id);cvPushUnique(correct?p.evidence.responseFirstCorrectIds:p.evidence.responseRepairIds,item.id);}
}
function startConversationCourseLesson(taskId){
  const lesson=CV1_LESSONS[taskId];
  if(!lesson) return false;
  const c=cvConversation(),record=c.lessons[taskId],resumable=!(record&&record.firstCompleted)&&CV1_MAIN_SEQUENCE[c.pace.cursor]===taskId,objectives=cvBuildObjectives(lesson.interactions,`cv1.form.lesson.w01.l0${lesson.number}.a`,'lesson');
  player={type:'conversation-course',kind:'lesson',taskKind:'lesson',taskId,lesson,scene:lesson.scene,phase:'intro',step:0,total:cvLessonPhases(lesson),pairIndex:0,pairPlayback:{},guidedIndex:0,objectiveIndex:0,completed:false,resumable,startedDay:bangkokDayStr(),attemptOrdinal:(record&&record.runs||0)+1,runSeed:`${taskId}|${(record&&record.runs||0)+1}`,
    resolution:null,pairModes:{},builders:{},objectives,evidence:cvLessonEvidence()};
  player.evidence.objective.itemIds=objectives.map(item=>item.id);
  cvPersistCourseResume(player);openOverlay();renderConversationCourseLesson();return true;
}
function renderConversationCourseLesson(){
  const p=player;if(!p||p.type!=='conversation-course'||p.kind!=='lesson')return;
  stopConversationSpeech();cvSetCourseProgress(p);
  const renderers={intro:cvRenderLessonIntro,pairs:cvRenderLessonPair,scene:cvRenderLessonScene,guided:cvRenderLessonGuided,resolution:cvRenderRepairResolution,substitution:cvRenderLessonSubstitution,rating:cvRenderLessonRating};
  const render=renderers[p.phase];
  if(!render)throw new Error('Unknown conversation lesson stage: '+p.phase);
  render(p);
}
function cvRenderLessonIntro(p){
  el('stage').innerHTML=`<div class="cv-mission"><div class="eyebrow">Lesson ${p.lesson.number} · ${p.lesson.minutes} min</div><h2>${esc(p.lesson.title)}</h2><p>${esc(p.lesson.situation)}</p><div class="cv-goals">${p.lesson.meaning.map(row=>`<span class="cv-goal">${esc(row[0])}</span>`).join('')}</div></div><p class="sub center">Learn and hear each complete reply first. Then put its familiar parts together and say it aloud.</p><div class="cv-voice-note">${esc(conversationVoiceSummary())}</div><div class="stage-actions"><button class="btn full" id="cv-next">Start with the first phrase →</button></div>`;
  el('cv-next').onclick=()=>{p.pairIndex=0;cvAdvanceLesson('pairs');};
}
function cvRenderLessonPair(p){
  const item=p.lesson.interactions[p.pairIndex];
  if(!item){ p.phase='scene';p.step++;cvPersistCourseResume(p);return renderConversationCourseLesson(); }
  const played=p.evidence.pairIdsPlayed.includes(item.id),built=played,heard=p.pairPlayback[item.id]||{model:played,cue:played,reply:played};if(item.event)heard.cue=true;
  const pairMode=played?'build':(p.pairModes[item.id]||'model');
  if(pairMode==='model'){
    el('stage').innerHTML=`<div class="cv-dialogue-progress">${p.lesson.interactions.map((_,index)=>`<span class="${index<p.pairIndex?'done':index===p.pairIndex?'active':''}"></span>`).join('')}</div><div class="center"><div class="eyebrow">Learn phrase ${p.pairIndex+1} of ${p.lesson.interactions.length}</div><h2>${esc(p.lesson.meaning[p.pairIndex][0])}</h2><p class="sub">${esc(p.lesson.meaning[p.pairIndex][1])}</p></div>${cvTeachingModelHtml(item.response)}<div class="stage-actions"><button class="btn full" id="cv-next" ${heard.model?'':'disabled'}>${heard.model?'Practise this reply →':'Hear the phrase before practising'}</button></div>`;
    const modelButton=el('cv-model-reply'),next=el('cv-next'),stillHere=()=>player===p&&p.phase==='pairs'&&p.lesson.interactions[p.pairIndex]===item&&(p.pairModes[item.id]||'model')==='model';
    modelButton.onclick=()=>speak(item.response.thai,modelButton,item.response.rate,ok=>{if(!ok||!stillHere())return;heard.model=true;p.pairPlayback[item.id]=heard;next.disabled=false;next.textContent='Practise this reply →';},'learner');
    next.onclick=()=>{if(!heard.model)return;p.pairModes[item.id]='build';renderConversationCourseLesson();};
    return;
  }
  const cueHtml=item.event?`<div class="conversation-turn vendor"><div class="conversation-speaker">Your turn</div><div class="p-en"><b>${esc(item.context)}</b></div><div class="sub">You start this one.</div></div>`:`<div class="conversation-turn vendor"><div class="conversation-speaker">Vendor says</div><div class="p-en"><b>${esc(item.cue.en)}</b></div><div class="p-thai" lang="th">${esc(item.cue.thai)}</div><div class="p-tr">${esc(item.cue.tr)}</div><button class="btn full ghost" id="cv-pair-cue">▶ Hear the vendor</button></div>`;
  el('stage').innerHTML=`<div class="cv-dialogue-progress">${p.lesson.interactions.map((_,index)=>`<span class="${index<p.pairIndex?'done':index===p.pairIndex?'active':''}"></span>`).join('')}</div><div class="center"><div class="eyebrow">Use phrase ${p.pairIndex+1} of ${p.lesson.interactions.length}</div><h2>Now answer in the conversation</h2><p class="sub">You have seen and heard the complete reply. Listen to the vendor, then put your reply back together.</p></div>${cueHtml}${cvSentenceBuilderHtml(p,item.response,`teach:${item.id}`,'teach',built)}<div class="conversation-playback-actions"><button class="btn ghost" id="cv-pair-reply" ${built?'':'disabled'}>▶ Hear your reply</button><button class="btn ghost" id="cv-pair-stop" data-conversation-stop>Stop</button></div><div class="stage-actions"><button class="btn full" id="cv-next" ${played?'':'disabled'}>${played?'I said it with help · next phrase →':'Build and hear your reply first'}</button></div>`;
  const cueButton=el('cv-pair-cue'),replyButton=el('cv-pair-reply'),next=el('cv-next');
  const stillHere=()=>player===p&&p.phase==='pairs'&&p.lesson.interactions[p.pairIndex]===item;
  const markComplete=()=>{if(!heard.cue||!heard.reply)return;cvPushUnique(p.evidence.pairIdsPlayed,item.id);cvPersistCourseResume(p);next.disabled=false;next.textContent='I said it with help · next phrase →';};
  const playReply=()=>{if(!heard.cue||!cvBuilderState(p,`teach:${item.id}`).complete)return;const finish=ok=>{if(!ok||!stillHere())return;heard.reply=true;p.pairPlayback[item.id]=heard;markComplete();};speak(item.response.thai,replyButton,item.response.rate,ok=>{if(!ok||!stillHere())return;if(item.event&&item.partnerReply){speak(item.partnerReply.thai,replyButton,item.partnerReply.rate,finish,'vendor');return;}finish(true);},'learner');};
  if(cueButton)cueButton.onclick=()=>{speak(item.cue.thai,cueButton,item.cue.rate,ok=>{if(!ok||!stillHere())return;heard.cue=true;p.pairPlayback[item.id]=heard;const check=el('cv-builder-check');if(check)check.disabled=cvBuilderState(p,`teach:${item.id}`).selected.length!==item.response.segments.length;},'vendor');};
  replyButton.onclick=playReply;
  cvBindSentenceBuilder(p,item.response,`teach:${item.id}`,'teach',{disabled:()=>!heard.cue,onFirstWrong:()=>{cvMarkLessonBuilderAttempt(p,item,false);cvPersistCourseResume(p);},onCorrect:first=>{cvMarkLessonBuilderAttempt(p,item,first);replyButton.disabled=false;cvPersistCourseResume(p);playReply();}});
  el('cv-pair-stop').onclick=()=>{stopConversationSpeech();try{speechSynthesis.cancel();}catch(_){}};
  next.onclick=()=>{if(!p.evidence.pairIdsPlayed.includes(item.id))return;const promptId=cvLessonSpokenId(p,p.pairIndex,'supported');cvPushUnique(p.evidence.spokenBeforeRevealIds,promptId);cvPushUnique(p.evidence.modelRevealIds,promptId);cvPushUnique(p.evidence.supportOpenedIds,promptId);p.pairIndex++;p.step++;cvPersistCourseResume(p);renderConversationCourseLesson();};
}
function cvRenderLessonScene(p){
  const heard=p.evidence.sceneIdsPlayed.includes(p.lesson.scene.id);
  el('stage').innerHTML=`<div class="center"><div class="eyebrow">Listen once</div><h2>Hear the phrases together</h2><p class="sub">Vendor and customer turns are separated by a clear pause.</p></div><div class="conversation-playback-panel"><div class="conversation-now-playing" id="conversation-now-playing" role="status" aria-live="polite"><div class="conversation-speaker">Ready</div><div class="p-en"><b>Press play when you are ready.</b></div></div><div class="conversation-playback-actions"><button class="btn ghost" id="cv-scene-play">${heard?'↻ Play again':'▶ Play conversation'}</button><button class="btn ghost" id="cv-scene-stop" data-conversation-stop disabled>Stop</button></div><div class="cv-voice-note">${esc(conversationVoiceSummary())}</div></div>${conversationTranscriptHtml(p.lesson.scene)}<div class="stage-actions"><button class="btn full" id="cv-next" ${heard?'':'disabled'}>${heard?'Your turn →':'Listen once to continue'}</button></div>`;
  const play=el('cv-scene-play'),next=el('cv-next');
  play.onclick=()=>playConversationTurns(p,p.lesson.scene.turns,play,{stopButton:el('cv-scene-stop'),onComplete:()=>{if(player!==p||p.phase!=='scene')return;cvPushUnique(p.evidence.sceneIdsPlayed,p.lesson.scene.id);cvPersistCourseResume(p);next.disabled=false;next.textContent='Your turn →';}});
  next.onclick=()=>{if(!p.evidence.sceneIdsPlayed.includes(p.lesson.scene.id))return;p.guidedIndex=0;cvAdvanceLesson('guided');};
}
function cvRenderLessonGuided(p){
  const item=p.lesson.interactions[p.guidedIndex];
  if(!item){cvAdvanceLesson('substitution');return;}
  const intentObjective=p.objectives[p.guidedIndex*2],responseObjective=p.objectives[p.guidedIndex*2+1];
  const evidence=p.evidence.objective,promptId=cvLessonSpokenId(p,p.guidedIndex,'reduced');
  const intentDone=evidence.clearedIds.includes(intentObjective.id),responseDone=evidence.clearedIds.includes(responseObjective.id);
  if(!intentDone||p.guidedFeedback){
    const spec=cvChoiceSpec(intentObjective);
    cvRenderChoiceQuestion(p,spec,{
      label:`Understand · ${p.guidedIndex+1} of ${p.lesson.interactions.length}`,result:p.guidedFeedback,
      nextLabel:p.guidedFeedback&&!p.guidedFeedback.correct?'Listen and try again':'Build your reply',
      onAnswer:(selected,correct)=>{
        if(!evidence.answeredIds.includes(intentObjective.id)){
          cvPushUnique(evidence.answeredIds,intentObjective.id);
          if(correct)cvPushUnique(evidence.firstCorrectIds,intentObjective.id);
          cvWeaknessSeen(cvConversation(),intentObjective,correct,selected||'not-sure');
        }
        if(correct)cvPushUnique(evidence.clearedIds,intentObjective.id);
        p.guidedFeedback={correct};cvPersistCourseResume(p);renderConversationCourseLesson();
      },
      onNext:()=>{p.guidedFeedback=null;renderConversationCourseLesson();}
    });
    return;
  }
  if(!responseDone){
    el('stage').innerHTML=`<div class="q-prompt"><div class="eyebrow">Practise the pattern</div><h2>${esc(item.response.en)}</h2><p class="sub">Build it again with less help. Next you will try without tiles.</p></div>${cvSentenceBuilderHtml(p,item.response,`use:${item.id}`,'practice',false)}`;
    cvBindSentenceBuilder(p,item.response,`use:${item.id}`,'practice',{
      onFirstWrong:()=>{if(!evidence.answeredIds.includes(responseObjective.id)){cvPushUnique(evidence.answeredIds,responseObjective.id);cvWeaknessSeen(cvConversation(),responseObjective,false,'wrong-order');cvPersistCourseResume(p);}},
      onCorrect:first=>{
        if(!evidence.answeredIds.includes(responseObjective.id)){cvPushUnique(evidence.answeredIds,responseObjective.id);if(first)cvPushUnique(evidence.firstCorrectIds,responseObjective.id);cvWeaknessSeen(cvConversation(),responseObjective,first,first?item.response.id:'wrong-order');}
        cvPushUnique(evidence.clearedIds,responseObjective.id);cvPersistCourseResume(p);renderConversationCourseLesson();
      }
    });
    return;
  }
  cvRenderRecall(p,item.response,{
    prompt:item.context,cue:item.cue,label:'Your turn without tiles',
    revealed:p.evidence.modelRevealIds.includes(promptId),
    onSupport:()=>{cvPushUnique(p.evidence.supportOpenedIds,promptId);cvPersistCourseResume(p);},
    onReveal:neededModel=>{
      if(neededModel)cvPushUnique(p.evidence.supportOpenedIds,promptId);
      cvPushUnique(p.evidence.spokenBeforeRevealIds,promptId);cvPushUnique(p.evidence.modelRevealIds,promptId);
      cvPersistCourseResume(p);renderConversationCourseLesson();
    },
    onNext:()=>{
      if(item.resolution){p.resolution={item,returnPhase:'guided',returnIndex:p.guidedIndex+1};cvAdvanceLesson('resolution');}
      else{p.guidedIndex++;p.step++;cvPersistCourseResume(p);renderConversationCourseLesson();}
    }
  });
}
function cvRenderRepairResolution(p){
  const r=p.resolution,res=r.item.resolution;
  cvRenderRecall(p,res.response,{
    label:'Finish the original task',prompt:res.response.en,cue:{...res.cue,rate:res.rate},revealed:!!r.revealed,
    onSupport:()=>{r.supported=true;},
    onReveal:()=>{r.revealed=true;renderConversationCourseLesson();},
    onNext:()=>{p.guidedIndex=r.returnIndex;p.resolution=null;cvAdvanceLesson('guided');}
  });
}
function cvRenderLessonSubstitution(p){
  const sub=p.lesson.substitution,done=p.evidence.substitutionIds.includes(sub.id);
  if(!done&&!p.swapModelReady){
    el('stage').innerHTML=`<div class="center"><div class="eyebrow">Change one part</div><h2>${esc(sub.label)}</h2><p class="sub">Learn the new version before building it.</p></div>${cvTeachingModelHtml(sub.to)}<button class="btn full" id="cv-next" disabled>Hear the new phrase first</button>`;
    let heard=false;const stillHere=()=>player===p&&p.phase==='substitution'&&!p.swapModelReady;
    el('cv-model-reply').onclick=()=>speak(sub.to.thai,el('cv-model-reply'),sub.to.rate,ok=>{if(!ok||!stillHere())return;heard=true;el('cv-next').disabled=false;el('cv-next').textContent='Build the new version →';},'learner');
    el('cv-next').onclick=()=>{if(!heard||!stillHere())return;p.swapModelReady=true;renderConversationCourseLesson();};return;
  }
  el('stage').innerHTML=`<div class="center"><div class="eyebrow">Change one part</div><h2>${esc(sub.label)}</h2><p class="sub">Build the new version, then say it once.</p></div><div class="conversation-turn learner"><div class="conversation-speaker">Phrase you know</div><div class="p-thai" lang="th">${esc(sub.from.thai)}</div><div class="p-tr">${esc(sub.from.tr)}</div><div class="p-en">${esc(sub.from.en)}</div></div>${cvSentenceBuilderHtml(p,sub.to,`swap:${sub.id}`,'teach',done)}<button class="btn full ghost" id="cv-builder-replay">▶ Hear the new phrase</button><div class="stage-actions"><button class="btn full" id="cv-next" ${done?'':'disabled'}>${done?'I said the new phrase · finish →':'Build the new phrase first'}</button></div>`;
  const next=el('cv-next');
  cvBindBuilderPlayback(p,sub.to,`swap:${sub.id}`,'teach',done,()=>{cvPushUnique(p.evidence.substitutionIds,sub.id);cvPersistCourseResume(p);next.disabled=false;next.textContent='I said the new phrase · finish →';});
  next.onclick=()=>{if(!p.evidence.substitutionIds.includes(sub.id))return;p.evidence.recordStepCompleted=true;cvAdvanceLesson('rating');};
}
function cvChunkSupportHtml(line){
  return `<div class="onboarding-route-list">${line.segments.filter(part=>part.en!=='male polite ending').map(part=>`<div><b>${esc(part.en)}</b><br><span lang="th">${esc(part.thai)}</span> · <span class="p-tr">${esc(part.tr)}</span></div>`).join('')}</div>`;
}
function cvRenderLessonRating(p){
  el('stage').innerHTML=`<div class="center"><div class="eyebrow">One last tap</div><h2>How did that feel?</h2><p class="sub">Choose the closest answer for your own progress record.</p></div><div class="q-options">${CV1_SUPPORT_RATINGS.map(item=>`<button class="q-opt" data-cv-rating="${escAttr(item.id)}">${esc(item.label)}</button>`).join('')}</div>`;
  el('stage').querySelectorAll('[data-cv-rating]').forEach(button=>button.onclick=()=>cvFinishLesson(p,button.dataset.cvRating));
}
function cvLessonEvidenceComplete(p){
  const required=p.lesson.interactions.map(x=>x.id),objectiveIds=p.objectives.map(x=>x.id);
  return required.every(id=>p.evidence.pairIdsPlayed.includes(id)&&p.evidence.responsePromptIds.includes(id))&&p.evidence.sceneIdsPlayed.includes(p.lesson.scene.id)&&
    objectiveIds.every(id=>p.evidence.objective.answeredIds.includes(id)&&p.evidence.objective.clearedIds.includes(id))&&p.evidence.substitutionIds.includes(p.lesson.substitution.id)&&
    p.evidence.spokenBeforeRevealIds.length===required.length*2&&p.evidence.modelRevealIds.length===required.length*2&&p.evidence.recordStepCompleted;
}
function cvFinishLesson(p,rating){
  if(!cvLessonEvidenceComplete(p)){toast('Finish the current step first.');return false;}
  const c=cvConversation(),day=bangkokDayStr(),old=c.lessons[p.taskId],rec=cvLessonRecord(old),correct=p.evidence.objective.firstCorrectIds.length,total=p.evidence.objective.itemIds.length,pct=Math.round(100*correct/total);
  const completedEvidence=cvClone(p.evidence);delete completedEvidence.objective.answeredIds;
  rec.runs++;rec.objectiveAttempts+=total;rec.firstPct=rec.firstPct==null?pct:rec.firstPct;rec.lastPct=pct;rec.bestPct=Math.max(rec.bestPct==null?0:rec.bestPct,pct);rec.firstCompleted=rec.firstCompleted||day;rec.lastCompleted=day;rec.completedRevision=1;rec.selfRating=rating;rec.lastRun=Object.assign({completed:day,revision:1},completedEvidence);c.lessons[p.taskId]=rec;
  if(!old||!old.firstCompleted)cvScheduleLessonRetention(c,p.lesson,day);
  const credited=cvClaimMainCredit(c,p.taskId,day);if(c.resume&&c.resume.taskId===p.taskId)c.resume=null;p.completed=true;saveState();setProg(100);sfxComplete();
  el('stage').innerHTML=`<div class="result-big">Lesson ${p.lesson.number} complete</div><div class="result-sub">${esc(p.lesson.title)}</div><div class="notebox"><b>You practised the replies with and without support.</b><div class="sub">${credited?'That is enough for today. A short review will return later.':'Nice replay. Your original completion stays unchanged.'}</div></div><div class="stage-actions"><button class="btn full" id="cv-done">Done</button><button class="btn full ghost" id="cv-again">Practise again</button></div>`;
  el('cv-done').onclick=()=>{closeOverlay();renderHome();};el('cv-again').onclick=()=>startConversationCourseLesson(p.taskId);return true;
}

function cvAssessmentSpoken(form,stage){
  const count=stage==='d1'?1:stage==='d7'?2:stage==='d30'?4:6;
  const unique=[];
  form.items.forEach(item=>{if(!unique.some(line=>line.id===item.response.id))unique.push(item.response);});
  const fallback=[CV1_LINES.orderThis,CV1_LINES.notSpicy,CV1_LINES.dineHere,CV1_LINES.water,CV1_LINES.bill,CV1_LINES.again];
  fallback.forEach(line=>{if(!unique.some(x=>x.id===line.id))unique.push(line);});
  return unique.slice(0,count);
}
function cvAssessmentThreshold(stage){return stage==='d1'?5:stage==='d7'?7:stage==='d30'?11:10;}
function cvAssessmentRecordForPlayer(c,p){return p.taskKind==='gate'?cvAssessmentRecord(c.gates[p.taskId]):cvAssessmentRecord(c.retention[p.taskId],c.retention[p.taskId]&&c.retention[p.taskId].due);}
function cvCommitAssessmentColdPass(p){
  const c=cvConversation(),rec=cvAssessmentRecordForPlayer(c,p);if(rec.attempts>=p.attemptOrdinal&&rec.lastRun&&rec.lastRun.formId===p.form.id){p.coldRecorded=true;return rec;}
  const day=bangkokDayStr(),correct=p.evidence.firstCorrectIds.length,total=p.objectives.length,pct=Math.round(100*correct/total);
  p.evidence.completed=day;p.evidence.objectiveCorrect=correct;p.evidence.objectiveTotal=total;p.evidence.objectivePassed=correct>=cvAssessmentThreshold(p.stage);p.evidence.spokenCompleted=p.evidence.spokenBeforeRevealIds.length;p.evidence.spokenRequired=p.spoken.length;p.evidence.participationPassed=p.evidence.spokenCompleted===p.spoken.length;
  rec.attempts++;rec.firstPct=rec.firstPct==null?pct:rec.firstPct;rec.lastPct=pct;rec.bestPct=Math.max(rec.bestPct==null?0:rec.bestPct,pct);rec.lastAttempt=day;rec.lastRun=cvClone(p.evidence);rec.repairCompletedAt=null;
  if(p.taskKind==='gate')c.gates[p.taskId]=rec;else c.retention[p.taskId]=rec;
  p.coldRecorded=true;cvPersistCourseResume(p);saveState();return rec;
}
function startConversationAssessment(taskKind,taskId){
  const c=cvConversation(),day=bangkokDayStr();
  let rec,forms,stage;
  if(taskKind==='retention'){
    rec=c.retention[taskId];forms=CV1_RETENTION_FORMS[taskId];stage=taskId.split('.').pop();
    if(!rec||!forms||rec.passedAt){toast('That delayed check is not available.');return false;}
    if(rec.lastAttempt===day){toast('You already did this review today.');return false;}
    if(rec.lastRun&&!rec.repairCompletedAt){toast('Finish the practice from your last try first.');return false;}
  }else{
    taskId=CV1_WEEK1_GATE;stage='gate';rec=cvAssessmentRecord(c.gates[taskId]);c.gates[taskId]=rec;forms=CV1_GATE_FORMS;
    if(rec.passedAt){toast('Week 1 is already passed.');return false;}
    if(rec.lastAttempt===day){toast('You already did the Week 1 check today.');return false;}
    if(rec.lastRun&&!rec.repairCompletedAt){toast('Finish the practice from your last try first.');return false;}
  }
  const form=cvSelectForm(forms,rec);cvConsumeForm(rec,form);
  const objectives=cvBuildObjectives(form.items,form.id,taskKind==='gate'?'gate':'assessment');
  const spoken=cvAssessmentSpoken(form,stage);
  player={type:'conversation-course',kind:'assessment',taskKind,taskId,stage,form,scene:{chunks:spoken},objectives,spoken,phase:'intro',objectiveIndex:0,spokenIndex:0,completed:false,coldRecorded:false,resumable:true,startedDay:day,attemptOrdinal:rec.attempts+1,formCycle:rec.formCycle,runSeed:`${taskId}|${rec.attempts+1}`,
    evidence:{completed:null,revision:1,formId:form.id,itemIds:objectives.map(x=>x.id),answeredIds:[],firstCorrectIds:[],feedbackAcknowledgedIds:[],spokenPromptIds:spoken.map((_,i)=>`${form.id}.spoken.${String(i+1).padStart(2,'0')}`),spokenBeforeRevealIds:[],modelRevealIds:[],supportOpenedIds:[]},missed:[],repairIndex:0};
  cvPersistCourseResume(player);openOverlay();renderConversationAssessment();return true;
}
function cvAssessmentProgress(p){
  const total=p.objectives.length+p.spoken.length+2,done=p.objectiveIndex+p.spokenIndex+(p.phase==='intro'?0:1);setProg(Math.round(100*Math.min(done,total)/total));
}
function renderConversationAssessment(){
  const p=player;if(!p||p.type!=='conversation-course'||p.kind!=='assessment')return;
  stopConversationSpeech();cvAssessmentProgress(p);
  if(p.phase==='intro')return cvRenderAssessmentIntro(p);
  if(p.phase==='objective')return cvRenderAssessmentObjective(p);
  if(p.phase==='spoken')return cvRenderAssessmentSpoken(p);
  if(p.phase==='result')return cvFinishAssessment(p);
  if(p.phase==='repair')return cvRenderAssessmentRepair(p);
}
function cvRenderAssessmentIntro(p){
  const isGate=p.taskKind==='gate',label=isGate?'Week 1 check':p.stage==='d1'?'Next-day review':p.stage==='d7'?'One-week review':'One-month review';
  el('stage').innerHTML=`<div class="center"><div class="eyebrow">${esc(label)}</div><h2>${isGate?'Use your food and repair phrases':'Bring the phrases back'}</h2></div><div class="notebox"><b>No hints on the first try.</b><div class="sub">If you miss one, you will see the answer and practise it before you finish.</div></div><div class="notebox"><b>${p.objectives.length} listening and situation choices · ${p.spoken.length} phrase${p.spoken.length===1?'':'s'} to say</b><div class="sub">Pronunciation is not scored.</div></div><div class="stage-actions"><button class="btn full" id="cv-next">Start →</button></div>`;
  el('cv-next').onclick=()=>{p.phase='objective';cvPersistCourseResume(p);renderConversationAssessment();};
}
function cvRenderAssessmentObjective(p){
  const objective=p.objectives[p.objectiveIndex];
  if(!objective){cvCommitAssessmentColdPass(p);p.phase='spoken';p.spokenIndex=0;cvPersistCourseResume(p);return renderConversationAssessment();}
  const answered=p.evidence.answeredIds.includes(objective.id);
  cvRenderChoiceQuestion(p,cvChoiceSpec(objective),{
    label:`Question ${p.objectiveIndex+1} of ${p.objectives.length}`,
    result:answered?{correct:p.evidence.firstCorrectIds.includes(objective.id)}:null,
    onAnswer:(selected,correct)=>{
      if(p.evidence.answeredIds.includes(objective.id))return;
      cvPushUnique(p.evidence.answeredIds,objective.id);
      if(correct)cvPushUnique(p.evidence.firstCorrectIds,objective.id);
      else{p.missed.push(objective);cvPushUnique(p.evidence.feedbackAcknowledgedIds,objective.id);}
      cvWeaknessSeen(cvConversation(),objective,correct,selected||'not-sure');
      cvPersistCourseResume(p);renderConversationAssessment();
    },
    onNext:()=>{p.objectiveIndex++;cvPersistCourseResume(p);renderConversationAssessment();}
  });
}
function cvRenderAssessmentSpoken(p){
  const line=p.spoken[p.spokenIndex];
  if(!line){p.phase='result';cvPersistCourseResume(p);return renderConversationAssessment();}
  const promptId=p.evidence.spokenPromptIds[p.spokenIndex];
  cvRenderRecall(p,line,{
    label:`Recall practice · ${p.spokenIndex+1} of ${p.spoken.length}`,
    revealed:p.evidence.modelRevealIds.includes(promptId),
    onSupport:()=>{cvPushUnique(p.evidence.supportOpenedIds,promptId);cvPersistCourseResume(p);},
    onReveal:neededModel=>{
      if(neededModel)cvPushUnique(p.evidence.supportOpenedIds,promptId);
      cvPushUnique(p.evidence.spokenBeforeRevealIds,promptId);cvPushUnique(p.evidence.modelRevealIds,promptId);
      cvPersistCourseResume(p);renderConversationAssessment();
    },
    onNext:()=>{p.spokenIndex++;cvPersistCourseResume(p);renderConversationAssessment();}
  });
}
function cvAssessmentPassed(p){return p.evidence.firstCorrectIds.length>=cvAssessmentThreshold(p.stage)&&p.evidence.spokenBeforeRevealIds.length===p.spoken.length;}
function cvFinishAssessment(p){
  if(!p.coldRecorded)cvCommitAssessmentColdPass(p);
  const c=cvConversation(),day=bangkokDayStr(),isGate=p.taskKind==='gate',rec=cvAssessmentRecordForPlayer(c,p),correct=p.evidence.firstCorrectIds.length,total=p.objectives.length,pct=Math.round(100*correct/total),passed=cvAssessmentPassed(p);
  p.evidence.completed=day;p.evidence.objectiveCorrect=correct;p.evidence.objectiveTotal=total;p.evidence.objectivePassed=correct>=cvAssessmentThreshold(p.stage);p.evidence.spokenCompleted=p.evidence.spokenBeforeRevealIds.length;p.evidence.spokenRequired=p.spoken.length;p.evidence.participationPassed=p.evidence.spokenCompleted===p.spoken.length;
  rec.lastPct=pct;rec.bestPct=Math.max(rec.bestPct==null?0:rec.bestPct,pct);rec.lastAttempt=day;rec.lastRun=cvClone(p.evidence);rec.repairCompletedAt=passed?rec.repairCompletedAt:null;
  if(passed&&!rec.passedAt)rec.passedAt=day;
  if(isGate){c.gates[p.taskId]=rec;cvEnsureConversationDay(c,day).main=p.taskId;c.pace.lastMainCreditDay=day;if(passed&&CV1_MAIN_SEQUENCE[c.pace.cursor]===p.taskId)c.pace.cursor++;if(passed&&!c.retention['cv1.retention.w01.d30'])c.retention['cv1.retention.w01.d30']=cvAssessmentRecord(null,cvPlusDays(day,30));}
  else{c.retention[p.taskId]=rec;cvPushUnique(cvEnsureConversationDay(c,day).reviews,p.taskId);}
  if(!passed){p.phase='repair';p.repairIndex=0;p.repairCleared=[];cvPersistCourseResume(p);return cvRenderAssessmentRepair(p);}
  c.resume=null;saveState();
  p.completed=true;setProg(100);sfxComplete();
  el('stage').innerHTML=`<div class="result-big">${isGate?'Week 1 complete':'Review complete'}</div><div class="result-sub">${esc(cvAssessmentBreakdown(p))}</div><div class="notebox"><b>You completed the choices and recall practice.</b><p class="sub">Speaking was self-checked, with help on ${p.evidence.supportOpenedIds.length} of ${p.spoken.length} prompts. This is not a pronunciation or free-conversation score.</p></div><div class="stage-actions"><button class="btn full" id="cv-done">Done</button></div>`;
  el('cv-done').onclick=()=>{closeOverlay();renderHome();};return true;
}
function cvRenderAssessmentRepair(p){
  const objective=p.missed[p.repairIndex];
  if(!objective){
    const c=cvConversation(),day=bangkokDayStr(),rec=p.taskKind==='gate'?c.gates[p.taskId]:c.retention[p.taskId],practiceIds=p.missed.map((_,i)=>`cv1.practice.repair.${p.taskId}.${String(i+1).padStart(2,'0')}`);
    rec.repairCompletedAt=day;rec.lastRepairRun={completed:day,revision:1,practiceFormId:`cv1.form.repair.${p.taskId}.a`,sourceMissedObjectiveIds:p.missed.map(x=>x.id),practiceItemIds:practiceIds,firstCorrectIds:[],clearedIds:practiceIds.slice()};cvPushUnique(cvEnsureConversationDay(c,day).repairs,p.taskId);c.resume=null;saveState();p.completed=true;
    el('stage').innerHTML=`<div class="result-big">Practice complete</div><div class="result-sub">You revisited every phrase you missed.</div><div class="notebox"><b>Try the check again another day.</b></div><div class="stage-actions"><button class="btn full" id="cv-done">Done</button></div>`;el('cv-done').onclick=()=>{closeOverlay();renderHome();};return;
  }
  cvRenderChoiceQuestion(p,cvChoiceSpec(objective),{
    label:`Practise the miss · ${p.repairIndex+1} of ${p.missed.length}`,result:p.repairFeedback,
    nextLabel:p.repairFeedback&&!p.repairFeedback.correct?'Try again':'Continue',
    onAnswer:(_,correct)=>{p.repairFeedback={correct};renderConversationAssessment();},
    onNext:()=>{if(p.repairFeedback.correct)p.repairIndex++;p.repairFeedback=null;cvPersistCourseResume(p);renderConversationAssessment();}
  });
}

function startConversationConsolidation(){
  const formId=CV1_CONSOLIDATION.formId,objectives=cvBuildObjectives(CV1_CONSOLIDATION.interactions,formId,'assessment');
  const c=cvConversation(),record=c.activities.consolidations[CV1_WEEK1_CONSOLIDATION],resumable=!(record&&record.firstCompleted)&&CV1_MAIN_SEQUENCE[c.pace.cursor]===CV1_WEEK1_CONSOLIDATION;
  player={type:'conversation-course',kind:'consolidation',taskKind:'consolidation',taskId:CV1_WEEK1_CONSOLIDATION,phase:'intro',formId,objectives,objectiveIndex:0,spokenIndex:0,transferIndex:0,weaknessDone:false,completed:false,resumable,startedDay:bangkokDayStr(),attemptOrdinal:(record&&record.runs||0)+1,runSeed:`${CV1_WEEK1_CONSOLIDATION}|${(record&&record.runs||0)+1}`,scene:{chunks:CV1_CONSOLIDATION.spoken.concat(CV1_CONSOLIDATION.transfers)},builders:{},
    evidence:{completed:null,revision:1,formId,itemIds:objectives.map(x=>x.id),answeredIds:[],firstCorrectIds:[],clearedIds:[],spokenPromptIds:CV1_CONSOLIDATION.spoken.map((_,i)=>`cv1.spoken.consolidation.w01.${String(i+1).padStart(2,'0')}`),spokenBeforeRevealIds:[],modelRevealIds:[],supportOpenedIds:[],transferIds:CV1_CONSOLIDATION.transfers.map((_,i)=>`cv1.transfer.consolidation.w01.${String(i+1).padStart(2,'0')}`),transferCompletedIds:[],weaknessRepairItemIds:[],weaknessRepairClearedIds:[]}};
  cvPersistCourseResume(player);openOverlay();renderConversationConsolidation();return true;
}
function renderConversationConsolidation(){
  const p=player;if(!p||p.type!=='conversation-course'||p.kind!=='consolidation')return;
  stopConversationSpeech();setProg(Math.round(100*(p.objectiveIndex+p.spokenIndex+p.transferIndex+(p.phase==='intro'?0:1))/(p.objectives.length+CV1_CONSOLIDATION.spoken.length+CV1_CONSOLIDATION.transfers.length+2)));
  if(p.phase==='intro')return cvRenderConsolidationIntro(p);
  if(p.phase==='objective')return cvRenderConsolidationObjective(p);
  if(p.phase==='spoken')return cvRenderConsolidationSpoken(p);
  if(p.phase==='transfer')return cvRenderConsolidationTransfer(p);
  if(p.phase==='weakness')return cvRenderConsolidationWeakness(p);
  if(p.phase==='finish')return cvFinishConsolidation(p);
}
function cvRenderConsolidationIntro(p){
  el('stage').innerHTML=`<div class="center"><div class="eyebrow">Week 1 mix · about 10 min</div><h2>Use the phrases in a new order</h2><p class="sub">Listen, choose the reply, say it and build two changed phrases.</p></div><div class="cv-goals"><span class="cv-goal">Food</span><span class="cv-goal">Payment</span><span class="cv-goal">Ask for help</span></div><div class="stage-actions"><button class="btn full" id="cv-next">Start →</button></div>`;
  el('cv-next').onclick=()=>{p.phase='objective';cvPersistCourseResume(p);renderConversationConsolidation();};
}
function cvRenderConsolidationObjective(p){
  const objective=p.objectives[p.objectiveIndex];
  if(!objective){p.phase='spoken';cvPersistCourseResume(p);return renderConversationConsolidation();}
  const spec=cvChoiceSpec(objective);
  cvRenderChoiceQuestion(p,spec,{
    label:`Mix your phrases · ${p.objectiveIndex+1} of ${p.objectives.length}`,result:p.choiceFeedback,
    nextLabel:p.choiceFeedback&&!p.choiceFeedback.correct?'Try again':'Continue',
    onAnswer:(selected,correct)=>{
      if(!p.evidence.answeredIds.includes(objective.id)){
        cvPushUnique(p.evidence.answeredIds,objective.id);if(correct)cvPushUnique(p.evidence.firstCorrectIds,objective.id);
        cvWeaknessSeen(cvConversation(),objective,correct,selected||'not-sure');
      }
      if(correct)cvPushUnique(p.evidence.clearedIds,objective.id);
      p.choiceFeedback={correct};cvPersistCourseResume(p);renderConversationConsolidation();
    },
    onNext:()=>{if(p.choiceFeedback.correct)p.objectiveIndex++;p.choiceFeedback=null;cvPersistCourseResume(p);renderConversationConsolidation();}
  });
}
function cvRenderConsolidationSpoken(p){
  const line=CV1_CONSOLIDATION.spoken[p.spokenIndex];
  if(!line){p.phase='transfer';cvPersistCourseResume(p);return renderConversationConsolidation();}
  const promptId=p.evidence.spokenPromptIds[p.spokenIndex];
  cvRenderRecall(p,line,{
    label:`Recall practice · ${p.spokenIndex+1} of ${CV1_CONSOLIDATION.spoken.length}`,
    revealed:p.evidence.modelRevealIds.includes(promptId),
    onSupport:()=>{cvPushUnique(p.evidence.supportOpenedIds,promptId);cvPersistCourseResume(p);},
    onReveal:neededModel=>{if(neededModel)cvPushUnique(p.evidence.supportOpenedIds,promptId);cvPushUnique(p.evidence.spokenBeforeRevealIds,promptId);cvPushUnique(p.evidence.modelRevealIds,promptId);cvPersistCourseResume(p);renderConversationConsolidation();},
    onNext:()=>{p.spokenIndex++;cvPersistCourseResume(p);renderConversationConsolidation();}
  });
}
function cvRenderConsolidationTransfer(p){
  const line=CV1_CONSOLIDATION.transfers[p.transferIndex];if(!line){p.phase='weakness';cvPersistCourseResume(p);return renderConversationConsolidation();}
  const id=p.evidence.transferIds[p.transferIndex],done=p.evidence.transferCompletedIds.includes(id);
  el('stage').innerHTML=`<div class="center"><div class="eyebrow">Build it · ${p.transferIndex+1} of 2</div><h2>${esc(line.en)}</h2><p class="sub">Tap the parts into order, then say the phrase.</p></div>${cvSentenceBuilderHtml(p,line,`mix:${id}`,'practice',done)}<button class="btn full ghost" id="cv-builder-replay">▶ Hear the phrase</button><div class="stage-actions"><button class="btn full" id="cv-transfer" ${done?'':'disabled'}>${done?'Continue →':'Build the phrase first'}</button></div>`;
  const next=el('cv-transfer');cvBindBuilderPlayback(p,line,`mix:${id}`,'practice',done,()=>{cvPushUnique(p.evidence.transferCompletedIds,id);cvPersistCourseResume(p);next.disabled=false;next.textContent='I said it · continue →';});next.onclick=()=>{if(!p.evidence.transferCompletedIds.includes(id))return;p.transferIndex++;cvPersistCourseResume(p);renderConversationConsolidation();};
}
function cvWeakestWeek1Line(){
  const c=cvConversation(),entries=Object.keys(c.weakness.items).map(id=>({id,...c.weakness.items[id]})).sort((a,b)=>(b.firstMisses/Math.max(1,b.seen))-(a.firstMisses/Math.max(1,a.seen))||(a.correctStreak-b.correctStreak)||String(b.lastMiss||'').localeCompare(String(a.lastMiss||''))||a.id.localeCompare(b.id));
  if(!entries.length)return CV1_LINES.orderThis;
  const interaction=CV1_CONSOLIDATION.interactions.find(item=>entries[0].id.startsWith(item.id));return interaction?interaction.response:CV1_LINES.orderThis;
}
function cvRenderConsolidationWeakness(p){
  const line=cvWeakestWeek1Line(),id='cv1.practice.consolidation.w01.weakness.01';
  el('stage').innerHTML=`<div class="center"><div class="eyebrow">One quick retry</div><h2>Say this useful phrase once more</h2></div>${cvLinePanel(line,'Your phrase')}<div class="stage-actions"><button class="btn full" id="cv-weak">I said it · finish</button></div>`;
  el('cv-weak').onclick=()=>{p.evidence.weaknessRepairItemIds=[id];p.evidence.weaknessRepairClearedIds=[id];p.phase='finish';cvPersistCourseResume(p);speak(line.thai,null,line.rate,null,'learner');renderConversationConsolidation();};
}
function cvFinishConsolidation(p){
  const complete=p.evidence.itemIds.every(id=>p.evidence.clearedIds.includes(id))&&p.evidence.spokenPromptIds.every(id=>p.evidence.spokenBeforeRevealIds.includes(id)&&p.evidence.modelRevealIds.includes(id))&&p.evidence.transferIds.every(id=>p.evidence.transferCompletedIds.includes(id))&&p.evidence.weaknessRepairItemIds.every(id=>p.evidence.weaknessRepairClearedIds.includes(id));
  if(!complete){toast('Finish the current step first.');return;}
  const c=cvConversation(),day=bangkokDayStr(),old=c.activities.consolidations[p.taskId],rec=cvLessonRecord(old),correct=p.evidence.firstCorrectIds.length,total=p.evidence.itemIds.length,pct=Math.round(100*correct/total);p.evidence.completed=day;
  const completedEvidence=cvClone(p.evidence);delete completedEvidence.answeredIds;
  rec.runs++;rec.objectiveAttempts+=total;rec.firstPct=rec.firstPct==null?pct:rec.firstPct;rec.lastPct=pct;rec.bestPct=Math.max(rec.bestPct==null?0:rec.bestPct,pct);rec.firstCompleted=rec.firstCompleted||day;rec.lastCompleted=day;rec.completedRevision=1;rec.lastRun=completedEvidence;c.activities.consolidations[p.taskId]=rec;const credited=cvClaimMainCredit(c,p.taskId,day);if(c.resume&&c.resume.taskId===p.taskId)c.resume=null;p.completed=true;saveState();setProg(100);sfxComplete();
  el('stage').innerHTML=`<div class="result-big">Week 1 mix complete</div><div class="result-sub">You listened, spoke and rebuilt the useful phrases.</div><div class="notebox"><b>${credited?'That is enough for today.':'Nice extra practice.'}</b></div><div class="stage-actions"><button class="btn full" id="cv-done">Done</button></div>`;el('cv-done').onclick=()=>{closeOverlay();renderHome();};
}

function startConversationCourseTask(taskId){
  if(CV1_LESSONS[taskId])return startConversationCourseLesson(taskId);
  if(taskId===CV1_WEEK1_CONSOLIDATION)return startConversationConsolidation();
  if(taskId===CV1_WEEK1_GATE)return startConversationAssessment('gate',taskId);
  if(CV1_RETENTION_FORMS[taskId])return startConversationAssessment('retention',taskId);
  return false;
}

function cvFormsForHistory(id){return [...(CV1_RETENTION_FORMS[id]||[]),...(CV1_ARCHIVED_FORMS[id]||[])];}
function cvFindForm(formId){
  for(const forms of [...Object.values(CV1_RETENTION_FORMS),...Object.values(CV1_ARCHIVED_FORMS)]){const found=forms.find(form=>form.id===formId);if(found)return found;}
  return CV1_GATE_FORMS.find(form=>form.id===formId)||null;
}
function cvResumeList(e,key){return e&&Array.isArray(e[key])?e[key].slice():[];}
function resumeConversationCourseTask(){
  const c=cvConversation(),r=c.resume;if(!r)return false;
  if(r.curriculumRevision!==CV1_CURRICULUM_REVISION||r.taskRevision!==1||!cvResumeMatchesAuthority(r,c)){c.resume=null;saveState();return false;}
  if(r.taskKind==='lesson'){
    const lesson=CV1_LESSONS[r.taskId],record=c.lessons[r.taskId];
    if(!lesson||(record&&record.firstCompleted)||CV1_MAIN_SEQUENCE[c.pace.cursor]!==r.taskId){c.resume=null;saveState();return false;}
    const objectives=cvBuildObjectives(lesson.interactions,`cv1.form.lesson.w01.l0${lesson.number}.a`,'lesson'),e=r.evidence||{},stage=r.stageId||'intro';
    let phase=stage.startsWith('roleplay-')?'guided':stage.startsWith('resolution-')?'resolution':stage;
    if(phase==='map')phase='pairs';if(phase==='objective')phase='guided';if(phase==='record')phase='substitution';
    const guidedIndex=stage==='objective'?Math.min(lesson.interactions.length-1,Math.floor((r.itemIndex||0)/2)):stage.startsWith('roleplay-')||stage.startsWith('resolution-')?Math.min(lesson.interactions.length-1,r.itemIndex||0):phase==='guided'?r.itemIndex:0;
    const evidence=cvLessonEvidence();
    ['pairIdsPlayed','sceneIdsPlayed','responsePromptIds','responseFirstCorrectIds','responseRepairIds','spokenBeforeRevealIds','modelRevealIds','supportOpenedIds','substitutionIds'].forEach(key=>{evidence[key]=cvResumeList(e,key);});
    evidence.recordStepCompleted=!!e.recordStepCompleted;evidence.recordingAttempted=!!e.recordingAttempted;
    evidence.objective={itemIds:objectives.map(x=>x.id),answeredIds:cvResumeList(e,'answeredIds'),firstCorrectIds:cvResumeList(e,'firstCorrectIds'),clearedIds:cvResumeList(e,'clearedIds')};
    player={type:'conversation-course',kind:'lesson',taskKind:'lesson',taskId:r.taskId,lesson,scene:lesson.scene,phase,step:Math.max(0,r.stageIndex||0),total:cvLessonPhases(lesson),pairIndex:phase==='pairs'?r.itemIndex:0,pairPlayback:{},guidedIndex,objectiveIndex:0,completed:false,resumable:true,startedDay:r.startedDay,attemptOrdinal:r.attemptOrdinal,runSeed:r.runSeed,resolution:phase==='resolution'?{item:lesson.interactions[r.itemIndex],returnPhase:'guided',returnIndex:stage==='resolution-objective'?r.itemIndex+1:r.stageIndex}:null,pairModes:{},builders:{},evidence,objectives};
    openOverlay();renderConversationCourseLesson();return true;
  }
  if(r.taskKind==='consolidation'){
    if(r.taskId!==CV1_WEEK1_CONSOLIDATION||c.activities.consolidations[r.taskId]&&c.activities.consolidations[r.taskId].firstCompleted||CV1_MAIN_SEQUENCE[c.pace.cursor]!==r.taskId){c.resume=null;saveState();return false;}
    const formId=CV1_CONSOLIDATION.formId,objectives=cvBuildObjectives(CV1_CONSOLIDATION.interactions,formId,'assessment'),e=r.evidence||{},phase=r.stageId||'intro';
    const evidence={completed:null,revision:1,formId,itemIds:objectives.map(x=>x.id),answeredIds:cvResumeList(e,'answeredIds'),firstCorrectIds:cvResumeList(e,'firstCorrectIds'),clearedIds:cvResumeList(e,'clearedIds'),spokenPromptIds:CV1_CONSOLIDATION.spoken.map((_,i)=>`cv1.spoken.consolidation.w01.${String(i+1).padStart(2,'0')}`),spokenBeforeRevealIds:cvResumeList(e,'spokenBeforeRevealIds'),modelRevealIds:cvResumeList(e,'modelRevealIds'),supportOpenedIds:cvResumeList(e,'supportOpenedIds'),transferIds:CV1_CONSOLIDATION.transfers.map((_,i)=>`cv1.transfer.consolidation.w01.${String(i+1).padStart(2,'0')}`),transferCompletedIds:cvResumeList(e,'transferCompletedIds'),weaknessRepairItemIds:phase==='finish'?['cv1.practice.consolidation.w01.weakness.01']:[],weaknessRepairClearedIds:phase==='finish'?['cv1.practice.consolidation.w01.weakness.01']:[]};
    player={type:'conversation-course',kind:'consolidation',taskKind:'consolidation',taskId:r.taskId,phase,formId,objectives,objectiveIndex:phase==='objective'?r.itemIndex:objectives.length,spokenIndex:phase==='spoken'?r.stageIndex:phase==='intro'||phase==='objective'?0:CV1_CONSOLIDATION.spoken.length,transferIndex:phase==='transfer'?r.stageIndex:phase==='intro'||phase==='objective'||phase==='spoken'?0:CV1_CONSOLIDATION.transfers.length,weaknessDone:phase==='finish',completed:false,resumable:true,startedDay:r.startedDay,attemptOrdinal:r.attemptOrdinal,runSeed:r.runSeed,scene:{chunks:CV1_CONSOLIDATION.spoken.concat(CV1_CONSOLIDATION.transfers)},builders:{},evidence};
    openOverlay();renderConversationConsolidation();return true;
  }
  const form=cvFindForm(r.formId);if(!form){c.resume=null;saveState();return false;}
  const taskKind=r.taskKind,stage=taskKind==='gate'?'gate':r.taskId.split('.').pop(),objectives=cvBuildObjectives(form.items,form.id,taskKind==='gate'?'gate':'assessment'),spoken=cvAssessmentSpoken(form,stage);
  const answered=cvResumeList(r.evidence,'answeredIds'),first=cvResumeList(r.evidence,'firstCorrectIds'),phase=['intro','objective','spoken','result','repair'].includes(r.stageId)?r.stageId:'objective';
  const assessmentRec=taskKind==='gate'?c.gates[r.taskId]:c.retention[r.taskId],coldRecorded=!!(assessmentRec&&assessmentRec.attempts>=r.attemptOrdinal&&assessmentRec.lastRun&&assessmentRec.lastRun.formId===form.id);
  player={type:'conversation-course',kind:'assessment',taskKind,taskId:r.taskId,stage,form,scene:{chunks:spoken},objectives,spoken,phase,objectiveIndex:Math.min(r.itemIndex||0,objectives.length),spokenIndex:phase==='spoken'?Math.min(r.stageIndex||0,spoken.length):0,completed:false,coldRecorded,resumable:true,startedDay:r.startedDay,attemptOrdinal:r.attemptOrdinal,formCycle:r.formCycle||0,runSeed:r.runSeed,
    evidence:{completed:null,revision:1,formId:form.id,itemIds:objectives.map(x=>x.id),answeredIds:answered.slice(),firstCorrectIds:first.slice(),feedbackAcknowledgedIds:answered.filter(id=>!first.includes(id)),spokenPromptIds:spoken.map((_,i)=>`${form.id}.spoken.${String(i+1).padStart(2,'0')}`),spokenBeforeRevealIds:cvResumeList(r.evidence,'spokenBeforeRevealIds'),modelRevealIds:cvResumeList(r.evidence,'modelRevealIds'),supportOpenedIds:cvResumeList(r.evidence,'supportOpenedIds')},missed:objectives.filter(x=>answered.includes(x.id)&&!first.includes(x.id)),repairIndex:phase==='repair'?Math.min(r.stageIndex||0,objectives.length):0};
  openOverlay();renderConversationAssessment();return true;
}
function cvCurrentDueBlockers(target){return cvPlannedDueAssignments(target);}
function startConversationCoursePrimary(){
  const c=cvConversation();
  if(c.resume)return resumeConversationCourseTask();
  const due=cvCurrentDueBlockers();if(due.length)return startConversationAssessment('retention',due[0].id);
  if(cvBacklogBlocksMain()){toast('That is enough review for today.');return false;}
  const task=cvNextMain();if(!task){toast('You have finished Week 1. More lessons are coming next.');return false;}
  if(!cvMainAvailableToday()){toast('Your conversation lesson is complete for today.');return false;}
  if(!cvMainFitsToday(task)){toast('Your next lesson will be ready tomorrow.');return false;}
  return startConversationCourseTask(task.id);
}
function showWeek1ScriptNotice(){
  player={type:'conversation-course',kind:'optional',completed:true};openOverlay();setProg(100);
  const canDecode=(state.done||[]).includes('l4');
  el('stage').innerHTML=`<div class="center"><div class="eyebrow">Connect reading and conversation</div><h2>Recognise a phrase, then learn to decode it</h2><p class="sub">Knowing a phrase by sight and reading its letters are different skills.</p></div>${cvLinePanel(CV1_LINES.notSpicy,'A phrase you have used')}${canDecode?'<div class="notebox"><b>Read the part you learned in Reading Lesson 4: ไม่</b><p>ไ is written before ม but sounded after it. ม is low class; ่ gives this word a falling tone. ไม่ reads mâi and means not.</p><p>The rest of the phrase may need later reading lessons.</p></div>':'<div class="notebox"><b>For now, notice the recurring part ไม่.</b><p>It means not. Reading Lesson 4 will teach the letters and tone route needed to decode it. You do not have to read the whole conversation phrase yet.</p></div>'}<button class="btn full" id="cv-script-reading">Continue the reading route →</button><button class="btn full ghost mt-10" id="cv-done">Done</button>`;
  el('cv-script-reading').onclick=()=>{closeOverlay();renderHome();setReadingCompanionOpen(true);};
  el('cv-done').onclick=()=>closeOverlay();
}
function renderConversationReadingCard(){
  const card=el('reading-course-entry');if(!card)return;
  const done=(state.done||[]).filter(id=>LESSONS.some(lesson=>lesson.id===id));
  const next=LESSONS.find(lesson=>!done.includes(lesson.id));
  card.innerHTML=`<div class="spread"><div class="eyebrow">Read Thai · ${done.length}/${LESSONS.length} lessons</div><span class="sub">Letter → class → tone</span></div><h2>Learn how Thai writing works</h2><p class="sub">${next?`Next in your course: ${esc(next.title)}. Learn the shapes and rules, then decode words you have not memorised.`:'Your reading course is complete. Keep the decoding skill active with review and fresh words.'}</p><p class="sub">Choose reading or conversation as your main block today. You can stop when the useful practice is done.</p><button class="btn full" id="reading-course-open">${done.length?'Continue the reading route':'Start the reading route'} →</button>`;
  el('reading-course-open').onclick=()=>setReadingCompanionOpen(true);
}

function renderConversationCourseHome(){
  const card=el('conversation-course-card');if(!card)return;
  const c=cvConversation(),due=cvCurrentDueBlockers(),next=cvNextMain(),today=bangkokDayStr(),available=cvMainAvailableToday(null,today),fits=cvMainFitsToday(next,null,today),resume=!!c.resume,backlog=cvBacklogBlocksMain(null,today);
  const kicker=el('conversation-card-kicker'),title=el('conversation-card-title'),status=el('conversation-course-status'),dayStatus=el('conversation-day-status');
  if(resume){const kind=c.resume.taskKind;kicker.textContent='Carry on';title.textContent=kind==='lesson'?CV1_LESSONS[c.resume.taskId].title:kind==='consolidation'?CV1_CONSOLIDATION.title:'Finish your quick check';status.textContent='Your completed steps are saved.';card.disabled=false;}
  else if(due.length){kicker.textContent='Quick review';title.textContent='Use these phrases again';status.textContent=`${due.length} short review${due.length===1?'':'s'} ready today`;card.disabled=false;}
  else if(backlog){kicker.textContent='Review day';title.textContent='Keep today short';status.textContent='Finish the reviews shown below, then stop.';card.disabled=true;}
  else if(next&&available&&!fits){kicker.textContent='Done for today';title.textContent=next.title+' is next';status.textContent='Come back tomorrow for the next lesson.';card.disabled=true;}
  else if(next&&available){kicker.textContent=next.kind==='lesson'?`Lesson ${CV1_LESSONS[next.id].number}`:next.kind==='consolidation'?'Week 1 mix':'Week 1 check';title.textContent=next.title;status.textContent=`${next.minutes} min · learn, practise and speak`;card.disabled=false;}
  else if(next){kicker.textContent='Done for today';title.textContent=next.title+' is next';status.textContent='Come back tomorrow · practice stays open.';card.disabled=true;}
  else{kicker.textContent='Week 1 complete';title.textContent='Your Week 1 practice is complete';status.textContent='Short reviews will bring the phrases back later.';card.disabled=true;}
  card.classList.toggle('done',(!available||backlog||!fits)&&!resume&&!due.length);card.classList.toggle('recommended',!backlog&&fits&&(available||resume||due.length));
  dayStatus.className='conversation-day-status'+((!available||backlog||!fits)?' done':'');dayStatus.textContent=due.length?'Start with the short reviews below.':backlog?'That is enough review for today.':!fits?'That is enough for today.':!available?'Today’s conversation lesson is complete. Reading remains optional.':'Your first useful reply is only a few taps away.';
  renderConversationLearningCard();renderConversationReadingCard();
  const list=el('conversation-due-list');list.innerHTML=due.map((item,index)=>`<div class="conversation-route-item due"><span class="route-number">${index+1}</span><div><b>${item.stage==='d1'?'Next-day':item.stage==='d7'?'One-week':'One-month'} review</b><div class="sub">Ready today</div></div><button class="btn small" data-cv-due="${escAttr(item.id)}">Start</button></div>`).join('');
  list.querySelectorAll('[data-cv-due]').forEach(button=>button.onclick=()=>startConversationAssessment('retention',button.dataset.cvDue));
  const optional=el('conversation-optional-panel'),completed=Object.keys(c.lessons).filter(id=>c.lessons[id].firstCompleted);
  optional.hidden=!completed.length;
  if(completed.length)optional.innerHTML=`<div class="spread"><div><div class="eyebrow">Want a little more?</div><b>Practise a lesson again or notice the Thai script</b></div></div><div class="row inline-tools mt-10">${completed.map(id=>`<button class="btn small ghost" data-cv-replay="${escAttr(id)}">Lesson ${CV1_LESSONS[id].number}</button>`).join('')}<button class="btn small ghost" id="cv-script-notice">Notice the script</button></div><div class="sub meta-mini mt-10">Entirely optional.</div>`;
  if(!optional.hidden){optional.querySelectorAll('[data-cv-replay]').forEach(button=>button.onclick=()=>startConversationCourseLesson(button.dataset.cvReplay));el('cv-script-notice').onclick=showWeek1ScriptNotice;}
}
function renderConversationCourseProgress(){
  const grid=el('conversation-progress-grid');if(!grid)return;
  const c=cvConversation(),lessons=Object.values(c.lessons).filter(rec=>rec.firstCompleted).length,due=cvDueAssignments().length,gates=c.gates[CV1_WEEK1_GATE]&&c.gates[CV1_WEEK1_GATE].passedAt?1:0,next=cvNextMain();
  grid.innerHTML=`<div><b>${lessons}/${Object.keys(CV1_LESSONS).length}</b><span class="sub meta-mini">available lessons</span></div><div><b>${due}</b><span class="sub meta-mini">due checks</span></div><div><b>${gates}/1</b><span class="sub meta-mini">gates</span></div>`;
  el('conversation-progress-status').textContent=gates?'Week 1 completed':'Week 1 in progress';
  const check=cvCheckStore(),last=check.runs[check.runs.length-1],results=el('conversation-learning-progress');
  if(results){results.innerHTML=last?`<p class="sub">Latest learning snapshot · ${esc(last.completedDay)}</p>${cvCheckSummaryHtml(last)}<button class="btn full ghost" id="cv-progress-results">Review these results</button>`:'<p class="sub">Lesson completion records practice. Use “What stuck?” to check listening, reply choices, reading and your own recall.</p>';if(last)el('cv-progress-results').onclick=showConversationLearningResults;}
  el('conversation-progress-next').textContent=next?`Next: ${next.title}${cvMainAvailableToday()?'':' · ready tomorrow'}`:'Week 1 complete; short reviews will appear when they are due.';
}

function validateConversationContracts(){
  const errors=[],lessonIds=Object.keys(CV1_LESSONS),allLines=Object.values(CV1_LINES);
  if(lessonIds.length!==3)errors.push('Week 1 must contain exactly three canonical lessons');
  if(CV1_SCENES.l01.turns.length!==8||CV1_SCENES.l02.turns.length!==10||CV1_SCENES.l03.turns.length!==13)errors.push('Week 1 scene turn counts drifted');
  const workloads=[[CV1_LESSONS[lessonIds[0]],10,2,12],[CV1_LESSONS[lessonIds[1]],12,2,14],[CV1_LESSONS[lessonIds[2]],12,2,14],[CV1_CONSOLIDATION,8,2,10],[CV1_GATE_META,10,2,12]];
  workloads.forEach(([item,core,repair,total])=>{if(item.revision!==1||item.coreMinutes!==core||item.ordinaryRepairMinutes!==repair||item.totalMinutes!==total||item.minutes!==total)errors.push(item.id+' workload metadata drifted');});
  [['d1',2,1,3],['d7',4,1,5],['d30',6,2,8]].forEach(([stage,core,repair,total])=>{const item=CV1_DELAYED_WORKLOADS[stage];if(item.revision!==1||item.coreMinutes!==core||item.ordinaryRepairMinutes!==repair||item.totalMinutes!==total)errors.push(stage+' delayed workload metadata drifted');});
  lessonIds.forEach(id=>{const lesson=CV1_LESSONS[id],objectives=cvBuildObjectives(lesson.interactions,`cv1.form.lesson.${id}`,'lesson');if(lesson.interactions.length!==3)errors.push(id+' must have three lesson interactions');if(objectives.length!==6||objectives.some(item=>item.revision!==1||item.formId!==`cv1.form.lesson.${id}`||item.sourceInteractionId!==item.interaction.id))errors.push(id+' must have six revisioned lesson objectives');if(lesson.substitution.revision!==1)errors.push(id+' substitution revision missing');});
  if(CV1_GATE_FORMS.length!==3||CV1_GATE_FORMS.some(form=>form.revision!==1||cvBuildObjectives(form.items,form.id,'gate').length!==12))errors.push('Week 1 gate must have three revisioned 12-objective forms');
  const gateSources=CV1_GATE_FORMS.flatMap(form=>form.items.map(item=>item.id));
  if(Object.keys(CV1_GATE_POOL).length!==24||new Set(gateSources).size!==24)errors.push('Week 1 gate must use 24 disjoint sealed source interactions');
  const gateDirections=cvBuildObjectives(CV1_GATE_FORMS[0].items,CV1_GATE_FORMS[0].id,'gate').map(item=>item.direction);
  if(gateDirections.slice(0,4).some(direction=>direction!=='intent')||gateDirections.slice(4,8).some(direction=>direction!=='response'))errors.push('gate objective intent/response ordering drifted');
  Object.keys(CV1_RETENTION_FORMS).forEach(id=>{const expected=id.endsWith('d1')?6:id.endsWith('d7')?8:12;if(CV1_RETENTION_FORMS[id].length!==2||CV1_RETENTION_FORMS[id].some(form=>form.revision!==1||cvBuildObjectives(form.items,form.id,'assessment').length!==expected))errors.push('retention form shape drifted for '+id);});
  ['cv1.retention.w01.l01.d7','cv1.retention.w01.l02.d7','cv1.retention.w01.l03.d7'].forEach(id=>{const forms=CV1_RETENTION_FORMS[id];if(forms[0].items.some(item=>forms[1].items.some(other=>item.id===other.id)))errors.push('parallel +7 interactions overlap for '+id);});
  const allInteractions=[...lessonIds.flatMap(id=>CV1_LESSONS[id].interactions),...CV1_GATE_FORMS.flatMap(form=>form.items),...Object.values(CV1_RETENTION_FORMS).flatMap(forms=>forms.flatMap(form=>form.items)),...CV1_CONSOLIDATION.interactions];
  if(allInteractions.some(item=>/\b(?:cue|playback|initiate|rate is)\b|meaning is unknown/i.test(item.context)))errors.push('learner-facing situation copy contains machine language');
  if(allInteractions.some(item=>item.revision!==1||item.contextId!==item.id.replace('cv1.interaction','cv1.context')||!item.functionId.startsWith('cv1.fn.')||!item.frameId.startsWith('cv1.frame.')||!item.acceptedSetId.startsWith('cv1.accepted-set.')||item.distractors.length!==2||item.distractors.some(x=>!x.responseId||!x.misconceptionTag)))errors.push('interaction identity, function/frame or distractor rationale drifted');
  if(allInteractions.some(item=>item.options.length!==3||!item.options.includes(item.response.id)||new Set(item.options).size!==3))errors.push('every interaction must have exactly one accepted response among three unique options');
  if(allLines.some(line=>line.revision!==1||!['active','recognition','routine','slot','transfer-only'].includes(line.role)||!line.thai.endsWith('ครับ')||line.ttsText!==line.thai||line.lang!=='th-TH'))errors.push('complete Thai lines must be revisioned, role-tagged, male-polite device-TTS records');
  const spellings={};allLines.forEach(line=>{if(spellings[line.thai]&&spellings[line.thai]!==line.tr)errors.push('inconsistent pronunciation spelling for '+line.thai);spellings[line.thai]=line.tr;});
  if(CV1_SUPPORT_RATINGS.map(item=>item.id).join('|')!=='full-support|some-support|minimal-support')errors.push('private support-rating enum drifted');
  // Verify the authored answer matches the question actually shown. Interaction
  // callbacks and resume behaviour are exercised by conversation-flow-smoke.js.
  const forms=[...CV1_GATE_FORMS,...Object.values(CV1_RETENTION_FORMS).flat()];
  for(const form of forms){
    const mode=CV1_GATE_FORMS.includes(form)?'gate':'assessment';
    for(const objective of cvBuildObjectives(form.items,form.id,mode)){
      const spec=cvChoiceSpec(objective);
      if(spec.options.filter(option=>option.id===spec.answer).length!==1)errors.push('ambiguous choice '+objective.id);
      if(spec.skill==='listening'&&(!spec.cue||spec.heading!== 'What does the vendor mean?'))errors.push('listening prompt reveals its answer '+objective.id);
    }
  }
  const activeRepair=CV1_RETENTION_FORMS['cv1.retention.w01.l03.d7'];
  if(activeRepair.some(form=>form.items.some(item=>JSON.stringify(item).includes('transport.'))))errors.push('Week 1 review requires future transport content');
  if(allLines.some(line=>line.thai.normalize('NFC')!==line.thai||line.segments.map(part=>part.thai).join('').replace(/\s/g,'')!==line.thai.replace(/\s/g,'')))errors.push('phrase segments must reconstruct their NFC model');
  if(/https?:|\.(?:mp3|m4a|wav|ogg|aac|flac|webm)/i.test(JSON.stringify({lines:CV1_LINES,lessons:CV1_LESSONS})))errors.push('authored or remote audio leaked into conversation course');
  try{cvValidateConversationImport(cvFreshConversationState());}catch(_){errors.push('fresh schema-2 state failed strict import validation');}
  if(errors.length)throw new Error('Conversation contracts failed:\n'+errors.join('\n'));
  return true;
}
