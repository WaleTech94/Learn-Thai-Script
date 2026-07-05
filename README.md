# อ่าน (àan) — Learn Thai

A self-contained Phase-1 Thai script-mastery PWA: phonics-first reading, class-coloured Thai letters, Thai-script-first tone derivation, misconception-based checks, first-run onboarding for genuinely fresh learners, guided Thai audio setup, useful covered Thai, staged review cards for letters, sounds, tones, listening and read-aloud, controlled cumulative fluency reads, controlled real-world sign/price reads, a stricter final Phase 1 completion checkpoint, no recurring tone-sign name MCQs, balanced review sessions, +1/+7 day memory checks, Leech clinic and hidden weak-correct review timing with adaptive correct-feedback dwell, Useful Thai lesson steps, an action-led Today route with one clear lesson blocker, premium display-only route hero and time-aware keep-going fill layer, bounded Today review slices, return-after-gap recovery, post-completion maintenance routing, a one-time bounded Phase 1 completion celebration, a Progress dashboard and About entry, rare-letter class-recognition prep and a rare-letter class drill for the Letters boss, optional opt-in phrasebook review, rewarding Daily win feedback, presentational feedback sounds with expanded objective-surface coverage, an in-session combo chip and streak-salience moments, grouped Practice, Tones, Read and Progress screens with the v6/v7 semantic visual system, surfaced optional drills including Write it / Route talk / Decode Gym / Wild deck, Capture Thai count and copy export, fair one-freeze-per-missed-day streak protection, local backup export/import with corrupt-state recovery notices, Contrast Blocks for high-risk sound distinctions, Bangkok Missions for covered Thai outside the app, Mouth Coach sound-contrast cards, device voice support with explicit TTS safety boundaries, honest early-foundation pacing, a 45-minute depth-first course rhythm once enough material is live, rematchable mastery bosses, softer delayed-check/review recommendations below overload, non-blocking Course Map practice nodes, deterministic generated audit evidence with a story-fluency recurrence table, a Progress Reading mileage line, optional timed re-reads including completed-story Street read mode, a gated Tone sprint, a Decode Gym cluster booster, Wild deck Drill this, a memory-only lesson/checkpoint/unit-boss exit guard, optional paid theme/sound/story/phrase unlocks that never bypass pedagogy, and a focused token economy. Current identity: `Phase 1 · 1.0 beta (v7.5.0)`.

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
