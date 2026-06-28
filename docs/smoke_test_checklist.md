# v5.4.1 Smoke-Test Checklist

Use this as the lightweight manual pass before external source review or a live deploy. Keep imported/exported progress JSON private.

## Fresh user

- Setup: clear `localStorage["thai_state_v1"]`, then open `index.html` or the deployed PWA online.
- Check: Today loads, version shows `v5.4.1`, Lesson 1 is available, no Endings Refresh appears, no fluency read appears yet, and no validator alert/error appears.
- Pass: first-use route starts at the class primer/Lesson 1 path and progress can be exported.

## Device voice safety copy

- Setup: open Thai Tones, then start any visible audio/listening practice such as Tone ear practice, Hear & Pick Thai, Read & say, Echo, Contrast Block or a fluency read.
- Check: copy frames browser audio as `device voice support` / `rough model`; it does not claim native-speaker recording or perfect tone/length/aspiration/final-stop assessment.
- Pass: audio buttons still play when a Thai system voice is available, and missing-voice setup guidance still appears when no Thai voice is exposed.

## User after Lesson 8

- Setup: import or create a state with Lessons 1-8 complete, Lessons 1-3 and 4-6 mastery checks passed, no migrated-final quarantine, no return-gap recovery.
- Check: the Lesson 6 fluency read is unlocked in Practice/Library/Course Map and does not block Lesson 9.
- Pass: Today may recommend the read as a gentle depth task, but Course Map and Today still allow the next lesson when no hard blocker exists.

## Routine review correct answer

- Setup: import or create a state with at least one due objective `g:` or `f:` review card, then start Practice -> Flashcards.
- Check: answer a routine objective review card correctly.
- Pass: the card advances without showing a `Felt shaky` / `Solid` decision, and no visible timer or slow-answer message appears.

## User after Lesson 15

- Setup: import or create a state with Lessons 1-15 complete and required checks passed.
- Check: the Lesson 6, 10 and 13 reads are available; later silent-leader/endgame reads remain locked.
- Pass: final Phase 1 completion checkpoint remains locked because Lesson 24, Letters boss and all v5.4 reads are not complete.

## User after Lesson 24

- Setup: import or create a state with all lessons complete, all standard checkpoints passed, but no v5.4 fluency reads and no Letters boss pass.
- Check: all six fluency reads are available; the final Phase 1 completion checkpoint lists the missing reads and Letters boss.
- Pass: ordinary completed lessons remain playable and progress is not downgraded.

## Completed Phase 1 user

- Setup: import a completed Phase 1 export with all 24 lessons done and `checks.letters42` true.
- Check: import succeeds, tokens/titles/checks are preserved, stale legacy review cards are pruned, missing valid glyph/final/axis cards are repaired, and v5.4 defaults the six fluency reads as migrated completions.
- Pass: the final Phase 1 completion checkpoint is available but not auto-passed; the Readiness report defines Phase 1 as script/controlled-reading mastery rather than real-world listening or speaking mastery.

## Return-gap recovery

- Setup: use a state with an eligible unlocked fluency read, then set the last active day to 3, 7 and 30 days before the test date.
- Check: Today routes first to the relevant recovery review slice instead of the fluency read.
- Pass: after recovery is no longer active, fluency reads can return as optional depth tasks.

## Migrated v5.0/v5.0.1 user needing Endings Refresh

- Setup: import an older state with Lessons 1-5 complete where final cards are seeded by repair rather than already learned.
- Check: import succeeds, progress is preserved, and Endings Refresh is the hard blocker before Lesson 6.
- Pass: quarantined `f:` final cards do not appear in normal review until the refresh is completed.

## Malformed import

- Setup: try importing JSON with a malformed progress shape, such as `{"streak":{"count":"bad"},"srs":{}}` or an array-valued `srs`.
- Check: the app shows the invalid import toast.
- Pass: existing progress remains unchanged and the app does not need a reload to recover.

## Offline reload

- Setup: open the deployed PWA online once, wait for service-worker install, then disable the network.
- Check: reload the app shell offline.
- Pass: the cached shell opens. When online returns, the network-first shell fetch still refreshes `index.html`.

## iPhone installed-PWA update path

- Setup: deploy a validated build, then open the installed PWA online on iPhone.
- Check: swipe the installed app closed, reopen online, and confirm the footer version is still `v5.4.1` for this pass.
- Pass: the updated shell loads without clearing progress; if service-worker assets changed, the active cache should be `aan-thai-v5-4-1`.
