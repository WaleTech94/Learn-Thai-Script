# v7 Release Notes

## Phase 1 · 1.0 beta

`v7.0.0` marks Phase 1 as feature-complete for beta: the app teaches the script-reading spine from zero through the final controlled-reading checkpoint, then routes completed learners into maintenance rather than a Phase 2 placeholder.

`v7.1.0` keeps that beta scope intact while repairing paid visual themes, objective feedback sound coverage and in-progress lesson/checkpoint exit safety.

`v7.2.0` expands optional shop spenders with themes, a synthesized sound voice, story pack, phrase packs and economy notes while keeping paid content outside lesson gates, SRS scheduling and mastery.

What beta means here:

- Phase 1 reading, consonant class, tone logic, final jobs, controlled reads, review, backup/export and maintenance routing are complete enough for owner testing and public self-release preparation.
- The release is still a beta because final iPhone/PWA checks, live deployment propagation and real learner-device use can surface small bugs.
- Until public self-release, changes should be bug fixes, copy clarifications, release safety fixes or validator/doc corrections only.

## v7.2.0 scope

- Shop expansion: Phrase & story packs / Sounds / Themes / Titles are separate shop groups, with `✓ owned` and active states preserved.
- Themes: Temple gold, Monsoon and Loy Krathong are paid dark themes; `validateThemeContracts()` checks contrast and class-colour boundaries across every theme.
- Sound: Ranat is a purchasable synthesized feedback voice using the existing Web Audio path; the Progress sound toggle still mutes all voices.
- Reading and phrases: Bangkok reads adds four decodable paid stories; Taxi & Grab and Market bargaining add 12 optional phrases each, with opt-in `w:` review only.
- Economy: existing earn rates stay unchanged; the documented steady week is about 60-80 tokens for both mid-course and completed maintenance learners.
- State/cache: optional `soundPacks[]` and `sfxVoice` only, plus new ids in existing `packs[]` and `themes[]`; service-worker cache remains `aan-thai-v6-4-1`.

## v7.1.0 scope

- Visual repair: Day market now uses light-safe semantic fills for the bottom tab bar, lesson player, quiz options, safety banners, review grades, onboarding/About and soft controls. Skytrain and Songkran get palette-specific card/tab/overlay surface tokens.
- Colour ruling: reading accents move to cyan so they do not collide with the reserved mid-class teal; class colours stay unchanged in every theme.
- Sound repair: objective Write it, Spell it, Glyph Ghost, Contrast Block and Quick decode answers now play SFX; self-graded listening/read-aloud surfaces remain silent.
- Jingle polish: completion is distinct from milestone, and wrong feedback is shorter/flatter.
- Exit guard: closing an in-progress lesson or mastery checkpoint now confirms before discarding the in-memory attempt. Resume persistence is not added.
- State/cache: no new required learner state key; service-worker cache remains `aan-thai-v6-4-1`.

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
