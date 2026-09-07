/* Supplementary learning checks. Uses the shared choice/recall views in
   conversation-course.js, taught conversation data, and prerequisite-safe Phase 1
   question factories. Only extensions.learningCheck is written; course authority,
   SRS, reading diagnostics, tokens and streaks are never changed here. */
'use strict';

const CV_CHECK_VERSION = 1;
// Derived questions only: bounded across the current run and recent snapshots.
const CV_CHECK_QUESTION_CACHE = new Map();
const CV_CHECK_RATINGS = [
  {id:'independent',label:'I recalled it without help'},
  {id:'parts',label:'I needed phrase parts or a correction'},
  {id:'model',label:'I needed the complete model'}
];
const CV_CHECK_SKILLS = {listening:'Listening',response:'Reply choices',situation:'Situation choices',reading:'Reading',spoken:'Spoken recall · your report'};

function cvCheckReadingQuestions(doneIds,seed){
  const taught=taughtGlyphSet(doneIds),max=doneIds.reduce((n,id)=>Math.max(n,lessonNum(id)),0);
  if(!max)return [];
  const pool=freshPoolAtGate(FRESH_DECODE,max).filter(word=>!prerequisiteIssuesForThai(word.thai,doneIds,'learning-check').length);
  const fresh=cvShuffled(pool,seed+'|reading').slice(0,2).map(word=>{
    const route=freshDecodeRoute(word),wrong=wordReadingDistractors(word,pool,3);
    if(!route||wrong.length<2)return null;
    const q={options:[word.tr,...wrong],answer:word.tr,explain:freshRouteExplain(word,route)};
    return {id:'cvcheck.read.word.'+word.thai,skill:'reading',heading:'How does this word read?',instruction:'Use the letters and rules you have learned. Read before choosing.',promptHtml:`<div class="p-thai" lang="th">${esc(word.thai)}</div>`,options:q.options.slice().sort().map(label=>({id:label,label})),answer:q.answer,explanation:q.explain};
  }).filter(Boolean);
  if(fresh.length===2)return fresh;
  // Early readers have no eligible fresh-word bank yet. Test taught shapes and
  // classes honestly; do not call these questions evidence of word decoding.
  const glyphs=cvShuffled([...taught].filter(ch=>GLYPHS[ch]&&GLYPHS[ch].type==='c'),seed+'|glyphs').slice(0,2);
  return glyphs.map((ch,index)=>{
    const g=GLYPHS[ch];
    if(index===0)return {id:'cvcheck.read.class.'+ch,skill:'reading',heading:'Which class is this consonant?',instruction:'Recall its class without colour help.',promptHtml:`<div class="p-thai" lang="th">${esc(ch)}</div>`,options:Object.values(CLS_LABEL).map(label=>({id:label,label})),answer:CLS_LABEL[g.cls],explanation:`${ch} is ${CLS_LABEL[g.cls].toLowerCase()}.`};
    const answer=g.sound,others=[...taught].filter(x=>GLYPHS[x]&&GLYPHS[x].type==='c'&&GLYPHS[x].sound!==answer).map(x=>GLYPHS[x].sound);
    const choices=[answer,...new Set(others)].slice(0,3);
    if(choices.length<2)return null;
    return {id:'cvcheck.read.sound.'+ch,skill:'reading',heading:'What is its starting sound?',instruction:'Recall the sound before choosing.',promptHtml:`<div class="p-thai" lang="th">${esc(ch)}</div>`,options:choices.map(label=>({id:label,label})),answer,explanation:`${ch} starts with ${answer}.`};
  }).filter(Boolean);
}
function cvCheckQuestions(session){
  const cacheKey=JSON.stringify([session.ordinal,session.startedDay,session.lessonIds,session.readingLessonIds]);
  if(CV_CHECK_QUESTION_CACHE.has(cacheKey))return CV_CHECK_QUESTION_CACHE.get(cacheKey);
  const seed=`cvcheck|${session.ordinal}|${session.startedDay}`,listening=[],responses=[],spoken=[];
  for(const lessonId of session.lessonIds){
    const lesson=CV1_LESSONS[lessonId],items=lesson.number===1?lesson.interactions.slice(1):lesson.interactions.slice(0,2);
    items.forEach((item,index)=>{
      // Repair goals are explicit in lessons. Here we test the actual vendor cue,
      // which was taught in the preceding food/service lessons.
      const source={...item,resolution:null};
      const spec=cvChoiceSpec({id:`cvcheck.listen.${lesson.number}.${index}`,direction:'intent',interaction:source});
      listening.push({...spec,lessonId});
    });
    const item=lesson.number===1?lesson.interactions[1]:lesson.number===2?lesson.interactions[session.ordinal%2]:lesson.interactions[2];
    const spec=cvChoiceSpec({id:`cvcheck.reply.${lesson.number}`,direction:'response',interaction:item});
    responses.push({...spec,lessonId});
    const sayItem=lesson.interactions[(session.ordinal-1)%lesson.interactions.length];
    spoken.push({id:`cvcheck.spoken.${lesson.number}`,skill:'spoken',heading:sayItem.context,line:sayItem.response,cue:sayItem.cue,lessonId});
  }
  const questions=[...cvShuffled(listening,seed+'|listen'),...cvShuffled(responses,seed+'|reply'),...spoken,...cvCheckReadingQuestions(session.readingLessonIds,seed)];
  if(CV_CHECK_QUESTION_CACHE.size>=8)CV_CHECK_QUESTION_CACHE.delete(CV_CHECK_QUESTION_CACHE.keys().next().value);
  CV_CHECK_QUESTION_CACHE.set(cacheKey,questions);return questions;
}
function cvCheckSessionValid(run,completed){
  const keys=['version','ordinal','startedDay','completedDay','lessonIds','readingLessonIds','index','answers','revealed','supported'];
  if(!cvExactKeys(run,keys)||run.version!==CV_CHECK_VERSION||!Number.isInteger(run.ordinal)||run.ordinal<1||!run.startedDay||!cvDayNotFuture(run.startedDay)||!cvDayNotFuture(run.completedDay)||!Array.isArray(run.lessonIds)||!run.lessonIds.length||!cvIdList(run.lessonIds,Object.keys(CV1_LESSONS),false)||!cvIdList(run.readingLessonIds,LESSONS.map(x=>x.id),false)||typeof run.revealed!=='boolean'||typeof run.supported!=='boolean'||!Array.isArray(run.answers))return false;
  // A run samples a prefix of completed lessons, never a future or unordered slice.
  if(run.lessonIds.some((id,i)=>id!==Object.keys(CV1_LESSONS)[i]))return false;
  const readingSet=new Set(run.readingLessonIds),readingCount=run.readingLessonIds.length;
  if(LESSONS.slice(0,readingCount).some(x=>!readingSet.has(x.id)))return false;
  const questions=cvCheckQuestions(run);
  if(!Number.isInteger(run.index)||run.index<0||run.index>questions.length||run.answers.length<run.index||run.answers.length>Math.min(questions.length,run.index+1))return false;
  if(completed?(!run.completedDay||run.completedDay<run.startedDay||run.index!==questions.length||run.answers.length!==questions.length):(run.completedDay!==null||run.index===questions.length))return false;
  if(run.revealed&&(!questions[run.index]||questions[run.index].skill!=='spoken'))return false;
  return run.answers.every((answer,index)=>{
    if(!cvExactKeys(answer,['itemId','selected','rating','supported'])||answer.itemId!==questions[index].id||typeof answer.supported!=='boolean')return false;
    const q=questions[index];
    if(q.skill==='spoken')return answer.selected===null&&CV_CHECK_RATINGS.some(r=>r.id===answer.rating)&&!(answer.supported&&answer.rating==='independent');
    return answer.rating===null&&!answer.supported&&(answer.selected===null||q.options.some(option=>option.id===answer.selected));
  });
}
function cvLearningCheckValid(value){
  return cvExactKeys(value,['version','runs','resume'])&&value.version===CV_CHECK_VERSION&&Array.isArray(value.runs)&&value.runs.length<=3&&value.runs.every(run=>cvCheckSessionValid(run,true))&&value.runs.every((run,i)=>!i||(run.ordinal>value.runs[i-1].ordinal&&run.startedDay>=value.runs[i-1].completedDay))&&(value.resume===null||(cvCheckSessionValid(value.resume,false)&&(!value.runs.length||value.resume.ordinal>value.runs[value.runs.length-1].ordinal)));
}
function cvCheckStore(){
  const c=cvConversation();
  return c.extensions.learningCheck||{version:CV_CHECK_VERSION,runs:[],resume:null};
}
function cvSaveCheckSession(p){
  const c=cvConversation(),store=c.extensions.learningCheck||{version:CV_CHECK_VERSION,runs:[],resume:null};
  store.resume=cvClone(p.check);c.extensions.learningCheck=store;saveState();
}
function cvCheckSummary(run){
  const questions=cvCheckQuestions(run),groups={};
  run.answers.forEach((answer,index)=>{
    const q=questions[index];if(!groups[q.skill])groups[q.skill]={total:0,correct:0,independent:0,parts:0,model:0,missedLessons:[]};
    const g=groups[q.skill];g.total++;
    if(q.skill==='spoken')g[answer.rating]++;
    else if(answer.selected===q.answer)g.correct++;
    else if(q.lessonId)cvPushUnique(g.missedLessons,q.lessonId);
  });
  return groups;
}
function cvCheckSummaryHtml(run){
  const groups=cvCheckSummary(run);
  return `<div class="cv-check-results">${Object.entries(groups).map(([skill,g])=>`<div class="notebox"><b>${esc(CV_CHECK_SKILLS[skill])}</b><p>${skill==='spoken'?`${g.independent}/${g.total} reported without help · ${g.parts} needed parts/correction · ${g.model} needed the model`:`${g.correct}/${g.total} correct on the first try`}</p></div>`).join('')}${!groups.reading?'<div class="notebox"><b>Reading · not checked</b><p>Start the reading course to learn the shapes before checking them.</p></div>':''}</div>`;
}
function startConversationLearningCheck(){
  const store=cvCheckStore(),c=cvConversation();
  const lessonIds=Object.keys(CV1_LESSONS).filter(id=>c.lessons[id]&&c.lessons[id].firstCompleted);
  if(!lessonIds.length){toast('Finish your first conversation lesson before checking what stuck.');return false;}
  if(!store.resume&&store.runs.some(run=>run.completedDay===bangkokDayStr())){showConversationLearningResults();return true;}
  const last=store.runs[store.runs.length-1],firstUnread=LESSONS.findIndex(x=>!(state.done||[]).includes(x.id));
  const readingLessonIds=LESSONS.slice(0,firstUnread<0?LESSONS.length:firstUnread).map(x=>x.id);
  const check=store.resume?cvClone(store.resume):{version:CV_CHECK_VERSION,ordinal:last?last.ordinal+1:1,startedDay:bangkokDayStr(),completedDay:null,lessonIds,readingLessonIds,index:0,answers:[],revealed:false,supported:false};
  player={type:'conversation-course',kind:'learning-check',phase:store.resume?'questions':'intro',check,runSeed:`cvcheck|${check.ordinal}|${check.startedDay}`,completed:false};
  cvSaveCheckSession(player);openOverlay();renderConversationLearningCheck();return true;
}
function renderConversationLearningCheck(){
  const p=player;if(!p||p.kind!=='learning-check')return;
  stopConversationSpeech();
  const run=p.check,questions=cvCheckQuestions(run),q=questions[run.index];
  setProg(Math.round(100*run.index/questions.length));
  if(p.phase==='intro'){
    el('stage').innerHTML=`<div class="center"><div class="eyebrow">What stuck?</div><h2>Try your Thai without a warm-up</h2><p class="sub">${questions.length} short prompts from lessons you completed. Listening, reply choices, reading and your own report of recall stay separate.</p></div><div class="notebox">Use “I don’t know yet” whenever you need it. Your first answer is saved before feedback. This is a small practice sample, not proof of free conversation.</div><button class="btn full" id="cv-check-start">Start the check →</button>`;
    el('cv-check-start').onclick=()=>{p.phase='questions';renderConversationLearningCheck();};return;
  }
  if(!q){cvFinishLearningCheck(p);return;}
  const advance=()=>{run.index++;run.revealed=false;run.supported=false;if(run.index===questions.length)cvFinishLearningCheck(p);else{cvSaveCheckSession(p);renderConversationLearningCheck();}};
  const label=`${CV_CHECK_SKILLS[q.skill]} · ${run.index+1} of ${questions.length}`;
  if(q.skill==='spoken'){
    cvRenderRecall(p,q.line,{label,prompt:q.heading,cue:q.cue,revealed:run.revealed,supported:run.supported,
      onSupport:()=>{run.supported=true;cvSaveCheckSession(p);},
      onReveal:neededModel=>{run.revealed=true;if(neededModel)run.supported=true;cvSaveCheckSession(p);renderConversationLearningCheck();},
      onRate:rating=>{if(!run.revealed||run.answers.length!==run.index)return;run.answers.push({itemId:q.id,selected:null,rating,supported:run.supported});advance();}
    });return;
  }
  const answer=run.answers[run.index];
  cvRenderChoiceQuestion(p,q,{label,result:answer?{correct:answer.selected===q.answer}:null,
    onAnswer:selected=>{if(run.answers.length!==run.index)return;run.answers.push({itemId:q.id,selected,rating:null,supported:false});cvSaveCheckSession(p);renderConversationLearningCheck();},
    onNext:advance
  });
}
function cvFinishLearningCheck(p){
  const c=cvConversation(),store=c.extensions.learningCheck||{version:CV_CHECK_VERSION,runs:[],resume:null};
  p.check.completedDay=bangkokDayStr();
  if(!cvCheckSessionValid(p.check,true))throw new Error('Incomplete learning-check result');
  store.runs=store.runs.filter(run=>run.ordinal!==p.check.ordinal).concat(cvClone(p.check)).slice(-3);store.resume=null;
  c.extensions.learningCheck=store;saveState();p.completed=true;showConversationLearningResults();
}
function showConversationLearningResults(){
  const store=cvCheckStore(),run=store.runs[store.runs.length-1];if(!run)return false;
  player={type:'conversation-course',kind:'learning-results',completed:true};openOverlay();setProg(100);
  const groups=cvCheckSummary(run),missed=[];
  Object.values(groups).forEach(g=>g.missedLessons.forEach(id=>cvPushUnique(missed,id)));
  const recall=groups.spoken,recallNeedsHelp=recall&&recall.independent<recall.total;
  const earlier=store.runs.slice(0,-1);
  el('stage').innerHTML=`<div class="center"><div class="eyebrow">What stuck? · ${esc(run.completedDay)}</div><h2>Your learning snapshot</h2><p class="sub">Completion history stays intact. These results describe this attempt.</p></div>${cvCheckSummaryHtml(run)}<div class="notebox"><b>What to practise next</b><p>${missed.length?'Revisit the patterns below, then try them without the tiles.':recallNeedsHelp?'Practise a reply without tiles, then compare with the model.':'Try these phrases in a familiar situation. Check again after a gap to see what stays.'}</p></div><div class="stage-actions">${(missed.length?missed:recallNeedsHelp?run.lessonIds:[]).map(id=>`<button class="btn full ghost" data-cv-revisit="${escAttr(id)}">Revisit Lesson ${CV1_LESSONS[id].number}: ${esc(CV1_LESSONS[id].title)}</button>`).join('')}<button class="btn full ghost" id="cv-check-reading">Continue reading practice</button><button class="btn full" id="cv-check-done">Done</button></div><p class="sub">Try a short check tomorrow, then about a week later. Repeated items are practice, not a new mastery certificate.</p>${earlier.length?`<details class="conversation-transcript-drawer"><summary>Earlier snapshots</summary>${earlier.map(r=>`<h3>${esc(r.completedDay)}</h3>${cvCheckSummaryHtml(r)}`).join('')}</details>`:''}`;
  el('stage').querySelectorAll('[data-cv-revisit]').forEach(button=>button.onclick=()=>startConversationCourseLesson(button.dataset.cvRevisit));
  el('cv-check-reading').onclick=()=>{closeOverlay();renderHome();setReadingCompanionOpen(true);};
  el('cv-check-done').onclick=()=>{closeOverlay();renderHome();};return true;
}
function renderConversationLearningCard(){
  const panel=el('conversation-learning-check');if(!panel)return;
  const c=cvConversation(),completed=Object.values(c.lessons).filter(x=>x.firstCompleted).length;
  panel.hidden=!completed;if(!completed)return;
  const store=cvCheckStore(),last=store.runs[store.runs.length-1],today=bangkokDayStr(),checkedToday=last&&last.completedDay===today;
  const due=last?cvPlusDays(store.runs.length===1?last.completedDay:store.runs[0].completedDay,store.runs.length===1?1:7):null;
  panel.innerHTML=`<div class="eyebrow">Learning check</div><h2>${store.resume?'Continue your check':last?'What stayed with you?':'You finished the lessons. What stuck?'}</h2><p class="sub">${last?`Last checked ${esc(last.completedDay)}. ${due&&due>today?'Suggested next check: '+esc(due)+'.':'A short check is available when you want it.'}`:'Check understanding and recall without repeating all the teaching screens.'}</p><button class="btn full" id="cv-learning-start">${store.resume?'Continue check':checkedToday?'See today’s results':'Check what stuck →'}</button>${last&&!checkedToday?'<button class="btn full ghost mt-10" id="cv-learning-results">See previous results</button>':''}`;
  el('cv-learning-start').onclick=startConversationLearningCheck;
  const results=el('cv-learning-results');if(results)results.onclick=showConversationLearningResults;
}
