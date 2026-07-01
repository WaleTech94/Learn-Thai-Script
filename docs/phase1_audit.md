# Phase 1 Audit

Generated: 2026-07-01T16:12:01.458Z
App version: v6.0.0
Lessons: 24

This is the generated review surface for Phase 1. The markdown gives a readable map; the adjacent `phase1_audit.json` contains the full extracted quiz prompts, options, lesson words, generated pools, prerequisite issue objects and workload estimates for scripted review.

## Validator Status
- PASS audio
- PASS vocabulary
- PASS coverage
- PASS prerequisites
- PASS reviewChoices
- PASS finalSounds
- PASS structuralClarity
- PASS balancedChoices
- PASS misconceptionChoices
- PASS v5Migration
- PASS v501FoundationRefresh
- PASS importRepair
- PASS v5Transfer
- PASS v51Polish
- PASS v52Bridge
- PASS v52FullBrief
- PASS recallAxis
- PASS delayedMastery
- PASS contrastCoverage
- PASS migrationTrust
- PASS utilityMission
- PASS noHumanAudio
- PASS ttsAssessmentSafety
- PASS phase1CompletionStandard
- PASS productionSafety
- PASS v521Hardening
- PASS v541AutoConfidence
- PASS v542StreamlinedCopy
- PASS v543CorrectDwell
- PASS v544AdaptiveCorrectDwell
- PASS v525RouteSimplification
- PASS v526ToneSignReview
- PASS v53ReviewGovernor
- PASS v531TtsSafety
- PASS v54Fluency
- PASS contentPedagogyHardening

## Prerequisite Audit
- Lesson prerequisite issues: 0
- Pool prerequisite issues: 0
- Role-contract issues: 0
- No unresolved prerequisite issues.

## Workload Audit

Lesson payload is the content added if that lesson is taken. Today governor route is the daily serving plan: review is capped by SRS, axis review cards are staged into the due deck, due 25-44 recommends review without blocking a lesson, due >= 45 creates a consolidation day, and Lessons 1-3 remain shorter foundation days.

v6.0.0 is a UI hierarchy/accessibility pass over the v5.4.6 curriculum and review model. v5.4.6 keeps the v5.4.4 learner-facing review behaviour and the v5.4.5 source-hygiene hardening while tightening Phase 1 pedagogy: Lesson 1 frames the tone route as preview, Unit C repeats one Tone route, rare-letter class rows get active recognition practice before the Letters boss, the phrasebook is optional opt-in vocabulary, and the final checkpoint samples late mechanisms such as silent leaders, three-piece vowels, public-sign chunking and gaaran. Browser Thai speechSynthesis remains device voice support for rough practice, not a reliable assessment source for tone, vowel length, aspiration or final-stop mastery. Fluency reads stay self-rated and non-blocking for ordinary lesson progress; return-after-gap recovery still takes priority. The final checkpoint checks observable script-reading behaviours without claiming free conversation, broad vocabulary or full speaking ability.

- Today review default max: 30 cards
- Manual Review catch-up cap: 40 cards
- Axis review staging: up to 6 ordinary axis cards become due per day after a 7-day first delay; existing floods are repaired into that staged queue.
- Consolidation trigger: due >= 45
- Lessons 1-3: 20-30 minute foundation days, with only the existing optional Lesson 2/3 stretch before Lesson 4.

| Day | Lesson payload | Available pool after lesson | Today governor route | Depth block |
| --- | --- | --- | --- | --- |
| 1 | glyph 5, final 0, quiz 10 | glyph 5, final 0, tone 1, twins 0, echo 4, stories 0, fluency 0, chunks 0, signs 0, font 0, mouth 0 | due 5 -> served 5 / cap 30; Lesson day | Progression drill |
| 2 | glyph 5, final 5, quiz 13 | glyph 10, final 5, tone 1, twins 0, echo 8, stories 0, fluency 0, chunks 0, signs 0, font 0, mouth 0 | due 15 -> served 15 / cap 30; Lesson day | Progression drill |
| 3 | glyph 4, final 2, quiz 10 | glyph 14, final 7, tone 1, twins 0, echo 12, stories 0, fluency 0, chunks 0, signs 0, font 0, mouth 0 | due 21 -> served 21 / cap 30; Lesson day | Progression drill |
| 4 | glyph 3, final 0, quiz 10 | glyph 17, final 7, tone 4, twins 2, echo 23, stories 1, fluency 0, chunks 0, signs 0, font 0, mouth 1 | due 24 -> served 24 / cap 30; Lesson day | Reading room or drill |
| 5 | glyph 5, final 4, quiz 13 | glyph 22, final 11, tone 4, twins 2, echo 27, stories 1, fluency 0, chunks 0, signs 0, font 0, mouth 1 | due 33 -> served 30 / cap 30; Lesson day | Reading room or drill |
| 6 | glyph 2, final 2, quiz 10 | glyph 24, final 13, tone 6, twins 3, echo 35, stories 2, fluency 1, chunks 0, signs 0, font 0, mouth 1 | due 37 -> served 30 / cap 30; Lesson day | Reading room or drill |
| 7 | glyph 4, final 3, quiz 12 | glyph 28, final 16, tone 6, twins 7, echo 47, stories 2, fluency 1, chunks 0, signs 0, font 0, mouth 1 | due 44 -> served 30 / cap 30; Lesson day | Reading room or drill |
| 8 | glyph 4, final 4, quiz 14 | glyph 32, final 20, tone 6, twins 7, echo 51, stories 2, fluency 1, chunks 0, signs 0, font 0, mouth 1 | due 52 -> served 30 / cap 30; Consolidation day | Reading room or drill |
| 9 | glyph 4, final 2, quiz 14 | glyph 36, final 22, tone 9, twins 8, echo 60, stories 3, fluency 1, chunks 0, signs 0, font 0, mouth 1 | due 58 -> served 30 / cap 30; Consolidation day | Reading room or drill |
| 10 | glyph 4, final 0, quiz 10 | glyph 40, final 22, tone 9, twins 8, echo 64, stories 3, fluency 2, chunks 0, signs 0, font 0, mouth 1 | due 62 -> served 30 / cap 30; Consolidation day | Reading room or drill |
| 11 | glyph 2, final 0, quiz 10 | glyph 42, final 22, tone 9, twins 8, echo 68, stories 3, fluency 2, chunks 0, signs 0, font 0, mouth 1 | due 64 -> served 30 / cap 30; Consolidation day | Reading room or drill |
| 12 | glyph 2, final 0, quiz 10 | glyph 44, final 22, tone 9, twins 8, echo 72, stories 3, fluency 2, chunks 0, signs 0, font 0, mouth 2 | due 66 -> served 30 / cap 30; Consolidation day | Reading room or drill |
| 13 | glyph 0, final 0, quiz 12 | glyph 44, final 22, tone 9, twins 8, echo 76, stories 4, fluency 3, chunks 0, signs 0, font 0, mouth 3 | due 66 -> served 30 / cap 30; Consolidation day | Reading room or drill |
| 14 | glyph 2, final 0, quiz 10 | glyph 46, final 22, tone 9, twins 8, echo 80, stories 4, fluency 3, chunks 0, signs 0, font 0, mouth 3 | due 68 -> served 30 / cap 30; Consolidation day | Reading room or drill |
| 15 | glyph 0, final 0, quiz 10 | glyph 46, final 22, tone 9, twins 8, echo 82, stories 4, fluency 3, chunks 0, signs 0, font 0, mouth 4 | due 68 -> served 30 / cap 30; Consolidation day | Reading room or drill |
| 16 | glyph 1, final 0, quiz 10 | glyph 47, final 22, tone 9, twins 8, echo 86, stories 4, fluency 3, chunks 0, signs 0, font 0, mouth 4 | due 69 -> served 30 / cap 30; Consolidation day | Reading room or drill |
| 17 | glyph 0, final 0, quiz 10 | glyph 47, final 22, tone 11, twins 10, echo 93, stories 5, fluency 4, chunks 0, signs 0, font 0, mouth 4 | due 69 -> served 30 / cap 30; Consolidation day | Reading room or drill |
| 18 | glyph 0, final 0, quiz 11 | glyph 47, final 22, tone 11, twins 10, echo 97, stories 6, fluency 4, chunks 0, signs 0, font 0, mouth 8 | due 69 -> served 30 / cap 30; Consolidation day | Reading room or drill |
| 19 | glyph 0, final 0, quiz 11 | glyph 47, final 22, tone 11, twins 10, echo 101, stories 6, fluency 4, chunks 0, signs 0, font 0, mouth 8 | due 69 -> served 30 / cap 30; Consolidation day | Reading room or drill |
| 20 | glyph 8, final 5, quiz 18 | glyph 55, final 27, tone 11, twins 10, echo 105, stories 6, fluency 4, chunks 3, signs 0, font 0, mouth 8 | due 82 -> served 30 / cap 30; Consolidation day | Reading room or drill |
| 21 | glyph 2, final 1, quiz 13 | glyph 57, final 28, tone 11, twins 10, echo 109, stories 6, fluency 4, chunks 3, signs 0, font 0, mouth 8 | due 85 -> served 30 / cap 30; Consolidation day | Reading room or drill |
| 22 | glyph 3, final 0, quiz 10 | glyph 60, final 28, tone 11, twins 11, echo 115, stories 6, fluency 4, chunks 4, signs 0, font 0, mouth 8 | due 88 -> served 30 / cap 30; Consolidation day | Reading room or drill |
| 23 | glyph 1, final 0, quiz 10 | glyph 61, final 28, tone 11, twins 11, echo 119, stories 6, fluency 5, chunks 8, signs 4, font 4, mouth 10 | due 89 -> served 30 / cap 30; Consolidation day | Reading room or drill |
| 24 | glyph 1, final 0, quiz 11 | glyph 62, final 28, tone 11, twins 11, echo 123, stories 10, fluency 6, chunks 11, signs 10, font 10, mouth 10 | due 90 -> served 30 / cap 30; Consolidation day | Reading room or drill |

## v5.4 Fluency Reads

- Lesson 6: First smooth read (cumulative) · 8 Thai items · check: Which word in the read has a Thai tone mark?
- Lesson 10: Price fragment (controlled real-world) · 6 Thai items · check: Which word has the final -t ending job?
- Lesson 13: Live/dead read (cumulative) · 9 Thai items · check: Which word is a dead syllable with a final -t sound?
- Lesson 17: Silent-leader read (cumulative) · 10 Thai items · check: Which word uses silent ห to lead a low-class consonant?
- Lesson 23: Public sign read (controlled real-world) · 4 Thai items · check: Which sign word is built from ทาง + ออก?
- Lesson 24: Bangkok end read (controlled real-world) · 8 Thai items · check: Which word has the เ◌ิ pattern?
- Final checkpoint: 15 questions; 85% quiz plus smooth or slow-but-correct final controlled read.

## Named Surface Audit

These rows reuse the app source gates. `Available` is the post-gate pool after each lesson; `Served` is the per-session cap where that surface has one; `Blocked/excluded` is the raw candidate count held back by prerequisite, role, form or option-building gates.

| Day | Surface | Available | Served / cap | Blocked/excluded | Prerequisites | Role contract |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Hear & Pick Thai | 4 items | 4 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 1 | Spell It | 2 items | 0 / 8 | 2 | PASS | PASS · core-only production/spelling surface · role-excluded 2 |
| 1 | Echo | 4 items | 4 / 8 | 29 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 1 | Sound Twins | 0 sets | 0 / 10 | 9 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 1 | Tone listening | 1 items | 0 / 8 | 8 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 1 | Mixed review | 15 questions | 10 / 10 | 1 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 1 |
| 1 | Lesson payoff | 1 items | 1 / 1 | 0 | PASS | N/A · decode first, then meaning/context/use reveal |
| 1 | Axis review | 23 cards | 23 / 40 | 0 | PASS | N/A · quota-balanced SRS axes for glyph/class/initial/final/live-dead/tone/listen/say/transfer |
| 1 | Delayed retention | 1 checks | 1 / 1 | 0 | PASS | N/A · +1 day retained and +7 day stabilised checks; one due lesson served per day |
| 1 | Reading/stories | 0 stories | 0 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 1 | Fluency reads | 0 reads | 0 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 1 | Phase 1 completion checkpoint | 0 checks | 0 / 1 | 0 | PASS | N/A · final observable reading behaviours; 85% quiz plus smooth/slow final read |
| 1 | Chunk this word | 0 items | 0 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 1 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 1 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 1 | Mouth Coach | 0 cards | 0 / 0 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 1 | Contrast Block | 0 blocks | 0 / 1 | 0 | PASS | N/A · listen-first contrast plus script-cued record/compare; no pronunciation score |
| 1 | Bangkok Mission | 0 missions | 0 / 1 | 0 | PASS | N/A · local self-check; no camera, upload, location or web access |
| 2 | Hear & Pick Thai | 8 items | 8 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 2 | Spell It | 5 items | 5 / 8 | 3 | PASS | PASS · core-only production/spelling surface · role-excluded 3 |
| 2 | Echo | 8 items | 8 / 8 | 29 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 2 | Sound Twins | 0 sets | 0 / 10 | 9 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 2 | Tone listening | 1 items | 0 / 8 | 8 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 2 | Mixed review | 38 questions | 10 / 10 | 1 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 1 |
| 2 | Lesson payoff | 2 items | 1 / 1 | 0 | PASS | N/A · decode first, then meaning/context/use reveal |
| 2 | Axis review | 54 cards | 40 / 40 | 0 | PASS | N/A · quota-balanced SRS axes for glyph/class/initial/final/live-dead/tone/listen/say/transfer |
| 2 | Delayed retention | 2 checks | 1 / 1 | 0 | PASS | N/A · +1 day retained and +7 day stabilised checks; one due lesson served per day |
| 2 | Reading/stories | 0 stories | 0 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 2 | Fluency reads | 0 reads | 0 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 2 | Phase 1 completion checkpoint | 0 checks | 0 / 1 | 0 | PASS | N/A · final observable reading behaviours; 85% quiz plus smooth/slow final read |
| 2 | Chunk this word | 0 items | 0 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 2 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 2 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 2 | Mouth Coach | 0 cards | 0 / 0 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 2 | Contrast Block | 0 blocks | 0 / 1 | 0 | PASS | N/A · listen-first contrast plus script-cued record/compare; no pronunciation score |
| 2 | Bangkok Mission | 0 missions | 0 / 1 | 0 | PASS | N/A · local self-check; no camera, upload, location or web access |
| 3 | Hear & Pick Thai | 12 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 3 | Spell It | 8 items | 8 / 8 | 4 | PASS | PASS · core-only production/spelling surface · role-excluded 4 |
| 3 | Echo | 12 items | 8 / 8 | 29 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 3 | Sound Twins | 0 sets | 0 / 10 | 9 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 3 | Tone listening | 1 items | 0 / 8 | 8 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 3 | Mixed review | 55 questions | 10 / 10 | 1 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 1 |
| 3 | Lesson payoff | 3 items | 1 / 1 | 0 | PASS | N/A · decode first, then meaning/context/use reveal |
| 3 | Axis review | 79 cards | 40 / 40 | 0 | PASS | N/A · quota-balanced SRS axes for glyph/class/initial/final/live-dead/tone/listen/say/transfer |
| 3 | Delayed retention | 3 checks | 1 / 1 | 0 | PASS | N/A · +1 day retained and +7 day stabilised checks; one due lesson served per day |
| 3 | Reading/stories | 0 stories | 0 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 3 | Fluency reads | 0 reads | 0 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 3 | Phase 1 completion checkpoint | 0 checks | 0 / 1 | 0 | PASS | N/A · final observable reading behaviours; 85% quiz plus smooth/slow final read |
| 3 | Chunk this word | 0 items | 0 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 3 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 3 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 3 | Mouth Coach | 0 cards | 0 / 0 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 3 | Contrast Block | 0 blocks | 0 / 1 | 0 | PASS | N/A · listen-first contrast plus script-cued record/compare; no pronunciation score |
| 3 | Bangkok Mission | 1 missions | 1 / 1 | 0 | PASS | N/A · local self-check; no camera, upload, location or web access |
| 4 | Hear & Pick Thai | 17 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 4 | Spell It | 11 items | 8 / 8 | 6 | PASS | PASS · core-only production/spelling surface · role-excluded 6 |
| 4 | Echo | 23 items | 8 / 8 | 21 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 4 | Sound Twins | 2 sets | 2 / 10 | 7 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 4 | Tone listening | 4 items | 4 / 8 | 5 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 4 | Mixed review | 71 questions | 10 / 10 | 1 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 1 |
| 4 | Lesson payoff | 4 items | 1 / 1 | 0 | PASS | N/A · decode first, then meaning/context/use reveal |
| 4 | Axis review | 97 cards | 40 / 40 | 0 | PASS | N/A · quota-balanced SRS axes for glyph/class/initial/final/live-dead/tone/listen/say/transfer |
| 4 | Delayed retention | 4 checks | 1 / 1 | 0 | PASS | N/A · +1 day retained and +7 day stabilised checks; one due lesson served per day |
| 4 | Reading/stories | 1 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 4 | Fluency reads | 0 reads | 0 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 4 | Phase 1 completion checkpoint | 0 checks | 0 / 1 | 0 | PASS | N/A · final observable reading behaviours; 85% quiz plus smooth/slow final read |
| 4 | Chunk this word | 0 items | 0 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 4 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 4 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 4 | Mouth Coach | 1 cards | 1 / 1 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 4 | Contrast Block | 1 blocks | 1 / 1 | 0 | PASS | N/A · listen-first contrast plus script-cued record/compare; no pronunciation score |
| 4 | Bangkok Mission | 2 missions | 1 / 1 | 0 | PASS | N/A · local self-check; no camera, upload, location or web access |
| 5 | Hear & Pick Thai | 21 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 5 | Spell It | 13 items | 8 / 8 | 8 | PASS | PASS · core-only production/spelling surface · role-excluded 8 |
| 5 | Echo | 27 items | 8 / 8 | 21 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 5 | Sound Twins | 2 sets | 2 / 10 | 7 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 5 | Tone listening | 4 items | 4 / 8 | 5 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 5 | Mixed review | 92 questions | 10 / 10 | 2 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 2 |
| 5 | Lesson payoff | 5 items | 1 / 1 | 0 | PASS | N/A · decode first, then meaning/context/use reveal |
| 5 | Axis review | 128 cards | 40 / 40 | 0 | PASS | N/A · quota-balanced SRS axes for glyph/class/initial/final/live-dead/tone/listen/say/transfer |
| 5 | Delayed retention | 5 checks | 1 / 1 | 0 | PASS | N/A · +1 day retained and +7 day stabilised checks; one due lesson served per day |
| 5 | Reading/stories | 1 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 5 | Fluency reads | 0 reads | 0 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 5 | Phase 1 completion checkpoint | 0 checks | 0 / 1 | 0 | PASS | N/A · final observable reading behaviours; 85% quiz plus smooth/slow final read |
| 5 | Chunk this word | 0 items | 0 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 5 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 5 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 5 | Mouth Coach | 1 cards | 1 / 1 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 5 | Contrast Block | 1 blocks | 1 / 1 | 0 | PASS | N/A · listen-first contrast plus script-cued record/compare; no pronunciation score |
| 5 | Bangkok Mission | 2 missions | 1 / 1 | 0 | PASS | N/A · local self-check; no camera, upload, location or web access |
| 6 | Hear & Pick Thai | 25 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 6 | Spell It | 15 items | 8 / 8 | 10 | PASS | PASS · core-only production/spelling surface · role-excluded 10 |
| 6 | Echo | 35 items | 8 / 8 | 16 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 6 | Sound Twins | 3 sets | 3 / 10 | 6 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 6 | Tone listening | 6 items | 6 / 8 | 3 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 6 | Mixed review | 106 questions | 10 / 10 | 3 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 3 |
| 6 | Lesson payoff | 6 items | 1 / 1 | 0 | PASS | N/A · decode first, then meaning/context/use reveal |
| 6 | Axis review | 151 cards | 40 / 40 | 0 | PASS | N/A · quota-balanced SRS axes for glyph/class/initial/final/live-dead/tone/listen/say/transfer |
| 6 | Delayed retention | 6 checks | 1 / 1 | 0 | PASS | N/A · +1 day retained and +7 day stabilised checks; one due lesson served per day |
| 6 | Reading/stories | 2 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 6 | Fluency reads | 1 reads | 1 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 6 | Phase 1 completion checkpoint | 0 checks | 0 / 1 | 0 | PASS | N/A · final observable reading behaviours; 85% quiz plus smooth/slow final read |
| 6 | Chunk this word | 0 items | 0 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 6 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 6 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 6 | Mouth Coach | 1 cards | 1 / 1 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 6 | Contrast Block | 1 blocks | 1 / 1 | 0 | PASS | N/A · listen-first contrast plus script-cued record/compare; no pronunciation score |
| 6 | Bangkok Mission | 3 missions | 1 / 1 | 0 | PASS | N/A · local self-check; no camera, upload, location or web access |
| 7 | Hear & Pick Thai | 29 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 7 | Spell It | 17 items | 8 / 8 | 12 | PASS | PASS · core-only production/spelling surface · role-excluded 12 |
| 7 | Echo | 47 items | 8 / 8 | 8 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 7 | Sound Twins | 7 sets | 7 / 10 | 2 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 7 | Tone listening | 6 items | 6 / 8 | 3 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 7 | Mixed review | 123 questions | 10 / 10 | 4 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 4 |
| 7 | Lesson payoff | 7 items | 1 / 1 | 0 | PASS | N/A · decode first, then meaning/context/use reveal |
| 7 | Axis review | 180 cards | 40 / 40 | 0 | PASS | N/A · quota-balanced SRS axes for glyph/class/initial/final/live-dead/tone/listen/say/transfer |
| 7 | Delayed retention | 7 checks | 1 / 1 | 0 | PASS | N/A · +1 day retained and +7 day stabilised checks; one due lesson served per day |
| 7 | Reading/stories | 2 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 7 | Fluency reads | 1 reads | 1 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 7 | Phase 1 completion checkpoint | 0 checks | 0 / 1 | 0 | PASS | N/A · final observable reading behaviours; 85% quiz plus smooth/slow final read |
| 7 | Chunk this word | 0 items | 0 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 7 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 7 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 7 | Mouth Coach | 1 cards | 1 / 1 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 7 | Contrast Block | 2 blocks | 1 / 1 | 0 | PASS | N/A · listen-first contrast plus script-cued record/compare; no pronunciation score |
| 7 | Bangkok Mission | 4 missions | 1 / 1 | 0 | PASS | N/A · local self-check; no camera, upload, location or web access |
| 8 | Hear & Pick Thai | 33 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 8 | Spell It | 19 items | 8 / 8 | 14 | PASS | PASS · core-only production/spelling surface · role-excluded 14 |
| 8 | Echo | 51 items | 8 / 8 | 8 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 8 | Sound Twins | 7 sets | 7 / 10 | 2 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 8 | Tone listening | 6 items | 6 / 8 | 3 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 8 | Mixed review | 144 questions | 10 / 10 | 5 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 5 |
| 8 | Lesson payoff | 8 items | 1 / 1 | 0 | PASS | N/A · decode first, then meaning/context/use reveal |
| 8 | Axis review | 212 cards | 40 / 40 | 0 | PASS | N/A · quota-balanced SRS axes for glyph/class/initial/final/live-dead/tone/listen/say/transfer |
| 8 | Delayed retention | 8 checks | 1 / 1 | 0 | PASS | N/A · +1 day retained and +7 day stabilised checks; one due lesson served per day |
| 8 | Reading/stories | 2 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 8 | Fluency reads | 1 reads | 1 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 8 | Phase 1 completion checkpoint | 0 checks | 0 / 1 | 0 | PASS | N/A · final observable reading behaviours; 85% quiz plus smooth/slow final read |
| 8 | Chunk this word | 0 items | 0 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 8 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 8 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 8 | Mouth Coach | 1 cards | 1 / 1 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 8 | Contrast Block | 2 blocks | 1 / 1 | 0 | PASS | N/A · listen-first contrast plus script-cued record/compare; no pronunciation score |
| 8 | Bangkok Mission | 4 missions | 1 / 1 | 0 | PASS | N/A · local self-check; no camera, upload, location or web access |
| 9 | Hear & Pick Thai | 37 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 9 | Spell It | 22 items | 8 / 8 | 15 | PASS | PASS · core-only production/spelling surface · role-excluded 15 |
| 9 | Echo | 60 items | 8 / 8 | 3 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 9 | Sound Twins | 8 sets | 8 / 10 | 1 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 9 | Tone listening | 9 items | 8 / 8 | 0 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 9 | Mixed review | 166 questions | 10 / 10 | 5 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 5 |
| 9 | Lesson payoff | 9 items | 1 / 1 | 0 | PASS | N/A · decode first, then meaning/context/use reveal |
| 9 | Axis review | 246 cards | 40 / 40 | 0 | PASS | N/A · quota-balanced SRS axes for glyph/class/initial/final/live-dead/tone/listen/say/transfer |
| 9 | Delayed retention | 9 checks | 1 / 1 | 0 | PASS | N/A · +1 day retained and +7 day stabilised checks; one due lesson served per day |
| 9 | Reading/stories | 3 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 9 | Fluency reads | 1 reads | 1 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 9 | Phase 1 completion checkpoint | 0 checks | 0 / 1 | 0 | PASS | N/A · final observable reading behaviours; 85% quiz plus smooth/slow final read |
| 9 | Chunk this word | 0 items | 0 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 9 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 9 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 9 | Mouth Coach | 1 cards | 1 / 1 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 9 | Contrast Block | 2 blocks | 1 / 1 | 0 | PASS | N/A · listen-first contrast plus script-cued record/compare; no pronunciation score |
| 9 | Bangkok Mission | 5 missions | 1 / 1 | 0 | PASS | N/A · local self-check; no camera, upload, location or web access |
| 10 | Hear & Pick Thai | 41 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 10 | Spell It | 25 items | 8 / 8 | 16 | PASS | PASS · core-only production/spelling surface · role-excluded 16 |
| 10 | Echo | 64 items | 8 / 8 | 3 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 10 | Sound Twins | 8 sets | 8 / 10 | 1 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 10 | Tone listening | 9 items | 8 / 8 | 0 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 10 | Mixed review | 175 questions | 10 / 10 | 6 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 6 |
| 10 | Lesson payoff | 10 items | 1 / 1 | 0 | PASS | N/A · decode first, then meaning/context/use reveal |
| 10 | Axis review | 265 cards | 40 / 40 | 0 | PASS | N/A · quota-balanced SRS axes for glyph/class/initial/final/live-dead/tone/listen/say/transfer |
| 10 | Delayed retention | 10 checks | 1 / 1 | 0 | PASS | N/A · +1 day retained and +7 day stabilised checks; one due lesson served per day |
| 10 | Reading/stories | 3 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 10 | Fluency reads | 2 reads | 1 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 10 | Phase 1 completion checkpoint | 0 checks | 0 / 1 | 0 | PASS | N/A · final observable reading behaviours; 85% quiz plus smooth/slow final read |
| 10 | Chunk this word | 0 items | 0 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 10 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 10 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 10 | Mouth Coach | 1 cards | 1 / 1 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 10 | Contrast Block | 2 blocks | 1 / 1 | 0 | PASS | N/A · listen-first contrast plus script-cued record/compare; no pronunciation score |
| 10 | Bangkok Mission | 5 missions | 1 / 1 | 0 | PASS | N/A · local self-check; no camera, upload, location or web access |
| 11 | Hear & Pick Thai | 45 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 11 | Spell It | 28 items | 8 / 8 | 17 | PASS | PASS · core-only production/spelling surface · role-excluded 17 |
| 11 | Echo | 68 items | 8 / 8 | 3 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 11 | Sound Twins | 8 sets | 8 / 10 | 1 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 11 | Tone listening | 9 items | 8 / 8 | 0 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 11 | Mixed review | 187 questions | 10 / 10 | 6 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 6 |
| 11 | Lesson payoff | 11 items | 1 / 1 | 0 | PASS | N/A · decode first, then meaning/context/use reveal |
| 11 | Axis review | 286 cards | 40 / 40 | 0 | PASS | N/A · quota-balanced SRS axes for glyph/class/initial/final/live-dead/tone/listen/say/transfer |
| 11 | Delayed retention | 11 checks | 1 / 1 | 0 | PASS | N/A · +1 day retained and +7 day stabilised checks; one due lesson served per day |
| 11 | Reading/stories | 3 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 11 | Fluency reads | 2 reads | 1 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 11 | Phase 1 completion checkpoint | 0 checks | 0 / 1 | 0 | PASS | N/A · final observable reading behaviours; 85% quiz plus smooth/slow final read |
| 11 | Chunk this word | 0 items | 0 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 11 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 11 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 11 | Mouth Coach | 1 cards | 1 / 1 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 11 | Contrast Block | 2 blocks | 1 / 1 | 0 | PASS | N/A · listen-first contrast plus script-cued record/compare; no pronunciation score |
| 11 | Bangkok Mission | 5 missions | 1 / 1 | 0 | PASS | N/A · local self-check; no camera, upload, location or web access |
| 12 | Hear & Pick Thai | 49 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 12 | Spell It | 32 items | 8 / 8 | 17 | PASS | PASS · core-only production/spelling surface · role-excluded 17 |
| 12 | Echo | 72 items | 8 / 8 | 3 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 12 | Sound Twins | 8 sets | 8 / 10 | 1 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 12 | Tone listening | 9 items | 8 / 8 | 0 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 12 | Mixed review | 199 questions | 10 / 10 | 6 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 6 |
| 12 | Lesson payoff | 12 items | 1 / 1 | 0 | PASS | N/A · decode first, then meaning/context/use reveal |
| 12 | Axis review | 304 cards | 40 / 40 | 0 | PASS | N/A · quota-balanced SRS axes for glyph/class/initial/final/live-dead/tone/listen/say/transfer |
| 12 | Delayed retention | 12 checks | 1 / 1 | 0 | PASS | N/A · +1 day retained and +7 day stabilised checks; one due lesson served per day |
| 12 | Reading/stories | 3 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 12 | Fluency reads | 2 reads | 1 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 12 | Phase 1 completion checkpoint | 0 checks | 0 / 1 | 0 | PASS | N/A · final observable reading behaviours; 85% quiz plus smooth/slow final read |
| 12 | Chunk this word | 0 items | 0 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 12 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 12 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 12 | Mouth Coach | 2 cards | 2 / 2 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 12 | Contrast Block | 3 blocks | 1 / 1 | 0 | PASS | N/A · listen-first contrast plus script-cued record/compare; no pronunciation score |
| 12 | Bangkok Mission | 6 missions | 1 / 1 | 0 | PASS | N/A · local self-check; no camera, upload, location or web access |
| 13 | Hear & Pick Thai | 53 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 13 | Spell It | 35 items | 8 / 8 | 18 | PASS | PASS · core-only production/spelling surface · role-excluded 18 |
| 13 | Echo | 76 items | 8 / 8 | 3 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 13 | Sound Twins | 8 sets | 8 / 10 | 1 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 13 | Tone listening | 9 items | 8 / 8 | 0 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 13 | Mixed review | 214 questions | 10 / 10 | 6 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 6 |
| 13 | Lesson payoff | 13 items | 1 / 1 | 0 | PASS | N/A · decode first, then meaning/context/use reveal |
| 13 | Axis review | 324 cards | 40 / 40 | 0 | PASS | N/A · quota-balanced SRS axes for glyph/class/initial/final/live-dead/tone/listen/say/transfer |
| 13 | Delayed retention | 13 checks | 1 / 1 | 0 | PASS | N/A · +1 day retained and +7 day stabilised checks; one due lesson served per day |
| 13 | Reading/stories | 4 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 13 | Fluency reads | 3 reads | 1 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 13 | Phase 1 completion checkpoint | 0 checks | 0 / 1 | 0 | PASS | N/A · final observable reading behaviours; 85% quiz plus smooth/slow final read |
| 13 | Chunk this word | 0 items | 0 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 13 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 13 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 13 | Mouth Coach | 3 cards | 3 / 3 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 13 | Contrast Block | 4 blocks | 1 / 1 | 0 | PASS | N/A · listen-first contrast plus script-cued record/compare; no pronunciation score |
| 13 | Bangkok Mission | 6 missions | 1 / 1 | 0 | PASS | N/A · local self-check; no camera, upload, location or web access |
| 14 | Hear & Pick Thai | 57 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 14 | Spell It | 38 items | 8 / 8 | 19 | PASS | PASS · core-only production/spelling surface · role-excluded 19 |
| 14 | Echo | 80 items | 8 / 8 | 3 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 14 | Sound Twins | 8 sets | 8 / 10 | 1 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 14 | Tone listening | 9 items | 8 / 8 | 0 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 14 | Mixed review | 226 questions | 10 / 10 | 6 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 6 |
| 14 | Lesson payoff | 14 items | 1 / 1 | 0 | PASS | N/A · decode first, then meaning/context/use reveal |
| 14 | Axis review | 339 cards | 40 / 40 | 0 | PASS | N/A · quota-balanced SRS axes for glyph/class/initial/final/live-dead/tone/listen/say/transfer |
| 14 | Delayed retention | 14 checks | 1 / 1 | 0 | PASS | N/A · +1 day retained and +7 day stabilised checks; one due lesson served per day |
| 14 | Reading/stories | 4 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 14 | Fluency reads | 3 reads | 1 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 14 | Phase 1 completion checkpoint | 0 checks | 0 / 1 | 0 | PASS | N/A · final observable reading behaviours; 85% quiz plus smooth/slow final read |
| 14 | Chunk this word | 0 items | 0 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 14 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 14 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 14 | Mouth Coach | 3 cards | 3 / 3 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 14 | Contrast Block | 4 blocks | 1 / 1 | 0 | PASS | N/A · listen-first contrast plus script-cued record/compare; no pronunciation score |
| 14 | Bangkok Mission | 6 missions | 1 / 1 | 0 | PASS | N/A · local self-check; no camera, upload, location or web access |
| 15 | Hear & Pick Thai | 60 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 15 | Spell It | 41 items | 8 / 8 | 19 | PASS | PASS · core-only production/spelling surface · role-excluded 19 |
| 15 | Echo | 82 items | 8 / 8 | 3 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 15 | Sound Twins | 8 sets | 8 / 10 | 1 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 15 | Tone listening | 9 items | 8 / 8 | 0 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 15 | Mixed review | 235 questions | 10 / 10 | 6 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 6 |
| 15 | Lesson payoff | 15 items | 1 / 1 | 0 | PASS | N/A · decode first, then meaning/context/use reveal |
| 15 | Axis review | 355 cards | 40 / 40 | 0 | PASS | N/A · quota-balanced SRS axes for glyph/class/initial/final/live-dead/tone/listen/say/transfer |
| 15 | Delayed retention | 15 checks | 1 / 1 | 0 | PASS | N/A · +1 day retained and +7 day stabilised checks; one due lesson served per day |
| 15 | Reading/stories | 4 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 15 | Fluency reads | 3 reads | 1 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 15 | Phase 1 completion checkpoint | 0 checks | 0 / 1 | 0 | PASS | N/A · final observable reading behaviours; 85% quiz plus smooth/slow final read |
| 15 | Chunk this word | 0 items | 0 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 15 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 15 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 15 | Mouth Coach | 4 cards | 4 / 4 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 15 | Contrast Block | 5 blocks | 1 / 1 | 0 | PASS | N/A · listen-first contrast plus script-cued record/compare; no pronunciation score |
| 15 | Bangkok Mission | 6 missions | 1 / 1 | 0 | PASS | N/A · local self-check; no camera, upload, location or web access |
| 16 | Hear & Pick Thai | 64 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 16 | Spell It | 44 items | 8 / 8 | 20 | PASS | PASS · core-only production/spelling surface · role-excluded 20 |
| 16 | Echo | 86 items | 8 / 8 | 3 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 16 | Sound Twins | 8 sets | 8 / 10 | 1 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 16 | Tone listening | 9 items | 8 / 8 | 0 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 16 | Mixed review | 247 questions | 10 / 10 | 6 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 6 |
| 16 | Lesson payoff | 16 items | 1 / 1 | 0 | PASS | N/A · decode first, then meaning/context/use reveal |
| 16 | Axis review | 373 cards | 40 / 40 | 0 | PASS | N/A · quota-balanced SRS axes for glyph/class/initial/final/live-dead/tone/listen/say/transfer |
| 16 | Delayed retention | 16 checks | 1 / 1 | 0 | PASS | N/A · +1 day retained and +7 day stabilised checks; one due lesson served per day |
| 16 | Reading/stories | 4 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 16 | Fluency reads | 3 reads | 1 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 16 | Phase 1 completion checkpoint | 0 checks | 0 / 1 | 0 | PASS | N/A · final observable reading behaviours; 85% quiz plus smooth/slow final read |
| 16 | Chunk this word | 0 items | 0 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 16 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 16 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 16 | Mouth Coach | 4 cards | 4 / 4 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 16 | Contrast Block | 5 blocks | 1 / 1 | 0 | PASS | N/A · listen-first contrast plus script-cued record/compare; no pronunciation score |
| 16 | Bangkok Mission | 6 missions | 1 / 1 | 0 | PASS | N/A · local self-check; no camera, upload, location or web access |
| 17 | Hear & Pick Thai | 69 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 17 | Spell It | 48 items | 8 / 8 | 21 | PASS | PASS · core-only production/spelling surface · role-excluded 21 |
| 17 | Echo | 93 items | 8 / 8 | 3 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 17 | Sound Twins | 10 sets | 10 / 10 | 1 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 17 | Tone listening | 11 items | 8 / 8 | 0 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 17 | Mixed review | 262 questions | 10 / 10 | 6 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 6 |
| 17 | Lesson payoff | 17 items | 1 / 1 | 0 | PASS | N/A · decode first, then meaning/context/use reveal |
| 17 | Axis review | 391 cards | 40 / 40 | 0 | PASS | N/A · quota-balanced SRS axes for glyph/class/initial/final/live-dead/tone/listen/say/transfer |
| 17 | Delayed retention | 17 checks | 1 / 1 | 0 | PASS | N/A · +1 day retained and +7 day stabilised checks; one due lesson served per day |
| 17 | Reading/stories | 5 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 17 | Fluency reads | 4 reads | 1 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 17 | Phase 1 completion checkpoint | 0 checks | 0 / 1 | 0 | PASS | N/A · final observable reading behaviours; 85% quiz plus smooth/slow final read |
| 17 | Chunk this word | 0 items | 0 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 17 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 17 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 17 | Mouth Coach | 4 cards | 4 / 4 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 17 | Contrast Block | 5 blocks | 1 / 1 | 0 | PASS | N/A · listen-first contrast plus script-cued record/compare; no pronunciation score |
| 17 | Bangkok Mission | 6 missions | 1 / 1 | 0 | PASS | N/A · local self-check; no camera, upload, location or web access |
| 18 | Hear & Pick Thai | 73 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 18 | Spell It | 51 items | 8 / 8 | 22 | PASS | PASS · core-only production/spelling surface · role-excluded 22 |
| 18 | Echo | 97 items | 8 / 8 | 3 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 18 | Sound Twins | 10 sets | 10 / 10 | 1 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 18 | Tone listening | 11 items | 8 / 8 | 0 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 18 | Mixed review | 274 questions | 10 / 10 | 6 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 6 |
| 18 | Lesson payoff | 18 items | 1 / 1 | 0 | PASS | N/A · decode first, then meaning/context/use reveal |
| 18 | Axis review | 409 cards | 40 / 40 | 0 | PASS | N/A · quota-balanced SRS axes for glyph/class/initial/final/live-dead/tone/listen/say/transfer |
| 18 | Delayed retention | 18 checks | 1 / 1 | 0 | PASS | N/A · +1 day retained and +7 day stabilised checks; one due lesson served per day |
| 18 | Reading/stories | 6 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 18 | Fluency reads | 4 reads | 1 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 18 | Phase 1 completion checkpoint | 0 checks | 0 / 1 | 0 | PASS | N/A · final observable reading behaviours; 85% quiz plus smooth/slow final read |
| 18 | Chunk this word | 0 items | 0 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 18 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 18 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 18 | Mouth Coach | 8 cards | 8 / 8 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 18 | Contrast Block | 8 blocks | 1 / 1 | 0 | PASS | N/A · listen-first contrast plus script-cued record/compare; no pronunciation score |
| 18 | Bangkok Mission | 7 missions | 1 / 1 | 0 | PASS | N/A · local self-check; no camera, upload, location or web access |
| 19 | Hear & Pick Thai | 77 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 19 | Spell It | 53 items | 8 / 8 | 24 | PASS | PASS · core-only production/spelling surface · role-excluded 24 |
| 19 | Echo | 101 items | 8 / 8 | 3 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 19 | Sound Twins | 10 sets | 10 / 10 | 1 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 19 | Tone listening | 11 items | 8 / 8 | 0 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 19 | Mixed review | 282 questions | 10 / 10 | 7 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 7 |
| 19 | Lesson payoff | 19 items | 1 / 1 | 0 | PASS | N/A · decode first, then meaning/context/use reveal |
| 19 | Axis review | 426 cards | 40 / 40 | 0 | PASS | N/A · quota-balanced SRS axes for glyph/class/initial/final/live-dead/tone/listen/say/transfer |
| 19 | Delayed retention | 19 checks | 1 / 1 | 0 | PASS | N/A · +1 day retained and +7 day stabilised checks; one due lesson served per day |
| 19 | Reading/stories | 6 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 19 | Fluency reads | 4 reads | 1 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 19 | Phase 1 completion checkpoint | 0 checks | 0 / 1 | 0 | PASS | N/A · final observable reading behaviours; 85% quiz plus smooth/slow final read |
| 19 | Chunk this word | 0 items | 0 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 19 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 19 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 19 | Mouth Coach | 8 cards | 8 / 8 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 19 | Contrast Block | 9 blocks | 1 / 1 | 0 | PASS | N/A · listen-first contrast plus script-cued record/compare; no pronunciation score |
| 19 | Bangkok Mission | 7 missions | 1 / 1 | 0 | PASS | N/A · local self-check; no camera, upload, location or web access |
| 20 | Hear & Pick Thai | 81 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 20 | Spell It | 54 items | 8 / 8 | 27 | PASS | PASS · core-only production/spelling surface · role-excluded 27 |
| 20 | Echo | 105 items | 8 / 8 | 3 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 20 | Sound Twins | 10 sets | 10 / 10 | 1 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 20 | Tone listening | 11 items | 8 / 8 | 0 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 20 | Mixed review | 309 questions | 10 / 10 | 7 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 7 |
| 20 | Lesson payoff | 20 items | 1 / 1 | 0 | PASS | N/A · decode first, then meaning/context/use reveal |
| 20 | Axis review | 465 cards | 40 / 40 | 0 | PASS | N/A · quota-balanced SRS axes for glyph/class/initial/final/live-dead/tone/listen/say/transfer |
| 20 | Delayed retention | 20 checks | 1 / 1 | 0 | PASS | N/A · +1 day retained and +7 day stabilised checks; one due lesson served per day |
| 20 | Reading/stories | 6 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 20 | Fluency reads | 4 reads | 1 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 20 | Phase 1 completion checkpoint | 0 checks | 0 / 1 | 0 | PASS | N/A · final observable reading behaviours; 85% quiz plus smooth/slow final read |
| 20 | Chunk this word | 3 items | 3 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 20 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 20 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 20 | Mouth Coach | 8 cards | 8 / 8 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 20 | Contrast Block | 9 blocks | 1 / 1 | 0 | PASS | N/A · listen-first contrast plus script-cued record/compare; no pronunciation score |
| 20 | Bangkok Mission | 7 missions | 1 / 1 | 0 | PASS | N/A · local self-check; no camera, upload, location or web access |
| 21 | Hear & Pick Thai | 85 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 21 | Spell It | 55 items | 8 / 8 | 30 | PASS | PASS · core-only production/spelling surface · role-excluded 30 |
| 21 | Echo | 109 items | 8 / 8 | 3 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 21 | Sound Twins | 10 sets | 10 / 10 | 1 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 21 | Tone listening | 11 items | 8 / 8 | 0 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 21 | Mixed review | 321 questions | 10 / 10 | 8 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 8 |
| 21 | Lesson payoff | 21 items | 1 / 1 | 0 | PASS | N/A · decode first, then meaning/context/use reveal |
| 21 | Axis review | 485 cards | 40 / 40 | 0 | PASS | N/A · quota-balanced SRS axes for glyph/class/initial/final/live-dead/tone/listen/say/transfer |
| 21 | Delayed retention | 21 checks | 1 / 1 | 0 | PASS | N/A · +1 day retained and +7 day stabilised checks; one due lesson served per day |
| 21 | Reading/stories | 6 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 21 | Fluency reads | 4 reads | 1 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 21 | Phase 1 completion checkpoint | 0 checks | 0 / 1 | 0 | PASS | N/A · final observable reading behaviours; 85% quiz plus smooth/slow final read |
| 21 | Chunk this word | 3 items | 3 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 21 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 21 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 21 | Mouth Coach | 8 cards | 8 / 8 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 21 | Contrast Block | 9 blocks | 1 / 1 | 0 | PASS | N/A · listen-first contrast plus script-cued record/compare; no pronunciation score |
| 21 | Bangkok Mission | 7 missions | 1 / 1 | 0 | PASS | N/A · local self-check; no camera, upload, location or web access |
| 22 | Hear & Pick Thai | 89 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 22 | Spell It | 58 items | 8 / 8 | 31 | PASS | PASS · core-only production/spelling surface · role-excluded 31 |
| 22 | Echo | 115 items | 8 / 8 | 0 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 22 | Sound Twins | 11 sets | 10 / 10 | 0 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 22 | Tone listening | 11 items | 8 / 8 | 0 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 22 | Mixed review | 333 questions | 10 / 10 | 8 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 8 |
| 22 | Lesson payoff | 22 items | 1 / 1 | 0 | PASS | N/A · decode first, then meaning/context/use reveal |
| 22 | Axis review | 504 cards | 40 / 40 | 0 | PASS | N/A · quota-balanced SRS axes for glyph/class/initial/final/live-dead/tone/listen/say/transfer |
| 22 | Delayed retention | 22 checks | 1 / 1 | 0 | PASS | N/A · +1 day retained and +7 day stabilised checks; one due lesson served per day |
| 22 | Reading/stories | 6 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 22 | Fluency reads | 4 reads | 1 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 22 | Phase 1 completion checkpoint | 0 checks | 0 / 1 | 0 | PASS | N/A · final observable reading behaviours; 85% quiz plus smooth/slow final read |
| 22 | Chunk this word | 4 items | 4 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 22 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 22 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 22 | Mouth Coach | 8 cards | 8 / 8 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 22 | Contrast Block | 9 blocks | 1 / 1 | 0 | PASS | N/A · listen-first contrast plus script-cued record/compare; no pronunciation score |
| 22 | Bangkok Mission | 7 missions | 1 / 1 | 0 | PASS | N/A · local self-check; no camera, upload, location or web access |
| 23 | Hear & Pick Thai | 93 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 23 | Spell It | 62 items | 8 / 8 | 31 | PASS | PASS · core-only production/spelling surface · role-excluded 31 |
| 23 | Echo | 119 items | 8 / 8 | 0 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 23 | Sound Twins | 11 sets | 10 / 10 | 0 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 23 | Tone listening | 11 items | 8 / 8 | 0 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 23 | Mixed review | 341 questions | 10 / 10 | 8 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 8 |
| 23 | Lesson payoff | 23 items | 1 / 1 | 0 | PASS | N/A · decode first, then meaning/context/use reveal |
| 23 | Axis review | 520 cards | 40 / 40 | 0 | PASS | N/A · quota-balanced SRS axes for glyph/class/initial/final/live-dead/tone/listen/say/transfer |
| 23 | Delayed retention | 23 checks | 1 / 1 | 0 | PASS | N/A · +1 day retained and +7 day stabilised checks; one due lesson served per day |
| 23 | Reading/stories | 6 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 23 | Fluency reads | 5 reads | 1 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 23 | Phase 1 completion checkpoint | 0 checks | 0 / 1 | 0 | PASS | N/A · final observable reading behaviours; 85% quiz plus smooth/slow final read |
| 23 | Chunk this word | 8 items | 8 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 23 | Seen in the wild | 4 signs | 4 / 4 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 23 | Font Shock | 4 items | 4 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 23 | Mouth Coach | 10 cards | 10 / 10 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 23 | Contrast Block | 9 blocks | 1 / 1 | 0 | PASS | N/A · listen-first contrast plus script-cued record/compare; no pronunciation score |
| 23 | Bangkok Mission | 8 missions | 1 / 1 | 0 | PASS | N/A · local self-check; no camera, upload, location or web access |
| 24 | Hear & Pick Thai | 97 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 24 | Spell It | 66 items | 8 / 8 | 31 | PASS | PASS · core-only production/spelling surface · role-excluded 31 |
| 24 | Echo | 123 items | 8 / 8 | 0 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 24 | Sound Twins | 11 sets | 10 / 10 | 0 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 24 | Tone listening | 11 items | 8 / 8 | 0 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 24 | Mixed review | 352 questions | 10 / 10 | 8 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 8 |
| 24 | Lesson payoff | 24 items | 1 / 1 | 0 | PASS | N/A · decode first, then meaning/context/use reveal |
| 24 | Axis review | 540 cards | 40 / 40 | 0 | PASS | N/A · quota-balanced SRS axes for glyph/class/initial/final/live-dead/tone/listen/say/transfer |
| 24 | Delayed retention | 24 checks | 1 / 1 | 0 | PASS | N/A · +1 day retained and +7 day stabilised checks; one due lesson served per day |
| 24 | Reading/stories | 10 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 24 | Fluency reads | 6 reads | 1 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 24 | Phase 1 completion checkpoint | 15 checks | 1 / 1 | 0 | PASS | N/A · final observable reading behaviours; 85% quiz plus smooth/slow final read |
| 24 | Chunk this word | 11 items | 8 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 24 | Seen in the wild | 10 signs | 10 / 10 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 24 | Font Shock | 10 items | 8 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 24 | Mouth Coach | 10 cards | 10 / 10 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 24 | Contrast Block | 9 blocks | 1 / 1 | 0 | PASS | N/A · listen-first contrast plus script-cued record/compare; no pronunciation score |
| 24 | Bangkok Mission | 9 missions | 1 / 1 | 0 | PASS | N/A · local self-check; no camera, upload, location or web access |

## Lesson Map
| Day | Lesson | New starts | Finals taught | Quiz axes | Available pools after lesson | Issues |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | l1 First sounds | ก น ม | - | mcq:1, word-reading:1, glyph-sound:3, class:3, listen:2 | tone 1, echo 4 | - |
| 2 | l2 Eat, look, fly | ด บ อ | ก -k, น -n, ม -m, ด -t, บ -p | vowel-length:1, final:1, final-job:5, listen:2, class:3, live-dead:1 | tone 1, echo 8 | - |
| 3 | l3 Street words | ป ท | ป -p, ท -t, ก -k | vowel-order:1, class:2, final:1, live-dead:1, final-job:3, listen:2 | tone 1, echo 12 | - |
| 4 | l4 Tone-mark preview | ห | น -n | listen:2, class:1, glyph-sound:1, final-job:1, live-dead:1, final:2, word-reading:2 | tone 4, twins 2, echo 23, stories 1 | - |
| 5 | l5 Waiting and we | ร ล ว ย | ร -n, ล -n, ว -ao/-aao, ย -y glide | class:4, final-job:4, listen:2, final:1, vowel-order:1, live-dead:1 | tone 4, twins 2, echo 27, stories 1 | - |
| 6 | l6 High class, please | ส ข | ส -t, ข -k, ม -m, ว -ao/-aao | listen:2, live-dead:1, final-job:4, class:2, final:1 | tone 6, twins 3, echo 35, stories 2 | - |
| 7 | l7 Work and elephants | จ ช ง | จ -t, ช -t, ง -ng, น -n | final-job:4, listen:2, live-dead:1, class:3, vowel-length:1, final:1 | tone 6, twins 7, echo 47, stories 2 | - |
| 8 | l8 ต ถ พ ฟ + dead syllables | ต ถ พ ฟ | ต -t, ถ -t, พ -p, ฟ -p, ก -k, น -n | listen:2, final:1, final-job:6, class:4, live-dead:1 | tone 6, twins 7, echo 51, stories 2 | - |
| 9 | l9 The hidden vowel | ค ผ ฝ ซ | ค -k, ซ -t, น -n, ม -m, ย -y glide | final:1, final-job:5, listen:2, class:4, hidden-vowel:1, live-dead:1 | tone 9, twins 8, echo 60, stories 3 | - |
| 10 | l10 Front vowels เ แ + ึ ื | - | ง -ng, ก -k | listen:2, live-dead:1, final:1, vowel-order:1, final-job:2, mcq:1, word-reading:1, glyph-choice:1 | tone 9, twins 8, echo 64, stories 3 | - |
| 11 | l11 Short and snappy | - | ถ -t, ก -k, ง -ng | glyph-sound:1, live-dead:1, vowel-length:1, hidden-vowel:1, listen:2, final-job:3, final:1 | tone 9, twins 8, echo 68, stories 3 | - |
| 12 | l12 He, she, water, yes | - | - | mcq:1, glyph-sound:2, listen:2, vowel-order:1, live-dead:2, glyph-choice:1, word-reading:1 | tone 9, twins 8, echo 72, stories 3 | - |
| 13 | l13 Live or dead? | - | ก -k, ด -t, น -n | vowel-length:1, mcq:4, final:1, listen:2, live-dead:1, final-job:3 | tone 9, twins 8, echo 76, stories 4 | - |
| 14 | l14 Mid class: all five | - | ง -ng | mcq:4, final:1, glyph-sound:1, listen:2, final-job:1, live-dead:1 | tone 9, twins 8, echo 80, stories 4 | - |
| 15 | l15 High class: the grid | - | ว -ao/-aao, ง -ng, ม -m | final-job:3, mcq:3, final:1, live-dead:1, listen:2 | tone 9, twins 8, echo 82, stories 4 | - |
| 16 | l16 Low class: the flip | - | ง -ng, ก -k | final-job:2, final:1, vowel-length:1, listen:2, live-dead:1, mcq:3 | tone 9, twins 8, echo 86, stories 4 | - |
| 17 | l17 The silent leaders | - | ก -k | mcq:5, final-job:1, final:1, listen:2, live-dead:1 | tone 11, twins 10, echo 93, stories 5 | - |
| 18 | l18 Decode ครับ | - | บ -p | vowel-order:1, vowel-length:1, mcq:3, final:1, live-dead:1, listen:2, final-job:1, cluster:1 | tone 11, twins 10, echo 97, stories 6 | - |
| 19 | l19 Fake clusters | - | ง -ng, บ -p, ย -y glide | mcq:3, cluster:1, final-job:3, live-dead:1, final:1, listen:2 | tone 11, twins 10, echo 101, stories 6 | - |
| 20 | l20 Formal friends | ธ ภ ศ ษ ญ ฮ | ธ -t, ภ -p, ศ -t, ษ -t, ญ -n, ง -ng, น -n | mcq:1, final-job:7, vowel-order:1, live-dead:1, class:6, final:1, listen:1 | tone 11, twins 10, echo 105, stories 6 | - |
| 21 | l21 Rare-letter class rows | ฉ ฬ | ฬ -n, น -n, ก -k | rare-class:4, live-dead:1, hidden-vowel:1, class:2, listen:1, final:1, final-job:3 | tone 11, twins 10, echo 109, stories 6 | - |
| 22 | l22 Three-piece vowels | - | น -n | listen:2, final:2, mcq:3, final-job:1, live-dead:1, vowel-order:1 | tone 11, twins 11, echo 115, stories 6 | - |
| 23 | l23 Useful signs | - | ง -ng, ก -k | listen:2, final-job:2, mcq:4, final:1, live-dead:1 | tone 11, twins 11, echo 119, stories 6 | - |
| 24 | l24 Capstone: read Bangkok | - | ด -t, ม -m, ร -n | final-job:3, final:1, live-dead:1, listen:2, mcq:3, vowel-order:1 | tone 11, twins 11, echo 123, stories 10 | - |

## Per-Lesson Detail
### l1 - First sounds
- Unit: A · Foundations
- Glyphs: ก น ม า ี
- Final jobs: -
- Quiz count: 10
- Quiz axes: mcq 1, word-reading 1, glyph-sound 3, class 3, listen 2
- Review after lesson: glyph cards 5, start-consonant glyphs 3, final cards 0, echo pool 4
- Workload: lesson payload glyph 5, final 0, quiz 10; Today route due 5, served 5/30, Lesson day
- Surface audit: Hear & Pick Thai 4 items -> 4/10 PASS; Spell It 2 items -> 0/8 PASS; Echo 4 items -> 4/8 PASS; Sound Twins 0 sets -> 0/10 PASS; Tone listening 1 items -> 0/8 PASS; Mixed review 15 questions -> 10/10 PASS; Lesson payoff 1 items -> 1/1 PASS; Axis review 23 cards -> 23/40 PASS; Delayed retention 1 checks -> 1/1 PASS; Reading/stories 0 stories -> 0/1 PASS; Fluency reads 0 reads -> 0/1 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 0 cards -> 0/0 PASS; Contrast Block 0 blocks -> 0/1 PASS; Bangkok Mission 0 missions -> 0/1 PASS
- Unlocked drills: hear-thai, echo, sprint
- Quiz prompts:
  - mcq: <span class="classchip low">Low class</span> นาน has no tone mark. What tone do we read here? -> Mid
  - word-reading: Mini decode: how does this read? -> mii
  - glyph-sound: What consonant sound? -> g
  - glyph-sound: What consonant sound? -> m
  - glyph-sound: What vowel sound? -> ii (long)
  - class: Which class? -> Low class
  - listen: Listen: which Thai did you hear? -> มี
  - class: Which class? -> Low class
  - listen: Listen: which Thai did you hear? -> มา
  - class: Which class? -> Mid class
- Words:
  - มา (maa) - core
  - มี (mii) - core
  - นาน (naan) - recognition
  - กา (gaa) - decode

### l2 - Eat, look, fly
- Unit: A · Foundations
- Glyphs: ด บ อ ิ ู
- Final jobs: ก -> -k (stop), น -> -n (ring), ม -> -m (ring), ด -> -t (stop), บ -> -p (stop)
- Quiz count: 13
- Quiz axes: vowel-length 1, final 1, final-job 5, listen 2, class 3, live-dead 1
- Review after lesson: glyph cards 10, start-consonant glyphs 6, final cards 5, echo pool 8
- Workload: lesson payload glyph 5, final 5, quiz 13; Today route due 15, served 15/30, Lesson day
- Surface audit: Hear & Pick Thai 8 items -> 8/10 PASS; Spell It 5 items -> 5/8 PASS; Echo 8 items -> 8/8 PASS; Sound Twins 0 sets -> 0/10 PASS; Tone listening 1 items -> 0/8 PASS; Mixed review 38 questions -> 10/10 PASS; Lesson payoff 2 items -> 1/1 PASS; Axis review 54 cards -> 40/40 PASS; Delayed retention 2 checks -> 1/1 PASS; Reading/stories 0 stories -> 0/1 PASS; Fluency reads 0 reads -> 0/1 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 0 cards -> 0/0 PASS; Contrast Block 0 blocks -> 0/1 PASS; Bangkok Mission 0 missions -> 0/1 PASS
- Unlocked drills: hear-thai, echo, sprint
- Quiz prompts:
  - vowel-length: Vowel length: short or long? -> Short
  - final: Ending job: what sound does น make here? -> -n
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - final-job: Ending job: what sound does this letter make at the end? -> -p
  - final-job: Ending job: what sound does this letter make at the end? -> -m
  - listen: Listen: which Thai did you hear? -> กิน
  - class: Which class? -> Mid class
  - live-dead: Sound feel: live or dead? -> Live
  - class: Which class? -> Mid class
  - final-job: Ending job: what sound does this letter make at the end? -> -n
  - final-job: Ending job: what sound does this letter make at the end? -> -k
  - class: Which class? -> Mid class
  - listen: Listen: which Thai did you hear? -> ดี
- Words:
  - กิน (gin) - core; final น -n; Short
  - ดี (dii) - core
  - ดู (duu) - core
  - บิน (bin) - recognition; final น -n

### l3 - Street words
- Unit: A · Foundations
- Glyphs: ป ท ไ โ
- Final jobs: ป -> -p (stop), ท -> -t (stop), ก -> -k (stop)
- Quiz count: 10
- Quiz axes: vowel-order 1, class 2, final 1, live-dead 1, final-job 3, listen 2
- Review after lesson: glyph cards 14, start-consonant glyphs 8, final cards 7, echo pool 12
- Workload: lesson payload glyph 4, final 2, quiz 10; Today route due 21, served 21/30, Lesson day
- Surface audit: Hear & Pick Thai 12 items -> 10/10 PASS; Spell It 8 items -> 8/8 PASS; Echo 12 items -> 8/8 PASS; Sound Twins 0 sets -> 0/10 PASS; Tone listening 1 items -> 0/8 PASS; Mixed review 55 questions -> 10/10 PASS; Lesson payoff 3 items -> 1/1 PASS; Axis review 79 cards -> 40/40 PASS; Delayed retention 3 checks -> 1/1 PASS; Reading/stories 0 stories -> 0/1 PASS; Fluency reads 0 reads -> 0/1 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 0 cards -> 0/0 PASS; Contrast Block 0 blocks -> 0/1 PASS; Bangkok Mission 1 missions -> 1/1 PASS
- Unlocked drills: hear-thai, echo, spell, clinic, sprint
- Quiz prompts:
  - vowel-order: Vowel order: how do you read the vowel shape here? -> written before, spoken after
  - class: Which class? -> Low class
  - class: Which class? -> Mid class
  - final: Ending job: what sound does ท make here? -> -t
  - live-dead: Sound feel: live or dead? -> Dead
  - final-job: Ending job: what sound does this letter make at the end? -> -k
  - listen: Listen: which Thai did you hear? -> ไป
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - final-job: Ending job: what sound does this letter make at the end? -> -p
  - listen: Listen: which Thai did you hear? -> บาท
- Words:
  - ไป (bpai) - core; written before, spoken after
  - บาท (bàat) - core; final ท -t
  - มาก (mâak) - core; final ก -k
  - ปี (bpii) - recognition

### l4 - Tone-mark preview
- Unit: A · Foundations
- Glyphs: ่ ้ ห
- Final jobs: น -> -n (ring)
- Quiz count: 10
- Quiz axes: listen 2, class 1, glyph-sound 1, final-job 1, live-dead 1, final 2, word-reading 2
- Review after lesson: glyph cards 17, start-consonant glyphs 9, final cards 7, echo pool 23
- Workload: lesson payload glyph 3, final 0, quiz 10; Today route due 24, served 24/30, Lesson day
- Surface audit: Hear & Pick Thai 17 items -> 10/10 PASS; Spell It 11 items -> 8/8 PASS; Echo 23 items -> 8/8 PASS; Sound Twins 2 sets -> 2/10 PASS; Tone listening 4 items -> 4/8 PASS; Mixed review 71 questions -> 10/10 PASS; Lesson payoff 4 items -> 1/1 PASS; Axis review 97 cards -> 40/40 PASS; Delayed retention 4 checks -> 1/1 PASS; Reading/stories 1 stories -> 1/1 PASS; Fluency reads 0 reads -> 0/1 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 1 cards -> 1/1 PASS; Contrast Block 1 blocks -> 1/1 PASS; Bangkok Mission 2 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, reading
- Quiz prompts:
  - listen: Listen: which Thai did you hear? -> บ้าน
  - class: Which class? -> High class
  - glyph-sound: What does this mark do? -> mái thoo
  - final-job: Ending job: what sound does this letter make at the end? -> -n
  - live-dead: Sound feel: live or dead? -> Live
  - final: Ending job: what sound does น make here? -> -n
  - final: Ending job: what sound does น make here? -> -n
  - listen: Listen: which Thai did you hear? -> ไม่
  - word-reading: Mini decode: how does this read? -> hâa
  - word-reading: Mini decode: how does this read? -> àan
- Words:
  - ไม่ (mâi) - core
  - บ้าน (bâan) - core; final น -n
  - นี่ (nîi) - core
  - อ่าน (àan) - recognition; final น -n
  - ห้า (hâa) - recognition

### l5 - Waiting and we
- Unit: A · Foundations
- Glyphs: ร ล ว ย เ◌า
- Final jobs: ร -> -n (ring), ล -> -n (ring), ว -> -ao/-aao (glide), ย -> -y glide (glide)
- Quiz count: 13
- Quiz axes: class 4, final-job 4, listen 2, final 1, vowel-order 1, live-dead 1
- Review after lesson: glyph cards 22, start-consonant glyphs 13, final cards 11, echo pool 27
- Workload: lesson payload glyph 5, final 4, quiz 13; Today route due 33, served 30/30, Lesson day
- Surface audit: Hear & Pick Thai 21 items -> 10/10 PASS; Spell It 13 items -> 8/8 PASS; Echo 27 items -> 8/8 PASS; Sound Twins 2 sets -> 2/10 PASS; Tone listening 4 items -> 4/8 PASS; Mixed review 92 questions -> 10/10 PASS; Lesson payoff 5 items -> 1/1 PASS; Axis review 128 cards -> 40/40 PASS; Delayed retention 5 checks -> 1/1 PASS; Reading/stories 1 stories -> 1/1 PASS; Fluency reads 0 reads -> 0/1 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 1 cards -> 1/1 PASS; Contrast Block 1 blocks -> 1/1 PASS; Bangkok Mission 2 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, reading
- Quiz prompts:
  - class: Which class? -> Low class
  - final-job: Ending job: what sound does this letter make at the end? -> -ao/-aao
  - class: Which class? -> Low class
  - listen: Listen: which Thai did you hear? -> เรา
  - final: Ending job: what sound does ว make here? -> -aao
  - final-job: Ending job: what sound does this letter make at the end? -> -n
  - class: Which class? -> Low class
  - final-job: Ending job: what sound does this letter make at the end? -> -n
  - vowel-order: Vowel order: how do you read the vowel shape here? -> wraps the consonant
  - class: Which class? -> Low class
  - listen: Listen: which Thai did you hear? -> รอ
  - live-dead: Sound feel: live or dead? -> Live
  - final-job: Ending job: what sound does this letter make at the end? -> -y glide
- Words:
  - รอ (ror) - core
  - เรา (rao) - core; wraps the consonant
  - ยาว (yaao) - recognition; final ว -aao
  - ลาว (laao) - decode; final ว -aao

### l6 - High class, please
- Unit: A · Foundations
- Glyphs: ส ข
- Final jobs: ส -> -t (stop), ข -> -k (stop), ม -> -m (ring), ว -> -ao/-aao (glide)
- Quiz count: 10
- Quiz axes: listen 2, live-dead 1, final-job 4, class 2, final 1
- Review after lesson: glyph cards 24, start-consonant glyphs 15, final cards 13, echo pool 35
- Workload: lesson payload glyph 2, final 2, quiz 10; Today route due 37, served 30/30, Lesson day
- Surface audit: Hear & Pick Thai 25 items -> 10/10 PASS; Spell It 15 items -> 8/8 PASS; Echo 35 items -> 8/8 PASS; Sound Twins 3 sets -> 3/10 PASS; Tone listening 6 items -> 6/8 PASS; Mixed review 106 questions -> 10/10 PASS; Lesson payoff 6 items -> 1/1 PASS; Axis review 151 cards -> 40/40 PASS; Delayed retention 6 checks -> 1/1 PASS; Reading/stories 2 stories -> 1/1 PASS; Fluency reads 1 reads -> 1/1 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 1 cards -> 1/1 PASS; Contrast Block 1 blocks -> 1/1 PASS; Bangkok Mission 3 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, reading
- Quiz prompts:
  - listen: Listen: which Thai did you hear? -> ขอ
  - live-dead: Sound feel: live or dead? -> Live
  - final-job: Ending job: what sound does this letter make at the end? -> -ao/-aao
  - final-job: Ending job: what sound does this letter make at the end? -> -k
  - class: Which class? -> High class
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - listen: Listen: which Thai did you hear? -> สี
  - class: Which class? -> High class
  - final: Ending job: what sound does ม make here? -> -m
  - final-job: Ending job: what sound does this letter make at the end? -> -m
- Words:
  - ขอ (khǒr) - core
  - สี (sǐi) - core
  - สาม (sǎam) - recognition; final ม -m
  - ขาว (khǎao) - decode; final ว -aao

### l7 - Work and elephants
- Unit: B · The workhorses
- Glyphs: จ ช ง ั
- Final jobs: จ -> -t (stop), ช -> -t (stop), ง -> -ng (ring), น -> -n (ring)
- Quiz count: 12
- Quiz axes: final-job 4, listen 2, live-dead 1, class 3, vowel-length 1, final 1
- Review after lesson: glyph cards 28, start-consonant glyphs 18, final cards 16, echo pool 47
- Workload: lesson payload glyph 4, final 3, quiz 12; Today route due 44, served 30/30, Lesson day
- Surface audit: Hear & Pick Thai 29 items -> 10/10 PASS; Spell It 17 items -> 8/8 PASS; Echo 47 items -> 8/8 PASS; Sound Twins 7 sets -> 7/10 PASS; Tone listening 6 items -> 6/8 PASS; Mixed review 123 questions -> 10/10 PASS; Lesson payoff 7 items -> 1/1 PASS; Axis review 180 cards -> 40/40 PASS; Delayed retention 7 checks -> 1/1 PASS; Reading/stories 2 stories -> 1/1 PASS; Fluency reads 1 reads -> 1/1 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 1 cards -> 1/1 PASS; Contrast Block 2 blocks -> 1/1 PASS; Bangkok Mission 4 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, reading
- Quiz prompts:
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - final-job: Ending job: what sound does this letter make at the end? -> -ng
  - listen: Listen: which Thai did you hear? -> งาน
  - final-job: Ending job: what sound does this letter make at the end? -> -n
  - live-dead: Sound feel: live or dead? -> Live
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - class: Which class? -> Low class
  - class: Which class? -> Mid class
  - vowel-length: Vowel length: short or long? -> Short
  - class: Which class? -> Low class
  - final: Ending job: what sound does น make here? -> -n
  - listen: Listen: which Thai did you hear? -> วันนี้
- Words:
  - งาน (ngaan) - core; final น -n
  - ช้าง (cháang) - decode; final ง -ng
  - จาน (jaan) - recognition; final น -n
  - วันนี้ (wan-níi) - core; final น -n; Short

### l8 - ต ถ พ ฟ + dead syllables
- Unit: B · The workhorses
- Glyphs: ต ถ พ ฟ
- Final jobs: ต -> -t (stop), ถ -> -t (stop), พ -> -p (stop), ฟ -> -p (stop), ก -> -k (stop), น -> -n (ring)
- Quiz count: 14
- Quiz axes: listen 2, final 1, final-job 6, class 4, live-dead 1
- Review after lesson: glyph cards 32, start-consonant glyphs 22, final cards 20, echo pool 51
- Workload: lesson payload glyph 4, final 4, quiz 14; Today route due 52, served 30/30, Consolidation day
- Surface audit: Hear & Pick Thai 33 items -> 10/10 PASS; Spell It 19 items -> 8/8 PASS; Echo 51 items -> 8/8 PASS; Sound Twins 7 sets -> 7/10 PASS; Tone listening 6 items -> 6/8 PASS; Mixed review 144 questions -> 10/10 PASS; Lesson payoff 8 items -> 1/1 PASS; Axis review 212 cards -> 40/40 PASS; Delayed retention 8 checks -> 1/1 PASS; Reading/stories 2 stories -> 1/1 PASS; Fluency reads 1 reads -> 1/1 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 1 cards -> 1/1 PASS; Contrast Block 2 blocks -> 1/1 PASS; Bangkok Mission 4 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, reading
- Quiz prompts:
  - listen: Listen: which Thai did you hear? -> ถูก
  - final: Ending job: what sound does ก make here? -> -k
  - final-job: Ending job: what sound does this letter make at the end? -> -k
  - final-job: Ending job: what sound does this letter make at the end? -> -p
  - final-job: Ending job: what sound does this letter make at the end? -> -p
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - class: Which class? -> Low class
  - final-job: Ending job: what sound does this letter make at the end? -> -n
  - class: Which class? -> High class
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - class: Which class? -> Low class
  - class: Which class? -> Mid class
  - live-dead: Sound feel: live or dead? -> Dead
  - listen: Listen: which Thai did you hear? -> พ่อ
- Words:
  - ตา (dtaa) - recognition
  - ถูก (thùuk) - core; final ก -k
  - พ่อ (phôr) - core
  - ฟัน (fan) - decode; final น -n

### l9 - The hidden vowel
- Unit: B · The workhorses
- Glyphs: ค ผ ฝ ซ
- Final jobs: ค -> -k (stop), ซ -> -t (stop), น -> -n (ring), ม -> -m (ring), ย -> -y glide (glide)
- Quiz count: 14
- Quiz axes: final 1, final-job 5, listen 2, class 4, hidden-vowel 1, live-dead 1
- Review after lesson: glyph cards 36, start-consonant glyphs 26, final cards 22, echo pool 60
- Workload: lesson payload glyph 4, final 2, quiz 14; Today route due 58, served 30/30, Consolidation day
- Surface audit: Hear & Pick Thai 37 items -> 10/10 PASS; Spell It 22 items -> 8/8 PASS; Echo 60 items -> 8/8 PASS; Sound Twins 8 sets -> 8/10 PASS; Tone listening 9 items -> 8/8 PASS; Mixed review 166 questions -> 10/10 PASS; Lesson payoff 9 items -> 1/1 PASS; Axis review 246 cards -> 40/40 PASS; Delayed retention 9 checks -> 1/1 PASS; Reading/stories 3 stories -> 1/1 PASS; Fluency reads 1 reads -> 1/1 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 1 cards -> 1/1 PASS; Contrast Block 2 blocks -> 1/1 PASS; Bangkok Mission 5 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, reading
- Quiz prompts:
  - final: Ending job: what sound does น make here? -> -n
  - final-job: Ending job: what sound does this letter make at the end? -> -k
  - listen: Listen: which Thai did you hear? -> คน
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - class: Which class? -> High class
  - hidden-vowel: Hidden vowel: what sound is added here? -> hidden o
  - listen: Listen: which Thai did you hear? -> ผม
  - class: Which class? -> Low class
  - class: Which class? -> Low class
  - final-job: Ending job: what sound does this letter make at the end? -> -y glide
  - final-job: Ending job: what sound does this letter make at the end? -> -m
  - live-dead: Sound feel: live or dead? -> Live
  - final-job: Ending job: what sound does this letter make at the end? -> -n
  - class: Which class? -> High class
- Words:
  - คน (khon) - core; final น -n; hidden hidden o
  - ผม (phǒm) - core; final ม -m; hidden hidden o
  - ฝน (fǒn) - recognition; final น -n; hidden hidden o
  - ซ้าย (sáai) - core; final ย -ai

### l10 - Front vowels เ แ + ึ ื
- Unit: B · The workhorses
- Glyphs: เ แ ึ ื
- Final jobs: ง -> -ng (ring), ก -> -k (stop)
- Quiz count: 10
- Quiz axes: listen 2, live-dead 1, final 1, vowel-order 1, final-job 2, mcq 1, word-reading 1, glyph-choice 1
- Review after lesson: glyph cards 40, start-consonant glyphs 26, final cards 22, echo pool 64
- Workload: lesson payload glyph 4, final 0, quiz 10; Today route due 62, served 30/30, Consolidation day
- Surface audit: Hear & Pick Thai 41 items -> 10/10 PASS; Spell It 25 items -> 8/8 PASS; Echo 64 items -> 8/8 PASS; Sound Twins 8 sets -> 8/10 PASS; Tone listening 9 items -> 8/8 PASS; Mixed review 175 questions -> 10/10 PASS; Lesson payoff 10 items -> 1/1 PASS; Axis review 265 cards -> 40/40 PASS; Delayed retention 10 checks -> 1/1 PASS; Reading/stories 3 stories -> 1/1 PASS; Fluency reads 2 reads -> 1/1 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 1 cards -> 1/1 PASS; Contrast Block 2 blocks -> 1/1 PASS; Bangkok Mission 5 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, reading
- Quiz prompts:
  - listen: Listen: which Thai did you hear? -> แม่
  - live-dead: Sound feel: live or dead? -> Live
  - final: Ending job: what sound does ง make here? -> -ng
  - listen: Listen: which Thai did you hear? -> แพง
  - vowel-order: Vowel order: how do you read the vowel shape here? -> written before, spoken after
  - final-job: Ending job: what sound does this letter make at the end? -> -k
  - mcq: <span class="classchip low">Low class</span> แพง has no tone mark. What tone do we read here? -> Mid
  - final-job: Ending job: what sound does this letter make at the end? -> -ng
  - word-reading: Mini decode: how does this read? -> mâae
  - glyph-choice: Hear it. Which vowel is it? -> เอ
- Words:
  - แม่ (mâae) - core; written before, spoken after
  - แพง (phaaeng) - core; final ง -ng; written before, spoken after
  - มือ (muue) - core
  - ลึก (lúek) - decode; final ก -k

### l11 - Short and snappy
- Unit: B · The workhorses
- Glyphs: ุ ะ
- Final jobs: ถ -> -t (stop), ก -> -k (stop), ง -> -ng (ring)
- Quiz count: 10
- Quiz axes: glyph-sound 1, live-dead 1, vowel-length 1, hidden-vowel 1, listen 2, final-job 3, final 1
- Review after lesson: glyph cards 42, start-consonant glyphs 26, final cards 22, echo pool 68
- Workload: lesson payload glyph 2, final 0, quiz 10; Today route due 64, served 30/30, Consolidation day
- Surface audit: Hear & Pick Thai 45 items -> 10/10 PASS; Spell It 28 items -> 8/8 PASS; Echo 68 items -> 8/8 PASS; Sound Twins 8 sets -> 8/10 PASS; Tone listening 9 items -> 8/8 PASS; Mixed review 187 questions -> 10/10 PASS; Lesson payoff 11 items -> 1/1 PASS; Axis review 286 cards -> 40/40 PASS; Delayed retention 11 checks -> 1/1 PASS; Reading/stories 3 stories -> 1/1 PASS; Fluency reads 2 reads -> 1/1 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 1 cards -> 1/1 PASS; Contrast Block 2 blocks -> 1/1 PASS; Bangkok Mission 5 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, reading
- Quiz prompts:
  - glyph-sound: What vowel sound? -> u (short)
  - live-dead: Sound feel: live or dead? -> Dead
  - vowel-length: Vowel length: short or long? -> Short
  - hidden-vowel: Hidden vowel: what sound is added here? -> hidden o
  - listen: Listen: which Thai did you hear? -> รถ
  - final-job: Ending job: what sound does this letter make at the end? -> -ng
  - final: Ending job: what sound does ถ make here? -> -t
  - listen: Listen: which Thai did you hear? -> จะ
  - final-job: Ending job: what sound does this letter make at the end? -> -k
  - final-job: Ending job: what sound does this letter make at the end? -> -t
- Words:
  - จะ (jà) - core
  - รถ (rót) - core; final ถ -t; hidden hidden o; Short
  - ทุก (thúk) - core; final ก -k
  - กุ้ง (gûng) - recognition; final ง -ng

### l12 - He, she, water, yes
- Unit: B · The workhorses
- Glyphs: เ◌า ำ ใ
- Final jobs: -
- Quiz count: 10
- Quiz axes: mcq 1, glyph-sound 2, listen 2, vowel-order 1, live-dead 2, glyph-choice 1, word-reading 1
- Review after lesson: glyph cards 44, start-consonant glyphs 26, final cards 22, echo pool 72
- Workload: lesson payload glyph 2, final 0, quiz 10; Today route due 66, served 30/30, Consolidation day
- Surface audit: Hear & Pick Thai 49 items -> 10/10 PASS; Spell It 32 items -> 8/8 PASS; Echo 72 items -> 8/8 PASS; Sound Twins 8 sets -> 8/10 PASS; Tone listening 9 items -> 8/8 PASS; Mixed review 199 questions -> 10/10 PASS; Lesson payoff 12 items -> 1/1 PASS; Axis review 304 cards -> 40/40 PASS; Delayed retention 12 checks -> 1/1 PASS; Reading/stories 3 stories -> 1/1 PASS; Fluency reads 2 reads -> 1/1 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 2 cards -> 2/2 PASS; Contrast Block 3 blocks -> 1/1 PASS; Bangkok Mission 6 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, reading
- Quiz prompts:
  - mcq: <span class="classchip low">Low class</span> + Thai tone mark: which tone? -> High
  - glyph-sound: What vowel sound? -> ao
  - glyph-sound: What vowel sound? -> am
  - listen: Listen: which Thai did you hear? -> เขา
  - vowel-order: Vowel order: how do you read the vowel shape here? -> wraps the consonant
  - live-dead: Sound feel: live or dead? -> Live
  - glyph-choice: Hear it. Which vowel is it? -> อำ
  - listen: Listen: which Thai did you hear? -> น้ำ
  - live-dead: Sound feel: live or dead? -> Live
  - word-reading: Mini decode: how does this read? -> khǎo
- Words:
  - เขา (khǎo) - core; wraps the consonant
  - น้ำ (náam) - core
  - ทำ (tham) - core
  - ใช่ (châi) - core

### l13 - Live or dead?
- Unit: C · The tone engine
- Glyphs: -
- Final jobs: ก -> -k (stop), ด -> -t (stop), น -> -n (ring)
- Quiz count: 12
- Quiz axes: vowel-length 1, mcq 4, final 1, listen 2, live-dead 1, final-job 3
- Review after lesson: glyph cards 44, start-consonant glyphs 26, final cards 22, echo pool 76
- Workload: lesson payload glyph 0, final 0, quiz 12; Today route due 66, served 30/30, Consolidation day
- Surface audit: Hear & Pick Thai 53 items -> 10/10 PASS; Spell It 35 items -> 8/8 PASS; Echo 76 items -> 8/8 PASS; Sound Twins 8 sets -> 8/10 PASS; Tone listening 9 items -> 8/8 PASS; Mixed review 214 questions -> 10/10 PASS; Lesson payoff 13 items -> 1/1 PASS; Axis review 324 cards -> 40/40 PASS; Delayed retention 13 checks -> 1/1 PASS; Reading/stories 4 stories -> 1/1 PASS; Fluency reads 3 reads -> 1/1 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 3 cards -> 3/3 PASS; Contrast Block 4 blocks -> 1/1 PASS; Bangkok Mission 6 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, tone-rule, reading
- Quiz prompts:
  - vowel-length: Vowel length: short or long? -> Long
  - mcq: Live or dead? -> Dead
  - final: Ending job: what sound does ก make here? -> -k
  - listen: Listen: which Thai did you hear? -> พูด
  - listen: Listen: which Thai did you hear? -> จาก
  - mcq: Live or dead? -> Dead
  - live-dead: Sound feel: live or dead? -> Dead
  - final-job: Ending job: what sound does this letter make at the end? -> -n
  - mcq: Live or dead? -> Live
  - mcq: Live or dead? -> Live
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - final-job: Ending job: what sound does this letter make at the end? -> -k
- Words:
  - จาก (jàak) - core; final ก -k; Long
  - พูด (phûut) - core; final ด -t
  - รัก (rák) - recognition; final ก -k; Short
  - นอน (norn) - core; final น -n

### l14 - Mid class: all five
- Unit: C · The tone engine
- Glyphs: ๊ ๋
- Final jobs: ง -> -ng (ring)
- Quiz count: 10
- Quiz axes: mcq 4, final 1, glyph-sound 1, listen 2, final-job 1, live-dead 1
- Review after lesson: glyph cards 46, start-consonant glyphs 26, final cards 22, echo pool 80
- Workload: lesson payload glyph 2, final 0, quiz 10; Today route due 68, served 30/30, Consolidation day
- Surface audit: Hear & Pick Thai 57 items -> 10/10 PASS; Spell It 38 items -> 8/8 PASS; Echo 80 items -> 8/8 PASS; Sound Twins 8 sets -> 8/10 PASS; Tone listening 9 items -> 8/8 PASS; Mixed review 226 questions -> 10/10 PASS; Lesson payoff 14 items -> 1/1 PASS; Axis review 339 cards -> 40/40 PASS; Delayed retention 14 checks -> 1/1 PASS; Reading/stories 4 stories -> 1/1 PASS; Fluency reads 3 reads -> 1/1 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 3 cards -> 3/3 PASS; Contrast Block 4 blocks -> 1/1 PASS; Bangkok Mission 6 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, tone-rule, reading
- Quiz prompts:
  - mcq: <span class='classchip mid'>mid class</span> + ไม้ตรี ๊ gives which tone? -> High
  - final: Ending job: what sound does ง make here? -> -ng
  - glyph-sound: What does this mark do? -> mái jàt-dtà-waa
  - listen: Listen: which Thai did you hear? -> ต้อง
  - mcq: <span class='classchip mid'>mid class</span> + ไม้โท ้ gives which tone? -> Falling
  - mcq: <span class="classchip mid">Mid class</span> + Thai tone mark: which tone? -> Falling
  - final-job: Ending job: what sound does this letter make at the end? -> -ng
  - mcq: <span class='classchip mid'>mid class</span> + ไม้เอก ่ gives which tone? -> Low
  - live-dead: Sound feel: live or dead? -> Live
  - listen: Listen: which Thai did you hear? -> ได้
- Words:
  - เก่า (gào) - recognition
  - ได้ (dâi) - core
  - ต้อง (dtôrng) - core; final ง -ng
  - โต๊ะ (dtó) - core

### l15 - High class: the grid
- Unit: C · The tone engine
- Glyphs: -
- Final jobs: ว -> -ao/-aao (glide), ง -> -ng (ring), ม -> -m (ring)
- Quiz count: 10
- Quiz axes: final-job 3, mcq 3, final 1, live-dead 1, listen 2
- Review after lesson: glyph cards 46, start-consonant glyphs 26, final cards 22, echo pool 82
- Workload: lesson payload glyph 0, final 0, quiz 10; Today route due 68, served 30/30, Consolidation day
- Surface audit: Hear & Pick Thai 60 items -> 10/10 PASS; Spell It 41 items -> 8/8 PASS; Echo 82 items -> 8/8 PASS; Sound Twins 8 sets -> 8/10 PASS; Tone listening 9 items -> 8/8 PASS; Mixed review 235 questions -> 10/10 PASS; Lesson payoff 15 items -> 1/1 PASS; Axis review 355 cards -> 40/40 PASS; Delayed retention 15 checks -> 1/1 PASS; Reading/stories 4 stories -> 1/1 PASS; Fluency reads 3 reads -> 1/1 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 4 cards -> 4/4 PASS; Contrast Block 5 blocks -> 1/1 PASS; Bangkok Mission 6 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, tone-rule, reading
- Quiz prompts:
  - final-job: Ending job: what sound does this letter make at the end? -> -m
  - mcq: <span class='classchip high'>high class</span> + dead syllable gives which tone? -> Low
  - final: Ending job: what sound does ว make here? -> -aao
  - live-dead: Sound feel: live or dead? -> Live
  - final-job: Ending job: what sound does this letter make at the end? -> -ng
  - final-job: Ending job: what sound does this letter make at the end? -> -ao/-aao
  - mcq: <span class='classchip high'>high class</span>, live, no mark gives which tone? -> Rising
  - mcq: <span class='classchip high'>high class</span> + ไม้โท ้ gives which tone? -> Falling
  - listen: Listen: which Thai did you hear? -> ข้าว
  - listen: Listen: which Thai did you hear? -> ห้อง
- Words:
  - ข้าว (khâao) - core; final ว -aao
  - ห้อง (hôrng) - core; final ง -ng
  - ถาม (thǎam) - core; final ม -m

### l16 - Low class: the flip
- Unit: C · The tone engine
- Glyphs: ็
- Final jobs: ง -> -ng (ring), ก -> -k (stop)
- Quiz count: 10
- Quiz axes: final-job 2, final 1, vowel-length 1, listen 2, live-dead 1, mcq 3
- Review after lesson: glyph cards 47, start-consonant glyphs 26, final cards 22, echo pool 86
- Workload: lesson payload glyph 1, final 0, quiz 10; Today route due 69, served 30/30, Consolidation day
- Surface audit: Hear & Pick Thai 64 items -> 10/10 PASS; Spell It 44 items -> 8/8 PASS; Echo 86 items -> 8/8 PASS; Sound Twins 8 sets -> 8/10 PASS; Tone listening 9 items -> 8/8 PASS; Mixed review 247 questions -> 10/10 PASS; Lesson payoff 16 items -> 1/1 PASS; Axis review 373 cards -> 40/40 PASS; Delayed retention 16 checks -> 1/1 PASS; Reading/stories 4 stories -> 1/1 PASS; Fluency reads 3 reads -> 1/1 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 4 cards -> 4/4 PASS; Contrast Block 5 blocks -> 1/1 PASS; Bangkok Mission 6 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, tone-rule, reading
- Quiz prompts:
  - final-job: Ending job: what sound does this letter make at the end? -> -k
  - final: Ending job: what sound does ง make here? -> -ng
  - vowel-length: Vowel length: short or long? -> Short
  - final-job: Ending job: what sound does this letter make at the end? -> -ng
  - listen: Listen: which Thai did you hear? -> น้อง
  - live-dead: Sound feel: live or dead? -> Live
  - mcq: <span class='classchip low'>low class</span> + ไม้โท ้ gives which tone? -> High
  - mcq: <span class='classchip low'>low class</span> + dead-short gives which tone? -> High
  - mcq: <span class='classchip low'>low class</span> + ไม้เอก ่ gives which tone? -> Falling
  - listen: Listen: which Thai did you hear? -> พี่
- Words:
  - น้อง (nórng) - core; final ง -ng
  - พี่ (phîi) - core
  - ช้า (cháa) - core
  - เล็ก (lék) - recognition; final ก -k; Short

### l17 - The silent leaders
- Unit: C · The tone engine
- Glyphs: -
- Final jobs: ก -> -k (stop)
- Quiz count: 10
- Quiz axes: mcq 5, final-job 1, final 1, listen 2, live-dead 1
- Review after lesson: glyph cards 47, start-consonant glyphs 26, final cards 22, echo pool 93
- Workload: lesson payload glyph 0, final 0, quiz 10; Today route due 69, served 30/30, Consolidation day
- Surface audit: Hear & Pick Thai 69 items -> 10/10 PASS; Spell It 48 items -> 8/8 PASS; Echo 93 items -> 8/8 PASS; Sound Twins 10 sets -> 10/10 PASS; Tone listening 11 items -> 8/8 PASS; Mixed review 262 questions -> 10/10 PASS; Lesson payoff 17 items -> 1/1 PASS; Axis review 391 cards -> 40/40 PASS; Delayed retention 17 checks -> 1/1 PASS; Reading/stories 5 stories -> 1/1 PASS; Fluency reads 4 reads -> 1/1 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 4 cards -> 4/4 PASS; Contrast Block 5 blocks -> 1/1 PASS; Bangkok Mission 6 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, tone-rule, reading
- Quiz prompts:
  - mcq: <span class="classchip high">High class</span> + plain live: which tone? -> Rising
  - mcq: Silent ห makes น follow <span class='classchip high'>high class</span> rules. Which tone? -> Rising
  - final-job: Ending job: what sound does this letter make at the end? -> -k
  - final: Ending job: what sound does ก make here? -> -k
  - listen: Listen: which Thai did you hear? -> อยู่
  - mcq: What does silent ห do here? -> Makes ม follow high-class tone rules
  - mcq: Silent อ in the four special words uses which class row? -> Mid class
  - mcq: <span class="classchip mid">Mid class</span> + Thai tone mark: which tone? -> Low
  - listen: Listen: which Thai did you hear? -> ไหน
  - live-dead: Sound feel: live or dead? -> Dead
- Words:
  - หมา (mǎa) - recognition
  - ไหน (nǎi) - core
  - อยู่ (yùu) - core
  - อยาก (yàak) - core; final ก -k
  - ไหม (mǎi) - core

### l18 - Decode ครับ
- Unit: D · Clusters & the long tail
- Glyphs: -
- Final jobs: บ -> -p (stop)
- Quiz count: 11
- Quiz axes: vowel-order 1, vowel-length 1, mcq 3, final 1, live-dead 1, listen 2, final-job 1, cluster 1
- Review after lesson: glyph cards 47, start-consonant glyphs 26, final cards 22, echo pool 97
- Workload: lesson payload glyph 0, final 0, quiz 11; Today route due 69, served 30/30, Consolidation day
- Surface audit: Hear & Pick Thai 73 items -> 10/10 PASS; Spell It 51 items -> 8/8 PASS; Echo 97 items -> 8/8 PASS; Sound Twins 10 sets -> 10/10 PASS; Tone listening 11 items -> 8/8 PASS; Mixed review 274 questions -> 10/10 PASS; Lesson payoff 18 items -> 1/1 PASS; Axis review 409 cards -> 40/40 PASS; Delayed retention 18 checks -> 1/1 PASS; Reading/stories 6 stories -> 1/1 PASS; Fluency reads 4 reads -> 1/1 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 8 cards -> 8/8 PASS; Contrast Block 8 blocks -> 1/1 PASS; Bangkok Mission 7 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, tone-rule, reading
- Quiz prompts:
  - vowel-order: Vowel order: how do you read the vowel shape here? -> written before, spoken after
  - vowel-length: Vowel length: short or long? -> Short
  - mcq: A true cluster takes its class from which letter? -> ค
  - final: Ending job: what sound does บ make here? -> -p
  - live-dead: Sound feel: live or dead? -> Dead
  - mcq: <span class='classchip low'>low class</span> + dead-short gives which tone? -> High
  - listen: Listen: which Thai did you hear? -> ครู
  - listen: Listen: which Thai did you hear? -> ครับ
  - final-job: Ending job: what sound does this letter make at the end? -> -p
  - cluster: Cluster check: what is happening here? -> true cluster
  - mcq: What makes ใกล้ different from ไกล? -> The Thai tone mark
- Words:
  - ครับ (khráp) - core; final บ -p; Short; true cluster
  - ปลา (bplaa) - recognition; Long; true cluster
  - ครู (khruu) - core; Long; true cluster
  - ใกล้ (glâi) - core; written before, spoken after; true cluster

### l19 - Fake clusters
- Unit: D · Clusters & the long tail
- Glyphs: -
- Final jobs: ง -> -ng (ring), บ -> -p (stop), ย -> -y glide (glide)
- Quiz count: 11
- Quiz axes: mcq 3, cluster 1, final-job 3, live-dead 1, final 1, listen 2
- Review after lesson: glyph cards 47, start-consonant glyphs 26, final cards 22, echo pool 101
- Workload: lesson payload glyph 0, final 0, quiz 11; Today route due 69, served 30/30, Consolidation day
- Surface audit: Hear & Pick Thai 77 items -> 10/10 PASS; Spell It 53 items -> 8/8 PASS; Echo 101 items -> 8/8 PASS; Sound Twins 10 sets -> 10/10 PASS; Tone listening 11 items -> 8/8 PASS; Mixed review 282 questions -> 10/10 PASS; Lesson payoff 19 items -> 1/1 PASS; Axis review 426 cards -> 40/40 PASS; Delayed retention 19 checks -> 1/1 PASS; Reading/stories 6 stories -> 1/1 PASS; Fluency reads 4 reads -> 1/1 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 8 cards -> 8/8 PASS; Contrast Block 9 blocks -> 1/1 PASS; Bangkok Mission 7 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, tone-rule, reading
- Quiz prompts:
  - mcq: What happens to ร here? -> It drops out
  - cluster: Cluster check: what is happening here? -> fake cluster
  - final-job: Ending job: what sound does this letter make at the end? -> -ng
  - mcq: What job is อ doing? -> Carrying the opening vowel
  - live-dead: Sound feel: live or dead? -> Live
  - final: Ending job: what sound does ง make here? -> -ng
  - final-job: Ending job: what sound does this letter make at the end? -> -y glide
  - final-job: Ending job: what sound does this letter make at the end? -> -p
  - listen: Listen: which Thai did you hear? -> จริง
  - listen: Listen: which Thai did you hear? -> อร่อย
  - mcq: ทร usually begins with which sound? -> s
- Words:
  - จริง (jing) - core; final ง -ng; fake cluster
  - ทราบ (sâap) - recognition; final บ -p; fake cluster
  - สร้าง (sâang) - decode; final ง -ng; fake cluster
  - อร่อย (a-ròy) - core; final ย -oy

### l20 - Formal friends
- Unit: D · Clusters & the long tail
- Glyphs: ธ ภ ศ ษ ญ ฮ เ◌อ ์
- Final jobs: ธ -> -t (stop), ภ -> -p (stop), ศ -> -t (stop), ษ -> -t (stop), ญ -> -n (ring), ง -> -ng (ring), น -> -n (ring)
- Quiz count: 18
- Quiz axes: mcq 1, final-job 7, vowel-order 1, live-dead 1, class 6, final 1, listen 1
- Review after lesson: glyph cards 55, start-consonant glyphs 32, final cards 27, echo pool 105
- Workload: lesson payload glyph 8, final 5, quiz 18; Today route due 82, served 30/30, Consolidation day
- Surface audit: Hear & Pick Thai 81 items -> 10/10 PASS; Spell It 54 items -> 8/8 PASS; Echo 105 items -> 8/8 PASS; Sound Twins 10 sets -> 10/10 PASS; Tone listening 11 items -> 8/8 PASS; Mixed review 309 questions -> 10/10 PASS; Lesson payoff 20 items -> 1/1 PASS; Axis review 465 cards -> 40/40 PASS; Delayed retention 20 checks -> 1/1 PASS; Reading/stories 6 stories -> 1/1 PASS; Fluency reads 4 reads -> 1/1 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 3 items -> 3/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 8 cards -> 8/8 PASS; Contrast Block 9 blocks -> 1/1 PASS; Bangkok Mission 7 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, tone-rule, reading, chunk
- Quiz prompts:
  - mcq: In ศูนย์, what does ์ do? -> Silences the marked letter
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - final-job: Ending job: what sound does this letter make at the end? -> -p
  - final-job: Ending job: what sound does this letter make at the end? -> -n
  - vowel-order: Vowel order: how do you read the vowel shape here? -> wraps the consonant
  - live-dead: Sound feel: live or dead? -> Live
  - class: Which class? -> High class
  - class: Which class? -> Low class
  - final: Ending job: what sound does ง make here? -> -ng
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - final-job: Ending job: what sound does this letter make at the end? -> -n
  - class: Which class? -> Low class
  - class: Which class? -> Low class
  - final-job: Ending job: what sound does this letter make at the end? -> -ng
  - listen: Listen: which Thai did you hear? -> ภาษา
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - class: Which class? -> High class
  - class: Which class? -> Low class
- Words:
  - เธอ (ter) - recognition; wraps the consonant
  - ภาษา (phaa-sǎa) - core
  - ผู้หญิง (phûu-yǐng) - recognition; final ง -ng
  - ศูนย์ (sǔun) - recognition; final น -n

### l21 - Rare-letter class rows
- Unit: D · Clusters & the long tail
- Glyphs: ฉ ฬ
- Final jobs: ฬ -> -n (ring), น -> -n (ring), ก -> -k (stop)
- Quiz count: 13
- Quiz axes: rare-class 4, live-dead 1, hidden-vowel 1, class 2, listen 1, final 1, final-job 3
- Review after lesson: glyph cards 57, start-consonant glyphs 34, final cards 28, echo pool 109
- Workload: lesson payload glyph 2, final 1, quiz 13; Today route due 85, served 30/30, Consolidation day
- Surface audit: Hear & Pick Thai 85 items -> 10/10 PASS; Spell It 55 items -> 8/8 PASS; Echo 109 items -> 8/8 PASS; Sound Twins 10 sets -> 10/10 PASS; Tone listening 11 items -> 8/8 PASS; Mixed review 321 questions -> 10/10 PASS; Lesson payoff 21 items -> 1/1 PASS; Axis review 485 cards -> 40/40 PASS; Delayed retention 21 checks -> 1/1 PASS; Reading/stories 6 stories -> 1/1 PASS; Fluency reads 4 reads -> 1/1 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 3 items -> 3/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 8 cards -> 8/8 PASS; Contrast Block 9 blocks -> 1/1 PASS; Bangkok Mission 7 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, tone-rule, reading, chunk
- Quiz prompts:
  - rare-class: Rare-letter class row? -> Low class
  - live-dead: Sound feel: live or dead? -> Live
  - rare-class: Rare-letter class row? -> High class
  - hidden-vowel: Hidden vowel: what sound is added here? -> hidden a
  - class: Which class? -> Low class
  - rare-class: Formal s-family class row? -> High class
  - listen: Listen: which Thai did you hear? -> สนุก
  - rare-class: Rare-letter class row? -> Mid class
  - final: Ending job: what sound does น make here? -> -n
  - final-job: Ending job: what sound does this letter make at the end? -> -n
  - class: Which class? -> High class
  - final-job: Ending job: what sound does this letter make at the end? -> -n
  - final-job: Ending job: what sound does this letter make at the end? -> -k
- Words:
  - ฉัน (chǎn) - recognition; final น -n
  - กีฬา (gii-laa) - decode
  - ผู้ใหญ่ (phûu-yài) - recognition
  - สนุก (sà-nùk) - core; final ก -k; hidden hidden a

### l22 - Three-piece vowels
- Unit: D · Clusters & the long tail
- Glyphs: เ◌ีย เ◌ือ ◌ัว
- Final jobs: น -> -n (ring)
- Quiz count: 10
- Quiz axes: listen 2, final 2, mcq 3, final-job 1, live-dead 1, vowel-order 1
- Review after lesson: glyph cards 60, start-consonant glyphs 34, final cards 28, echo pool 115
- Workload: lesson payload glyph 3, final 0, quiz 10; Today route due 88, served 30/30, Consolidation day
- Surface audit: Hear & Pick Thai 89 items -> 10/10 PASS; Spell It 58 items -> 8/8 PASS; Echo 115 items -> 8/8 PASS; Sound Twins 11 sets -> 10/10 PASS; Tone listening 11 items -> 8/8 PASS; Mixed review 333 questions -> 10/10 PASS; Lesson payoff 22 items -> 1/1 PASS; Axis review 504 cards -> 40/40 PASS; Delayed retention 22 checks -> 1/1 PASS; Reading/stories 6 stories -> 1/1 PASS; Fluency reads 4 reads -> 1/1 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 4 items -> 4/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 8 cards -> 8/8 PASS; Contrast Block 9 blocks -> 1/1 PASS; Bangkok Mission 7 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, tone-rule, reading, chunk
- Quiz prompts:
  - listen: Listen: which Thai did you hear? -> เพื่อน
  - final: Ending job: what sound does น make here? -> -n
  - listen: Listen: which Thai did you hear? -> เรียน
  - final: Ending job: what sound does น make here? -> -n
  - mcq: <span class="classchip high">High class</span> + Thai tone mark: which tone? -> Falling
  - mcq: What still drives the tone in a three-piece vowel? -> The consonant class
  - mcq: <span class='classchip low'>low class</span> + ไม้เอก ่ gives which tone? -> Falling
  - final-job: Ending job: what sound does this letter make at the end? -> -n
  - live-dead: Sound feel: live or dead? -> Live
  - vowel-order: Vowel order: how do you read the vowel shape here? -> three pieces around the consonant
- Words:
  - เรียน (rian) - core; final น -n; three pieces around the consonant
  - เพื่อน (phûean) - core; final น -n; three pieces around the consonant
  - ตัว (dtua) - recognition; three pieces around the consonant
  - เสื้อ (sûea) - core; three pieces around the consonant

### l23 - Useful signs
- Unit: D · Clusters & the long tail
- Glyphs: ๆ
- Final jobs: ง -> -ng (ring), ก -> -k (stop)
- Quiz count: 10
- Quiz axes: listen 2, final-job 2, mcq 4, final 1, live-dead 1
- Review after lesson: glyph cards 61, start-consonant glyphs 34, final cards 28, echo pool 119
- Workload: lesson payload glyph 1, final 0, quiz 10; Today route due 89, served 30/30, Consolidation day
- Surface audit: Hear & Pick Thai 93 items -> 10/10 PASS; Spell It 62 items -> 8/8 PASS; Echo 119 items -> 8/8 PASS; Sound Twins 11 sets -> 10/10 PASS; Tone listening 11 items -> 8/8 PASS; Mixed review 341 questions -> 10/10 PASS; Lesson payoff 23 items -> 1/1 PASS; Axis review 520 cards -> 40/40 PASS; Delayed retention 23 checks -> 1/1 PASS; Reading/stories 6 stories -> 1/1 PASS; Fluency reads 5 reads -> 1/1 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 8 items -> 8/8 PASS; Seen in the wild 4 signs -> 4/4 PASS; Font Shock 4 items -> 4/8 PASS; Mouth Coach 10 cards -> 10/10 PASS; Contrast Block 9 blocks -> 1/1 PASS; Bangkok Mission 8 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, tone-rule, reading, chunk, font-shock
- Quiz prompts:
  - listen: Listen: which Thai did you hear? -> ทางออก
  - final-job: Ending job: what sound does this letter make at the end? -> -k
  - mcq: What does ๆ do? -> Repeats the previous word
  - listen: Listen: which Thai did you hear? -> ระวัง
  - final: Ending job: what sound does ง make here? -> -ng
  - mcq: How does this sign read? -> thaang-òrk
  - mcq: How does this sign read? -> thaang-khâo
  - mcq: The first syllable ระ is live or dead? -> Dead
  - final-job: Ending job: what sound does this letter make at the end? -> -ng
  - live-dead: Sound feel: live or dead? -> Live
- Words:
  - ระวัง (rá-wang) - core; final ง -ng
  - ทางออก (thaang-òrk) - core; final ก -k
  - ทางเข้า (thaang-khâo) - core; final ง -ng
  - ห้องน้ำ (hôrng-náam) - core; final ง -ng

### l24 - Capstone: read Bangkok
- Unit: D · Clusters & the long tail
- Glyphs: เ◌ิ
- Final jobs: ด -> -t (stop), ม -> -m (ring), ร -> -n (ring)
- Quiz count: 11
- Quiz axes: final-job 3, final 1, live-dead 1, listen 2, mcq 3, vowel-order 1
- Review after lesson: glyph cards 62, start-consonant glyphs 34, final cards 28, echo pool 123
- Workload: lesson payload glyph 1, final 0, quiz 11; Today route due 90, served 30/30, Consolidation day
- Surface audit: Hear & Pick Thai 97 items -> 10/10 PASS; Spell It 66 items -> 8/8 PASS; Echo 123 items -> 8/8 PASS; Sound Twins 11 sets -> 10/10 PASS; Tone listening 11 items -> 8/8 PASS; Mixed review 352 questions -> 10/10 PASS; Lesson payoff 24 items -> 1/1 PASS; Axis review 540 cards -> 40/40 PASS; Delayed retention 24 checks -> 1/1 PASS; Reading/stories 10 stories -> 1/1 PASS; Fluency reads 6 reads -> 1/1 PASS; Phase 1 completion checkpoint 15 checks -> 1/1 PASS; Chunk this word 11 items -> 8/8 PASS; Seen in the wild 10 signs -> 10/10 PASS; Font Shock 10 items -> 8/8 PASS; Mouth Coach 10 cards -> 10/10 PASS; Contrast Block 9 blocks -> 1/1 PASS; Bangkok Mission 9 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, tone-rule, reading, chunk, font-shock
- Quiz prompts:
  - final-job: Ending job: what sound does this letter make at the end? -> -m
  - final: Ending job: what sound does ด make here? -> -t
  - live-dead: Sound feel: live or dead? -> Dead
  - final-job: Ending job: what sound does this letter make at the end? -> -n
  - listen: Listen: which Thai did you hear? -> ปิด
  - mcq: <span class='classchip mid'>mid class</span> + dead syllable gives which tone? -> Low
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - vowel-order: Vowel order: how do you read the vowel shape here? -> written before, spoken after
  - mcq: How does this sign read? -> hâam
  - listen: Listen: which Thai did you hear? -> เปิด
  - mcq: How does this read? -> aa-hǎan
- Words:
  - เปิด (bpèrt) - core; final ด -t; written before, spoken after
  - ปิด (bpìt) - core; final ด -t
  - ห้าม (hâam) - core; final ม -m
  - อาหาร (aa-hǎan) - core; final ร -n
