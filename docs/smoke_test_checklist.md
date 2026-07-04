# v6.7.0 Smoke-Test Checklist

Use this as the manual pass before external source review or live deploy. Keep exported/imported progress JSON private.

## Fresh Load

- Clear `localStorage["thai_state_v1"]`, open the app online, and confirm Today loads with version `v6.7.0`.
- Confirm no Endings Refresh, Morning warm-up or legacy Phase 1 progress-kept modal appears for a blank first-ever state.
- Confirm the service-worker cache marker remains `aan-thai-v6-4-1`; v6.7.0 does not change cached asset filenames.

## Validation Gate

- Run `node tools/precommit-check.js`.
- Run `node tools/phase1-audit.js`.
- Confirm `docs/phase1_audit.json` reports app version `v6.7.0`, 46 validators passing and 0 lesson/pool/role prerequisite issues.
- Confirm `docs/phase1_audit.md` includes `PASS v67CompletionJourney` and the Write it, Route talk, Decode Gym, Wild deck and Rare-letter class surface rows.

## v6.7 Completion Journey

- Import or create a completed Phase 1 state with `checks.phase1Completion` true.
- Pass: Today says `Phase 1 complete · Maintenance`, does not offer a new lesson, and routes first to due review if due cards exist.
- Clear due review in that completed state.
- Pass: the main action routes to an existing maintenance surface such as a fluency re-read, Wild deck, readiness report or boss rematch.
- Use a completed state with no `phase1Completion.celebrated`.
- Pass: the one-time completion overlay appears, uses bounded can-do / keep-practising wording, then sets `phase1Completion.celebrated`.
- Reload the same state.
- Pass: the completion overlay does not repeat.

## Progress Dashboard

- Open Progress.
- Pass: a Phase 1 dashboard card shows lesson, checkpoint, fluency-read, Letters boss and final-completion counts from current progress.
- Tap the dashboard card.
- Pass: it opens the readiness report rather than changing progress or scheduling.

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

## Streak Freeze Gaps

- Set a state whose last active day was two calendar days ago with one freeze.
- Pass: one freeze is consumed, the streak continues, and the copy says one freeze covers one missed day.
- Set a state whose last active day was four calendar days ago with two freezes.
- Pass: no freeze is consumed and the streak resets because three missed days need three freezes.
- Set the same four-day gap with three freezes.
- Pass: three freezes are consumed and the streak continues.

## Return And Overload Copy

- Use a state returning after at least three inactive days.
- Pass: Today includes a welcome-back line and a smaller return-after-gap review route.
- Use a state with 45+ due review cards.
- Pass: the overload copy explains that clearing the deck takes a few steady days while short task labels stay compact.

## Capture Count And Export

- Save local Thai captures until the count is visible.
- Pass: Capture Thai and Wild deck show `N/200 saved`.
- Near 180 captures, pass: the app warns that at 200 captures the oldest saved Thai drops off first.
- Tap `Copy captures`.
- Pass: saved captures copy or appear in the fallback prompt as plain text lines with Thai, note and date.

## Export And Import

- In Progress tools, tap `Download backup`.
- Pass: a file/share-sheet backup named `aan-thai-progress-YYYY-MM-DD.json` is offered and progress remains in place.
- Open the JSON and confirm it is an envelope with `app: "aan-thai"`, `appVersion: "v6.7.0"`, `key: "thai_state_v1"`, `exportedAt` and full `state`.
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

## Save-Failure Warning

- Simulate unavailable storage or use a constrained/private context where both storage writes fail.
- Pass: a persistent banner says `Progress is not saving on this device. Export a backup now.`
- Tap `Export backup`; pass: backup export opens from the banner.
- Restore storage and trigger a save; pass: the warning clears and does not stack repeatedly in the same session.

## Error And Update Notices

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
- Answer three objective questions correctly in a row.
- Pass: the combo chip appears; fifth-answer milestones give the small milestone sound/pop.
- Complete an objective session.
- Pass: completion sound, best-run line and streak-extension line appear where relevant.
- Toggle `Sounds: on/off` in Progress tools.
- Pass: SFX mute is respected and no audio assets or network requests are added.

## Core Installed-PWA Checks

- Open the installed PWA online, swipe it closed, reopen it, and confirm progress remains.
- Confirm footer version `v6.7.0`, 44pt taps, safe-area top/bottom chrome and Thai device voice setup still behave normally.
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
