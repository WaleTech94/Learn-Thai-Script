# v7.5.0 Smoke-Test Checklist

Use this as the manual pass before external source review or live deploy. Keep exported/imported progress JSON private.

## Validation Gate

- Run `node tools/precommit-check.js`.
- Run `node --check tools/phase1-audit.js`.
- Run `node tools/phase1-audit.js`.
- Confirm `docs/phase1_audit.json` reports app version `v7.5.0`, 53 validators passing and 0 lesson/pool/role prerequisite issues.
- Confirm `docs/phase1_audit.md` includes `PASS timeAwareRoute`, `PASS v74StreetRead`, `PASS v73ReadingMileage`, `PASS v72Shop`, `PASS themeContracts`, `PASS v71VisualSound`, `PASS v70Onboarding`, `PASS v67CompletionJourney`, `PASS v66DataSafety` and `PASS v601FirstRun`.
- Confirm `sw.js` cache marker remains `aan-thai-v6-4-1`; v7.5.0 does not change cached asset filenames.

## Fresh-State Onboarding

- Clear `localStorage["thai_state_v1"]` and any Codex/browser artifact storage for the app origin, then open the app online.
- Pass: the first-run onboarding overlay appears once with Skip visible.
- Step through the screens. Pass: it explains reading Thai from zero, letter → class → tone, Today's Review → Main task → Practice route, and setup basics.
- On the engine screen, pass: mid/high/low examples use the existing teal/pink/marigold class colours.
- On the setup screen, tap `Test Thai voice`.
- Pass: no audio autoplays before the tap. If no Thai voice exists, the existing Audio setup panel opens; if one exists, the sample plays from device voice support.
- Finish onboarding. Pass: Today remains available, first lesson/review routing is unchanged, and `state.notices.onboarded` is true.
- Reload. Pass: onboarding does not repeat.

## Onboarding Skip And Existing Learners

- Clear storage again, open the app and tap Skip on the first onboarding screen.
- Pass: onboarding closes, `state.notices.onboarded` is true, and reload does not repeat it.
- Load a saved blank-state blob with no completed lessons and no SRS cards.
- Pass: onboarding does not appear because a saved blob already existed.
- Import or create a state with `done: ["l1"]`.
- Pass: onboarding never appears.
- Import or create a state with any SRS card.
- Pass: onboarding never appears.
- Confirm no legacy Phase 1 progress-kept modal appears for a blank first-ever state.

## About And Beta Identity

- Open Progress → Progress tools → About this app.
- Pass: About explains what อ่าน is, Phase 1 script/class/tone scope, what completion does not claim, the device-voice rough-model boundary, current version and backup/export.
- Confirm the header version pill and Today footer both read `Phase 1 · 1.0 beta (v7.5.0)`.
- Confirm exported backup JSON uses `appVersion: "v7.5.0"`.
- Confirm `manifest.json` description foregrounds learning to read Thai script.

## Dialog Accessibility Polish

- Open Audio setup from a missing Thai voice or the onboarding voice test.
- Press Escape. Pass: the panel closes and focus returns to the triggering control.
- Open End today.
- Press Escape. Pass: the modal closes and focus returns to End today.
- Open About this app.
- Press Escape. Pass: the modal closes and focus returns to About this app.
- Open Reset all progress and press Escape on warning steps 1-3.
- Pass: the modal closes and focus returns to Reset all progress.
- Reopen Reset all progress and continue to the typed `I Understand` step.
- Press Escape. Pass: the typed-confirmation step does not close on Escape; Cancel still closes safely.

## v6.7 Completion Journey

- Import or create a completed Phase 1 state with `checks.phase1Completion` true.
- Pass: Today says `Phase 1 complete · Maintenance`, does not offer a new lesson, and routes first to due review if due cards exist.
- Clear due review in that completed state.
- Pass: the main action routes to an existing maintenance surface such as a fluency re-read, Wild deck, readiness report or boss rematch.
- Use a completed state with no `phase1Completion.celebrated`.
- Pass: the one-time completion overlay appears, uses bounded can-do / keep-practising wording, then sets `phase1Completion.celebrated`.
- Reload the same state.
- Pass: the completion overlay does not repeat.
- Open Progress. Pass: the Phase 1 dashboard shows lesson, checkpoint, fluency-read, Letters boss and final-completion counts.

## Optional Drill Surfacing

- With early progress through Lesson 2, open Practice.
- Pass: Write it is available only when its learned-letter/ending pool exists and it creates no SRS cards.
- With progress through Lesson 13, open Tones.
- Pass: Route talk appears and reveals derived route tiles only after the learner self-explains.
- With progress through Lesson 4+, open Practice.
- Pass: Decode Gym appears once enough gate-checked non-lesson word reps are available.
- With at least one saved capture, open Read.
- Pass: Wild deck is visible and uses saved local captures only.
- With progress through Lesson 21, open Practice.
- Pass: Rare-letter class appears as a class-only drill with neutral pre-answer prompts and no meaning questions.

## Streak, Return And Overload

- Set a state whose last active day was two calendar days ago with one freeze.
- Pass: one freeze is consumed, the streak continues, and the copy says one freeze covers one missed day.
- Set a state whose last active day was four calendar days ago with two freezes.
- Pass: no freeze is consumed and the streak resets because three missed days need three freezes.
- Use a state returning after at least three inactive days.
- Pass: Today includes a welcome-back line and a smaller return-after-gap review route.
- Use a state with 45+ due review cards.
- Pass: overload copy explains that clearing the deck takes a few steady days while short task labels stay compact.

## Capture Count And Export

- Save local Thai captures until the count is visible.
- Pass: Capture Thai and Wild deck show `N/200 saved`.
- Near 180 captures, pass: the app warns that at 200 captures the oldest saved Thai drops off first.
- Tap `Copy captures`.
- Pass: saved captures copy or appear in the fallback prompt as plain text lines with Thai, note and date.

## Export And Import

- In Progress tools, tap `Download backup`.
- Pass: a file/share-sheet backup named `aan-thai-progress-YYYY-MM-DD.json` is offered and progress remains in place.
- Open the JSON and confirm it is an envelope with `app: "aan-thai"`, `appVersion: "v7.5.0"`, `key: "thai_state_v1"`, `exportedAt` and full `state`.
- Tap `Copy backup`; pass: the same envelope can be copied or shown in the fallback prompt.
- Import the new envelope and confirm `Progress imported` appears with lessons/tokens/cards preserved.
- Import a legacy raw-state JSON blob and confirm it still follows the normal import repair path.
- Import a malformed envelope such as `{"app":"aan-thai","key":"thai_state_v1"}`.
- Pass: invalid import toast appears, existing progress stays unchanged, and the app does not reload.

## Corrupt-State Recovery

- Put malformed JSON in `localStorage["thai_state_v1"]`, then reload.
- Pass: the app falls back to a fresh safe state, copies the raw blob to `localStorage["thai_state_v1_corrupt"]`, and shows `Your saved progress could not be read. A copy has been kept.`
- Tap `Copy recovery data`; pass: the corrupt blob copies to clipboard or appears in the fallback prompt.
- Dismiss the notice and confirm the quarantine key is not auto-deleted.

## Save, Error And Update Notices

- Simulate unavailable storage or use a constrained/private context where both storage writes fail.
- Pass: a persistent banner says `Progress is not saving on this device. Export a backup now.`
- Tap `Export backup`; pass: backup export opens from the banner.
- Trigger one uncaught test error in a local debug session.
- Pass: one banner says `Something went wrong. Your saved progress is safe. Reload the app.` with a reload button.
- Trigger another error; pass: a second banner does not stack.
- After deploy, open the installed PWA online and wait for the new service worker.
- Pass: `Update ready - reload to get the latest version.` appears with a reload button and the app never auto-reloads during an active quiz/review.

## Backup Nudge

- Use a state with at least one completed lesson and no `lastExportAt` after 14 active days.
- Pass: Progress shows `Back up your progress` with Export and Dismiss.
- Pass: Today can show one short backup hint for the day.
- Tap Dismiss; pass: `backupNudgeSnooze` is set about 14 days ahead and no lesson/review route is blocked.
- Export a backup; pass: `lastExportAt` is set to today and the nudge clears.

## v6.5 Feedback Layer

- With Sounds on, answer objective MCQ/typed questions correctly and incorrectly.
- Pass: synthesized correct/wrong feedback sounds play after the user gesture, including on iPhone/PWA.
- In Practice, answer Write it, Spell it and Glyph Ghost correctly and incorrectly.
- Pass: objective correct/wrong sounds play on these surfaces.
- In Practice → Contrast block, answer the listening MCQ correctly and incorrectly.
- Pass: objective correct/wrong sounds play on the MCQ step; the later self-rated read-aloud step stays silent.
- In a lesson Quick decode/class-check inline MCQ, answer correctly and incorrectly.
- Pass: objective correct/wrong sounds play.
- Open Echo, Route talk, Decode Gym and Wild deck.
- Pass: these self-graded/read-aloud surfaces do not play objective feedback sounds.
- Answer three objective questions correctly in a row.
- Pass: the combo chip appears; fifth-answer milestones give the small milestone sound/pop.
- Complete an objective session.
- Pass: completion sound is distinct from the milestone sound, and best-run/streak-extension lines appear where relevant.
- Toggle `Sounds: on/off` in Progress tools.
- Pass: SFX mute is respected and no audio assets or network requests are added.

## v7.1 Visual Repair And Exit Guard

- Buy/select Day market or set `state.theme = "day"` in a test profile.
- Pass: Today, lesson stages, quiz feedback, Review flashcards and grade buttons, Practice, Tones, Read, Progress, shop, onboarding/About and safety banners remain legible with visible controls.
- Switch to Skytrain and Songkran.
- Pass: cards, the tab bar and the lesson player sit in each theme palette while mid/high/low class colours stay teal/pink/marigold.
- Confirm reading accents on Read/reading cards use cyan rather than the mid-class teal.
- Start a lesson, advance past the first stage, then tap the close button.
- Pass: a confirm dialog says `Leave this lesson? This attempt restarts from the beginning next time.` Stay/Escape keeps the lesson open; Leave closes it.
- Start a mastery checkpoint, Letters boss or Phase 1 completion checkpoint, answer at least one question, then tap the close button.
- Pass: the same discard confirmation appears. Ordinary shop/read/drill overlays with no meaningful mastery attempt still close immediately.

## v7.2 Shop Expansion

- On a test profile with enough tokens, open the shop and confirm groups read Phrase & story packs / Sounds / Themes / Titles.
- Buy Taxi & Grab and Market bargaining. Pass: both appear as Read categories, each has 12 phrases, and tapping `+ deck` is still required before any `w:` card enters review.
- Buy Bangkok reads. Pass: four extra Reading-room stories become visible, remain lesson-gated, and first read gives the normal +3 token reward.
- Buy/select Ranat. Pass: objective feedback sounds use the brighter synthesized voice; switching back to Default works; `Sounds: off` mutes both voices.
- Buy/select Temple gold, Monsoon and Loy Krathong. Pass: Today, lesson player, review grades, Read, Progress and shop remain legible, and mid/high/low class colours keep their meaning.
- Import a pre-v7.2 backup. Pass: progress imports without `soundPacks[]` or `sfxVoice`, shop opens, Default sound is active, and existing packs/themes/titles remain owned.

## v7.3 Reading Mileage And Automaticity

- Fresh state: open Read before Lesson 8. Pass: the new v7.3 Reading-room stories are not visible, completed-story timed re-read controls are absent, and Tone sprint is not visible before Lesson 13.
- Mid-course Lesson 10 state: open Read. Pass: the Lesson 8 and Lesson 10 new stories are visible, first read uses the normal reading flow, and the `Timed re-read` button appears only after the story has been completed.
- Background the app during a story or fluency read before finishing. Pass: no unreliable timing sample is stored.
- Complete a story or fluency read, then use `Timed re-read`. Pass: the repeat sample stores in `readTimes`, does not award tokens, does not create SRS/review cards, and the Progress dashboard shows a Reading mileage line with story count, timed-read count and pace wording.
- Lesson 18+ state with at least 20 tone-rule answers and 85%+ rule accuracy: open Tones. Pass: Tone sprint is visible, has no countdown, wrong answers show the rose panel plus `Continue`, and the end screen reports seconds per answer.
- Complete Tone sprint. Pass: `drillLog["tone-sprint"]` records last/best pace, no new lesson blocker appears, and no sprint-specific token reward is awarded.
- Lesson 18+ Decode Gym: start several sessions. Pass: each 10-rep set includes at least two true-cluster words when the pool allows, while remaining self-checked and outside SRS.
- Wild deck with a route-eligible taught capture: tap `Drill this`. Pass: the route is hidden first, reveal shows the existing tone-route tiles, and only the capture practice count/date changes.
- Import a pre-v7.3 backup with no `readTimes` or `drillLog`. Pass: import succeeds, Progress opens, and the new surfaces remain optional.

## v7.4 Street Reads And LOW-Tail Stories

- Lesson 17 state with no completed story: open Read and start the Lesson 17 free stories. Pass: first reads are spaced by default, no Street read toggle appears before the story is completed, and the first-read +3 reward path is unchanged.
- Complete a story, reopen it, then switch `Street read`. Pass: words render edge-to-edge on each line, line breaks remain, class colouring remains, and tapping an unspaced word still speaks/shows its reading and meaning.
- In Street read mode, tap `Timed street read`, finish the pass, and inspect progress state. Pass: the sample stores under `readTimes["street:<storyId>"]`, while spaced re-read samples stay under `readTimes["story:<storyId>"]`.
- Switch back to `Spaced`. Pass: the original word spacing returns in place and the timed button returns to `Timed re-read`.
- Lesson 17, 19 and 23 states: confirm free stories `s19`, `s20` and `s21` are visible at their gates, not pack-gated, and first reads still award only the existing +3 story reward.
- Confirm the generated recurrence table marks คน, ใน, พา, ไฟฟ้า, รอ, ไหน, ถุง, ทางเข้า, ทางออก and ครับ as OK.
- Confirm completed fluency reads do not offer Street read mode in this release.

## v7.5 Time-Aware Today Fill

- Complete the required Today route with measured time below target. Pass: a single keep-going card appears with an active-minutes line and one existing unlocked suggestion.
- Tap Skip on the keep-going card. Pass: the card hides for that in-memory suggestion, no progress reward/streak/SRS card changes, and no new persisted skip key appears.
- Set today's `days[date].secs` at or above the displayed target. Pass: the fill card shows `Target met` or stays out of the route instead of offering more work.
- Use a lite-day state. Pass: after the required route is complete, the fill layer is suppressed.
- Use a state with due review, 45+ overload, consolidation/recovery mode or a missing mastery gate. Pass: the fill layer does not offer a next lesson until the normal lesson-blocker rules are clear.
- Use a fresh or very early state. Pass: the fill layer never links to locked Tone sprint, Decode Gym, Street read or fluency re-read surfaces.

## Core Installed-PWA Checks

- Open the installed PWA online, swipe it closed, reopen it, and confirm progress remains.
- Confirm footer string `Phase 1 · 1.0 beta (v7.5.0)`, 44pt taps, safe-area top/bottom chrome and Thai device voice setup still behave normally.
- Confirm bottom tabs read Today / Practice / Tones / Read / Progress and fit on the target iPhone viewport.
- Confirm Today route hero pips/bar match real steps and End today states stay short: `Review first`, `Main task first`, `Practice first`, `Ready` or `Done`.

## Review And Practice Regression Checks

- Correct routine objective review answers show green feedback with adaptive dwell and no `Felt shaky` / `Solid` choice.
- Wrong objective quiz/review answers pause on a rose panel until `Continue` is tapped.
- Class-question misses show answer text, class tiles where appropriate and separated chant text.
- Write it accepts Thai keyboard return, shows the green `Correct` panel with revealed glyph, then auto-advances.
- Capture Thai accepts Thai keyboard return and saves typed local captures only.
- Decode Gym shows non-lesson word-reading reps, reading reveal only and no SRS creation.

## Offline And Weak Network

- Open the deployed PWA online once, then disable network and reload.
- Pass: cached shell opens and progress remains available.
- With a throttled or unreliable connection, reload the installed app.
- Pass: shell fetch does not hang indefinitely; cached shell appears after the bounded timeout if the network stalls.
