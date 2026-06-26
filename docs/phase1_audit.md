# Phase 1 Audit

Generated: 2026-06-26T13:13:08.491Z
App version: v5.0.1
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
- PASS v5Transfer

## Prerequisite Audit
- Lesson prerequisite issues: 0
- Pool prerequisite issues: 0
- Role-contract issues: 0
- No unresolved prerequisite issues.

## Workload Audit

Lesson payload is the content added if that lesson is taken. Today governor route is the daily serving plan: review is capped by SRS, due loads over the consolidation trigger become consolidation days, and Lessons 1-3 remain shorter foundation days.

- SRS cap: 40 cards per review session
- Consolidation trigger: due > 45
- Lessons 1-3: 20-30 minute foundation days, with only the existing optional Lesson 2/3 stretch before Lesson 4.

| Day | Lesson payload | Available pool after lesson | Today governor route | Depth block |
| --- | --- | --- | --- | --- |
| 1 | glyph 5, final 0, quiz 10 | glyph 5, final 0, tone 1, twins 0, echo 4, stories 0, chunks 0, signs 0, font 0, mouth 0 | due 5 -> served 5 / cap 40; Lesson day | Progression drill |
| 2 | glyph 5, final 5, quiz 13 | glyph 10, final 5, tone 1, twins 0, echo 8, stories 0, chunks 0, signs 0, font 0, mouth 0 | due 15 -> served 15 / cap 40; Lesson day | Progression drill |
| 3 | glyph 4, final 2, quiz 10 | glyph 14, final 7, tone 1, twins 0, echo 12, stories 0, chunks 0, signs 0, font 0, mouth 0 | due 21 -> served 21 / cap 40; Lesson day | Progression drill |
| 4 | glyph 3, final 0, quiz 10 | glyph 17, final 7, tone 4, twins 2, echo 22, stories 1, chunks 0, signs 0, font 0, mouth 1 | due 24 -> served 24 / cap 40; Lesson day | Reading room or drill |
| 5 | glyph 5, final 4, quiz 13 | glyph 22, final 11, tone 4, twins 2, echo 26, stories 1, chunks 0, signs 0, font 0, mouth 1 | due 33 -> served 33 / cap 40; Lesson day | Reading room or drill |
| 6 | glyph 2, final 2, quiz 10 | glyph 24, final 13, tone 6, twins 3, echo 34, stories 2, chunks 0, signs 0, font 0, mouth 1 | due 37 -> served 37 / cap 40; Lesson day | Reading room or drill |
| 7 | glyph 4, final 3, quiz 12 | glyph 28, final 16, tone 6, twins 7, echo 46, stories 2, chunks 0, signs 0, font 0, mouth 1 | due 44 -> served 40 / cap 40; Lesson day | Reading room or drill |
| 8 | glyph 4, final 4, quiz 14 | glyph 32, final 20, tone 6, twins 7, echo 50, stories 2, chunks 0, signs 0, font 0, mouth 1 | due 52 -> served 40 / cap 40; Consolidation day | Reading room or drill |
| 9 | glyph 4, final 2, quiz 14 | glyph 36, final 22, tone 9, twins 8, echo 59, stories 3, chunks 0, signs 0, font 0, mouth 1 | due 58 -> served 40 / cap 40; Consolidation day | Reading room or drill |
| 10 | glyph 4, final 0, quiz 10 | glyph 40, final 22, tone 9, twins 8, echo 63, stories 3, chunks 0, signs 0, font 0, mouth 1 | due 62 -> served 40 / cap 40; Consolidation day | Reading room or drill |
| 11 | glyph 2, final 0, quiz 10 | glyph 42, final 22, tone 9, twins 8, echo 67, stories 3, chunks 0, signs 0, font 0, mouth 1 | due 64 -> served 40 / cap 40; Consolidation day | Reading room or drill |
| 12 | glyph 2, final 0, quiz 10 | glyph 44, final 22, tone 9, twins 8, echo 71, stories 3, chunks 0, signs 0, font 0, mouth 1 | due 66 -> served 40 / cap 40; Consolidation day | Reading room or drill |
| 13 | glyph 0, final 0, quiz 12 | glyph 44, final 22, tone 9, twins 8, echo 75, stories 4, chunks 0, signs 0, font 0, mouth 2 | due 66 -> served 40 / cap 40; Consolidation day | Reading room or drill |
| 14 | glyph 2, final 0, quiz 10 | glyph 46, final 22, tone 9, twins 8, echo 79, stories 4, chunks 0, signs 0, font 0, mouth 2 | due 68 -> served 40 / cap 40; Consolidation day | Reading room or drill |
| 15 | glyph 0, final 0, quiz 10 | glyph 46, final 22, tone 9, twins 8, echo 81, stories 4, chunks 0, signs 0, font 0, mouth 2 | due 68 -> served 40 / cap 40; Consolidation day | Reading room or drill |
| 16 | glyph 1, final 0, quiz 10 | glyph 47, final 22, tone 9, twins 8, echo 85, stories 4, chunks 0, signs 0, font 0, mouth 2 | due 69 -> served 40 / cap 40; Consolidation day | Reading room or drill |
| 17 | glyph 0, final 0, quiz 10 | glyph 47, final 22, tone 11, twins 10, echo 92, stories 5, chunks 0, signs 0, font 0, mouth 2 | due 69 -> served 40 / cap 40; Consolidation day | Reading room or drill |
| 18 | glyph 0, final 0, quiz 11 | glyph 47, final 22, tone 11, twins 10, echo 96, stories 6, chunks 0, signs 0, font 0, mouth 3 | due 69 -> served 40 / cap 40; Consolidation day | Reading room or drill |
| 19 | glyph 0, final 0, quiz 11 | glyph 47, final 22, tone 11, twins 10, echo 100, stories 6, chunks 0, signs 0, font 0, mouth 3 | due 69 -> served 40 / cap 40; Consolidation day | Reading room or drill |
| 20 | glyph 8, final 5, quiz 18 | glyph 55, final 27, tone 11, twins 10, echo 104, stories 6, chunks 3, signs 0, font 0, mouth 3 | due 82 -> served 40 / cap 40; Consolidation day | Reading room or drill |
| 21 | glyph 2, final 1, quiz 10 | glyph 57, final 28, tone 11, twins 10, echo 108, stories 6, chunks 3, signs 0, font 0, mouth 3 | due 85 -> served 40 / cap 40; Consolidation day | Reading room or drill |
| 22 | glyph 3, final 0, quiz 10 | glyph 60, final 28, tone 11, twins 11, echo 114, stories 6, chunks 4, signs 0, font 0, mouth 3 | due 88 -> served 40 / cap 40; Consolidation day | Reading room or drill |
| 23 | glyph 1, final 0, quiz 10 | glyph 61, final 28, tone 11, twins 11, echo 118, stories 6, chunks 8, signs 4, font 4, mouth 4 | due 89 -> served 40 / cap 40; Consolidation day | Reading room or drill |
| 24 | glyph 1, final 0, quiz 11 | glyph 62, final 28, tone 11, twins 11, echo 122, stories 10, chunks 11, signs 10, font 10, mouth 4 | due 90 -> served 40 / cap 40; Consolidation day | Reading room or drill |

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
| 1 | Reading/stories | 0 stories | 0 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 1 | Chunk this word | 0 items | 0 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 1 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 1 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 1 | Mouth Coach | 0 cards | 0 / 0 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 2 | Hear & Pick Thai | 8 items | 8 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 2 | Spell It | 5 items | 5 / 8 | 3 | PASS | PASS · core-only production/spelling surface · role-excluded 3 |
| 2 | Echo | 8 items | 8 / 8 | 29 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 2 | Sound Twins | 0 sets | 0 / 10 | 9 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 2 | Tone listening | 1 items | 0 / 8 | 8 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 2 | Mixed review | 38 questions | 10 / 10 | 1 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 1 |
| 2 | Reading/stories | 0 stories | 0 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 2 | Chunk this word | 0 items | 0 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 2 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 2 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 2 | Mouth Coach | 0 cards | 0 / 0 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 3 | Hear & Pick Thai | 12 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 3 | Spell It | 8 items | 8 / 8 | 4 | PASS | PASS · core-only production/spelling surface · role-excluded 4 |
| 3 | Echo | 12 items | 8 / 8 | 29 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 3 | Sound Twins | 0 sets | 0 / 10 | 9 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 3 | Tone listening | 1 items | 0 / 8 | 8 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 3 | Mixed review | 55 questions | 10 / 10 | 1 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 1 |
| 3 | Reading/stories | 0 stories | 0 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 3 | Chunk this word | 0 items | 0 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 3 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 3 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 3 | Mouth Coach | 0 cards | 0 / 0 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 4 | Hear & Pick Thai | 16 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 4 | Spell It | 11 items | 8 / 8 | 5 | PASS | PASS · core-only production/spelling surface · role-excluded 5 |
| 4 | Echo | 22 items | 8 / 8 | 21 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 4 | Sound Twins | 2 sets | 2 / 10 | 7 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 4 | Tone listening | 4 items | 4 / 8 | 5 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 4 | Mixed review | 69 questions | 10 / 10 | 1 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 1 |
| 4 | Reading/stories | 1 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 4 | Chunk this word | 0 items | 0 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 4 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 4 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 4 | Mouth Coach | 1 cards | 1 / 1 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 5 | Hear & Pick Thai | 20 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 5 | Spell It | 13 items | 8 / 8 | 7 | PASS | PASS · core-only production/spelling surface · role-excluded 7 |
| 5 | Echo | 26 items | 8 / 8 | 21 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 5 | Sound Twins | 2 sets | 2 / 10 | 7 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 5 | Tone listening | 4 items | 4 / 8 | 5 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 5 | Mixed review | 90 questions | 10 / 10 | 2 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 2 |
| 5 | Reading/stories | 1 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 5 | Chunk this word | 0 items | 0 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 5 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 5 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 5 | Mouth Coach | 1 cards | 1 / 1 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 6 | Hear & Pick Thai | 24 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 6 | Spell It | 15 items | 8 / 8 | 9 | PASS | PASS · core-only production/spelling surface · role-excluded 9 |
| 6 | Echo | 34 items | 8 / 8 | 16 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 6 | Sound Twins | 3 sets | 3 / 10 | 6 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 6 | Tone listening | 6 items | 6 / 8 | 3 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 6 | Mixed review | 104 questions | 10 / 10 | 3 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 3 |
| 6 | Reading/stories | 2 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 6 | Chunk this word | 0 items | 0 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 6 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 6 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 6 | Mouth Coach | 1 cards | 1 / 1 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 7 | Hear & Pick Thai | 28 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 7 | Spell It | 17 items | 8 / 8 | 11 | PASS | PASS · core-only production/spelling surface · role-excluded 11 |
| 7 | Echo | 46 items | 8 / 8 | 8 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 7 | Sound Twins | 7 sets | 7 / 10 | 2 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 7 | Tone listening | 6 items | 6 / 8 | 3 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 7 | Mixed review | 121 questions | 10 / 10 | 4 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 4 |
| 7 | Reading/stories | 2 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 7 | Chunk this word | 0 items | 0 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 7 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 7 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 7 | Mouth Coach | 1 cards | 1 / 1 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 8 | Hear & Pick Thai | 32 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 8 | Spell It | 19 items | 8 / 8 | 13 | PASS | PASS · core-only production/spelling surface · role-excluded 13 |
| 8 | Echo | 50 items | 8 / 8 | 8 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 8 | Sound Twins | 7 sets | 7 / 10 | 2 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 8 | Tone listening | 6 items | 6 / 8 | 3 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 8 | Mixed review | 142 questions | 10 / 10 | 5 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 5 |
| 8 | Reading/stories | 2 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 8 | Chunk this word | 0 items | 0 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 8 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 8 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 8 | Mouth Coach | 1 cards | 1 / 1 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 9 | Hear & Pick Thai | 36 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 9 | Spell It | 22 items | 8 / 8 | 14 | PASS | PASS · core-only production/spelling surface · role-excluded 14 |
| 9 | Echo | 59 items | 8 / 8 | 3 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 9 | Sound Twins | 8 sets | 8 / 10 | 1 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 9 | Tone listening | 9 items | 8 / 8 | 0 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 9 | Mixed review | 164 questions | 10 / 10 | 5 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 5 |
| 9 | Reading/stories | 3 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 9 | Chunk this word | 0 items | 0 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 9 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 9 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 9 | Mouth Coach | 1 cards | 1 / 1 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 10 | Hear & Pick Thai | 40 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 10 | Spell It | 25 items | 8 / 8 | 15 | PASS | PASS · core-only production/spelling surface · role-excluded 15 |
| 10 | Echo | 63 items | 8 / 8 | 3 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 10 | Sound Twins | 8 sets | 8 / 10 | 1 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 10 | Tone listening | 9 items | 8 / 8 | 0 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 10 | Mixed review | 173 questions | 10 / 10 | 6 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 6 |
| 10 | Reading/stories | 3 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 10 | Chunk this word | 0 items | 0 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 10 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 10 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 10 | Mouth Coach | 1 cards | 1 / 1 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 11 | Hear & Pick Thai | 44 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 11 | Spell It | 28 items | 8 / 8 | 16 | PASS | PASS · core-only production/spelling surface · role-excluded 16 |
| 11 | Echo | 67 items | 8 / 8 | 3 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 11 | Sound Twins | 8 sets | 8 / 10 | 1 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 11 | Tone listening | 9 items | 8 / 8 | 0 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 11 | Mixed review | 185 questions | 10 / 10 | 6 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 6 |
| 11 | Reading/stories | 3 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 11 | Chunk this word | 0 items | 0 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 11 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 11 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 11 | Mouth Coach | 1 cards | 1 / 1 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 12 | Hear & Pick Thai | 48 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 12 | Spell It | 32 items | 8 / 8 | 16 | PASS | PASS · core-only production/spelling surface · role-excluded 16 |
| 12 | Echo | 71 items | 8 / 8 | 3 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 12 | Sound Twins | 8 sets | 8 / 10 | 1 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 12 | Tone listening | 9 items | 8 / 8 | 0 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 12 | Mixed review | 197 questions | 10 / 10 | 6 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 6 |
| 12 | Reading/stories | 3 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 12 | Chunk this word | 0 items | 0 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 12 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 12 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 12 | Mouth Coach | 1 cards | 1 / 1 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 13 | Hear & Pick Thai | 52 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 13 | Spell It | 35 items | 8 / 8 | 17 | PASS | PASS · core-only production/spelling surface · role-excluded 17 |
| 13 | Echo | 75 items | 8 / 8 | 3 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 13 | Sound Twins | 8 sets | 8 / 10 | 1 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 13 | Tone listening | 9 items | 8 / 8 | 0 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 13 | Mixed review | 211 questions | 10 / 10 | 6 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 6 |
| 13 | Reading/stories | 4 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 13 | Chunk this word | 0 items | 0 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 13 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 13 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 13 | Mouth Coach | 2 cards | 2 / 2 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 14 | Hear & Pick Thai | 56 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 14 | Spell It | 38 items | 8 / 8 | 18 | PASS | PASS · core-only production/spelling surface · role-excluded 18 |
| 14 | Echo | 79 items | 8 / 8 | 3 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 14 | Sound Twins | 8 sets | 8 / 10 | 1 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 14 | Tone listening | 9 items | 8 / 8 | 0 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 14 | Mixed review | 223 questions | 10 / 10 | 6 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 6 |
| 14 | Reading/stories | 4 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 14 | Chunk this word | 0 items | 0 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 14 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 14 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 14 | Mouth Coach | 2 cards | 2 / 2 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 15 | Hear & Pick Thai | 59 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 15 | Spell It | 41 items | 8 / 8 | 18 | PASS | PASS · core-only production/spelling surface · role-excluded 18 |
| 15 | Echo | 81 items | 8 / 8 | 3 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 15 | Sound Twins | 8 sets | 8 / 10 | 1 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 15 | Tone listening | 9 items | 8 / 8 | 0 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 15 | Mixed review | 232 questions | 10 / 10 | 6 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 6 |
| 15 | Reading/stories | 4 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 15 | Chunk this word | 0 items | 0 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 15 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 15 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 15 | Mouth Coach | 2 cards | 2 / 2 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 16 | Hear & Pick Thai | 63 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 16 | Spell It | 44 items | 8 / 8 | 19 | PASS | PASS · core-only production/spelling surface · role-excluded 19 |
| 16 | Echo | 85 items | 8 / 8 | 3 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 16 | Sound Twins | 8 sets | 8 / 10 | 1 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 16 | Tone listening | 9 items | 8 / 8 | 0 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 16 | Mixed review | 244 questions | 10 / 10 | 6 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 6 |
| 16 | Reading/stories | 4 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 16 | Chunk this word | 0 items | 0 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 16 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 16 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 16 | Mouth Coach | 2 cards | 2 / 2 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 17 | Hear & Pick Thai | 68 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 17 | Spell It | 48 items | 8 / 8 | 20 | PASS | PASS · core-only production/spelling surface · role-excluded 20 |
| 17 | Echo | 92 items | 8 / 8 | 3 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 17 | Sound Twins | 10 sets | 10 / 10 | 1 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 17 | Tone listening | 11 items | 8 / 8 | 0 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 17 | Mixed review | 259 questions | 10 / 10 | 6 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 6 |
| 17 | Reading/stories | 5 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 17 | Chunk this word | 0 items | 0 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 17 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 17 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 17 | Mouth Coach | 2 cards | 2 / 2 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 18 | Hear & Pick Thai | 72 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 18 | Spell It | 51 items | 8 / 8 | 21 | PASS | PASS · core-only production/spelling surface · role-excluded 21 |
| 18 | Echo | 96 items | 8 / 8 | 3 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 18 | Sound Twins | 10 sets | 10 / 10 | 1 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 18 | Tone listening | 11 items | 8 / 8 | 0 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 18 | Mixed review | 271 questions | 10 / 10 | 6 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 6 |
| 18 | Reading/stories | 6 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 18 | Chunk this word | 0 items | 0 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 18 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 18 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 18 | Mouth Coach | 3 cards | 3 / 3 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 19 | Hear & Pick Thai | 76 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 19 | Spell It | 53 items | 8 / 8 | 23 | PASS | PASS · core-only production/spelling surface · role-excluded 23 |
| 19 | Echo | 100 items | 8 / 8 | 3 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 19 | Sound Twins | 10 sets | 10 / 10 | 1 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 19 | Tone listening | 11 items | 8 / 8 | 0 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 19 | Mixed review | 279 questions | 10 / 10 | 7 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 7 |
| 19 | Reading/stories | 6 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 19 | Chunk this word | 0 items | 0 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 19 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 19 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 19 | Mouth Coach | 3 cards | 3 / 3 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 20 | Hear & Pick Thai | 80 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 20 | Spell It | 54 items | 8 / 8 | 26 | PASS | PASS · core-only production/spelling surface · role-excluded 26 |
| 20 | Echo | 104 items | 8 / 8 | 3 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 20 | Sound Twins | 10 sets | 10 / 10 | 1 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 20 | Tone listening | 11 items | 8 / 8 | 0 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 20 | Mixed review | 306 questions | 10 / 10 | 7 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 7 |
| 20 | Reading/stories | 6 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 20 | Chunk this word | 3 items | 3 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 20 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 20 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 20 | Mouth Coach | 3 cards | 3 / 3 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 21 | Hear & Pick Thai | 84 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 21 | Spell It | 55 items | 8 / 8 | 29 | PASS | PASS · core-only production/spelling surface · role-excluded 29 |
| 21 | Echo | 108 items | 8 / 8 | 3 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 21 | Sound Twins | 10 sets | 10 / 10 | 1 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 21 | Tone listening | 11 items | 8 / 8 | 0 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 21 | Mixed review | 318 questions | 10 / 10 | 8 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 8 |
| 21 | Reading/stories | 6 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 21 | Chunk this word | 3 items | 3 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 21 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 21 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 21 | Mouth Coach | 3 cards | 3 / 3 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 22 | Hear & Pick Thai | 88 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 22 | Spell It | 58 items | 8 / 8 | 30 | PASS | PASS · core-only production/spelling surface · role-excluded 30 |
| 22 | Echo | 114 items | 8 / 8 | 0 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 22 | Sound Twins | 11 sets | 10 / 10 | 0 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 22 | Tone listening | 11 items | 8 / 8 | 0 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 22 | Mixed review | 330 questions | 10 / 10 | 8 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 8 |
| 22 | Reading/stories | 6 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 22 | Chunk this word | 4 items | 4 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 22 | Seen in the wild | 0 signs | 0 / 0 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 22 | Font Shock | 0 items | 0 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 22 | Mouth Coach | 3 cards | 3 / 3 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 23 | Hear & Pick Thai | 92 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 23 | Spell It | 62 items | 8 / 8 | 30 | PASS | PASS · core-only production/spelling surface · role-excluded 30 |
| 23 | Echo | 118 items | 8 / 8 | 0 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 23 | Sound Twins | 11 sets | 10 / 10 | 0 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 23 | Tone listening | 11 items | 8 / 8 | 0 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 23 | Mixed review | 338 questions | 10 / 10 | 8 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 8 |
| 23 | Reading/stories | 6 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 23 | Chunk this word | 8 items | 8 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 23 | Seen in the wild | 4 signs | 4 / 4 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 23 | Font Shock | 4 items | 4 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 23 | Mouth Coach | 4 cards | 4 / 4 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 24 | Hear & Pick Thai | 96 items | 10 / 10 | 0 | PASS | PASS · script-recognition from covered Thai; no English cue |
| 24 | Spell It | 66 items | 8 / 8 | 30 | PASS | PASS · core-only production/spelling surface · role-excluded 30 |
| 24 | Echo | 122 items | 8 / 8 | 0 | PASS | PASS · script-cued read-aloud practice, not certified speaking mastery |
| 24 | Sound Twins | 11 sets | 10 / 10 | 0 | PASS | N/A · tone/length contrast sets are not lesson-word role gated |
| 24 | Tone listening | 11 items | 8 / 8 | 0 | PASS | N/A · tone examples are checked by tone/prerequisite gates |
| 24 | Mixed review | 349 questions | 10 / 10 | 8 | PASS | PASS · decode words excluded; phrase cards must pass the same readability gate · role-excluded 8 |
| 24 | Reading/stories | 10 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 24 | Chunk this word | 11 items | 8 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 24 | Seen in the wild | 10 signs | 10 / 10 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 24 | Font Shock | 10 items | 8 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 24 | Mouth Coach | 4 cards | 4 / 4 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |

## Lesson Map
| Day | Lesson | New starts | Finals taught | Quiz axes | Available pools after lesson | Issues |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | l1 First sounds | ก น ม | - | glyph-sound:2, listen:2, mcq:4, word-reading:2 | tone 1, echo 4 | - |
| 2 | l2 Eat, look, fly | ด บ อ | ก -k, น -n, ม -m, ด -t, บ -p | mcq:3, final:1, listen:2, vowel-length:1, final-job:5, live-dead:1 | tone 1, echo 8 | - |
| 3 | l3 Street words | ป ท | ป -p, ท -t, ก -k | final-job:3, live-dead:1, mcq:2, listen:2, final:1, vowel-order:1 | tone 1, echo 12 | - |
| 4 | l4 Tones on paper | ห | น -n | mcq:2, class-pick:1, word-reading:2, listen:2, live-dead:1, final:1, final-job:1 | tone 4, twins 2, echo 22, stories 1 | - |
| 5 | l5 Waiting and we | ร ล ว ย | ร -n, ล -n, ว -ao/-aao, ย -y glide | final-job:4, live-dead:1, final:1, listen:2, mcq:4, vowel-order:1 | tone 4, twins 2, echo 26, stories 1 | - |
| 6 | l6 High class, please | ส ข | ส -t, ข -k, ม -m, ว -ao/-aao | final-job:4, mcq:2, final:1, live-dead:1, listen:2 | tone 6, twins 3, echo 34, stories 2 | - |
| 7 | l7 Work and elephants | จ ช ง | จ -t, ช -t, ง -ng, น -n | final-job:4, mcq:3, vowel-length:1, listen:2, live-dead:1, final:1 | tone 6, twins 7, echo 46, stories 2 | - |
| 8 | l8 Father is cheap-ish | ต ถ พ ฟ | ต -t, ถ -t, พ -p, ฟ -p, ก -k, น -n | listen:2, live-dead:1, final-job:6, final:1, mcq:4 | tone 6, twins 7, echo 50, stories 2 | - |
| 9 | l9 The hidden vowel | ค ผ ฝ ซ | ค -k, ซ -t, น -n, ม -m, ย -y glide | listen:2, final-job:5, mcq:4, final:1, hidden-vowel:1, live-dead:1 | tone 9, twins 8, echo 59, stories 3 | - |
| 10 | l10 Mother is expensive | - | ง -ng, ก -k | word-reading:2, listen:2, vowel-order:1, glyph-choice:1, final:1, final-job:2, live-dead:1 | tone 9, twins 8, echo 63, stories 3 | - |
| 11 | l11 Short and snappy | - | ถ -t, ก -k, ง -ng | mcq:1, final:1, listen:2, final-job:3, vowel-length:1, live-dead:1, hidden-vowel:1 | tone 9, twins 8, echo 67, stories 3 | - |
| 12 | l12 He, she, water, yes | - | - | listen:2, mcq:1, glyph-choice:1, word-reading:3, live-dead:2, vowel-order:1 | tone 9, twins 8, echo 71, stories 3 | - |
| 13 | l13 Live or dead? | - | ก -k, ด -t, น -n | listen:2, final-job:3, mcq:4, live-dead:1, vowel-length:1, final:1 | tone 9, twins 8, echo 75, stories 4 | - |
| 14 | l14 Mid class: all five | - | ง -ng | final-job:1, mcq:4, final:1, live-dead:1, listen:2, word-reading:1 | tone 9, twins 8, echo 79, stories 4 | - |
| 15 | l15 High class: the grid | - | ว -ao/-aao, ง -ng, ม -m | listen:2, mcq:3, final:1, final-job:3, live-dead:1 | tone 9, twins 8, echo 81, stories 4 | - |
| 16 | l16 Low class: the flip | - | ง -ng, ก -k | listen:2, live-dead:1, mcq:3, vowel-length:1, final:1, final-job:2 | tone 9, twins 8, echo 85, stories 4 | - |
| 17 | l17 The silent leaders | - | ก -k | word-reading:1, mcq:4, live-dead:1, final-job:1, listen:2, final:1 | tone 11, twins 10, echo 92, stories 5 | - |
| 18 | l18 Decode ครับ | - | บ -p | final-job:1, listen:2, final:1, cluster:1, mcq:3, vowel-order:1, vowel-length:1, live-dead:1 | tone 11, twins 10, echo 96, stories 6 | - |
| 19 | l19 Fake clusters | - | ง -ng, บ -p, ย -y glide | live-dead:1, listen:2, cluster:1, mcq:3, final-job:3, final:1 | tone 11, twins 10, echo 100, stories 6 | - |
| 20 | l20 Formal friends | ธ ภ ศ ษ ญ ฮ | ธ -t, ภ -p, ศ -t, ษ -t, ญ -n, ง -ng, น -n | mcq:7, final:1, listen:1, final-job:7, vowel-order:1, live-dead:1 | tone 11, twins 10, echo 104, stories 6 | - |
| 21 | l21 The long tail | ฉ ฬ | ฬ -n, น -n, ก -k | final:1, mcq:2, final-job:3, hidden-vowel:1, listen:1, glyph-choice:1, live-dead:1 | tone 11, twins 10, echo 108, stories 6 | - |
| 22 | l22 Three-piece vowels | - | น -n | mcq:2, vowel-order:1, live-dead:1, word-reading:1, listen:2, final:1, final-job:1, glyph-sound:1 | tone 11, twins 11, echo 114, stories 6 | - |
| 23 | l23 Useful signs | - | ง -ng, ก -k | listen:2, mcq:4, final-job:2, final:1, live-dead:1 | tone 11, twins 11, echo 118, stories 6 | - |
| 24 | l24 Capstone: read Bangkok | - | ด -t, ม -m, ร -n | final-job:3, vowel-order:1, final:1, listen:2, mcq:3, live-dead:1 | tone 11, twins 11, echo 122, stories 10 | - |

## Per-Lesson Detail
### l1 - First sounds
- Unit: A · Foundations
- Glyphs: ก น ม า ี
- Final jobs: -
- Quiz count: 10
- Quiz axes: glyph-sound 2, listen 2, mcq 4, word-reading 2
- Review after lesson: glyph cards 5, start-consonant glyphs 3, final cards 0, echo pool 4
- Workload: lesson payload glyph 5, final 0, quiz 10; Today route due 5, served 5/40, Lesson day
- Surface audit: Hear & Pick Thai 4 items -> 4/10 PASS; Spell It 2 items -> 0/8 PASS; Echo 4 items -> 4/8 PASS; Sound Twins 0 sets -> 0/10 PASS; Tone listening 1 items -> 0/8 PASS; Mixed review 15 questions -> 10/10 PASS; Reading/stories 0 stories -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 0 cards -> 0/0 PASS
- Unlocked drills: hear-thai, echo, sprint
- Quiz prompts:
  - glyph-sound: What vowel sound? -> aa (long)
  - listen: Listen: which Thai did you hear? -> มี
  - mcq: Which class? -> Low class
  - listen: Listen: which Thai did you hear? -> มา
  - mcq: <span class="classchip mid">Mid class</span> กา has no tone mark. What tone do we read here? -> Mid
  - word-reading: Mini decode: how does this read? -> gaa
  - mcq: Which class? -> Low class
  - glyph-sound: What consonant sound? -> g
  - word-reading: Mini decode: how does this read? -> maa
  - mcq: Which class? -> Mid class
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
- Quiz axes: mcq 3, final 1, listen 2, vowel-length 1, final-job 5, live-dead 1
- Review after lesson: glyph cards 10, start-consonant glyphs 6, final cards 5, echo pool 8
- Workload: lesson payload glyph 5, final 5, quiz 13; Today route due 15, served 15/40, Lesson day
- Surface audit: Hear & Pick Thai 8 items -> 8/10 PASS; Spell It 5 items -> 5/8 PASS; Echo 8 items -> 8/8 PASS; Sound Twins 0 sets -> 0/10 PASS; Tone listening 1 items -> 0/8 PASS; Mixed review 38 questions -> 10/10 PASS; Reading/stories 0 stories -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 0 cards -> 0/0 PASS
- Unlocked drills: hear-thai, echo, sprint
- Quiz prompts:
  - mcq: Which class? -> Mid class
  - final: Ending job: what sound does น make here? -> -n
  - mcq: Which class? -> Mid class
  - listen: Listen: which Thai did you hear? -> ดี
  - listen: Listen: which Thai did you hear? -> กิน
  - vowel-length: Vowel length: short or long? -> Short
  - mcq: Which class? -> Mid class
  - final-job: Ending job: what sound does this letter make at the end? -> -n
  - final-job: Ending job: what sound does this letter make at the end? -> -p
  - final-job: Ending job: what sound does this letter make at the end? -> -m
  - live-dead: Sound feel: live or dead? -> Live
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - final-job: Ending job: what sound does this letter make at the end? -> -k
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
- Quiz axes: final-job 3, live-dead 1, mcq 2, listen 2, final 1, vowel-order 1
- Review after lesson: glyph cards 14, start-consonant glyphs 8, final cards 7, echo pool 12
- Workload: lesson payload glyph 4, final 2, quiz 10; Today route due 21, served 21/40, Lesson day
- Surface audit: Hear & Pick Thai 12 items -> 10/10 PASS; Spell It 8 items -> 8/8 PASS; Echo 12 items -> 8/8 PASS; Sound Twins 0 sets -> 0/10 PASS; Tone listening 1 items -> 0/8 PASS; Mixed review 55 questions -> 10/10 PASS; Reading/stories 0 stories -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 0 cards -> 0/0 PASS
- Unlocked drills: hear-thai, echo, spell, clinic, sprint
- Quiz prompts:
  - final-job: Ending job: what sound does this letter make at the end? -> -k
  - live-dead: Sound feel: live or dead? -> Dead
  - mcq: Which class? -> Low class
  - final-job: Ending job: what sound does this letter make at the end? -> -p
  - mcq: Which class? -> Mid class
  - listen: Listen: which Thai did you hear? -> บาท
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - final: Ending job: what sound does ท make here? -> -t
  - vowel-order: Vowel order: how do you read the vowel shape here? -> written before, spoken after
  - listen: Listen: which Thai did you hear? -> ไป
- Words:
  - ไป (bpai) - core; written before, spoken after
  - บาท (bàat) - core; final ท -t
  - มาก (mâak) - core; final ก -k
  - ปี (bpii) - recognition

### l4 - Tones on paper
- Unit: A · Foundations
- Glyphs: ่ ้ ห
- Final jobs: น -> -n (ring)
- Quiz count: 10
- Quiz axes: mcq 2, class-pick 1, word-reading 2, listen 2, live-dead 1, final 1, final-job 1
- Review after lesson: glyph cards 17, start-consonant glyphs 9, final cards 7, echo pool 22
- Workload: lesson payload glyph 3, final 0, quiz 10; Today route due 24, served 24/40, Lesson day
- Surface audit: Hear & Pick Thai 16 items -> 10/10 PASS; Spell It 11 items -> 8/8 PASS; Echo 22 items -> 8/8 PASS; Sound Twins 2 sets -> 2/10 PASS; Tone listening 4 items -> 4/8 PASS; Mixed review 69 questions -> 10/10 PASS; Reading/stories 1 stories -> 1/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 1 cards -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, reading
- Quiz prompts:
  - mcq: Which class? -> High class
  - class-pick: Pick the high class consonant -> ห
  - mcq: <span class="classchip low">Low class</span> + Thai tone mark: which tone? -> Falling
  - word-reading: Mini decode: how does this read? -> hâa
  - listen: Listen: which Thai did you hear? -> บ้าน
  - live-dead: Sound feel: live or dead? -> Live
  - final: Ending job: what sound does น make here? -> -n
  - listen: Listen: which Thai did you hear? -> ไม่
  - word-reading: Mini decode: how does this read? -> mâi
  - final-job: Ending job: what sound does this letter make at the end? -> -n
- Words:
  - ไม่ (mâi) - core
  - บ้าน (bâan) - core; final น -n
  - นี่ (nîi) - core
  - ห้า (hâa) - recognition

### l5 - Waiting and we
- Unit: A · Foundations
- Glyphs: ร ล ว ย เ◌า
- Final jobs: ร -> -n (ring), ล -> -n (ring), ว -> -ao/-aao (glide), ย -> -y glide (glide)
- Quiz count: 13
- Quiz axes: final-job 4, live-dead 1, final 1, listen 2, mcq 4, vowel-order 1
- Review after lesson: glyph cards 22, start-consonant glyphs 13, final cards 11, echo pool 26
- Workload: lesson payload glyph 5, final 4, quiz 13; Today route due 33, served 33/40, Lesson day
- Surface audit: Hear & Pick Thai 20 items -> 10/10 PASS; Spell It 13 items -> 8/8 PASS; Echo 26 items -> 8/8 PASS; Sound Twins 2 sets -> 2/10 PASS; Tone listening 4 items -> 4/8 PASS; Mixed review 90 questions -> 10/10 PASS; Reading/stories 1 stories -> 1/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 1 cards -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, reading
- Quiz prompts:
  - final-job: Ending job: what sound does this letter make at the end? -> -n
  - live-dead: Sound feel: live or dead? -> Live
  - final: Ending job: what sound does ว make here? -> -aao
  - final-job: Ending job: what sound does this letter make at the end? -> -y glide
  - final-job: Ending job: what sound does this letter make at the end? -> -n
  - listen: Listen: which Thai did you hear? -> รอ
  - listen: Listen: which Thai did you hear? -> เรา
  - final-job: Ending job: what sound does this letter make at the end? -> -ao/-aao
  - mcq: Which class? -> Low class
  - mcq: Which class? -> Low class
  - mcq: Which class? -> Low class
  - mcq: Which class? -> Low class
  - vowel-order: Vowel order: how do you read the vowel shape here? -> wraps the consonant
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
- Quiz axes: final-job 4, mcq 2, final 1, live-dead 1, listen 2
- Review after lesson: glyph cards 24, start-consonant glyphs 15, final cards 13, echo pool 34
- Workload: lesson payload glyph 2, final 2, quiz 10; Today route due 37, served 37/40, Lesson day
- Surface audit: Hear & Pick Thai 24 items -> 10/10 PASS; Spell It 15 items -> 8/8 PASS; Echo 34 items -> 8/8 PASS; Sound Twins 3 sets -> 3/10 PASS; Tone listening 6 items -> 6/8 PASS; Mixed review 104 questions -> 10/10 PASS; Reading/stories 2 stories -> 1/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 1 cards -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, reading
- Quiz prompts:
  - final-job: Ending job: what sound does this letter make at the end? -> -ao/-aao
  - mcq: Which class? -> High class
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - final: Ending job: what sound does ม make here? -> -m
  - live-dead: Sound feel: live or dead? -> Live
  - final-job: Ending job: what sound does this letter make at the end? -> -m
  - listen: Listen: which Thai did you hear? -> สี
  - listen: Listen: which Thai did you hear? -> ขอ
  - mcq: Which class? -> High class
  - final-job: Ending job: what sound does this letter make at the end? -> -k
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
- Quiz axes: final-job 4, mcq 3, vowel-length 1, listen 2, live-dead 1, final 1
- Review after lesson: glyph cards 28, start-consonant glyphs 18, final cards 16, echo pool 46
- Workload: lesson payload glyph 4, final 3, quiz 12; Today route due 44, served 40/40, Lesson day
- Surface audit: Hear & Pick Thai 28 items -> 10/10 PASS; Spell It 17 items -> 8/8 PASS; Echo 46 items -> 8/8 PASS; Sound Twins 7 sets -> 7/10 PASS; Tone listening 6 items -> 6/8 PASS; Mixed review 121 questions -> 10/10 PASS; Reading/stories 2 stories -> 1/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 1 cards -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, reading
- Quiz prompts:
  - final-job: Ending job: what sound does this letter make at the end? -> -ng
  - mcq: Which class? -> Low class
  - vowel-length: Vowel length: short or long? -> Short
  - final-job: Ending job: what sound does this letter make at the end? -> -n
  - listen: Listen: which Thai did you hear? -> งาน
  - live-dead: Sound feel: live or dead? -> Live
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - final: Ending job: what sound does น make here? -> -n
  - listen: Listen: which Thai did you hear? -> วันนี้
  - mcq: Which class? -> Low class
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - mcq: Which class? -> Mid class
- Words:
  - งาน (ngaan) - core; final น -n
  - ช้าง (cháang) - decode; final ง -ng
  - จาน (jaan) - recognition; final น -n
  - วันนี้ (wan-níi) - core; final น -n; Short

### l8 - Father is cheap-ish
- Unit: B · The workhorses
- Glyphs: ต ถ พ ฟ
- Final jobs: ต -> -t (stop), ถ -> -t (stop), พ -> -p (stop), ฟ -> -p (stop), ก -> -k (stop), น -> -n (ring)
- Quiz count: 14
- Quiz axes: listen 2, live-dead 1, final-job 6, final 1, mcq 4
- Review after lesson: glyph cards 32, start-consonant glyphs 22, final cards 20, echo pool 50
- Workload: lesson payload glyph 4, final 4, quiz 14; Today route due 52, served 40/40, Consolidation day
- Surface audit: Hear & Pick Thai 32 items -> 10/10 PASS; Spell It 19 items -> 8/8 PASS; Echo 50 items -> 8/8 PASS; Sound Twins 7 sets -> 7/10 PASS; Tone listening 6 items -> 6/8 PASS; Mixed review 142 questions -> 10/10 PASS; Reading/stories 2 stories -> 1/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 1 cards -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, reading
- Quiz prompts:
  - listen: Listen: which Thai did you hear? -> พ่อ
  - live-dead: Sound feel: live or dead? -> Dead
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - final-job: Ending job: what sound does this letter make at the end? -> -n
  - final: Ending job: what sound does ก make here? -> -k
  - mcq: Which class? -> Low class
  - mcq: Which class? -> High class
  - final-job: Ending job: what sound does this letter make at the end? -> -k
  - mcq: Which class? -> Mid class
  - final-job: Ending job: what sound does this letter make at the end? -> -p
  - final-job: Ending job: what sound does this letter make at the end? -> -p
  - mcq: Which class? -> Low class
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - listen: Listen: which Thai did you hear? -> ถูก
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
- Quiz axes: listen 2, final-job 5, mcq 4, final 1, hidden-vowel 1, live-dead 1
- Review after lesson: glyph cards 36, start-consonant glyphs 26, final cards 22, echo pool 59
- Workload: lesson payload glyph 4, final 2, quiz 14; Today route due 58, served 40/40, Consolidation day
- Surface audit: Hear & Pick Thai 36 items -> 10/10 PASS; Spell It 22 items -> 8/8 PASS; Echo 59 items -> 8/8 PASS; Sound Twins 8 sets -> 8/10 PASS; Tone listening 9 items -> 8/8 PASS; Mixed review 164 questions -> 10/10 PASS; Reading/stories 3 stories -> 1/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 1 cards -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, reading
- Quiz prompts:
  - listen: Listen: which Thai did you hear? -> คน
  - final-job: Ending job: what sound does this letter make at the end? -> -k
  - mcq: Which class? -> Low class
  - final: Ending job: what sound does น make here? -> -n
  - final-job: Ending job: what sound does this letter make at the end? -> -m
  - mcq: Which class? -> High class
  - final-job: Ending job: what sound does this letter make at the end? -> -n
  - listen: Listen: which Thai did you hear? -> ผม
  - hidden-vowel: Hidden vowel: what sound is added here? -> hidden o
  - final-job: Ending job: what sound does this letter make at the end? -> -y glide
  - live-dead: Sound feel: live or dead? -> Live
  - mcq: Which class? -> Low class
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - mcq: Which class? -> High class
- Words:
  - คน (khon) - core; final น -n; hidden hidden o
  - ผม (phǒm) - core; final ม -m; hidden hidden o
  - ฝน (fǒn) - recognition; final น -n; hidden hidden o
  - ซ้าย (sáai) - core; final ย -ai

### l10 - Mother is expensive
- Unit: B · The workhorses
- Glyphs: เ แ ึ ื
- Final jobs: ง -> -ng (ring), ก -> -k (stop)
- Quiz count: 10
- Quiz axes: word-reading 2, listen 2, vowel-order 1, glyph-choice 1, final 1, final-job 2, live-dead 1
- Review after lesson: glyph cards 40, start-consonant glyphs 26, final cards 22, echo pool 63
- Workload: lesson payload glyph 4, final 0, quiz 10; Today route due 62, served 40/40, Consolidation day
- Surface audit: Hear & Pick Thai 40 items -> 10/10 PASS; Spell It 25 items -> 8/8 PASS; Echo 63 items -> 8/8 PASS; Sound Twins 8 sets -> 8/10 PASS; Tone listening 9 items -> 8/8 PASS; Mixed review 173 questions -> 10/10 PASS; Reading/stories 3 stories -> 1/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 1 cards -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, reading
- Quiz prompts:
  - word-reading: Mini decode: how does this read? -> muue
  - listen: Listen: which Thai did you hear? -> แม่
  - listen: Listen: which Thai did you hear? -> แพง
  - word-reading: Mini decode: how does this read? -> mâae
  - vowel-order: Vowel order: how do you read the vowel shape here? -> written before, spoken after
  - glyph-choice: Hear it. Which vowel is it? -> อึ
  - final: Ending job: what sound does ง make here? -> -ng
  - final-job: Ending job: what sound does this letter make at the end? -> -k
  - live-dead: Sound feel: live or dead? -> Live
  - final-job: Ending job: what sound does this letter make at the end? -> -ng
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
- Quiz axes: mcq 1, final 1, listen 2, final-job 3, vowel-length 1, live-dead 1, hidden-vowel 1
- Review after lesson: glyph cards 42, start-consonant glyphs 26, final cards 22, echo pool 67
- Workload: lesson payload glyph 2, final 0, quiz 10; Today route due 64, served 40/40, Consolidation day
- Surface audit: Hear & Pick Thai 44 items -> 10/10 PASS; Spell It 28 items -> 8/8 PASS; Echo 67 items -> 8/8 PASS; Sound Twins 8 sets -> 8/10 PASS; Tone listening 9 items -> 8/8 PASS; Mixed review 185 questions -> 10/10 PASS; Reading/stories 3 stories -> 1/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 1 cards -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, reading
- Quiz prompts:
  - mcq: <span class="classchip low">Low class</span> + dead-short syllable: which tone? -> High
  - final: Ending job: what sound does ถ make here? -> -t
  - listen: Listen: which Thai did you hear? -> จะ
  - final-job: Ending job: what sound does this letter make at the end? -> -k
  - vowel-length: Vowel length: short or long? -> Short
  - listen: Listen: which Thai did you hear? -> รถ
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - final-job: Ending job: what sound does this letter make at the end? -> -ng
  - live-dead: Sound feel: live or dead? -> Dead
  - hidden-vowel: Hidden vowel: what sound is added here? -> hidden o
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
- Quiz axes: listen 2, mcq 1, glyph-choice 1, word-reading 3, live-dead 2, vowel-order 1
- Review after lesson: glyph cards 44, start-consonant glyphs 26, final cards 22, echo pool 71
- Workload: lesson payload glyph 2, final 0, quiz 10; Today route due 66, served 40/40, Consolidation day
- Surface audit: Hear & Pick Thai 48 items -> 10/10 PASS; Spell It 32 items -> 8/8 PASS; Echo 71 items -> 8/8 PASS; Sound Twins 8 sets -> 8/10 PASS; Tone listening 9 items -> 8/8 PASS; Mixed review 197 questions -> 10/10 PASS; Reading/stories 3 stories -> 1/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 1 cards -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, reading
- Quiz prompts:
  - listen: Listen: which Thai did you hear? -> น้ำ
  - mcq: <span class="classchip low">Low class</span> + Thai tone mark: which tone? -> High
  - glyph-choice: Hear it. Which vowel is it? -> อำ
  - word-reading: Mini decode: how does this read? -> khǎo
  - listen: Listen: which Thai did you hear? -> เขา
  - live-dead: Sound feel: live or dead? -> Live
  - word-reading: Mini decode: how does this read? -> châi
  - vowel-order: Vowel order: how do you read the vowel shape here? -> wraps the consonant
  - live-dead: Sound feel: live or dead? -> Live
  - word-reading: Mini decode: how does this read? -> tham
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
- Quiz axes: listen 2, final-job 3, mcq 4, live-dead 1, vowel-length 1, final 1
- Review after lesson: glyph cards 44, start-consonant glyphs 26, final cards 22, echo pool 75
- Workload: lesson payload glyph 0, final 0, quiz 12; Today route due 66, served 40/40, Consolidation day
- Surface audit: Hear & Pick Thai 52 items -> 10/10 PASS; Spell It 35 items -> 8/8 PASS; Echo 75 items -> 8/8 PASS; Sound Twins 8 sets -> 8/10 PASS; Tone listening 9 items -> 8/8 PASS; Mixed review 211 questions -> 10/10 PASS; Reading/stories 4 stories -> 1/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 2 cards -> 2/2 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, tone-rule, reading
- Quiz prompts:
  - listen: Listen: which Thai did you hear? -> พูด
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - final-job: Ending job: what sound does this letter make at the end? -> -k
  - mcq: Live or dead? -> Dead
  - final-job: Ending job: what sound does this letter make at the end? -> -n
  - live-dead: Sound feel: live or dead? -> Dead
  - vowel-length: Vowel length: short or long? -> Long
  - final: Ending job: what sound does ก make here? -> -k
  - mcq: Live or dead? -> Dead
  - mcq: Live or dead? -> Live
  - listen: Listen: which Thai did you hear? -> จาก
  - mcq: Live or dead? -> Live
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
- Quiz axes: final-job 1, mcq 4, final 1, live-dead 1, listen 2, word-reading 1
- Review after lesson: glyph cards 46, start-consonant glyphs 26, final cards 22, echo pool 79
- Workload: lesson payload glyph 2, final 0, quiz 10; Today route due 68, served 40/40, Consolidation day
- Surface audit: Hear & Pick Thai 56 items -> 10/10 PASS; Spell It 38 items -> 8/8 PASS; Echo 79 items -> 8/8 PASS; Sound Twins 8 sets -> 8/10 PASS; Tone listening 9 items -> 8/8 PASS; Mixed review 223 questions -> 10/10 PASS; Reading/stories 4 stories -> 1/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 2 cards -> 2/2 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, tone-rule, reading
- Quiz prompts:
  - final-job: Ending job: what sound does this letter make at the end? -> -ng
  - mcq: <span class='classchip mid'>mid class</span> + ไม้ตรี ๊ gives which tone? -> High
  - mcq: <span class='classchip mid'>mid class</span> + ไม้โท ้ gives which tone? -> Falling
  - mcq: <span class='classchip mid'>mid class</span> + ไม้เอก ่ gives which tone? -> Low
  - final: Ending job: what sound does ง make here? -> -ng
  - mcq: <span class="classchip mid">Mid class</span> + Thai tone mark: which tone? -> Falling
  - live-dead: Sound feel: live or dead? -> Live
  - listen: Listen: which Thai did you hear? -> ได้
  - word-reading: Mini decode: how does this read? -> dtó
  - listen: Listen: which Thai did you hear? -> ต้อง
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
- Quiz axes: listen 2, mcq 3, final 1, final-job 3, live-dead 1
- Review after lesson: glyph cards 46, start-consonant glyphs 26, final cards 22, echo pool 81
- Workload: lesson payload glyph 0, final 0, quiz 10; Today route due 68, served 40/40, Consolidation day
- Surface audit: Hear & Pick Thai 59 items -> 10/10 PASS; Spell It 41 items -> 8/8 PASS; Echo 81 items -> 8/8 PASS; Sound Twins 8 sets -> 8/10 PASS; Tone listening 9 items -> 8/8 PASS; Mixed review 232 questions -> 10/10 PASS; Reading/stories 4 stories -> 1/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 2 cards -> 2/2 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, tone-rule, reading
- Quiz prompts:
  - listen: Listen: which Thai did you hear? -> ข้าว
  - mcq: <span class='classchip high'>high class</span>, live, no mark gives which tone? -> Rising
  - final: Ending job: what sound does ว make here? -> -aao
  - final-job: Ending job: what sound does this letter make at the end? -> -m
  - live-dead: Sound feel: live or dead? -> Live
  - final-job: Ending job: what sound does this letter make at the end? -> -ng
  - mcq: <span class='classchip high'>high class</span> + dead syllable gives which tone? -> Low
  - mcq: <span class='classchip high'>high class</span> + ไม้โท ้ gives which tone? -> Falling
  - listen: Listen: which Thai did you hear? -> ห้อง
  - final-job: Ending job: what sound does this letter make at the end? -> -ao/-aao
- Words:
  - ข้าว (khâao) - core; final ว -aao
  - ห้อง (hôrng) - core; final ง -ng
  - ถาม (thǎam) - core; final ม -m

### l16 - Low class: the flip
- Unit: C · The tone engine
- Glyphs: ็
- Final jobs: ง -> -ng (ring), ก -> -k (stop)
- Quiz count: 10
- Quiz axes: listen 2, live-dead 1, mcq 3, vowel-length 1, final 1, final-job 2
- Review after lesson: glyph cards 47, start-consonant glyphs 26, final cards 22, echo pool 85
- Workload: lesson payload glyph 1, final 0, quiz 10; Today route due 69, served 40/40, Consolidation day
- Surface audit: Hear & Pick Thai 63 items -> 10/10 PASS; Spell It 44 items -> 8/8 PASS; Echo 85 items -> 8/8 PASS; Sound Twins 8 sets -> 8/10 PASS; Tone listening 9 items -> 8/8 PASS; Mixed review 244 questions -> 10/10 PASS; Reading/stories 4 stories -> 1/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 2 cards -> 2/2 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, tone-rule, reading
- Quiz prompts:
  - listen: Listen: which Thai did you hear? -> พี่
  - listen: Listen: which Thai did you hear? -> น้อง
  - live-dead: Sound feel: live or dead? -> Live
  - mcq: <span class='classchip low'>low class</span> + ไม้เอก ่ gives which tone? -> Falling
  - mcq: <span class='classchip low'>low class</span> + ไม้โท ้ gives which tone? -> High
  - mcq: <span class='classchip low'>low class</span> + dead-short gives which tone? -> High
  - vowel-length: Vowel length: short or long? -> Short
  - final: Ending job: what sound does ง make here? -> -ng
  - final-job: Ending job: what sound does this letter make at the end? -> -ng
  - final-job: Ending job: what sound does this letter make at the end? -> -k
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
- Quiz axes: word-reading 1, mcq 4, live-dead 1, final-job 1, listen 2, final 1
- Review after lesson: glyph cards 47, start-consonant glyphs 26, final cards 22, echo pool 92
- Workload: lesson payload glyph 0, final 0, quiz 10; Today route due 69, served 40/40, Consolidation day
- Surface audit: Hear & Pick Thai 68 items -> 10/10 PASS; Spell It 48 items -> 8/8 PASS; Echo 92 items -> 8/8 PASS; Sound Twins 10 sets -> 10/10 PASS; Tone listening 11 items -> 8/8 PASS; Mixed review 259 questions -> 10/10 PASS; Reading/stories 5 stories -> 1/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 2 cards -> 2/2 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, tone-rule, reading
- Quiz prompts:
  - word-reading: Mini decode: how does this read? -> mǎi
  - mcq: What does silent ห do here? -> Makes ม follow high-class tone rules
  - mcq: <span class="classchip high">High class</span> No tone mark: use class + live/dead. Which tone? -> Rising
  - live-dead: Sound feel: live or dead? -> Dead
  - final-job: Ending job: what sound does this letter make at the end? -> -k
  - mcq: Silent อ in the four special words uses which class row? -> Mid class
  - mcq: Silent ห makes น follow <span class='classchip high'>high class</span> rules. Which tone? -> Rising
  - listen: Listen: which Thai did you hear? -> อยู่
  - listen: Listen: which Thai did you hear? -> ไหน
  - final: Ending job: what sound does ก make here? -> -k
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
- Quiz axes: final-job 1, listen 2, final 1, cluster 1, mcq 3, vowel-order 1, vowel-length 1, live-dead 1
- Review after lesson: glyph cards 47, start-consonant glyphs 26, final cards 22, echo pool 96
- Workload: lesson payload glyph 0, final 0, quiz 11; Today route due 69, served 40/40, Consolidation day
- Surface audit: Hear & Pick Thai 72 items -> 10/10 PASS; Spell It 51 items -> 8/8 PASS; Echo 96 items -> 8/8 PASS; Sound Twins 10 sets -> 10/10 PASS; Tone listening 11 items -> 8/8 PASS; Mixed review 271 questions -> 10/10 PASS; Reading/stories 6 stories -> 1/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 3 cards -> 3/3 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, tone-rule, reading
- Quiz prompts:
  - final-job: Ending job: what sound does this letter make at the end? -> -p
  - listen: Listen: which Thai did you hear? -> ครู
  - final: Ending job: what sound does บ make here? -> -p
  - cluster: Cluster check: what is happening here? -> true cluster
  - mcq: A true cluster takes its class from which letter? -> ค
  - listen: Listen: which Thai did you hear? -> ครับ
  - vowel-order: Vowel order: how do you read the vowel shape here? -> written before, spoken after
  - vowel-length: Vowel length: short or long? -> Short
  - live-dead: Sound feel: live or dead? -> Dead
  - mcq: What makes ใกล้ different from ไกล? -> The Thai tone mark
  - mcq: <span class='classchip low'>low class</span> + dead-short gives which tone? -> High
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
- Quiz axes: live-dead 1, listen 2, cluster 1, mcq 3, final-job 3, final 1
- Review after lesson: glyph cards 47, start-consonant glyphs 26, final cards 22, echo pool 100
- Workload: lesson payload glyph 0, final 0, quiz 11; Today route due 69, served 40/40, Consolidation day
- Surface audit: Hear & Pick Thai 76 items -> 10/10 PASS; Spell It 53 items -> 8/8 PASS; Echo 100 items -> 8/8 PASS; Sound Twins 10 sets -> 10/10 PASS; Tone listening 11 items -> 8/8 PASS; Mixed review 279 questions -> 10/10 PASS; Reading/stories 6 stories -> 1/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 3 cards -> 3/3 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, tone-rule, reading
- Quiz prompts:
  - live-dead: Sound feel: live or dead? -> Live
  - listen: Listen: which Thai did you hear? -> อร่อย
  - cluster: Cluster check: what is happening here? -> fake cluster
  - mcq: ทร usually begins with which sound? -> s
  - mcq: What happens to ร here? -> It drops out
  - final-job: Ending job: what sound does this letter make at the end? -> -ng
  - final: Ending job: what sound does ง make here? -> -ng
  - listen: Listen: which Thai did you hear? -> จริง
  - final-job: Ending job: what sound does this letter make at the end? -> -p
  - mcq: What job is อ doing? -> Carrying the opening vowel
  - final-job: Ending job: what sound does this letter make at the end? -> -y glide
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
- Quiz axes: mcq 7, final 1, listen 1, final-job 7, vowel-order 1, live-dead 1
- Review after lesson: glyph cards 55, start-consonant glyphs 32, final cards 27, echo pool 104
- Workload: lesson payload glyph 8, final 5, quiz 18; Today route due 82, served 40/40, Consolidation day
- Surface audit: Hear & Pick Thai 80 items -> 10/10 PASS; Spell It 54 items -> 8/8 PASS; Echo 104 items -> 8/8 PASS; Sound Twins 10 sets -> 10/10 PASS; Tone listening 11 items -> 8/8 PASS; Mixed review 306 questions -> 10/10 PASS; Reading/stories 6 stories -> 1/1 PASS; Chunk this word 3 items -> 3/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 3 cards -> 3/3 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, tone-rule, reading, chunk
- Quiz prompts:
  - mcq: In ศูนย์, what does ์ do? -> Silences the marked letter
  - mcq: Which class? -> Low class
  - final: Ending job: what sound does ง make here? -> -ng
  - listen: Listen: which Thai did you hear? -> ภาษา
  - mcq: Which class? -> Low class
  - mcq: Which class? -> Low class
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - final-job: Ending job: what sound does this letter make at the end? -> -n
  - final-job: Ending job: what sound does this letter make at the end? -> -p
  - vowel-order: Vowel order: how do you read the vowel shape here? -> wraps the consonant
  - final-job: Ending job: what sound does this letter make at the end? -> -ng
  - mcq: Which class? -> High class
  - final-job: Ending job: what sound does this letter make at the end? -> -n
  - live-dead: Sound feel: live or dead? -> Live
  - mcq: Which class? -> High class
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - mcq: Which class? -> Low class
  - final-job: Ending job: what sound does this letter make at the end? -> -t
- Words:
  - เธอ (ter) - recognition; wraps the consonant
  - ภาษา (phaa-sǎa) - core
  - ผู้หญิง (phûu-yǐng) - recognition; final ง -ng
  - ศูนย์ (sǔun) - recognition; final น -n

### l21 - The long tail
- Unit: D · Clusters & the long tail
- Glyphs: ฉ ฬ
- Final jobs: ฬ -> -n (ring), น -> -n (ring), ก -> -k (stop)
- Quiz count: 10
- Quiz axes: final 1, mcq 2, final-job 3, hidden-vowel 1, listen 1, glyph-choice 1, live-dead 1
- Review after lesson: glyph cards 57, start-consonant glyphs 34, final cards 28, echo pool 108
- Workload: lesson payload glyph 2, final 1, quiz 10; Today route due 85, served 40/40, Consolidation day
- Surface audit: Hear & Pick Thai 84 items -> 10/10 PASS; Spell It 55 items -> 8/8 PASS; Echo 108 items -> 8/8 PASS; Sound Twins 10 sets -> 10/10 PASS; Tone listening 11 items -> 8/8 PASS; Mixed review 318 questions -> 10/10 PASS; Reading/stories 6 stories -> 1/1 PASS; Chunk this word 3 items -> 3/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 3 cards -> 3/3 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, tone-rule, reading, chunk
- Quiz prompts:
  - final: Ending job: what sound does น make here? -> -n
  - mcq: Which class? -> High class
  - final-job: Ending job: what sound does this letter make at the end? -> -k
  - hidden-vowel: Hidden vowel: what sound is added here? -> hidden a
  - final-job: Ending job: what sound does this letter make at the end? -> -n
  - listen: Listen: which Thai did you hear? -> สนุก
  - glyph-choice: Hear it. Which consonant is it? -> ฉ
  - live-dead: Sound feel: live or dead? -> Live
  - mcq: Which class? -> Low class
  - final-job: Ending job: what sound does this letter make at the end? -> -n
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
- Quiz axes: mcq 2, vowel-order 1, live-dead 1, word-reading 1, listen 2, final 1, final-job 1, glyph-sound 1
- Review after lesson: glyph cards 60, start-consonant glyphs 34, final cards 28, echo pool 114
- Workload: lesson payload glyph 3, final 0, quiz 10; Today route due 88, served 40/40, Consolidation day
- Surface audit: Hear & Pick Thai 88 items -> 10/10 PASS; Spell It 58 items -> 8/8 PASS; Echo 114 items -> 8/8 PASS; Sound Twins 11 sets -> 10/10 PASS; Tone listening 11 items -> 8/8 PASS; Mixed review 330 questions -> 10/10 PASS; Reading/stories 6 stories -> 1/1 PASS; Chunk this word 4 items -> 4/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 3 cards -> 3/3 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, tone-rule, reading, chunk
- Quiz prompts:
  - mcq: What still drives the tone in a three-piece vowel? -> The consonant class
  - vowel-order: Vowel order: how do you read the vowel shape here? -> three pieces around the consonant
  - live-dead: Sound feel: live or dead? -> Live
  - word-reading: Mini decode: how does this read? -> phûean
  - listen: Listen: which Thai did you hear? -> เพื่อน
  - final: Ending job: what sound does น make here? -> -n
  - final-job: Ending job: what sound does this letter make at the end? -> -n
  - mcq: <span class='classchip low'>low class</span> + ไม้เอก ่ gives which tone? -> Falling
  - listen: Listen: which Thai did you hear? -> เรียน
  - glyph-sound: What vowel sound? -> uea
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
- Quiz axes: listen 2, mcq 4, final-job 2, final 1, live-dead 1
- Review after lesson: glyph cards 61, start-consonant glyphs 34, final cards 28, echo pool 118
- Workload: lesson payload glyph 1, final 0, quiz 10; Today route due 89, served 40/40, Consolidation day
- Surface audit: Hear & Pick Thai 92 items -> 10/10 PASS; Spell It 62 items -> 8/8 PASS; Echo 118 items -> 8/8 PASS; Sound Twins 11 sets -> 10/10 PASS; Tone listening 11 items -> 8/8 PASS; Mixed review 338 questions -> 10/10 PASS; Reading/stories 6 stories -> 1/1 PASS; Chunk this word 8 items -> 8/8 PASS; Seen in the wild 4 signs -> 4/4 PASS; Font Shock 4 items -> 4/8 PASS; Mouth Coach 4 cards -> 4/4 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, tone-rule, reading, chunk, font-shock
- Quiz prompts:
  - listen: Listen: which Thai did you hear? -> ระวัง
  - mcq: What does ๆ do? -> Repeats the previous word
  - final-job: Ending job: what sound does this letter make at the end? -> -ng
  - mcq: How does this sign read? -> thaang-khâo
  - mcq: How does this sign read? -> thaang-òrk
  - final: Ending job: what sound does ง make here? -> -ng
  - live-dead: Sound feel: live or dead? -> Live
  - mcq: The first syllable ระ is live or dead? -> Dead
  - final-job: Ending job: what sound does this letter make at the end? -> -k
  - listen: Listen: which Thai did you hear? -> ทางออก
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
- Quiz axes: final-job 3, vowel-order 1, final 1, listen 2, mcq 3, live-dead 1
- Review after lesson: glyph cards 62, start-consonant glyphs 34, final cards 28, echo pool 122
- Workload: lesson payload glyph 1, final 0, quiz 11; Today route due 90, served 40/40, Consolidation day
- Surface audit: Hear & Pick Thai 96 items -> 10/10 PASS; Spell It 66 items -> 8/8 PASS; Echo 122 items -> 8/8 PASS; Sound Twins 11 sets -> 10/10 PASS; Tone listening 11 items -> 8/8 PASS; Mixed review 349 questions -> 10/10 PASS; Reading/stories 10 stories -> 1/1 PASS; Chunk this word 11 items -> 8/8 PASS; Seen in the wild 10 signs -> 10/10 PASS; Font Shock 10 items -> 8/8 PASS; Mouth Coach 4 cards -> 4/4 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, tone-rule, reading, chunk, font-shock
- Quiz prompts:
  - final-job: Ending job: what sound does this letter make at the end? -> -n
  - vowel-order: Vowel order: how do you read the vowel shape here? -> written before, spoken after
  - final: Ending job: what sound does ด make here? -> -t
  - listen: Listen: which Thai did you hear? -> เปิด
  - final-job: Ending job: what sound does this letter make at the end? -> -m
  - mcq: How does this sign read? -> hâam
  - listen: Listen: which Thai did you hear? -> ปิด
  - mcq: <span class='classchip mid'>mid class</span> + dead syllable gives which tone? -> Low
  - mcq: How does this read? -> aa-hǎan
  - live-dead: Sound feel: live or dead? -> Dead
  - final-job: Ending job: what sound does this letter make at the end? -> -t
- Words:
  - เปิด (bpèrt) - core; final ด -t; written before, spoken after
  - ปิด (bpìt) - core; final ด -t
  - ห้าม (hâam) - core; final ม -m
  - อาหาร (aa-hǎan) - core; final ร -n
