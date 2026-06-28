# อ่าน (àan) — Learn Thai

A self-contained Phase-1 Thai script-mastery PWA: phonics-first reading, class-coloured Thai letters, Thai-script-first tone derivation, misconception-based checks, guided Thai audio setup, useful survival language, staged review cards for letters, sounds, tones, listening and read-aloud, no recurring tone-sign name MCQs, balanced review sessions, +1/+7 day memory checks, Leech clinic and shaky-correct review handling, Useful Thai lesson steps, an action-led Today route with one clear lesson blocker, plain Daily win feedback, separate Practice and Thai Tones tabs, Contrast Blocks for high-risk sound distinctions, Bangkok Missions for covered Thai outside the app, Mouth Coach sound-contrast cards, human-audio fallback hooks, honest early-foundation pacing, a 45-minute depth-first course rhythm once enough material is live, rematchable mastery bosses, softer delayed-check/review recommendations below overload, non-blocking Course Map practice nodes, and a focused token economy.

**For developers/AI continuing this project: read `AGENTS.md` first.** It is the tracked canonical source for architecture, content conventions, pedagogy, state schema, validation, documentation-sync rules, and working agreements.

## Run locally
Just open `index.html` in a browser, or serve the folder:
```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy
Hosted on GitHub Pages and prepared for Vercel as a parallel static PWA deploy.

- GitHub Pages: Settings → Pages → deploy from `main`, root. Push to `main` and Pages rebuilds in ~60s.
- Vercel: import the GitHub repo as a static/no-framework project. `vercel.json` pins no build step, root output, and fresh cache checks for `index.html`, `sw.js`, and `manifest.json`.

## Files
- `index.html` — the entire app (vanilla JS, no build step)
- `manifest.json`, `sw.js` — PWA manifest + service worker
- `vercel.json` — Vercel static deployment config
- `icon-180/192/512.png` — app icons
- `AGENTS.md` — canonical project context and conventions
- `CHANGELOG.md` — release-by-release shipped changes
- `tools/phase1-audit.js`, `docs/phase1_audit.*` — generated Phase 1 audit and validator evidence
- `FILE_MANIFEST.md`, `THAI_APP_AUDIT_PACK.md`, `docs/smoke_test_checklist.md` — current source-review manifest, audit pack notes and lightweight smoke checklist
