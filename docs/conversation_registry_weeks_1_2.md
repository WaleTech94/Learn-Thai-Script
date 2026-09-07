# Bangkok Conversation Foundation — W1–W2 Machine Registry

> **v8.5.0 override:** see [What stuck? release contract](v8_5_learning_check.md) for current shared interactions, supplementary evidence, lesson estimates and active Lesson 3 +7 forms C/D. Original A/B entries below are archived history. Weeks 2–8 are still unshipped.

**Registry ID:** `cv1.registry.w01-w02`
**Revision:** 1
**Date:** 2026-08-28
**Scope:** lessons L01–L06, their lesson forms, +1/+7 forms, Week 1–2 gate sources/forms and Week 1–2 +30 sources/forms
**Parent:** `conversation_course_implementation_spec.md`
**Companion:** `conversation_course_content_inventory.md`

This is the binding machine registry for Weeks 1–2. It changes no application code. Where the compact companion inventory conflicts with this registry, this registry controls W1–W2 IDs, variants, form membership and leakage boundaries.

## 1. Binding normalization

- Every ID is immutable, lowercase ASCII and globally unique under `cv1`.
- Every record has `revision:1`.
- Every Thai language record has `lang:th-TH`. Unless explicitly marked slow, `rate:0.72`; slow-repair replay uses `rate:0.58`.
- In every language table, `ttsText` is exactly the Thai column with `/` segmentation marks removed. No audio URL or human recording exists.
- Every complete learner and modeled partner utterance ends in `ครับ`. Segments are fragments, not complete utterances.
- Thai script is support, never a prerequisite or scored reading surface.
- `source:repo` means retained from the existing v8.2.3 pilot or committed phrase bank. `source:recombination` means a conservative composition of atoms explicitly listed as prerequisites in this registry.
- An assessment signature is `contextId|cueVariantId-or-eventId|acceptedSetId`. These three IDs contain no `|`.
- Context records contain setting/goal only; they never translate or quote their Thai cue.
- `intent` objectives are audio cue → functional-English intent. `response` objectives are context plus audio cue → appropriate three-option response. An event interaction expands as `event-request` then `partner-reply-intent`.
- A three-option set means one rendered canonical member of the accepted set plus exactly two distractors. This follows the parent engine's Option A/B/C contract. Earlier planning language asking for three distractors is incompatible with a three-option surface and is superseded here.
- Immediate repair uses a separate practice interaction and never exposes a reserved retention/assessment interaction.
- A valid free-role-play repair utterance is never used as a distractor against another valid repair. L03 strategy choice is graded only under an explicit repair-state context.

### 1.1 Objective expansion

For an ordered interaction manifest `[I1,I2,I3]`, objective suffixes map exactly as follows:

| Suffix | Source | Direction |
|---|---|---|
| `.01` | `I1` | `intent`, or `event-request` when `I1` is learner-led |
| `.02` | `I1` | `response`, or `partner-reply-intent` when `I1` is learner-led |
| `.03` | `I2` | `intent` / `event-request` |
| `.04` | `I2` | `response` / `partner-reply-intent` |
| `.05` | `I3` | `intent` / `event-request` |
| `.06` | `I3` | `response` / `partner-reply-intent` |

A +7 or 12-objective form appends `I4` as `.07/.08`, `I5` as `.09/.10` and `I6` as `.11/.12` using the same directions. Objective IDs are `{formId with cv1.form replaced by cv1.objective}.{suffix}`. This rule and each ordered manifest below are the exact objective-ID → interaction/direction mapping; no runtime sampling is permitted.

## 2. Shared routines

| ID | Thai / `ttsText` | Segments | Transliteration | Functional English | Role | Prerequisites; source |
|---|---|---|---|---|---|---|
| `cv1.routine.social.greeting` | สวัสดีครับ | สวัสดี/ครับ | `sà-wàt-dii khráp` | Hello. | routine | none; source:repo |
| `cv1.routine.social.thanks` | ขอบคุณครับ | ขอบคุณ/ครับ | `khòrp-khun khráp` | Thank you. | routine | none; source:repo |
| `cv1.routine.social.excuse-me` | ขอโทษครับ | ขอโทษ/ครับ | `khǒr-thôht khráp` | Excuse me / sorry. | routine | L03; source:repo |
| `cv1.routine.social.yes` | ใช่ครับ | ใช่/ครับ | `châi khráp` | Yes / that is right. | routine | L05; source:repo |
| `cv1.routine.social.okay` | ได้ครับ | ได้/ครับ | `dâai khráp` | Okay / certainly. | recognition routine | L01; source:repo |
| `cv1.routine.social.no-problem` | ไม่เป็นไรครับ | ไม่เป็นไร/ครับ | `mâi bpen rai khráp` | No problem. | recognition routine | L03; source:recombination |

Routine response IDs are `cv1.response.social.greeting`, `cv1.response.social.thanks`, `cv1.response.social.excuse-me`, `cv1.response.social.yes`, `cv1.response.social.okay` and `cv1.response.social.no-problem`; each points one-to-one to the identically ordered routine above. Accepted sets are `cv1.accepted.social.greeting`, `cv1.accepted.social.thanks`, `cv1.accepted.social.yes`, `cv1.accepted.social.okay` and `cv1.accepted.social.no-problem`, each containing its one corresponding response.

## 3. L01 `cv1.lesson.w01.l01.food-order`

Outcome: greet, indicate food and specify no spice. Prerequisites: none. Scene: `cv1.scene.w01.l01.model`.

### 3.1 Functions, frames and slots

| ID | Kind | Definition | Prerequisites; source |
|---|---|---|---|
| `cv1.fn.food.order-item` | function | choose an item to order | none; source:repo |
| `cv1.fn.food.set-spice` | function | request the non-spicy option | none; source:repo |
| `cv1.frame.food.want-item` | frame | `เอา/{item}/ครับ` | function order-item; source:repo |
| `cv1.frame.food.not-quality` | frame | `ไม่/{quality}/ครับ` | function set-spice; source:repo |
| `cv1.slot.food.item.this-one` | slot | อันนี้ / `an níi` / this one | frame want-item; source:repo |
| `cv1.slot.food.item.gaprao-chicken` | slot | กะเพราไก่ / `gà-phrao gài` / chicken with holy basil | taught before practice; source:repo |
| `cv1.slot.food.quality.spicy` | slot | เผ็ด / `phèt` / spicy | frame not-quality; source:repo |

New active slot values: 3. New active frame families: 2.

### 3.2 Cue families and variants

| ID | Family | Thai / `ttsText` | Segments | Transliteration | English | Role | Prerequisites; source |
|---|---|---|---|---|---|---|---|
| `cv1.cue-family.food.greeting` | — | — | — | — | greeting | recognition | none |
| `cv1.cue-variant.food.greeting.v01` | greeting | สวัสดีครับ | สวัสดี/ครับ | `sà-wàt-dii khráp` | Hello. | recognition | none; source:repo |
| `cv1.cue-family.food.what-would-you-like` | — | — | — | — | asks for food choice | recognition | none |
| `cv1.cue-variant.food.what-would-you-like.v01` | what-would-you-like | จะรับอะไรดีครับ | จะรับ/อะไรดี/ครับ | `jà ráp a-rai dii khráp` | What would you like? | recognition | none; source:repo |
| `cv1.cue-variant.food.what-would-you-like.v02` | what-would-you-like | รับอะไรดีครับ | รับ/อะไรดี/ครับ | `ráp a-rai dii khráp` | What would you like? | recognition | v01 atoms; source:recombination |
| `cv1.cue-variant.food.what-would-you-like.v03` | what-would-you-like | จะเอาอะไรครับ | จะเอา/อะไร/ครับ | `jà ao a-rai khráp` | What do you want? | recognition | `เอา`, `อะไร`, `จะ`; source:recombination |
| `cv1.cue-family.food.spice-choice` | — | — | — | — | asks whether spicy is wanted | recognition | none |
| `cv1.cue-variant.food.spice-choice.v01` | spice-choice | รับเผ็ดไหมครับ | รับเผ็ด/ไหม/ครับ | `ráp phèt mǎi khráp` | Would you like it spicy? | recognition | none; source:repo |
| `cv1.cue-variant.food.spice-choice.v02` | spice-choice | เอาเผ็ดไหมครับ | เอาเผ็ด/ไหม/ครับ | `ao phèt mǎi khráp` | Do you want it spicy? | recognition | taught atoms; source:recombination |
| `cv1.cue-variant.food.spice-choice.v03` | spice-choice | เผ็ดไหมครับ | เผ็ด/ไหม/ครับ | `phèt mǎi khráp` | Spicy? | recognition | taught atoms; source:recombination |
| `cv1.cue-variant.social.okay.v01` | social acknowledgement | ได้ครับ | ได้/ครับ | `dâai khráp` | Okay. | recognition | model teaching; source:repo |

### 3.3 Responses and accepted sets

| Response ID | Thai / `ttsText` | Segments | Transliteration | English | Role | Frame / slots; prerequisites |
|---|---|---|---|---|---|---|
| `cv1.response.w01.l01.order-this` | เอาอันนี้ครับ | เอา/อันนี้/ครับ | `ao an níi khráp` | I will have this one. | active | want-item / this-one; none |
| `cv1.response.w01.l01.order-gaprao-chicken` | เอากะเพราไก่ครับ | เอา/กะเพราไก่/ครับ | `ao gà-phrao gài khráp` | I will have chicken with holy basil. | transfer/practice | want-item / gaprao-chicken; slot taught |
| `cv1.response.w01.l01.not-spicy` | ไม่เผ็ดครับ | ไม่/เผ็ด/ครับ | `mâi phèt khráp` | Not spicy, please. | active | not-quality / spicy; none |

- `cv1.accepted.w01.l01.order-this` = [`cv1.response.w01.l01.order-this`].
- `cv1.accepted.w01.l01.order-gaprao-chicken` = [`cv1.response.w01.l01.order-gaprao-chicken`].
- `cv1.accepted.w01.l01.not-spicy` = [`cv1.response.w01.l01.not-spicy`].

Three-option sets:

| ID | Accepted set | Distractor 1 | Distractor 2 | Rationale |
|---|---|---|---|---|
| `cv1.options.w01.l01.order` | order-this or order-gaprao as interaction declares | `cv1.response.w01.l01.not-spicy` | `cv1.response.social.thanks` | wrong function; closes before ordering |
| `cv1.options.w01.l01.spice` | not-spicy | `cv1.response.w01.l01.order-this` | `cv1.response.social.okay` | item answer; opposite spice intent |
| `cv1.options.w01.l01.greeting` | social.greeting | `cv1.response.social.thanks` | `cv1.response.social.okay` | closing routine; acknowledgement routine |

## 4. L02 `cv1.lesson.w01.l02.food-options`

Outcome: choose dine-in, order water and initiate the bill after the meal. Prerequisite: L01. Scene: `cv1.scene.w01.l02.model`.

The compact inventory's vendor-led bill cue is superseded: the binding model uses learner-led `cv1.event.w01.l02.meal-finished`. The actual partner reply is the total, not an invented generic prompt.

### 4.1 Functions, frames and slots

| ID | Kind | Definition | Prerequisites; source |
|---|---|---|---|
| `cv1.fn.food.choose-service` | function | choose dine-in or takeaway | L01; source:repo |
| `cv1.fn.food.order-water` | function | order one bottle of water | L01; source:repo |
| `cv1.fn.food.request-bill` | function | initiate payment after eating | L01; source:repo |
| `cv1.frame.food.service-choice` | frame | `{service}/ครับ` | choose-service; source:repo |
| `cv1.frame.food.drink-quantity` | frame | `น้ำเปล่า/ขวดหนึ่ง/ครับ` | order-water; source:repo |
| `cv1.frame.food.request-with` | frame | `{request}/ด้วย/ครับ` | request-bill; source:repo |
| `cv1.slot.food.service.here` | slot | ทานที่นี่ / `thaan thîi-nîi` / eat here | source:repo |
| `cv1.slot.food.service.takeaway` | slot | กลับบ้าน / `glàp bâan` / takeaway | source:repo |
| `cv1.slot.food.drink.plain-water` | slot | น้ำเปล่า / `náam-bplàao` / plain water | source:repo |
| `cv1.slot.food.quantity.one-bottle` | slot | ขวดหนึ่ง / `khùat nùeng` / one bottle | source:repo |

New active slot values: 4. New active frame families: 2; drink-quantity is a fixed bounded reply, not an open productive family.

### 4.2 Cues and event

| ID | Family | Thai / `ttsText` | Segments | Transliteration | English | Role | Prerequisites; source |
|---|---|---|---|---|---|---|---|
| `cv1.cue-family.food.service-choice` | — | — | — | — | asks here or takeaway | recognition | L01 |
| `cv1.cue-variant.food.service-choice.v01` | service-choice | ทานที่นี่หรือกลับบ้านครับ | ทานที่นี่/หรือ/กลับบ้าน/ครับ | `thaan thîi-nîi rǔue glàp bâan khráp` | For here or takeaway? | recognition | L01; source:repo |
| `cv1.cue-variant.food.service-choice.v02` | service-choice | ที่นี่หรือกลับบ้านครับ | ที่นี่/หรือ/กลับบ้าน/ครับ | `thîi-nîi rǔue glàp bâan khráp` | Here or takeaway? | recognition | v01 atoms; source:recombination |
| `cv1.cue-variant.food.service-choice.v03` | service-choice | ทานที่นี่ไหมครับ | ทานที่นี่/ไหม/ครับ | `thaan thîi-nîi mǎi khráp` | Will you eat here? | recognition | taught atoms; source:recombination |
| `cv1.cue-family.food.drink-choice` | — | — | — | — | asks drink choice | recognition | L01 |
| `cv1.cue-variant.food.drink-choice.v01` | drink-choice | รับน้ำอะไรดีครับ | รับน้ำ/อะไรดี/ครับ | `ráp náam a-rai dii khráp` | What drink would you like? | recognition | L01; source:repo |
| `cv1.cue-variant.food.drink-choice.v02` | drink-choice | รับน้ำอะไรครับ | รับน้ำ/อะไร/ครับ | `ráp náam a-rai khráp` | What drink would you like? | recognition | v01 atoms; source:recombination |
| `cv1.cue-variant.food.drink-choice.v03` | drink-choice | เอาน้ำอะไรครับ | เอาน้ำ/อะไร/ครับ | `ao náam a-rai khráp` | What drink do you want? | recognition | L01 `เอา`; source:recombination |
| `cv1.cue-variant.food.total.v01` | total | ทั้งหมดแปดสิบบาทครับ | ทั้งหมด/แปดสิบบาท/ครับ | `tháng-mòt bpàaet-sìp bàat khráp` | Eighty baht altogether. | recognition | taught before bill event objective; source:repo |
| `cv1.event.w01.l02.meal-finished` | event | — | — | — | meal finished; learner wants the bill | learner-led | L02 meaning-first |
| `cv1.event.w01.l02.cafe-drink-finished` | event | — | — | — | finished café drink; learner wants to pay | learner-led transfer | meal-finished mechanism |
| `cv1.event.w01.l02.foodcourt-finished` | event | — | — | — | finished at food court; learner wants to pay | learner-led transfer | meal-finished mechanism |

### 4.3 Responses and accepted sets

| Response ID | Thai / `ttsText` | Segments | Transliteration | English | Role | Prerequisites |
|---|---|---|---|---|---|---|
| `cv1.response.w01.l02.dine-here` | ทานที่นี่ครับ | ทานที่นี่/ครับ | `thaan thîi-nîi khráp` | For here. | active | service here |
| `cv1.response.w01.l02.takeaway` | กลับบ้านครับ | กลับบ้าน/ครับ | `glàp bâan khráp` | Takeaway. | transfer/practice | service takeaway |
| `cv1.response.w01.l02.water-one` | น้ำเปล่าขวดหนึ่งครับ | น้ำเปล่า/ขวดหนึ่ง/ครับ | `náam-bplàao khùat nùeng khráp` | One bottle of water. | active | drink and quantity slots |
| `cv1.response.w01.l02.bill` | คิดเงินด้วยครับ | คิดเงิน/ด้วย/ครับ | `khít ngern dûai khráp` | The bill, please. | active | event mechanism |

Accepted sets `cv1.accepted.w01.l02.dine-here`, `.takeaway`, `.water-one` and `.bill` each contain the corresponding single response.

| Option-set ID | Accepted | Distractor 1 | Distractor 2 | Rationale |
|---|---|---|---|---|
| `cv1.options.w01.l02.service` | dine-here or takeaway as context declares | water-one | bill | drink/payment function |
| `cv1.options.w01.l02.water` | water-one | dine-here | bill | service/payment function |
| `cv1.options.w01.l02.bill` | bill | water-one | dine-here | orders more / repeats service choice |

## 5. L03 `cv1.lesson.w01.l03.repair`

Outcome: select a precise repair strategy, obtain a repaired replay and then answer the original task. Prerequisites: L01–L02 cue families. Scene: `cv1.scene.w01.l03.model`.

### 5.1 Functions, frames, slots and repair states

| ID | Kind | Definition | Prerequisites; source |
|---|---|---|---|
| `cv1.fn.repair.signal-nonunderstanding` | function | state that meaning is unknown | L01–L02; source:repo |
| `cv1.fn.repair.request-slower` | function | request reduced rate | L01–L02; source:repo |
| `cv1.fn.repair.request-repeat` | function | request one replay | L01–L02; source:recombination |
| `cv1.frame.repair.not-state` | frame | `ไม่/{state}/ครับ` | L01 negation; source:recombination |
| `cv1.frame.repair.speak-modifier` | frame | `พูด/{modifier}/ได้ไหม/ครับ` | L02 question mechanism; source:repo/recombination |
| `cv1.slot.repair.state.understand` | slot | เข้าใจ / `khâo-jai` / understand | taught meaning-first |
| `cv1.slot.repair.modifier.slowly` | slot | ช้าๆ / `cháa-cháa` / slowly | source:repo |
| `cv1.slot.repair.modifier.again` | slot | อีกครั้ง / `ìik khráng` / again | source:recombination |
| `cv1.context-state.repair.meaning-unknown` | state | learner heard the cue but does not know its meaning | visible goal card; no cue translation |
| `cv1.context-state.repair.too-fast` | state | learner knows the function and specifically needs reduced speed | visible goal card |
| `cv1.context-state.repair.missed-once` | state | learner understood previously but this playback was interrupted/missed | visible goal card |
| `cv1.context-state.repair.slow-repeat` | state | learner explicitly needs both reduced speed and repetition | practice only before later eligibility |

New active slot values: 3. New active frame families: 2.

### 5.2 Responses and accepted sets

| Response ID | Thai / `ttsText` | Segments | Transliteration | English | Role | Rate; prerequisites |
|---|---|---|---|---|---|---|
| `cv1.response.w01.l03.dont-understand` | ไม่เข้าใจครับ | ไม่/เข้าใจ/ครับ | `mâi khâo-jai khráp` | I do not understand. | active | 0.72; state taught |
| `cv1.response.w01.l03.slower` | พูดช้าๆ ได้ไหมครับ | พูด/ช้าๆ/ได้ไหม/ครับ | `phûut cháa-cháa dâai mǎi khráp` | Could you speak slowly? | active | 0.72; modifier taught |
| `cv1.response.w01.l03.again` | พูดอีกครั้งได้ไหมครับ | พูด/อีกครั้ง/ได้ไหม/ครับ | `phûut ìik khráng dâai mǎi khráp` | Could you say it again? | active | 0.72; modifier taught |
| `cv1.response.w01.l03.slow-again` | พูดช้าๆ อีกครั้งได้ไหมครับ | พูด/ช้าๆ/อีกครั้ง/ได้ไหม/ครับ | `phûut cháa-cháa ìik khráng dâai mǎi khráp` | Could you say it again slowly? | practice/transfer | 0.72; both modifiers taught |
| `cv1.response.w01.l03.sorry-dont-understand` | ขอโทษครับ ไม่เข้าใจครับ | ขอโทษ/ครับ/ไม่/เข้าใจ/ครับ | `khǒr-thôht khráp, mâi khâo-jai khráp` | Sorry, I do not understand. | accepted spoken variant | 0.72; excuse-me routine |
| `cv1.response.w01.l03.sorry-slower` | ขอโทษครับ พูดช้าๆ ได้ไหมครับ | ขอโทษ/ครับ/พูด/ช้าๆ/ได้ไหม/ครับ | `khǒr-thôht khráp, phûut cháa-cháa dâai mǎi khráp` | Sorry, could you speak slowly? | accepted spoken variant | 0.72; excuse-me routine |
| `cv1.response.w01.l03.sorry-again` | ขอโทษครับ พูดอีกครั้งได้ไหมครับ | ขอโทษ/ครับ/พูด/อีกครั้ง/ได้ไหม/ครับ | `khǒr-thôht khráp, phûut ìik khráng dâai mǎi khráp` | Sorry, could you say it again? | accepted spoken variant | 0.72; excuse-me routine |

- `cv1.accepted.w01.l03.dont-understand` contains `dont-understand`, `sorry-dont-understand`.
- `cv1.accepted.w01.l03.slower` contains `slower`, `sorry-slower`.
- `cv1.accepted.w01.l03.again` contains `again`, `sorry-again`.
- `cv1.accepted.w01.l03.slow-again` contains `slow-again`.

The objective renderer uses the first member as the canonical correct audio option. Other accepted members are excluded from distractors.

| Option-set ID | Accepted set | Distractor 1 | Distractor 2 | Rationale |
|---|---|---|---|---|
| `cv1.options.w01.l03.meaning-unknown` | dont-understand | `cv1.response.w01.l01.order-this` | `cv1.response.social.thanks` | food answer and closing are invalid under explicit unknown-meaning state |
| `cv1.options.w01.l03.too-fast` | slower | `cv1.response.w01.l02.water-one` | `cv1.response.social.thanks` | drink and closing do not request reduced speed |
| `cv1.options.w01.l03.missed-once` | again | `cv1.response.w01.l01.not-spicy` | `cv1.response.social.thanks` | spice answer and closing do not request replay |
| `cv1.options.w01.l03.slow-repeat` | slow-again | `cv1.response.w01.l02.dine-here` | `cv1.response.social.thanks` | service choice and closing do not request repair |

### 5.3 Repair completion invariant

Every L03 interaction stores `originalTaskInteractionId`. After the repair reply, the engine replays that original cue, at `rate:0.58` for `too-fast` or `slow-repeat`, and requires the original task's accepted response before the interaction clears. The introductory chain ends with `cv1.cue-variant.food.what-would-you-like.v01 → cv1.response.w01.l01.order-this`; a repair reply alone cannot complete it.

## 6. L04 `cv1.lesson.w02.l04.taxi-destination`

Outcome: give a destination and request the meter. Prerequisite: `cv1.gate.w01` passed. Scene: `cv1.scene.w02.l04.model`.

### 6.1 Functions, frames and slots

| ID | Kind | Definition | Prerequisites; source |
|---|---|---|---|
| `cv1.fn.transport.give-destination` | function | state taxi destination | W1 gate; source:repo |
| `cv1.fn.transport.request-meter` | function | request meter use | W1 gate; source:repo |
| `cv1.frame.transport.go-destination` | frame | `ไป/{destination}/ครับ` | give-destination; source:repo |
| `cv1.frame.transport.use-meter-request` | frame | `ใช้มิเตอร์/ได้ไหม/ครับ` | request-meter; source:repo |
| `cv1.slot.transport.destination.ekkamai-station` | slot | สถานีเอกมัย / `sà-thǎa-nii èek-gà-mai` | source:repo |
| `cv1.slot.transport.destination.sukhumvit-soi-10` | slot | สุขุมวิทซอยสิบ / `sù-khǔm-wít soi sìp` | source:repo |
| `cv1.slot.transport.destination.ekkamai` | slot | เอกมัย / `èek-gà-mai` | derived from station slot |
| `cv1.slot.transport.fare.meter` | slot | มิเตอร์ / `mí-dtêr` | source:repo |

New active slot values: 4. New active frame families: 2.

### 6.2 Cue families and variants

| ID | Family | Thai / `ttsText` | Segments | Transliteration | English | Role | Prerequisites; source |
|---|---|---|---|---|---|---|---|
| `cv1.cue-family.transport.destination-question` | — | — | — | — | asks destination | recognition | W1 gate |
| `cv1.cue-variant.transport.destination-question.v01` | destination-question | ไปไหนครับ | ไป/ไหน/ครับ | `bpai nǎi khráp` | Where are you going? | recognition | source:repo |
| `cv1.cue-variant.transport.destination-question.v02` | destination-question | จะไปไหนครับ | จะไป/ไหน/ครับ | `jà bpai nǎi khráp` | Where are you going? | recognition | L01 `จะ`; source:recombination |
| `cv1.cue-variant.transport.destination-question.v03` | destination-question | ไปที่ไหนครับ | ไป/ที่ไหน/ครับ | `bpai thîi nǎi khráp` | Where are you going? | recognition | L02 `ที่`; source:recombination |
| `cv1.cue-variant.transport.destination-question.v04` | destination-question | ไปสถานีไหนครับ | ไป/สถานีไหน/ครับ | `bpai sà-thǎa-nii nǎi khráp` | Which station are you going to? | recognition | station slot taught; source:recombination |
| `cv1.cue-family.transport.no-meter-proposal` | — | — | — | — | driver proposes no meter | recognition | W1 gate |
| `cv1.cue-variant.transport.no-meter-proposal.v01` | no-meter-proposal | ไม่ใช้มิเตอร์ครับ | ไม่/ใช้มิเตอร์/ครับ | `mâi chái mí-dtêr khráp` | I am not using the meter. | recognition | source:repo |
| `cv1.cue-variant.transport.no-meter-proposal.v02` | no-meter-proposal | ไม่เปิดมิเตอร์ครับ | ไม่/เปิดมิเตอร์/ครับ | `mâi bpèrt mí-dtêr khráp` | I am not turning on the meter. | recognition | `เปิด` taught before test; source:recombination |
| `cv1.cue-variant.transport.meter-choice.v01` | meter-choice | ใช้มิเตอร์ไหมครับ | ใช้มิเตอร์/ไหม/ครับ | `chái mí-dtêr mǎi khráp` | Shall I use the meter? | recognition | meter atoms taught; source:recombination |

Destination-confirmation strings are deliberately absent. In particular, no cue containing a destination plus `ใช่ไหมครับ` is legal in L04 teaching, retention, gates or later transcripts until a separate confirmation mechanism teaches it.

### 6.3 Responses and accepted sets

| Response ID | Thai / `ttsText` | Segments | Transliteration | English | Role | Prerequisites |
|---|---|---|---|---|---|---|
| `cv1.response.w02.l04.destination-ekkamai-station` | ไปสถานีเอกมัยครับ | ไป/สถานีเอกมัย/ครับ | `bpai sà-thǎa-nii èek-gà-mai khráp` | To Ekkamai Station. | active | station slot |
| `cv1.response.w02.l04.destination-sukhumvit-soi-10` | ไปสุขุมวิทซอยสิบครับ | ไป/สุขุมวิทซอยสิบ/ครับ | `bpai sù-khǔm-wít soi sìp khráp` | To Sukhumvit Soi 10. | practice/transfer | soi slot taught |
| `cv1.response.w02.l04.destination-ekkamai` | ไปเอกมัยครับ | ไป/เอกมัย/ครับ | `bpai èek-gà-mai khráp` | To Ekkamai. | transfer | Ekkamai atom taught |
| `cv1.response.w02.l04.meter-request` | ใช้มิเตอร์ได้ไหมครับ | ใช้มิเตอร์/ได้ไหม/ครับ | `chái mí-dtêr dâai mǎi khráp` | Could you use the meter? | active | meter cue taught |
| `cv1.response.w02.l04.meter-direct` | ใช้มิเตอร์ครับ | ใช้มิเตอร์/ครับ | `chái mí-dtêr khráp` | Use the meter, please. | transfer | direct-reply mechanism taught |

Accepted sets `cv1.accepted.w02.l04.destination-ekkamai-station`, `.destination-sukhumvit-soi-10`, `.destination-ekkamai`, `.meter-request` and `.meter-direct` each contain the matching response.

| Option-set ID | Accepted | Distractor 1 | Distractor 2 | Rationale |
|---|---|---|---|---|
| `cv1.options.w02.l04.destination` | declared destination set | meter-request | social.thanks | fare function; closes before giving the required destination |
| `cv1.options.w02.l04.meter` | meter-request or meter-direct as declared | destination-ekkamai-station | social.thanks | repeats destination; accepts no-meter turn |
| `cv1.options.w02.l04.thanks` | social.thanks | destination-ekkamai-station | meter-request | repeats completed functions |

## 7. L05 `cv1.lesson.w02.l05.taxi-route`

Outcome: direct the driver straight, turn and stop. Prerequisite: L04. Scene: `cv1.scene.w02.l05.model`.

### 7.1 Functions, frames and slots

| ID | Kind | Definition | Prerequisites; source |
|---|---|---|---|
| `cv1.fn.transport.go-straight` | function | continue straight | L04; source:repo |
| `cv1.fn.transport.turn` | function | turn at specified side/place | L04; source:repo |
| `cv1.fn.transport.stop` | function | stop at specified place | L04; source:repo |
| `cv1.frame.transport.straight` | frame | `ตรงไป/ครับ` | go-straight; source:repo |
| `cv1.frame.transport.turn-side-place` | frame | `เลี้ยว/{side}/{place}/ครับ` | turn; source:repo |
| `cv1.frame.transport.stop-place` | frame | `จอด/{place}/ครับ` | stop; source:repo |
| `cv1.slot.transport.side.left` | slot | ซ้าย / `sáai` | source:repo |
| `cv1.slot.transport.side.right` | slot | ขวา / `khwǎa` | taught before practice; source:repo |
| `cv1.slot.transport.place.ahead` | slot | ข้างหน้า / `khâang nâa` | source:repo |
| `cv1.slot.transport.place.here` | slot | ตรงนี้ / `dtrong níi` | source:repo |

New active slot values: 4. New active frame families: 2; straight is fixed.

### 7.2 Cue families and variants

| ID | Family | Thai / `ttsText` | Segments | Transliteration | English | Role | Prerequisites; source |
|---|---|---|---|---|---|---|---|
| `cv1.cue-family.transport.which-way` | — | — | — | — | asks direction | recognition | L04 |
| `cv1.cue-variant.transport.which-way.v01` | which-way | ไปทางไหนดีครับ | ไปทางไหน/ดี/ครับ | `bpai thaang nǎi dii khráp` | Which way should I go? | recognition | source:repo |
| `cv1.cue-variant.transport.which-way.v02` | which-way | ไปทางไหนครับ | ไปทางไหน/ครับ | `bpai thaang nǎi khráp` | Which way? | recognition | v01 atoms; source:recombination |
| `cv1.cue-variant.transport.which-way.v03` | which-way | แล้วไปทางไหนครับ | แล้ว/ไปทางไหน/ครับ | `láaeo bpai thaang nǎi khráp` | Which way after that? | recognition | `แล้ว` taught here; source:repo |
| `cv1.cue-family.transport.stop-location` | — | — | — | — | asks stop location | recognition | turn/place atoms |
| `cv1.cue-variant.transport.stop-location.v01` | stop-location | ตรงนี้ใช่ไหมครับ | ตรงนี้/ใช่ไหม/ครับ | `dtrong níi châi mǎi khráp` | Here, right? | recognition | source:repo |
| `cv1.cue-variant.transport.stop-location.v02` | stop-location | ข้างหน้าใช่ไหมครับ | ข้างหน้า/ใช่ไหม/ครับ | `khâang nâa châi mǎi khráp` | Up ahead, right? | recognition | taught atoms; source:recombination |
| `cv1.cue-variant.transport.stop-location.v03` | stop-location | ตรงนี้หรือข้างหน้าครับ | ตรงนี้/หรือ/ข้างหน้า/ครับ | `dtrong níi rǔue khâang nâa khráp` | Here or up ahead? | recognition | L02 `หรือ`; source:recombination |
| `cv1.cue-family.transport.arrival` | — | — | — | — | announces arrival | recognition | L04 destination + L05 stop |
| `cv1.cue-variant.transport.arrival.v01` | arrival | ถึงแล้วครับ | ถึงแล้ว/ครับ | `thǔeng láaeo khráp` | We have arrived. | recognition | `ถึง` taught before test; source:recombination |
| `cv1.cue-variant.transport.arrival.v02` | arrival | ถึงตรงนี้แล้วครับ | ถึง/ตรงนี้/แล้ว/ครับ | `thǔeng dtrong níi láaeo khráp` | We have reached here. | recognition | taught atoms; source:recombination |
| `cv1.cue-variant.transport.arrival.v03` | arrival | ถึงสถานีเอกมัยแล้วครับ | ถึง/สถานีเอกมัย/แล้ว/ครับ | `thǔeng sà-thǎa-nii èek-gà-mai láaeo khráp` | We have reached Ekkamai Station. | recognition/recombined | L04 station slot; source:recombination |
| `cv1.cue-variant.transport.straight-confirm.v01` | confirmation | ตรงไปใช่ไหมครับ | ตรงไป/ใช่ไหม/ครับ | `dtrong bpai châi mǎi khráp` | Straight ahead, right? | recognition | straight taught; source:repo |

### 7.3 Responses and accepted sets

| Response ID | Thai / `ttsText` | Segments | Transliteration | English | Role | Prerequisites |
|---|---|---|---|---|---|---|
| `cv1.response.w02.l05.straight` | ตรงไปครับ | ตรงไป/ครับ | `dtrong bpai khráp` | Go straight. | active | frame taught |
| `cv1.response.w02.l05.turn-left-ahead` | เลี้ยวซ้ายข้างหน้าครับ | เลี้ยวซ้าย/ข้างหน้า/ครับ | `líao sáai khâang nâa khráp` | Turn left up ahead. | active | slots left/ahead |
| `cv1.response.w02.l05.turn-right-ahead` | เลี้ยวขวาข้างหน้าครับ | เลี้ยวขวา/ข้างหน้า/ครับ | `líao khwǎa khâang nâa khráp` | Turn right up ahead. | practice/transfer | right slot taught |
| `cv1.response.w02.l05.stop-here` | จอดตรงนี้ครับ | จอด/ตรงนี้/ครับ | `jòrt dtrong níi khráp` | Stop here. | active | here slot |
| `cv1.response.w02.l05.stop-ahead` | จอดข้างหน้าครับ | จอด/ข้างหน้า/ครับ | `jòrt khâang nâa khráp` | Stop up ahead. | transfer | recombination rule taught |

Accepted sets `cv1.accepted.w02.l05.straight`, `.turn-left-ahead`, `.turn-right-ahead`, `.stop-here` and `.stop-ahead` each contain the matching response.

| Option-set ID | Accepted | Distractor 1 | Distractor 2 | Rationale |
|---|---|---|---|---|
| `cv1.options.w02.l05.straight` | straight | turn-left-ahead | stop-here | turn/stop instead of straight |
| `cv1.options.w02.l05.turn-left` | turn-left-ahead | straight | turn-right-ahead | misses turn / wrong side under explicit route card |
| `cv1.options.w02.l05.turn-right` | turn-right-ahead | straight | turn-left-ahead | misses turn / wrong side under explicit route card |
| `cv1.options.w02.l05.stop` | stop-here or stop-ahead as context declares | straight | turn-left-ahead | continues or turns instead of stopping |
| `cv1.options.w02.l05.confirm` | social.yes | ask-next | stop-here | does not answer confirmation / adds stop request |

## 8. L06 `cv1.lesson.w02.l06.street-directions`

Outcome: ask for the BTS, request the next direction and ask about distance. Prerequisites: L04–L05. Scene: `cv1.scene.w02.l06.model`.

### 8.1 Functions, frames and slots

| ID | Kind | Definition | Prerequisites; source |
|---|---|---|---|
| `cv1.fn.location.ask-where` | function | ask where a place is | L04 place atoms; source:repo |
| `cv1.fn.location.ask-next-step` | function | ask for next route step | L05 which-way cue promoted; source:recombination |
| `cv1.fn.location.ask-distance` | function | ask whether destination is far | L05 route; source:recombination |
| `cv1.frame.location.where` | frame | `{place}/อยู่ไหน/ครับ` | ask-where; source:repo |
| `cv1.frame.location.next-step` | frame | `แล้ว/ไปทางไหน/ครับ` | ask-next-step; source:repo |
| `cv1.frame.location.property-question` | frame | `{property}/ไหม/ครับ` | ask-distance; source:recombination |
| `cv1.slot.location.place.bts-station` | slot | สถานีบีทีเอส / `sà-thǎa-nii bii-thii-èt` | taught before response |
| `cv1.slot.location.place.ekkamai-station` | slot | สถานีเอกมัย / `sà-thǎa-nii èek-gà-mai` | L04 |
| `cv1.slot.location.place.toilet` | slot | ห้องน้ำ / `hôrng-náam` | taught before practice |
| `cv1.slot.location.property.far` | slot | ไกล / `glai` | taught before response |

New active slot values: 4. New active frame families: 2; next-step is an explicit recognition-to-active promotion.

### 8.2 Cue families, variants and events

| ID | Family | Thai / `ttsText` | Segments | Transliteration | English | Role | Prerequisites; source |
|---|---|---|---|---|---|---|---|
| `cv1.cue-family.location.offer-help` | — | — | — | — | offers help | recognition | L05 |
| `cv1.cue-variant.location.offer-help.v01` | offer-help | มีอะไรให้ช่วยไหมครับ | มีอะไร/ให้ช่วย/ไหม/ครับ | `mii a-rai hâi chûai mǎi khráp` | Can I help with anything? | recognition | taught before test; source:recombination |
| `cv1.cue-variant.location.offer-help.v02` | offer-help | ให้ช่วยอะไรไหมครับ | ให้ช่วย/อะไร/ไหม/ครับ | `hâi chûai a-rai mǎi khráp` | Do you need help with anything? | recognition | v01 atoms; source:recombination |
| `cv1.cue-family.location.route-instruction` | — | — | — | — | gives route step | recognition | L05 |
| `cv1.cue-variant.location.route-instruction.v01` | route-instruction | ตรงไปครับ | ตรงไป/ครับ | `dtrong bpai khráp` | Go straight. | recognition | L05 response promoted to cue |
| `cv1.cue-variant.location.route-instruction.v02` | route-instruction | เดินตรงไปครับ | เดิน/ตรงไป/ครับ | `dooen dtrong bpai khráp` | Walk straight. | recognition | `เดิน` taught before test; source:recombination |
| `cv1.cue-variant.location.route-instruction.v03` | route-instruction | เลี้ยวซ้ายข้างหน้าครับ | เลี้ยวซ้าย/ข้างหน้า/ครับ | `líao sáai khâang nâa khráp` | Turn left up ahead. | recognition | L05 |
| `cv1.cue-variant.location.bts-confirm.v01` | confirmation | สถานีบีทีเอสใช่ไหมครับ | สถานีบีทีเอส/ใช่ไหม/ครับ | `sà-thǎa-nii bii-thii-èt châi mǎi khráp` | The BTS station, right? | recognition | BTS slot and confirmation taught |
| `cv1.event.w02.l06.distance-after-one-step` | event | — | — | — | one route step heard; distance remains unknown | learner-led | distance function taught |
| `cv1.event.w02.l06.distance-after-two-steps` | event | — | — | — | two route steps heard; distance remains unknown | learner-led | distance function taught |
| `cv1.event.w02.l06.distance-integrated-route` | event | — | — | — | complete route heard; learner asks distance | learner-led transfer | distance function taught |

### 8.3 Responses and accepted sets

| Response ID | Thai / `ttsText` | Segments | Transliteration | English | Role | Prerequisites |
|---|---|---|---|---|---|---|
| `cv1.response.w02.l06.ask-bts` | สถานีบีทีเอสอยู่ไหนครับ | สถานีบีทีเอส/อยู่ไหน/ครับ | `sà-thǎa-nii bii-thii-èt yùu nǎi khráp` | Where is the BTS station? | active | BTS slot |
| `cv1.response.w02.l06.ask-ekkamai-station` | สถานีเอกมัยอยู่ไหนครับ | สถานีเอกมัย/อยู่ไหน/ครับ | `sà-thǎa-nii èek-gà-mai yùu nǎi khráp` | Where is Ekkamai Station? | transfer | L04 slot |
| `cv1.response.w02.l06.ask-toilet` | ห้องน้ำอยู่ไหนครับ | ห้องน้ำ/อยู่ไหน/ครับ | `hôrng-náam yùu nǎi khráp` | Where is the toilet? | practice/transfer | toilet slot taught |
| `cv1.response.w02.l06.ask-next` | แล้วไปทางไหนครับ | แล้ว/ไปทางไหน/ครับ | `láaeo bpai thaang nǎi khráp` | Which way after that? | active promotion | L05 cue family |
| `cv1.response.w02.l06.ask-far` | ไกลไหมครับ | ไกล/ไหม/ครับ | `glai mǎi khráp` | Is it far? | active | far slot |

Accepted sets `cv1.accepted.w02.l06.ask-bts`, `.ask-ekkamai-station`, `.ask-toilet`, `.ask-next` and `.ask-far` each contain the matching response. `cv1.accepted.social.yes` handles confirmation.

| Option-set ID | Accepted | Distractor 1 | Distractor 2 | Rationale |
|---|---|---|---|---|
| `cv1.options.w02.l06.ask-place` | declared place question | ask-next | ask-far | next-step/distance function |
| `cv1.options.w02.l06.ask-next` | ask-next | ask-bts | ask-far | restarts place / asks distance |
| `cv1.options.w02.l06.ask-far` | ask-far | ask-next | ask-bts | route/place function |
| `cv1.options.w02.l06.confirm-bts` | social.yes | ask-next | ask-far | neither answers confirmation |

Binding confirmation interaction: `cv1.interaction.lesson.w02.l06.confirmation.01` uses context `cv1.context.w02.l06.confirmation.bts`, cue `cv1.cue-variant.location.bts-confirm.v01` and accepted set `cv1.accepted.social.yes`. It is a taught recognition/routine check, not one of L06's three active targets. `cv1.response.w02.l06.ask-next` is forbidden as its answer.

## 9. Lesson-A and practice interaction registry

Every context description below is the complete context-card payload. Settings and goals do not quote or translate the cue.

### 9.1 L01

| Interaction ID | Context ID and exact card | Cue/event | Accepted set | Options | Notes |
|---|---|---|---|---|---|
| `cv1.interaction.lesson.w01.l01.a.01` | `cv1.context.w01.l01.lesson.greeting`: food stall; politely return the opening | food greeting v01 | social.greeting | `cv1.options.w01.l01.greeting` | routine; source:repo |
| `cv1.interaction.lesson.w01.l01.a.02` | `cv1.context.w01.l01.lesson.point-this`: food display; learner wants the item being pointed at | what-would-you-like v01 | w01.l01.order-this | `cv1.options.w01.l01.order` | active; source:repo |
| `cv1.interaction.lesson.w01.l01.a.03` | `cv1.context.w01.l01.lesson.no-spice`: food stall; learner wants the non-spicy option | spice-choice v01 | w01.l01.not-spicy | `cv1.options.w01.l01.spice` | active; source:repo |
| `cv1.interaction.practice.w01.l01.01` | `cv1.context.w01.l01.practice.named-dish`: food stall; learner wants chicken with holy basil | what-would-you-like v01 | w01.l01.order-gaprao-chicken | `cv1.options.w01.l01.order` | practice corpus only |

`cv1.form.lesson.w01.l01.a` manifest: `[lesson.w01.l01.a.01, lesson.w01.l01.a.02, lesson.w01.l01.a.03]`.

### 9.2 L02

| Interaction ID | Context ID and exact card | Cue/event | Accepted set | Options | Notes |
|---|---|---|---|---|---|
| `cv1.interaction.lesson.w01.l02.a.01` | `cv1.context.w01.l02.lesson.dine-here`: counter stall; learner intends to eat there | service-choice v01 | w01.l02.dine-here | `cv1.options.w01.l02.service` | active |
| `cv1.interaction.lesson.w01.l02.a.02` | `cv1.context.w01.l02.lesson.water`: counter stall; learner wants one bottle of plain water | drink-choice v01 | w01.l02.water-one | `cv1.options.w01.l02.water` | active |
| `cv1.interaction.lesson.w01.l02.a.03` | `cv1.context.w01.l02.lesson.bill`: table meal is finished; learner wants to pay | `cv1.event.w01.l02.meal-finished` | w01.l02.bill | `cv1.options.w01.l02.bill` | active learner-led; actual partner reply: food total v01 |
| `cv1.interaction.practice.w01.l02.01` | `cv1.context.w01.l02.practice.takeaway`: counter stall; learner wants takeaway | service-choice v01 | w01.l02.takeaway | `cv1.options.w01.l02.service` | practice corpus only |

`cv1.form.lesson.w01.l02.a` manifest: `[lesson.w01.l02.a.01, lesson.w01.l02.a.02, lesson.w01.l02.a.03]`. For item `.05`, direction is `event-request`; `.06` is `partner-reply-intent` using `cv1.cue-variant.food.total.v01`.

### 9.3 L03

| Interaction ID | Context ID and exact card | Cue | Accepted set | Options | Required resolution |
|---|---|---|---|---|---|
| `cv1.interaction.lesson.w01.l03.a.01` | `cv1.context.w01.l03.lesson.meaning-unknown`: food stall; cue meaning is unknown | food what-would-you-like v01 | w01.l03.dont-understand | `cv1.options.w01.l03.meaning-unknown` | replay same cue; answer order-this |
| `cv1.interaction.lesson.w01.l03.a.02` | `cv1.context.w01.l03.lesson.too-fast`: food stall; choice function is known but rate is too fast | food what-would-you-like v01 | w01.l03.slower | `cv1.options.w01.l03.too-fast` | replay at 0.58; answer order-this |
| `cv1.interaction.lesson.w01.l03.a.03` | `cv1.context.w01.l03.lesson.missed-once`: food stall; choice cue was understood earlier but this playback was missed | food what-would-you-like v01 | w01.l03.again | `cv1.options.w01.l03.missed-once` | replay same cue; answer order-this |
| `cv1.interaction.practice.w01.l03.01` | `cv1.context.w01.l03.practice.slow-repeat`: food stall; learner explicitly needs a slow replay | food what-would-you-like v02 | w01.l03.slow-again | `cv1.options.w01.l03.slow-repeat` | replay at 0.58; answer order-this |

Every context references its matching `cv1.context-state.repair.*` record. `cv1.form.lesson.w01.l03.a` manifest: `[lesson.w01.l03.a.01, lesson.w01.l03.a.02, lesson.w01.l03.a.03]`.

### 9.4 L04

| Interaction ID | Context ID and exact card | Cue | Accepted set | Options | Notes |
|---|---|---|---|---|---|
| `cv1.interaction.lesson.w02.l04.a.01` | `cv1.context.w02.l04.lesson.station`: taxi pickup; learner wants Ekkamai Station | destination-question v01 | destination-ekkamai-station | `cv1.options.w02.l04.destination` | active |
| `cv1.interaction.lesson.w02.l04.a.02` | `cv1.context.w02.l04.lesson.meter`: taxi driver proposes no meter; learner wants meter use | no-meter-proposal v01 | meter-request | `cv1.options.w02.l04.meter` | active |
| `cv1.interaction.lesson.w02.l04.a.03` | `cv1.context.w02.l04.lesson.thanks`: driver has accepted meter request; respond politely | social okay v01 | social.thanks | `cv1.options.w02.l04.thanks` | routine |
| `cv1.interaction.practice.w02.l04.01` | `cv1.context.w02.l04.practice.soi-10`: taxi pickup; learner wants Sukhumvit Soi 10 | destination-question v01 | destination-sukhumvit-soi-10 | `cv1.options.w02.l04.destination` | practice corpus only |

`cv1.form.lesson.w02.l04.a` manifest: `[lesson.w02.l04.a.01, lesson.w02.l04.a.02, lesson.w02.l04.a.03]`.

### 9.5 L05

| Interaction ID | Context ID and exact card | Cue | Accepted set | Options | Notes |
|---|---|---|---|---|---|
| `cv1.interaction.lesson.w02.l05.a.01` | `cv1.context.w02.l05.lesson.straight`: taxi route card shows continue straight | which-way v01 | straight | `cv1.options.w02.l05.straight` | active |
| `cv1.interaction.lesson.w02.l05.a.02` | `cv1.context.w02.l05.lesson.left`: taxi route card shows a left turn ahead | which-way v03 | turn-left-ahead | `cv1.options.w02.l05.turn-left` | active |
| `cv1.interaction.lesson.w02.l05.a.03` | `cv1.context.w02.l05.lesson.stop-here`: destination marker is at current position | stop-location v01 | stop-here | `cv1.options.w02.l05.stop` | active |
| `cv1.interaction.practice.w02.l05.01` | `cv1.context.w02.l05.practice.right`: taxi route card shows a right turn ahead | which-way v03 | turn-right-ahead | `cv1.options.w02.l05.turn-right` | practice corpus only |

`cv1.form.lesson.w02.l05.a` manifest: `[lesson.w02.l05.a.01, lesson.w02.l05.a.02, lesson.w02.l05.a.03]`.

### 9.6 L06

| Interaction ID | Context ID and exact card | Cue/event | Accepted set | Options | Notes |
|---|---|---|---|---|---|
| `cv1.interaction.lesson.w02.l06.a.01` | `cv1.context.w02.l06.lesson.find-bts`: Bangkok street; learner needs the BTS station | offer-help v01 | ask-bts | `cv1.options.w02.l06.ask-place` | active |
| `cv1.interaction.lesson.w02.l06.a.02` | `cv1.context.w02.l06.lesson.next-step`: first route instruction is insufficient; learner needs the next step | route-instruction v01 | ask-next | `cv1.options.w02.l06.ask-next` | active |
| `cv1.interaction.lesson.w02.l06.a.03` | `cv1.context.w02.l06.lesson.distance`: route has been given; learner still needs distance | `cv1.event.w02.l06.distance-after-two-steps` | ask-far | `cv1.options.w02.l06.ask-far` | active learner-led; actual partner reply: `cv1.response.w02.l06.not-far` below |
| `cv1.interaction.practice.w02.l06.01` | `cv1.context.w02.l06.practice.find-toilet`: public place; learner needs the toilet | offer-help v01 | ask-toilet | `cv1.options.w02.l06.ask-place` | practice corpus only |

The actual reply language record for the event is `cv1.response.w02.l06.not-far`: ไม่ไกลครับ; segments ไม่/ไกล/ครับ; `mâi glai khráp`; “It is not far.”; recognition; `ttsText` identical; `lang:th-TH`; `rate:0.72`; prerequisite far slot; source:recombination. `cv1.accepted.w02.l06.not-far` contains that response for intent grading only.

`cv1.form.lesson.w02.l06.a` manifest: `[lesson.w02.l06.a.01, lesson.w02.l06.a.02, lesson.w02.l06.a.03]`. Items `.05/.06` use `event-request/partner-reply-intent`.

## 10. +1 and +7 retention interactions and manifests

All IDs in this section begin `cv1.interaction.retention.`; abbreviated table IDs expand by prepending that prefix. Context IDs expand under `cv1.context` with the same week/lesson/stage/form/ordinal. Form-A and form-B source interaction IDs are disjoint. A +1 row marked `rehearsalOf` is familiar retention, never transfer.

### 10.1 L01

| Interaction suffix | Exact context card | Cue | Accepted | Options | Note |
|---|---|---|---|---|---|
| `w01.l01.d1.a.01` | street stall opening; return greeting | greeting v01 | social.greeting | l01.greeting | `rehearsalOf` lesson.01 |
| `w01.l01.d1.a.02` | display tray; choose pointed item | food what v02 | order-this | l01.order | alternate cue |
| `w01.l01.d1.a.03` | noodle stall; request non-spicy | spice v02 | not-spicy | l01.spice | alternate cue |
| `w01.l01.d1.b.01` | canteen opening; return greeting | greeting v01 | social.greeting | l01.greeting | parallel context |
| `w01.l01.d1.b.02` | counter display; choose pointed item | food what v03 | order-this | l01.order | parallel cue |
| `w01.l01.d1.b.03` | curry counter; request non-spicy | spice v03 | not-spicy | l01.spice | parallel cue |
| `w01.l01.d7.a.01` | lunch counter; order named dish | food what v03 | order-gaprao-chicken | l01.order | changed slot |
| `w01.l01.d7.a.02` | curry stall; request non-spicy | spice v03 | not-spicy | l01.spice | changed cue |
| `w01.l01.d7.a.03` | café opening; return greeting | greeting v01 | social.greeting | l01.greeting | routine cap |
| `w01.l01.d7.a.04` | convenience drink case; learner points to desired bottle | L02 drink-choice v02 | order-this | l01.order | cross-scene family variant A |
| `w01.l01.d7.b.01` | food-court stall; order named dish | food what v02 | order-gaprao-chicken | l01.order | parallel changed slot |
| `w01.l01.d7.b.02` | wok stall; request non-spicy | spice v02 | not-spicy | l01.spice | parallel cue |
| `w01.l01.d7.b.03` | market-stall opening; return greeting | greeting v01 | social.greeting | l01.greeting | routine cap |
| `w01.l01.d7.b.04` | café snack display; order named dish | food what v03 | order-gaprao-chicken | l01.order | cross-scene family variant B |

- `cv1.form.retention.w01.l01.d1.a` = `[d1.a.01,d1.a.02,d1.a.03]`; form B uses the three `d1.b` records.
- `cv1.form.retention.w01.l01.d7.a` = `[d7.a.01,d7.a.02,d7.a.03,d7.a.04]`; form B uses the four `d7.b` records.
- Cross-scene family: `cv1.interaction-family.retention.w01.l01.d7.cross-scene`, variants `.d7.a.04` and `.d7.b.04`.

### 10.2 L02

| Interaction suffix | Exact context card | Cue/event | Accepted | Options | Note |
|---|---|---|---|---|---|
| `w01.l02.d1.a.01` | mall counter; eat there | service v03 | dine-here | l02.service | alternate cue |
| `w01.l02.d1.a.02` | drink counter; one water | drink v02 | water-one | l02.water | alternate cue |
| `w01.l02.d1.a.03` | café drink cleared; initiate payment | café-drink-finished event | bill | l02.bill | actual reply total v01 |
| `w01.l02.d1.b.01` | lunch counter; takeaway goal | service v02 | takeaway | l02.service | parallel slot |
| `w01.l02.d1.b.02` | food kiosk; one water | drink v03 | water-one | l02.water | parallel cue |
| `w01.l02.d1.b.03` | food-court meal finished; initiate payment | foodcourt-finished event | bill | l02.bill | actual reply total v01 |
| `w01.l02.d7.a.01` | office canteen; takeaway goal | service v03 | takeaway | l02.service | changed slot/cue |
| `w01.l02.d7.a.02` | kiosk; one water | drink v03 | water-one | l02.water | changed cue |
| `w01.l02.d7.a.03` | café table cleared; initiate payment | café-drink-finished event | bill | l02.bill | stage-exclusive context |
| `w01.l02.d7.a.04` | convenience hot-food counter; one water wanted | food what v02 | water-one | l02.water | cross-scene family variant A |
| `w01.l02.d7.b.01` | café table; dine-in goal | service v02 | dine-here | l02.service | parallel cue |
| `w01.l02.d7.b.02` | canteen; one water | drink v02 | water-one | l02.water | parallel cue/context |
| `w01.l02.d7.b.03` | food-court table cleared; initiate payment | foodcourt-finished event | bill | l02.bill | stage-exclusive context |
| `w01.l02.d7.b.04` | market drink cooler; one water wanted | food what v03 | water-one | l02.water | cross-scene family variant B |

Forms use the same exact A/B manifest pattern as L01. Cross-scene family: `cv1.interaction-family.retention.w01.l02.d7.cross-scene`, variants `.d7.a.04/.d7.b.04`.

### 10.3 L03

Each context below includes the named repair state and the listed original-task resolution. Other repair responses are excluded from its option set.

| Interaction suffix | Exact context card | Cue | Accepted | Options | Original-task resolution |
|---|---|---|---|---|---|
| `w01.l03.d1.a.01` | food choice; meaning unknown | food what v02 | dont-understand | meaning-unknown | replay; order-this |
| `w01.l03.d1.a.02` | spice choice; too fast | spice v01 | slower | too-fast | replay 0.58; not-spicy |
| `w01.l03.d1.a.03` | lunch-counter service choice; missed once | service v01 | again | missed-once | replay; dine-here |
| `w01.l03.d1.b.01` | café drink choice; meaning unknown | drink v01 | dont-understand | meaning-unknown | replay; water-one |
| `w01.l03.d1.b.02` | food choice; too fast | food what v03 | slower | too-fast | replay 0.58; order-this |
| `w01.l03.d1.b.03` | spice choice; missed once | spice v02 | again | missed-once | replay; not-spicy |
| `w01.l03.d7.a.01` | canteen drink choice; meaning unknown | drink v02 | dont-understand | meaning-unknown | replay; water-one |
| `w01.l03.d7.a.02` | service choice; too fast | service v02 | slower | too-fast | replay 0.58; takeaway |
| `w01.l03.d7.a.03` | food choice; missed once | food what v03 | again | missed-once | replay; order-gaprao-chicken |
| `w01.l03.d7.a.04` | taxi pickup; destination cue playback interrupted | L04 destination-question v01 | again | missed-once | replay; destination-ekkamai-station |
| `w01.l03.d7.b.01` | spice choice; meaning unknown | spice v03 | dont-understand | meaning-unknown | replay; not-spicy |
| `w01.l03.d7.b.02` | drink choice; too fast | drink v03 | slower | too-fast | replay 0.58; water-one |
| `w01.l03.d7.b.03` | evening-stall service choice; missed once | service v03 | again | missed-once | replay; dine-here |
| `w01.l03.d7.b.04` | taxi meter proposal; rate is too fast | L04 no-meter v01 | slower | too-fast | replay 0.58; meter-request |

Forms use the exact A/B pattern above. L03 +7 cannot be served until L04 atoms are taught; if its calendar due date precedes L04 completion it remains due but ineligible. Cross-scene family: `cv1.interaction-family.retention.w01.l03.d7.cross-scene`, variants `.d7.a.04/.d7.b.04`.

### 10.4 L04

| Interaction suffix | Exact context card | Cue | Accepted | Options | Note |
|---|---|---|---|---|---|
| `w02.l04.d1.a.01` | hotel taxi pickup; Ekkamai Station goal | destination v02 | destination-ekkamai-station | l04.destination | alternate cue |
| `w02.l04.d1.a.02` | hotel taxi queue; driver declines meter and learner requires it | no-meter v02 | meter-request | l04.meter | alternate cue |
| `w02.l04.d1.a.03` | driver accepts request; thank him | social okay v01 | social.thanks | l04.thanks | familiar routine |
| `w02.l04.d1.b.01` | street taxi pickup; Sukhumvit Soi 10 goal | destination v03 | destination-sukhumvit-soi-10 | l04.destination | parallel cue/slot |
| `w02.l04.d1.b.02` | office pickup; driver offers meter use and learner accepts directly | meter-choice v01 | meter-direct | l04.meter | direct transfer |
| `w02.l04.d1.b.03` | meter is started; thank driver | social okay v01 | social.thanks | l04.thanks | parallel routine context |
| `w02.l04.d7.a.01` | station trip; Ekkamai Station goal | destination v04 | destination-ekkamai-station | l04.destination | changed cue |
| `w02.l04.d7.a.02` | taxi driver refuses meter | no-meter v02 | meter-request | l04.meter | changed cue |
| `w02.l04.d7.a.03` | driver accepts meter request; thank him | social okay v01 | social.thanks | l04.thanks | routine |
| `w02.l04.d7.a.04` | colleague asks before taxi departure; Ekkamai Station goal | destination v03 | destination-ekkamai-station | l04.destination | cross-scene family A |
| `w02.l04.d7.b.01` | curb pickup; Ekkamai area goal | destination v02 | destination-ekkamai | l04.destination | changed slot |
| `w02.l04.d7.b.02` | taxi driver proposes no meter | no-meter v01 | meter-request | l04.meter | alternate cue/context |
| `w02.l04.d7.b.03` | driver turns meter on; thank him | social okay v01 | social.thanks | l04.thanks | routine |
| `w02.l04.d7.b.04` | colleague asks before lunch trip; Sukhumvit Soi 10 goal | destination v02 | destination-sukhumvit-soi-10 | l04.destination | cross-scene family B |

Forms use the exact A/B pattern. Cross-scene family variants `.d7.a.04/.d7.b.04`. No destination-confirmation cue is present.

### 10.5 L05

| Interaction suffix | Exact context card | Cue | Accepted | Options | Note |
|---|---|---|---|---|---|
| `w02.l05.d1.a.01` | morning taxi route continues straight | which-way v02 | straight | l05.straight | alternate cue |
| `w02.l05.d1.a.02` | taxi route turns left ahead | which-way v03 | turn-left-ahead | l05.turn-left | familiar response/new context |
| `w02.l05.d1.a.03` | hotel taxi arrives at the current marker | arrival v02 | stop-here | l05.stop | alternate arrival cue |
| `w02.l05.d1.b.01` | afternoon taxi route continues straight | which-way v01 | straight | l05.straight | rehearsalOf lesson.01 |
| `w02.l05.d1.b.02` | taxi route turns right ahead | which-way v03 | turn-right-ahead | l05.turn-right | practice slot retention |
| `w02.l05.d1.b.03` | side-street stop marker lies ahead | stop-location v02 | stop-ahead | l05.stop | recombination |
| `w02.l05.d7.a.01` | main-road route continues straight | which-way v02 | straight | l05.straight | alternate context |
| `w02.l05.d7.a.02` | main-road junction ahead requires a right turn | which-way v03 | turn-right-ahead | l05.turn-right | changed slot |
| `w02.l05.d7.a.03` | stop choice is ahead | stop-location v03 | stop-ahead | l05.stop | changed cue/slot |
| `w02.l05.d7.a.04` | pedestrian route at BTS junction turns left ahead | which-way v02 | turn-left-ahead | l05.turn-left | cross-scene family A |
| `w02.l05.d7.b.01` | side-street route continues straight | which-way v01 | straight | l05.straight | parallel context |
| `w02.l05.d7.b.02` | market-road junction ahead requires a left turn | which-way v03 | turn-left-ahead | l05.turn-left | parallel slot |
| `w02.l05.d7.b.03` | daytime taxi reaches Ekkamai Station entrance | arrival v03 | stop-here | l05.stop | changed cue/context |
| `w02.l05.d7.b.04` | pedestrian route near food court turns right ahead | which-way v02 | turn-right-ahead | l05.turn-right | cross-scene family B |

Forms use the exact A/B pattern. Cross-scene family variants `.d7.a.04/.d7.b.04`.

### 10.6 L06

| Interaction suffix | Exact context card | Cue/event | Accepted | Options | Note |
|---|---|---|---|---|---|
| `w02.l06.d1.a.01` | mall concourse; toilet needed | offer-help v02 | ask-toilet | l06.ask-place | changed slot/cue |
| `w02.l06.d1.a.02` | mall concourse; first walking step heard and next step still needed | route-instruction v02 | ask-next | l06.ask-next | alternate cue |
| `w02.l06.d1.a.03` | mall route; one step heard and distance remains unknown | distance-after-one-step event | ask-far | l06.ask-far | event transfer |
| `w02.l06.d1.b.01` | station entrance; Ekkamai Station needed | offer-help v01 | ask-ekkamai-station | l06.ask-place | changed slot |
| `w02.l06.d1.b.02` | first straight instruction incomplete | route-instruction v01 | ask-next | l06.ask-next | rehearsalOf lesson.02 |
| `w02.l06.d1.b.03` | hotel route fully described; distance remains unknown | distance-integrated-route event | ask-far | l06.ask-far | parallel event |
| `w02.l06.d7.a.01` | street information point; BTS needed | offer-help v02 | ask-bts | l06.ask-place | alternate cue |
| `w02.l06.d7.a.02` | footbridge direction incomplete | route-instruction v02 | ask-next | l06.ask-next | alternate context |
| `w02.l06.d7.a.03` | two route steps heard; distance unknown | distance-after-two-steps event | ask-far | l06.ask-far | alternate event context |
| `w02.l06.d7.a.04` | café counter; toilet needed | offer-help v01 | ask-toilet | l06.ask-place | cross-scene family A |
| `w02.l06.d7.b.01` | BTS concourse guard; learner needs Ekkamai Station | offer-help v01 | ask-ekkamai-station | l06.ask-place | changed slot/context |
| `w02.l06.d7.b.02` | sidewalk straight direction incomplete | route-instruction v01 | ask-next | l06.ask-next | parallel context |
| `w02.l06.d7.b.03` | office route; one step heard and distance remains unknown | distance-after-one-step event | ask-far | l06.ask-far | parallel context ID |
| `w02.l06.d7.b.04` | convenience store; toilet needed | offer-help v02 | ask-toilet | l06.ask-place | cross-scene family B |

Forms use the exact A/B pattern. Cross-scene family variants `.d7.a.04/.d7.b.04`. The separate confirmation check always maps BTS confirmation v01 to social yes; it never appears as an ask-next source.

### 10.7 Exact reference-token expansion

Interaction tables above use the following closed token map only. Any other abbreviation is invalid.

| Token | Canonical ID |
|---|---|
| `food greeting v01` | `cv1.cue-variant.food.greeting.v01` |
| `food what v01/v02/v03` | `cv1.cue-variant.food.what-would-you-like.v01/v02/v03` respectively |
| `spice v01/v02/v03` | `cv1.cue-variant.food.spice-choice.v01/v02/v03` respectively |
| `service v01/v02/v03` | `cv1.cue-variant.food.service-choice.v01/v02/v03` respectively |
| `drink v01/v02/v03` | `cv1.cue-variant.food.drink-choice.v01/v02/v03` respectively |
| `food total v01` | `cv1.cue-variant.food.total.v01` |
| `destination v01/v02/v03/v04` | `cv1.cue-variant.transport.destination-question.v01/v02/v03/v04` respectively |
| `no-meter v01/v02` | `cv1.cue-variant.transport.no-meter-proposal.v01/v02` respectively |
| `meter-choice v01` | `cv1.cue-variant.transport.meter-choice.v01` |
| `which-way v01/v02/v03` | `cv1.cue-variant.transport.which-way.v01/v02/v03` respectively |
| `stop-location v01/v02/v03` | `cv1.cue-variant.transport.stop-location.v01/v02/v03` respectively |
| `arrival v01/v02/v03` | `cv1.cue-variant.transport.arrival.v01/v02/v03` respectively |
| `offer-help v01/v02` | `cv1.cue-variant.location.offer-help.v01/v02` respectively |
| `route-instruction v01/v02/v03` | `cv1.cue-variant.location.route-instruction.v01/v02/v03` respectively |
| `social okay v01` | `cv1.cue-variant.social.okay.v01` |

Accepted/option tokens similarly expand under the exact `cv1.accepted.*` and `cv1.options.*` IDs declared in Sections 3–8. Interaction suffixes in Section 10 expand as `cv1.interaction.retention.{suffix}`; their context IDs are `cv1.context.{same suffix}`. These are mechanical ID expansions, not authoring discretion.

## 11. Exact lesson and retention form manifests

| Form ID | Ordered source interaction IDs |
|---|---|
| `cv1.form.lesson.w01.l01.a` | `cv1.interaction.lesson.w01.l01.a.01`, `.a.02`, `.a.03` |
| `cv1.form.lesson.w01.l02.a` | `cv1.interaction.lesson.w01.l02.a.01`, `.a.02`, `.a.03` |
| `cv1.form.lesson.w01.l03.a` | `cv1.interaction.lesson.w01.l03.a.01`, `.a.02`, `.a.03` |
| `cv1.form.lesson.w02.l04.a` | `cv1.interaction.lesson.w02.l04.a.01`, `.a.02`, `.a.03` |
| `cv1.form.lesson.w02.l05.a` | `cv1.interaction.lesson.w02.l05.a.01`, `.a.02`, `.a.03` |
| `cv1.form.lesson.w02.l06.a` | `cv1.interaction.lesson.w02.l06.a.01`, `.a.02`, `.a.03` |
| `cv1.form.retention.w01.l01.d1.a` | `cv1.interaction.retention.w01.l01.d1.a.01`, `.a.02`, `.a.03` |
| `cv1.form.retention.w01.l01.d1.b` | `cv1.interaction.retention.w01.l01.d1.b.01`, `.b.02`, `.b.03` |
| `cv1.form.retention.w01.l02.d1.a` | `cv1.interaction.retention.w01.l02.d1.a.01`, `.a.02`, `.a.03` |
| `cv1.form.retention.w01.l02.d1.b` | `cv1.interaction.retention.w01.l02.d1.b.01`, `.b.02`, `.b.03` |
| `cv1.form.retention.w01.l03.d1.a` | `cv1.interaction.retention.w01.l03.d1.a.01`, `.a.02`, `.a.03` |
| `cv1.form.retention.w01.l03.d1.b` | `cv1.interaction.retention.w01.l03.d1.b.01`, `.b.02`, `.b.03` |
| `cv1.form.retention.w02.l04.d1.a` | `cv1.interaction.retention.w02.l04.d1.a.01`, `.a.02`, `.a.03` |
| `cv1.form.retention.w02.l04.d1.b` | `cv1.interaction.retention.w02.l04.d1.b.01`, `.b.02`, `.b.03` |
| `cv1.form.retention.w02.l05.d1.a` | `cv1.interaction.retention.w02.l05.d1.a.01`, `.a.02`, `.a.03` |
| `cv1.form.retention.w02.l05.d1.b` | `cv1.interaction.retention.w02.l05.d1.b.01`, `.b.02`, `.b.03` |
| `cv1.form.retention.w02.l06.d1.a` | `cv1.interaction.retention.w02.l06.d1.a.01`, `.a.02`, `.a.03` |
| `cv1.form.retention.w02.l06.d1.b` | `cv1.interaction.retention.w02.l06.d1.b.01`, `.b.02`, `.b.03` |

Every `cv1.form.retention.{lesson}.d7.a/b` contains the correspondingly prefixed `.01,.02,.03,.04` interactions in ordinal order. This yields exact objective `.01…08` mappings through Section 1.1; `.07/.08` are always the declared cross-scene family variant. There are 12 such +7 forms, two for each lesson.

Form selection: first cold attempt uses A. A discarded after exposure or completed failed attempt is consumed; retry uses B. Repair uses practice records and never B. No third lesson/+1/+7 form is claimed by this W1–W2 registry.

## 12. Gate source pools and three disjoint forms

Gate interactions are sealed from teaching, practice, +1, +7, distractors and pre-gate transcripts. Every row's context ID is obtained by replacing `interaction.assessment` with `context` in its ID; the exact context-card payload is the text in the Context column.

For an ordered eight-interaction gate manifest `[I1…I8]`, objective IDs map exactly:

- `.01…04`: `I1…I4`, direction `intent`;
- `.05…08`: `I1…I4`, direction `response`;
- `.09…12`: `I5…I8`, direction `sealed-recombination-response`, or `sealed-event-request` for an event.

Thus every form has four cue-intent, four appropriate-response and four sealed-recombination objectives. No source interaction belongs to two forms of the same gate.

### 12.1 Week 1 pool A

| Interaction ID | Exact context card | Cue/event → accepted set | Options |
|---|---|---|---|
| `cv1.interaction.assessment.w01.pool-a.l01.01` | food-court display; choose pointed item | food what v03 → order-this | l01.order |
| `cv1.interaction.assessment.w01.pool-a.l01.02` | lunch counter; choose named basil-chicken dish | food what v02 → order-gaprao-chicken | l01.order |
| `cv1.interaction.assessment.w01.pool-a.l01.03` | basil stall; request non-spicy | spice v01 → not-spicy | l01.spice |
| `cv1.interaction.assessment.w01.pool-a.l01.04` | riverside noodle stall; request non-spicy | spice v03 → not-spicy | l01.spice |
| `cv1.interaction.assessment.w01.pool-a.l02.01` | mall food-hall counter; eat there | service v02 → dine-here | l02.service |
| `cv1.interaction.assessment.w01.pool-a.l02.02` | café cooler; order one water | drink v03 → water-one | l02.water |
| `cv1.interaction.assessment.w01.pool-a.l02.03` | finished café drink; initiate payment | cafe-drink-finished event → bill; actual reply total v01 | l02.bill |
| `cv1.interaction.assessment.w01.pool-a.l02.04` | street counter; takeaway goal | service v03 → takeaway | l02.service |
| `cv1.interaction.assessment.w01.pool-a.l03.01` | drink cue; meaning unknown | drink v02 → dont-understand | l03.meaning-unknown |
| `cv1.interaction.assessment.w01.pool-a.l03.02` | spice cue; rate too fast | spice v02 → slower | l03.too-fast |
| `cv1.interaction.assessment.w01.pool-a.l03.03` | service cue; playback missed once | service v02 → again | l03.missed-once |
| `cv1.interaction.assessment.w01.pool-a.l03.04` | breakfast-counter food cue; rate too fast | food what v03 → slower | l03.too-fast |

Every L03 row additionally requires replay of its original cue and the context-valid original response before repair completion.

### 12.2 Week 1 pool B

| Interaction ID | Exact context card | Cue/event → accepted set | Options |
|---|---|---|---|
| `cv1.interaction.assessment.w01.pool-b.l01.01` | canteen display; choose pointed item | food what v02 → order-this | l01.order |
| `cv1.interaction.assessment.w01.pool-b.l01.02` | basil-food counter; choose named dish | food what v03 → order-gaprao-chicken | l01.order |
| `cv1.interaction.assessment.w01.pool-b.l01.03` | night-market wok stall; request non-spicy | spice v02 → not-spicy | l01.spice |
| `cv1.interaction.assessment.w01.pool-b.l01.04` | breakfast tray; choose pointed item | food what v01 → order-this | l01.order |
| `cv1.interaction.assessment.w01.pool-b.l02.01` | café table; eat there | service v03 → dine-here | l02.service |
| `cv1.interaction.assessment.w01.pool-b.l02.02` | food-court drink counter; one water | drink v02 → water-one | l02.water |
| `cv1.interaction.assessment.w01.pool-b.l02.03` | finished food-court meal; initiate payment | foodcourt-finished event → bill; actual reply total v01 | l02.bill |
| `cv1.interaction.assessment.w01.pool-b.l02.04` | office-tower lunch counter; takeaway goal | service v02 → takeaway | l02.service |
| `cv1.interaction.assessment.w01.pool-b.l03.01` | spice cue; meaning unknown | spice v03 → dont-understand | l03.meaning-unknown |
| `cv1.interaction.assessment.w01.pool-b.l03.02` | evening-stall food cue; rate too fast | food what v02 → slower | l03.too-fast |
| `cv1.interaction.assessment.w01.pool-b.l03.03` | drink cue; playback missed once | drink v03 → again | l03.missed-once |
| `cv1.interaction.assessment.w01.pool-b.l03.04` | station-kiosk total cue; meaning unknown | food total v01 → dont-understand | l03.meaning-unknown |

### 12.3 Week 1 gate manifests

| Form ID | Ordered interactions `I1…I8` |
|---|---|
| `cv1.form.gate.w01.a` | `pool-a.l01.01`, `pool-a.l02.01`, `pool-a.l03.01`, `pool-a.l01.02`, `pool-a.l02.02`, `pool-a.l03.02`, `pool-a.l02.03`, `pool-a.l03.03` |
| `cv1.form.gate.w01.b` | `pool-b.l01.01`, `pool-b.l02.01`, `pool-b.l03.01`, `pool-b.l01.02`, `pool-b.l02.02`, `pool-b.l03.02`, `pool-b.l02.03`, `pool-b.l03.03` |
| `cv1.form.gate.w01.c` | `pool-a.l01.03`, `pool-a.l02.04`, `pool-a.l03.04`, `pool-a.l01.04`, `pool-b.l01.03`, `pool-b.l01.04`, `pool-b.l02.04`, `pool-b.l03.04` |

All manifest entries above expand under `cv1.interaction.assessment.w01.`. The forms use 24 distinct source interactions and produce 36 distinct objective IDs. Forms A/B are the cold/parallel forms; C is the second parallel reserve.

### 12.4 Week 2 current-unit pool A/B

| Interaction ID | Exact context card | Cue/event → accepted set | Options |
|---|---|---|---|
| `cv1.interaction.assessment.w02.pool-a.l04.01` | taxi to Ekkamai Station | destination v04 → destination-ekkamai-station | l04.destination |
| `cv1.interaction.assessment.w02.pool-a.l04.02` | morning taxi rank; driver declines meter and learner requires it | no-meter v02 → meter-request | l04.meter |
| `cv1.interaction.assessment.w02.pool-a.l04.03` | rainy curb pickup; Ekkamai area goal | destination v03 → destination-ekkamai | l04.destination |
| `cv1.interaction.assessment.w02.pool-a.l04.04` | hotel driveway; driver offers meter use and learner accepts | meter-choice v01 → meter-direct | l04.meter |
| `cv1.interaction.assessment.w02.pool-b.l04.01` | taxi to Sukhumvit Soi 10 | destination v02 → destination-sukhumvit-soi-10 | l04.destination |
| `cv1.interaction.assessment.w02.pool-b.l04.02` | driver proposes no meter | no-meter v01 → meter-request | l04.meter |
| `cv1.interaction.assessment.w02.pool-b.l04.03` | office driveway pickup; Ekkamai area goal | destination v01 → destination-ekkamai | l04.destination |
| `cv1.interaction.assessment.w02.pool-b.l04.04` | evening curb pickup; driver declines meter and learner requires it | no-meter v02 → meter-request | l04.meter |
| `cv1.interaction.assessment.w02.pool-a.l05.01` | route continues straight | which-way v02 → straight | l05.straight |
| `cv1.interaction.assessment.w02.pool-a.l05.02` | canal-road junction ahead requires a right turn | which-way v03 → turn-right-ahead | l05.turn-right |
| `cv1.interaction.assessment.w02.pool-a.l05.03` | stop marker is ahead | stop-location v03 → stop-ahead | l05.stop |
| `cv1.interaction.assessment.w02.pool-a.l05.04` | morning taxi reaches Ekkamai Station south entrance | arrival v03 → stop-here | l05.stop |
| `cv1.interaction.assessment.w02.pool-b.l05.01` | side street continues straight | which-way v01 → straight | l05.straight |
| `cv1.interaction.assessment.w02.pool-b.l05.02` | school-road junction ahead requires a left turn | which-way v03 → turn-left-ahead | l05.turn-left |
| `cv1.interaction.assessment.w02.pool-b.l05.03` | evening taxi arrives at the current marker | arrival v02 → stop-here | l05.stop |
| `cv1.interaction.assessment.w02.pool-b.l05.04` | main-road stop marker lies ahead | stop-location v02 → stop-ahead | l05.stop |
| `cv1.interaction.assessment.w02.pool-a.l06.01` | information point; BTS needed | offer-help v02 → ask-bts | l06.ask-place |
| `cv1.interaction.assessment.w02.pool-a.l06.02` | walking instruction incomplete | route-instruction v02 → ask-next | l06.ask-next |
| `cv1.interaction.assessment.w02.pool-a.l06.03` | street-information route; one step heard and distance remains unknown | distance-after-one-step event → ask-far; actual reply not-far | l06.ask-far |
| `cv1.interaction.assessment.w02.pool-a.l06.04` | information-desk helper confirms BTS destination | BTS confirmation v01 → social.yes | l06.confirm-bts |
| `cv1.interaction.assessment.w02.pool-b.l06.01` | station guard; Ekkamai Station needed | offer-help v01 → ask-ekkamai-station | l06.ask-place |
| `cv1.interaction.assessment.w02.pool-b.l06.02` | straight instruction incomplete | route-instruction v01 → ask-next | l06.ask-next |
| `cv1.interaction.assessment.w02.pool-b.l06.03` | station route fully described; distance remains unknown | distance-integrated-route event → ask-far; actual reply not-far | l06.ask-far |
| `cv1.interaction.assessment.w02.pool-b.l06.04` | station-entrance helper confirms BTS destination | BTS confirmation v01 → social.yes | l06.confirm-bts |

The two confirmation records are reserve sources only. If served, their only correct response is `ใช่ครับ`.

### 12.5 Week 2 cumulative Week-1 pool A/B

| Interaction ID | Exact context card | Cue/event → accepted set | Options |
|---|---|---|---|
| `cv1.interaction.assessment.w02.cumulative-a.l01.01` | transport-hub food counter; choose pointed item | food what v03 → order-this | l01.order |
| `cv1.interaction.assessment.w02.cumulative-a.l01.02` | station food stall; request non-spicy | spice v02 → not-spicy | l01.spice |
| `cv1.interaction.assessment.w02.cumulative-b.l01.01` | taxi-rank food kiosk; order named dish | food what v02 → order-gaprao-chicken | l01.order |
| `cv1.interaction.assessment.w02.cumulative-b.l01.02` | station café snack; request non-spicy | spice v03 → not-spicy | l01.spice |
| `cv1.interaction.assessment.w02.cumulative-a.l02.01` | station café; eat there | service v03 → dine-here | l02.service |
| `cv1.interaction.assessment.w02.cumulative-a.l02.02` | taxi-rank kiosk; one water | drink v03 → water-one | l02.water |
| `cv1.interaction.assessment.w02.cumulative-b.l02.01` | terminal counter; takeaway goal | service v02 → takeaway | l02.service |
| `cv1.interaction.assessment.w02.cumulative-b.l02.02` | finished station-café drink; initiate payment | cafe-drink-finished event → bill; actual reply total v01 | l02.bill |
| `cv1.interaction.assessment.w02.cumulative-a.l03.01` | station drink cue; meaning unknown | drink v02 → dont-understand | l03.meaning-unknown |
| `cv1.interaction.assessment.w02.cumulative-a.l03.02` | food-stall spice cue; rate too fast | spice v02 → slower | l03.too-fast |
| `cv1.interaction.assessment.w02.cumulative-b.l03.01` | taxi destination cue; playback missed once | destination v03 → again | l03.missed-once; resolution destination-soi-10 |
| `cv1.interaction.assessment.w02.cumulative-b.l03.02` | station total cue; meaning unknown | food total v01 → dont-understand | l03.meaning-unknown |

### 12.6 Week 2 gate manifests

| Form ID | Ordered interactions `I1…I8` |
|---|---|
| `cv1.form.gate.w02.a` | `pool-a.l04.01`, `pool-a.l05.01`, `pool-a.l06.01`, `cumulative-a.l01.01`, `pool-a.l04.02`, `pool-a.l05.02`, `pool-a.l06.02`, `cumulative-a.l02.01` |
| `cv1.form.gate.w02.b` | `pool-b.l04.01`, `pool-b.l05.01`, `pool-b.l06.01`, `cumulative-b.l02.01`, `pool-b.l04.02`, `pool-b.l05.02`, `pool-b.l06.02`, `cumulative-b.l03.01` |
| `cv1.form.gate.w02.c` | `pool-a.l04.03`, `pool-a.l05.03`, `pool-a.l06.03`, `cumulative-a.l03.01`, `pool-b.l04.03`, `pool-b.l05.03`, `pool-b.l06.03`, `cumulative-b.l01.01` |

Entries expand under `cv1.interaction.assessment.w02.`. Each form contains nine current-unit objectives—three from each L04–L06—and three cumulative Week-1 objectives. The three forms use 24 distinct source interactions and 36 distinct objective IDs. Unused pool rows remain sealed supply; they are not silently sampled into these forms.

## 13. +30 eligibility, interactions and disjoint forms

- Assignment IDs: `cv1.retention.w01.d30` and `cv1.retention.w02.d30`.
- Eligibility date: corresponding unit gate's first pass Bangkok date +30 days.
- Prerequisite: unit gate authority at revision 1 and every cue/frame/slot referenced below taught before the gate.
- First form A; exposed/failed form A consumes A and selects B. Repair uses ordinary practice interactions, never B.
- Each form has six interactions expanded by Section 1.1 into 12 objectives and passes at 11/12. A and B share no interaction or context IDs.

### 13.1 Week 1 +30 interactions

| Interaction ID | Exact context card | Cue/event → accepted set | Options; eligibility note |
|---|---|---|---|
| `cv1.interaction.retention.w01.d30.a.l01.01` | breakfast stall; choose pointed item | food what v02 → order-this | l01.order; gate w01 +30 |
| `cv1.interaction.retention.w01.d30.a.l01.02` | lunch stall; request non-spicy | spice v03 → not-spicy | l01.spice; gate w01 +30 |
| `cv1.interaction.retention.w01.d30.a.l02.01` | mall café; eat there | service v02 → dine-here | l02.service; gate w01 +30 |
| `cv1.interaction.retention.w01.d30.a.l02.02` | canteen cooler; one water | drink v03 → water-one | l02.water; gate w01 +30 |
| `cv1.interaction.retention.w01.d30.a.l03.01` | canteen total cue; meaning unknown | food total v01 → dont-understand | l03.meaning-unknown; replay then acknowledge total |
| `cv1.interaction.retention.w01.d30.a.l03.02` | drink cue; rate too fast | drink v02 → slower | l03.too-fast; replay 0.58 then water-one |
| `cv1.interaction.retention.w01.d30.b.l01.01` | office lunch counter; order basil chicken | food what v03 → order-gaprao-chicken | l01.order; gate w01 +30 |
| `cv1.interaction.retention.w01.d30.b.l01.02` | evening wok stall; request non-spicy | spice v02 → not-spicy | l01.spice; gate w01 +30 |
| `cv1.interaction.retention.w01.d30.b.l02.01` | evening counter; takeaway goal | service v03 → takeaway | l02.service; gate w01 +30 |
| `cv1.interaction.retention.w01.d30.b.l02.02` | dinner finished; initiate payment | meal-finished event → bill; actual reply total v01 | l02.bill; gate w01 +30 |
| `cv1.interaction.retention.w01.d30.b.l03.01` | food cue; playback missed once | food what v02 → again | l03.missed-once; replay then order-this |
| `cv1.interaction.retention.w01.d30.b.l03.02` | service cue; slow replay explicitly needed | service v02 → slow-again | l03.slow-repeat; replay 0.58 then takeaway |

Exact manifests:

- `cv1.form.retention.w01.d30.a` = `[d30.a.l01.01,d30.a.l01.02,d30.a.l02.01,d30.a.l02.02,d30.a.l03.01,d30.a.l03.02]`.
- `cv1.form.retention.w01.d30.b` = `[d30.b.l01.01,d30.b.l01.02,d30.b.l02.01,d30.b.l02.02,d30.b.l03.01,d30.b.l03.02]`.

Entries expand under `cv1.interaction.retention.w01.`; objective IDs are `cv1.objective.retention.w01.d30.a.01…12` and parallel B.

### 13.2 Week 2 +30 interactions

| Interaction ID | Exact context card | Cue/event → accepted set | Options; eligibility note |
|---|---|---|---|
| `cv1.interaction.retention.w02.d30.a.l04.01` | late taxi pickup; Ekkamai Station goal | destination v04 → destination-ekkamai-station | l04.destination; gate w02 +30 |
| `cv1.interaction.retention.w02.d30.a.l04.02` | late taxi pickup; driver says no meter and learner requires it | no-meter v02 → meter-request | l04.meter; gate w02 +30 |
| `cv1.interaction.retention.w02.d30.a.l05.01` | night route continues straight | which-way v02 → straight | l05.straight; gate w02 +30 |
| `cv1.interaction.retention.w02.d30.a.l05.02` | night route turns left ahead | which-way v03 → turn-left-ahead | l05.turn-left; gate w02 +30 |
| `cv1.interaction.retention.w02.d30.a.l06.01` | transit information point; BTS needed | offer-help v02 → ask-bts | l06.ask-place; gate w02 +30 |
| `cv1.interaction.retention.w02.d30.a.l06.02` | street corner after one walking instruction; learner still needs the next step | route-instruction v02 → ask-next | l06.ask-next; gate w02 +30 |
| `cv1.interaction.retention.w02.d30.b.l04.01` | rain pickup; Sukhumvit Soi 10 goal | destination v02 → destination-sukhumvit-soi-10 | l04.destination; gate w02 +30 |
| `cv1.interaction.retention.w02.d30.b.l04.02` | rain pickup at a side street; driver offers meter use and learner accepts | meter-choice v01 → meter-direct | l04.meter; gate w02 +30 |
| `cv1.interaction.retention.w02.d30.b.l05.01` | night taxi reaches Ekkamai Station north entrance | arrival v03 → stop-here | l05.stop; gate w02 +30 |
| `cv1.interaction.retention.w02.d30.b.l05.02` | night alley junction ahead requires a right turn | which-way v03 → turn-right-ahead | l05.turn-right; gate w02 +30 |
| `cv1.interaction.retention.w02.d30.b.l06.01` | bus-terminal guard; learner needs Ekkamai Station | offer-help v01 → ask-ekkamai-station | l06.ask-place; gate w02 +30 |
| `cv1.interaction.retention.w02.d30.b.l06.02` | integrated route known; distance unknown | distance-integrated-route event → ask-far; actual reply not-far | l06.ask-far; gate w02 +30 |

Exact manifests:

- `cv1.form.retention.w02.d30.a` = `[d30.a.l04.01,d30.a.l04.02,d30.a.l05.01,d30.a.l05.02,d30.a.l06.01,d30.a.l06.02]`.
- `cv1.form.retention.w02.d30.b` = `[d30.b.l04.01,d30.b.l04.02,d30.b.l05.01,d30.b.l05.02,d30.b.l06.01,d30.b.l06.02]`.

Entries expand under `cv1.interaction.retention.w02.`; objective IDs are `cv1.objective.retention.w02.d30.a.01…12` and parallel B.

## 14. Exact model-scene turn manifests

Turn IDs are `cv1.turn.{week}.{lesson}.model.{ordinal}`. References resolve to the language records above, so their Thai, segmentation, transliteration, English, TTS and prerequisites are not duplicated.

| Scene ID | Ordered speaker → language-record references |
|---|---|
| `cv1.scene.w01.l01.model` | P→food greeting v01; L→social greeting; P→food what v01; L→w01.l01 order-this; P→spice v01; L→w01.l01 not-spicy; P→social okay; L→social thanks |
| `cv1.scene.w01.l02.model` | P→service v01; L→w01.l02 dine-here; P→drink v01; L→w01.l02 water-one; P→social okay; L→social thanks; `[learner-controlled break: after eating]`; L→w01.l02 bill; P→food total v01; L→social thanks; P→social thanks |
| `cv1.scene.w01.l03.model` | P→food greeting v01; L→social greeting; P→food what v01; L→w01.l03 dont-understand; P→food what v01; L→w01.l03 slower; P→food what v01 at 0.58; L→w01.l03 again; P→food what v01 at 0.58; L→w01.l01 order-this; P→social okay; L→social thanks; P→social no-problem |
| `cv1.scene.w02.l04.model` | P→food greeting v01; L→social greeting; P→destination v01; L→destination-ekkamai-station; P→no-meter v01; L→meter-request; P→social okay; L→social thanks |
| `cv1.scene.w02.l05.model` | P→which-way v01; L→straight; P→straight-confirm v01; L→social yes; P→which-way v03; L→turn-left-ahead; P→stop-location v01; L→stop-here; P→social okay; L→social thanks |
| `cv1.scene.w02.l06.model` | L→social excuse-me; P→offer-help v01; L→ask-bts; P→route-instruction v01; L→ask-next; P→route-instruction v03; L→ask-far; P→not-far; L→social thanks; P→social no-problem |

The bracketed L02 break is not an utterance or TTS record. Scene turn counts are therefore L01 8, L02 10, L03 13, L04 8, L05 10 and L06 10.

## 15. Exact later-retrieval ledger

These IDs reserve later interactions; later-week registries must reference the existing cue/response/frame IDs, not create aliases. Their context IDs are obtained by replacing `interaction.recurrence` with `context` and use the exact card in the Context column.

### 15.1 Exact later-only cue reservations used by this ledger

These are immutable forward references, not W1–W2 teaching or assessment atoms. They become eligible only inside the named later lesson after that lesson has taught them. Their inclusion here closes every recurrence-row cue reference without leaking them into an earlier source set.

| Stable ID | Exact Thai | Segmented Thai | Transliteration | Functional English | Role | `ttsText`; locale; rate | Prerequisite/source note |
|---|---|---|---|---|---|---|---|
| `cv1.cue-variant.social.today-destination.v01` | วันนี้ไปไหนครับ | วันนี้/ไปไหน/ครับ | *wan-níi bpai nǎi khráp* | Where are you going today? | later recognition cue | `วันนี้ไปไหนครับ`; `th-TH`; `0.72` | L11-owned; unavailable before L11 |
| `cv1.cue-variant.social.speaking-speed.v01` | ผมพูดเร็วไปไหมครับ | ผม/พูดเร็วไป/ไหม/ครับ | *phǒm phûut reo bpai mǎi khráp* | Am I speaking too fast? | later recognition cue | `ผมพูดเร็วไปไหมครับ`; `th-TH`; `0.72` | L11-owned; unavailable before L11 |
| `cv1.cue-variant.social.ekkamai-today.v01` | วันนี้ไปเอกมัยไหมครับ | วันนี้/ไปเอกมัย/ไหม/ครับ | *wan-níi bpai èek-gà-mai mǎi khráp* | Are you going to Ekkamai today? | later recognition cue | `วันนี้ไปเอกมัยไหมครับ`; `th-TH`; `0.72` | L11-owned d7 cue; unavailable before L11 |
| `cv1.cue-variant.repair.escalation.v01` | ฝากไว้ที่ล็อบบี้ตอนเที่ยงครึ่งครับ | ฝากไว้/ที่ล็อบบี้/ตอนเที่ยงครึ่ง/ครับ | *fàak wái thîi lóp-bîi dtaawn thîang-khrʉ̂ng khráp* | Leave it in the lobby at 12:30. | later recognition cue | `ฝากไว้ที่ล็อบบี้ตอนเที่ยงครึ่งครับ`; `th-TH`; `0.72`, replay `0.58` | L18-owned model cue; unavailable before L18 |

### 15.2 Active responses

| Reserved later interaction ID | Source response/frame | Exact later context | Cue/event → reply |
|---|---|---|---|
| `cv1.interaction.recurrence.w03.l08.from-w01-l01.order-this` | w01.l01 order-this | convenience-store shelf; learner chooses pointed item | food what v02 → เอาอันนี้ครับ |
| `cv1.interaction.recurrence.w03.l09.from-w01-l01.order-this` | w01.l01 order-this | market display; learner chooses pointed item | food what v03 → เอาอันนี้ครับ |
| `cv1.interaction.recurrence.w03.l07.from-w01-l01.not-spicy` | w01.l01 not-spicy | café food add-on; learner wants non-spicy | spice v02 → ไม่เผ็ดครับ |
| `cv1.interaction.recurrence.w08.l24.from-w01-l01.not-spicy` | w01.l01 not-spicy | integrated meal; learner wants non-spicy | spice v03 → ไม่เผ็ดครับ |
| `cv1.interaction.recurrence.w03.l07.from-w01-l02.dine-here` | w01.l02 dine-here | café service choice; learner eats there | service v02 → ทานที่นี่ครับ |
| `cv1.interaction.recurrence.w08.l24.from-w01-l02.dine-here` | w01.l02 dine-here | integrated meal; learner eats there | service v03 → ทานที่นี่ครับ |
| `cv1.interaction.recurrence.w03.l08.from-w01-l02.water-one` | w01.l02 water-one | convenience checkout; one water wanted | drink v03 → น้ำเปล่าขวดหนึ่งครับ |
| `cv1.interaction.recurrence.w08.l24.from-w01-l02.water-one` | w01.l02 water-one | integrated food stop; one water wanted | drink v02 → น้ำเปล่าขวดหนึ่งครับ |
| `cv1.interaction.recurrence.w03.l07.from-w01-l02.bill` | w01.l02 bill | café drink finished; learner initiates payment | café-drink-finished event → คิดเงินด้วยครับ |
| `cv1.interaction.recurrence.w08.l24.from-w01-l02.bill` | w01.l02 bill | integrated meal finished; learner initiates payment | meal-finished event → คิดเงินด้วยครับ |
| `cv1.interaction.recurrence.w04.l11.from-w01-l03.dont-understand` | w01.l03 dont-understand | small talk; `meaningUnknown` | social today-destination v01 → ไม่เข้าใจครับ; partner rephrases `ไปเอกมัยไหมครับ`; learner returns to task with `ไปเอกมัยครับ` |
| `cv1.interaction.recurrence.w06.l18.from-w01-l03.dont-understand` | w01.l03 dont-understand | service repair; `meaningUnknown` | repair escalation v01 → ไม่เข้าใจครับ; replay at 0.58; learner continues with `หมายถึงล็อบบี้ใช่ไหมครับ` |
| `cv1.interaction.recurrence.w04.l11.from-w01-l03.slower` | w01.l03 slower | small talk; `tooFast` | social speaking-speed v01 → พูดช้าๆ ได้ไหมครับ; partner acknowledges and resumes the L11 exchange |
| `cv1.interaction.recurrence.w06.l18.from-w01-l03.slower` | w01.l03 slower | service repair; `tooFast` | repair escalation v01 → พูดช้าๆ ได้ไหมครับ; replay at 0.58; learner continues with `หมายถึงล็อบบี้ใช่ไหมครับ` |
| `cv1.interaction.recurrence.w04.l11.from-w01-l03.again` | w01.l03 again | small talk; `missedOnce` | social Ekkamai-today v01 → พูดอีกครั้งได้ไหมครับ; replay; learner returns to task with `ไปเอกมัยครับ` |
| `cv1.interaction.recurrence.w06.l18.from-w01-l03.again` | w01.l03 again | service repair; `missedOnce` | repair escalation v01 → พูดอีกครั้งได้ไหมครับ; replay at 0.58; learner continues with `หมายถึงล็อบบี้ใช่ไหมครับ` |
| `cv1.interaction.recurrence.w04.l12.from-w02-l04.destination` | w02.l04 destination-ekkamai-station | lunch-plan departure; Ekkamai Station destination | destination v02 → ไปสถานีเอกมัยครับ |
| `cv1.interaction.recurrence.w08.l24.from-w02-l04.destination` | w02.l04 destination-ekkamai-station | integrated taxi pickup | destination v04 → ไปสถานีเอกมัยครับ |
| `cv1.interaction.recurrence.w04.l12.from-w02-l04.meter` | w02.l04 meter-request | post-lunch taxi; driver proposes no meter | no-meter v02 → ใช้มิเตอร์ได้ไหมครับ |
| `cv1.interaction.recurrence.w08.l24.from-w02-l04.meter` | w02.l04 meter-request | integrated taxi; driver proposes no meter | no-meter v01 → ใช้มิเตอร์ได้ไหมครับ |
| `cv1.interaction.recurrence.w05.l14.from-w02-l05.straight` | w02.l05 straight | delivery rider route continues straight | which-way v02 → ตรงไปครับ |
| `cv1.interaction.recurrence.w08.l24.from-w02-l05.straight` | w02.l05 straight | integrated taxi route continues straight | which-way v01 → ตรงไปครับ |
| `cv1.interaction.recurrence.w05.l14.from-w02-l05.turn-left` | w02.l05 turn-left-ahead | delivery rider route turns left ahead | which-way v03 → เลี้ยวซ้ายข้างหน้าครับ |
| `cv1.interaction.recurrence.w08.l24.from-w02-l05.turn-left` | w02.l05 turn-left-ahead | integrated taxi route turns left ahead | which-way v03 → เลี้ยวซ้ายข้างหน้าครับ |
| `cv1.interaction.recurrence.w05.l14.from-w02-l05.stop-here` | w02.l05 stop-here | delivery rider reaches current marker | arrival v02 → จอดตรงนี้ครับ |
| `cv1.interaction.recurrence.w08.l24.from-w02-l05.stop-here` | w02.l05 stop-here | integrated taxi reaches Ekkamai Station | arrival v03 → จอดตรงนี้ครับ |
| `cv1.interaction.recurrence.w05.l13.from-w02-l06.ask-bts` | w02.l06 ask-bts | condo reception; learner needs BTS | offer-help v02 → สถานีบีทีเอสอยู่ไหนครับ |
| `cv1.interaction.recurrence.w08.l24.from-w02-l06.ask-bts` | w02.l06 ask-bts | integrated street interaction; BTS needed | offer-help v01 → สถานีบีทีเอสอยู่ไหนครับ |
| `cv1.interaction.recurrence.w05.l14.from-w02-l06.ask-next` | w02.l06 ask-next | delivery walking route remains incomplete | route-instruction v02 → แล้วไปทางไหนครับ |
| `cv1.interaction.recurrence.w08.l24.from-w02-l06.ask-next` | w02.l06 ask-next | integrated walking route remains incomplete | route-instruction v01 → แล้วไปทางไหนครับ |
| `cv1.interaction.recurrence.w05.l13.from-w02-l06.ask-far` | w02.l06 ask-far | reception has given route; distance unknown | distance-after-one-step event → ไกลไหมครับ |
| `cv1.interaction.recurrence.w08.l24.from-w02-l06.ask-far` | w02.l06 ask-far | integrated route known; distance unknown | distance-integrated-route event → ไกลไหมครับ |

### 15.3 Recognition cue-family recurrence

| Cue family | +1 source | +7 alternate | Later cross-scene hearing 1 | Later cross-scene hearing 2 |
|---|---|---|---|---|
| food what-would-you-like | L01 d1 v02/v03 | L01 d7 v02/v03 | `cv1.interaction.recurrence.w03.l07.cue.food-what` | `cv1.interaction.recurrence.w03.l09.cue.food-what` |
| food spice-choice | L01 d1 v02/v03 | L01 d7 v02/v03 | `cv1.interaction.recurrence.w03.l07.cue.spice` | `cv1.interaction.recurrence.w08.l24.cue.spice` |
| food service-choice | L02 d1 v02/v03 | L02 d7 v02/v03 | `cv1.interaction.recurrence.w03.l07.cue.service` | `cv1.interaction.recurrence.w08.l24.cue.service` |
| food drink-choice | L02 d1 v02/v03 | L02 d7 v02/v03 | `cv1.interaction.recurrence.w03.l08.cue.drink` | `cv1.interaction.recurrence.w08.l24.cue.drink` |
| transport destination-question | L04 d1 v02/v03 | L04 d7 v02/v04 | `cv1.interaction.recurrence.w04.l12.cue.destination` | `cv1.interaction.recurrence.w08.l24.cue.destination` |
| transport no-meter-proposal | L04 d1 v02 | L04 d7 v01/v02 | `cv1.interaction.recurrence.w04.l12.cue.no-meter` | `cv1.interaction.recurrence.w08.l24.cue.no-meter` |
| transport which-way | L05 d1 v01/v02/v03 | L05 d7 v01/v02/v03 | `cv1.interaction.recurrence.w05.l14.cue.which-way` | `cv1.interaction.recurrence.w08.l24.cue.which-way` |
| transport stop-location/arrival | L05 d1 stop/arrival alternates | L05 d7 stop/arrival alternates | `cv1.interaction.recurrence.w05.l14.cue.arrival` | `cv1.interaction.recurrence.w08.l24.cue.arrival` |
| location offer-help | L06 d1 v01/v02 | L06 d7 v01/v02 | `cv1.interaction.recurrence.w05.l13.cue.offer-help` | `cv1.interaction.recurrence.w07.l21.cue.offer-help` |
| location route-instruction | L06 d1 v01/v02 | L06 d7 v01/v02 | `cv1.interaction.recurrence.w05.l14.cue.route` | `cv1.interaction.recurrence.w08.l24.cue.route` |
| location BTS confirmation | lesson recognition check | gate reserve only after teaching | `cv1.interaction.recurrence.w05.l13.cue.bts-confirm` | `cv1.interaction.recurrence.w08.l24.cue.bts-confirm` |

Every later cue-hearing ID is a reservation for an `intent` objective or unscored integrated hearing. It may not acquire a response function inconsistent with this registry; especially, BTS confirmation always maps to `cv1.accepted.social.yes`.

## 16. Closure counts, invariants and conflict decisions

### 16.1 Counts

| Surface | Binding count |
|---|---:|
| Lessons / model scenes | 6 / 6 |
| Model turns by lesson | 8, 10, 13, 8, 10, 10 |
| Active responses by lesson | 2, 3, 3, 2, 3, 3; total 16 |
| New active slot values by lesson | 3, 4, 3, 4, 4, 4 |
| New active frame families by lesson | 2, 2, 2, 2, 2, 2 |
| Lesson-A forms / objectives | 6 forms / 36 objectives |
| +1 A/B forms / objectives | 12 forms / 72 objectives |
| +7 A/B forms / objectives | 12 forms / 96 objectives |
| Week-gate A/B/C forms / objectives | 6 forms / 72 objectives |
| +30 A/B forms / objectives | 4 forms / 48 objectives |
| Total objective IDs fixed by manifests | 324 |
| W1 gate sources used | 24 distinct interactions across A/B/C |
| W2 gate sources used | 24 distinct interactions across A/B/C, including 6 distinct cumulative-W1 sources |
| +30 sources | 12 per week; 6 in A and 6 disjoint in B |
| +7 cross-scene supply | one family per lesson, with one source-disjoint A variant and one B variant |
| Placeholder count | 0 |

### 16.2 Machine invariants

- Every scored interaction in Sections 9–13 has a unique stable interaction ID, a unique stable context ID and a unique exact context-card payload. No source interaction is shared across lesson, practice, +1, +7, gate or +30 namespaces.
- Within every A/B retention pair, the `contextId|cueVariantId-or-eventId|acceptedSetId` signatures are disjoint. Gate A/B/C source manifests are mutually disjoint inside their week. Each +30 A/B pair is source- and context-disjoint.
- Every rendered response objective has exactly three options: one canonical member of its declared accepted set and two misconception-based wrong-function answers. All other valid members of that accepted set are filtered before rendering. L03 option sets additionally exclude every other repair strategy, because those remain legitimate free-role-play interventions.
- Every lesson has at most three active responses, at most four new active slot values and at most two new active frame families. Practice/transfer responses do not increase the active-target count.
- All Thai assessment atoms are taught before eligibility. The only forward-referenced cue records are the four later-only reservations in Section 15.1; their eligibility is explicitly L11 or L18, never W1–W2.
- L02 payment is learner-led after the meal and receives the exact total cue. L03 cannot clear until the original cue is replayed and its functional response is given. L04 contains no destination-confirmation source. L06 `สถานีบีทีเอสใช่ไหมครับ` maps only to `ใช่ครับ`.
- Every complete learner or modeled-partner Thai utterance ends in `ครับ`; the female polite particle is forbidden. Device `th-TH` TTS is the only pronunciation model, at `0.72` except explicit repair replay at `0.58`. Thai reading is never required, and no native recording, reviewer or pronunciation assessment is assumed.

### 16.3 Closed conflict decisions

| Planning conflict | Binding decision |
|---|---|
| An earlier draft combined “three-option set” with “three distractors,” which would have required four options. | Corrected globally: exactly one displayed accepted response plus two distractors; no four-option wording remains authoritative. |
| “One +7 cross-scene interaction” and mandatory unexposed parallel B cannot use the same source signature. | One cross-scene interaction **family** per lesson owns two disjoint variants, A and B. Each served form still contains exactly one cross-scene interaction. |
| Compact inventory proposed L02 vendor-led bill prompting. | Superseded by learner-led meal-finished event followed by the exact total reply. |
| Compact L04 variants risked exposing destination confirmation before its mechanism. | All destination confirmations are removed from L04; the first registered confirmation check is L06 and accepts only `ใช่ครับ`. |
| Free-role-play repair phrases are all pragmatically possible, but misconception grading needs a single target. | L03 grades only an explicit `meaningUnknown`, `tooFast`, `missedOnce` or `slowRepeat` state and never uses another valid repair as a distractor. |

The registry is closed at revision 1: zero placeholders, zero unresolved conflicts and zero assumed native-review dependencies.
