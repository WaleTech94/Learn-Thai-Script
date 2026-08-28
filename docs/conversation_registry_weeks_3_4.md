# Conversation Registry — Weeks 3–4

**Registry:** `cv1`
**Registry revision:** 1
**Lessons:** L07–L12 only
**Parent:** `conversation_course_implementation_spec.md`
**Binding status:** this registry overrides the compact W3–W4 rows in `conversation_course_content_inventory.md` where they differ. It changes no application code.

This is the closed machine registry for Weeks 3–4. There are no authoring choices left inside its scope. An implementation may change presentation, but may not change an ID's Thai, meaning, role, prerequisites, context, accepted response, distractors, form membership or stage allocation without incrementing that record's revision.

## 1. Machine conventions

- Every record has `revision:1`.
- `TTS=*` expands exactly to `{ttsText:<the exact unsegmented Thai field>,lang:"th-TH",rate:0.72}`. No other W3–W4 utterance rate is authorised.
- Context cards and learner-led events have no Thai audio: `ttsText:null`.
- `/` marks a meaningful teaching chunk and is removed from `ttsText`.
- All modelled partners and learners are male. Every complete modelled Thai utterance ends in `ครับ`.
- Thai script, segmentation, pronunciation spelling and English are supports. None is a reading prerequisite or score.
- `P` is partner recognition language; `A` is an active learner response; `R` is a routine/reused learner response; `E` is a non-audio English event.
- An ordinary interaction expands to two objectives: `.cue-intent` and `.response-select`. An event interaction expands to `.event-request` and `.followup-intent`.
- An option contract contains one displayed accepted response plus exactly two functionally wrong distractor response IDs. The UI therefore renders exactly three buttons labelled A/B/C. Each distractor has a misconception tag.
- All objective form manifests are immutable ordered arrays. `expand(i)` means `[i + ".cue-intent", i + ".response-select"]`, except an event interaction, where it means `[i + ".event-request", i + ".followup-intent"]`.
- `+1` form A contains exactly one declared familiar rehearsal per lesson. Every other `+1`, `+7`, gate and `+30` signature is distinct. Gate and `+30` responses may have been taught as atoms, but their complete `context|cue-or-event|accepted-set` signatures are sealed.
- Local vocabulary decisions are closed: L07 has only `อเมริกาโน่` and `ลาเต้` as café drink slots; L12 has only `ร้านนี้` and `หน้าโรงเรียน` as meeting-place slots and only `เที่ยง` and `เที่ยงครึ่ง` as time slots. L12 time and place remain separate, and each L12 answer has at most three chunks.

## 2. Lesson, scene and function registry

| Lesson ID | Scene ID | Context ID | Outcome | Prerequisites |
|---|---|---|---|---|
| `cv1.lesson.w03.l07.cafe` | `cv1.scene.w03.l07.model` | `cv1.context.w03.l07.cafe-counter` | Order one taught café drink; choose temperature and sweetness. | `cv1.lesson.w01.l01.food-order`, `cv1.lesson.w01.l02.food-options` |
| `cv1.lesson.w03.l08.checkout` | `cv1.scene.w03.l08.model` | `cv1.context.w03.l08.convenience-checkout` | Add one water, decline a bag, request a taught payment method. | `cv1.lesson.w01.l02.food-options`, `cv1.lesson.w03.l07.cafe` |
| `cv1.lesson.w03.l09.market` | `cv1.scene.w03.l09.model` | `cv1.context.w03.l09.open-market` | Ask a mango-bag unit price, choose one–three bags, bargain only after permission. | `cv1.lesson.w01.l01.food-order`, `cv1.lesson.w03.l08.checkout` |
| `cv1.lesson.w04.l10.introduction` | `cv1.scene.w04.l10.model` | `cv1.context.w04.l10.colleague-introduction` | Give Lateef's name, United Kingdom origin and maths-teacher job. | `cv1.lesson.w02.l04.taxi-destination`, `cv1.lesson.w02.l06.street-directions` |
| `cv1.lesson.w04.l11.limited-thai` | `cv1.scene.w04.l11.model` | `cv1.context.w04.l11.colleague-smalltalk` | State limited Thai and retrieve slow-speech/non-understanding repairs. | `cv1.lesson.w01.l03.repair`, `cv1.lesson.w04.l10.introduction` |
| `cv1.lesson.w04.l12.lunch-plan` | `cv1.scene.w04.l12.model` | `cv1.context.w04.l12.colleague-lunch` | Accept lunch, counter noon with 12:30, choose restaurant or school meeting place. | `cv1.lesson.w04.l10.introduction`, `cv1.lesson.w04.l11.limited-thai` |

| Function ID | Lesson | Role | Frame ID | Cue family ID |
|---|---|---|---|---|
| `cv1.fn.cafe.order-drink` | L07 | A | `cv1.frame.cafe.request-drink` | `cv1.cue-family.cafe.order` |
| `cv1.fn.cafe.choose-temperature` | L07 | A | `cv1.frame.cafe.temperature-answer` | `cv1.cue-family.cafe.temperature` |
| `cv1.fn.cafe.choose-sweetness` | L07 | A | `cv1.frame.cafe.sweetness-answer` | `cv1.cue-family.cafe.sweetness` |
| `cv1.fn.checkout.add-water` | L08 | A/reuse | `cv1.frame.food.water-one` | `cv1.cue-family.checkout.extra-item` |
| `cv1.fn.checkout.decline-bag` | L08 | A | `cv1.frame.checkout.bag-answer` | `cv1.cue-family.checkout.bag` |
| `cv1.fn.checkout.choose-payment` | L08 | A | `cv1.frame.checkout.payment-request` | `cv1.cue-family.checkout.payment` |
| `cv1.fn.market.ask-unit-price` | L09 | A/event | `cv1.frame.market.unit-price-question` | `cv1.event-family.market.ask-unit-price` |
| `cv1.fn.market.choose-quantity` | L09 | A | `cv1.frame.market.quantity-order` | `cv1.cue-family.market.unit-price-statement` |
| `cv1.fn.market.request-discount` | L09 | A/contextual | `cv1.frame.market.discount-request` | `cv1.cue-family.market.bargain-open` |
| `cv1.fn.introduction.give-name` | L10 | A | `cv1.frame.introduction.name` | `cv1.cue-family.introduction.name` |
| `cv1.fn.introduction.give-origin` | L10 | A | `cv1.frame.introduction.origin` | `cv1.cue-family.introduction.origin` |
| `cv1.fn.introduction.give-job` | L10 | A | `cv1.frame.introduction.job` | `cv1.cue-family.introduction.job` |
| `cv1.fn.limited-thai.state-ability` | L11 | A | `cv1.frame.limited-thai.ability` | `cv1.cue-family.limited-thai.ability` |
| `cv1.fn.repair.request-slower` | L11 | A/reuse | `cv1.frame.repair.slower` | `cv1.cue-family.limited-thai.speed` |
| `cv1.fn.repair.signal-nonunderstanding` | L11 | A/reuse | `cv1.frame.repair.nonunderstanding` | `cv1.cue-family.limited-thai.understanding` |
| `cv1.fn.lunch.accept` | L12 | A | `cv1.frame.lunch.accept` | `cv1.cue-family.lunch.invitation` |
| `cv1.fn.lunch.counter-time` | L12 | A | `cv1.frame.lunch.time-counter` | `cv1.cue-family.lunch.time` |
| `cv1.fn.lunch.choose-place` | L12 | A | `cv1.frame.lunch.meeting-place` | `cv1.cue-family.lunch.place` |

## 3. Slot and frame registry

| Frame ID | Segmented template | English function | Slot IDs | Source note |
|---|---|---|---|---|
| `cv1.frame.cafe.request-drink` | `ขอ/{drink}/ครับ` | request a taught drink | `cv1.slot.cafe.drink.americano`, `.latte` | New L07 family. Qualifiers remain separate turns. |
| `cv1.frame.cafe.temperature-answer` | `{temperature}/ครับ` | answer hot/iced | `cv1.slot.cafe.temperature.hot`, `.iced` | Closed two-way answer. |
| `cv1.frame.cafe.sweetness-answer` | `{sweetness}/ครับ` | answer sweetness | `cv1.slot.cafe.sweetness.none`, `.less` | Closed two-way answer. |
| `cv1.frame.food.water-one` | `น้ำเปล่า/ขวดหนึ่ง/ครับ` | one bottle of water | `cv1.slot.food.drink.water`, `cv1.slot.quantity.bottle-one` | Exact L02 reuse. |
| `cv1.frame.checkout.bag-answer` | `{bag-decision}/ครับ` | decline checkout bag | `cv1.slot.checkout.bag.no-need`, `.do-not-want` | New fixed alternatives, no quantity goal. |
| `cv1.frame.checkout.payment-request` | `จ่ายด้วย/{payment}/ได้ไหม/ครับ` | ask to pay by method | `cv1.slot.payment.card`, `.cash`, `.qr` | New L08 family. |
| `cv1.frame.market.unit-price-question` | `{unit-price-question}/ครับ` | ask price per mango bag | `cv1.slot.market.price-question.per-bag`, `.mango-per-bag`, `.this-item` | Learner-led event; no fabricated cue. |
| `cv1.frame.market.quantity-order` | `เอา/{quantity}/ถุง/ครับ` | take one–three bags | `cv1.slot.quantity.one`, `.two`, `.three`, `cv1.slot.classifier.bag` | New L09 family. |
| `cv1.frame.market.discount-request` | `ลด/{degree?}/ได้ไหม/ครับ` | request discount | `cv1.slot.market.discount.little`, `.plain` | Enabled only by `bargainAllowed:true`. |
| `cv1.frame.introduction.name` | `ผม/ชื่อ/ลาทีฟ/ครับ` | give fixed name | `cv1.slot.profile.name.lateef` | Authored personal fact. |
| `cv1.frame.introduction.origin` | `ผม/มาจาก/สหราชอาณาจักร/ครับ` | give fixed UK origin | `cv1.slot.profile.origin.united-kingdom` | `อังกฤษ` is not an accepted proxy. |
| `cv1.frame.introduction.job` | `ผม/เป็น/{job}/ครับ` | give occupation | `cv1.slot.profile.job.maths-teacher`, `.teacher` | New L10 productive family. |
| `cv1.frame.limited-thai.ability` | `ผม/พูดไทย/ได้/นิดหน่อย/ครับ` | state limited Thai ability | `cv1.slot.language.thai`, `cv1.slot.amount.a-little` | Exact required line. |
| `cv1.frame.repair.slower` | `พูด/ช้าๆ/{softener?}/ครับ` | request slower speech | `cv1.slot.repair.slower.can-you`, `.please` | Exact L03 frame reuse. |
| `cv1.frame.repair.nonunderstanding` | `{subject?}/ไม่เข้าใจ/ครับ` | signal non-understanding | `cv1.slot.repair.subject.none`, `.i` | Exact L03 function reuse. |
| `cv1.frame.lunch.accept` | `{acceptance}/ครับ` | accept invitation | `cv1.slot.lunch.accept.go`, `.okay` | Closed answer. |
| `cv1.frame.lunch.time-counter` | `{time-counter}/ครับ` | counter noon with 12:30 | `cv1.slot.time.noon`, `.twelve-thirty` | Time remains separate from place. |
| `cv1.frame.lunch.meeting-place` | `เจอกัน/ที่/{place}/ครับ` | choose meeting place | `cv1.slot.place.this-restaurant`, `.front-of-school` | Exactly three chunks; no other place slot. |

| Slot ID | Thai atom | Pronunciation | English | First source |
|---|---|---|---|---|
| `cv1.slot.cafe.drink.americano` | `อเมริกาโน่` | *a-mee-rí-gaa-nô* | Americano | L07 preteach |
| `cv1.slot.cafe.drink.latte` | `ลาเต้` | *laa-dtêe* | latte | L07 controlled substitution |
| `cv1.slot.cafe.temperature.hot` | `ร้อน` | *rórn* | hot | L07 preteach |
| `cv1.slot.cafe.temperature.iced` | `เย็น` | *yen* | iced | L07 preteach |
| `cv1.slot.cafe.sweetness.none` | `ไม่หวาน` | *mâi wǎan* | not sweet | L07 preteach |
| `cv1.slot.cafe.sweetness.less` | `หวานน้อย` | *wǎan nói* | less sweet | L07 preteach before variants |
| `cv1.slot.food.drink.water` | `น้ำเปล่า` | *náam-bplàao* | water | L02 |
| `cv1.slot.quantity.bottle-one` | `ขวดหนึ่ง` | *khùat nùeng* | one bottle | L02 |
| `cv1.slot.checkout.bag.no-need` | `ไม่ต้องใส่ถุง` | *mâi dtông sài thǔng* | no bag needed | L08 preteach |
| `cv1.slot.checkout.bag.do-not-want` | `ไม่เอาถุง` | *mâi ao thǔng* | do not want a bag | L08 preteach as accepted alternative |
| `cv1.slot.payment.card` | `บัตร` | *bàt* | card | L08 preteach |
| `cv1.slot.payment.cash` | `เงินสด` | *ngoen-sòt* | cash | L08 preteach |
| `cv1.slot.payment.qr` | `คิวอาร์` | *khio-aa* | QR | L08 recognition/transfer preteach |
| `cv1.slot.market.price-question.per-bag` | `ถุงละกี่บาท` | *thǔng lá gìi bàat* | how much per bag | L09 preteach |
| `cv1.slot.market.price-question.mango-per-bag` | `มะม่วงถุงละกี่บาท` | *má-mûang thǔng lá gìi bàat* | how much per bag of mangoes | L09 preteach |
| `cv1.slot.market.price-question.this-item` | `อันนี้เท่าไหร่` | *an níi thâo-rài* | how much is this | L01 atoms plus L09 preteach |
| `cv1.slot.quantity.one` | `หนึ่ง` | *nùeng* | one | prior number inventory |
| `cv1.slot.quantity.two` | `สอง` | *sǎawng* | two | prior number inventory |
| `cv1.slot.quantity.three` | `สาม` | *sǎam* | three | prior number inventory |
| `cv1.slot.classifier.bag` | `ถุง` | *thǔng* | bag classifier | L08 then L09 |
| `cv1.slot.market.discount.little` | `หน่อย` | *nòi* | a little | L09 preteach |
| `cv1.slot.market.discount.plain` | `—` | *—* | no degree word | L09 controlled reduction |
| `cv1.slot.profile.name.lateef` | `ลาทีฟ` | *laa-thîif* | Lateef | L10 authored fact |
| `cv1.slot.profile.origin.united-kingdom` | `สหราชอาณาจักร` | *sà-hà-râat-chá-aa-naa-jàk* | United Kingdom | L10 authored fact |
| `cv1.slot.profile.job.maths-teacher` | `ครูคณิตศาสตร์` | *khruu kha-nít-dtà-sàat* | maths teacher | L10 authored fact |
| `cv1.slot.profile.job.teacher` | `ครู` | *khruu* | teacher | L10 controlled substitution |
| `cv1.slot.language.thai` | `ไทย` | *thai* | Thai | L11 preteach |
| `cv1.slot.amount.a-little` | `นิดหน่อย` | *nít-nòi* | a little | L11 preteach |
| `cv1.slot.repair.slower.can-you` | `ได้ไหม` | *dâai mǎi* | could you | L03 |
| `cv1.slot.repair.slower.please` | `หน่อย` | *nòi* | please/a little | L09 then L11 |
| `cv1.slot.repair.subject.none` | `—` | *—* | no explicit subject | L03 |
| `cv1.slot.repair.subject.i` | `ผม` | *phǒm* | I | L10 |
| `cv1.slot.lunch.accept.go` | `ไป` | *bpai* | go/yes | L12 |
| `cv1.slot.lunch.accept.okay` | `ได้` | *dâai* | okay | prior routine |
| `cv1.slot.time.noon` | `เที่ยง` | *thîang* | noon | L12 preteach |
| `cv1.slot.time.twelve-thirty` | `เที่ยงครึ่ง` | *thîang-khrʉ̂ng* | 12:30 | L12 preteach |
| `cv1.slot.place.this-restaurant` | `ร้านนี้` | *ráan níi* | this restaurant | L12 preteach |
| `cv1.slot.place.front-of-school` | `หน้าโรงเรียน` | *nâa rohng-rian* | in front of the school | L12 preteach |

## 4. Context and event registry

All context cards are English-only, visible before playback, and contain no Thai quotation or paraphrase.

| Context/event ID | Role | Exact card/goal | State flags | Prerequisite/source |
|---|---|---|---|---|
| `cv1.context.w03.l07.cafe-counter` | context | Male barista at a counter-service café. | `pricingContext:fixed` | L01–L02 |
| `cv1.context.w03.l07.goal-americano` | context | You want an Americano. | `drink:americano` | L07 slot preteach |
| `cv1.context.w03.l07.goal-latte` | context | You want a latte. | `drink:latte` | L07 slot preteach |
| `cv1.context.w03.l07.goal-iced` | context | You want the drink iced. | `temperature:iced` | L07 slot preteach |
| `cv1.context.w03.l07.goal-hot` | context | You want the drink hot. | `temperature:hot` | L07 slot preteach |
| `cv1.context.w03.l07.goal-not-sweet` | context | You do not want the drink sweet. | `sweetness:none` | L07 slot preteach |
| `cv1.context.w03.l07.goal-less-sweet` | context | You want the drink less sweet. | `sweetness:less` | L07 slot preteach |
| `cv1.context.w03.l08.convenience-checkout` | context | Male convenience-store clerk at checkout. | `pricingContext:fixed` | L02, L07 |
| `cv1.context.w03.l08.goal-water-one` | context | You want one bottle of water as the only extra item. | `item:water-one` | L02 exact reuse |
| `cv1.context.w03.l08.goal-no-bag` | context | You do not want a bag. | `bag:false` | L08 preteach |
| `cv1.context.w03.l08.goal-card` | context | You want to pay by card. | `payment:card` | L08 preteach |
| `cv1.context.w03.l08.goal-cash` | context | You want to pay with cash. | `payment:cash` | L08 preteach |
| `cv1.context.w03.l08.goal-qr` | context | You want to pay by QR. | `payment:qr` | L08 preteach |
| `cv1.context.w03.l09.open-market` | context | Male seller at an open-air mango stall. | `pricingContext:open-market` | L08 complete |
| `cv1.context.w03.l09.goal-one-bag` | context | The unit price is known; you want one bag. | `quantity:one` | L09 quantity preteach |
| `cv1.context.w03.l09.goal-two-bags` | context | The unit price is known; you want two bags. | `quantity:two` | L09 quantity preteach |
| `cv1.context.w03.l09.goal-three-bags` | context | The unit price is known; you want three bags. | `quantity:three` | L09 quantity preteach |
| `cv1.context.w03.l09.bargain-little` | context | The seller has explicitly offered a small reduction; ask politely for it. | `bargainAllowed:true` | bargain-open cue required |
| `cv1.context.w03.l09.bargain-plain` | context | The seller has explicitly said the price can be reduced; ask whether it can be reduced. | `bargainAllowed:true` | bargain-open cue required |
| `cv1.event.w03.l09.ask-unit-price.v01` | E | You are interested in the mangoes and want the price per bag. | `ttsText:null` | mango, bag and price atoms pre-taught |
| `cv1.event.w03.l09.ask-unit-price.v02` | E | You point to the mango bags; no price is displayed, and you want the unit price. | `ttsText:null` | same |
| `cv1.event.w03.l09.ask-unit-price.v03` | E | You see several mango bags without labels and want to ask how much one bag costs. | `ttsText:null` | same |
| `cv1.event.w03.l09.ask-unit-price.v04` | E | You point to this mango bag and want its price. | `ttsText:null` | `อันนี้` from L01; price atom pre-taught |
| `cv1.context.w04.l10.colleague-introduction` | context | A male colleague is meeting you for the first time. | `profile:fixed-course-facts` | greeting and W2 location |
| `cv1.context.w04.l10.goal-name` | context | Give your authored course name fact. | `fact:name-lateef` | L10 preteach |
| `cv1.context.w04.l10.goal-origin` | context | Give your authored United Kingdom origin fact. | `fact:origin-united-kingdom` | L10 preteach |
| `cv1.context.w04.l10.goal-job` | context | Give your authored maths-teacher job fact. | `fact:job-maths-teacher` | L10 preteach |
| `cv1.context.w04.l11.colleague-smalltalk` | context | A male colleague is making brief small talk. | `ordinaryConversation:true` | L10 complete |
| `cv1.context.w04.l11.goal-limited-thai` | context | Truthfully use the course phrase that says your Thai is limited. | `ability:limited` | L11 preteach |
| `cv1.context.w04.l11.goal-needs-slower` | context | You understood the topic but need the speaker to slow down. | `tooFast:true` | L03 slower repair |
| `cv1.context.w04.l11.goal-meaning-unknown` | context | You do not understand the meaning. | `meaningUnknown:true` | L03 non-understanding |
| `cv1.context.w04.l12.colleague-lunch` | context | A male colleague is arranging lunch. | `socialPlan:true` | L10–L11 |
| `cv1.context.w04.l12.goal-accept` | context | Accept the lunch invitation. | `accept:true` | L12 preteach |
| `cv1.context.w04.l12.goal-twelve-thirty` | context | Noon does not work; suggest 12:30. | `time:twelve-thirty` | both times pre-taught |
| `cv1.context.w04.l12.goal-restaurant` | context | Choose this restaurant as the meeting place. | `place:this-restaurant` | place preteach |
| `cv1.context.w04.l12.goal-school` | context | Choose the front of the school as the meeting place. | `place:front-of-school` | place preteach |
| `cv1.context.cross.w03.l07.cafe-payment-card` | context | The café total has been given; use the checkout payment function and pay by card. | `crossScene:true,payment:card` | L07 and L08 complete before L07 +7 |
| `cv1.context.cross.w03.l07.cafe-no-bag` | context | A takeaway café purchase is ready; decline the offered bag. | `crossScene:true,bag:false` | L07 and L08 complete before alternate +7 |
| `cv1.context.cross.w03.l08.market-payment-card` | context | A market total has been given; use the checkout payment function and pay by card. | `crossScene:true,payment:card` | L09 complete before L08 +7 |
| `cv1.context.cross.w03.l08.market-no-bag` | context | A market seller offers an extra carry bag; decline it. | `crossScene:true,bag:false` | L09 complete |
| `cv1.context.cross.w03.l09.fixed-store-two-bags` | context | Pre-bagged mangoes have a fixed unit price in a store; take two bags and do not bargain. | `crossScene:true,pricingContext:fixed,quantity:two` | L08–L09 complete |
| `cv1.context.cross.w03.l09.fixed-store-three-bags` | context | Pre-bagged mangoes have a fixed unit price in a store; take three bags and do not bargain. | `crossScene:true,pricingContext:fixed,quantity:three` | L08–L09 complete |
| `cv1.context.cross.w04.l10.lunch-introduction` | context | A male colleague asks for one personal fact before lunch. | `crossScene:true` | L10–L12 complete before L10 +7 |
| `cv1.context.cross.w04.l10.reception-introduction` | context | A male receptionist politely asks for one authored personal fact. | `crossScene:true` | L10 and L13 complete before alternate +7 |
| `cv1.context.cross.w04.l11.reception-too-fast` | context | A male receptionist spoke too fast; request slower speech. | `crossScene:true,tooFast:true` | L11 and L13 complete |
| `cv1.context.cross.w04.l11.lunch-meaning-unknown` | context | During lunch planning, you do not understand the meaning. | `crossScene:true,meaningUnknown:true` | L11–L12 complete |
| `cv1.context.cross.w04.l12.maintenance-time` | context | A male technician suggests noon; counter with 12:30. | `crossScene:true,time:twelve-thirty` | L12 and L15 complete before L12 +7 |
| `cv1.context.cross.w04.l12.school-handoff` | context | A male courier asks where to meet; choose the front of the school. | `crossScene:true,place:front-of-school` | L12 and L14 complete |

## 5. Routine registry

| Routine ID | Thai / segmentation | Pronunciation | English | Role | TTS | Prerequisite/source |
|---|---|---|---|---|---|---|
| `cv1.routine.social.greeting` | `สวัสดี/ครับ` | *sà-wàt-dii khráp* | Hello. | P/R | * | W1 routine |
| `cv1.routine.social.thanks` | `ขอบคุณ/ครับ` | *khòrp-khun khráp* | Thank you. | P/R | * | W1 routine |
| `cv1.routine.social.okay` | `ได้/ครับ` | *dâai khráp* | Okay. | P/R | * | W1 routine |
| `cv1.routine.food.dine-here` | `ทานที่นี่/ครับ` | *thaan thîi-nîi khráp* | For here. | R | * | exact `cv1.response.w01.l02.dine-here` recurrence |
| `cv1.routine.checkout.pay-cash` | `จ่ายด้วย/เงินสด/ครับ` | *jàai dûai ngoen-sòt khráp* | I’ll pay with cash. | R | * | L08 payment atoms; first complete use in L09 |
| `cv1.routine.social.well` | `สบายดี/ครับ` | *sà-baai dii khráp* | I’m well. | R | * | L11 preteach |
| `cv1.routine.social.nice-to-meet` | `ยินดี/ที่ได้รู้จัก/ครับ` | *yin-dii thîi dâai rúu-jàk khráp* | Nice to meet you. | P/R | * | L10 preteach |
| `cv1.routine.location.live-ekkamai` | `ผม/อยู่/เอกมัย/ครับ` | *phǒm yùu èek-gà-mai khráp* | I live in Ekkamai. | R | * | W2 location atoms; fixed authored area fact |
| `cv1.routine.location.go-ekkamai` | `ไป/เอกมัย/ครับ` | *bpai èek-gà-mai khráp* | I’m going to Ekkamai. | R | * | L04 destination frame |
| `cv1.routine.social.see-you` | `เจอกัน/ครับ` | *jooe gan khráp* | See you. | P/R | * | L12 preteach |
| `cv1.routine.market.total-ninety` | `ได้ครับ/ทั้งหมดเก้าสิบบาท/ครับ` | *dâai khráp tháng-mòt gâo-sìp bàat khráp* | Okay; ninety baht altogether. | P | * | L09 numbers; bargain accepted |

## 6. Cue-family and cue-variant registry

Every cue below is a complete male-partner utterance, so `role:P` and `TTS=*` apply.

### 6.1 L07 cue variants

| Cue variant ID | Family | Thai / segmentation | Pronunciation | English | Prerequisite/source |
|---|---|---|---|---|---|
| `cv1.cue-variant.cafe.order.v01` | `cv1.cue-family.cafe.order` | `รับ/อะไรดี/ครับ` | *ráp a-rai dii khráp* | What would you like? | `รับ/อะไรดี` from L01 cue atoms; L07 model |
| `cv1.cue-variant.cafe.order.v02` | same | `จะรับ/อะไร/ครับ` | *jà ráp a-rai khráp* | What will you have? | `จะรับ/อะไร` from L01 |
| `cv1.cue-variant.cafe.order.v03` | same | `รับ/อเมริกาโน่หรือลาเต้/ครับ` | *ráp a-mee-rí-gaa-nô rǔue laa-dtêe khráp* | Americano or latte? | both drink slots taught first |
| `cv1.cue-variant.cafe.order.v04` | same | `เอา/อะไรดี/ครับ` | *ao a-rai dii khráp* | What would you like? | `เอา/อะไร/ดี` taught by L01/L07 |
| `cv1.cue-variant.cafe.temperature.v01` | `cv1.cue-family.cafe.temperature` | `รับ/ร้อนหรือเย็น/ครับ` | *ráp rórn rǔue yen khráp* | Hot or iced? | L07 model |
| `cv1.cue-variant.cafe.temperature.v02` | same | `อเมริกาโน่/ร้อนหรือเย็น/ครับ` | *a-mee-rí-gaa-nô rórn rǔue yen khráp* | Hot or iced Americano? | taught drink/temperature slots |
| `cv1.cue-variant.cafe.temperature.v03` | same | `ลาเต้/ร้อนหรือเย็น/ครับ` | *laa-dtêe rórn rǔue yen khráp* | Hot or iced latte? | same |
| `cv1.cue-variant.cafe.temperature.v04` | same | `เอา/ร้อนหรือเย็น/ครับ` | *ao rórn rǔue yen khráp* | Would you like it hot or iced? | `เอา` L01; both temperature slots L07 |
| `cv1.cue-variant.cafe.sweetness.v01` | `cv1.cue-family.cafe.sweetness` | `รับ/หวาน/ไหม/ครับ` | *ráp wǎan mǎi khráp* | Would you like it sweet? | L07 model |
| `cv1.cue-variant.cafe.sweetness.v02` | same | `อเมริกาโน่/หวาน/ไหม/ครับ` | *a-mee-rí-gaa-nô wǎan mǎi khráp* | Would you like the Americano sweet? | taught slots |
| `cv1.cue-variant.cafe.sweetness.v03` | same | `ลาเต้/หวาน/ไหม/ครับ` | *laa-dtêe wǎan mǎi khráp* | Would you like the latte sweet? | taught slots |
| `cv1.cue-variant.cafe.sweetness.v04` | same | `เอา/หวาน/ไหม/ครับ` | *ao wǎan mǎi khráp* | Would you like it sweet? | L01/L07 atoms |

### 6.2 L08 cue variants

| Cue variant ID | Family | Thai / segmentation | Pronunciation | English | Prerequisite/source |
|---|---|---|---|---|---|
| `cv1.cue-variant.checkout.extra-item.v01` | `cv1.cue-family.checkout.extra-item` | `รับ/อะไรเพิ่ม/ไหม/ครับ` | *ráp a-rai phôoem mǎi khráp* | Anything else? | L02 exact cue; L08 model |
| `cv1.cue-variant.checkout.extra-item.v02` | same | `รับ/น้ำเพิ่ม/ไหม/ครับ` | *ráp náam phôoem mǎi khráp* | Would you like another drink? | `รับ/น้ำ` L02; `เพิ่ม` taught |
| `cv1.cue-variant.checkout.extra-item.v03` | same | `เอา/อะไรเพิ่ม/ไหม/ครับ` | *ao a-rai phôoem mǎi khráp* | Would you like anything else? | L01 `เอา`; L02 cue |
| `cv1.cue-variant.checkout.extra-item.v04` | same | `รับ/น้ำเปล่าเพิ่ม/ไหม/ครับ` | *ráp náam-bplàao phôoem mǎi khráp* | Would you like water as an extra item? | water exact L02 |
| `cv1.cue-variant.checkout.bag.v01` | `cv1.cue-family.checkout.bag` | `รับ/ถุง/ไหม/ครับ` | *ráp thǔng mǎi khráp* | Would you like a bag? | L08 model |
| `cv1.cue-variant.checkout.bag.v02` | same | `เอา/ถุง/ไหม/ครับ` | *ao thǔng mǎi khráp* | Do you want a bag? | `เอา` L01; `ถุง` L08 |
| `cv1.cue-variant.checkout.bag.v03` | same | `ใส่ถุง/ไหม/ครับ` | *sài thǔng mǎi khráp* | Shall I put it in a bag? | `ใส่ถุง` taught before cue |
| `cv1.cue-variant.checkout.bag.v04` | same | `ต้องการ/ถุง/ไหม/ครับ` | *dtông-gaan thǔng mǎi khráp* | Do you need a bag? | recognition atom `ต้องการ` explicitly pre-taught in L08 cue strip |
| `cv1.cue-variant.checkout.payment.v01` | `cv1.cue-family.checkout.payment` | `ทั้งหมด/สิบห้าบาท/ครับ` | *tháng-mòt sìp-hâa bàat khráp* | Fifteen baht altogether. | number preteach; L08 model |
| `cv1.cue-variant.checkout.payment.v02` | same | `ทั้งหมด/ยี่สิบบาท/ครับ` | *tháng-mòt yîi-sìp bàat khráp* | Twenty baht altogether. | number strip taught before variants |
| `cv1.cue-variant.checkout.payment.v03` | same | `จ่าย/เงินสดหรือบัตร/ครับ` | *jàai ngoen-sòt rǔue bàt khráp* | Cash or card? | payment slots pre-taught |
| `cv1.cue-variant.checkout.payment.v04` | same | `จ่าย/บัตรหรือคิวอาร์/ครับ` | *jàai bàt rǔue khio-aa khráp* | Card or QR? | payment slots pre-taught |

### 6.3 L09 event follow-ups and cue variants

The four event records are in section 4. Every event interaction uses a real seller follow-up from this table; no generic audio cue is invented.

| Cue variant ID | Family | Thai / segmentation | Pronunciation | English | Prerequisite/source |
|---|---|---|---|---|---|
| `cv1.cue-variant.market.price-followup.v01` | `cv1.cue-family.market.price-followup` | `ถุงละ/ห้าสิบบาท/ครับ` | *thǔng lá hâa-sìp bàat khráp* | Fifty baht per bag. | price atoms L09 |
| `cv1.cue-variant.market.price-followup.v02` | same | `มะม่วง/ถุงละห้าสิบบาท/ครับ` | *má-mûang thǔng lá hâa-sìp bàat khráp* | Mangoes are fifty baht per bag. | same |
| `cv1.cue-variant.market.price-followup.v03` | same | `ถุงนี้/สี่สิบบาท/ครับ` | *thǔng níi sìi-sìp bàat khráp* | This bag is forty baht. | `ถุง/นี้` taught; price strip |
| `cv1.cue-variant.market.price-followup.v04` | same | `มะม่วง/ถุงนี้ห้าสิบบาท/ครับ` | *má-mûang thǔng níi hâa-sìp bàat khráp* | This bag of mangoes is fifty baht. | same |
| `cv1.cue-variant.market.unit-price-statement.v01` | `cv1.cue-family.market.unit-price-statement` | `ห้าสิบบาท/ครับ` | *hâa-sìp bàat khráp* | Fifty baht. | L09 model |
| `cv1.cue-variant.market.unit-price-statement.v02` | same | `ถุงละ/ห้าสิบบาท/ครับ` | *thǔng lá hâa-sìp bàat khráp* | Fifty baht per bag. | price atoms taught |
| `cv1.cue-variant.market.unit-price-statement.v03` | same | `ถุงละ/สี่สิบบาท/ครับ` | *thǔng lá sìi-sìp bàat khráp* | Forty baht per bag. | price strip taught |
| `cv1.cue-variant.market.unit-price-statement.v04` | same | `มะม่วง/ถุงละห้าสิบบาท/ครับ` | *má-mûang thǔng lá hâa-sìp bàat khráp* | Mangoes are fifty baht per bag. | all atoms taught before serving |
| `cv1.cue-variant.market.bargain-open.v01` | `cv1.cue-family.market.bargain-open` | `ถ้าเอาสองถุง/ลดได้นิดหน่อย/ครับ` | *thâa ao sǎawng thǔng lót dâai nít-nòi khráp* | If you take two bags, I can reduce it a little. | L09 model; `bargainAllowed:true` |
| `cv1.cue-variant.market.bargain-open.v02` | same | `ลดได้/นิดหน่อย/ครับ` | *lót dâai nít-nòi khráp* | I can reduce it a little. | explicit permission |
| `cv1.cue-variant.market.bargain-open.v03` | same | `ถ้าเอาสามถุง/ลดได้/ครับ` | *thâa ao sǎam thǔng lót dâai khráp* | If you take three bags, I can reduce it. | explicit permission; all quantity atoms taught |
| `cv1.cue-variant.market.bargain-open.v04` | same | `เอาสามถุง/ลดได้/ครับ` | *ao sǎam thǔng lót dâai khráp* | If you take three bags, I can reduce it. | explicit permission |

### 6.4 L10 cue variants

| Cue variant ID | Family | Thai / segmentation | Pronunciation | English | Prerequisite/source |
|---|---|---|---|---|---|
| `cv1.cue-variant.introduction.name.v01` | `cv1.cue-family.introduction.name` | `คุณ/ชื่ออะไร/ครับ` | *khun chûue a-rai khráp* | What is your name? | L10 model |
| `cv1.cue-variant.introduction.name.v02` | same | `ชื่ออะไร/ครับ` | *chûue a-rai khráp* | What is your name? | deletion of taught `คุณ` only |
| `cv1.cue-variant.introduction.name.v03` | same | `ชื่อ/ลาทีฟ/ใช่ไหม/ครับ` | *chûue laa-thîif châi mǎi khráp* | Is your name Lateef? | fixed fact and `ใช่ไหม` pre-taught |
| `cv1.cue-variant.introduction.name.v04` | same | `คุณ/ชื่อลาทีฟ/ใช่ไหม/ครับ` | *khun chûue laa-thîif châi mǎi khráp* | Is your name Lateef? | same |
| `cv1.cue-variant.introduction.origin.v01` | `cv1.cue-family.introduction.origin` | `คุณ/มาจากไหน/ครับ` | *khun maa jàak nǎi khráp* | Where are you from? | L10 model |
| `cv1.cue-variant.introduction.origin.v02` | same | `มาจากไหน/ครับ` | *maa jàak nǎi khráp* | Where are you from? | taught-atom reduction |
| `cv1.cue-variant.introduction.origin.v03` | same | `มาจาก/สหราชอาณาจักร/ใช่ไหม/ครับ` | *maa jàak sà-hà-râat-chá-aa-naa-jàk châi mǎi khráp* | Are you from the United Kingdom? | fixed fact and confirmation cue pre-taught |
| `cv1.cue-variant.introduction.origin.v04` | same | `คุณ/มาจากสหราชอาณาจักร/ใช่ไหม/ครับ` | *khun maa jàak sà-hà-râat-chá-aa-naa-jàk châi mǎi khráp* | Are you from the United Kingdom? | same |
| `cv1.cue-variant.introduction.job.v01` | `cv1.cue-family.introduction.job` | `คุณ/ทำงานอะไร/ครับ` | *khun tham-ngaan a-rai khráp* | What work do you do? | L10 model |
| `cv1.cue-variant.introduction.job.v02` | same | `ทำงานอะไร/ครับ` | *tham-ngaan a-rai khráp* | What work do you do? | taught-atom reduction |
| `cv1.cue-variant.introduction.job.v03` | same | `เป็น/ครูคณิตศาสตร์/ใช่ไหม/ครับ` | *bpen khruu kha-nít-dtà-sàat châi mǎi khráp* | Are you a maths teacher? | fixed fact and confirmation cue pre-taught |
| `cv1.cue-variant.introduction.job.v04` | same | `คุณ/เป็นครูคณิตศาสตร์/ใช่ไหม/ครับ` | *khun bpen khruu kha-nít-dtà-sàat châi mǎi khráp* | Are you a maths teacher? | same |

### 6.5 L11 cue variants

| Cue variant ID | Family | Thai / segmentation | Pronunciation | English | Prerequisite/source |
|---|---|---|---|---|---|
| `cv1.cue-variant.limited-thai.ability.v01` | `cv1.cue-family.limited-thai.ability` | `พูดไทย/ได้ไหม/ครับ` | *phûut thai dâai mǎi khráp* | Can you speak Thai? | natural L11 model cue |
| `cv1.cue-variant.limited-thai.ability.v02` | same | `คุณ/พูดไทย/ได้ไหม/ครับ` | *khun phûut thai dâai mǎi khráp* | Can you speak Thai? | `คุณ` L10 |
| `cv1.cue-variant.limited-thai.ability.v03` | same | `พูดภาษาไทย/ได้ไหม/ครับ` | *phûut phaa-sǎa thai dâai mǎi khráp* | Can you speak Thai? | `ภาษาไทย` explicitly pre-taught as recognition expansion |
| `cv1.cue-variant.limited-thai.ability.v04` | same | `คุณ/พูดภาษาไทย/ได้ไหม/ครับ` | *khun phûut phaa-sǎa thai dâai mǎi khráp* | Can you speak Thai? | same |
| `cv1.cue-variant.limited-thai.speed.v01` | `cv1.cue-family.limited-thai.speed` | `ผม/พูดเร็วไป/ไหม/ครับ` | *phǒm phûut reo bpai mǎi khráp* | Am I speaking too fast? | L11 model |
| `cv1.cue-variant.limited-thai.speed.v02` | same | `พูดเร็วไป/ไหม/ครับ` | *phûut reo bpai mǎi khráp* | Am I speaking too fast? | taught-atom reduction |
| `cv1.cue-variant.limited-thai.speed.v03` | same | `เร็วไป/ไหม/ครับ` | *reo bpai mǎi khráp* | Too fast? | taught-atom reduction |
| `cv1.cue-variant.limited-thai.speed.v04` | same | `พูดภาษาไทย/เร็วไป/ไหม/ครับ` | *phûut phaa-sǎa thai reo bpai mǎi khráp* | Am I speaking Thai too fast? | all atoms explicitly taught |
| `cv1.cue-variant.limited-thai.understanding.v01` | `cv1.cue-family.limited-thai.understanding` | `เข้าใจ/ไหม/ครับ` | *khâo-jai mǎi khráp* | Do you understand? | L11 model; `เข้าใจ` L03 |
| `cv1.cue-variant.limited-thai.understanding.v02` | same | `คุณ/เข้าใจ/ไหม/ครับ` | *khun khâo-jai mǎi khráp* | Do you understand? | `คุณ` L10 |
| `cv1.cue-variant.limited-thai.understanding.v03` | same | `เข้าใจภาษาไทย/ไหม/ครับ` | *khâo-jai phaa-sǎa thai mǎi khráp* | Do you understand Thai? | recognition expansion taught |
| `cv1.cue-variant.limited-thai.understanding.v04` | same | `เข้าใจ/ที่ผมพูด/ไหม/ครับ` | *khâo-jai thîi phǒm phûut mǎi khráp* | Do you understand what I’m saying? | `ที่/ผม/พูด` all previously taught; whole cue pre-taught before assessment |

### 6.6 L12 cue variants

| Cue variant ID | Family | Thai / segmentation | Pronunciation | English | Prerequisite/source |
|---|---|---|---|---|---|
| `cv1.cue-variant.lunch.invitation.v01` | `cv1.cue-family.lunch.invitation` | `ไปกินข้าว/กัน/ไหม/ครับ` | *bpai gin khâao gan mǎi khráp* | Shall we go for lunch? | L12 model |
| `cv1.cue-variant.lunch.invitation.v02` | same | `ไปกินข้าว/ไหม/ครับ` | *bpai gin khâao mǎi khráp* | Shall we go for lunch? | deletion of taught `กัน` only |
| `cv1.cue-variant.lunch.invitation.v03` | same | `กินข้าว/กัน/ไหม/ครับ` | *gin khâao gan mǎi khráp* | Shall we eat together? | taught atoms |
| `cv1.cue-variant.lunch.invitation.v04` | same | `กินข้าว/ด้วยกัน/ไหม/ครับ` | *gin khâao dûai gan mǎi khráp* | Shall we eat together? | `ด้วย` L02; combined cue pre-taught |
| `cv1.cue-variant.lunch.time.v01` | `cv1.cue-family.lunch.time` | `ตอนเที่ยง/ได้ไหม/ครับ` | *dtaawn thîang dâai mǎi khráp* | Would noon work? | L12 model |
| `cv1.cue-variant.lunch.time.v02` | same | `เที่ยง/ได้ไหม/ครับ` | *thîang dâai mǎi khráp* | Would noon work? | taught-atom reduction |
| `cv1.cue-variant.lunch.time.v03` | same | `เที่ยงนี้/ได้ไหม/ครับ` | *thîang níi dâai mǎi khráp* | Would this noon work? | `นี้` L01; time atom L12 |
| `cv1.cue-variant.lunch.time.v04` | same | `เจอกัน/ตอนเที่ยง/ได้ไหม/ครับ` | *jooe gan dtaawn thîang dâai mǎi khráp* | Could we meet at noon? | all atoms pre-taught in L12 |
| `cv1.cue-variant.lunch.place.v01` | `cv1.cue-family.lunch.place` | `เจอกัน/ที่ไหน/ครับ` | *jooe gan thîi nǎi khráp* | Where shall we meet? | L12 model |
| `cv1.cue-variant.lunch.place.v02` | same | `จะเจอกัน/ที่ไหน/ครับ` | *jà jooe gan thîi nǎi khráp* | Where shall we meet? | `จะ` L01/L07 |
| `cv1.cue-variant.lunch.place.v03` | same | `เจอกัน/ที่ร้านนี้/ไหม/ครับ` | *jooe gan thîi ráan níi mǎi khráp* | Shall we meet at this restaurant? | restaurant slot pre-taught |
| `cv1.cue-variant.lunch.place.v04` | same | `เจอกัน/ที่หน้าโรงเรียน/ไหม/ครับ` | *jooe gan thîi nâa rohng-rian mǎi khráp* | Shall we meet in front of the school? | school slot pre-taught |

## 7. Response and accepted-set registry

`A` responses are modelled for answer-before-reveal. The accepted-set rows below control objective buttons only; free speech is never machine-scored. A functionally reasonable alternate is therefore never placed among the wrong options even when it is not the presented objective answer.

| Response ID | Thai / segmentation | Pronunciation | English | Role | TTS | Frame/slots and source |
|---|---|---|---|---|---|---|
| `cv1.response.cafe.order-americano` | `ขอ/อเมริกาโน่/ครับ` | *khǒr a-mee-rí-gaa-nô khráp* | An Americano, please. | A | * | request-drink + americano; L07 model |
| `cv1.response.cafe.order-latte` | `ขอ/ลาเต้/ครับ` | *khǒr laa-dtêe khráp* | A latte, please. | A | * | request-drink + latte; controlled substitution |
| `cv1.response.cafe.temperature-iced` | `เย็น/ครับ` | *yen khráp* | Iced. | A | * | temperature-answer + iced; L07 model |
| `cv1.response.cafe.temperature-hot` | `ร้อน/ครับ` | *rórn khráp* | Hot. | A | * | temperature-answer + hot; slot preteach |
| `cv1.response.cafe.sweetness-none` | `ไม่หวาน/ครับ` | *mâi wǎan khráp* | Not sweet. | A | * | sweetness-answer + none; L07 model |
| `cv1.response.cafe.sweetness-less` | `หวานน้อย/ครับ` | *wǎan nói khráp* | Less sweet. | A | * | sweetness-answer + less; slot preteach |
| `cv1.response.w01.l02.water-one` | `น้ำเปล่า/ขวดหนึ่ง/ครับ` | *náam-bplàao khùat nùeng khráp* | One bottle of water. | A/reuse | * | exact L02 response ID retained; L08 model |
| `cv1.response.checkout.want-water-one` | `เอา/น้ำเปล่าขวดหนึ่ง/ครับ` | *ao náam-bplàao khùat nùeng khráp* | I’ll take one bottle of water. | A | * | L01 want + L02 water; controlled recombination |
| `cv1.response.checkout.no-bag` | `ไม่ต้อง/ใส่ถุง/ครับ` | *mâi dtông sài thǔng khráp* | No bag needed. | A | * | bag-answer + no-need; L08 model |
| `cv1.response.checkout.do-not-want-bag` | `ไม่เอา/ถุง/ครับ` | *mâi ao thǔng khráp* | I don’t want a bag. | A | * | L01 negated want + bag; pre-taught alternative |
| `cv1.response.checkout.pay-card-question` | `จ่ายด้วย/บัตร/ได้ไหม/ครับ` | *jàai dûai bàt dâai mǎi khráp* | Can I pay by card? | A | * | payment-request + card; L08 model |
| `cv1.response.checkout.pay-cash-question` | `จ่ายด้วย/เงินสด/ได้ไหม/ครับ` | *jàai dûai ngoen-sòt dâai mǎi khráp* | Can I pay with cash? | A | * | payment-request + cash; controlled substitution |
| `cv1.response.checkout.pay-qr-question` | `จ่ายด้วย/คิวอาร์/ได้ไหม/ครับ` | *jàai dûai khio-aa dâai mǎi khráp* | Can I pay by QR? | A | * | payment-request + QR; pre-taught transfer |
| `cv1.response.market.ask-price-per-bag` | `ถุงละ/กี่บาท/ครับ` | *thǔng lá gìi bàat khráp* | How much per bag? | A/event | * | unit-price-question + per-bag; L09 model |
| `cv1.response.market.ask-mango-price-per-bag` | `มะม่วง/ถุงละกี่บาท/ครับ` | *má-mûang thǔng lá gìi bàat khráp* | How much per bag of mangoes? | A/event | * | unit-price-question + mango-per-bag |
| `cv1.response.market.ask-this-price` | `อันนี้/เท่าไหร่/ครับ` | *an níi thâo-rài khráp* | How much is this? | A/event | * | unit-price-question + this-item |
| `cv1.response.market.take-one-bag` | `เอา/หนึ่ง/ถุง/ครับ` | *ao nùeng thǔng khráp* | I’ll take one bag. | A | * | quantity-order + one |
| `cv1.response.market.take-two-bags` | `เอา/สอง/ถุง/ครับ` | *ao sǎawng thǔng khráp* | I’ll take two bags. | A | * | quantity-order + two; L09 model |
| `cv1.response.market.take-three-bags` | `เอา/สาม/ถุง/ครับ` | *ao sǎam thǔng khráp* | I’ll take three bags. | A | * | quantity-order + three; controlled substitution |
| `cv1.response.market.discount-little` | `ลด/หน่อย/ได้ไหม/ครับ` | *lót nòi dâai mǎi khráp* | Could you lower it a little? | A | * | discount-request + little; L09 model |
| `cv1.response.market.discount-plain` | `ลด/ได้ไหม/ครับ` | *lót dâai mǎi khráp* | Can you lower it? | A | * | discount-request + plain |
| `cv1.response.introduction.name-full` | `ผม/ชื่อ/ลาทีฟ/ครับ` | *phǒm chûue laa-thîif khráp* | My name is Lateef. | A | * | fixed name; L10 model |
| `cv1.response.introduction.name-short` | `ชื่อ/ลาทีฟ/ครับ` | *chûue laa-thîif khráp* | Lateef. | A | * | taught-atom reduction |
| `cv1.response.introduction.origin-full` | `ผม/มาจาก/สหราชอาณาจักร/ครับ` | *phǒm maa jàak sà-hà-râat-chá-aa-naa-jàk khráp* | I’m from the United Kingdom. | A | * | fixed accurate origin; L10 model |
| `cv1.response.introduction.origin-short` | `มาจาก/สหราชอาณาจักร/ครับ` | *maa jàak sà-hà-râat-chá-aa-naa-jàk khráp* | From the United Kingdom. | A | * | taught-atom reduction |
| `cv1.response.introduction.job-full` | `ผม/เป็น/ครูคณิตศาสตร์/ครับ` | *phǒm bpen khruu kha-nít-dtà-sàat khráp* | I’m a maths teacher. | A | * | job frame + maths teacher; L10 model |
| `cv1.response.introduction.job-short` | `เป็น/ครูคณิตศาสตร์/ครับ` | *bpen khruu kha-nít-dtà-sàat khráp* | A maths teacher. | A | * | taught-atom reduction |
| `cv1.response.introduction.job-teacher` | `ผม/เป็น/ครู/ครับ` | *phǒm bpen khruu khráp* | I’m a teacher. | A/practice | * | controlled substitution; practice bank only |
| `cv1.response.limited-thai.ability-full` | `ผม/พูดไทย/ได้/นิดหน่อย/ครับ` | *phǒm phûut thai dâai nít-nòi khráp* | I speak a little Thai. | A | * | exact required L11 model line |
| `cv1.response.limited-thai.ability-short` | `พูดไทย/ได้/นิดหน่อย/ครับ` | *phûut thai dâai nít-nòi khráp* | I speak a little Thai. | A | * | taught-atom reduction |
| `cv1.response.w01.l03.slower` | `พูด/ช้าๆ/ได้ไหม/ครับ` | *phûut cháa-cháa dâai mǎi khráp* | Could you speak slowly? | A/reuse | * | exact L03 response ID retained; L11 model |
| `cv1.response.repair.slower-soft` | `พูด/ช้าๆ หน่อย/ได้ไหม/ครับ` | *phûut cháa-cháa nòi dâai mǎi khráp* | Could you speak a little more slowly? | A | * | L03 frame + taught `หน่อย` |
| `cv1.response.w01.l03.dont-understand` | `ไม่/เข้าใจ/ครับ` | *mâi khâo-jai khráp* | I don’t understand. | A/reuse | * | exact L03 response ID retained; L11 model |
| `cv1.response.repair.i-dont-understand` | `ผม/ไม่เข้าใจ/ครับ` | *phǒm mâi khâo-jai khráp* | I don’t understand. | A | * | L03 response + L10 subject |
| `cv1.response.w01.l03.again` | `พูด/อีกครั้ง/ได้ไหม/ครับ` | *phûut ìik khráng dâai mǎi khráp* | Could you say it again? | A/practice | * | exact L03 controlled retrieval |
| `cv1.response.lunch.accept-go` | `ไป/ครับ` | *bpai khráp* | Yes, let’s go. | A | * | L12 model |
| `cv1.response.lunch.accept-okay` | `ได้/ครับ` | *dâai khráp* | Okay. | A | * | routine reused as acceptance |
| `cv1.response.lunch.counter-twelve-thirty` | `เที่ยงครึ่ง/ได้ไหม/ครับ` | *thîang-khrʉ̂ng dâai mǎi khráp* | Would 12:30 work? | A | * | time-counter + 12:30; L12 model |
| `cv1.response.lunch.counter-at-twelve-thirty` | `ตอนเที่ยงครึ่ง/ได้ไหม/ครับ` | *dtaawn thîang-khrʉ̂ng dâai mǎi khráp* | Would 12:30 work? | A | * | same one-axis time, alternate form |
| `cv1.response.lunch.meet-restaurant` | `เจอกัน/ที่ร้านนี้/ครับ` | *jooe gan thîi ráan níi khráp* | Let’s meet at this restaurant. | A | * | meeting-place + restaurant; L12 model |
| `cv1.response.lunch.meet-school` | `เจอกัน/ที่หน้าโรงเรียน/ครับ` | *jooe gan thîi nâa rohng-rian khráp* | Let’s meet in front of the school. | A | * | meeting-place + school; controlled substitution |

### 7.1 Accepted sets

Every accepted set below contains exactly the displayed response ID.

| Accepted-set ID | Member response ID |
|---|---|
| `cv1.accepted.cafe.order-americano` | `cv1.response.cafe.order-americano` |
| `cv1.accepted.cafe.order-latte` | `cv1.response.cafe.order-latte` |
| `cv1.accepted.cafe.temperature-iced` | `cv1.response.cafe.temperature-iced` |
| `cv1.accepted.cafe.temperature-hot` | `cv1.response.cafe.temperature-hot` |
| `cv1.accepted.cafe.sweetness-none` | `cv1.response.cafe.sweetness-none` |
| `cv1.accepted.cafe.sweetness-less` | `cv1.response.cafe.sweetness-less` |
| `cv1.accepted.checkout.water-one` | `cv1.response.w01.l02.water-one` |
| `cv1.accepted.checkout.want-water-one` | `cv1.response.checkout.want-water-one` |
| `cv1.accepted.checkout.no-bag` | `cv1.response.checkout.no-bag` |
| `cv1.accepted.checkout.do-not-want-bag` | `cv1.response.checkout.do-not-want-bag` |
| `cv1.accepted.checkout.pay-card` | `cv1.response.checkout.pay-card-question` |
| `cv1.accepted.checkout.pay-cash` | `cv1.response.checkout.pay-cash-question` |
| `cv1.accepted.checkout.pay-qr` | `cv1.response.checkout.pay-qr-question` |
| `cv1.accepted.market.ask-price-per-bag` | `cv1.response.market.ask-price-per-bag` |
| `cv1.accepted.market.ask-mango-price` | `cv1.response.market.ask-mango-price-per-bag` |
| `cv1.accepted.market.ask-this-price` | `cv1.response.market.ask-this-price` |
| `cv1.accepted.market.take-one` | `cv1.response.market.take-one-bag` |
| `cv1.accepted.market.take-two` | `cv1.response.market.take-two-bags` |
| `cv1.accepted.market.take-three` | `cv1.response.market.take-three-bags` |
| `cv1.accepted.market.discount-little` | `cv1.response.market.discount-little` |
| `cv1.accepted.market.discount-plain` | `cv1.response.market.discount-plain` |
| `cv1.accepted.introduction.name-full` | `cv1.response.introduction.name-full` |
| `cv1.accepted.introduction.name-short` | `cv1.response.introduction.name-short` |
| `cv1.accepted.introduction.origin-full` | `cv1.response.introduction.origin-full` |
| `cv1.accepted.introduction.origin-short` | `cv1.response.introduction.origin-short` |
| `cv1.accepted.introduction.job-full` | `cv1.response.introduction.job-full` |
| `cv1.accepted.introduction.job-short` | `cv1.response.introduction.job-short` |
| `cv1.accepted.limited-thai.ability-full` | `cv1.response.limited-thai.ability-full` |
| `cv1.accepted.limited-thai.ability-short` | `cv1.response.limited-thai.ability-short` |
| `cv1.accepted.repair.slower` | `cv1.response.w01.l03.slower` |
| `cv1.accepted.repair.slower-soft` | `cv1.response.repair.slower-soft` |
| `cv1.accepted.repair.dont-understand` | `cv1.response.w01.l03.dont-understand` |
| `cv1.accepted.repair.i-dont-understand` | `cv1.response.repair.i-dont-understand` |
| `cv1.accepted.lunch.accept-go` | `cv1.response.lunch.accept-go` |
| `cv1.accepted.lunch.accept-okay` | `cv1.response.lunch.accept-okay` |
| `cv1.accepted.lunch.counter-twelve-thirty` | `cv1.response.lunch.counter-twelve-thirty` |
| `cv1.accepted.lunch.counter-at-twelve-thirty` | `cv1.response.lunch.counter-at-twelve-thirty` |
| `cv1.accepted.lunch.meet-restaurant` | `cv1.response.lunch.meet-restaurant` |
| `cv1.accepted.lunch.meet-school` | `cv1.response.lunch.meet-school` |

### 7.2 Exact three-option misconception contracts

The displayed correct response is the sole member of the named accepted set. The two listed IDs are the only distractors; the A/B/C position is seeded per run and stable across repair.

| Option-set ID | Accepted set | Distractor 1 · tag | Distractor 2 · tag |
|---|---|---|---|
| `cv1.options.cafe.order-americano` | `cv1.accepted.cafe.order-americano` | `cv1.response.cafe.temperature-iced` · `answers-temperature-too-early` | `cv1.response.cafe.sweetness-none` · `answers-sweetness-too-early` |
| `cv1.options.cafe.order-latte` | `cv1.accepted.cafe.order-latte` | `cv1.response.cafe.temperature-hot` · `answers-temperature-too-early` | `cv1.response.cafe.sweetness-less` · `answers-sweetness-too-early` |
| `cv1.options.cafe.temperature-iced` | `cv1.accepted.cafe.temperature-iced` | `cv1.response.cafe.order-americano` · `repeats-drink-instead-of-temperature` | `cv1.response.cafe.sweetness-none` · `answers-sweetness` |
| `cv1.options.cafe.temperature-hot` | `cv1.accepted.cafe.temperature-hot` | `cv1.response.cafe.order-latte` · `repeats-drink-instead-of-temperature` | `cv1.response.cafe.sweetness-less` · `answers-sweetness` |
| `cv1.options.cafe.sweetness-none` | `cv1.accepted.cafe.sweetness-none` | `cv1.response.cafe.temperature-iced` · `answers-temperature` | `cv1.response.cafe.order-americano` · `restarts-order` |
| `cv1.options.cafe.sweetness-less` | `cv1.accepted.cafe.sweetness-less` | `cv1.response.cafe.temperature-hot` · `answers-temperature` | `cv1.response.cafe.order-latte` · `restarts-order` |
| `cv1.options.checkout.water-one` | `cv1.accepted.checkout.water-one` | `cv1.response.checkout.no-bag` · `answers-bag-turn` | `cv1.response.checkout.pay-card-question` · `answers-payment-turn` |
| `cv1.options.checkout.want-water-one` | `cv1.accepted.checkout.want-water-one` | `cv1.response.checkout.do-not-want-bag` · `answers-bag-turn` | `cv1.response.checkout.pay-cash-question` · `answers-payment-turn` |
| `cv1.options.checkout.no-bag` | `cv1.accepted.checkout.no-bag` | `cv1.response.w01.l02.water-one` · `answers-item-turn` | `cv1.response.checkout.pay-card-question` · `answers-payment-turn` |
| `cv1.options.checkout.do-not-want-bag` | `cv1.accepted.checkout.do-not-want-bag` | `cv1.response.checkout.want-water-one` · `answers-item-turn` | `cv1.response.checkout.pay-cash-question` · `answers-payment-turn` |
| `cv1.options.checkout.pay-card` | `cv1.accepted.checkout.pay-card` | `cv1.response.checkout.no-bag` · `answers-bag-turn` | `cv1.response.w01.l02.water-one` · `answers-item-turn` |
| `cv1.options.checkout.pay-cash` | `cv1.accepted.checkout.pay-cash` | `cv1.response.checkout.do-not-want-bag` · `answers-bag-turn` | `cv1.response.checkout.want-water-one` · `answers-item-turn` |
| `cv1.options.checkout.pay-qr` | `cv1.accepted.checkout.pay-qr` | `cv1.response.checkout.no-bag` · `answers-bag-turn` | `cv1.response.checkout.want-water-one` · `answers-item-turn` |
| `cv1.options.market.ask-price-per-bag` | `cv1.accepted.market.ask-price-per-bag` | `cv1.response.market.take-two-bags` · `commits-before-price` | `cv1.response.market.discount-little` · `bargains-before-permission` |
| `cv1.options.market.ask-mango-price` | `cv1.accepted.market.ask-mango-price` | `cv1.response.market.take-one-bag` · `commits-before-price` | `cv1.response.market.discount-plain` · `bargains-before-permission` |
| `cv1.options.market.ask-this-price` | `cv1.accepted.market.ask-this-price` | `cv1.response.market.take-three-bags` · `commits-before-price` | `cv1.response.market.discount-little` · `bargains-before-permission` |
| `cv1.options.market.take-one` | `cv1.accepted.market.take-one` | `cv1.response.market.ask-price-per-bag` · `reasks-known-price` | `cv1.response.market.discount-little` · `bargains-without-trigger` |
| `cv1.options.market.take-two` | `cv1.accepted.market.take-two` | `cv1.response.market.ask-mango-price-per-bag` · `reasks-known-price` | `cv1.response.market.discount-plain` · `bargains-without-trigger` |
| `cv1.options.market.take-three` | `cv1.accepted.market.take-three` | `cv1.response.market.ask-this-price` · `reasks-known-price` | `cv1.response.market.discount-little` · `bargains-without-trigger` |
| `cv1.options.market.discount-little` | `cv1.accepted.market.discount-little` | `cv1.response.market.ask-price-per-bag` · `price-already-known` | `cv1.response.market.take-two-bags` · `does-not-use-offered-reduction` |
| `cv1.options.market.discount-plain` | `cv1.accepted.market.discount-plain` | `cv1.response.market.ask-mango-price-per-bag` · `price-already-known` | `cv1.response.market.take-three-bags` · `does-not-use-offered-reduction` |
| `cv1.options.introduction.name-full` | `cv1.accepted.introduction.name-full` | `cv1.response.introduction.origin-full` · `answers-origin` | `cv1.response.introduction.job-full` · `answers-job` |
| `cv1.options.introduction.name-short` | `cv1.accepted.introduction.name-short` | `cv1.response.introduction.origin-short` · `answers-origin` | `cv1.response.introduction.job-short` · `answers-job` |
| `cv1.options.introduction.origin-full` | `cv1.accepted.introduction.origin-full` | `cv1.response.introduction.name-full` · `answers-name` | `cv1.response.introduction.job-full` · `answers-job` |
| `cv1.options.introduction.origin-short` | `cv1.accepted.introduction.origin-short` | `cv1.response.introduction.name-short` · `answers-name` | `cv1.response.introduction.job-short` · `answers-job` |
| `cv1.options.introduction.job-full` | `cv1.accepted.introduction.job-full` | `cv1.response.introduction.name-full` · `answers-name` | `cv1.response.introduction.origin-full` · `answers-origin` |
| `cv1.options.introduction.job-short` | `cv1.accepted.introduction.job-short` | `cv1.response.introduction.name-short` · `answers-name` | `cv1.response.introduction.origin-short` · `answers-origin` |
| `cv1.options.limited-thai.ability-full` | `cv1.accepted.limited-thai.ability-full` | `cv1.response.w01.l03.slower` · `requests-repair-instead-of-answering` | `cv1.response.w01.l03.dont-understand` · `signals-nonunderstanding` |
| `cv1.options.limited-thai.ability-short` | `cv1.accepted.limited-thai.ability-short` | `cv1.response.repair.slower-soft` · `requests-repair-instead-of-answering` | `cv1.response.repair.i-dont-understand` · `signals-nonunderstanding` |
| `cv1.options.repair.slower` | `cv1.accepted.repair.slower` | `cv1.response.limited-thai.ability-full` · `states-ability` | `cv1.response.w01.l03.dont-understand` · `wrong-repair-goal` |
| `cv1.options.repair.slower-soft` | `cv1.accepted.repair.slower-soft` | `cv1.response.limited-thai.ability-short` · `states-ability` | `cv1.response.repair.i-dont-understand` · `wrong-repair-goal` |
| `cv1.options.repair.dont-understand` | `cv1.accepted.repair.dont-understand` | `cv1.response.limited-thai.ability-full` · `states-ability` | `cv1.response.w01.l03.slower` · `wrong-repair-goal` |
| `cv1.options.repair.i-dont-understand` | `cv1.accepted.repair.i-dont-understand` | `cv1.response.limited-thai.ability-short` · `states-ability` | `cv1.response.repair.slower-soft` · `wrong-repair-goal` |
| `cv1.options.lunch.accept-go` | `cv1.accepted.lunch.accept-go` | `cv1.response.lunch.counter-twelve-thirty` · `negotiates-time-before-accepting` | `cv1.response.lunch.meet-restaurant` · `chooses-place-before-accepting` |
| `cv1.options.lunch.accept-okay` | `cv1.accepted.lunch.accept-okay` | `cv1.response.lunch.counter-at-twelve-thirty` · `negotiates-time-before-accepting` | `cv1.response.lunch.meet-school` · `chooses-place-before-accepting` |
| `cv1.options.lunch.counter-twelve-thirty` | `cv1.accepted.lunch.counter-twelve-thirty` | `cv1.response.lunch.accept-go` · `only-accepts-invitation` | `cv1.response.lunch.meet-restaurant` · `answers-place` |
| `cv1.options.lunch.counter-at-twelve-thirty` | `cv1.accepted.lunch.counter-at-twelve-thirty` | `cv1.response.lunch.accept-okay` · `only-accepts-invitation` | `cv1.response.lunch.meet-school` · `answers-place` |
| `cv1.options.lunch.meet-restaurant` | `cv1.accepted.lunch.meet-restaurant` | `cv1.response.lunch.accept-go` · `answers-invitation` | `cv1.response.lunch.counter-twelve-thirty` · `answers-time` |
| `cv1.options.lunch.meet-school` | `cv1.accepted.lunch.meet-school` | `cv1.response.lunch.accept-okay` · `answers-invitation` | `cv1.response.lunch.counter-at-twelve-thirty` · `answers-time` |

## 8. Model scenes and controlled practice

Each scene turn references the immutable utterance entity above. Partner cues and active responses are replayed as pairs before full-scene playback.

| Scene ID | Ordered turn manifest |
|---|---|
| `cv1.scene.w03.l07.model` | `cv1.routine.social.greeting` P; `cv1.routine.social.greeting` R; `cv1.cue-variant.cafe.order.v01`; `cv1.response.cafe.order-americano`; `cv1.cue-variant.cafe.temperature.v01`; `cv1.response.cafe.temperature-iced`; `cv1.cue-variant.cafe.sweetness.v01`; `cv1.response.cafe.sweetness-none`; `cv1.cue-variant.w01.l02.dine-choice.v01`; `cv1.routine.food.dine-here`; `cv1.cue-variant.cafe.total-sixty.v01`; `cv1.routine.social.thanks` R; `cv1.routine.social.thanks` P |
| `cv1.scene.w03.l08.model` | `cv1.routine.social.greeting` P; `cv1.routine.social.greeting` R; `cv1.cue-variant.checkout.extra-item.v01`; `cv1.response.w01.l02.water-one`; `cv1.cue-variant.checkout.bag.v01`; `cv1.response.checkout.no-bag`; `cv1.cue-variant.checkout.payment.v01`; `cv1.response.checkout.pay-card-question`; `cv1.routine.social.okay` P; `cv1.routine.social.thanks` R; `cv1.routine.social.thanks` P |
| `cv1.scene.w03.l09.model` | `cv1.routine.social.greeting` P; `cv1.routine.social.greeting` R; `cv1.cue-variant.market.offer-mango.v01`; `cv1.response.market.ask-price-per-bag`; `cv1.cue-variant.market.unit-price-statement.v01`; `cv1.response.market.take-two-bags`; `cv1.cue-variant.market.bargain-open.v01`; `cv1.response.market.discount-little`; `cv1.routine.market.total-ninety`; `cv1.routine.checkout.pay-cash`; `cv1.routine.social.okay` P; `cv1.routine.social.thanks` R; `cv1.routine.social.thanks` P |
| `cv1.scene.w04.l10.model` | `cv1.routine.social.greeting` P; `cv1.routine.social.greeting` R; `cv1.cue-variant.introduction.name.v01`; `cv1.response.introduction.name-full`; `cv1.cue-variant.introduction.origin.v01`; `cv1.response.introduction.origin-full`; `cv1.cue-variant.introduction.job.v01`; `cv1.response.introduction.job-full`; `cv1.cue-variant.introduction.area.v01`; `cv1.routine.location.live-ekkamai`; `cv1.routine.social.nice-to-meet` P; `cv1.routine.social.nice-to-meet` R |
| `cv1.scene.w04.l11.model` | `cv1.routine.social.greeting` P; `cv1.routine.social.greeting` R; `cv1.cue-variant.social.wellbeing.v01`; `cv1.routine.social.well`; `cv1.cue-variant.limited-thai.ability.v01`; `cv1.response.limited-thai.ability-full`; `cv1.cue-variant.limited-thai.speed.v01`; `cv1.response.w01.l03.slower`; `cv1.cue-variant.limited-thai.understanding.v01`; `cv1.response.w01.l03.dont-understand`; `cv1.cue-variant.location.go-ekkamai.v01`; `cv1.routine.location.go-ekkamai` |
| `cv1.scene.w04.l12.model` | `cv1.routine.social.greeting` P; `cv1.routine.social.greeting` R; `cv1.cue-variant.lunch.invitation.v01`; `cv1.response.lunch.accept-go`; `cv1.cue-variant.lunch.time.v01`; `cv1.response.lunch.counter-twelve-thirty`; `cv1.routine.social.okay` P; `cv1.cue-variant.lunch.place.v01`; `cv1.response.lunch.meet-restaurant`; `cv1.routine.social.okay` P; `cv1.routine.social.thanks` R; `cv1.routine.social.see-you` P; `cv1.routine.social.see-you` R |

### 8.1 Imported/reuse cue records used by model scenes

| Cue ID | Thai / segmentation | Pronunciation | English | Role | TTS | Source |
|---|---|---|---|---|---|---|
| `cv1.cue-variant.w01.l02.dine-choice.v01` | `ทานที่นี่/หรือ/กลับบ้าน/ครับ` | *thaan thîi-nîi rǔue glàp bâan khráp* | For here or takeaway? | P | * | exact L02 cue |
| `cv1.cue-variant.cafe.total-sixty.v01` | `ทั้งหมด/หกสิบบาท/ครับ` | *tháng-mòt hòk-sìp bàat khráp* | Sixty baht altogether. | P | * | L07 recognition-only number line |
| `cv1.cue-variant.market.offer-mango.v01` | `รับ/มะม่วง/ไหม/ครับ` | *ráp má-mûang mǎi khráp* | Would you like mangoes? | P | * | L09 preteach; scene lead-in only |
| `cv1.cue-variant.introduction.area.v01` | `คุณ/อยู่แถวไหน/ครับ` | *khun yùu thǎaeo nǎi khráp* | What area do you live in? | P | * | W2 location atoms; L10 routine cue |
| `cv1.cue-variant.social.wellbeing.v01` | `สบายดี/ไหม/ครับ` | *sà-baai dii mǎi khráp* | How are you? | P | * | L11 routine preteach |
| `cv1.cue-variant.location.go-ekkamai.v01` | `ไป/เอกมัย/ไหม/ครับ` | *bpai èek-gà-mai mǎi khráp* | Are you going to Ekkamai? | P | * | L04 destination atoms; L11 routine cue |

### 8.2 Controlled-practice interactions

| Interaction ID | Event/context | Response | Source note |
|---|---|---|---|
| `cv1.interaction.practice.w03.l07.01` | `cv1.event.practice.w03.l07.swap-drink` | `cv1.response.cafe.order-latte` | Learner replaces Americano with the already pre-taught latte; no partner cue signature is consumed. |
| `cv1.interaction.practice.w03.l08.01` | `cv1.event.practice.w03.l08.swap-payment` | `cv1.response.checkout.pay-cash-question` | Replace card with cash; no assessment cue signature is consumed. |
| `cv1.interaction.practice.w03.l09.01` | `cv1.event.practice.w03.l09.swap-quantity` | `cv1.response.market.take-three-bags` | Replace two with three; no price cue signature is consumed. |
| `cv1.interaction.practice.w04.l10.01` | `cv1.event.practice.w04.l10.shorten-job` | `cv1.response.introduction.job-teacher` | Replace maths teacher with teacher for frame control; not an assessment response. |
| `cv1.interaction.practice.w04.l11.01` | `cv1.event.practice.w04.l11.repeat-instead` | `cv1.response.w01.l03.again` | Retrieve exact L03 “say it again” after the explicit missed-once goal. |
| `cv1.interaction.practice.w04.l12.01` | `cv1.event.practice.w04.l12.swap-place` | `cv1.response.lunch.meet-school` | Replace restaurant with school; time is not present or changed. |

All six `cv1.event.practice.*` records are English-only learner goals, have `ttsText:null`, and are confined to `CONVERSATION_PRACTICE_VARIANTS`.

### 8.3 Practice-event records

| Event ID | Exact English event | Role / audio | Prerequisite/source |
|---|---|---|---|
| `cv1.event.practice.w03.l07.swap-drink` | Replace the Americano with the already taught latte. | E; `ttsText:null` | L07 latte preteach |
| `cv1.event.practice.w03.l08.swap-payment` | Keep the purchase unchanged but ask to pay with cash instead of card. | E; `ttsText:null` | L08 cash preteach |
| `cv1.event.practice.w03.l09.swap-quantity` | The unit price is already known; take three bags instead of two. | E; `ttsText:null` | L09 one–three quantity strip |
| `cv1.event.practice.w04.l10.shorten-job` | Keep the introduction true but use the taught general word “teacher” instead of “maths teacher”. | E; `ttsText:null` | L10 teacher substitution preteach |
| `cv1.event.practice.w04.l11.repeat-instead` | You heard the line once but missed it; ask the speaker to say it again. | E; `ttsText:null` | exact L03 repair retrieval |
| `cv1.event.practice.w04.l12.swap-place` | Keep the time unchanged; choose the front of the school instead of this restaurant. | E; `ttsText:null` | L12 school-place preteach |

## 9. Interaction generation and sealed allocations

### 9.1 Function bindings

The table is the exact binding dictionary for every generated interaction in §9.4. `V1`–`V4` are the four cue variants in §6. For the learner-led unit-price family, `Vn` means the exact pair `cv1.event.w03.l09.ask-unit-price.vn` then `cv1.cue-variant.market.price-followup.vn`. `P` and `S` mean the named primary and secondary accepted/option pairs. An interaction's source signature is exactly `context-or-event ID | Vn ID(s) | accepted-set ID`.

| Lesson / ordinal | Function | Base goal context | P = accepted · options | S = accepted · options |
|---|---|---|---|---|
| L07/01 | `cv1.fn.cafe.order-drink` | `cv1.context.w03.l07.goal-americano` | `cv1.accepted.cafe.order-americano` · `cv1.options.cafe.order-americano` | `cv1.accepted.cafe.order-latte` · `cv1.options.cafe.order-latte` |
| L07/02 | `cv1.fn.cafe.choose-temperature` | `cv1.context.w03.l07.goal-iced` | `cv1.accepted.cafe.temperature-iced` · `cv1.options.cafe.temperature-iced` | `cv1.accepted.cafe.temperature-hot` · `cv1.options.cafe.temperature-hot` |
| L07/03 | `cv1.fn.cafe.choose-sweetness` | `cv1.context.w03.l07.goal-not-sweet` | `cv1.accepted.cafe.sweetness-none` · `cv1.options.cafe.sweetness-none` | `cv1.accepted.cafe.sweetness-less` · `cv1.options.cafe.sweetness-less` |
| L08/01 | `cv1.fn.checkout.add-water` | `cv1.context.w03.l08.goal-water-one` | `cv1.accepted.checkout.water-one` · `cv1.options.checkout.water-one` | `cv1.accepted.checkout.want-water-one` · `cv1.options.checkout.want-water-one` |
| L08/02 | `cv1.fn.checkout.decline-bag` | `cv1.context.w03.l08.goal-no-bag` | `cv1.accepted.checkout.no-bag` · `cv1.options.checkout.no-bag` | `cv1.accepted.checkout.do-not-want-bag` · `cv1.options.checkout.do-not-want-bag` |
| L08/03 | `cv1.fn.checkout.choose-payment` | `cv1.context.w03.l08.goal-card` | `cv1.accepted.checkout.pay-card` · `cv1.options.checkout.pay-card` | `cv1.accepted.checkout.pay-cash` · `cv1.options.checkout.pay-cash` |
| L09/01 | `cv1.fn.market.ask-unit-price` | event itself | `cv1.accepted.market.ask-price-per-bag` · `cv1.options.market.ask-price-per-bag` | `cv1.accepted.market.ask-mango-price` · `cv1.options.market.ask-mango-price` |
| L09/02 | `cv1.fn.market.choose-quantity` | `cv1.context.w03.l09.goal-two-bags` | `cv1.accepted.market.take-two` · `cv1.options.market.take-two` | `cv1.accepted.market.take-one` · `cv1.options.market.take-one` |
| L09/03 | `cv1.fn.market.request-discount` | `cv1.context.w03.l09.bargain-little` | `cv1.accepted.market.discount-little` · `cv1.options.market.discount-little` | `cv1.accepted.market.discount-plain` · `cv1.options.market.discount-plain` |
| L10/01 | `cv1.fn.introduction.give-name` | `cv1.context.w04.l10.goal-name` | `cv1.accepted.introduction.name-full` · `cv1.options.introduction.name-full` | `cv1.accepted.introduction.name-short` · `cv1.options.introduction.name-short` |
| L10/02 | `cv1.fn.introduction.give-origin` | `cv1.context.w04.l10.goal-origin` | `cv1.accepted.introduction.origin-full` · `cv1.options.introduction.origin-full` | `cv1.accepted.introduction.origin-short` · `cv1.options.introduction.origin-short` |
| L10/03 | `cv1.fn.introduction.give-job` | `cv1.context.w04.l10.goal-job` | `cv1.accepted.introduction.job-full` · `cv1.options.introduction.job-full` | `cv1.accepted.introduction.job-short` · `cv1.options.introduction.job-short` |
| L11/01 | `cv1.fn.limited-thai.state-ability` | `cv1.context.w04.l11.goal-limited-thai` | `cv1.accepted.limited-thai.ability-full` · `cv1.options.limited-thai.ability-full` | `cv1.accepted.limited-thai.ability-short` · `cv1.options.limited-thai.ability-short` |
| L11/02 | `cv1.fn.repair.request-slower` | `cv1.context.w04.l11.goal-needs-slower` | `cv1.accepted.repair.slower` · `cv1.options.repair.slower` | `cv1.accepted.repair.slower-soft` · `cv1.options.repair.slower-soft` |
| L11/03 | `cv1.fn.repair.signal-nonunderstanding` | `cv1.context.w04.l11.goal-meaning-unknown` | `cv1.accepted.repair.dont-understand` · `cv1.options.repair.dont-understand` | `cv1.accepted.repair.i-dont-understand` · `cv1.options.repair.i-dont-understand` |
| L12/01 | `cv1.fn.lunch.accept` | `cv1.context.w04.l12.goal-accept` | `cv1.accepted.lunch.accept-go` · `cv1.options.lunch.accept-go` | `cv1.accepted.lunch.accept-okay` · `cv1.options.lunch.accept-okay` |
| L12/02 | `cv1.fn.lunch.counter-time` | `cv1.context.w04.l12.goal-twelve-thirty` | `cv1.accepted.lunch.counter-twelve-thirty` · `cv1.options.lunch.counter-twelve-thirty` | `cv1.accepted.lunch.counter-at-twelve-thirty` · `cv1.options.lunch.counter-at-twelve-thirty` |
| L12/03 | `cv1.fn.lunch.choose-place` | `cv1.context.w04.l12.goal-restaurant` | `cv1.accepted.lunch.meet-restaurant` · `cv1.options.lunch.meet-restaurant` | `cv1.accepted.lunch.meet-school` · `cv1.options.lunch.meet-school` |

### 9.2 Fresh +1-A contexts for ordinals 02–03

These English-only contexts make the two non-rehearsal +1-A signatures materially different without adding Thai. They inherit the lesson's scene context and have `ttsText:null`.

| Context ID | Exact goal |
|---|---|
| `cv1.context.retention.w03.l07.d1a.02` | The Americano has already been ordered; specify that it should be iced. |
| `cv1.context.retention.w03.l07.d1a.03` | The iced Americano has already been chosen; specify that it should not be sweet. |
| `cv1.context.retention.w03.l08.d1a.02` | The checkout item is already known; decline the bag offer. |
| `cv1.context.retention.w03.l08.d1a.03` | The total has already been given; ask to pay by card. |
| `cv1.context.retention.w03.l09.d1a.02` | The seller has stated a mango-bag unit price; take two bags. |
| `cv1.context.retention.w03.l09.d1a.03` | The seller has explicitly offered a small reduction; ask politely for it. |
| `cv1.context.retention.w04.l10.d1a.02` | After giving your name, give your authored United Kingdom origin fact. |
| `cv1.context.retention.w04.l10.d1a.03` | After giving your origin, give your authored maths-teacher job fact. |
| `cv1.context.retention.w04.l11.d1a.02` | After stating that your Thai is limited, ask the speaker to slow down. |
| `cv1.context.retention.w04.l11.d1a.03` | The slower repeat is still unclear in meaning; say that you do not understand. |
| `cv1.context.retention.w04.l12.d1a.02` | You have accepted lunch, but noon does not work; suggest 12:30. |
| `cv1.context.retention.w04.l12.d1a.03` | The time is settled; choose this restaurant as the meeting place. |

### 9.3 Exact stage selectors

| Stage/form token | Ordinal 01 selector | Ordinals 02–03 selector | Novelty status |
|---|---|---|---|
| `lesson-a` | base context + V1 + P | base context + V1 + P | teaching |
| `d1-a` | base context + V1 + P | matching §9.2 context + V1 + P | ordinal 01 alone declares `rehearsalOf` the lesson interaction; 02–03 are new signatures |
| `d1-b` | base context + V2 + P | base context + V2 + P | new |
| `d7-a` | base context + V3 + P | base context + V3 + P | new |
| `d7-b` | base context + V4 + P | base context + V4 + P | new |
| `gate-a` | base context + V2 + S | base context + V2 + S | sealed |
| `gate-b` | base context + V3 + S | base context + V3 + S | sealed |
| `d30-a` | base context + V4 + S | base context + V4 + S | sealed |
| `d30-b` | base context + V1 + S | base context + V1 + S | sealed |

Two function-specific rows replace, rather than supplement, the generic selectors:

| Function | lesson-a | d1-a | d1-b | d7-a | d7-b | gate-a | gate-b | d30-a | d30-b |
|---|---|---|---|---|---|---|---|---|---|
| `cv1.fn.checkout.choose-payment` | V1/card | V1/card in `cv1.context.retention.w03.l08.d1a.03` | V2/card | V3/cash | V4/card | V3/card | V4/QR | V2/QR | V1/cash |
| `cv1.fn.market.choose-quantity` | V1/two | V1/two in `cv1.context.retention.w03.l09.d1a.02` | V2/two | V3/two | V4/two | V4/one | V4/three | V3/one | V2/three |

Here `card`, `cash`, `QR`, `one`, `two` and `three` expand to their exact accepted/option rows in §7. For market gate B the exact sealed tuple is therefore `cv1.context.w03.l09.goal-three-bags | cv1.cue-variant.market.unit-price-statement.v04 | cv1.accepted.market.take-three`; for gate A it is the same Thai cue with the distinct one-bag context and answer.

### 9.4 Generated interaction IDs and objective IDs

For every lesson and ordinal in §9.1, exactly these nine interaction records exist:

```text
cv1.interaction.lesson.wWW.lLL.a.NN
cv1.interaction.retention.wWW.lLL.d1-a.NN
cv1.interaction.retention.wWW.lLL.d1-b.NN
cv1.interaction.retention.wWW.lLL.d7-a.NN
cv1.interaction.retention.wWW.lLL.d7-b.NN
cv1.interaction.assessment.wWW.lLL.gate-a.NN
cv1.interaction.assessment.wWW.lLL.gate-b.NN
cv1.interaction.retention.wWW.lLL.d30-a.NN
cv1.interaction.retention.wWW.lLL.d30-b.NN
```

`wWW`, `lLL` and `NN` are the literal week, lesson and two-digit ordinal from §9.1; no other substitution is allowed. Each record inherits its function, cue/event, context, accepted set and option set from §§9.1–9.3. Every non-event record expands to the two literal objective IDs `<interaction ID>.cue-intent` and `<interaction ID>.response-select`; the L09/01 event records expand to `<interaction ID>.event-request` and `<interaction ID>.followup-intent`. Each `d1-a.01` record alone carries `rehearsalOf:cv1.interaction.lesson.wWW.lLL.a.01`. This scheme produces 162 fully bound base interactions and 324 immutable objective IDs.

## 10. Cross-scene +7 interactions

These interactions are appended as the fourth interaction of the corresponding +7 form. They are new context signatures and add no Thai atom.

| Interaction ID | Function · context | Cue | Accepted · options |
|---|---|---|---|
| `cv1.interaction.retention.w03.l07.d7-a.04.cross` | payment · `cv1.context.cross.w03.l07.cafe-payment-card` | `cv1.cue-variant.cafe.total-sixty.v01` | `cv1.accepted.checkout.pay-card` · `cv1.options.checkout.pay-card` |
| `cv1.interaction.retention.w03.l07.d7-b.04.cross` | no bag · `cv1.context.cross.w03.l07.cafe-no-bag` | `cv1.cue-variant.checkout.bag.v02` | `cv1.accepted.checkout.no-bag` · `cv1.options.checkout.no-bag` |
| `cv1.interaction.retention.w03.l08.d7-a.04.cross` | payment · `cv1.context.cross.w03.l08.market-payment-card` | `cv1.routine.market.total-ninety` | `cv1.accepted.checkout.pay-card` · `cv1.options.checkout.pay-card` |
| `cv1.interaction.retention.w03.l08.d7-b.04.cross` | no bag · `cv1.context.cross.w03.l08.market-no-bag` | `cv1.cue-variant.checkout.bag.v03` | `cv1.accepted.checkout.no-bag` · `cv1.options.checkout.no-bag` |
| `cv1.interaction.retention.w03.l09.d7-a.04.cross` | quantity · `cv1.context.cross.w03.l09.fixed-store-two-bags` | `cv1.cue-variant.market.unit-price-statement.v04` | `cv1.accepted.market.take-two` · `cv1.options.market.take-two` |
| `cv1.interaction.retention.w03.l09.d7-b.04.cross` | quantity · `cv1.context.cross.w03.l09.fixed-store-three-bags` | `cv1.cue-variant.market.unit-price-statement.v03` | `cv1.accepted.market.take-three` · `cv1.options.market.take-three` |
| `cv1.interaction.retention.w04.l10.d7-a.04.cross` | name · `cv1.context.cross.w04.l10.lunch-introduction` | `cv1.cue-variant.introduction.name.v02` | `cv1.accepted.introduction.name-full` · `cv1.options.introduction.name-full` |
| `cv1.interaction.retention.w04.l10.d7-b.04.cross` | origin · `cv1.context.cross.w04.l10.reception-introduction` | `cv1.cue-variant.introduction.origin.v04` | `cv1.accepted.introduction.origin-short` · `cv1.options.introduction.origin-short` |
| `cv1.interaction.retention.w04.l11.d7-a.04.cross` | slower · `cv1.context.cross.w04.l11.reception-too-fast` | `cv1.cue-variant.limited-thai.speed.v03` | `cv1.accepted.repair.slower` · `cv1.options.repair.slower` |
| `cv1.interaction.retention.w04.l11.d7-b.04.cross` | non-understanding · `cv1.context.cross.w04.l11.lunch-meaning-unknown` | `cv1.cue-variant.limited-thai.understanding.v02` | `cv1.accepted.repair.dont-understand` · `cv1.options.repair.dont-understand` |
| `cv1.interaction.retention.w04.l12.d7-a.04.cross` | time · `cv1.context.cross.w04.l12.maintenance-time` | `cv1.cue-variant.lunch.time.v04` | `cv1.accepted.lunch.counter-twelve-thirty` · `cv1.options.lunch.counter-twelve-thirty` |
| `cv1.interaction.retention.w04.l12.d7-b.04.cross` | place · `cv1.context.cross.w04.l12.school-handoff` | `cv1.cue-variant.lunch.place.v02` | `cv1.accepted.lunch.meet-school` · `cv1.options.lunch.meet-school` |

## 11. Lesson and delayed-check form manifests

In every row, the `expand(...)` calls are concatenated left-to-right and are the exact immutable objective-ID manifest. No sampler may replace or reorder a source interaction.

### 11.1 Lesson objective form A

| Form ID | Exact ordered interaction manifest | Size / completion |
|---|---|---|
| `cv1.form.lesson.w03.l07.a` | `expand(cv1.interaction.lesson.w03.l07.a.01)`, `.02`, `.03` | 6 objectives; all cleared, all 3 spoken prompts attempted before reveal |
| `cv1.form.lesson.w03.l08.a` | `expand(cv1.interaction.lesson.w03.l08.a.01)`, `.02`, `.03` | same |
| `cv1.form.lesson.w03.l09.a` | `expand(cv1.interaction.lesson.w03.l09.a.01)`, `.02`, `.03` | same; first pair is event-request/followup-intent |
| `cv1.form.lesson.w04.l10.a` | `expand(cv1.interaction.lesson.w04.l10.a.01)`, `.02`, `.03` | same |
| `cv1.form.lesson.w04.l11.a` | `expand(cv1.interaction.lesson.w04.l11.a.01)`, `.02`, `.03` | same |
| `cv1.form.lesson.w04.l12.a` | `expand(cv1.interaction.lesson.w04.l12.a.01)`, `.02`, `.03` | same |

### 11.2 +1 forms A/B

| Form ID | Exact ordered interaction manifest | Pass |
|---|---|---|
| `cv1.form.retention.w03.l07.d1.a` | `expand(cv1.interaction.retention.w03.l07.d1-a.01)`, `.02`, `.03` | 5/6 |
| `cv1.form.retention.w03.l07.d1.b` | `expand(cv1.interaction.retention.w03.l07.d1-b.01)`, `.02`, `.03` | 5/6 |
| `cv1.form.retention.w03.l08.d1.a` | `expand(cv1.interaction.retention.w03.l08.d1-a.01)`, `.02`, `.03` | 5/6 |
| `cv1.form.retention.w03.l08.d1.b` | `expand(cv1.interaction.retention.w03.l08.d1-b.01)`, `.02`, `.03` | 5/6 |
| `cv1.form.retention.w03.l09.d1.a` | `expand(cv1.interaction.retention.w03.l09.d1-a.01)`, `.02`, `.03` | 5/6 |
| `cv1.form.retention.w03.l09.d1.b` | `expand(cv1.interaction.retention.w03.l09.d1-b.01)`, `.02`, `.03` | 5/6 |
| `cv1.form.retention.w04.l10.d1.a` | `expand(cv1.interaction.retention.w04.l10.d1-a.01)`, `.02`, `.03` | 5/6 |
| `cv1.form.retention.w04.l10.d1.b` | `expand(cv1.interaction.retention.w04.l10.d1-b.01)`, `.02`, `.03` | 5/6 |
| `cv1.form.retention.w04.l11.d1.a` | `expand(cv1.interaction.retention.w04.l11.d1-a.01)`, `.02`, `.03` | 5/6 |
| `cv1.form.retention.w04.l11.d1.b` | `expand(cv1.interaction.retention.w04.l11.d1-b.01)`, `.02`, `.03` | 5/6 |
| `cv1.form.retention.w04.l12.d1.a` | `expand(cv1.interaction.retention.w04.l12.d1-a.01)`, `.02`, `.03` | 5/6 |
| `cv1.form.retention.w04.l12.d1.b` | `expand(cv1.interaction.retention.w04.l12.d1-b.01)`, `.02`, `.03` | 5/6 |

### 11.3 +7 forms A/B with the required cross-scene interaction

| Form ID | Exact ordered interaction manifest | Pass |
|---|---|---|
| `cv1.form.retention.w03.l07.d7.a` | `expand(cv1.interaction.retention.w03.l07.d7-a.01)`, `.02`, `.03`, `.04.cross` | 7/8 |
| `cv1.form.retention.w03.l07.d7.b` | `expand(cv1.interaction.retention.w03.l07.d7-b.01)`, `.02`, `.03`, `.04.cross` | 7/8 |
| `cv1.form.retention.w03.l08.d7.a` | `expand(cv1.interaction.retention.w03.l08.d7-a.01)`, `.02`, `.03`, `.04.cross` | 7/8 |
| `cv1.form.retention.w03.l08.d7.b` | `expand(cv1.interaction.retention.w03.l08.d7-b.01)`, `.02`, `.03`, `.04.cross` | 7/8 |
| `cv1.form.retention.w03.l09.d7.a` | `expand(cv1.interaction.retention.w03.l09.d7-a.01)`, `.02`, `.03`, `.04.cross` | 7/8 |
| `cv1.form.retention.w03.l09.d7.b` | `expand(cv1.interaction.retention.w03.l09.d7-b.01)`, `.02`, `.03`, `.04.cross` | 7/8 |
| `cv1.form.retention.w04.l10.d7.a` | `expand(cv1.interaction.retention.w04.l10.d7-a.01)`, `.02`, `.03`, `.04.cross` | 7/8 |
| `cv1.form.retention.w04.l10.d7.b` | `expand(cv1.interaction.retention.w04.l10.d7-b.01)`, `.02`, `.03`, `.04.cross` | 7/8 |
| `cv1.form.retention.w04.l11.d7.a` | `expand(cv1.interaction.retention.w04.l11.d7-a.01)`, `.02`, `.03`, `.04.cross` | 7/8 |
| `cv1.form.retention.w04.l11.d7.b` | `expand(cv1.interaction.retention.w04.l11.d7-b.01)`, `.02`, `.03`, `.04.cross` | 7/8 |
| `cv1.form.retention.w04.l12.d7.a` | `expand(cv1.interaction.retention.w04.l12.d7-a.01)`, `.02`, `.03`, `.04.cross` | 7/8 |
| `cv1.form.retention.w04.l12.d7.b` | `expand(cv1.interaction.retention.w04.l12.d7-b.01)`, `.02`, `.03`, `.04.cross` | 7/8 |

## 12. Cumulative-gate source registry and exact forms

### 12.1 Imported response/cue records for the W3 cumulative sources

These are exact W1–W2 atoms placed in new English-event signatures. They are not prior gate or +30 signatures. `TTS=*` applies to every Thai row.

| ID | Thai / segmentation | Pronunciation | English | Role | Source |
|---|---|---|---|---|---|
| `cv1.response.w01.l01.order-this` | `เอา/อันนี้/ครับ` | *ao an níi khráp* | I’ll take this one. | A/reuse | exact L01 |
| `cv1.response.w01.l01.no-spice` | `ไม่เผ็ด/ครับ` | *mâi phèt khráp* | Not spicy. | A/reuse | exact L01 |
| `cv1.response.w02.l04.destination` | `ไป/สถานีเอกมัย/ครับ` | *bpai sà-thǎa-nii èek-gà-mai khráp* | To Ekkamai Station. | A/reuse | exact L04 |
| `cv1.response.w02.l05.left-ahead` | `เลี้ยวซ้าย/ข้างหน้า/ครับ` | *líao sáai khâang nâa khráp* | Turn left up ahead. | A/reuse | exact L05 |
| `cv1.response.w02.l05.stop-here` | `จอด/ตรงนี้/ครับ` | *jòrt dtrong níi khráp* | Stop here. | A/reuse | exact L05 |
| `cv1.response.w02.l06.ask-bts` | `สถานีบีทีเอส/อยู่ไหน/ครับ` | *sà-thǎa-nii bii-thii-èt yùu nǎi khráp* | Where is the BTS station? | A/reuse | exact L06 |
| `cv1.cue-variant.import.w01.spice.v01` | `รับ/เผ็ด/ไหม/ครับ` | *ráp phèt mǎi khráp* | Would you like it spicy? | P | exact L01 |
| `cv1.cue-variant.import.w02.destination-confirm.v01` | `สถานีเอกมัย/ใช่ไหม/ครับ` | *sà-thǎa-nii èek-gà-mai châi mǎi khráp* | Ekkamai Station, right? | P | exact L04 |
| `cv1.cue-variant.import.w02.here-confirm.v01` | `ตรงนี้/ใช่ไหม/ครับ` | *dtrong níi châi mǎi khráp* | Here, right? | P | exact L05 |
| `cv1.cue-variant.import.w02.straight.v01` | `ตรงไป/ครับ` | *dtrong bpai khráp* | Go straight. | P | exact L05–L06 |

| Accepted/option ID | Correct response | Distractor 1 · tag | Distractor 2 · tag |
|---|---|---|---|
| `cv1.accepted.import.w01.order-this` / `cv1.options.import.w01.order-this` | `cv1.response.w01.l01.order-this` | `cv1.response.w01.l01.no-spice` · `answers-quality` | `cv1.response.w02.l04.destination` · `answers-destination` |
| `cv1.accepted.import.w01.no-spice` / `cv1.options.import.w01.no-spice` | `cv1.response.w01.l01.no-spice` | `cv1.response.w01.l01.order-this` · `restarts-order` | `cv1.response.w02.l05.stop-here` · `answers-driving-turn` |
| `cv1.accepted.import.w02.destination` / `cv1.options.import.w02.destination` | `cv1.response.w02.l04.destination` | `cv1.response.w02.l05.left-ahead` · `gives-route-instead-of-destination` | `cv1.response.w02.l06.ask-bts` · `asks-location` |
| `cv1.accepted.import.w02.left-ahead` / `cv1.options.import.w02.left-ahead` | `cv1.response.w02.l05.left-ahead` | `cv1.response.w02.l04.destination` · `gives-destination` | `cv1.response.w02.l05.stop-here` · `stops-too-early` |
| `cv1.accepted.import.w02.stop-here` / `cv1.options.import.w02.stop-here` | `cv1.response.w02.l05.stop-here` | `cv1.response.w02.l05.left-ahead` · `continues-route` | `cv1.response.w02.l06.ask-bts` · `asks-location` |
| `cv1.accepted.import.w02.ask-bts` / `cv1.options.import.w02.ask-bts` | `cv1.response.w02.l06.ask-bts` | `cv1.response.w02.l04.destination` · `states-destination` | `cv1.response.w02.l05.left-ahead` · `gives-direction-unasked` |

### 12.2 Exact cumulative event interactions

Every event below is English-only (`role:E`, `ttsText:null`). The follow-up is a separately scored heard-intent objective and contains only previously taught Thai.

| Interaction ID | Exact English event | Learner response · accepted/options | Follow-up cue |
|---|---|---|---|
| `cv1.interaction.assessment.w03.cumulative.a.01` | At a food counter, point to the item you want and order this one. | `cv1.response.w01.l01.order-this` · `cv1.accepted.import.w01.order-this` / `cv1.options.import.w01.order-this` | `cv1.cue-variant.import.w01.spice.v01` |
| `cv1.interaction.assessment.w03.cumulative.a.02` | In a taxi, give Ekkamai Station as your destination. | `cv1.response.w02.l04.destination` · `cv1.accepted.import.w02.destination` / `cv1.options.import.w02.destination` | `cv1.cue-variant.import.w02.destination-confirm.v01` |
| `cv1.interaction.assessment.w03.cumulative.b.01` | At a food counter, say that you do not want the dish spicy. | `cv1.response.w01.l01.no-spice` · `cv1.accepted.import.w01.no-spice` / `cv1.options.import.w01.no-spice` | `cv1.routine.social.okay` |
| `cv1.interaction.assessment.w03.cumulative.b.02` | Direct a driver to turn left up ahead. | `cv1.response.w02.l05.left-ahead` · `cv1.accepted.import.w02.left-ahead` / `cv1.options.import.w02.left-ahead` | `cv1.cue-variant.import.w02.here-confirm.v01` |
| `cv1.interaction.assessment.w03.cumulative.c.01` | Ask a man where the BTS station is. | `cv1.response.w02.l06.ask-bts` · `cv1.accepted.import.w02.ask-bts` / `cv1.options.import.w02.ask-bts` | `cv1.cue-variant.import.w02.straight.v01` |
| `cv1.interaction.assessment.w03.cumulative.c.02` | The taxi is at the correct point; ask the driver to stop here. | `cv1.response.w02.l05.stop-here` · `cv1.accepted.import.w02.stop-here` / `cv1.options.import.w02.stop-here` | `cv1.routine.social.okay` |
| `cv1.interaction.assessment.w04.cumulative.a.01` | At a café, order the already taught latte. | `cv1.response.cafe.order-latte` · `cv1.accepted.cafe.order-latte` / `cv1.options.cafe.order-latte` | `cv1.cue-variant.cafe.temperature.v01` |
| `cv1.interaction.assessment.w04.cumulative.a.02` | A shop total has been given; ask to pay with cash. | `cv1.response.checkout.pay-cash-question` · `cv1.accepted.checkout.pay-cash` / `cv1.options.checkout.pay-cash` | `cv1.routine.social.okay` |
| `cv1.interaction.assessment.w04.cumulative.b.01` | A mango-bag unit price is known; take one bag. | `cv1.response.market.take-one-bag` · `cv1.accepted.market.take-one` / `cv1.options.market.take-one` | `cv1.cue-variant.market.unit-price-statement.v01` |
| `cv1.interaction.assessment.w04.cumulative.b.02` | A café drink has been ordered; specify that it should be iced. | `cv1.response.cafe.temperature-iced` · `cv1.accepted.cafe.temperature-iced` / `cv1.options.cafe.temperature-iced` | `cv1.cue-variant.cafe.sweetness.v01` |
| `cv1.interaction.assessment.w04.cumulative.c.01` | At checkout, decline the offered bag. | `cv1.response.checkout.no-bag` · `cv1.accepted.checkout.no-bag` / `cv1.options.checkout.no-bag` | `cv1.cue-variant.checkout.payment.v03` |
| `cv1.interaction.assessment.w04.cumulative.c.02` | A market seller has explicitly offered a reduction; ask whether the price can be reduced. | `cv1.response.market.discount-plain` · `cv1.accepted.market.discount-plain` / `cv1.options.market.discount-plain` | `cv1.routine.market.total-ninety` |

Each cumulative interaction expands to `<ID>.event-request` then `<ID>.followup-intent`. These twelve interactions are sealed for the named gate form only and occur in no lesson, practice, +1, +7, other gate form or +30 form.

### 12.3 Gate source pools

For each lesson, pool A is exactly `cv1.interaction.assessment.wWW.lLL.gate-a.01/.02/.03`; pool B is exactly `cv1.interaction.assessment.wWW.lLL.gate-b.01/.02/.03`. Their bindings are §§9.1–9.4. This exposes 18 current-unit source interactions per week. The three manifests below consume twelve distinct current-unit sources and six distinct earlier-unit sources; no source interaction or objective ID repeats across A/B/C.

### 12.4 Exact Week 3 cumulative-gate forms

| Form ID | Exact ordered six-interaction manifest | Pass |
|---|---|---|
| `cv1.form.gate.w03.a` | `cv1.interaction.assessment.w03.cumulative.a.01`, `.02`, `cv1.interaction.assessment.w03.l07.gate-a.01`, `.02`, `cv1.interaction.assessment.w03.l08.gate-a.01`, `cv1.interaction.assessment.w03.l09.gate-a.01` | 10/12 |
| `cv1.form.gate.w03.b` | `cv1.interaction.assessment.w03.cumulative.b.01`, `.02`, `cv1.interaction.assessment.w03.l07.gate-b.01`, `cv1.interaction.assessment.w03.l08.gate-b.01`, `.02`, `cv1.interaction.assessment.w03.l09.gate-b.02` | 10/12 |
| `cv1.form.gate.w03.c` | `cv1.interaction.assessment.w03.cumulative.c.01`, `.02`, `cv1.interaction.assessment.w03.l07.gate-a.03`, `cv1.interaction.assessment.w03.l08.gate-a.03`, `cv1.interaction.assessment.w03.l09.gate-a.02`, `.03` | 10/12 |

### 12.5 Exact Week 4 cumulative-gate forms

| Form ID | Exact ordered six-interaction manifest | Pass |
|---|---|---|
| `cv1.form.gate.w04.a` | `cv1.interaction.assessment.w04.cumulative.a.01`, `.02`, `cv1.interaction.assessment.w04.l10.gate-a.01`, `.02`, `cv1.interaction.assessment.w04.l11.gate-a.01`, `cv1.interaction.assessment.w04.l12.gate-a.01` | 10/12 |
| `cv1.form.gate.w04.b` | `cv1.interaction.assessment.w04.cumulative.b.01`, `.02`, `cv1.interaction.assessment.w04.l10.gate-b.01`, `cv1.interaction.assessment.w04.l11.gate-b.01`, `.02`, `cv1.interaction.assessment.w04.l12.gate-b.02` | 10/12 |
| `cv1.form.gate.w04.c` | `cv1.interaction.assessment.w04.cumulative.c.01`, `.02`, `cv1.interaction.assessment.w04.l10.gate-a.03`, `cv1.interaction.assessment.w04.l11.gate-a.03`, `cv1.interaction.assessment.w04.l12.gate-a.02`, `.03` | 10/12 |

For every gate row, the exact objective manifest is the left-to-right concatenation of `expand(interaction ID)`. The first two interactions supply four earlier-unit objectives, satisfying the cumulative minimum; the remaining four supply eight current-unit objectives.

## 13. Unit +30 eligibility and exact forms

All `d30-a` and `d30-b` source interactions in §9.4 are registry-defined at build time but unavailable before the corresponding unit gate first passes. The immutable assignment due date is `gates[gateId].passedAt + 30` in Bangkok civil dates; replay or retake never moves it. A form has 12 objectives, passes at 11/12, and receives four post-check repair items from non-assessment practice only. Failure never revokes a gate or lesson.

The A and B manifests are disjoint. Each lesson exposes six source interactions (`d30-a.01/.02/.03` and `d30-b.01/.02/.03`), so each unit exposes eighteen; each parallel form selects two per lesson and leaves six unused for later form-cycle expansion without authoring new Thai.

| Form ID | Exact ordered six-interaction manifest | Eligible anchor |
|---|---|---|
| `cv1.form.retention.w03.d30.a` | `cv1.interaction.retention.w03.l07.d30-a.01`, `.02`, `cv1.interaction.retention.w03.l08.d30-a.01`, `.02`, `cv1.interaction.retention.w03.l09.d30-a.01`, `.02` | `gates["cv1.gate.w03"].passedAt + 30` |
| `cv1.form.retention.w03.d30.b` | `cv1.interaction.retention.w03.l07.d30-b.02`, `.03`, `cv1.interaction.retention.w03.l08.d30-b.02`, `.03`, `cv1.interaction.retention.w03.l09.d30-b.02`, `.03` | same |
| `cv1.form.retention.w04.d30.a` | `cv1.interaction.retention.w04.l10.d30-a.01`, `.02`, `cv1.interaction.retention.w04.l11.d30-a.01`, `.02`, `cv1.interaction.retention.w04.l12.d30-a.01`, `.02` | `gates["cv1.gate.w04"].passedAt + 30` |
| `cv1.form.retention.w04.d30.b` | `cv1.interaction.retention.w04.l10.d30-b.02`, `.03`, `cv1.interaction.retention.w04.l11.d30-b.02`, `.03`, `cv1.interaction.retention.w04.l12.d30-b.02`, `.03` | same |

The exact objective manifest for each row is the left-to-right concatenation of `expand(interaction ID)`. `cv1.form.retention.w03.d30.a` and `.b` provide twelve distinct interaction signatures across the unit; the W4 pair does the same. No gate source appears in a +30 form.

## 14. Chronological cue/response recurrence ledger

The stage cells name the exact cue selector and response selector from §9. `X-A` and `X-B` mean the exact cross rows in §10. The stage order is teaching → +1 → +7 → gate eligibility → +30 eligibility; actual due dates follow authoritative completion/pass dates.

| Lesson / function | Lesson A | +1 A / B | +7 A / B | Gate A / B | +30 A / B | Later required recurrence |
|---|---|---|---|---|---|---|
| L07 drink order | V1/P | V1/P replay · V2/P | V3/P · V4/P | V2/S · V3/S | V4/S · V1/S | `cv1.lesson.w08.l24.bangkok-day`: café ordering family |
| L07 temperature | V1/P | V1/P in d1 context · V2/P | V3/P · V4/P | V2/S · V3/S | V4/S · V1/S | L24 café choice |
| L07 sweetness | V1/P | V1/P in d1 context · V2/P | V3/P · V4/P | V2/S · V3/S | V4/S · V1/S | L24 café order quality |
| L08 water | V1/P | V1/P replay · V2/P | V3/P · V4/P | V2/S · V3/S | V4/S · V1/S | `cv1.lesson.w05.l14.delivery` item quantity; L24 order |
| L08 bag | V1/P | V1/P in d1 context · V2/P | V3/P + X-A · V4/P + X-B | V2/S · V3/S | V4/S · V1/S | L09 bag classifier; L24 purchase |
| L08 payment | V1/card | V1/card in d1 context · V2/card | V3/cash + X-A · V4/card + X-B | V3/card · V4/QR | V2/QR · V1/cash | `cv1.lesson.w05.l14.delivery`; `cv1.lesson.w06.l17.delivery-correction`; L24 |
| L09 ask unit price | event/followup V1/P | V1/P replay · V2/P | V3/P · V4/P | V2/S · V3/S | V4/S · V1/S | L24 market segment |
| L09 quantity | V1/two | V1/two in d1 context · V2/two | V3/two + X-A · V4/two + X-B | V4/one · V4/three | V3/one · V2/three | `cv1.lesson.w07.l20.label-language`, `cv1.lesson.w08.l23.service-problem`, `cv1.lesson.w08.l24.bangkok-day` |
| L09 discount | V1/P | V1/P in d1 context · V2/P | V3/P · V4/P | V2/S · V3/S | V4/S · V1/S | L24 open-market only; never fixed-price checkout |
| L10 name | V1/P | V1/P replay · V2/P | V3/P + X-A · V4/P + X-B | V2/S · V3/S | V4/S · V1/S | `cv1.lesson.w05.l13.reception`; L24 social opening |
| L10 origin | V1/P | V1/P in d1 context · V2/P | V3/P · V4/P | V2/S · V3/S | V4/S · V1/S | L24 introduction |
| L10 job | V1/P | V1/P in d1 context · V2/P | V3/P · V4/P | V2/S · V3/S | V4/S · V1/S | L24 colleague small talk |
| L11 limited Thai | V1/P | V1/P replay · V2/P | V3/P · V4/P | V2/S · V3/S | V4/S · V1/S | `cv1.lesson.w05.l13.reception`; `cv1.lesson.w06.l18.repair-escalation`; L24 |
| L11 slower | V1/P | V1/P in d1 context · V2/P | V3/P + X-A · V4/P + X-B | V2/S · V3/S | V4/S · V1/S | L13, L15, L18 and L24 repair branches |
| L11 non-understanding | V1/P | V1/P in d1 context · V2/P | V3/P + X-B · V4/P + X-A | V2/S · V3/S | V4/S · V1/S | L13–L18 and L24 repair branches |
| L12 accept | V1/P | V1/P replay · V2/P | V3/P · V4/P | V2/S · V3/S | V4/S · V1/S | L24 plan acceptance |
| L12 time | V1/P | V1/P in d1 context · V2/P | V3/P + X-A · V4/P + X-B | V2/S · V3/S | V4/S · V1/S | `cv1.lesson.w05.l15.maintenance`; `cv1.lesson.w08.l22.hours-services`; L24 |
| L12 place | V1/P | V1/P in d1 context · V2/P | V3/P + X-B · V4/P + X-A | V2/S · V3/S | V4/S · V1/S | `cv1.lesson.w05.l14.delivery`; L24 |

Additional routine recurrence is fixed: `cv1.response.w01.l02.water-one` occurs in L08 model and assessment; `cv1.response.w01.l03.slower` and `.dont-understand` occur in L11 model and assessment; `cv1.response.w01.l03.again` occurs only in L11 controlled practice before later repair scenes; `cv1.routine.food.dine-here` recurs in L07 model; W2 Ekkamai destination/location atoms recur in L10–L11 model scenes. The exact market L24 post-gate recurrence is `cv1.cue-variant.market.unit-price-statement.v04` → `cv1.response.market.take-two-bags`; the sealed W3 gate allocations are V4 → one bag in gate A and V4 → three bags in gate B, so the L24 pair leaks neither sealed signature.

## 15. Counts and executable invariants

| Entity/invariant | Closed value |
|---|---|
| Lessons / model scenes / active functions | 6 / 6 / 18 |
| Model-scene turns | L07 13; L08 11; L09 13; L10 12; L11 12; L12 13 |
| New frame families per scene after reuse | L07 3; L08 2 plus one exact reused frame; L09 3; L10 3; L11 1 plus two reused repair frames; L12 3 |
| Active targets per lesson | exactly 3 functions; no scene exceeds 3 |
| Cue families / ordinary cue variants | 18 / 72, plus 4 market price follow-ups and 10 explicitly imported/model-only cues |
| Response records / accepted sets / option sets authored here | 45 / 45 / 45; every option set is one accepted response plus exactly two wrong responses |
| Base generated interactions/objectives | 162 / 324 |
| Cross-scene interactions/objectives | 12 / 24 |
| Cumulative gate-source interactions/objectives | 12 / 24 |
| Lesson forms | 6 forms × 3 interactions = 6 objectives |
| +1 | 12 forms × 3 interactions = 6 objectives; one declared replay per lesson in form A |
| +7 | 12 forms × 4 interactions = 8 objectives; one cross interaction per form |
| Gates | 2 weeks × 3 disjoint forms × 6 interactions = 12 objectives; each form has 2 earlier + 4 current interactions |
| Unit +30 | 2 weeks × 2 disjoint forms × 6 interactions = 12 objectives; 18 eligible sources per unit |
| L12 chunk ceiling | every accepted time/place response has 2 or 3 chunks; frame is exactly `เจอกัน/ที่/{place}/ครับ` |
| Audio | every Thai record has exact `ttsText`, `lang:"th-TH"`, `rate:0.72`; every English event/context has `ttsText:null` |
| Politeness | all complete modelled Thai utterances end `ครับ`; zero `ค่ะ` records |
| Reading boundary | Thai, segmentation and pronunciation supports never gate or score progress |
| Human dependency | zero native recording, native-speaker review or pronunciation-assessment dependency |
| Placeholder count | zero `TBD`, `TODO`, ellipsis-placeholder or implementation-choice fields |

Build validation must expand §9.4, then assert: unique entity IDs; every reference resolves; every form objective belongs to one immutable form; exactly three A/B/C options with one accepted and two functionally wrong distractors; one declared +1 replay per lesson and no other repeated normalized signature; pairwise-disjoint gate and +30 signatures; no gate/+30 signature in a model scene, practice, distractor or earlier check; all slot/cue atoms introduced before first use; `bargainAllowed:true` for every discount interaction and never for fixed-price contexts; no `tea`, `แบบไหน`, `อังกฤษ`-as-origin, combined time-place answer or place/time outside the closed L07/L12 inventories; device TTS only; and zero unresolved or placeholder fields.
