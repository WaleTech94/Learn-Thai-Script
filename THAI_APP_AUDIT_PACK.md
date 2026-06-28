# Thai App External Audit Pack

Prepared: 2026-06-28  
Workspace: `/Users/lateefoyelade/thai-repo`  
Live app shell: `index.html`  
Generated audit refreshed during this pack: `docs/phase1_audit.md` and `docs/phase1_audit.json`
Smoke checklist added: `docs/smoke_test_checklist.md`

This stabilisation pass does not redesign the app or add learner-facing features. It makes the current v5.2.6 app safer to audit by hardening progress import, aligning the service-worker cache name, refreshing generated audit evidence and separating current source files from historical artifacts.

## 1. Full Project Structure

Excluded by request: `.git/`, `node_modules/`, conventional build outputs such as `dist/`, `build/`, `coverage/`, and cache folders. No `node_modules/` or package-managed build output was present.

```text
.
├── .DS_Store
├── .gitignore
├── .vercel/
│   ├── README.txt
│   └── project.json
├── AGENTS.md
├── CHANGELOG.md
├── CLAUDE.md
├── FILE_MANIFEST.md
├── PROJECT_NOTES.md
├── README.md
├── THAI_APP_AUDIT_PACK.md
├── UPDATE_idea-engine_thai-app.md
├── docs/
│   ├── phase1_audit.json
│   ├── phase1_audit.md
│   └── smoke_test_checklist.md
├── icon-180.png
├── icon-192.png
├── icon-512.png
├── idea-engine/
│   ├── .runs/
│   │   ├── engagement.workflow.js
│   │   ├── reading.workflow.js
│   │   ├── tone.workflow.js
│   │   └── vocab.workflow.js
│   ├── .tone-mismatches.json
│   ├── README.md
│   ├── app-context/
│   │   └── digest.md
│   ├── build-run.js
│   ├── candidates/
│   │   ├── _archive/
│   │   │   ├── engagement-v1-decisions.json
│   │   │   └── engagement-v1-shipped-2026-06-16/
│   │   │       ├── kills.csv
│   │   │       ├── results.json
│   │   │       ├── run-log.txt
│   │   │       ├── run-meta.json
│   │   │       ├── survivors.jsonl
│   │   │       └── warden_rejects.csv
│   │   ├── engagement/
│   │   │   ├── kills.csv
│   │   │   ├── results.json
│   │   │   ├── run-meta.json
│   │   │   ├── survivors.jsonl
│   │   │   └── warden_rejects.csv
│   │   ├── reading/
│   │   │   ├── kills.csv
│   │   │   ├── results.json
│   │   │   ├── run-meta.json
│   │   │   ├── survivors.jsonl
│   │   │   └── warden_rejects.csv
│   │   ├── tone/
│   │   │   ├── kills.csv
│   │   │   ├── results.json
│   │   │   ├── run-meta.json
│   │   │   ├── survivors.jsonl
│   │   │   └── warden_rejects.csv
│   │   └── vocab/
│   │       ├── kills.csv
│   │       ├── results.json
│   │       ├── run-meta.json
│   │       ├── survivors.jsonl
│   │       └── warden_rejects.csv
│   ├── dashboard.html
│   ├── decisions.json
│   ├── difficulty-map.md
│   ├── domains.config.js
│   ├── emit-results.js
│   ├── phase1-audit.js
│   ├── phase1-audit.json
│   ├── prompts/
│   │   ├── judge.engagement.md
│   │   ├── judge.reading.md
│   │   ├── judge.tone.md
│   │   ├── judge.vocab.md
│   │   ├── loremaster.md
│   │   └── warden.md
│   ├── review-server.js
│   ├── run-domain.workflow.js
│   └── tone-validator.js
├── index.html
├── look-preview.html
├── manifest.json
├── release-review-packet/
│   ├── FEATURES_AND_RATIONALE.md
│   └── PACKET_README.md
├── sw.js
├── thai-pwa-v5.1-senior-dev-review-2026-06-26.zip
├── tools/
│   └── phase1-audit.js
└── vercel.json
```

## 2. Current Purpose

Target learner: an adult beginner learning Thai from A0 toward conversational competence, with the current shipped scope focused on Phase 1 script mastery. The personal target user is a male British teacher in Bangkok, so Thai polite particles must use `ครับ`, never `ค่ะ`.

Learning model: the app is a phonics-first Thai reading course. Phase 1 is built around letter -> consonant class -> tone, with final consonant jobs, vowel patterns, live/dead syllable behaviour, structural mechanisms and controlled reading transfer. It deliberately avoids turning Phase 1 into an English-definition vocabulary course.

Lesson structure: there are 24 hard-coded lessons in `LESSONS`, grouped into four units: Foundations, Workhorse letters, Tone engine, and Clusters/long tail. A lesson runs through concept pages, glyph cards, ending-job cards when relevant, Quick decode, Thai-first word reveal, script-cued Read & say, a Useful Thai item, and an objective quiz.

Progression model: Today is the main route. The app recommends review, then one main task, then a practice/bridge block, then End Today. New lessons are blocked by missing prerequisite lessons, required mastery checks, migrated-user Endings Refresh, review overload at 45+ due cards, or invalid state. Lessons 1-3 have honest shorter pacing with only the existing optional stretch before Lesson 4.

Review/recall model: review uses a local SM-2-lite day-granularity SRS. Current card families include `g:` glyph cards, `f:` final/ending-job cards, `a:` axis cards, and `w:` phrase/library cards. Review sessions cap at 40 cards and are balanced across script, mechanism, listening, speaking/transfer and word buckets. Repeated misses create leech cards; correct-but-shaky answers shorten the next interval.

Engagement model: the app uses streaks, tokens, daily completion, boss gates/rematches, reading-room rewards, a phrase Library, weekly phrase use, optional shop/unlocks, progress walls, a heatmap, skill profile, Daily win cards, Sign Safari, Bangkok Missions, Contrast Blocks and practical "use it outside the app" checks. Tokens buy extras, not progress skips.

Current limitations: Phase 2 vocabulary/grammar and Phase 3 conversation are not built. Audio is local browser speech synthesis, so Thai tones can be approximate. There is no backend, push system, speech-recognition scoring or cloud sync. Progress is device-local unless manually exported. The app is a large single file. Automated browser/mobile/a11y tests are not packaged. Human Thai language review is still needed even though validators pass.

## 3. Full User Journey

First open: the app loads `index.html`, runs startup validation contracts, loads state from `window.storage` if present and then `localStorage`, repairs migrated state, applies the selected theme, renders Today, Course Map, Practice, Thai Tones, Library and Streaks surfaces, and registers `sw.js` only on HTTPS.

Onboarding/passcode: there is no passcode, account login or admin onboarding. The first guided Course Map node is "Meet the three classes", which teaches mid/high/low class as the tone dial. Thai audio is primed on first touch for iOS speech-synthesis requirements. If Thai voices are missing, the app shows setup guidance.

Lesson selection: Today routes the learner to the next available lesson when permitted. The Course Map also lists lessons and checkpoints; completed lessons can be replayed. `getLessonBlocker()` is the canonical lesson availability function. Practice nodes in the Course Map are suggestions and should not block a completed lesson or equivalent Today practice.

Lesson completion: `startLesson()` builds an overlay player. `finishLesson()` marks first-time lessons done, adds eligible `g:` cards, adds `f:` final cards from Lesson 2 onward where relevant, seeds `a:` axis cards, schedules +1/+7 retention checks, increments the daily lesson count, updates the streak, saves state and shows the result.

Review flow: Practice -> Flashcards starts due SRS cards unless Endings Refresh is required. Normal due review excludes leech cards; Leech clinic serves repeated-problem cards separately. Missed review cards are requeued in-session. Correct answers can be marked shaky. Axis speaking/transfer cards are trust-based because the static app cannot certify pronunciation or real-world noticing.

Progress persistence: state is saved under `thai_state_v1`. Saves are debounced by 350 ms and flushed synchronously on `visibilitychange` and `pagehide`. Export copies raw state JSON to the clipboard or prompt fallback. Import accepts pasted JSON if it has at least `srs` and `streak`.

Reset behaviour: Streaks -> Progress tools -> Reset all progress shows four warnings. The final step requires typing exactly `I Understand`. Reset clears lessons, review cards, streak, tokens, checks, unlocks and day plans, but keeps test notes. It writes fresh state to `localStorage` and `window.storage` when available, then reloads.

Hidden/dev/admin flows: there is no app admin panel or passcode. Developer/test-facing flows are Test notes, raw JSON import/export, the local-only `idea-engine` dashboard/server, the local Vercel metadata folder, `look-preview.html`, and the old review packet/zip. These are not learner progression surfaces.

## 4. Data And Content Architecture

Thai lesson content lives in `index.html`, inside the JavaScript constants. The live app is deliberately a single-file vanilla PWA with no runtime API calls and no content fetch.

Lesson ordering is the order of objects in `const LESSONS`. Current markers show 24 lessons, 66 `core` word entries, 22 `recognition` entries and 8 `decode` entries. Lesson ids are `l1` through `l24`.

Prompt/question generation is mixed: lesson content is hand-authored, while lesson quizzes, review prompts, boss checks, tone drills, mixed review, Hear & Pick Thai, Chunk this word, Font Shock and other drills are generated by functions in `index.html`. Important generators include `buildLessonQuiz()`, `mcCard()`, `buildCheckpointQuiz()`, `buildLettersBossQuiz()`, `buildMixedQuiz()`, `buildHearPickThaiQuiz()`, `buildRetentionQuiz()`, `axisQuestion()` and `startGenericQuiz()`.

Translations and transliteration are hard-coded on content objects as fields such as `thai`, `tr`, `en`, `meaning`, `context`, `capability`, `note`, `frame`, `vocab` and lesson-specific `pre`/`we` structures. Transliteration follows the project "or" scheme, not IPA.

Particles and grammar notes are also hard-coded. The canonical rule is male polite `ครับ` only. A repo-wide search for `ค่ะ` found it in rules, validator regexes and idea-engine proposal logs, not as learner-facing live content.

Endings are stored through `FINAL_JOBS`, per-word `frame.final`, helper functions such as `finalJob()`, and generated `f:`/final-axis review cards. Grammar/script mechanisms such as hidden vowels, vowel order, live/dead, vowel length, clusters, silent leaders and tone gates are expressed in word frames plus mechanism/prerequisite helper functions.

Other data constants in `index.html` include `GLYPHS`, `TONES`, `TONES2`, `TONE_SETS`, `LENGTH_PAIRS`, `PHRASES`, `SLANG`, `TEACHER`, `FOOD2`, `THEMES`, `TITLES`, `POSTCARDS`, `STORIES`, `CHUNK_ITEMS`, `SIGN_SAFARI_ITEMS`, `MOUTH_COACH_CARDS`, `CONTRAST_BLOCKS`, `BANGKOK_MISSIONS`, `LESSON_PAYOFFS`, `HUMAN_AUDIO_TARGETS` and SRS/review quota constants.

Generated audit data lives in `docs/phase1_audit.md` and `docs/phase1_audit.json`, produced by `tools/phase1-audit.js`. The local `idea-engine` has its own separate proposal/audit artifacts; it is not part of the shipped PWA.

## 5. App State Model

Storage keys:

- `localStorage["thai_state_v1"]`: primary browser/PWA progress store.
- `window.storage["thai_state_v1"]`: Codex/Claude artifact fallback when available.
- `sessionStorage`: no live usage found.
- Service worker Cache API cache name in `sw.js`: `aan-thai-v5-2-6`.

Saved progress format is a single JSON object. The default state currently includes:

```js
{
  streak:{count,last},
  done:[],
  srs:{},
  intro:{},
  baht:0,
  freeze:0,
  days:{},
  calib:{1:{n,c},2:{n,c},3:{n,c}},
  boss:{},
  checks:{},
  skillStats:{listen:[], speak:{attempts,last}, foundationEar:null},
  notes:[],
  packs:[],
  notices:{},
  migrations:{},
  foundationRefresh:{required, complete, quarantinedFinals:[]},
  retention:{},
  signSafari:{seen:{}},
  missions:{done:{}},
  contrastLog:{}
}
```

SRS card records normally contain fields such as `iv`, `due`, `lapses`, `sameDayMisses`, `shaky`, `lastResult`, `leech`, `leechSince`, `leechClears`, `leechCleared`, `axisReview`, `axisBackfilled` and `axisStaged`.

Versioning/migration logic: `init()` runs validation contracts, loads state, then runs `repairStateForV5()` and `repairStateForV501()`. The v5 repair prunes invalid/stale cards, seeds missing glyph/final/axis cards for completed lessons, repairs axis review floods and retention backfill, and records migration markers. The v5.0.1 repair may require Endings Refresh for legacy users whose final cards were seeded before foundations were retaught.

What happens after updates: on each launch, the app should fetch a fresh shell when online because the service worker uses network-first for `index.html`. After load, state repair functions reconcile older local progress with current content contracts. A one-time notice explains Phase 1 reorganisation.

Known risk of users being tested on untaught material: the regenerated audit currently reports 0 lesson prerequisite issues, 0 pool prerequisite issues and 0 role-contract issues. Raw JSON import now validates core shape before merge, runs the v5/v5.0.1 repair path immediately after import and is covered by `importRepair`; residual risks remain around local-only/stale proposal artifacts being mistaken for app content, and any future hand-authored Thai content bypassing the validators.

## 6. Learning Mechanics

What counts as taught: a lesson is taught when its id is present in `state.done`. Taught glyphs/words are derived from completed lessons. A separate class-primer Course Map node teaches class early but does not replace lesson completion. Practice pools additionally check glyph, composite vowel-pattern and mechanism prerequisites.

What counts as review: due entries in `state.srs`, plus retention checks in `state.retention`, Today bridge tasks, checkpoint rematches and optional drills. Normal SRS review is card-based. Retention checks are lesson-level +1/+7 day memory checks.

Spacing logic: new SRS cards start with `iv:0` and a due ISO date. Again resets interval to 0 and increments lapses. Hard grows by about 1.2x. Good starts at 1 day or doubles; shaky Good grows only about 1.2x. Easy starts at 3 days or triples. Dates are day-granularity ISO strings.

Recall logic: objective script/listening items use MCQ or typed recall. Speaking/read-aloud and outside-the-app transfer are trust-based with model audio and local record/playback comparison, not certified scoring. Lesson quizzes use varied axes including glyph sound, heard glyph, spot-the-letter, class, final job, mini decode, final sound, hidden vowel, vowel order, live/dead, vowel length, clusters, tone and core-word listening.

Mistake handling: review Again requeues the card in-session. Three total lapses mark a leech card and remove it from the normal due deck. Leech cards go to Leech clinic until two clean, non-shaky correct passes clear them. Checkpoints and Letters boss collect misses for immediate drill/retry.

Mastery/completion rules: lessons complete after the full lesson player and quiz result. Cumulative checkpoints occur every three lessons and require at least 80 percent before later lessons unlock. The Letters boss checks class of all 42 consonants and requires at least 90 percent. Delayed retention checks require at least 80 percent but are currently recommended rather than hard lesson blockers below overload.

Receptive/productive separation: yes. `core`, `recognition` and `decode` lesson-word roles limit which words enter listening/spelling/review. Speaking in Phase 1 is script-cued read-aloud, not English-cued production. Recognition words remain receptive; decode-only words are scaffolding and should not be meaning-tested.

English -> Thai vs Thai -> English: Phase 1 defers English -> Thai spoken vocabulary production. Generated quiz surfaces are definition-free by contract. Thai -> reading/sound/class/tone and heard Thai -> Thai script are central. Library phrase cards may include practical English glosses for learner support, but the Phase 1 testing spine avoids English-definition recall as a mastery measure.

## 7. Engagement Mechanics

Streaks: `bumpStreak()` updates a daily streak, with streak freezes available for 30 tokens and auto-consumed for one missed day.

Progress indicators: Today cards, Course Map, journey count, lesson list, mastery checks, Letters boss, letter wall, heatmap, skill evidence, personal best lap, skill profile/constellation and Phase 1 readiness report.

Unlocks: Library packs, stories, Sign Safari, Font Shock, Mouth Coach, Contrast Blocks, Bangkok Missions, titles, themes/packs from older economy logic, and optional boss rematches.

Feedback: toasts, result screens, targeted wrong-answer explanations, class colours, capability lines, Daily win card, personal best lap, leech/shaky statuses and token awards.

Animations/visual polish: cards, overlays, progress bars, heatmap, flashcard flip UI, glyph ghost blur/sharpen interaction, class-coloured Thai rendering, tabs and PWA mobile chrome. No external visual asset loading beyond local icons.

Variety: lesson player, flashcards, mixed quiz, Hear & Pick Thai, Spell It, Confusion clinic, Leech clinic, tone listening, tone rules, Sound Twins, Echo, Glyph Ghost, Reading Room, Chunk this word, Font Shock, Mouth Coach, Contrast Blocks, Bangkok Missions and Sign Safari.

Friction points: hard review overload at 45+ due cards, required mastery checkpoints, required Endings Refresh for affected migrated users, exact reset confirmation, manual import/export, device Thai voice setup and no automatic cloud sync.

Return loop: daily plan completion, streak/heatmap, due SRS, +1/+7 delayed checks, weekly phrase picks, missions, stories, tokens, rematchable bosses and Daily win closure.

## 8. Current Features By File/Module

`index.html`: owns the whole learner-facing app: CSS, HTML shell, all curriculum data, all quiz/review generators, state, migration, audio, microphone comparison, Today routing, PWA runtime hooks and UI rendering. Fragile because it is about 8,500 lines and 500 KB in one file; small changes can affect many surfaces.

`manifest.json`: PWA metadata, app name, icon list, portrait orientation, standalone display and colours. Depended on by browsers/install flow and listed in `sw.js`.

`sw.js`: service worker. Network-first for shell and cache-first for other assets. Cache name now matches the current v5.2.6 release family: `aan-thai-v5-2-6`.

`vercel.json`: static Vercel deployment config. No framework, no build command, output directory `.`, and must-revalidate cache headers for `index.html`, `sw.js` and `manifest.json`.

`icon-180.png`, `icon-192.png`, `icon-512.png`: local app icons for PWA install/assets.

`README.md`: concise current project summary and local/deploy instructions. It now mentions no recurring tone-sign name MCQs.

`AGENTS.md`: canonical project instructions and architecture/pedagogy context. Its top "Current state" now matches the live app version, `v5.2.6`.

`CLAUDE.md`: local mirror of project instructions. Its top "Current state" now matches `AGENTS.md` and the live app version, `v5.2.6`.

`CHANGELOG.md`: release history. Current top entry is `v5.2.6 - 2026-06-28`, describing tone-sign name review removal and the new validator.

`docs/phase1_audit.md`: generated readable Phase 1 audit. Refreshed during this pack; reports app version `v5.2.6`, 24 lessons and all validators passing.

`docs/phase1_audit.json`: generated machine-readable Phase 1 audit. Refreshed during this pack; includes validators, prerequisites, workload and lesson extraction.

`tools/phase1-audit.js`: Node extractor/audit generator for the live `index.html`. It stubs browser APIs, evaluates app script without running `init()`, runs validators and writes the two files under `docs/`.

`docs/smoke_test_checklist.md`: lightweight manual smoke checklist for fresh, Lesson 5, migrated Endings Refresh, completed-course, malformed import, offline reload and iPhone installed-PWA update scenarios.

`release-review-packet/`: old v5.1 senior-developer review handoff. Useful historical context, but stale for current v5.2.6.

`thai-pwa-v5.1-senior-dev-review-2026-06-26.zip`: old v5.1 review packet zip. Do not treat as current source.

`PROJECT_NOTES.md`: local-only older project notes; currently stale at v2.6 and not reliable as current truth.

`UPDATE_idea-engine_thai-app.md`: local-only idea-engine addendum from 2026-06-16. Describes proposal generation, not shipped app behaviour. Some assumptions are stale relative to the current app.

`idea-engine/`: local experiment harness for generating candidate ideas and reviewing them. Its prompts/results are not shipped app content. Fragile/confusing area: older candidate logs mention removed mechanics such as confidence wagering, so auditors must separate proposals from live source.

`.vercel/`: local Vercel project metadata, not part of the app runtime.

`look-preview.html`: local-only visual preview, likely stale relative to current app.

`.gitignore`: excludes local notes, idea-engine, `.vercel`, `node_modules`, logs and temporary validator scripts from public repo.

`.DS_Store`: macOS metadata, not app source.

`THAI_APP_AUDIT_PACK.md`: this audit-prep document.

`FILE_MANIFEST.md`: per-file manifest for source/content/artifact review.

## 9. Checks Run

Environment:

```text
node -v
v26.3.0

npm -v
11.16.0
```

Package discovery:

```text
test -f package.json
exit code 1
```

Result: no `package.json` is present. `npm install`, `npm run check`, `npm test`, `npm run build`, npm lint and npm typecheck are unavailable in this repo.

Repository checks:

```text
node --check tools/phase1-audit.js
exit code 0
stdout: none
```

```text
node -e "const fs=require('fs');const html=fs.readFileSync('index.html','utf8');const m=html.match(/<script>([\s\S]*)<\/script>/);if(!m) throw new Error('script block not found');fs.writeFileSync('/tmp/thai-index-script.js', m[1]);"
exit code 0
stdout: none
```

```text
node --check /tmp/thai-index-script.js
exit code 0
stdout: none
```

```text
node tools/phase1-audit.js
wrote docs/phase1_audit.json
wrote docs/phase1_audit.md
exit code 0
```

Generated audit result after refresh:

- App version: `v5.2.6`
- Lesson count: 24
- Validators: audio, vocabulary, coverage, prerequisites, reviewChoices, finalSounds, structuralClarity, balancedChoices, misconceptionChoices, v5Migration, v501FoundationRefresh, importRepair, v5Transfer, v51Polish, v52Bridge, v52FullBrief, recallAxis, delayedMastery, contrastCoverage, migrationTrust, utilityMission, humanAudioFallback, v521Hardening, v525RouteSimplification, v526ToneSignReview
- Failures: none
- Prerequisite audit: 0 lesson issues, 0 pool issues, 0 role-contract issues

Note: running `node tools/phase1-audit.js` regenerated `docs/phase1_audit.md` and `docs/phase1_audit.json`.

## 10. Known Issues Or Suspicious Areas

Version sync: the live footer/generated audit/changelog, `AGENTS.md` and `CLAUDE.md` all describe the current app as `v5.2.6`. The generated audit workload narrative also says `v5.2.6`.

Generated docs changed during checks: `docs/phase1_audit.*` were rewritten by the audit command. This is expected for that generator, but should be reviewed before committing.

Git status verified during this stabilisation pass: tracked changes are the intentional app/import, service worker, audit generator, generated-audit and release-documentation updates; untracked audit handoff files remain `FILE_MANIFEST.md`, `THAI_APP_AUDIT_PACK.md`, `docs/smoke_test_checklist.md`, `release-review-packet/` and `thai-pwa-v5.1-senior-dev-review-2026-06-26.zip`. The old v5.1 packet/zip are historical and should not be treated as current source.

Stale local artifacts: `PROJECT_NOTES.md` says v2.6; `release-review-packet/` and the zip represent v5.1; `idea-engine` proposal logs mention older removed mechanics such as confidence wagering. External auditors must not treat these as current app truth.

Service worker cache name: `sw.js` now uses `aan-thai-v5-2-6`, aligned with the current release family. The existing network-first shell strategy is unchanged.

Progress import: import now rejects obviously malformed progress shapes before merge, repairs valid imports through `repairStateForV5()` and `repairStateForV501()`, validates the repaired deck, saves, and re-renders the main app surfaces. The `importRepair` validator covers malformed import, old valid import and completed-course import.

Single-file maintainability: `index.html` owns CSS, UI, data, content, state, migrations, validators and engines. This simplifies deployment but makes regression review harder.

Content sequencing: generated prerequisite checks currently pass, but all new hand-authored content must be put through `tools/phase1-audit.js` because Thai pattern coverage cannot be inferred from raw Unicode characters.

Review queue complexity: axis-review staging, leech quarantine, Endings Refresh quarantine, retention checks and Today route snapshots interact. Current validators cover known cases, but imported legacy states and stale day records remain high-value audit targets.

Grammar/language accuracy: the app uses custom transliteration and browser TTS. Human review should spot-check tones, final consonant explanations, hidden-vowel claims, phrase naturalness, male-register consistency and whether Useful Thai items are pragmatically appropriate.

Definition leakage: `startGenericQuiz()` asserts definition-free generated quizzes, but auditors should still inspect library/phrase flows separately because they intentionally include meanings/glosses outside the Phase 1 mastery tests.

Accessibility/mobile: no automated a11y/mobile smoke suite is present. Real iPhone installed-PWA testing is important for safe-area layout, tab bar ergonomics, speech synthesis, microphone permission, reset/import/export prompts and service-worker update behaviour.

Audio reliability: Thai voice availability is device/browser-dependent. The app has setup guidance and human-audio fallback hooks, but `HUMAN_AUDIO` is currently empty.

Data safety/privacy: progress, notes, mission ticks and recordings are local. Recordings are meant to be discarded when leaving the activity. There is no account or backend, but manual export puts full progress JSON on the clipboard/prompt.

## 11. External Audit Checklist

Pedagogy:

- Does Phase 1 stay anchored on letter -> class -> tone rather than vocabulary-first memorisation?
- Are concepts explicitly taught before retrieval?
- Are mastery gates fair, objective and remediable?
- Does early pacing avoid fake busywork?

Adult acquisition:

- Are Useful Thai, Bangkok Missions and phrase surfaces genuinely useful for an adult in Bangkok?
- Is practice meaningful rather than childish or point-chasing?
- Does the app balance decoding, listening, speaking practice and real-world transfer?

Thai language accuracy:

- Are tone derivations correct under standard class/live-dead/mark rules?
- Are final consonant jobs and hidden-vowel explanations accurate?
- Is the transliteration scheme applied consistently?
- Is male `ครับ` register used wherever polite particles are needed, with no learner-facing `ค่ะ`?
- Are phrases natural for Bangkok usage?

Recall/spaced repetition:

- Are `g:`, `f:`, `a:` and `w:` card types testing the intended memory?
- Are intervals, shaky answers, leech handling and daily caps pedagogically sensible?
- Are receptive, productive and trust-based checks kept distinct?
- Do delayed +1/+7 checks measure retention without blocking unfairly?

Engagement:

- Do tokens and unlocks support return behaviour without selling progress?
- Does Today give clear next action and closure?
- Are missions and streaks motivating without creating dark patterns?
- Is variety useful, or does it fragment attention?

UI/mobile usability:

- Does the app fit iPhone installed-PWA mode with safe areas?
- Are touch targets readable and usable?
- Are overlays, prompts, reset flow and import/export workable on mobile?
- Does Thai class-colour rendering remain legible in all themes?

Technical robustness:

- Do validators run and fail loudly on bad content?
- Does service-worker update behaviour reliably deliver new versions?
- Does import/export preserve and repair state?
- Does microphone/audio code fail gracefully?

Data safety/privacy:

- Is all sensitive learner data local?
- Are recordings truly local and discarded?
- Is clipboard export clearly understood by users?
- Are missions free of camera/upload/location/web access?

Maintainability:

- Is single-file architecture still sustainable?
- Are stale docs/artifacts clearly separated from truth?
- Are validators close enough to the behaviour they protect?
- Is every important source/content artifact listed in `FILE_MANIFEST.md`?

Version migration:

- Do fresh, partial, leaked, legacy and complete states repair correctly?
- Does Endings Refresh appear only for affected users?
- Are stale `r:`/tone-sign/final cards pruned correctly?
- Do generated audit version, app footer, README, AGENTS, CLAUDE and CHANGELOG agree before release?
