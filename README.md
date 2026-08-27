# อ่าน (àan) — Learn Thai

A self-contained, offline-first PWA for building usable conversational Thai for daily life in Bangkok. The first action is an 8–12 minute spoken food-ordering scene built around listening, responding, varying a useful phrase and comparing your voice. The complete 24-lesson Phase 1 script course remains preserved underneath as an optional gradual reading companion with its letter → class → tone spine, objective mastery gates, SRS, controlled reads, retention checks and practice tools. The two tracks keep separate evidence: reading progress never gates speaking, and the conversation pilot does not alter lessons, SRS, rewards, streaks or reading mastery. Current identity: `Conversation first + reading (v8.2.2)`.

v8.2.2 makes that first scene teachable from zero: it starts with an English situation map, introduces six vendor-cue/learner-reply pairs with English meaning and clear speaker separation, then reveals the complete exchange with English on every turn and a 900ms pause between separately spoken turns. The former cold gist test is removed.

v8.2.1 corrects the product front door after the initial pilot. The masthead, first-run onboarding, Today hierarchy, About screen and install description now make usable spoken Bangkok Thai the primary goal. A fresh learner is taken directly into the food-ordering scene; the preserved Phase 1 course appears below it as an explicitly optional reading companion.

v8.2.0 added the deliberately narrow field test itself: one 8–12 minute food-ordering scene with gist listening, six useful male-polite responses, local record/playback, substitution and supported role-play. It records only per-scene run/self-rating evidence, labels device speech as rough preview, marks the Thai for teacher review and leaves lessons, SRS, mastery, rewards, streaks and reading-route work untouched.

v8.1.0 adds the optional Street Arcade: free Lesson-2 Parcel Sort, purchasable Lesson-4 Night Market Hunt and Lesson-13 Tuk-Tuk Tone Run, all rebuilt from completed content and excluded from mastery/SRS/reward progression. Ekkamai Sunset, Yaowarat Neon and Tuk-Tuk Chrome extend the shop; game and theme feedback stays code-native, offline and locally synthesized.

Audio uses the browser/device Thai `speechSynthesis` voice as support only. It gives a rough model for practice and setup guidance on iPhone, but it is not treated as native-speaker recording or reliable assessment proof for tone, vowel length, aspiration or final-stop mastery.

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
- Release review zip: run `tools/make-release-zip.sh` from repo root to create an ignored tracked-source package under `dist/`.

## Validate

```bash
node tools/precommit-check.js
node tools/phase1-audit.js
```

`tools/precommit-check.js` is the committed release gate for syntax, NFC, particle/currency policy, tone-grid transliteration and Reading-room story decodability. `tools/phase1-audit.js` regenerates `docs/phase1_audit.md` and `docs/phase1_audit.json`.

## Files
- `index.html` — the entire app (vanilla JS, no build step)
- `manifest.json`, `sw.js` — PWA manifest + service worker
- `vercel.json` — Vercel static deployment config
- `icon-180/192/512.png` — app icons
- `AGENTS.md` — canonical project context and conventions
- `CLAUDE.md` — tracked local mirror of project context
- `CHANGELOG.md` — release-by-release shipped changes
- `tools/phase1-audit.js`, `docs/phase1_audit.*` — generated Phase 1 audit and validator evidence
- `tools/precommit-check.js` — committed release gate for source and content checks
- `tools/make-release-zip.sh` — clean tracked-source review package helper
- `FILE_MANIFEST.md`, `THAI_APP_AUDIT_PACK.md`, `docs/smoke_test_checklist.md`, `docs/v7_release_notes.md`, `docs/economy_notes.md`, `docs/phase1_content_pedagogy_notes.md`, `docs/content_pedagogy_checklist.md`, `docs/v6_ui_pass_notes.md`, `docs/phase2_refactor_plan.md` — source-review manifest, audit pack notes, smoke checklist, v7 release notes, pedagogy notes/checklists, UI pass notes and future refactor plan
