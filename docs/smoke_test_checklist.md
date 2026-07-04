# v6.6.0 Smoke-Test Checklist

Use this as the manual pass before external source review or live deploy. Keep exported/imported progress JSON private.

## Fresh Load

- Clear `localStorage["thai_state_v1"]`, open the app online, and confirm Today loads with version `v6.6.0`.
- Confirm no Endings Refresh, Morning warm-up or legacy Phase 1 progress-kept modal appears for a blank first-ever state.
- Confirm the service-worker cache marker remains `aan-thai-v6-4-1`; v6.6.0 does not change cached asset filenames.

## Validation Gate

- Run `node tools/precommit-check.js`.
- Run `node tools/phase1-audit.js`.
- Confirm `docs/phase1_audit.json` reports app version `v6.6.0`, 45 validators passing and 0 lesson/pool/role prerequisite issues.

## Export And Import

- In Progress tools, tap `Download backup`.
- Pass: a file/share-sheet backup named `aan-thai-progress-YYYY-MM-DD.json` is offered and progress remains in place.
- Open the JSON and confirm it is an envelope with `app: "aan-thai"`, `appVersion: "v6.6.0"`, `key: "thai_state_v1"`, `exportedAt` and full `state`.
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
- Confirm footer version `v6.6.0`, 44pt taps, safe-area top/bottom chrome and Thai device voice setup still behave normally.
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
