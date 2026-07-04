# v7.0.0 Release Notes

## Phase 1 · 1.0 beta

`v7.0.0` marks Phase 1 as feature-complete for beta: the app teaches the script-reading spine from zero through the final controlled-reading checkpoint, then routes completed learners into maintenance rather than a Phase 2 placeholder.

What beta means here:

- Phase 1 reading, consonant class, tone logic, final jobs, controlled reads, review, backup/export and maintenance routing are complete enough for owner testing and public self-release preparation.
- The release is still a beta because final iPhone/PWA checks, live deployment propagation and real learner-device use can surface small bugs.
- Until public self-release, changes should be bug fixes, copy clarifications, release safety fixes or validator/doc corrections only.

## v7.0.0 scope

- Fresh-only onboarding: shown once only when there is no saved progress blob, no completed lesson and no SRS card.
- Progress `About this app`: Phase 1 scope, completion boundary, device-voice safety and backup/export pointer.
- Beta identity: visible footer string `Phase 1 · 1.0 beta (v7.0.0)` and internal version `v7.0.0`.
- Bounded dialog accessibility polish: Escape-to-close and focus restore where safe, excluding the typed reset-confirmation step.
- Release finalisation: refreshed docs, regenerated audit, smoke checklist, manifest description and working-prompt cleanup.

## Standing post-1.0 backlog

- Phase 2 module refactor, following `docs/phase2_refactor_plan.md`.
- Validator extraction from the single-file app into clearer testable modules.
- Full accessibility pass, including focus trapping, inert background handling and broader keyboard review.
- Idea-engine drill pool work, kept out of the shipped Phase 1 app until explicitly scoped.
