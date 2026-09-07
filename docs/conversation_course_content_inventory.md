# Bangkok Conversation Foundation — Binding Content Inventory

> **v8.5.0 override:** see [What stuck? release contract](v8_5_learning_check.md) for current shared interactions, supplementary evidence, lesson estimates and active Lesson 3 +7 forms C/D. Original A/B entries below are archived history. Weeks 2–8 are still unshipped.

**Inventory revision:** 1.0
**Date:** 2026-08-28
**Parent specification:** `conversation_course_implementation_spec.md`
**Status:** frozen binding content appendix; Week 1 content was implemented in v8.3.0, its interaction shell was rebuilt in v8.4.0 and the model-before-practice teaching order was corrected in v8.4.1. Weeks 2–8 remain reserved for staged releases in the parent specification.

This is the binding content appendix for the 24-lesson course. It fixes the situations, active functions, model-dialogue order, first substitution, delayed variants and later recurrence before implementation begins. The parent specification controls scheduling, evidence, gates, state, audio, migration and validation when this inventory and the parent differ.

## A. Authoring and normalization rules

- All learner and modeled partner roles are male. Every complete Thai utterance ends in `ครับ`; `ค่ะ` is prohibited.
- `ttsText` is exactly the displayed Thai with segmentation marks removed; its speech-synthesis locale is `th-TH`, while visible Thai HTML uses the valid language tag `lang="th"`. Playback uses device TTS only. The authored default rate is `0.72`, matching the current conversation fixture; an explicitly labelled slow-repair replay uses `0.58`. A capability test may reject unusable playback, but the app never describes either rate as native or objectively slow.
- A slash in segmentation marks a meaningful chunk, not an orthographic Thai word boundary.
- Thai script, pronunciation spelling and English are teaching supports. Reading is never a prerequisite or score.
- `P` means partner, `L` means learner and `[break]` means a visible, learner-controlled scene transition. The 900 ms passive gap is used only between already modeled lines; it is never learner answer time.
- `event:` is a learner-led situation card rather than an invented partner utterance. Event prompts can test function selection, while later partner replies test audio comprehension.
- Record IDs and form assignments are mutually exclusive. A `d1` row may deliberately repeat one taught tuple when it is marked `rehearsalOf`; it is familiar retention, not transfer. Every `d7`, `gate-a`, `gate-b` and `d30` signature must otherwise be distinct and must not leak before its assigned stage.
- A stage source set normally contains three cue→reply signatures. Objective checks obtain six items by testing both cue intent and appropriate response; eight-item checks add alternate-cue and cross-scene items. The gate builder samples only the rows labelled `gate` and follows the balance contract in the parent specification.
- Each item also receives segments, English, pronunciation spelling, misconception tags and source notes in implementation data. The canonical pronunciation spellings below define all active lines; variant spellings are assembled only from those declared chunks and must be emitted in the generated audit.
- Health-role values are fixed fictional lesson data. The course neither asks for nor stores the learner's real symptoms, allergies, medicines or dose information.

## B. Exact 56-day pace

The date scheduler moves missed work forward. “Day” below means course day, not a forced weekday.

| Week | Day 1 | Day 2 | Day 3 | Day 4 | Day 5 | Day 6 | Day 7 |
|---|---|---|---|---|---|---|---|
| 1 | L01 Food basics | L01 +1, L02 Food options | L02 +1, L03 Repair | L03 +1, W1 consolidation | W1 gate | Optional field rehearsal + script noticing | Rest/catch-up |
| 2 | L01 +7, L04 Taxi destination | L04 +1, L02 +7, L05 Taxi route | L05 +1, L03 +7, L06 Street directions | L06 +1, W2 consolidation | W2 cumulative gate | Optional Cue Catch + script noticing | Rest/catch-up |
| 3 | L04 +7, L07 Café | L07 +1, L05 +7, L08 Checkout | L08 +1, L06 +7, L09 Market | L09 +1, W3 consolidation | W3 cumulative gate | Optional Swap Lab + script noticing | Rest/catch-up |
| 4 | L07 +7, L10 Introduction | L10 +1, L08 +7, L11 Limited Thai | L11 +1, L09 +7, L12 Lunch plan | L12 +1, W4 consolidation | W4 cumulative gate | Optional Reply Ready + script noticing | Rest/catch-up |
| 5 | L10 +7, L13 Reception | L13 +1, L11 +7, L14 Delivery | L14 +1, L12 +7, L15 Maintenance | L15 +1, W5 consolidation | W5 cumulative gate | Optional Mixed Bangkok + script noticing | Rest/catch-up |
| 6 | L13 +7, L16 Clothing | L16 +1, L14 +7, L17 Correction | L17 +1, L15 +7, L18 Repair escalation | L18 +1, W6 consolidation | W6 cumulative gate | Optional Repair Lab + script noticing | Rest/catch-up |
| 7 | L16 +7, L19 Pharmacy facts | L19 +1, L17 +7, L20 Label language | L20 +1, L18 +7, L21 Urgent help | L21 +1, W7 consolidation | W7 cumulative gate | Optional safety rehearsal + script noticing | Rest/catch-up |
| 8 | L19 +7, L22 Hours/services | L22 +1, L20 +7, L23 Service problem | L23 +1, L21 +7, L24 Bangkok day | L24 +1, W8 consolidation | Final cumulative gate | Optional field rehearsal + script noticing | Rest/catch-up |

Any gate-derived +30 that is due joins the first available day under the two-check/16-prompt backlog governor. It never silently displaces a listed +1 or +7; the oldest-due deterministic rule decides and deferred checks remain due.

## C. Lesson inventory

### Week 1 — Obtain food and survive misunderstanding

#### L01 `conv.w01.l01.food_order` — Food-order basics

- Scene: `scene.w01.l01.food_order_basics`
- Outcome: greet, indicate food and specify no spice.
- Prerequisites: none.
- New frames: `เอา/{item}/ครับ`; `ไม่/{quality}/ครับ`.
- Active targets:
  - `r.order_this`: cue `จะรับอะไรดีครับ` — *jà ráp a-rai dii khráp* — “What would you like?” → `เอาอันนี้ครับ` — *ao an níi khráp* — “I’ll have this one.”
  - `r.no_spice`: cue `รับเผ็ดไหมครับ` — *ráp phèt mǎi khráp* — “Would you like it spicy?” → `ไม่เผ็ดครับ` — *mâi phèt khráp* — “Not spicy, please.”
- Segments: `จะรับ/อะไรดี/ครับ`; `เอา/อันนี้/ครับ`; `รับเผ็ด/ไหม/ครับ`; `ไม่/เผ็ด/ครับ`.
- Model scene: P `สวัสดีครับ` → L `สวัสดีครับ` → P `จะรับอะไรดีครับ` → L `เอาอันนี้ครับ` → P `รับเผ็ดไหมครับ` → L `ไม่เผ็ดครับ` → P `ได้ครับ` → L `ขอบคุณครับ`.
- Controlled substitution: `เอากะเพราไก่ครับ` — *ao gà-phrao gài khráp* — “I’ll have chicken with holy basil.”
- Reserved variants:
  - `d1`: `รับอะไรดีครับ → เอาอันนี้ครับ`; `รับอันนี้ไหมครับ → เอาอันนี้ครับ`; `รับแบบเผ็ดไหมครับ → ไม่เผ็ดครับ`.
  - `d7`: `จะรับกะเพราไก่ไหมครับ → เอากะเพราไก่ครับ`; `รับกะเพราไก่หรืออันนี้ครับ → เอากะเพราไก่ครับ`; `กะเพราไก่รับเผ็ดไหมครับ → ไม่เผ็ดครับ`.
  - `gate`: `จะรับอันนี้ไหมครับ → เอาอันนี้ครับ`; `จะรับอะไรครับ → เอากะเพราไก่ครับ`; `อันนี้รับเผ็ดไหมครับ → ไม่เผ็ดครับ`.
  - `d30`: `รับกะเพราไก่เผ็ดไหมครับ → ไม่เผ็ดครับ`; `รับอะไรครับ → เอาอันนี้ครับ`; `กะเพราไก่ไหมครับ → เอากะเพราไก่ครับ`.
- Misconceptions: answering the spice question with the item, accepting the opposite spice goal with `ได้ครับ`, or closing with thanks before ordering.
- Later recurrence: `เอา + item` in L08, L09, L16 and L24; `ไม่เผ็ดครับ` in L24.

#### L02 `conv.w01.l02.food_options` — Dine-in, drink and finishing

- Scene: `scene.w01.l02.food_options_finish`
- Outcome: choose dine-in, order water and initiate the bill request.
- Prerequisite: L01.
- New frames: bounded direct choice; `request/ด้วย/ครับ`.
- Active targets:
  - `r.dine_here`: `ทานที่นี่หรือกลับบ้านครับ` — *thaan thîi-nîi rǔue glàp bâan khráp* — “For here or takeaway?” → `ทานที่นี่ครับ` — *thaan thîi-nîi khráp* — “For here.”
  - `r.water_one`: `รับน้ำอะไรดีครับ` — *ráp náam a-rai dii khráp* — “What drink would you like?” → `น้ำเปล่าขวดหนึ่งครับ` — *náam-bplàao khùat nùeng khráp* — “One bottle of water.”
  - `r.bill`: `event: meal finished and table cleared; learner wants the bill` → `คิดเงินด้วยครับ` — *khít ngern dûai khráp* — “The bill, please.” Recognition reply: `ทั้งหมดแปดสิบบาทครับ` — “Eighty baht altogether.” No partner utterance is invented before this learner-led request.
- Segments: `ทานที่นี่/ครับ`; `น้ำเปล่า/ขวดหนึ่ง/ครับ`; `คิดเงิน/ด้วย/ครับ`.
- Model scene: P `ทานที่นี่หรือกลับบ้านครับ` → L `ทานที่นี่ครับ` → P `รับน้ำอะไรดีครับ` → L `น้ำเปล่าขวดหนึ่งครับ` → P `ได้ครับ` → L `ขอบคุณครับ` → `[break: หลังทานเสร็จ / after eating; learner starts when ready]` → L `คิดเงินด้วยครับ` → P `ทั้งหมดแปดสิบบาทครับ` → L `ขอบคุณครับ` → P `ขอบคุณครับ`.
- Controlled substitution: `กลับบ้านครับ` — *glàp bâan khráp* — “Takeaway.”
- Reserved variants:
  - `d1`: `ทานที่นี่ไหมครับ → ทานที่นี่ครับ`; `กลับบ้านไหมครับ → กลับบ้านครับ`; `รับน้ำอะไรครับ → น้ำเปล่าขวดหนึ่งครับ`.
  - `d7`: `กลับบ้านหรือทานที่นี่ครับ → กลับบ้านครับ`; `รับน้ำเปล่าไหมครับ → น้ำเปล่าขวดหนึ่งครับ`; `event: finished café drink → คิดเงินด้วยครับ`.
  - `gate`: `ทานที่นี่หรือกลับบ้านดีครับ → ทานที่นี่ครับ`; `รับน้ำอะไรดีครับ → น้ำเปล่าขวดหนึ่งครับ`; `รับอะไรเพิ่มไหมครับ [finished] → คิดเงินด้วยครับ`.
  - `d30`: `จะทานที่นี่ไหมครับ → ทานที่นี่ครับ`; `รับน้ำเปล่ากี่ขวดครับ → น้ำเปล่าขวดหนึ่งครับ`; `event: meal finished and table cleared → คิดเงินด้วยครับ`.
- Misconceptions: confusing location, drink and payment turns; `กลับบ้านครับ` is accepted only when the goal is takeaway.
- Later recurrence: dine-in in L07, water in L08/L17/L24, total/payment in L08–L09 and L24.

#### L03 `conv.w01.l03.repair` — Survival repair

- Scene: `scene.w01.l03.survival_repair`
- Outcome: signal non-understanding, request slower speech, request repetition and then answer the original task.
- Prerequisites: L01–L02 cue families.
- New active chunks:
  - `r.dont_understand`: `ไม่เข้าใจครับ` — *mâi khâo-jai khráp* — “I don’t understand.”
  - `r.slower`: `พูดช้าๆ ได้ไหมครับ` — *phûut cháa-cháa dâai mǎi khráp* — “Could you speak slowly?”
  - `r.again`: `พูดอีกครั้งได้ไหมครับ` — *phûut ìik khráng dâai mǎi khráp* — “Could you say it again?”
- Segments: `ไม่/เข้าใจ/ครับ`; `พูด/ช้าๆ/ได้ไหม/ครับ`; `พูด/อีกครั้ง/ได้ไหม/ครับ`.
- Model scene: P `สวัสดีครับ` → L `สวัสดีครับ` → P `จะรับอะไรดีครับ` → L `ไม่เข้าใจครับ` → P `จะรับอะไรดีครับ` → L `พูดช้าๆ ได้ไหมครับ` → P, slower TTS `จะรับอะไรดีครับ` → L `พูดอีกครั้งได้ไหมครับ` → P, slower TTS `จะรับอะไรดีครับ` → L `เอาอันนี้ครับ` → P `ได้ครับ` → L `ขอบคุณครับ` → P `ไม่เป็นไรครับ`. Repair never ends before the original functional answer.
- Controlled combination: `พูดช้าๆ อีกครั้งได้ไหมครับ` — *phûut cháa-cháa ìik khráng dâai mǎi khráp* — “Could you say it again slowly?”
- Reserved variants:
  - `d1`: `รับอะไรดีครับ [meaning unknown] → ไม่เข้าใจครับ`; `รับเผ็ดไหมครับ [too fast] → พูดช้าๆ ได้ไหมครับ`; `ทานที่นี่หรือกลับบ้านครับ [missed once] → พูดอีกครั้งได้ไหมครับ`.
  - `d7`: `รับน้ำอะไรดีครับ [meaning unknown] → ไม่เข้าใจครับ`; `จะรับอะไรดีครับ [too fast] → พูดช้าๆ ได้ไหมครับ`; `รับเผ็ดไหมครับ [missed once] → พูดอีกครั้งได้ไหมครับ`.
  - `gate`: `ทานที่นี่ไหมครับ [meaning unknown] → ไม่เข้าใจครับ`; `รับน้ำอะไรครับ [too fast] → พูดช้าๆ ได้ไหมครับ`; `จะรับอันนี้ไหมครับ [missed once] → พูดอีกครั้งได้ไหมครับ`.
  - `d30`: `รับอะไรเพิ่มไหมครับ [meaning unknown] → ไม่เข้าใจครับ`; `รับน้ำอะไรดีครับ [need slow repeat] → พูดช้าๆ อีกครั้งได้ไหมครับ`; `รับเผ็ดไหมครับ [missed once] → พูดอีกครั้งได้ไหมครับ`.
- Misconceptions: all three repair moves are valid interrupts in free role-play; an objective item distinguishes them only through an explicit current goal such as “meaning unknown,” “too fast” or “missed once.”
- Later recurrence: always-available rescue actions from L04 onward; active retrieval in L11 and escalation in L18.

### Week 2 — Get around Bangkok

#### L04 `conv.w02.l04.taxi_destination` — Taxi destination and meter

- Scene: `scene.w02.l04.taxi_destination_meter`
- Outcome: give a destination and request the meter.
- Prerequisite: W1 gate.
- New active targets:
  - `r.destination`: `ไปไหนครับ` — *bpai nǎi khráp* — “Where are you going?” → `ไปสถานีเอกมัยครับ` — *bpai sà-thǎa-nii èek-gà-mai khráp* — “To Ekkamai Station.”
  - `r.meter`: `ไม่ใช้มิเตอร์ครับ` — *mâi chái mí-dtêr khráp* — “I’m not using the meter.” → `ใช้มิเตอร์ได้ไหมครับ` — *chái mí-dtêr dâai mǎi khráp* — “Could you use the meter?” It is also rehearsed learner-led immediately after stating the destination.
- Segments: `ไป/สถานีเอกมัย/ครับ`; `ใช้มิเตอร์/ได้ไหม/ครับ`.
- Model scene: P `สวัสดีครับ` → L `สวัสดีครับ` → P `ไปไหนครับ` → L `ไปสถานีเอกมัยครับ` → P `ไม่ใช้มิเตอร์ครับ` → L `ใช้มิเตอร์ได้ไหมครับ` → P `ได้ครับ` → L `ขอบคุณครับ`.
- Controlled substitution: `ไปสุขุมวิทซอยสิบครับ` — *bpai sù-khǔm-wít soi sìp khráp*.
- Reserved variants:
  - `d1`: `ไปไหนครับ → ไปสุขุมวิทซอยสิบครับ`; `ไปเอกมัยไหมครับ → ไปสถานีเอกมัยครับ`; `event: destination accepted, request meter → ใช้มิเตอร์ได้ไหมครับ`.
  - `d7`: `ไปสถานีไหนครับ → ไปสถานีเอกมัยครับ`; `ไปสุขุมวิทซอยสิบใช่ไหมครับ → ใช่ครับ`; `ไม่กดมิเตอร์ครับ → ใช้มิเตอร์ได้ไหมครับ`.
  - `gate`: `ไปไหนครับ → ไปเอกมัยครับ`; `สถานีเอกมัยใช่ไหมครับ → ใช่ครับ`; `ใช้มิเตอร์ไหมครับ → ใช้มิเตอร์ครับ`.
  - `d30`: `จะไปไหนครับ → ไปสุขุมวิทซอยสิบครับ`; `ไปสถานีเอกมัยไหมครับ → ไปสถานีเอกมัยครับ`; `event: taxi proposes no meter → ใช้มิเตอร์ได้ไหมครับ`.
- Misconceptions: a destination is not a route instruction; `ได้ครับ` is not the configured response to a no-meter proposal. The course makes no claim about law or resolving a dispute.
- Later recurrence: Ekkamai in L06/L10/L12/L21/L24; taxi confirmation and meter in the final transport mix.

#### L05 `conv.w02.l05.taxi_route` — Route and stop

- Scene: `scene.w02.l05.taxi_route_stop`
- Outcome: direct the driver straight, turn and stop.
- Prerequisite: L04.
- Active targets:
  - `r.straight`: `ไปทางไหนดีครับ` — *bpai thaang nǎi dii khráp* — “Which way should I go?” → `ตรงไปครับ` — *dtrong bpai khráp* — “Go straight.”
  - `r.left_ahead`: `แล้วไปทางไหนครับ` — *láaeo bpai thaang nǎi khráp* — “Which way after that?” → `เลี้ยวซ้ายข้างหน้าครับ` — *líao sáai khâang nâa khráp* — “Turn left up ahead.”
  - `r.stop_here`: `ตรงนี้ใช่ไหมครับ` — *dtrong níi châi mǎi khráp* — “Here, right?” → `จอดตรงนี้ครับ` — *jòrt dtrong níi khráp* — “Stop here.”
- Segments: `ตรงไป/ครับ`; `เลี้ยวซ้าย/ข้างหน้า/ครับ`; `จอด/ตรงนี้/ครับ`.
- Model scene: P `ไปทางไหนดีครับ` → L `ตรงไปครับ` → P `ตรงไปใช่ไหมครับ` → L `ใช่ครับ` → P `แล้วไปทางไหนครับ` → L `เลี้ยวซ้ายข้างหน้าครับ` → P `ตรงนี้ใช่ไหมครับ` → L `จอดตรงนี้ครับ` → P `ได้ครับ` → L `ขอบคุณครับ`.
- Controlled substitution: `เลี้ยวขวาซอยนี้ครับ` — *líao khwǎa soi níi khráp* — “Turn right into this soi.”
- Reserved variants:
  - `d1`: `ไปทางไหนครับ → ตรงไปครับ`; `ตรงไปใช่ไหมครับ → ใช่ครับ`; `ถึงตรงนี้แล้วครับ → จอดตรงนี้ครับ`.
  - `d7`: `แล้วไปทางไหนครับ [right-hand soi] → เลี้ยวขวาซอยนี้ครับ`; `ไปตรงไหมครับ → ตรงไปครับ`; `ตรงนี้หรือข้างหน้าครับ → จอดข้างหน้าครับ`.
  - `gate`: `จากนี้ไปทางไหนครับ → ตรงไปครับ`; `ซอยนี้อยู่ทางขวาครับ → เลี้ยวขวาซอยนี้ครับ`; `ถึงแล้วครับ → จอดตรงนี้ครับ`.
  - `d30`: `ไปต่อทางไหนครับ → เลี้ยวซ้ายข้างหน้าครับ`; `ข้างหน้าใช่ไหมครับ → จอดข้างหน้าครับ`; `ทางนี้ตรงไปใช่ไหมครับ → ตรงไปครับ`.
- Misconceptions: distinguish travel destination, direction and stop functions; right/left are goal-bound, never assumed equivalent.
- Later recurrence: receptive directions in L06, location logistics in L14, all three in L24.

#### L06 `conv.w02.l06.street_directions` — BTS and street directions

- Scene: `scene.w02.l06.bts_street_directions`
- Outcome: ask for the BTS, request the next direction and ask about distance.
- Prerequisites: L04–L05.
- Active targets:
  - `r.ask_bts`: `มีอะไรให้ช่วยไหมครับ` — *mii a-rai hâi chûai mǎi khráp* — “Can I help?” → `สถานีบีทีเอสอยู่ไหนครับ` — *sà-thǎa-nii bii-thii-èt yùu nǎi khráp* — “Where is the BTS station?”
  - `r.ask_next`: `ตรงไปครับ` — *dtrong bpai khráp* — “Go straight.” → `แล้วไปทางไหนครับ` — *láaeo bpai thaang nǎi khráp* — “Which way after that?”
  - `r.ask_far`: `เลี้ยวซ้ายข้างหน้าครับ` — *líao sáai khâang nâa khráp* — “Turn left up ahead.” → `ไกลไหมครับ` — *glai mǎi khráp* — “Is it far?”
- Segments: `สถานีบีทีเอส/อยู่ไหน/ครับ`; `แล้ว/ไปทางไหน/ครับ`; `ไกล/ไหม/ครับ`.
- Model scene: L `ขอโทษครับ` → P `มีอะไรให้ช่วยไหมครับ` → L `สถานีบีทีเอสอยู่ไหนครับ` → P `ตรงไปครับ` → L `แล้วไปทางไหนครับ` → P `เลี้ยวซ้ายข้างหน้าครับ` → L `ไกลไหมครับ` → P `ไม่ไกลครับ` → L `ขอบคุณครับ` → P `ไม่เป็นไรครับ`.
- Controlled substitution: `ห้องน้ำอยู่ไหนครับ` — *hôrng-náam yùu nǎi khráp* — “Where is the toilet?”
- Reserved variants:
  - `d1`: `มีอะไรให้ช่วยไหมครับ → ห้องน้ำอยู่ไหนครับ`; `ตรงไปครับ → แล้วไปทางไหนครับ`; `เลี้ยวขวาซอยนี้ครับ → ไกลไหมครับ`.
  - `d7`: `ให้ช่วยอะไรครับ → สถานีบีทีเอสอยู่ไหนครับ`; `ตรงไปใช่ไหมครับ → แล้วไปทางไหนครับ`; `ไปข้างหน้าครับ → ไกลไหมครับ`.
  - `gate`: `มีอะไรให้ช่วยไหมครับ → สถานีเอกมัยอยู่ไหนครับ`; `เลี้ยวซ้ายครับ → แล้วไปทางไหนครับ`; `ตรงไปแล้วเลี้ยวขวาครับ → ไกลไหมครับ`.
  - `d30`: `ขอโทษครับ มีอะไรครับ → ห้องน้ำอยู่ไหนครับ`; `ตรงไปข้างหน้าครับ → แล้วไปทางไหนครับ`; `event: route known, ask distance → ไกลไหมครับ`.
- Misconceptions: questions are learner-led; `ตรงไปครับ` and `เลี้ยว...ครับ` are recognized instructions, not answers to “Where is the station?”
- Later recurrence: location frame in L13–L15 and L21; path questions in L24.

### Week 3 — Buy ordinary things without rehearsing one fixed script

#### L07 `conv.w03.l07.cafe` — Café drink

- Scene: `scene.w03.l07.cafe_drink`
- Outcome: order a drink, choose temperature and sweetness, then reuse dine-in language.
- Prerequisites: L01–L02.
- New productive frame: `ขอ/{drink + qualifier}/ครับ`.
- Active targets:
  - `r.order_drink`: `รับอะไรดีครับ` — *ráp a-rai dii khráp* — “What would you like?” → `ขออเมริกาโน่ครับ` — *khǒr a-mee-rí-gaa-nô khráp* — “An Americano, please.”
  - `r.iced`: `รับร้อนหรือเย็นครับ` — *ráp rórn rǔue yen khráp* — “Hot or iced?” → `เย็นครับ` — *yen khráp* — “Iced.”
  - `r.no_sugar`: `รับหวานไหมครับ` — *ráp wǎan mǎi khráp* — “Would you like it sweet?” → `ไม่หวานครับ` — *mâi wǎan khráp* — “Not sweet.”
- Segments: `ขอ/อเมริกาโน่/ครับ`; `เย็น/ครับ`; `ไม่/หวาน/ครับ`.
- Model scene: P `สวัสดีครับ` → L `สวัสดีครับ` → P `รับอะไรดีครับ` → L `ขออเมริกาโน่ครับ` → P `รับร้อนหรือเย็นครับ` → L `เย็นครับ` → P `รับหวานไหมครับ` → L `ไม่หวานครับ` → P `ทานที่นี่หรือกลับบ้านครับ` → L `ทานที่นี่ครับ` → P `ทั้งหมดหกสิบบาทครับ` → L `ขอบคุณครับ` → P `ขอบคุณครับ`.
- Controlled substitution: `ขอลาเต้ครับ` — *khǒr laa-dtêe khráp*.
- Reserved variants:
  - `d1`: `รับอเมริกาโน่ร้อนไหมครับ → ขออเมริกาโน่เย็นครับ`; `รับเย็นหรือร้อนครับ → เย็นครับ`; `หวานไหมครับ → ไม่หวานครับ`.
  - `d7`: `รับน้ำอะไรดีครับ → ขอลาเต้เย็นครับ`; `ลาเต้รับร้อนหรือเย็นครับ → เย็นครับ`; `ลาเต้หวานไหมครับ → ไม่หวานครับ`.
  - `gate`: `รับลาเต้ร้อนไหมครับ → ขอลาเต้เย็นครับ`; `อเมริกาโน่ร้อนหรือเย็นครับ → เย็นครับ`; `ลาเต้รับหวานไหมครับ → ไม่หวานครับ`.
  - `d30`: `รับลาเต้หวานไหมครับ → ขอลาเต้ไม่หวานครับ`; `รับอเมริกาโน่เย็นไหมครับ → ขออเมริกาโน่เย็นครับ`; `อเมริกาโน่หวานไหมครับ → ไม่หวานครับ`.
- Misconceptions: distinguish drink, temperature, sweetness and dine-in turns; `ไม่เผ็ดครับ` is a quality pattern but the wrong quality.
- Later recurrence: request frame in L16 and L24; drink and qualifiers in final food/café transfer.

#### L08 `conv.w03.l08.checkout` — Convenience-store checkout

- Scene: `scene.w03.l08.convenience_checkout`
- Outcome: add water, decline a bag and ask to pay by card.
- Prerequisites: L02 and numbers one/two.
- New productive frame: `จ่ายด้วย/{method}/ได้ไหม/ครับ`.
- Active targets:
  - `r.water_one`: `รับอะไรเพิ่มไหมครับ` — *ráp a-rai phôoem mǎi khráp* — “Anything else?” → `น้ำเปล่าขวดหนึ่งครับ` — *náam-bplàao khùat nùeng khráp*.
  - `r.no_bag`: `รับถุงไหมครับ` — *ráp thǔng mǎi khráp* — “Would you like a bag?” → `ไม่ต้องใส่ถุงครับ` — *mâi dtông sài thǔng khráp* — “No bag needed.”
  - `r.pay_card`: `ทั้งหมดสิบห้าบาทครับ` — *tháng-mòt sìp-hâa bàat khráp* — “Fifteen baht altogether.” → `จ่ายด้วยบัตรได้ไหมครับ` — *jàai dûai bàt dâai mǎi khráp* — “Can I pay by card?”
- Segments: `น้ำเปล่า/ขวดหนึ่ง/ครับ`; `ไม่ต้อง/ใส่ถุง/ครับ`; `จ่ายด้วย/บัตร/ได้ไหม/ครับ`.
- Model scene: P `สวัสดีครับ` → L `สวัสดีครับ` → P `รับอะไรเพิ่มไหมครับ` → L `น้ำเปล่าขวดหนึ่งครับ` → P `รับถุงไหมครับ` → L `ไม่ต้องใส่ถุงครับ` → P `ทั้งหมดสิบห้าบาทครับ` → L `จ่ายด้วยบัตรได้ไหมครับ` → P `ได้ครับ` → L `ขอบคุณครับ` → P `ขอบคุณครับ`.
- Controlled substitution: `จ่ายด้วยเงินสดได้ไหมครับ` — *jàai dûai ngoen-sòt dâai mǎi khráp*.
- Reserved variants:
  - `d1`: `รับน้ำเพิ่มไหมครับ → น้ำเปล่าสองขวดครับ`; `เอาถุงไหมครับ → ไม่เอาถุงครับ`; `จ่ายด้วยบัตรได้ไหมครับ → จ่ายด้วยบัตรครับ`.
  - `d7`: `รับอะไรเพิ่มไหมครับ → เอาน้ำเปล่าสองขวดครับ`; `ต้องการถุงไหมครับ → ไม่ต้องใส่ถุงครับ`; `ทั้งหมดสามสิบบาทครับ → จ่ายด้วยเงินสดครับ`.
  - `gate`: `รับน้ำอะไรเพิ่มครับ → น้ำเปล่าขวดหนึ่งครับ`; `รับถุงไหมครับ → ไม่เอาถุงครับ`; `จ่ายเงินสดหรือบัตรครับ → จ่ายด้วยบัตรครับ`.
  - `d30`: `รับน้ำกี่ขวดครับ → น้ำเปล่าสองขวดครับ`; `ใส่ถุงไหมครับ → ไม่ต้องใส่ถุงครับ`; `ทั้งหมดสามสิบบาทครับ → จ่ายด้วยคิวอาร์ครับ`.
- Misconceptions: bag, quantity and payment are separate functions; card/cash/QR answers are accepted only when they match the stated goal.
- Later recurrence: payment in L09/L14/L17/L24; quantities in L09/L17/L20/L23.

#### L09 `conv.w03.l09.market` — Market price, quantity and conditional bargaining

- Scene: `scene.w03.l09.market_price_quantity`
- Outcome: ask a unit price, order a quantity and bargain only after the seller signals flexibility.
- Prerequisites: L01 ordering, L08 payment, numbers one–three.
- New productive frame: `เอา/{number}/{classifier}/ครับ`.
- Active targets:
  - `r.unit_price`: `event: learner is interested in the mangoes and wants the unit price` → `ถุงละกี่บาทครับ` — *thǔng lá gìi bàat khráp* — “How much per bag?” Recognition reply: `ห้าสิบบาทครับ`.
  - `r.quantity`: context `price heard; configured goal is two bags` + `ห้าสิบบาทครับ` — *hâa-sìp bàat khráp* — “Fifty baht.” → `เอาสองถุงครับ` — *ao sǎawng thǔng khráp* — “I’ll take two bags.”
  - `r.bargain`: cue with `bargainAllowed:true`, `ถ้าเอาสองถุงลดได้นิดหน่อยครับ` — *thâa ao sǎawng thǔng lót dâai nít-nòi khráp* — “If you take two, I can reduce it a little.” → `ลดหน่อยได้ไหมครับ` — *lót nòi dâai mǎi khráp* — “Could you lower it a little?”
- Segments: `ถุงละ/กี่บาท/ครับ`; `เอา/สอง/ถุง/ครับ`; `ลด/หน่อย/ได้ไหม/ครับ`.
- Model scene: P `สวัสดีครับ` → L `สวัสดีครับ` → P `รับมะม่วงไหมครับ` → L `ถุงละกี่บาทครับ` → P `ห้าสิบบาทครับ` → L `เอาสองถุงครับ` → P `ถ้าเอาสองถุงลดได้นิดหน่อยครับ` → L `ลดหน่อยได้ไหมครับ` → P `ได้ครับ ทั้งหมดเก้าสิบบาทครับ` → L `จ่ายด้วยเงินสดครับ` → P `ได้ครับ` → L `ขอบคุณครับ` → P `ขอบคุณครับ`.
- Controlled substitution: `เอาสามถุงครับ` — *ao sǎam thǔng khráp*.
- Reserved variants:
  - `d1`: `event: ask the mango price per bag → มะม่วงถุงละกี่บาทครับ`; context `goal one bag` + `ถุงละห้าสิบบาทครับ → เอาหนึ่งถุงครับ`; `ถ้าเอาสามถุงลดได้ครับ → ลดหน่อยได้ไหมครับ`.
  - `d7`: `event: ask the price for one bag → หนึ่งถุงกี่บาทครับ`; context `goal two bags` + `ถุงละสี่สิบบาทครับ → เอาสองถุงครับ`; `ถ้าเอาสองถุงลดได้นิดหน่อยครับ → ลดได้ไหมครับ`.
  - `gate`: `event: ask the price for one bag of mangoes → มะม่วงหนึ่งถุงกี่บาทครับ`; context `goal three bags` + `มะม่วงถุงละห้าสิบบาทครับ → เอาสามถุงครับ`; `เอาสามถุงลดได้ครับ → ลดหน่อยได้ไหมครับ`.
  - `d30`: `event: point to this bag and ask its price → ถุงนี้กี่บาทครับ`; context `goal three bags` + `มะม่วงถุงละสี่สิบบาทครับ → เอามะม่วงสามถุงครับ`; `ถ้าเอาสองถุงลดได้ครับ → ลดได้ไหมครับ`.
- Misconceptions and etiquette: L07/L08 are tagged `pricingContext:fixed`; bargaining is never correct there. L09 allows it only after a cue explicitly tagged `bargainAllowed:true`.
- Later recurrence: classifiers in L17/L20/L23 and an unseen market recombination in L24.

### Week 4 — Say who you are and make a simple plan

#### L10 `conv.w04.l10.introduction` — Lateef's introduction

- Scene: `scene.w04.l10.personal_introduction`
- Outcome: give Lateef's name, country and job; reuse Ekkamai as his area.
- Prerequisites: greeting and L04/L06 location atoms.
- Personal-data boundary: name, broad country, occupation and area are authored course facts, not open profile fields. No employer, school, address or contact detail is stored.
- Active targets:
  - `r.name`: `คุณชื่ออะไรครับ` — *khun chûue a-rai khráp* — “What is your name?” → `ผมชื่อลาทีฟครับ` — *phǒm chûue laa-thîif khráp* — “My name is Lateef.”
  - `r.origin`: `คุณมาจากไหนครับ` — *khun maa jàak nǎi khráp* — “Where are you from?” → `ผมมาจากสหราชอาณาจักรครับ` — *phǒm maa jàak sà-hà-râat-chá-aa-naa-jàk khráp* — “I’m from the United Kingdom.” `อังกฤษ` is offered only as an explicitly selected shorter alternative if the learner intends England.
  - `r.job`: `คุณทำงานอะไรครับ` — *khun tham-ngaan a-rai khráp* — “What work do you do?” → `ผมเป็นครูคณิตศาสตร์ครับ` — *phǒm bpen khruu kha-nít-dtà-sàat khráp* — “I’m a maths teacher.”
- Segments: `ผม/ชื่อ/ลาทีฟ/ครับ`; `ผม/มาจาก/สหราชอาณาจักร/ครับ`; `ผม/เป็น/ครูคณิตศาสตร์/ครับ`.
- Model scene: P `สวัสดีครับ` → L `สวัสดีครับ` → P `คุณชื่ออะไรครับ` → L `ผมชื่อลาทีฟครับ` → P `คุณมาจากไหนครับ` → L `ผมมาจากสหราชอาณาจักรครับ` → P `คุณทำงานอะไรครับ` → L `ผมเป็นครูคณิตศาสตร์ครับ` → P `คุณอยู่แถวไหนครับ` → L `ผมอยู่เอกมัยครับ` → P `ยินดีที่ได้รู้จักครับ` → L `ยินดีที่ได้รู้จักครับ`.
- Controlled substitution: `ผมเป็นครูครับ` — *phǒm bpen khruu khráp*.
- Reserved variants:
  - `d1`: `ชื่ออะไรครับ → ผมชื่อลาทีฟครับ`; `มาจากประเทศอะไรครับ → ผมมาจากสหราชอาณาจักรครับ`; `ทำงานอะไรครับ → ผมเป็นครูครับ`.
  - `d7`: `คุณชื่อลาทีฟใช่ไหมครับ → ใช่ครับ`; `คุณมาจากไหนครับ → มาจากสหราชอาณาจักรครับ`; `เป็นครูอะไรครับ → เป็นครูคณิตศาสตร์ครับ`.
  - `gate`: `ขอทราบชื่อครับ → ชื่อลาทีฟครับ`; `มาจากไหนครับ → ผมมาจากสหราชอาณาจักรครับ`; `ทำงานเป็นครูใช่ไหมครับ → ใช่ครับ`.
  - `d30`: `ชื่อคุณอะไรครับ → ผมชื่อลาทีฟครับ`; `มาจากสหราชอาณาจักรใช่ไหมครับ → ใช่ครับ`; `ทำงานอะไรครับ → เป็นครูคณิตศาสตร์ครับ`.
- Misconceptions: name, origin, job and area are distinct; no false personal variant is used as a distractor.
- Later recurrence: social branch in L11–L12 and one personal fact in L24 consolidation.

#### L11 `conv.w04.l11.limited_thai` — Limited Thai and small-talk repair

- Scene: `scene.w04.l11.limited_thai_smalltalk`
- Outcome: state limited Thai ability and reuse the Week 1 slow-speech and non-understanding repairs.
- Prerequisites: L03 and L10.
- New productive frame: `ผมพูด/{language}/ได้/{amount}/ครับ`.
- Active targets:
  - `r.limited_thai`: `พูดภาษาไทยได้ไหมครับ` — *phûut phaa-sǎa thai dâai mǎi khráp* — “Can you speak Thai?” → `ผมพูดภาษาไทยได้นิดหน่อยครับ` — *phǒm phûut phaa-sǎa thai dâai nít-nòi khráp* — “I speak a little Thai.”
  - `r.slower`: `ผมพูดเร็วไปไหมครับ` — *phǒm phûut reo bpai mǎi khráp* — “Am I speaking too fast?” → `พูดช้าๆ ได้ไหมครับ`.
  - `r.dont_understand`: `วันนี้ไปไหนครับ` — *wan-níi bpai nǎi khráp* — “Where are you going today?” with goal “meaning unknown” → `ไม่เข้าใจครับ`.
- Model scene: P `สวัสดีครับ` → L `สวัสดีครับ` → P `สบายดีไหมครับ` → L `สบายดีครับ` → P `พูดภาษาไทยได้ไหมครับ` → L `ผมพูดภาษาไทยได้นิดหน่อยครับ` → P `ผมพูดเร็วไปไหมครับ` → L `พูดช้าๆ ได้ไหมครับ` → P `วันนี้ไปไหนครับ` → L `ไม่เข้าใจครับ` → P `ไปเอกมัยไหมครับ` → L `ไปเอกมัยครับ`.
- Controlled substitution: `พูดอีกครั้งได้ไหมครับ`.
- Reserved variants:
  - `d1`: `ภาษาไทยได้ไหมครับ → ผมพูดได้นิดหน่อยครับ`; `พูดเร็วไหมครับ → พูดช้าๆ หน่อยได้ไหมครับ`; `วันนี้อยู่ไหนครับ [meaning unknown] → ไม่เข้าใจครับ`.
  - `d7`: `พูดภาษาไทยหรือภาษาอังกฤษครับ → ผมพูดภาษาไทยได้นิดหน่อยครับ`; `พูดเร็วไปไหมครับ → พูดช้าๆ ได้ไหมครับ`; `วันนี้ไปเอกมัยไหมครับ [missed] → พูดอีกครั้งได้ไหมครับ`.
  - `gate`: `พูดภาษาไทยได้มากไหมครับ → ผมพูดได้นิดหน่อยครับ`; `ผมพูดเร็วครับ → พูดช้าๆ ได้ไหมครับ`; `วันนี้ไปไหนครับ [meaning unknown] → ผมไม่เข้าใจครับ`.
  - `d30`: `ภาษาไทยเป็นอย่างไรครับ → ผมพูดภาษาไทยได้นิดหน่อยครับ`; `พูดเร็วไปครับ → พูดช้าๆ อีกครั้งได้ไหมครับ`; `ไปไหนวันนี้ครับ [meaning unknown] → ไม่เข้าใจครับ`.
- Misconceptions: the objective states the repair goal; any repair remains valid in free role-play. The app does not infer real proficiency from the fixed phrase.
- Later recurrence: every harder scene; explicit escalation in L18.

#### L12 `conv.w04.l12.lunch_plan` — Colleague lunch: time and place

- Scene: `scene.w04.l12.colleague_lunch_plan`
- Outcome: accept lunch, counter-propose a time and confirm a meeting place/time.
- Prerequisites: L10–L11 and L02 place-choice language.
- New productive frame: `เจอกันที่/{place}/ครับ`. Time negotiation remains a separate turn so no answer changes two axes at once.
- Active targets:
  - `r.accept`: `ไปกินข้าวกันไหมครับ` — *bpai gin khâao gan mǎi khráp* — “Shall we go for lunch?” → `ไปครับ` — *bpai khráp* — “Yes, let’s go.”
  - `r.counter_time`: `ตอนเที่ยงได้ไหมครับ` — *dtaawn thîang dâai mǎi khráp* — “Would noon work?” → `เที่ยงครึ่งได้ไหมครับ` — *thîang-khrʉ̂ng dâai mǎi khráp* — “Would 12:30 work?”
  - `r.meet_plan`: `เจอกันที่ไหนครับ` — *jooe gan thîi nǎi khráp* — “Where shall we meet?” → `เจอกันที่ร้านนี้ครับ` — *jooe gan thîi ráan níi khráp*.
- Model scene: P `สวัสดีครับ` → L `สวัสดีครับ` → P `ไปกินข้าวกันไหมครับ` → L `ไปครับ` → P `ตอนเที่ยงได้ไหมครับ` → L `เที่ยงครึ่งได้ไหมครับ` → P `ได้ครับ` → P `เจอกันที่ไหนครับ` → L `เจอกันที่ร้านนี้ครับ` → P `ได้ครับ` → L `ขอบคุณครับ` → P `เจอกันครับ` → L `เจอกันครับ`.
- Controlled substitution: `เจอกันที่หน้าโรงเรียนครับ` — *jooe gan thîi nâa rohng-rian khráp*.
- Reserved variants:
  - `d1`: `ไปกินข้าวไหมครับ → ไปครับ`; `ตอนเที่ยงได้ไหมครับ → เที่ยงครึ่งได้ไหมครับ`; `เจอกันที่ไหนครับ → เจอกันที่หน้าโรงเรียนครับ`.
  - `d7`: `ไปกินข้าวกันที่ร้านนี้ไหมครับ → ไปได้ครับ`; `เที่ยงครึ่งได้ไหมครับ [goal noon] → ตอนเที่ยงได้ไหมครับ`; `จะเจอกันที่ไหนครับ → เจอกันที่เอกมัยครับ`.
  - `gate`: `ไปกินข้าวกันไหมครับ → ได้ครับ`; `ตอนเที่ยงสะดวกไหมครับ [goal 12:30] → เที่ยงครึ่งได้ไหมครับ`; `เจอกันที่ไหนครับ → เจอกันที่เอกมัยครับ`.
  - `d30`: `กินข้าวด้วยกันไหมครับ → ไปครับ`; `เที่ยงครึ่งสะดวกไหมครับ [goal noon] → ตอนเที่ยงได้ไหมครับ`; `เจอกันที่ร้านนี้ไหมครับ [goal school] → เจอกันที่หน้าโรงเรียนครับ`.
- Misconceptions: acceptance, time negotiation and full meeting plan are separate turns; dining mode `ทานที่นี่ครับ` is not a meeting-location response.
- Later recurrence: appointment time in L15, time confirmation in L18/L22, integrated social branch in L24 consolidation.

### Week 5 — Handle condo and delivery logistics safely

#### L13 `conv.w05.l13.reception` — Condo reception and keycard

- Scene: `scene.w05.l13.reception_keycard`
- Outcome: report a non-working keycard, give a fictional practice room and respond when reception asks to see ID.
- Prerequisites: L03 repair, L06 location, numbers one–three.
- Privacy boundary: only fixed practice rooms `หนึ่งสองสาม` and `สองหนึ่งสาม`; no typed or stored room, ID or credential.
- New productive frame: `{thing}/ใช้ไม่ได้/ครับ`.
- Active targets:
  - `r.keycard_problem`: `มีอะไรให้ช่วยครับ` — *mii a-rai hâi chûai khráp* — “How can I help?” → `คีย์การ์ดใช้ไม่ได้ครับ` — *khii-gàat chái mâi dâai khráp* — “The keycard doesn’t work.”
  - `r.room`: `อยู่ห้องไหนครับ` — *yùu hôrng nǎi khráp* — “Which room are you in?” → `ห้องหนึ่งสองสามครับ` — *hôrng nùeng sǎawng sǎam khráp* — “Practice room 123.”
  - `r.show_id`: `ขอดูบัตรด้วยครับ` — *khǎw duu bàt dûai khráp* — “May I see your ID?” → `นี่ครับ` — *nîi khráp* — “Here it is.”
- Segments: `คีย์การ์ด/ใช้ไม่ได้/ครับ`; `ห้อง/หนึ่ง/สอง/สาม/ครับ`; `นี่/ครับ`.
- Model scene: P `สวัสดีครับ` → L `สวัสดีครับ` → P `มีอะไรให้ช่วยครับ` → L `คีย์การ์ดใช้ไม่ได้ครับ` → P `อยู่ห้องไหนครับ` → L `ห้องหนึ่งสองสามครับ` → P `ขอดูบัตรด้วยครับ` → L `นี่ครับ` → P `รอสักครู่ครับ` → L `ได้ครับ` → P `เรียบร้อยแล้วครับ` → L `ขอบคุณครับ`.
- Controlled substitution: `ลิฟต์ใช้ไม่ได้ครับ` — *líp chái mâi dâai khráp*.
- Reserved variants:
  - `d1`: `คีย์การ์ดใช้ได้ไหมครับ → คีย์การ์ดใช้ไม่ได้ครับ`; `อยู่ห้องอะไรครับ → ห้องหนึ่งสองสามครับ`; `ขอดูบัตรครับ → นี่ครับ`.
  - `d7`: `มีปัญหาอะไรครับ → ลิฟต์ใช้ไม่ได้ครับ`; `ห้องหนึ่งสองสามใช่ไหมครับ → ใช่ครับ`; `ขอดูบัตรอีกครั้งครับ → นี่ครับ`.
  - `gate`: `มีอะไรให้ช่วยไหมครับ → ประตูใช้ไม่ได้ครับ`; `อยู่ห้องไหนครับ → ห้องสองหนึ่งสามครับ`; `ขอดูคีย์การ์ดด้วยครับ → นี่ครับ`.
  - `d30`: `อะไรใช้ไม่ได้ครับ → ประตูใช้ไม่ได้ครับ`; `ห้องสองหนึ่งสามใช่ไหมครับ → ใช่ครับ`; `ขอดูคีย์การ์ดอีกครั้งครับ → นี่ครับ`.
- Misconceptions: problem, room and ID handover are different turns; the UI says “show” and never asks the learner to enter ID data.
- Later recurrence: room/location in L14/L17/L18/L23/L24; not-working frame in L15/L23.

#### L14 `conv.w05.l14.delivery` — Delivery handoff

- Scene: `scene.w05.l14.delivery_handoff`
- Outcome: give a fictional location, choose lobby drop-off and state a taught payment method.
- Prerequisites: L08 payment, L13 room, L06 location.
- New productive frame: `ฝากไว้ที่/{dropoff}/ครับ`.
- Active targets:
  - `r.location`: `ตอนนี้อยู่ที่ไหนครับ` — *dtaawn-níi yùu thîi-nǎi khráp* — “Where are you now?” → `อยู่ห้องหนึ่งสองสามครับ` — *yùu hôrng nùeng sǎawng sǎam khráp*.
  - `r.dropoff`: `ให้ส่งที่ห้องไหมครับ` — *hâi sòng thîi hôrng mǎi khráp* — “Shall I deliver it to the room?” with lobby goal → `ฝากไว้ที่ล็อบบี้ครับ` — *fàak wái thîi lóp-bîi khráp*.
  - `r.payment`: `จ่ายเงินสดหรือคิวอาร์ครับ` — *jàai ngoen-sòt rǔue khio-aa khráp* — “Cash or QR?” → `คิวอาร์ครับ` — *khio-aa khráp*.
- Model scene: P `สวัสดีครับ` → L `สวัสดีครับ` → P `ตอนนี้อยู่ที่ไหนครับ` → L `อยู่ห้องหนึ่งสองสามครับ` → P `ให้ส่งที่ห้องไหมครับ` → L `ฝากไว้ที่ล็อบบี้ครับ` → P `จ่ายเงินสดหรือคิวอาร์ครับ` → L `คิวอาร์ครับ` → P `ได้ครับ` → L `ขอบคุณครับ`.
- Controlled substitution: `ฝากไว้ที่หน้าเคาน์เตอร์ครับ` — *fàak wái thîi nâa khao-dtôoe khráp*.
- Reserved variants:
  - `d1`: `อยู่ที่ห้องใช่ไหมครับ → อยู่ห้องหนึ่งสองสามครับ`; `ให้ส่งที่ไหนครับ → ฝากไว้ที่ห้องครับ`; `จ่ายด้วยคิวอาร์ได้ไหมครับ → คิวอาร์ครับ`.
  - `d7`: `อยู่ที่ล็อบบี้ใช่ไหมครับ → อยู่ที่ล็อบบี้ครับ`; `ของให้ฝากไว้ที่ไหนครับ → ฝากไว้ที่ล็อบบี้ครับ`; `จ่ายด้วยเงินสดได้ไหมครับ → เงินสดครับ`.
  - `gate`: `ตอนนี้อยู่ตรงไหนครับ → อยู่ที่ล็อบบี้ครับ`; `ให้ฝากไว้ที่ไหนครับ → ฝากไว้ที่หน้าเคาน์เตอร์ครับ`; `จ่ายเงินสดหรือคิวอาร์ครับ → เงินสดครับ`.
  - `d30`: `อยู่ห้องอะไรครับ → อยู่ห้องสองหนึ่งสามครับ`; `ให้ส่งที่ห้องหรือที่ล็อบบี้ครับ → ฝากไว้ที่หน้าเคาน์เตอร์ครับ`; `จ่ายคิวอาร์หรือเงินสดครับ → คิวอาร์ครับ`.
- Misconceptions: location, drop-off and payment must not be answered out of turn; payment variants are configured goals, not assumed preferences.
- Later recurrence: location in L18/L21/L24; drop-off and payment in L17/L23/L24.

#### L15 `conv.w05.l15.maintenance` — Maintenance problem, time and access

- Scene: `scene.w05.l15.maintenance_access`
- Outcome: report a failed air conditioner, accept a technician time and allow access.
- Prerequisites: L12 time, L13 not-working frame and room context.
- New productive frames: none; this is deliberate recombination.
- Active targets:
  - `r.aircon_problem`: `มีอะไรให้ช่วยครับ` → `แอร์ใช้ไม่ได้ครับ` — *aae chái mâi dâai khráp* — “The air conditioner doesn’t work.”
  - `r.time`: `สะดวกตอนบ่ายโมงไหมครับ` — *sà-dùuak dtaawn bàai moong mǎi khráp* — “Are you available at 1 p.m.?” → `บ่ายโมงได้ครับ` — *bàai moong dâai khráp*.
  - `r.access`: `ช่างเข้าห้องได้ไหมครับ` — *châang khâo hôrng dâai mǎi khráp* — “Can the technician enter?” → `เข้าได้ครับ` — *khâo dâai khráp*.
- Model scene: P `สวัสดีครับ` → L `สวัสดีครับ` → P `มีอะไรให้ช่วยครับ` → L `แอร์ใช้ไม่ได้ครับ` → P `สะดวกตอนบ่ายโมงไหมครับ` → L `บ่ายโมงได้ครับ` → P `ช่างเข้าห้องได้ไหมครับ` → L `เข้าได้ครับ` → P `ช่างจะมาตอนบ่ายโมงครับ` → L `ขอบคุณครับ`.
- Controlled substitution: `เที่ยงครึ่งได้ครับ` — *thîang-khrʉ̂ng dâai khráp*.
- Reserved variants:
  - `d1`: `อะไรใช้ไม่ได้ครับ → แอร์ใช้ไม่ได้ครับ`; `สะดวกตอนเที่ยงไหมครับ → เที่ยงได้ครับ`; `ตอนเที่ยงช่างเข้าห้องได้ไหมครับ → เข้าได้ครับ`.
  - `d7`: `มีอะไรให้ช่วยไหมครับ → ลิฟต์ใช้ไม่ได้ครับ`; `บ่ายโมงสะดวกไหมครับ → บ่ายโมงได้ครับ`; `เข้าห้องได้ไหมครับ → เข้าได้ครับ`.
  - `gate`: `แอร์ใช้ได้ไหมครับ → แอร์ใช้ไม่ได้ครับ`; `ช่างมาตอนเที่ยงครึ่งได้ไหมครับ → เที่ยงครึ่งได้ครับ`; `ให้ช่างเข้าห้องได้ไหมครับ → เข้าได้ครับ`.
  - `d30`: `ประตูใช้ได้ไหมครับ → ประตูใช้ไม่ได้ครับ`; `ช่างมาตอนบ่ายโมงได้ไหมครับ → บ่ายโมงได้ครับ`; `ให้ช่างเข้าตอนเที่ยงครึ่งได้ไหมครับ → เข้าได้ครับ`.
- Misconceptions: a time does not answer access, and permission is accepted only for the configured scenario; no real access permission is stored.
- Later recurrence: problem/time/access in L18/L21/L22/L23/L24.

### Week 6 — Correct problems and escalate repair

#### L16 `conv.w06.l16.clothing` — Clothing size and colour

- Scene: `scene.w06.l16.clothing_options`
- Outcome: choose an item and size, then ask whether another colour is available.
- Prerequisites: L01 ordering, L08 alternatives.
- New productive frame: `มี/{option}/ไหม/ครับ`.
- Active targets:
  - `r.shirt`: `จะรับอะไรครับ` — *jà ráp a-rai khráp* — “What would you like?” → `เอาเสื้อครับ` — *ao sûea khráp* — “I’ll take a shirt.”
  - `r.size_l`: `ต้องการไซซ์อะไรครับ` — *dtâwng-gaan sái a-rai khráp* — “What size?” → `ไซซ์แอลครับ` — *sái aael khráp*.
  - `r.black`: `ตัวนี้ไซซ์แอลครับ` — *dtua níi sái aael khráp* — “This one is size L.” with black goal → `มีสีดำไหมครับ` — *mii sǐi dam mǎi khráp* — “Do you have black?”
- Model scene: P `สวัสดีครับ` → L `สวัสดีครับ` → P `จะรับอะไรครับ` → L `เอาเสื้อครับ` → P `ต้องการไซซ์อะไรครับ` → L `ไซซ์แอลครับ` → P `ตัวนี้ไซซ์แอลครับ` → L `มีสีดำไหมครับ` → P `มีสีดำครับ` → L `ขอบคุณครับ`.
- Controlled substitution: `มีไซซ์เอ็มไหมครับ` — *mii sái em mǎi khráp*. The four new active slot values are `เสื้อ`, `ไซซ์แอล`, `ไซซ์เอ็ม` and `สีดำ`.
- Reserved variants:
  - `d1`: `จะรับเสื้อไหมครับ → เอาเสื้อครับ`; `ไซซ์แอลใช่ไหมครับ → ไซซ์แอลครับ`; `ไซซ์แอลตัวนี้ครับ → มีสีดำไหมครับ`.
  - `d7`: `ต้องการเสื้อไหมครับ → เอาเสื้อครับ`; `ไซซ์เอ็มหรือไซซ์แอลครับ → ไซซ์แอลครับ`; `ตัวนี้สีดำครับ → มีไซซ์เอ็มไหมครับ`.
  - `gate`: `รับเสื้อไหมครับ → เอาเสื้อครับ`; context `goal M` + `ต้องการไซซ์อะไรครับ → ไซซ์เอ็มครับ`; `ตัวนี้ไซซ์เอ็มครับ → มีสีดำไหมครับ`.
  - `d30`: `เอาเสื้อไหมครับ → เอาเสื้อครับ`; context `goal M` + `ไซซ์แอลหรือไซซ์เอ็มครับ → ไซซ์เอ็มครับ`; `ตัวนี้สีดำครับ → มีไซซ์แอลไหมครับ`.
- Misconceptions: item, size and colour turns are separated; alternative answers follow the visible goal, not a hidden personal preference.
- Later recurrence: item attributes and wrong-item correction in L17/L23/L24.

#### L17 `conv.w06.l17.delivery_correction` — Correct a wrong or incomplete delivery

- Scene: `scene.w06.l17.delivery_correction`
- Outcome: reject the wrong order, name a missing bottle and correct a price.
- Prerequisites: L02 water, L08–L09 quantity/payment, L14 delivery, L16 item distinction.
- New productive frame: `ต้องเป็น/{correct detail}/ครับ`.
- Active targets:
  - `r.wrong_order`: `ของที่สั่งใช่อันนี้ไหมครับ` — *khǎawng thîi sàng châi an níi mǎi khráp* — “Is this what you ordered?” → `อันนี้ไม่ใช่ที่สั่งครับ` — *an níi mâi châi thîi sàng khráp*.
  - `r.missing_water`: `มีอะไรขาดไหมครับ` — *mii a-rai khàat mǎi khráp* — “Is anything missing?” → `ขาดน้ำหนึ่งขวดครับ` — *khàat náam nùeng khùat khráp*.
  - `r.correct_price`: `ทั้งหมดหนึ่งร้อยบาทครับ` — *tháng-mòt nùeng rói bàat khráp* — “The total is 100 baht.” → `ต้องเป็นแปดสิบบาทครับ` — *dtâwng bpen bpàaet-sìp bàat khráp*.
- Model scene: P `สวัสดีครับ` → L `สวัสดีครับ` → P `ของที่สั่งใช่อันนี้ไหมครับ` → L `อันนี้ไม่ใช่ที่สั่งครับ` → P `มีอะไรขาดไหมครับ` → L `ขาดน้ำหนึ่งขวดครับ` → P `ทั้งหมดหนึ่งร้อยบาทครับ` → L `ต้องเป็นแปดสิบบาทครับ` → P `ขอตรวจอีกครั้งครับ` → L `ได้ครับ` → P `ขอโทษครับ` → L `ไม่เป็นไรครับ`.
- Controlled substitution: `ต้องเป็นไซซ์แอลครับ` — *dtâwng bpen sái aael khráp*.
- Reserved variants:
  - `d1`: `อันนี้ของคุณใช่ไหมครับ → อันนี้ไม่ใช่ที่สั่งครับ`; `มีน้ำครบไหมครับ → ขาดน้ำหนึ่งขวดครับ`; `ไซซ์เอ็มใช่ไหมครับ → ต้องเป็นไซซ์แอลครับ`.
  - `d7`: `ของที่สั่งใช่อันนี้ไหมครับ → ไม่ใช่ครับ`; `มีอะไรขาดไหมครับ → น้ำหนึ่งขวดครับ`; `ราคาเป็นหนึ่งร้อยบาทครับ → ต้องเป็นแปดสิบบาทครับ`.
  - `gate`: `เอาอันนี้ใช่ไหมครับ → อันนี้ไม่ใช่ที่สั่งครับ`; `น้ำครบไหมครับ → ขาดน้ำหนึ่งขวดครับ`; `รวมหนึ่งร้อยบาทครับ → ต้องเป็นแปดสิบบาทครับ`.
  - `d30`: `อันนี้ใช่ไหมครับ → อันนี้ไม่ใช่ที่สั่งครับ`; `ขาดอะไรครับ → ขาดน้ำหนึ่งขวดครับ`; `ต้องเป็นหนึ่งร้อยบาทใช่ไหมครับ → ต้องเป็นแปดสิบบาทครับ`.
- Misconceptions: price correction is not bargaining; `ลดหน่อยได้ไหมครับ` is wrong in an error-correction context.
- Later recurrence: wrong/missing/correct-detail frames in L18/L23/L24.

#### L18 `conv.w06.l18.repair_escalation` — Confirm and change channel

- Scene: `scene.w06.l18.repair_escalation`
- Outcome: confirm one detail, request English, then ask the partner to type into a translation app after ordinary repair has failed.
- Prerequisites: required warm-up of all L03 moves; L12 time; L14 lobby; L17 correction.
- New productive frame: `หมายถึง/{detail}/ใช่ไหม/ครับ`.
- Active targets:
  - `r.confirm_lobby`: `ฝากไว้ที่ล็อบบี้ตอนเที่ยงครึ่งครับ` → `หมายถึงล็อบบี้ใช่ไหมครับ` — *mǎai-thʉ̌ng lóp-bîi châi mǎi khráp*.
  - `r.ask_english`: after one failed slow/repeat attempt, `ตอนเที่ยงครึ่งครับ` → `พูดภาษาอังกฤษได้ไหมครับ` — *phûut phaa-sǎa ang-grìt dâai mǎi khráp*.
  - `r.type_translate`: `พูดภาษาอังกฤษไม่เก่งครับ` — *phûut phaa-sǎa ang-grìt mâi gèng khráp* — “I don’t speak English well.” → `ช่วยพิมพ์ในแอปแปลภาษาได้ไหมครับ` — *chûai phim nai àep bplaae phaa-sǎa dâai mǎi khráp*.
- Model scene: P `ฝากไว้ที่ล็อบบี้ตอนเที่ยงครึ่งครับ` → L `ไม่เข้าใจครับ` → P, slower TTS `ฝากไว้ที่ล็อบบี้ครับ` → L `พูดอีกครั้งได้ไหมครับ` → P, slower TTS `ฝากไว้ที่ล็อบบี้ตอนเที่ยงครึ่งครับ` → L `หมายถึงล็อบบี้ใช่ไหมครับ` → P `ใช่ครับ ตอนเที่ยงครึ่งครับ` → L, context `time still unclear after ordinary repair` `พูดภาษาอังกฤษได้ไหมครับ` → P `พูดภาษาอังกฤษไม่เก่งครับ` → L `ช่วยพิมพ์ในแอปแปลภาษาได้ไหมครับ` → P `ได้ครับ` → `[event: partner types; no text is captured]` → P `ฝากไว้ที่ล็อบบี้ตอนเที่ยงครึ่งครับ` → L `หมายถึงเที่ยงครึ่งใช่ไหมครับ` → P `ใช่ครับ`.
- Controlled substitution: `หมายถึงบ่ายโมงใช่ไหมครับ` — *mǎai-thʉ̌ng bàai moong châi mǎi khráp*.
- Reserved variants:
  - `d1`: `ฝากไว้ที่ห้องหนึ่งสองสามครับ → หมายถึงห้องหนึ่งสองสามใช่ไหมครับ`; `มีอะไรให้ช่วยไหมครับ [ordinary repair failed] → พูดภาษาอังกฤษได้ไหมครับ`; `พูดภาษาอังกฤษไม่เก่งครับ → พิมพ์ในแอปแปลภาษาได้ไหมครับ`.
  - `d7`: `เจอกันตอนเที่ยงครึ่งครับ → หมายถึงเที่ยงครึ่งใช่ไหมครับ`; `พูดภาษาไทยได้ไหมครับ [need channel switch] → พูดภาษาอังกฤษได้ไหมครับ`; `จะให้ช่วยอย่างไรครับ → ช่วยพิมพ์ในแอปแปลภาษาได้ไหมครับ`.
  - `gate`: `ช่างจะมาตอนบ่ายโมงครับ → หมายถึงบ่ายโมงใช่ไหมครับ`; `เข้าใจไหมครับ [ordinary repair failed] → พูดภาษาอังกฤษได้ไหมครับ`; `พูดภาษาอังกฤษไม่ได้ครับ → ช่วยพิมพ์ในแอปแปลภาษาได้ไหมครับ`.
  - `d30`: `ให้ส่งที่ล็อบบี้ครับ → หมายถึงล็อบบี้ใช่ไหมครับ`; context `ordinary repair failed` + `ตอนบ่ายโมงครับ → พูดภาษาอังกฤษได้ไหมครับ`; `พูดภาษาอังกฤษไม่ได้ครับ → พิมพ์ในแอปแปลภาษาได้ไหมครับ`.
- Privacy boundary: the app neither opens, reads nor stores translation-app text. No phone, app content or identifier is stored.
- Misconceptions: L03 remains the first strategy; English/typing are escalation choices only after the scenario says ordinary repair failed.
- Later recurrence: confirmation in L20/L22/L24; channel switching accepted as a rescue move in L19–L24.

### Week 7 — Communicate health facts and summon help without medical advice

#### L19 `conv.w07.l19.pharmacy_facts` — Fictional symptoms and a safe uncertainty response

- Scene: `scene.w07.l19.pharmacy_symptoms`
- Outcome: state two simple symptoms inside an explicitly fictional role card and safely say that the role is unsure about drug allergy.
- Prerequisites: L10 `ผม`, L18 clarification, taught `มี/ไม่/อะไร/ไหม`.
- New productive frame: `ผม/{health fact}/ครับ`.
- Active targets:
  - `r.headache`: `มีอาการอะไรครับ` — *mii aa-gaan a-rai khráp* — “What symptoms do you have?” → `ผมปวดหัวครับ` — *phǒm bpùat hǔa khráp* — “I have a headache.”
  - `r.fever`: `มีไข้ไหมครับ` — *mii khâi mǎi khráp* — “Do you have a fever?” → `ผมมีไข้ครับ` — *phǒm mii khâi khráp* — “I have a fever.”
  - `r.allergy_unsure`: `แพ้ยาอะไรไหมครับ` — *pháe yaa à-rai mǎi khráp* — “Are you allergic to any medicine?” → `ผมไม่แน่ใจครับ` — *phǒm mâi nâe-jai khráp* — “I’m not sure.”
- Before playback the UI shows: “Fictional role: this person has a headache and fever and is unsure about drug allergy. Do not treat these as facts about you.”
- Model scene: P `สวัสดีครับ` → L `สวัสดีครับ` → P `มีอาการอะไรครับ` → L `ผมปวดหัวครับ` → P `มีไข้ไหมครับ` → L `ผมมีไข้ครับ` → P `แพ้ยาอะไรไหมครับ` → L `ผมไม่แน่ใจครับ` → P `เข้าใจแล้วครับ` → L `ขอบคุณครับ`.
- Controlled substitution: `ผมปวดท้องครับ` — *phǒm bpùat thóong khráp*.
- Reserved variants:
  - `d1`: fictional card `headache` + `มีอาการปวดหัวไหมครับ → ปวดหัวครับ`; fictional card `fever` + `มีไข้ไหมครับ → มีครับ`; fictional card `allergy unknown` + `แพ้ยาอะไรครับ → ผมไม่แน่ใจครับ`.
  - `d7`: fictional card `stomach ache` + `ปวดท้องไหมครับ → ผมปวดท้องครับ`; fictional card `fever` + `มีอาการอะไรครับ → มีไข้ครับ`; fictional card `allergy unknown` + `แพ้อะไรไหมครับ → ไม่แน่ใจครับ`.
  - `gate`: fictional card `headache` + `ปวดหัวไหมครับ → ผมปวดหัวครับ`; fictional card `fever` + `มีอาการอะไรครับ → ผมมีไข้ครับ`; fictional card `allergy unknown` + `แพ้ยาไหมครับ → ผมไม่แน่ใจครับ`.
  - `d30`: fictional card `stomach ache` + `ปวดหัวหรือปวดท้องครับ → ผมปวดท้องครับ`; fictional card `fever` + `มีอาการปวดหัวหรือมีไข้ครับ → ผมมีไข้ครับ`; fictional card `allergy unknown` + `แพ้ยาอะไรไหมครับ → ไม่แน่ใจครับ`.
- Safety/privacy: all scored production is fictional role-play. The course stores only value-independent item IDs and never asks for or records the learner's symptoms or allergy. A separate optional unscored “about you” rehearsal permits `ไม่แน่ใจครับ` or skip; no disease/allergy choice is persisted.
- Misconceptions: no alternative medical fact is used as a distractor.
- Later recurrence: the three fictional-role functions recur in W7 consolidation and a post-course health-language rehearsal, under the safety exemption in the parent specification.

#### L20 `conv.w07.l20.label_language` — Confirm two axes on a fictional label

- Scene: `scene.w07.l20.label_language`
- Outcome: confirm an amount and a timing phrase shown on a visibly fictional label card.
- Prerequisites: L18 confirmation and numbers one–two. New bounded values are `หนึ่งเม็ด`, `สองเม็ด`, `หลังอาหาร`, `ก่อนนอน`—exactly four.
- New productive frame: `{instruction}/ใช่ไหม/ครับ`.
- Active targets:
  - `r.each_time`: `บนฉลากเขียนว่าครั้งละหนึ่งเม็ดครับ` — *bon chà-làak khǐan wâa khráng lá nùeng mét khráp* → `ครั้งละหนึ่งเม็ดใช่ไหมครับ` — *khráng lá nùeng mét châi mǎi khráp*.
  - `r.timing`: `บนฉลากเขียนว่าหลังอาหารครับ` → `หลังอาหารใช่ไหมครับ` — *lǎng aa-hǎan châi mǎi khráp*.
- Model scene: P `นี่เป็นตัวอย่างภาษาเท่านั้นครับ` → L `เข้าใจครับ` → P `บนฉลากตัวอย่างเขียนว่าครั้งละหนึ่งเม็ดครับ` → L `ครั้งละหนึ่งเม็ดใช่ไหมครับ` → P `ใช่ครับ` → P `บนฉลากตัวอย่างเขียนว่าหลังอาหารครับ` → L `หลังอาหารใช่ไหมครับ` → P `ใช่ครับ` → L `ขอบคุณครับ`.
- Controlled substitution: `ก่อนนอนใช่ไหมครับ` — *gàawn naawn châi mǎi khráp*.
- Reserved variants:
  - `d1`: `บนฉลากตัวอย่างเขียนว่าครั้งละสองเม็ดครับ → ครั้งละสองเม็ดใช่ไหมครับ`; `บนฉลากตัวอย่างเขียนว่าหลังอาหารครับ → หลังอาหารใช่ไหมครับ`; `บนฉลากตัวอย่างเขียนว่าก่อนนอนครับ → ก่อนนอนใช่ไหมครับ`.
  - `d7`: `ฉลากตัวอย่างนี้เขียนว่าครั้งละหนึ่งเม็ดครับ → หนึ่งเม็ดใช่ไหมครับ`; `ฉลากตัวอย่างนี้เขียนว่าก่อนนอนครับ → ก่อนนอนใช่ไหมครับ`; `บนฉลากตัวอย่างเขียนว่าสองเม็ด หลังอาหารครับ → สองเม็ด หลังอาหารใช่ไหมครับ`.
  - `gate`: `ฉลากตัวอย่างเขียนว่าครั้งละสองเม็ดครับ → สองเม็ดใช่ไหมครับ`; `ฉลากตัวอย่างเขียนว่าหลังอาหารครับ → หลังอาหารใช่ไหมครับ`; `บนฉลากตัวอย่างเขียนว่าหนึ่งเม็ด ก่อนนอนครับ → หนึ่งเม็ด ก่อนนอนใช่ไหมครับ`.
  - `d30`: `ตัวอย่างนี้เขียนว่าครั้งละหนึ่งเม็ดครับ → ครั้งละหนึ่งเม็ดใช่ไหมครับ`; `ตัวอย่างนี้เขียนว่าก่อนนอนครับ → ก่อนนอนใช่ไหมครับ`; `ฉลากตัวอย่างเขียนว่าสองเม็ด หลังอาหารครับ → สองเม็ด หลังอาหารใช่ไหมครับ`.
- Safety: every card says “Fictional language example—never apply this to real medicine. Follow the actual label and pharmacist/clinician.” The course does not choose a medicine, decide a dose or verify comprehension for safety.
- Misconceptions: amount and timing are distinct axes; no prompt asks the learner to invent or choose a dose, and `เข้าใจครับ` is not evidence that a real label was understood.
- Later recurrence: one compound fictional-label confirmation in the final gate and L24 consolidation; no medicine name appears.

#### L21 `conv.w07.l21.urgent_help` — Get urgent help and give a location

- Scene: `scene.w07.l21.urgent_help`
- Outcome: say that someone is unconscious, give a location and ask another person to call 1669.
- Prerequisites: L06 location, L18 repair, `มีคน`, digits one/six/nine.
- New productive frame: `ช่วย/{action}/ให้หน่อย/ครับ`.
- Active targets:
  - `r.emergency_fact`: `มีอะไรให้ช่วยไหมครับ` → `มีคนหมดสติครับ` — *mii khon mòt sà-dtì khráp* — “Someone is unconscious.”
  - `r.location`: fictional location card `Ekkamai Station, Exit 2`; `อยู่ที่ไหนครับ` → `อยู่ที่สถานีเอกมัย ทางออกสองครับ` — *yùu thîi sà-thǎa-nii èek-gà-mai thaang òrk sǎawng khráp*.
  - `r.call_1669`: `ต้องการให้ช่วยอะไรครับ` → `ช่วยโทรหนึ่งหกหกเก้าให้หน่อยครับ` — *chûai thoo nùeng hòk hòk gâao hâi nòi khráp* — “Please call 1669.”
- Before the model, the UI explicitly labels every person and place as fictional and preteaches `ทางออกสอง` as a location slot.
- Model scene: P `มีอะไรให้ช่วยไหมครับ` → L `มีคนหมดสติครับ` → P `อยู่ที่ไหนครับ` → L `อยู่ที่สถานีเอกมัย ทางออกสองครับ` → P `สถานีเอกมัย ทางออกสองใช่ไหมครับ` → L `ใช่ครับ` → P `ต้องการให้ช่วยอะไรครับ` → L `ช่วยโทรหนึ่งหกหกเก้าให้หน่อยครับ` → P `ผมจะโทรตอนนี้ครับ` → L `ขอบคุณครับ`.
- Controlled substitution: `ช่วยเรียกรถพยาบาลให้หน่อยครับ` — *chûai rîak rót phá-yaa-baan hâi nòi khráp*.
- Reserved variants:
  - `d1`: `มีอะไรให้ช่วยไหมครับ → คนหมดสติครับ`; fictional location card + `อยู่ที่ไหนครับ → สถานีเอกมัย ทางออกสองครับ`; `ให้ช่วยอะไรครับ → ช่วยโทรหนึ่งหกหกเก้าให้หน่อยครับ`.
  - `d7`: `เกิดอะไรขึ้นครับ → คนหมดสติครับ`; fictional location card + `อยู่ตรงไหนครับ → อยู่ที่สถานีเอกมัย ทางออกสองครับ`; `ต้องการให้ช่วยอะไรครับ → โทรหนึ่งหกหกเก้าให้หน่อยครับ`.
  - `gate`: `เกิดอะไรขึ้นครับ → มีคนหมดสติครับ`; `อยู่ที่ไหนครับ → อยู่ที่สถานีเอกมัย ทางออกสองครับ`; `ต้องการให้ช่วยอะไรครับ → ช่วยเรียกรถพยาบาลให้หน่อยครับ`.
  - `d30`: `มีอะไรให้ช่วยไหมครับ → มีคนหมดสติที่สถานีเอกมัยครับ`; `อยู่ที่ไหนครับ → สถานีเอกมัย ทางออกสองครับ`; `ให้ช่วยอะไรครับ → ช่วยเรียกรถพยาบาลให้หน่อยครับ`.
- Safety: the first card says “If this is real, stop the lesson and seek emergency help now.” It never places a call, diagnoses consciousness, teaches first aid or represents these phrases as a complete 1669 call. Official NIEM guidance says a caller should provide the emergency, exact location/route and contact number; this lesson practises only the first two language functions plus asking a nearby person to call.
- Misconceptions: emergency fact, location and help request remain separate functions; the location confirmation cannot appear before the fictional learner supplies Exit 2, and no alternative medical fact is used as a distractor.
- Later recurrence: the location frame recurs in L24; emergency fact and call request recur only in W7 consolidation and an explicitly marked post-course emergency-language rehearsal under the safety exemption.

### Week 8 — Finish service functions and integrate

#### L22 `conv.w08.l22.hours_services` — Opening hours and services

- Scene: `scene.w08.l22.opening_services`
- Outcome: ask opening and closing times and whether a service exists.
- Prerequisites: L12 time, L16 `มี...ไหม`, L18 confirmation.
- New productive family: `{day?}/เปิด|ปิด/กี่โมง/ครับ`.
- Active targets:
  - `r.open_time`: `event: learner wants tomorrow's opening time` → `พรุ่งนี้เปิดกี่โมงครับ` — *phrûng-níi bpòoet gìi moong khráp*. Recognition reply: `พรุ่งนี้เปิดเก้าโมงครับ` — “Tomorrow we open at nine.”
  - `r.close_time`: `event: learner wants today's closing time` → `วันนี้ปิดกี่โมงครับ` — *wan-níi bpìt gìi moong khráp*. Recognition reply: `วันนี้ปิดหกโมงเย็นครับ` — “Today we close at six p.m.”
  - `r.service`: `event: learner wants to know whether laundry service exists` → `มีบริการซักผ้าไหมครับ` — *mii baw-rí-gaan sák phâa mǎi khráp*. Recognition replies: `มีครับ` / `ไม่มีครับ`.
- Model scene: P `สวัสดีครับ` → L `สวัสดีครับ` → L `พรุ่งนี้เปิดกี่โมงครับ` → P `พรุ่งนี้เปิดเก้าโมงครับ` → L `วันนี้ปิดกี่โมงครับ` → P `วันนี้ปิดหกโมงเย็นครับ` → L `มีบริการซักผ้าไหมครับ` → P `มีครับ` → L `ขอบคุณครับ` → P `ยินดีครับ`.
- Controlled substitution: `วันนี้เปิดกี่โมงครับ` — *wan-níi bpòoet gìi moong khráp*.
- Reserved variants:
  - `d1`: `event: ask today's opening time → L วันนี้เปิดกี่โมงครับ`; `event: ask tomorrow's closing time → L พรุ่งนี้ปิดกี่โมงครับ`; `L มีซักผ้าไหมครับ → P มีครับ`.
  - `d7`: `event: ask tomorrow's opening time → L พรุ่งนี้เปิดกี่โมงครับ`; `event: ask today's closing time → L วันนี้ปิดกี่โมงครับ`; `L มีบริการซักผ้าไหมครับ → P ไม่มีครับ`.
  - `gate`: `event: ask today's opening time with short form → L เปิดกี่โมงครับ`; `event: ask tomorrow's closing time with short form → L ปิดกี่โมงครับ`; `L มีซักผ้าไหมครับ → P ไม่มีครับ`.
  - `d30`: `event: ask opening time with day already established → เปิดกี่โมงครับ`; `event: ask closing time with day already established → ปิดกี่โมงครับ`; `event: ask whether laundry exists with shorter taught form → มีซักผ้าไหมครับ`.
- Misconceptions: opening, closing and service availability are different learner-led requests. Each request is followed by a separate audio cue-intent item for the actual answer; event initiation never counts as audio comprehension.
- Later recurrence: all three in L24 consolidation and final gate.

#### L23 `conv.w08.l23.service_problem` — Wrong or missing service

- Scene: `scene.w08.l23.service_problem`
- Outcome: reject an item that is not yours, report a missing towel and ask reception to check.
- Prerequisites: L13–L17, L21 help frame.
- Privacy boundary: fixed fictional rooms 123 and 213 only.
- New productive frame: `ยังไม่ได้/{item}/ครับ`.
- Active targets:
  - `r.wrong_item`: `พัสดุนี้ของคุณใช่ไหมครับ` → `อันนี้ไม่ใช่ของผมครับ` — *an níi mâi châi khǎawng phǒm khráp*.
  - `r.missing_item`: `ได้รับผ้าเช็ดตัวแล้วใช่ไหมครับ` → `ยังไม่ได้ผ้าเช็ดตัวครับ` — *yang mâi dâai phâa chét dtua khráp*.
  - `r.check`: `ต้องการให้ช่วยอะไรครับ` → `ช่วยตรวจสอบให้หน่อยครับ` — *chûai dtrùat-sàawp hâi nòi khráp*.
- Model scene: P `พัสดุนี้ของคุณใช่ไหมครับ` → L `อันนี้ไม่ใช่ของผมครับ` → P `เป็นของห้องสองหนึ่งสามครับ` → L `ผมอยู่ห้องหนึ่งสองสามครับ` → P `ได้รับผ้าเช็ดตัวแล้วใช่ไหมครับ` → L `ยังไม่ได้ผ้าเช็ดตัวครับ` → P `ต้องการให้ช่วยอะไรครับ` → L `ช่วยตรวจสอบให้หน่อยครับ` → P `ผมจะตรวจสอบให้ครับ` → L `ขอบคุณครับ`.
- Controlled substitution: `ยังไม่ได้พัสดุครับ` — *yang mâi dâai phát-sà-dù khráp*.
- Reserved variants:
  - `d1`: context `wrong item` + `มีอะไรให้ช่วยไหมครับ → ไม่ใช่ของผมครับ`; `ได้ผ้าเช็ดตัวแล้วใช่ไหมครับ → ยังไม่ได้ผ้าเช็ดตัวครับ`; `ต้องการให้ช่วยอะไรครับ → ช่วยตรวจสอบให้หน่อยครับ`.
  - `d7`: `อันนี้ของคุณไหมครับ → อันนี้ไม่ใช่ของผมครับ`; `มีอะไรอีกไหมครับ → ยังไม่ได้พัสดุครับ`; `ต้องการให้ช่วยอะไรครับ → ช่วยตรวจสอบอันนี้ให้หน่อยครับ`.
  - `gate`: `ของคุณใช่ไหมครับ → อันนี้ไม่ใช่ของผมครับ`; `ได้พัสดุแล้วใช่ไหมครับ → ยังไม่ได้พัสดุครับ`; `ต้องการให้ช่วยอะไรครับ → ตรวจสอบให้หน่อยครับ`.
  - `d30`: `ของคุณใช่ไหมครับ → ไม่ใช่ของผมครับ`; `ได้ผ้าเช็ดตัวแล้วใช่ไหมครับ → ยังไม่ได้ครับ`; `มีอะไรให้ช่วยไหมครับ → ช่วยตรวจสอบอันนี้ให้หน่อยครับ`.
- Misconceptions: wrong ownership, missing item and requested action are separate active functions. Quantity remains recognition-only in reserved service contexts and does not create a fourth active target.
- Later recurrence: all three in L24 and post-course maintenance.

#### L24 `conv.w08.l24.bangkok_day` — Bangkok-day capstone lesson

- Scene: `scene.w08.l24.bangkok_day`
- Outcome: retrieve a taxi stop decision, a market quantity and a delivery drop-off across three clearly separated mini-scenes.
- Prerequisites: L01–L23 and W7 gate; Phase 1 reading is irrelevant.
- New frames: zero. New atoms: zero.
- Anchor targets:
  - `r.stop_here`: `ถึงสถานีเอกมัยแล้วครับ` → `จอดตรงนี้ครับ`.
  - `r.market_quantity`: `มะม่วงถุงละห้าสิบบาทครับ` → `เอาสองถุงครับ`.
  - `r.delivery_dropoff`: `ให้ส่งที่ห้องไหมครับ` → `ฝากไว้ที่ล็อบบี้ครับ`.
- Model mini-scene A, taxi: P `สวัสดีครับ` → P `ถึงสถานีเอกมัยแล้วครับ` → L `จอดตรงนี้ครับ` → L `ขอบคุณครับ`.
- `[break: visible “Market stop — start when ready” card; previous transcript collapses]`.
- Model mini-scene B, market: P `มะม่วงถุงละห้าสิบบาทครับ` → L `เอาสองถุงครับ` → P `ได้ครับ` → L `ขอบคุณครับ`.
- `[break: visible “Delivery handoff — start when ready” card; previous transcript collapses]`.
- Model mini-scene C, delivery: P `ให้ส่งที่ห้องไหมครับ` → L `ฝากไว้ที่ล็อบบี้ครับ` → P `ได้ครับ` → L `ขอบคุณครับ`.
- Controlled substitution: at a separately labelled known-price market practice, replace two bags with `เอาสามถุงครับ`; this uses only L09 language and no reserved assessment signature.
- Reserved variants:
  - `d1`: `ถึงแล้วครับ → จอดตรงนี้ครับ`; `ห้าสิบบาทครับ → เอาหนึ่งถุงครับ`; `ให้ฝากไว้ที่ไหนครับ → ฝากไว้ที่หน้าเคาน์เตอร์ครับ`.
  - `d7`: `ตรงนี้ใช่ไหมครับ → จอดตรงนี้ครับ`; `ถุงละสี่สิบบาทครับ → เอาสามถุงครับ`; `ให้ฝากไว้ที่ห้องไหมครับ → ฝากไว้ที่ห้องครับ`.
  - `gate`: `ไปทางไหนดีครับ → ตรงไปครับ`; `ห้าสิบบาทครับ → เอาสามถุงครับ`; `ตอนนี้ฝากไว้ที่ไหนครับ → ฝากไว้ที่หน้าเคาน์เตอร์ครับ`.
  - `d30`: `แล้วไปทางไหนครับ → เลี้ยวขวาข้างหน้าครับ`; `ถุงละสี่สิบบาทครับ → เอาสองถุงครับ`; `ให้ส่งที่ห้องสองหนึ่งสามไหมครับ → ฝากไว้ที่ล็อบบี้ครับ`.
- Misconceptions: mini-scene transitions are semantically explicit; answers from the previous scene become wrong-function distractors only after the new context card is acknowledged.
- Later recurrence: schedules final `d1`, `d7` and `d30`; no lesson completion is revoked by a later miss.

## D. Exact weekly consolidation content

Every consolidation uses only completed material, keeps Thai text hidden on the first audio attempt and is required before its gate.

| Week | Six spoken prompts | Two controlled transfers | Weakness repair pool |
|---|---|---|---|
| 1 | order this; no spice; dine in; water; bill; one repair chosen by explicit goal | chicken-basil order; slow repetition | L01–L03 cue/response pairs |
| 2 | destination; meter; straight; turn; stop; ask BTS | toilet location; right-hand soi | L01–L06, weighted to transport |
| 3 | café order; iced; no sweet; no bag; card; market quantity | latte qualifier; QR payment | L01–L09, fixed-price/bargain contrast compulsory |
| 4 | name; UK; job; limited Thai; counter-time; meeting plan | shorter job; new taught place/time | L03/L10–L12 |
| 5 | keycard problem; room; ID handover; lobby; aircon; access | lift problem; alternate appointment | L06/L12–L15 |
| 6 | clothing item; size; colour; wrong order; missing item; confirm meaning | correct size; translation-app switch | L03/L13–L18 |
| 7 | fictional headache; fictional fever; safe uncertainty; amount; timing; fictional urgent location | fictional-label confirmation; ambulance request | L18–L21; every health/emergency card is explicitly fictional and medical alternatives are never trick distractors |
| 8 | opening; closing; service; wrong item; missing item; check | three-scene Bangkok shuffle; one repair escalation | all units, at least one item from each |

The four cue-intent and four response-selection items are deterministically drawn from a separate consolidation-only practice form while excluding every `d1`, `d7`, `gate-a`, `gate-b` and `d30` signature. The weakness block also uses only practice-bank combinations.

## E. Recurrence and dependency matrix

| Source lesson | +1 | +7 changed cue/slot | Later same-domain use | Later cross-domain use | +30 eligibility |
|---|---|---|---|---|---|
| L01 food basics | W1D2 | W2D1 | L07/L24 food | L08/L09/L16 item frame | W1 unit +30, final +30 |
| L02 options | W1D3 | W2D2 | L07/L24 | L08 payment/quantity | W1 unit +30, final +30 |
| L03 repair | W1D4 | W2D3 | L11/L18 | available L04–L24 | W1 unit +30, final +30 |
| L04 destination | W2D2 | W3D1 | L05/L24 | L10/L12/L21 location | W2 unit +30, final +30 |
| L05 route | W2D3 | W3D2 | L06/L24 | L14 logistics | W2 unit +30, final +30 |
| L06 street directions | W2D4 | W3D3 | L21/L24 | L13–L15 condo | W2 unit +30, final +30 |
| L07 café | W3D2 | W4D1 | L24 food | L16 option frame | W3 unit +30, final +30 |
| L08 checkout | W3D3 | W4D2 | L09/L24 | L14/L17 payment | W3 unit +30, final +30 |
| L09 market | W3D4 | W4D3 | L24 market | L17/L20/L23 quantity | W3 unit +30, final +30 |
| L10 introduction | W4D2 | W5D1 | L11/L12 | L13 identity routine | W4 unit +30, final +30 |
| L11 limited Thai | W4D3 | W5D2 | L18 | rescue in every later domain | W4 unit +30, final +30 |
| L12 lunch plan | W4D4 | W5D3 | L24 social mix | L15/L18/L22 time | W4 unit +30, final +30 |
| L13 reception | W5D2 | W6D1 | L14/L15/L23 | L17 correction | W5 unit +30, final +30 |
| L14 delivery | W5D3 | W6D2 | L17/L23/L24 | L18 confirmation | W5 unit +30, final +30 |
| L15 maintenance | W5D4 | W6D3 | L23/L24 | L18/L21/L22 | W5 unit +30, final +30 |
| L16 clothing | W6D2 | W7D1 | L17/L24 shopping | L23 wrong-item attributes | W6 unit +30, final +30 |
| L17 correction | W6D3 | W7D2 | L23/L24 | L18 confirm detail | W6 unit +30, final +30 |
| L18 escalation | W6D4 | W7D3 | L19–L24 rescue | L20 label confirmation | W6 unit +30, final +30 |
| L19 pharmacy facts | W7D2 | W8D1 | W7/post-course health-language rehearsal | safety exception: no artificial non-health transfer | W7 unit +30, final +30 |
| L20 label language | W7D3 | W8D2 | L24/final gate | number/time confirmation | W7 unit +30, final +30 |
| L21 urgent help | W7D4 | W8D3 | L24 location | help frame in L23 | W7 unit +30, final +30 |
| L22 hours/services | W8D2 | post-course +7 | L24/final gate | time/service maintenance | W8/final +30 |
| L23 service problem | W8D3 | post-course +7 | L24 | L17 delivery correction contrast | W8/final +30 |
| L24 capstone | W8D4 | post-course +7 | maintenance | already cross-domain | final +30 |

This matrix is a minimum. The generated audit must expand every active response ID and cue family individually and fail if any row is satisfied by passive exposure rather than answer-before-reveal retrieval.

## F. Content safety boundary

- L19 uses fixed fictional role facts only, asks for no personal health data and never infers a condition.
- L20 is fictional label-language practice only and never recommends or validates a real dose.
- L21 is not an emergency protocol. It teaches three phrases and tells the learner to leave the lesson during a real emergency.
- Device TTS is rehearsal support, not a tool the learner should depend on in an emergency.
- The health unit hard-fails validation if it adds a diagnosis, medicine choice, suitability claim, contraindication check, first-aid instruction or pronunciation-safety claim.
- Official source basis for the emergency boundary: the [National Institute for Emergency Medicine's 1669 guidance](https://www.niems.go.th/1/SubWebsite/?id=38) identifies emergency symptoms, location/route and a caller contact number as information to provide. This course deliberately covers less than that full interaction.
