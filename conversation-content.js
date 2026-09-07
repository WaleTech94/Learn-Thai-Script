/* Bangkok Conversation Foundation v1 — schema 2 and canonical Week 1 course.
   Device Thai TTS is the only pronunciation model. No recording is persisted or scored. */
'use strict';

const CV1_COURSE_ID = 'bangkok-conversation-foundation-v1';
const CV1_CURRICULUM_REVISION = 1;
const CV1_WEEK1_GATE = 'cv1.gate.w01';
const CV1_WEEK1_CONSOLIDATION = 'cv1.activity.w01.consolidation';
const CV1_SUPPORT_RATINGS = [
  {id:'full-support',label:'I needed the word hints'},
  {id:'some-support',label:'I needed a little help'},
  {id:'minimal-support',label:'I could answer on my own'}
];
const CV1_MAIN_SEQUENCE = [
  'cv1.lesson.w01.l01.food-order',
  'cv1.lesson.w01.l02.food-options',
  'cv1.lesson.w01.l03.repair',
  CV1_WEEK1_CONSOLIDATION,
  CV1_WEEK1_GATE
];

function cvLine(id, thai, tr, en, parts){
  return {id,revision:1,role:null,thai,ttsText:thai,tr,en,lang:'th-TH',rate:.72,segments:(parts || []).map(part=>({thai:part[0],tr:part[1],en:part[2]}))};
}

const CV1_LINES = {
  greeting:cvLine('cv1.routine.social.greeting','สวัสดีครับ','sà-wàt-dii khráp','Hello.',[['สวัสดี','sà-wàt-dii','hello'],['ครับ','khráp','male polite ending']]),
  thanks:cvLine('cv1.routine.social.thanks','ขอบคุณครับ','khòrp-khun khráp','Thank you.',[['ขอบคุณ','khòrp-khun','thank you'],['ครับ','khráp','male polite ending']]),
  okay:cvLine('cv1.routine.social.okay','ได้ครับ','dâai khráp','Okay.',[['ได้','dâai','okay'],['ครับ','khráp','male polite ending']]),
  noProblem:cvLine('cv1.routine.social.no-problem','ไม่เป็นไรครับ','mâi bpen rai khráp','No problem.',[['ไม่เป็นไร','mâi bpen rai','no problem'],['ครับ','khráp','male polite ending']]),
  what1:cvLine('cv1.cue-variant.food.what-would-you-like.v01','จะรับอะไรดีครับ','jà ráp a-rai dii khráp','What would you like?',[['จะรับ','jà ráp','would you like'],['อะไรดี','a-rai dii','what will it be'],['ครับ','khráp','male polite ending']]),
  what2:cvLine('cv1.cue-variant.food.what-would-you-like.v02','รับอะไรดีครับ','ráp a-rai dii khráp','What would you like?',[['รับ','ráp','have'],['อะไรดี','a-rai dii','what will it be'],['ครับ','khráp','male polite ending']]),
  what3:cvLine('cv1.cue-variant.food.what-would-you-like.v03','จะเอาอะไรครับ','jà ao a-rai khráp','What do you want?',[['จะเอา','jà ao','want'],['อะไร','a-rai','what'],['ครับ','khráp','male polite ending']]),
  spice1:cvLine('cv1.cue-variant.food.spice-choice.v01','รับเผ็ดไหมครับ','ráp phèt mǎi khráp','Would you like it spicy?',[['รับเผ็ด','ráp phèt','have it spicy'],['ไหม','mǎi','question'],['ครับ','khráp','male polite ending']]),
  spice2:cvLine('cv1.cue-variant.food.spice-choice.v02','เอาเผ็ดไหมครับ','ao phèt mǎi khráp','Do you want it spicy?',[['เอาเผ็ด','ao phèt','want spicy'],['ไหม','mǎi','question'],['ครับ','khráp','male polite ending']]),
  spice3:cvLine('cv1.cue-variant.food.spice-choice.v03','เผ็ดไหมครับ','phèt mǎi khráp','Spicy?',[['เผ็ด','phèt','spicy'],['ไหม','mǎi','question'],['ครับ','khráp','male polite ending']]),
  orderThis:cvLine('cv1.response.w01.l01.order-this','เอาอันนี้ครับ','ao an níi khráp','I will have this one.',[['เอา','ao','I will have'],['อันนี้','an níi','this one'],['ครับ','khráp','male polite ending']]),
  orderGaprao:cvLine('cv1.response.w01.l01.order-gaprao-chicken','เอากะเพราไก่ครับ','ao gà-phrao gài khráp','I will have chicken with holy basil.',[['เอา','ao','I will have'],['กะเพราไก่','gà-phrao gài','chicken with holy basil'],['ครับ','khráp','male polite ending']]),
  notSpicy:cvLine('cv1.response.w01.l01.not-spicy','ไม่เผ็ดครับ','mâi phèt khráp','Not spicy, please.',[['ไม่','mâi','not'],['เผ็ด','phèt','spicy'],['ครับ','khráp','male polite ending']]),
  service1:cvLine('cv1.cue-variant.food.service-choice.v01','ทานที่นี่หรือกลับบ้านครับ','thaan thîi-nîi rǔue glàp bâan khráp','For here or takeaway?',[['ทานที่นี่','thaan thîi-nîi','eat here'],['หรือ','rǔue','or'],['กลับบ้าน','glàp bâan','takeaway'],['ครับ','khráp','male polite ending']]),
  service2:cvLine('cv1.cue-variant.food.service-choice.v02','ที่นี่หรือกลับบ้านครับ','thîi-nîi rǔue glàp bâan khráp','Here or takeaway?',[['ที่นี่','thîi-nîi','here'],['หรือ','rǔue','or'],['กลับบ้าน','glàp bâan','takeaway'],['ครับ','khráp','male polite ending']]),
  service3:cvLine('cv1.cue-variant.food.service-choice.v03','ทานที่นี่ไหมครับ','thaan thîi-nîi mǎi khráp','Will you eat here?',[['ทานที่นี่','thaan thîi-nîi','eat here'],['ไหม','mǎi','question'],['ครับ','khráp','male polite ending']]),
  drink1:cvLine('cv1.cue-variant.food.drink-choice.v01','รับน้ำอะไรดีครับ','ráp náam a-rai dii khráp','What drink would you like?',[['รับน้ำ','ráp náam','have a drink'],['อะไรดี','a-rai dii','which one'],['ครับ','khráp','male polite ending']]),
  drink2:cvLine('cv1.cue-variant.food.drink-choice.v02','รับน้ำอะไรครับ','ráp náam a-rai khráp','What drink would you like?',[['รับน้ำ','ráp náam','have a drink'],['อะไร','a-rai','what'],['ครับ','khráp','male polite ending']]),
  drink3:cvLine('cv1.cue-variant.food.drink-choice.v03','เอาน้ำอะไรครับ','ao náam a-rai khráp','What drink do you want?',[['เอาน้ำ','ao náam','want a drink'],['อะไร','a-rai','what'],['ครับ','khráp','male polite ending']]),
  total:cvLine('cv1.cue-variant.food.total.v01','ทั้งหมดแปดสิบบาทครับ','tháng-mòt bpàaet-sìp bàat khráp','Eighty baht altogether.',[['ทั้งหมด','tháng-mòt','altogether'],['แปดสิบบาท','bpàaet-sìp bàat','eighty baht'],['ครับ','khráp','male polite ending']]),
  dineHere:cvLine('cv1.response.w01.l02.dine-here','ทานที่นี่ครับ','thaan thîi-nîi khráp','For here.',[['ทานที่นี่','thaan thîi-nîi','eat here'],['ครับ','khráp','male polite ending']]),
  takeaway:cvLine('cv1.response.w01.l02.takeaway','กลับบ้านครับ','glàp bâan khráp','Takeaway.',[['กลับบ้าน','glàp bâan','takeaway'],['ครับ','khráp','male polite ending']]),
  water:cvLine('cv1.response.w01.l02.water-one','น้ำเปล่าขวดหนึ่งครับ','náam-bplàao khùat nùeng khráp','One bottle of water.',[['น้ำเปล่า','náam-bplàao','plain water'],['ขวดหนึ่ง','khùat nùeng','one bottle'],['ครับ','khráp','male polite ending']]),
  bill:cvLine('cv1.response.w01.l02.bill','คิดเงินด้วยครับ','khít ngern dûai khráp','The bill, please.',[['คิดเงิน','khít ngern','calculate the bill'],['ด้วย','dûai','please'],['ครับ','khráp','male polite ending']]),
  dontUnderstand:cvLine('cv1.response.w01.l03.dont-understand','ไม่เข้าใจครับ','mâi khâo-jai khráp','I do not understand.',[['ไม่','mâi','not'],['เข้าใจ','khâo-jai','understand'],['ครับ','khráp','male polite ending']]),
  slower:cvLine('cv1.response.w01.l03.slower','พูดช้าๆ ได้ไหมครับ','phûut cháa-cháa dâai mǎi khráp','Could you speak slowly?',[['พูด','phûut','speak'],['ช้าๆ','cháa-cháa','slowly'],['ได้ไหม','dâai mǎi','could you'],['ครับ','khráp','male polite ending']]),
  again:cvLine('cv1.response.w01.l03.again','พูดอีกครั้งได้ไหมครับ','phûut ìik khráng dâai mǎi khráp','Could you say it again?',[['พูด','phûut','speak'],['อีกครั้ง','ìik khráng','again'],['ได้ไหม','dâai mǎi','could you'],['ครับ','khráp','male polite ending']]),
  slowAgain:cvLine('cv1.response.w01.l03.slow-again','พูดช้าๆ อีกครั้งได้ไหมครับ','phûut cháa-cháa ìik khráng dâai mǎi khráp','Could you say it again slowly?',[['พูด','phûut','speak'],['ช้าๆ','cháa-cháa','slowly'],['อีกครั้ง','ìik khráng','again'],['ได้ไหม','dâai mǎi','could you'],['ครับ','khráp','male polite ending']]),
  destination1:cvLine('cv1.cue-variant.transport.destination-question.v01','ไปไหนครับ','bpai nǎi khráp','Where are you going?',[['ไป','bpai','go'],['ไหน','nǎi','where'],['ครับ','khráp','male polite ending']]),
  destinationEkkamai:cvLine('cv1.response.w02.l04.destination-ekkamai-station','ไปสถานีเอกมัยครับ','bpai sà-thǎa-nii èek-gà-mai khráp','To Ekkamai Station.',[['ไป','bpai','to'],['สถานีเอกมัย','sà-thǎa-nii èek-gà-mai','Ekkamai Station'],['ครับ','khráp','male polite ending']]),
  noMeter1:cvLine('cv1.cue-variant.transport.no-meter-proposal.v01','ไม่ใช้มิเตอร์ครับ','mâi chái mí-dtêr khráp','I am not using the meter.',[['ไม่ใช้','mâi chái','not use'],['มิเตอร์','mí-dtêr','meter'],['ครับ','khráp','male polite ending']]),
  meterRequest:cvLine('cv1.response.w02.l04.meter-request','ใช้มิเตอร์ได้ไหมครับ','chái mí-dtêr dâai mǎi khráp','Could you use the meter?',[['ใช้มิเตอร์','chái mí-dtêr','use the meter'],['ได้ไหม','dâai mǎi','could you'],['ครับ','khráp','male polite ending']])
};

const CV1_LINE_ROLES = {
  greeting:'routine',thanks:'routine',okay:'routine',noProblem:'routine',
  what1:'recognition',what2:'recognition',what3:'recognition',spice1:'recognition',spice2:'recognition',spice3:'recognition',
  service1:'recognition',service2:'recognition',service3:'recognition',drink1:'recognition',drink2:'recognition',drink3:'recognition',total:'recognition',
  destination1:'recognition',noMeter1:'recognition',
  orderThis:'active',notSpicy:'active',dineHere:'active',water:'active',bill:'active',dontUnderstand:'active',slower:'active',again:'active',destinationEkkamai:'active',meterRequest:'active',
  orderGaprao:'transfer-only',takeaway:'transfer-only',slowAgain:'transfer-only'
};
Object.keys(CV1_LINES).forEach(key=>{ CV1_LINES[key].role=CV1_LINE_ROLES[key]; });

const CV1_RESPONSE_BY_ID = {};
['greeting','thanks','okay','orderThis','orderGaprao','notSpicy','dineHere','takeaway','water','bill','dontUnderstand','slower','again','slowAgain','destinationEkkamai','meterRequest'].forEach(key=>{ CV1_RESPONSE_BY_ID[CV1_LINES[key].id] = CV1_LINES[key]; });

function cvFunctionIdForResponse(response){
  const map={
    [CV1_LINES.greeting.id]:'cv1.fn.social.greeting',[CV1_LINES.thanks.id]:'cv1.fn.social.thanks',[CV1_LINES.okay.id]:'cv1.fn.social.acknowledge',
    [CV1_LINES.orderThis.id]:'cv1.fn.food.order-item',[CV1_LINES.orderGaprao.id]:'cv1.fn.food.order-item',[CV1_LINES.notSpicy.id]:'cv1.fn.food.spice-level',
    [CV1_LINES.dineHere.id]:'cv1.fn.food.service-choice',[CV1_LINES.takeaway.id]:'cv1.fn.food.service-choice',[CV1_LINES.water.id]:'cv1.fn.food.order-drink',[CV1_LINES.bill.id]:'cv1.fn.food.request-bill',
    [CV1_LINES.dontUnderstand.id]:'cv1.fn.repair.meaning-unknown',[CV1_LINES.slower.id]:'cv1.fn.repair.slow-down',[CV1_LINES.again.id]:'cv1.fn.repair.repeat',[CV1_LINES.slowAgain.id]:'cv1.fn.repair.slow-repeat',
    [CV1_LINES.destinationEkkamai.id]:'cv1.fn.transport.destination',[CV1_LINES.meterRequest.id]:'cv1.fn.transport.meter-request'
  };
  return map[response.id]||'cv1.fn.social.respond';
}
function cvFrameIdForResponse(response){return cvFunctionIdForResponse(response).replace('cv1.fn','cv1.frame');}
function cvCueFamilyId(cue){
  if(!cue)return null;
  if(cue.id.startsWith('cv1.cue-variant.'))return cue.id.replace('cv1.cue-variant.','cv1.cue-family.').replace(/\.v\d+$/,'');
  return cue.id.replace('cv1.routine.','cv1.cue-family.').replace('cv1.response.','cv1.cue-family.');
}
function cvLearnerContext(text){
  return String(text||'')
    .replace('politely return the opening.','say hello back.')
    .replace('you intend to eat there.','you want to eat there.')
    .replace('you heard the cue but do not know what it means.','you do not understand what the vendor said.')
    .replace('you know the choice function, but the speech is too fast.','you know it is a question, but the vendor spoke too quickly.')
    .replace('you understood this kind of cue earlier, but missed this playback.','you understood before, but missed what the vendor just said.')
    .replace(/opening: return the greeting\./g,'opening: say hello back.')
    .replace(/choose the pointed item\./g,'order what you are pointing at.')
    .replace(/request non-spicy\./g,'ask for no spice.')
    .replace(/order one water\./g,'order a bottle of water.')
    .replace(/ask for one water\./g,'order a bottle of water.')
    .replace(/initiate payment\./g,'ask to pay.')
    .replace(/choose takeaway\./g,'say it is takeaway.')
    .replace(/choose to eat there\./g,'say you are eating there.')
    .replace(/: eat there\./g,': say you are eating there.')
    .replace(/the meaning is unknown\./g,'you did not understand.')
    .replace(/its meaning is unknown\./g,'you did not understand.')
    .replace(/the rate is too fast\./g,'the speaker is too fast.')
    .replace(/it is too fast\./g,'the speaker is too fast.')
    .replace(/the playback was missed once\./g,'you missed what was said.')
    .replace(/the destination cue playback was interrupted\./g,'you missed the destination question.')
    .replace(/a slow replay is explicitly needed\./g,'the speaker is too fast, and you want it repeated slowly.')
    .replace(/ cue:/g,':');
}
function cvInteraction(id, context, cue, response, options, intent, intentOptions, extra){
  const functionId=cvFunctionIdForResponse(response),event=!!(extra&&extra.event),distractors=options.filter(option=>option!==response.id).map((responseId,index)=>({responseId,misconceptionTag:index===0?'related-taught-function':'wrong-context-response'}));
  return Object.assign({id,revision:1,direction:event?'learner-led':'partner-led',functionId,cueFamilyId:cvCueFamilyId(cue),cueVariantId:cue?cue.id:null,eventId:event?(response.id===CV1_LINES.bill.id?'cv1.event.w01.l02.meal-finished':id.replace('cv1.interaction','cv1.event')):null,contextId:id.replace('cv1.interaction','cv1.context'),context:cvLearnerContext(context),frameId:cvFrameIdForResponse(response),slotIds:[],acceptedSetId:functionId.replace('cv1.fn','cv1.accepted-set'),cue,response,options,distractors,intent,intentOptions}, extra || {});
}

const CV1_I = {
  l01Greeting:cvInteraction('cv1.interaction.lesson.w01.l01.a.01','Food stall: politely return the opening.',CV1_LINES.greeting,CV1_LINES.greeting,[CV1_LINES.greeting.id,CV1_LINES.thanks.id,CV1_LINES.okay.id],'A polite greeting.',['A polite greeting.','The price is being given.','The stall is closing.']),
  l01Order:cvInteraction('cv1.interaction.lesson.w01.l01.a.02','Food display: you want the item you are pointing at.',CV1_LINES.what1,CV1_LINES.orderThis,[CV1_LINES.orderThis.id,CV1_LINES.notSpicy.id,CV1_LINES.thanks.id],'The vendor is asking you to choose food.',['The vendor is asking you to choose food.','The vendor is asking about spice.','The vendor is giving the price.']),
  l01Spice:cvInteraction('cv1.interaction.lesson.w01.l01.a.03','Food stall: you want the non-spicy option.',CV1_LINES.spice1,CV1_LINES.notSpicy,[CV1_LINES.notSpicy.id,CV1_LINES.orderThis.id,CV1_LINES.okay.id],'The vendor is asking whether you want it spicy.',['The vendor is asking whether you want it spicy.','The vendor is asking where you will eat.','The vendor is asking which drink you want.']),
  l02Here:cvInteraction('cv1.interaction.lesson.w01.l02.a.01','Counter stall: you intend to eat there.',CV1_LINES.service1,CV1_LINES.dineHere,[CV1_LINES.dineHere.id,CV1_LINES.water.id,CV1_LINES.bill.id],'The vendor is asking whether the food is for here or takeaway.',['The vendor is asking whether the food is for here or takeaway.','The vendor is asking which drink you want.','The vendor is giving the total.']),
  l02Water:cvInteraction('cv1.interaction.lesson.w01.l02.a.02','Drink counter: you want one bottle of plain water.',CV1_LINES.drink1,CV1_LINES.water,[CV1_LINES.water.id,CV1_LINES.dineHere.id,CV1_LINES.bill.id],'The vendor is asking which drink you want.',['The vendor is asking which drink you want.','The vendor is asking where you will eat.','The meal has finished and you need to pay.']),
  l02Bill:cvInteraction('cv1.interaction.lesson.w01.l02.a.03','Your meal is finished and you want to pay.',null,CV1_LINES.bill,[CV1_LINES.bill.id,CV1_LINES.water.id,CV1_LINES.dineHere.id],'You should ask for the bill.',['You should ask for the bill.','You should order another drink.','You should choose where to eat.'],{event:true,partnerReply:CV1_LINES.total}),
  l03Unknown:cvInteraction('cv1.interaction.lesson.w01.l03.a.01','Food stall: you heard the cue but do not know what it means.',CV1_LINES.what1,CV1_LINES.dontUnderstand,[CV1_LINES.dontUnderstand.id,CV1_LINES.orderThis.id,CV1_LINES.thanks.id],'You did not understand.',['You did not understand.','They spoke too quickly.','You missed it and want to hear it again.'],{resolution:{cue:CV1_LINES.what1,response:CV1_LINES.orderThis,rate:.72}}),
  l03Slow:cvInteraction('cv1.interaction.lesson.w01.l03.a.02','Food stall: you know the choice function, but the speech is too fast.',CV1_LINES.what1,CV1_LINES.slower,[CV1_LINES.slower.id,CV1_LINES.water.id,CV1_LINES.thanks.id],'They spoke too quickly.',['They spoke too quickly.','You did not understand.','You missed it and want to hear it again.'],{resolution:{cue:CV1_LINES.what1,response:CV1_LINES.orderThis,rate:.58}}),
  l03Again:cvInteraction('cv1.interaction.lesson.w01.l03.a.03','Food stall: you understood this kind of cue earlier, but missed this playback.',CV1_LINES.what1,CV1_LINES.again,[CV1_LINES.again.id,CV1_LINES.notSpicy.id,CV1_LINES.thanks.id],'You missed it and want to hear it again.',['You missed it and want to hear it again.','You did not understand.','They spoke too quickly.'],{resolution:{cue:CV1_LINES.what1,response:CV1_LINES.orderThis,rate:.72}})
};

function cvScene(id, turns, responseKeys){
  return {id,revision:1,title:id,turns,chunks:(responseKeys || []).map(key=>CV1_LINES[key])};
}
const CV1_SCENES = {
  l01:cvScene('cv1.scene.w01.l01.model',[
    {speaker:'vendor',...CV1_LINES.greeting},{speaker:'learner',chunk:CV1_LINES.greeting.id},
    {speaker:'vendor',...CV1_LINES.what1},{speaker:'learner',chunk:CV1_LINES.orderThis.id},
    {speaker:'vendor',...CV1_LINES.spice1},{speaker:'learner',chunk:CV1_LINES.notSpicy.id},
    {speaker:'vendor',...CV1_LINES.okay},{speaker:'learner',chunk:CV1_LINES.thanks.id}
  ],['greeting','orderThis','notSpicy','thanks']),
  l02:cvScene('cv1.scene.w01.l02.model',[
    {speaker:'vendor',...CV1_LINES.service1},{speaker:'learner',chunk:CV1_LINES.dineHere.id},
    {speaker:'vendor',...CV1_LINES.drink1},{speaker:'learner',chunk:CV1_LINES.water.id},
    {speaker:'vendor',...CV1_LINES.okay},{speaker:'learner',chunk:CV1_LINES.thanks.id,pauseAfter:1800},
    {speaker:'learner',chunk:CV1_LINES.bill.id},{speaker:'vendor',...CV1_LINES.total},
    {speaker:'learner',chunk:CV1_LINES.thanks.id},{speaker:'vendor',...CV1_LINES.thanks}
  ],['dineHere','water','thanks','bill']),
  l03:cvScene('cv1.scene.w01.l03.model',[
    {speaker:'vendor',...CV1_LINES.greeting},{speaker:'learner',chunk:CV1_LINES.greeting.id},
    {speaker:'vendor',...CV1_LINES.what1},{speaker:'learner',chunk:CV1_LINES.dontUnderstand.id},
    {speaker:'vendor',...CV1_LINES.what1},{speaker:'learner',chunk:CV1_LINES.slower.id},
    {speaker:'vendor',...CV1_LINES.what1,rate:.58},{speaker:'learner',chunk:CV1_LINES.again.id},
    {speaker:'vendor',...CV1_LINES.what1,rate:.58},{speaker:'learner',chunk:CV1_LINES.orderThis.id},
    {speaker:'vendor',...CV1_LINES.okay},{speaker:'learner',chunk:CV1_LINES.thanks.id},{speaker:'vendor',...CV1_LINES.noProblem}
  ],['greeting','dontUnderstand','slower','again','orderThis','thanks'])
};

const CV1_LESSONS = {
  'cv1.lesson.w01.l01.food-order':{
    id:'cv1.lesson.w01.l01.food-order',revision:1,number:1,title:'Order food and ask for no spice',coreMinutes:10,ordinaryRepairMinutes:2,totalMinutes:12,minutes:12,
    situation:'You are at a Bangkok food stall. Point to what you want, then ask for it not spicy.',
    roles:'The vendor asks. You answer as the customer. Every Thai line uses the male polite ending ครับ.',
    meaning:[['Say hello','Return the greeting.'],['Choose the food','Point and say, “I’ll have this one.”'],['Choose the spice level','Say, “Not spicy, please.”']],
    interactions:[CV1_I.l01Greeting,CV1_I.l01Order,CV1_I.l01Spice],scene:CV1_SCENES.l01,
    substitution:{id:'cv1.substitution.w01.l01.gaprao-chicken',revision:1,from:CV1_LINES.orderThis,to:CV1_LINES.orderGaprao,label:'Replace “this one” with chicken with holy basil.'},
    record:CV1_LINES.orderThis
  },
  'cv1.lesson.w01.l02.food-options':{
    id:'cv1.lesson.w01.l02.food-options',revision:1,number:2,title:'Eat here, order water and ask to pay',coreMinutes:12,ordinaryRepairMinutes:2,totalMinutes:14,minutes:14,
    situation:'You are at a counter stall. Choose to eat there, order water and ask for the bill when you finish.',
    roles:'The vendor asks about your order. At the end of the meal, you start the payment conversation.',
    meaning:[['Choose where to eat','Say you will eat there.'],['Order a drink','Ask for one bottle of plain water.'],['Finish the meal','When the meal is over, ask for the bill.']],
    interactions:[CV1_I.l02Here,CV1_I.l02Water,CV1_I.l02Bill],scene:CV1_SCENES.l02,
    substitution:{id:'cv1.substitution.w01.l02.takeaway',revision:1,from:CV1_LINES.dineHere,to:CV1_LINES.takeaway,label:'Change “for here” to “takeaway”.'},
    record:CV1_LINES.bill
  },
  'cv1.lesson.w01.l03.repair':{
    id:'cv1.lesson.w01.l03.repair',revision:1,number:3,title:'Ask for help when you miss something',coreMinutes:12,ordinaryRepairMinutes:2,totalMinutes:14,minutes:14,
    situation:'Someone says something you do not understand, says it too quickly or needs to repeat it.',
    roles:'Choose the short phrase that gets the conversation moving again.',
    meaning:[['You do not understand','Say that you do not understand.'],['It is too fast','Ask the speaker to slow down.'],['You missed it','Ask to hear it again.']],
    interactions:[CV1_I.l03Unknown,CV1_I.l03Slow,CV1_I.l03Again],scene:CV1_SCENES.l03,
    substitution:{id:'cv1.substitution.w01.l03.slow-again',revision:1,from:CV1_LINES.again,to:CV1_LINES.slowAgain,label:'Combine “slowly” and “again” in one request.'},
    record:CV1_LINES.slower
  }
};

function cvVariant(base, id, context, cue, response, extra){
  let options=base.options.slice();
  if(!options.includes(response.id)){
    const replace=options.indexOf(base.response.id);
    if(replace>=0)options[replace]=response.id;
    else options=[response.id].concat(options.filter(option=>option!==response.id).slice(0,2));
  }
  return cvInteraction(id,context,cue,response,options,base.intent,base.intentOptions,Object.assign({},extra || {}));
}

const CV1_RETENTION_FORMS = {
  'cv1.retention.w01.l01.d1':[
    {id:'cv1.form.retention.w01.l01.d1.a',items:[cvVariant(CV1_I.l01Greeting,'cv1.interaction.retention.w01.l01.d1.a.01','Street stall opening: return the greeting.',CV1_LINES.greeting,CV1_LINES.greeting),cvVariant(CV1_I.l01Order,'cv1.interaction.retention.w01.l01.d1.a.02','Display tray: choose the pointed item.',CV1_LINES.what2,CV1_LINES.orderThis),cvVariant(CV1_I.l01Spice,'cv1.interaction.retention.w01.l01.d1.a.03','Noodle stall: request non-spicy.',CV1_LINES.spice2,CV1_LINES.notSpicy)]},
    {id:'cv1.form.retention.w01.l01.d1.b',items:[cvVariant(CV1_I.l01Greeting,'cv1.interaction.retention.w01.l01.d1.b.01','Canteen opening: return the greeting.',CV1_LINES.greeting,CV1_LINES.greeting),cvVariant(CV1_I.l01Order,'cv1.interaction.retention.w01.l01.d1.b.02','Counter display: choose the pointed item.',CV1_LINES.what3,CV1_LINES.orderThis),cvVariant(CV1_I.l01Spice,'cv1.interaction.retention.w01.l01.d1.b.03','Curry counter: request non-spicy.',CV1_LINES.spice3,CV1_LINES.notSpicy)]}
  ],
  'cv1.retention.w01.l02.d1':[
    {id:'cv1.form.retention.w01.l02.d1.a',items:[cvVariant(CV1_I.l02Here,'cv1.interaction.retention.w01.l02.d1.a.01','Mall counter: eat there.',CV1_LINES.service3,CV1_LINES.dineHere),cvVariant(CV1_I.l02Water,'cv1.interaction.retention.w01.l02.d1.a.02','Drink counter: order one water.',CV1_LINES.drink2,CV1_LINES.water),cvVariant(CV1_I.l02Bill,'cv1.interaction.retention.w01.l02.d1.a.03','A café drink is finished: initiate payment.',null,CV1_LINES.bill,{event:true,partnerReply:CV1_LINES.total})]},
    {id:'cv1.form.retention.w01.l02.d1.b',items:[cvVariant(CV1_I.l02Here,'cv1.interaction.retention.w01.l02.d1.b.01','Lunch counter: choose takeaway.',CV1_LINES.service2,CV1_LINES.takeaway),cvVariant(CV1_I.l02Water,'cv1.interaction.retention.w01.l02.d1.b.02','Food kiosk: order one water.',CV1_LINES.drink3,CV1_LINES.water),cvVariant(CV1_I.l02Bill,'cv1.interaction.retention.w01.l02.d1.b.03','A food-court meal is finished: initiate payment.',null,CV1_LINES.bill,{event:true,partnerReply:CV1_LINES.total})]}
  ],
  'cv1.retention.w01.l03.d1':[
    {id:'cv1.form.retention.w01.l03.d1.a',items:[cvVariant(CV1_I.l03Unknown,'cv1.interaction.retention.w01.l03.d1.a.01','Food choice: the meaning is unknown.',CV1_LINES.what2,CV1_LINES.dontUnderstand,{resolution:{cue:CV1_LINES.what2,response:CV1_LINES.orderThis,rate:.72}}),cvVariant(CV1_I.l03Slow,'cv1.interaction.retention.w01.l03.d1.a.02','Spice choice: the rate is too fast.',CV1_LINES.spice1,CV1_LINES.slower,{resolution:{cue:CV1_LINES.spice1,response:CV1_LINES.notSpicy,rate:.58}}),cvVariant(CV1_I.l03Again,'cv1.interaction.retention.w01.l03.d1.a.03','Service choice: the playback was missed once.',CV1_LINES.service1,CV1_LINES.again,{resolution:{cue:CV1_LINES.service1,response:CV1_LINES.dineHere,rate:.72}})]},
    {id:'cv1.form.retention.w01.l03.d1.b',items:[cvVariant(CV1_I.l03Unknown,'cv1.interaction.retention.w01.l03.d1.b.01','Drink choice: the meaning is unknown.',CV1_LINES.drink1,CV1_LINES.dontUnderstand,{resolution:{cue:CV1_LINES.drink1,response:CV1_LINES.water,rate:.72}}),cvVariant(CV1_I.l03Slow,'cv1.interaction.retention.w01.l03.d1.b.02','Food choice: the rate is too fast.',CV1_LINES.what3,CV1_LINES.slower,{resolution:{cue:CV1_LINES.what3,response:CV1_LINES.orderThis,rate:.58}}),cvVariant(CV1_I.l03Again,'cv1.interaction.retention.w01.l03.d1.b.03','Spice choice: the playback was missed once.',CV1_LINES.spice2,CV1_LINES.again,{resolution:{cue:CV1_LINES.spice2,response:CV1_LINES.notSpicy,rate:.72}})]}
  ]
};

function cvD7Forms(lessonId){
  const lesson = CV1_LESSONS[lessonId];
  const maps = {
    1:{
      a:[[CV1_I.l01Order,'Lunch counter: order chicken with holy basil.',CV1_LINES.what3,CV1_LINES.orderGaprao],[CV1_I.l01Spice,'Curry stall: request non-spicy.',CV1_LINES.spice3,CV1_LINES.notSpicy],[CV1_I.l01Greeting,'Café opening: return the greeting.',CV1_LINES.greeting,CV1_LINES.greeting],[CV1_I.l01Order,'Convenience drink case: choose the bottle being pointed at.',CV1_LINES.drink2,CV1_LINES.orderThis]],
      b:[[CV1_I.l01Order,'Food-court stall: order chicken with holy basil.',CV1_LINES.what2,CV1_LINES.orderGaprao],[CV1_I.l01Spice,'Wok stall: request non-spicy.',CV1_LINES.spice2,CV1_LINES.notSpicy],[CV1_I.l01Greeting,'Market-stall opening: return the greeting.',CV1_LINES.greeting,CV1_LINES.greeting],[CV1_I.l01Order,'Café snack display: order chicken with holy basil.',CV1_LINES.what3,CV1_LINES.orderGaprao]]
    },
    2:{
      a:[[CV1_I.l02Here,'Office canteen: choose takeaway.',CV1_LINES.service3,CV1_LINES.takeaway],[CV1_I.l02Water,'Kiosk: order one water.',CV1_LINES.drink3,CV1_LINES.water],[CV1_I.l02Bill,'A café table has been cleared: initiate payment.',null,CV1_LINES.bill,{event:true,partnerReply:CV1_LINES.total}],[CV1_I.l02Water,'Convenience hot-food counter: ask for one water.',CV1_LINES.what2,CV1_LINES.water]],
      b:[[CV1_I.l02Here,'Café table: choose to eat there.',CV1_LINES.service2,CV1_LINES.dineHere],[CV1_I.l02Water,'Canteen: order one water.',CV1_LINES.drink2,CV1_LINES.water],[CV1_I.l02Bill,'A food-court table has been cleared: initiate payment.',null,CV1_LINES.bill,{event:true,partnerReply:CV1_LINES.total}],[CV1_I.l02Water,'Market drink cooler: ask for one water.',CV1_LINES.what3,CV1_LINES.water]]
    },
    3:{
      a:[[CV1_I.l03Unknown,'Canteen drink choice: the meaning is unknown.',CV1_LINES.drink2,CV1_LINES.dontUnderstand,{resolution:{cue:CV1_LINES.drink2,response:CV1_LINES.water,rate:.72}}],[CV1_I.l03Slow,'Service choice: the rate is too fast.',CV1_LINES.service2,CV1_LINES.slower,{resolution:{cue:CV1_LINES.service2,response:CV1_LINES.takeaway,rate:.58}}],[CV1_I.l03Again,'Food choice: the playback was missed once.',CV1_LINES.what3,CV1_LINES.again,{resolution:{cue:CV1_LINES.what3,response:CV1_LINES.orderGaprao,rate:.72}}],[CV1_I.l03Again,'Taxi pickup: the destination cue playback was interrupted.',CV1_LINES.destination1,CV1_LINES.again,{resolution:{cue:CV1_LINES.destination1,response:CV1_LINES.destinationEkkamai,rate:.72}}]],
      b:[[CV1_I.l03Unknown,'Spice choice: the meaning is unknown.',CV1_LINES.spice3,CV1_LINES.dontUnderstand,{resolution:{cue:CV1_LINES.spice3,response:CV1_LINES.notSpicy,rate:.72}}],[CV1_I.l03Slow,'Drink choice: the rate is too fast.',CV1_LINES.drink3,CV1_LINES.slower,{resolution:{cue:CV1_LINES.drink3,response:CV1_LINES.water,rate:.58}}],[CV1_I.l03Again,'Evening-stall service choice: the playback was missed once.',CV1_LINES.service3,CV1_LINES.again,{resolution:{cue:CV1_LINES.service3,response:CV1_LINES.dineHere,rate:.72}}],[CV1_I.l03Slow,'Taxi meter proposal: the rate is too fast.',CV1_LINES.noMeter1,CV1_LINES.slower,{resolution:{cue:CV1_LINES.noMeter1,response:CV1_LINES.meterRequest,rate:.58}}]]
    }
  };
  return ['a','b'].map(formLetter=>({
    id:`cv1.form.retention.w01.l0${lesson.number}.d7.${formLetter}`,
    items:maps[lesson.number][formLetter].map((entry,index)=>cvVariant(entry[0],`cv1.interaction.retention.w01.l0${lesson.number}.d7.${formLetter}.0${index+1}`,entry[1],entry[2],entry[3],entry[4]||{}))
  }));
}
Object.keys(CV1_LESSONS).forEach(id=>{ const lesson=CV1_LESSONS[id]; CV1_RETENTION_FORMS[`cv1.retention.w01.l0${lesson.number}.d7`] = cvD7Forms(id); });

const CV1_GATE_POOL = {
  'pool-a.l01.01':cvVariant(CV1_I.l01Order,'cv1.interaction.assessment.w01.pool-a.l01.01','Food-court display: choose the pointed item.',CV1_LINES.what3,CV1_LINES.orderThis),
  'pool-a.l01.02':cvVariant(CV1_I.l01Order,'cv1.interaction.assessment.w01.pool-a.l01.02','Lunch counter: choose chicken with holy basil.',CV1_LINES.what2,CV1_LINES.orderGaprao),
  'pool-a.l01.03':cvVariant(CV1_I.l01Spice,'cv1.interaction.assessment.w01.pool-a.l01.03','Basil stall: request non-spicy.',CV1_LINES.spice1,CV1_LINES.notSpicy),
  'pool-a.l01.04':cvVariant(CV1_I.l01Spice,'cv1.interaction.assessment.w01.pool-a.l01.04','Riverside noodle stall: request non-spicy.',CV1_LINES.spice3,CV1_LINES.notSpicy),
  'pool-a.l02.01':cvVariant(CV1_I.l02Here,'cv1.interaction.assessment.w01.pool-a.l02.01','Mall food-hall counter: choose to eat there.',CV1_LINES.service2,CV1_LINES.dineHere),
  'pool-a.l02.02':cvVariant(CV1_I.l02Water,'cv1.interaction.assessment.w01.pool-a.l02.02','Café cooler: order one water.',CV1_LINES.drink3,CV1_LINES.water),
  'pool-a.l02.03':cvVariant(CV1_I.l02Bill,'cv1.interaction.assessment.w01.pool-a.l02.03','A café drink is finished: initiate payment.',null,CV1_LINES.bill,{event:true,partnerReply:CV1_LINES.total}),
  'pool-a.l02.04':cvVariant(CV1_I.l02Here,'cv1.interaction.assessment.w01.pool-a.l02.04','Street counter: choose takeaway.',CV1_LINES.service3,CV1_LINES.takeaway),
  'pool-a.l03.01':cvVariant(CV1_I.l03Unknown,'cv1.interaction.assessment.w01.pool-a.l03.01','Drink cue: the meaning is unknown.',CV1_LINES.drink2,CV1_LINES.dontUnderstand,{resolution:{cue:CV1_LINES.drink2,response:CV1_LINES.water,rate:.72}}),
  'pool-a.l03.02':cvVariant(CV1_I.l03Slow,'cv1.interaction.assessment.w01.pool-a.l03.02','Spice cue: the rate is too fast.',CV1_LINES.spice2,CV1_LINES.slower,{resolution:{cue:CV1_LINES.spice2,response:CV1_LINES.notSpicy,rate:.58}}),
  'pool-a.l03.03':cvVariant(CV1_I.l03Again,'cv1.interaction.assessment.w01.pool-a.l03.03','Service cue: the playback was missed once.',CV1_LINES.service2,CV1_LINES.again,{resolution:{cue:CV1_LINES.service2,response:CV1_LINES.takeaway,rate:.72}}),
  'pool-a.l03.04':cvVariant(CV1_I.l03Slow,'cv1.interaction.assessment.w01.pool-a.l03.04','Breakfast-counter food cue: the rate is too fast.',CV1_LINES.what3,CV1_LINES.slower,{resolution:{cue:CV1_LINES.what3,response:CV1_LINES.orderThis,rate:.58}}),
  'pool-b.l01.01':cvVariant(CV1_I.l01Order,'cv1.interaction.assessment.w01.pool-b.l01.01','Canteen display: choose the pointed item.',CV1_LINES.what2,CV1_LINES.orderThis),
  'pool-b.l01.02':cvVariant(CV1_I.l01Order,'cv1.interaction.assessment.w01.pool-b.l01.02','Basil-food counter: choose chicken with holy basil.',CV1_LINES.what3,CV1_LINES.orderGaprao),
  'pool-b.l01.03':cvVariant(CV1_I.l01Spice,'cv1.interaction.assessment.w01.pool-b.l01.03','Night-market wok stall: request non-spicy.',CV1_LINES.spice2,CV1_LINES.notSpicy),
  'pool-b.l01.04':cvVariant(CV1_I.l01Order,'cv1.interaction.assessment.w01.pool-b.l01.04','Breakfast tray: choose the pointed item.',CV1_LINES.what1,CV1_LINES.orderThis),
  'pool-b.l02.01':cvVariant(CV1_I.l02Here,'cv1.interaction.assessment.w01.pool-b.l02.01','Café table: choose to eat there.',CV1_LINES.service3,CV1_LINES.dineHere),
  'pool-b.l02.02':cvVariant(CV1_I.l02Water,'cv1.interaction.assessment.w01.pool-b.l02.02','Food-court drink counter: order one water.',CV1_LINES.drink2,CV1_LINES.water),
  'pool-b.l02.03':cvVariant(CV1_I.l02Bill,'cv1.interaction.assessment.w01.pool-b.l02.03','A food-court meal is finished: initiate payment.',null,CV1_LINES.bill,{event:true,partnerReply:CV1_LINES.total}),
  'pool-b.l02.04':cvVariant(CV1_I.l02Here,'cv1.interaction.assessment.w01.pool-b.l02.04','Office-tower lunch counter: choose takeaway.',CV1_LINES.service2,CV1_LINES.takeaway),
  'pool-b.l03.01':cvVariant(CV1_I.l03Unknown,'cv1.interaction.assessment.w01.pool-b.l03.01','Spice cue: the meaning is unknown.',CV1_LINES.spice3,CV1_LINES.dontUnderstand,{resolution:{cue:CV1_LINES.spice3,response:CV1_LINES.notSpicy,rate:.72}}),
  'pool-b.l03.02':cvVariant(CV1_I.l03Slow,'cv1.interaction.assessment.w01.pool-b.l03.02','Evening-stall food cue: the rate is too fast.',CV1_LINES.what2,CV1_LINES.slower,{resolution:{cue:CV1_LINES.what2,response:CV1_LINES.orderThis,rate:.58}}),
  'pool-b.l03.03':cvVariant(CV1_I.l03Again,'cv1.interaction.assessment.w01.pool-b.l03.03','Drink cue: the playback was missed once.',CV1_LINES.drink3,CV1_LINES.again,{resolution:{cue:CV1_LINES.drink3,response:CV1_LINES.water,rate:.72}}),
  'pool-b.l03.04':cvVariant(CV1_I.l03Unknown,'cv1.interaction.assessment.w01.pool-b.l03.04','Station-kiosk total cue: the meaning is unknown.',CV1_LINES.total,CV1_LINES.dontUnderstand,{resolution:{cue:CV1_LINES.total,response:CV1_LINES.okay,rate:.72}})
};
const CV1_GATE_MANIFESTS = {
  a:['pool-a.l01.01','pool-a.l02.01','pool-a.l03.01','pool-a.l01.02','pool-a.l02.02','pool-a.l03.02','pool-a.l02.03','pool-a.l03.03'],
  b:['pool-b.l01.01','pool-b.l02.01','pool-b.l03.01','pool-b.l01.02','pool-b.l02.02','pool-b.l03.02','pool-b.l02.03','pool-b.l03.03'],
  c:['pool-a.l01.03','pool-a.l02.04','pool-a.l03.04','pool-a.l01.04','pool-b.l01.03','pool-b.l01.04','pool-b.l02.04','pool-b.l03.04']
};
const CV1_GATE_FORMS = Object.keys(CV1_GATE_MANIFESTS).map(letter=>({id:`cv1.form.gate.w01.${letter}`,revision:1,items:CV1_GATE_MANIFESTS[letter].map(id=>CV1_GATE_POOL[id])}));

const CV1_CONSOLIDATION = {
  id:CV1_WEEK1_CONSOLIDATION,revision:1,title:'Mix your Week 1 phrases',coreMinutes:8,ordinaryRepairMinutes:2,totalMinutes:10,minutes:10,formId:'cv1.form.consolidation.w01.a',
  interactions:[
    cvVariant(CV1_I.l03Unknown,'cv1.interaction.consolidation.w01.01','Food-counter cue: its meaning is unknown.',CV1_LINES.what2,CV1_LINES.dontUnderstand,{resolution:{cue:CV1_LINES.what2,response:CV1_LINES.orderThis,rate:.72}}),
    cvVariant(CV1_I.l03Slow,'cv1.interaction.consolidation.w01.02','Food-counter spice cue: it is too fast.',CV1_LINES.spice2,CV1_LINES.slower,{resolution:{cue:CV1_LINES.spice2,response:CV1_LINES.notSpicy,rate:.58}}),
    cvVariant(CV1_I.l01Order,'cv1.interaction.consolidation.w01.03','Food-court display: choose the pointed item.',CV1_LINES.what1,CV1_LINES.orderThis),
    cvVariant(CV1_I.l02Water,'cv1.interaction.consolidation.w01.04','Food-hall drink counter: order one water.',CV1_LINES.drink1,CV1_LINES.water)
  ],
  spoken:[CV1_LINES.orderThis,CV1_LINES.notSpicy,CV1_LINES.dineHere,CV1_LINES.water,CV1_LINES.bill,CV1_LINES.again],
  transfers:[CV1_LINES.orderGaprao,CV1_LINES.slowAgain]
};
const CV1_GATE_META = {id:CV1_WEEK1_GATE,revision:1,title:'Week 1 conversation check',coreMinutes:10,ordinaryRepairMinutes:2,totalMinutes:12,minutes:12};
const CV1_DELAYED_WORKLOADS = {
  d1:{revision:1,coreMinutes:2,ordinaryRepairMinutes:1,totalMinutes:3},
  d7:{revision:1,coreMinutes:4,ordinaryRepairMinutes:1,totalMinutes:5},
  d30:{revision:1,coreMinutes:6,ordinaryRepairMinutes:2,totalMinutes:8}
};

function cvD30Forms(){
  const specs={
    a:[[CV1_I.l01Order,CV1_LINES.what2,CV1_LINES.orderThis,'Breakfast stall: choose the pointed item.'],[CV1_I.l01Spice,CV1_LINES.spice3,CV1_LINES.notSpicy,'Lunch stall: request non-spicy.'],[CV1_I.l02Here,CV1_LINES.service2,CV1_LINES.dineHere,'Mall café: eat there.'],[CV1_I.l02Water,CV1_LINES.drink3,CV1_LINES.water,'Canteen cooler: order one water.'],[CV1_I.l03Unknown,CV1_LINES.total,CV1_LINES.dontUnderstand,'Canteen total cue: its meaning is unknown.',{resolution:{cue:CV1_LINES.total,response:CV1_LINES.okay,rate:.72}}],[CV1_I.l03Slow,CV1_LINES.drink2,CV1_LINES.slower,'Drink cue: the rate is too fast.',{resolution:{cue:CV1_LINES.drink2,response:CV1_LINES.water,rate:.58}}]],
    b:[[CV1_I.l01Order,CV1_LINES.what3,CV1_LINES.orderGaprao,'Office lunch counter: order basil chicken.'],[CV1_I.l01Spice,CV1_LINES.spice2,CV1_LINES.notSpicy,'Evening wok stall: request non-spicy.'],[CV1_I.l02Here,CV1_LINES.service3,CV1_LINES.takeaway,'Evening counter: choose takeaway.'],[CV1_I.l02Bill,null,CV1_LINES.bill,'Dinner is finished: initiate payment.',{event:true,partnerReply:CV1_LINES.total}],[CV1_I.l03Again,CV1_LINES.what2,CV1_LINES.again,'Food cue: the playback was missed once.',{resolution:{cue:CV1_LINES.what2,response:CV1_LINES.orderThis,rate:.72}}],[CV1_I.l03Slow,CV1_LINES.service2,CV1_LINES.slowAgain,'Service cue: a slow replay is explicitly needed.',{resolution:{cue:CV1_LINES.service2,response:CV1_LINES.takeaway,rate:.58}}]]
  };
  return ['a','b'].map(letter=>({id:`cv1.form.retention.w01.d30.${letter}`,items:specs[letter].map((x,index)=>cvVariant(x[0],`cv1.interaction.retention.w01.d30.${letter}.l0${Math.min(3,Math.floor(index/2)+1)}.0${index%2+1}`,x[3],x[1],x[2],x[4]||{})) }));
}
CV1_RETENTION_FORMS['cv1.retention.w01.d30']=cvD30Forms();
Object.values(CV1_RETENTION_FORMS).forEach(forms=>forms.forEach(form=>{form.revision=1;}));

// Preserve old form identities for imported history. New attempts use self-contained
// Week 1 food/service forms; no review waits for an unshipped taxi lesson.
const CV1_ARCHIVED_FORMS = {
  'cv1.retention.w01.l03.d7':CV1_RETENTION_FORMS['cv1.retention.w01.l03.d7']
};
CV1_RETENTION_FORMS['cv1.retention.w01.l03.d7'] = ['c','d'].map((letter,index)=>{
  const base = CV1_ARCHIVED_FORMS['cv1.retention.w01.l03.d7'][index];
  const items = base.items.slice(0,3).map((item,i)=>cvVariant(item,
    `cv1.interaction.retention.w01.l03.d7.${letter}.0${i+1}`,item.context,item.cue,item.response,{resolution:item.resolution}));
  const cue = index ? CV1_LINES.what2 : CV1_LINES.service1;
  const response = index ? CV1_LINES.orderThis : CV1_LINES.dineHere;
  items.push(cvVariant(index?CV1_I.l03Slow:CV1_I.l03Again,
    `cv1.interaction.retention.w01.l03.d7.${letter}.04`,
    index?'Lunch counter: the speaker is too fast.':'Canteen counter: you missed what was said.',
    cue,index?CV1_LINES.slower:CV1_LINES.again,{resolution:{cue,response,rate:index?.58:.72}}));
  return {id:`cv1.form.retention.w01.l03.d7.${letter}`,revision:1,items};
});

// Explicit teaching notes stay with authored content, never inferred by a renderer.
const CV1_PATTERN_NOTES = {
  [CV1_LINES.orderThis.id]:{title:'A request you can reuse',text:'In this food order, เอา introduces what you want. Replace อันนี้ (this one) with a food name you have learned; keep ครับ at the end.'},
  [CV1_LINES.notSpicy.id]:{title:'Change the meaning with ไม่',text:'เผ็ด describes spicy food. Putting ไม่ before it makes ไม่เผ็ด: not spicy. ครับ makes your reply polite.'},
  [CV1_LINES.dineHere.id]:{title:'Answer the choice',text:'The vendor offers here or takeaway. ทานที่นี่ answers that you will eat here; กลับบ้าน is the alternative you will practise later.'},
  [CV1_LINES.water.id]:{title:'Name the drink, then the amount',text:'น้ำเปล่า names plain water. ขวดหนึ่ง gives the amount: one bottle. Learn this order as a complete request.'},
  [CV1_LINES.bill.id]:{title:'You can start a turn',text:'When the meal is over, you can ask to pay without waiting for a question. คิดเงิน asks to calculate the bill; ด้วย softens this request.'},
  [CV1_LINES.dontUnderstand.id]:{title:'Reuse ไม่',text:'You met ไม่ in ไม่เผ็ด. Here it comes before เข้าใจ (understand): ไม่เข้าใจ means do not understand. Then listen again and finish your order.'},
  [CV1_LINES.slower.id]:{title:'Ask for an action',text:'พูด is speak; ช้าๆ asks for slowly. ได้ไหม turns this into a request. After the slower question, answer the original question.'},
  [CV1_LINES.again.id]:{title:'Change the requested action',text:'Keep พูด and ได้ไหม. อีกครั้ง asks for one more time. Listen to the repeat, then give the answer the vendor needs.'}
};
