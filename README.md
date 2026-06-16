# อ่าน (àan) — Learn Thai

A self-contained Thai-learning PWA. Beginner → conversational, phonics-first script mastery with spaced repetition, gamification, and a token economy.

**For developers/AI continuing this project: read `CLAUDE.md` first.** It contains architecture, content conventions, pedagogy, state schema, and working agreements.

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
- `CLAUDE.md` — full project context and conventions
