# v8.5.0 — What stuck?

This release improves Week 1 before adding more conversation content. It supersedes the v8.4 interaction contract and the Lesson 3 +7 serving rule in the frozen course documents. Weeks 2–8 remain future work. Existing Phase 1 reading, SRS, mastery and delayed-transfer authority are preserved.

## Learning flow

A new phrase is taught whole, explained in ordered parts with a reusable pattern note, and heard before a builder opens. The learner then hears the vendor, builds and practises the reply. Guided reuse checks heard meaning, rebuilds with less help, and finally hides the full model and tiles for an explicit recall attempt. Help remains available and is recorded separately. A misunderstanding repair returns to the original vendor question and asks for its answer. Changed phrases are modelled before substitution practice.

Listening prompts omit the English situation that could reveal the meaning. Meaning keys come from the actual cue family, including assessment variants. Response choices use device audio. Item-keyed shuffling varies positions but is stable within an attempt/reload. A cue must finish successfully before an answer can be submitted; an audio answer option must also finish before it can be selected. An unsure response is allowed. First answers are saved before feedback; remediation cannot rewrite them.

Audio completion records listening only. Explicit learner actions record practice participation and assistance. Neither tapping “I tried” nor reconstructing tiles proves speaking ability. Assessment repairs now require a correct choice after feedback before moving on. Lesson time estimates are 12, 14 and 14 minutes (10/12/12 core plus two minutes ordinary repair); consolidation/gate and delayed review estimates remain unchanged.

## What stuck?

The supplementary check appears after any completed conversation lesson, including pre-update completions. It samples two heard-meaning choices, one reply choice and one reported spoken recall per completed lesson. It adds two reading questions when reading prerequisites are available: taught consonant questions early, then words from the ordinary `FRESH_DECODE` practice pool. It never uses the sealed assessment or retention reading banks. Conversation content is familiar taught material, not a claim of unseen transfer.

Results separate first-try listening accuracy, reply choices, reading and the learner's report of recall (independent, needed parts/correction, needed model). Opening help prevents an independent rating. Reading is explicitly “not checked” if no reading lessons are complete. Results recommend relevant lesson practice and retain up to three snapshots. A new check can be taken on another Bangkok day; the suggested next-day/week spacing is optional and creates no gate.

This is a small diagnostic sample, not a CEFR level or free-conversation/pronunciation certificate. Existing completion history cannot retrospectively tell us whether unsupported understanding occurred. Do not merge old percentages with new diagnostic scores.

## Ownership and extension rules

| File | Owns |
| --- | --- |
| `conversation-content.js` | Authored lines, interactions, lessons, patterns, active and archived forms |
| `conversation-course.js` | Schema-2 authority, scheduling, import/recovery, shared choices/recall/builders, course controllers |
| `conversation-check.js` | Diagnostic assembly, controller, optional state and results |
| `index.html` | Shell, shared infrastructure and established Phase 1 course |
| `tools/app-source.js` | Ordered script manifest used by all Node harnesses |

There is one choice renderer and one recall renderer. Future units extend authored data, using the existing course controller and scheduler. Keep historical conversion at the resume/import boundary; do not add dormant alternate renderers or another progression model. Derived diagnostic questions have a bounded eight-entry in-memory cache to avoid repeated reading-bank work during validation and rendering; the cache carries no learner authority.

Scripts load in data → course → diagnostic order before the embedded app. HTML and service-worker asset URLs include `?v=8.5.0`, preventing an old cache from combining the old monolithic conversation file with the new extracted data. Cache name: `aan-thai-v8-5-0`. No framework, backend, bundler, package or runtime API was introduced.

## State and compatibility

Only `conversation.extensions.learningCheck` is added, optionally:

- `version: 1`, `runs` (at most three completed sessions), `resume` (one session or null).
- A session fixes `ordinal`, Bangkok start/completion days, completed conversation/reading lesson prefixes, current index, first answers and current reveal/support state.
- Each answer identifies the exact question and stores either the selected option or spoken self-rating. Correctness is derived from content; imported scores are not trusted.
- Strict import validates shape, dates, indices, question membership and supported/independent consistency. Malformed local diagnostic data is removed and reported by the existing recovery path while course and reading history survive.
- It cannot award main-course credit, SRS cards, reading evidence, tokens, streaks or gates, or replace the course resume. Replaying a completed lesson preserves another unfinished review.

Schema 2 and existing field names remain. The historical field `spokenBeforeRevealIds` represents a completed practice action, not proof of independent recall. New supported actions populate `supportOpenedIds`; old saved runs keep their original evidence. Lesson resume aliases are translated once at the boundary.

## Lesson 3 +7 forms

The previous rule waited for the unshipped taxi lesson. Newly served `cv1.form.retention.w01.l03.d7.c` and `.d` each contain four interactions/eight objectives, using only Week 1 food/service and repair language. Their first three interaction variants follow the prior A/B forms with distinct C/D IDs; the fourth practises repeat/slower and returns to a taught service/food question.

Original A/B forms remain in `CV1_ARCHIVED_FORMS` solely for saved history/resume/import. They are excluded from new form selection. Thresholds, original completion dates and retention due dates are unchanged. This override is authoritative over the corresponding A/B serving entries in the earlier form manifest and Week 1–2 registry.

## Verification

The precommit gate covers syntax, all-source NFC/male-particle policy, Thai tone/transliteration, reading decodability and fresh/sealed bank isolation. It runs both the existing state/content harness and the new event-flow harness. `conversation-flow-smoke.js` invokes actual registered handlers in a minimal DOM with explicit successful/failed/stale audio callbacks; it does not claim real browser speech synthesis or iPhone QA.

Manual release checks: fresh onboarding and model-before-builder; existing Week 1 progress with “What stuck?”; mid-check exit/reload; independent versus assisted recall; reading entry at zero/partial/completed progress; no mixed scripts after updating from v8.4.1; offline second launch. Device voice quality and timing remain device-specific.

Release QA completed on 2026-09-07: fresh onboarding/model playback, Today at 390×844, a completed-Week-1 fixture, all twelve diagnostic prompts through real browser controls/device TTS, mid-check navigation/reload/resume, assistance disabling the independent rating, and the result breakdown. Audio-answer rows were corrected to span the mobile grid. The fixture was removed before commit. Installed iPhone update/offline behavior still requires the owner’s device.
