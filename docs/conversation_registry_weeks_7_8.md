# Bangkok Conversation Foundation — cv1 Machine Registry, Weeks 7–8

**Registry revision:** 1
**Curriculum revision:** 1
**Status:** binding content registry for `cv1.lesson.w07.l19.pharmacy-facts` through `cv1.lesson.w08.l24.bangkok-day`
**Parent authorities:** `conversation_course_implementation_spec.md`, `conversation_course_content_inventory.md`
**Scope:** content data only; this registry changes no application code

## 1. Normative representation

This file is machine-authoritative for Weeks 7–8. A generated implementation may change storage syntax, but not an ID, Thai payload, segmentation, pronunciation spelling, English meaning, role, prerequisite, option set, bank assignment, or form membership without incrementing this registry revision.

Every entity has `revision:1`. Every Thai line has:

```text
lang: th-TH
rate: 0.72
slowRepairRate: 0.58
ttsText: exact Thai column with slash separators removed
audioSource: device-speech-synthesis
```

No authored or remote audio is permitted. A slash marks a meaningful learning chunk, not an orthographic space. A complete Thai utterance must end `ครับ`; every modeled speaker is male. The female polite particle is invalid anywhere in this registry. Thai script, transliteration and English are feedback/support, never a reading prerequisite.

Non-language entities (`function`, `context`, `event`, `accepted-set`, `option-set`, `form`) have `thai:null`, `segments:null`, `tr:null`, `en` as declared, and no TTS payload. Frames are templates and have no TTS payload until realized by a registered response.

### 1.1 Canonical generated IDs

The compact series tables below expand mechanically:

```text
lesson form A interaction:
  cv1.interaction.lesson.<week>.<lesson>.a.<NN>

retention interaction:
  cv1.interaction.retention.<week>.<lesson>.<stage>.<form>.<NN>

assessment-pool interaction:
  cv1.interaction.assessment.<week>.<lesson>.<pool>.<NN>

objective pair for the Nth interaction in a form:
  cv1.objective.<surface>.<scope>.<form>.<2N-1>-intent
  cv1.objective.<surface>.<scope>.<form>.<2N>-response
```

For a learner-led interaction, `intent` is event-to-request selection and `response` is intent recognition of the partner's actual reply. For a partner-led interaction, `intent` is cue-to-intent and `response` is cue-to-appropriate-response selection. Generated ordinal numbers are two digits. This expansion is injective; an unexpandable shorthand is invalid.

The structural interaction signature is:

```text
contextId | cueVariantId-or-eventId | acceptedSetId | partnerReplyId-or-null
```

The validator additionally computes `normalizedThaiSurface`. Context changes may make grading fair, but may not hide an otherwise forbidden Thai-surface duplicate.

### 1.2 Bank and evidence boundaries

- Lesson, `d1-a`, `d1-b`, `d7-a`, `d7-b`, `gate-a`, `gate-b` and `d30-eligible` interaction IDs are disjoint.
- `d1` may declare one familiar `rehearsalOf`; it is reported as retention, never transfer.
- Every `d7`, gate and `d30` signature is absent from earlier transcripts, help, distractors and forms.
- Each lesson form contains three interactions and expands to six objective items.
- Each `d1` form contains three interactions and expands to six objective items.
- Each `d7` form contains three lesson interactions plus one cross interaction and expands to eight objective items.
- Gate pools contain three interactions per lesson in pool A and three in pool B.
- `d30-eligible` means eligible for the owning unit/final stratified check; it is not served before its unit/final assignment.
- Objective evidence stores IDs and correctness only. It stores no transcript text, recordings, symptoms, allergy values, medical profiles or arbitrary option arrays.

## 2. Shared routine registry

| ID | Thai | Segments | Transliteration | English | Role | ttsText | Prerequisites / source note |
|---|---|---|---|---|---|---|---|
| `cv1.routine.social.hello` | สวัสดีครับ | สวัสดี/ครับ | sà-wàt-dii khráp | Hello. | routine | สวัสดีครับ | Taught W1; male-polite routine. |
| `cv1.routine.social.thanks` | ขอบคุณครับ | ขอบคุณ/ครับ | khòrp-khun khráp | Thank you. | routine | ขอบคุณครับ | Taught W1. |
| `cv1.routine.social.understood` | เข้าใจแล้วครับ | เข้าใจแล้ว/ครับ | khâo-jai láeo khráp | Understood. | routine | เข้าใจแล้วครับ | Taught repair language. |
| `cv1.routine.social.understand` | เข้าใจครับ | เข้าใจ/ครับ | khâo-jai khráp | I understand. | routine | เข้าใจครับ | Taught repair language. |
| `cv1.routine.social.yes` | ใช่ครับ | ใช่/ครับ | châi khráp | Yes. | routine | ใช่ครับ | Taught W1. |
| `cv1.routine.social.okay` | ได้ครับ | ได้/ครับ | dâai khráp | Okay. | routine | ได้ครับ | Taught W1. |
| `cv1.routine.social.sorry` | ขอโทษครับ | ขอโทษ/ครับ | khǒr-thôht khráp | Sorry. | routine | ขอโทษครับ | Taught repair language. |
| `cv1.routine.social.welcome` | ยินดีครับ | ยินดี/ครับ | yin-dii khráp | You're welcome. | routine | ยินดีครับ | Recognition routine before L22. |
| `cv1.routine.safety.language-example-only` | นี่เป็นตัวอย่างภาษาเท่านั้นครับ | นี่เป็น/ตัวอย่างภาษา/เท่านั้น/ครับ | nîi bpen dtua-yàang phaa-sǎa thâo-nán khráp | This is only a language example. | safety routine | นี่เป็นตัวอย่างภาษาเท่านั้นครับ | Pre-taught before L20; not treatment advice. |
| `cv1.routine.emergency.will-call-now` | ผมจะโทรตอนนี้ครับ | ผมจะ/โทรตอนนี้/ครับ | phǒm jà thoo dtaawn-níi khráp | I will call now. | recognition routine | ผมจะโทรตอนนี้ครับ | L21 only; device playback does not place a call. |

## 3. L19 — Fictional pharmacy facts

### 3.1 Manifest and safety authority

```text
lesson:   cv1.lesson.w07.l19.pharmacy-facts
scene:    cv1.scene.w07.l19.model
form:     cv1.form.lesson.w07.l19.a
duration: coreMinutes 26; ordinaryRepairMinutes 4; totalMinutes 30
requires: cv1.lesson.w06.l18.repair-escalation
newFrameFamilies: 1
activeTargets: 3
newActiveSlots: headache, fever, allergy-uncertain
```

Every L19 scored context is visibly labelled `fictional-role-play` before audio. The fixed model character has a headache and fever and is unsure about drug allergy. No learner truth mode, symptom selection, allergy selection or medical profile exists. The only allergy response is the safe uncertainty `ผมไม่แน่ใจครับ`. State, resume, weakness, export and analytics use value-independent function/objective IDs only.

The app may offer an optional unscored real-life rehearsal with only `ผมไม่แน่ใจครับ` or Skip; it writes no record.

### 3.2 Function, context, frame and slot registries

| ID | Kind | English / binding rule | Prerequisites / source note |
|---|---|---|---|
| `cv1.fn.health.report-symptom` | function | Report the symptom on a fictional role card. | `cv1.frame.health.self-fact`; no diagnosis claim. |
| `cv1.fn.health.report-fever` | function | Report the fever fact on a fictional role card. | `cv1.frame.health.self-fact`; no inference. |
| `cv1.fn.health.report-allergy-uncertainty` | function | State that the fictional person is unsure about medicine allergy. | Fixed uncertainty only; no allergy profile. |
| `cv1.context.w07.l19.role-headache-fever-unsure` | context | Fictional adult: headache, fever, unsure about drug allergy. | Visible before audio; never presented as learner data. |
| `cv1.context.w07.l19.role-stomach-fever-unsure` | context | Fictional adult: stomach ache, fever, unsure about drug allergy. | Controlled transfer card. |
| `cv1.context.w07.l19.role-headache-no-fever-unsure` | context | Fictional adult: headache, no fever, unsure about drug allergy. | Parallel form card. |
| `cv1.context.w07.l19.role-stomach-no-fever-unsure` | context | Fictional adult: stomach ache, no fever, unsure about drug allergy. | Parallel form card. |
| `cv1.context.w07.l19.safety-rehearsal` | context | Explicit fictional health-language rehearsal. | Sole later domain for these medical facts. |
| `cv1.frame.health.self-fact` | frame | `ผม/{health-fact}/ครับ`; segments `ผม/{health-fact}/ครับ`; “I have/am {fact}.” | Reuses active `ผม`; exactly one new family. |
| `cv1.slot.health.symptom.headache` | slot | `ปวดหัว`; *bpùat hǔa*; “have a headache” | Taught before model audio. |
| `cv1.slot.health.symptom.stomach-ache` | slot | `ปวดท้อง`; *bpùat thóong*; “have a stomach ache” | Taught before substitution. |
| `cv1.slot.health.fever.yes` | slot | `มีไข้`; *mii khâi*; “have a fever” | Fictional fact only. |
| `cv1.slot.health.fever.no` | slot | `ไม่มีไข้`; *mâi mii khâi*; “do not have a fever” | Taught before parallel forms. |
| `cv1.slot.health.allergy.unsure` | slot | `ไม่แน่ใจ`; *mâi nâe-jai*; “not sure” | Only allergy slot; value-independent evidence. |

### 3.3 Cue-variant registry

| ID | Family | Thai | Segments | Transliteration | English | Role | ttsText | Prerequisites / source note |
|---|---|---|---|---|---|---|---|---|
| `cv1.cue-variant.health.symptom.v01` | `cv1.cue-family.health.symptom` | มีอาการอะไรครับ | มีอาการ/อะไร/ครับ | mii aa-gaan à-rai khráp | What symptoms do you have? | recognition | มีอาการอะไรครับ | Model cue; explicitly taught. |
| `cv1.cue-variant.health.symptom.v02` | same | ปวดตรงไหนครับ | ปวด/ตรงไหน/ครับ | bpùat dtrong-nǎi khráp | Where does it hurt? | recognition | ปวดตรงไหนครับ | Alternate cue taught before d1. |
| `cv1.cue-variant.health.symptom.v03` | same | ปวดหัวหรือปวดท้องครับ | ปวดหัว/หรือ/ปวดท้อง/ครับ | bpùat hǔa rǔue bpùat thóong khráp | Headache or stomach ache? | recognition | ปวดหัวหรือปวดท้องครับ | Bounded-choice cue taught before gate sealing. |
| `cv1.cue-variant.health.symptom.v04` | same | มีอาการปวดหัวหรือปวดท้องครับ | มีอาการ/ปวดหัวหรือปวดท้อง/ครับ | mii aa-gaan bpùat hǔa rǔue bpùat thóong khráp | Is the symptom a headache or stomach ache? | recognition | มีอาการปวดหัวหรือปวดท้องครับ | Maintenance cue; all atoms taught. |
| `cv1.cue-variant.health.fever.v01` | `cv1.cue-family.health.fever` | มีไข้ไหมครับ | มีไข้/ไหม/ครับ | mii khâi mǎi khráp | Do you have a fever? | recognition | มีไข้ไหมครับ | Model cue. |
| `cv1.cue-variant.health.fever.v02` | same | ตอนนี้มีไข้ไหมครับ | ตอนนี้/มีไข้/ไหม/ครับ | dtaawn-níi mii khâi mǎi khráp | Do you have a fever now? | recognition | ตอนนี้มีไข้ไหมครับ | Alternate cue explicitly taught. |
| `cv1.cue-variant.health.fever.v03` | same | มีไข้หรือไม่มีไข้ครับ | มีไข้/หรือ/ไม่มีไข้/ครับ | mii khâi rǔue mâi mii khâi khráp | Fever or no fever? | recognition | มีไข้หรือไม่มีไข้ครับ | Bounded contrast. |
| `cv1.cue-variant.health.fever.v04` | same | มีไข้ตอนนี้ไหมครับ | มีไข้/ตอนนี้/ไหม/ครับ | mii khâi dtaawn-níi mǎi khráp | Is there a fever now? | recognition | มีไข้ตอนนี้ไหมครับ | Maintenance word-order variant taught receptively. |
| `cv1.cue-variant.health.allergy.v01` | `cv1.cue-family.health.allergy` | แพ้ยาอะไรไหมครับ | แพ้ยา/อะไร/ไหม/ครับ | pháe yaa à-rai mǎi khráp | Any medicine allergy? | recognition | แพ้ยาอะไรไหมครับ | Model cue. |
| `cv1.cue-variant.health.allergy.v02` | same | แพ้ยาไหมครับ | แพ้ยา/ไหม/ครับ | pháe yaa mǎi khráp | Any medicine allergy? | recognition | แพ้ยาไหมครับ | Short cue taught explicitly. |
| `cv1.cue-variant.health.allergy.v03` | same | แพ้ยาอะไรครับ | แพ้ยา/อะไร/ครับ | pháe yaa à-rai khráp | Which medicine are you allergic to? | recognition | แพ้ยาอะไรครับ | Alternate cue; uncertainty remains valid. |
| `cv1.cue-variant.health.allergy.v04` | same | แน่ใจเรื่องแพ้ยาไหมครับ | แน่ใจ/เรื่องแพ้ยา/ไหม/ครับ | nâe-jai rûeang pháe yaa mǎi khráp | Are you sure about medicine allergy? | recognition | แน่ใจเรื่องแพ้ยาไหมครับ | Taught only inside fictional safety rehearsal. |

### 3.4 Response and accepted-set registry

| Response ID | Thai | Segments | Transliteration | English | Role | ttsText | Frame / slots / source note |
|---|---|---|---|---|---|---|---|
| `cv1.response.health.symptom.headache-full` | ผมปวดหัวครับ | ผม/ปวดหัว/ครับ | phǒm bpùat hǔa khráp | I have a headache. | active | ผมปวดหัวครับ | self-fact + headache; fictional only. |
| `cv1.response.health.symptom.headache-short` | ปวดหัวครับ | ปวดหัว/ครับ | bpùat hǔa khráp | A headache. | active | ปวดหัวครับ | Explicitly taught clipped reply. |
| `cv1.response.health.symptom.stomach-full` | ผมปวดท้องครับ | ผม/ปวดท้อง/ครับ | phǒm bpùat thóong khráp | I have a stomach ache. | active | ผมปวดท้องครับ | Controlled substitution; fictional only. |
| `cv1.response.health.symptom.stomach-short` | ปวดท้องครับ | ปวดท้อง/ครับ | bpùat thóong khráp | A stomach ache. | active | ปวดท้องครับ | Explicitly taught clipped reply. |
| `cv1.response.health.fever.yes-full` | ผมมีไข้ครับ | ผม/มีไข้/ครับ | phǒm mii khâi khráp | I have a fever. | active | ผมมีไข้ครับ | Fictional only. |
| `cv1.response.health.fever.yes-short` | มีไข้ครับ | มีไข้/ครับ | mii khâi khráp | A fever. | active | มีไข้ครับ | Taught clipped reply. |
| `cv1.response.health.fever.no-full` | ผมไม่มีไข้ครับ | ผม/ไม่มีไข้/ครับ | phǒm mâi mii khâi khráp | I do not have a fever. | active | ผมไม่มีไข้ครับ | Fictional only. |
| `cv1.response.health.fever.no-short` | ไม่มีไข้ครับ | ไม่มีไข้/ครับ | mâi mii khâi khráp | No fever. | active | ไม่มีไข้ครับ | Taught clipped reply. |
| `cv1.response.health.allergy.unsure-full` | ผมไม่แน่ใจครับ | ผม/ไม่แน่ใจ/ครับ | phǒm mâi nâe-jai khráp | I am not sure. | active | ผมไม่แน่ใจครับ | Only allergy response; no profile. |
| `cv1.response.health.allergy.unsure-short` | ไม่แน่ใจครับ | ไม่แน่ใจ/ครับ | mâi nâe-jai khráp | Not sure. | active | ไม่แน่ใจครับ | Taught clipped response. |

Accepted sets are singleton objective authorities; supported free role-play may accept the paired full/short forms only after both are taught:

```text
cv1.accepted.health.symptom.headache-full = [cv1.response.health.symptom.headache-full]
cv1.accepted.health.symptom.headache-short = [cv1.response.health.symptom.headache-short]
cv1.accepted.health.symptom.stomach-full = [cv1.response.health.symptom.stomach-full]
cv1.accepted.health.symptom.stomach-short = [cv1.response.health.symptom.stomach-short]
cv1.accepted.health.fever.yes-full = [cv1.response.health.fever.yes-full]
cv1.accepted.health.fever.yes-short = [cv1.response.health.fever.yes-short]
cv1.accepted.health.fever.no-full = [cv1.response.health.fever.no-full]
cv1.accepted.health.fever.no-short = [cv1.response.health.fever.no-short]
cv1.accepted.health.allergy.unsure-full = [cv1.response.health.allergy.unsure-full]
cv1.accepted.health.allergy.unsure-short = [cv1.response.health.allergy.unsure-short]
```

### 3.5 Exact three-option misconception sets

Medical alternatives are never trick distractors. Each option set contains one correct response plus two already taught non-answer routines:

```text
cv1.option-set.health.headache-full = [headache-full*, routine.social.understood, routine.social.thanks]
cv1.option-set.health.headache-short = [headache-short*, routine.social.understood, routine.social.thanks]
cv1.option-set.health.stomach-full = [stomach-full*, routine.social.understood, routine.social.thanks]
cv1.option-set.health.stomach-short = [stomach-short*, routine.social.understood, routine.social.thanks]
cv1.option-set.health.fever.yes-full = [fever.yes-full*, routine.social.understood, routine.social.thanks]
cv1.option-set.health.fever.yes-short = [fever.yes-short*, routine.social.understood, routine.social.thanks]
cv1.option-set.health.fever.no-full = [fever.no-full*, routine.social.understood, routine.social.thanks]
cv1.option-set.health.fever.no-short = [fever.no-short*, routine.social.understood, routine.social.thanks]
cv1.option-set.health.allergy.unsure-full = [allergy.unsure-full*, routine.social.understood, routine.social.thanks]
cv1.option-set.health.allergy.unsure-short = [allergy.unsure-short*, routine.social.understood, routine.social.thanks]
```

`*` marks the sole accepted option. Rationale tags for the two distractors are respectively `acknowledgement-not-fact` and `social-close-not-fact`.

### 3.6 Interaction registry and forms

Ordered model transcript, ten turns:

```text
P สวัสดีครับ
L สวัสดีครับ
P มีอาการอะไรครับ
L ผมปวดหัวครับ
P มีไข้ไหมครับ
L ผมมีไข้ครับ
P แพ้ยาอะไรไหมครับ
L ผมไม่แน่ใจครับ
P เข้าใจแล้วครับ
L ขอบคุณครับ
```

Rows are `[form, ordinal, context, cue, accepted-set, option-set, rehearsalOf|null]`.

```text
lesson-a
01 role-headache-fever-unsure | symptom.v01 | symptom.headache-full | health.headache-full | null
02 role-headache-fever-unsure | fever.v01 | fever.yes-full | health.fever.yes-full | null
03 role-headache-fever-unsure | allergy.v01 | allergy.unsure-full | health.allergy.unsure-full | null

d1-a
01 role-headache-fever-unsure | symptom.v02 | symptom.headache-full | health.headache-full | null
02 role-headache-fever-unsure | fever.v01 | fever.yes-short | health.fever.yes-short | null
03 role-headache-fever-unsure | allergy.v03 | allergy.unsure-full | health.allergy.unsure-full | null

d1-b
01 role-stomach-no-fever-unsure | symptom.v01 | symptom.stomach-short | health.stomach-short | null
02 role-stomach-no-fever-unsure | fever.v02 | fever.no-full | health.fever.no-full | null
03 role-stomach-no-fever-unsure | allergy.v02 | allergy.unsure-short | health.allergy.unsure-short | null

d7-a
01 role-stomach-fever-unsure | symptom.v02 | symptom.stomach-full | health.stomach-full | null
02 role-stomach-fever-unsure | fever.v03 | fever.yes-full | health.fever.yes-full | null
03 role-stomach-fever-unsure | allergy.v02 | allergy.unsure-full | health.allergy.unsure-full | null

d7-b
01 role-headache-no-fever-unsure | symptom.v03 | symptom.headache-short | health.headache-short | null
02 role-headache-no-fever-unsure | fever.v04 | fever.no-short | health.fever.no-short | null
03 role-headache-no-fever-unsure | allergy.v04 | allergy.unsure-short | health.allergy.unsure-short | null

gate-a
01 role-stomach-no-fever-unsure | symptom.v04 | symptom.stomach-full | health.stomach-full | null
02 role-stomach-no-fever-unsure | fever.v03 | fever.no-full | health.fever.no-full | null
03 role-stomach-no-fever-unsure | allergy.v04 | allergy.unsure-full | health.allergy.unsure-full | null

gate-b
01 role-headache-fever-unsure | symptom.v03 | symptom.headache-full | health.headache-full | null
02 role-headache-fever-unsure | fever.v02 | fever.yes-short | health.fever.yes-short | null
03 role-headache-fever-unsure | allergy.v01 | allergy.unsure-short | health.allergy.unsure-short | null

d30-eligible
01 role-stomach-fever-unsure | symptom.v04 | symptom.stomach-short | health.stomach-short | null
02 role-headache-no-fever-unsure | fever.v04 | fever.no-full | health.fever.no-full | null
03 role-headache-no-fever-unsure | allergy.v03 | allergy.unsure-short | health.allergy.unsure-short | null
04 role-headache-fever-unsure | symptom.v02 | symptom.headache-short | health.headache-short | null
```

The full IDs are generated from §1.1 with scope `w07.l19`. `cv1.form.lesson.w07.l19.a` contains lesson-a interactions 01–03 and objectives 01–06. Retention forms are:

```text
cv1.form.retention.w07.l19.d1.a = d1-a interactions 01..03
cv1.form.retention.w07.l19.d1.b = d1-b interactions 01..03
cv1.form.retention.w07.l19.d7.a = d7-a 01..03 + cv1.interaction.cross.w07.l19.d7.a.01
cv1.form.retention.w07.l19.d7.b = d7-b 01..03 + cv1.interaction.cross.w07.l19.d7.b.01
```

Cross interactions remain explicitly fictional safety rehearsals:

```text
cv1.interaction.cross.w07.l19.d7.a.01
  safety-rehearsal | symptom.v01 | symptom.stomach-full | health.stomach-full

cv1.interaction.cross.w07.l19.d7.b.01
  safety-rehearsal | fever.v01 | fever.no-full | health.fever.no-full
```

Gate pool IDs are `cv1.interaction.assessment.w07.l19.gate-a.01..03` and `...gate-b.01..03`. D30 eligibility IDs are `cv1.interaction.retention.w07.l19.d30.eligible.01..03`.

## 4. L20 — Two-axis fictional-label confirmation

### 4.1 Manifest and safety authority

```text
lesson:   cv1.lesson.w07.l20.label-language
scene:    cv1.scene.w07.l20.model
form:     cv1.form.lesson.w07.l20.a
duration: coreMinutes 24; ordinaryRepairMinutes 4; totalMinutes 28
requires: cv1.lesson.w07.l19.pharmacy-facts; cv1.lesson.w06.l18.repair-escalation
activeTargets: 2
semanticAxes: amount, timing
boundedValues: one-tablet, two-tablets, after-food, bedtime
```

Every cue is a declarative device-voice reading of a visibly fictional label. The learner never chooses, supplies or recommends a dose. The task is to echo-confirm exactly what the fictional label said. The only axes are amount and timing; `วันละ`, frequency, medicine names, suitability, diagnosis and real instructions are absent.

### 4.2 Function, context, frame and slot registries

| ID | Kind | English / binding rule | Prerequisites / source note |
|---|---|---|---|
| `cv1.fn.label.confirm-amount` | function | Confirm the amount heard on a fictional label. | Amount is supplied by declarative audio, never by learner choice. |
| `cv1.fn.label.confirm-timing` | function | Confirm the timing heard on a fictional label. | Timing is supplied by declarative audio. |
| `cv1.context.w07.l20.fictional-label` | context | Card headed “Fictional language example—never apply this to real medicine.” | Visible before every interaction. |
| `cv1.context.w07.l20.fictional-label-combined` | context | Same warning; card contains one registered amount and one registered timing value. | Controlled recombination, not a third semantic axis. |
| `cv1.frame.label.confirm` | frame | `{label-value}/ใช่ไหมครับ`; “{label value}, right?” | Reuses L18 confirmation; maximum two chunks plus `ครับ`. |
| `cv1.frame.label.confirm-combined` | frame | `{amount}/{timing}/ใช่ไหมครับ` | Exactly three meaningful chunks; no additional axis. |
| `cv1.slot.label.amount.one-tablet` | slot | `ครั้งละหนึ่งเม็ด`; *khráng lá nùeng mét*; “one tablet each time” | Fictional value 1 of 2. |
| `cv1.slot.label.amount.two-tablets` | slot | `ครั้งละสองเม็ด`; *khráng lá sǎawng mét*; “two tablets each time” | Fictional value 2 of 2. |
| `cv1.slot.label.timing.after-food` | slot | `หลังอาหาร`; *lǎng aa-hǎan*; “after food” | Fictional value 1 of 2. |
| `cv1.slot.label.timing.bedtime` | slot | `ก่อนนอน`; *gàawn naawn*; “before bed” | Fictional value 2 of 2. |

### 4.3 Declarative cue registry

The four taught declarative stems are `บนฉลากตัวอย่างเขียนว่า`, `ฉลากตัวอย่างนี้เขียนว่า`, `ตัวอย่างนี้เขียนว่า`, and `ในตัวอย่างเขียนว่า`. No interrogative amount/timing cue exists.

| ID | Thai | Segments | Transliteration | English | Role | ttsText |
|---|---|---|---|---|---|---|
| `cv1.cue-variant.label.amount.one.v01` | บนฉลากตัวอย่างเขียนว่าครั้งละหนึ่งเม็ดครับ | บนฉลากตัวอย่างเขียนว่า/ครั้งละหนึ่งเม็ด/ครับ | bon chà-làak dtua-yàang khǐan wâa khráng lá nùeng mét khráp | The fictional label says one tablet each time. | recognition | บนฉลากตัวอย่างเขียนว่าครั้งละหนึ่งเม็ดครับ |
| `cv1.cue-variant.label.amount.two.v01` | บนฉลากตัวอย่างเขียนว่าครั้งละสองเม็ดครับ | บนฉลากตัวอย่างเขียนว่า/ครั้งละสองเม็ด/ครับ | bon chà-làak dtua-yàang khǐan wâa khráng lá sǎawng mét khráp | The fictional label says two tablets each time. | recognition | บนฉลากตัวอย่างเขียนว่าครั้งละสองเม็ดครับ |
| `cv1.cue-variant.label.timing.after.v01` | บนฉลากตัวอย่างเขียนว่าหลังอาหารครับ | บนฉลากตัวอย่างเขียนว่า/หลังอาหาร/ครับ | bon chà-làak dtua-yàang khǐan wâa lǎng aa-hǎan khráp | The fictional label says after food. | recognition | บนฉลากตัวอย่างเขียนว่าหลังอาหารครับ |
| `cv1.cue-variant.label.timing.bedtime.v01` | บนฉลากตัวอย่างเขียนว่าก่อนนอนครับ | บนฉลากตัวอย่างเขียนว่า/ก่อนนอน/ครับ | bon chà-làak dtua-yàang khǐan wâa gàawn naawn khráp | The fictional label says before bed. | recognition | บนฉลากตัวอย่างเขียนว่าก่อนนอนครับ |
| `cv1.cue-variant.label.amount.one.v02` | ฉลากตัวอย่างนี้เขียนว่าครั้งละหนึ่งเม็ดครับ | ฉลากตัวอย่างนี้เขียนว่า/ครั้งละหนึ่งเม็ด/ครับ | chà-làak dtua-yàang níi khǐan wâa khráng lá nùeng mét khráp | This fictional label says one tablet each time. | recognition | ฉลากตัวอย่างนี้เขียนว่าครั้งละหนึ่งเม็ดครับ |
| `cv1.cue-variant.label.amount.two.v02` | ฉลากตัวอย่างนี้เขียนว่าครั้งละสองเม็ดครับ | ฉลากตัวอย่างนี้เขียนว่า/ครั้งละสองเม็ด/ครับ | chà-làak dtua-yàang níi khǐan wâa khráng lá sǎawng mét khráp | This fictional label says two tablets each time. | recognition | ฉลากตัวอย่างนี้เขียนว่าครั้งละสองเม็ดครับ |
| `cv1.cue-variant.label.timing.after.v02` | ฉลากตัวอย่างนี้เขียนว่าหลังอาหารครับ | ฉลากตัวอย่างนี้เขียนว่า/หลังอาหาร/ครับ | chà-làak dtua-yàang níi khǐan wâa lǎng aa-hǎan khráp | This fictional label says after food. | recognition | ฉลากตัวอย่างนี้เขียนว่าหลังอาหารครับ |
| `cv1.cue-variant.label.timing.bedtime.v02` | ฉลากตัวอย่างนี้เขียนว่าก่อนนอนครับ | ฉลากตัวอย่างนี้เขียนว่า/ก่อนนอน/ครับ | chà-làak dtua-yàang níi khǐan wâa gàawn naawn khráp | This fictional label says before bed. | recognition | ฉลากตัวอย่างนี้เขียนว่าก่อนนอนครับ |
| `cv1.cue-variant.label.amount.one.v03` | ตัวอย่างนี้เขียนว่าครั้งละหนึ่งเม็ดครับ | ตัวอย่างนี้เขียนว่า/ครั้งละหนึ่งเม็ด/ครับ | dtua-yàang níi khǐan wâa khráng lá nùeng mét khráp | This example says one tablet each time. | recognition | ตัวอย่างนี้เขียนว่าครั้งละหนึ่งเม็ดครับ |
| `cv1.cue-variant.label.amount.two.v03` | ตัวอย่างนี้เขียนว่าครั้งละสองเม็ดครับ | ตัวอย่างนี้เขียนว่า/ครั้งละสองเม็ด/ครับ | dtua-yàang níi khǐan wâa khráng lá sǎawng mét khráp | This example says two tablets each time. | recognition | ตัวอย่างนี้เขียนว่าครั้งละสองเม็ดครับ |
| `cv1.cue-variant.label.timing.after.v03` | ตัวอย่างนี้เขียนว่าหลังอาหารครับ | ตัวอย่างนี้เขียนว่า/หลังอาหาร/ครับ | dtua-yàang níi khǐan wâa lǎng aa-hǎan khráp | This example says after food. | recognition | ตัวอย่างนี้เขียนว่าหลังอาหารครับ |
| `cv1.cue-variant.label.timing.bedtime.v03` | ตัวอย่างนี้เขียนว่าก่อนนอนครับ | ตัวอย่างนี้เขียนว่า/ก่อนนอน/ครับ | dtua-yàang níi khǐan wâa gàawn naawn khráp | This example says before bed. | recognition | ตัวอย่างนี้เขียนว่าก่อนนอนครับ |
| `cv1.cue-variant.label.amount.one.v04` | ในตัวอย่างเขียนว่าครั้งละหนึ่งเม็ดครับ | ในตัวอย่างเขียนว่า/ครั้งละหนึ่งเม็ด/ครับ | nai dtua-yàang khǐan wâa khráng lá nùeng mét khráp | In the example it says one tablet each time. | recognition | ในตัวอย่างเขียนว่าครั้งละหนึ่งเม็ดครับ |
| `cv1.cue-variant.label.amount.two.v04` | ในตัวอย่างเขียนว่าครั้งละสองเม็ดครับ | ในตัวอย่างเขียนว่า/ครั้งละสองเม็ด/ครับ | nai dtua-yàang khǐan wâa khráng lá sǎawng mét khráp | In the example it says two tablets each time. | recognition | ในตัวอย่างเขียนว่าครั้งละสองเม็ดครับ |
| `cv1.cue-variant.label.timing.after.v04` | ในตัวอย่างเขียนว่าหลังอาหารครับ | ในตัวอย่างเขียนว่า/หลังอาหาร/ครับ | nai dtua-yàang khǐan wâa lǎng aa-hǎan khráp | In the example it says after food. | recognition | ในตัวอย่างเขียนว่าหลังอาหารครับ |
| `cv1.cue-variant.label.timing.bedtime.v04` | ในตัวอย่างเขียนว่าก่อนนอนครับ | ในตัวอย่างเขียนว่า/ก่อนนอน/ครับ | nai dtua-yàang khǐan wâa gàawn naawn khráp | In the example it says before bed. | recognition | ในตัวอย่างเขียนว่าก่อนนอนครับ |

Combined cue variants recombine only the same two axes and four values; they are not a third axis:

| ID | Thai | Segments | Transliteration | English | Role | ttsText |
|---|---|---|---|---|---|---|
| `cv1.cue-variant.label.combined.one-after.v01` | บนฉลากตัวอย่างเขียนว่าครั้งละหนึ่งเม็ด หลังอาหารครับ | บนฉลากตัวอย่างเขียนว่า/ครั้งละหนึ่งเม็ด/หลังอาหาร/ครับ | bon chà-làak dtua-yàang khǐan wâa khráng lá nùeng mét lǎng aa-hǎan khráp | The fictional label says one tablet each time, after food. | recognition | บนฉลากตัวอย่างเขียนว่าครั้งละหนึ่งเม็ด หลังอาหารครับ |
| `cv1.cue-variant.label.combined.two-bed.v01` | บนฉลากตัวอย่างเขียนว่าครั้งละสองเม็ด ก่อนนอนครับ | บนฉลากตัวอย่างเขียนว่า/ครั้งละสองเม็ด/ก่อนนอน/ครับ | bon chà-làak dtua-yàang khǐan wâa khráng lá sǎawng mét gàawn naawn khráp | The fictional label says two tablets each time, before bed. | recognition | บนฉลากตัวอย่างเขียนว่าครั้งละสองเม็ด ก่อนนอนครับ |
| `cv1.cue-variant.label.combined.one-after.v02` | ฉลากตัวอย่างนี้เขียนว่าครั้งละหนึ่งเม็ด หลังอาหารครับ | ฉลากตัวอย่างนี้เขียนว่า/ครั้งละหนึ่งเม็ด/หลังอาหาร/ครับ | chà-làak dtua-yàang níi khǐan wâa khráng lá nùeng mét lǎng aa-hǎan khráp | This fictional label says one tablet each time, after food. | recognition | ฉลากตัวอย่างนี้เขียนว่าครั้งละหนึ่งเม็ด หลังอาหารครับ |
| `cv1.cue-variant.label.combined.two-bed.v02` | ฉลากตัวอย่างนี้เขียนว่าครั้งละสองเม็ด ก่อนนอนครับ | ฉลากตัวอย่างนี้เขียนว่า/ครั้งละสองเม็ด/ก่อนนอน/ครับ | chà-làak dtua-yàang níi khǐan wâa khráng lá sǎawng mét gàawn naawn khráp | This fictional label says two tablets each time, before bed. | recognition | ฉลากตัวอย่างนี้เขียนว่าครั้งละสองเม็ด ก่อนนอนครับ |
| `cv1.cue-variant.label.combined.one-bed.v03` | ตัวอย่างนี้เขียนว่าครั้งละหนึ่งเม็ด ก่อนนอนครับ | ตัวอย่างนี้เขียนว่า/ครั้งละหนึ่งเม็ด/ก่อนนอน/ครับ | dtua-yàang níi khǐan wâa khráng lá nùeng mét gàawn naawn khráp | This example says one tablet each time, before bed. | recognition | ตัวอย่างนี้เขียนว่าครั้งละหนึ่งเม็ด ก่อนนอนครับ |
| `cv1.cue-variant.label.combined.two-after.v03` | ตัวอย่างนี้เขียนว่าครั้งละสองเม็ด หลังอาหารครับ | ตัวอย่างนี้เขียนว่า/ครั้งละสองเม็ด/หลังอาหาร/ครับ | dtua-yàang níi khǐan wâa khráng lá sǎawng mét lǎng aa-hǎan khráp | This example says two tablets each time, after food. | recognition | ตัวอย่างนี้เขียนว่าครั้งละสองเม็ด หลังอาหารครับ |
| `cv1.cue-variant.label.combined.one-after.v03` | ตัวอย่างนี้เขียนว่าครั้งละหนึ่งเม็ด หลังอาหารครับ | ตัวอย่างนี้เขียนว่า/ครั้งละหนึ่งเม็ด/หลังอาหาร/ครับ | dtua-yàang níi khǐan wâa khráng lá nùeng mét lǎng aa-hǎan khráp | This example says one tablet each time, after food. | recognition | ตัวอย่างนี้เขียนว่าครั้งละหนึ่งเม็ด หลังอาหารครับ |
| `cv1.cue-variant.label.combined.one-bed.v04` | ในตัวอย่างเขียนว่าครั้งละหนึ่งเม็ด ก่อนนอนครับ | ในตัวอย่างเขียนว่า/ครั้งละหนึ่งเม็ด/ก่อนนอน/ครับ | nai dtua-yàang khǐan wâa khráng lá nùeng mét gàawn naawn khráp | In the example it says one tablet each time, before bed. | recognition | ในตัวอย่างเขียนว่าครั้งละหนึ่งเม็ด ก่อนนอนครับ |
| `cv1.cue-variant.label.combined.two-after.v04` | ในตัวอย่างเขียนว่าครั้งละสองเม็ด หลังอาหารครับ | ในตัวอย่างเขียนว่า/ครั้งละสองเม็ด/หลังอาหาร/ครับ | nai dtua-yàang khǐan wâa khráng lá sǎawng mét lǎng aa-hǎan khráp | In the example it says two tablets each time, after food. | recognition | ในตัวอย่างเขียนว่าครั้งละสองเม็ด หลังอาหารครับ |
| `cv1.cue-variant.label.combined.two-bed.v04` | ในตัวอย่างเขียนว่าครั้งละสองเม็ด ก่อนนอนครับ | ในตัวอย่างเขียนว่า/ครั้งละสองเม็ด/ก่อนนอน/ครับ | nai dtua-yàang khǐan wâa khráng lá sǎawng mét gàawn naawn khráp | In the example it says two tablets each time, before bed. | recognition | ในตัวอย่างเขียนว่าครั้งละสองเม็ด ก่อนนอนครับ |
| `cv1.cue-variant.label.combined.one-after.v04` | ในตัวอย่างเขียนว่าครั้งละหนึ่งเม็ด หลังอาหารครับ | ในตัวอย่างเขียนว่า/ครั้งละหนึ่งเม็ด/หลังอาหาร/ครับ | nai dtua-yàang khǐan wâa khráng lá nùeng mét lǎng aa-hǎan khráp | In the example it says one tablet each time, after food. | recognition | ในตัวอย่างเขียนว่าครั้งละหนึ่งเม็ด หลังอาหารครับ |

### 4.4 Response, accepted-set and option-set registries

| Response ID | Thai | Segments | Transliteration | English | Role | ttsText |
|---|---|---|---|---|---|---|
| `cv1.response.label.amount.one-full` | ครั้งละหนึ่งเม็ดใช่ไหมครับ | ครั้งละหนึ่งเม็ด/ใช่ไหมครับ | khráng lá nùeng mét châi mǎi khráp | One tablet each time, right? | active | ครั้งละหนึ่งเม็ดใช่ไหมครับ |
| `cv1.response.label.amount.one-short` | หนึ่งเม็ดใช่ไหมครับ | หนึ่งเม็ด/ใช่ไหมครับ | nùeng mét châi mǎi khráp | One tablet, right? | active | หนึ่งเม็ดใช่ไหมครับ |
| `cv1.response.label.amount.two-full` | ครั้งละสองเม็ดใช่ไหมครับ | ครั้งละสองเม็ด/ใช่ไหมครับ | khráng lá sǎawng mét châi mǎi khráp | Two tablets each time, right? | active | ครั้งละสองเม็ดใช่ไหมครับ |
| `cv1.response.label.amount.two-short` | สองเม็ดใช่ไหมครับ | สองเม็ด/ใช่ไหมครับ | sǎawng mét châi mǎi khráp | Two tablets, right? | active | สองเม็ดใช่ไหมครับ |
| `cv1.response.label.timing.after` | หลังอาหารใช่ไหมครับ | หลังอาหาร/ใช่ไหมครับ | lǎng aa-hǎan châi mǎi khráp | After food, right? | active | หลังอาหารใช่ไหมครับ |
| `cv1.response.label.timing.bedtime` | ก่อนนอนใช่ไหมครับ | ก่อนนอน/ใช่ไหมครับ | gàawn naawn châi mǎi khráp | Before bed, right? | active | ก่อนนอนใช่ไหมครับ |
| `cv1.response.label.combined.one-after` | ครั้งละหนึ่งเม็ด หลังอาหารใช่ไหมครับ | ครั้งละหนึ่งเม็ด/หลังอาหาร/ใช่ไหมครับ | khráng lá nùeng mét lǎng aa-hǎan châi mǎi khráp | One tablet each time, after food, right? | transfer-only | ครั้งละหนึ่งเม็ด หลังอาหารใช่ไหมครับ |
| `cv1.response.label.combined.one-bed` | ครั้งละหนึ่งเม็ด ก่อนนอนใช่ไหมครับ | ครั้งละหนึ่งเม็ด/ก่อนนอน/ใช่ไหมครับ | khráng lá nùeng mét gàawn naawn châi mǎi khráp | One tablet each time, before bed, right? | transfer-only | ครั้งละหนึ่งเม็ด ก่อนนอนใช่ไหมครับ |
| `cv1.response.label.combined.two-after` | ครั้งละสองเม็ด หลังอาหารใช่ไหมครับ | ครั้งละสองเม็ด/หลังอาหาร/ใช่ไหมครับ | khráng lá sǎawng mét lǎng aa-hǎan châi mǎi khráp | Two tablets each time, after food, right? | transfer-only | ครั้งละสองเม็ด หลังอาหารใช่ไหมครับ |
| `cv1.response.label.combined.two-bed` | ครั้งละสองเม็ด ก่อนนอนใช่ไหมครับ | ครั้งละสองเม็ด/ก่อนนอน/ใช่ไหมครับ | khráng lá sǎawng mét gàawn naawn châi mǎi khráp | Two tablets each time, before bed, right? | transfer-only | ครั้งละสองเม็ด ก่อนนอนใช่ไหมครับ |

Every response has a singleton accepted set with the same suffix, for example `cv1.accepted.label.amount.one-full = [cv1.response.label.amount.one-full]` through `cv1.accepted.label.combined.two-bed`.

Exact three-option sets:

```text
cv1.option-set.label.amount.one = [amount.one-full*, amount.two-full{wrong-amount}, timing.after{wrong-axis}]
cv1.option-set.label.amount.one-short = [amount.one-short*, amount.two-short{wrong-amount}, timing.after{wrong-axis}]
cv1.option-set.label.amount.two = [amount.two-full*, amount.one-full{wrong-amount}, timing.bedtime{wrong-axis}]
cv1.option-set.label.amount.two-short = [amount.two-short*, amount.one-short{wrong-amount}, timing.bedtime{wrong-axis}]
cv1.option-set.label.timing.after = [timing.after*, timing.bedtime{wrong-timing}, amount.one-full{wrong-axis}]
cv1.option-set.label.timing.bedtime = [timing.bedtime*, timing.after{wrong-timing}, amount.two-full{wrong-axis}]
cv1.option-set.label.combined.one-after = [combined.one-after*, combined.two-after{wrong-amount}, combined.one-bed{wrong-timing}]
cv1.option-set.label.combined.one-bed = [combined.one-bed*, combined.two-bed{wrong-amount}, combined.one-after{wrong-timing}]
cv1.option-set.label.combined.two-after = [combined.two-after*, combined.one-after{wrong-amount}, combined.two-bed{wrong-timing}]
cv1.option-set.label.combined.two-bed = [combined.two-bed*, combined.one-bed{wrong-amount}, combined.two-after{wrong-timing}]
```

All wrong values remain fictional-label comprehension options; they are never framed as possible real doses.

### 4.5 Model transcript and interaction forms

Model transcript, nine turns:

```text
P นี่เป็นตัวอย่างภาษาเท่านั้นครับ
L เข้าใจครับ
P บนฉลากตัวอย่างเขียนว่าครั้งละหนึ่งเม็ดครับ
L ครั้งละหนึ่งเม็ดใช่ไหมครับ
P ใช่ครับ
P บนฉลากตัวอย่างเขียนว่าหลังอาหารครับ
L หลังอาหารใช่ไหมครับ
P ใช่ครับ
L ขอบคุณครับ
```

Interaction rows are `[context, cue, accepted-set, option-set]`:

```text
lesson-a
01 fictional-label | amount.one.v01 | amount.one-full | label.amount.one
02 fictional-label | timing.after.v01 | timing.after | label.timing.after
03 fictional-label-combined | combined.one-after.v01 | combined.one-after | label.combined.one-after

d1-a
01 fictional-label | amount.two.v01 | amount.two-full | label.amount.two
02 fictional-label | timing.bedtime.v01 | timing.bedtime | label.timing.bedtime
03 fictional-label-combined | combined.two-bed.v01 | combined.two-bed | label.combined.two-bed

d1-b
01 fictional-label | amount.one.v02 | amount.one-full | label.amount.one
02 fictional-label | timing.after.v02 | timing.after | label.timing.after
03 fictional-label-combined | combined.one-after.v02 | combined.one-after | label.combined.one-after

d7-a
01 fictional-label | amount.two.v02 | amount.two-short | label.amount.two-short
02 fictional-label | timing.bedtime.v02 | timing.bedtime | label.timing.bedtime
03 fictional-label-combined | combined.two-bed.v02 | combined.two-bed | label.combined.two-bed

d7-b
01 fictional-label | amount.one.v03 | amount.one-short | label.amount.one-short
02 fictional-label | timing.after.v03 | timing.after | label.timing.after
03 fictional-label-combined | combined.two-after.v03 | combined.two-after | label.combined.two-after

gate-a
01 fictional-label | amount.two.v03 | amount.two-full | label.amount.two
02 fictional-label | timing.bedtime.v03 | timing.bedtime | label.timing.bedtime
03 fictional-label-combined | combined.one-bed.v03 | combined.one-bed | label.combined.one-bed

gate-b
01 fictional-label | amount.one.v04 | amount.one-short | label.amount.one-short
02 fictional-label | timing.after.v04 | timing.after | label.timing.after
03 fictional-label-combined | combined.two-after.v04 | combined.two-after | label.combined.two-after

d30-eligible
01 fictional-label | amount.two.v04 | amount.two-short | label.amount.two-short
02 fictional-label | timing.bedtime.v04 | timing.bedtime | label.timing.bedtime
03 fictional-label-combined | combined.one-bed.v04 | combined.one-bed | label.combined.one-bed
04 fictional-label-combined | combined.one-after.v04 | combined.one-after | label.combined.one-after
```

Forms and generated IDs follow §1.1 with scope `w07.l20`. Gate and D30 IDs use the same patterns as L19 with scope `w07.l20`.

The disjoint cross rows, served only after their cue records in §4.3 are taught, are:

```text
cv1.interaction.cross.w07.l20.d7.a.01
  fictional-label-combined | combined.one-after.v03 | combined.one-after | label.combined.one-after

cv1.interaction.cross.w07.l20.d7.b.01
  fictional-label-combined | combined.two-bed.v04 | combined.two-bed | label.combined.two-bed
```

Neither cross signature appears in a lesson, retention, gate or transcript row.

## 5. L21 — Fictional urgent-help and exact location

### 5.1 Manifest and safety authority

```text
lesson:   cv1.lesson.w07.l21.urgent-help
scene:    cv1.scene.w07.l21.model
form:     cv1.form.lesson.w07.l21.a
duration: coreMinutes 26; ordinaryRepairMinutes 4; totalMinutes 30
requires: cv1.lesson.w07.l20.label-language; cv1.lesson.w02.l06.street-directions
activeTargets: 3
fictionalLocation: Ekkamai Station, Exit 2
```

The first card says: “Fictional safety drill: someone is unconscious at Ekkamai Station, Exit 2. If this is real, stop the lesson and seek emergency help now.” The learner must supply both `สถานีเอกมัย` and `ทางออกสอง` before the partner confirms either detail. The scene never initiates a call, diagnoses a person, teaches first aid or claims to be a complete emergency protocol. The number basis is the [National Institute for Emergency Medicine's official 1669 guidance](https://www.niems.go.th/1/SubWebsite/?id=38); this source supports the number only, not any treatment or protocol claim.

### 5.2 Function, context, frame and slot registries

| ID | Kind | English / binding rule | Prerequisites / source note |
|---|---|---|---|
| `cv1.fn.emergency.report-unconscious-person` | function | State the fixed fictional observation. | Safety-rehearsal contexts only. |
| `cv1.fn.emergency.give-location` | function | Give Ekkamai Station and Exit 2 before confirmation. | L06 location frame; exact fictional card. |
| `cv1.fn.emergency.request-call` | function | Ask a nearby man to call 1669 or an ambulance. | Official number basis: NIEM 1669; not a complete protocol. |
| `cv1.context.w07.l21.fictional-ekkamai-exit-2` | context | Fictional unconscious person at Ekkamai Station, Exit 2. | Visible before every scored item. |
| `cv1.context.w07.l21.safety-rehearsal-ekkamai-exit-2` | context | Explicitly labelled later safety rehearsal at the same fictional location. | Sole recurrence domain for emergency fact/call phrases. |
| `cv1.frame.emergency.fact` | frame | `มีคน/หมดสติ/ครับ` | Fixed fictional observation, not a diagnosis by the app. |
| `cv1.frame.location.at-detail` | frame | `อยู่ที่/{place + detail}/ครับ` | Reuses L06 location; no guessed confirmation. |
| `cv1.frame.help.request` | frame | `ช่วย/{action}/ให้หน่อยครับ` | One new productive family; maximum three chunks. |
| `cv1.slot.location.ekkamai-station` | slot | `สถานีเอกมัย`; *sà-thǎa-nii èek-gà-mai*; “Ekkamai Station” | Taught earlier. |
| `cv1.slot.location.exit-2` | slot | `ทางออกสอง`; *thaang òrk sǎawng*; “Exit 2” | Pre-taught actively before model scene. |
| `cv1.slot.emergency.action.call-1669` | slot | `โทรหนึ่งหกหกเก้า`; *thoo nùeng hòk hòk gâao*; “call 1669” | TTS uses Thai number words. |
| `cv1.slot.emergency.action.call-ambulance` | slot | `เรียกรถพยาบาล`; *rîak rót phá-yaa-baan*; “call an ambulance” | Controlled substitution. |

### 5.3 Cue registry

| ID | Family | Thai | Segments | Transliteration | English | Role | ttsText |
|---|---|---|---|---|---|---|---|
| `cv1.cue-variant.emergency.fact.v01` | `cv1.cue-family.emergency.what-happened` | มีอะไรให้ช่วยไหมครับ | มีอะไร/ให้ช่วยไหม/ครับ | mii a-rai hâi chûai mǎi khráp | Is there anything I can help with? | recognition | มีอะไรให้ช่วยไหมครับ |
| `cv1.cue-variant.emergency.fact.v02` | same | เกิดอะไรขึ้นครับ | เกิดอะไรขึ้น/ครับ | gòoet à-rai khûen khráp | What happened? | recognition | เกิดอะไรขึ้นครับ |
| `cv1.cue-variant.emergency.fact.v03` | same | มีอะไรให้ช่วยครับ | มีอะไร/ให้ช่วย/ครับ | mii a-rai hâi chûai khráp | How can I help? | recognition | มีอะไรให้ช่วยครับ |
| `cv1.cue-variant.emergency.fact.v04` | same | คนนี้เป็นอะไรครับ | คนนี้/เป็นอะไร/ครับ | khon níi bpen à-rai khráp | What is wrong with this person? | recognition | คนนี้เป็นอะไรครับ |
| `cv1.cue-variant.emergency.location.v01` | `cv1.cue-family.emergency.location` | อยู่ที่ไหนครับ | อยู่ที่ไหน/ครับ | yùu thîi-nǎi khráp | Where are you? | recognition | อยู่ที่ไหนครับ |
| `cv1.cue-variant.emergency.location.v02` | same | อยู่ตรงไหนครับ | อยู่/ตรงไหน/ครับ | yùu dtrong-nǎi khráp | Where exactly are you? | recognition | อยู่ตรงไหนครับ |
| `cv1.cue-variant.emergency.location.v03` | same | เกิดเหตุที่ไหนครับ | เกิดเหตุ/ที่ไหน/ครับ | gòoet hèet thîi-nǎi khráp | Where did it happen? | recognition | เกิดเหตุที่ไหนครับ |
| `cv1.cue-variant.emergency.location.v04` | same | สถานีเอกมัย ทางออกสองใช่ไหมครับ | สถานีเอกมัย/ทางออกสอง/ใช่ไหม/ครับ | sà-thǎa-nii èek-gà-mai thaang òrk sǎawng châi mǎi khráp | Ekkamai Station, Exit 2, right? | recognition | สถานีเอกมัย ทางออกสองใช่ไหมครับ |
| `cv1.cue-variant.emergency.help.v01` | `cv1.cue-family.emergency.help-needed` | ต้องการให้ช่วยอะไรครับ | ต้องการ/ให้ช่วยอะไร/ครับ | dtông-gaan hâi chûai à-rai khráp | What help do you need? | recognition | ต้องการให้ช่วยอะไรครับ |
| `cv1.cue-variant.emergency.help.v02` | same | ให้ช่วยอะไรครับ | ให้ช่วยอะไร/ครับ | hâi chûai à-rai khráp | What should I help with? | recognition | ให้ช่วยอะไรครับ |
| `cv1.cue-variant.emergency.help.v03` | same | ให้โทรหนึ่งหกหกเก้าไหมครับ | ให้โทรหนึ่งหกหกเก้า/ไหม/ครับ | hâi thoo nùeng hòk hòk gâao mǎi khráp | Should I call 1669? | recognition | ให้โทรหนึ่งหกหกเก้าไหมครับ |
| `cv1.cue-variant.emergency.help.v04` | same | ให้เรียกรถพยาบาลไหมครับ | ให้เรียกรถพยาบาล/ไหม/ครับ | hâi rîak rót phá-yaa-baan mǎi khráp | Should I call an ambulance? | recognition | ให้เรียกรถพยาบาลไหมครับ |

### 5.4 Response, accepted-set and option-set registries

| Response ID | Thai | Segments | Transliteration | English | Role | ttsText |
|---|---|---|---|---|---|---|
| `cv1.response.emergency.fact.full` | มีคนหมดสติครับ | มีคน/หมดสติ/ครับ | mii khon mòt sà-dtì khráp | Someone is unconscious. | active | มีคนหมดสติครับ |
| `cv1.response.emergency.fact.short` | คนหมดสติครับ | คน/หมดสติ/ครับ | khon mòt sà-dtì khráp | An unconscious person. | active | คนหมดสติครับ |
| `cv1.response.emergency.fact.with-location` | มีคนหมดสติที่สถานีเอกมัยครับ | มีคนหมดสติ/ที่สถานีเอกมัย/ครับ | mii khon mòt sà-dtì thîi sà-thǎa-nii èek-gà-mai khráp | Someone is unconscious at Ekkamai Station. | transfer-only | มีคนหมดสติที่สถานีเอกมัยครับ |
| `cv1.response.emergency.location.full` | อยู่ที่สถานีเอกมัย ทางออกสองครับ | อยู่ที่/สถานีเอกมัย ทางออกสอง/ครับ | yùu thîi sà-thǎa-nii èek-gà-mai thaang òrk sǎawng khráp | I am at Ekkamai Station, Exit 2. | active | อยู่ที่สถานีเอกมัย ทางออกสองครับ |
| `cv1.response.emergency.location.short` | สถานีเอกมัย ทางออกสองครับ | สถานีเอกมัย/ทางออกสอง/ครับ | sà-thǎa-nii èek-gà-mai thaang òrk sǎawng khráp | Ekkamai Station, Exit 2. | active | สถานีเอกมัย ทางออกสองครับ |
| `cv1.response.emergency.call-1669.full` | ช่วยโทรหนึ่งหกหกเก้าให้หน่อยครับ | ช่วย/โทรหนึ่งหกหกเก้า/ให้หน่อยครับ | chûai thoo nùeng hòk hòk gâao hâi nòi khráp | Please call 1669. | active | ช่วยโทรหนึ่งหกหกเก้าให้หน่อยครับ |
| `cv1.response.emergency.call-1669.short` | โทรหนึ่งหกหกเก้าให้หน่อยครับ | โทรหนึ่งหกหกเก้า/ให้หน่อยครับ | thoo nùeng hòk hòk gâao hâi nòi khráp | Call 1669, please. | active | โทรหนึ่งหกหกเก้าให้หน่อยครับ |
| `cv1.response.emergency.call-ambulance.full` | ช่วยเรียกรถพยาบาลให้หน่อยครับ | ช่วย/เรียกรถพยาบาล/ให้หน่อยครับ | chûai rîak rót phá-yaa-baan hâi nòi khráp | Please call an ambulance. | active | ช่วยเรียกรถพยาบาลให้หน่อยครับ |
| `cv1.response.emergency.call-ambulance.short` | เรียกรถพยาบาลให้หน่อยครับ | เรียกรถพยาบาล/ให้หน่อยครับ | rîak rót phá-yaa-baan hâi nòi khráp | Call an ambulance, please. | active | เรียกรถพยาบาลให้หน่อยครับ |

Each response has a singleton accepted set `cv1.accepted.emergency.<same-suffix>`.

Exact three-option sets use only this explicitly fictional context:

```text
cv1.option-set.emergency.fact.full = [fact.full*, location.full{wrong-function}, call-1669.full{wrong-function}]
cv1.option-set.emergency.fact.short = [fact.short*, location.short{wrong-function}, call-1669.short{wrong-function}]
cv1.option-set.emergency.fact.with-location = [fact.with-location*, location.full{location-only}, call-1669.full{request-not-fact}]
cv1.option-set.emergency.location.full = [location.full*, fact.full{fact-not-location}, call-1669.full{request-not-location}]
cv1.option-set.emergency.location.short = [location.short*, fact.short{fact-not-location}, call-1669.short{request-not-location}]
cv1.option-set.emergency.call-1669.full = [call-1669.full*, fact.full{fact-not-request}, location.full{location-not-request}]
cv1.option-set.emergency.call-1669.short = [call-1669.short*, fact.short{fact-not-request}, location.short{location-not-request}]
cv1.option-set.emergency.call-ambulance.full = [call-ambulance.full*, fact.full{fact-not-request}, location.full{location-not-request}]
cv1.option-set.emergency.call-ambulance.short = [call-ambulance.short*, fact.short{fact-not-request}, location.short{location-not-request}]
```

### 5.5 Model transcript and interaction forms

```text
P มีอะไรให้ช่วยไหมครับ
L มีคนหมดสติครับ
P อยู่ที่ไหนครับ
L อยู่ที่สถานีเอกมัย ทางออกสองครับ
P สถานีเอกมัย ทางออกสองใช่ไหมครับ
L ใช่ครับ
P ต้องการให้ช่วยอะไรครับ
L ช่วยโทรหนึ่งหกหกเก้าให้หน่อยครับ
P ผมจะโทรตอนนี้ครับ
L ขอบคุณครับ
```

The ninth turn is the registered recognition routine `cv1.routine.emergency.will-call-now`; playback never initiates a call.

Interaction rows:

```text
lesson-a
01 fictional-ekkamai-exit-2 | fact.v01 | emergency.fact.full | emergency.fact.full
02 fictional-ekkamai-exit-2 | location.v01 | emergency.location.full | emergency.location.full
03 fictional-ekkamai-exit-2 | help.v01 | emergency.call-1669.full | emergency.call-1669.full

d1-a
01 fictional-ekkamai-exit-2 | fact.v02 | emergency.fact.short | emergency.fact.short
02 fictional-ekkamai-exit-2 | location.v02 | emergency.location.short | emergency.location.short
03 fictional-ekkamai-exit-2 | help.v02 | emergency.call-1669.short | emergency.call-1669.short

d1-b
01 fictional-ekkamai-exit-2 | fact.v03 | emergency.fact.full | emergency.fact.full
02 fictional-ekkamai-exit-2 | location.v03 | emergency.location.full | emergency.location.full
03 fictional-ekkamai-exit-2 | help.v03 | emergency.call-1669.full | emergency.call-1669.full

d7-a
01 fictional-ekkamai-exit-2 | fact.v04 | emergency.fact.short | emergency.fact.short
02 fictional-ekkamai-exit-2 | location.v04 | emergency.location.full | emergency.location.full
03 fictional-ekkamai-exit-2 | help.v04 | emergency.call-ambulance.full | emergency.call-ambulance.full

d7-b
01 fictional-ekkamai-exit-2 | fact.v02 | emergency.fact.with-location | emergency.fact.with-location
02 fictional-ekkamai-exit-2 | location.v01 | emergency.location.short | emergency.location.short
03 fictional-ekkamai-exit-2 | help.v01 | emergency.call-ambulance.short | emergency.call-ambulance.short

gate-a
01 fictional-ekkamai-exit-2 | fact.v03 | emergency.fact.short | emergency.fact.short
02 fictional-ekkamai-exit-2 | location.v02 | emergency.location.full | emergency.location.full
03 fictional-ekkamai-exit-2 | help.v02 | emergency.call-ambulance.full | emergency.call-ambulance.full

gate-b
01 fictional-ekkamai-exit-2 | fact.v04 | emergency.fact.full | emergency.fact.full
02 fictional-ekkamai-exit-2 | location.v03 | emergency.location.short | emergency.location.short
03 fictional-ekkamai-exit-2 | help.v03 | emergency.call-1669.short | emergency.call-1669.short

d30-eligible
01 fictional-ekkamai-exit-2 | fact.v01 | emergency.fact.with-location | emergency.fact.with-location
02 fictional-ekkamai-exit-2 | location.v04 | emergency.location.short | emergency.location.short
03 fictional-ekkamai-exit-2 | help.v04 | emergency.call-ambulance.short | emergency.call-ambulance.short
04 fictional-ekkamai-exit-2 | fact.v01 | emergency.fact.short | emergency.fact.short
```

Forms and IDs follow §1.1 with scope `w07.l21`. Cross items are safety-labelled, never fake cross-domain transfer:

```text
cv1.interaction.cross.w07.l21.d7.a.01
  safety-rehearsal-ekkamai-exit-2 | fact.v04 | emergency.fact.with-location | emergency.fact.with-location

cv1.interaction.cross.w07.l21.d7.b.01
  safety-rehearsal-ekkamai-exit-2 | help.v02 | emergency.call-1669.full | emergency.call-1669.full
```

General location and `ช่วย…ให้หน่อยครับ` frames remain eligible for ordinary later transfer, but the emergency fact and call phrases themselves recur only in contexts whose ID contains `safety-rehearsal` or in sealed health/emergency assessment.

## 6. L22 — Learner-led opening hours and service

### 6.1 Manifest and event boundary

```text
lesson:   cv1.lesson.w08.l22.hours-services
scene:    cv1.scene.w08.l22.model
form:     cv1.form.lesson.w08.l22.a
duration: coreMinutes 25; ordinaryRepairMinutes 4; totalMinutes 29
requires: cv1.lesson.w04.l12.lunch-plan; cv1.lesson.w06.l16.clothing
activeTargets: 3
learnerLed: true
```

Every scored interaction begins with a non-Thai situation event. The learner selects the request first; only then does device TTS play the registered partner reply. The second objective tests the intent of that actual reply. An opening-hours answer is never played as if it were the initial cue.

### 6.2 Function, context, event, frame and slot registries

| ID | Kind | English / binding rule | Prerequisites / source note |
|---|---|---|---|
| `cv1.fn.hours.ask-opening` | function | Ask what time the named place opens. | L12 clock times; learner-led. |
| `cv1.fn.hours.ask-closing` | function | Ask what time the named place closes. | `ปิด` pre-taught before model. |
| `cv1.fn.service.ask-laundry` | function | Ask whether laundry service is available. | availability frame from L16; `บริการซักผ้า` pre-taught. |
| `cv1.fn.hours.recognize-opening-reply` | function | Recognize that the actual reply gives a 9 a.m. opening. | Receptive only. |
| `cv1.fn.hours.recognize-closing-reply` | function | Recognize that the actual reply gives a 6 p.m. closing. | Receptive only. |
| `cv1.fn.service.recognize-laundry-reply` | function | Recognize present/absent laundry service in the actual reply. | Receptive polarity. |
| `cv1.context.w08.l22.hotel-desk-today` | context | Fictional hotel desk; “today” is established visually. | Generic requests are fair only here. |
| `cv1.context.w08.l22.hotel-desk-tomorrow` | context | Fictional hotel desk; “tomorrow” is established visually. | Generic requests are fair only here. |
| `cv1.context.w08.l22.hotel-desk-service` | context | Fictional hotel desk; learner needs laundry information. | No real booking or property claim. |
| `cv1.event.w08.l22.ask-opening-today` | event | At the fictional hotel, ask what time it opens today. | Select opening request. |
| `cv1.event.w08.l22.ask-opening-tomorrow` | event | At the fictional hotel, ask what time it opens tomorrow. | Select opening request. |
| `cv1.event.w08.l22.ask-opening-established-day` | event | The card already says today or tomorrow; ask the opening time without repeating the day. | Generic-context transfer. |
| `cv1.event.w08.l22.ask-closing-today` | event | At the fictional hotel, ask what time it closes today. | Select closing request. |
| `cv1.event.w08.l22.ask-closing-tomorrow` | event | At the fictional hotel, ask what time it closes tomorrow. | Select closing request. |
| `cv1.event.w08.l22.ask-closing-established-day` | event | The card already says today or tomorrow; ask the closing time without repeating the day. | Generic-context transfer. |
| `cv1.event.w08.l22.ask-laundry-full` | event | Ask whether the fictional hotel has laundry service. | Full request. |
| `cv1.event.w08.l22.ask-laundry-short` | event | Ask about laundry at the fictional hotel using the taught shorter noun. | Controlled ellipsis. |
| `cv1.frame.hours.question` | frame | `{day}/{open-or-close}/กี่โมงครับ` | Recombines L12 time question; one new contrast family. |
| `cv1.frame.service.availability` | frame | `มี/{service}/ไหมครับ` | Reuses L16 availability. |
| `cv1.slot.hours.day.today` | slot | `วันนี้`; *wan-níi*; “today” | Taught before lesson. |
| `cv1.slot.hours.day.tomorrow` | slot | `พรุ่งนี้`; *phrûng-níi*; “tomorrow” | Taught before lesson. |
| `cv1.slot.hours.action.open` | slot | `เปิด`; *bpòoet*; “open” | Taught before model. |
| `cv1.slot.hours.action.close` | slot | `ปิด`; *bpìt*; “close” | Taught before model. |
| `cv1.slot.hours.time.nine` | slot | `เก้าโมง`; *gâao moong*; “9 a.m.” | L12 time atoms. |
| `cv1.slot.hours.time.six-evening` | slot | `หกโมงเย็น`; *hòk moong yen*; “6 p.m.” | Taught receptively before reply test. |
| `cv1.slot.service.laundry-full` | slot | `บริการซักผ้า`; *baw-rí-gaan sák phâa*; “laundry service” | Taught before model. |
| `cv1.slot.service.laundry-short` | slot | `ซักผ้า`; *sák phâa*; “laundry” | Taught substitution. |

### 6.3 Learner request and partner-reply language registry

All request records are `role:active`; all partner replies are `role:recognition`. Every row has `ttsText` equal to Thai, `lang:th-TH`, `rate:0.72`.

| ID | Thai | Segments | Transliteration | English | Role |
|---|---|---|---|---|---|
| `cv1.response.hours.ask-opening-today` | วันนี้เปิดกี่โมงครับ | วันนี้/เปิด/กี่โมง/ครับ | wan-níi bpòoet gìi moong khráp | What time do you open today? | active |
| `cv1.response.hours.ask-opening-tomorrow` | พรุ่งนี้เปิดกี่โมงครับ | พรุ่งนี้/เปิด/กี่โมง/ครับ | phrûng-níi bpòoet gìi moong khráp | What time do you open tomorrow? | active |
| `cv1.response.hours.ask-opening-generic` | เปิดกี่โมงครับ | เปิด/กี่โมง/ครับ | bpòoet gìi moong khráp | What time do you open? | active |
| `cv1.response.hours.ask-closing-today` | วันนี้ปิดกี่โมงครับ | วันนี้/ปิด/กี่โมง/ครับ | wan-níi bpìt gìi moong khráp | What time do you close today? | active |
| `cv1.response.hours.ask-closing-tomorrow` | พรุ่งนี้ปิดกี่โมงครับ | พรุ่งนี้/ปิด/กี่โมง/ครับ | phrûng-níi bpìt gìi moong khráp | What time do you close tomorrow? | active |
| `cv1.response.hours.ask-closing-generic` | ปิดกี่โมงครับ | ปิด/กี่โมง/ครับ | bpìt gìi moong khráp | What time do you close? | active |
| `cv1.response.service.ask-laundry-full` | มีบริการซักผ้าไหมครับ | มี/บริการซักผ้า/ไหม/ครับ | mii baw-rí-gaan sák phâa mǎi khráp | Do you have laundry service? | active |
| `cv1.response.service.ask-laundry-short` | มีซักผ้าไหมครับ | มี/ซักผ้า/ไหม/ครับ | mii sák phâa mǎi khráp | Is laundry available? | active |
| `cv1.response.hours.reply-opening-today-full` | วันนี้เปิดเก้าโมงครับ | วันนี้/เปิดเก้าโมง/ครับ | wan-níi bpòoet gâao moong khráp | We open at 9 today. | recognition |
| `cv1.response.hours.reply-opening-tomorrow-full` | พรุ่งนี้เปิดเก้าโมงครับ | พรุ่งนี้/เปิดเก้าโมง/ครับ | phrûng-níi bpòoet gâao moong khráp | We open at 9 tomorrow. | recognition |
| `cv1.response.hours.reply-opening-full` | เปิดเก้าโมงครับ | เปิด/เก้าโมง/ครับ | bpòoet gâao moong khráp | We open at 9. | recognition |
| `cv1.response.hours.reply-opening-short` | เก้าโมงครับ | เก้าโมง/ครับ | gâao moong khráp | Nine o'clock. | recognition |
| `cv1.response.hours.reply-closing-today-full` | วันนี้ปิดหกโมงเย็นครับ | วันนี้/ปิดหกโมงเย็น/ครับ | wan-níi bpìt hòk moong yen khráp | We close at 6 p.m. today. | recognition |
| `cv1.response.hours.reply-closing-tomorrow-full` | พรุ่งนี้ปิดหกโมงเย็นครับ | พรุ่งนี้/ปิดหกโมงเย็น/ครับ | phrûng-níi bpìt hòk moong yen khráp | We close at 6 p.m. tomorrow. | recognition |
| `cv1.response.hours.reply-closing-full` | ปิดหกโมงเย็นครับ | ปิด/หกโมงเย็น/ครับ | bpìt hòk moong yen khráp | We close at 6 p.m. | recognition |
| `cv1.response.hours.reply-closing-short` | หกโมงเย็นครับ | หกโมงเย็น/ครับ | hòk moong yen khráp | Six p.m. | recognition |
| `cv1.response.service.reply-yes-short` | มีครับ | มี/ครับ | mii khráp | Yes, we do. | recognition |
| `cv1.response.service.reply-no-short` | ไม่มีครับ | ไม่มี/ครับ | mâi mii khráp | No, we do not. | recognition |
| `cv1.response.service.reply-yes-full` | มีบริการซักผ้าครับ | มี/บริการซักผ้า/ครับ | mii baw-rí-gaan sák phâa khráp | Laundry service is available. | recognition |
| `cv1.response.service.reply-yes-location` | มีบริการซักผ้าที่ชั้นหนึ่งครับ | มีบริการซักผ้า/ที่ชั้นหนึ่ง/ครับ | mii baw-rí-gaan sák phâa thîi chán nùeng khráp | There is laundry service on the first floor. | recognition |
| `cv1.response.service.reply-no-full` | ไม่มีบริการซักผ้าครับ | ไม่มี/บริการซักผ้า/ครับ | mâi mii baw-rí-gaan sák phâa khráp | There is no laundry service. | recognition |

Every request has a singleton `cv1.accepted.<same suffix>`. Partner replies are immutable `partnerReplyId` values, not accepted learner responses.

### 6.4 Exact three-button sets

```text
cv1.option-set.hours.request.open-today = [ask-opening-today*, ask-closing-today{wrong-function}, ask-laundry-full{wrong-function}]
cv1.option-set.hours.request.open-tomorrow = [ask-opening-tomorrow*, ask-closing-tomorrow{wrong-function}, ask-laundry-full{wrong-function}]
cv1.option-set.hours.request.open-generic = [ask-opening-generic*, ask-closing-generic{wrong-function}, ask-laundry-short{wrong-function}]
cv1.option-set.hours.request.close-today = [ask-closing-today*, ask-opening-today{wrong-function}, ask-laundry-full{wrong-function}]
cv1.option-set.hours.request.close-tomorrow = [ask-closing-tomorrow*, ask-opening-tomorrow{wrong-function}, ask-laundry-full{wrong-function}]
cv1.option-set.hours.request.close-generic = [ask-closing-generic*, ask-opening-generic{wrong-function}, ask-laundry-short{wrong-function}]
cv1.option-set.service.request.laundry-full = [ask-laundry-full*, ask-opening-generic{wrong-function}, ask-closing-generic{wrong-function}]
cv1.option-set.service.request.laundry-short = [ask-laundry-short*, ask-opening-generic{wrong-function}, ask-closing-generic{wrong-function}]

cv1.option-set.hours.reply.open-today = [reply-opening-today-full*, reply-closing-today-full{wrong-function}, reply-no-short{wrong-function}]
cv1.option-set.hours.reply.open-tomorrow = [reply-opening-tomorrow-full*, reply-closing-tomorrow-full{wrong-function}, reply-no-short{wrong-function}]
cv1.option-set.hours.reply.open-full = [reply-opening-full*, reply-closing-full{wrong-function}, reply-no-short{wrong-function}]
cv1.option-set.hours.reply.open-short = [reply-opening-short*, reply-closing-short{wrong-function}, reply-yes-short{wrong-function}]
cv1.option-set.hours.reply.close-today = [reply-closing-today-full*, reply-opening-today-full{wrong-function}, reply-no-short{wrong-function}]
cv1.option-set.hours.reply.close-tomorrow = [reply-closing-tomorrow-full*, reply-opening-tomorrow-full{wrong-function}, reply-no-short{wrong-function}]
cv1.option-set.hours.reply.close-full = [reply-closing-full*, reply-opening-full{wrong-function}, reply-no-short{wrong-function}]
cv1.option-set.hours.reply.close-short = [reply-closing-short*, reply-opening-short{wrong-function}, reply-yes-short{wrong-function}]
cv1.option-set.service.reply.yes-short = [reply-yes-short*, reply-no-short{wrong-polarity}, reply-opening-short{wrong-function}]
cv1.option-set.service.reply.no-short = [reply-no-short*, reply-yes-short{wrong-polarity}, reply-closing-short{wrong-function}]
cv1.option-set.service.reply.yes-full = [reply-yes-full*, reply-no-full{wrong-polarity}, reply-opening-full{wrong-function}]
cv1.option-set.service.reply.yes-location = [reply-yes-location*, reply-no-full{wrong-polarity}, reply-opening-full{wrong-function}]
cv1.option-set.service.reply.no-full = [reply-no-full*, reply-yes-location{wrong-polarity}, reply-closing-full{wrong-function}]
```

Each bracket is exactly three displayed buttons: one `*` accepted target and exactly two functionally wrong distractors.

### 6.5 Model transcript and exact forms

```text
P สวัสดีครับ
L สวัสดีครับ
L พรุ่งนี้เปิดกี่โมงครับ
P พรุ่งนี้เปิดเก้าโมงครับ
L วันนี้ปิดกี่โมงครับ
P วันนี้ปิดหกโมงเย็นครับ
L มีบริการซักผ้าไหมครับ
P มีครับ
L ขอบคุณครับ
P ยินดีครับ
```

Rows are `[context | event | accepted request | request option set | partnerReplyId | reply option set]`.

```text
lesson-a
01 hotel-desk-tomorrow | ask-opening-tomorrow | hours.ask-opening-tomorrow | hours.request.open-tomorrow | hours.reply-opening-tomorrow-full | hours.reply.open-tomorrow
02 hotel-desk-today | ask-closing-today | hours.ask-closing-today | hours.request.close-today | hours.reply-closing-today-full | hours.reply.close-today
03 hotel-desk-service | ask-laundry-full | service.ask-laundry-full | service.request.laundry-full | service.reply-yes-short | service.reply.yes-short

d1-a
01 hotel-desk-today | ask-opening-today | hours.ask-opening-today | hours.request.open-today | hours.reply-opening-today-full | hours.reply.open-today
02 hotel-desk-tomorrow | ask-closing-tomorrow | hours.ask-closing-tomorrow | hours.request.close-tomorrow | hours.reply-closing-tomorrow-full | hours.reply.close-tomorrow
03 hotel-desk-service | ask-laundry-short | service.ask-laundry-short | service.request.laundry-short | service.reply-yes-location | service.reply.yes-location

d1-b
01 hotel-desk-today | ask-opening-established-day | hours.ask-opening-generic | hours.request.open-generic | hours.reply-opening-short | hours.reply.open-short
02 hotel-desk-tomorrow | ask-closing-established-day | hours.ask-closing-generic | hours.request.close-generic | hours.reply-closing-short | hours.reply.close-short
03 hotel-desk-service | ask-laundry-full | service.ask-laundry-full | service.request.laundry-full | service.reply-no-short | service.reply.no-short

d7-a
01 hotel-desk-tomorrow | ask-opening-established-day | hours.ask-opening-generic | hours.request.open-generic | hours.reply-opening-tomorrow-full | hours.reply.open-tomorrow
02 hotel-desk-today | ask-closing-established-day | hours.ask-closing-generic | hours.request.close-generic | hours.reply-closing-today-full | hours.reply.close-today
03 hotel-desk-service | ask-laundry-short | service.ask-laundry-short | service.request.laundry-short | service.reply-yes-short | service.reply.yes-short

d7-b
01 hotel-desk-today | ask-opening-today | hours.ask-opening-today | hours.request.open-today | hours.reply-opening-full | hours.reply.open-full
02 hotel-desk-tomorrow | ask-closing-tomorrow | hours.ask-closing-tomorrow | hours.request.close-tomorrow | hours.reply-closing-full | hours.reply.close-full
03 hotel-desk-service | ask-laundry-full | service.ask-laundry-full | service.request.laundry-full | service.reply-no-full | service.reply.no-full

gate-a
01 hotel-desk-today | ask-opening-established-day | hours.ask-opening-generic | hours.request.open-generic | hours.reply-opening-today-full | hours.reply.open-today
02 hotel-desk-tomorrow | ask-closing-established-day | hours.ask-closing-generic | hours.request.close-generic | hours.reply-closing-tomorrow-full | hours.reply.close-tomorrow
03 hotel-desk-service | ask-laundry-short | service.ask-laundry-short | service.request.laundry-short | service.reply-no-short | service.reply.no-short

gate-b
01 hotel-desk-tomorrow | ask-opening-tomorrow | hours.ask-opening-tomorrow | hours.request.open-tomorrow | hours.reply-opening-full | hours.reply.open-full
02 hotel-desk-today | ask-closing-today | hours.ask-closing-today | hours.request.close-today | hours.reply-closing-full | hours.reply.close-full
03 hotel-desk-service | ask-laundry-full | service.ask-laundry-full | service.request.laundry-full | service.reply-yes-location | service.reply.yes-location

d30-eligible
01 hotel-desk-today | ask-opening-today | hours.ask-opening-today | hours.request.open-today | hours.reply-opening-short | hours.reply.open-short
02 hotel-desk-tomorrow | ask-closing-tomorrow | hours.ask-closing-tomorrow | hours.request.close-tomorrow | hours.reply-closing-short | hours.reply.close-short
03 hotel-desk-service | ask-laundry-short | service.ask-laundry-short | service.request.laundry-short | service.reply-no-full | service.reply.no-full
04 hotel-desk-service | ask-laundry-full | service.ask-laundry-full | service.request.laundry-full | service.reply-yes-full | service.reply.yes-full
```

Generated IDs use scope `w08.l22`. Cross rows are exact learner-led interactions in established-day contexts:

```text
cv1.interaction.cross.w08.l22.d7.a.01
  hotel-desk-today | ask-opening-established-day | hours.ask-opening-generic | hours.request.open-generic | hours.reply-opening-full | hours.reply.open-full
cv1.interaction.cross.w08.l22.d7.b.01
  hotel-desk-tomorrow | ask-closing-established-day | hours.ask-closing-generic | hours.request.close-generic | hours.reply-closing-full | hours.reply.close-full
```

## 7. L23 — Wrong or missing service, then check

### 7.1 Manifest and privacy fixture

```text
lesson:   cv1.lesson.w08.l23.service-problem
scene:    cv1.scene.w08.l23.model
form:     cv1.form.lesson.w08.l23.a
duration: coreMinutes 25; ordinaryRepairMinutes 4; totalMinutes 29
requires: cv1.lesson.w06.l17.delivery-correction; cv1.lesson.w08.l22.hours-services
activeTargets: 3
fictionalRooms: 123, 213
```

All room numbers are fixed fiction. Only `หนึ่งสองสาม` (123) and `สองหนึ่งสาม` (213) are valid; there is no free room field and no personal-data persistence. `wrong item` and `missing item` reuse L17 families. The lesson's sole new productive family is the check request.

### 7.2 Function, context, frame and slot registries

| ID | Kind | English / binding rule | Prerequisites / source note |
|---|---|---|---|
| `cv1.fn.service.reject-wrong-item` | function | Say that the presented item is not the fictional learner's. | Reuses L17 wrong-order pattern. |
| `cv1.fn.service.report-missing-item` | function | Report the specified towel or parcel still missing. | Reuses L17 missing-item pattern. |
| `cv1.fn.service.request-check` | function | Ask the male staff member to check. | Sole new frame family. |
| `cv1.context.w08.l23.wrong-parcel-213-for-123` | context | Fictional learner is room 123; parcel label is room 213. | Makes generic cue unambiguous. |
| `cv1.context.w08.l23.wrong-towel-213-for-123` | context | Fictional learner is room 123; towel delivery sheet says room 213. | Parallel wrong-item card. |
| `cv1.context.w08.l23.missing-towel-room-123` | context | Fictional room 123 requested two towels and received none. | No real hotel claim. |
| `cv1.context.w08.l23.missing-parcel-room-213` | context | Fictional room 213 is awaiting a parcel. | No tracking or personal data. |
| `cv1.context.w08.l23.check-parcel-room-123` | context | Staff has heard the room-123 parcel problem; learner asks for a check. | Generic check cue fair. |
| `cv1.context.w08.l23.check-towel-room-213` | context | Staff has heard the room-213 towel problem; learner asks for a check. | Generic check cue fair. |
| `cv1.frame.service.wrong-item` | frame | `{item}/ไม่ใช่ของผม/ครับ` | Inherited L17 correction family. |
| `cv1.frame.service.missing-item` | frame | `ยังไม่ได้/{item}/ครับ` | Inherited L17 missing family. |
| `cv1.frame.service.request-check` | frame | `ช่วย/ตรวจสอบ/{detail}/ให้หน่อยครับ` | One new family; detail may be contextually empty. |
| `cv1.slot.service.item.parcel` | slot | `พัสดุ`; *phát-sà-dù*; “parcel” | Taught before model. |
| `cv1.slot.service.item.towel` | slot | `ผ้าเช็ดตัว`; *phâa chét dtua*; “towel” | Taught before model. |
| `cv1.slot.service.quantity.two-towels` | slot | `สองผืน`; *sǎawng phǔuen*; “two towels” | Recognition routine only. |
| `cv1.slot.room.room-123` | slot | `ห้องหนึ่งสองสาม`; *hôrng nùeng sǎawng sǎam*; “room 123” | Fixed W5 privacy fixture. |
| `cv1.slot.room.room-213` | slot | `ห้องสองหนึ่งสาม`; *hôrng sǎawng nùeng sǎam*; “room 213” | Fixed W5 privacy fixture. |

### 7.3 Cue and response language registry

Every row has exact `ttsText` equal to Thai, `lang:th-TH`, `rate:0.72`.

| ID | Family | Thai | Segments | Transliteration | English | Role |
|---|---|---|---|---|---|---|
| `cv1.cue-variant.service.wrong-item.v01` | `cv1.cue-family.service.item-check` | อันนี้ของคุณใช่ไหมครับ | อันนี้/ของคุณ/ใช่ไหม/ครับ | an níi khǎawng khun châi mǎi khráp | Is this yours? | recognition |
| `cv1.cue-variant.service.wrong-item.v02` | same | พัสดุนี้ของคุณใช่ไหมครับ | พัสดุนี้/ของคุณ/ใช่ไหม/ครับ | phát-sà-dù níi khǎawng khun châi mǎi khráp | Is this parcel yours? | recognition |
| `cv1.cue-variant.service.wrong-item.v03` | same | ผ้าเช็ดตัวนี้ของคุณใช่ไหมครับ | ผ้าเช็ดตัวนี้/ของคุณ/ใช่ไหม/ครับ | phâa chét dtua níi khǎawng khun châi mǎi khráp | Is this towel yours? | recognition |
| `cv1.cue-variant.service.wrong-item.v04` | same | อันนี้เป็นของห้องหนึ่งสองสามใช่ไหมครับ | อันนี้/เป็นของห้องหนึ่งสองสาม/ใช่ไหม/ครับ | an níi bpen khǎawng hôrng nùeng sǎawng sǎam châi mǎi khráp | Is this for room 123? | recognition |
| `cv1.cue-variant.service.missing.v01` | `cv1.cue-family.service.receipt-check` | ได้รับผ้าเช็ดตัวแล้วใช่ไหมครับ | ได้รับผ้าเช็ดตัวแล้ว/ใช่ไหม/ครับ | dâai-ráp phâa chét dtua láaeo châi mǎi khráp | You have received the towel, right? | recognition |
| `cv1.cue-variant.service.missing.v02` | same | ได้ผ้าเช็ดตัวแล้วใช่ไหมครับ | ได้ผ้าเช็ดตัวแล้ว/ใช่ไหม/ครับ | dâai phâa chét dtua láaeo châi mǎi khráp | You got the towel, right? | recognition |
| `cv1.cue-variant.service.missing.v03` | same | ได้รับพัสดุแล้วใช่ไหมครับ | ได้รับพัสดุแล้ว/ใช่ไหม/ครับ | dâai-ráp phát-sà-dù láaeo châi mǎi khráp | You have received the parcel, right? | recognition |
| `cv1.cue-variant.service.missing.v04` | same | ได้พัสดุแล้วใช่ไหมครับ | ได้พัสดุแล้ว/ใช่ไหม/ครับ | dâai phát-sà-dù láaeo châi mǎi khráp | You got the parcel, right? | recognition |
| `cv1.cue-variant.service.check.v01` | `cv1.cue-family.service.help-offer` | ต้องการให้ช่วยอะไรครับ | ต้องการ/ให้ช่วยอะไร/ครับ | dtông-gaan hâi chûai à-rai khráp | What help do you need? | recognition |
| `cv1.cue-variant.service.check.v02` | same | ให้ช่วยตรวจสอบไหมครับ | ให้ช่วยตรวจสอบ/ไหม/ครับ | hâi chûai dtrùat-sàawp mǎi khráp | Should I check? | recognition |
| `cv1.cue-variant.service.check.v03` | same | ต้องการให้ตรวจสอบอะไรครับ | ต้องการ/ให้ตรวจสอบอะไร/ครับ | dtông-gaan hâi dtrùat-sàawp à-rai khráp | What do you want checked? | recognition |
| `cv1.cue-variant.service.check.v04` | same | ให้ตรวจสอบอะไรครับ | ให้ตรวจสอบอะไร/ครับ | hâi dtrùat-sàawp à-rai khráp | What should I check? | recognition |
| `cv1.response.service.wrong-item-full` | response | อันนี้ไม่ใช่ของผมครับ | อันนี้/ไม่ใช่ของผม/ครับ | an níi mâi châi khǎawng phǒm khráp | This is not mine. | active |
| `cv1.response.service.wrong-item-short` | response | ไม่ใช่ของผมครับ | ไม่ใช่ของผม/ครับ | mâi châi khǎawng phǒm khráp | It is not mine. | active |
| `cv1.response.service.missing-towel` | response | ยังไม่ได้ผ้าเช็ดตัวครับ | ยังไม่ได้/ผ้าเช็ดตัว/ครับ | yang mâi dâai phâa chét dtua khráp | I have not received the towel yet. | active |
| `cv1.response.service.missing-parcel` | response | ยังไม่ได้พัสดุครับ | ยังไม่ได้/พัสดุ/ครับ | yang mâi dâai phát-sà-dù khráp | I have not received the parcel yet. | active |
| `cv1.response.service.missing-generic` | response | ยังไม่ได้ครับ | ยังไม่ได้/ครับ | yang mâi dâai khráp | Not yet. | active |
| `cv1.response.service.check-full` | response | ช่วยตรวจสอบให้หน่อยครับ | ช่วย/ตรวจสอบ/ให้หน่อยครับ | chûai dtrùat-sàawp hâi nòi khráp | Please check. | active |
| `cv1.response.service.check-short` | response | ตรวจสอบให้หน่อยครับ | ตรวจสอบ/ให้หน่อยครับ | dtrùat-sàawp hâi nòi khráp | Check, please. | active |
| `cv1.response.service.check-this` | response | ช่วยตรวจสอบอันนี้ให้หน่อยครับ | ช่วย/ตรวจสอบอันนี้/ให้หน่อยครับ | chûai dtrùat-sàawp an níi hâi nòi khráp | Please check this. | active |
| `cv1.response.service.check-parcel` | response | ช่วยตรวจสอบพัสดุให้หน่อยครับ | ช่วย/ตรวจสอบพัสดุ/ให้หน่อยครับ | chûai dtrùat-sàawp phát-sà-dù hâi nòi khráp | Please check the parcel. | active |
| `cv1.response.service.check-parcel-short` | response | ตรวจสอบพัสดุให้หน่อยครับ | ตรวจสอบพัสดุ/ให้หน่อยครับ | dtrùat-sàawp phát-sà-dù hâi nòi khráp | Check the parcel, please. | active |
| `cv1.routine.service.for-room-213` | routine | เป็นของห้องสองหนึ่งสามครับ | เป็นของ/ห้องสองหนึ่งสาม/ครับ | bpen khǎawng hôrng sǎawng nùeng sǎam khráp | It is for room 213. | recognition |
| `cv1.routine.service.learner-room-123` | routine | ผมอยู่ห้องหนึ่งสองสามครับ | ผมอยู่/ห้องหนึ่งสองสาม/ครับ | phǒm yùu hôrng nùeng sǎawng sǎam khráp | I am in room 123. | routine |
| `cv1.routine.service.two-towels` | routine | สองผืนครับ | สองผืน/ครับ | sǎawng phǔuen khráp | Two towels. | recognition |
| `cv1.routine.service.will-check` | routine | ผมจะตรวจสอบให้ครับ | ผมจะ/ตรวจสอบให้/ครับ | phǒm jà dtrùat-sàawp hâi khráp | I will check. | recognition |

Every active response has singleton `cv1.accepted.service.<same suffix>`.

### 7.4 Exact three-button sets

```text
cv1.option-set.service.wrong-full = [wrong-item-full*, missing-towel{wrong-function}, check-full{wrong-function}]
cv1.option-set.service.wrong-short = [wrong-item-short*, missing-generic{wrong-function}, check-short{wrong-function}]
cv1.option-set.service.missing-towel = [missing-towel*, wrong-item-full{wrong-function}, check-full{wrong-function}]
cv1.option-set.service.missing-parcel = [missing-parcel*, wrong-item-full{wrong-function}, check-parcel{wrong-function}]
cv1.option-set.service.missing-generic = [missing-generic*, wrong-item-short{wrong-function}, check-short{wrong-function}]
cv1.option-set.service.check-full = [check-full*, wrong-item-full{wrong-function}, missing-towel{wrong-function}]
cv1.option-set.service.check-short = [check-short*, wrong-item-short{wrong-function}, missing-generic{wrong-function}]
cv1.option-set.service.check-this = [check-this*, wrong-item-full{wrong-function}, missing-towel{wrong-function}]
cv1.option-set.service.check-parcel = [check-parcel*, wrong-item-full{wrong-function}, missing-parcel{wrong-function}]
cv1.option-set.service.check-parcel-short = [check-parcel-short*, wrong-item-short{wrong-function}, missing-generic{wrong-function}]
```

The two distractors in every set answer different functions, not merely the wrong room or wrong medical/service fact.

### 7.5 Model transcript and exact forms

```text
P พัสดุนี้ของคุณใช่ไหมครับ
L อันนี้ไม่ใช่ของผมครับ
P เป็นของห้องสองหนึ่งสามครับ
L ผมอยู่ห้องหนึ่งสองสามครับ
P ได้รับผ้าเช็ดตัวแล้วใช่ไหมครับ
L ยังไม่ได้ผ้าเช็ดตัวครับ
P ต้องการให้ช่วยอะไรครับ
L ช่วยตรวจสอบให้หน่อยครับ
P ผมจะตรวจสอบให้ครับ
L ขอบคุณครับ
```

Rows are `[context | cue | accepted set | option set]`.

```text
lesson-a
01 wrong-parcel-213-for-123 | wrong-item.v02 | service.wrong-item-full | service.wrong-full
02 missing-towel-room-123 | missing.v01 | service.missing-towel | service.missing-towel
03 check-parcel-room-123 | check.v01 | service.check-full | service.check-full

d1-a
01 wrong-parcel-213-for-123 | wrong-item.v01 | service.wrong-item-short | service.wrong-short
02 missing-parcel-room-213 | missing.v03 | service.missing-parcel | service.missing-parcel
03 check-towel-room-213 | check.v02 | service.check-short | service.check-short

d1-b
01 wrong-towel-213-for-123 | wrong-item.v03 | service.wrong-item-full | service.wrong-full
02 missing-towel-room-123 | missing.v02 | service.missing-generic | service.missing-generic
03 check-parcel-room-123 | check.v03 | service.check-parcel | service.check-parcel

d7-a
01 wrong-parcel-213-for-123 | wrong-item.v04 | service.wrong-item-short | service.wrong-short
02 missing-parcel-room-213 | missing.v04 | service.missing-parcel | service.missing-parcel
03 check-parcel-room-123 | check.v04 | service.check-parcel-short | service.check-parcel-short

d7-b
01 wrong-towel-213-for-123 | wrong-item.v01 | service.wrong-item-full | service.wrong-full
02 missing-towel-room-123 | missing.v01 | service.missing-generic | service.missing-generic
03 check-towel-room-213 | check.v03 | service.check-this | service.check-this

gate-a
01 wrong-parcel-213-for-123 | wrong-item.v03 | service.wrong-item-short | service.wrong-short
02 missing-towel-room-123 | missing.v04 | service.missing-towel | service.missing-towel
03 check-parcel-room-123 | check.v02 | service.check-parcel | service.check-parcel

gate-b
01 wrong-towel-213-for-123 | wrong-item.v04 | service.wrong-item-full | service.wrong-full
02 missing-parcel-room-213 | missing.v02 | service.missing-parcel | service.missing-parcel
03 check-towel-room-213 | check.v04 | service.check-short | service.check-short

d30-eligible
01 wrong-parcel-213-for-123 | wrong-item.v02 | service.wrong-item-short | service.wrong-short
02 missing-parcel-room-213 | missing.v01 | service.missing-generic | service.missing-generic
03 check-parcel-room-123 | check.v03 | service.check-parcel-short | service.check-parcel-short
04 wrong-towel-213-for-123 | wrong-item.v03 | service.wrong-item-short | service.wrong-short
```

Generated IDs use scope `w08.l23`. The two cross interactions preserve explicit context for otherwise generic cues:

```text
cv1.interaction.cross.w08.l23.d7.a.01
  check-towel-room-213 | check.v04 | service.check-this | service.check-this
cv1.interaction.cross.w08.l23.d7.b.01
  missing-parcel-room-213 | missing.v03 | service.missing-generic | service.missing-generic
```

## 8. L24 — Integrated Bangkok day, sealed recombination only

### 8.1 Zero-new-language manifest

```text
lesson:   cv1.lesson.w08.l24.bangkok-day
form:     cv1.form.lesson.w08.l24.a
scenes:   cv1.scene.w08.l24.taxi; cv1.scene.w08.l24.market; cv1.scene.w08.l24.delivery
duration: coreMinutes 28; ordinaryRepairMinutes 4; totalMinutes 32
requires: cv1.lesson.w02.l05.taxi-route; cv1.lesson.w03.l09.market; cv1.lesson.w05.l14.delivery
newFunctions: 0
newCueFamilies: 0
newCueVariants: 0
newFrames: 0
newSlots: 0
newResponses: 0
newRoutines: 0
```

L24 defines only new non-language contexts, scene order, interaction records and form membership. Every Thai payload is an immutable reference to a pre-L24 registry entity. Consequently a learner cannot encounter a new atom, frame or unseen response in this capstone.

### 8.2 Imported language records used in lesson form A

| Imported canonical ID | Thai | Segments | Transliteration | English | Role | ttsText / source |
|---|---|---|---|---|---|---|
| `cv1.cue-variant.transport.arrival.v03` | ถึงสถานีเอกมัยแล้วครับ | ถึง/สถานีเอกมัย/แล้ว/ครับ | thǔeng sà-thǎa-nii èek-gà-mai láaeo khráp | We have reached Ekkamai Station. | recognition | identical; W2 registry |
| `cv1.response.w02.l05.stop-here` | จอดตรงนี้ครับ | จอด/ตรงนี้/ครับ | jòrt dtrong níi khráp | Stop here. | active recurrence | identical; W2 registry |
| `cv1.cue-variant.market.unit-price-statement.v04` | มะม่วงถุงละห้าสิบบาทครับ | มะม่วง/ถุงละห้าสิบบาท/ครับ | má-mûang thǔng lá hâa-sìp bàat khráp | Mangoes are fifty baht per bag. | recognition recurrence | identical; W3 registry |
| `cv1.response.market.take-two-bags` | เอาสองถุงครับ | เอา/สอง/ถุง/ครับ | ao sǎawng thǔng khráp | I will take two bags. | active recurrence | identical; W3 registry |
| `cv1.cue-variant.w05.l14.dropoff.v01` | ให้ส่งที่ห้องไหมครับ | ให้ส่ง/ที่ห้อง/ไหม/ครับ | hâi sòng thîi hôrng mǎi khráp | Shall I deliver it to the room? | recognition recurrence | identical; W5 registry |
| `cv1.response.w05.l14.leave-lobby` | ฝากไว้ที่ล็อบบี้ครับ | ฝากไว้/ที่ล็อบบี้/ครับ | fàak wái thîi lóp-bîi khráp | Please leave it in the lobby. | active recurrence | identical; W5 registry |

All imported rows retain `lang:th-TH`, `rate:0.72`, `slowRepairRate:0.58` and their prior prerequisite/source notes. L24 creates no aliases. The required corrected taxi pairing is arrival statement `arrival.v03` → stop request `stop-here`; `ตรงนี้ใช่ไหมครับ` is not substituted for the arrival statement.

### 8.3 Context and scene registry

| ID | Kind | English / binding rule |
|---|---|---|
| `cv1.context.w08.l24.taxi.arrived-ekkamai` | context | Taxi has just reached Ekkamai Station; learner wants to stop here. |
| `cv1.context.w08.l24.taxi.arrived-destination` | context | Taxi has reached the marked fictional destination. |
| `cv1.context.w08.l24.taxi.stop-marker-here` | context | Route card places destination at current position. |
| `cv1.context.w08.l24.taxi.stop-marker-ahead` | context | Route card places destination just ahead. |
| `cv1.context.w08.l24.taxi.route-straight` | context | Route card requires straight travel. |
| `cv1.context.w08.l24.taxi.route-left` | context | Route card requires a left turn ahead. |
| `cv1.context.w08.l24.taxi.route-right` | context | Route card requires a right turn ahead. |
| `cv1.context.w08.l24.market.mango-known-price` | context | Vendor has stated a price per mango bag; quantity request is now appropriate. |
| `cv1.context.w08.l24.market.bag-known-price` | context | Vendor has stated a bag price; quantity request is now appropriate. |
| `cv1.context.w08.l24.delivery.room-123` | context | Fictional delivery for fixed room 123; learner chooses a taught drop-off. |
| `cv1.context.w08.l24.delivery.room-213` | context | Fictional delivery for fixed room 213; learner chooses a taught drop-off. |
| `cv1.context.w08.l24.delivery.generic` | context | Fictional delivery; destination is established by the exact cue. |

Ordered transcript, 12 turns in three separate four-turn scenes:

```text
[cv1.scene.w08.l24.taxi]
P สวัสดีครับ
P ถึงสถานีเอกมัยแล้วครับ
L จอดตรงนี้ครับ
L ขอบคุณครับ

[cv1.scene.w08.l24.market]
P มะม่วงถุงละห้าสิบบาทครับ
L เอาสองถุงครับ
P ได้ครับ
L ขอบคุณครับ

[cv1.scene.w08.l24.delivery]
P ให้ส่งที่ห้องไหมครับ
L ฝากไว้ที่ล็อบบี้ครับ
P ได้ครับ
L ขอบคุณครับ
```

### 8.4 Exact imported authorities and interaction forms

The following authorities are referenced directly and remain three-button sets in their owning registries:

```text
taxi:    cv1.accepted.w02.l05.stop-here; cv1.accepted.w02.l05.stop-ahead;
         cv1.accepted.w02.l05.straight; cv1.accepted.w02.l05.turn-left-ahead;
         cv1.accepted.w02.l05.turn-right-ahead;
         cv1.options.w02.l05.stop; cv1.options.w02.l05.straight;
         cv1.options.w02.l05.turn-left; cv1.options.w02.l05.turn-right
market:  cv1.accepted.market.take-one; cv1.accepted.market.take-two; cv1.accepted.market.take-three;
         cv1.options.market.take-one; cv1.options.market.take-two; cv1.options.market.take-three
delivery: cv1.accept.w05.l14.leave-lobby; cv1.accept.w05.l14.leave-room;
          cv1.accept.w05.l14.leave-counter; cv1.options.w05.l14.leave-lobby;
          cv1.options.w05.l14.leave-room; cv1.options.w05.l14.leave-counter
```

Every interaction below has `recurrenceOf` equal to its accepted response ID. Rows are `[context | exact cue ID | exact accepted-set ID | exact option-set ID]`.

```text
lesson-a
01 taxi.arrived-ekkamai | cv1.cue-variant.transport.arrival.v03 | cv1.accepted.w02.l05.stop-here | cv1.options.w02.l05.stop
02 market.mango-known-price | cv1.cue-variant.market.unit-price-statement.v04 | cv1.accepted.market.take-two | cv1.options.market.take-two
03 delivery.generic | cv1.cue-variant.w05.l14.dropoff.v01 | cv1.accept.w05.l14.leave-lobby | cv1.options.w05.l14.leave-lobby

d1-a
01 taxi.arrived-destination | cv1.cue-variant.transport.arrival.v01 | cv1.accepted.w02.l05.stop-here | cv1.options.w02.l05.stop
02 market.bag-known-price | cv1.cue-variant.market.unit-price-statement.v01 | cv1.accepted.market.take-one | cv1.options.market.take-one
03 delivery.generic | cv1.cue-variant.w05.l14.dropoff.v02 | cv1.accept.w05.l14.leave-counter | cv1.options.w05.l14.leave-counter

d1-b
01 taxi.stop-marker-here | cv1.cue-variant.transport.arrival.v02 | cv1.accepted.w02.l05.stop-here | cv1.options.w02.l05.stop
02 market.bag-known-price | cv1.cue-variant.market.unit-price-statement.v02 | cv1.accepted.market.take-two | cv1.options.market.take-two
03 delivery.generic | cv1.cue-variant.w05.l14.dropoff.v03 | cv1.accept.w05.l14.leave-lobby | cv1.options.w05.l14.leave-lobby

d7-a
01 taxi.stop-marker-here | cv1.cue-variant.transport.stop-location.v01 | cv1.accepted.w02.l05.stop-here | cv1.options.w02.l05.stop
02 market.bag-known-price | cv1.cue-variant.market.unit-price-statement.v03 | cv1.accepted.market.take-three | cv1.options.market.take-three
03 delivery.generic | cv1.cue-variant.w05.l14.dropoff.v04 | cv1.accept.w05.l14.leave-room | cv1.options.w05.l14.leave-room

d7-b
01 taxi.stop-marker-ahead | cv1.cue-variant.transport.stop-location.v02 | cv1.accepted.w02.l05.stop-ahead | cv1.options.w02.l05.stop
02 market.mango-known-price | cv1.cue-variant.market.unit-price-statement.v04 | cv1.accepted.market.take-one | cv1.options.market.take-one
03 delivery.generic | cv1.cue-variant.w05.l14.dropoff.v05 | cv1.accept.w05.l14.leave-lobby | cv1.options.w05.l14.leave-lobby

gate-a
01 taxi.route-straight | cv1.cue-variant.transport.which-way.v01 | cv1.accepted.w02.l05.straight | cv1.options.w02.l05.straight
02 market.bag-known-price | cv1.cue-variant.market.unit-price-statement.v01 | cv1.accepted.market.take-three | cv1.options.market.take-three
03 delivery.generic | cv1.cue-variant.w05.l14.dropoff.v06 | cv1.accept.w05.l14.leave-counter | cv1.options.w05.l14.leave-counter

gate-b
01 taxi.route-left | cv1.cue-variant.transport.which-way.v03 | cv1.accepted.w02.l05.turn-left-ahead | cv1.options.w02.l05.turn-left
02 market.bag-known-price | cv1.cue-variant.market.unit-price-statement.v02 | cv1.accepted.market.take-one | cv1.options.market.take-one
03 delivery.room-123 | cv1.cue-variant.w05.l14.dropoff.v07 | cv1.accept.w05.l14.leave-lobby | cv1.options.w05.l14.leave-lobby

d30-eligible
01 taxi.route-right | cv1.cue-variant.transport.which-way.v03 | cv1.accepted.w02.l05.turn-right-ahead | cv1.options.w02.l05.turn-right
02 market.bag-known-price | cv1.cue-variant.market.unit-price-statement.v03 | cv1.accepted.market.take-two | cv1.options.market.take-two
03 delivery.room-213 | cv1.cue-variant.w05.l14.dropoff.v08 | cv1.accept.w05.l14.leave-lobby | cv1.options.w05.l14.leave-lobby
04 delivery.generic | cv1.cue-variant.w05.l14.dropoff.v02 | cv1.accept.w05.l14.leave-room | cv1.options.w05.l14.leave-room
```

Generated IDs use scope `w08.l24`; the `recurrenceOf` field preserves the exact imported response ID. L24 cross rows also contain no new language:

```text
cv1.interaction.cross.w08.l24.d7.a.01
  taxi.stop-marker-here | cv1.cue-variant.transport.stop-location.v03 | cv1.accepted.w02.l05.stop-here | cv1.options.w02.l05.stop
cv1.interaction.cross.w08.l24.d7.b.01
  market.bag-known-price | cv1.cue-variant.market.unit-price-statement.v03 | cv1.accepted.market.take-one | cv1.options.market.take-one
```

## 9. Exact form manifests

### 9.1 Per-lesson lesson and retention forms

For every row below, `.01..03` is an inclusive exact membership list, not a sampling instruction.

| Lesson scope | Lesson form A | d1 form A | d1 form B | d7 form A | d7 form B |
|---|---|---|---|---|---|
| `w07.l19` | `cv1.form.lesson.w07.l19.a = cv1.interaction.lesson.w07.l19.a.01..03` | `cv1.form.retention.w07.l19.d1.a = cv1.interaction.retention.w07.l19.d1.a.01..03` | `cv1.form.retention.w07.l19.d1.b = ...d1.b.01..03` | `cv1.form.retention.w07.l19.d7.a = ...d7.a.01..03 + cv1.interaction.cross.w07.l19.d7.a.01` | `cv1.form.retention.w07.l19.d7.b = ...d7.b.01..03 + cv1.interaction.cross.w07.l19.d7.b.01` |
| `w07.l20` | `cv1.form.lesson.w07.l20.a = cv1.interaction.lesson.w07.l20.a.01..03` | `cv1.form.retention.w07.l20.d1.a = ...d1.a.01..03` | `cv1.form.retention.w07.l20.d1.b = ...d1.b.01..03` | `cv1.form.retention.w07.l20.d7.a = ...d7.a.01..03 + cv1.interaction.cross.w07.l20.d7.a.01` | `cv1.form.retention.w07.l20.d7.b = ...d7.b.01..03 + cv1.interaction.cross.w07.l20.d7.b.01` |
| `w07.l21` | `cv1.form.lesson.w07.l21.a = cv1.interaction.lesson.w07.l21.a.01..03` | `cv1.form.retention.w07.l21.d1.a = ...d1.a.01..03` | `cv1.form.retention.w07.l21.d1.b = ...d1.b.01..03` | `cv1.form.retention.w07.l21.d7.a = ...d7.a.01..03 + cv1.interaction.cross.w07.l21.d7.a.01` | `cv1.form.retention.w07.l21.d7.b = ...d7.b.01..03 + cv1.interaction.cross.w07.l21.d7.b.01` |
| `w08.l22` | `cv1.form.lesson.w08.l22.a = cv1.interaction.lesson.w08.l22.a.01..03` | `cv1.form.retention.w08.l22.d1.a = ...d1.a.01..03` | `cv1.form.retention.w08.l22.d1.b = ...d1.b.01..03` | `cv1.form.retention.w08.l22.d7.a = ...d7.a.01..03 + cv1.interaction.cross.w08.l22.d7.a.01` | `cv1.form.retention.w08.l22.d7.b = ...d7.b.01..03 + cv1.interaction.cross.w08.l22.d7.b.01` |
| `w08.l23` | `cv1.form.lesson.w08.l23.a = cv1.interaction.lesson.w08.l23.a.01..03` | `cv1.form.retention.w08.l23.d1.a = ...d1.a.01..03` | `cv1.form.retention.w08.l23.d1.b = ...d1.b.01..03` | `cv1.form.retention.w08.l23.d7.a = ...d7.a.01..03 + cv1.interaction.cross.w08.l23.d7.a.01` | `cv1.form.retention.w08.l23.d7.b = ...d7.b.01..03 + cv1.interaction.cross.w08.l23.d7.b.01` |
| `w08.l24` | `cv1.form.lesson.w08.l24.a = cv1.interaction.lesson.w08.l24.a.01..03` | `cv1.form.retention.w08.l24.d1.a = ...d1.a.01..03` | `cv1.form.retention.w08.l24.d1.b = ...d1.b.01..03` | `cv1.form.retention.w08.l24.d7.a = ...d7.a.01..03 + cv1.interaction.cross.w08.l24.d7.a.01` | `cv1.form.retention.w08.l24.d7.b = ...d7.b.01..03 + cv1.interaction.cross.w08.l24.d7.b.01` |

Lesson and d1 forms therefore contain three interactions/six objectives; d7 forms contain four interactions/eight objectives. Objective IDs expand exactly by §1.1.

### 9.2 Gate pools and cross-course composition contract

Each lesson contributes exactly six sealed gate interactions:

```text
cv1.pool.assessment.<scope>.a = cv1.interaction.assessment.<scope>.gate-a.01..03
cv1.pool.assessment.<scope>.b = cv1.interaction.assessment.<scope>.gate-b.01..03
```

This applies to scopes `w07.l19`, `w07.l20`, `w07.l21`, `w08.l22`, `w08.l23`, and `w08.l24`: 36 interactions/72 objectives total. Pool A and pool B are disjoint, and every three-button option authority is frozen above.

The W7 registry contribution to three disjoint cumulative 12-objective forms is exact:

```text
cv1.manifest.contribution.w07-unit-gate.a =
  assessment.w07.l19.gate-a.01, assessment.w07.l19.gate-a.02,
  assessment.w07.l20.gate-a.01, assessment.w07.l21.gate-a.01

cv1.manifest.contribution.w07-unit-gate.b =
  assessment.w07.l19.gate-a.03,
  assessment.w07.l20.gate-a.02, assessment.w07.l20.gate-a.03,
  assessment.w07.l21.gate-a.02

cv1.manifest.contribution.w07-unit-gate.c =
  assessment.w07.l19.gate-b.01, assessment.w07.l20.gate-b.01,
  assessment.w07.l21.gate-a.03, assessment.w07.l21.gate-b.01
```

Each contribution is four interactions/eight objectives and samples all three W7 lessons. The cross-course curriculum manifest must append exactly two disjoint, sealed W1–W6 interactions/four objectives to each contribution. Thus this W7–W8-only registry reports an intentional external shortage of exactly six earlier-unit interactions total; it does not fabricate aliases or claim a non-cumulative gate. Remaining W7 pool records are retake reserve.

The W7–W8 contribution to three disjoint final 20-objective forms is exact:

```text
cv1.manifest.contribution.final-gate.a = gate-a.01 from each of w07.l19,w07.l20,w07.l21,w08.l22,w08.l23,w08.l24
cv1.manifest.contribution.final-gate.b = gate-a.02 from each of w07.l19,w07.l20,w07.l21,w08.l22,w08.l23,w08.l24
cv1.manifest.contribution.final-gate.c = gate-a.03 from each of w07.l19,w07.l20,w07.l21,w08.l22,w08.l23,w08.l24
```

Each final contribution is six interactions/12 objectives, one interaction from every lesson in this registry, and the three contributions are pairwise disjoint. The cross-course curriculum manifest must append exactly four sealed W1–W6 interactions/eight objectives per form while sampling every earlier unit. This file's exact external shortage is therefore 12 earlier-unit interactions total. Pool-B records remain sealed retake reserve. These contribution records make the local supply sufficient without pretending that a W7–W8-only document can certify W1–W6 coverage.

### 9.3 Exact +30 manifests

W7 unit +30 has two disjoint 12-objective forms:

```text
cv1.form.retention.w07.d30.a =
  retention.w07.l19.d30.eligible.01,.02;
  retention.w07.l20.d30.eligible.01,.02;
  retention.w07.l21.d30.eligible.01,.02

cv1.form.retention.w07.d30.b =
  retention.w07.l19.d30.eligible.03,.04;
  retention.w07.l20.d30.eligible.03,.04;
  retention.w07.l21.d30.eligible.03,.04
```

Final +30 has two disjoint 20-objective forms:

```text
cv1.form.retention.final.d30.a =
  w07.l19 .01,.02; w07.l20 .01,.02; w07.l21 .01;
  w08.l22 .01,.02; w08.l23 .01; w08.l24 .01,.02

cv1.form.retention.final.d30.b =
  w07.l19 .03,.04; w07.l20 .03,.04; w07.l21 .02;
  w08.l22 .03,.04; w08.l23 .02; w08.l24 .03,.04
```

In this subsection each abbreviated item expands to `cv1.interaction.retention.<scope>.d30.eligible.<NN>`. Each final form has ten interactions/20 objectives and samples all six W7–W8 lessons. `w07.l21` `.03,.04` and `w08.l23` `.03,.04` are four sealed final-retake reserves.

## 10. Recurrence ledger

This ledger is exhaustive for the three scored functions in every lesson. `L`, `1A`, `1B`, `7A`, `7B`, `GA`, `GB`, `30` expand respectively to `lesson.a`, `d1.a`, `d1.b`, `d7.a`, `d7.b`, `gate-a`, `gate-b`, and `d30.eligible`. An ordinal expands with the owning lesson scope and §1.1. `XA/XB` is the exact cross ID shown in the lesson section.

| Lesson | Function / response family | Exact recurrence positions | Cue/event family coverage |
|---|---|---|---|
| L19 | symptom report (`headache-*`, `stomach-*`) | `L01,1A01,1B01,7A01,7B01,GA01,GB01,30-01,30-04,XA` | `health.symptom.v01..v04`; XA uses v01. |
| L19 | fever report (`yes-*`, `no-*`) | `L02,1A02,1B02,7A02,7B02,GA02,GB02,30-02,XB` | `health.fever.v01..v04`; XB uses v01. |
| L19 | allergy uncertainty (`unsure-*`) | `L03,1A03,1B03,7A03,7B03,GA03,GB03,30-03` | `health.allergy.v01..v04`; no other allergy value exists. |
| L20 | amount confirmation (`amount.*`) | `L01,1A01,1B01,7A01,7B01,GA01,GB01,30-01` | amount declaratives v01..v04. |
| L20 | timing confirmation (`timing.*`) | `L02,1A02,1B02,7A02,7B02,GA02,GB02,30-02` | timing declaratives v01..v04. |
| L20 | combined confirmation (`combined.*`) | `L03,1A03,1B03,7A03,7B03,GA03,GB03,30-03,30-04,XA,XB` | exact combined records in §4.3 only. |
| L21 | fictional fact (`fact.*`) | `L01,1A01,1B01,7A01,7B01,GA01,GB01,30-01,30-04,XA` | `emergency.fact.v01..v04`; safety contexts only. |
| L21 | exact location (`location.*`) | `L02,1A02,1B02,7A02,7B02,GA02,GB02,30-02` | `emergency.location.v01..v04`; learner supplies location before v04 confirmation. |
| L21 | emergency call request (`call-*`) | `L03,1A03,1B03,7A03,7B03,GA03,GB03,30-03,XB` | `emergency.help.v01..v04`; safety contexts only. |
| L22 | opening request/reply | `L01,1A01,1B01,7A01,7B01,GA01,GB01,30-01,XA` | events `ask-opening-*`; actual replies cover full/short/day forms. |
| L22 | closing request/reply | `L02,1A02,1B02,7A02,7B02,GA02,GB02,30-02,XB` | events `ask-closing-*`; actual replies cover full/short/day forms. |
| L22 | laundry request/reply | `L03,1A03,1B03,7A03,7B03,GA03,GB03,30-03,30-04` | events `ask-laundry-full/short`; reply polarity is always actual audio. |
| L23 | reject wrong item | `L01,1A01,1B01,7A01,7B01,GA01,GB01,30-01,30-04` | `service.wrong-item.v01..v04`; room context mandatory. |
| L23 | report missing | `L02,1A02,1B02,7A02,7B02,GA02,GB02,30-02,XB` | `service.missing.v01..v04`; item context mandatory. |
| L23 | request check | `L03,1A03,1B03,7A03,7B03,GA03,GB03,30-03,XA` | `service.check.v01..v04`; problem context mandatory. |
| L24 | taxi recurrence | `L01,1A01,1B01,7A01,7B01,GA01,GB01,30-01,XA` | imported arrival/stop/route cues only. |
| L24 | market recurrence | `L02,1A02,1B02,7A02,7B02,GA02,GB02,30-02,XB` | imported price statements only. |
| L24 | delivery recurrence | `L03,1A03,1B03,7A03,7B03,GA03,GB03,30-03,30-04` | imported drop-off cues only. |

Medical/emergency fact and call rows have a deliberate safety exemption from ordinary cross-domain recurrence: their XA/XB and all later uses must retain `fictional-role-play`, `fictional-label` or `safety-rehearsal` context. The general location and help-request frames may recur elsewhere, but the health fact/call phrases may not.

## 11. Binding counts and invariants

```text
lessonCount: 6
orderedModelTranscriptTurns: L19=10, L20=9, L21=10, L22=10, L23=10, L24=12
lessonActiveTargetCounts: L19=3, L20=2, L21=3, L22=3, L23=3, L24=0-new/3-recurrent
lessonFormInteractions: 6 lessons × 3 = 18
d1Interactions: 6 lessons × 2 forms × 3 = 36
d7Interactions: 6 lessons × 2 forms × 4 = 48
gatePoolInteractions: 6 lessons × 2 pools × 3 = 36
d30EligibleInteractions: 6 lessons × 4 = 24
W7UnitD30Forms: 2 × 6 interactions = 12 sources, disjoint
finalD30Forms: 2 × 10 interactions = 20 sources, disjoint; 4 reserve
responseSelectionButtonsPerObjective: exactly 3
acceptedDisplayedResponsesPerObjective: exactly 1
functionallyWrongDistractorsPerObjective: exactly 2
L19StoredMedicalValues: 0
L19AllergyValueSlots: 1 (uncertainty only)
L20SemanticAxes: 2
L20BoundedValues: 4
L20LearnerDosingChoices: 0
L21FictionalLocations: 1 (Ekkamai Station, Exit 2)
L22PartnerReplyBeforeLearnerRequest: 0
L23FictionalRoomValues: 2 (123, 213)
L24NewLanguageEntities: 0
nativeAudioDependencies: 0
nativeReviewerDependencies: 0
readingGates: 0
TBDMarkers: 0
```

Validation must fail on any non-male complete Thai line; any line whose `ttsText` differs from its Thai payload; any option set not shaped `[one accepted, two functionally wrong]`; any cold atom in delayed/gate forms; any L19 personal-fact field; any L20 instruction phrased as advice or learner choice; any L21 confirmation before the learner supplies Exit 2; any L22 interaction without an event, accepted request, actual `partnerReplyId` and reply-intent option set; any L23 room outside 123/213; any L24 language definition; or any emergency fact/call recurrence outside an explicit fictional safety rehearsal.
