# Phase 2 Refactor Plan

This is a future plan only. The current app remains a static, buildless single-file PWA for v5.4.6.

## Why Split Before Phase 2

Phase 1 now has enough curriculum, state repair, review logic, validators and UI surfaces that adding Phase 2 inside one file will make coverage mistakes harder to review. A small no-build or low-build split should happen before Phase 2 content so new grammar/vocabulary work does not blur the existing Phase 1 contracts.

## Invariants

- Keep the app static and deployable on GitHub Pages and Vercel.
- Preserve `thai_state_v1`, existing migration semantics, review/SRS behaviour, unlock rules and Phase 1 mastery gates.
- Keep Phase 1 covered-content, prerequisite, vocabulary-role, tone, final-job and no-human-audio contracts intact.
- Keep deterministic audit output from `tools/phase1-audit.js`.
- Do not add a backend, database, runtime API dependency, external font request or mandatory build step.

## Responsibility Areas

- `curriculum/data`: glyphs, lesson definitions, words, stories, fluency reads, missions and static phrase data.
- `state and migration`: storage, import/export, repair functions and state-shape validation.
- `review/SRS`: card seeding, due selection, leech handling, weak-correct timing and review session shaping.
- `lessons/practice engines`: lesson player, checkpoints, boss quizzes, drills, fluency reads and bridge practice.
- `rendering/UI helpers`: escaping, class-coloured Thai rendering, reusable cards, overlay helpers and tab rendering.
- `validators/audit contracts`: startup-critical validators, full release validators and audit extractors.
- `service worker/deployment`: `sw.js`, manifest, Vercel/GitHub Pages rules and release packaging.

## Recommended Extraction Order

1. Extract pure static data first, with no behaviour changes.
2. Extract pure helper functions such as escaping, Thai rendering and small lookup helpers.
3. Extract state loading, saving, import/export and migration repair as one boundary.
4. Extract review/SRS functions after state tests are stable.
5. Extract lesson/practice engines one surface at a time.
6. Extract validators last enough to prove each previous move, but before Phase 2 content starts.
7. Keep deployment/service-worker files separate throughout.

## Checks After Each Extraction

- Parse embedded or bundled app scripts.
- Run `node --check tools/phase1-audit.js`.
- Run `node tools/phase1-audit.js` and confirm deterministic generated audit output.
- Smoke test fresh load, completed Phase 1 import, malformed import, review dwell, Endings Refresh, Leech clinic, offline reload and `?debugValidators=1`.
- Compare key audit counts: 24 lessons, six v5.4 fluency reads, 35 validators passing, zero prerequisite and role-contract issues.

## Risks To Avoid

- Changing curriculum semantics while moving code.
- Breaking storage keys, migration repair, or legacy import compatibility.
- Accidentally making Phase 2 routes visible.
- Letting generated quizzes use uncovered Thai, English definition cues, or giveaway distractors.
- Reintroducing automatic Google Fonts, human-audio placeholders, runtime network dependencies or a mandatory package manager.
- Letting the audit script drift from the same validators used in source review.
