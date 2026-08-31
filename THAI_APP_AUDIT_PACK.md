# Thai App External Audit Pack

Prepared: 2026-08-31
Workspace: `/Users/lateefoyelade/thai-repo`
Current app version: `v8.4.1`
Live app shell: `index.html`

This pack is a current-source review guide, not a historical archive. It should be read with `FILE_MANIFEST.md`, `AGENTS.md`, `CHANGELOG.md`, `tools/phase1-audit.js`, and the generated `docs/phase1_audit.*` files.

## Current State

Usable conversational Thai for daily Bangkok life is the app's primary goal. v8.4.1 enforces model-before-practice teaching: each new Week 1 reply is shown whole with meaning, pronunciation spelling and ordered parts, then heard, before its tappable builder can appear. Reading remains separate and optional. The app remains a vanilla static PWA with no backend, build step, runtime API calls, human-audio assets, AI audio, scraped audio, speech scoring, cloud sync or native-review dependency.

v5.4.5 was a source-hygiene release. It kept the v5.4.4 learner behaviour and changed reviewability:

- `tools/phase1-audit.js` uses seeded randomness for generated audit extraction.
- Audit generation preserves the previous timestamp when substantive output is unchanged.
- The old unreachable collectible album/pull code was removed from `index.html`.
- Legacy `gacha` progress fields remain accepted by import shape checks.
- `CLAUDE.md` is tracked and no longer hidden by `.gitignore`.
- Source-review notes now describe the current tracked source instead of old local handoff artifacts.

The post-v5.4.5 source hardening pass added:

- `tools/make-release-zip.sh` for clean tracked-source review packages.
- Production startup gating for exhaustive validators; use `?debugValidators=1` or `thai_debug_validators=1` locally for the full in-browser suite.
- A bounded service-worker timeout for slow shell fetches before cache fallback.
- Attribute-context escaping via `escAttr()`.
- Native/system font stacks with no automatic Google Fonts page-load requests.
- `docs/phase2_refactor_plan.md` as a future split plan only.

v5.4.6 is a targeted content/pedagogy hardening pass:

- Lesson 1 frames the full tone route as a preview and only requires the easiest live + no-mark -> mid case.
- Unit C repeats one Tone route across live/dead, class-grid and silent-leader lessons.
- Lesson 21 adds class-only rare-letter preparation for the Letters boss without normal review seeding for those rare rows.
- อ่าน is introduced as the app-name/course-goal recognition item without recurring axis-review load.
- Late story lines now avoid awkward `เรา ไป อาหาร` and speaking-fluency overclaims.
- Phrasebook review is opt-in; weekly phrase suggestions do not auto-add `w:` cards.
- The final checkpoint now samples silent leaders, three-piece vowels, public-sign chunking and gaaran as well as class, tone, finals, live/dead, vowel length and clusters.
- `docs/phase1_content_pedagogy_notes.md` and `docs/content_pedagogy_checklist.md` record the pass and future edit checks.

v6.0.0 is a UI hierarchy, accessibility and scope-separation pass:

- Today has a display-only route summary above the existing required task list.
- Daily practice is reframed as Optional practice, with short consistent state labels.
- Practice is grouped into due review, script/reading, tone/hearing/recall and transfer sections.
- Thai Tones is renamed to Tones, foregrounds the written Tone route and now contains the class reference.
- Library is reframed as Read and prioritises controlled reading before optional phrases/unlocks.
- Streaks is reframed as Progress, with the skill profile moved there.
- Generic UI states use semantic tokens instead of the Thai class-colour tokens.
- Bottom tabs now read Today / Practice / Tones / Read / Progress and manage active `aria-current`.
- No curriculum, SRS/review scheduling, state key, migration semantics, lesson gates, vocabulary roles or Phase 1 pedagogy changed.

v6.0.1 is a first-run fix over v6.0.0:

- `.is-hidden` now wins over newer task/card display rules, so fresh Today does not show hidden Endings Refresh or Morning warm-up cards.
- Blank first-ever states do not show the legacy Phase 1 progress-kept modal; existing learners with completed lessons still see it once.
- `validateV601FirstRunContracts()` guards the fresh-state notice logic and hidden-card cascade.

v6.0.2 is an answer-feedback and quiz-stage pass over v6.0.1:

- Wrong objective quiz/review answers pause on a feedback panel until the learner taps Continue; grading, requeue, lapse and leech handling are unchanged.
- Correct objective answers keep the v5.4.3/v5.4.4 dwell timing.
- Class-question misses show answer text, mid/high class tiles, the low-class default reminder and a separated mid-class chant.
- Simple 2- or 3-option text questions stack full-width; 4-option, Thai and balanced-component grids keep their layout.
- `validateV602AnswerFeedbackContracts()` guards the pass.

v6.0.3 is a progress-honesty and interaction-weight pass over v6.0.2:

- Today route progress uses actual step pips and a matching step-fraction bar instead of hardcoded percent states.
- Route hero/card mastery-check copy shares one ready state and names the lesson the check unlocks.
- Practice is the only bottom-tab due-badge location; ordinary due uses the review accent and 45+ overload keeps danger red.
- The letter wall counter reports started and known counts from the same tile-state source as the wall.
- Lesson stages top-align, Back is quieter, disabled CTAs look inert, Quick decode examples render as numbered steps, teaching-card chants reuse the structured chant helper, and transliteration uses a muted-warm non-link token.
- `validateV603ProgressInteractionContracts()` guards the pass.

v6.1.0 is a weakness-first targeting pass over v6.0.3:

- Generated wrong answers record compact bounded `errorProfile` entries for sound, class, final-job, tone-rule, listening and confusion-pair misses.
- Class sprint, Tone drill, Sound twins, Tone-rule trainer, Mixed quiz, Hear & Pick Thai and Spell it use weakness-first ordering while staying inside existing covered/prerequisite-safe pools.
- Today can surface the weakest optional practice axis as display-only guidance.
- No lesson blocker, route type, SRS due deck, review governor, network feature or dependency changed.
- `validateWeaknessTargetingContracts()` guards the pass.

v6.2.0 is a production-practice pass over v6.1.0:

- Write it lives in Practice and uses the iPhone Thai keyboard to type hidden learned letters/endings from sound, class and ending-job cues.
- Route talk lives in Tones and asks for spoken self-explanation before revealing route tiles derived from the existing tone-grid logic.
- Misses feed `errorProfile`; neither drill creates SRS cards or changes lesson blockers, route type, review governor load, network behaviour or dependencies.
- `writeLog` stores bounded Write it session summaries; Route talk stores no separate state.
- `validateProductionPassContracts()` guards the pass.

v6.3.0 is an automaticity pass over v6.2.0:

- Fluency reads and Reading room stories log reliable cold-read time samples in bounded `readTimes` entries; backgrounding or device voice support discards the sample.
- Class sprint records best/last seconds-per-answer after the session, without adding time pressure during questions.
- Decode Gym adds gate-checked self-review word reps, all listed in the generated audit with tone-grid verification; v7.3.0 expands the corpus to 63 for cluster mileage.
- All automaticity surfaces remain optional and outside lesson blockers, checkpoints, SRS due load, review-governor load, network behaviour and dependencies.
- `validateAutomaticityContracts()` guards the pass.

v6.4.0 is a Bangkok capture-loop pass over v6.3.0:

- Capture Thai lives in Read and as a secondary Bangkok Mission action; it accepts typed Thai-only local input with an optional where-seen note.
- Wild deck reviews saved captures unseen/oldest first and updates only capture-local `lastSeen` / `n` metadata.
- Captures are capped at 200 and never enter SRS, lesson quizzes, checkpoints, lesson blockers, review-governor load, network behaviour or dependencies.
- Tone-route tiles appear only for taught, prerequisite-safe, grid-derivable captures; untaught letters/forms are marked and saved for later.
- `validateCaptureLoopContracts()` guards the pass.

v6.4.1 is a Decode Gym mileage and Write it feedback fix:

- Write it correct answers show a green `Correct` panel with the revealed glyph before auto-advance.
- Write it and Capture Thai inputs accept the Thai keyboard return key.
- Decode Gym uses tone-verified non-lesson monosyllables, gate-spread through taught tone patterns.

v6.5.0/v6.5.1 are presentational feedback releases:

- Objective MCQ/typed answers get synthesized Web Audio feedback sounds, combo chips, completion best-run lines and Today streak-salience moments.
- Progress tools includes a `Sounds: on/off` toggle.
- v6.5.1 waits for `AudioContext.resume()` before scheduling tones and raises tone peaks for iPhone/PWA audibility.
- The feedback layer stays presentational only: no SRS, grading, blockers, tokens, curriculum, network features or audio assets changed.

v6.6.0 is a data-safety and release-harness pass:

- Corrupt local progress is copied to `thai_state_v1_corrupt` before the app falls back to defaults.
- Save failures, uncaught runtime errors and service-worker updates show persistent non-blocking recovery/reload banners; updates never auto-reload in-progress work.
- Progress export downloads a versioned JSON envelope and keeps copy-to-clipboard plus legacy raw-state import support.
- Backup nudges in Progress/Today are display-only and use optional `lastExportAt` / `backupNudgeSnooze` state.
- `tools/precommit-check.js` is the committed gate for embedded-script syntax, NFC, particle/currency policy, tone-grid transliteration and Reading-room decodability.
- `validateV66DataSafetyContracts()` guards the pass. The service-worker cache remains `aan-thai-v6-4-1` because cached asset filenames did not change.

v6.7.0 is a completion-journey, progress-map and orphan-surfacing pass:

- Completed Phase 1 learners land on a maintenance Today route instead of a new-lesson dead end; due review still comes first.
- A one-time completion celebration reuses the bounded readiness wording and stores only optional `phase1Completion.celebrated`.
- Progress includes a Phase 1 dashboard for lessons, checkpoints, fluency reads, Letters boss and final completion.
- Write it, Route talk, Decode Gym, Wild deck and rare-letter class practice are surfaced through normal tabs while staying outside SRS, blockers and review-governor load.
- Streak freezes now cover one missed day each; if the learner lacks enough freezes for the whole gap, none are consumed and the streak resets.
- Capture Thai shows `N/200 saved`, warns near the cap and can copy saved captures as plain text.
- `validateV67CompletionJourneyContracts()` guards the pass. The service-worker cache remains `aan-thai-v6-4-1` because cached asset filenames did not change.

v7.0.0 is the Phase 1 1.0 beta identity and release-finalisation pass:

- Genuinely fresh states only get a one-time, skippable onboarding overlay for the reading-first scope, letter → class → tone engine, Today route and setup basics.
- Existing learners, saved blank states, completed lessons and states with any SRS card never see onboarding.
- Onboarding sets optional `notices.onboarded` on finish or skip and does not affect blockers, SRS, scheduling, lesson gates, imports, tokens or cache naming.
- Progress tools gains a static About this app entry covering Phase 1 scope, completion boundaries, device voice support and backup/export.
- The visible footer/version pill reads `Phase 1 · 1.0 beta (v7.0.0)`, while internal export/audit version is `v7.0.0`.
- Safe dialog overlays get bounded Escape-to-close and focus restore; the typed reset-confirmation step does not close on Escape.
- `validateV70OnboardingContracts()` guards the pass. The service-worker cache remains `aan-thai-v6-4-1` because cached asset filenames did not change.

v7.1.0 is the visual and sound repair pass over the 1.0 beta:

- Day market now uses semantic light-safe fills for the bottom tab bar, lesson overlay, quiz options, safety banners, soft controls, review grade buttons, onboarding and About surfaces.
- Skytrain and Songkran now override card, tab bar and lesson-player surface tokens so their paid themes sit in their own palettes without changing class colours.
- Legacy gold/blue/green/red literals are retired from the named reward, review, contrast and warning surfaces; reading accents now use cyan so they do not collide with the reserved mid-class teal.
- Objective Write it, Spell it, Glyph Ghost, Contrast Block and in-lesson Quick decode/class-check answers now play synthesized correct/wrong feedback. Self-rated listening, Echo, Route talk, Decode Gym and Wild deck remain silent by design.
- The completion sound now has a distinct low-root/resolved-chord identity, the wrong sound is a shorter flatter fall, and no audio assets or network calls are added.
- The lesson/checkpoint close button asks before discarding meaningful in-memory progress; this does not add resume persistence, and OS swipe-away loss remains an accepted limitation.
- `validateV71VisualSoundContracts()` guards the pass. v7.1.0 adds no new required learner state key and the service-worker cache remains `aan-thai-v6-4-1`.

v7.2.0 is the shop expansion and economy pass:

- Adds Temple gold, Monsoon and Loy Krathong paid dark themes, with `validateThemeContracts()` checking contrast and class-colour boundaries across every theme.
- Adds the Ranat synthesized sound pack as a second Web Audio feedback voice. It uses no audio assets or network calls, and the existing Progress sound toggle mutes all voices.
- Adds Bangkok reads as a paid Reading-room story pack with four decodable micro-stories through the existing story pipeline and first-read reward path.
- Adds Taxi & Grab and Market bargaining paid phrase packs with 12 phrases each. They remain Read-tab enrichment only until the learner manually adds a `w:` card.
- Adds optional `soundPacks[]` and `sfxVoice` only, plus new ids in existing `packs[]` and `themes[]`.
- Documents the weekly token economy in `docs/economy_notes.md`; earn rates stay unchanged and the normal mid-course/completed week remains around 60-80 tokens.
- `validateV72ShopContracts()` guards shop ids, owned/active states, paid story visibility, import shape and purchase simulations that must not mutate SRS, completed lessons, checks or blockers.

v7.2.1 is the post-review cleanup and identity bump:

- Sets the runtime identity to `Phase 1 · 1.0 beta (v7.2.1)`.
- Keeps the new theme `--muted` CSS values aligned with the contrast map.
- Hides paid story Course Map and earnings-board surfaces until owned.
- Extends the in-progress exit guard to unit boss quizzes.
- Removes stray prompt artifacts.

v7.3.0 is the reading mileage and automaticity pass:

- Adds eight free decodable Reading-room stories at Lessons 8, 10, 12, 14, 16, 18, 20 and 22.
- Adds a generated story/fluency word-recurrence table to `docs/phase1_audit.*`.
- Adds display-only Progress Reading mileage from existing `stories` and `readTimes`.
- Adds optional Timed re-read for completed stories and fluency reads, reusing bounded `readTimes`.
- Adds gated Tone sprint using existing tone-rule questions, `toneStats.rule`, `errorProfile` and `drillLog['tone-sprint']`.
- Expands Decode Gym to 63 entries and guarantees cluster reps after Lesson 18 when available.
- Adds Wild deck Drill this for route-eligible captures, updating only capture-local `lastSeen` / `n`.
- Adds `validateV73ReadingMileageContracts()`. No SRS, blocker, economy, audio asset, network, service-worker cache or required-state-schema change.

v7.4.0 is the street reads and recurrence-tail pass:

- Adds a completed-story Street read / Spaced switch in Reading room. Street read removes visual word gaps while keeping class-coloured tappable word spans and line breaks.
- Reuses the existing timed read helpers with a distinct `street:` `readTimes` prefix, separate from `story:` and `fluency:` samples.
- Adds three free decodable stories at Lessons 17, 19 and 23 to lift the targeted LOW recurrence tail: คน, ใน, พา, ไฟฟ้า, รอ, ไหน, ถุง, ทางเข้า, ทางออก and ครับ.
- Allows Course Map to show multiple visible stories at one lesson gate so free and owned paid stories can coexist.
- Adds `validateV74StreetReadContracts()`. No SRS, blocker, economy, audio/font asset, network, service-worker cache or required-state-schema change.

v7.5.0 is the time-aware daily-route pass:

- Counts active seconds only inside real learning surfaces, with idle/background/device-voice guards, and stores them lazily under optional `days[date].secs`.
- Adds one skippable keep-going suggestion after the required Today route while measured time remains below the 30/45-minute target.
- Chooses only existing unlocked practice, completed-story Street/timed re-reads, completed fluency re-reads, maintenance rematches or a next lesson when normal blockers are clear.
- Keeps time display-only: no rewards, SRS, intervals, grading, leech rules, blockers, lesson gates, streaks, token economy, audio/font assets, runtime network features or service-worker cache changes.
- Adds `validateTimeAwareRouteContracts()`.

v7.6.0 is the fresh-decode transfer pass:

- Ships two reserved corpora of never-taught, tone-verified real words: `FRESH_DECODE` (120, lesson quizzes l4+ and the maintenance Fresh decode block, class-coloured prompts) and the sealed `ASSESSMENT_BANK` (56, mastery checkpoints and the final completion checkpoint only, neutral prompts).
- Serves fresh words as mechanism-first route-chain pairs, full-reading MCQs with misconception distractors, and single-axis checks; fresh tone questions wait for the Lesson 13 grid.
- Keeps corpora outside SRS, blockers, tokens and learner state; wrong answers reuse bounded `errorProfile` buckets.
- Adds `validateFreshDecodeContracts()` and `tools/fresh-decode-check.js`; `tools/precommit-check.js` now verifies both corpora per commit including a whole-file Thai-token freshness scan.

v7.7.0 is the tone colour-fade pass:

- Fades taught-word tone prompts to plain glyphs in lesson quizzes, checkpoints, bosses and the final checkpoint from Unit C; colour returns in post-answer feedback; the class badge stays behind `TONE_FADE_KEEPS_BADGE`.
- Adds a lesson-quiz-only colour-return second attempt (recovery counts for the lesson score; gates one-shot; first miss always logs diagnostics).
- Guarantees one tone question per Unit C+ lesson quiz build.
- Leaves review cards, tone drills, mixed review, Quick decode and all v7.6.0 fresh/bank behaviour unchanged; adds `validateV77ColourFadeContracts()`.

v7.8.0 is the required-surface mastery-loop pass:

- Lesson quizzes cycle first-attempt misses until each resolves correctly once; scoring stays first-attempt; gates/review/drills unchanged.
- Checkpoints and bosses gain one atomic structure chain per build; the final checkpoint's 2-option singles become chains; pairs survive shuffling and sampling.
- One lesson-quiz filler slot and the maintenance Fresh decode sample are weakness-first from existing diagnostics; empty profiles degrade to random.
- Adds `validateV78RequiredLoopContracts()`.

v7.9.0 is the sealed retention-transfer pass:

- Adds `RETENTION_DECODE_BANK` with 96 real words used only by delayed recall: two `retained` and two different `stabilised` words for every Lesson 4–24 check, plus twelve `cold30` words.
- Keeps +1/+7 checks at 6/8 questions and 80%; three familiar-axis slots become neutral transfer questions, while Lessons 1–3 stay familiar-only.
- Schedules a 14-question, 85% day-30 cold decode after the first Phase 1 pass; failure preserves completion and repair uses the separate maintenance corpus.
- Stores optional nested first-attempt and month-check evidence, migrates existing completed states, and exposes month-check status in the Progress dashboard.
- Extends the standalone corpus gate, precommit tone walk and generated audit; adds `validateV79RetentionDecodeContracts()`.

v8.0.0 is the Bangkok Street Atlas visual-completion pass:

- Replaces the aurora/glass/gradient template language with code-native route-map, printed-ticket, workbook, tone-board, signboard, stamp and collectible-letter surfaces.
- Makes existing progress more visible through the Today transit rail, shaped task states, collected letter wall, coloured progress stamps and meaningful completion pieces without changing rewards or retention logic.
- Adds real theme swatches and theme-aware atlas tokens across the default, free and paid appearances while preserving the reserved Thai class palette.
- Keeps decorative Thai marks out of assistive names with `aria-hidden`, preserves reduced motion and mobile safe areas, and adds no runtime asset/request.
- Adds `validateV8VisualContracts()` and the 58th generated validator; no curriculum, SRS, blocker, grading, retention, economy, state or service-worker change.

v8.1.0 is the Street Arcade retention-and-fun pass:

- Adds three optional cabinets with hard lesson gates: free Parcel Sort after Lesson 2, 50-token Night Market Hunt after Lesson 4, and 60-token Tuk-Tuk Tone Run after Lesson 13.
- Rebuilds every round from completed lessons through the existing glyph/mechanism prerequisite checks, excludes all sealed decode corpora, and keeps class prompts neutral before feedback.
- Reuses `packs[]` for paid ownership and `drillLog` for best score/combo/stars; games do not touch SRS, mastery, blockers, required Today depth, streaks or repeatable rewards.
- Adds Ekkamai Sunset, Yaowarat Neon and Tuk-Tuk Chrome, temporary non-saving theme previews, stronger paid-theme motifs and local synthesized arcade sound cues controlled by the existing sound settings.
- Adds `validateV81ArcadeContracts()` and the 59th generated validator, plus `tools/arcade-smoke.js` for deterministic full-session, saved-record, theme-preview and sound-path verification; no required state key, audio asset, network feature or service-worker change.

v8.2.0 is the isolated conversation-first field test:

- Adds one optional 8–12 minute Bangkok food-ordering scene on Today, available independently of Phase 1 progress.
- Moves from first-listen gist through six male-polite learner chunks, vendor-response selection, temporary local record/playback, one substitution and supported role-play.
- Stores only bounded run count, first/last completion day and latest self-rating under optional `conversation` state; no answer history or audio persists.
- Does not mutate lessons, SRS, mastery checks, blockers, required Today work, tokens, streaks, active-time credit, error profiles, drills or phrase-review cards.
- Uses device TTS for every modeled line and makes no native-listening or pronunciation-assessment claim. Native audio/review are not product prerequisites.
- Adds `validateV82ConversationPilotContracts()` and the 60th generated validator. Detailed boundaries and expansion criteria live in `docs/v8_2_conversation_pilot_notes.md`.

v8.2.1 corrects the product front door:

- The masthead, first-run onboarding, Today hierarchy, About screen and manifest lead with usable spoken Thai for Bangkok rather than learning to read.
- Finishing onboarding launches the food-ordering scene, whose recommended card appears before the literacy route.
- Phase 1 is labelled an optional reading companion; it remains complete and unchanged, but reading progress never gates speaking.
- The conversation-state and progression-isolation boundary from v8.2.0 is unchanged.
- Adds `validateV821ConversationFrontDoorContracts()` and the 61st generated validator. The service-worker cache advances to `aan-thai-v8-2-1` so installed copies refresh the changed cache-first manifest.

v8.2.2 repairs the first lesson for a zero-knowledge learner:

- Removes the cold first-listen gist test and establishes the six-step situation in English before Thai is expected.
- Teaches each exact vendor cue and learner reply as a pair, with English meaning first, separate audio controls, distinct speaker cards and an explicit visual pause.
- Delays the complete exchange until after all six pairs and speaks its turns separately with a 900ms inter-speaker gap while keeping English visible.
- Aligns every taught cue with the immediately preceding vendor turn, including the opening greeting.
- Adds `validateV822BeginnerConversationContracts()` and the 62nd generated validator without adding state or changing any Phase 1 or conversation-progression boundary. The network-first shell keeps cache `aan-thai-v8-2-1` because no cache-first asset changed.

v8.2.3 completes the beginner conversation-practice loop:

- Separates two polite routines from four active replies, segments each taught phrase and requires all six cue/reply pair playbacks before the full scene.
- Adds sticky full-scene now-playing, active-turn, stop/restart and completion controls; response options rotate positions and wrong choices require exact cue/reply repair plus retry.
- Narrows recording to one optional 45-second-capped phrase, preteaches the food substitution and repeats all four active prompts in supported role-play.
- Makes completed conversation evidence the daily minimum while keeping the full reading route collapsed and optional.
- Adds bounded `lastRun` evidence inside the existing conversation scene record. Legacy or malformed evidence cannot invent Today credit, and completion still mutates no lesson/SRS/mastery/token/streak/reading state.
- Adds `validateV823ConversationPracticeContracts()` and `tools/conversation-smoke.js`, bringing the generated audit to 63 validators. Device TTS is the fixed audio model; no native-audio/reviewer dependency exists.

v8.4.1 repairs the model-before-practice boundary:

- Shows every new learner reply as a complete Thai phrase with its English meaning and pronunciation spelling.
- Explains every phrase part in correct order before any shuffle or reconstruction task.
- Requires successful full-phrase device playback before practice unlocks; unfinished reloads return to the model.
- Evaluates the vendor-heard builder gate live so sentence checking unlocks after actual cue playback.
- Adds `validateV841ConversationTeachingContracts()` and explicit smoke coverage while changing no curriculum, state, form, voice or Phase 1 contract.

v8.4.0 rebuilt the learner experience while preserving authority:

- Replaces the long map/objective/dual-role-play/recording route with three 10–12 minute listen-build-speak lessons.
- Requires every new reply to be assembled from tappable phrase parts, then rebuilt without English tile meanings and changed once for transfer.
- Assigns separate installed Thai voices to vendor and learner when available; one-voice devices use slight rate separation and explicit pauses without pitch manipulation.
- Cuts consolidation/gate to 10/12 minutes and delayed reviews to 3/5/8 minutes while keeping the two-review governor.
- Rewrites onboarding, Today, About, situations, checks and repair in plain learner language.
- Adds no state field: existing schema-2 action evidence, completion records, forms, scheduling, resume/recovery and Phase 1 isolation remain valid.
- Added `validateV840ConversationBuilderContracts()` and stronger deterministic builder/role-voice smoke checks; v8.4.1 supersedes that validator while the audit remains 60 validators.

v8.3.0 established the conversation-course authority:

- Adds `conversation-course.js` as the canonical revisioned registry and engine for Week 1: food ordering, dine-in/drink/bill choices and precise communication repair.
- Freezes ordinary workloads at 27, 29, 30, 28 and 30 minutes for Lessons 1-3, consolidation and the gate, with core and bounded repair minutes recorded separately.
- Teaches each situation in English before Thai, requires cue/reply playback with an explicit gap, delays full scenes until teaching is complete, uses compulsory miss repair and fades support across two role-play passes.
- Adds exact 6-item lesson checks, 8-item consolidation, three disjoint 12-item gate forms and fixed +1/+7/+30 forms. Cold evidence, ordinary repair and spoken participation remain distinct.
- Adds schema-2 authority, Bangkok-calendar scheduling, a two-check/16-decision backlog governor, deterministic form rotation, action-boundary resume, strict import validation and local quarantine/reconstruction for damaged conversation resumes.
- Keeps every modeled full line male-polite with `ครับ`, uses device Thai TTS only and stores neither audio nor pronunciation scores. Phase 1 reading namespaces remain isolated.
- Replaces the four historical pilot validators in the active audit with `validateV830ConversationCourseContracts()`; the generated audit remains 60 validators because the new validator covers the consolidated course architecture.

## Current Tracked Source

- `index.html` - app shell, Phase 1 curriculum/state and shared UI/runtime logic.
- `conversation-course.js` - schema-2 conversation registry, builder lesson/assessment engine, scheduling, recovery and v8.4 contracts.
- `manifest.json`, `sw.js`, `vercel.json` - static PWA/deploy support.
- `icon-180.png`, `icon-192.png`, `icon-512.png` - install icons.
- `AGENTS.md`, `CLAUDE.md`, `CHANGELOG.md`, `README.md` - release and project context.
- `tools/phase1-audit.js` - deterministic audit extractor.
- `tools/arcade-smoke.js` - deterministic three-cabinet interaction and sound-path smoke harness.
- `tools/conversation-smoke.js` - deterministic A0 conversation interaction, state-evidence and isolation harness.
- `tools/fresh-decode-check.js` - three-corpus verifier for lesson/maintenance, assessment and retention words (tone routes, stage supply, decodability, freshness, isolation).
- `tools/make-release-zip.sh` - tracked-source review zip helper.
- `docs/phase1_audit.md`, `docs/phase1_audit.json` - generated audit output.
- `docs/smoke_test_checklist.md` - manual smoke checklist.
- `docs/v7_release_notes.md` - Phase 1 v7-v8 release notes and post-Phase-1 backlog.
- `docs/v8_visual_overhaul_notes.md` - approved visual direction, learner-facing changes, accessibility boundaries and v8 visual contract.
- `docs/v8_2_conversation_pilot_notes.md` - pilot flow, state/progression isolation, audio/Thai caveats and migration criteria.
- `docs/v8_4_conversation_builder_implementation.md` - shipped learner flow, workload, role-voice and migration contract.
- `docs/conversation_course_implementation_spec.md` and `docs/conversation_course_content_inventory.md` - frozen architecture and migration/content disposition.
- `docs/conversation_course_form_manifest.md` and `docs/conversation_registry_weeks_1_2.md` through `docs/conversation_registry_weeks_7_8.md` - sealed form and eight-week curriculum registries.
- `docs/economy_notes.md` - v7.2 token economy calibration notes.
- `docs/phase1_content_pedagogy_notes.md`, `docs/content_pedagogy_checklist.md` - content-pedagogy notes and future-edit checklist.
- `docs/v6_ui_pass_notes.md` - UI pass notes and deferred checks.
- `docs/phase2_refactor_plan.md` - future no-build/low-build split plan.
- `FILE_MANIFEST.md`, `THAI_APP_AUDIT_PACK.md` - source-review guidance.

## Ignored Local Artifacts

The working folder may contain ignored local files such as `PROJECT_NOTES.md`, `UPDATE_idea-engine_thai-app.md`, `look-preview.html`, `.vercel/`, `.DS_Store`, `dist/` and `idea-engine/`. They are not current app truth and should not be included in a clean external review bundle unless the review explicitly asks for historical comparison.

## Validation Evidence

Use these checks for source review:

```bash
node --check tools/phase1-audit.js
node tools/precommit-check.js
node tools/conversation-smoke.js
node tools/phase1-audit.js
node -e "const fs=require('fs');const vm=require('vm');const html=fs.readFileSync('index.html','utf8');const scripts=[...html.matchAll(/<script\\b[^>]*>([\\s\\S]*?)<\\/script>/gi)].map(m=>m[1]).join('\\n');new vm.Script(scripts);console.log('embedded scripts parse OK');"
tools/make-release-zip.sh
```

`docs/phase1_audit.md` should report:

- app version `v8.4.1`
- 24 lessons
- 60 validators passing
- 0 lesson prerequisite issues
- 0 pool prerequisite issues
- 0 role-contract issues

Running `node tools/phase1-audit.js` repeatedly should not change generated audit content unless `index.html` or the audit extractor changes.

## Review Focus

High-value review areas:

- imported legacy progress states, especially Endings Refresh, leech cards, axis-review staging and retention checks
- quiz-generator coverage, because generated choices must stay covered-only and non-giveaway
- Thai tone derivation and transliteration accuracy
- iPhone/PWA update behaviour with service-worker cache `aan-thai-v8-4-1`, including the external conversation-course module
- slow-network shell fallback and offline reload behaviour
- absence of automatic Google Fonts network requests
- learner-facing copy staying plain, Thai-script-first and free of internal scheduler wording
- content-pedagogy hardening boundaries: rare-letter class-only prep, optional phrasebook scope, no speaking-fluency overclaims
- v6 UI separation: Tones owns class/tone reference, Read prioritises controlled reading, Progress owns settings/diagnostics and class colours stay reserved for pedagogy
- answer-feedback moment: wrong answers require Continue, class feedback is tile/chant structured, and class prompt colours appear only after settle
- progress-honesty/interaction polish: route pips match real steps, mastery checks are not shown as locked when takeable, due badge colour stays calm below overload, and lesson-player Back/Next weight is clear
- automaticity pass: read timing discards unreliable samples, Class sprint pace appears only after the session, and Decode Gym seed words remain gate-checked, tone-verified and outside SRS
- capture loop: typed input sanitisation, local-only captures, no route tiles for untaught/unsafe captures, Wild deck spacing staying capture-local and outside SRS
- data safety: corrupt-state quarantine, save-failure export warning, versioned backup envelope, envelope/legacy import compatibility, backup nudges staying non-blocking, and update-ready reload prompt without auto-reload
- time-aware route: `days[date].secs` stays optional/lazy, idle/background time is capped, keep-going suggestions are unlocked-only and skippable, and measured time never changes rewards, SRS, blockers, streaks or tokens
- completion journey: post-Phase 1 maintenance route, once-only celebration, dashboard counts, fair freeze-gap consumption, surfaced optional drills and capture copy export staying outside SRS/blockers
- v7 beta surface: fresh-only onboarding, About page, beta footer string, safe Escape/focus dialog behaviour and no impact on route blockers or Today copy

Out of scope for this release:

- Phase 2 vocabulary/grammar
- backend/cloud sync
- human-audio recording pipeline
- AI or scraped audio
- speech-recognition scoring
- broad framework refactor
