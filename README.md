# อ่าน (àan) — Learn Thai

A self-contained Phase-1 Thai script-mastery PWA: phonics-first reading, tone derivation, useful survival language, spaced repetition, a 45-minute depth-first daily plan, and a focused token economy.

**For developers/AI continuing this project: read `AGENTS.md` first.** It is the tracked canonical source for architecture, content conventions, pedagogy, state schema, validation, documentation-sync rules, and working agreements.

## Run locally
Just open `index.html` in a browser, or serve the folder:
```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy
Hosted on GitHub Pages (Settings → Pages → deploy from `main`, root). Push to `main` and Pages rebuilds in ~60s.

## Files
- `index.html` — the entire app (vanilla JS, no build step)
- `manifest.json`, `sw.js` — PWA manifest + service worker
- `icon-180/192/512.png` — app icons
- `AGENTS.md` — canonical project context and conventions
- `CHANGELOG.md` — release-by-release shipped changes
