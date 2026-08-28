/* Bangkok Conversation Foundation v1 — schema 2 and canonical Week 1 course.
   Device Thai TTS is the only pronunciation model. No recording is persisted or scored. */
'use strict';

const CV1_COURSE_ID = 'bangkok-conversation-foundation-v1';
const CV1_CURRICULUM_REVISION = 1;
const CV1_WEEK1_GATE = 'cv1.gate.w01';
const CV1_WEEK1_CONSOLIDATION = 'cv1.activity.w01.consolidation';
const CV1_SUPPORT_RATINGS = [
  {id:'full-support',label:'Full support'},
  {id:'some-support',label:'Some support'},
  {id:'minimal-support',label:'Minimal support'}
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
function cvInteraction(id, context, cue, response, options, intent, intentOptions, extra){
  const functionId=cvFunctionIdForResponse(response),event=!!(extra&&extra.event),distractors=options.filter(option=>option!==response.id).map((responseId,index)=>({responseId,misconceptionTag:index===0?'related-taught-function':'wrong-context-response'}));
  return Object.assign({id,revision:1,direction:event?'learner-led':'partner-led',functionId,cueFamilyId:cvCueFamilyId(cue),cueVariantId:cue?cue.id:null,eventId:event?(response.id===CV1_LINES.bill.id?'cv1.event.w01.l02.meal-finished':id.replace('cv1.interaction','cv1.event')):null,contextId:id.replace('cv1.interaction','cv1.context'),context,frameId:cvFrameIdForResponse(response),slotIds:[],acceptedSetId:functionId.replace('cv1.fn','cv1.accepted-set'),cue,response,options,distractors,intent,intentOptions}, extra || {});
}

const CV1_I = {
  l01Greeting:cvInteraction('cv1.interaction.lesson.w01.l01.a.01','Food stall: politely return the opening.',CV1_LINES.greeting,CV1_LINES.greeting,[CV1_LINES.greeting.id,CV1_LINES.thanks.id,CV1_LINES.okay.id],'A polite greeting.',['A polite greeting.','The price is being given.','The stall is closing.']),
  l01Order:cvInteraction('cv1.interaction.lesson.w01.l01.a.02','Food display: you want the item you are pointing at.',CV1_LINES.what1,CV1_LINES.orderThis,[CV1_LINES.orderThis.id,CV1_LINES.notSpicy.id,CV1_LINES.thanks.id],'The vendor is asking you to choose food.',['The vendor is asking you to choose food.','The vendor is asking about spice.','The vendor is giving the price.']),
  l01Spice:cvInteraction('cv1.interaction.lesson.w01.l01.a.03','Food stall: you want the non-spicy option.',CV1_LINES.spice1,CV1_LINES.notSpicy,[CV1_LINES.notSpicy.id,CV1_LINES.orderThis.id,CV1_LINES.okay.id],'The vendor is asking whether you want it spicy.',['The vendor is asking whether you want it spicy.','The vendor is asking where you will eat.','The vendor is asking which drink you want.']),
  l02Here:cvInteraction('cv1.interaction.lesson.w01.l02.a.01','Counter stall: you intend to eat there.',CV1_LINES.service1,CV1_LINES.dineHere,[CV1_LINES.dineHere.id,CV1_LINES.water.id,CV1_LINES.bill.id],'The vendor is asking whether the food is for here or takeaway.',['The vendor is asking whether the food is for here or takeaway.','The vendor is asking which drink you want.','The vendor is giving the total.']),
  l02Water:cvInteraction('cv1.interaction.lesson.w01.l02.a.02','Drink counter: you want one bottle of plain water.',CV1_LINES.drink1,CV1_LINES.water,[CV1_LINES.water.id,CV1_LINES.dineHere.id,CV1_LINES.bill.id],'The vendor is asking which drink you want.',['The vendor is asking which drink you want.','The vendor is asking where you will eat.','The meal has finished and you need to pay.']),
  l02Bill:cvInteraction('cv1.interaction.lesson.w01.l02.a.03','Your meal is finished and you want to pay.',null,CV1_LINES.bill,[CV1_LINES.bill.id,CV1_LINES.water.id,CV1_LINES.dineHere.id],'You should ask for the bill.',['You should ask for the bill.','You should order another drink.','You should choose where to eat.'],{event:true,partnerReply:CV1_LINES.total}),
  l03Unknown:cvInteraction('cv1.interaction.lesson.w01.l03.a.01','Food stall: you heard the cue but do not know what it means.',CV1_LINES.what1,CV1_LINES.dontUnderstand,[CV1_LINES.dontUnderstand.id,CV1_LINES.orderThis.id,CV1_LINES.thanks.id],'The meaning is unknown: signal that you do not understand.',['The meaning is unknown: signal that you do not understand.','The meaning is known but the speech is too fast.','The cue was understood earlier but missed once.'],{resolution:{cue:CV1_LINES.what1,response:CV1_LINES.orderThis,rate:.72}}),
  l03Slow:cvInteraction('cv1.interaction.lesson.w01.l03.a.02','Food stall: you know the choice function, but the speech is too fast.',CV1_LINES.what1,CV1_LINES.slower,[CV1_LINES.slower.id,CV1_LINES.water.id,CV1_LINES.thanks.id],'The meaning is known but the rate is too fast: ask for slower speech.',['The meaning is known but the rate is too fast: ask for slower speech.','The meaning is completely unknown.','The cue was understood earlier but missed once.'],{resolution:{cue:CV1_LINES.what1,response:CV1_LINES.orderThis,rate:.58}}),
  l03Again:cvInteraction('cv1.interaction.lesson.w01.l03.a.03','Food stall: you understood this kind of cue earlier, but missed this playback.',CV1_LINES.what1,CV1_LINES.again,[CV1_LINES.again.id,CV1_LINES.notSpicy.id,CV1_LINES.thanks.id],'The cue was understood earlier but missed once: ask to hear it again.',['The cue was understood earlier but missed once: ask to hear it again.','The meaning is completely unknown.','The speech is understood but specifically too fast.'],{resolution:{cue:CV1_LINES.what1,response:CV1_LINES.orderThis,rate:.72}})
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
    {speaker:'vendor',...CV1_LINES.okay},{speaker:'learner',chunk:CV1_LINES.thanks.id},
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
    id:'cv1.lesson.w01.l01.food-order',revision:1,number:1,title:'Order food: choose an item and spice level',coreMinutes:23,ordinaryRepairMinutes:4,totalMinutes:27,minutes:27,
    situation:'You are at a Bangkok food stall. First return the greeting, then point to the food you want and ask for it not spicy.',
    roles:'The vendor asks short questions. You answer as the customer. Every modeled line is male-polite.',
    meaning:[['Return the greeting','A polite routine, not a tested new frame.'],['Choose the food','Point and say you will have this one.'],['Set the spice level','Say that you do not want it spicy.']],
    interactions:[CV1_I.l01Greeting,CV1_I.l01Order,CV1_I.l01Spice],scene:CV1_SCENES.l01,
    substitution:{id:'cv1.substitution.w01.l01.gaprao-chicken',revision:1,from:CV1_LINES.orderThis,to:CV1_LINES.orderGaprao,label:'Replace “this one” with chicken with holy basil.'},
    record:CV1_LINES.orderThis
  },
  'cv1.lesson.w01.l02.food-options':{
    id:'cv1.lesson.w01.l02.food-options',revision:1,number:2,title:'Choose dine-in, order water and ask for the bill',coreMinutes:25,ordinaryRepairMinutes:4,totalMinutes:29,minutes:29,
    situation:'You are ordering at a counter stall. Choose to eat there and order water. After the meal, you start the payment turn yourself.',
    roles:'The vendor asks about service and drink. The bill request is learner-led after a visible “meal finished” break.',
    meaning:[['Choose where to eat','Say you will eat there.'],['Order a drink','Ask for one bottle of plain water.'],['Finish the meal','When the meal is over, ask for the bill.']],
    interactions:[CV1_I.l02Here,CV1_I.l02Water,CV1_I.l02Bill],scene:CV1_SCENES.l02,
    substitution:{id:'cv1.substitution.w01.l02.takeaway',revision:1,from:CV1_LINES.dineHere,to:CV1_LINES.takeaway,label:'Change “for here” to “takeaway”.'},
    record:CV1_LINES.bill
  },
  'cv1.lesson.w01.l03.repair':{
    id:'cv1.lesson.w01.l03.repair',revision:1,number:3,title:'Survive misunderstanding and return to the task',coreMinutes:26,ordinaryRepairMinutes:4,totalMinutes:30,minutes:30,
    situation:'You are at a food stall and communication breaks down in three different ways: unknown meaning, speech that is too fast, and one missed playback.',
    roles:'You choose a precise repair phrase. The partner repeats the original cue, then you still complete the original food task.',
    meaning:[['Meaning unknown','Say that you do not understand.'],['Too fast','Ask the speaker to slow down.'],['Missed once','Ask to hear the cue again.']],
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
  id:CV1_WEEK1_CONSOLIDATION,revision:1,title:'Week 1 consolidation: food and repair',coreMinutes:23,ordinaryRepairMinutes:5,totalMinutes:28,minutes:28,formId:'cv1.form.consolidation.w01.a',
  interactions:[
    cvVariant(CV1_I.l03Unknown,'cv1.interaction.consolidation.w01.01','Food-counter cue: its meaning is unknown.',CV1_LINES.what2,CV1_LINES.dontUnderstand,{resolution:{cue:CV1_LINES.what2,response:CV1_LINES.orderThis,rate:.72}}),
    cvVariant(CV1_I.l03Slow,'cv1.interaction.consolidation.w01.02','Food-counter spice cue: it is too fast.',CV1_LINES.spice2,CV1_LINES.slower,{resolution:{cue:CV1_LINES.spice2,response:CV1_LINES.notSpicy,rate:.58}}),
    cvVariant(CV1_I.l01Order,'cv1.interaction.consolidation.w01.03','Food-court display: choose the pointed item.',CV1_LINES.what1,CV1_LINES.orderThis),
    cvVariant(CV1_I.l02Water,'cv1.interaction.consolidation.w01.04','Food-hall drink counter: order one water.',CV1_LINES.drink1,CV1_LINES.water)
  ],
  spoken:[CV1_LINES.orderThis,CV1_LINES.notSpicy,CV1_LINES.dineHere,CV1_LINES.water,CV1_LINES.bill,CV1_LINES.again],
  transfers:[CV1_LINES.orderGaprao,CV1_LINES.slowAgain]
};
const CV1_GATE_META = {id:CV1_WEEK1_GATE,revision:1,title:'Week 1 real-life check',coreMinutes:22,ordinaryRepairMinutes:8,totalMinutes:30,minutes:30};
const CV1_DELAYED_WORKLOADS = {
  d1:{revision:1,coreMinutes:4,ordinaryRepairMinutes:2,totalMinutes:6},
  d7:{revision:1,coreMinutes:6,ordinaryRepairMinutes:2,totalMinutes:8},
  d30:{revision:1,coreMinutes:10,ordinaryRepairMinutes:4,totalMinutes:14}
};

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
  Object.values(CV1_LESSONS).forEach(lesson=>{const record=c.lessons[lesson.id];if(!record||!record.firstCompleted)return;['d1','d7'].forEach(stage=>{const id=`cv1.retention.w01.l0${lesson.number}.${stage}`,due=cvPlusDays(record.firstCompleted,stage==='d1'?1:7),candidate=cvPlain(raw.retention)&&raw.retention[id];if(candidate&&cvAssessmentRecordValid(candidate,CV1_RETENTION_FORMS[id],stage,due))c.retention[id]=cvClone(candidate);else{c.retention[id]=cvAssessmentRecord(null,due);if(candidate)issues.push('retention.'+id);}});});
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
  Object.keys(raw.retention).forEach(id=>{if(!CV1_RETENTION_FORMS[id])throw new Error('unknown conversation retention '+id);const stage=id.split('.').pop();if(!cvAssessmentRecordValid(raw.retention[id],CV1_RETENTION_FORMS[id],stage,raw.retention[id].due))throw new Error('invalid conversation retention '+id);});
  Object.keys(raw.weakness.items).forEach(id=>{const item=raw.weakness.items[id];if(!cvExactKeys(item,['seen','firstMisses','reviewMisses','correctStreak','lastSeen','lastMiss'])||['seen','firstMisses','reviewMisses','correctStreak'].some(key=>!Number.isInteger(item[key])||item[key]<0)||item.firstMisses>item.seen||!cvDayNotFuture(item.lastSeen)||!cvDayNotFuture(item.lastMiss))throw new Error('invalid conversation weakness item '+id);});
  Object.keys(raw.weakness.confusions).forEach(id=>{if(!Number.isInteger(raw.weakness.confusions[id])||raw.weakness.confusions[id]<1||!id.startsWith('cv1.interaction.')||!id.includes('>'))throw new Error('invalid conversation confusion '+id);});
  const knownMain=new Set(CV1_MAIN_SEQUENCE),knownRetention=new Set(Object.keys(CV1_RETENTION_FORMS));
  Object.keys(raw.days).forEach(day=>{const item=raw.days[day];if(!cvDayNotFuture(day)||!cvExactKeys(item,['secs','main','reviews','repairs'])||!Number.isFinite(item.secs)||item.secs<0||item.main!=null&&!knownMain.has(item.main)||!cvIdList(item.reviews,[...knownRetention],false)||!cvIdList(item.repairs,[...knownRetention,CV1_WEEK1_GATE],false))throw new Error('invalid conversation day '+day);});
  if(raw.completion!=null||raw.recovery!=null)throw new Error('v8.3.0 cannot import final completion or unresolved recovery authority');
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
    .filter(item=>item.id!=='cv1.retention.w01.l03.d7'||!!c.lessons['cv1.lesson.w02.l04.taxi-destination'])
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
    if(p.phase==='roleplay')return {stageId:`roleplay-${p.roleMode}`,stageIndex:p.step,itemIndex:p.roleIndex};
    if(p.phase==='resolution')return {stageId:`resolution-${p.resolution&&p.resolution.returnPhase||'guided'}`,stageIndex:p.resolution&&p.resolution.returnIndex||0,itemIndex:p.lesson.interactions.indexOf(p.resolution&&p.resolution.item)};
    const index=p.phase==='pairs'?p.pairIndex:p.phase==='guided'?p.guidedIndex:p.phase==='objective'?p.objectiveIndex:p.phase==='scene'&&p.scenePart1Done?1:0;
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
function cvLinePanel(line,label){
  return `<div class="conversation-turn learner"><div class="conversation-speaker">${esc(label||'You say')}</div><div class="p-en"><b>${esc(line.en)}</b></div><div class="p-thai" lang="th">${esc(line.thai)}</div><div class="p-tr">${esc(line.tr)}</div>${conversationSegmentsHtml(line.segments,'Build the phrase')}</div>`;
}
function cvPronunciationKeyHtml(open){
  return `<details class="conversation-pronunciation-key" ${open?'open':''}><summary>Pronunciation-spelling key (optional)</summary><div class="mt-10"><b>This is an English reading aid, not Thai spelling or a pronunciation score.</b></div><div class="sub mt-10"><b>bp</b> and <b>dt</b> are the unpuffed sounds between English b/p and d/t. <b>ph</b>, <b>th</b> and <b>kh</b> include a puff of air. <b>ng</b> can begin a Thai word. <b>ʉ</b> is a central vowel with rounded lips. Doubled vowels such as <b>aa</b>, <b>ii</b> and <b>uu</b> are long.</div><div class="sub mt-10">Pitch marks: unmarked = mid, grave (à) = low, circumflex (â) = falling, acute (á) = high and caron (ǎ) = rising. Keep this key as support; it is never tested.</div></details>`;
}
function cvPlayLineButton(line,label,id,rate){
  return `<button class="btn ghost" id="${escAttr(id)}">▶ ${esc(label)}</button>`;
}
function cvBindLineButton(id,line,rate){ const button=el(id); if(button) button.onclick=()=>speak(line.thai,button,rate||line.rate||.72); }
function cvLessonPhases(lesson){
  return 2 + lesson.interactions.length + 1 + lesson.interactions.length + (lesson.interactions.length*2) + 1 + lesson.interactions.length*2 + 2;
}
function cvSetCourseProgress(p){ setProg(Math.round(100*Math.min(p.step||0,p.total||1)/Math.max(1,p.total||1))); }
function cvAdvanceLesson(phase){ clearLocalRecording(); player.phase=phase; player.step++;cvPersistCourseResume(player);renderConversationCourseLesson(); }
function startConversationCourseLesson(taskId){
  const lesson=CV1_LESSONS[taskId];
  if(!lesson) return false;
  const c=cvConversation(),record=c.lessons[taskId],resumable=!(record&&record.firstCompleted)&&CV1_MAIN_SEQUENCE[c.pace.cursor]===taskId;
  player={type:'conversation-course',kind:'lesson',taskKind:'lesson',taskId,lesson,scene:lesson.scene,phase:'intro',step:0,total:cvLessonPhases(lesson),pairIndex:0,pairPlayback:{},guidedIndex:0,objectiveIndex:0,roleIndex:0,roleMode:'supported',scenePart1Done:false,completed:false,resumable,startedDay:bangkokDayStr(),attemptOrdinal:(record&&record.runs||0)+1,runSeed:`${taskId}|${(record&&record.runs||0)+1}`,
    optionOffset:(lesson.number-1)%3,optionOrders:{},guidedAttempts:{},objectiveAttempts:{},resolution:null,evidence:cvLessonEvidence()};
  cvPersistCourseResume(player);openOverlay();renderConversationCourseLesson();return true;
}
function renderConversationCourseLesson(){
  const p=player;if(!p||p.type!=='conversation-course'||p.kind!=='lesson') return;
  stopConversationSpeech();cvSetCourseProgress(p);
  if(p.phase==='intro') return cvRenderLessonIntro(p);
  if(p.phase==='map') return cvRenderLessonMap(p);
  if(p.phase==='pairs') return cvRenderLessonPair(p);
  if(p.phase==='scene') return cvRenderLessonScene(p);
  if(p.phase==='guided') return cvRenderLessonGuided(p);
  if(p.phase==='resolution') return cvRenderRepairResolution(p);
  if(p.phase==='objective') return cvRenderLessonObjective(p);
  if(p.phase==='substitution') return cvRenderLessonSubstitution(p);
  if(p.phase==='roleplay') return cvRenderLessonRoleplay(p);
  if(p.phase==='record') return cvRenderLessonRecord(p);
  if(p.phase==='rating') return cvRenderLessonRating(p);
}
function cvRenderLessonIntro(p){
  el('stage').innerHTML=`<div class="center"><div class="eyebrow">Week 1 · Lesson ${p.lesson.number} · about ${p.lesson.minutes} min</div><h2>${esc(p.lesson.title)}</h2></div>
    <div class="notebox"><div class="eyebrow">Situation first</div><p>${esc(p.lesson.situation)}</p><p class="sub">${esc(p.lesson.roles)}</p></div>
    <div class="notebox"><b>No Thai knowledge or reading is assumed.</b><div class="sub">You will learn each cue and reply before the complete exchange plays. Your device generates the Thai model; native recordings and native-speaker review are not available or required, and nothing is pronunciation-scored.</div></div>
    ${cvPronunciationKeyHtml(p.lesson.number===1&&p.resumable)}
    <div class="stage-actions"><button class="btn full" id="cv-next">See what each turn does →</button></div>`;
  el('cv-next').onclick=()=>cvAdvanceLesson('map');
}
function cvRenderLessonMap(p){
  el('stage').innerHTML=`<div class="center"><div class="eyebrow">Understand before listening</div><h2>What you will do</h2><p class="sub">These are the meanings and jobs. The full Thai conversation is still withheld.</p></div>
    <div class="onboarding-route-list">${p.lesson.meaning.map((row,index)=>{const response=p.lesson.interactions[index].response,role=response.role==='routine'?'Routine reply':response.role==='transfer-only'?'Controlled transfer':'Active reply';return `<div><span class="eyebrow">Recognition cue → ${esc(role)}</span><br><b>${esc(row[0])}</b><br><span class="sub">${esc(row[1])}</span></div>`;}).join('')}</div>
    <div class="stage-actions"><button class="btn full" id="cv-next">Learn the first cue and reply →</button></div>`;
  el('cv-next').onclick=()=>{p.pairIndex=0;cvAdvanceLesson('pairs');};
}
function cvRenderLessonPair(p){
  const item=p.lesson.interactions[p.pairIndex];
  if(!item){ p.phase='scene';p.step++;cvPersistCourseResume(p);return renderConversationCourseLesson(); }
  const played=p.evidence.pairIdsPlayed.includes(item.id),heard=p.pairPlayback[item.id]||{cue:false,reply:false};
  const cueHtml=item.event?`<div class="conversation-turn vendor"><div class="conversation-speaker">Visible event — you start</div><div class="p-en"><b>${esc(item.context)}</b></div><div class="sub">There is no invented partner cue before your request.</div></div>`:`<div class="conversation-turn vendor"><div class="conversation-speaker">Partner cue</div><div class="p-en"><b>${esc(item.cue.en)}</b></div><div class="p-thai" lang="th">${esc(item.cue.thai)}</div><div class="p-tr">${esc(item.cue.tr)}</div>${conversationSegmentsHtml(item.cue.segments,'Build the cue')}</div>`;
  el('stage').innerHTML=`<div class="center"><div class="eyebrow">Meaning pair · ${p.pairIndex+1} of ${p.lesson.interactions.length}</div><h2>${esc(item.context)}</h2><p class="sub">${item.event?'Use the visible event to start the request.':'Hear the partner cue, answer in your own time, then choose when to hear the model reply.'}</p></div>
    <div class="conversation-pair">${cueHtml}<div class="conversation-turn-gap" aria-hidden="true">pause · then you answer</div>${cvLinePanel(item.response,'You say')}</div>
    ${cvPronunciationKeyHtml(false)}
    <div class="conversation-playback-actions"><button class="btn ghost" id="cv-pair-cue">▶ ${item.event?'Hear your request model':'Hear the partner cue'}</button><button class="btn ghost" id="cv-pair-reply" ${heard.cue||played?'':'disabled'}>▶ ${item.event?'Hear the actual partner reply':'Hear the model reply'}</button><button class="btn ghost" id="cv-pair-stop" data-conversation-stop>Stop</button></div>
    <div class="stage-actions"><button class="btn full" id="cv-next" ${played?'':'disabled'}>${played?'Next pair':'Hear both sides first'} →</button></div>`;
  const cueButton=el('cv-pair-cue'),replyButton=el('cv-pair-reply'),next=el('cv-next'),markComplete=()=>{if(heard.cue&&heard.reply){cvPushUnique(p.evidence.pairIdsPlayed,item.id);cvPersistCourseResume(p);next.disabled=false;next.textContent='Next pair →';}};
  const stillHere=()=>player===p&&p.phase==='pairs'&&p.lesson.interactions[p.pairIndex]===item;
  cueButton.onclick=()=>{replyButton.disabled=true;speak((item.event?item.response:item.cue).thai,cueButton,item.event?item.response.rate:item.cue.rate,ok=>{if(!ok||!stillHere())return;heard.cue=true;p.pairPlayback[item.id]=heard;replyButton.disabled=false;markComplete();});};
  replyButton.onclick=()=>{if(!heard.cue&&!played)return;speak((item.event?(item.partnerReply||CV1_LINES.okay):item.response).thai,replyButton,(item.event?(item.partnerReply||CV1_LINES.okay):item.response).rate,ok=>{if(!ok||!stillHere())return;heard.reply=true;p.pairPlayback[item.id]=heard;markComplete();});};
  el('cv-pair-stop').onclick=()=>{stopConversationSpeech();try{speechSynthesis.cancel();}catch(_){}};
  next.onclick=()=>{if(!p.evidence.pairIdsPlayed.includes(item.id))return;p.pairIndex++;p.step++;cvPersistCourseResume(p);renderConversationCourseLesson();};
}
function cvRenderLessonScene(p){
  const heard=p.evidence.sceneIdsPlayed.includes(p.lesson.scene.id);
  const mealBreak=p.lesson.number===2&&p.scenePart1Done&&!heard;
  el('stage').innerHTML=`<div class="center"><div class="eyebrow">Complete exchange</div><h2>Now every turn has meaning</h2><p class="sub">The conversation only appears after the cue/reply teaching. Playback pauses between speakers.</p></div>
    ${p.lesson.number===2?`<div class="notebox"><b>${mealBreak?'Meal finished — you choose when to begin payment.':'Part 1: order food and water.'}</b><div class="sub">${mealBreak?'This visible learner-controlled break separates eating from asking for the bill.':'Playback will stop for the meal before the learner-led bill request.'}</div></div>`:''}
    <div class="conversation-playback-panel"><div class="conversation-now-playing" id="conversation-now-playing" role="status" aria-live="polite"><div class="conversation-speaker">Ready to play</div><div class="p-en"><b>The current turn will appear here.</b></div></div><div class="conversation-playback-actions"><button class="btn ghost" id="cv-scene-play">${heard?'↻ Play again from turn 1':mealBreak?'▶ Continue after eating':'▶ Play full exchange'}</button><button class="btn ghost" id="cv-scene-stop" data-conversation-stop disabled>Stop</button></div><div class="sub meta-mini mt-10">The same device voice plays both roles; labels and pauses show the turn change.</div></div>
    ${conversationTranscriptHtml(p.lesson.scene)}
    <div class="stage-actions"><button class="btn full" id="cv-next" ${heard?'':'disabled'}>${heard?'Practise the replies':'Hear the complete exchange first'} →</button></div>`;
  const play=el('cv-scene-play'),next=el('cv-next');
  const turns=p.lesson.number===2?(p.scenePart1Done?p.lesson.scene.turns.slice(6):p.lesson.scene.turns.slice(0,6)):p.lesson.scene.turns;
  play.onclick=()=>playConversationTurns(p,turns,play,{stopButton:el('cv-scene-stop'),onComplete:()=>{if(p.lesson.number===2&&!p.scenePart1Done){p.scenePart1Done=true;cvPersistCourseResume(p);renderConversationCourseLesson();return;}cvPushUnique(p.evidence.sceneIdsPlayed,p.lesson.scene.id);cvPersistCourseResume(p);next.disabled=false;next.textContent='Practise the replies →';}});
  next.onclick=()=>{if(!p.evidence.sceneIdsPlayed.includes(p.lesson.scene.id))return;p.guidedIndex=0;cvAdvanceLesson('guided');};
}
function cvOptionOrder(p,item,index){
  const key=item.id+'@'+index;if(p.optionOrders[key])return p.optionOrders[key];
  const options=item.options.slice(),answer=item.response.id,wrong=options.filter(id=>id!==answer),pos=(p.optionOffset+index)%3;
  const out=wrong.slice();out.splice(pos,0,answer);p.optionOrders[key]=out;return out;
}
function cvGuidedOptionHtml(id){ const line=CV1_RESPONSE_BY_ID[id];return `<button class="q-opt" data-cv-guided="${escAttr(id)}"><span class="thai" lang="th">${esc(line.thai)}</span><span class="p-tr">${esc(line.tr)}</span><span class="sub">${esc(line.en)}</span></button>`; }
function cvRenderLessonGuided(p){
  const item=p.lesson.interactions[p.guidedIndex];
  if(!item){p.objectives=cvBuildObjectives(p.lesson.interactions,`cv1.form.lesson.w01.l0${p.lesson.number}.a`,'lesson');p.evidence.objective.itemIds=p.objectives.map(x=>x.id);p.objectiveIndex=0;return cvAdvanceLesson('objective');}
  const attempted=!!p.guidedAttempts[item.id];
  el('stage').innerHTML=`<div class="q-prompt"><div class="eyebrow">Guided response · ${p.guidedIndex+1} of ${p.lesson.interactions.length}</div><h2>${esc(item.context)}</h2>${item.event?'<div class="notebox"><b>The meal/event tells you to start. There is no partner line.</b></div>':`<div class="p-en">${esc(item.cue.en)}</div><div class="p-thai" lang="th">${esc(item.cue.thai)}</div><div class="p-tr">${esc(item.cue.tr)}</div><div class="audio-inline">${speakBtn(item.cue.thai,'Hear the partner')}</div>`}</div>
    <div class="q-options">${cvOptionOrder(p,item,p.guidedIndex).map(cvGuidedOptionHtml).join('')}</div><div class="q-feedback" id="cv-feedback" role="status" aria-live="polite"></div>`;
  el('stage').querySelectorAll('[data-cv-guided]').forEach(button=>button.onclick=()=>{
    const selected=button.dataset.cvGuided,ok=selected===item.response.id,first=!attempted&&!p.guidedAttempts[item.id];
    if(first){cvPushUnique(p.evidence.responsePromptIds,item.id);p.guidedAttempts[item.id]=true;if(ok)cvPushUnique(p.evidence.responseFirstCorrectIds,item.id);else cvPushUnique(p.evidence.responseRepairIds,item.id);cvPersistCourseResume(p);}
    el('stage').querySelectorAll('[data-cv-guided]').forEach(x=>{x.disabled=true;if(x.dataset.cvGuided===item.response.id)x.classList.add('correct');});if(!ok)button.classList.add('wrong');
    const fb=el('cv-feedback');fb.className='q-feedback '+(ok?'ok answer-correct':'no answer-wrong');
    if(!ok){fb.innerHTML=`<b>That reply belongs to another moment.</b><div class="p-en">Here you need: ${esc(item.response.en)}</div>${cvLinePanel(item.response,'Repair model')}<div class="stage-actions"><button class="btn full" id="cv-retry">Say it, then retry this cue</button></div>`;el('cv-retry').onclick=()=>renderConversationCourseLesson();return;}
    fb.innerHTML=`<b>That reply fits.</b>${cvLinePanel(item.response,'Model reply')}<div class="stage-actions"><button class="btn full" id="cv-next">${item.resolution?'Replay and finish the original task':'Next prompt'} →</button></div>`;
    speak(item.response.thai);
    el('cv-next').onclick=()=>{if(item.resolution){p.resolution={item,returnPhase:'guided',returnIndex:p.guidedIndex+1};p.phase='resolution';cvPersistCourseResume(p);renderConversationCourseLesson();}else{p.guidedIndex++;p.step++;cvPersistCourseResume(p);renderConversationCourseLesson();}};
  });
}
function cvRenderRepairResolution(p){
  const r=p.resolution,item=r.item,res=item.resolution;
  el('stage').innerHTML=`<div class="center"><div class="eyebrow">Repair is not the end</div><h2>Return to the original task</h2><p class="sub">The partner now replays the original cue${res.rate<.7?' slowly':''}. Answer the food or service task before this interaction clears.</p></div>
    <div class="conversation-turn vendor"><div class="p-en"><b>${esc(res.cue.en)}</b></div><div class="p-thai" lang="th">${esc(res.cue.thai)}</div><div class="p-tr">${esc(res.cue.tr)}</div><button class="btn full ghost" id="cv-resolution-cue">▶ Hear the repaired cue</button></div>
    <div class="cv-support-hidden" id="cv-resolution-answer"><b>Answer aloud before revealing the model.</b></div>
    <div class="stage-actions"><button class="btn full" id="cv-resolution-reveal">I answered · show the original-task reply</button></div>`;
  cvBindLineButton('cv-resolution-cue',res.cue,res.rate);
  el('cv-resolution-reveal').onclick=()=>{
    el('cv-resolution-answer').outerHTML=cvLinePanel(res.response,'Original task completed');
    const actions=el('stage').querySelector('.stage-actions');actions.innerHTML='<button class="btn full" id="cv-resolution-next">Continue →</button>';
    speak(res.response.thai);
    el('cv-resolution-next').onclick=()=>{p.phase=r.returnPhase;if(r.returnPhase==='guided')p.guidedIndex=r.returnIndex;else p.objectiveIndex=r.returnIndex;p.resolution=null;p.step++;cvPersistCourseResume(p);renderConversationCourseLesson();};
  };
}
function cvAudioChoiceRows(p,objective){
  return cvOptionOrder(p,objective.interaction,p.objectiveIndex).map((id,index)=>`<div class="cv-audio-option"><button class="btn ghost" data-cv-hear="${escAttr(id)}">▶ Hear option ${String.fromCharCode(65+index)}</button><button class="btn" data-cv-choose="${escAttr(id)}">Choose ${String.fromCharCode(65+index)}</button></div>`).join('');
}
function cvRenderLessonObjective(p){
  const objective=p.objectives[p.objectiveIndex];
  if(!objective){p.phase='substitution';p.step++;cvPersistCourseResume(p);return renderConversationCourseLesson();}
  const item=objective.interaction,first=!p.objectiveAttempts[objective.id],intent=objective.direction==='intent'||objective.direction==='event-request'||objective.direction==='partner-reply-intent';
  const partnerTotal=objective.direction==='partner-reply-intent';
  const choices=partnerTotal?['The vendor gives the total.','The vendor asks where you will eat.','The vendor asks you to choose a drink.']:item.intentOptions;
  const answer=partnerTotal?'The vendor gives the total.':item.intent;
  el('stage').innerHTML=`<div class="q-prompt"><div class="eyebrow">Listening check · ${p.objectiveIndex+1} of ${p.objectives.length}</div><h2>${esc(item.context)}</h2><p class="sub">${intent?'Hear the cue, then choose its job.':'Hear each possible reply. Choose the one that fits. Thai text and pronunciation stay hidden until feedback.'}</p>${item.event&&!partnerTotal?'<div class="notebox"><b>Visible event: you need to act now.</b></div>':`<button class="btn full ghost" id="cv-objective-cue">▶ Hear the ${partnerTotal?'partner reply':'cue'}</button>`}</div>
    ${intent?`<div class="q-options">${choices.map(choice=>`<button class="q-opt" data-cv-intent="${escAttr(choice)}">${esc(choice)}</button>`).join('')}</div>`:`<div>${cvAudioChoiceRows(p,objective)}</div>`}<div class="q-feedback" id="cv-feedback" role="status" aria-live="polite"></div>`;
  if(!item.event||partnerTotal)cvBindLineButton('cv-objective-cue',partnerTotal?(item.partnerReply||CV1_LINES.total):item.cue);
  el('stage').querySelectorAll('[data-cv-hear]').forEach(button=>button.onclick=()=>speak(CV1_RESPONSE_BY_ID[button.dataset.cvHear].thai,button));
  const answerChoice=selected=>{
    const ok=intent?selected===answer:selected===item.response.id;
    if(first){p.objectiveAttempts[objective.id]=true;cvPushUnique(p.evidence.objective.answeredIds,objective.id);if(ok)cvPushUnique(p.evidence.objective.firstCorrectIds,objective.id);cvWeaknessSeen(cvConversation(),objective,ok,selected);cvPersistCourseResume(p);}
    el('stage').querySelectorAll('[data-cv-intent],[data-cv-choose]').forEach(x=>x.disabled=true);
    const fb=el('cv-feedback');fb.className='q-feedback '+(ok?'ok answer-correct':'no answer-wrong');
    if(!ok){fb.innerHTML=`<b>First attempt recorded. Now clear the miss.</b><div class="p-en">${esc(intent?answer:item.response.en)}</div>${intent?(!item.event?`<div class="p-thai" lang="th">${esc((partnerTotal?(item.partnerReply||CV1_LINES.total):item.cue).thai)}</div><div class="p-tr">${esc((partnerTotal?(item.partnerReply||CV1_LINES.total):item.cue).tr)}</div>`:cvLinePanel(item.response,'Useful request')):cvLinePanel(item.response,'Correct reply')}<div class="stage-actions"><button class="btn full" id="cv-retry">Retry this item</button></div>`;el('cv-retry').onclick=()=>renderConversationCourseLesson();return;}
    cvPushUnique(p.evidence.objective.clearedIds,objective.id);cvPersistCourseResume(p);
    fb.innerHTML=`<b>${first?'Correct on the first attempt.':'Miss cleared.'}</b>${intent?'<div class="p-en">'+esc(answer)+'</div>':cvLinePanel(item.response,'Useful reply')}<div class="stage-actions"><button class="btn full" id="cv-next">${item.resolution&&objective.direction==='response'?'Finish the original task':'Continue'} →</button></div>`;
    el('cv-next').onclick=()=>{if(item.resolution&&objective.direction==='response'){p.resolution={item,returnPhase:'objective',returnIndex:p.objectiveIndex+1};p.phase='resolution';cvPersistCourseResume(p);renderConversationCourseLesson();}else{p.objectiveIndex++;p.step++;cvPersistCourseResume(p);renderConversationCourseLesson();}};
  };
  el('stage').querySelectorAll('[data-cv-intent]').forEach(button=>button.onclick=()=>answerChoice(button.dataset.cvIntent));
  el('stage').querySelectorAll('[data-cv-choose]').forEach(button=>button.onclick=()=>answerChoice(button.dataset.cvChoose));
}
function cvRenderLessonSubstitution(p){
  const sub=p.lesson.substitution,done=p.evidence.substitutionIds.includes(sub.id);
  el('stage').innerHTML=`<div class="center"><div class="eyebrow">Controlled substitution</div><h2>${esc(sub.label)}</h2><p class="sub">See and hear the changed slot before producing it. Nothing is tested cold.</p></div>
    ${cvLinePanel(sub.from,'Phrase you know')}${cvLinePanel(sub.to,'Changed phrase')}
    <div class="conversation-playback-actions">${cvPlayLineButton(sub.from,'Hear the original','cv-sub-from')}${cvPlayLineButton(sub.to,'Hear the changed phrase','cv-sub-to')}</div>
    <div class="cv-support-hidden"><b>Say the changed phrase aloud with the support above.</b></div>
    <div class="stage-actions"><button class="btn full" id="cv-next">${done?'Continue':'I said the changed phrase'} →</button></div>`;
  cvBindLineButton('cv-sub-from',sub.from);cvBindLineButton('cv-sub-to',sub.to);
  el('cv-next').onclick=()=>{cvPushUnique(p.evidence.substitutionIds,sub.id);p.roleMode='supported';p.roleIndex=0;cvAdvanceLesson('roleplay');};
}
function cvRolePromptId(p,item){return `cv1.spoken.lesson.w01.l0${p.lesson.number}.${p.roleMode}.${String(p.roleIndex+1).padStart(2,'0')}`;}
function cvChunkSupportHtml(line){
  return `<div class="onboarding-route-list">${line.segments.filter(part=>part.en!=='male polite ending').map(part=>`<div><b>${esc(part.en)}</b><br><span lang="th">${esc(part.thai)}</span> · <span class="p-tr">${esc(part.tr)}</span></div>`).join('')}</div><div class="sub meta-mini mt-10">The complete joined reply stays hidden until you answer.</div>`;
}
function cvRenderLessonRoleplay(p){
  const item=p.lesson.interactions[p.roleIndex];
  if(!item){if(p.roleMode==='supported'){p.roleMode='reduced';p.roleIndex=0;p.step++;cvPersistCourseResume(p);return renderConversationCourseLesson();}p.phase='record';p.step++;cvPersistCourseResume(p);return renderConversationCourseLesson();}
  const promptId=cvRolePromptId(p,item),revealed=p.modelRevealIds&&p.modelRevealIds[promptId];
  el('stage').innerHTML=`<div class="q-prompt"><div class="eyebrow">${p.roleMode==='supported'?'Supported':'Reduced-support'} role-play · ${p.roleIndex+1} of ${p.lesson.interactions.length}</div><h2>${esc(item.context)}</h2>${item.event?'<div class="notebox"><b>You start after the visible event.</b></div>':`<button class="btn full ghost" id="cv-role-cue">▶ Hear the partner cue</button>`}<details class="conversation-transcript-drawer" id="cv-role-support"><summary>${p.roleMode==='supported'?'Need help? Show cue pronunciation':'Need help? Show response chunks'}</summary>${p.roleMode==='supported'?(item.cue?`<div class="p-thai" lang="th">${esc(item.cue.thai)}</div><div class="p-tr">${esc(item.cue.tr)}</div>`:'<div class="sub">The event tells you to begin.</div>'):cvChunkSupportHtml(item.response)}</details></div>
    ${revealed?cvLinePanel(item.response,'Model reply'):'<div class="cv-support-hidden"><b>Answer aloud before revealing the model.</b><div class="sub">This is speaking participation, not pronunciation scoring.</div></div>'}
    <div class="stage-actions"><button class="btn full" id="cv-role-action">${revealed?'I repeated the model · continue':'I answered aloud · show the model'}</button></div>`;
  if(item.cue)cvBindLineButton('cv-role-cue',item.cue);
  const details=el('cv-role-support');if(details)details.addEventListener('toggle',()=>{if(details.open){cvPushUnique(p.evidence.supportOpenedIds,promptId);cvPersistCourseResume(p);}});
  el('cv-role-action').onclick=()=>{
    if(!p.modelRevealIds)p.modelRevealIds={};
    if(!revealed){cvPushUnique(p.evidence.spokenBeforeRevealIds,promptId);cvPushUnique(p.evidence.modelRevealIds,promptId);p.modelRevealIds[promptId]=true;cvPersistCourseResume(p);speak(item.response.thai);renderConversationCourseLesson();return;}
    p.roleIndex++;p.step++;cvPersistCourseResume(p);renderConversationCourseLesson();
  };
}
function cvRenderLessonRecord(p){
  const line=p.lesson.record;
  el('stage').innerHTML=`<div class="center"><div class="eyebrow">Optional one-phrase comparison</div><h2>Record one useful phrase</h2><p class="sub">Speaking aloud is required practice; microphone recording is optional, private and temporary.</p></div>${cvLinePanel(line,'Your phrase')}
    <div class="compare-box"><div class="row" style="justify-content:center;gap:10px;margin-bottom:12px">${speakBtn(line.thai,'Hear the device model')}</div><button class="btn full ghost record-btn" id="cv-record">● Record yourself</button><audio class="own-audio" id="cv-own" controls style="display:none"></audio><div class="sub meta-mini mt-10">Nothing is uploaded, saved or scored. If the microphone is unavailable, say it aloud and continue.</div></div>
    <div class="stage-actions"><button class="btn full" id="cv-next">I practised it · finish lesson →</button></div>`;
  el('cv-record').onclick=()=>{p.evidence.recordingAttempted=true;cvPersistCourseResume(p);toggleLocalRecording(el('cv-record'),el('cv-own'),LOCAL_RECORDING_LIMIT_MS);};
  el('cv-next').onclick=()=>{p.evidence.recordStepCompleted=true;cvAdvanceLesson('rating');};
}
function cvRenderLessonRating(p){
  el('stage').innerHTML=`<div class="center"><div class="eyebrow">Lesson run complete</div><h2>How much support did you need?</h2><p class="sub">Private self-rating only; it is not a pronunciation or mastery score.</p></div><div class="q-options">${CV1_SUPPORT_RATINGS.map(item=>`<button class="q-opt" data-cv-rating="${escAttr(item.id)}">${esc(item.label)}</button>`).join('')}</div>`;
  el('stage').querySelectorAll('[data-cv-rating]').forEach(button=>button.onclick=()=>cvFinishLesson(p,button.dataset.cvRating));
}
function cvLessonEvidenceComplete(p){
  const required=p.lesson.interactions.map(x=>x.id),objectiveIds=p.objectives.map(x=>x.id);
  return required.every(id=>p.evidence.pairIdsPlayed.includes(id)&&p.evidence.responsePromptIds.includes(id))&&p.evidence.sceneIdsPlayed.includes(p.lesson.scene.id)&&
    objectiveIds.every(id=>p.evidence.objective.answeredIds.includes(id)&&p.evidence.objective.clearedIds.includes(id))&&p.evidence.substitutionIds.includes(p.lesson.substitution.id)&&
    p.evidence.spokenBeforeRevealIds.length===required.length*2&&p.evidence.modelRevealIds.length===required.length*2&&p.evidence.recordStepCompleted;
}
function cvFinishLesson(p,rating){
  if(!cvLessonEvidenceComplete(p)){toast('A required lesson interaction is still incomplete.');return false;}
  const c=cvConversation(),day=bangkokDayStr(),old=c.lessons[p.taskId],rec=cvLessonRecord(old),correct=p.evidence.objective.firstCorrectIds.length,total=p.evidence.objective.itemIds.length,pct=Math.round(100*correct/total);
  const completedEvidence=cvClone(p.evidence);delete completedEvidence.objective.answeredIds;
  rec.runs++;rec.objectiveAttempts+=total;rec.firstPct=rec.firstPct==null?pct:rec.firstPct;rec.lastPct=pct;rec.bestPct=Math.max(rec.bestPct==null?0:rec.bestPct,pct);rec.firstCompleted=rec.firstCompleted||day;rec.lastCompleted=day;rec.completedRevision=1;rec.selfRating=rating;rec.lastRun=Object.assign({completed:day,revision:1},completedEvidence);c.lessons[p.taskId]=rec;
  if(!old||!old.firstCompleted)cvScheduleLessonRetention(c,p.lesson,day);
  const credited=cvClaimMainCredit(c,p.taskId,day);c.resume=null;p.completed=true;saveState();setProg(100);sfxComplete();
  el('stage').innerHTML=`<div class="result-big">Lesson ${p.lesson.number} complete</div><div class="result-sub">${esc(p.lesson.title)}</div><div class="notebox"><b>First-pass listening: ${correct}/${total}</b><div class="sub">Every miss was cleared before completion. The percentage is evidence, not a lesson gate.</div></div><div class="result-sub meta-mini">${credited?'Today’s main conversation task is complete.':'Replay recorded; today’s main credit was already used.'} +1 and +7 checks use the actual completion date.</div><div class="stage-actions"><button class="btn full" id="cv-done">Done</button><button class="btn full ghost" id="cv-again">Replay lesson</button></div>`;
  el('cv-done').onclick=()=>{closeOverlay();renderHome();};el('cv-again').onclick=()=>startConversationCourseLesson(p.taskId);return true;
}

function cvD30Forms(){
  const specs={
    a:[[CV1_I.l01Order,CV1_LINES.what2,CV1_LINES.orderThis,'Breakfast stall: choose the pointed item.'],[CV1_I.l01Spice,CV1_LINES.spice3,CV1_LINES.notSpicy,'Lunch stall: request non-spicy.'],[CV1_I.l02Here,CV1_LINES.service2,CV1_LINES.dineHere,'Mall café: eat there.'],[CV1_I.l02Water,CV1_LINES.drink3,CV1_LINES.water,'Canteen cooler: order one water.'],[CV1_I.l03Unknown,CV1_LINES.total,CV1_LINES.dontUnderstand,'Canteen total cue: its meaning is unknown.',{resolution:{cue:CV1_LINES.total,response:CV1_LINES.okay,rate:.72}}],[CV1_I.l03Slow,CV1_LINES.drink2,CV1_LINES.slower,'Drink cue: the rate is too fast.',{resolution:{cue:CV1_LINES.drink2,response:CV1_LINES.water,rate:.58}}]],
    b:[[CV1_I.l01Order,CV1_LINES.what3,CV1_LINES.orderGaprao,'Office lunch counter: order basil chicken.'],[CV1_I.l01Spice,CV1_LINES.spice2,CV1_LINES.notSpicy,'Evening wok stall: request non-spicy.'],[CV1_I.l02Here,CV1_LINES.service3,CV1_LINES.takeaway,'Evening counter: choose takeaway.'],[CV1_I.l02Bill,null,CV1_LINES.bill,'Dinner is finished: initiate payment.',{event:true,partnerReply:CV1_LINES.total}],[CV1_I.l03Again,CV1_LINES.what2,CV1_LINES.again,'Food cue: the playback was missed once.',{resolution:{cue:CV1_LINES.what2,response:CV1_LINES.orderThis,rate:.72}}],[CV1_I.l03Slow,CV1_LINES.service2,CV1_LINES.slowAgain,'Service cue: a slow replay is explicitly needed.',{resolution:{cue:CV1_LINES.service2,response:CV1_LINES.takeaway,rate:.58}}]]
  };
  return ['a','b'].map(letter=>({id:`cv1.form.retention.w01.d30.${letter}`,items:specs[letter].map((x,index)=>cvVariant(x[0],`cv1.interaction.retention.w01.d30.${letter}.l0${Math.min(3,Math.floor(index/2)+1)}.0${index%2+1}`,x[3],x[1],x[2],x[4]||{})) }));
}
CV1_RETENTION_FORMS['cv1.retention.w01.d30']=cvD30Forms();
Object.values(CV1_RETENTION_FORMS).forEach(forms=>forms.forEach(form=>{form.revision=1;}));

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
    if(rec.lastAttempt===day){toast('This cold check can be attempted once per Bangkok day.');return false;}
    if(rec.lastRun&&!rec.repairCompletedAt){toast('Complete its repair before a future retake.');return false;}
  }else{
    taskId=CV1_WEEK1_GATE;stage='gate';rec=cvAssessmentRecord(c.gates[taskId]);c.gates[taskId]=rec;forms=CV1_GATE_FORMS;
    if(rec.passedAt){toast('Week 1 is already passed.');return false;}
    if(rec.lastAttempt===day){toast('The Week 1 check can be attempted once per Bangkok day.');return false;}
    if(rec.lastRun&&!rec.repairCompletedAt){toast('Complete the targeted repair before a future retake.');return false;}
  }
  const form=cvSelectForm(forms,rec);cvConsumeForm(rec,form);
  const objectives=cvBuildObjectives(form.items,form.id,taskKind==='gate'?'gate':'assessment');
  const spoken=cvAssessmentSpoken(form,stage);
  player={type:'conversation-course',kind:'assessment',taskKind,taskId,stage,form,scene:{chunks:spoken},objectives,spoken,phase:'intro',objectiveIndex:0,spokenIndex:0,completed:false,coldRecorded:false,resumable:true,startedDay:day,attemptOrdinal:rec.attempts+1,formCycle:rec.formCycle,runSeed:`${taskId}|${rec.attempts+1}`,optionOffset:rec.formCycle%3,optionOrders:{},
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
  const isGate=p.taskKind==='gate',label=isGate?'Week 1 real-life check':`${p.stage.replace('d','+')} delayed check`;
  el('stage').innerHTML=`<div class="center"><div class="eyebrow">${esc(label)}</div><h2>${isGate?'Show what you can use across food and repair':'Retrieve without lesson support'}</h2></div>
    <div class="notebox"><b>Cold first attempts stay honest.</b><div class="sub">Cue meaning, Thai answer text and pronunciation are hidden until you answer. Misses receive feedback, then move to a separate repair block; they do not rewrite this score.</div></div>
    <div class="notebox"><b>${p.objectives.length} listening decisions + ${p.spoken.length} answer-before-reveal prompt${p.spoken.length===1?'':'s'}</b><div class="sub">Pass requires ${cvAssessmentThreshold(p.stage)}/${p.objectives.length} and every spoken prompt. No pronunciation is scored.</div></div>
    <div class="stage-actions"><button class="btn full" id="cv-next">Begin cold check →</button></div>`;
  el('cv-next').onclick=()=>{p.phase='objective';cvPersistCourseResume(p);renderConversationAssessment();};
}
function cvAssessmentIntentChoices(objective){
  if(objective.direction==='partner-reply-intent')return {answer:'The vendor gives the total.',choices:['The vendor gives the total.','The vendor asks about spice.','The vendor asks where you will eat.']};
  return {answer:objective.interaction.intent,choices:objective.interaction.intentOptions};
}
function cvRenderAssessmentObjective(p){
  const objective=p.objectives[p.objectiveIndex];
  if(!objective){cvCommitAssessmentColdPass(p);p.phase='spoken';p.spokenIndex=0;cvPersistCourseResume(p);return renderConversationAssessment();}
  const item=objective.interaction,intent=objective.direction==='intent'||objective.direction==='event-request'||objective.direction==='partner-reply-intent',intentData=cvAssessmentIntentChoices(objective),partnerTotal=objective.direction==='partner-reply-intent';
  if(p.evidence.answeredIds.includes(objective.id)){
    const correct=p.evidence.firstCorrectIds.includes(objective.id);
    el('stage').innerHTML=`<div class="q-prompt"><div class="eyebrow">Cold item · ${p.objectiveIndex+1} of ${p.objectives.length}</div><h2>${esc(item.context)}</h2><p class="sub">Your first answer was saved before the interruption. It cannot be answered again or changed.</p></div><div class="q-feedback ${correct?'ok answer-correct':'no answer-wrong'}"><b>${correct?'Saved as correct.':'Saved as a first-attempt miss.'}</b>${intent?`<div class="p-en">${esc(intentData.answer)}</div>`:cvLinePanel(item.response,'Correct reply')}<div class="stage-actions"><button class="btn full" id="cv-next">Continue without changing the score →</button></div></div>`;
    el('cv-next').onclick=()=>{p.objectiveIndex++;cvPersistCourseResume(p);renderConversationAssessment();};
    return;
  }
  el('stage').innerHTML=`<div class="q-prompt"><div class="eyebrow">Cold item · ${p.objectiveIndex+1} of ${p.objectives.length}</div><h2>${esc(item.context)}</h2><p class="sub">${intent?'Hear the cue and choose its function.':'Hear each option, then choose the fitting response.'}</p>${item.event&&!partnerTotal?'<div class="notebox"><b>Visible event: decide what you need to do.</b></div>':`<button class="btn full ghost" id="cv-objective-cue">▶ Hear the ${partnerTotal?'partner reply':'cue'}</button>`}</div>
    ${intent?`<div class="q-options">${intentData.choices.map(choice=>`<button class="q-opt" data-cv-assess-intent="${escAttr(choice)}">${esc(choice)}</button>`).join('')}</div>`:`<div>${cvAudioChoiceRows(p,objective)}</div>`}<div class="q-feedback" id="cv-feedback" role="status" aria-live="polite"></div>`;
  if(!item.event||partnerTotal)cvBindLineButton('cv-objective-cue',partnerTotal?(item.partnerReply||CV1_LINES.total):item.cue);
  el('stage').querySelectorAll('[data-cv-hear]').forEach(button=>button.onclick=()=>speak(CV1_RESPONSE_BY_ID[button.dataset.cvHear].thai,button));
  const choose=selected=>{
    const ok=intent?selected===intentData.answer:selected===item.response.id;
    cvPushUnique(p.evidence.answeredIds,objective.id);if(ok)cvPushUnique(p.evidence.firstCorrectIds,objective.id);else{p.missed.push(objective);cvWeaknessSeen(cvConversation(),objective,false,selected);}if(ok)cvWeaknessSeen(cvConversation(),objective,true,selected);cvPersistCourseResume(p);
    el('stage').querySelectorAll('[data-cv-assess-intent],[data-cv-choose]').forEach(x=>x.disabled=true);
    const fb=el('cv-feedback');fb.className='q-feedback '+(ok?'ok answer-correct':'no answer-wrong');
    if(!ok)cvPushUnique(p.evidence.feedbackAcknowledgedIds,objective.id);
    fb.innerHTML=`<b>${ok?'Correct.':'First attempt recorded.'}</b>${intent?`<div class="p-en">${esc(intentData.answer)}</div>`:cvLinePanel(item.response,'Correct reply')}<div class="stage-actions"><button class="btn full" id="cv-next">Continue →</button></div>`;
    el('cv-next').onclick=()=>{p.objectiveIndex++;cvPersistCourseResume(p);renderConversationAssessment();};
  };
  el('stage').querySelectorAll('[data-cv-assess-intent]').forEach(button=>button.onclick=()=>choose(button.dataset.cvAssessIntent));
  el('stage').querySelectorAll('[data-cv-choose]').forEach(button=>button.onclick=()=>choose(button.dataset.cvChoose));
}
function cvRenderAssessmentSpoken(p){
  const line=p.spoken[p.spokenIndex];
  if(!line){p.phase='result';cvPersistCourseResume(p);return renderConversationAssessment();}
  const promptId=p.evidence.spokenPromptIds[p.spokenIndex],revealed=p.evidence.modelRevealIds.includes(promptId);
  el('stage').innerHTML=`<div class="center"><div class="eyebrow">Answer before reveal · ${p.spokenIndex+1} of ${p.spoken.length}</div><h2>${esc(line.en)}</h2><p class="sub">Produce the useful Thai aloud from the situation/function. Reveal after a real attempt; no pronunciation is scored.</p></div>
    ${revealed?cvLinePanel(line,'Device model'):'<div class="cv-support-hidden"><b>Answer aloud now.</b><div class="sub">Thai and pronunciation are intentionally hidden.</div></div>'}
    ${revealed?'':`<details class="conversation-transcript-drawer" id="cv-assessment-support"><summary>Need support? Show separately taught chunks</summary>${cvChunkSupportHtml(line)}</details>`}
    <div class="stage-actions"><button class="btn full" id="cv-spoken">${revealed?'I repeated the model · continue':'I answered aloud · reveal model'}</button></div>`;
  const support=el('cv-assessment-support');if(support)support.addEventListener('toggle',()=>{if(support.open){cvPushUnique(p.evidence.supportOpenedIds,promptId);cvPersistCourseResume(p);}});
  el('cv-spoken').onclick=()=>{if(!revealed){cvPushUnique(p.evidence.spokenBeforeRevealIds,promptId);cvPushUnique(p.evidence.modelRevealIds,promptId);cvPersistCourseResume(p);speak(line.thai);renderConversationAssessment();return;}p.spokenIndex++;cvPersistCourseResume(p);renderConversationAssessment();};
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
  el('stage').innerHTML=`<div class="result-big">${isGate?'Week 1 passed':'Delayed check passed'}</div><div class="result-sub">${correct}/${total} first-pass listening · ${p.spoken.length}/${p.spoken.length} spoken prompts</div><div class="notebox"><b>${isGate?'Week 1 authority earned.':'Retention evidence recorded.'}</b><div class="sub">Reading progress, tokens, Phase 1 streak and script mastery were not changed.</div></div><div class="stage-actions"><button class="btn full" id="cv-done">Done</button></div>`;
  el('cv-done').onclick=()=>{closeOverlay();renderHome();};return true;
}
function cvRenderAssessmentRepair(p){
  const objective=p.missed[p.repairIndex];
  if(!objective){
    const c=cvConversation(),day=bangkokDayStr(),rec=p.taskKind==='gate'?c.gates[p.taskId]:c.retention[p.taskId],practiceIds=p.missed.map((_,i)=>`cv1.practice.repair.${p.taskId}.${String(i+1).padStart(2,'0')}`);
    rec.repairCompletedAt=day;rec.lastRepairRun={completed:day,revision:1,practiceFormId:`cv1.form.repair.${p.taskId}.a`,sourceMissedObjectiveIds:p.missed.map(x=>x.id),practiceItemIds:practiceIds,firstCorrectIds:[],clearedIds:practiceIds.slice()};cvPushUnique(cvEnsureConversationDay(c,day).repairs,p.taskId);c.resume=null;saveState();p.completed=true;
    el('stage').innerHTML=`<div class="result-big">Repair complete</div><div class="result-sub">Cold result kept: ${p.evidence.firstCorrectIds.length}/${p.objectives.length}</div><div class="notebox"><b>Retake on a later Bangkok day.</b><div class="sub">The missed cold items were not reused as repair questions, and this repair did not rewrite the first-pass score.</div></div><div class="stage-actions"><button class="btn full" id="cv-done">Done</button></div>`;el('cv-done').onclick=()=>{closeOverlay();renderHome();};return;
  }
  const item=objective.interaction;
  el('stage').innerHTML=`<div class="center"><div class="eyebrow">Targeted repair · ${p.repairIndex+1} of ${p.missed.length}</div><h2>${esc(item.context)}</h2><p class="sub">Practise the ordinary teaching version. This is separate from the sealed cold form.</p></div>${item.cue?`<div class="conversation-turn vendor"><div class="p-en"><b>${esc(item.cue.en)}</b></div><div class="p-thai" lang="th">${esc(item.cue.thai)}</div><div class="p-tr">${esc(item.cue.tr)}</div><button class="btn full ghost" id="cv-repair-cue">▶ Hear cue</button></div>`:'<div class="notebox"><b>Visible event: you start.</b></div>'}${cvLinePanel(item.response,'Practise this response')}<div class="stage-actions"><button class="btn full" id="cv-repair-next">I said and compared it · continue</button></div>`;
  if(item.cue)cvBindLineButton('cv-repair-cue',item.cue);el('cv-repair-next').onclick=()=>{speak(item.response.thai);p.repairIndex++;cvPersistCourseResume(p);renderConversationAssessment();};
}

function startConversationConsolidation(){
  const formId=CV1_CONSOLIDATION.formId,objectives=cvBuildObjectives(CV1_CONSOLIDATION.interactions,formId,'assessment');
  const c=cvConversation(),record=c.activities.consolidations[CV1_WEEK1_CONSOLIDATION],resumable=!(record&&record.firstCompleted)&&CV1_MAIN_SEQUENCE[c.pace.cursor]===CV1_WEEK1_CONSOLIDATION;
  player={type:'conversation-course',kind:'consolidation',taskKind:'consolidation',taskId:CV1_WEEK1_CONSOLIDATION,phase:'intro',formId,objectives,objectiveIndex:0,spokenIndex:0,transferIndex:0,weaknessDone:false,completed:false,resumable,startedDay:bangkokDayStr(),attemptOrdinal:(record&&record.runs||0)+1,runSeed:`${CV1_WEEK1_CONSOLIDATION}|${(record&&record.runs||0)+1}`,scene:{chunks:CV1_CONSOLIDATION.spoken.concat(CV1_CONSOLIDATION.transfers)},optionOffset:1,optionOrders:{},attempts:{},
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
  el('stage').innerHTML=`<div class="center"><div class="eyebrow">Week 1 · integrated rehearsal · about 28 min</div><h2>Food and repair consolidation</h2><p class="sub">Mix all three lessons before the unit check.</p></div><div class="onboarding-route-list"><div><b>8 listening decisions</b><br><span class="sub">Four cue functions and four fitting responses; misses clear after the first score is saved.</span></div><div><b>6 spoken prompts</b><br><span class="sub">Answer before reveal in shuffled lesson order.</span></div><div><b>2 controlled transfers</b><br><span class="sub">Basil chicken and a slow repeat request.</span></div><div><b>1 weakness repair</b><br><span class="sub">One required comparison selected from Week 1 evidence.</span></div></div><div class="stage-actions"><button class="btn full" id="cv-next">Start consolidation →</button></div>`;
  el('cv-next').onclick=()=>{p.phase='objective';cvPersistCourseResume(p);renderConversationConsolidation();};
}
function cvRenderConsolidationObjective(p){
  const objective=p.objectives[p.objectiveIndex];if(!objective){p.phase='spoken';cvPersistCourseResume(p);return renderConversationConsolidation();}
  const item=objective.interaction,intent=objective.direction==='intent'||objective.direction==='event-request'||objective.direction==='partner-reply-intent',intentData=cvAssessmentIntentChoices(objective),first=!p.attempts[objective.id],partnerTotal=objective.direction==='partner-reply-intent';
  el('stage').innerHTML=`<div class="q-prompt"><div class="eyebrow">Mixed listening · ${p.objectiveIndex+1} of ${p.objectives.length}</div><h2>${esc(item.context)}</h2>${item.event&&!partnerTotal?'<div class="notebox"><b>Visible event: you start.</b></div>':`<button class="btn full ghost" id="cv-objective-cue">▶ Hear the ${partnerTotal?'partner reply':'cue'}</button>`}<p class="sub">${intent?'Choose the function.':'Hear each option, then choose the fitting response.'}</p></div>${intent?`<div class="q-options">${intentData.choices.map(choice=>`<button class="q-opt" data-cv-con-intent="${escAttr(choice)}">${esc(choice)}</button>`).join('')}</div>`:`<div>${cvAudioChoiceRows(p,objective)}</div>`}<div class="q-feedback" id="cv-feedback"></div>`;
  if(!item.event||partnerTotal)cvBindLineButton('cv-objective-cue',partnerTotal?(item.partnerReply||CV1_LINES.total):item.cue);
  el('stage').querySelectorAll('[data-cv-hear]').forEach(button=>button.onclick=()=>speak(CV1_RESPONSE_BY_ID[button.dataset.cvHear].thai,button));
  const choose=selected=>{const ok=intent?selected===intentData.answer:selected===item.response.id;if(first){p.attempts[objective.id]=true;cvPushUnique(p.evidence.answeredIds,objective.id);if(ok)cvPushUnique(p.evidence.firstCorrectIds,objective.id);cvWeaknessSeen(cvConversation(),objective,ok,selected);cvPersistCourseResume(p);}el('stage').querySelectorAll('[data-cv-con-intent],[data-cv-choose]').forEach(x=>x.disabled=true);const fb=el('cv-feedback');fb.className='q-feedback '+(ok?'ok answer-correct':'no answer-wrong');if(!ok){fb.innerHTML=`<b>First attempt saved. Clear this miss now.</b>${intent?`<div class="p-en">${esc(intentData.answer)}</div>`:cvLinePanel(item.response,'Correct response')}<div class="stage-actions"><button class="btn full" id="cv-retry">Retry item</button></div>`;el('cv-retry').onclick=()=>renderConversationConsolidation();return;}cvPushUnique(p.evidence.clearedIds,objective.id);cvPersistCourseResume(p);fb.innerHTML=`<b>${first?'Correct first time.':'Miss cleared.'}</b><div class="stage-actions"><button class="btn full" id="cv-next">Continue →</button></div>`;el('cv-next').onclick=()=>{p.objectiveIndex++;cvPersistCourseResume(p);renderConversationConsolidation();};};
  el('stage').querySelectorAll('[data-cv-con-intent]').forEach(button=>button.onclick=()=>choose(button.dataset.cvConIntent));el('stage').querySelectorAll('[data-cv-choose]').forEach(button=>button.onclick=()=>choose(button.dataset.cvChoose));
}
function cvRenderConsolidationSpoken(p){
  const line=CV1_CONSOLIDATION.spoken[p.spokenIndex];if(!line){p.phase='transfer';cvPersistCourseResume(p);return renderConversationConsolidation();}
  const id=p.evidence.spokenPromptIds[p.spokenIndex],revealed=p.evidence.modelRevealIds.includes(id);
  el('stage').innerHTML=`<div class="center"><div class="eyebrow">Answer before reveal · ${p.spokenIndex+1} of 6</div><h2>${esc(line.en)}</h2><p class="sub">Say the Week 1 response aloud from its function.</p></div>${revealed?cvLinePanel(line,'Model response'):'<div class="cv-support-hidden"><b>Answer aloud before revealing.</b></div>'}<div class="stage-actions"><button class="btn full" id="cv-spoken">${revealed?'I repeated it · continue':'I answered · reveal model'}</button></div>`;
  el('cv-spoken').onclick=()=>{if(!revealed){cvPushUnique(p.evidence.spokenBeforeRevealIds,id);cvPushUnique(p.evidence.modelRevealIds,id);cvPersistCourseResume(p);speak(line.thai);renderConversationConsolidation();return;}p.spokenIndex++;cvPersistCourseResume(p);renderConversationConsolidation();};
}
function cvRenderConsolidationTransfer(p){
  const line=CV1_CONSOLIDATION.transfers[p.transferIndex];if(!line){p.phase='weakness';cvPersistCourseResume(p);return renderConversationConsolidation();}
  const id=p.evidence.transferIds[p.transferIndex],done=p.evidence.transferCompletedIds.includes(id);
  el('stage').innerHTML=`<div class="center"><div class="eyebrow">Controlled transfer · ${p.transferIndex+1} of 2</div><h2>${esc(line.en)}</h2><p class="sub">Build the changed phrase from Week 1 parts, say it aloud, then compare.</p></div>${cvLinePanel(line,'Supported transfer')}<div class="stage-actions"><button class="btn full" id="cv-transfer">${done?'Continue':'I said and compared it'} →</button></div>`;
  el('cv-transfer').onclick=()=>{cvPushUnique(p.evidence.transferCompletedIds,id);p.transferIndex++;cvPersistCourseResume(p);speak(line.thai);renderConversationConsolidation();};
}
function cvWeakestWeek1Line(){
  const c=cvConversation(),entries=Object.keys(c.weakness.items).map(id=>({id,...c.weakness.items[id]})).sort((a,b)=>(b.firstMisses/Math.max(1,b.seen))-(a.firstMisses/Math.max(1,a.seen))||(a.correctStreak-b.correctStreak)||String(b.lastMiss||'').localeCompare(String(a.lastMiss||''))||a.id.localeCompare(b.id));
  if(!entries.length)return CV1_LINES.orderThis;
  const interaction=CV1_CONSOLIDATION.interactions.find(item=>entries[0].id.startsWith(item.id));return interaction?interaction.response:CV1_LINES.orderThis;
}
function cvRenderConsolidationWeakness(p){
  const line=cvWeakestWeek1Line(),id='cv1.practice.consolidation.w01.weakness.01';
  el('stage').innerHTML=`<div class="center"><div class="eyebrow">Required weakness repair</div><h2>One last focused comparison</h2><p class="sub">Selected by first-attempt Week 1 evidence. Empty evidence falls back deterministically.</p></div>${cvLinePanel(line,'Focus phrase')}<div class="stage-actions"><button class="btn full" id="cv-weak">I said and compared it · finish</button></div>`;
  el('cv-weak').onclick=()=>{p.evidence.weaknessRepairItemIds=[id];p.evidence.weaknessRepairClearedIds=[id];p.phase='finish';cvPersistCourseResume(p);speak(line.thai);renderConversationConsolidation();};
}
function cvFinishConsolidation(p){
  const complete=p.evidence.itemIds.every(id=>p.evidence.clearedIds.includes(id))&&p.evidence.spokenPromptIds.every(id=>p.evidence.spokenBeforeRevealIds.includes(id)&&p.evidence.modelRevealIds.includes(id))&&p.evidence.transferIds.every(id=>p.evidence.transferCompletedIds.includes(id))&&p.evidence.weaknessRepairItemIds.every(id=>p.evidence.weaknessRepairClearedIds.includes(id));
  if(!complete){toast('A consolidation requirement is incomplete.');return;}
  const c=cvConversation(),day=bangkokDayStr(),old=c.activities.consolidations[p.taskId],rec=cvLessonRecord(old),correct=p.evidence.firstCorrectIds.length,total=p.evidence.itemIds.length,pct=Math.round(100*correct/total);p.evidence.completed=day;
  const completedEvidence=cvClone(p.evidence);delete completedEvidence.answeredIds;
  rec.runs++;rec.objectiveAttempts+=total;rec.firstPct=rec.firstPct==null?pct:rec.firstPct;rec.lastPct=pct;rec.bestPct=Math.max(rec.bestPct==null?0:rec.bestPct,pct);rec.firstCompleted=rec.firstCompleted||day;rec.lastCompleted=day;rec.completedRevision=1;rec.lastRun=completedEvidence;c.activities.consolidations[p.taskId]=rec;const credited=cvClaimMainCredit(c,p.taskId,day);c.resume=null;p.completed=true;saveState();setProg(100);sfxComplete();
  el('stage').innerHTML=`<div class="result-big">Week 1 consolidated</div><div class="result-sub">${correct}/${total} first-pass listening · all misses cleared</div><div class="notebox"><b>Six spoken prompts, two transfers and one weakness repair complete.</b><div class="sub">${credited?'Today’s main task is recorded.':'This was a replay; no second daily credit was added.'}</div></div><div class="stage-actions"><button class="btn full" id="cv-done">Done</button></div>`;el('cv-done').onclick=()=>{closeOverlay();renderHome();};
}

function startConversationCourseTask(taskId){
  if(CV1_LESSONS[taskId])return startConversationCourseLesson(taskId);
  if(taskId===CV1_WEEK1_CONSOLIDATION)return startConversationConsolidation();
  if(taskId===CV1_WEEK1_GATE)return startConversationAssessment('gate',taskId);
  if(CV1_RETENTION_FORMS[taskId])return startConversationAssessment('retention',taskId);
  return false;
}

function cvFindForm(formId){
  for(const forms of Object.values(CV1_RETENTION_FORMS)){const found=forms.find(form=>form.id===formId);if(found)return found;}
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
    const roleMode=stage==='roleplay-reduced'?'reduced':'supported',phase=stage.startsWith('roleplay-')?'roleplay':stage.startsWith('resolution-')?'resolution':stage;
    const evidence=cvLessonEvidence();
    ['pairIdsPlayed','sceneIdsPlayed','responsePromptIds','responseFirstCorrectIds','responseRepairIds','spokenBeforeRevealIds','modelRevealIds','supportOpenedIds','substitutionIds'].forEach(key=>{evidence[key]=cvResumeList(e,key);});
    evidence.recordStepCompleted=!!e.recordStepCompleted;evidence.recordingAttempted=!!e.recordingAttempted;
    evidence.objective={itemIds:objectives.map(x=>x.id),answeredIds:cvResumeList(e,'answeredIds'),firstCorrectIds:cvResumeList(e,'firstCorrectIds'),clearedIds:cvResumeList(e,'clearedIds')};
    player={type:'conversation-course',kind:'lesson',taskKind:'lesson',taskId:r.taskId,lesson,scene:lesson.scene,phase,step:Math.max(0,r.stageIndex||0),total:cvLessonPhases(lesson),pairIndex:phase==='pairs'?r.itemIndex:0,pairPlayback:{},guidedIndex:phase==='guided'?r.itemIndex:0,objectiveIndex:phase==='objective'?r.itemIndex:0,roleIndex:phase==='roleplay'?r.itemIndex:0,roleMode,scenePart1Done:phase==='scene'&&r.itemIndex===1,completed:false,resumable:true,startedDay:r.startedDay,attemptOrdinal:r.attemptOrdinal,runSeed:r.runSeed,optionOffset:(lesson.number-1)%3,optionOrders:{},guidedAttempts:{},objectiveAttempts:{},resolution:null,evidence,objectives,modelRevealIds:{}};
    evidence.responsePromptIds.forEach(id=>{player.guidedAttempts[id]=true;});evidence.objective.answeredIds.forEach(id=>{player.objectiveAttempts[id]=true;});evidence.modelRevealIds.forEach(id=>{player.modelRevealIds[id]=true;});
    if(phase==='resolution'){
      const item=lesson.interactions[r.itemIndex];if(!item||!item.resolution){c.resume=null;saveState();return false;}
      player.resolution={item,returnPhase:stage.endsWith('objective')?'objective':'guided',returnIndex:r.stageIndex};
    }
    openOverlay();renderConversationCourseLesson();return true;
  }
  if(r.taskKind==='consolidation'){
    if(r.taskId!==CV1_WEEK1_CONSOLIDATION||c.activities.consolidations[r.taskId]&&c.activities.consolidations[r.taskId].firstCompleted||CV1_MAIN_SEQUENCE[c.pace.cursor]!==r.taskId){c.resume=null;saveState();return false;}
    const formId=CV1_CONSOLIDATION.formId,objectives=cvBuildObjectives(CV1_CONSOLIDATION.interactions,formId,'assessment'),e=r.evidence||{},phase=r.stageId||'intro';
    const evidence={completed:null,revision:1,formId,itemIds:objectives.map(x=>x.id),answeredIds:cvResumeList(e,'answeredIds'),firstCorrectIds:cvResumeList(e,'firstCorrectIds'),clearedIds:cvResumeList(e,'clearedIds'),spokenPromptIds:CV1_CONSOLIDATION.spoken.map((_,i)=>`cv1.spoken.consolidation.w01.${String(i+1).padStart(2,'0')}`),spokenBeforeRevealIds:cvResumeList(e,'spokenBeforeRevealIds'),modelRevealIds:cvResumeList(e,'modelRevealIds'),supportOpenedIds:cvResumeList(e,'supportOpenedIds'),transferIds:CV1_CONSOLIDATION.transfers.map((_,i)=>`cv1.transfer.consolidation.w01.${String(i+1).padStart(2,'0')}`),transferCompletedIds:cvResumeList(e,'transferCompletedIds'),weaknessRepairItemIds:phase==='finish'?['cv1.practice.consolidation.w01.weakness.01']:[],weaknessRepairClearedIds:phase==='finish'?['cv1.practice.consolidation.w01.weakness.01']:[]};
    player={type:'conversation-course',kind:'consolidation',taskKind:'consolidation',taskId:r.taskId,phase,formId,objectives,objectiveIndex:phase==='objective'?r.itemIndex:objectives.length,spokenIndex:phase==='spoken'?r.stageIndex:phase==='intro'||phase==='objective'?0:CV1_CONSOLIDATION.spoken.length,transferIndex:phase==='transfer'?r.stageIndex:phase==='intro'||phase==='objective'||phase==='spoken'?0:CV1_CONSOLIDATION.transfers.length,weaknessDone:phase==='finish',completed:false,resumable:true,startedDay:r.startedDay,attemptOrdinal:r.attemptOrdinal,runSeed:r.runSeed,scene:{chunks:CV1_CONSOLIDATION.spoken.concat(CV1_CONSOLIDATION.transfers)},optionOffset:1,optionOrders:{},attempts:{},evidence};
    evidence.answeredIds.forEach(id=>{player.attempts[id]=true;});openOverlay();renderConversationConsolidation();return true;
  }
  const form=cvFindForm(r.formId);if(!form){c.resume=null;saveState();return false;}
  const taskKind=r.taskKind,stage=taskKind==='gate'?'gate':r.taskId.split('.').pop(),objectives=cvBuildObjectives(form.items,form.id,taskKind==='gate'?'gate':'assessment'),spoken=cvAssessmentSpoken(form,stage);
  const answered=cvResumeList(r.evidence,'answeredIds'),first=cvResumeList(r.evidence,'firstCorrectIds'),phase=['intro','objective','spoken','result','repair'].includes(r.stageId)?r.stageId:'objective';
  const assessmentRec=taskKind==='gate'?c.gates[r.taskId]:c.retention[r.taskId],coldRecorded=!!(assessmentRec&&assessmentRec.attempts>=r.attemptOrdinal&&assessmentRec.lastRun&&assessmentRec.lastRun.formId===form.id);
  player={type:'conversation-course',kind:'assessment',taskKind,taskId:r.taskId,stage,form,scene:{chunks:spoken},objectives,spoken,phase,objectiveIndex:Math.min(r.itemIndex||0,objectives.length),spokenIndex:phase==='spoken'?Math.min(r.stageIndex||0,spoken.length):0,completed:false,coldRecorded,resumable:true,startedDay:r.startedDay,attemptOrdinal:r.attemptOrdinal,formCycle:r.formCycle||0,runSeed:r.runSeed,optionOffset:(r.formCycle||0)%3,optionOrders:{},
    evidence:{completed:null,revision:1,formId:form.id,itemIds:objectives.map(x=>x.id),answeredIds:answered.slice(),firstCorrectIds:first.slice(),feedbackAcknowledgedIds:answered.filter(id=>!first.includes(id)),spokenPromptIds:spoken.map((_,i)=>`${form.id}.spoken.${String(i+1).padStart(2,'0')}`),spokenBeforeRevealIds:cvResumeList(r.evidence,'spokenBeforeRevealIds'),modelRevealIds:cvResumeList(r.evidence,'modelRevealIds'),supportOpenedIds:cvResumeList(r.evidence,'supportOpenedIds')},missed:objectives.filter(x=>answered.includes(x.id)&&!first.includes(x.id)),repairIndex:phase==='repair'?Math.min(r.stageIndex||0,objectives.length):0};
  openOverlay();renderConversationAssessment();return true;
}
function cvCurrentDueBlockers(target){return cvPlannedDueAssignments(target);}
function startConversationCoursePrimary(){
  const c=cvConversation();
  if(c.resume)return resumeConversationCourseTask();
  const due=cvCurrentDueBlockers();if(due.length)return startConversationAssessment('retention',due[0].id);
  if(cvBacklogBlocksMain()){toast('Today’s two delayed-check slots are complete. Remaining overdue conversation work stays queued for the next Bangkok day.');return false;}
  const task=cvNextMain();if(!task){toast('Week 1 is complete. Week 2 content is preserved in the frozen registry for the next release slice.');return false;}
  if(!cvMainAvailableToday()){toast('Today’s main conversation task is complete. Due checks and replays remain available.');return false;}
  if(!cvMainFitsToday(task)){toast('Today’s due checks used the required-work allowance. The next main task stays first tomorrow.');return false;}
  return startConversationCourseTask(task.id);
}
function showWeek1ScriptNotice(){
  player={type:'conversation-course',kind:'optional',completed:true};openOverlay();setProg(100);
  el('stage').innerHTML=`<div class="center"><div class="eyebrow">Optional · Notice the script · 3–5 min</div><h2>Three chunks you already understand</h2><p class="sub">This is noticing, not a reading test. It grants no progress and gates nothing.</p></div>
    ${cvLinePanel(CV1_LINES.greeting,'Look for ครับ — the male polite ending')}${cvLinePanel(CV1_LINES.notSpicy,'Look for ไม่ — not')}${cvLinePanel(CV1_LINES.orderThis,'Look for เอา — I will have / want')}
    <div class="stage-actions"><button class="btn full" id="cv-done">Done</button></div>`;
  el('cv-done').onclick=()=>closeOverlay();
}
function renderConversationCourseHome(){
  const card=el('conversation-course-card');if(!card)return;
  const c=cvConversation(),due=cvCurrentDueBlockers(),next=cvNextMain(),today=bangkokDayStr(),available=cvMainAvailableToday(null,today),fits=cvMainFitsToday(next,null,today),resume=!!c.resume,backlog=cvBacklogBlocksMain(null,today);
  const kicker=el('conversation-card-kicker'),title=el('conversation-card-title'),status=el('conversation-course-status'),dayStatus=el('conversation-day-status');
  if(resume){const kind=c.resume.taskKind;kicker.textContent=kind==='lesson'?'Continue current lesson':kind==='consolidation'?'Continue consolidation':'Continue current check';title.textContent=kind==='lesson'?CV1_LESSONS[c.resume.taskId].title:kind==='consolidation'?CV1_CONSOLIDATION.title:'Resume without rerolling answers';status.textContent=kind==='gate'||kind==='retention'?'Saved cold answers and option order stay fixed':'Completed actions are saved; interrupted audio restarts at this prompt';card.disabled=false;}
  else if(due.length){kicker.textContent=`Due now · ${due[0].stage==='d1'?'+1':due[0].stage==='d7'?'+7':'+30'} check`;title.textContent='Retrieve before new material';status.textContent=`${due.length} due check${due.length===1?'':'s'} in today’s bounded route`;card.disabled=false;}
  else if(backlog){kicker.textContent='Conversation catch-up day';title.textContent='Today’s delayed-check limit is protecting the workload';status.textContent='Remaining overdue work stays queued; no new main lesson today';card.disabled=true;}
  else if(next&&available&&!fits){kicker.textContent='45-minute workload protected';title.textContent=next.title+' stays next';status.textContent='Today’s completed delayed checks filled the required-work allowance';card.disabled=true;}
  else if(next&&available){kicker.textContent=next.kind==='lesson'?`Start here · Lesson ${CV1_LESSONS[next.id].number}`:next.kind==='consolidation'?'Main task · Week 1 consolidation':'Main task · Week 1 check';title.textContent=next.title;status.textContent=`About ${next.minutes} min · meaning first, then hear, respond and speak`;card.disabled=false;}
  else if(next){kicker.textContent='Today’s main task complete';title.textContent=next.title+' is next';status.textContent='Available on the next Bangkok day · replays stay open';card.disabled=true;}
  else{kicker.textContent='Week 1 complete';title.textContent='Food, payment and repair loop passed';status.textContent='Due retention continues; Week 2 is the next implementation slice';card.disabled=true;}
  card.classList.toggle('done',(!available||backlog||!fits)&&!resume&&!due.length);card.classList.toggle('recommended',!backlog&&fits&&(available||resume||due.length));
  dayStatus.className='conversation-day-status'+((!available||backlog||!fits)?' done':'');dayStatus.textContent=due.length?'Complete up to two oldest due checks before new material.':backlog?'Two delayed-check slots are complete; remaining overdue work rolls forward without penalty.':!fits?'Required conversation work is capped at 45 authored minutes; the next main task rolls forward.':!available?'Today’s main conversation task is complete. Reading remains optional.':'No Thai knowledge or reading is assumed.';
  const list=el('conversation-due-list');list.innerHTML=due.map((item,index)=>`<div class="conversation-route-item due"><span class="route-number">${index+1}</span><div><b>${item.stage==='d1'?'+1':item.stage==='d7'?'+7':'+30'} delayed check</b><div class="sub">Due ${esc(item.rec.due)} · cold first attempt</div></div><button class="btn small" data-cv-due="${escAttr(item.id)}">Start</button></div>`).join('');
  list.querySelectorAll('[data-cv-due]').forEach(button=>button.onclick=()=>startConversationAssessment('retention',button.dataset.cvDue));
  const optional=el('conversation-optional-panel'),completed=Object.keys(c.lessons).filter(id=>c.lessons[id].firstCompleted);
  optional.hidden=!completed.length;
  if(completed.length)optional.innerHTML=`<div class="spread"><div><div class="eyebrow">Optional after the main route</div><b>Replay or notice familiar script</b></div></div><div class="row inline-tools mt-10">${completed.map(id=>`<button class="btn small ghost" data-cv-replay="${escAttr(id)}">Replay L${CV1_LESSONS[id].number}</button>`).join('')}<button class="btn small ghost" id="cv-script-notice">Notice the script</button></div><div class="sub meta-mini mt-10">Optional activities never grant prerequisites, daily credit, retention or Phase 1 progress.</div>`;
  if(!optional.hidden){optional.querySelectorAll('[data-cv-replay]').forEach(button=>button.onclick=()=>startConversationCourseLesson(button.dataset.cvReplay));el('cv-script-notice').onclick=showWeek1ScriptNotice;}
}
function renderConversationCourseProgress(){
  const grid=el('conversation-progress-grid');if(!grid)return;
  const c=cvConversation(),lessons=Object.values(c.lessons).filter(rec=>rec.firstCompleted).length,due=cvDueAssignments().length,gates=c.gates[CV1_WEEK1_GATE]&&c.gates[CV1_WEEK1_GATE].passedAt?1:0,next=cvNextMain();
  grid.innerHTML=`<div><b>${lessons}/24</b><span class="sub meta-mini">lessons</span></div><div><b>${due}</b><span class="sub meta-mini">due checks</span></div><div><b>${gates}/8</b><span class="sub meta-mini">gates</span></div>`;
  el('conversation-progress-status').textContent=gates?'Week 1 passed':'Week 1 in progress';
  el('conversation-progress-next').textContent=next?`Next: ${next.title}${cvMainAvailableToday()?'':' · available next Bangkok day'}`:'Week 1 complete; delayed checks continue on their actual dates.';
}

function validateV830ConversationCourseContracts(){
  const errors=[],lessonIds=Object.keys(CV1_LESSONS),allLines=Object.values(CV1_LINES);
  if(lessonIds.length!==3)errors.push('Week 1 must contain exactly three canonical lessons');
  if(CV1_SCENES.l01.turns.length!==8||CV1_SCENES.l02.turns.length!==10||CV1_SCENES.l03.turns.length!==13)errors.push('Week 1 scene turn counts drifted');
  const workloads=[[CV1_LESSONS[lessonIds[0]],23,4,27],[CV1_LESSONS[lessonIds[1]],25,4,29],[CV1_LESSONS[lessonIds[2]],26,4,30],[CV1_CONSOLIDATION,23,5,28],[CV1_GATE_META,22,8,30]];
  workloads.forEach(([item,core,repair,total])=>{if(item.revision!==1||item.coreMinutes!==core||item.ordinaryRepairMinutes!==repair||item.totalMinutes!==total||item.minutes!==total)errors.push(item.id+' workload metadata drifted');});
  [['d1',4,2,6],['d7',6,2,8],['d30',10,4,14]].forEach(([stage,core,repair,total])=>{const item=CV1_DELAYED_WORKLOADS[stage];if(item.revision!==1||item.coreMinutes!==core||item.ordinaryRepairMinutes!==repair||item.totalMinutes!==total)errors.push(stage+' delayed workload metadata drifted');});
  lessonIds.forEach(id=>{const lesson=CV1_LESSONS[id],objectives=cvBuildObjectives(lesson.interactions,`cv1.form.lesson.${id}`,'lesson');if(lesson.interactions.length!==3)errors.push(id+' must have three lesson interactions');if(objectives.length!==6||objectives.some(item=>item.revision!==1||item.formId!==`cv1.form.lesson.${id}`||item.sourceInteractionId!==item.interaction.id))errors.push(id+' must have six revisioned lesson objectives');if(lesson.substitution.revision!==1)errors.push(id+' substitution revision missing');});
  if(CV1_GATE_FORMS.length!==3||CV1_GATE_FORMS.some(form=>form.revision!==1||cvBuildObjectives(form.items,form.id,'gate').length!==12))errors.push('Week 1 gate must have three revisioned 12-objective forms');
  const gateSources=CV1_GATE_FORMS.flatMap(form=>form.items.map(item=>item.id));
  if(Object.keys(CV1_GATE_POOL).length!==24||new Set(gateSources).size!==24)errors.push('Week 1 gate must use 24 disjoint sealed source interactions');
  const gateDirections=cvBuildObjectives(CV1_GATE_FORMS[0].items,CV1_GATE_FORMS[0].id,'gate').map(item=>item.direction);
  if(gateDirections.slice(0,4).some(direction=>direction!=='intent')||gateDirections.slice(4,8).some(direction=>direction!=='response'))errors.push('gate objective intent/response ordering drifted');
  Object.keys(CV1_RETENTION_FORMS).forEach(id=>{const expected=id.endsWith('d1')?6:id.endsWith('d7')?8:12;if(CV1_RETENTION_FORMS[id].length!==2||CV1_RETENTION_FORMS[id].some(form=>form.revision!==1||cvBuildObjectives(form.items,form.id,'assessment').length!==expected))errors.push('retention form shape drifted for '+id);});
  ['cv1.retention.w01.l01.d7','cv1.retention.w01.l02.d7','cv1.retention.w01.l03.d7'].forEach(id=>{const forms=CV1_RETENTION_FORMS[id];if(forms[0].items.some(item=>forms[1].items.some(other=>item.id===other.id)))errors.push('parallel +7 interactions overlap for '+id);});
  const allInteractions=[...lessonIds.flatMap(id=>CV1_LESSONS[id].interactions),...CV1_GATE_FORMS.flatMap(form=>form.items),...Object.values(CV1_RETENTION_FORMS).flatMap(forms=>forms.flatMap(form=>form.items)),...CV1_CONSOLIDATION.interactions];
  if(allInteractions.some(item=>item.revision!==1||item.contextId!==item.id.replace('cv1.interaction','cv1.context')||!item.functionId.startsWith('cv1.fn.')||!item.frameId.startsWith('cv1.frame.')||!item.acceptedSetId.startsWith('cv1.accepted-set.')||item.distractors.length!==2||item.distractors.some(x=>!x.responseId||!x.misconceptionTag)))errors.push('interaction identity, function/frame or distractor rationale drifted');
  if(allInteractions.some(item=>item.options.length!==3||!item.options.includes(item.response.id)||new Set(item.options).size!==3))errors.push('every interaction must have exactly one accepted response among three unique options');
  if(allLines.some(line=>line.revision!==1||!['active','recognition','routine','slot','transfer-only'].includes(line.role)||!line.thai.endsWith('ครับ')||line.ttsText!==line.thai||line.lang!=='th-TH'))errors.push('complete Thai lines must be revisioned, role-tagged, male-polite device-TTS records');
  const spellings={};allLines.forEach(line=>{if(spellings[line.thai]&&spellings[line.thai]!==line.tr)errors.push('inconsistent pronunciation spelling for '+line.thai);spellings[line.thai]=line.tr;});
  if(CV1_SUPPORT_RATINGS.map(item=>item.id).join('|')!=='full-support|some-support|minimal-support')errors.push('private support-rating enum drifted');
  const keySource=String(cvPronunciationKeyHtml),pairSource=String(cvRenderLessonPair),roleSource=String(cvRenderLessonRoleplay),spokenSource=String(cvRenderAssessmentSpoken);
  if(!['bp','dt','ph','th','kh','ng','ʉ','Doubled vowels','unmarked = mid','grave (à)','circumflex (â)','acute (á)','caron (ǎ)'].every(term=>keySource.includes(term)))errors.push('optional pronunciation-spelling key is incomplete');
  if(!pairSource.includes('cv-pair-cue')||!pairSource.includes('cv-pair-reply')||!pairSource.includes('if(!ok||!stillHere())return')||pairSource.includes('playConversationTurns(p,turns'))errors.push('teaching pairs must separate cue/model playback and award evidence only after successful TTS completion');
  if(!roleSource.includes('Reduced-support')||!roleSource.includes('cv-role-support')||!spokenSource.includes('cv-assessment-support')||!spokenSource.includes('supportOpenedIds'))errors.push('reduced-support and assessment support-use evidence is incomplete');
  if(!String(speakWithDeviceVoice).includes('watchdog')||!String(speakWithDeviceVoice).includes('onComplete')||!String(speakWithDeviceVoice).includes('speechRun === deviceSpeechRun')||!String(playConversationTurns).includes('utteranceWatchdog'))errors.push('device TTS stalled/interrupted/error guards are incomplete');
  const onboarding=JSON.stringify(ONBOARDING_STEPS),about=String(showAboutApp);
  if(ONBOARDING_STEPS.map(item=>item.title).join('|')!=='Speak useful Thai first|Understand before the conversation|Use the device voice; keep reading optional'||!String(onboardingStepHtml).includes('Start Lesson 1')||!String(showOnboarding).includes("startConversationCourseTask('cv1.lesson.w01.l01.food-order')"))errors.push('binding three-step onboarding or Lesson 1 launch drifted');
  if(!onboarding.includes('Reading is optional and never unlocks speaking')||!onboarding.includes('Nothing is tested cold')||!onboarding.includes('does not score pronunciation'))errors.push('onboarding claims drifted');
  ['Thai for daily life in Bangkok','eight-unit, 24-lesson conversation foundation','Speaking practice is required','Reading develops gradually through optional script noticing','Native recordings and native-speaker review are not available or required'].forEach(term=>{if(!about.includes(term))errors.push('About claim missing: '+term);});
  if(/https?:|\.(?:mp3|m4a|wav|ogg|aac|flac|webm)/i.test(JSON.stringify({lines:CV1_LINES,lessons:CV1_LESSONS})))errors.push('authored or remote audio leaked into conversation course');
  if(bangkokDayStr(new Date('2026-08-28T16:59:59Z'))!=='2026-08-28'||bangkokDayStr(new Date('2026-08-28T17:00:00Z'))!=='2026-08-29')errors.push('Bangkok day boundary is wrong');
  const legacy={done:['l1'],srs:{x:{iv:1}},conversation:{schema:1,scenes:{old:{runs:1,firstCompleted:'2026-08-01',lastCompleted:'2026-08-01',selfRating:'ready',lastRun:null}}}};const snapshot=JSON.stringify({done:legacy.done,srs:legacy.srs});cvRepairConversationState(legacy);
  if(snapshot!==JSON.stringify({done:legacy.done,srs:legacy.srs})||legacy.conversation.pace.cursor!==0||Object.keys(legacy.conversation.lessons).length)errors.push('schema-1 migration invented authority or changed Phase 1');
  const once=JSON.stringify(legacy.conversation);cvRepairConversationState(legacy);if(once!==JSON.stringify(legacy.conversation))errors.push('schema-2 repair must be idempotent');
  try{cvValidateConversationImport(cvFreshConversationState());}catch(_){errors.push('fresh schema-2 state failed strict import validation');}
  const weakness=cvFreshConversationState(),objective=cvBuildObjectives(CV1_LESSONS[lessonIds[0]].interactions,'cv1.form.lesson.w01.l01.a','lesson')[0];cvWeaknessSeen(weakness,objective,false,'wrong');const weaknessItem=weakness.weakness.items[objective.interaction.id+'>'+objective.direction];if(!weaknessItem||weaknessItem.seen!==1||weaknessItem.firstMisses!==1)errors.push('one first attempt must update weakness exactly once');
  const capDay=bangkokDayStr(),capState={conversation:cvFreshConversationState()};capState.conversation.days[capDay]={secs:0,main:null,reviews:['cv1.retention.w01.l01.d7','cv1.retention.w01.l02.d7'],repairs:[]};if(cvTodayAuthoredMinutes(capState,capDay)!==16||cvMainFitsToday(cvMainTask('cv1.lesson.w01.l03.repair'),capState,capDay))errors.push('45-minute authored workload cap failed');
  if(typeof handleEndDay==='function'&&(String(handleEndDay).includes('startConversationPilot')||!String(handleEndDay).includes('startConversationCoursePrimary')))errors.push('End Day still routes to the retired conversation pilot');
  if(errors.length)throw new Error('V8.3 conversation course contract failed:\n'+errors.join('\n'));return true;
}
