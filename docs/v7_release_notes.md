# Phase 1 and Conversation-First Release Notes (v7-v8.2.3)

## Complete beginner conversation loop · v8.2.3

`v8.2.3` turns the repaired first scene into a gated A0 practice loop. Six cue/reply pairs must be heard before the complete exchange; the full 13-turn scene has active-turn, stop and restart controls; four active replies use shuffled choices with compulsory wrong-answer repair; one phrase is practised with optional local recording; one substitution is pre-taught; and all four active prompts return in supported role-play.

The spoken scene is now the daily minimum and the full Phase 1 route is collapsed behind an optional reading control. Current-day credit requires bounded `lastRun` interaction evidence, while lessons, SRS, mastery, tokens, streaks, active-time and reading evidence remain untouched. Device TTS is the fixed pronunciation model—there is no native-audio or native-review prerequisite and no pronunciation score. `validateV823ConversationPracticeContracts()` plus `tools/conversation-smoke.js` bring the audit to 63 validators.

## Zero-knowledge first-lesson repair · v8.2.2

`v8.2.2` replaces the cold Thai gist opener with an English-only map of the six things the learner will accomplish. It then teaches each exact vendor cue and learner reply as a visually separated pair, with English meaning before Thai and distinct audio controls.

Only after all six pairs does the app reveal the complete exchange. Each turn retains English meaning, and full playback uses separate utterances with a 900ms gap between speakers. The opening greeting and all later turns are aligned with their taught cues. `validateV822BeginnerConversationContracts()` brings the audit to 62 validators without changing state, progression, Phase 1 or the `aan-thai-v8-2-1` cache.

## Conversation-first front door · v8.2.1

`v8.2.1` makes usable conversational Thai for daily Bangkok life the app's actual front door. The masthead, first-run onboarding, Today order, About screen and install description now lead with speaking. A fresh learner finishes onboarding with `Start speaking` and enters the food-ordering scene; its recommended card appears above an explicitly optional Phase 1 reading companion.

The complete reading course and the v8.2.0 pilot remain technically intact. Reading progress never gates the spoken scene, and conversation completion still cannot alter lessons, SRS, mastery, required literacy work, streaks, tokens, active-time credit or phrase-review cards. `validateV821ConversationFrontDoorContracts()` brings the generated audit to 61 validators. The cache advances to `aan-thai-v8-2-1` solely to refresh the changed cache-first manifest on installed copies.

## Conversation-first field test · v8.2.0

`v8.2.0` freezes the v8.1.0 Phase 1 reading course and adds one isolated, optional 8–12 minute food-ordering pilot on Today. Its original gist-first opening is superseded by the v8.2.2 meaning-first repair; the remaining response-choice, temporary local record/playback, substitution, supported role-play and private self-rating surfaces remain.

The pilot uses a dedicated player and separate `FOOD_ORDER_PILOT` content object. It does not enter lessons, the phrase-review pool, SRS, mastery, blockers, required Today work, streaks, tokens or active-time credit. Its optional `conversation` namespace stores only bounded run count, first/last completion day and latest self-rating; no answers or recordings persist.

Device voice is now the explicit app pronunciation model rather than native listening evidence or pronunciation scoring. The product does not depend on native audio or a native reviewer. `validateV82ConversationPilotContracts()` remains the original v8.2.0 boundary guard; the current flow and evidence contract live in `docs/v8_2_conversation_pilot_notes.md`.

## Street Arcade · v8.1.0

`v8.1.0` adds optional short games to the completed Phase 1 course without turning them into a second progression system. Parcel Sort opens free after Lesson 2; Night Market Hunt can be bought after Lesson 4; and Tuk-Tuk Tone Run can be bought after Lesson 13. Each cabinet rebuilds its round pool from completed lessons and the existing prerequisite engine, weights some choices by known weaknesses, and records only personal best, combo and stars.

The three sealed transfer corpora never enter arcade play. Games do not create SRS cards, complete required Today depth, change mastery, extend streaks or pay repeatable tokens. Underlying Class Sprint, Hear & Pick Thai and Tone Trainer practice remains free.

Ekkamai Sunset, Yaowarat Neon and Tuk-Tuk Chrome join the shop, all themes can be previewed without saving, and existing paid themes receive stronger code-native motifs. Arcade sounds are synthesized locally and follow the existing sound toggle plus Default/Ranat voice. `validateV81ArcadeContracts()` brings the generated audit to 59 validators; detailed boundaries live in `docs/v8_1_street_arcade_notes.md`.

## Phase 1 complete · v8.0.0

`v8.0.0` promotes the completed Phase 1 course out of its generic beta presentation with the Bangkok Street Atlas identity. Today is a printed route ticket and transit line; Practice, Tones, Read and Progress become recognisable workbook, mechanism-board, signboard and collectible-map spaces; lessons use a ruled sheet; and the shop shows theme swatches. All visuals remain code-native and offline.

The retention and learning machine underneath is still v7.9.0: the same letter → class → tone curriculum, sealed fresh/assessment/retention corpora, SRS, delayed checks, lesson miss loop, mastery chains, completion checkpoint and maintenance route. v8 adds no learner state, reward, token, blocker, network request, audio/font asset or service-worker cache change.

`validateV8VisualContracts()` brings the generated audit to 58 validators and guards the Street Atlas tokens, solid-surface/glass-retirement boundary, Today rail, lesson sheet, shop swatches, class-colour isolation, accessibility markers, masthead and current v8 identity. Detailed visual notes live in `docs/v8_visual_overhaul_notes.md`.

## Phase 1 · 1.0 beta

`v7.0.0` marks Phase 1 as feature-complete for beta: the app teaches the script-reading spine from zero through the final controlled-reading checkpoint, then routes completed learners into maintenance rather than a Phase 2 placeholder.

`v7.1.0` keeps that beta scope intact while repairing paid visual themes, objective feedback sound coverage and in-progress lesson/checkpoint exit safety.

`v7.2.0` expands optional shop spenders with themes, a synthesized sound voice, story pack, phrase packs and economy notes while keeping paid content outside lesson gates, SRS scheduling and mastery.

`v7.2.1` ships the post-review cleanup as a patch release: the runtime identity moves to v7.2.1, the new theme contrast map matches rendered CSS, paid story surfaces stay ownership-aware and unit boss quizzes share the in-progress exit guard.

`v7.3.0` adds reading mileage and automaticity practice inside the existing Phase 1 beta: eight more decodable Reading-room stories, word-recurrence audit evidence, optional timed re-reads, a gated Tone sprint, Decode Gym cluster boosting and Wild deck Drill this.

`v7.4.0` adds street-read automaticity inside completed Reading-room stories: the learner can switch a completed story from spaced words to edge-to-edge running Thai, time that unspaced pass under a distinct `street:` `readTimes` key, and read three new free LOW-tail stories without changing the curriculum, gates or review load.

`v7.5.0` adds a time-aware Today fill layer: the app counts active seconds only inside real learning surfaces, shows one skippable keep-going suggestion after the required route while measured time is below the 30/45-minute target, and keeps time display-only.

`v7.6.0` adds fresh-decode transfer corpora for lesson/maintenance practice and sealed mastery gates; `v7.7.0` removes class-colour scaffolding from later tone questions; `v7.8.0` resolves lesson misses and replaces gate coin flips with structure chains.

`v7.9.0` seals delayed retention too: 96 additional never-taught real words belong only to +1-day, +7-day or post-completion +30-day recall. The existing +1/+7 check sizes stay fixed, first-attempt transfer evidence is preserved, and the new month check cannot revoke completion.

What beta means here:

- Phase 1 reading, consonant class, tone logic, final jobs, controlled reads, review, backup/export and maintenance routing are complete enough for owner testing and public self-release preparation.
- The release is still a beta because final iPhone/PWA checks, live deployment propagation and real learner-device use can surface small bugs.
- Until public self-release, changes should be bug fixes, copy clarifications, release safety fixes, validator/doc corrections or explicitly scoped optional-practice mileage only.

## v7.9.0 scope

- Retention corpus: `RETENTION_DECODE_BANK` contains 96 tone-verified, gate-safe monosyllables with zero overlap across lesson/maintenance, assessment or any other app content.
- +1/+7 recall: Lessons 4–24 receive two fixed words per stage; three neutral transfer questions replace familiar-axis slots inside the existing 6/8-question checks at the unchanged 80% bar.
- Day-30 cold decode: thirty days after the first Phase 1 pass, Today serves all twelve reserved `cold30` words as fourteen neutral questions at 85%; due SRS review still leads and failure never removes completion.
- Evidence and repair: first-attempt percentages stay immutable; retry is remediation, and the month-check repair button uses the separate maintenance Fresh-decode pool.
- State/migration: optional `retention[lesson].firstPct`, `phase1Completion.firstPassedAt` and `phase1Completion.retention30` only; existing completed learners are scheduled safely by `repairStateForV79()`.
- Validation: `validateV79RetentionDecodeContracts()`, the generated 57-validator audit, the standalone three-corpus checker and the precommit tone walk guard isolation, counts, decodability, routes, serving, migration and Today priority.
- Scope boundary: no curriculum, SRS interval, lesson blocker, ordinary workload, reward, economy, audio/font asset, runtime network or service-worker cache change.

## v7.5.0 scope

- Active-time tally: optional `days[date].secs` is created lazily only after real active learning time is measured, with idle/background/device-voice guards.
- Today fill layer: after the required route is complete, Today can suggest one unlocked existing practice surface, completed-story Street/timed re-read, completed fluency re-read, maintenance rematch or next lesson when normal blockers are clear.
- Runway display: the existing route runway uses measured minutes when present and keeps the older estimate display for legacy/no-sample days.
- Validation: `validateTimeAwareRouteContracts()` guards lazy state creation, idle/lifecycle coverage, display-only scope, locked-surface suppression and current v7.5.0 identity.
- Scope boundary: no curriculum, SRS, grading, economy, rewards, streaks, audio/font asset, network, service-worker cache or required state-schema change.

## v7.4.0 scope

- Street read mode: completed Reading-room stories show a Street read / Spaced switch; Street read removes visual gaps between word spans while keeping tap-for-meaning, class colouring and line breaks.
- Street timing: the existing timed re-read button records `street:` samples when Street read mode is active, separate from `story:` and `fluency:` samples, with no tokens, SRS cards, streak/daily-depth effect or first-read flow change.
- LOW-tail stories: three new free stories unlock at Lessons 17, 19 and 23 and lift the targeted recurrence words คน, ใน, พา, ไฟฟ้า, รอ, ไหน, ถุง, ทางเข้า, ทางออก and ครับ to OK in the generated audit.
- Validation: `validateV74StreetReadContracts()` guards the street timer key, completed-story gating, 25-story count, new-story gates/shape/prerequisites/tone readings, recurrence lift, no one-off story words and current v7.4.0 identity.
- Scope boundary: no curriculum, SRS, grading, economy, audio/font asset, network, service-worker cache or required state-schema change.

## v7.3.0 scope

- Reading mileage: eight new free Reading-room stories unlock at Lessons 8, 10, 12, 14, 16, 18, 20 and 22, with the generated audit reporting story/fluency word recurrence.
- Timed re-reads: completed stories and fluency reads gain optional repeat timing using the existing `readTimes` evidence bucket; repeat timing does not award tokens, create SRS cards or affect lesson gates.
- Automaticity: Tone sprint unlocks only after Lesson 13 and at least 85% tone-rule accuracy over 20 rule answers, then stores pace in the existing `drillLog` bucket.
- Decode Gym and Wild deck: Decode Gym grows to 63 tone-verified non-lesson items with a post-L18 true-cluster booster; Wild deck adds Drill this for route-eligible local captures.
- Scope boundary: no curriculum, SRS, grading, economy, audio asset, network, service-worker cache or required state-schema change.

## v7.2.1 scope

- Runtime identity: `APP_VERSION`, `APP_VERSION_LABEL`, the visible footer/version pill and the v7.2 validator identity string now read `v7.2.1`.
- Post-review cleanup: the new themes' `--muted` CSS values match the contrast map, paid story Course Map and earnings-board surfaces are ownership-aware, unit boss quizzes share the in-progress exit guard, and stray prompt artifacts are removed.
- Scope boundary: no curriculum, SRS, grading, economy, audio asset, network, service-worker cache or state-schema change.

## v7.2.0 scope

- Shop expansion: Phrase & story packs / Sounds / Themes / Titles are separate shop groups, with `✓ owned` and active states preserved.
- Themes: Temple gold, Monsoon and Loy Krathong are paid dark themes; `validateThemeContracts()` checks contrast and class-colour boundaries across every theme.
- Sound: Ranat is a purchasable synthesized feedback voice using the existing Web Audio path; the Progress sound toggle still mutes all voices.
- Reading and phrases: Bangkok reads adds four decodable paid stories; Taxi & Grab and Market bargaining add 12 optional phrases each, with opt-in `w:` review only.
- Economy: existing earn rates stay unchanged; the documented steady week is about 60-80 tokens for both mid-course and completed maintenance learners.
- State/cache: optional `soundPacks[]` and `sfxVoice` only, plus new ids in existing `packs[]` and `themes[]`; service-worker cache remains `aan-thai-v6-4-1`.

## v7.1.0 scope

- Visual repair: Day market now uses light-safe semantic fills for the bottom tab bar, lesson player, quiz options, safety banners, review grades, onboarding/About and soft controls. Skytrain and Songkran get palette-specific card/tab/overlay surface tokens.
- Colour ruling: reading accents move to cyan so they do not collide with the reserved mid-class teal; class colours stay unchanged in every theme.
- Sound repair: objective Write it, Spell it, Glyph Ghost, Contrast Block and Quick decode answers now play SFX; self-graded listening/read-aloud surfaces remain silent.
- Jingle polish: completion is distinct from milestone, and wrong feedback is shorter/flatter.
- Exit guard: closing an in-progress lesson or mastery checkpoint now confirms before discarding the in-memory attempt. Resume persistence is not added.
- State/cache: no new required learner state key; service-worker cache remains `aan-thai-v6-4-1`.

## v7.0.0 scope

- Fresh-only onboarding: shown once only when there is no saved progress blob, no completed lesson and no SRS card.
- Progress `About this app`: Phase 1 scope, completion boundary, device-voice safety and backup/export pointer.
- Beta identity: visible footer string `Phase 1 · 1.0 beta (v7.0.0)` and internal version `v7.0.0`.
- Bounded dialog accessibility polish: Escape-to-close and focus restore where safe, excluding the typed reset-confirmation step.
- Release finalisation: refreshed docs, regenerated audit, smoke checklist, manifest description and working-prompt cleanup.

## Standing post-1.0 backlog

- Phase 2 module refactor, following `docs/phase2_refactor_plan.md`.
- Validator extraction from the single-file app into clearer testable modules.
- Full accessibility pass, including focus trapping, inert background handling and broader keyboard review.
- Idea-engine drill pool work, kept out of the shipped Phase 1 app until explicitly scoped.
