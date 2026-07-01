# v6 UI Pass Notes

## Screens reviewed

- Today route, Course Map and optional practice.
- Practice.
- Tones.
- Read.
- Progress and settings.
- Bottom navigation on narrow mobile widths.

## Main UI problems found

- The first action on Today was not summarised before the step list.
- Practice was a single undifferentiated grid.
- Library mixed controlled reading, optional phrases, class reference and progress diagnostics.
- Streaks mixed progress, settings and optional extras under a narrow label.
- Thai class colours were also used for generic progress, rewards, heatmaps and tab accents.
- Bottom navigation labels made Read look like speaking and Progress look like only streaks/shop.

## Summary of changes made

- Added semantic UI tokens and reusable hierarchy/action/status classes in `index.html`.
- Added a display-only Today route summary card derived from existing route helpers.
- Renamed the bottom tabs to Today, Practice, Tones, Read and Progress while preserving internal routes.
- Reorganised Practice into due review, script/reading, tone/hearing/recall and transfer groups.
- Reframed Tones around the written Tone route and moved class reference there.
- Reframed Library as Read and moved the skill profile into Progress.
- Changed generic colour/status uses away from `--mid`, `--high` and `--low`.
- Added tab `aria-label` values and active `aria-current="page"` handling.

## Intentionally deferred work

- Full dynamic-template inline-style cleanup.
- A broader component split or module refactor.
- New curriculum, Phase 2 content, new drills, backend services or analytics.
- Any change to review scheduling, state migration or lesson gates.

## Manual iPhone/PWA checks still required

- Installed iPhone PWA safe-area top/bottom chrome.
- Narrow iPhone bottom-tab label fit.
- Today route card and End today redirect behaviour with fresh, review-due, recovery and foundation-refresh states.
- Service-worker update flow after the `aan-thai-v6-0-0` cache lands.

## Scope confirmation

This pass changed UI hierarchy, copy, styling, navigation labelling and display-only route summary output. Curriculum sequencing, SRS/review scheduling, state key, migration semantics, lesson gates, vocabulary roles and Phase 1 pedagogy were not changed.
