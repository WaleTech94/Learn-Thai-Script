# Thai App External Audit Pack

Prepared: 2026-07-01
Workspace: `/Users/lateefoyelade/thai-repo`
Current app version: `v5.4.5`
Live app shell: `index.html`

This pack is a current-source review guide, not a historical archive. It should be read with `FILE_MANIFEST.md`, `AGENTS.md`, `CHANGELOG.md`, `tools/phase1-audit.js`, and the generated `docs/phase1_audit.*` files.

## Current State

Phase 1 script mastery is complete. The app remains a single-file vanilla PWA with no backend, build step, runtime API calls, human-audio assets, AI audio, scraped audio, speech scoring, cloud sync or Phase 2 route.

v5.4.5 is a source-hygiene release. It keeps the v5.4.4 learner behaviour and changes reviewability:

- `tools/phase1-audit.js` uses seeded randomness for generated audit extraction.
- Audit generation preserves the previous timestamp when substantive output is unchanged.
- The old unreachable collectible album/pull code was removed from `index.html`.
- Legacy `gacha` progress fields remain accepted by import shape checks.
- `CLAUDE.md` is tracked and no longer hidden by `.gitignore`.
- Source-review notes now describe the current tracked source instead of old local handoff artifacts.

The post-v5.4.5 hardening pass keeps the app version/cache name unchanged while adding:

- `tools/make-release-zip.sh` for clean tracked-source review packages.
- Production startup gating for exhaustive validators; use `?debugValidators=1` or `thai_debug_validators=1` locally for the full in-browser suite.
- A bounded service-worker timeout for slow shell fetches before cache fallback.
- Attribute-context escaping via `escAttr()`.
- Native/system font stacks with no automatic Google Fonts page-load requests.
- `docs/phase2_refactor_plan.md` as a future split plan only.

## Current Tracked Source

- `index.html` - full app shell, curriculum, state, review, lesson and UI logic.
- `manifest.json`, `sw.js`, `vercel.json` - static PWA/deploy support.
- `icon-180.png`, `icon-192.png`, `icon-512.png` - install icons.
- `AGENTS.md`, `CLAUDE.md`, `CHANGELOG.md`, `README.md` - release and project context.
- `tools/phase1-audit.js` - deterministic audit extractor.
- `tools/make-release-zip.sh` - tracked-source review zip helper.
- `docs/phase1_audit.md`, `docs/phase1_audit.json` - generated audit output.
- `docs/smoke_test_checklist.md` - manual smoke checklist.
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

- app version `v5.4.5`
- 24 lessons
- 35 validators passing
- 0 lesson prerequisite issues
- 0 pool prerequisite issues
- 0 role-contract issues

Running `node tools/phase1-audit.js` repeatedly should not change generated audit content unless `index.html` or the audit extractor changes.

## Review Focus

High-value review areas:

- imported legacy progress states, especially Endings Refresh, leech cards, axis-review staging and retention checks
- quiz-generator coverage, because generated choices must stay covered-only and non-giveaway
- Thai tone derivation and transliteration accuracy
- iPhone/PWA update behaviour with service-worker cache `aan-thai-v5-4-5`
- slow-network shell fallback and offline reload behaviour
- absence of automatic Google Fonts network requests
- learner-facing copy staying plain, Thai-script-first and free of internal scheduler wording

Out of scope for this release:

- Phase 2 vocabulary/grammar
- backend/cloud sync
- human-audio recording pipeline
- AI or scraped audio
- speech-recognition scoring
- broad framework refactor
