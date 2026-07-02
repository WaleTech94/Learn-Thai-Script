# Changelog

Every versioned app release must update this file and `AGENTS.md` in the same commit. The local `CLAUDE.md` mirror must also be synchronized when present.

## v6.4.0 - 2026-07-02

- Added Capture Thai to Read and as a secondary Bangkok Mission action: typed Thai-only local input, optional where-seen note, immediate class-coloured preview and no camera/upload/location/network path.
- Added local `captures[]` storage capped at 200, with import shape support and sanitised rendering for Thai text plus notes.
- Added Wild deck as self-checked practice over saved captures, ordered unseen/oldest first and spaced only with local `{lastSeen,n}` metadata outside SRS.
- Show derived tone-route tiles only when a capture is taught, prerequisite-safe and grid-derivable; untaught letters/forms are marked plainly and saved for later.
- Added `validateCaptureLoopContracts()` and regenerated `docs/phase1_audit.md` / `docs/phase1_audit.json`; audit now reports app version `v6.4.0` and 43 validators passing.
- Updated the app footer version to `v6.4.0` with service-worker cache `aan-thai-v6-4-0`.

## v6.3.0 - 2026-07-02

- Added reliable cold-read timing for fluency reads and reading-room stories, stored in bounded `readTimes` samples with backgrounding or device voice discarding the sample.
- Extended Class sprint results with best/last seconds-per-answer trends in `drillLog.sprint.pace[]`, without adding time pressure during questions.
- Added Decode Gym to Practice as 10 self-checked word-reading reps from a 60-word gate-checked corpus; the audit lists every seed word with tone-grid verification.
- Kept automaticity work optional and outside lesson blockers, checkpoints, the main SRS due deck and review-governor load.
- Added `validateAutomaticityContracts()` and regenerated `docs/phase1_audit.md` / `docs/phase1_audit.json`; audit now reports app version `v6.3.0` and 42 validators passing.
- Updated the app footer version to `v6.3.0` with service-worker cache `aan-thai-v6-3-0`.

## v6.2.0 - 2026-07-02

- Added Write it to Practice as Thai-keyboard recall for learned `g:` letters and `f:` ending-job letters: the glyph stays hidden while the learner types it on the iPhone Thai keyboard, then wrong/skip paths reveal the answer and log the miss.
- Added Route talk to Tones as a 5-word spoken self-explanation drill: the learner says class, mark, live/dead, length and tone, then reveals route tiles derived from the existing tone-grid logic.
- Kept both production-practice surfaces optional and outside lesson blockers, mastery gates and the main SRS due deck; misses feed `errorProfile` for later weakness-first targeting.
- Added bounded `writeLog` session summaries for Write it and no separate Route talk state.
- Added `validateProductionPassContracts()` and regenerated `docs/phase1_audit.md` / `docs/phase1_audit.json`; audit now reports app version `v6.2.0` and 41 validators passing.
- Updated the app footer version to `v6.2.0` with service-worker cache `aan-thai-v6-2-0`.

## v6.1.0 - 2026-07-02

- Added a bounded `errorProfile` state bucket for wrong generated answers across glyph sound, class, final-job, tone-rule, listening and confusion-pair misses.
- Made Class sprint, Tone drill, Sound twins, Tone-rule trainer, Mixed quiz, Hear & Pick Thai and Spell it start from the learner's weakest eligible items before normal random fill, while preserving existing gates, pool filters and session sizes.
- Let Today choose the optional practice recommendation from the weakest current axis when enough evidence exists, with short display-only copy and no change to route blockers, day typing or lesson availability.
- Kept all new targeting outside the main SRS due deck and review governor; no new lesson blockers, mastery gates, production scoring, network calls or dependencies were added.
- Added `validateWeaknessTargetingContracts()` and regenerated `docs/phase1_audit.md` / `docs/phase1_audit.json`; audit now reports app version `v6.1.0` and 40 validators passing.
- Updated the app footer version to `v6.1.0` with service-worker cache `aan-thai-v6-1-0`.

## v6.0.3 - 2026-07-01

- Replaced the Today route hero's hardcoded percent ring with actual step pips and a matching step-fraction bar for review/main/practice or the single Endings Refresh step.
- Made route progress and mastery-check copy honest: 25+ due cards highlight review before main work, and takeable mastery checks show a ready state with copy such as `Pass it to unlock Lesson 7.` instead of `LOCKED · Check needed.`
- Moved the display-only due badge to Practice only, using the review accent for ordinary due cards and reserving danger red for the 45+ overload state.
- Changed the letter wall counter to count started/known letters from the same tile states the wall renders.
- Reduced lesson-player interaction weight: shared stages top-align, Back is a quiet ghost control, Next remains the full-width CTA, and disabled CTAs render flat/inert app-wide.
- Rendered Quick decode worked examples as compact numbered steps without editing lesson data, and reused the structured mid-class chant helper on teaching cards.
- Added a muted-warm transliteration token so reading hints no longer use link-blue, and cleaned up `Notes`, Freeze and Progress row affordance placement.
- Added `validateV603ProgressInteractionContracts()` and updated the app footer version to `v6.0.3` with service-worker cache `aan-thai-v6-0-3`.

## v6.0.2 - 2026-07-01

- Upgraded generic quiz/review answer feedback from a small muted line into high-contrast feedback panels with stronger correct and wrong visual states.
- Changed wrong objective answers to pause on the feedback panel until the learner taps `Continue →`; grading, requeue, lapse and leech behaviour remain unchanged.
- Added structured class-question wrong feedback: answer line, mid/high class tiles, low-class default reminder, and a separated mid-class chant with class-coloured initials.
- Top-aligned quiz stages, stacked simple 2- or 3-option text choices full-width, kept 4-option/Thai/component grids intact, and coloured class prompts only after answer settle.
- Added `validateV602AnswerFeedbackContracts()` and updated the app footer version to `v6.0.2` with service-worker cache `aan-thai-v6-0-2`.

## v6.0.1 - 2026-07-01

- Fixed the first-run v6 regression where `.is-hidden` lost to newer task/card display rules, causing the required Endings Refresh card and Morning warm-up card to appear even when JavaScript had correctly hidden them.
- Suppressed the legacy Phase 1 progress-kept modal for blank first-ever states, while still showing it once for existing learners with completed lesson progress during migration.
- Added `validateV601FirstRunContracts()` to guard fresh-state notice logic and the `.is-hidden` cascade collision in browser startup validation.
- Updated the app footer version to `v6.0.1` and the service-worker cache to `aan-thai-v6-0-1`.

## v6.0.0 - 2026-07-01

- Shipped a UI hierarchy, accessibility, mobile ergonomics and scope-separation pass without changing curriculum sequencing, SRS/review scheduling, state schema, migration semantics, lesson gates, vocabulary roles or Phase 1 pedagogy.
- Added semantic UI tokens and reusable screen/action/status classes, then moved generic progress, warning, reward, heatmap, tab and grade colours away from the Thai class-colour tokens.
- Completed the second v6 visual engagement pass with a premium dark visual system, aurora background, glass/raised surfaces, stronger shadows, tactile cards/buttons and semantic glows.
- Renamed the bottom tabs to Today / Practice / Tones / Read / Progress while preserving internal routes, and added tab `aria-label` values plus active `aria-current="page"` handling.
- Added a display-only Today route summary hero above the existing task list using the current route/review/blocker helpers, with route state classes, progress ring/bar, optional-next hint and a stronger primary CTA.
- Reframed Daily practice as Optional practice and changed practice chips to consistent states such as Required, Recommended, Today, Available, Done and Locked.
- Reorganised Practice into Due review, Script and reading, Tone/hearing/recall and Transfer practice groups with training-card styling while preserving all existing button IDs.
- Reworked Tones around the written Tone route with tone-lab visuals, lab-note TTS safety copy, badge shelf styling and class reference there.
- Reframed Library as Read, prioritised Reading room / Fluency reads / Seen in the wild / Readiness report before optional phrases and unlock packs, and added night-reading-room styling.
- Reworked Streaks into Progress & settings with KPI chips, trophy/token polish, letter wall, skill profile, training path, heatmap, progress tools, optional extras and reset danger zone.
- Added tactile overlay/review feedback classes, correct/wrong/weak visual states, completion/reward animation for major milestones only, and reduced-motion support.
- Completed high-impact inline-style cleanup from 193 to 127 inline style attributes; remaining inline styles are dynamic, pedagogical class-colour spans or local legacy player/template layout values.
- Confirmed class-colour protection: `--mid`, `--high` and `--low` remain reserved for Thai class/tone meaning, not generic progress, rewards, nav, shop, heatmap or active states.
- Added `docs/v6_ui_pass_notes.md`; refreshed source-review docs and smoke checklist for version `v6.0.0` and service-worker cache `aan-thai-v6-0-0`.

## v5.4.6 - 2026-07-01

- Shipped the targeted Phase 1 content/pedagogy hardening pass without adding Phase 2, broad vocabulary, grammar lessons, native audio, speech scoring, dependencies, backend services or an architecture split.
- Reduced Lesson 1 cognitive load by making the full tone route a preview and limiting the first lesson to the easiest live + no-mark -> mid-tone case.
- Added อ่าน as the Lesson 4 app-name/course-goal recognition item and kept it out of recurring axis-review burden with `review:false`.
- Standardised Unit C tone pedagogy around one repeated Tone route and labelled earlier tone outcomes in Lessons 4, 7, 8 and 11 as previews.
- Added consolidation-day framing around Lesson 7 and Lesson 13 so review-heavy days read as normal course design.
- Added Lesson 21 rare-letter class-only preparation for the Letters boss using `classOnlyGlyphs` plus active class-recognition quiz items, without normal glyph/axis review seeding for those rare rows.
- Cleaned controlled-reading stories: removed `เรา ไป อาหาร`, replaced late speaking-fluency overclaims with reading outcomes, and kept Phase 1 completion copy bounded to controlled script reading.
- Reframed the Library phrasebook as optional/bonus and stopped weekly phrase suggestions from auto-adding `w:` review cards; learners now opt into phrase-card review load.
- Rebalanced the final Phase 1 checkpoint to 15 questions covering class, final jobs, live/dead, vowel length, tone marks, tone results, silent leaders, true/fake clusters, three-piece vowels, public-sign chunking and gaaran.
- Added targeted feedback for class, rare class, tone mark, silent leader and gaaran axes, plus `validateContentPedagogyHardeningContracts()` in the generated audit.
- Added `docs/phase1_content_pedagogy_notes.md` and `docs/content_pedagogy_checklist.md`; regenerated `docs/phase1_audit.md` / `docs/phase1_audit.json`, now reporting app version `v5.4.6` and 36 validators passing.
- Updated the service-worker cache name to `aan-thai-v5-4-6` for the versioned shell.

## v5.4.5 hardening - 2026-07-01

- Kept the app footer version and service-worker cache at `v5.4.5` / `aan-thai-v5-4-5`; no curriculum, SRS, unlock, migration or Phase 2 behaviour changed.
- Added `tools/make-release-zip.sh`, a dependency-free `git archive` helper that writes an ignored tracked-source zip under `dist/`.
- Gated exhaustive startup validators behind `?debugValidators=1` or `localStorage["thai_debug_validators"]="1"` while keeping critical runtime checks and preserving the full `tools/phase1-audit.js` validator suite.
- Added a bounded service-worker app-shell fetch timeout before cache fallback for weak mobile connections.
- Added `escAttr()` and moved dynamic attribute interpolation to attribute-context escaping.
- Removed automatic Google Fonts page-load requests and switched app typography to native/system Thai-capable stacks.
- Refreshed release-review docs and added `docs/phase2_refactor_plan.md` as a future no-build/low-build split plan.

## v5.4.5 - 2026-06-29

- Made `tools/phase1-audit.js` deterministic for generated quiz/audit extraction by using a seeded `Math.random` inside the audit sandbox.
- Made audit generation idempotent when substantive content is unchanged by preserving the previous `generatedAt` timestamp on identical regenerated audits.
- Removed unreachable legacy collectible album/pull code and data from `index.html`; older `gacha` progress fields remain accepted by progress import shape checks.
- Fixed source-review hygiene: `CLAUDE.md` is no longer ignored while tracked, `FILE_MANIFEST.md` / `THAI_APP_AUDIT_PACK.md` now describe the current tracked source, and `README.md` points at current review artifacts.
- Regenerated `docs/phase1_audit.md` / `docs/phase1_audit.json`; audit now reports app version `v5.4.5` and 35 validators passing.
- Updated the service-worker cache name to `aan-thai-v5-4-5` for the versioned shell.

## v5.4.4 - 2026-06-29

- Made objective routine review correct-feedback dwell adaptive to the visible green text after answering: short `Correct` feedback still uses a 1-second minimum, while longer green answer text gets more reading time up to a cap.
- Kept the one-tap routine review flow: no `Felt shaky / Solid` decision returns, no visible timer appears, and weak-correct timing/spacing remains hidden.
- Added `validateV544AdaptiveCorrectDwellContracts()` to guard short, long and capped correct-feedback dwell cases.
- Regenerated `docs/phase1_audit.md` / `docs/phase1_audit.json`; audit now reports app version `v5.4.4` and 35 validators passing.
- Updated the service-worker cache name to `aan-thai-v5-4-4` for the versioned shell.

## v5.4.3 - 2026-06-29

- Restored a brief automatic 1-second correct-feedback dwell for objective routine review cards so the learner can see `Correct` before the next card loads.
- Kept the v5.4.1 one-tap routine review flow: no `Felt shaky / Solid` decision returns, and weak-correct timing/spacing remains hidden.
- Added `validateV543CorrectDwellContracts()` to guard the feedback dwell and prevent the shaky/solid controls from returning.
- Regenerated `docs/phase1_audit.md` / `docs/phase1_audit.json`; audit now reports app version `v5.4.3` and 34 validators passing.
- Updated the service-worker cache name to `aan-thai-v5-4-3` for the versioned shell.

## v5.4.2 - 2026-06-29

- Streamlined learner-facing Today and Course Map review copy: task cards now use short states such as `Clear`, `29 due`, `Review first`, `Done`, and `Practice` instead of explaining hard caps, default slices or catch-up policy.
- Shortened review-related toasts and blocker text so taps do not surface scheduler paragraphs.
- Added `validateV542StreamlinedCopyContracts()` to keep verbose scheduler phrases out of learner-facing Today/path functions.
- Regenerated `docs/phase1_audit.md` / `docs/phase1_audit.json`; audit now reports app version `v5.4.2` and 33 validators passing.
- Updated the service-worker cache name to `aan-thai-v5-4-2` for the versioned shell.

## v5.4.1 - 2026-06-28

- Removed the manual post-correct "Felt shaky / Solid" fork from objective routine review cards; correct routine MCQ answers now advance without the extra decision.
- Added hidden conservative auto-confidence for routine review MCQs only. A weak correct can come from clearly slow reliable timing or repeated support audio, while first-card timing, hidden/background/focus-lost timing, active TTS time, v5.4 fluency reads and the final checkpoint default to solid.
- Set weak-correct timing thresholds to 7 seconds for letter/final review cards and 10 seconds for word-style routine review cards.
- Kept the old shorter-spacing behaviour for weak correct answers by using the same shorter multiplier as legacy shaky-correct, but wrong answers remain the primary driver of lapses and leech status.
- Preserved the `thai_state_v1` storage key and old `shaky` metadata compatibility; v5.2.1-v5.4 imports still validate and repair safely.
- Added `validateV541AutoConfidenceContracts()` and regenerated `docs/phase1_audit.md` / `docs/phase1_audit.json`; audit now reports app version `v5.4.1` and 32 validators passing.
- Updated the service-worker cache name to `aan-thai-v5-4-1` for the versioned shell.

## v5.4 - 2026-06-28

- Added six controlled fluency reads at Lessons 6, 10, 13, 17, 23 and 24. Each read uses Thai script first, asks for a slow pass and smoother second pass, includes optional device voice support, a decoding check and a self-rating.
- Added controlled real-world reads for price fragments and public/Bangkok sign-like Thai without creating a survival phrase module, conversation tree or Phase 2 route.
- Added a final Phase 1 completion checkpoint after Lesson 24 and the Letters boss. It checks observable reading behaviours across class, tone logic, live/dead, final jobs, vowel length, clusters, taught sign-like items and a final controlled read.
- Kept ordinary lesson progression non-blocking for fluency reads. Recovery mode still takes priority over fluency reads after 3/7/30-day gaps.
- Added minimal state: `fluencyReads{id:{completed,rating,checkOk,gate}}` and `phase1Completion{date,pct,rating,passed,...}`. Existing storage key `thai_state_v1` is unchanged.
- Added `repairStateForV54()`: completed-course states receive sensible default fluency-read completion records, but they do not auto-pass the new final completion checkpoint. Existing lesson completion, tokens, titles and checks are preserved.
- Added `validateV54FluencyContracts()` and regenerated `docs/phase1_audit.md` / `docs/phase1_audit.json`; audit now reports app version `v5.4`, 31 validators passing, six fluency reads and a 12-question final checkpoint.
- Updated the service-worker cache name to `aan-thai-v5-4` for the versioned shell.

## v5.3.1 - 2026-06-28

- Added the v5.3 Step 2 TTS reliability policy: browser Thai `speechSynthesis` is device voice support only, useful as a rough model but not reliable assessment evidence for tone, vowel length, aspiration or final-stop mastery.
- Kept existing audio buttons and iPhone Thai voice setup guidance, while removing the empty future human-audio hook path. No manifest, asset folder, recording pipeline, demo recordings, AI audio or scraped audio were added.
- Softened learner-facing audio/listening copy to say "device voice support", "rough model" and "compare, but don't treat this as a native-speaker recording" where needed.
- Renamed visible Tone licence copy to Tone practice badge and kept the underlying `toneLicence` state key unchanged for compatibility.
- Regrounded high-stakes Phase 1 completion copy in script evidence: decoding taught Thai without Romanisation, consonant class and tone logic, live/dead recognition, final consonant jobs and controlled cumulative reading.
- Clarified that Phase 1 completion does not claim native listening or speaking mastery, and that listening tasks remain useful practice rather than proof of native-like perception.
- Added lightweight text/visual contrast support for tone rules, live/dead syllables, vowel length, final consonant jobs and aspiration warnings without adding a contrast-lab UI or large content bank.
- Added/extended validators: `validateNoHumanAudioContracts()`, `validateTtsAssessmentSafetyContracts()`, `validatePhase1CompletionStandardContracts()`, `validateProductionSafetyContracts()` and `validateV531TtsSafetyContracts()`.
- Regenerated `docs/phase1_audit.md` and `docs/phase1_audit.json`; audit now reports app version `v5.3.1` and 30 validators.
- Updated the service-worker cache name to `aan-thai-v5-3-1` for the versioned shell.

## v5.3.0 - 2026-06-28

- Added the Step 1 review-shape governor from the approved v5.3 plan: Today review now serves a bounded default slice up to 30 cards, while explicit Practice flashcard catch-up remains available at the existing 40-card cap.
- Added return-after-gap recovery mode using existing local activity state. After 3/7/30-day gaps, Today foregrounds a recovery route with 18/16/12 review cards before optional new work.
- Preserved the v5.2.5 lesson blocker: missing prerequisites, required mastery checks, Endings Refresh, invalid state and review overload at 45+ due cards still block new lessons.
- Kept due cards intact: v5.3.0 does not delete, forgive or silently hide backlog; overload copy is phrased as consolidation/recovery work.
- Added `validateV53ReviewGovernorContracts()` and generated audit coverage for due bands `0/8/24/25/30/33/37/45`, recovery gaps, low-energy review, leech exclusion, axis-flood staging, manual 40-card catch-up and completed Phase 1 returning without Phase 2.
- Regenerated `docs/phase1_audit.md` and `docs/phase1_audit.json`; audit now reports Today review default max `30`, manual Review catch-up cap `40`, recovery targets `18/16/12`, 26 validators, and no prerequisite or role issues.
- Updated the service-worker cache name to `aan-thai-v5-3-0` for the versioned shell.
- Scope lock: no human-audio manifest/infrastructure work, no contrast labs, no Phase 2 content.

## v5.2.6 - 2026-06-28

- Removed recurring tone-sign name review for `่`, `้`, `๊` and `๋`; the app no longer seeds or keeps `g:` glyph-name cards or `a:glyph` axis cards for those marks.
- Kept tone-sign names in lesson/reference copy only, while preserving function-based tone questions such as class + mark -> tone.
- Existing legacy tone-sign name cards are pruned by the normal state repair pass.
- Changed remaining mark-review prompt wording from formal name recall to mark function.
- Added `validateV526ToneSignReviewContracts()` and audit coverage to prevent tone-sign name MCQs from returning to review.
- Stabilisation pass: progress import now validates the incoming JSON shape before merge, runs the same v5/v5.0.1 repair path used at startup, validates the repaired deck, saves and re-renders immediately.
- Added `validateImportContracts()` / generated `importRepair` audit coverage for malformed imports, old valid imports requiring Endings Refresh, and completed Phase 1 imports.
- Updated the service-worker cache name to `aan-thai-v5-2-6` while keeping the existing network-first shell strategy.
- Added a clean source-review bundle manifest and a lightweight smoke-test checklist for fresh, Lesson 5, migrated, completed-course, malformed import, offline reload and installed-PWA update scenarios.

## v5.2.5 - 2026-06-27

- Kept the v5.2/v5.2.1 learning model intact while simplifying route gating through a single canonical lesson blocker.
- New lessons are now hard-blocked only by missing prerequisite lessons, required mastery checks, the migrated-user Endings Refresh, review overload at 45+ due cards, or invalid/corrupt state.
- Review load now uses three bands: 0-24 normal, 25-44 review recommended but lesson allowed, 45+ consolidation/review required before new lessons.
- Delayed +1/+7 checks remain visible and recommended, but no longer block progression by themselves; migrated/backfilled checks are capped per day.
- Staged `a:` axis review cards so the full axis pool does not become a same-day review flood; existing due-axis floods are repaired down to a small daily slice.
- Course Map practice nodes are non-blocking and can be auto-completed by equivalent Today practice via `markEquivalentPracticeNodeComplete()`.
- Added `getLessonBlocker()` and `validateV525RouteSimplificationContracts()` covering clean/migrated Lesson 5 states, Lesson 6 at 33/37 due items, staged axis-review floods, stale Course Map practice nodes, soft delayed checks and the 45+ hard cap.
- Validation run: embedded script parse, `tools/phase1-audit.js` syntax check and `node tools/phase1-audit.js`; generated audit validator suite PASS including `v525RouteSimplification`.

## v5.2.1 - 2026-06-27

- Added review hardening on top of v5.2: three misses now mark a card as a leech, keep it out of normal review, and send it to Leech clinic until two clean passes clear it.
- Added a "Felt shaky" path for correct flashcard answers. Shaky correct answers keep the card on a shorter interval.
- Added axis-balanced review sessions: normal flashcard review now samples across script, mechanism, listening, read-aloud/transfer and phrase buckets before filling the 40-card cap.
- Added utility tags for lesson payoffs and Bangkok Missions, so useful Phase 1 language can be prioritised without adding English-definition vocab quizzes.
- Added human-audio readiness: speaker taps can prefer future bundled local recordings for core tone/aspiration/final-stop targets, while today’s app still falls back to the device Thai voice.
- Added named hardening validators: `validateRecallAxisContracts()`, `validateDelayedMasteryContracts()`, `validateContrastCoverageContracts()`, `validateMigrationTrustContracts()`, `validateUtilityMissionContracts()`, `validateHumanAudioFallbackContracts()` and `validateV521HardeningContracts()`.
- Parked v6/Phase 2 note: audio-first small scenes, controlled dialogues and useful pattern retrieval remain a bridge-plan item, not Phase 1 scope.
- Validation run: embedded script `node --check`, `tools/phase1-audit.js` syntax check and `node tools/phase1-audit.js`; generated audit validator suite PASS including the new v5.2.1 hardening contracts.

## v5.2 - 2026-06-26

- Added a required Useful Thai step to all 24 lessons: Thai script first, then audio, meaning/context and script-cued read-aloud after reveal.
- Added `a:` SRS cards for separate memories: letter shape, class, start sound, ending job, live/dead status, tone rule, listening contrast, read-aloud and outside-the-app use.
- Added later lesson checks: each completed lesson now schedules a +1 day check and a +7 day check, and Today puts a due check before new lessons.
- Added Contrast Block as a guided daily/practice surface: listen first, pick the Thai, read from script, then record and compare.
- Covered high-risk Thai contrasts across their lesson gates: tone marks, initial `ง`, vowel length, `ต/ท/ถ`, `ก/ค/ข`, `ป/พ`, final `-k/-t/-p`, `ร/ล` and true/fake clusters.
- Added Bangkok Missions as outside-the-app checks from already-covered Thai, with no camera, upload, location or web access.
- Updated Today/Daily win so the practice block remains due until the required pieces are complete: Bangkok Mission from Lesson 3, then contrast + read-aloud + outside-the-app practice from Lesson 4 onward.
- Added `retention`, `a:` review ids, `days[].ret`, `days[].bridge`, `missions.done`, `contrastLog`, `lastCapability` and `migrations.v52Full` while preserving existing lesson progress, mastery gates and legacy card ids.
- Added `validateV52BridgeContracts()` and `validateV52FullBriefContracts()`; extended the generated Phase 1 audit with Lesson payoff, Axis review and Delayed retention rows.
- Validation run: embedded script `node --check`, `tools/phase1-audit.js` syntax check and `node tools/phase1-audit.js`; generated audit validator suite PASS including `v52Bridge` and `v52FullBrief`.

## v5.1 — 2026-06-26

- Added optional Mouth Coach contrast cards for high-risk Thai sounds: `ป/พ`, `ต/ท`, `ก/ค/ข`, `ง`, `ร/ล` and final `ก/ด/บ`, all script-cued with no pronunciation score.
- Added richer item-specific wrong-answer feedback for key worked-example mechanisms, including final consonant closing sounds and silent-`ห` tone-row effects.
- Added a Daily win card once review, main task and practice are complete, with bonus practice kept on current material.
- Added Boss rematches for already-passed mastery gates and the Letters boss; rematches are optional practice, do not pay again and do not replace progression gates.
- Added `validateV51PolishContracts()` and included it in the generated Phase 1 audit validator list.
- Validation run: embedded script `node --check`, `tools/phase1-audit.js` syntax check and `node tools/phase1-audit.js`; generated audit validator suite PASS.

## v5.0.1 — 2026-06-26

- Added the required “Relearn updated foundations” route for legacy learners whose early-lesson `f:` final cards were seeded by migration rather than learned through the updated lesson flow.
- Quarantined migration-seeded final cards from normal due review until the refresh is complete, so learners are not asked to guess ending-job SRS cards before seeing the endings again.
- Built the compact Endings Refresh around Lesson 2 endings (`ก น ม ด บ`), Lesson 3 stop endings (`ป ท ก`) and Lesson 5 glide/ring endings (`ร ล ว ย`), with normal review, new lessons, practice and End Today forced through the route while it is required.
- Preserved lesson progress, streak, tokens, notes, titles and other existing state; only a full reset still clears progress.
- Added `repairStateForV501()` and `validateV501FoundationRefreshContracts()` and extended the generated Phase 1 audit validator list with `v501FoundationRefresh`.
- Validation run: embedded script `node --check`, `tools/phase1-audit.js` syntax check and `node tools/phase1-audit.js`; generated audit validator suite PASS.

## v5.0 — 2026-06-26

- Added `repairStateForV5()` as the existing-user stability pass: it preserves lessons/tokens/titles/checks, prunes stale `r:` cards and invalid review entries, rebuilds glyph/final eligibility from lesson gates and seeds missing current `g:`/`f:` cards for completed lessons.
- Added `validateV5MigrationContracts()` with simulated fresh, partial, leaked, legacy and completed states, including old `ไหม`, `เสือ/เสื้อ/เสื่อ`, `เล็ก`, `ภาษา`, `กีฬา`, `เปิด`, Day 23 residue, old `r:` cards, existing `f:` cards and completed Phase 1.
- Added the one-time learner notice: “Phase 1 has been reorganised…” with progress kept.
- Added late Phase 1 Thai spacing/chunking teaching plus the capped, definition-free Chunk this word drill.
- Added Seen in the wild / Sign Safari as a local checklist with no camera, upload, location or web access, plus +3💎 first-seen rewards and street-reading titles.
- Added Font Shock, Mouth Coach, four extra decodable micro-stories and the Phase 1 Readiness report.
- Added post-answer axis-level mechanism hints without pre-answer leakage; v5.1 later adds item-specific worked-example polish.
- Extended the generated Phase 1 audit with `v5Migration`/`v5Transfer` validators, named rows for Chunk this word, Seen in the wild, Font Shock and Mouth Coach, and clearer workload wording that separates lesson payload from the Today governor route.
- Kept the Today governor, SRS cap, mastery gates, one-file PWA architecture and Phase 1 scope unchanged. Daily win cards and boss rematches remain deferred rather than shipped in this stability release.
- Validation run: embedded script `node --check`, `tools/phase1-audit.js` syntax check and `node tools/phase1-audit.js`; generated audit validator suite PASS.

## v4.10 — 2026-06-26

- Added `validatePrerequisiteContracts()` so lesson words, generated quiz prompts, review pools, stories and role-sensitive surfaces are checked for visible glyphs, composite vowel patterns and script mechanisms before they can ship.
- Repaired the known Phase 1 sequence leaks: taught `เ◌า` in Lesson 5 for `เรา`; moved `ไหม` to silent-leader Lesson 17 and used `สี` as the Lesson 6 core replacement; gated `เสือ / เสื้อ / เสื่อ` until `เ◌ือ`; taught `็ / เ◌็` by Lesson 16; taught `เ◌อ`, `ษ` and a direct `์` check in Lesson 20; taught `ฬ` in Lesson 21; moved `ๆ` to Lesson 23; and taught `เ◌ิ` before the capstone `เปิด`.
- Renamed Lesson 23 from Thai digits to useful signs rather than adding untested Thai-digit scope.
- Extended review-pool readability from raw character coverage to concept-aware pattern/mechanism prerequisites, including Echo, tone listening, Sound Twins, Hear & Pick Thai and mixed-review phrase source pools.
- Expanded the generated Phase 1 audit with prerequisite validator status, machine-readable lesson/pool/role issue objects, named surface rows for Hear & Pick Thai, Spell It, Echo, Sound Twins, Tone listening, Mixed review and Reading/stories, and a workload section that separates available pool size from the Today governor’s served daily load.
- Kept the Today governor, SRS cap, mastery gates, lesson order and state keys unchanged.
- Validation run: embedded script `node --check`, `tools/phase1-audit.js` syntax check, `node tools/phase1-audit.js`, generated audit validator suite all PASS, targeted regression checks for `ไหม` before Lesson 17 and `เสือ / เสื้อ / เสื่อ` before Lesson 22 all PASS.

## v4.9 — 2026-06-26

- Promoted ending jobs into first-class teaching cards from Lesson 2 onward, so finals are taught like starts instead of only appearing inside word sublines.
- Added `f:` final/ending-job review cards, including a migration that seeds them for lessons already completed.
- Added ending-job recall to lesson quizzes, checkpoints, unit boss quizzes and mixed review, with review-choice and final-sound contracts guarding the coverage.
- Added a tracked Phase 1 audit extractor at `tools/phase1-audit.js`.
- Added generated audit surfaces at `docs/phase1_audit.md` and `docs/phase1_audit.json` so each day’s lessons, quiz prompts, final jobs, practice pools and validator results can be reviewed together.
- Kept lesson order, mastery gates and existing state keys unchanged.

## v4.8 — 2026-06-26

- Fixed a Lesson 5 review leak where Echo could surface `หมา` because the letters were known even though the silent-ห mechanism is not taught until Lesson 17.
- Added per-item lesson gates to global tone, Sound Twins and Echo practice pools, so covered practice now checks taught mechanisms as well as visible letters.
- Added `ห้า` to the early tone-listening examples so the Lesson 4 tone drill still has enough valid covered items after silent-leader examples are held back.
- Added a direct Lesson 17 frame explaining why `หมา` reads `mǎa`: silent `ห` makes `ม` follow high-class tone rules.
- Kept lesson order, mastery gates and the state schema unchanged.

## v4.7 — 2026-06-25

- Removed transliteration-cued `reading → Thai` questions from generated lesson quizzes, including Lesson 4 cases such as `bâan` → `บ้าน`.
- Kept Thai-script-first lesson checks in place through Mini Decode, tone, listening, class, final-sound and structural mechanism questions.
- Left Thai-choice practice available in sound-cued and review contexts where the prompt is not a Latin transliteration.
- Kept lesson order, mastery gates and the state schema unchanged.

## v4.6 — 2026-06-25

- Added shared class-colour rendering for connected Thai so consonant letters show mid/high/low colours on teaching and practice surfaces.
- Extended class-coloured Thai to lesson previews, Quick Decode prompts, word reveal/read-aloud, tone examples, Thai-word MCQ options, review cards, Spell It, Reading Room stories and phrase cards.
- Kept class-recall questions neutral before answer, including `Which class?` and `Pick the ... class consonant`, so colour does not give away the response.
- Grouped Thai combining marks with their base consonant in the renderer so tone marks stay attached visually.
- Kept lesson order, mastery gates and the state schema unchanged.

## v4.5 — 2026-06-25

- Reworked tone teaching so Thai tone marks (`่ ้ ๊ ๋`) and consonant class are the visible route to tone, with transliteration tone signs treated as reading hints only.
- Enlarged Lesson 4's class/mark/tone comparison into readable Thai-script tiles for `บ้าน`, `ห้า` and `ไม่`.
- Changed tone-focused Quick Decode checks to answer with tone names instead of transliteration spellings.
- Added visible class-colour badges to generated tone-rule questions and key manual tone-grid questions.
- Renamed the Thai Tones transliteration key so Latin diacritics are no longer called tone marks.
- Removed AI-ish wording from current app and project copy.
- Kept lesson order, mastery gates and the state schema unchanged.

## v4.4 — 2026-06-25

- Completed the balanced multiple-choice pass for Thai-script choices, not just Mini decode / Quick decode transliteration choices.
- Added coverage-checked two-axis Thai grids for eligible reading→Thai and listening→Thai options in lesson quizzes, Foundation Ear, mixed review, Hear & Pick Thai and legacy review cards.
- Filtered synthetic Thai grid options through taught glyph coverage before they can appear.
- Expanded `validateBalancedComponentChoiceContracts()` so it now rejects missing Thai-choice and lesson-local listening grids, including cases like Lesson 2 `ดี / บี / ดู / บู`.
- Kept lesson order, quiz size, mastery gates and the state schema unchanged.

## v4.3 — 2026-06-25

- Added balanced component-grid reading distractors for eligible Mini decode and Quick decode items, so options keep two axes live, such as start consonant × vowel/rime.
- Added `validateBalancedComponentChoiceContracts()` so eligible decode questions cannot regress to one-correct-plus-random distractors.
- Tightened vowel glyph misconception scoring so visual/sound traps such as `ไ/โ`, `เ/แ`, short/long vowel pairs and wrap vowels are preferred where covered.
- Kept lesson order, covered-content gating, quiz size, mastery gates and the state schema unchanged.

## v4.2 — 2026-06-24

- Added a structural clarity pass across Phase 1 for hidden vowels, written-vs-spoken vowel order, live/dead sound feel, short/long vowel length, and true/fake clusters.
- Marked the relevant lesson word decode frames so these ideas are named at the point of reading, not only learned by getting quiz items wrong.
- Added direct generated lesson-quiz checks for hidden vowels, vowel order, live/dead, vowel length and clusters.
- Added `validateStructuralClarityContracts()` so the named structural checks cannot silently disappear from their lesson touchpoints.
- Kept the lesson order, letter → class → tone spine, mastery gates and state schema unchanged.

## v4.1 — 2026-06-24

- Made consonant finals explicit as alphabet mastery content, not just tone support, starting in Lesson 2 while leaving Lesson 1's buildup unchanged.
- Added the reusable start job / ending job model: start sound + vowel + ending sound, then live/dead and tone.
- Updated consonant cards after Lesson 1 so they show each consonant's start job and ending job where applicable.
- Added decode frames to lesson word reveals across Phase 1, including early anchors such as `กิน`, `บาท`, `มาก`, later hidden-vowel words, clusters, formal spellings and capstone signs.
- Reworked selected Quick Decode examples and lesson notes so final sounds are named before tone/live-dead reasoning.
- Added generated final-sound quiz checks and a `validateFinalSoundContracts()` startup guard so the final-sound thread cannot silently disappear from lessons after finals are introduced.
- Kept the state schema unchanged; this is a content and lesson-engine pass only.

## v4.0 — 2026-06-24

- Rebuilt Today into a clear four-button route: Review, Main task, Depth block and End today.
- Added a Daily Practice strip so stable habits such as Tone drill, Class sprint, Hear & Pick Thai, Spell it, Reading and Echo are visible every day with locked/recommended/done states.
- Removed the Learn tab and moved lesson archive, guided path and journey progress into an expandable Course Map on Today.
- Split the old Review surface into a light Practice tab for retrieval/reading drills and a Thai Tones tab for tone, class and listening work.
- Made Today's depth block name the actual required task, including directing the learner to unread Reading Room stories as soon as they are available.
- Added a highlighted Today's tone task state: Thai Tones lights up and shows a start card when tone/class/listening is the required depth block.
- Moved the class reference into Library and the letter wall into Streaks.
- Added a Streaks tab for tokens, streak history, freezes, Shop, practice evidence, notes, import/export and reset controls.
- Added clearer bottom-tab colour accents for Today, Practice, Thai Tones, Library and Streaks.
- Made class more explicit: new consonant teaching cards now start with a large Mid/High/Low class banner, and class reference lists use spaced letter tiles instead of dense inline strings.
- Changed End Today into a guard: if review, the main task or depth is missing, it routes the learner back to that task before showing the “Mastery beats breadth” closeout.
- Replaced one-click reset with a four-warning flow whose final step requires typing `I Understand`.
- Added `days[].m` for non-lesson main blocks such as passed mastery gates, so passing a gate counts as the main task without also satisfying the depth block.
- Stopped the weekly Library pack from seeding five due phrase cards during startup; the first-use route now stays on the class primer until the learner opens Library.
- Polished the v4.0 launch copy without changing the visible version: removed long dashes and smart quotes from the app shell, softened heavier task/result wording, and renamed the visible depth step to a clearer Practice block.

## v3.14 — 2026-06-24

- Added guided audio setup when a user taps a speaker icon but the browser/device has no Thai speech voice available.
- The setup panel now distinguishes iPhone Chrome, iPhone Safari and installed-app mode, while explaining that all use the iPhone system voices.
- Added current and older iOS voice-install paths, copyable setup steps, an Apple guide link and a test-again button.
- Speaker taps now call `speechSynthesis.resume()` before speaking and surface real speech errors through the setup panel instead of failing silently.

## v3.13 — 2026-06-24

- Reworked generated multiple-choice options so wrong answers are chosen as likely misconceptions before falling back to generic same-bucket options.
- Applied the pass across glyph sound checks, hear→glyph checks, Quick decode, mini decode, reading→Thai, listening→Thai, boss/checkpoint questions, mixed review, Hear & Pick Thai and SRS glyph cards.
- Prioritised visual glyph neighbours, same-type glyphs, class traps, close readings, tone/length neighbours and similar covered Thai words instead of unrelated random choices.
- Added `validateMisconceptionChoiceContracts()` at app start so generated MCQs fail fast when they miss an available misconception-based distractor.

## v3.12 — 2026-06-24

- Made early pacing honest: Lessons 1–3 now present as shorter foundation days instead of full 45-minute course days.
- Added an optional second-foundation-lesson stretch: after Lesson 1 or Lesson 2, once review is clear and exactly one lesson has been completed today, the learner can continue to Lesson 2 or Lesson 3 instead of doing another shallow depth drill.
- Kept the acceleration strictly before Lesson 4; Lesson 4 and later return to one new lesson per day with stories, tone work, review and drills as depth.
- Counted the optional second foundation lesson as the day's extension block and marked the skipped early practice node complete so the guided path does not loop back to the same early drill.

## v3.11 — 2026-06-24

- Added Hear & Pick Thai as an optional depth drill: audio/transliteration prompt → choose the covered Thai word, with no definitions and no tone-licence shortcut.
- Rebalanced generated lesson quizzes across the whole course so checks rotate retrieval direction: hear→glyph, glyph→sound, spot-the-letter, mini decode, reading→Thai, tone and listening.
- Made class teaching more explicit on consonant teaching cards and kept class checks visually neutral: choose class from memory, with feedback explaining mid/high/low logic.
- Added class-from-category checks where the covered-letter pool makes a single correct answer possible.
- Kept all new lesson/depth activity pools restricted to covered lesson content.

## v3.10 — 2026-06-24

- Tightened SRS review multiple-choice logic for glyph cards.
- Consonant review cards now only offer consonant-sound options, vowel cards only offer vowel-sound options, and tone-mark cards only offer tone-mark-name options.
- Multi-label consonant sounds such as อ's "or / silent" no longer appear as distractors on ordinary consonant cards.
- The silencer mark keeps its own "what does this mark do?" prompt instead of leaking into tone-mark cards as an obvious distractor.
- Added a review-choice startup contract so mixed glyph-type distractors cannot return.

## v3.9 — 2026-06-22

- Gated Sound Twins to covered material only: every option in a set must use letters already taught in completed lessons.
- Moved Sound Twins and tone listening unlocks from Lesson 1 to Lesson 4, when the first usable tone-mark examples are readable.
- Removed Class Sprint's fallback to the full non-rare alphabet; it now drills learned letters only, even when the early pool is small.
- Filtered Tone Drill, Echo Chamber and visible tone example lists to covered Thai text.
- Added an app-start coverage contract that simulates lesson progress and rejects premature global tone/twin content.

## v3.8 — 2026-06-22

- Made Lesson 1's first tone rule explicit: no tone mark does not mean "no tone"; live unmarked Lesson 1 words read with a mid tone.
- Gated generated lesson, checkpoint, boss and mixed-review tone questions so they only appear once the matching tone rule has been taught.
- Kept early useful words like มาก as reading/listening material, but deferred their untaught tone derivation until Unit C.
- Locked the tone-rule trainer until Lesson 13, where live/dead tone derivation is taught as a full rule set.

## v3.7 — 2026-06-22

- Removed remaining definition cues from Sound Twins, Foundation Ear, Spell It, tone drills, tone-rule feedback, mixed review, boss quizzes and late sign checks.
- Sound Twins now asks which Thai word was heard, not which word means an English definition.
- Added a definition-free quiz contract guard so generic quiz surfaces fail validation if they use known English definitions as prompts, answers, options or explanations.

## v3.6 — 2026-06-22

- Added a separate carrier-letter audio row on vowel cards so learners can hear อ itself before seeing it used as a silent carrier.
- Kept the full carrier form audio for อา / อี, with clearer wording that อ is silent there and the form should still sound like the vowel.
- Clarified the first Lesson 1 vowel slides so the carrier letter is no longer implied to add a sound inside the carrier form.

## v3.5 — 2026-06-22

- Replaced lesson "Retrieve & say" English-cue production with script-cued "Read & say" practice.
- The speaking bridge now shows the Thai word, asks the learner to read it aloud, then reveals model audio and optional local recording.
- Deferred English→Thai vocabulary production out of Phase 1; lesson meaning remains on reveal, not as a spoken recall demand.

## v3.4 — 2026-06-22

- Split vowel-card audio labels into the target vowel sound and the carrier-form example.
- Added a short vowel-card note that อ is only the display carrier for isolated vowels, not an extra consonant sound.
- Kept vowel speech using the carrier form shown onscreen so iOS Thai voices have a stable Thai string to pronounce.

## v3.3 — 2026-06-22

- Removed routine "What does this mean?" / "Meaning?" definition questions from lesson quizzes and generated quiz-style review checks.
- Changed lesson listening checks from audio-to-English meaning to audio-to-Thai word recognition, keeping them useful without making early lessons feel vocabulary-tested.
- Kept important late sign-reading meaning checks where the meaning is the actual lesson objective.

## v3.2 — 2026-06-22

- Removed pre-answer audio from glyph sound-recall questions such as "What sound?" and "What sound is this?".
- Kept audio on true listening prompts and class questions where it does not reveal the answer.
- Added an audio-contract guard so sound-recall questions cannot ship with answer audio attached.

## v3.1 — 2026-06-22

- Reordered the guided path so a brand-new learner starts with the three class colours/code and Lesson 1, not a tone listening drill.
- Removed the mandatory sound-first lesson preview so script decoding comes before model audio.
- Reworked lesson word cards into a decode-first interaction: Thai appears first, then the learner reveals transliteration, enables audio, and sees the meaning.
- Renamed and tightened the worked-example slot to Quick decode, using a lighter class-colour/code reminder before the matched "you do" check.

## Unversioned deployment config — 2026-06-22

- Added `vercel.json` so the static PWA can deploy on Vercel in parallel with GitHub Pages.
- Documented the Vercel deploy path in `README.md`, `AGENTS.md`, and the local `CLAUDE.md` mirror.
- Left the learner-facing app version at v3.0 because no app behavior or content changed.

## v3.0 — 2026-06-22

- Reframed the app around a 45-minute Today plan: warm-up review, one lesson/consolidation block, then a depth block.
- Added depth-first progression: attempts to start the next lesson redirect into current review, stories or drills when review is due, the day already has a lesson, or it is a consolidation day.
- Simplified the bottom tabs to Today / Learn / Library / Review and moved the letter wall into Learn.
- Reworked Phrases into Library with unlockable enrichment packs, Reading room access, settings/export/import/reset, and a diagnostic evidence profile.
- Retired visible random reward layers: shop/gachapon, weekly showdown, phrase bounties, and constellation payout.
- Kept useful spenders: Street slang, Teacher, Food deep-dive, streak freezes, titles and quiet visual extras.
- Added extra lesson-quiz mechanism checks across Units C/D for tone grids, silent leaders, clusters, three-piece vowels and real signage.
- Kept the v2.36 vocabulary-role contract intact: decode-only words still cannot leak into meaning/listening production tests.

## v2.36 — 2026-06-22

- Audited all 96 lesson words by instructional purpose: 65 core, 23 recognition and 8 decode-only.
- Limited English→Thai spoken retrieval and Spell it to genuinely useful core vocabulary.
- Kept recognition vocabulary receptive: hear it, read it and identify its meaning without requiring production.
- Removed decode-only words from lesson meaning questions, listening checks and mixed vocabulary review while preserving them as script examples.
- Added visible RECOGNISE and DECODE ONLY labels on lesson word pages.
- Added an app-start vocabulary contract that rejects missing roles and decode-word leakage into vocabulary questions or distractors.
- Replaced the lesson-24 claim that every Thai text can be sounded out correctly with a narrower description of the decoding tools and real-world irregularities.

## v2.35 — 2026-06-22

- Integrated each lesson’s existing core words through hear-first exposure, script decoding, meaning, spoken retrieval and local record/playback comparison.
- Added objective spoken-word recognition questions and separate listening evidence.
- Added a diagnostic Foundations listening baseline after the Lesson 6 script checkpoint.
- Reworked Echo Chamber to record and compare locally; removed self-awarded pronunciation scores.
- Preserved the existing mastery system unchanged: cumulative ≥80% checkpoints every three lessons, free remediation/retries, lesson gating, and the all-42 ≥90% Letters boss.
- Added the `skillStats` state branch for listening results, speaking-practice counts and the Foundations ear baseline.

## v2.34 — 2026-06-21

- Rebuilt the app-wide glyph audio contract.
- Consonants now expose explicit sound anchors and full letter names.
- Vowels play exactly the carrier form displayed onscreen.
- Added automated audio-payload checks across lessons, quizzes, Review, Home, the letter wall and the Letters boss.

## v2.33 — 2026-06-21

- Fixed Reset progress so the wipe persists through `localStorage` in the installed PWA.
- Rebuilt reset state using the current schema while preserving test notes.
- Made the reset control visible and reloaded the app after a confirmed wipe.

## v2.32 — 2026-06-18

- Added the Letters boss: class of all 42 in-service consonants.
- Requires ≥90%, is untimed, and offers free retries plus a missed-item drill.
- First pass awards +30💎 and the นักอ่าน title.
