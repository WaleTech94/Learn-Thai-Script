# Bangkok Conversation Foundation — Canonical Implementation Specification

> **v8.5.0 override:** see [What stuck? release contract](v8_5_learning_check.md) for current shared interactions, supplementary evidence, lesson estimates and active Lesson 3 +7 forms C/D. Original A/B entries below are archived history. Weeks 2–8 are still unshipped.

**Specification revision:** 1.0
**Date:** 2026-08-28
**Status:** frozen course/content specification; v8.3.0 implemented the engine and complete Week 1 slice, v8.4.0 rebuilt its interaction shell, and v8.4.1 corrected that shell to model every reply before practice through `docs/v8_4_conversation_builder_implementation.md`. Weeks 2–8 remain staged.
**Course id:** `bangkok-conversation-foundation-v1`
**Curriculum revision:** `1`

This specification is one binding set with the [content inventory](conversation_course_content_inventory.md), [cross-course form manifest](conversation_course_form_manifest.md), [Weeks 1–2 registry](conversation_registry_weeks_1_2.md), [Weeks 3–4 registry](conversation_registry_weeks_3_4.md), [Weeks 5–6 registry](conversation_registry_weeks_5_6.md) and [Weeks 7–8 registry](conversation_registry_weeks_7_8.md). The implementation specification controls architecture and evidence; the form manifest controls cross-course membership; the week registry controls exact content inside its scope. A lower-level file cannot weaken a parent safety, privacy, audio or progression boundary.

## 1. Decision and scope

This document is the binding implementation plan for the app's first conversation-first course. It replaces the earlier assumption that a well-built food-ordering pilot could be expanded scene by scene without first defining the course system.

The course is an eight-unit, 24-lesson **functional Bangkok foundation** for one close-to-beginner adult learner. Its compulsory path develops comprehension of device-generated Thai cues, selection of an appropriate learned response, supported answer-before-reveal speaking practice, controlled recombination and delayed retention. It does not certify pronunciation, spontaneous speech, understanding natural speakers or CEFR B1.

The existing v8.2.3 food scene remains valuable source material and a UI fixture. Its content is split across the first two lessons because four new active replies, two routines and a substitution are too much to establish as the normal A0 lesson budget. Its English-visible response questions, timed learner gap and aggregate evidence are not inherited as mastery contracts.

Non-negotiable boundaries:

- The owner is male. Every complete learner utterance uses `ครับ`.
- Every modeled interlocutor is male and uses `ครับ`; the female polite particle is absent from authored course data.
- Device Thai `speechSynthesis` is the only pronunciation model.
- Native recordings, a native reviewer, remote audio and pronunciation scoring are not dependencies.
- Recording is optional, temporary, local and unscored.
- Thai script is always available as support, but script knowledge and Phase 1 progress never gate conversation.
- Conversation state never mutates Phase 1 lessons, SRS, checks, retention, errors, tokens, streaks, reading days or rewards.
- Required work never exceeds 45 estimated active minutes in one Bangkok calendar day.

## 2. Completion claim

After passing the final gate, the app may say:

> Functional Bangkok foundation completed. You passed device-voice cue-comprehension and response-selection checks and practised the taught replies aloud.

It must not say or imply that the learner:

- speaks Thai accurately;
- has mastered tones, aspiration, vowel length or final stops;
- understands ordinary native-speed conversation;
- can converse freely;
- has reached B1;
- has received human pronunciation or language validation.

## 3. The conversation-learning spine

The Phase 1 equivalent of letter → class → tone is:

**meaning → cue intent → response frame → controlled slot change → reduced-support interaction → cross-scene transfer → delayed retrieval**

The basic curriculum unit is not a phrase. It is an interaction contract containing:

1. a situation and communicative function;
2. one or more recognition cue families;
3. an appropriate active response frame or learner-led request;
4. explicitly permitted lexical slots;
5. acceptable response alternatives;
6. likely misconception distractors;
7. later recurrence and sealed-transfer assignments.

The engine must support both directions:

- `partner-led`: the partner speaks first and the learner responds;
- `learner-led`: the learner makes a request, then demonstrates understanding of the partner's reply.

The current pilot implements only the first direction. Taxi destinations, directions, reception and pharmacy require the second.

### 3.1 Content roles

Every Thai item has exactly one role:

- `active`: expected in answer-before-reveal retrieval and delayed checks;
- `recognition`: a cue or reply the learner must understand but never has to produce;
- `routine`: a formulaic social move embedded frequently without adding ordinary active-frame burden;
- `slot`: a bounded value permitted inside an active frame;
- `transfer-only`: a reserved combination of previously taught atoms.

Promotion from `recognition` or `routine` to `active` is explicit and counts against the lesson's new-material budget.

### 3.2 Stable identifiers

Identifiers are immutable after release:

```text
lesson:       cv1.lesson.w01.l01.food-order
function:     cv1.fn.food.order-item
cue family:   cv1.cue-family.food.what-would-you-like
cue variant:  cv1.cue-variant.food.what-would-you-like.v01
frame:        cv1.frame.food.want-item
slot:         cv1.slot.food.item.gaprao-chicken
routine:      cv1.routine.social.thanks
scene:        cv1.scene.w01.l01.model
objective:    cv1.objective.lesson.w01.l01.a.01
transfer:     cv1.interaction.assessment.w01.pool-a.l01.01
retention:    cv1.retention.w01.l01.d1
gate:         cv1.gate.w01
```

An ID may not be reused for changed Thai, meaning, role, prerequisites or scoring. A material change increments the item revision and invalidates only authority earned under the changed contract; harmless run history remains.

### 3.3 Executable ID grammar and inventory shorthand

Every registry shares one global lowercase-ASCII ID set under `cv1`. IDs never contain Thai, English display text or pronunciation spelling.

```text
cv1.lesson.w01.l01.food-order
cv1.fn.food.order-item
cv1.cue-family.food.what-would-you-like
cv1.cue-variant.food.what-would-you-like.v01
cv1.context.w01.l01.food-counter
cv1.frame.food.want-item
cv1.slot.food.item.gaprao-chicken
cv1.response.food.want-item.gaprao-chicken
cv1.routine.social.thanks
cv1.scene.w01.l01.model
cv1.event.w01.l02.meal-finished
cv1.interaction.practice.w01.l01.01
cv1.interaction.assessment.w01.pool-a.l01.01
cv1.interaction.retention.w01.l01.d1.01
cv1.objective.retention.w01.l01.d1.a.01
cv1.form.lesson.w01.l01.a
cv1.form.consolidation.w01.a
cv1.form.gate.w01.a
cv1.form.gate.final.a
cv1.form.retention.w01.l01.d1.a
cv1.retention.w01.l01.d1
cv1.activity.w01.consolidation
cv1.gate.w01
cv1.gate.final
```

Components use `[a-z][a-z0-9]*(?:-[a-z0-9]+)*`; weeks are `w01…w08`, lessons `l01…l24`, ordinals `01…99`, and form suffixes `a`, `b`, `c…`.

The companion inventory's compact header `conv.w01.l01.food_order` maps exactly to `cv1.lesson.w01.l01.food-order`. Inside that lesson, shorthand `r.order_this` expands to `cv1.response.w01.l01.order-this`; the first interaction in the reserved `d7-a` form expands to `cv1.context.w01.l01.d7.a.01`, `cv1.interaction.retention.w01.l01.d7.a.01` and the form-owned objective `cv1.objective.retention.w01.l01.d7.a.01`. `gate` in inventory revision 1 means form A; the mandatory parallel table uses form B. This expansion is mechanical, injective and tested; a shorthand that cannot expand is invalid, not implementation discretion.

Each interaction record stores exact IDs for function, cue family/variant or event, context, frame, slots, response/accepted set, exactly two distractor responses and their misconception tags. With the one displayed accepted response, this produces the fixed three-button surface. The signature key is the validated structural tuple `contextId | cueVariantId-or-eventId | acceptedSetId`; none of those IDs may contain `|`. A response reused later keeps its original response ID. Context is mandatory whenever audio alone does not identify one appropriate function.

Every entity has `revision >= 1`. Authority is `(id, revision)`. A generated digest covers Thai, meaning, role, prerequisites, scoring, context, acceptable answers and distractors; a material digest change without a revision increment fails. Objective IDs belong to exactly one immutable form. Source interaction, objective, retention-assignment and form IDs are never interchangeable.

## 4. Course cadence and workload

The advertised eight weeks are an **eight-week pace**, not an expiry date or a 56-day lock. Each unit has five required course days and two recommended optional/catch-up days. The course therefore has 40 required main tasks placed across a nominal 56-day plan:

- 24 new lessons;
- eight unit consolidation rehearsals;
- seven cumulative unit gates at 80%;
- one final cumulative gate at 85%.

Only one new main task can earn progression credit per Bangkok calendar day. Replays and optional practice remain unlimited. `pace.anchor` is the Bangkok date of the first L01 credit. The plan view labels calendar offsets 0–55 from that anchor, but progression is an ordered task cursor rather than a weekday cursor: a missed required task remains next; completing it later advances exactly one position; optional/rest labels never create state authority or a hidden wait. A learner may use a nominal optional day for catch-up. Actual +1/+7/+30 dates always derive from actual completion/pass dates, not the nominal row.

| Course day | Required route | Target time |
|---|---|---:|
| 1 | Previous unit Lesson A +7 check when due; new Lesson A | 30–42 min |
| 2 | Lesson A +1; previous unit Lesson B +7 when due; new Lesson B | 32–45 min |
| 3 | Lesson B +1; previous unit Lesson C +7 when due; new Lesson C | 32–45 min |
| 4 | Lesson C +1; mixed reduced-support consolidation | 20–35 min |
| 5 | Cumulative unit gate; focused repair if needed | 20–40 min |
| 6 | Optional field rehearsal or reading companion | 0–30 min |
| 7 | Rest, catch-up or optional replay | 0–30 min |

The real scheduler uses completion dates, not weekday names. A missed day moves work forward without penalty.

### 4.1 Backlog governor and fairness

- Serve at most two due conversation checks in one day: first an unattempted due assignment, then a failed recheck if one is eligible; fill any unused slot from the other group.
- Within unattempted work sort by due date, then `d1`, `d7`, `d30`, then assignment ID. Within failed rechecks sort by least-recent attempt, original due date, stage and assignment ID. An assignment can be attempted at most once per Bangkok day.
- If more than two **never-attempted** checks or more than 16 never-attempted objective prompts are overdue, Today becomes a conversation consolidation day and does not offer new content. Repaired failed rechecks remain visible but do not inflate this new-work backlog or create permanent progression starvation.
- Once the capped due slice has been attempted and any immediate repair completed, a failed check remains due but does not block the rest of that day's route.
- Time is display-only. It cannot award progress, tokens or streak credit.
- Estimated authored duration includes speech playback, learner-controlled response time, feedback and one ordinary repair pass. A task that would push required work above 45 minutes must be shortened or deferred.

The classifications are executable, using injected Bangkok dates:

```js
neverAttempted = due <= today && attempts === 0;
failedRecheck = due <= today && attempts > 0 && !passedAt &&
  repairCompletedAt >= lastAttempt && lastAttempt < today;
```

An assignment is attempted at most once per Bangkok day. Selection is slot 1 oldest never-attempted else oldest failed; slot 2 oldest remaining failed else oldest remaining never-attempted. Backlog mode is exactly `neverAttempted.length > 2 || sum(neverAttempted.objectiveCount) > 16`. Each completed first attempt permanently leaves the never-attempted class, so a finite backlog decreases even when every check fails. Failed work cannot re-enter until repair is complete and a later Bangkok day, cannot trigger backlog mode and therefore cannot deadlock progression.

### 4.2 Authoritative task cursor

`CONVERSATION_MAIN_TASKS` is an immutable 40-entry array. For week `w` (1–8) and within-week task `k` (0–4):

```js
cursor = (w - 1) * 5 + k;
nominalOffset = (w - 1) * 7 + k;
```

Within every week the five entries are Lesson A, Lesson B, Lesson C, consolidation and gate. A completion can increment `pace.cursor` only when its task ID equals `CONVERSATION_MAIN_TASKS[cursor].id`; it increments at most once on the Bangkok date when the task finishes. `cursor === 40` means the ordered path is complete, while course completion still requires valid final-gate authority.

The immutable sequence is:

```text
00 cv1.lesson.w01.l01.food-order
01 cv1.lesson.w01.l02.food-options
02 cv1.lesson.w01.l03.repair
03 cv1.activity.w01.consolidation
04 cv1.gate.w01
05 cv1.lesson.w02.l04.taxi-destination
06 cv1.lesson.w02.l05.taxi-route
07 cv1.lesson.w02.l06.street-directions
08 cv1.activity.w02.consolidation
09 cv1.gate.w02
10 cv1.lesson.w03.l07.cafe
11 cv1.lesson.w03.l08.checkout
12 cv1.lesson.w03.l09.market
13 cv1.activity.w03.consolidation
14 cv1.gate.w03
15 cv1.lesson.w04.l10.introduction
16 cv1.lesson.w04.l11.limited-thai
17 cv1.lesson.w04.l12.lunch-plan
18 cv1.activity.w04.consolidation
19 cv1.gate.w04
20 cv1.lesson.w05.l13.reception
21 cv1.lesson.w05.l14.delivery
22 cv1.lesson.w05.l15.maintenance
23 cv1.activity.w05.consolidation
24 cv1.gate.w05
25 cv1.lesson.w06.l16.clothing
26 cv1.lesson.w06.l17.delivery-correction
27 cv1.lesson.w06.l18.repair-escalation
28 cv1.activity.w06.consolidation
29 cv1.gate.w06
30 cv1.lesson.w07.l19.pharmacy-facts
31 cv1.lesson.w07.l20.label-language
32 cv1.lesson.w07.l21.urgent-help
33 cv1.activity.w07.consolidation
34 cv1.gate.w07
35 cv1.lesson.w08.l22.hours-services
36 cv1.lesson.w08.l23.service-problem
37 cv1.lesson.w08.l24.bangkok-day
38 cv1.activity.w08.consolidation
39 cv1.gate.final
```

Before L01, `pace.anchor` is null. First L01 credit sets it to L01's `firstCompleted`; local repair restores that equality and import mismatch rejects. `pace.cursor` is always the first unfinished authoritative task; repair may move it backward but cannot infer completion by moving it forward. Nominal offsets drive display only and never gate work.

### 4.3 Authored workload and deterministic packing

Every required definition has integer `coreMinutes`, `ordinaryRepairMinutes` and `totalMinutes`. Totals below already include one ordinary repair allowance.

The mapping is exact: every lesson reserves 4 repair minutes; each consolidation reserves 5; each Week 1–7 gate reserves 8; and the final gate reserves 8. Therefore `coreMinutes = totalMinutes - ordinaryRepairMinutes` for every main-task cell. Delayed checks use `+1 = 4 + 2`, `+7 = 6 + 2`, unit `+30 = 10 + 4` and final `+30 = 15 + 5`. These figures are authored packing estimates, not timers or learning evidence.

| Week | Lesson A | Lesson B | Lesson C | Consolidation | Gate |
|---|---:|---:|---:|---:|---:|
| 1 | 27 | 29 | 30 | 28 | 30 |
| 2 | 27 | 29 | 29 | 28 | 30 |
| 3 | 29 | 29 | 29 | 28 | 30 |
| 4 | 29 | 29 | 29 | 28 | 30 |
| 5 | 29 | 29 | 29 | 28 | 30 |
| 6 | 29 | 29 | 30 | 28 | 30 |
| 7 | 30 | 28 | 30 | 29 | 30 |
| 8 | 29 | 29 | 30 | 30 | 38 final |

| Delayed task | Objective items | Additional spoken prompts | Total including repair |
|---|---:|---:|---:|
| +1 | 6 | 1 | 6 min |
| +7 | 8 | 2 | 8 min |
| Unit +30 | 12 | 4 | 14 min |
| Final +30 | 20 | 8 | 20 min |

Outside backlog mode the packer reserves the next main task, then walks the fair due queue without reordering it. A due item is added only when the total remains at most 45 minutes. If the oldest due item plus main exceeds 45, the due item wins and main defers. If due item 1 fits but due item 2 does not, item 2 defers; a newer shorter item cannot replace it. Backlog mode reserves no main. Optional work is never packed as required. Actual active seconds never changes credit. The deterministic 56-day simulation fails if any returned required route exceeds 45 minutes.

## 5. Fixed lesson contract

Every new lesson follows this order:

Before L01's first Thai line, a one-time skippable pronunciation-spelling key explains `bp`, `dt`, `ph`, `th`, `kh`, `ng`, `ʉ`, doubled vowels and the five pitch accents: unmarked mid, grave low, circumflex falling, acute high and caron rising. It states that this is an English aid rather than Thai spelling or pronunciation scoring, remains reopenable in every lesson and is never tested. A normalized Thai payload has one canonical pronunciation spelling across the course; the content validator fails if identical Thai is assigned two spellings.

1. **English situation:** where the learner is, what the other person wants and today's practical outcome.
2. **Role map:** label active replies, recognition cues and routines before testing.
3. **Due warm-up:** up to six previously learned prompts, never new content.
4. **Meaning-first pairs:** English functional meaning, then Thai, pronunciation spelling, meaningful chunks and device audio for each cue/reply pair.
5. **Controlled pair playback:** partner cue plays; the learner chooses when to hear the model reply. The passive-scene 900 ms gap is never used as learner production time.
6. **Complete model scene:** separately generated turns, 900 ms passive inter-speaker gap, sticky now-playing state, stop/restart and collapsed transcript.
7. **Guided discrimination:** Thai cue → visible English intent, then Thai cue → supported appropriate response.
8. **Objective first pass:** Thai audio first. English, transliteration and answer text remain hidden until the answer. Audio reply choices are labeled only Option A/B/C before selection.
9. **Compulsory repair:** explain the cue, replay the exact pair, keep immediate-retry order stable and reinsert unresolved misses until cleared once.
10. **Controlled variation:** exactly one taught substitution or recombination using permitted slots.
11. **Supported role-play:** every active target in shuffled order, answer aloud before revealing the model.
12. **Reduced-support role-play:** Thai audio first, no meaning or response before the attempt; help may be opened and its use recorded.
13. **Optional recording:** at most one useful phrase, local and temporary; denying microphone permission never blocks completion.
14. **Private support rating:** `full-support`, `some-support` or `minimal-support`; never a mastery label.

Lesson completion means required interaction occurred, every objective item received a first attempt and all misses were eventually cleared. It has no percentage gate. Objective first-pass evidence, interaction completion and unscored speaking-practice evidence remain separate.

### 5.1 A0 burden limits

- At most three active targets in a normal lesson.
- At most two genuinely new active frame families.
- At most four recognition cue patterns.
- At most four new lexical slot values; at most two require active retrieval.
- At most one productive transformation rule.
- Active responses contain at most three meaningful chunks before the polite ending.
- Model scenes contain 8–14 turns.
- Every active target receives at least three answer-before-reveal encounters in its teaching lesson.
- A routine does not count as a new active frame unless explicitly promoted.

## 6. Objective evidence and gates

### 6.1 Lesson objective block

Each lesson has six objective items drawn from three exact interaction records:

- three Thai audio cue → English intent items;
- three appropriate-response items. A response item includes Thai audio plus its predeclared context card when real-world context is needed to make the target function unique.

First-attempt correctness is immutable. Repair completion cannot rewrite it. English-visible teaching choices never count as objective evidence.

### 6.1.1 Context and goal cards

Natural Thai cues are often generic. The same `มีอะไรให้ช่วยไหมครับ` can precede a location request, a keycard problem or an emergency. The engine must not pretend that audio alone determines one reply.

Every objective interaction therefore declares a stable `contextCardId` containing only:

- setting and partner role;
- the learner's current authored goal, explicitly labelled as real profile, configured preference or fictional role data;
- state needed for pragmatics, such as `finished`, `tooFast`, `missedOnce`, `ordinaryRepairFailed` or `bargainAllowed`.

The context card is visible before playback but may not translate, paraphrase or quote the Thai cue. Items without a context card must be uniquely gradable from the audio and taught situation alone. Items with a card are reported as `contextual response selection`, not pure audio comprehension. Learner-led `event:` items use the same contract with no fabricated audio cue and are never counted as cue-comprehension evidence.

The normalized assessment signature is `contextCardId + cueVariantId/eventId + acceptedResponseSetId`. Reusing the same Thai cue with different correct functions is legal only under different context IDs and only when the context makes all but one choice functionally wrong. L03 repair-strategy prompts deliberately expose `meaningUnknown`, `tooFast` or `missedOnce`; they test strategy choice, while separate audio items test the underlying food cue's intent.

### 6.2 Delayed checks

- `+1`: exactly three interaction records expanded into six objective items, pass at 5/6; includes one additional unscored answer-before-reveal speaking prompt.
- `+7`: exactly three lesson interaction records plus one declared cross-scene interaction, expanded into eight objective items, pass at 7/8; includes an alternate cue, a changed slot and two additional unscored spoken prompts.
- `+30`: unit-stratified 12-item check, pass at 85%; scheduled from the unit gate pass.
- Final course `+30`: 20 objective items, pass at 85%, scheduled from final completion.

The dates are exact Bangkok-calendar additions: lesson completion creates `d1 = completionDay + 1` and `d7 = completionDay + 7`; a Week 1–7 gate pass creates its unit `d30 = gates[gateId].passedAt + 30`; final-gate completion creates final `d30 = gates["cv1.gate.final"].passedAt + 30`. A gate's `passedAt` is its immutable first-pass date. Replaying or re-passing never moves an existing due date. Local repair recomputes only from those authoritative anchors; imports reject a mismatch.

An ordinary partner-led interaction expands to cue-intent plus contextual response selection. A learner-led event expands to event→request selection plus audio intent of the partner's actual reply; an invented generic partner prompt is forbidden. Spoken prompts are never part of the objective denominator.

A failed delayed check preserves its first score, keeps the check due and offers a separate practice-bank repair. Failure never removes a completed lesson, gate or course completion.

### 6.3 Unit gates

Weeks 1–7 use 12 items and require at least 10 correct on the cold first pass:

- four audio cue → intent;
- four audio cue → appropriate response;
- four sealed recombinations;
- at least two items from each current-unit lesson;
- from Week 2, at least three cumulative earlier-unit items;
- no more than one routine item.

The Week 8 final gate uses 20 objective items and requires at least 17 correct. It samples every unit and contains at least eight sealed recombinations. An eight-prompt answer-before-reveal role-play is compulsory participation but contributes no scored percentage. Gate reports separate pure audio cue-intent, contextual response-selection, event initiation and recombination counts; they cannot be collapsed into a claim that all 20 were audio-comprehension items.

On failure, the next unit stays locked, prior completion remains, first-pass evidence remains immutable, targeted repair is required and the retake uses unused parallel variants.

### 6.3.1 Integer pass and participation minima

| Surface | Objective pass | Additional spoken participation |
|---|---:|---:|
| Lesson | no percentage; all 6 attempted and all practice misses cleared | one reduced-support prompt per active target |
| Consolidation | no percentage; all 8 attempted and practice misses cleared | 6/6 |
| +1 | 5/6 | 1/1 |
| +7 | 7/8 | 2/2 |
| Unit +30 | 11/12 | 4/4 |
| Week 1–7 gate | 10/12 | 6/6 |
| Final gate | 17/20 | 8/8 |
| Final +30 | 17/20 | 8/8 |

Speaking prompts are additional, unscored participation records. They never enter `itemIds`, the percentage denominator or a pronunciation assessment.

### 6.4 Distractor contract

Distractors are drawn from taught, plausible confusions:

- wrong communicative function;
- wrong polarity;
- wrong quantity, place, time, item or payment slot;
- a related response to a different taught cue.

Every response-selection surface has exactly three buttons—one displayed canonical member of the accepted set and exactly two distractors—in stable-shuffled Option A/B/C order. A repair phrase is never scored as wrong when it would be a valid real-world response to the cue. No option set may contain more than one functionally acceptable answer. The validator stores the misconception rationale for each distractor.

### 6.5 Gate support behavior

Cold objective items expose no meaning, transliteration, Thai answer text, chunks or support action before the immutable answer. Feedback appears only after selection, and support cannot convert a first-pass miss into a correct answer.

Spoken gate prompts are additional unscored participation. `Open support` may reveal context, intent and separately taught chunks, but never the joined model reply. The learner first chooses `I answered` or `I answered with support`; only then is that prompt added to `spokenBeforeRevealIds` and its model enabled. If the joined model leaks early, that prompt is invalid and a different parallel spoken prompt must replace it. Support use is reported as a count, never a speaking score, and cannot lower the objective percentage or prevent a pass. If the threshold is met before spoken participation is finished, resume preserves the cold result and returns only to the remaining spoken prompts.

## 7. Transfer and recurrence architecture

Transfer means an unseen **combination** of known atoms, never arbitrary unseen Thai.

Three disjoint record corpora are required:

- `CONVERSATION_PRACTICE_VARIANTS`: teaching variations, repair and ordinary maintenance;
- `CONVERSATION_ASSESSMENT_BANK`: sealed unit and final gate combinations;
- `CONVERSATION_RETENTION_BANK`: fixed +1, +7 and +30 assignments.

Each transfer item declares:

```js
{
  id,
  assignment,
  kind,
  cueVariantId,
  responseFrameId,
  slotIds,
  prerequisiteCueIds,
  prerequisiteFrameIds,
  prerequisiteSlotIds,
  acceptedResponseIds,
  distractorResponseIds,
  misconceptionTags
}
```

Record IDs and form membership are always disjoint. Surface-signature novelty is stage-specific:

- teaching and ordinary practice may repeat each other deliberately;
- `+1` is familiar retention and may repeat one exact taught cue→reply tuple when it declares `rehearsalOf`; it is never reported as transfer;
- `+7` must change the cue, slot or interaction direction and cannot repeat a complete taught/practice/+1 signature;
- gate, gate-retake and `+30` signatures are sealed, pairwise disjoint and absent from every earlier transcript, practice form, distractor and check;
- a later scene may reuse a gate signature only after that gate has been attempted, and it then counts as recurrence rather than fresh evidence.

The generated audit reports familiar-retention reuse separately from signature leakage. An undeclared duplicate fails.

Every active frame must receive:

- three introductory-lesson retrievals;
- one +1 retrieval;
- one +7 alternate-cue or changed-slot retrieval;
- at least two later answer-before-reveal scene uses; at least one changes domain when the function is portable, while a domain-bound function changes setting, interlocutor or goal instead;
- eligibility for unit +30 and final maintenance.

Every recognition cue family must receive three in-lesson hearings, +1 cue-intent retrieval, +7 alternate-variant retrieval and one later cross-scene hearing. Every routine must recur in at least six later scenes without inflating active-frame counts.

This portability rule prevents contrived transfer: a café sweetness reply, for example, must recur in a materially different café/food setting rather than being forced into clothing. Week 7 safety language has the stronger restriction. Fictional symptom facts, fictional label confirmations and urgent-call language recur only in explicitly labelled health/emergency rehearsals and cold checks; they are never pushed into a non-health scene merely to fill a matrix cell. Their later uses must still be answer-before-reveal retrievals. General frames already learned outside health—location, uncertainty, confirmation, `ช่วย…ให้หน่อยครับ` and repair—retain ordinary cross-domain recurrence.

### 7.1 Deterministic tuple assignment

Each productive family declares ordered taught cue variants `c0…c3` and ordered slots `s0…s3`. The full pairings are reserved as follows:

| Surface | Reserved pairing |
|---|---|
| Model transcript | `c0 + s0` |
| Practice substitution/repair | `c0 + s1` |
| +1 retention | `c0 + s0` with explicit `rehearsalOf`, or `c1 + s0` |
| +7 retention | `c1 + s2` |
| Gate cold form | `c2 + s1` |
| Gate parallel retake | `c2 + s2` |
| Unit/final +30 | `c2 + s3` |
| Maintenance practice | `c3 + weakest eligible slot` |

All cue and slot atoms are taught before use. Except for an explicitly declared `+1` familiar-retention tuple, no reserved `+7`, gate, retake or `+30` pairing may appear early in another bank, transcript, help panel or distractor. Families without a lexical slot use enumerated context variants under the same allocation rule.

## 8. Eight-week curriculum

The detailed line inventory follows the same schema for every lesson:

- `C`: recognition cue;
- `A`: active learner move;
- `R`: routine;
- slashes show meaningful segment boundaries, not Thai orthographic spacing;
- all complete Thai lines have matching `ttsText`, speech locale `lang:"th-TH"`, transliteration and functional English meaning; their visible Thai elements use the valid HTML language tag `lang="th"`;
- partner-led and learner-led moves are both represented.

The exact 56-day pace, active cue/reply inventory, ordered model scenes, substitutions, `+1`/`+7`/gate/`+30` variants, weekly consolidation prompts and recurrence matrix are frozen in the binding companion [conversation course content inventory](conversation_course_content_inventory.md). That appendix is part of this specification, not an implementation-time suggestion. A release cannot change one without incrementing both specification revisions and rerunning the full content audit.

| Week | Functional unit | Lessons | Required consolidation and gate outcome |
|---|---|---|---|
| 1 | Obtain food and survive misunderstanding | L01 food basics; L02 dine-in/drink/finishing; L03 repair | Complete a food interaction, interrupt a failed cue and return to the original answer |
| 2 | Get around Bangkok | L04 taxi destination/meter; L05 route/stop; L06 BTS/street directions | Give and request location/direction information without memorising one transcript |
| 3 | Buy ordinary things | L07 café; L08 checkout; L09 market price/quantity | Keep fixed-price payment separate from explicitly invited market bargaining |
| 4 | Say who you are and make a plan | L10 personal introduction; L11 limited Thai; L12 lunch time/place | Exchange bounded personal facts and negotiate one meeting change |
| 5 | Handle condo and delivery logistics | L13 reception/keycard; L14 delivery; L15 maintenance | Report, locate, schedule and grant scenario-specific access using fictional data |
| 6 | Correct problems and escalate repair | L16 clothing options; L17 wrong/missing delivery; L18 channel switch | Correct an item/detail and escalate only after Week 1 repair has failed |
| 7 | Communicate health facts and summon help | L19 symptoms/allergy fact; L20 fictional label language; L21 urgent help | Communicate facts and location without diagnosis, treatment or safety certification |
| 8 | Finish service functions and integrate | L22 hours/services; L23 service problem; L24 three-part Bangkok day | L22–L23 add the final bounded functions; L24 integrates earlier frames across explicit scene breaks with zero new language |

The old food pilot is therefore not copied whole into L01. L01 has two active replies; L02 owns dine-in, water and the learner-led bill request; L03 seeds the repair toolkit. L24 is three short mini-scenes separated by learner-controlled transition cards, not one unexplained conversation.

### 8.1 Binding front door, onboarding and surface migration

Conversation-first is an information-architecture rule, not merely a sentence above the old reading app. The shipped surface order is:

1. conversation identity and today's due checks;
2. the next conversation main task;
3. optional conversation practice;
4. the 3–5 minute script-noticing companion;
5. the complete Phase 1 reading course inside a separate collapsed control.

No persistent masthead, first-run step, primary Today card, Progress heading or About lead may describe reading, script mastery or Phase 1 as the app's main goal. Thai script remains visible inside conversation teaching, but reading progress remains irrelevant to conversation authority.

The existing `อ่าน` / `ÀAN` wordmark remains only as the product's legacy proper name; it is not translated or presented as the learner's main goal. The install name becomes **ÀAN — Bangkok Thai**, while the short name may remain `อ่าน`. The old `อ่าน — Learn Thai` install name and any “อ่าน means to read … Phase 1 goal” explanation are permitted only inside the explicitly opened reading companion.

The fresh pre-L01 Home copy is fixed:

```text
masthead:     Bangkok Thai for daily life
version pill: Bangkok Conversation Foundation · <release version>
kicker:       TODAY · CONVERSATION
heading:      Use Thai in Bangkok
intro:        Start with the situation in English, learn each short cue and reply, then hear and practise the exchange. No Thai knowledge or reading is assumed.
card kicker:  Start here · Lesson 1
card title:   Order food: choose an item and spice level
card detail:  About 27 min · meaning first, then hear, respond and speak
status:       No Thai knowledge or reading is assumed.
```

After L01, the card title, duration and status come only from the immutable next main-task or due-check record. It must not remain a hard-coded food-pilot card. A completed task can be replayed from its lesson history, but replay never displaces the current route.

Fresh-user onboarding has exactly three semantic steps. Layout may adapt, but the following titles, claims and order are binding:

1. **Speak useful Thai first.** “This course is for daily life in Bangkok. Your usual new lesson takes about 27–30 minutes; due checks can bring a busy day up to 45 minutes. Reading is optional and never unlocks speaking.”
2. **Understand before the conversation.** “First see the situation and purpose in English. Then learn each partner cue and useful reply separately. Only after that do you hear the complete exchange, with visible spacing and controls. Nothing is tested cold.”
3. **Use the device voice; keep reading optional.** “Your device generates every Thai line. You answer aloud and compare, but the app does not score pronunciation. Thai script and pronunciation spelling remain available; a short script-noticing activity and the complete reading course are optional.”

The controls are `Skip`, `Back`, `Next` and, on the final step, `Start Lesson 1`. Finishing launches `cv1.lesson.w01.l01.food-order`; it must not launch the legacy pilot or a passive full conversation. The optional pronunciation-spelling key from §5 appears before L01's first Thai, not as a fourth onboarding gate.

Progress keeps the title **Progress & settings**, changes its lead to “Track conversation lessons, delayed checks and optional reading progress,” then leads with **Bangkok Conversation Foundation** and displays completed lessons out of 24, passed gates out of eight, due delayed checks and the next main task. The existing Phase 1 dashboard, letter wall, script evidence and reading mileage remain intact inside a collapsed **Optional reading progress** section. Their state and internal behavior do not change.

The About lead and first four claims are fixed:

```text
Thai for daily life in Bangkok
The primary course is an eight-unit, 24-lesson conversation foundation.
Lessons teach the situation and meaning before device-generated Thai cue/reply pairs and a complete exchange.
Speaking practice is required, but recording is optional and pronunciation is not assessed.
Reading develops gradually through optional script noticing; the complete Phase 1 reading course remains available and never gates conversation.
```

Implementation touchpoints and disposition are closed:

| Existing source/surface | Required migration | Preserve |
|---|---|---|
| `.conversation-front-door`, `conversation-pilot-card`, `renderConversationPilotCard()` | Replace the fixed pilot identity/status with the schema-2 due/main route; rename semantic IDs if useful. | Existing accessible card styling and mobile layout. |
| `ONBOARDING_STEPS`, `onboardingStepHtml()`, `showOnboarding()` | Install the three steps above; final action launches canonical L01. | Focus trap, skip/back behavior, voice test and reset eligibility. |
| `FOOD_ORDER_PILOT` and pilot renderer | Split useful content into L01/L02 registry records; keep schema-1 data readable only by migration. | Pair layout, guarded playback, wrong-answer repair, temporary recording and role-play UI primitives. |
| `reading-companion-toggle` / `reading-companion-panel` | Place after optional conversation practice and keep collapsed by default, including after reload. | Entire Phase 1 route and state unchanged. |
| Progress `phase1-dashboard-card`, letter wall and reading evidence | Move under **Optional reading progress**; add conversation dashboard first. | All Phase 1 computation and stored authority. |
| `showAboutApp()`, `APP_VERSION_LABEL`, visible version pills and `manifest.json` | Use the copy/identity above and the current release version. | Backup guidance and device-voice disclosure. |
| `validateV821ConversationFrontDoorContracts`, `validateV822BeginnerConversationContracts`, `tools/precommit-check.js`, `tools/conversation-smoke.js` | Replace pilot-specific assertions with schema-2 route, beginner-flow and collapsed-reading assertions. | Existing accessibility, playback, isolation and failure-path coverage. |
| `sw.js` | Advance the cache name in the first release that changes the shell/manifest. | Offline shell asset policy; no runtime audio/network dependency. |

Acceptance fails if the fresh or returning Home surface exposes Phase 1 tasks before the current conversation route, if onboarding can play an unexplained full exchange, if opening the reading companion changes conversation state, or if a visible reading-first phrase such as “learn to read,” “start reading,” “script mastery” or “Phase 1 goal” appears outside the explicitly opened reading companion.

## 9. Weekly consolidation and optional activities

Every unit's fourth required day is a 20–35 minute integrated rehearsal:

1. four cue-intent items;
2. four audio-response items;
3. six answer-before-reveal prompts in shuffled order;
4. two controlled cross-scene substitutions;
5. one weakness-targeted repair block.

Optional activities never gate progression or create Phase 1 state:

- **Cue Catch:** hear a learned cue and choose its intent.
- **Reply Ready:** hear a cue, answer aloud, then reveal the model.
- **Swap Lab:** build one taught frame from permitted slots.
- **Repair Lab:** decide whether to repeat, slow, confirm or change channel.
- **Mixed Bangkok:** deterministic cross-scene role-play from completed units.
- **Field rehearsal:** a private suggestion to try one taught interaction outside; no live-human claim, checkbox, token or progress credit.
- **One-phrase recorder:** optional private comparison with the device model.

### 9.1 Gradual reading companion

Thai script stays visible in teaching, paired with pronunciation spelling and English. Objective listening hides all text until feedback so reading is neither required nor an answer leak.

Each week offers an optional 3–5 minute `Notice the script` activity:

| Week | Optional noticing focus |
|---|---|
| 1 | recurring `ครับ`, `ไม่`, `เอา` chunks |
| 2 | place and direction chunks |
| 3 | numbers, quantities and payment chunks |
| 4 | `ผม`, name, origin and work chunks |
| 5 | `อยู่`, room and location chunks |
| 6 | negation, correction and `ช่วย` chunks |
| 7 | symptom and medicine chunks |
| 8 | recurring phrases on familiar Bangkok signs |

The pronunciation display can be hidden by learner choice but never fades automatically. The complete Phase 1 reading course remains collapsed, optional and progression-independent.

## 10. Today routing

The conversation route is independent of Phase 1:

1. Thai voice readiness when required;
2. up to two due conversation checks, oldest first;
3. the next unlocked main task;
4. one optional weakness-targeted activity;
5. optional reading companion.

Due ordering and interleaving use §4.1's two-queue algorithm; `d1`, `d7`, `d30` and ID are tie-breakers within equal dates. A gate is the only ordinary unit-to-unit blocker. Backlog consolidation and invalid conversation state may temporarily block new material. Reading progress, tokens, streaks, Phase 1 review and optional field use never do.

After course completion, Today serves due +30 checks first, then one deterministic mixed maintenance rehearsal. Failure never revokes completion.

Dates use an injected `bangkokDayStr(now)` based on `Asia/Bangkok`. Conversation implementation must not reuse the current UTC-based `todayStr()` and must not alter Phase 1's existing date behavior during this project.

## 11. Conversation state schema 2

All new authority remains inside `state.conversation`:

```js
conversation: {
  schema: 2,
  courseId: 'bangkok-conversation-foundation-v1',
  curriculumRevision: 1,
  pace: {
    anchor: null,
    cursor: 0,
    lastMainCreditDay: null
  },
  migrations: {
    v1ToV2: { date: 'YYYY-MM-DD', legacySceneCount: 0 }
  },
  legacyScenes: {},
  lessons: {
    [lessonId]: {
      runs: 0,
      objectiveAttempts: 0,
      firstPct: null,
      lastPct: null,
      bestPct: null,
      firstCompleted: null,
      lastCompleted: null,
      completedRevision: null,
      selfRating: null,
      lastRun: null
    }
  },
  activities: {
    consolidations: {
      [consolidationId]: {
        runs: 0,
        objectiveAttempts: 0,
        firstPct: null,
        lastPct: null,
        bestPct: null,
        firstCompleted: null,
        lastCompleted: null,
        completedRevision: null,
        lastRun: null
      }
    },
    optional: {
      [activityId]: { runs: 0, lastCompleted: null }
    }
  },
  gates: {
    [gateId]: {
      attempts: 0,
      revision: 1,
      firstPct: null,
      lastPct: null,
      bestPct: null,
      lastAttempt: null,
      passedAt: null,
      repairCompletedAt: null,
      formCycle: 0,
      usedFormIds: [],
      lastFormId: null,
      lastRun: null,
      lastRepairRun: null
    }
  },
  retention: {
    [assignmentId]: {
      due: 'YYYY-MM-DD',
      attempts: 0,
      revision: 1,
      firstPct: null,
      lastPct: null,
      bestPct: null,
      lastAttempt: null,
      passedAt: null,
      repairCompletedAt: null,
      formCycle: 0,
      usedFormIds: [],
      lastFormId: null,
      lastRun: null,
      lastRepairRun: null
    }
  },
  weakness: { items: {}, confusions: {} },
  days: {
    ['YYYY-MM-DD']: { secs: 0, main: null, reviews: [], repairs: [] }
  },
  resume: null,
  completion: null,
  recovery: null,
  extensions: {}
}
```

No audio blob, transcript, microphone result or pronunciation result is stored.

### 11.1 Exact lesson-run evidence

```js
lastRun: {
  completed: 'YYYY-MM-DD',
  revision: 1,
  pairIdsPlayed: [],
  sceneIdsPlayed: [],
  responsePromptIds: [],
  responseFirstCorrectIds: [],
  responseRepairIds: [],
  spokenBeforeRevealIds: [],
  modelRevealIds: [],
  supportOpenedIds: [],
  substitutionIds: [],
  recordStepCompleted: true,
  recordingAttempted: false,
  objective: {
    itemIds: [],
    firstCorrectIds: [],
    clearedIds: []
  }
}
```

Required ID sets come from the static lesson revision. Arrays reject unknown IDs and duplicates. `responseFirstCorrectIds` and `responseRepairIds` are disjoint and their union equals every response prompt. Objective first-correct IDs are a subset of item IDs; cleared IDs equal the complete item set before completion.

Required consolidation records use a separate progression-bearing shape; optional activities cannot satisfy it:

```js
lastRun: {
  completed: 'YYYY-MM-DD',
  revision: 1,
  formId: 'cv1.form.consolidation.w01.a',
  itemIds: [],
  firstCorrectIds: [],
  clearedIds: [],
  spokenPromptIds: [],
  spokenBeforeRevealIds: [],
  modelRevealIds: [],
  supportOpenedIds: [],
  transferIds: [],
  transferCompletedIds: [],
  weaknessRepairItemIds: [],
  weaknessRepairClearedIds: []
}
```

The form supplies exactly eight objective items, six spoken prompts and two transfers. Completion requires every objective and weakness-repair item cleared, all six spoken prompts attempted before reveal and both transfers completed. Its first-pass percentage remains immutable but has no pass threshold. `activities.optional` never grants prerequisites, cursor credit, Today credit, retention, gate authority, reward authority or Phase 1 state. Field rehearsal and script noticing write no progress record.

Gate and retention assessment records are one-shot; their sealed objective IDs never become repair questions:

```js
lastRun: {
  completed: 'YYYY-MM-DD',
  revision: 1,
  formId: 'cv1.form.gate.w01.a',
  itemIds: [],
  answeredIds: [],
  firstCorrectIds: [],
  feedbackAcknowledgedIds: [],
  spokenPromptIds: [],
  spokenBeforeRevealIds: [],
  modelRevealIds: [],
  supportOpenedIds: [],
  objectiveCorrect: 0,
  objectiveTotal: 12,
  objectivePassed: false,
  spokenCompleted: 0,
  spokenRequired: 6,
  participationPassed: false
}
```

`itemIds` must equal the immutable served form, not merely have the expected count; `answeredIds === itemIds`; first-correct IDs are a subset; feedback-acknowledged IDs are exactly the misses; and all integer totals are derived rather than trusted. Model reveals equal the spoken-before-reveal set. Passing authority is written only when both the objective threshold and spoken-participation minimum hold. `attempts` increments when the complete cold objective pass ends even if spoken participation remains unfinished.

Failed assessment repair is recorded separately:

```js
lastRepairRun: {
  completed: 'YYYY-MM-DD',
  revision: 1,
  practiceFormId: 'cv1.form.repair.gate.w01.a',
  sourceMissedObjectiveIds: [],
  practiceItemIds: [],
  firstCorrectIds: [],
  clearedIds: []
}
```

`clearedIds` equals the practice item set. Assessment and retention bank IDs are forbidden in `practiceItemIds`. A retake is unavailable until this repair completes. Starting the first cold objective consumes that form. Each gate has at least three parallel forms and each retention assignment at least two. Unused forms are selected deterministically; after exhaustion the cycle increments, the used set clears and the immediately previous form remains excluded. Gate and retention retakes occur at most once per Bangkok day.

Once earned, `completion` is:

```js
{
  firstPassedAt: 'YYYY-MM-DD',
  lastPassedAt: 'YYYY-MM-DD',
  firstPct: 85,
  bestPct: 85,
  curriculumRevision: 1,
  finalGateId: 'cv1.gate.final',
  finalFormId: 'cv1.form.gate.final.a',
  objectiveCorrect: 17,
  objectiveTotal: 20,
  spokenCompleted: 8,
  spokenRequired: 8
}
```

### 11.2 Partial resume

```js
resume: null | {
  taskId: string,
  taskKind: 'lesson' | 'consolidation' | 'gate' | 'retention',
  taskRevision: integer,
  curriculumRevision: integer,
  formId: string | null,
  formCycle: integer | null,
  attemptOrdinal: integer,
  runSeed: string,
  startedDay: 'YYYY-MM-DD',
  savedDay: 'YYYY-MM-DD',
  stageId: string,
  stageIndex: integer,
  itemIndex: integer,
  evidence: {
    pairIdsPlayed: [],
    sceneIdsPlayed: [],
    responsePromptIds: [],
    responseFirstCorrectIds: [],
    responseRepairIds: [],
    itemIds: [],
    answeredIds: [],
    firstCorrectIds: [],
    clearedIds: [],
    spokenPromptIds: [],
    spokenBeforeRevealIds: [],
    modelRevealIds: [],
    supportOpenedIds: [],
    substitutionIds: [],
    transferIds: [],
    transferCompletedIds: [],
    recordStepCompleted: false,
    recordingAttempted: false
  }
}
```

Resume writes only after a complete atomic UI action, never while TTS or recording is active. Interrupted playback earns no playback ID and restarts at that prompt; in-progress audio is discarded. `runSeed` restores exact option order, and completed cold answers persist immediately so reload cannot reroll them. Draft arrays reject duplicates, unknown IDs and IDs outside the task/form revision. Completing after midnight credits the finishing Bangkok day.

A resume is cleared if its task is already authoritative, its retention passed, its revision or form is invalid or its task is no longer current. Discarding an exposed gate/retention resume consumes its form. Local malformed resume is quarantined and cleared; imported malformed resume rejects the import. Curriculum mismatch clears resume only. Resume never stores answer text, option text, transcripts, recordings or medical-profile values.

### 11.3 Weakness evidence

Only first attempts update conversation weakness:

```js
items[skillId] = {
  seen,
  firstMisses,
  reviewMisses,
  correctStreak,
  lastSeen,
  lastMiss
}
```

Confusions use a known `cueId>selectedResponseId` key. Retry misses never increment the profile. Targeting sorts by weighted miss rate, then lowest correct streak, latest miss and lexical skill ID. Unsafe object keys are rejected.

## 12. Migration, repair and import

### 12.1 Schema 1 → 2

Migration is idempotent and preserves every non-conversation root field byte-for-byte. Valid v8.2.0–v8.2.3 `scenes[id]` records map to harmless history only:

```js
legacyScenes[sceneId] = {
  sourceSchema: 1,
  runs: integer,
  firstCompleted: day | null,
  lastCompleted: day | null,
  legacySelfRating: 'need-support' | 'getting-there' | 'ready' | null,
  lastRun: null | {
    evidenceVersion: 1,
    completed: day,
    pairAdvances: integer,
    pairPlaybacks: integer,
    scenePlaybackCompleted: boolean,
    responseChoices: integer,
    responseFirstCorrect: integer,
    roleplayReveals: integer,
    swapRevealed: boolean,
    recordStepCompleted: boolean,
    recordingAttempted: boolean
  }
}
```

Known scalar fields retain their values; `selfRating` becomes `legacySelfRating`; a known `lastRun` gains `evidenceVersion: 1`; an absent run becomes null. Unknown local fields are quarantined, while unknown fields in an import reject it. A malformed local legacy run is quarantined and becomes null; a malformed imported run rejects the whole import. `runs: 0` with dates, rating or a run is locally cleared and quarantined, and is import-invalid.

Even a complete pilot record grants no L01, cursor, day, retention, gate or completion authority. A successful migration creates fresh empty `pace`, `lessons`, `activities.consolidations`, `gates`, `retention`, `days` and `completion`; stores the history under `legacyScenes`; and stamps the original migration day/count once. An absent conversation namespace simply receives fresh schema 2. Running migration twice produces identical conversation JSON, including the original stamp.

Required fixtures include: missing namespace; valid two-run complete pilot; aggregate-only pilot with `lastRun: null`; `runs: 0` inconsistency; malformed local run; malformed import; and double migration. The valid-pilot fixture must assert `pace === {anchor:null,cursor:0,lastMainCreditDay:null}` and zero new-course authority.

### 12.2 Local repair

- Missing namespace becomes fresh schema 2.
- Malformed leaf records lose authority while harmless aggregates may remain.
- Unknown curriculum IDs are quarantined and removed from progression authority.
- Downstream completion without prerequisites is repaired topologically.
- Due dates are recomputed from authoritative completion dates.
- Future completion dates are cleared.
- A future schema is never silently downgraded: preserve a recovery copy, reset only conversation and show an incompatible-version warning.

Corrupt raw authority never stays inside the live namespace. The live pointer is:

```js
recovery: null | {
  recoveryId: string,
  capturedAt: ISO_TIMESTAMP,
  reason: 'future-schema' | 'unknown-authority-id' |
    'invalid-authority-record' | 'invalid-resume' | 'unsafe-key',
  sourceSchema: integer | null,
  quarantinedCount: integer
}
```

The raw subtree or rejected leaves are stored separately at `thai_state_v1_conversation_recovery`:

```js
{
  app: 'aan-thai',
  key: 'thai_state_v1',
  kind: 'conversation-recovery',
  recoveryVersion: 1,
  recoveryId: string,
  capturedAt: ISO_TIMESTAMP,
  reason: string,
  sourceSchema: integer | null,
  conversation: rawConversationSubtreeOrRejectedLeaves
}
```

A future schema quarantines the entire conversation subtree; leaf failures quarantine their exact paths/values. Repair replaces only affected conversation authority and preserves all Phase 1 roots. Recovery never auto-merges; the UI offers Copy/Download and Dismiss. Invalid imports neither change live state nor overwrite recovery. A user-authorized full reset clears conversation, resume and recovery storage. Re-running repair after quarantine is idempotent and creates no second envelope.

### 12.3 Imports

- Missing conversation is accepted as legacy Phase 1 progress and receives fresh schema 2.
- Well-shaped schema 1 is accepted and migrated on a clone.
- Schema 2 must pass exact shape, known-ID, revision, evidence, date and prerequisite validation.
- Unknown schema, unsafe keys, future authority dates, unknown authoritative IDs or inconsistent progression reject the entire import.
- Import rejection leaves live state byte-for-byte unchanged.
- Unknown data is permitted only under `extensions`.

## 13. Audio, offline, privacy and accessibility

- Onboarding performs a Thai-voice capability check before starting required audio work.
- Missing voice presents setup guidance and retry; silent playback cannot earn completion.
- Every utterance has guarded `onstart`, `onend`, `onerror`, cancel and timeout handling. A missing `onend` recovers to a visible retry state rather than advancing.
- Full passive scenes use a 900 ms inter-turn gap. Learner practice uses an explicit learner-controlled `Hear the model` action.
- TTS payloads use Thai words rather than ambiguous digits and map to visible Thai, pronunciation spelling and functional English.
- Installed offline acceptance assumes the Thai system voice has already been downloaded; no runtime network audio exists.
- Microphone denial, unsupported recording or manual stop leaves recording optional and completion available.
- Health and emergency scenes use fixed fictional cards. Evidence IDs are value-neutral and never encode or retain personal symptoms, allergies, medicines, dosing choices, room credentials or emergency contact data.
- Thai elements use `lang="th"`; controls are at least 44 px; focus is visible and restored; dialogs contain focus; Escape/exit confirmation follows meaningful progress.
- Acceptance covers 320×568, 390×844, landscape, 200% zoom, safe areas, large text, reduced motion and keyboard-only navigation.
- Live-region updates are paused or made non-announcing during Thai TTS so VoiceOver and the device voice do not compete.

## 14. Deterministic validation and audit

Implementation adds separate validators:

1. `validateConversationCurriculumContracts`
2. `validateConversationContentContracts`
3. `validateConversationPrerequisiteContracts`
4. `validateConversationRunEvidenceContracts`
5. `validateConversationProgressionContracts`
6. `validateConversationRetentionContracts`
7. `validateConversationTransferContracts`
8. `validateConversationWeaknessContracts`
9. `validateConversationMigrationContracts`
10. `validateConversationImportContracts`
11. `validateConversationTodayContracts`
12. `validateConversationAudioPrivacyContracts`
13. `validateConversationAccessibilityContracts`
14. `validateConversationIsolationContracts`

The generated conversation audit must show, not merely assert:

- all 24 lessons and eight gates;
- active/recognition/routine counts;
- the prerequisite graph and zero leaks;
- every cue and frame recurrence assignment;
- transfer-bank signatures and zero cross-bank leakage;
- supply for cold and retake gate forms;
- workload estimates and zero days above 45 minutes;
- state/migration fixtures;
- validator totals and failures.

Automated smoke covers fresh, partial, complete, legacy, malformed and future-schema state; exact completion evidence; wrong-answer repair; stable shuffle; gates; +1/+7/+30; backlog; Bangkok date boundaries; resume; reset; imports; maintenance and Phase 1 snapshot equality.

Browser acceptance covers onboarding through Lesson 1, every activity type, audio-only objective checks, all wrong-answer paths, TTS unavailable/stalled/interrupted, recording allowed/denied/unsupported, reload/resume, offline launch, service-worker update, reading independence and all target viewports.

## 15. Release sequence

1. **Specification freeze:** this document, exact content inventory, recurrence matrix and bank assignments pass two independent reviews.
2. **v8.3.0 — front door, engine + Week 1:** the binding onboarding/Home/Progress/About migration in §8.1, schema 2, migration, Bangkok dates, reusable bidirectional engine, exact evidence, support fading, first three lessons, consolidation, gate and due scheduler.
3. **v8.4.0 — Week 1 learner rebuild:** short listen-build-speak lessons, sentence builders, role voices, explicit pauses and plain product copy, as specified in `v8_4_conversation_builder_implementation.md`.
4. **v8.4.1 — model-before-practice correction:** full phrase, ordered meaning chunks and successful model audio before every teaching builder.
5. **Future release — Weeks 2–3:** transport and daily transactions; first real +7 checks; sealed quantity and slot recombination.
6. **v8.6.0 — Weeks 4–5:** people/work and condo life; mid-course cumulative gate, missed-week recovery and first unit +30 serving.
7. **v8.7.0 — Weeks 6–7:** shopping/problem repair and health/help; earlier repair frames deepen under harder cues; medical-language safety boundary.
8. **v8.8.0 — Week 8 + maintenance:** integrated scenes, final 85% gate, final +30 route, completion dashboard and full 56-day deterministic simulation.

Every versioned release updates app identity, `AGENTS.md`, `CLAUDE.md`, `CHANGELOG.md`, generated audits and smoke documentation; passes the full precommit harness; and is committed. Push/deployment remains blocked until GitHub authentication has access to the repository.

The overall conversation course may be described as Phase-1-equivalent in engineering and pedagogical rigor only after v8.8.0 passes the final definition below.

## 16. Definition of done

The course is complete only when:

- all 24 lessons, eight consolidations, seven 80% gates and one 85% final gate exist;
- every item has exact Thai, pronunciation spelling, English, role, segmentation, TTS and stable IDs;
- every tested atom has a visible prerequisite;
- every active frame has introductory, +1, +7, cross-scene and +30 retrieval;
- all three transfer banks are fixed, disjoint and sufficiently supplied;
- objective first-attempt evidence survives repair and retakes;
- spoken practice is required but never scored as pronunciation;
- new content and delayed backlog stay within the 45-minute governor;
- schema 1 migration, schema 2 repair/import, resume and Bangkok dates pass;
- conversation operations preserve every Phase 1 namespace;
- fresh-user, mobile, offline, accessibility and TTS-failure browser acceptance passes;
- generated audits report zero failures;
- learner-facing claims remain bounded to the evidence actually collected.

## 17. Source basis and provenance policy

The functional topic selection aligns with published elementary Thai curricula that cover survival phrases, directions, food ordering and shopping, including [Mahidol University's elementary course outline](https://muce.mahidol.ac.th/courses/20/info). NIU's [Spoken Thai sequence](https://seasite.niu.edu/thai/spokenthai/Default.htm) covers getting around, buying things, meeting people, work, shopping, medical needs and home life, while its [Thai learning framework](https://seasite.niu.edu/Thai/LLF/Default.htm) documents interactive/communicative teaching, role-play and listening practice. [Lingopolo's closely related slow-speech phrase](https://lingopolo.org/thai/word/can-you-speak-slowly-please) contains the same core `พูด/ช้าๆ/ได้ไหม` structure plus optional `หน่อย`; this course uses the shorter bounded variant with `ครับ`. The headache and stomach-ache atoms are also cross-checked against [Langhub's pharmacy phrase list](https://langhub.com/en-th/beginner-thai/101-at-the-pharmacist). These sources inform scope and internal authoring; none is represented as native review or pronunciation certification.

Published sources support triangulation; they are not runtime dependencies. Every potentially colloquial or context-sensitive line receives an authoring note. When sources disagree, the course chooses the shortest conservative standard-Thai form, documents the choice and does not invent certainty. Device TTS and source triangulation never become a claim of native-speaker validation.
