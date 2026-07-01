# Thai App External Audit Pack

Prepared: 2026-07-01
Workspace: `/Users/lateefoyelade/thai-repo`
Current app version: `v6.0.0`
Live app shell: `index.html`

This pack is a current-source review guide, not a historical archive. It should be read with `FILE_MANIFEST.md`, `AGENTS.md`, `CHANGELOG.md`, `tools/phase1-audit.js`, and the generated `docs/phase1_audit.*` files.

## Current State

Phase 1 script mastery is complete. The app remains a single-file vanilla PWA with no backend, build step, runtime API calls, human-audio assets, AI audio, scraped audio, speech scoring, cloud sync or Phase 2 route.

v5.4.5 was a source-hygiene release. It kept the v5.4.4 learner behaviour and changed reviewability:

- `tools/phase1-audit.js` uses seeded randomness for generated audit extraction.
- Audit generation preserves the previous timestamp when substantive output is unchanged.
- The old unreachable collectible album/pull code was removed from `index.html`.
- Legacy `gacha` progress fields remain accepted by import shape checks.
- `CLAUDE.md` is tracked and no longer hidden by `.gitignore`.
- Source-review notes now describe the current tracked source instead of old local handoff artifacts.

The post-v5.4.5 source hardening pass added:

- `tools/make-release-zip.sh` for clean tracked-source review packages.
- Production startup gating for exhaustive validators; use `?debugValidators=1` or `thai_debug_validators=1` locally for the full in-browser suite.
- A bounded service-worker timeout for slow shell fetches before cache fallback.
- Attribute-context escaping via `escAttr()`.
- Native/system font stacks with no automatic Google Fonts page-load requests.
- `docs/phase2_refactor_plan.md` as a future split plan only.

v5.4.6 is a targeted content/pedagogy hardening pass:

- Lesson 1 frames the full tone route as a preview and only requires the easiest live + no-mark -> mid case.
- Unit C repeats one Tone route across live/dead, class-grid and silent-leader lessons.
- Lesson 21 adds class-only rare-letter preparation for the Letters boss without normal review seeding for those rare rows.
- อ่าน is introduced as the app-name/course-goal recognition item without recurring axis-review load.
- Late story lines now avoid awkward `เรา ไป อาหาร` and speaking-fluency overclaims.
- Phrasebook review is opt-in; weekly phrase suggestions do not auto-add `w:` cards.
- The final checkpoint now samples silent leaders, three-piece vowels, public-sign chunking and gaaran as well as class, tone, finals, live/dead, vowel length and clusters.
- `docs/phase1_content_pedagogy_notes.md` and `docs/content_pedagogy_checklist.md` record the pass and future edit checks.

v6.0.0 is a UI hierarchy, accessibility and scope-separation pass:

- Today has a display-only route summary above the existing required task list.
- Daily practice is reframed as Optional practice, with short consistent state labels.
- Practice is grouped into due review, script/reading, tone/hearing/recall and transfer sections.
- Thai Tones is renamed to Tones, foregrounds the written Tone route and now contains the class reference.
- Library is reframed as Read and prioritises controlled reading before optional phrases/unlocks.
- Streaks is reframed as Progress, with the skill profile moved there.
- Generic UI states use semantic tokens instead of the Thai class-colour tokens.
- Bottom tabs now read Today / Practice / Tones / Read / Progress and manage active `aria-current`.
- No curriculum, SRS/review scheduling, state key, migration semantics, lesson gates, vocabulary roles or Phase 1 pedagogy changed.

## Current Tracked Source

- `index.html` - full app shell, curriculum, state, review, lesson and UI logic.
- `manifest.json`, `sw.js`, `vercel.json` - static PWA/deploy support.
- `icon-180.png`, `icon-192.png`, `icon-512.png` - install icons.
- `AGENTS.md`, `CLAUDE.md`, `CHANGELOG.md`, `README.md` - release and project context.
- `tools/phase1-audit.js` - deterministic audit extractor.
- `tools/make-release-zip.sh` - tracked-source review zip helper.
- `docs/phase1_audit.md`, `docs/phase1_audit.json` - generated audit output.
- `docs/smoke_test_checklist.md` - manual smoke checklist.
- `docs/phase1_content_pedagogy_notes.md`, `docs/content_pedagogy_checklist.md` - content-pedagogy notes and future-edit checklist.
- `docs/v6_ui_pass_notes.md` - UI pass notes and deferred checks.
- `docs/phase2_refactor_plan.md` - future no-build/low-build split plan.
- `FILE_MANIFEST.md`, `THAI_APP_AUDIT_PACK.md` - source-review guidance.

## Ignored Local Artifacts

The working folder may contain ignored local files such as `PROJECT_NOTES.md`, `UPDATE_idea-engine_thai-app.md`, `look-preview.html`, `.vercel/`, `.DS_Store`, `dist/` and `idea-engine/`. They are not current app truth and should not be included in a clean external review bundle unless the review explicitly asks for historical comparison.

## Validation Evidence

Use these checks for source review:

```bash
node --check tools/phase1-audit.js
node tools/phase1-audit.js
node -e "const fs=require('fs');const vm=require('vm');const html=fs.readFileSync('index.html','utf8');const scripts=[...html.matchAll(/<script\\b[^>]*>([\\s\\S]*?)<\\/script>/gi)].map(m=>m[1]).join('\\n');new vm.Script(scripts);console.log('embedded scripts parse OK');"
tools/make-release-zip.sh
```

`docs/phase1_audit.md` should report:

- app version `v6.0.0`
- 24 lessons
- 36 validators passing
- 0 lesson prerequisite issues
- 0 pool prerequisite issues
- 0 role-contract issues

Running `node tools/phase1-audit.js` repeatedly should not change generated audit content unless `index.html` or the audit extractor changes.

## Review Focus

High-value review areas:

- imported legacy progress states, especially Endings Refresh, leech cards, axis-review staging and retention checks
- quiz-generator coverage, because generated choices must stay covered-only and non-giveaway
- Thai tone derivation and transliteration accuracy
- iPhone/PWA update behaviour with service-worker cache `aan-thai-v6-0-0`
- slow-network shell fallback and offline reload behaviour
- absence of automatic Google Fonts network requests
- learner-facing copy staying plain, Thai-script-first and free of internal scheduler wording
- content-pedagogy hardening boundaries: rare-letter class-only prep, optional phrasebook scope, no speaking-fluency overclaims
- v6 UI separation: Tones owns class/tone reference, Read prioritises controlled reading, Progress owns settings/diagnostics and class colours stay reserved for pedagogy

Out of scope for this release:

- Phase 2 vocabulary/grammar
- backend/cloud sync
- human-audio recording pipeline
- AI or scraped audio
- speech-recognition scoring
- broad framework refactor
