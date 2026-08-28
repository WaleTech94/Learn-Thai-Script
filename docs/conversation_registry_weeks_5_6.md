# Bangkok Conversation Foundation — Canonical cv1 Registry, Weeks 5–6

**Registry revision:** 1
**Date:** 2026-08-28
**Status:** binding machine registry
**Parent:** `docs/conversation_course_implementation_spec.md`
**Scope:** `cv1.lesson.w05.l13.reception` through `cv1.lesson.w06.l18.repair-escalation`

This file is the complete content authority for Weeks 5–6. Application code is not changed by it. A generated implementation may change representation, but not an ID, Thai payload, segment, pronunciation spelling, meaning, role, prerequisite, accepted set, option set, bank assignment, form manifest or recurrence assignment without incrementing this registry revision and the affected entity revisions.

## 1. Executable registry conventions

All records below have `revision:1`. Unless a row overrides a field, every Thai utterance record inherits:

```yaml
lang: th-TH
rate: 0.72
ttsText: exactly the Thai field with segmentation separators removed
speaker: male
register: short polite Bangkok service interaction
readingGate: false
audioModel: device-speech-synthesis
nativeAudioRequired: false
nativeReviewRequired: false
pronunciationScored: false
```

`slowRepairRate` is `0.58` and is permitted only after a first miss. A slash in `segments` marks a meaningful teaching chunk; joining the chunks must equal `thai`. Components in a segment are not independent modeled utterances and therefore do not carry a polite ending. Every complete modeled or selectable utterance ends `ครับ`. Context cards are visible before objective playback, state a configured goal without translating the cue, and are part of the normalized interaction signature.

Source-note codes are binding:

| Code | Meaning |
|---|---|
| `prior` | Recombines an atom explicitly taught in L01–L12; the prerequisite ID is named. |
| `author-a0` | Controlled, short, contemporary service Thai authored for this A0 course; no human or native review dependency is implied. |
| `loan-a0` | A common Bangkok loanword deliberately taught as one indivisible listening slot. |
| `privacy-fixture` | Fictional fixed practice data; no learner value is requested or stored. |
| `later-cross` | Uses an atom taught by the named later lesson before the cross-scene check becomes eligible. |

The exact option-set shape is:

```yaml
options: [one displayed accepted response, misconception 1, misconception 2]
```

Thus every objective response item has exactly three options. An accepted set may contain a natural contextual alternative not displayed in the option set. Misconception tags are drawn from `wrong-slot`, `wrong-function`, `wrong-stage`, `wrong-polarity`, `repeat-failed-strategy`, and `premature-close`.

The objective-expansion rule is binding:

- Partner-led interaction `X` expands, in order, to `X.intent` and `X.response`.
- Learner-led event interaction `X` expands to `X.initiate` and `X.partner-reply-intent`.
- A form manifest lists source interactions in serving order. Its exact objective manifest is the two objective IDs above for each source, in the same order.
- A source interaction belongs to one bank and one form only. Model interactions may be referenced by the lesson objective form because that form is teaching evidence, not a sealed transfer bank.
- `d1-a` may repeat a model signature only with `rehearsalOf`. No `d1-b`, `d7`, gate or `d30` signature may appear in a model, practice interaction, earlier bank, distractor or later transcript.

## 2. Lesson, function and scene registry

| Lesson ID | Scene ID | Function IDs | Outcome | Prerequisites | Duration |
|---|---|---|---|---|---:|
| `cv1.lesson.w05.l13.reception` | `cv1.scene.w05.l13.model` | `cv1.fn.reception.report-not-working`; `cv1.fn.reception.give-room`; `cv1.fn.reception.show-card` | Report a failed keycard, give a fictional room and hand over a generic ID card. | `cv1.gate.w04`; W2 location; W3 numbers one–three; L03 repair | 29 min |
| `cv1.lesson.w05.l14.delivery` | `cv1.scene.w05.l14.model` | `cv1.fn.delivery.give-location`; `cv1.fn.delivery.choose-dropoff`; `cv1.fn.payment.choose-method` | Give a fictional location, choose lobby drop-off and choose a taught payment method. | L13; L08 payment; W2 location | 29 min |
| `cv1.lesson.w05.l15.maintenance` | `cv1.scene.w05.l15.model` | `cv1.fn.maintenance.report-problem`; `cv1.fn.appointment.accept-time`; `cv1.fn.access.allow-entry` | Report a failed air conditioner, accept a time and allow technician access. | L13 frame; L12 times; L14 room/location | 29 min |
| `cv1.lesson.w06.l16.clothing` | `cv1.scene.w06.l16.model` | `cv1.fn.clothing.choose-item`; `cv1.fn.clothing.choose-size`; `cv1.fn.clothing.ask-option` | Choose a shirt and size, then ask whether black is available. | `cv1.gate.w05`; L01 `เอา`; W3 either/or recognition | 29 min |
| `cv1.lesson.w06.l17.delivery-correction` | `cv1.scene.w06.l17.model` | `cv1.fn.delivery.reject-wrong-order`; `cv1.fn.delivery.report-missing`; `cv1.fn.correction.correct-detail` | Reject a wrong order, report missing water and correct a fixed price. | L02 water; L08–L09 quantities/prices; L14; L16 | 29 min |
| `cv1.lesson.w06.l18.repair-escalation` | `cv1.scene.w06.l18.model` | `cv1.fn.repair.confirm-meaning`; `cv1.fn.repair.request-english`; `cv1.fn.repair.request-typed-translation` | After ordinary Week-1 repair fails, confirm a detail, try English, request typed translation and return to the original task. | L03 repair; L14 location; L15 time; L17 correction | 30 min |

## 3. Frame and slot registry

### 3.1 Frames

| Frame ID | Role | Template / exact realization | Segments | Prerequisites | Source |
|---|---|---|---|---|---|
| `cv1.frame.reception.not-working` | active | `{thing}ใช้ไม่ได้ครับ` | `{thing}/ใช้ไม่ได้/ครับ` | L03 `ไม่ได้`; slot taught before use | `author-a0` |
| `cv1.frame.reception.room-answer` | active | `ห้อง{room}ครับ` | `ห้อง/{room}/ครับ` | W3 one–three | `privacy-fixture` |
| `cv1.frame.social.here` | routine | `นี่ครับ` | `นี่/ครับ` | global routine | `prior` |
| `cv1.frame.delivery.location` | active | `อยู่{place}ครับ` | `อยู่/{place}/ครับ` | W2 location | `prior` |
| `cv1.frame.delivery.leave-at` | active | `ฝากไว้ที่{dropoff}ครับ` | `ฝากไว้/ที่{dropoff}/ครับ` | L14 | `author-a0` |
| `cv1.frame.payment.method-answer` | active | `{method}ครับ` | `{method}/ครับ` | L08 payment | `prior` |
| `cv1.frame.appointment.time-works` | active | `{time}ได้ครับ` | `{time}/ได้/ครับ` | L12 times | `prior` |
| `cv1.frame.access.allow-entry` | active | `เข้าได้ครับ` | `เข้า/ได้/ครับ` | L15 | `author-a0` |
| `cv1.frame.clothing.want-shirt` | active | `เอาเสื้อครับ` | `เอา/เสื้อ/ครับ` | L01 `เอา`; L16 shirt | `prior` |
| `cv1.frame.clothing.size-answer` | active | `{size}ครับ` | `{size}/ครับ` | L16 size slots | `author-a0` |
| `cv1.frame.clothing.option-available` | active | `มี{option}ไหมครับ` | `มี/{option}/ไหม/ครับ` | L16 | `author-a0` |
| `cv1.frame.delivery.wrong-order` | active | `อันนี้ไม่ใช่ที่สั่งครับ` | `อันนี้/ไม่ใช่/ที่สั่ง/ครับ` | L01 `อันนี้`; L17 | `author-a0` |
| `cv1.frame.delivery.missing-water` | active | `ขาดน้ำหนึ่งขวดครับ` | `ขาด/น้ำหนึ่งขวด/ครับ` | L02 water; L17 `ขาด` | `author-a0` |
| `cv1.frame.correction.correct-detail` | active | `ต้องเป็น{detail}ครับ` | `ต้องเป็น/{detail}/ครับ` | L17 | `author-a0` |
| `cv1.frame.repair.confirm-meaning` | active | `หมายถึง{detail}ใช่ไหมครับ` | `หมายถึง/{detail}/ใช่ไหม/ครับ` | L18; confirmation understood earlier | `author-a0` |
| `cv1.frame.repair.request-english` | active | `พูดภาษาอังกฤษได้ไหมครับ` | `พูดภาษาอังกฤษ/ได้ไหม/ครับ` | L03 request mechanism | `author-a0` |
| `cv1.frame.repair.type-translation` | active | `[ช่วย]พิมพ์ในแอปแปลภาษาได้ไหมครับ` | `[ช่วย]พิมพ์/ในแอปแปลภาษา/ได้ไหม/ครับ` | L18 | `author-a0` |

### 3.2 Slots

| Slot ID | Thai | Transliteration | English | Role | First taught | Source / privacy |
|---|---|---|---|---|---|---|
| `cv1.slot.thing.keycard` | คีย์การ์ด | khii-gàat | keycard | active slot | L13 | `loan-a0` |
| `cv1.slot.thing.lift` | ลิฟต์ | líp | lift | active slot | L13 substitution | `loan-a0` |
| `cv1.slot.card.id` | บัตร | bàt | ID/card | recognition slot | L13 | `author-a0`; no value captured |
| `cv1.slot.room.a` | หนึ่งสองสาม | nùeng sǎawng sǎam | fictional room 123 | active slot | L13 | `privacy-fixture`; fixed curriculum value |
| `cv1.slot.room.b` | สองหนึ่งสาม | sǎawng nùeng sǎam | fictional room 213 | active transfer slot | L13 | `privacy-fixture`; fixed curriculum value |
| `cv1.slot.place.lobby` | ล็อบบี้ | lóp-bîi | lobby | active slot | L14 | `loan-a0` |
| `cv1.slot.place.counter` | หน้าเคาน์เตอร์ | nâa khao-dtôoe | in front of the counter | active transfer slot | L14 | `loan-a0` |
| `cv1.slot.payment.qr` | คิวอาร์ | khio-aa | QR | reused active slot | L08 | `prior` |
| `cv1.slot.payment.cash` | เงินสด | ngoen-sòt | cash | reused active slot | L08 | `prior` |
| `cv1.slot.thing.aircon` | แอร์ | aae | air conditioner | active slot | L15 | `loan-a0` |
| `cv1.slot.time.noon` | เที่ยง | thîang | noon | reused slot | L12 | `prior` |
| `cv1.slot.time.half` | เที่ยงครึ่ง | thîang-khrʉ̂ng | 12:30 | reused slot | L12 | `prior` |
| `cv1.slot.time.one` | บ่ายโมง | bàai moong | 1 p.m. | reused slot | L12 | `prior` |
| `cv1.slot.clothing.item.shirt` | เสื้อ | sûea | shirt | active slot | L16 | `author-a0` |
| `cv1.slot.clothing.size.m` | ไซซ์เอ็ม | sái em | size M | active transfer slot | L16 | `loan-a0` |
| `cv1.slot.clothing.size.l` | ไซซ์แอล | sái aael | size L | active slot | L16 | `loan-a0` |
| `cv1.slot.clothing.colour.black` | สีดำ | sǐi dam | black | active slot | L16 | `author-a0` |
| `cv1.slot.delivery.water-one` | น้ำหนึ่งขวด | náam nùeng khùat | one bottle of water | reused slot | L02 | `prior` |
| `cv1.slot.price.eighty` | แปดสิบบาท | bpàaet-sìp bàat | 80 baht | reused slot | L01 | `prior` |
| `cv1.slot.price.hundred` | หนึ่งร้อยบาท | nùeng rói bàat | 100 baht | recognition slot | L17 | `author-a0` |
| `cv1.slot.repair.english` | ภาษาอังกฤษ | phaa-sǎa ang-grìt | English | active chunk | L18 | `author-a0` |
| `cv1.slot.repair.translation-app` | แอปแปลภาษา | àep bplaae phaa-sǎa | translation app | active chunk | L18 | `loan-a0`; no typed text stored |

L16 has exactly four new slot values: shirt, M, L and black. It contains no trousers, blue or additional size. L18 adds only `หมายถึง`, English, type and translation-app chunks. It contains no phone, phone number, day-frequency or medicine atom.

## 4. Routine registry

| Routine ID | Thai | Segments | Transliteration | English | Role | Prerequisite/source |
|---|---|---|---|---|---|---|
| `cv1.routine.social.hello` | สวัสดีครับ | `สวัสดี/ครับ` | sà-wàt-dii khráp | Hello. | routine | global / `prior` |
| `cv1.routine.social.thanks` | ขอบคุณครับ | `ขอบคุณ/ครับ` | khòrp-khun khráp | Thank you. | routine | global / `prior` |
| `cv1.routine.social.okay` | ได้ครับ | `ได้/ครับ` | dâai khráp | Okay. | routine | global / `prior` |
| `cv1.routine.social.yes` | ใช่ครับ | `ใช่/ครับ` | châi khráp | Yes. | routine | global / `prior` |
| `cv1.routine.social.no` | ไม่ครับ | `ไม่/ครับ` | mâi khráp | No. | routine | global / `prior` |
| `cv1.routine.social.here` | นี่ครับ | `นี่/ครับ` | nîi khráp | Here it is. | routine | L13 / `author-a0` |
| `cv1.routine.social.sorry` | ขอโทษครับ | `ขอโทษ/ครับ` | khǒr-thôht khráp | Sorry. | routine | L03 / `prior` |
| `cv1.routine.social.no-problem` | ไม่เป็นไรครับ | `ไม่เป็นไร/ครับ` | mâi bpen rai khráp | No problem. | routine | global / `prior` |
| `cv1.routine.reception.wait` | รอสักครู่ครับ | `รอ/สักครู่/ครับ` | raw sàk-khrûu khráp | Please wait a moment. | recognition routine | L13 / `author-a0` |
| `cv1.routine.reception.done` | เรียบร้อยแล้วครับ | `เรียบร้อยแล้ว/ครับ` | rîap-rói láaeo khráp | It is sorted now. | recognition routine | L13 / `author-a0` |
| `cv1.routine.repair.dont-understand` | ไม่เข้าใจครับ | `ไม่เข้าใจ/ครับ` | mâi khâo-jai khráp | I do not understand. | active recurrence | L03 / `prior` |
| `cv1.routine.repair.again` | พูดอีกครั้งได้ไหมครับ | `พูด/อีกครั้ง/ได้ไหม/ครับ` | phûut ìik khráng dâai mǎi khráp | Could you say it again? | active recurrence | L03 / `prior` |

## 5. Cue-family and cue-variant registry

Every cue below has role `recognition`, `ttsText` equal to Thai, and source `author-a0` unless its prerequisite says `prior`. Variants in a family differ only through a taught cue transformation or declared slot.

### 5.1 L13 cues

| Cue variant ID | Family ID | Thai | Segments | Transliteration | English | Prerequisite |
|---|---|---|---|---|---|---|
| `cv1.cue-variant.w05.l13.help.v01` | `cv1.cue-family.reception.help-problem` | มีอะไรให้ช่วยครับ | `มีอะไร/ให้ช่วย/ครับ` | mii a-rai hâi chûai khráp | How can I help? | W2 help cue |
| `cv1.cue-variant.w05.l13.help.v02` | same | มีปัญหาอะไรครับ | `มีปัญหา/อะไร/ครับ` | mii bpan-hǎa a-rai khráp | What is the problem? | L13 cue-family teaching |
| `cv1.cue-variant.w05.l13.help.v03` | same | อะไรใช้ไม่ได้ครับ | `อะไร/ใช้ไม่ได้/ครับ` | a-rai chái mâi dâai khráp | What is not working? | L13 frame teaching |
| `cv1.cue-variant.w05.l13.help.v04` | same | คีย์การ์ดใช้ได้ไหมครับ | `คีย์การ์ด/ใช้ได้ไหม/ครับ` | khii-gàat chái dâai mǎi khráp | Does the keycard work? | keycard + prior `ได้ไหม` |
| `cv1.cue-variant.w05.l13.help.v05` | same | ลิฟต์ใช้ได้ไหมครับ | `ลิฟต์/ใช้ได้ไหม/ครับ` | líp chái dâai mǎi khráp | Does the lift work? | lift + prior `ได้ไหม` |
| `cv1.cue-variant.w05.l13.room.v01` | `cv1.cue-family.reception.room-query` | อยู่ห้องไหนครับ | `อยู่/ห้องไหน/ครับ` | yùu hôrng nǎi khráp | Which room are you in? | W2 location + room |
| `cv1.cue-variant.w05.l13.room.v02` | same | ห้องอะไรครับ | `ห้อง/อะไร/ครับ` | hôrng a-rai khráp | Which room? | L13 |
| `cv1.cue-variant.w05.l13.room.v03` | same | ห้องหนึ่งสองสามใช่ไหมครับ | `ห้องหนึ่งสองสาม/ใช่ไหม/ครับ` | hôrng nùeng sǎawng sǎam châi mǎi khráp | Room 123, right? | room A |
| `cv1.cue-variant.w05.l13.room.v04` | same | ห้องสองหนึ่งสามใช่ไหมครับ | `ห้องสองหนึ่งสาม/ใช่ไหม/ครับ` | hôrng sǎawng nùeng sǎam châi mǎi khráp | Room 213, right? | room B |
| `cv1.cue-variant.w05.l13.room.v05` | same | ช่างอยู่ห้องหนึ่งสองสามใช่ไหมครับ | `ช่าง/อยู่ห้องหนึ่งสองสาม/ใช่ไหม/ครับ` | châang yùu hôrng nùeng sǎawng sǎam châi mǎi khráp | The technician is at room 123, right? | L15 technician before cross use |
| `cv1.cue-variant.w05.l13.card.v01` | `cv1.cue-family.reception.show-card` | ขอดูบัตรด้วยครับ | `ขอดู/บัตร/ด้วย/ครับ` | khǎw duu bàt dûai khráp | May I see the ID card? | L13 |
| `cv1.cue-variant.w05.l13.card.v02` | same | ขอดูคีย์การ์ดด้วยครับ | `ขอดู/คีย์การ์ด/ด้วย/ครับ` | khǎw duu khii-gàat dûai khráp | May I see the keycard? | L13 |
| `cv1.cue-variant.w05.l13.card.v03` | same | ขอดูบัตรครับ | `ขอดู/บัตร/ครับ` | khǎw duu bàt khráp | May I see the ID card? | L13 |
| `cv1.cue-variant.w05.l13.card.v04` | same | ขอดูบัตรอีกครั้งครับ | `ขอดู/บัตร/อีกครั้ง/ครับ` | khǎw duu bàt ìik khráng khráp | May I see the ID card again? | L03 `อีกครั้ง` |
| `cv1.cue-variant.w05.l13.card.v05` | same | ขอบัตรหน่อยครับ | `ขอ/บัตร/หน่อย/ครับ` | khǎw bàt nòi khráp | The card, please. | prior request-softener |
| `cv1.cue-variant.w05.l13.card.v06` | same | ขอดูคีย์การ์ดครับ | `ขอดู/คีย์การ์ด/ครับ` | khǎw duu khii-gàat khráp | May I see the keycard? | L13 |
| `cv1.cue-variant.w05.l13.card.v07` | same | ขอบัตรอีกครั้งครับ | `ขอ/บัตร/อีกครั้ง/ครับ` | khǎw bàt ìik khráng khráp | The card again, please. | L03 `อีกครั้ง` |

### 5.2 L14 cues

| Cue variant ID | Family ID | Thai | Segments | Transliteration | English | Prerequisite |
|---|---|---|---|---|---|---|
| `cv1.cue-variant.w05.l14.location.v01` | `cv1.cue-family.delivery.current-location` | ตอนนี้อยู่ที่ไหนครับ | `ตอนนี้/อยู่ที่ไหน/ครับ` | dtaawn-níi yùu thîi-nǎi khráp | Where are you now? | W2 location |
| `cv1.cue-variant.w05.l14.location.v02` | same | ตอนนี้อยู่ตรงไหนครับ | `ตอนนี้/อยู่ตรงไหน/ครับ` | dtaawn-níi yùu dtrong nǎi khráp | Where exactly are you now? | W2 `ตรงไหน` |
| `cv1.cue-variant.w05.l14.location.v03` | same | อยู่ที่ห้องหนึ่งสองสามใช่ไหมครับ | `อยู่ที่ห้องหนึ่งสองสาม/ใช่ไหม/ครับ` | yùu thîi hôrng nùeng sǎawng sǎam châi mǎi khráp | You are at room 123, right? | L13 room A |
| `cv1.cue-variant.w05.l14.location.v04` | same | อยู่ที่ล็อบบี้ใช่ไหมครับ | `อยู่ที่ล็อบบี้/ใช่ไหม/ครับ` | yùu thîi lóp-bîi châi mǎi khráp | You are in the lobby, right? | lobby |
| `cv1.cue-variant.w05.l14.location.v05` | same | อยู่ห้องอะไรครับ | `อยู่/ห้องอะไร/ครับ` | yùu hôrng a-rai khráp | Which room are you in? | L13 room query |
| `cv1.cue-variant.w05.l14.location.v06` | same | อยู่ที่ห้องสองหนึ่งสามใช่ไหมครับ | `อยู่ที่ห้องสองหนึ่งสาม/ใช่ไหม/ครับ` | yùu thîi hôrng sǎawng nùeng sǎam châi mǎi khráp | You are at room 213, right? | room B |
| `cv1.cue-variant.w05.l14.dropoff.v01` | `cv1.cue-family.delivery.dropoff` | ให้ส่งที่ห้องไหมครับ | `ให้ส่ง/ที่ห้อง/ไหม/ครับ` | hâi sòng thîi hôrng mǎi khráp | Shall I deliver it to the room? | L14 `ส่ง` |
| `cv1.cue-variant.w05.l14.dropoff.v02` | same | ให้ฝากไว้ที่ไหนครับ | `ให้ฝากไว้/ที่ไหน/ครับ` | hâi fàak wái thîi-nǎi khráp | Where should I leave it? | L14 frame |
| `cv1.cue-variant.w05.l14.dropoff.v03` | same | ให้ส่งที่ไหนครับ | `ให้ส่ง/ที่ไหน/ครับ` | hâi sòng thîi-nǎi khráp | Where should I deliver it? | L14 |
| `cv1.cue-variant.w05.l14.dropoff.v04` | same | ให้ฝากไว้ที่ห้องไหมครับ | `ให้ฝากไว้/ที่ห้อง/ไหม/ครับ` | hâi fàak wái thîi hôrng mǎi khráp | Shall I leave it at the room? | L14 |
| `cv1.cue-variant.w05.l14.dropoff.v05` | same | ให้ส่งที่ล็อบบี้ไหมครับ | `ให้ส่ง/ที่ล็อบบี้/ไหม/ครับ` | hâi sòng thîi lóp-bîi mǎi khráp | Shall I deliver it to the lobby? | L14 |
| `cv1.cue-variant.w05.l14.dropoff.v06` | same | ตอนนี้ฝากไว้ที่ไหนครับ | `ตอนนี้/ฝากไว้ที่ไหน/ครับ` | dtaawn-níi fàak wái thîi-nǎi khráp | Where is it being left now? | L14 |
| `cv1.cue-variant.w05.l14.dropoff.v07` | same | ให้ส่งที่ห้องหนึ่งสองสามไหมครับ | `ให้ส่ง/ที่ห้องหนึ่งสองสาม/ไหม/ครับ` | hâi sòng thîi hôrng nùeng sǎawng sǎam mǎi khráp | Shall I deliver it to room 123? | reserved L24 only |
| `cv1.cue-variant.w05.l14.dropoff.v08` | same | ให้ส่งที่ห้องสองหนึ่งสามไหมครับ | `ให้ส่ง/ที่ห้องสองหนึ่งสาม/ไหม/ครับ` | hâi sòng thîi hôrng sǎawng nùeng sǎam mǎi khráp | Shall I deliver it to room 213? | reserved L24 only |
| `cv1.cue-variant.w05.l14.payment.v01` | `cv1.cue-family.payment.method-choice` | จ่ายเงินสดหรือคิวอาร์ครับ | `จ่าย/เงินสด/หรือ/คิวอาร์/ครับ` | jàai ngoen-sòt rǔue khio-aa khráp | Cash or QR? | L08 methods |
| `cv1.cue-variant.w05.l14.payment.v02` | same | จ่ายคิวอาร์หรือเงินสดครับ | `จ่าย/คิวอาร์/หรือ/เงินสด/ครับ` | jàai khio-aa rǔue ngoen-sòt khráp | QR or cash? | L08 methods |
| `cv1.cue-variant.w05.l14.payment.v03` | same | จ่ายด้วยคิวอาร์ได้ไหมครับ | `จ่ายด้วย/คิวอาร์/ได้ไหม/ครับ` | jàai dûai khio-aa dâai mǎi khráp | Can you pay by QR? | L08 frame |
| `cv1.cue-variant.w05.l14.payment.v04` | same | จ่ายด้วยเงินสดได้ไหมครับ | `จ่ายด้วย/เงินสด/ได้ไหม/ครับ` | jàai dûai ngoen-sòt dâai mǎi khráp | Can you pay cash? | L08 frame |
| `cv1.cue-variant.w05.l14.payment.v05` | same | จ่ายเงินสดใช่ไหมครับ | `จ่ายเงินสด/ใช่ไหม/ครับ` | jàai ngoen-sòt châi mǎi khráp | Cash, right? | L08 |
| `cv1.cue-variant.w05.l14.payment.v06` | same | จ่ายคิวอาร์ใช่ไหมครับ | `จ่ายคิวอาร์/ใช่ไหม/ครับ` | jàai khio-aa châi mǎi khráp | QR, right? | L08 |

### 5.3 L15 cues

| Cue variant ID | Family ID | Thai | Segments | Transliteration | English | Prerequisite |
|---|---|---|---|---|---|---|
| `cv1.cue-variant.w05.l15.time.v01` | `cv1.cue-family.appointment.time` | สะดวกตอนบ่ายโมงไหมครับ | `สะดวก/ตอนบ่ายโมง/ไหม/ครับ` | sà-dùuak dtaawn bàai moong mǎi khráp | Are you available at 1 p.m.? | L12 time |
| `cv1.cue-variant.w05.l15.time.v02` | same | สะดวกตอนเที่ยงครึ่งไหมครับ | `สะดวก/ตอนเที่ยงครึ่ง/ไหม/ครับ` | sà-dùuak dtaawn thîang-khrʉ̂ng mǎi khráp | Are you available at 12:30? | L12 |
| `cv1.cue-variant.w05.l15.time.v03` | same | ช่างมาตอนบ่ายโมงได้ไหมครับ | `ช่างมา/ตอนบ่ายโมง/ได้ไหม/ครับ` | châang maa dtaawn bàai moong dâai mǎi khráp | Can the technician come at 1 p.m.? | technician + L12 |
| `cv1.cue-variant.w05.l15.time.v04` | same | บ่ายโมงสะดวกไหมครับ | `บ่ายโมง/สะดวกไหม/ครับ` | bàai moong sà-dùuak mǎi khráp | Is 1 p.m. convenient? | L15 |
| `cv1.cue-variant.w05.l15.time.v05` | same | ช่างมาตอนเที่ยงครึ่งได้ไหมครับ | `ช่างมา/ตอนเที่ยงครึ่ง/ได้ไหม/ครับ` | châang maa dtaawn thîang-khrʉ̂ng dâai mǎi khráp | Can the technician come at 12:30? | L15 |
| `cv1.cue-variant.w05.l15.time.v06` | same | สะดวกตอนเที่ยงไหมครับ | `สะดวก/ตอนเที่ยง/ไหม/ครับ` | sà-dùuak dtaawn thîang mǎi khráp | Are you available at noon? | L12 noon |
| `cv1.cue-variant.w05.l15.time.v07` | same | เจอกันตอนบ่ายโมงได้ไหมครับ | `เจอกัน/ตอนบ่ายโมง/ได้ไหม/ครับ` | jooe gan dtaawn bàai moong dâai mǎi khráp | Can we meet at 1 p.m.? | L12 meeting, cross only |
| `cv1.cue-variant.w05.l15.time.v08` | same | เจอกันตอนเที่ยงครึ่งได้ไหมครับ | `เจอกัน/ตอนเที่ยงครึ่ง/ได้ไหม/ครับ` | jooe gan dtaawn thîang-khrʉ̂ng dâai mǎi khráp | Can we meet at 12:30? | L12 meeting, cross only |
| `cv1.cue-variant.w05.l15.access.v01` | `cv1.cue-family.access.room-entry` | ช่างเข้าห้องได้ไหมครับ | `ช่าง/เข้าห้อง/ได้ไหม/ครับ` | châang khâo hôrng dâai mǎi khráp | Can the technician enter the room? | L15 |
| `cv1.cue-variant.w05.l15.access.v02` | same | ช่างเข้าห้องหนึ่งสองสามได้ไหมครับ | `ช่าง/เข้าห้องหนึ่งสองสาม/ได้ไหม/ครับ` | châang khâo hôrng nùeng sǎawng sǎam dâai mǎi khráp | Can the technician enter room 123? | room A |
| `cv1.cue-variant.w05.l15.access.v03` | same | ตอนบ่ายโมงช่างเข้าห้องได้ไหมครับ | `ตอนบ่ายโมง/ช่างเข้าห้อง/ได้ไหม/ครับ` | dtaawn bàai moong châang khâo hôrng dâai mǎi khráp | Can the technician enter at 1 p.m.? | time one |
| `cv1.cue-variant.w05.l15.access.v04` | same | ให้ช่างเข้าห้องได้ไหมครับ | `ให้ช่าง/เข้าห้อง/ได้ไหม/ครับ` | hâi châang khâo hôrng dâai mǎi khráp | May the technician enter the room? | L15 |
| `cv1.cue-variant.w05.l15.access.v05` | same | ช่างเข้าห้องสองหนึ่งสามได้ไหมครับ | `ช่าง/เข้าห้องสองหนึ่งสาม/ได้ไหม/ครับ` | châang khâo hôrng sǎawng nùeng sǎam dâai mǎi khráp | Can the technician enter room 213? | room B |
| `cv1.cue-variant.w05.l15.access.v06` | same | ช่างเข้าห้องตอนเที่ยงครึ่งได้ไหมครับ | `ช่างเข้าห้อง/ตอนเที่ยงครึ่ง/ได้ไหม/ครับ` | châang khâo hôrng dtaawn thîang-khrʉ̂ng dâai mǎi khráp | Can the technician enter at 12:30? | time half |

### 5.4 L16 cues

| Cue variant ID | Family ID | Thai | Segments | Transliteration | English | Prerequisite |
|---|---|---|---|---|---|---|
| `cv1.cue-variant.w06.l16.item.v01` | `cv1.cue-family.clothing.item-choice` | จะรับอะไรครับ | `จะรับ/อะไร/ครับ` | jà ráp a-rai khráp | What would you like? | W1 cue pattern |
| `cv1.cue-variant.w06.l16.item.v02` | same | จะเอาเสื้อไหมครับ | `จะเอา/เสื้อ/ไหม/ครับ` | jà ao sûea mǎi khráp | Would you like the shirt? | L16 shirt |
| `cv1.cue-variant.w06.l16.item.v03` | same | เอาเสื้อใช่ไหมครับ | `เอาเสื้อ/ใช่ไหม/ครับ` | ao sûea châi mǎi khráp | The shirt, right? | L16 |
| `cv1.cue-variant.w06.l16.item.v04` | same | จะรับเสื้อไหมครับ | `จะรับ/เสื้อ/ไหม/ครับ` | jà ráp sûea mǎi khráp | Would you like the shirt? | L16 |
| `cv1.cue-variant.w06.l16.item.v05` | same | เอาอันนี้ไหมครับ | `เอาอันนี้/ไหม/ครับ` | ao an níi mǎi khráp | Would you like this one? | L01 `อันนี้`; shirt context required |
| `cv1.cue-variant.w06.l16.item.v06` | same | รับเสื้อไหมครับ | `รับเสื้อ/ไหม/ครับ` | ráp sûea mǎi khráp | Would you like the shirt? | L16 |
| `cv1.cue-variant.w06.l16.size.v01` | `cv1.cue-family.clothing.size-choice` | ต้องการไซซ์อะไรครับ | `ต้องการ/ไซซ์อะไร/ครับ` | dtâwng-gaan sái a-rai khráp | What size do you want? | L16 |
| `cv1.cue-variant.w06.l16.size.v02` | same | ไซซ์เอ็มหรือไซซ์แอลครับ | `ไซซ์เอ็ม/หรือ/ไซซ์แอล/ครับ` | sái em rǔue sái aael khráp | Size M or L? | L16 both slots |
| `cv1.cue-variant.w06.l16.size.v03` | same | ไซซ์แอลใช่ไหมครับ | `ไซซ์แอล/ใช่ไหม/ครับ` | sái aael châi mǎi khráp | Size L, right? | L16 |
| `cv1.cue-variant.w06.l16.size.v04` | same | ต้องการไซซ์เอ็มหรือไซซ์แอลครับ | `ต้องการ/ไซซ์เอ็ม/หรือ/ไซซ์แอล/ครับ` | dtâwng-gaan sái em rǔue sái aael khráp | Do you want size M or L? | L16 |
| `cv1.cue-variant.w06.l16.size.v05` | same | ไซซ์เอ็มใช่ไหมครับ | `ไซซ์เอ็ม/ใช่ไหม/ครับ` | sái em châi mǎi khráp | Size M, right? | L16 |
| `cv1.cue-variant.w06.l16.option.v01` | `cv1.cue-family.clothing.option-context` | ตัวนี้ไซซ์แอลครับ | `ตัวนี้/ไซซ์แอล/ครับ` | dtua níi sái aael khráp | This one is size L. | L16 |
| `cv1.cue-variant.w06.l16.option.v02` | same | ตัวนี้ไซซ์แอลใช่ไหมครับ | `ตัวนี้/ไซซ์แอล/ใช่ไหม/ครับ` | dtua níi sái aael châi mǎi khráp | This one is size L, right? | L16 |
| `cv1.cue-variant.w06.l16.option.v03` | same | ตัวนี้มีไซซ์แอลครับ | `ตัวนี้/มีไซซ์แอล/ครับ` | dtua níi mii sái aael khráp | This one is available in size L. | L16 |
| `cv1.cue-variant.w06.l16.option.v04` | same | ตัวนี้ไซซ์เอ็มครับ | `ตัวนี้/ไซซ์เอ็ม/ครับ` | dtua níi sái em khráp | This one is size M. | L16 |
| `cv1.cue-variant.w06.l16.option.v05` | same | ตัวนี้มีสีดำครับ | `ตัวนี้/มีสีดำ/ครับ` | dtua níi mii sǐi dam khráp | This one is available in black. | L16 |

### 5.5 L17 cues

| Cue variant ID | Family ID | Thai | Segments | Transliteration | English | Prerequisite |
|---|---|---|---|---|---|---|
| `cv1.cue-variant.w06.l17.order.v01` | `cv1.cue-family.delivery.order-check` | ของที่สั่งใช่อันนี้ไหมครับ | `ของที่สั่ง/ใช่อันนี้ไหม/ครับ` | khǎawng thîi sàng châi an níi mǎi khráp | Is this what you ordered? | L17 cue teaching |
| `cv1.cue-variant.w06.l17.order.v02` | same | อันนี้ที่สั่งใช่ไหมครับ | `อันนี้/ที่สั่ง/ใช่ไหม/ครับ` | an níi thîi sàng châi mǎi khráp | This is the ordered one, right? | L17 |
| `cv1.cue-variant.w06.l17.order.v03` | same | อันนี้ใช่ที่สั่งไหมครับ | `อันนี้/ใช่ที่สั่งไหม/ครับ` | an níi châi thîi sàng mǎi khráp | Is this the ordered one? | L17 |
| `cv1.cue-variant.w06.l17.order.v04` | same | เอาอันนี้ใช่ไหมครับ | `เอาอันนี้/ใช่ไหม/ครับ` | ao an níi châi mǎi khráp | You want this one, right? | L01 `เอาอันนี้` |
| `cv1.cue-variant.w06.l17.order.v05` | same | อันนี้ของคุณใช่ไหมครับ | `อันนี้/ของคุณ/ใช่ไหม/ครับ` | an níi khǎawng khun châi mǎi khráp | This is yours, right? | L17 |
| `cv1.cue-variant.w06.l17.order.v06` | same | รับอันนี้ใช่ไหมครับ | `รับอันนี้/ใช่ไหม/ครับ` | ráp an níi châi mǎi khráp | You are taking this one, right? | W1 `รับ` + `อันนี้` |
| `cv1.cue-variant.w06.l17.missing.v01` | `cv1.cue-family.delivery.missing-check` | มีอะไรขาดไหมครับ | `มีอะไร/ขาด/ไหม/ครับ` | mii a-rai khàat mǎi khráp | Is anything missing? | L17 |
| `cv1.cue-variant.w06.l17.missing.v02` | same | ของครบไหมครับ | `ของ/ครบ/ไหม/ครับ` | khǎawng khróp mǎi khráp | Is everything complete? | L17 `ครบ` |
| `cv1.cue-variant.w06.l17.missing.v03` | same | มีน้ำครบไหมครับ | `มีน้ำ/ครบ/ไหม/ครับ` | mii náam khróp mǎi khráp | Is all the water there? | L02 water + L17 |
| `cv1.cue-variant.w06.l17.missing.v04` | same | ขาดอะไรครับ | `ขาด/อะไร/ครับ` | khàat a-rai khráp | What is missing? | L17 |
| `cv1.cue-variant.w06.l17.missing.v05` | same | น้ำหนึ่งขวดครบไหมครับ | `น้ำหนึ่งขวด/ครบ/ไหม/ครับ` | náam nùeng khùat khróp mǎi khráp | Is the one bottle of water there? | L02 + L17 |
| `cv1.cue-variant.w06.l17.missing.v06` | same | น้ำครบไหมครับ | `น้ำ/ครบ/ไหม/ครับ` | náam khróp mǎi khráp | Is the water complete? | L17 |
| `cv1.cue-variant.w06.l17.price.v01` | `cv1.cue-family.correction.detail-check` | ทั้งหมดหนึ่งร้อยบาทครับ | `ทั้งหมด/หนึ่งร้อยบาท/ครับ` | tháng-mòt nùeng rói bàat khráp | The total is 100 baht. | L17 price slot |
| `cv1.cue-variant.w06.l17.price.v02` | same | ราคาหนึ่งร้อยบาทใช่ไหมครับ | `ราคา/หนึ่งร้อยบาท/ใช่ไหม/ครับ` | raa-khaa nùeng rói bàat châi mǎi khráp | The price is 100 baht, right? | L17 |
| `cv1.cue-variant.w06.l17.price.v03` | same | ราคาเป็นหนึ่งร้อยบาทครับ | `ราคาเป็น/หนึ่งร้อยบาท/ครับ` | raa-khaa bpen nùeng rói bàat khráp | The price is 100 baht. | L17 |
| `cv1.cue-variant.w06.l17.price.v04` | same | รวมหนึ่งร้อยบาทครับ | `รวม/หนึ่งร้อยบาท/ครับ` | ruam nùeng rói bàat khráp | The total is 100 baht. | L09 total cue |
| `cv1.cue-variant.w06.l17.price.v05` | same | ต้องเป็นหนึ่งร้อยบาทใช่ไหมครับ | `ต้องเป็น/หนึ่งร้อยบาท/ใช่ไหม/ครับ` | dtâwng bpen nùeng rói bàat châi mǎi khráp | It should be 100 baht, right? | L17 frame |
| `cv1.cue-variant.w06.l17.price.v06` | same | หนึ่งร้อยบาทถูกไหมครับ | `หนึ่งร้อยบาท/ถูกไหม/ครับ` | nùeng rói bàat thùuk mǎi khráp | Is 100 baht correct? | L17 cue-family teaching |

### 5.6 L18 cues and events

| Cue variant ID | Family ID | Thai | Segments | Transliteration | English | Prerequisite |
|---|---|---|---|---|---|---|
| `cv1.cue-variant.w06.l18.detail.v01` | `cv1.cue-family.repair.detail-statement` | ฝากไว้ที่ล็อบบี้ตอนเที่ยงครึ่งครับ | `ฝากไว้ที่ล็อบบี้/ตอนเที่ยงครึ่ง/ครับ` | fàak wái thîi lóp-bîi dtaawn thîang-khrʉ̂ng khráp | Leave it in the lobby at 12:30. | L14 + L15 |
| `cv1.cue-variant.w06.l18.detail.v02` | same | ฝากไว้ที่ห้องหนึ่งสองสามครับ | `ฝากไว้ที่ห้องหนึ่งสองสาม/ครับ` | fàak wái thîi hôrng nùeng sǎawng sǎam khráp | Leave it at room 123. | L14 + room A |
| `cv1.cue-variant.w06.l18.detail.v03` | same | ช่างจะมาตอนบ่ายโมงครับ | `ช่างจะมา/ตอนบ่ายโมง/ครับ` | châang jà maa dtaawn bàai moong khráp | The technician will come at 1 p.m. | L15 |
| `cv1.cue-variant.w06.l18.detail.v04` | same | ฝากไว้ที่ล็อบบี้ครับ | `ฝากไว้ที่ล็อบบี้/ครับ` | fàak wái thîi lóp-bîi khráp | Leave it in the lobby. | L14 |
| `cv1.cue-variant.w06.l18.detail.v05` | same | เจอกันตอนเที่ยงครึ่งครับ | `เจอกัน/ตอนเที่ยงครึ่ง/ครับ` | jooe gan dtaawn thîang-khrʉ̂ng khráp | Meet at 12:30. | L12 |
| `cv1.cue-variant.w06.l18.detail.v06` | same | ช่างจะเข้าห้องหนึ่งสองสามครับ | `ช่างจะเข้า/ห้องหนึ่งสองสาม/ครับ` | châang jà khâo hôrng nùeng sǎawng sǎam khráp | The technician will enter room 123. | L15 |
| `cv1.cue-variant.w06.l18.detail.v07` | same | ช่างจะเข้าตอนเที่ยงครึ่งครับ | `ช่างจะเข้า/ตอนเที่ยงครึ่ง/ครับ` | châang jà khâo dtaawn thîang-khrʉ̂ng khráp | The technician will enter at 12:30. | L15, cross only |
| `cv1.cue-variant.w06.l18.english.v01` | `cv1.cue-family.repair.english-ability` | พูดภาษาอังกฤษไม่เก่งครับ | `พูดภาษาอังกฤษ/ไม่เก่ง/ครับ` | phûut phaa-sǎa ang-grìt mâi gèng khráp | I do not speak English well. | L18 |
| `cv1.cue-variant.w06.l18.english.v02` | same | พูดภาษาอังกฤษไม่ได้ครับ | `พูดภาษาอังกฤษ/ไม่ได้/ครับ` | phûut phaa-sǎa ang-grìt mâi dâai khráp | I cannot speak English. | L18 |
| `cv1.cue-variant.w06.l18.english.v03` | same | ภาษาอังกฤษไม่เก่งครับ | `ภาษาอังกฤษ/ไม่เก่ง/ครับ` | phaa-sǎa ang-grìt mâi gèng khráp | My English is not good. | L18 |
| `cv1.cue-variant.w06.l18.english.v04` | same | ภาษาอังกฤษไม่ได้ครับ | `ภาษาอังกฤษ/ไม่ได้/ครับ` | phaa-sǎa ang-grìt mâi dâai khráp | English is not possible. | L18 controlled cue variant |

Learner-led events have no Thai or TTS payload and never count as cue-comprehension evidence:

| Event ID | Visible event card | Required state | Function | Source |
|---|---|---|---|---|
| `cv1.event.w06.l18.ordinary-repair-failed.location` | You still need the location after using “I don’t understand” and “say it again.” Try English, then return to the location task. | `ordinaryRepairFailed:true`; target `location` | request English | `author-a0` |
| `cv1.event.w06.l18.ordinary-repair-failed.time` | You still need the time after the ordinary repair sequence. Try English, then return to the time task. | same; target `time` | request English | `author-a0` |
| `cv1.event.w06.l18.ordinary-repair-failed.room` | You still need the room detail after the ordinary repair sequence. Try English, then return to the room task. | same; target `room` | request English | `author-a0` |
| `cv1.event.w06.l18.ordinary-repair-failed.price` | You still need the price detail after the ordinary repair sequence. Try English, then return to the price task. | same; target `price` | request English | `author-a0` |

## 6. Context registry

Context cards never expose a translation of the Thai cue. `configuredGoal` is selected from the fixed values below; no free text is accepted.

| Context ID | Setting card | Configured goal / state | Privacy and grading note |
|---|---|---|---|
| `cv1.context.w05.l13.keycard-failed` | Male condo receptionist; your practice keycard has failed. | report `keycard-not-working` | Fictional exercise, no credential value. |
| `cv1.context.w05.l13.lift-failed` | Male condo receptionist; the practice lift is unavailable. | report `lift-not-working` | Fixed course fact. |
| `cv1.context.w05.l13.room-a` | Male receptionist asks for your fictional practice room. | room A | Only fixed value 123. |
| `cv1.context.w05.l13.room-b` | Male receptionist asks for your fictional practice room. | room B | Only fixed value 213. |
| `cv1.context.w05.l13.show-id` | Male receptionist has asked to see the generic ID card. | hand it over | No name, number or image is represented. |
| `cv1.context.w05.l13.show-keycard` | Male receptionist has asked to see the practice keycard. | hand it over | No keycard number is represented. |
| `cv1.context.w05.l14.location-room-a` | Male rider is finding you; you are at fictional room 123. | state room A | Fixed course value. |
| `cv1.context.w05.l14.location-room-b` | Male rider is finding you; you are at fictional room 213. | state room B | Fixed course value. |
| `cv1.context.w05.l14.location-lobby` | Male rider is finding you; you are in the lobby. | state lobby | Fixed course branch. |
| `cv1.context.w05.l14.dropoff-lobby` | You want the parcel left in the lobby, not brought to the room. | lobby drop-off | Makes the yes/no cue uniquely gradable. |
| `cv1.context.w05.l14.dropoff-room` | You want the parcel left at the room. | room drop-off | Fixed branch. |
| `cv1.context.w05.l14.dropoff-counter` | You want the parcel left in front of the counter. | counter drop-off | Fixed branch. |
| `cv1.context.w05.l14.pay-qr` | You have chosen the previously taught QR method. | QR | No financial identifier. |
| `cv1.context.w05.l14.pay-cash` | You have chosen cash. | cash | No amount/account data. |
| `cv1.context.w05.l15.aircon-failed` | Male receptionist; the practice-room air conditioner has failed. | report air-conditioner failure | Fictional condition. |
| `cv1.context.w05.l15.lift-failed` | Male receptionist; the lift has failed. | report lift failure | Reuses L13 slot. |
| `cv1.context.w05.l15.time-one` | Male receptionist offers 1 p.m.; that time works. | accept 1 p.m. | Fixed slot. |
| `cv1.context.w05.l15.time-half` | Male receptionist offers 12:30; that time works. | accept 12:30 | Fixed slot. |
| `cv1.context.w05.l15.time-noon` | Male receptionist offers noon; that time works. | accept noon | Fixed slot. |
| `cv1.context.w05.l15.allow-entry` | You permit the technician to enter the fictional practice room. | allow entry | No real access authority or credential. |
| `cv1.context.w06.l16.want-shirt` | Male clothing seller; you want the shirt. | choose shirt | Fixed merchandise branch. |
| `cv1.context.w06.l16.want-size-l` | The configured size is L. | choose L | No body measurement stored. |
| `cv1.context.w06.l16.want-size-m` | The configured size is M. | choose M | No body measurement stored. |
| `cv1.context.w06.l16.ask-black` | You still need to ask whether black is available. | ask black | Only taught colour. |
| `cv1.context.w06.l16.ask-size-m` | You still need to ask whether size M is available. | ask M availability | Only taught alternate size. |
| `cv1.context.w06.l17.wrong-order` | Male rider; the item is not what the exercise says you ordered. | reject wrong order | Fictional order. |
| `cv1.context.w06.l17.water-missing` | One taught bottle of water is missing. | report missing water | Fictional order. |
| `cv1.context.w06.l17.correct-price-eighty` | The taught correct price is 80 baht, not 100. | correct to 80 | No transaction data. |
| `cv1.context.w06.l17.correct-room-a` | The correct fictional room is 123, not 213. | correct to room A | Fixed values only. |
| `cv1.context.w06.l17.correct-size-l` | The correct taught size is L, not M. | correct to size L | Cross-scene transfer after L16. |
| `cv1.context.w06.l18.confirm-lobby` | After ordinary repair, confirm only the lobby detail. | confirm lobby | Does not reveal cue meaning. |
| `cv1.context.w06.l18.confirm-room-a` | After ordinary repair, confirm only fictional room 123. | confirm room A | Fixed value. |
| `cv1.context.w06.l18.confirm-time-half` | After ordinary repair, confirm only 12:30. | confirm 12:30 | Fixed slot. |
| `cv1.context.w06.l18.confirm-time-one` | After ordinary repair, confirm only 1 p.m. | confirm 1 p.m. | Fixed slot. |
| `cv1.context.w06.l18.use-translation-app` | English is unavailable; ask the male partner to type in the translation app, then return to the task. | request typed translation | No typed text, phone or account data stored. |
| `cv1.context.w06.l18.return-location` | Ordinary repair has failed; the unresolved task is the location. | request English, then return to location | No free text or location value is stored. |
| `cv1.context.w06.l18.return-time` | Ordinary repair has failed; the unresolved task is the time. | request English, then return to time | Fixed taught times only. |
| `cv1.context.w06.l18.return-room` | Ordinary repair has failed; the unresolved task is fictional room 123. | request English, then return to room | Fixed privacy fixture only. |
| `cv1.context.w06.l18.return-price` | Ordinary repair has failed; the unresolved task is the fixed exercise price. | request English, then return to price | Fixed course value only. |
| `cv1.context.w06.l18.return-location-after-two-repairs` | “I don’t understand” and “again” have both failed; location is still unresolved. | request English, then return to location | Sealed context state; no captured text. |
| `cv1.context.w06.l18.return-room-after-two-repairs` | “I don’t understand” and “again” have both failed; fictional room is still unresolved. | request English, then return to room | Sealed context state; fixed room only. |
| `cv1.context.w06.l18.return-location-gate` | In the cumulative gate, ordinary repair has failed and location remains unresolved. | request English, then return to location | Gate-only state; no captured text. |

## 7. Response and accepted-set registry

All response rows have `ttsText` equal to Thai, `lang:th-TH`, `rate:0.72`. `active` rows count toward retrieval; `routine` rows do not inflate the lesson burden.

| Response ID | Thai | Segments | Transliteration | English | Role | Frame / prerequisites | Source |
|---|---|---|---|---|---|---|---|
| `cv1.response.w05.l13.keycard-not-working` | คีย์การ์ดใช้ไม่ได้ครับ | `คีย์การ์ด/ใช้ไม่ได้/ครับ` | khii-gàat chái mâi dâai khráp | The keycard does not work. | active | not-working + keycard | `author-a0` |
| `cv1.response.w05.l13.lift-not-working` | ลิฟต์ใช้ไม่ได้ครับ | `ลิฟต์/ใช้ไม่ได้/ครับ` | líp chái mâi dâai khráp | The lift does not work. | active transfer | not-working + lift | `author-a0` |
| `cv1.response.w05.l13.room-a` | ห้องหนึ่งสองสามครับ | `ห้อง/หนึ่งสองสาม/ครับ` | hôrng nùeng sǎawng sǎam khráp | Fictional room 123. | active | room-answer + room A | `privacy-fixture` |
| `cv1.response.w05.l13.room-b` | ห้องสองหนึ่งสามครับ | `ห้อง/สองหนึ่งสาม/ครับ` | hôrng sǎawng nùeng sǎam khráp | Fictional room 213. | active transfer | room-answer + room B | `privacy-fixture` |
| `cv1.response.w05.l13.show-card` | นี่ครับ | `นี่/ครับ` | nîi khráp | Here it is. | routine | social.here | `prior` |
| `cv1.response.w05.l14.location-room-a` | อยู่ห้องหนึ่งสองสามครับ | `อยู่/ห้องหนึ่งสองสาม/ครับ` | yùu hôrng nùeng sǎawng sǎam khráp | I am at fictional room 123. | active | delivery.location | `privacy-fixture` |
| `cv1.response.w05.l14.location-room-b` | อยู่ห้องสองหนึ่งสามครับ | `อยู่/ห้องสองหนึ่งสาม/ครับ` | yùu hôrng sǎawng nùeng sǎam khráp | I am at fictional room 213. | active transfer | delivery.location | `privacy-fixture` |
| `cv1.response.w05.l14.location-lobby` | อยู่ที่ล็อบบี้ครับ | `อยู่/ที่ล็อบบี้/ครับ` | yùu thîi lóp-bîi khráp | I am in the lobby. | active transfer | delivery.location | `author-a0` |
| `cv1.response.w05.l14.leave-lobby` | ฝากไว้ที่ล็อบบี้ครับ | `ฝากไว้/ที่ล็อบบี้/ครับ` | fàak wái thîi lóp-bîi khráp | Please leave it in the lobby. | active | leave-at + lobby | `author-a0` |
| `cv1.response.w05.l14.leave-room` | ฝากไว้ที่ห้องครับ | `ฝากไว้/ที่ห้อง/ครับ` | fàak wái thîi hôrng khráp | Please leave it at the room. | active transfer | leave-at + room | `author-a0` |
| `cv1.response.w05.l14.leave-counter` | ฝากไว้ที่หน้าเคาน์เตอร์ครับ | `ฝากไว้/ที่หน้าเคาน์เตอร์/ครับ` | fàak wái thîi nâa khao-dtôoe khráp | Please leave it in front of the counter. | active transfer | leave-at + counter | `author-a0` |
| `cv1.response.w05.l14.pay-qr` | คิวอาร์ครับ | `คิวอาร์/ครับ` | khio-aa khráp | QR. | active | method-answer + QR | `prior` |
| `cv1.response.w05.l14.pay-cash` | เงินสดครับ | `เงินสด/ครับ` | ngoen-sòt khráp | Cash. | active transfer | method-answer + cash | `prior` |
| `cv1.response.w05.l15.aircon-not-working` | แอร์ใช้ไม่ได้ครับ | `แอร์/ใช้ไม่ได้/ครับ` | aae chái mâi dâai khráp | The air conditioner does not work. | active | not-working + aircon | `author-a0` |
| `cv1.response.w05.l15.time-one` | บ่ายโมงได้ครับ | `บ่ายโมง/ได้/ครับ` | bàai moong dâai khráp | One p.m. works. | active | time-works + one | `prior` |
| `cv1.response.w05.l15.time-half` | เที่ยงครึ่งได้ครับ | `เที่ยงครึ่ง/ได้/ครับ` | thîang-khrʉ̂ng dâai khráp | 12:30 works. | active transfer | time-works + half | `prior` |
| `cv1.response.w05.l15.time-noon` | เที่ยงได้ครับ | `เที่ยง/ได้/ครับ` | thîang dâai khráp | Noon works. | active transfer | time-works + noon | `prior` |
| `cv1.response.w05.l15.allow-entry` | เข้าได้ครับ | `เข้า/ได้/ครับ` | khâo dâai khráp | Entry is allowed. | active | allow-entry | `author-a0` |
| `cv1.response.w05.l15.deny-entry` | เข้าไม่ได้ครับ | `เข้า/ไม่ได้/ครับ` | khâo mâi dâai khráp | Entry is not allowed. | recognition contrast | negated allow-entry | `author-a0` |
| `cv1.response.w06.l16.want-shirt` | เอาเสื้อครับ | `เอา/เสื้อ/ครับ` | ao sûea khráp | I will take the shirt. | active | want-shirt | `author-a0` |
| `cv1.response.w06.l16.size-l` | ไซซ์แอลครับ | `ไซซ์แอล/ครับ` | sái aael khráp | Size L. | active | size-answer + L | `loan-a0` |
| `cv1.response.w06.l16.size-m` | ไซซ์เอ็มครับ | `ไซซ์เอ็ม/ครับ` | sái em khráp | Size M. | active transfer | size-answer + M | `loan-a0` |
| `cv1.response.w06.l16.ask-black` | มีสีดำไหมครับ | `มี/สีดำ/ไหม/ครับ` | mii sǐi dam mǎi khráp | Is black available? | active | option-available + black | `author-a0` |
| `cv1.response.w06.l16.ask-size-m` | มีไซซ์เอ็มไหมครับ | `มี/ไซซ์เอ็ม/ไหม/ครับ` | mii sái em mǎi khráp | Is size M available? | active transfer | option-available + M | `author-a0` |
| `cv1.response.w06.l17.wrong-order` | อันนี้ไม่ใช่ที่สั่งครับ | `อันนี้/ไม่ใช่/ที่สั่ง/ครับ` | an níi mâi châi thîi sàng khráp | This is not what I ordered. | active | wrong-order | `author-a0` |
| `cv1.response.w06.l17.missing-water` | ขาดน้ำหนึ่งขวดครับ | `ขาด/น้ำหนึ่งขวด/ครับ` | khàat náam nùeng khùat khráp | One bottle of water is missing. | active | missing-water | `author-a0` |
| `cv1.response.w06.l17.water-one-short` | น้ำหนึ่งขวดครับ | `น้ำหนึ่งขวด/ครับ` | náam nùeng khùat khráp | One bottle of water. | accepted contextual short form | L02 water | `prior` |
| `cv1.response.w06.l17.correct-eighty` | ต้องเป็นแปดสิบบาทครับ | `ต้องเป็น/แปดสิบบาท/ครับ` | dtâwng bpen bpàaet-sìp bàat khráp | It should be 80 baht. | active | correct-detail + 80 | `author-a0` |
| `cv1.response.w06.l17.eighty-short` | แปดสิบบาทครับ | `แปดสิบบาท/ครับ` | bpàaet-sìp bàat khráp | Eighty baht. | accepted contextual short form | L01 price | `prior` |
| `cv1.response.w06.l17.correct-room-a` | ต้องเป็นห้องหนึ่งสองสามครับ | `ต้องเป็น/ห้องหนึ่งสองสาม/ครับ` | dtâwng bpen hôrng nùeng sǎawng sǎam khráp | It should be room 123. | active transfer | correct-detail + room A | `privacy-fixture` |
| `cv1.response.w06.l17.correct-size-l` | ต้องเป็นไซซ์แอลครับ | `ต้องเป็น/ไซซ์แอล/ครับ` | dtâwng bpen sái aael khráp | It should be size L. | active cross transfer | correct-detail + L | `later-cross` L16 |
| `cv1.response.w06.l18.confirm-lobby` | หมายถึงล็อบบี้ใช่ไหมครับ | `หมายถึง/ล็อบบี้/ใช่ไหม/ครับ` | mǎai-thʉ̌ng lóp-bîi châi mǎi khráp | You mean the lobby, right? | active | confirm-meaning + lobby | `author-a0` |
| `cv1.response.w06.l18.confirm-room-a` | หมายถึงห้องหนึ่งสองสามใช่ไหมครับ | `หมายถึง/ห้องหนึ่งสองสาม/ใช่ไหม/ครับ` | mǎai-thʉ̌ng hôrng nùeng sǎawng sǎam châi mǎi khráp | You mean room 123, right? | active transfer | confirm-meaning + room A | `privacy-fixture` |
| `cv1.response.w06.l18.confirm-time-half` | หมายถึงเที่ยงครึ่งใช่ไหมครับ | `หมายถึง/เที่ยงครึ่ง/ใช่ไหม/ครับ` | mǎai-thʉ̌ng thîang-khrʉ̂ng châi mǎi khráp | You mean 12:30, right? | active transfer | confirm-meaning + half | `author-a0` |
| `cv1.response.w06.l18.confirm-time-one` | หมายถึงบ่ายโมงใช่ไหมครับ | `หมายถึง/บ่ายโมง/ใช่ไหม/ครับ` | mǎai-thʉ̌ng bàai moong châi mǎi khráp | You mean 1 p.m., right? | active transfer | confirm-meaning + one | `author-a0` |
| `cv1.response.w06.l18.ask-english` | พูดภาษาอังกฤษได้ไหมครับ | `พูดภาษาอังกฤษ/ได้ไหม/ครับ` | phûut phaa-sǎa ang-grìt dâai mǎi khráp | Can you speak English? | active | request-english | `author-a0` |
| `cv1.response.w06.l18.type-translation` | ช่วยพิมพ์ในแอปแปลภาษาได้ไหมครับ | `ช่วยพิมพ์/ในแอปแปลภาษา/ได้ไหม/ครับ` | chûai phim nai àep bplaae phaa-sǎa dâai mǎi khráp | Could you type it in the translation app? | active | type-translation | `author-a0` |
| `cv1.response.w06.l18.type-translation-short` | พิมพ์ในแอปแปลภาษาได้ไหมครับ | `พิมพ์/ในแอปแปลภาษา/ได้ไหม/ครับ` | phim nai àep bplaae phaa-sǎa dâai mǎi khráp | Could you type it in the translation app? | accepted active alternative | type-translation | `author-a0` |

Accepted-set registry:

| Accepted-set ID | Response IDs |
|---|---|
| `cv1.accept.w05.l13.keycard-not-working` | `[cv1.response.w05.l13.keycard-not-working]` |
| `cv1.accept.w05.l13.lift-not-working` | `[cv1.response.w05.l13.lift-not-working]` |
| `cv1.accept.w05.l13.room-a` | `[cv1.response.w05.l13.room-a, cv1.response.w05.l14.location-room-a]` only when the context asks “which room”; location form is not displayed |
| `cv1.accept.w05.l13.room-b` | `[cv1.response.w05.l13.room-b, cv1.response.w05.l14.location-room-b]` under the same rule |
| `cv1.accept.shared.yes` | `[cv1.routine.social.yes]` |
| `cv1.accept.shared.here` | `[cv1.response.w05.l13.show-card]` |
| `cv1.accept.w05.l14.location-room-a` | `[cv1.response.w05.l14.location-room-a]` |
| `cv1.accept.w05.l14.location-room-b` | `[cv1.response.w05.l14.location-room-b]` |
| `cv1.accept.w05.l14.location-lobby` | `[cv1.response.w05.l14.location-lobby]` |
| `cv1.accept.w05.l14.leave-lobby` | `[cv1.response.w05.l14.leave-lobby]` |
| `cv1.accept.w05.l14.leave-room` | `[cv1.response.w05.l14.leave-room]` |
| `cv1.accept.w05.l14.leave-counter` | `[cv1.response.w05.l14.leave-counter]` |
| `cv1.accept.w05.l14.pay-qr` | `[cv1.response.w05.l14.pay-qr]` |
| `cv1.accept.w05.l14.pay-cash` | `[cv1.response.w05.l14.pay-cash]` |
| `cv1.accept.w05.l15.aircon-not-working` | `[cv1.response.w05.l15.aircon-not-working]` |
| `cv1.accept.w05.l15.time-one` | `[cv1.response.w05.l15.time-one, cv1.routine.social.okay]`; `okay` accepted only when the offered time is explicit |
| `cv1.accept.w05.l15.time-half` | `[cv1.response.w05.l15.time-half, cv1.routine.social.okay]` under same rule |
| `cv1.accept.w05.l15.time-noon` | `[cv1.response.w05.l15.time-noon, cv1.routine.social.okay]` under same rule |
| `cv1.accept.w05.l15.allow-entry` | `[cv1.response.w05.l15.allow-entry, cv1.routine.social.okay]`; `okay` accepted only under allow-entry context |
| `cv1.accept.w06.l16.want-shirt` | `[cv1.response.w06.l16.want-shirt]` |
| `cv1.accept.w06.l16.size-l` | `[cv1.response.w06.l16.size-l]` |
| `cv1.accept.w06.l16.size-m` | `[cv1.response.w06.l16.size-m]` |
| `cv1.accept.w06.l16.ask-black` | `[cv1.response.w06.l16.ask-black]` |
| `cv1.accept.w06.l16.ask-size-m` | `[cv1.response.w06.l16.ask-size-m]` |
| `cv1.accept.w06.l17.wrong-order` | `[cv1.response.w06.l17.wrong-order, cv1.routine.social.no]`; short no is never displayed as a distractor |
| `cv1.accept.w06.l17.missing-water` | `[cv1.response.w06.l17.missing-water, cv1.response.w06.l17.water-one-short]` |
| `cv1.accept.w06.l17.correct-eighty` | `[cv1.response.w06.l17.correct-eighty, cv1.response.w06.l17.eighty-short]` |
| `cv1.accept.w06.l17.correct-room-a` | `[cv1.response.w06.l17.correct-room-a]` |
| `cv1.accept.w06.l17.correct-size-l` | `[cv1.response.w06.l17.correct-size-l]` |
| `cv1.accept.w06.l18.confirm-lobby` | `[cv1.response.w06.l18.confirm-lobby]` |
| `cv1.accept.w06.l18.confirm-room-a` | `[cv1.response.w06.l18.confirm-room-a]` |
| `cv1.accept.w06.l18.confirm-time-half` | `[cv1.response.w06.l18.confirm-time-half]` |
| `cv1.accept.w06.l18.confirm-time-one` | `[cv1.response.w06.l18.confirm-time-one]` |
| `cv1.accept.w06.l18.ask-english` | `[cv1.response.w06.l18.ask-english]` |
| `cv1.accept.w06.l18.type-translation` | `[cv1.response.w06.l18.type-translation, cv1.response.w06.l18.type-translation-short]` |

## 8. Exact three-option misconception sets

The recognition-only wrong-total response used below is canonical: `cv1.response.w06.l17.hundred-short` = `หนึ่งร้อยบาทครับ`; segments `หนึ่งร้อยบาท/ครับ`; transliteration `nùeng rói bàat khráp`; English “One hundred baht”; role `recognition distractor`; source `author-a0`. It inherits the audio defaults in Section 1.

| Option-set ID | Ordered response options | Tags for options 2 / 3 |
|---|---|---|
| `cv1.options.w05.l13.keycard` | `[cv1.response.w05.l13.keycard-not-working, cv1.response.w05.l13.lift-not-working, cv1.routine.repair.dont-understand]` | `wrong-slot`; `wrong-function` |
| `cv1.options.w05.l13.lift` | `[cv1.response.w05.l13.lift-not-working, cv1.response.w05.l13.keycard-not-working, cv1.routine.repair.dont-understand]` | `wrong-slot`; `wrong-function` |
| `cv1.options.w05.l13.room-a` | `[cv1.response.w05.l13.room-a, cv1.response.w05.l13.room-b, cv1.response.w05.l13.keycard-not-working]` | `wrong-slot`; `wrong-function` |
| `cv1.options.w05.l13.room-b` | `[cv1.response.w05.l13.room-b, cv1.response.w05.l13.room-a, cv1.response.w05.l13.keycard-not-working]` | `wrong-slot`; `wrong-function` |
| `cv1.options.w05.l13.yes` | `[cv1.routine.social.yes, cv1.response.w05.l13.room-a, cv1.routine.repair.dont-understand]` | `wrong-stage`; `wrong-function` |
| `cv1.options.w05.l13.here` | `[cv1.response.w05.l13.show-card, cv1.routine.social.no, cv1.routine.social.thanks]` | `wrong-polarity`; `premature-close` |
| `cv1.options.w05.l14.location-room-a` | `[cv1.response.w05.l14.location-room-a, cv1.response.w05.l14.location-lobby, cv1.response.w05.l14.leave-lobby]` | `wrong-slot`; `wrong-function` |
| `cv1.options.w05.l14.location-room-b` | `[cv1.response.w05.l14.location-room-b, cv1.response.w05.l14.location-room-a, cv1.response.w05.l14.leave-room]` | `wrong-slot`; `wrong-function` |
| `cv1.options.w05.l14.location-lobby` | `[cv1.response.w05.l14.location-lobby, cv1.response.w05.l14.location-room-a, cv1.response.w05.l14.leave-lobby]` | `wrong-slot`; `wrong-function` |
| `cv1.options.w05.l14.leave-lobby` | `[cv1.response.w05.l14.leave-lobby, cv1.response.w05.l14.leave-room, cv1.response.w05.l14.location-lobby]` | `wrong-slot`; `wrong-function` |
| `cv1.options.w05.l14.leave-room` | `[cv1.response.w05.l14.leave-room, cv1.response.w05.l14.leave-lobby, cv1.response.w05.l14.location-room-a]` | `wrong-slot`; `wrong-function` |
| `cv1.options.w05.l14.leave-counter` | `[cv1.response.w05.l14.leave-counter, cv1.response.w05.l14.leave-lobby, cv1.response.w05.l14.location-lobby]` | `wrong-slot`; `wrong-function` |
| `cv1.options.w05.l14.pay-qr` | `[cv1.response.w05.l14.pay-qr, cv1.response.w05.l14.pay-cash, cv1.response.w05.l14.leave-lobby]` | `wrong-slot`; `wrong-function` |
| `cv1.options.w05.l14.pay-cash` | `[cv1.response.w05.l14.pay-cash, cv1.response.w05.l14.pay-qr, cv1.response.w05.l14.leave-room]` | `wrong-slot`; `wrong-function` |
| `cv1.options.w05.l15.aircon` | `[cv1.response.w05.l15.aircon-not-working, cv1.response.w05.l13.lift-not-working, cv1.response.w05.l15.time-one]` | `wrong-slot`; `wrong-function` |
| `cv1.options.w05.l15.lift` | `[cv1.response.w05.l13.lift-not-working, cv1.response.w05.l15.aircon-not-working, cv1.response.w05.l15.time-half]` | `wrong-slot`; `wrong-function` |
| `cv1.options.w05.l15.time-one` | `[cv1.response.w05.l15.time-one, cv1.response.w05.l15.time-half, cv1.response.w05.l15.allow-entry]` | `wrong-slot`; `wrong-function` |
| `cv1.options.w05.l15.time-half` | `[cv1.response.w05.l15.time-half, cv1.response.w05.l15.time-one, cv1.response.w05.l15.aircon-not-working]` | `wrong-slot`; `wrong-function` |
| `cv1.options.w05.l15.time-noon` | `[cv1.response.w05.l15.time-noon, cv1.response.w05.l15.time-one, cv1.response.w05.l15.allow-entry]` | `wrong-slot`; `wrong-function` |
| `cv1.options.w05.l15.allow` | `[cv1.response.w05.l15.allow-entry, cv1.response.w05.l15.deny-entry, cv1.response.w05.l15.time-one]` | `wrong-polarity`; `wrong-function` |
| `cv1.options.w06.l16.shirt` | `[cv1.response.w06.l16.want-shirt, cv1.response.w06.l16.size-l, cv1.response.w06.l16.ask-black]` | `wrong-stage`; `wrong-stage` |
| `cv1.options.w06.l16.size-l` | `[cv1.response.w06.l16.size-l, cv1.response.w06.l16.size-m, cv1.response.w06.l16.want-shirt]` | `wrong-slot`; `wrong-function` |
| `cv1.options.w06.l16.size-m` | `[cv1.response.w06.l16.size-m, cv1.response.w06.l16.size-l, cv1.response.w06.l16.want-shirt]` | `wrong-slot`; `wrong-function` |
| `cv1.options.w06.l16.black` | `[cv1.response.w06.l16.ask-black, cv1.response.w06.l16.ask-size-m, cv1.response.w06.l16.size-l]` | `wrong-slot`; `wrong-function` |
| `cv1.options.w06.l16.ask-size-m` | `[cv1.response.w06.l16.ask-size-m, cv1.response.w06.l16.ask-black, cv1.response.w06.l16.size-m]` | `wrong-slot`; `wrong-function` |
| `cv1.options.w06.l17.wrong-order` | `[cv1.response.w06.l17.wrong-order, cv1.routine.social.yes, cv1.response.w06.l16.want-shirt]` | `wrong-polarity`; `wrong-function` |
| `cv1.options.w06.l17.missing-water` | `[cv1.response.w06.l17.missing-water, cv1.routine.social.no, cv1.response.w05.l14.pay-qr]` | `wrong-polarity`; `wrong-function` |
| `cv1.options.w06.l17.correct-eighty` | `[cv1.response.w06.l17.correct-eighty, cv1.response.w06.l17.hundred-short, cv1.response.w05.l14.pay-qr]` | `wrong-slot`; `wrong-function` |
| `cv1.options.w06.l17.correct-room` | `[cv1.response.w06.l17.correct-room-a, cv1.response.w05.l13.room-b, cv1.response.w06.l17.wrong-order]` | `wrong-slot`; `wrong-function` |
| `cv1.options.w06.l17.correct-size` | `[cv1.response.w06.l17.correct-size-l, cv1.response.w06.l16.size-m, cv1.response.w06.l17.wrong-order]` | `wrong-slot`; `wrong-function` |
| `cv1.options.w06.l18.confirm-lobby` | `[cv1.response.w06.l18.confirm-lobby, cv1.response.w05.l14.leave-lobby, cv1.routine.social.okay]` | `wrong-function`; `wrong-stage` |
| `cv1.options.w06.l18.confirm-room` | `[cv1.response.w06.l18.confirm-room-a, cv1.response.w05.l13.room-a, cv1.routine.social.okay]` | `wrong-function`; `wrong-stage` |
| `cv1.options.w06.l18.confirm-half` | `[cv1.response.w06.l18.confirm-time-half, cv1.response.w05.l15.time-half, cv1.routine.social.okay]` | `wrong-function`; `wrong-stage` |
| `cv1.options.w06.l18.confirm-one` | `[cv1.response.w06.l18.confirm-time-one, cv1.response.w05.l15.time-one, cv1.routine.social.okay]` | `wrong-function`; `wrong-stage` |
| `cv1.options.w06.l18.ask-english` | `[cv1.response.w06.l18.ask-english, cv1.routine.repair.again, cv1.routine.social.thanks]` | `repeat-failed-strategy`; `premature-close` |
| `cv1.options.w06.l18.type-translation` | `[cv1.response.w06.l18.type-translation, cv1.response.w06.l18.ask-english, cv1.routine.repair.dont-understand]` | `repeat-failed-strategy`; `wrong-stage` |

## 9. Transcript-only utterances and exact model scenes

Transcript-only utterances inherit the audio defaults and never enter an objective bank unless promoted through a cue-variant ID.

| Utterance ID | Thai | Segments | Transliteration | English | Role / prerequisite / source |
|---|---|---|---|---|---|
| `cv1.utterance.w05.l15.tech-at-one` | ช่างจะมาตอนบ่ายโมงครับ | `ช่างจะมา/ตอนบ่ายโมง/ครับ` | châang jà maa dtaawn bàai moong khráp | The technician will come at 1 p.m. | recognition / L15 / `author-a0` |
| `cv1.utterance.w06.l16.black-available` | มีสีดำครับ | `มี/สีดำ/ครับ` | mii sǐi dam khráp | Black is available. | recognition / L16 / `author-a0` |
| `cv1.utterance.w06.l17.check-again` | ขอตรวจอีกครั้งครับ | `ขอตรวจ/อีกครั้ง/ครับ` | khǎw dtrùat ìik khráng khráp | Let me check again. | recognition / L17 + L03 again / `author-a0` |
| `cv1.utterance.w06.l18.yes-half` | ใช่ครับ ตอนเที่ยงครึ่งครับ | `ใช่ครับ/ตอนเที่ยงครึ่ง/ครับ` | châi khráp dtaawn thîang-khrʉ̂ng khráp | Yes; at 12:30. | recognition / L15 time / `author-a0` |

Model-scene manifests:

| Scene ID | Exact ordered turn sources |
|---|---|
| `cv1.scene.w05.l13.model` | `routine.hello`; `routine.hello`; `cue w05.l13.help.v01`; `response w05.l13.keycard-not-working`; `cue w05.l13.room.v01`; `response w05.l13.room-a`; `cue w05.l13.card.v01`; `response w05.l13.show-card`; `routine.reception.wait`; `routine.social.okay`; `routine.reception.done`; `routine.social.thanks` |
| `cv1.scene.w05.l14.model` | `routine.hello`; `routine.hello`; `cue w05.l14.location.v01`; `response w05.l14.location-room-a`; `cue w05.l14.dropoff.v01`; `response w05.l14.leave-lobby`; `cue w05.l14.payment.v01`; `response w05.l14.pay-qr`; `routine.social.okay`; `routine.social.thanks` |
| `cv1.scene.w05.l15.model` | `routine.hello`; `routine.hello`; `cue w05.l13.help.v01`; `response w05.l15.aircon-not-working`; `cue w05.l15.time.v01`; `response w05.l15.time-one`; `cue w05.l15.access.v01`; `response w05.l15.allow-entry`; `utterance w05.l15.tech-at-one`; `routine.social.thanks` |
| `cv1.scene.w06.l16.model` | `routine.hello`; `routine.hello`; `cue w06.l16.item.v01`; `response w06.l16.want-shirt`; `cue w06.l16.size.v01`; `response w06.l16.size-l`; `cue w06.l16.option.v01`; `response w06.l16.ask-black`; `utterance w06.l16.black-available`; `routine.social.thanks` |
| `cv1.scene.w06.l17.model` | `routine.hello`; `routine.hello`; `cue w06.l17.order.v01`; `response w06.l17.wrong-order`; `cue w06.l17.missing.v01`; `response w06.l17.missing-water`; `cue w06.l17.price.v01`; `response w06.l17.correct-eighty`; `utterance w06.l17.check-again`; `routine.social.okay`; `routine.social.sorry`; `routine.social.no-problem` |
| `cv1.scene.w06.l18.model` | `cue w06.l18.detail.v01`; `routine.repair.dont-understand`; `cue w06.l18.detail.v04`; `routine.repair.again`; `cue w06.l18.detail.v01`; `response w06.l18.confirm-lobby`; `utterance w06.l18.yes-half`; `response w06.l18.ask-english`; `cue w06.l18.english.v01`; `response w06.l18.type-translation`; `routine.social.okay`; `[event: partner types; no text is captured]`; `cue w06.l18.detail.v01`; `response w06.l18.confirm-time-half`; `routine.social.yes` |

The L18 bracketed event is not a modeled utterance and is not counted. The scene therefore contains 14 spoken turns. It first uses the L03 “do not understand” and “again” moves, escalates channel only after those fail, then repeats and confirms the original lobby/time task.

## 10. Interaction-registry encoding

Each tuple below expands to one immutable interaction record. A group prefix plus its one-based two-digit tuple ordinal is its exact ID. Tuple fields are:

```text
[sourceId, contextId, acceptedSetId, optionSetId, functionId, prerequisites, sourceNote]
```

`sourceId` is a cue-variant or event ID. Every option set resolves to exactly three full response IDs from Section 8. Model and practice interactions are not sealed. Retention and assessment groups are sealed at their named stage.

### 10.1 Model interactions

| Exact interaction prefix | Ordered tuples 01–03 |
|---|---|
| `cv1.interaction.model.w05.l13` | `[cue-variant.w05.l13.help.v01, context.w05.l13.keycard-failed, accept.w05.l13.keycard-not-working, options.w05.l13.keycard, fn.reception.report-not-working, gate.w04+L13 slots, author-a0]`; `[cue-variant.w05.l13.room.v01, context.w05.l13.room-a, accept.w05.l13.room-a, options.w05.l13.room-a, fn.reception.give-room, W3 numbers+L13 room, privacy-fixture]`; `[cue-variant.w05.l13.card.v01, context.w05.l13.show-id, accept.shared.here, options.w05.l13.here, fn.reception.show-card, L13 card, author-a0]` |
| `cv1.interaction.model.w05.l14` | `[cue-variant.w05.l14.location.v01, context.w05.l14.location-room-a, accept.w05.l14.location-room-a, options.w05.l14.location-room-a, fn.delivery.give-location, L13, privacy-fixture]`; `[cue-variant.w05.l14.dropoff.v01, context.w05.l14.dropoff-lobby, accept.w05.l14.leave-lobby, options.w05.l14.leave-lobby, fn.delivery.choose-dropoff, L14, author-a0]`; `[cue-variant.w05.l14.payment.v01, context.w05.l14.pay-qr, accept.w05.l14.pay-qr, options.w05.l14.pay-qr, fn.payment.choose-method, L08, prior]` |
| `cv1.interaction.model.w05.l15` | `[cue-variant.w05.l13.help.v01, context.w05.l15.aircon-failed, accept.w05.l15.aircon-not-working, options.w05.l15.aircon, fn.maintenance.report-problem, L13 frame+L15 aircon, author-a0]`; `[cue-variant.w05.l15.time.v01, context.w05.l15.time-one, accept.w05.l15.time-one, options.w05.l15.time-one, fn.appointment.accept-time, L12, prior]`; `[cue-variant.w05.l15.access.v01, context.w05.l15.allow-entry, accept.w05.l15.allow-entry, options.w05.l15.allow, fn.access.allow-entry, L15, author-a0]` |
| `cv1.interaction.model.w06.l16` | `[cue-variant.w06.l16.item.v01, context.w06.l16.want-shirt, accept.w06.l16.want-shirt, options.w06.l16.shirt, fn.clothing.choose-item, gate.w05+L16 shirt, author-a0]`; `[cue-variant.w06.l16.size.v01, context.w06.l16.want-size-l, accept.w06.l16.size-l, options.w06.l16.size-l, fn.clothing.choose-size, L16 sizes, author-a0]`; `[cue-variant.w06.l16.option.v01, context.w06.l16.ask-black, accept.w06.l16.ask-black, options.w06.l16.black, fn.clothing.ask-option, L16, author-a0]` |
| `cv1.interaction.model.w06.l17` | `[cue-variant.w06.l17.order.v01, context.w06.l17.wrong-order, accept.w06.l17.wrong-order, options.w06.l17.wrong-order, fn.delivery.reject-wrong-order, L16+L17, author-a0]`; `[cue-variant.w06.l17.missing.v01, context.w06.l17.water-missing, accept.w06.l17.missing-water, options.w06.l17.missing-water, fn.delivery.report-missing, L02+L17, author-a0]`; `[cue-variant.w06.l17.price.v01, context.w06.l17.correct-price-eighty, accept.w06.l17.correct-eighty, options.w06.l17.correct-eighty, fn.correction.correct-detail, L01 price+L17, author-a0]` |
| `cv1.interaction.model.w06.l18` | `[cue-variant.w06.l18.detail.v01, context.w06.l18.confirm-lobby, accept.w06.l18.confirm-lobby, options.w06.l18.confirm-lobby, fn.repair.confirm-meaning, L03+L14+L15, author-a0]`; `[event.w06.l18.ordinary-repair-failed.time, context.w06.l18.return-time, accept.w06.l18.ask-english, options.w06.l18.ask-english, fn.repair.request-english, L03 ordinary repair, author-a0]`; `[cue-variant.w06.l18.english.v01, context.w06.l18.use-translation-app, accept.w06.l18.type-translation, options.w06.l18.type-translation, fn.repair.request-typed-translation, L18 English+app, author-a0]` |

### 10.2 Controlled-practice interactions

| Exact interaction prefix | Ordered tuples 01–03 |
|---|---|
| `cv1.interaction.practice.w05.l13` | `help.v01 → lift-not-working` under `context.w05.l13.lift-failed`; `room.v02 → room-b`; `card.v02 → here` under show-keycard contexts. Option sets: lift, room-b, here. |
| `cv1.interaction.practice.w05.l14` | `location.v01 → location-lobby`; `dropoff.v02 → leave-counter`; `payment.v02 → pay-cash`. Contexts and options match those exact goals. |
| `cv1.interaction.practice.w05.l15` | `help.v02 → aircon-not-working`; `time.v02 → time-half`; `access.v02 → allow-entry`. |
| `cv1.interaction.practice.w06.l16` | `item.v02 → want-shirt`; `size.v02 → size-m`; `option.v02 → ask-size-m`. |
| `cv1.interaction.practice.w06.l17` | `order.v02 → wrong-order`; `missing.v02 → missing-water`; `room.v04 → correct-room-a`. The third source is `cv1.cue-variant.w05.l13.room.v04`. |
| `cv1.interaction.practice.w06.l18` | `detail.v02 + context.w06.l18.confirm-room-a → confirm-room-a`; `event ordinary-repair-failed.location + context.w06.l18.return-location → ask-english`; `english.v02 + context.w06.l18.use-translation-app → type-translation`. |

The compact practice rows expand through the unique full context, accepted-set and option-set IDs bearing the same goal slug. This is deterministic: for example `location.v01 → location-lobby` expands to `cv1.context.w05.l14.location-lobby`, `cv1.accept.w05.l14.location-lobby` and `cv1.options.w05.l14.location-lobby`. No free implementation choice exists.

## 11. Lesson objective Form A manifests

Lesson objective forms deliberately assess the three taught model interactions. They are not described as transfer. Each source expands to intent then response, producing exactly six objective IDs.

| Form ID | Source interactions in order | Exact objective ID pattern |
|---|---|---|
| `cv1.form.lesson.w05.l13.a` | `cv1.interaction.model.w05.l13.01–03` | `cv1.objective.lesson.w05.l13.a.01–06` |
| `cv1.form.lesson.w05.l14.a` | `cv1.interaction.model.w05.l14.01–03` | `cv1.objective.lesson.w05.l14.a.01–06` |
| `cv1.form.lesson.w05.l15.a` | `cv1.interaction.model.w05.l15.01–03` | `cv1.objective.lesson.w05.l15.a.01–06` |
| `cv1.form.lesson.w06.l16.a` | `cv1.interaction.model.w06.l16.01–03` | `cv1.objective.lesson.w06.l16.a.01–06` |
| `cv1.form.lesson.w06.l17.a` | `cv1.interaction.model.w06.l17.01–03` | `cv1.objective.lesson.w06.l17.a.01–06` |
| `cv1.form.lesson.w06.l18.a` | `cv1.interaction.model.w06.l18.01–03` | `cv1.objective.lesson.w06.l18.a.01–06` |

For every row, objective 01/02 expand source 01, 03/04 source 02, and 05/06 source 03. The odd objective is intent/initiation; the even objective is response/partner-reply intent.

## 12. +1 retention registry and manifests

Form A is familiar retention and each interaction declares `rehearsalOf` the corresponding model interaction. Form B is an unused cue/slot pairing. Every row contains three interactions and expands to six objectives. Context, accepted set and option set are the exact goal-matching records in Sections 6–8.

| Form ID | Interaction IDs | Exact source signatures in order |
|---|---|---|
| `cv1.form.retention.w05.l13.d1.a` | `cv1.interaction.retention.w05.l13.d1.a.01–03` | `help.v01 + keycard-failed → keycard-not-working` (`rehearsalOf:model.w05.l13.01`); `room.v01 + room-a → room-a` (`rehearsalOf:.02`); `card.v01 + show-id → here` (`rehearsalOf:.03`) |
| `cv1.form.retention.w05.l13.d1.b` | `cv1.interaction.retention.w05.l13.d1.b.01–03` | `help.v04 + keycard-failed → keycard-not-working`; `room.v03 + room-a → yes`; `card.v03 + show-id → here` |
| `cv1.form.retention.w05.l14.d1.a` | `cv1.interaction.retention.w05.l14.d1.a.01–03` | model L14 interactions 01–03 with `rehearsalOf` |
| `cv1.form.retention.w05.l14.d1.b` | `cv1.interaction.retention.w05.l14.d1.b.01–03` | `location.v03 + location-room-a → yes`; `dropoff.v03 + dropoff-room → leave-room`; `payment.v03 + pay-qr → pay-qr` |
| `cv1.form.retention.w05.l15.d1.a` | `cv1.interaction.retention.w05.l15.d1.a.01–03` | model L15 interactions 01–03 with `rehearsalOf` |
| `cv1.form.retention.w05.l15.d1.b` | `cv1.interaction.retention.w05.l15.d1.b.01–03` | `help.v03 + aircon-failed → aircon-not-working`; `time.v03 + time-one → time-one`; `access.v03 + allow-entry → allow-entry` |
| `cv1.form.retention.w06.l16.d1.a` | `cv1.interaction.retention.w06.l16.d1.a.01–03` | model L16 interactions 01–03 with `rehearsalOf` |
| `cv1.form.retention.w06.l16.d1.b` | `cv1.interaction.retention.w06.l16.d1.b.01–03` | `item.v03 + want-shirt → want-shirt`; `size.v03 + want-size-l → size-l`; `option.v03 + ask-black → ask-black` |
| `cv1.form.retention.w06.l17.d1.a` | `cv1.interaction.retention.w06.l17.d1.a.01–03` | model L17 interactions 01–03 with `rehearsalOf` |
| `cv1.form.retention.w06.l17.d1.b` | `cv1.interaction.retention.w06.l17.d1.b.01–03` | `order.v03 + wrong-order → wrong-order`; `missing.v03 + water-missing → missing-water`; `price.v02 + correct-price-eighty → correct-eighty` |
| `cv1.form.retention.w06.l18.d1.a` | `cv1.interaction.retention.w06.l18.d1.a.01–03` | model L18 interactions 01–03 with `rehearsalOf`; for the learner-led source, the full event/reply interaction is repeated |
| `cv1.form.retention.w06.l18.d1.b` | `cv1.interaction.retention.w06.l18.d1.b.01–03` | `detail.v03 + confirm-time-one → confirm-time-one`; `event ordinary-repair-failed.room + return-room → ask-english`; `english.v03 + use-translation-app → type-translation` |

Exact objectives are `cv1.objective.retention.<same week/lesson/stage/form>.01–06`, paired in source order. Assignment IDs are `cv1.retention.w05.l13.d1` through `cv1.retention.w06.l18.d1`; due date is actual lesson completion +1 Bangkok day.

## 13. +7 retention registry, cross interactions and manifests

Each form has exactly four disjoint interactions: three source-lesson interactions plus one cross-scene interaction. It expands to eight objectives and requires two additional unscored spoken prompts. No row repeats a model, practice or +1 signature.

| Form ID | Exact lesson interactions 01–03 | Cross interaction 04 |
|---|---|---|
| `cv1.form.retention.w05.l13.d7.a` | `help.v03 + lift-failed → lift-not-working`; `room.v04 + room-b → yes`; `card.v04 + show-id → here` | `room.v05 + room-a → room-a` in maintenance context |
| `cv1.form.retention.w05.l13.d7.b` | `help.v05 + lift-failed → lift-not-working`; `room.v02 + room-a → room-a`; `card.v06 + show-keycard → here` | `location.v05 + room-b → room-b` in delivery context |
| `cv1.form.retention.w05.l14.d7.a` | `location.v02 + location-room-b → location-room-b`; `dropoff.v04 + dropoff-lobby → leave-lobby`; `payment.v04 + pay-cash → pay-cash` | `dropoff.v06 + dropoff-lobby → leave-lobby` in later service context |
| `cv1.form.retention.w05.l14.d7.b` | `location.v06 + location-room-b → location-room-b`; `dropoff.v03 + dropoff-counter → leave-counter`; `payment.v06 + pay-qr → pay-qr` | `dropoff.v06 + dropoff-room → leave-room` in later service context |
| `cv1.form.retention.w05.l15.d7.a` | `help.v06 + aircon-failed → aircon-not-working`; `time.v04 + time-one → time-one`; `access.v04 + allow-entry → allow-entry` | `time.v07 + time-one → time-one` in social-plan context |
| `cv1.form.retention.w05.l15.d7.b` | `help.v02 + lift-failed → lift-not-working`; `time.v05 + time-half → time-half`; `access.v05 + allow-entry → allow-entry` | `time.v08 + time-half → time-half` in social-plan context |
| `cv1.form.retention.w06.l16.d7.a` | `item.v04 + want-shirt → want-shirt`; `size.v04 + want-size-l → size-l`; `option.v04 + ask-black → ask-black` | `size.v06 + correct-size-l → correct-size-l` in correction context |
| `cv1.form.retention.w06.l16.d7.b` | `item.v06 + want-shirt → want-shirt`; `size.v05 + want-size-m → size-m`; `option.v05 + ask-size-m → ask-size-m` | `item.v05 + want-shirt → want-shirt` in a shirt-rack context |
| `cv1.form.retention.w06.l17.d7.a` | `order.v04 + wrong-order → wrong-order`; `missing.v04 + water-missing → missing-water`; `price.v03 + correct-price-eighty → correct-eighty` | `location.v06 + correct-room-a → correct-room-a` in delivery-detail context |
| `cv1.form.retention.w06.l17.d7.b` | `order.v06 + wrong-order → wrong-order`; `missing.v05 + water-missing → missing-water`; `price.v05 + correct-price-eighty → correct-eighty` | `size.v05 + correct-size-l → correct-size-l` in clothing-correction context |
| `cv1.form.retention.w06.l18.d7.a` | `detail.v04 + confirm-lobby → confirm-lobby`; `event ordinary-repair-failed.price + return-price → ask-english`; `english.v04 + use-translation-app → type-translation` | `detail.v07 + confirm-time-half → confirm-time-half` in maintenance context |
| `cv1.form.retention.w06.l18.d7.b` | `detail.v05 + confirm-time-half → confirm-time-half`; `event ordinary-repair-failed.location + return-location-after-two-repairs → ask-english`; `english.v05 + use-translation-app → type-translation` | `detail.v06 + confirm-room-a → confirm-room-a` in maintenance context |

Exact interaction IDs are `cv1.interaction.retention.<week>.<lesson>.d7.<form>.01–04`; exact objective IDs are `cv1.objective.retention.<week>.<lesson>.d7.<form>.01–08`. Assignment IDs end `.d7`; due date is actual lesson completion +7, subject to the parent’s late-D1 rule.

The following additional cue variants are part of the registry because they are used above:

| Cue variant ID | Family | Thai | Segments | Transliteration | English | Prerequisite/source |
|---|---|---|---|---|---|---|
| `cv1.cue-variant.w05.l13.help.v06` | reception.help-problem | แอร์ใช้ได้ไหมครับ | `แอร์/ใช้ได้ไหม/ครับ` | aae chái dâai mǎi khráp | Does the air conditioner work? | L15 before D7 / `later-cross` |
| `cv1.cue-variant.w06.l18.english.v05` | repair.english-ability | พูดอังกฤษไม่เก่งครับ | `พูดอังกฤษ/ไม่เก่ง/ครับ` | phûut ang-grìt mâi gèng khráp | I do not speak English well. | L18 family contraction / `author-a0` |

## 14. Gate source pools and three exact cumulative forms

Gate records are sealed. Each row below expands to one full interaction using the exact cue/event, accepted set, option set and function already defined in §§2–8. Its context ID is `cv1.context.assessment.<week>.<lesson-or-cumulative>.<pool>.<NN>` and its exact visible context card is the text in the second column. Gate context cards are semantically distinct from lesson, practice and retention contexts; changing only an ID is forbidden.

For an ordered gate manifest `[I1…I8]`, objective `.01…04` are `intent` on `I1…I4`, `.05…08` are `response` on `I1…I4`, and `.09…12` are sealed response/event-request objectives on `I5…I8`. Every form therefore has four cue-intent, four response-selection and four sealed-recombination objectives.

### 14.1 Week 5 current-unit pool

| Interaction ID | Exact context card | Cue/event → accepted / options | Function |
|---|---|---|---|
| `cv1.interaction.assessment.w05.l13.gate-a.01` | Evening condo desk; the fictional keycard has failed. | `help.v04` → `accept.w05.l13.keycard-not-working` / `options.w05.l13.keycard` | reception.report-not-working |
| `cv1.interaction.assessment.w05.l13.gate-a.02` | Visitor desk confirms fictional room 213. | `room.v04` → `accept.shared.yes` / `options.w05.l13.yes` | reception.give-room |
| `cv1.interaction.assessment.w05.l13.gate-a.03` | Day desk asks for the generic ID card. | `card.v05` → `accept.shared.here` / `options.w05.l13.here` | reception.show-card |
| `cv1.interaction.assessment.w05.l13.gate-a.04` | Lobby desk; the fictional lift has failed. | `help.v05` → `accept.w05.l13.lift-not-working` / `options.w05.l13.lift` | reception.report-not-working |
| `cv1.interaction.assessment.w05.l13.gate-b.01` | Building office asks which item failed; the fictional keycard failed. | `help.v03` → `accept.w05.l13.keycard-not-working` / `options.w05.l13.keycard` | reception.report-not-working |
| `cv1.interaction.assessment.w05.l13.gate-b.02` | Parcel desk asks for fictional room 213. | `room.v02` → `accept.w05.l13.room-b` / `options.w05.l13.room-b` | reception.give-room |
| `cv1.interaction.assessment.w05.l13.gate-b.03` | Security desk asks for the generic ID card again. | `card.v07` → `accept.shared.here` / `options.w05.l13.here` | reception.show-card |
| `cv1.interaction.assessment.w05.l13.gate-b.04` | Repair desk confirms fictional room 123. | `room.v03` → `accept.shared.yes` / `options.w05.l13.yes` | reception.give-room |
| `cv1.interaction.assessment.w05.l14.gate-a.01` | Male rider needs the fictional room; it is 123. | `location.v05` → `accept.w05.l14.location-room-a` / `options.w05.l14.location-room-a` | delivery.give-location |
| `cv1.interaction.assessment.w05.l14.gate-a.02` | Male rider offers the lobby; that is the fixed drop-off goal. | `dropoff.v05` → `accept.w05.l14.leave-lobby` / `options.w05.l14.leave-lobby` | delivery.choose-dropoff |
| `cv1.interaction.assessment.w05.l14.gate-a.03` | Delivery handoff confirms the fixed cash branch. | `payment.v05` → `accept.w05.l14.pay-cash` / `options.w05.l14.pay-cash` | payment.choose-method |
| `cv1.interaction.assessment.w05.l14.gate-a.04` | Office delivery should be left at the counter. | `dropoff.v02` → `accept.w05.l14.leave-counter` / `options.w05.l14.leave-counter` | delivery.choose-dropoff |
| `cv1.interaction.assessment.w05.l14.gate-b.01` | Male rider confirms fictional room 213. | `location.v06` → `accept.shared.yes` / `options.w05.l13.yes` | delivery.give-location |
| `cv1.interaction.assessment.w05.l14.gate-b.02` | Rider offers the room, but the fixed goal is lobby drop-off. | `dropoff.v04` → `accept.w05.l14.leave-lobby` / `options.w05.l14.leave-lobby` | delivery.choose-dropoff |
| `cv1.interaction.assessment.w05.l14.gate-b.03` | Delivery handoff confirms the fixed QR branch. | `payment.v06` → `accept.w05.l14.pay-qr` / `options.w05.l14.pay-qr` | payment.choose-method |
| `cv1.interaction.assessment.w05.l14.gate-b.04` | Male rider confirms that you are in the lobby. | `location.v04` → `accept.shared.yes` / `options.w05.l13.yes` | delivery.give-location |
| `cv1.interaction.assessment.w05.l15.gate-a.01` | Maintenance desk asks whether the fictional air conditioner works; it does not. | `help.v06` → `accept.w05.l15.aircon-not-working` / `options.w05.l15.aircon` | maintenance.report-problem |
| `cv1.interaction.assessment.w05.l15.gate-a.02` | Technician offers noon; it works in the fixed scenario. | `time.v06` → `accept.w05.l15.time-noon` / `options.w05.l15.time-noon` | appointment.accept-time |
| `cv1.interaction.assessment.w05.l15.gate-a.03` | Technician asks to enter at 12:30; fixed fictional access is allowed. | `access.v06` → `accept.w05.l15.allow-entry` / `options.w05.l15.allow` | access.allow-entry |
| `cv1.interaction.assessment.w05.l15.gate-a.04` | Technician offers 12:30; it works. | `time.v05` → `accept.w05.l15.time-half` / `options.w05.l15.time-half` | appointment.accept-time |
| `cv1.interaction.assessment.w05.l15.gate-b.01` | Maintenance desk; the fictional lift has failed. | `help.v05` → `accept.w05.l13.lift-not-working` / `options.w05.l15.lift` | maintenance.report-problem |
| `cv1.interaction.assessment.w05.l15.gate-b.02` | Technician offers 1 p.m.; it works. | `time.v03` → `accept.w05.l15.time-one` / `options.w05.l15.time-one` | appointment.accept-time |
| `cv1.interaction.assessment.w05.l15.gate-b.03` | Technician asks to enter fictional room 213; fixed access is allowed. | `access.v05` → `accept.w05.l15.allow-entry` / `options.w05.l15.allow` | access.allow-entry |
| `cv1.interaction.assessment.w05.l15.gate-b.04` | Technician asks whether 1 p.m. is convenient; it is. | `time.v04` → `accept.w05.l15.time-one` / `options.w05.l15.time-one` | appointment.accept-time |

### 14.2 Week 6 current-unit pool

| Interaction ID | Exact context card | Cue/event → accepted / options | Function |
|---|---|---|---|
| `cv1.interaction.assessment.w06.l16.gate-a.01` | Male seller; choose the only taught clothing item. | `item.v04` → `accept.w06.l16.want-shirt` / `options.w06.l16.shirt` | clothing.choose-item |
| `cv1.interaction.assessment.w06.l16.gate-a.02` | Male seller offers M or L; fixed goal is L. | `size.v04` → `accept.w06.l16.size-l` / `options.w06.l16.size-l` | clothing.choose-size |
| `cv1.interaction.assessment.w06.l16.gate-a.03` | This one is M; ask whether the only taught colour, black, exists. | `option.v04` → `accept.w06.l16.ask-black` / `options.w06.l16.black` | clothing.ask-option |
| `cv1.interaction.assessment.w06.l16.gate-a.04` | Male seller confirms M; fixed goal is M. | `size.v05` → `accept.w06.l16.size-m` / `options.w06.l16.size-m` | clothing.choose-size |
| `cv1.interaction.assessment.w06.l16.gate-b.01` | Shirt rack; the fixed choice is this shirt. | `item.v05` → `accept.w06.l16.want-shirt` / `options.w06.l16.shirt` | clothing.choose-item |
| `cv1.interaction.assessment.w06.l16.gate-b.02` | Male seller asks the size; fixed goal is M. | `size.v01` → `accept.w06.l16.size-m` / `options.w06.l16.size-m` | clothing.choose-size |
| `cv1.interaction.assessment.w06.l16.gate-b.03` | Black exists; ask whether size M exists. | `option.v05` → `accept.w06.l16.ask-size-m` / `options.w06.l16.ask-size-m` | clothing.ask-option |
| `cv1.interaction.assessment.w06.l16.gate-b.04` | Male seller offers the shirt; accept it. | `item.v06` → `accept.w06.l16.want-shirt` / `options.w06.l16.shirt` | clothing.choose-item |
| `cv1.interaction.assessment.w06.l17.gate-a.01` | Fictional delivery item is not yours. | `order.v05` → `accept.w06.l17.wrong-order` / `options.w06.l17.wrong-order` | delivery.reject-wrong-order |
| `cv1.interaction.assessment.w06.l17.gate-a.02` | One taught bottle of water is missing. | `missing.v06` → `accept.w06.l17.missing-water` / `options.w06.l17.missing-water` | delivery.report-missing |
| `cv1.interaction.assessment.w06.l17.gate-a.03` | Fictional total says 100; fixed correct total is 80. | `price.v04` → `accept.w06.l17.correct-eighty` / `options.w06.l17.correct-eighty` | correction.correct-detail |
| `cv1.interaction.assessment.w06.l17.gate-a.04` | Male rider asks if 100 is correct; fixed correct total is 80. | `price.v06` → `accept.w06.l17.correct-eighty` / `options.w06.l17.correct-eighty` | correction.correct-detail |
| `cv1.interaction.assessment.w06.l17.gate-b.01` | Fictional delivered item is the wrong one. | `order.v03` → `accept.w06.l17.wrong-order` / `options.w06.l17.wrong-order` | delivery.reject-wrong-order |
| `cv1.interaction.assessment.w06.l17.gate-b.02` | Male rider asks what is missing; it is one water. | `missing.v04` → `accept.w06.l17.missing-water` / `options.w06.l17.missing-water` | delivery.report-missing |
| `cv1.interaction.assessment.w06.l17.gate-b.03` | Male rider proposes 100; fixed correct total is 80. | `price.v05` → `accept.w06.l17.correct-eighty` / `options.w06.l17.correct-eighty` | correction.correct-detail |
| `cv1.interaction.assessment.w06.l17.gate-b.04` | Male rider confirms this item; it is wrong. | `order.v06` → `accept.w06.l17.wrong-order` / `options.w06.l17.wrong-order` | delivery.reject-wrong-order |
| `cv1.interaction.assessment.w06.l18.gate-a.01` | Ordinary repair failed; confirm fictional room 123, then finish the room task. | `detail.v06` → `accept.w06.l18.confirm-room-a` / `options.w06.l18.confirm-room` | repair.confirm-meaning |
| `cv1.interaction.assessment.w06.l18.gate-a.02` | Ordinary repair failed twice; price is still unresolved. | `event.ordinary-repair-failed.price` → `accept.w06.l18.ask-english` / `options.w06.l18.ask-english` | repair.request-english |
| `cv1.interaction.assessment.w06.l18.gate-a.03` | English is unavailable; request typed translation and return to the price. | `english.v02` → `accept.w06.l18.type-translation` / `options.w06.l18.type-translation` | repair.request-typed-translation |
| `cv1.interaction.assessment.w06.l18.gate-a.04` | Ordinary repair failed; confirm 12:30, then finish the time task. | `detail.v05` → `accept.w06.l18.confirm-time-half` / `options.w06.l18.confirm-half` | repair.confirm-meaning |
| `cv1.interaction.assessment.w06.l18.gate-b.01` | Ordinary repair failed; confirm 1 p.m., then finish the time task. | `detail.v03` → `accept.w06.l18.confirm-time-one` / `options.w06.l18.confirm-one` | repair.confirm-meaning |
| `cv1.interaction.assessment.w06.l18.gate-b.02` | Ordinary repair failed twice; fictional room is unresolved. | `event.ordinary-repair-failed.room` → `accept.w06.l18.ask-english` / `options.w06.l18.ask-english` | repair.request-english |
| `cv1.interaction.assessment.w06.l18.gate-b.03` | English remains unavailable; request typed translation and return to room. | `english.v04` → `accept.w06.l18.type-translation` / `options.w06.l18.type-translation` | repair.request-typed-translation |
| `cv1.interaction.assessment.w06.l18.gate-b.04` | Ordinary repair failed; confirm the lobby and finish the location task. | `detail.v04` → `accept.w06.l18.confirm-lobby` / `options.w06.l18.confirm-lobby` | repair.confirm-meaning |

### 14.3 Exact cumulative interactions

These are English-only learner events followed by an already taught partner reply. Each event has `ttsText:null`; the reply is an audio-intent objective. Full imported response/cue authority remains in the owning W1–W4 registry.

| Interaction ID | Exact event → learner move; actual partner reply |
|---|---|
| `cv1.interaction.assessment.w05.cumulative.a.01` | Meet a colleague at the taught school place → `cv1.response.lunch.meet-school`; partner `cv1.routine.social.okay` |
| `cv1.interaction.assessment.w05.cumulative.a.02` | Ask a man where the BTS station is → `cv1.response.w02.l06.ask-bts`; partner `cv1.cue-variant.import.w02.straight.v01` |
| `cv1.interaction.assessment.w05.cumulative.b.01` | A shop total is known; request cash payment → `cv1.response.checkout.pay-cash-question`; partner `cv1.routine.social.okay` |
| `cv1.interaction.assessment.w05.cumulative.b.02` | The taxi cue was missed once; request it again → `cv1.response.w01.l03.again`; partner repeats `cv1.cue-variant.w02.l04.destination.v03` |
| `cv1.interaction.assessment.w05.cumulative.c.01` | A mango-bag price is known; take one bag → `cv1.response.market.take-one-bag`; partner `cv1.cue-variant.market.unit-price-statement.v01` |
| `cv1.interaction.assessment.w05.cumulative.c.02` | Give Ekkamai Station as the taxi destination → `cv1.response.w02.l04.destination-ekkamai-station`; partner `cv1.cue-variant.import.w02.destination-confirm.v01` |
| `cv1.interaction.assessment.w06.cumulative.a.01` | Ask for a lobby drop-off → `cv1.response.w05.l14.leave-lobby`; partner `cv1.routine.social.okay` |
| `cv1.interaction.assessment.w06.cumulative.a.02` | Counter-propose the taught 12:30 meeting time → `cv1.response.lunch.counter-twelve-thirty`; partner `cv1.routine.social.okay` |
| `cv1.interaction.assessment.w06.cumulative.b.01` | A shop total is known; request cash payment → `cv1.response.checkout.pay-cash-question`; partner `cv1.routine.social.okay` under a new correction-shop context |
| `cv1.interaction.assessment.w06.cumulative.b.02` | Give fictional room 123 at reception → `cv1.response.w05.l13.room-a`; partner `cv1.routine.social.okay` |
| `cv1.interaction.assessment.w06.cumulative.c.01` | A route cue was missed once; request it again → `cv1.response.w01.l03.again`; partner repeats `cv1.cue-variant.w02.l05.which-way.v02` |
| `cv1.interaction.assessment.w06.cumulative.c.02` | A market unit price is known; take two bags → `cv1.response.market.take-two-bags`; partner `cv1.routine.market.total-ninety` |

### 14.4 Exact gate forms

All abbreviated pool IDs expand under `cv1.interaction.assessment.<week>.`. Each current-unit pool reference is unique across A/B/C.

| Form ID | Ordered `I1…I8` source interactions |
|---|---|
| `cv1.form.gate.w05.a` | `w05.l13.gate-a.01`, `w05.l14.gate-a.01`, `w05.l15.gate-a.01`, `w05.cumulative.a.01`, `w05.l13.gate-a.02`, `w05.l14.gate-a.02`, `w05.l15.gate-a.02`, `w05.cumulative.a.02` |
| `cv1.form.gate.w05.b` | `w05.l13.gate-b.01`, `w05.l14.gate-b.01`, `w05.l15.gate-b.01`, `w05.cumulative.b.01`, `w05.l13.gate-b.02`, `w05.l14.gate-b.02`, `w05.l15.gate-b.02`, `w05.cumulative.b.02` |
| `cv1.form.gate.w05.c` | `w05.l13.gate-a.03`, `w05.l14.gate-a.03`, `w05.l15.gate-a.03`, `w05.cumulative.c.01`, `w05.l13.gate-b.03`, `w05.l14.gate-b.03`, `w05.l15.gate-b.03`, `w05.cumulative.c.02` |
| `cv1.form.gate.w06.a` | `w06.l16.gate-a.01`, `w06.l17.gate-a.01`, `w06.l18.gate-a.01`, `w06.cumulative.a.01`, `w06.l16.gate-a.02`, `w06.l17.gate-a.02`, `w06.l18.gate-a.02`, `w06.cumulative.a.02` |
| `cv1.form.gate.w06.b` | `w06.l16.gate-b.01`, `w06.l17.gate-b.01`, `w06.l18.gate-b.01`, `w06.cumulative.b.01`, `w06.l16.gate-b.02`, `w06.l17.gate-b.02`, `w06.l18.gate-b.02`, `w06.cumulative.b.02` |
| `cv1.form.gate.w06.c` | `w06.l16.gate-a.03`, `w06.l17.gate-a.03`, `w06.l18.gate-a.03`, `w06.cumulative.c.01`, `w06.l16.gate-b.03`, `w06.l17.gate-b.03`, `w06.l18.gate-b.03`, `w06.cumulative.c.02` |

Each form produces 12 immutable objectives, exactly nine current-unit objectives—three per current lesson—and three earlier-unit objectives. Forms are pairwise source- and signature-disjoint. Unused `.04` pool rows stay sealed as later retake supply.

## 15. Unit +30 interactions and exact A/B forms

Every row below has a new, stage-specific context whose exact English card is the Context column. It references only cue/response atoms taught by the owning gate. No gate interaction ID or signature is reused.

| Interaction ID | Exact context | Cue/event → accepted / options |
|---|---|---|
| `cv1.interaction.retention.w05.d30.a.l13.01` | Late-shift reception; fictional keycard still fails. | `help.v02` → keycard-not-working / keycard |
| `cv1.interaction.retention.w05.d30.a.l13.02` | Late-shift desk asks for fictional room 123. | `room.v01` → room-a / room-a |
| `cv1.interaction.retention.w05.d30.a.l14.01` | Night rider needs fictional room 213. | `location.v02` → location-room-b / location-room-b |
| `cv1.interaction.retention.w05.d30.a.l14.02` | Night rider asks where to leave it; fixed goal is lobby. | `dropoff.v03` → leave-lobby / leave-lobby |
| `cv1.interaction.retention.w05.d30.a.l15.01` | Weekend technician offers 12:30; it works. | `time.v02` → time-half / time-half |
| `cv1.interaction.retention.w05.d30.a.l15.02` | Weekend technician asks to enter; fictional access is allowed. | `access.v04` → allow-entry / allow |
| `cv1.interaction.retention.w05.d30.b.l13.01` | Morning building office asks what failed; the lift failed. | `help.v03` → lift-not-working / lift |
| `cv1.interaction.retention.w05.d30.b.l13.02` | Morning desk asks for the practice keycard. | `card.v06` → here / here |
| `cv1.interaction.retention.w05.d30.b.l14.01` | Morning rider asks your location; fixed branch is lobby. | `location.v01` → location-lobby / location-lobby |
| `cv1.interaction.retention.w05.d30.b.l14.02` | Morning delivery offers QR or cash; fixed branch is QR. | `payment.v02` → pay-qr / pay-qr |
| `cv1.interaction.retention.w05.d30.b.l15.01` | Morning desk asks whether the fictional air conditioner works; it does not. | `help.v06` → aircon-not-working / aircon |
| `cv1.interaction.retention.w05.d30.b.l15.02` | Morning technician offers noon; it works. | `time.v06` → time-noon / time-noon |
| `cv1.interaction.retention.w06.d30.a.l16.01` | Later shirt shop confirms the shirt; take it. | `item.v03` → want-shirt / shirt |
| `cv1.interaction.retention.w06.d30.a.l16.02` | Later shirt shop offers M or L; fixed goal is L. | `size.v02` → size-l / size-l |
| `cv1.interaction.retention.w06.d30.a.l17.01` | Later fictional delivery shows the wrong item. | `order.v02` → wrong-order / wrong-order |
| `cv1.interaction.retention.w06.d30.a.l17.02` | Later fictional delivery asks whether all items arrived; one water is missing. | `missing.v02` → missing-water / missing-water |
| `cv1.interaction.retention.w06.d30.a.l18.01` | Later repair requires confirmation of fictional room 123. | `detail.v02` → confirm-room-a / confirm-room |
| `cv1.interaction.retention.w06.d30.a.l18.02` | Later repair: English unavailable; request typed translation. | `english.v03` → type-translation / type-translation |
| `cv1.interaction.retention.w06.d30.b.l16.01` | Return shirt shop offers the shirt; take it. | `item.v02` → want-shirt / shirt |
| `cv1.interaction.retention.w06.d30.b.l16.02` | Return shirt shop says L exists; ask for black. | `option.v03` → ask-black / black |
| `cv1.interaction.retention.w06.d30.b.l17.01` | Return fictional delivery proposes 100; fixed correct total is 80. | `price.v02` → correct-eighty / correct-eighty |
| `cv1.interaction.retention.w06.d30.b.l17.02` | Return fictional delivery confirms this item; it is wrong. | `order.v04` → wrong-order / wrong-order |
| `cv1.interaction.retention.w06.d30.b.l18.01` | Return repair requires confirmation of 1 p.m. | `detail.v03` → confirm-time-one / confirm-one |
| `cv1.interaction.retention.w06.d30.b.l18.02` | Return repair: English unavailable; request typed translation. | `english.v04` → type-translation / type-translation |

```text
cv1.form.retention.w05.d30.a =
  w05.d30.a.l13.01,.02; w05.d30.a.l14.01,.02; w05.d30.a.l15.01,.02
cv1.form.retention.w05.d30.b =
  w05.d30.b.l13.01,.02; w05.d30.b.l14.01,.02; w05.d30.b.l15.01,.02
cv1.form.retention.w06.d30.a =
  w06.d30.a.l16.01,.02; w06.d30.a.l17.01,.02; w06.d30.a.l18.01,.02
cv1.form.retention.w06.d30.b =
  w06.d30.b.l16.01,.02; w06.d30.b.l17.01,.02; w06.d30.b.l18.01,.02
```

Every abbreviated item expands under `cv1.interaction.retention.`. Each interaction expands intent then response, yielding 12 objectives per form. Assignment IDs are `cv1.retention.w05.d30` and `cv1.retention.w06.d30`, due 30 Bangkok dates after the corresponding gate's first pass.

## 16. Exact recurrence ledger

The rows track productive families rather than pretending each lexical slot belongs in every domain. `L`, `1A/1B`, `7A/7B`, `G` and `30A/30B` refer to the exact source sections above. Later IDs are required answer-before-reveal practice interactions; they reuse registered atoms and add no Thai.

| Function / frame | Intro | +1 | +7 | Later retrieval 1 | Later retrieval 2 / cross-domain | +30 |
|---|---|---|---|---|---|---|
| reception.report-not-working / not-working | L13 lesson | L13 1A/B | L13 7A/B | L15 aircon/lift | `cv1.interaction.maintenance.w05.not-working` service desk | W5 30A/B |
| reception.give-room / room-answer | L13 lesson | L13 1A/B | L13 7A/B | L14 delivery location | L17 room correction | W5 30A/B |
| reception.show-card / handover | L13 lesson | L13 1A/B | L13 7A/B | W5 consolidation | `cv1.interaction.maintenance.w05.reception-card` | W5 30A/B |
| delivery.give-location | L14 lesson | L14 1A/B | L14 7A/B | L18 repair detail | L21 urgent-location frame | W5 30A/B |
| delivery.choose-dropoff | L14 lesson | L14 1A/B | L14 7A/B | L17 delivery correction | L24 condo mini-scene | W5 30A/B |
| payment.choose-method | L14 lesson | L14 1A/B | L14 7A/B | L17 correction | L24 transaction mix | W5 30A/B |
| maintenance.report-problem / not-working | L15 lesson | L15 1A/B | L15 7A/B | L18 repair | L23 service problem | W5 30A/B |
| appointment.accept-time | L15 lesson | L15 1A/B | L15 7A/B | L18 confirmation | L22 opening-hours contrast | W5 30A/B |
| access.allow-entry | L15 lesson | L15 1A/B | L15 7A/B | W5 consolidation | `cv1.interaction.maintenance.w05.access` | W5 30A/B |
| clothing.choose-item | L16 lesson | L16 1A/B | L16 7A/B | L17 wrong-item contrast | L23 ownership contrast | W6 30A/B |
| clothing.choose-size | L16 lesson | L16 1A/B | L16 7A/B | L17 correct-size | L24 transaction mix | W6 30A/B |
| clothing.ask-option | L16 lesson | L16 1A/B | L16 7A/B | L17 correct detail | L22 service-availability frame | W6 30A/B |
| delivery.reject-wrong-order | L17 lesson | L17 1A/B | L17 7A/B | L23 wrong ownership | L24 service mini-scene | W6 30A/B |
| delivery.report-missing | L17 lesson | L17 1A/B | L17 7A/B | L23 missing towel | L24 condo mini-scene | W6 30A/B |
| correction.correct-detail | L17 lesson | L17 1A/B | L17 7A/B | L18 confirm detail | L23 service correction | W6 30A/B |
| repair.confirm-meaning | L18 lesson | L18 1A/B | L18 7A/B | L20 fictional-label confirmation | L22 time/service reply confirmation | W6 30A/B |
| repair.request-english | L18 lesson | L18 1A/B | L18 7A/B | W7 health-language repair | L23 service repair | W6 30A/B |
| repair.request-typed-translation | L18 lesson | L18 1A/B | L18 7A/B | W7 fictional pharmacy repair | L24 integrated repair | W6 30A/B |

Recognition cue-family recurrence follows the same owning lesson, +1 and +7 forms, then the two later interactions named in the corresponding function row. A transcript exposure alone cannot satisfy a later cell. Shared greetings/thanks recur in every later model scene but remain routine, not active burden.

## 17. Closure counts and invariants

| Contract | Count |
|---|---:|
| lessons / model scenes | 6 / 6 |
| lesson objective forms | 6 × 6 objectives |
| +1 forms | 12 × 6 objectives |
| +7 forms | 12 × 8 objectives |
| current-unit gate source interactions | 48; 24 per week |
| cumulative gate source interactions | 12; 6 per week |
| gate forms | 6 × 12 objectives |
| unit +30 forms | 4 × 12 objectives |
| learner/model native-audio dependencies | 0 |
| unresolved/TBD fields | 0 |

Validation must expand every abbreviated ID, then assert: every reference resolves globally; all option sets contain exactly one displayed accepted response and two functionally wrong distractors; every objective belongs to one form; forms A/B/C are source- and signature-disjoint; no gate or +30 signature occurs in a prior transcript, help, distractor, lesson, practice, +1 or +7 surface; every cue/slot atom precedes its first test; L16 uses only shirt, L, M and black; L18 uses no phone or stored translation text, follows ordinary repair first and returns to the original task; all fictional rooms remain 123/213; every complete modeled Thai line is male-polite; and device TTS remains the only audio model.

The registry is closed at revision 1. It contains no implementation-time content choice and makes no native-review or pronunciation-assessment claim.
