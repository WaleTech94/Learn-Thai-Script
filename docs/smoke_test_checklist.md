# v5.4.5 Smoke-Test Checklist

Use this as the manual pass before external source review or live deploy. Keep imported/exported progress JSON private.

## Fresh Load

- Clear `localStorage["thai_state_v1"]`, open the app online, and confirm Today loads with version `v5.4.5`.
- Confirm Lesson 1 starts from the class primer path, no Endings Refresh appears, and no validator alert/error appears.

## Installed iPhone/iOS PWA Launch

- Open the installed PWA online, swipe it closed, reopen it, and confirm progress remains.
- Confirm footer version `v5.4.5`, cache `aan-thai-v5-4-5`, 44pt taps, safe-area top/bottom chrome and Thai audio setup still behave normally.

## Service-Worker Update After Deploy

- After a deploy, open online once, wait for the service worker, swipe closed/reopen, then confirm the latest shell loads without clearing progress.
- Confirm online navigation still prefers fresh `index.html`, `sw.js` and `manifest.json`.

## Offline Reload

- Open the deployed PWA online once, then disable network and reload.
- Pass: cached shell opens and progress remains available.

## Weak-Network Timeout

- With a throttled or unreliable connection, reload the installed app.
- Pass: shell fetch does not hang indefinitely; cached shell appears after the bounded timeout if the network stalls.

## Malformed Import Handling

- Import malformed progress such as `{"streak":{"count":"bad"},"srs":{}}` or an array-valued `srs`.
- Pass: invalid import toast appears, existing progress stays unchanged, and the app continues without reload.

## Completed Phase 1 Import Handling

- Import a completed Phase 1 state with all 24 lessons done and `checks.letters42` true.
- Pass: lessons/tokens/titles/checks remain, stale legacy review cards are pruned, valid glyph/final/axis cards are repaired, six fluency reads default to completed, and the final Phase 1 checkpoint is available but not auto-passed.

## Review Correct-Answer Dwell

- Start routine objective review with due `g:` or `f:` cards and answer correctly.
- Pass: short green feedback advances quickly, longer green feedback stays readable, and no `Felt shaky` / `Solid`, visible timer or slow-answer message appears.

## Delayed Checks

- Use a state with +1/+7 delayed checks due.
- Pass: Today can route to the delayed check, passing stabilises it, and failed checks remain due without blocking normal lesson progress below hard blockers.

## Leech Clinic

- Use or create a state with a three-lapse review card.
- Pass: the card is excluded from normal review, appears in Leech clinic, and two clean clinic passes clear it.

## Endings Refresh

- Import an older v5/v5.0.1-style state where early final cards were seeded by repair.
- Pass: Endings Refresh is the hard blocker, quarantined `f:` cards stay out of normal review, and completion releases valid finals.

## Phase 1 Checkpoint

- Use a Lesson 24 state with Letters boss and all six v5.4 reads complete.
- Pass: final checkpoint opens, requires 85% plus an acceptable controlled-read rating, and does not claim native listening/speaking mastery.

## Debug Validators

- Open with `?debugValidators=1` or set `localStorage["thai_debug_validators"]="1"`.
- Pass: full in-browser validator suite runs without errors; normal app load without the flag still starts quickly.

## No Automatic Google Fonts Request

- Open DevTools Network on a fresh load.
- Pass: no automatic request to `fonts.googleapis.com` or `fonts.gstatic.com` appears; typography uses native/system stacks.
