# Phase 1 Audit

Generated: 2026-08-31T14:55:04.762Z
App version: v8.4.1
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
- PASS v601FirstRun
- PASS v602AnswerFeedback
- PASS v603ProgressInteraction
- PASS v525RouteSimplification
- PASS v526ToneSignReview
- PASS v53ReviewGovernor
- PASS v531TtsSafety
- PASS v54Fluency
- PASS contentPedagogyHardening
- PASS weaknessTargeting
- PASS productionPass
- PASS automaticity
- PASS captureLoop
- PASS v65Feedback
- PASS v66DataSafety
- PASS v67CompletionJourney
- PASS v70Onboarding
- PASS v71VisualSound
- PASS themeContracts
- PASS v72Shop
- PASS v73ReadingMileage
- PASS v74StreetRead
- PASS timeAwareRoute
- PASS freshDecode
- PASS v77ColourFade
- PASS v78RequiredLoop
- PASS v79RetentionDecode
- PASS v8Visual
- PASS v81Arcade
- PASS v841ConversationTeaching

## Prerequisite Audit
- Lesson prerequisite issues: 0
- Pool prerequisite issues: 0
- Role-contract issues: 0
- No unresolved prerequisite issues.

## Workload Audit

Lesson payload is the content added if that lesson is taken. Today governor route is the daily serving plan: review is capped by SRS, axis review cards are staged into the due deck, due 25-44 recommends review without blocking a lesson, due >= 45 creates a consolidation day, and Lessons 1-3 remain shorter foundation days.

v8.4.1 repairs the Week 1 teaching boundary: every new reply is first displayed as a complete Thai phrase with English meaning, pronunciation spelling and a correct-order part-by-part explanation, and its full model audio must play before sentence building begins. The v8.4 builder, role voices, explicit pauses, 10/12/12-minute lessons, schema-2 authority, exact gate forms, delayed evidence, resume, recovery, male-polite Thai and optional reading boundary remain preserved. validateV841ConversationTeachingContracts keeps the generated audit at 60 validators.

v8.0.0 is the Bangkok Street Atlas visual-completion pass: the generic aurora/glass/gradient layer is replaced by a code-native route-map shell, printed Today ticket and transit rail, compact practice field guide, workbook panels, six-stop tone board, reading signboards, collectible letter wall, coloured progress stamps, ruled lesson sheet, solid navigation and real theme swatches; existing progress becomes more visible without changing rewards, retention or route logic; decorative Thai marks are aria-hidden, class colours remain reserved for class meaning, all themes keep their atmosphere and validateV8VisualContracts guards the identity with no learner-state, curriculum, SRS, blocker, grading, economy, audio/font asset, runtime-network or service-worker change. v7.9.0 is the sealed retention-transfer pass: RETENTION_DECODE_BANK adds 96 real, tone-verified words that never appear outside delayed recall; Lessons 4-24 each have two +1-day words and two different +7-day words, contributing three neutral transfer questions while the existing 6/8-question size and 80% bar stay fixed; twelve further words are reserved for a 14-question 30-day cold decode at 85% after Phase 1; first-attempt percentages remain recorded, failure never removes completion and repair uses the separate maintenance Fresh decode pool; only optional nested phase1Completion retention fields and firstPct fields inside existing retention records are added. v7.8.0 is the required-surface mastery-loop pass: lesson quizzes cycle first-attempt misses until each is answered correctly once with scoring from the first pass only, mastery checkpoints and unit bosses gain one atomic live-dead/vowel-length-then-tone structure chain per build, the final completion checkpoint replaces its standalone 2-option structure singles with route chains, one lesson-quiz filler slot and the maintenance Fresh decode sample are weakness-first from existing errorProfile diagnostics with empty profiles degrading to random, and no SRS, blocker, economy, audio, network, service-worker or learner-state-schema change is made. v7.7.0 is the tone colour-fade pass: from Unit C, taught-word tone questions in lesson quizzes, mastery checkpoints, unit bosses and the final completion checkpoint render plain uncoloured Thai prompts with the class badge kept behind the TONE_FADE_KEEPS_BADGE constant and colour restored in post-answer feedback; lesson quizzes add a colour-assisted second attempt whose recovery counts for the lesson score while gates stay one-shot; one tone question is guaranteed per Unit C+ lesson quiz; review cards, tone drills, mixed review and Quick decode keep colours; no SRS, blocker, economy, audio, network or learner-state-schema change. v7.6.0 is the fresh-decode transfer pass: two reserved tone-verified corpora of never-taught real words (FRESH_DECODE 120, ASSESSMENT_BANK 56) certify decoding transfer instead of word memory; lesson quizzes from Lesson 4 add fresh route/read questions, mastery checkpoints and the Phase 1 completion checkpoint add sealed assessment-bank words, and completed-course maintenance gains Fresh decode. The remaining v7 release chain stays in place without changing curriculum, SRS intervals, lesson blockers, economy, audio/font assets, runtime network features or service-worker cache naming.

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
| 4 | glyph 3, final 0, quiz 14 | glyph 17, final 7, tone 4, twins 2, echo 23, stories 1, fluency 0, chunks 0, signs 0, font 0, mouth 1 | due 24 -> served 24 / cap 30; Lesson day | Reading room or drill |
| 5 | glyph 5, final 4, quiz 17 | glyph 22, final 11, tone 4, twins 2, echo 27, stories 1, fluency 0, chunks 0, signs 0, font 0, mouth 1 | due 33 -> served 30 / cap 30; Lesson day | Reading room or drill |
| 6 | glyph 2, final 2, quiz 14 | glyph 24, final 13, tone 6, twins 3, echo 35, stories 2, fluency 1, chunks 0, signs 0, font 0, mouth 1 | due 37 -> served 30 / cap 30; Lesson day | Reading room or drill |
| 7 | glyph 4, final 3, quiz 16 | glyph 28, final 16, tone 6, twins 7, echo 47, stories 2, fluency 1, chunks 0, signs 0, font 0, mouth 1 | due 44 -> served 30 / cap 30; Lesson day | Reading room or drill |
| 8 | glyph 4, final 4, quiz 18 | glyph 32, final 20, tone 6, twins 7, echo 51, stories 3, fluency 1, chunks 0, signs 0, font 0, mouth 1 | due 52 -> served 30 / cap 30; Consolidation day | Reading room or drill |
| 9 | glyph 4, final 2, quiz 18 | glyph 36, final 22, tone 9, twins 8, echo 60, stories 4, fluency 1, chunks 0, signs 0, font 0, mouth 1 | due 58 -> served 30 / cap 30; Consolidation day | Reading room or drill |
| 10 | glyph 4, final 0, quiz 14 | glyph 40, final 22, tone 9, twins 8, echo 64, stories 5, fluency 2, chunks 0, signs 0, font 0, mouth 1 | due 62 -> served 30 / cap 30; Consolidation day | Reading room or drill |
| 11 | glyph 2, final 0, quiz 14 | glyph 42, final 22, tone 9, twins 8, echo 68, stories 5, fluency 2, chunks 0, signs 0, font 0, mouth 1 | due 64 -> served 30 / cap 30; Consolidation day | Reading room or drill |
| 12 | glyph 2, final 0, quiz 14 | glyph 44, final 22, tone 9, twins 8, echo 72, stories 6, fluency 2, chunks 0, signs 0, font 0, mouth 2 | due 66 -> served 30 / cap 30; Consolidation day | Reading room or drill |
| 13 | glyph 0, final 0, quiz 17 | glyph 44, final 22, tone 9, twins 8, echo 76, stories 7, fluency 3, chunks 0, signs 0, font 0, mouth 3 | due 66 -> served 30 / cap 30; Consolidation day | Reading room or drill |
| 14 | glyph 2, final 0, quiz 14 | glyph 46, final 22, tone 9, twins 8, echo 80, stories 8, fluency 3, chunks 0, signs 0, font 0, mouth 3 | due 68 -> served 30 / cap 30; Consolidation day | Reading room or drill |
| 15 | glyph 0, final 0, quiz 15 | glyph 46, final 22, tone 9, twins 8, echo 82, stories 8, fluency 3, chunks 0, signs 0, font 0, mouth 4 | due 68 -> served 30 / cap 30; Consolidation day | Reading room or drill |
| 16 | glyph 1, final 0, quiz 15 | glyph 47, final 22, tone 9, twins 8, echo 86, stories 9, fluency 3, chunks 0, signs 0, font 0, mouth 4 | due 69 -> served 30 / cap 30; Consolidation day | Reading room or drill |
| 17 | glyph 0, final 0, quiz 14 | glyph 47, final 22, tone 11, twins 10, echo 93, stories 12, fluency 4, chunks 0, signs 0, font 0, mouth 4 | due 69 -> served 30 / cap 30; Consolidation day | Reading room or drill |
| 18 | glyph 0, final 0, quiz 16 | glyph 47, final 22, tone 11, twins 10, echo 97, stories 14, fluency 4, chunks 0, signs 0, font 0, mouth 8 | due 69 -> served 30 / cap 30; Consolidation day | Reading room or drill |
| 19 | glyph 0, final 0, quiz 16 | glyph 47, final 22, tone 11, twins 10, echo 101, stories 16, fluency 4, chunks 0, signs 0, font 0, mouth 8 | due 69 -> served 30 / cap 30; Consolidation day | Reading room or drill |
| 20 | glyph 8, final 5, quiz 23 | glyph 55, final 27, tone 11, twins 10, echo 105, stories 17, fluency 4, chunks 3, signs 0, font 0, mouth 8 | due 82 -> served 30 / cap 30; Consolidation day | Reading room or drill |
| 21 | glyph 2, final 1, quiz 18 | glyph 57, final 28, tone 11, twins 10, echo 109, stories 17, fluency 4, chunks 3, signs 0, font 0, mouth 8 | due 85 -> served 30 / cap 30; Consolidation day | Reading room or drill |
| 22 | glyph 3, final 0, quiz 14 | glyph 60, final 28, tone 11, twins 11, echo 115, stories 18, fluency 4, chunks 4, signs 0, font 0, mouth 8 | due 88 -> served 30 / cap 30; Consolidation day | Reading room or drill |
| 23 | glyph 1, final 0, quiz 14 | glyph 61, final 28, tone 11, twins 11, echo 119, stories 19, fluency 5, chunks 8, signs 4, font 4, mouth 10 | due 89 -> served 30 / cap 30; Consolidation day | Reading room or drill |
| 24 | glyph 1, final 0, quiz 16 | glyph 62, final 28, tone 11, twins 11, echo 123, stories 25, fluency 6, chunks 11, signs 10, font 10, mouth 10 | due 90 -> served 30 / cap 30; Consolidation day | Reading room or drill |

## v5.4 Fluency Reads

- Lesson 6: First smooth read (cumulative) · 8 Thai items · check: Which word in the read has a Thai tone mark?
- Lesson 10: Price fragment (controlled real-world) · 6 Thai items · check: Which word has the final -t ending job?
- Lesson 13: Live/dead read (cumulative) · 9 Thai items · check: Which word is a dead syllable with a final -t sound?
- Lesson 17: Silent-leader read (cumulative) · 10 Thai items · check: Which word uses silent ห to lead a low-class consonant?
- Lesson 23: Public sign read (controlled real-world) · 4 Thai items · check: Which sign word is built from ทาง + ออก?
- Lesson 24: Bangkok end read (controlled real-world) · 8 Thai items · check: Which word has the เ◌ิ pattern?
- Final checkpoint: 23 questions; 85% quiz plus smooth or slow-but-correct final controlled read.

## Reading Word Recurrence

Corpus: Reading-room story tokens plus fluency-read tokens. Status is OK at 4+ encounters, or 6+ for true-cluster words.

| Word | Reading | Earliest gate | Encounters | Cluster | Status |
| --- | --- | --- | --- | --- | --- |
| กา | gaa | l4 | 14 | no | OK |
| กิน | gin | l4 | 16 | no | OK |
| นาน | naan | l4 | 9 | no | OK |
| บ้าน | bâan | l4 | 9 | no | OK |
| บิน | bin | l4 | 4 | no | OK |
| ไป | bpai | l4 | 10 | no | OK |
| มา | maa | l4 | 16 | no | OK |
| มาก | mâak | l4 | 14 | no | OK |
| ข้าว | khâao | l6 | 12 | no | OK |
| ดี | dii | l6 | 6 | no | OK |
| นา | naa | l6 | 6 | no | OK |
| มี | mii | l6 | 5 | no | OK |
| ไม่ | mâi | l6 | 10 | no | OK |
| ยาย | yaai | l6 | 6 | no | OK |
| ไล่ | lâi | l6 | 4 | no | OK |
| ชอบ | chôrp | l9 | 5 | no | OK |
| ผม | phǒm | l9 | 16 | no | OK |
| ผัก | phàk | l9 | 6 | no | OK |
| พ่อ | phôr | l9 | 5 | no | OK |
| เรา | rao | l9 | 24 | no | OK |
| ถูก | thùuk | l10 | 4 | no | OK |
| บาท | bàat | l10 | 6 | no | OK |
| แพง | phaaeng | l10 | 5 | no | OK |
| เขา | khǎo | l13 | 7 | no | OK |
| ดีใจ | dii-jai | l13 | 4 | no | OK |
| ทำ | tham | l13 | 4 | no | OK |
| พูด | phûut | l13 | 6 | no | OK |
| ฟัง | fang | l13 | 4 | no | OK |
| วันนี้ | wan-níi | l13 | 4 | no | OK |
| คน | khon | l17 | 6 | no | OK |
| ใน | nai | l17 | 4 | no | OK |
| พา | phaa | l17 | 4 | no | OK |
| ไฟฟ้า | fai-fáa | l17 | 4 | no | OK |
| รถ | rót | l17 | 5 | no | OK |
| รอ | ror | l17 | 6 | no | OK |
| หมา | mǎa | l17 | 14 | no | OK |
| ไหน | nǎi | l17 | 4 | no | OK |
| อยาก | yàak | l17 | 4 | no | OK |
| อยู่ | yùu | l17 | 12 | no | OK |
| ครับ | khráp | l18 | 7 | yes | OK |
| ครู | khruu | l18 | 12 | yes | OK |
| ปลา | bplaa | l18 | 6 | yes | OK |
| ซื้อ | súue | l19 | 4 | no | OK |
| ถุง | thǔng | l19 | 4 | no | OK |
| น้ำ | náam | l19 | 5 | no | OK |
| เย็น | yen | l19 | 4 | no | OK |
| ร้าน | ráan | l19 | 5 | no | OK |
| เอา | ao | l19 | 6 | no | OK |
| ทางเข้า | thaang-khâo | l23 | 4 | no | OK |
| ทางออก | thaang-òrk | l23 | 5 | no | OK |
| ระวัง | rá-wang | l23 | 2 | no | LOW |
| ห้องน้ำ | hôrng-náam | l23 | 3 | no | LOW |
| กรุงเทพ | grung-thêep | l24 | 2 | yes | LOW |
| ไก่ | gài | l24 | 1 | no | LOW |
| ใจดี | jai-dii | l24 | 1 | no | LOW |
| ได้ | dâi | l24 | 3 | no | LOW |
| ติด | dtìt | l24 | 1 | no | LOW |
| ทุก | thúk | l24 | 2 | no | LOW |
| ไทย | thai | l24 | 4 | no | OK |
| ปิด | bpìt | l24 | 2 | no | LOW |
| เปล่า | bplàao | l24 | 1 | no | LOW |
| เปิด | bpèrt | l24 | 3 | no | LOW |
| ฝน | fǒn | l24 | 2 | no | LOW |
| เพื่อน | phûean | l24 | 2 | no | LOW |
| ภาษา | phaa-sǎa | l24 | 3 | no | LOW |
| เรียน | rian | l24 | 3 | no | LOW |
| วัน | wan | l24 | 2 | no | LOW |
| ศูนย์ | sǔun | l24 | 1 | no | LOW |
| สนุก | sà-nùk | l24 | 1 | no | LOW |
| สอน | sǒrn | l24 | 2 | no | LOW |
| ห้อง | hôrng | l24 | 2 | no | LOW |
| ห้าม | hâam | l24 | 2 | no | LOW |
| อ่าน | àan | l24 | 3 | no | LOW |
| อาหาร | aa-hǎan | l24 | 4 | no | OK |

## v6.3 Decode Gym

Seeded word-reading reps. Eligibility is gate-checked through the same prerequisite machinery as controlled reading surfaces; tone column is derived from the transliteration and verified against the route grid in the startup contract.

| Gate | Thai | Reading | Tone | Verified |
| --- | --- | --- | --- | --- |
| l4 | ปาก | bpàak | Low | yes |
| l4 | อีก | ìik | Low | yes |
| l4 | อาบ | àap | Low | yes |
| l5 | ยา | yaa | Mid | yes |
| l6 | ขา | khǎa | Rising | yes |
| l7 | ไม้ | máai | High | yes |
| l8 | ฟ้า | fáa | High | yes |
| l8 | ไฟ | fai | Mid | yes |
| l9 | ผี | phǐi | Rising | yes |
| l9 | ฝัน | fǎn | Rising | yes |
| l9 | ลม | lom | Mid | yes |
| l9 | นม | nom | Mid | yes |
| l9 | ค่า | khâa | Falling | yes |
| l10 | แดง | daaeng | Mid | yes |
| l10 | แขน | khǎaen | Rising | yes |
| l11 | ลุง | lung | Mid | yes |
| l12 | ดำ | dam | Mid | yes |
| l12 | ใจ | jai | Mid | yes |
| l12 | ขำ | khǎm | Rising | yes |
| l13 | ร้อน | rórn | High | yes |
| l13 | หก | hòk | Low | yes |
| l13 | เก้า | gâo | Falling | yes |
| l14 | สิบ | sìp | Low | yes |
| l14 | แปด | bpàaet | Low | yes |
| l15 | พัน | phan | Mid | yes |
| l15 | ร้อย | rói | High | yes |
| l16 | เย็น | yen | Mid | yes |
| l16 | เจ็ด | jèt | Low | yes |
| l16 | เค็ม | khem | Mid | yes |
| l16 | เผ็ด | phèt | Low | yes |
| l17 | หมอ | mǒr | Rising | yes |
| l17 | หมู | mǔu | Rising | yes |
| l17 | หนู | nǔu | Rising | yes |
| l17 | หวาน | wǎan | Rising | yes |
| l17 | หลัง | lǎng | Rising | yes |
| l17 | หลับ | làp | Low | yes |
| l18 | หมด | mòt | Low | yes |
| l18 | หยุด | yùt | Low | yes |
| l18 | ซื้อ | súue | High | yes |
| l18 | ขาย | khǎai | Rising | yes |
| l18 | กลาง | glaang | Mid | yes |
| l18 | กลับ | glàp | Low | yes |
| l18 | ปรับ | bpràp | Low | yes |
| l19 | ร้าน | ráan | High | yes |
| l19 | ถุง | thǔng | Rising | yes |
| l20 | ตรง | dtrong | Mid | yes |
| l20 | ยาก | yâak | Falling | yes |
| l21 | ง่าย | ngâai | Falling | yes |
| l21 | ของ | khǒrng | Rising | yes |
| l22 | เขียน | khǐan | Rising | yes |
| l22 | เสียง | sǐang | Rising | yes |
| l22 | เมื่อ | mûea | Falling | yes |
| l22 | เมือง | mueang | Mid | yes |
| l22 | เนื้อ | núea | High | yes |
| l22 | เดือน | duean | Mid | yes |
| l22 | วัว | wua | Mid | yes |
| l22 | หัว | hǔa | Rising | yes |
| l22 | กลัว | glua | Mid | yes |
| l22 | ครัว | khrua | Mid | yes |
| l24 | เดิน | dern | Mid | yes |
| l24 | เกิด | gèrt | Low | yes |
| l24 | เงิน | ngern | Mid | yes |
| l24 | เพิ่ม | phêrm | Falling | yes |

## v7.6 Fresh-decode transfer corpora

Never-taught real words that certify decoding transfer rather than word memory. FRESH_DECODE feeds lesson quizzes (l4+) and the maintenance block with class-coloured prompts; ASSESSMENT_BANK is sealed for mastery checkpoints and the Phase 1 completion checkpoint with neutral prompts. Freshness (absence from every other app surface), tone routes, gate decodability and supply floors are re-verified per commit by tools/fresh-decode-check.js.

- lessonQuiz: 3 fresh words / 4 questions per lesson quiz from l4, class-coloured prompts
- masteryCheckpoint: 3 assessment-bank words / 4 questions per checkpoint, neutral prompts
- finalCheckpoint: 5 assessment-bank words / 6 questions incl >=1 cluster and >=1 silent leader, neutral prompts
- maintenance: 5 fresh words / 6 questions as a maintenance rotation option

### FRESH_DECODE (lesson quizzes + maintenance)

| Gate | Thai | Reading | Tone | Verified |
| --- | --- | --- | --- | --- |
| l4 | กี่ | gìi | Low | yes |
| l4 | ก้าน | gâan | Falling | yes |
| l4 | ดิบ | dìp | Low | yes |
| l4 | ด่า | dàa | Low | yes |
| l4 | ทา | thaa | Mid | yes |
| l4 | นาม | naam | Mid | yes |
| l4 | บาน | baan | Mid | yes |
| l4 | ปีน | bpiin | Mid | yes |
| l4 | ปู | bpuu | Mid | yes |
| l4 | ปูน | bpuun | Mid | yes |
| l4 | หาม | hǎam | Rising | yes |
| l5 | ราย | raai | Mid | yes |
| l5 | ราว | raao | Mid | yes |
| l5 | ริม | rim | Mid | yes |
| l5 | รีบ | rîip | Falling | yes |
| l5 | ลา | laa | Mid | yes |
| l5 | เดา | dao | Mid | yes |
| l5 | เบา | bao | Mid | yes |
| l5 | เมา | mao | Mid | yes |
| l6 | ขี่ | khìi | Low | yes |
| l6 | ขูด | khùut | Low | yes |
| l6 | ล่า | lâa | Falling | yes |
| l6 | สาย | sǎai | Rising | yes |
| l6 | สู้ | sûu | Falling | yes |
| l6 | เสา | sǎo | Rising | yes |
| l7 | กัด | gàt | Low | yes |
| l7 | จัด | jàt | Low | yes |
| l7 | จับ | jàp | Low | yes |
| l7 | ชัด | chát | High | yes |
| l7 | ดัง | dang | Mid | yes |
| l7 | นั่ง | nâng | Falling | yes |
| l7 | ปั้น | bpân | Falling | yes |
| l7 | วัด | wát | High | yes |
| l8 | ตัด | dtàt | Low | yes |
| l8 | ตาม | dtaam | Mid | yes |
| l8 | ตี | dtii | Mid | yes |
| l8 | ต่อ | dtòr | Low | yes |
| l8 | ถัง | thǎng | Rising | yes |
| l8 | ไถ | thǎi | Rising | yes |
| l9 | ขน | khǒn | Rising | yes |
| l9 | คัน | khan | Mid | yes |
| l9 | คาง | khaang | Mid | yes |
| l9 | ซอง | sorng | Mid | yes |
| l9 | ซัก | sák | High | yes |
| l9 | ผอม | phǒrm | Rising | yes |
| l9 | ฝาก | fàak | Low | yes |
| l10 | คืน | khuuen | Mid | yes |
| l10 | ตื่น | dtùuen | Low | yes |
| l10 | มืด | mûuet | Falling | yes |
| l10 | ลืม | luuem | Mid | yes |
| l10 | แก่ | gàae | Low | yes |
| l10 | แก้ | gâae | Falling | yes |
| l10 | แขก | khàaek | Low | yes |
| l10 | แบบ | bàaep | Low | yes |
| l11 | กะ | gà | Low | yes |
| l11 | ดุ | dù | Low | yes |
| l11 | พุง | phung | Mid | yes |
| l11 | ละ | lá | High | yes |
| l11 | สุก | sùk | Low | yes |
| l11 | หุง | hǔng | Rising | yes |
| l12 | คำ | kham | Mid | yes |
| l12 | ตำ | dtam | Mid | yes |
| l12 | ถ้ำ | thâm | Falling | yes |
| l12 | ใด | dai | Mid | yes |
| l12 | ใต้ | dtâi | Falling | yes |
| l12 | ใบ | bai | Mid | yes |
| l13 | ผ้า | phâa | Falling | yes |
| l13 | ยิ้ม | yím | High | yes |
| l13 | ลาย | laai | Mid | yes |
| l13 | ล้าน | láan | High | yes |
| l14 | ป๋า | bpǎa | Rising | yes |
| l14 | เก๋ | gěe | Rising | yes |
| l14 | โจ๊ก | jóhk | High | yes |
| l15 | งา | ngaa | Mid | yes |
| l15 | ชา | chaa | Mid | yes |
| l15 | ลัง | lang | Mid | yes |
| l16 | เก็บ | gèp | Low | yes |
| l16 | เข็ม | khěm | Rising | yes |
| l16 | เจ็บ | jèp | Low | yes |
| l16 | เช็ด | chét | High | yes |
| l16 | เต็ม | dtem | Mid | yes |
| l17 | หนา | nǎa | Rising | yes |
| l17 | หมอก | mòrk | Low | yes |
| l17 | หมาย | mǎai | Rising | yes |
| l17 | หมึก | mùek | Low | yes |
| l17 | หยิบ | yìp | Low | yes |
| l17 | หวี | wǐi | Rising | yes |
| l18 | กราบ | gràap | Low | yes |
| l18 | กลอง | glorng | Mid | yes |
| l18 | คลอง | khlorng | Mid | yes |
| l18 | ปลูก | bplùuk | Low | yes |
| l18 | พลาด | phlâat | Falling | yes |
| l19 | กลืน | gluuen | Mid | yes |
| l19 | ขวาง | khwǎang | Rising | yes |
| l19 | ปลอม | bplorm | Mid | yes |
| l19 | ปลาย | bplaai | Mid | yes |
| l20 | ธูป | thûup | Falling | yes |
| l20 | ศาล | sǎan | Rising | yes |
| l20 | หญ้า | yâa | Falling | yes |
| l20 | ฮา | haa | Mid | yes |
| l20 | เจอ | jer | Mid | yes |
| l21 | ฉาบ | chàap | Low | yes |
| l21 | ฉีก | chìik | Low | yes |
| l21 | ฉุน | chǔn | Rising | yes |
| l22 | บัว | bua | Mid | yes |
| l22 | รั่ว | rûa | Falling | yes |
| l22 | เชือก | chûeak | Falling | yes |
| l22 | เตียง | dtiang | Mid | yes |
| l22 | เลี้ยง | líang | High | yes |
| l22 | เลือด | lûeat | Falling | yes |
| l23 | อื่น | ùuen | Low | yes |
| l23 | แจก | jàaek | Low | yes |
| l23 | แถว | thǎaeo | Rising | yes |
| l23 | โชค | chôhk | Falling | yes |
| l24 | เชิง | cherng | Mid | yes |
| l24 | เดิม | derm | Mid | yes |
| l24 | เติม | dterm | Mid | yes |
| l24 | เนิน | nern | Mid | yes |
| l24 | เบิก | bèrk | Low | yes |
| l24 | เพลิน | phlern | Mid | yes |

### ASSESSMENT_BANK (checkpoints + final, sealed)

| Gate | Thai | Reading | Tone | Verified |
| --- | --- | --- | --- | --- |
| l4 | ที | thii | Mid | yes |
| l4 | น้า | náa | High | yes |
| l4 | บ่า | bàa | Low | yes |
| l4 | มีด | mîit | Falling | yes |
| l4 | หู | hǔu | Rising | yes |
| l4 | อิ่ม | ìm | Low | yes |
| l5 | ยาม | yaam | Mid | yes |
| l6 | สาว | sǎao | Rising | yes |
| l7 | งัด | ngát | High | yes |
| l7 | ชิม | chim | Mid | yes |
| l7 | สั่ง | sàng | Low | yes |
| l7 | หั่น | hàn | Low | yes |
| l8 | ตับ | dtàp | Low | yes |
| l8 | พัด | phát | High | yes |
| l8 | เตา | dtao | Mid | yes |
| l9 | ผ่า | phàa | Low | yes |
| l10 | ถึง | thǔeng | Rising | yes |
| l10 | นึก | núek | High | yes |
| l10 | ยืน | yuuen | Mid | yes |
| l11 | จุด | jùt | Low | yes |
| l11 | มุม | mum | Mid | yes |
| l11 | ลุก | lúk | High | yes |
| l12 | จำ | jam | Mid | yes |
| l12 | ใส | sǎi | Rising | yes |
| l13 | คม | khom | Mid | yes |
| l13 | ปีก | bpìik | Low | yes |
| l13 | ยำ | yam | Mid | yes |
| l13 | ลำ | lam | Mid | yes |
| l14 | ซ้อม | sórm | High | yes |
| l14 | แยก | yâaek | Falling | yes |
| l15 | ค้าง | kháang | High | yes |
| l15 | แห้ง | hâaeng | Falling | yes |
| l16 | เย็บ | yép | High | yes |
| l16 | เห็น | hěn | Rising | yes |
| l17 | หนัก | nàk | Low | yes |
| l17 | หนาว | nǎao | Rising | yes |
| l17 | หยอด | yòrt | Low | yes |
| l18 | กลม | glom | Mid | yes |
| l18 | ขวา | khwǎa | Rising | yes |
| l18 | พริก | phrík | High | yes |
| l19 | คลาน | khlaan | Mid | yes |
| l19 | หวัง | wǎng | Rising | yes |
| l19 | ไหว | wǎi | Rising | yes |
| l20 | ภาพ | phâap | Falling | yes |
| l20 | ศอก | sòrk | Low | yes |
| l20 | ศึก | sùek | Low | yes |
| l21 | ฉาย | chǎai | Rising | yes |
| l21 | ฉีด | chìit | Low | yes |
| l22 | ชั่ว | chûa | Falling | yes |
| l22 | มัว | mua | Mid | yes |
| l22 | เกลียด | glìat | Low | yes |
| l22 | เดือด | dùeat | Low | yes |
| l22 | เปลือก | bplùeak | Low | yes |
| l22 | เพียง | phiang | Mid | yes |
| l24 | เกิน | gern | Mid | yes |
| l24 | เชิญ | chern | Mid | yes |

## v7.9 Sealed retention-decode corpus

These real words appear only in delayed retention. Lesson-stage assignments are fixed: a +1 word cannot reappear at +7 or in another lesson check. The 30-day subset is isolated from all earlier surfaces.

- retained: +1 day: 2 sealed words / 3 neutral transfer questions inside the existing 6-question check from l4
- stabilised: +7 day: 2 different sealed words / 3 neutral transfer questions inside the existing 8-question check from l4
- cold30: +30 day after Phase 1: all 12 reserved words / 14 neutral questions at 85%; failure keeps completion and routes to Fresh decode repair
- state: optional phase1Completion.firstPassedAt + phase1Completion.retention30; per-lesson firstPct stored under existing retention records

| Gate | Stage | Thai | Reading | Tone | Verified |
| --- | --- | --- | --- | --- | --- |
| l4 | retained | ดาม | daam | Mid | yes |
| l4 | retained | บูด | bùut | Low | yes |
| l4 | stabilised | โบก | bòhk | Low | yes |
| l4 | stabilised | นิ่ม | nîm | Falling | yes |
| l5 | retained | รอด | rôrt | Falling | yes |
| l5 | retained | ลอย | loi | Mid | yes |
| l5 | stabilised | ราบ | râap | Falling | yes |
| l5 | stabilised | ลาม | laam | Mid | yes |
| l6 | retained | ขาด | khàat | Low | yes |
| l6 | retained | สาน | sǎan | Rising | yes |
| l6 | stabilised | สาด | sàat | Low | yes |
| l6 | stabilised | สอย | sǒi | Rising | yes |
| l7 | retained | จาม | jaam | Mid | yes |
| l7 | retained | จูบ | jùup | Low | yes |
| l7 | stabilised | ชิง | ching | Mid | yes |
| l7 | stabilised | งาม | ngaam | Mid | yes |
| l8 | retained | ต้อน | dtôn | Falling | yes |
| l8 | retained | ถีบ | thìip | Low | yes |
| l8 | stabilised | พัง | phang | Mid | yes |
| l8 | stabilised | ฟาด | fâat | Falling | yes |
| l9 | retained | คาบ | khâap | Falling | yes |
| l9 | retained | คอย | khoi | Mid | yes |
| l9 | stabilised | ผูก | phùuk | Low | yes |
| l9 | stabilised | ซน | son | Mid | yes |
| l10 | retained | ขืน | khǔuen | Rising | yes |
| l10 | retained | ตึก | dtùek | Low | yes |
| l10 | stabilised | ผืน | phǔuen | Rising | yes |
| l10 | stabilised | ซึม | suem | Mid | yes |
| l11 | retained | จุก | jùk | Low | yes |
| l11 | retained | บุก | bùk | Low | yes |
| l11 | stabilised | มุก | múk | High | yes |
| l11 | stabilised | ทุบ | thúp | High | yes |
| l12 | retained | งำ | ngam | Mid | yes |
| l12 | retained | รำ | ram | Mid | yes |
| l12 | stabilised | ย้ำ | yám | High | yes |
| l12 | stabilised | ช้ำ | chám | High | yes |
| l13 | retained | ค้ำ | kháam | High | yes |
| l13 | retained | งับ | ngáp | High | yes |
| l13 | stabilised | ซัด | sát | High | yes |
| l13 | stabilised | ข่ม | khòm | Low | yes |
| l14 | retained | จ๊ะ | já | High | yes |
| l14 | retained | โป๊ะ | bpó | High | yes |
| l14 | stabilised | เป๊ะ | bpé | High | yes |
| l14 | stabilised | ก๊อก | gók | High | yes |
| l15 | retained | ชื่น | chûuen | Falling | yes |
| l15 | retained | แช่ | châae | Falling | yes |
| l15 | stabilised | งอน | ngorn | Mid | yes |
| l15 | stabilised | ง้อ | ngór | High | yes |
| l16 | retained | เข็ด | khèt | Low | yes |
| l16 | retained | เล็บ | lép | High | yes |
| l16 | stabilised | เม็ด | mét | High | yes |
| l16 | stabilised | เป็น | bpen | Mid | yes |
| l17 | retained | หนี | nǐi | Rising | yes |
| l17 | retained | หนุ่ม | nùm | Low | yes |
| l17 | stabilised | หม้อ | môr | Falling | yes |
| l17 | stabilised | หลง | lǒng | Rising | yes |
| l18 | retained | กรง | grong | Mid | yes |
| l18 | retained | กรีด | grìit | Low | yes |
| l18 | stabilised | ครอง | khrorng | Mid | yes |
| l18 | stabilised | ปรุง | bprung | Mid | yes |
| l19 | retained | ทราม | saam | Mid | yes |
| l19 | retained | ทราย | saai | Mid | yes |
| l19 | stabilised | ทรุด | sút | High | yes |
| l19 | stabilised | ทรง | song | Mid | yes |
| l20 | retained | เฮง | heng | Mid | yes |
| l20 | retained | ฮิต | hít | High | yes |
| l20 | stabilised | ศพ | sòp | Low | yes |
| l20 | stabilised | ภาค | phâak | Falling | yes |
| l21 | retained | ฉิว | chǐo | Rising | yes |
| l21 | retained | เฉา | chǎo | Rising | yes |
| l21 | stabilised | ฆ้อง | khóng | High | yes |
| l21 | stabilised | กฎ | gòt | Low | yes |
| l22 | retained | เสีย | sǐa | Rising | yes |
| l22 | retained | เมีย | mia | Mid | yes |
| l22 | stabilised | เบื่อ | bùea | Low | yes |
| l22 | stabilised | ช่วย | chûai | Falling | yes |
| l23 | retained | บ่อย | bòi | Low | yes |
| l23 | retained | น้อย | nói | High | yes |
| l23 | stabilised | ค่อย | khôi | Falling | yes |
| l23 | stabilised | คุย | khui | Mid | yes |
| l24 | retained | เจิม | jerm | Mid | yes |
| l24 | retained | เริง | rerng | Mid | yes |
| l24 | stabilised | เพิ่ง | phôeng | Falling | yes |
| l24 | stabilised | เสริม | sǒerm | Rising | yes |
| l24 | cold30 | เฉิด | chòert | Low | yes |
| l24 | cold30 | ลุ | lú | High | yes |
| l24 | cold30 | เฉือน | chǔean | Rising | yes |
| l24 | cold30 | กลบ | glòp | Low | yes |
| l24 | cold30 | พรุน | phrun | Mid | yes |
| l24 | cold30 | สวม | sǔam | Rising | yes |
| l24 | cold30 | แขวน | khwǎaen | Rising | yes |
| l24 | cold30 | ตรึง | dtrueng | Mid | yes |
| l24 | cold30 | ปลอบ | bplòrp | Low | yes |
| l24 | cold30 | ครีบ | khrîip | Falling | yes |
| l24 | cold30 | เผลอ | phlǒr | Rising | yes |
| l24 | cold30 | เหิน | hǒern | Rising | yes |

## v6.4 Capture Loop

Wild captures use local typed input only. State key: captures; cap: 200.
Route boundary: routes derive only when the captured Thai is taught, prerequisite-safe and grid-derivable.
Entry points: Read / Capture Thai, Read / Wild deck, Bangkok Mission / Capture Thai.

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
| 1 | Write it | 0 items | 0 / 8 | 0 | PASS | N/A · Thai-keyboard recall unlocks after Lesson 2; no new SRS ids |
| 1 | Route talk | 0 items | 0 / 5 | 0 | PASS | N/A · spoken tone-route explanation unlocks after Lesson 13; no scoring |
| 1 | Decode Gym | 0 items | 0 / 10 | 0 | PASS | N/A · tone-verified non-lesson word mileage; no meanings and no SRS ids |
| 1 | Wild deck | 0 items | 0 / 8 | 0 | PASS | N/A · state-driven from local captures only; never creates SRS ids or blockers |
| 1 | Rare-letter class | 0 items | 0 / 0 | 0 | PASS | N/A · Lesson 21 class-only recognition material; definition-free and neutral before answer |
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
| 2 | Write it | 11 items | 8 / 8 | 0 | PASS | N/A · Thai-keyboard recall from existing g:/f: review eligibility; no new SRS ids |
| 2 | Route talk | 0 items | 0 / 5 | 0 | PASS | N/A · spoken tone-route explanation unlocks after Lesson 13; no scoring |
| 2 | Decode Gym | 0 items | 0 / 10 | 0 | PASS | N/A · tone-verified non-lesson word mileage; no meanings and no SRS ids |
| 2 | Wild deck | 0 items | 0 / 8 | 0 | PASS | N/A · state-driven from local captures only; never creates SRS ids or blockers |
| 2 | Rare-letter class | 0 items | 0 / 0 | 0 | PASS | N/A · Lesson 21 class-only recognition material; definition-free and neutral before answer |
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
| 3 | Write it | 15 items | 8 / 8 | 0 | PASS | N/A · Thai-keyboard recall from existing g:/f: review eligibility; no new SRS ids |
| 3 | Route talk | 0 items | 0 / 5 | 0 | PASS | N/A · spoken tone-route explanation unlocks after Lesson 13; no scoring |
| 3 | Decode Gym | 0 items | 0 / 10 | 0 | PASS | N/A · tone-verified non-lesson word mileage; no meanings and no SRS ids |
| 3 | Wild deck | 0 items | 0 / 8 | 0 | PASS | N/A · state-driven from local captures only; never creates SRS ids or blockers |
| 3 | Rare-letter class | 0 items | 0 / 0 | 0 | PASS | N/A · Lesson 21 class-only recognition material; definition-free and neutral before answer |
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
| 4 | Write it | 16 items | 8 / 8 | 0 | PASS | N/A · Thai-keyboard recall from existing g:/f: review eligibility; no new SRS ids |
| 4 | Route talk | 0 items | 0 / 5 | 0 | PASS | N/A · spoken tone-route explanation unlocks after Lesson 13; no scoring |
| 4 | Decode Gym | 3 items | 0 / 10 | 0 | PASS | N/A · tone-verified non-lesson word mileage; no meanings and no SRS ids |
| 4 | Wild deck | 0 items | 0 / 8 | 0 | PASS | N/A · state-driven from local captures only; never creates SRS ids or blockers |
| 4 | Rare-letter class | 0 items | 0 / 0 | 0 | PASS | N/A · Lesson 21 class-only recognition material; definition-free and neutral before answer |
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
| 5 | Write it | 24 items | 8 / 8 | 0 | PASS | N/A · Thai-keyboard recall from existing g:/f: review eligibility; no new SRS ids |
| 5 | Route talk | 0 items | 0 / 5 | 0 | PASS | N/A · spoken tone-route explanation unlocks after Lesson 13; no scoring |
| 5 | Decode Gym | 4 items | 0 / 10 | 0 | PASS | N/A · tone-verified non-lesson word mileage; no meanings and no SRS ids |
| 5 | Wild deck | 0 items | 0 / 8 | 0 | PASS | N/A · state-driven from local captures only; never creates SRS ids or blockers |
| 5 | Rare-letter class | 0 items | 0 / 0 | 0 | PASS | N/A · Lesson 21 class-only recognition material; definition-free and neutral before answer |
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
| 6 | Write it | 28 items | 8 / 8 | 0 | PASS | N/A · Thai-keyboard recall from existing g:/f: review eligibility; no new SRS ids |
| 6 | Route talk | 0 items | 0 / 5 | 0 | PASS | N/A · spoken tone-route explanation unlocks after Lesson 13; no scoring |
| 6 | Decode Gym | 5 items | 0 / 10 | 0 | PASS | N/A · tone-verified non-lesson word mileage; no meanings and no SRS ids |
| 6 | Wild deck | 0 items | 0 / 8 | 0 | PASS | N/A · state-driven from local captures only; never creates SRS ids or blockers |
| 6 | Rare-letter class | 0 items | 0 / 0 | 0 | PASS | N/A · Lesson 21 class-only recognition material; definition-free and neutral before answer |
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
| 7 | Write it | 34 items | 8 / 8 | 0 | PASS | N/A · Thai-keyboard recall from existing g:/f: review eligibility; no new SRS ids |
| 7 | Route talk | 0 items | 0 / 5 | 0 | PASS | N/A · spoken tone-route explanation unlocks after Lesson 13; no scoring |
| 7 | Decode Gym | 6 items | 6 / 10 | 0 | PASS | N/A · tone-verified non-lesson word mileage; no meanings and no SRS ids |
| 7 | Wild deck | 0 items | 0 / 8 | 0 | PASS | N/A · state-driven from local captures only; never creates SRS ids or blockers |
| 7 | Rare-letter class | 0 items | 0 / 0 | 0 | PASS | N/A · Lesson 21 class-only recognition material; definition-free and neutral before answer |
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
| 8 | Reading/stories | 3 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 8 | Fluency reads | 1 reads | 1 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 8 | Write it | 42 items | 8 / 8 | 0 | PASS | N/A · Thai-keyboard recall from existing g:/f: review eligibility; no new SRS ids |
| 8 | Route talk | 0 items | 0 / 5 | 0 | PASS | N/A · spoken tone-route explanation unlocks after Lesson 13; no scoring |
| 8 | Decode Gym | 8 items | 8 / 10 | 0 | PASS | N/A · tone-verified non-lesson word mileage; no meanings and no SRS ids |
| 8 | Wild deck | 0 items | 0 / 8 | 0 | PASS | N/A · state-driven from local captures only; never creates SRS ids or blockers |
| 8 | Rare-letter class | 0 items | 0 / 0 | 0 | PASS | N/A · Lesson 21 class-only recognition material; definition-free and neutral before answer |
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
| 9 | Reading/stories | 4 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 9 | Fluency reads | 1 reads | 1 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 9 | Write it | 48 items | 8 / 8 | 0 | PASS | N/A · Thai-keyboard recall from existing g:/f: review eligibility; no new SRS ids |
| 9 | Route talk | 0 items | 0 / 5 | 0 | PASS | N/A · spoken tone-route explanation unlocks after Lesson 13; no scoring |
| 9 | Decode Gym | 13 items | 10 / 10 | 0 | PASS | N/A · tone-verified non-lesson word mileage; no meanings and no SRS ids |
| 9 | Wild deck | 0 items | 0 / 8 | 0 | PASS | N/A · state-driven from local captures only; never creates SRS ids or blockers |
| 9 | Rare-letter class | 0 items | 0 / 0 | 0 | PASS | N/A · Lesson 21 class-only recognition material; definition-free and neutral before answer |
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
| 10 | Reading/stories | 5 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 10 | Fluency reads | 2 reads | 1 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 10 | Write it | 48 items | 8 / 8 | 0 | PASS | N/A · Thai-keyboard recall from existing g:/f: review eligibility; no new SRS ids |
| 10 | Route talk | 0 items | 0 / 5 | 0 | PASS | N/A · spoken tone-route explanation unlocks after Lesson 13; no scoring |
| 10 | Decode Gym | 15 items | 10 / 10 | 0 | PASS | N/A · tone-verified non-lesson word mileage; no meanings and no SRS ids |
| 10 | Wild deck | 0 items | 0 / 8 | 0 | PASS | N/A · state-driven from local captures only; never creates SRS ids or blockers |
| 10 | Rare-letter class | 0 items | 0 / 0 | 0 | PASS | N/A · Lesson 21 class-only recognition material; definition-free and neutral before answer |
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
| 11 | Reading/stories | 5 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 11 | Fluency reads | 2 reads | 1 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 11 | Write it | 48 items | 8 / 8 | 0 | PASS | N/A · Thai-keyboard recall from existing g:/f: review eligibility; no new SRS ids |
| 11 | Route talk | 0 items | 0 / 5 | 0 | PASS | N/A · spoken tone-route explanation unlocks after Lesson 13; no scoring |
| 11 | Decode Gym | 16 items | 10 / 10 | 0 | PASS | N/A · tone-verified non-lesson word mileage; no meanings and no SRS ids |
| 11 | Wild deck | 0 items | 0 / 8 | 0 | PASS | N/A · state-driven from local captures only; never creates SRS ids or blockers |
| 11 | Rare-letter class | 0 items | 0 / 0 | 0 | PASS | N/A · Lesson 21 class-only recognition material; definition-free and neutral before answer |
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
| 12 | Reading/stories | 6 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 12 | Fluency reads | 2 reads | 1 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 12 | Write it | 48 items | 8 / 8 | 0 | PASS | N/A · Thai-keyboard recall from existing g:/f: review eligibility; no new SRS ids |
| 12 | Route talk | 0 items | 0 / 5 | 0 | PASS | N/A · spoken tone-route explanation unlocks after Lesson 13; no scoring |
| 12 | Decode Gym | 19 items | 10 / 10 | 0 | PASS | N/A · tone-verified non-lesson word mileage; no meanings and no SRS ids |
| 12 | Wild deck | 0 items | 0 / 8 | 0 | PASS | N/A · state-driven from local captures only; never creates SRS ids or blockers |
| 12 | Rare-letter class | 0 items | 0 / 0 | 0 | PASS | N/A · Lesson 21 class-only recognition material; definition-free and neutral before answer |
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
| 13 | Reading/stories | 7 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 13 | Fluency reads | 3 reads | 1 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 13 | Write it | 48 items | 8 / 8 | 0 | PASS | N/A · Thai-keyboard recall from existing g:/f: review eligibility; no new SRS ids |
| 13 | Route talk | 26 items | 5 / 5 | 27 | PASS | N/A · spoken self-explanation of class/mark/live-dead/length/tone; no scoring |
| 13 | Decode Gym | 22 items | 10 / 10 | 0 | PASS | N/A · tone-verified non-lesson word mileage; no meanings and no SRS ids |
| 13 | Wild deck | 0 items | 0 / 8 | 0 | PASS | N/A · state-driven from local captures only; never creates SRS ids or blockers |
| 13 | Rare-letter class | 0 items | 0 / 0 | 0 | PASS | N/A · Lesson 21 class-only recognition material; definition-free and neutral before answer |
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
| 14 | Reading/stories | 8 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 14 | Fluency reads | 3 reads | 1 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 14 | Write it | 48 items | 8 / 8 | 0 | PASS | N/A · Thai-keyboard recall from existing g:/f: review eligibility; no new SRS ids |
| 14 | Route talk | 27 items | 5 / 5 | 30 | PASS | N/A · spoken self-explanation of class/mark/live-dead/length/tone; no scoring |
| 14 | Decode Gym | 24 items | 10 / 10 | 0 | PASS | N/A · tone-verified non-lesson word mileage; no meanings and no SRS ids |
| 14 | Wild deck | 0 items | 0 / 8 | 0 | PASS | N/A · state-driven from local captures only; never creates SRS ids or blockers |
| 14 | Rare-letter class | 0 items | 0 / 0 | 0 | PASS | N/A · Lesson 21 class-only recognition material; definition-free and neutral before answer |
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
| 15 | Reading/stories | 8 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 15 | Fluency reads | 3 reads | 1 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 15 | Write it | 48 items | 8 / 8 | 0 | PASS | N/A · Thai-keyboard recall from existing g:/f: review eligibility; no new SRS ids |
| 15 | Route talk | 30 items | 5 / 5 | 30 | PASS | N/A · spoken self-explanation of class/mark/live-dead/length/tone; no scoring |
| 15 | Decode Gym | 26 items | 10 / 10 | 0 | PASS | N/A · tone-verified non-lesson word mileage; no meanings and no SRS ids |
| 15 | Wild deck | 0 items | 0 / 8 | 0 | PASS | N/A · state-driven from local captures only; never creates SRS ids or blockers |
| 15 | Rare-letter class | 0 items | 0 / 0 | 0 | PASS | N/A · Lesson 21 class-only recognition material; definition-free and neutral before answer |
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
| 16 | Reading/stories | 9 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 16 | Fluency reads | 3 reads | 1 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 16 | Write it | 48 items | 8 / 8 | 0 | PASS | N/A · Thai-keyboard recall from existing g:/f: review eligibility; no new SRS ids |
| 16 | Route talk | 32 items | 5 / 5 | 32 | PASS | N/A · spoken self-explanation of class/mark/live-dead/length/tone; no scoring |
| 16 | Decode Gym | 30 items | 10 / 10 | 0 | PASS | N/A · tone-verified non-lesson word mileage; no meanings and no SRS ids |
| 16 | Wild deck | 0 items | 0 / 8 | 0 | PASS | N/A · state-driven from local captures only; never creates SRS ids or blockers |
| 16 | Rare-letter class | 0 items | 0 / 0 | 0 | PASS | N/A · Lesson 21 class-only recognition material; definition-free and neutral before answer |
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
| 17 | Reading/stories | 12 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 17 | Fluency reads | 4 reads | 1 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 17 | Write it | 48 items | 8 / 8 | 0 | PASS | N/A · Thai-keyboard recall from existing g:/f: review eligibility; no new SRS ids |
| 17 | Route talk | 33 items | 5 / 5 | 36 | PASS | N/A · spoken self-explanation of class/mark/live-dead/length/tone; no scoring |
| 17 | Decode Gym | 36 items | 10 / 10 | 0 | PASS | N/A · tone-verified non-lesson word mileage; no meanings and no SRS ids |
| 17 | Wild deck | 0 items | 0 / 8 | 0 | PASS | N/A · state-driven from local captures only; never creates SRS ids or blockers |
| 17 | Rare-letter class | 0 items | 0 / 0 | 0 | PASS | N/A · Lesson 21 class-only recognition material; definition-free and neutral before answer |
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
| 18 | Reading/stories | 14 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 18 | Fluency reads | 4 reads | 1 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 18 | Write it | 48 items | 8 / 8 | 0 | PASS | N/A · Thai-keyboard recall from existing g:/f: review eligibility; no new SRS ids |
| 18 | Route talk | 37 items | 5 / 5 | 36 | PASS | N/A · spoken self-explanation of class/mark/live-dead/length/tone; no scoring |
| 18 | Decode Gym | 43 items | 10 / 10 | 0 | PASS | N/A · tone-verified non-lesson word mileage; no meanings and no SRS ids |
| 18 | Wild deck | 0 items | 0 / 8 | 0 | PASS | N/A · state-driven from local captures only; never creates SRS ids or blockers |
| 18 | Rare-letter class | 0 items | 0 / 0 | 0 | PASS | N/A · Lesson 21 class-only recognition material; definition-free and neutral before answer |
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
| 19 | Reading/stories | 16 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 19 | Fluency reads | 4 reads | 1 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 19 | Write it | 48 items | 8 / 8 | 0 | PASS | N/A · Thai-keyboard recall from existing g:/f: review eligibility; no new SRS ids |
| 19 | Route talk | 39 items | 5 / 5 | 38 | PASS | N/A · spoken self-explanation of class/mark/live-dead/length/tone; no scoring |
| 19 | Decode Gym | 45 items | 10 / 10 | 0 | PASS | N/A · tone-verified non-lesson word mileage; no meanings and no SRS ids |
| 19 | Wild deck | 0 items | 0 / 8 | 0 | PASS | N/A · state-driven from local captures only; never creates SRS ids or blockers |
| 19 | Rare-letter class | 0 items | 0 / 0 | 0 | PASS | N/A · Lesson 21 class-only recognition material; definition-free and neutral before answer |
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
| 20 | Reading/stories | 17 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 20 | Fluency reads | 4 reads | 1 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 20 | Write it | 59 items | 8 / 8 | 0 | PASS | N/A · Thai-keyboard recall from existing g:/f: review eligibility; no new SRS ids |
| 20 | Route talk | 39 items | 5 / 5 | 42 | PASS | N/A · spoken self-explanation of class/mark/live-dead/length/tone; no scoring |
| 20 | Decode Gym | 47 items | 10 / 10 | 0 | PASS | N/A · tone-verified non-lesson word mileage; no meanings and no SRS ids |
| 20 | Wild deck | 0 items | 0 / 8 | 0 | PASS | N/A · state-driven from local captures only; never creates SRS ids or blockers |
| 20 | Rare-letter class | 0 items | 0 / 0 | 0 | PASS | N/A · Lesson 21 class-only recognition material; definition-free and neutral before answer |
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
| 21 | Reading/stories | 17 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 21 | Fluency reads | 4 reads | 1 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 21 | Write it | 62 items | 8 / 8 | 0 | PASS | N/A · Thai-keyboard recall from existing g:/f: review eligibility; no new SRS ids |
| 21 | Route talk | 40 items | 5 / 5 | 45 | PASS | N/A · spoken self-explanation of class/mark/live-dead/length/tone; no scoring |
| 21 | Decode Gym | 49 items | 10 / 10 | 0 | PASS | N/A · tone-verified non-lesson word mileage; no meanings and no SRS ids |
| 21 | Wild deck | 0 items | 0 / 8 | 0 | PASS | N/A · state-driven from local captures only; never creates SRS ids or blockers |
| 21 | Rare-letter class | 8 items | 8 / 8 | 0 | PASS | N/A · Lesson 21 class-only recognition material; definition-free and neutral before answer |
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
| 22 | Reading/stories | 18 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 22 | Fluency reads | 4 reads | 1 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 22 | Write it | 62 items | 8 / 8 | 0 | PASS | N/A · Thai-keyboard recall from existing g:/f: review eligibility; no new SRS ids |
| 22 | Route talk | 42 items | 5 / 5 | 47 | PASS | N/A · spoken self-explanation of class/mark/live-dead/length/tone; no scoring |
| 22 | Decode Gym | 59 items | 10 / 10 | 0 | PASS | N/A · tone-verified non-lesson word mileage; no meanings and no SRS ids |
| 22 | Wild deck | 0 items | 0 / 8 | 0 | PASS | N/A · state-driven from local captures only; never creates SRS ids or blockers |
| 22 | Rare-letter class | 8 items | 8 / 8 | 0 | PASS | N/A · Lesson 21 class-only recognition material; definition-free and neutral before answer |
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
| 23 | Reading/stories | 19 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 23 | Fluency reads | 5 reads | 1 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 23 | Write it | 62 items | 8 / 8 | 0 | PASS | N/A · Thai-keyboard recall from existing g:/f: review eligibility; no new SRS ids |
| 23 | Route talk | 42 items | 5 / 5 | 51 | PASS | N/A · spoken self-explanation of class/mark/live-dead/length/tone; no scoring |
| 23 | Decode Gym | 59 items | 10 / 10 | 0 | PASS | N/A · tone-verified non-lesson word mileage; no meanings and no SRS ids |
| 23 | Wild deck | 0 items | 0 / 8 | 0 | PASS | N/A · state-driven from local captures only; never creates SRS ids or blockers |
| 23 | Rare-letter class | 8 items | 8 / 8 | 0 | PASS | N/A · Lesson 21 class-only recognition material; definition-free and neutral before answer |
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
| 24 | Reading/stories | 25 stories | 1 / 1 | 0 | PASS | N/A · stories use their own decodability/prerequisite gate |
| 24 | Fluency reads | 6 reads | 1 / 1 | 0 | PASS | N/A · slow pass, smoother pass, decoding check and self-rating; no speech scoring |
| 24 | Write it | 62 items | 8 / 8 | 0 | PASS | N/A · Thai-keyboard recall from existing g:/f: review eligibility; no new SRS ids |
| 24 | Route talk | 45 items | 5 / 5 | 52 | PASS | N/A · spoken self-explanation of class/mark/live-dead/length/tone; no scoring |
| 24 | Decode Gym | 63 items | 10 / 10 | 0 | PASS | N/A · tone-verified non-lesson word mileage; no meanings and no SRS ids |
| 24 | Wild deck | 0 items | 0 / 8 | 0 | PASS | N/A · state-driven from local captures only; never creates SRS ids or blockers |
| 24 | Rare-letter class | 8 items | 8 / 8 | 0 | PASS | N/A · Lesson 21 class-only recognition material; definition-free and neutral before answer |
| 24 | Phase 1 completion checkpoint | 23 checks | 1 / 1 | 0 | PASS | N/A · final observable reading behaviours; 85% quiz plus smooth/slow final read |
| 24 | Chunk this word | 11 items | 8 / 8 | 0 | PASS | N/A · definition-free script chunking; no meaning test |
| 24 | Seen in the wild | 10 signs | 10 / 10 | 0 | PASS | N/A · self-paced local checklist; no camera, upload or location |
| 24 | Font Shock | 10 items | 8 / 8 | 0 | PASS | N/A · same covered signs in CSS font/weight variations |
| 24 | Mouth Coach | 10 cards | 10 / 10 | 0 | PASS | N/A · script-cued read-aloud coaching; no pronunciation score |
| 24 | Contrast Block | 9 blocks | 1 / 1 | 0 | PASS | N/A · listen-first contrast plus script-cued record/compare; no pronunciation score |
| 24 | Bangkok Mission | 9 missions | 1 / 1 | 0 | PASS | N/A · local self-check; no camera, upload, location or web access |

## Lesson Map
| Day | Lesson | New starts | Finals taught | Quiz axes | Available pools after lesson | Issues |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | l1 First sounds | ก น ม | - | word-reading:2, class:3, listen:2, glyph-sound:2, mcq:1 | tone 1, echo 4 | - |
| 2 | l2 Eat, look, fly | ด บ อ | ก -k, น -n, ม -m, ด -t, บ -p | listen:2, final:1, live-dead:1, final-job:5, class:3, vowel-length:1 | tone 1, echo 8 | - |
| 3 | l3 Street words | ป ท | ป -p, ท -t, ก -k | vowel-order:1, listen:2, class:2, final-job:3, final:1, live-dead:1 | tone 1, echo 12 | - |
| 4 | l4 Tone-mark preview | ห | น -n | listen:2, fresh-decode:4, live-dead:2, word-reading:1, class:1, mcq:1, glyph-sound:1, final-job:1, final:1 | tone 4, twins 2, echo 23, stories 1 | - |
| 5 | l5 Waiting and we | ร ล ว ย | ร -n, ล -n, ว -ao/-aao, ย -y glide | final-job:4, vowel-order:1, class:4, listen:2, final:1, fresh-decode:4, live-dead:1 | tone 4, twins 2, echo 27, stories 1 | - |
| 6 | l6 High class, please | ส ข | ส -t, ข -k, ม -m, ว -ao/-aao | live-dead:1, fresh-decode:4, listen:2, class:2, final-job:4, final:1 | tone 6, twins 3, echo 35, stories 2 | - |
| 7 | l7 Work and elephants | จ ช ง | จ -t, ช -t, ง -ng, น -n | final-job:4, live-dead:1, listen:2, class:3, vowel-length:1, final:1, fresh-decode:4 | tone 6, twins 7, echo 47, stories 2 | - |
| 8 | l8 ต ถ พ ฟ + dead syllables | ต ถ พ ฟ | ต -t, ถ -t, พ -p, ฟ -p, ก -k, น -n | final-job:6, fresh-decode:4, live-dead:1, class:4, listen:2, final:1 | tone 6, twins 7, echo 51, stories 3 | - |
| 9 | l9 The hidden vowel | ค ผ ฝ ซ | ค -k, ซ -t, น -n, ม -m, ย -y glide | fresh-decode:4, final-job:5, live-dead:1, class:4, listen:2, final:1, hidden-vowel:1 | tone 9, twins 8, echo 60, stories 4 | - |
| 10 | l10 Front vowels เ แ + ึ ื | - | ง -ng, ก -k | live-dead:1, final-job:2, listen:2, glyph-choice:1, vowel-order:2, glyph-sound:1, fresh-decode:4, final:1 | tone 9, twins 8, echo 64, stories 5 | - |
| 11 | l11 Short and snappy | - | ถ -t, ก -k, ง -ng | final-job:3, fresh-decode:4, word-reading:1, listen:2, final:1, live-dead:1, vowel-length:1, hidden-vowel:1 | tone 9, twins 8, echo 68, stories 5 | - |
| 12 | l12 He, she, water, yes | - | - | fresh-decode:4, listen:2, mcq:2, live-dead:2, vowel-order:1, glyph-sound:1, glyph-choice:1, word-reading:1 | tone 9, twins 8, echo 72, stories 6 | - |
| 13 | l13 Live or dead? | - | ก -k, ด -t, น -n | final-job:3, fresh-decode:4, vowel-length:1, live-dead:1, listen:2, mcq:5, final:1 | tone 9, twins 8, echo 76, stories 7 | - |
| 14 | l14 Mid class: all five | - | ง -ng | fresh-decode:4, mcq:4, listen:2, final-job:1, word-reading:1, live-dead:1, final:1 | tone 9, twins 8, echo 80, stories 8 | - |
| 15 | l15 High class: the grid | - | ว -ao/-aao, ง -ng, ม -m | fresh-decode:4, final-job:3, mcq:4, live-dead:1, final:1, listen:2 | tone 9, twins 8, echo 82, stories 8 | - |
| 16 | l16 Low class: the flip | - | ง -ng, ก -k | final:1, fresh-decode:4, listen:2, final-job:2, mcq:4, live-dead:1, vowel-length:1 | tone 9, twins 8, echo 86, stories 9 | - |
| 17 | l17 The silent leaders | - | ก -k | fresh-decode:4, mcq:4, final-job:1, word-reading:1, listen:2, final:1, live-dead:1 | tone 11, twins 10, echo 93, stories 12 | - |
| 18 | l18 Decode ครับ | - | บ -p | vowel-order:1, fresh-decode:4, listen:2, mcq:4, final-job:1, live-dead:1, vowel-length:1, cluster:1, final:1 | tone 11, twins 10, echo 97, stories 14 | - |
| 19 | l19 Fake clusters | - | ง -ng, บ -p, ย -y glide | live-dead:1, cluster:1, final-job:3, mcq:4, fresh-decode:4, listen:2, final:1 | tone 11, twins 10, echo 101, stories 16 | - |
| 20 | l20 Formal friends | ธ ภ ศ ษ ญ ฮ | ธ -t, ภ -p, ศ -t, ษ -t, ญ -n, ง -ng, น -n | fresh-decode:4, final-job:7, listen:1, vowel-order:1, class:6, live-dead:1, mcq:2, final:1 | tone 11, twins 10, echo 105, stories 17 | - |
| 21 | l21 Rare-letter class rows | ฉ ฬ | ฬ -n, น -n, ก -k | final-job:3, live-dead:1, hidden-vowel:1, rare-class:4, listen:1, class:2, fresh-decode:4, final:1, mcq:1 | tone 11, twins 10, echo 109, stories 17 | - |
| 22 | l22 Three-piece vowels | - | น -n | vowel-order:1, fresh-decode:4, mcq:4, listen:2, final:1, live-dead:1, final-job:1 | tone 11, twins 11, echo 115, stories 18 | - |
| 23 | l23 Useful signs | - | ง -ng, ก -k | live-dead:1, mcq:4, final-job:2, listen:2, fresh-decode:4, final:1 | tone 11, twins 11, echo 119, stories 19 | - |
| 24 | l24 Capstone: read Bangkok | - | ด -t, ม -m, ร -n | fresh-decode:4, final:1, mcq:4, live-dead:1, listen:2, final-job:3, vowel-order:1 | tone 11, twins 11, echo 123, stories 25 | - |

## Per-Lesson Detail
### l1 - First sounds
- Unit: A · Foundations
- Glyphs: ก น ม า ี
- Final jobs: -
- Quiz count: 10
- Quiz axes: word-reading 2, class 3, listen 2, glyph-sound 2, mcq 1
- Review after lesson: glyph cards 5, start-consonant glyphs 3, final cards 0, echo pool 4
- Workload: lesson payload glyph 5, final 0, quiz 10; Today route due 5, served 5/30, Lesson day
- Surface audit: Hear & Pick Thai 4 items -> 4/10 PASS; Spell It 2 items -> 0/8 PASS; Echo 4 items -> 4/8 PASS; Sound Twins 0 sets -> 0/10 PASS; Tone listening 1 items -> 0/8 PASS; Mixed review 15 questions -> 10/10 PASS; Lesson payoff 1 items -> 1/1 PASS; Axis review 23 cards -> 23/40 PASS; Delayed retention 1 checks -> 1/1 PASS; Reading/stories 0 stories -> 0/1 PASS; Fluency reads 0 reads -> 0/1 PASS; Write it 0 items -> 0/8 PASS; Route talk 0 items -> 0/5 PASS; Decode Gym 0 items -> 0/10 PASS; Wild deck 0 items -> 0/8 PASS; Rare-letter class 0 items -> 0/0 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 0 cards -> 0/0 PASS; Contrast Block 0 blocks -> 0/1 PASS; Bangkok Mission 0 missions -> 0/1 PASS
- Unlocked drills: hear-thai, echo, sprint
- Quiz prompts:
  - word-reading: Mini decode: how does this read? -> gaa
  - class: Which class? -> Mid class
  - class: Which class? -> Low class
  - word-reading: Mini decode: how does this read? -> mii
  - listen: Listen: which Thai did you hear? -> มา
  - listen: Listen: which Thai did you hear? -> มี
  - class: Which class? -> Low class
  - glyph-sound: What vowel sound? -> aa (long)
  - mcq: <span class="classchip low">Low class</span> มา has no tone mark. What tone do we read here? -> Mid
  - glyph-sound: What consonant sound? -> n
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
- Quiz axes: listen 2, final 1, live-dead 1, final-job 5, class 3, vowel-length 1
- Review after lesson: glyph cards 10, start-consonant glyphs 6, final cards 5, echo pool 8
- Workload: lesson payload glyph 5, final 5, quiz 13; Today route due 15, served 15/30, Lesson day
- Surface audit: Hear & Pick Thai 8 items -> 8/10 PASS; Spell It 5 items -> 5/8 PASS; Echo 8 items -> 8/8 PASS; Sound Twins 0 sets -> 0/10 PASS; Tone listening 1 items -> 0/8 PASS; Mixed review 38 questions -> 10/10 PASS; Lesson payoff 2 items -> 1/1 PASS; Axis review 54 cards -> 40/40 PASS; Delayed retention 2 checks -> 1/1 PASS; Reading/stories 0 stories -> 0/1 PASS; Fluency reads 0 reads -> 0/1 PASS; Write it 11 items -> 8/8 PASS; Route talk 0 items -> 0/5 PASS; Decode Gym 0 items -> 0/10 PASS; Wild deck 0 items -> 0/8 PASS; Rare-letter class 0 items -> 0/0 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 0 cards -> 0/0 PASS; Contrast Block 0 blocks -> 0/1 PASS; Bangkok Mission 0 missions -> 0/1 PASS
- Unlocked drills: hear-thai, echo, sprint, write-it
- Quiz prompts:
  - listen: Listen: which Thai did you hear? -> กิน
  - final: Ending job: what sound does น make here? -> -n
  - live-dead: Sound feel: live or dead? -> Live
  - final-job: Ending job: what sound does this letter make at the end? -> -k
  - class: Which class? -> Mid class
  - vowel-length: Vowel length: short or long? -> Short
  - class: Which class? -> Mid class
  - final-job: Ending job: what sound does this letter make at the end? -> -n
  - final-job: Ending job: what sound does this letter make at the end? -> -p
  - listen: Listen: which Thai did you hear? -> ดี
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - final-job: Ending job: what sound does this letter make at the end? -> -m
  - class: Which class? -> Mid class
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
- Quiz axes: vowel-order 1, listen 2, class 2, final-job 3, final 1, live-dead 1
- Review after lesson: glyph cards 14, start-consonant glyphs 8, final cards 7, echo pool 12
- Workload: lesson payload glyph 4, final 2, quiz 10; Today route due 21, served 21/30, Lesson day
- Surface audit: Hear & Pick Thai 12 items -> 10/10 PASS; Spell It 8 items -> 8/8 PASS; Echo 12 items -> 8/8 PASS; Sound Twins 0 sets -> 0/10 PASS; Tone listening 1 items -> 0/8 PASS; Mixed review 55 questions -> 10/10 PASS; Lesson payoff 3 items -> 1/1 PASS; Axis review 79 cards -> 40/40 PASS; Delayed retention 3 checks -> 1/1 PASS; Reading/stories 0 stories -> 0/1 PASS; Fluency reads 0 reads -> 0/1 PASS; Write it 15 items -> 8/8 PASS; Route talk 0 items -> 0/5 PASS; Decode Gym 0 items -> 0/10 PASS; Wild deck 0 items -> 0/8 PASS; Rare-letter class 0 items -> 0/0 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 0 cards -> 0/0 PASS; Contrast Block 0 blocks -> 0/1 PASS; Bangkok Mission 1 missions -> 1/1 PASS
- Unlocked drills: hear-thai, echo, spell, clinic, sprint, write-it
- Quiz prompts:
  - vowel-order: Vowel order: how do you read the vowel shape here? -> written before, spoken after
  - listen: Listen: which Thai did you hear? -> ไป
  - class: Which class? -> Low class
  - final-job: Ending job: what sound does this letter make at the end? -> -p
  - listen: Listen: which Thai did you hear? -> บาท
  - class: Which class? -> Mid class
  - final-job: Ending job: what sound does this letter make at the end? -> -k
  - final: Ending job: what sound does ท make here? -> -t
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - live-dead: Sound feel: live or dead? -> Dead
- Words:
  - ไป (bpai) - core; written before, spoken after
  - บาท (bàat) - core; final ท -t
  - มาก (mâak) - core; final ก -k
  - ปี (bpii) - recognition

### l4 - Tone-mark preview
- Unit: A · Foundations
- Glyphs: ่ ้ ห
- Final jobs: น -> -n (ring)
- Quiz count: 14
- Quiz axes: listen 2, fresh-decode 4, live-dead 2, word-reading 1, class 1, mcq 1, glyph-sound 1, final-job 1, final 1
- Review after lesson: glyph cards 17, start-consonant glyphs 9, final cards 7, echo pool 23
- Workload: lesson payload glyph 3, final 0, quiz 14; Today route due 24, served 24/30, Lesson day
- Surface audit: Hear & Pick Thai 17 items -> 10/10 PASS; Spell It 11 items -> 8/8 PASS; Echo 23 items -> 8/8 PASS; Sound Twins 2 sets -> 2/10 PASS; Tone listening 4 items -> 4/8 PASS; Mixed review 71 questions -> 10/10 PASS; Lesson payoff 4 items -> 1/1 PASS; Axis review 97 cards -> 40/40 PASS; Delayed retention 4 checks -> 1/1 PASS; Reading/stories 1 stories -> 1/1 PASS; Fluency reads 0 reads -> 0/1 PASS; Write it 16 items -> 8/8 PASS; Route talk 0 items -> 0/5 PASS; Decode Gym 3 items -> 0/10 PASS; Wild deck 0 items -> 0/8 PASS; Rare-letter class 0 items -> 0/0 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 1 cards -> 1/1 PASS; Contrast Block 1 blocks -> 1/1 PASS; Bangkok Mission 2 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, write-it, reading, decode-gym
- Quiz prompts:
  - listen: Listen: which Thai did you hear? -> บ้าน
  - fresh-decode: New word. Sound feel: live or dead? -> Dead
  - fresh-decode: Fresh decode: how does this read? -> dìp
  - live-dead: Sound feel: live or dead? -> Live
  - word-reading: Mini decode: how does this read? -> mâi
  - fresh-decode: New word. Vowel length: short or long? -> Long
  - fresh-decode: Fresh decode: how does this read? -> hǎam
  - class: Which class? -> High class
  - mcq: <span class="classchip high">High class</span> + Thai tone mark: which tone? -> Falling
  - glyph-sound: What does this mark do? -> mái èek
  - final-job: Ending job: what sound does this letter make at the end? -> -n
  - final: Ending job: what sound does น make here? -> -n
  - live-dead: Sound feel: live or dead? -> Live
  - listen: Listen: which Thai did you hear? -> ไม่
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
- Quiz count: 17
- Quiz axes: final-job 4, vowel-order 1, class 4, listen 2, final 1, fresh-decode 4, live-dead 1
- Review after lesson: glyph cards 22, start-consonant glyphs 13, final cards 11, echo pool 27
- Workload: lesson payload glyph 5, final 4, quiz 17; Today route due 33, served 30/30, Lesson day
- Surface audit: Hear & Pick Thai 21 items -> 10/10 PASS; Spell It 13 items -> 8/8 PASS; Echo 27 items -> 8/8 PASS; Sound Twins 2 sets -> 2/10 PASS; Tone listening 4 items -> 4/8 PASS; Mixed review 92 questions -> 10/10 PASS; Lesson payoff 5 items -> 1/1 PASS; Axis review 128 cards -> 40/40 PASS; Delayed retention 5 checks -> 1/1 PASS; Reading/stories 1 stories -> 1/1 PASS; Fluency reads 0 reads -> 0/1 PASS; Write it 24 items -> 8/8 PASS; Route talk 0 items -> 0/5 PASS; Decode Gym 4 items -> 0/10 PASS; Wild deck 0 items -> 0/8 PASS; Rare-letter class 0 items -> 0/0 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 1 cards -> 1/1 PASS; Contrast Block 1 blocks -> 1/1 PASS; Bangkok Mission 2 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, write-it, reading, decode-gym
- Quiz prompts:
  - final-job: Ending job: what sound does this letter make at the end? -> -n
  - vowel-order: Vowel order: how do you read the vowel shape here? -> wraps the consonant
  - class: Which class? -> Low class
  - class: Which class? -> Low class
  - class: Which class? -> Low class
  - final-job: Ending job: what sound does this letter make at the end? -> -ao/-aao
  - final-job: Ending job: what sound does this letter make at the end? -> -y glide
  - listen: Listen: which Thai did you hear? -> รอ
  - listen: Listen: which Thai did you hear? -> เรา
  - final: Ending job: what sound does ว make here? -> -aao
  - fresh-decode: New word. Sound feel: live or dead? -> Live
  - fresh-decode: Fresh decode: how does this read? -> gìi
  - live-dead: Sound feel: live or dead? -> Live
  - fresh-decode: New word. Sound feel: live or dead? -> Live
  - class: Which class? -> Low class
  - fresh-decode: Fresh decode: how does this read? -> thaa
  - final-job: Ending job: what sound does this letter make at the end? -> -n
- Words:
  - รอ (ror) - core
  - เรา (rao) - core; wraps the consonant
  - ยาว (yaao) - recognition; final ว -aao
  - ลาว (laao) - decode; final ว -aao

### l6 - High class, please
- Unit: A · Foundations
- Glyphs: ส ข
- Final jobs: ส -> -t (stop), ข -> -k (stop), ม -> -m (ring), ว -> -ao/-aao (glide)
- Quiz count: 14
- Quiz axes: live-dead 1, fresh-decode 4, listen 2, class 2, final-job 4, final 1
- Review after lesson: glyph cards 24, start-consonant glyphs 15, final cards 13, echo pool 35
- Workload: lesson payload glyph 2, final 2, quiz 14; Today route due 37, served 30/30, Lesson day
- Surface audit: Hear & Pick Thai 25 items -> 10/10 PASS; Spell It 15 items -> 8/8 PASS; Echo 35 items -> 8/8 PASS; Sound Twins 3 sets -> 3/10 PASS; Tone listening 6 items -> 6/8 PASS; Mixed review 106 questions -> 10/10 PASS; Lesson payoff 6 items -> 1/1 PASS; Axis review 151 cards -> 40/40 PASS; Delayed retention 6 checks -> 1/1 PASS; Reading/stories 2 stories -> 1/1 PASS; Fluency reads 1 reads -> 1/1 PASS; Write it 28 items -> 8/8 PASS; Route talk 0 items -> 0/5 PASS; Decode Gym 5 items -> 0/10 PASS; Wild deck 0 items -> 0/8 PASS; Rare-letter class 0 items -> 0/0 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 1 cards -> 1/1 PASS; Contrast Block 1 blocks -> 1/1 PASS; Bangkok Mission 3 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, write-it, reading, decode-gym
- Quiz prompts:
  - live-dead: Sound feel: live or dead? -> Live
  - fresh-decode: New word. Vowel length: short or long? -> Long
  - listen: Listen: which Thai did you hear? -> สี
  - class: Which class? -> High class
  - fresh-decode: New word. Vowel length: short or long? -> Long
  - fresh-decode: Fresh decode: how does this read? -> rîip
  - final-job: Ending job: what sound does this letter make at the end? -> -k
  - final-job: Ending job: what sound does this letter make at the end? -> -m
  - listen: Listen: which Thai did you hear? -> ขอ
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - fresh-decode: Fresh decode: how does this read? -> bpuu
  - final: Ending job: what sound does ม make here? -> -m
  - final-job: Ending job: what sound does this letter make at the end? -> -ao/-aao
  - class: Which class? -> High class
- Words:
  - ขอ (khǒr) - core
  - สี (sǐi) - core
  - สาม (sǎam) - recognition; final ม -m
  - ขาว (khǎao) - decode; final ว -aao

### l7 - Work and elephants
- Unit: B · The workhorses
- Glyphs: จ ช ง ั
- Final jobs: จ -> -t (stop), ช -> -t (stop), ง -> -ng (ring), น -> -n (ring)
- Quiz count: 16
- Quiz axes: final-job 4, live-dead 1, listen 2, class 3, vowel-length 1, final 1, fresh-decode 4
- Review after lesson: glyph cards 28, start-consonant glyphs 18, final cards 16, echo pool 47
- Workload: lesson payload glyph 4, final 3, quiz 16; Today route due 44, served 30/30, Lesson day
- Surface audit: Hear & Pick Thai 29 items -> 10/10 PASS; Spell It 17 items -> 8/8 PASS; Echo 47 items -> 8/8 PASS; Sound Twins 7 sets -> 7/10 PASS; Tone listening 6 items -> 6/8 PASS; Mixed review 123 questions -> 10/10 PASS; Lesson payoff 7 items -> 1/1 PASS; Axis review 180 cards -> 40/40 PASS; Delayed retention 7 checks -> 1/1 PASS; Reading/stories 2 stories -> 1/1 PASS; Fluency reads 1 reads -> 1/1 PASS; Write it 34 items -> 8/8 PASS; Route talk 0 items -> 0/5 PASS; Decode Gym 6 items -> 6/10 PASS; Wild deck 0 items -> 0/8 PASS; Rare-letter class 0 items -> 0/0 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 1 cards -> 1/1 PASS; Contrast Block 2 blocks -> 1/1 PASS; Bangkok Mission 4 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, write-it, reading, decode-gym
- Quiz prompts:
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - final-job: Ending job: what sound does this letter make at the end? -> -n
  - live-dead: Sound feel: live or dead? -> Live
  - listen: Listen: which Thai did you hear? -> วันนี้
  - class: Which class? -> Low class
  - vowel-length: Vowel length: short or long? -> Short
  - listen: Listen: which Thai did you hear? -> งาน
  - final-job: Ending job: what sound does this letter make at the end? -> -ng
  - class: Which class? -> Mid class
  - class: Which class? -> Low class
  - final: Ending job: what sound does น make here? -> -n
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - fresh-decode: New word. Vowel length: short or long? -> Long
  - fresh-decode: Fresh decode: how does this read? -> bpuun
  - fresh-decode: Fresh decode: how does this read? -> khùut
  - fresh-decode: New word. Sound feel: live or dead? -> Live
- Words:
  - งาน (ngaan) - core; final น -n
  - ช้าง (cháang) - decode; final ง -ng
  - จาน (jaan) - recognition; final น -n
  - วันนี้ (wan-níi) - core; final น -n; Short

### l8 - ต ถ พ ฟ + dead syllables
- Unit: B · The workhorses
- Glyphs: ต ถ พ ฟ
- Final jobs: ต -> -t (stop), ถ -> -t (stop), พ -> -p (stop), ฟ -> -p (stop), ก -> -k (stop), น -> -n (ring)
- Quiz count: 18
- Quiz axes: final-job 6, fresh-decode 4, live-dead 1, class 4, listen 2, final 1
- Review after lesson: glyph cards 32, start-consonant glyphs 22, final cards 20, echo pool 51
- Workload: lesson payload glyph 4, final 4, quiz 18; Today route due 52, served 30/30, Consolidation day
- Surface audit: Hear & Pick Thai 33 items -> 10/10 PASS; Spell It 19 items -> 8/8 PASS; Echo 51 items -> 8/8 PASS; Sound Twins 7 sets -> 7/10 PASS; Tone listening 6 items -> 6/8 PASS; Mixed review 144 questions -> 10/10 PASS; Lesson payoff 8 items -> 1/1 PASS; Axis review 212 cards -> 40/40 PASS; Delayed retention 8 checks -> 1/1 PASS; Reading/stories 3 stories -> 1/1 PASS; Fluency reads 1 reads -> 1/1 PASS; Write it 42 items -> 8/8 PASS; Route talk 0 items -> 0/5 PASS; Decode Gym 8 items -> 8/10 PASS; Wild deck 0 items -> 0/8 PASS; Rare-letter class 0 items -> 0/0 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 1 cards -> 1/1 PASS; Contrast Block 2 blocks -> 1/1 PASS; Bangkok Mission 4 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, write-it, reading, decode-gym
- Quiz prompts:
  - final-job: Ending job: what sound does this letter make at the end? -> -p
  - fresh-decode: Fresh decode: how does this read? -> wát
  - live-dead: Sound feel: live or dead? -> Dead
  - fresh-decode: New word. Vowel length: short or long? -> Long
  - final-job: Ending job: what sound does this letter make at the end? -> -p
  - class: Which class? -> Low class
  - class: Which class? -> Mid class
  - listen: Listen: which Thai did you hear? -> ถูก
  - fresh-decode: New word. Sound feel: live or dead? -> Dead
  - fresh-decode: Fresh decode: how does this read? -> khùut
  - final: Ending job: what sound does ก make here? -> -k
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - final-job: Ending job: what sound does this letter make at the end? -> -n
  - class: Which class? -> High class
  - final-job: Ending job: what sound does this letter make at the end? -> -k
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - class: Which class? -> Low class
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
- Quiz count: 18
- Quiz axes: fresh-decode 4, final-job 5, live-dead 1, class 4, listen 2, final 1, hidden-vowel 1
- Review after lesson: glyph cards 36, start-consonant glyphs 26, final cards 22, echo pool 60
- Workload: lesson payload glyph 4, final 2, quiz 18; Today route due 58, served 30/30, Consolidation day
- Surface audit: Hear & Pick Thai 37 items -> 10/10 PASS; Spell It 22 items -> 8/8 PASS; Echo 60 items -> 8/8 PASS; Sound Twins 8 sets -> 8/10 PASS; Tone listening 9 items -> 8/8 PASS; Mixed review 166 questions -> 10/10 PASS; Lesson payoff 9 items -> 1/1 PASS; Axis review 246 cards -> 40/40 PASS; Delayed retention 9 checks -> 1/1 PASS; Reading/stories 4 stories -> 1/1 PASS; Fluency reads 1 reads -> 1/1 PASS; Write it 48 items -> 8/8 PASS; Route talk 0 items -> 0/5 PASS; Decode Gym 13 items -> 10/10 PASS; Wild deck 0 items -> 0/8 PASS; Rare-letter class 0 items -> 0/0 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 1 cards -> 1/1 PASS; Contrast Block 2 blocks -> 1/1 PASS; Bangkok Mission 5 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, write-it, reading, decode-gym
- Quiz prompts:
  - fresh-decode: New word. Vowel length: short or long? -> Short
  - fresh-decode: Fresh decode: how does this read? -> dìp
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - fresh-decode: New word. Vowel length: short or long? -> Long
  - live-dead: Sound feel: live or dead? -> Live
  - fresh-decode: Fresh decode: how does this read? -> naam
  - class: Which class? -> Low class
  - final-job: Ending job: what sound does this letter make at the end? -> -m
  - class: Which class? -> High class
  - listen: Listen: which Thai did you hear? -> ผม
  - class: Which class? -> High class
  - final-job: Ending job: what sound does this letter make at the end? -> -k
  - final-job: Ending job: what sound does this letter make at the end? -> -n
  - class: Which class? -> Low class
  - listen: Listen: which Thai did you hear? -> คน
  - final: Ending job: what sound does น make here? -> -n
  - hidden-vowel: Hidden vowel: what sound is added here? -> hidden o
  - final-job: Ending job: what sound does this letter make at the end? -> -y glide
- Words:
  - คน (khon) - core; final น -n; hidden hidden o
  - ผม (phǒm) - core; final ม -m; hidden hidden o
  - ฝน (fǒn) - recognition; final น -n; hidden hidden o
  - ซ้าย (sáai) - core; final ย -ai

### l10 - Front vowels เ แ + ึ ื
- Unit: B · The workhorses
- Glyphs: เ แ ึ ื
- Final jobs: ง -> -ng (ring), ก -> -k (stop)
- Quiz count: 14
- Quiz axes: live-dead 1, final-job 2, listen 2, glyph-choice 1, vowel-order 2, glyph-sound 1, fresh-decode 4, final 1
- Review after lesson: glyph cards 40, start-consonant glyphs 26, final cards 22, echo pool 64
- Workload: lesson payload glyph 4, final 0, quiz 14; Today route due 62, served 30/30, Consolidation day
- Surface audit: Hear & Pick Thai 41 items -> 10/10 PASS; Spell It 25 items -> 8/8 PASS; Echo 64 items -> 8/8 PASS; Sound Twins 8 sets -> 8/10 PASS; Tone listening 9 items -> 8/8 PASS; Mixed review 175 questions -> 10/10 PASS; Lesson payoff 10 items -> 1/1 PASS; Axis review 265 cards -> 40/40 PASS; Delayed retention 10 checks -> 1/1 PASS; Reading/stories 5 stories -> 1/1 PASS; Fluency reads 2 reads -> 1/1 PASS; Write it 48 items -> 8/8 PASS; Route talk 0 items -> 0/5 PASS; Decode Gym 15 items -> 10/10 PASS; Wild deck 0 items -> 0/8 PASS; Rare-letter class 0 items -> 0/0 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 1 cards -> 1/1 PASS; Contrast Block 2 blocks -> 1/1 PASS; Bangkok Mission 5 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, write-it, reading, decode-gym
- Quiz prompts:
  - live-dead: Sound feel: live or dead? -> Live
  - final-job: Ending job: what sound does this letter make at the end? -> -ng
  - listen: Listen: which Thai did you hear? -> แพง
  - glyph-choice: Hear it. Which vowel is it? -> อึ
  - vowel-order: Vowel order: how do you read the vowel shape here? -> written before, spoken after
  - final-job: Ending job: what sound does this letter make at the end? -> -k
  - glyph-sound: What vowel sound? -> ue (short)
  - fresh-decode: New word. Sound feel: live or dead? -> Live
  - fresh-decode: New word. Sound feel: live or dead? -> Live
  - fresh-decode: Fresh decode: how does this read? -> bpuun
  - listen: Listen: which Thai did you hear? -> แม่
  - fresh-decode: Fresh decode: how does this read? -> mao
  - final: Ending job: what sound does ง make here? -> -ng
  - vowel-order: Vowel order: how do you read the vowel shape here? -> written before, spoken after
- Words:
  - แม่ (mâae) - core; written before, spoken after
  - แพง (phaaeng) - core; final ง -ng; written before, spoken after
  - มือ (muue) - core
  - ลึก (lúek) - decode; final ก -k

### l11 - Short and snappy
- Unit: B · The workhorses
- Glyphs: ุ ะ
- Final jobs: ถ -> -t (stop), ก -> -k (stop), ง -> -ng (ring)
- Quiz count: 14
- Quiz axes: final-job 3, fresh-decode 4, word-reading 1, listen 2, final 1, live-dead 1, vowel-length 1, hidden-vowel 1
- Review after lesson: glyph cards 42, start-consonant glyphs 26, final cards 22, echo pool 68
- Workload: lesson payload glyph 2, final 0, quiz 14; Today route due 64, served 30/30, Consolidation day
- Surface audit: Hear & Pick Thai 45 items -> 10/10 PASS; Spell It 28 items -> 8/8 PASS; Echo 68 items -> 8/8 PASS; Sound Twins 8 sets -> 8/10 PASS; Tone listening 9 items -> 8/8 PASS; Mixed review 187 questions -> 10/10 PASS; Lesson payoff 11 items -> 1/1 PASS; Axis review 286 cards -> 40/40 PASS; Delayed retention 11 checks -> 1/1 PASS; Reading/stories 5 stories -> 1/1 PASS; Fluency reads 2 reads -> 1/1 PASS; Write it 48 items -> 8/8 PASS; Route talk 0 items -> 0/5 PASS; Decode Gym 16 items -> 10/10 PASS; Wild deck 0 items -> 0/8 PASS; Rare-letter class 0 items -> 0/0 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 1 cards -> 1/1 PASS; Contrast Block 2 blocks -> 1/1 PASS; Bangkok Mission 5 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, write-it, reading, decode-gym
- Quiz prompts:
  - final-job: Ending job: what sound does this letter make at the end? -> -k
  - fresh-decode: New word. Vowel length: short or long? -> Long
  - word-reading: Mini decode: how does this read? -> thúk
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - final-job: Ending job: what sound does this letter make at the end? -> -ng
  - fresh-decode: Fresh decode: how does this read? -> bpiin
  - listen: Listen: which Thai did you hear? -> จะ
  - fresh-decode: New word. Vowel length: short or long? -> Short
  - fresh-decode: Fresh decode: how does this read? -> gàt
  - final: Ending job: what sound does ถ make here? -> -t
  - listen: Listen: which Thai did you hear? -> รถ
  - live-dead: Sound feel: live or dead? -> Dead
  - vowel-length: Vowel length: short or long? -> Short
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
- Quiz count: 14
- Quiz axes: fresh-decode 4, listen 2, mcq 2, live-dead 2, vowel-order 1, glyph-sound 1, glyph-choice 1, word-reading 1
- Review after lesson: glyph cards 44, start-consonant glyphs 26, final cards 22, echo pool 72
- Workload: lesson payload glyph 2, final 0, quiz 14; Today route due 66, served 30/30, Consolidation day
- Surface audit: Hear & Pick Thai 49 items -> 10/10 PASS; Spell It 32 items -> 8/8 PASS; Echo 72 items -> 8/8 PASS; Sound Twins 8 sets -> 8/10 PASS; Tone listening 9 items -> 8/8 PASS; Mixed review 199 questions -> 10/10 PASS; Lesson payoff 12 items -> 1/1 PASS; Axis review 304 cards -> 40/40 PASS; Delayed retention 12 checks -> 1/1 PASS; Reading/stories 6 stories -> 1/1 PASS; Fluency reads 2 reads -> 1/1 PASS; Write it 48 items -> 8/8 PASS; Route talk 0 items -> 0/5 PASS; Decode Gym 19 items -> 10/10 PASS; Wild deck 0 items -> 0/8 PASS; Rare-letter class 0 items -> 0/0 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 2 cards -> 2/2 PASS; Contrast Block 3 blocks -> 1/1 PASS; Bangkok Mission 6 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, write-it, reading, decode-gym
- Quiz prompts:
  - fresh-decode: New word. Sound feel: live or dead? -> Live
  - listen: Listen: which Thai did you hear? -> เขา
  - mcq: <span class="classchip low">Low class</span> ทำ has no tone mark. What tone do we read here? -> Mid
  - listen: Listen: which Thai did you hear? -> น้ำ
  - live-dead: Sound feel: live or dead? -> Live
  - mcq: <span class="classchip low">Low class</span> + Thai tone mark: which tone? -> High
  - fresh-decode: New word. Sound feel: live or dead? -> Live
  - fresh-decode: Fresh decode: how does this read? -> dtâi
  - live-dead: Sound feel: live or dead? -> Live
  - vowel-order: Vowel order: how do you read the vowel shape here? -> wraps the consonant
  - glyph-sound: What vowel sound? -> ai
  - glyph-choice: Hear it. Which vowel is it? -> อำ
  - fresh-decode: Fresh decode: how does this read? -> sák
  - word-reading: Mini decode: how does this read? -> châi
- Words:
  - เขา (khǎo) - core; wraps the consonant
  - น้ำ (náam) - core
  - ทำ (tham) - core
  - ใช่ (châi) - core

### l13 - Live or dead?
- Unit: C · The tone engine
- Glyphs: -
- Final jobs: ก -> -k (stop), ด -> -t (stop), น -> -n (ring)
- Quiz count: 17
- Quiz axes: final-job 3, fresh-decode 4, vowel-length 1, live-dead 1, listen 2, mcq 5, final 1
- Review after lesson: glyph cards 44, start-consonant glyphs 26, final cards 22, echo pool 76
- Workload: lesson payload glyph 0, final 0, quiz 17; Today route due 66, served 30/30, Consolidation day
- Surface audit: Hear & Pick Thai 53 items -> 10/10 PASS; Spell It 35 items -> 8/8 PASS; Echo 76 items -> 8/8 PASS; Sound Twins 8 sets -> 8/10 PASS; Tone listening 9 items -> 8/8 PASS; Mixed review 214 questions -> 10/10 PASS; Lesson payoff 13 items -> 1/1 PASS; Axis review 324 cards -> 40/40 PASS; Delayed retention 13 checks -> 1/1 PASS; Reading/stories 7 stories -> 1/1 PASS; Fluency reads 3 reads -> 1/1 PASS; Write it 48 items -> 8/8 PASS; Route talk 26 items -> 5/5 PASS; Decode Gym 22 items -> 10/10 PASS; Wild deck 0 items -> 0/8 PASS; Rare-letter class 0 items -> 0/0 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 3 cards -> 3/3 PASS; Contrast Block 4 blocks -> 1/1 PASS; Bangkok Mission 6 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, write-it, tone-rule, route-talk, reading, decode-gym
- Quiz prompts:
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - fresh-decode: New word. Work the route: which tone? -> High
  - vowel-length: Vowel length: short or long? -> Long
  - live-dead: Sound feel: live or dead? -> Dead
  - listen: Listen: which Thai did you hear? -> พูด
  - final-job: Ending job: what sound does this letter make at the end? -> -n
  - mcq: <span class="classchip low">Low class</span> No tone mark: use class + live/dead. Which tone? -> Falling
  - mcq: Live or dead? -> Dead
  - final-job: Ending job: what sound does this letter make at the end? -> -k
  - mcq: Live or dead? -> Dead
  - mcq: Live or dead? -> Live
  - fresh-decode: New word. Work the route: which tone? -> Mid
  - fresh-decode: Fresh decode: how does this read? -> rim
  - mcq: Live or dead? -> Live
  - final: Ending job: what sound does ก make here? -> -k
  - listen: Listen: which Thai did you hear? -> จาก
  - fresh-decode: Fresh decode: how does this read? -> raao
- Words:
  - จาก (jàak) - core; final ก -k; Long
  - พูด (phûut) - core; final ด -t
  - รัก (rák) - recognition; final ก -k; Short
  - นอน (norn) - core; final น -n

### l14 - Mid class: all five
- Unit: C · The tone engine
- Glyphs: ๊ ๋
- Final jobs: ง -> -ng (ring)
- Quiz count: 14
- Quiz axes: fresh-decode 4, mcq 4, listen 2, final-job 1, word-reading 1, live-dead 1, final 1
- Review after lesson: glyph cards 46, start-consonant glyphs 26, final cards 22, echo pool 80
- Workload: lesson payload glyph 2, final 0, quiz 14; Today route due 68, served 30/30, Consolidation day
- Surface audit: Hear & Pick Thai 57 items -> 10/10 PASS; Spell It 38 items -> 8/8 PASS; Echo 80 items -> 8/8 PASS; Sound Twins 8 sets -> 8/10 PASS; Tone listening 9 items -> 8/8 PASS; Mixed review 226 questions -> 10/10 PASS; Lesson payoff 14 items -> 1/1 PASS; Axis review 339 cards -> 40/40 PASS; Delayed retention 14 checks -> 1/1 PASS; Reading/stories 8 stories -> 1/1 PASS; Fluency reads 3 reads -> 1/1 PASS; Write it 48 items -> 8/8 PASS; Route talk 27 items -> 5/5 PASS; Decode Gym 24 items -> 10/10 PASS; Wild deck 0 items -> 0/8 PASS; Rare-letter class 0 items -> 0/0 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 3 cards -> 3/3 PASS; Contrast Block 4 blocks -> 1/1 PASS; Bangkok Mission 6 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, write-it, tone-rule, route-talk, reading, decode-gym
- Quiz prompts:
  - fresh-decode: New word. Work the route: which tone? -> Low
  - mcq: <span class='classchip mid'>mid class</span> + ไม้โท ้ gives which tone? -> Falling
  - mcq: <span class='classchip mid'>mid class</span> + ไม้ตรี ๊ gives which tone? -> High
  - fresh-decode: Fresh decode: how does this read? -> kham
  - listen: Listen: which Thai did you hear? -> ต้อง
  - mcq: <span class='classchip mid'>mid class</span> + ไม้เอก ่ gives which tone? -> Low
  - fresh-decode: New word. Work the route: which tone? -> Rising
  - fresh-decode: Fresh decode: how does this read? -> bpǎa
  - final-job: Ending job: what sound does this letter make at the end? -> -ng
  - word-reading: Mini decode: how does this read? -> dtôrng
  - live-dead: Sound feel: live or dead? -> Live
  - mcq: <span class="classchip mid">Mid class</span> + Thai tone mark: which tone? -> High
  - final: Ending job: what sound does ง make here? -> -ng
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
- Quiz count: 15
- Quiz axes: fresh-decode 4, final-job 3, mcq 4, live-dead 1, final 1, listen 2
- Review after lesson: glyph cards 46, start-consonant glyphs 26, final cards 22, echo pool 82
- Workload: lesson payload glyph 0, final 0, quiz 15; Today route due 68, served 30/30, Consolidation day
- Surface audit: Hear & Pick Thai 60 items -> 10/10 PASS; Spell It 41 items -> 8/8 PASS; Echo 82 items -> 8/8 PASS; Sound Twins 8 sets -> 8/10 PASS; Tone listening 9 items -> 8/8 PASS; Mixed review 235 questions -> 10/10 PASS; Lesson payoff 15 items -> 1/1 PASS; Axis review 355 cards -> 40/40 PASS; Delayed retention 15 checks -> 1/1 PASS; Reading/stories 8 stories -> 1/1 PASS; Fluency reads 3 reads -> 1/1 PASS; Write it 48 items -> 8/8 PASS; Route talk 30 items -> 5/5 PASS; Decode Gym 26 items -> 10/10 PASS; Wild deck 0 items -> 0/8 PASS; Rare-letter class 0 items -> 0/0 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 4 cards -> 4/4 PASS; Contrast Block 5 blocks -> 1/1 PASS; Bangkok Mission 6 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, write-it, tone-rule, route-talk, reading, decode-gym
- Quiz prompts:
  - fresh-decode: New word. Work the route: which tone? -> Falling
  - final-job: Ending job: what sound does this letter make at the end? -> -ng
  - mcq: <span class='classchip high'>high class</span> + ไม้โท ้ gives which tone? -> Falling
  - live-dead: Sound feel: live or dead? -> Live
  - fresh-decode: Fresh decode: how does this read? -> jóhk
  - final: Ending job: what sound does ว make here? -> -aao
  - listen: Listen: which Thai did you hear? -> ห้อง
  - final-job: Ending job: what sound does this letter make at the end? -> -m
  - listen: Listen: which Thai did you hear? -> ข้าว
  - mcq: <span class='classchip high'>high class</span> + dead syllable gives which tone? -> Low
  - mcq: <span class='classchip high'>high class</span>, live, no mark gives which tone? -> Rising
  - fresh-decode: New word. Work the route: which tone? -> Low
  - fresh-decode: Fresh decode: how does this read? -> gà
  - mcq: <span class="classchip high">High class</span> + Thai tone mark: which tone? -> Falling
  - final-job: Ending job: what sound does this letter make at the end? -> -ao/-aao
- Words:
  - ข้าว (khâao) - core; final ว -aao
  - ห้อง (hôrng) - core; final ง -ng
  - ถาม (thǎam) - core; final ม -m

### l16 - Low class: the flip
- Unit: C · The tone engine
- Glyphs: ็
- Final jobs: ง -> -ng (ring), ก -> -k (stop)
- Quiz count: 15
- Quiz axes: final 1, fresh-decode 4, listen 2, final-job 2, mcq 4, live-dead 1, vowel-length 1
- Review after lesson: glyph cards 47, start-consonant glyphs 26, final cards 22, echo pool 86
- Workload: lesson payload glyph 1, final 0, quiz 15; Today route due 69, served 30/30, Consolidation day
- Surface audit: Hear & Pick Thai 64 items -> 10/10 PASS; Spell It 44 items -> 8/8 PASS; Echo 86 items -> 8/8 PASS; Sound Twins 8 sets -> 8/10 PASS; Tone listening 9 items -> 8/8 PASS; Mixed review 247 questions -> 10/10 PASS; Lesson payoff 16 items -> 1/1 PASS; Axis review 373 cards -> 40/40 PASS; Delayed retention 16 checks -> 1/1 PASS; Reading/stories 9 stories -> 1/1 PASS; Fluency reads 3 reads -> 1/1 PASS; Write it 48 items -> 8/8 PASS; Route talk 32 items -> 5/5 PASS; Decode Gym 30 items -> 10/10 PASS; Wild deck 0 items -> 0/8 PASS; Rare-letter class 0 items -> 0/0 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 4 cards -> 4/4 PASS; Contrast Block 5 blocks -> 1/1 PASS; Bangkok Mission 6 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, write-it, tone-rule, route-talk, reading, decode-gym
- Quiz prompts:
  - final: Ending job: what sound does ง make here? -> -ng
  - fresh-decode: Fresh decode: how does this read? -> yím
  - listen: Listen: which Thai did you hear? -> พี่
  - fresh-decode: New word. Sound feel: live or dead? -> Live
  - final-job: Ending job: what sound does this letter make at the end? -> -k
  - mcq: <span class='classchip low'>low class</span> + ไม้เอก ่ gives which tone? -> Falling
  - mcq: <span class='classchip low'>low class</span> + ไม้โท ้ gives which tone? -> High
  - final-job: Ending job: what sound does this letter make at the end? -> -ng
  - mcq: <span class='classchip low'>low class</span> + dead-short gives which tone? -> High
  - fresh-decode: New word. Sound feel: live or dead? -> Live
  - fresh-decode: Fresh decode: how does this read? -> dtòr
  - live-dead: Sound feel: live or dead? -> Live
  - vowel-length: Vowel length: short or long? -> Short
  - mcq: <span class="classchip low">Low class</span> + Thai tone mark: which tone? -> High
  - listen: Listen: which Thai did you hear? -> น้อง
- Words:
  - น้อง (nórng) - core; final ง -ng
  - พี่ (phîi) - core
  - ช้า (cháa) - core
  - เล็ก (lék) - recognition; final ก -k; Short

### l17 - The silent leaders
- Unit: C · The tone engine
- Glyphs: -
- Final jobs: ก -> -k (stop)
- Quiz count: 14
- Quiz axes: fresh-decode 4, mcq 4, final-job 1, word-reading 1, listen 2, final 1, live-dead 1
- Review after lesson: glyph cards 47, start-consonant glyphs 26, final cards 22, echo pool 93
- Workload: lesson payload glyph 0, final 0, quiz 14; Today route due 69, served 30/30, Consolidation day
- Surface audit: Hear & Pick Thai 69 items -> 10/10 PASS; Spell It 48 items -> 8/8 PASS; Echo 93 items -> 8/8 PASS; Sound Twins 10 sets -> 10/10 PASS; Tone listening 11 items -> 8/8 PASS; Mixed review 262 questions -> 10/10 PASS; Lesson payoff 17 items -> 1/1 PASS; Axis review 391 cards -> 40/40 PASS; Delayed retention 17 checks -> 1/1 PASS; Reading/stories 12 stories -> 1/1 PASS; Fluency reads 4 reads -> 1/1 PASS; Write it 48 items -> 8/8 PASS; Route talk 33 items -> 5/5 PASS; Decode Gym 36 items -> 10/10 PASS; Wild deck 0 items -> 0/8 PASS; Rare-letter class 0 items -> 0/0 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 4 cards -> 4/4 PASS; Contrast Block 5 blocks -> 1/1 PASS; Bangkok Mission 6 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, write-it, tone-rule, route-talk, reading, decode-gym
- Quiz prompts:
  - fresh-decode: Fresh decode: how does this read? -> khaang
  - mcq: Silent อ in the four special words uses which class row? -> Mid class
  - final-job: Ending job: what sound does this letter make at the end? -> -k
  - word-reading: Mini decode: how does this read? -> mǎi
  - mcq: What does silent ห do here? -> Makes ม follow high-class tone rules
  - fresh-decode: New word. Vowel length: short or long? -> Short
  - fresh-decode: Fresh decode: how does this read? -> dìp
  - mcq: Silent ห makes น follow <span class='classchip high'>high class</span> rules. Which tone? -> Rising
  - listen: Listen: which Thai did you hear? -> อยู่
  - final: Ending job: what sound does ก make here? -> -k
  - fresh-decode: New word. Sound feel: live or dead? -> Live
  - live-dead: Sound feel: live or dead? -> Dead
  - mcq: <span class="classchip mid">Mid class</span> No tone mark: use class + live/dead. Which tone? -> Low
  - listen: Listen: which Thai did you hear? -> ไหน
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
- Quiz count: 16
- Quiz axes: vowel-order 1, fresh-decode 4, listen 2, mcq 4, final-job 1, live-dead 1, vowel-length 1, cluster 1, final 1
- Review after lesson: glyph cards 47, start-consonant glyphs 26, final cards 22, echo pool 97
- Workload: lesson payload glyph 0, final 0, quiz 16; Today route due 69, served 30/30, Consolidation day
- Surface audit: Hear & Pick Thai 73 items -> 10/10 PASS; Spell It 51 items -> 8/8 PASS; Echo 97 items -> 8/8 PASS; Sound Twins 10 sets -> 10/10 PASS; Tone listening 11 items -> 8/8 PASS; Mixed review 274 questions -> 10/10 PASS; Lesson payoff 18 items -> 1/1 PASS; Axis review 409 cards -> 40/40 PASS; Delayed retention 18 checks -> 1/1 PASS; Reading/stories 14 stories -> 1/1 PASS; Fluency reads 4 reads -> 1/1 PASS; Write it 48 items -> 8/8 PASS; Route talk 37 items -> 5/5 PASS; Decode Gym 43 items -> 10/10 PASS; Wild deck 0 items -> 0/8 PASS; Rare-letter class 0 items -> 0/0 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 8 cards -> 8/8 PASS; Contrast Block 8 blocks -> 1/1 PASS; Bangkok Mission 7 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, write-it, tone-rule, route-talk, reading, decode-gym
- Quiz prompts:
  - vowel-order: Vowel order: how do you read the vowel shape here? -> written before, spoken after
  - fresh-decode: New word. Work the route: which tone? -> Mid
  - listen: Listen: which Thai did you hear? -> ครู
  - mcq: What makes ใกล้ different from ไกล? -> The Thai tone mark
  - fresh-decode: New word. Sound feel: live or dead? -> Live
  - fresh-decode: Fresh decode: how does this read? -> dtòr
  - mcq: A true cluster takes its class from which letter? -> ค
  - final-job: Ending job: what sound does this letter make at the end? -> -p
  - fresh-decode: Fresh decode: how does this read? -> thâm
  - live-dead: Sound feel: live or dead? -> Dead
  - mcq: <span class='classchip low'>low class</span> + dead-short gives which tone? -> High
  - listen: Listen: which Thai did you hear? -> ครับ
  - vowel-length: Vowel length: short or long? -> Short
  - mcq: <span class="classchip low">Low class</span> ครู has no tone mark. What tone do we read here? -> Mid
  - cluster: Cluster check: what is happening here? -> true cluster
  - final: Ending job: what sound does บ make here? -> -p
- Words:
  - ครับ (khráp) - core; final บ -p; Short; true cluster
  - ปลา (bplaa) - recognition; Long; true cluster
  - ครู (khruu) - core; Long; true cluster
  - ใกล้ (glâi) - core; written before, spoken after; true cluster

### l19 - Fake clusters
- Unit: D · Clusters & the long tail
- Glyphs: -
- Final jobs: ง -> -ng (ring), บ -> -p (stop), ย -> -y glide (glide)
- Quiz count: 16
- Quiz axes: live-dead 1, cluster 1, final-job 3, mcq 4, fresh-decode 4, listen 2, final 1
- Review after lesson: glyph cards 47, start-consonant glyphs 26, final cards 22, echo pool 101
- Workload: lesson payload glyph 0, final 0, quiz 16; Today route due 69, served 30/30, Consolidation day
- Surface audit: Hear & Pick Thai 77 items -> 10/10 PASS; Spell It 53 items -> 8/8 PASS; Echo 101 items -> 8/8 PASS; Sound Twins 10 sets -> 10/10 PASS; Tone listening 11 items -> 8/8 PASS; Mixed review 282 questions -> 10/10 PASS; Lesson payoff 19 items -> 1/1 PASS; Axis review 426 cards -> 40/40 PASS; Delayed retention 19 checks -> 1/1 PASS; Reading/stories 16 stories -> 1/1 PASS; Fluency reads 4 reads -> 1/1 PASS; Write it 48 items -> 8/8 PASS; Route talk 39 items -> 5/5 PASS; Decode Gym 45 items -> 10/10 PASS; Wild deck 0 items -> 0/8 PASS; Rare-letter class 0 items -> 0/0 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 0 items -> 0/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 8 cards -> 8/8 PASS; Contrast Block 9 blocks -> 1/1 PASS; Bangkok Mission 7 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, write-it, tone-rule, route-talk, reading, decode-gym
- Quiz prompts:
  - live-dead: Sound feel: live or dead? -> Live
  - cluster: Cluster check: what is happening here? -> fake cluster
  - final-job: Ending job: what sound does this letter make at the end? -> -p
  - final-job: Ending job: what sound does this letter make at the end? -> -y glide
  - mcq: <span class="classchip mid">Mid class</span> จริง has no tone mark. What tone do we read here? -> Mid
  - fresh-decode: New word. Work the route: which tone? -> Mid
  - final-job: Ending job: what sound does this letter make at the end? -> -ng
  - listen: Listen: which Thai did you hear? -> จริง
  - final: Ending job: what sound does ง make here? -> -ng
  - mcq: ทร usually begins with which sound? -> s
  - listen: Listen: which Thai did you hear? -> อร่อย
  - mcq: What job is อ doing? -> Carrying the opening vowel
  - mcq: What happens to ร here? -> It drops out
  - fresh-decode: New word. Sound feel: live or dead? -> Live
  - fresh-decode: Fresh decode: how does this read? -> nâng
  - fresh-decode: Fresh decode: how does this read? -> bao
- Words:
  - จริง (jing) - core; final ง -ng; fake cluster
  - ทราบ (sâap) - recognition; final บ -p; fake cluster
  - สร้าง (sâang) - decode; final ง -ng; fake cluster
  - อร่อย (a-ròy) - core; final ย -oy

### l20 - Formal friends
- Unit: D · Clusters & the long tail
- Glyphs: ธ ภ ศ ษ ญ ฮ เ◌อ ์
- Final jobs: ธ -> -t (stop), ภ -> -p (stop), ศ -> -t (stop), ษ -> -t (stop), ญ -> -n (ring), ง -> -ng (ring), น -> -n (ring)
- Quiz count: 23
- Quiz axes: fresh-decode 4, final-job 7, listen 1, vowel-order 1, class 6, live-dead 1, mcq 2, final 1
- Review after lesson: glyph cards 55, start-consonant glyphs 32, final cards 27, echo pool 105
- Workload: lesson payload glyph 8, final 5, quiz 23; Today route due 82, served 30/30, Consolidation day
- Surface audit: Hear & Pick Thai 81 items -> 10/10 PASS; Spell It 54 items -> 8/8 PASS; Echo 105 items -> 8/8 PASS; Sound Twins 10 sets -> 10/10 PASS; Tone listening 11 items -> 8/8 PASS; Mixed review 309 questions -> 10/10 PASS; Lesson payoff 20 items -> 1/1 PASS; Axis review 465 cards -> 40/40 PASS; Delayed retention 20 checks -> 1/1 PASS; Reading/stories 17 stories -> 1/1 PASS; Fluency reads 4 reads -> 1/1 PASS; Write it 59 items -> 8/8 PASS; Route talk 39 items -> 5/5 PASS; Decode Gym 47 items -> 10/10 PASS; Wild deck 0 items -> 0/8 PASS; Rare-letter class 0 items -> 0/0 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 3 items -> 3/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 8 cards -> 8/8 PASS; Contrast Block 9 blocks -> 1/1 PASS; Bangkok Mission 7 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, write-it, tone-rule, route-talk, reading, decode-gym, chunk
- Quiz prompts:
  - fresh-decode: New word. Work the route: which tone? -> Mid
  - fresh-decode: Fresh decode: how does this read? -> khan
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - listen: Listen: which Thai did you hear? -> ภาษา
  - vowel-order: Vowel order: how do you read the vowel shape here? -> wraps the consonant
  - class: Which class? -> High class
  - class: Which class? -> High class
  - final-job: Ending job: what sound does this letter make at the end? -> -n
  - live-dead: Sound feel: live or dead? -> Live
  - mcq: <span class="classchip high">High class</span> No tone mark: use class + live/dead. Which tone? -> Rising
  - mcq: In ศูนย์, what does ์ do? -> Silences the marked letter
  - class: Which class? -> Low class
  - fresh-decode: Fresh decode: how does this read? -> bao
  - fresh-decode: New word. Sound feel: live or dead? -> Dead
  - class: Which class? -> Low class
  - class: Which class? -> Low class
  - final: Ending job: what sound does ง make here? -> -ng
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - final-job: Ending job: what sound does this letter make at the end? -> -ng
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - final-job: Ending job: what sound does this letter make at the end? -> -n
  - class: Which class? -> Low class
  - final-job: Ending job: what sound does this letter make at the end? -> -p
- Words:
  - เธอ (ter) - recognition; wraps the consonant
  - ภาษา (phaa-sǎa) - core
  - ผู้หญิง (phûu-yǐng) - recognition; final ง -ng
  - ศูนย์ (sǔun) - recognition; final น -n

### l21 - Rare-letter class rows
- Unit: D · Clusters & the long tail
- Glyphs: ฉ ฬ
- Final jobs: ฬ -> -n (ring), น -> -n (ring), ก -> -k (stop)
- Quiz count: 18
- Quiz axes: final-job 3, live-dead 1, hidden-vowel 1, rare-class 4, listen 1, class 2, fresh-decode 4, final 1, mcq 1
- Review after lesson: glyph cards 57, start-consonant glyphs 34, final cards 28, echo pool 109
- Workload: lesson payload glyph 2, final 1, quiz 18; Today route due 85, served 30/30, Consolidation day
- Surface audit: Hear & Pick Thai 85 items -> 10/10 PASS; Spell It 55 items -> 8/8 PASS; Echo 109 items -> 8/8 PASS; Sound Twins 10 sets -> 10/10 PASS; Tone listening 11 items -> 8/8 PASS; Mixed review 321 questions -> 10/10 PASS; Lesson payoff 21 items -> 1/1 PASS; Axis review 485 cards -> 40/40 PASS; Delayed retention 21 checks -> 1/1 PASS; Reading/stories 17 stories -> 1/1 PASS; Fluency reads 4 reads -> 1/1 PASS; Write it 62 items -> 8/8 PASS; Route talk 40 items -> 5/5 PASS; Decode Gym 49 items -> 10/10 PASS; Wild deck 0 items -> 0/8 PASS; Rare-letter class 8 items -> 8/8 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 3 items -> 3/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 8 cards -> 8/8 PASS; Contrast Block 9 blocks -> 1/1 PASS; Bangkok Mission 7 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, write-it, tone-rule, route-talk, reading, decode-gym, chunk, rare-letters
- Quiz prompts:
  - final-job: Ending job: what sound does this letter make at the end? -> -n
  - live-dead: Sound feel: live or dead? -> Live
  - hidden-vowel: Hidden vowel: what sound is added here? -> hidden a
  - rare-class: Rare-letter class row? -> High class
  - final-job: Ending job: what sound does this letter make at the end? -> -n
  - listen: Listen: which Thai did you hear? -> สนุก
  - class: Which class? -> High class
  - fresh-decode: Fresh decode: how does this read? -> mùek
  - rare-class: Rare-letter class row? -> Mid class
  - rare-class: Rare-letter class row? -> Low class
  - fresh-decode: New word. Sound feel: live or dead? -> Live
  - fresh-decode: Fresh decode: how does this read? -> phǒrm
  - final: Ending job: what sound does น make here? -> -n
  - final-job: Ending job: what sound does this letter make at the end? -> -k
  - class: Which class? -> Low class
  - fresh-decode: New word. Vowel length: short or long? -> Short
  - rare-class: Formal s-family class row? -> High class
  - mcq: <span class="classchip high">High class</span> No tone mark: use class + live/dead. Which tone? -> Rising
- Words:
  - ฉัน (chǎn) - recognition; final น -n
  - กีฬา (gii-laa) - decode
  - ผู้ใหญ่ (phûu-yài) - recognition
  - สนุก (sà-nùk) - core; final ก -k; hidden hidden a

### l22 - Three-piece vowels
- Unit: D · Clusters & the long tail
- Glyphs: เ◌ีย เ◌ือ ◌ัว
- Final jobs: น -> -n (ring)
- Quiz count: 14
- Quiz axes: vowel-order 1, fresh-decode 4, mcq 4, listen 2, final 1, live-dead 1, final-job 1
- Review after lesson: glyph cards 60, start-consonant glyphs 34, final cards 28, echo pool 115
- Workload: lesson payload glyph 3, final 0, quiz 14; Today route due 88, served 30/30, Consolidation day
- Surface audit: Hear & Pick Thai 89 items -> 10/10 PASS; Spell It 58 items -> 8/8 PASS; Echo 115 items -> 8/8 PASS; Sound Twins 11 sets -> 10/10 PASS; Tone listening 11 items -> 8/8 PASS; Mixed review 333 questions -> 10/10 PASS; Lesson payoff 22 items -> 1/1 PASS; Axis review 504 cards -> 40/40 PASS; Delayed retention 22 checks -> 1/1 PASS; Reading/stories 18 stories -> 1/1 PASS; Fluency reads 4 reads -> 1/1 PASS; Write it 62 items -> 8/8 PASS; Route talk 42 items -> 5/5 PASS; Decode Gym 59 items -> 10/10 PASS; Wild deck 0 items -> 0/8 PASS; Rare-letter class 8 items -> 8/8 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 4 items -> 4/8 PASS; Seen in the wild 0 signs -> 0/0 PASS; Font Shock 0 items -> 0/8 PASS; Mouth Coach 8 cards -> 8/8 PASS; Contrast Block 9 blocks -> 1/1 PASS; Bangkok Mission 7 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, write-it, tone-rule, route-talk, reading, decode-gym, chunk, rare-letters
- Quiz prompts:
  - vowel-order: Vowel order: how do you read the vowel shape here? -> three pieces around the consonant
  - fresh-decode: Fresh decode: how does this read? -> chaa
  - mcq: What still drives the tone in a three-piece vowel? -> The consonant class
  - mcq: <span class="classchip high">High class</span> + Thai tone mark: which tone? -> Falling
  - listen: Listen: which Thai did you hear? -> เพื่อน
  - final: Ending job: what sound does น make here? -> -n
  - live-dead: Sound feel: live or dead? -> Live
  - listen: Listen: which Thai did you hear? -> เรียน
  - fresh-decode: New word. Sound feel: live or dead? -> Live
  - fresh-decode: Fresh decode: how does this read? -> lang
  - mcq: <span class="classchip low">Low class</span> เรียน has no tone mark. What tone do we read here? -> Mid
  - mcq: <span class='classchip low'>low class</span> + ไม้เอก ่ gives which tone? -> Falling
  - fresh-decode: New word. Sound feel: live or dead? -> Dead
  - final-job: Ending job: what sound does this letter make at the end? -> -n
- Words:
  - เรียน (rian) - core; final น -n; three pieces around the consonant
  - เพื่อน (phûean) - core; final น -n; three pieces around the consonant
  - ตัว (dtua) - recognition; three pieces around the consonant
  - เสื้อ (sûea) - core; three pieces around the consonant

### l23 - Useful signs
- Unit: D · Clusters & the long tail
- Glyphs: ๆ
- Final jobs: ง -> -ng (ring), ก -> -k (stop)
- Quiz count: 14
- Quiz axes: live-dead 1, mcq 4, final-job 2, listen 2, fresh-decode 4, final 1
- Review after lesson: glyph cards 61, start-consonant glyphs 34, final cards 28, echo pool 119
- Workload: lesson payload glyph 1, final 0, quiz 14; Today route due 89, served 30/30, Consolidation day
- Surface audit: Hear & Pick Thai 93 items -> 10/10 PASS; Spell It 62 items -> 8/8 PASS; Echo 119 items -> 8/8 PASS; Sound Twins 11 sets -> 10/10 PASS; Tone listening 11 items -> 8/8 PASS; Mixed review 341 questions -> 10/10 PASS; Lesson payoff 23 items -> 1/1 PASS; Axis review 520 cards -> 40/40 PASS; Delayed retention 23 checks -> 1/1 PASS; Reading/stories 19 stories -> 1/1 PASS; Fluency reads 5 reads -> 1/1 PASS; Write it 62 items -> 8/8 PASS; Route talk 42 items -> 5/5 PASS; Decode Gym 59 items -> 10/10 PASS; Wild deck 0 items -> 0/8 PASS; Rare-letter class 8 items -> 8/8 PASS; Phase 1 completion checkpoint 0 checks -> 0/1 PASS; Chunk this word 8 items -> 8/8 PASS; Seen in the wild 4 signs -> 4/4 PASS; Font Shock 4 items -> 4/8 PASS; Mouth Coach 10 cards -> 10/10 PASS; Contrast Block 9 blocks -> 1/1 PASS; Bangkok Mission 8 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, write-it, tone-rule, route-talk, reading, decode-gym, chunk, font-shock, rare-letters
- Quiz prompts:
  - live-dead: Sound feel: live or dead? -> Live
  - mcq: How does this sign read? -> thaang-òrk
  - mcq: What does ๆ do? -> Repeats the previous word
  - final-job: Ending job: what sound does this letter make at the end? -> -ng
  - listen: Listen: which Thai did you hear? -> ระวัง
  - fresh-decode: Fresh decode: how does this read? -> phung
  - listen: Listen: which Thai did you hear? -> ทางออก
  - final-job: Ending job: what sound does this letter make at the end? -> -k
  - fresh-decode: New word. Vowel length: short or long? -> Long
  - final: Ending job: what sound does ง make here? -> -ng
  - fresh-decode: New word. Work the route: which tone? -> Low
  - fresh-decode: Fresh decode: how does this read? -> dàa
  - mcq: How does this sign read? -> thaang-khâo
  - mcq: The first syllable ระ is live or dead? -> Dead
- Words:
  - ระวัง (rá-wang) - core; final ง -ng
  - ทางออก (thaang-òrk) - core; final ก -k
  - ทางเข้า (thaang-khâo) - core; final ง -ng
  - ห้องน้ำ (hôrng-náam) - core; final ง -ng

### l24 - Capstone: read Bangkok
- Unit: D · Clusters & the long tail
- Glyphs: เ◌ิ
- Final jobs: ด -> -t (stop), ม -> -m (ring), ร -> -n (ring)
- Quiz count: 16
- Quiz axes: fresh-decode 4, final 1, mcq 4, live-dead 1, listen 2, final-job 3, vowel-order 1
- Review after lesson: glyph cards 62, start-consonant glyphs 34, final cards 28, echo pool 123
- Workload: lesson payload glyph 1, final 0, quiz 16; Today route due 90, served 30/30, Consolidation day
- Surface audit: Hear & Pick Thai 97 items -> 10/10 PASS; Spell It 66 items -> 8/8 PASS; Echo 123 items -> 8/8 PASS; Sound Twins 11 sets -> 10/10 PASS; Tone listening 11 items -> 8/8 PASS; Mixed review 352 questions -> 10/10 PASS; Lesson payoff 24 items -> 1/1 PASS; Axis review 540 cards -> 40/40 PASS; Delayed retention 24 checks -> 1/1 PASS; Reading/stories 25 stories -> 1/1 PASS; Fluency reads 6 reads -> 1/1 PASS; Write it 62 items -> 8/8 PASS; Route talk 45 items -> 5/5 PASS; Decode Gym 63 items -> 10/10 PASS; Wild deck 0 items -> 0/8 PASS; Rare-letter class 8 items -> 8/8 PASS; Phase 1 completion checkpoint 23 checks -> 1/1 PASS; Chunk this word 11 items -> 8/8 PASS; Seen in the wild 10 signs -> 10/10 PASS; Font Shock 10 items -> 8/8 PASS; Mouth Coach 10 cards -> 10/10 PASS; Contrast Block 9 blocks -> 1/1 PASS; Bangkok Mission 9 missions -> 1/1 PASS
- Unlocked drills: hear-thai, tone-listen, twins, echo, spell, clinic, sprint, ghost, write-it, tone-rule, route-talk, reading, decode-gym, chunk, font-shock, rare-letters
- Quiz prompts:
  - fresh-decode: New word. Sound feel: live or dead? -> Live
  - fresh-decode: Fresh decode: how does this read? -> dtii
  - fresh-decode: New word. Sound feel: live or dead? -> Dead
  - final: Ending job: what sound does ด make here? -> -t
  - mcq: <span class="classchip mid">Mid class</span> No tone mark: use class + live/dead. Which tone? -> Low
  - live-dead: Sound feel: live or dead? -> Dead
  - listen: Listen: which Thai did you hear? -> ปิด
  - mcq: <span class='classchip mid'>mid class</span> + dead syllable gives which tone? -> Low
  - listen: Listen: which Thai did you hear? -> เปิด
  - mcq: How does this sign read? -> hâam
  - final-job: Ending job: what sound does this letter make at the end? -> -t
  - mcq: How does this read? -> aa-hǎan
  - vowel-order: Vowel order: how do you read the vowel shape here? -> written before, spoken after
  - final-job: Ending job: what sound does this letter make at the end? -> -m
  - final-job: Ending job: what sound does this letter make at the end? -> -n
  - fresh-decode: Fresh decode: how does this read? -> dao
- Words:
  - เปิด (bpèrt) - core; final ด -t; written before, spoken after
  - ปิด (bpìt) - core; final ด -t
  - ห้าม (hâam) - core; final ม -m
  - อาหาร (aa-hǎan) - core; final ร -n
