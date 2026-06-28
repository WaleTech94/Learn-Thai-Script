# Stabilisation Smoke-Test Checklist

Use this as the lightweight manual pass before external source review or a live deploy. Keep any imported/exported progress JSON private.

## Fresh user

- Setup: clear `localStorage["thai_state_v1"]`, then open `index.html` or the deployed PWA online.
- Check: Today loads, version shows `v5.2.6`, Lesson 1 is available, no Endings Refresh appears, and no validator alert/error appears.
- Pass: first-use route starts at the class primer/Lesson 1 path and progress can be exported.

## User after Lesson 5

- Setup: import or create a state with Lessons 1-5 complete, Lessons 1-3 mastery check passed, no migrated-final quarantine.
- Check: Lesson 6 is available. Due delayed checks and 25-44 review items may be recommended, but they do not block the lesson.
- Pass: Course Map and Today both point to Lesson 6 when no hard blocker exists.

## Migrated v5.0/v5.0.1 user needing Endings Refresh

- Setup: import an older state with Lessons 1-5 complete where final cards are seeded by repair rather than already learned.
- Check: import succeeds, progress is preserved, and Endings Refresh is the hard blocker before Lesson 6.
- Pass: quarantined `f:` final cards do not appear in normal review until the refresh is completed.

## Completed Phase 1 user

- Setup: import a completed Phase 1 export with all 24 lessons done and `checks.letters42` true.
- Check: import succeeds, tokens/titles/checks are preserved, stale legacy review cards are pruned, and missing valid glyph/final/axis cards are repaired.
- Pass: Course Map shows Phase 1 complete and optional rematches remain available.

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
- Check: swipe the installed app closed, reopen online, and confirm the footer version is still `v5.2.6` for this stabilisation pass.
- Pass: the updated shell loads without clearing progress; if service-worker assets changed, the active cache should be `aan-thai-v5-2-6`.
