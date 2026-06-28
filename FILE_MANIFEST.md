# Source Review Bundle Manifest

Purpose: identify the current source of truth for external review, separate generated evidence from stale/local artifacts, and avoid uploading noisy or misleading files.

Verified current app version: `v5.2.6`.

## Include: Current Source Of Truth

- `index.html` - the shipped single-file PWA: HTML shell, CSS, curriculum data, state/migration logic, import/export, validators, lesson player, review engines and UI.
- `manifest.json` - PWA metadata, icons, standalone display, portrait orientation and theme colours.
- `sw.js` - service worker using network-first shell refresh and cache-first static assets; current cache name is `aan-thai-v5-2-6`.
- `vercel.json` - static Vercel deployment configuration with no build step and must-revalidate headers for shell files.
- `icon-180.png`, `icon-192.png`, `icon-512.png` - local PWA icon assets.
- `AGENTS.md` - canonical project instructions and current-state documentation.
- `CLAUDE.md` - local mirror of `AGENTS.md`; keep synchronized when present.
- `CHANGELOG.md` - release and stabilisation history.
- `README.md` - concise project summary and local/deploy instructions.
- `tools/phase1-audit.js` - Node extractor/validator for the embedded app script and generated Phase 1 audit.

## Include: Current Audit Evidence

- `docs/phase1_audit.md` - generated readable Phase 1 audit from the current `index.html`.
- `docs/phase1_audit.json` - generated machine-readable Phase 1 audit data from the current `index.html`.
- `docs/smoke_test_checklist.md` - lightweight manual smoke checklist for import, migration, offline and installed-PWA update scenarios.
- `THAI_APP_AUDIT_PACK.md` - human-readable external audit preparation notes for the current repo state.
- `FILE_MANIFEST.md` - this source-review bundle manifest.

## Historical Or Local-Only: Do Not Treat As Current Truth

- `release-review-packet/` - old v5.1 senior-developer review handoff; useful history only.
- `thai-pwa-v5.1-senior-dev-review-2026-06-26.zip` - old v5.1 review packet zip; not current source.
- `PROJECT_NOTES.md` - older local project notes, stale relative to v5.2.6.
- `UPDATE_idea-engine_thai-app.md` - older idea-engine addendum, not shipped app behaviour.
- `look-preview.html` - local visual preview artifact, likely stale relative to the current app.
- `idea-engine/` - local proposal-generation and review harness. Its prompts, candidate logs and archived results are not shipped app content.
- `.vercel/` - local Vercel project binding metadata.
- `.DS_Store` - macOS metadata.

## Exclude From Future Uploaded Audit Zips

- `.git/` and any git internals.
- `__MACOSX/`, `.DS_Store` and other OS metadata.
- `node_modules/`, package-manager caches and conventional build outputs such as `dist/`, `build/` and `coverage/`.
- Nested old zips or handoff bundles, including `*.zip` unless the zip is the actual deliverable being created.
- Stale review packets such as `release-review-packet/` unless the review explicitly asks for historical comparison.
- Local experiment/proposal artifacts under `idea-engine/` unless the review scope is the idea engine itself.

## Recommended Minimal External Source Bundle

For a clean current-source audit, include only:

- `index.html`
- `manifest.json`
- `sw.js`
- `vercel.json`
- `icon-180.png`
- `icon-192.png`
- `icon-512.png`
- `AGENTS.md`
- `CLAUDE.md`
- `CHANGELOG.md`
- `README.md`
- `tools/phase1-audit.js`
- `docs/phase1_audit.md`
- `docs/phase1_audit.json`
- `docs/smoke_test_checklist.md`
- `THAI_APP_AUDIT_PACK.md`
- `FILE_MANIFEST.md`
