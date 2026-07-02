# Current Source Review Manifest

Purpose: identify the current source of truth for review, separate generated evidence from ignored local artifacts, and avoid uploading noisy or stale files.

Verified current app version: `v6.3.0`.
Verified current service-worker cache: `aan-thai-v6-3-0`.

## Tracked Source For Review/Deploy Packages

- `index.html` - shipped single-file PWA: HTML shell, CSS, curriculum data, state/migration logic, import/export, validators, lesson player, review engines and UI.
- `manifest.json` - PWA metadata, icons, standalone display, portrait orientation and theme colours.
- `sw.js` - service worker using network-first shell refresh and cache-first static assets.
- `vercel.json` - static Vercel deployment configuration with no build step and must-revalidate headers for shell files.
- `icon-180.png`, `icon-192.png`, `icon-512.png` - PWA icon assets.
- `AGENTS.md` - canonical project instructions and current-state documentation.
- `CLAUDE.md` - tracked local mirror of `AGENTS.md`; keep synchronized while it remains tracked.
- `CHANGELOG.md` - release and stabilisation history.
- `README.md` - concise project summary and local/deploy instructions.
- `tools/phase1-audit.js` - deterministic Node extractor/validator for the embedded app script and generated Phase 1 audit.
- `tools/make-release-zip.sh` - dependency-free helper that packages tracked source from `HEAD` with `git archive`.
- `.gitignore` - keeps generated zips and local-only artifacts out of source review.

## Generated/Review Evidence

- `docs/phase1_audit.md` - tracked generated readable Phase 1 audit from the current `index.html`.
- `docs/phase1_audit.json` - tracked generated machine-readable Phase 1 audit data from the current `index.html`.
- `docs/smoke_test_checklist.md` - lightweight manual smoke checklist for import, migration, offline and installed-PWA update scenarios.
- `docs/phase1_content_pedagogy_notes.md` - notes from the v5.4.6 content/pedagogy hardening pass.
- `docs/content_pedagogy_checklist.md` - future Phase 1 curriculum safety checklist.
- `docs/v6_ui_pass_notes.md` - notes from the v6.0.0 UI hierarchy, accessibility and scope-separation pass.
- `docs/phase2_refactor_plan.md` - future refactor plan only; it is not a Phase 2 implementation.
- `THAI_APP_AUDIT_PACK.md` - concise external audit preparation notes for the current tracked repo state.
- `FILE_MANIFEST.md` - this current-source manifest.
- `dist/aan-thai-v6.3.0-source.zip` - generated on demand by `tools/make-release-zip.sh`; ignored and not tracked.

## Ignored Local Artifacts

These may exist in the working folder but are not current tracked source:

- `PROJECT_NOTES.md` - older local notes.
- `UPDATE_idea-engine_thai-app.md` - older idea-engine addendum.
- `look-preview.html` - local visual preview artifact.
- `idea-engine/` - local proposal/review harness and generated outputs.
- `.vercel/` - local Vercel project binding metadata.
- `dist/` - generated release zip output.
- `.DS_Store` - macOS metadata.

## Exclude From Review Zips

- `.git/` and any git internals.
- `__MACOSX/`, `.DS_Store` and other OS metadata.
- `node_modules/`, package-manager caches and conventional build outputs such as `dist/`, `build` and `coverage`.
- Nested old zips or handoff bundles, unless the zip is the actual deliverable.
- Ignored local notes, previews or proposal artifacts unless the review explicitly asks for historical comparison.

## Release Zip Helper

From repo root:

```bash
tools/make-release-zip.sh
```

The helper writes `dist/aan-thai-v6.3.0-source.zip` using `git archive`, so it includes tracked files from `HEAD` only. Commit or stash tracked edits before packaging if the zip must include them.

## Minimal External Source Bundle

For a clean current-source audit, include:

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
- `tools/make-release-zip.sh`
- `docs/phase1_audit.md`
- `docs/phase1_audit.json`
- `docs/smoke_test_checklist.md`
- `docs/phase1_content_pedagogy_notes.md`
- `docs/content_pedagogy_checklist.md`
- `docs/v6_ui_pass_notes.md`
- `docs/phase2_refactor_plan.md`
- `THAI_APP_AUDIT_PACK.md`
- `FILE_MANIFEST.md`
