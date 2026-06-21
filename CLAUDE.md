# อ่าน (àan) — Learn Thai PWA · Project Notes

**Owner:** Lateef · secondary maths teacher, Bangkok (Ekkamai). British, male — **all Thai content uses the male polite particle ครับ, never ค่ะ.**
**Goal:** beginner → conversational Thai (CEFR A0 → ~B1). Built as a phased long-term project, ~45 min/day budget.
**Current state:** Phase 1 (script mastery) complete and live at **v3.2**. The letter → class → tone spine and its objective mastery gates remain intact. v3.2 keeps the 45-minute Today plan and decode-first lesson flow, and fixes sound-recall quizzes so "What sound?" questions cannot play the answer before the learner chooses. Rewards are quieter and more useful: Library unlocks phrase packs and extras without selling progress; the evidence profile is diagnostic only. Phases 2–3 are not yet built.

**The Phase-1 spine (owner's reframe, in progress from v2.27):** the actual machine for reading Thai is **letter → class → tone**; that should be the backbone of Phase 1, not a vocabulary course with tone bolted on a side tab. Staged rebuild — **all four stages shipped (v2.27–v2.32):**
- **Stage 1 ✅ v2.27** — *pure letters* (review deck is letters-only; words stay in lessons as decode practice but aren't drilled as meaning/reverse cards) + *class taught from the start* ("Meet the three classes" primer node = class is the dial that sets tone; class sprint ungated to l1).
- **Stage 2 ✅ v2.27** — *Tones tab folded into Review* (contours, mai family, class cheat-code, tone licence, tone drills all relocated; tab bar 5→4).
- **Stage 3 ✅ v2.28–v2.31** — letter→class→tone made the explicit backbone of the lessons (NOT a letter re-order — the frequency sequence was already good; the gap was *when tone is taught*). Decided by reading the data: the curriculum already taught all 3 classes + both marks by end of Unit A but deferred tone-*derivation* to Unit C. Fix: **v2.28** Unit A — a class→tone concept page on each of l1–6 (they had none) + every consonant now gets a guaranteed "Which class?" question in its lesson quiz (`buildLessonQuiz` rebalance, global); **v2.29** Unit B — concept pages l7–12 carrying the low-class-dead/under-marks story, l11 worked example flips to *derive the tone*; **v2.30** Unit C reframed as *consolidation* (recap lead-ins pointing back to where each rule was first met); **v2.31** Unit D — l21's rare ten regrouped **by class**, l20/l22 got their missing class pages. All concept-page example words reuse existing tone-verified corpus (zero new content) + decodability-checked per lesson.
- **Stage 4 ✅ v2.32** — **Letters boss: class of all 42**. `buildLettersBossQuiz()` = all 42 in-service consonants → "Which class?" (answers from GLYPHS), untimed, ≥90% to pass, free retries + miss-drill (Bloom). `opts.letters42` in the generic engine (parallel to checkpoints); pass sets `state.checks.letters42`, awards +30💎, grants the นักอ่าน "reader" title (first pass). Final path node (after l24) + a 🏆 Learn-tab card, both gated on all 24 lessons done.

**Post-spine reinforcement:**
- **v2.33** — Reset progress repaired for PWA/localStorage and made visible.
- **v2.34** — explicit glyph audio contract: consonant sound anchors/full names, exact displayed vowel audio, and app-wide audio-payload validation.
- **v2.35** — integrated **hear → read → understand → retrieve aloud → compare** lesson flow. Objective listening evidence is tracked separately; speaking uses local record/playback and is explicitly practice, not certified mastery. The checkpoint builder, lesson-lock logic, ≥80% gates, free remediation/retries, and ≥90% Letters boss remain unchanged.
- **v2.36** — lesson-vocabulary role audit. Every lesson word is explicitly tagged `vocab:"core"|"recognition"|"decode"`: 65 core, 23 recognition, 8 decode-only. Only core words demand English→Thai spoken retrieval or enter Spell it; recognition words are tested only receptively; decode-only examples retain their script job without meaning tests. `validateVocabularyContracts()` fails fast on missing roles or decode-word leakage into vocabulary quizzes/distractors.
- **v3.0** — 45-minute depth-first V3 pass. The bottom tabs are now Today / Learn / Library / Review. Today blocks new lessons when review is due, the day's main block is already done, or it is a consolidation day, routing the learner into reviews, stories or drills on current material. The old visible shop/gachapon/showdown/constellation-payout layer is replaced by Library unlocks, reading room access and a diagnostic evidence profile. Lessons 14–24 now include extra mechanism checks for tone grids, silent leaders, clusters and real signage.
- **v3.1** — first-use and lesson-flow correction. The guided path no longer starts with tone listening; it starts with the three class colours/code and then Lesson 1. Lessons no longer force a sound-first vocabulary preview before script work. Word cards now ask the learner to decode the Thai first; only after reveal do they show transliteration, enable audio, and attach meaning. The worked-example slot is relabelled Quick decode and uses a lighter class-colour reminder before the "you do" check.
- **v3.2** — sound-recall integrity fix. Glyph "What sound?" questions no longer expose the answer via a pre-answer audio button; true listening questions and class questions keep their audio where pedagogically appropriate. `validateAudioContracts()` now rejects pre-answer audio on sound-recall items.

---

## 1. Architecture

- **One self-contained file:** `index.html` (vanilla JS, no build step, no frameworks, no runtime API calls). Everything — CSS, data, engines — lives in this file by deliberate choice ("single growing file").
- **Deployed as a PWA** on GitHub Pages, with Vercel also configured as a parallel static deploy target. Companion files: `manifest.json`, `sw.js` (service worker: network-first for the shell so updates propagate, cache-first for assets), `icon-180/192/512.png`, `vercel.json`.
- **Deploy loop:** commit and push to `main`; GitHub Pages rebuilds in ~60s and Vercel deploys from the same GitHub repo when its integration is connected. On iPhone: open app online, swipe closed, reopen. Version string is at the bottom of the Today tab.
- **Persistence:** `localStorage` key `thai_state_v1`, with a fallback to Claude's artifact `window.storage` when run inside Claude. Saves are debounced 350ms and **flushed synchronously on `visibilitychange`/`pagehide`** (iOS swipe-away protection). Export/Import buttons (Library, bottom) move state as a JSON blob.
- **Audio:** browser `speechSynthesis` with the device Thai voice (iOS: Kanya). Speech is primed on first touch (iOS gesture requirement) and resumed on foreground (iOS leaves it paused). Tones from synthetic voices are approximate — the UI says so. v2.35 also uses `MediaRecorder` for optional, private record/playback comparison; recordings remain local and are discarded when the learner leaves the activity.
- **iOS chrome:** full-bleed standalone with a fixed opaque status-bar scrim (`env(safe-area-inset-top)`), opaque tab bar with the bottom inset *outside* the fixed 64px bar height, 44pt minimum touch targets, `touch-action: manipulation` everywhere.

## 2. Content conventions (non-negotiable for continuity)

- **Transliteration — the "or" scheme** (Smyth-style, UK non-rhotic friendly): ออ = `or` (khǒr, phôr, hôrng), เ-อ = `er` (bpèrt, ter), โอ = `oh` (sôh). Tone diacritics on plain Latin vowels only: `a` mid · `à` low · `â` falling · `á` high · `ǎ` rising. Doubled vowels = long. `bp`/`dt` = unaspirated. **Never use IPA ɔ or combining marks on unusual bases** — they break font fallback on iOS (caused the v2.0 rendering bug). The whole file is NFC-normalised; keep it that way (patches must NFC-normalise both sides or string matches fail).
- **Isolated vowels/tone marks display on carrier letters** (อา, อี, เอีย; tone marks on ก: ก่ ก้), the Thai-textbook convention — never on a raw dotted circle ◌. Every vowel/mark glyph has a `disp` field.
- **Consonant class colour system (load-bearing pedagogy):** mid = teal, high = pink, low = marigold, *everywhere*, in *every theme*. Themes may change atmosphere only.
- **Tone verification is mandatory:** every Thai word ships with a tr whose diacritic is derived from the standard tone grid (class × live/dead × vowel length × mark). All content has been validated programmatically (`toneOf()` parses the diacritic; expectations checked in standalone node scripts). Any new content must be verified the same way. NB: for multi-syllable phrases, check the *positionally first* toned syllable, not diacritic-priority order.
- **Decodability gating:** Reading-room stories may only use characters taught at or before their gate lesson (plus explicitly-taught whole words). This is checked programmatically.
- **Lesson-word roles (v2.36, load-bearing):** every one of the 96 lesson words has an explicit `vocab` role. `core` = useful enough for receptive meaning, objective listening, spoken retrieval and Spell it; `recognition` = useful to understand but not worth English→Thai production or spelling practice; `decode` = script scaffolding only, with meaning available on reveal but never tested. Do not infer vocabulary importance merely because a word is decodable. The legacy `util:"practice"` fallback remains in `wordRole()` for compatibility, but new lesson content must use `vocab`.
- The one legitimate ฿ in the app is lesson 3's word บาท. Everything else is 💎 tokens.

## 3. Pedagogy framework (owner's principles — keep them)

Rosenshine's Principles + variation theory + worked example pairs.

- **Curriculum:** 24 lessons, 4 units. A: Foundations (l1–6) · B: Workhorse letters (l7–12) · C: The tone engine (l13–17: live/dead, the three class grids, leading ห/อ) · D: Clusters & long tail (l18–24, capstone = reading real signage). High-frequency "fast wins" sequencing.
- **Lesson player flow (v3.1–v3.2):** concept pages (`pre`) → glyph cards → **Quick decode** (`we`: compact class-colour/code reminder + matched "you do" MCQ) → word cards where Thai appears first and transliteration/audio/meaning unlock only after the learner reveals the reading → spoken retrieval from an English cue for `core` words only + optional local record/playback comparison → objective quiz. Meaning questions cover `core` + `recognition`; lesson listening questions use `core` only; `decode` words never generate vocabulary questions. Sound-recall questions are retrieval-only: no pre-answer audio on "What sound?" prompts.
- **SRS:** SM-2-lite, day granularity. Card types: `g:` glyphs and phrase `w:` cards; dormant legacy `r:` keys are never renamed. **Grading:** reading/alphabet cards are objective multiple-choice—right = Good, wrong = Again + requeue. Phrase listening cards still use *Missed it / Got it* because free static-browser audio has no objective semantic listener. Lesson listening questions are objective MCQs. Speaking no longer asks for *Off / Close / Nailed it*: Echo and lesson speaking use retrieval plus private record/playback comparison, and speaking attempts are labelled practice rather than mastery. Sessions cap at 40 cards. **v2.27 pure letters:** `finishLesson` adds only `g:` cards; lesson `w:`/`r:` cards are pruned by an idempotent migration. Lesson words stay local to their lesson and follow their v2.36 vocabulary role; only `core` words enter Spell it. The mastery checkpoint certifies type-the-sound + class + read-the-tone, never word meaning.
- **Daily plan (Today, v3.0):** day type frozen at first open — **due > 45 (or course complete) → Consolidation day**, else Lesson day with the named next lesson + a progression-aware depth suggestion. The target is about 45 minutes: warm-up review, one main lesson/consolidation block, then a depth block. If the learner tries to start the next lesson while review is due, after already completing a lesson, or on a consolidation day, the app redirects into current-material embedding (review, story, Spell it, tone/class/lookalike drills) instead of adding new content. Mastery checkpoints still gate new lessons at ≥80%.
- **Drills:** Confusion clinic (6 lookalike sets, weighted by the user's logged misses in `state.confs`), Spell-it tile builder, tone listening drill, tone-rule trainer, class sprint (the 9-mid/11-high memorisation shortcut), Sound Twins, and Echo Chamber (record/playback comparison; no self-awarded pronunciation score).
- **Tone licence:** rolling last-30 accuracy per drill; ≥85% listening + ≥90% rules (min n=20 each) → licence, 30💎 first, expires after 30 days, 10💎 renewals (= Rosenshine's monthly review).
- **Library / phrases pipeline:** weekly pack of 5 auto-added to SRS (category order Politeness → Numbers → Food → Taxi → Survival → Shopping → owned packs), "used it on a real human" = +5💎 each. Tier 1 everyday language belongs in the core Library/course journey; paid phrase packs are enrichment for Tier 2/3 use cases (teacher/classroom, food deep-dive, casual street slang). Category ✓ when all phrases reach 7+ day intervals.
- **Rosenshine #7 (≈80% success rate) — now partly *acted on* (v2.23):** mastery checkpoints gate progression at ≥80% cumulative (Bloom-style, every 3 lessons, free retries + remediation), and the daily governor caps new load (1 lesson + review/day) — evidence-led (85% Rule, Bloom, Anki/SLA daily-load). Still deferred: item-level difficulty *tuning* (per-card), pending real usage data. (Per-stake calibration tracking was retired with the wagers in v2.21; lap % + tone meters remain the success-rate read-outs.)

## 4. Economy (💎 tokens; state key still named `baht` — display-only rename)

**Earn:** daily 45 complete +10 · spell-it first-tries +2 · class sprint ≥85% +3 · story first read +3 · pack phrase used IRL +5 · mastery check first pass +15 · tone licence +30/+10 · new personal-best flashcard lap +3. (Wager ±stake earnings removed in v2.21; per-unit boss +20 retired v2.23 in favour of mastery checkpoints; weekly showdown and phrase bounties retired in v3.0.) Earnings board: tap the 💎 chip.
**Spend:** streak freeze 30 (auto-consumed on a single missed day) · Street slang pack 50 · Teacher/Food deep-dive packs 60 each · quiet extras such as themes/titles. The old gachapon code/state is dormant in v3.0 and no longer surfaced as a spender.
**Vetoed by design:** anything that *sells* through the pedagogy — **buying** past a gate, paid retries, SRS skips. (v2.23 nuance: *free* mastery-check retries are encouraged — Bloom's remediate-retest loop; the veto is specifically about paying, not about retrying.)

## 5. State schema (`thai_state_v1`)

`streak{count,last}` · `done[]` lesson ids · `srs{id:{iv,due,lapses}}` · `baht` · `freeze` · `days{date:{r,l,d,due,paid,type,lite?}}` · `drillLog{id:{n,last}}` · `pace/paceN` · `notes[]` · `calib{1|2|3:{n,c}}` (dormant since v2.21) · `boss{unit:{passed,lastAttempt}}` (dormant since v2.23) · `checks{checkpointId:true}` (v2.23 mastery gate plus `letters42`) · `skillStats{listen[],speak:{attempts,last},foundationEar}` (v2.35 separate evidence) · `packs[]` · `stories{id:date}` · `confs{setKey:misses}` · `toneStats{listen[],rule[]}` · `toneLicence{earned,expires}` · `week{key,picks[],used{}}` · `constel{levels,aligned}` (diagnostic only) · `lap{best,last,lastDate}` · `gacha{id:count}` (dormant; not surfaced in v3.0) · `themes[]` · `theme` · `titles[]` · `title`.
Migrations run in `init()` (idempotent, key-presence based). Never rename existing state keys.

## 6. Version history (highlights)

v1 phrasebook+6 lessons → **v2.0** full Phase 1 → **2.1–2.19** gamification, retrieval and communication-first drill ladder → **2.21** objective grading overhaul → **2.22** survival tiers → **2.23** pacing governor + ≥80% mastery checkpoints → **2.25** typed sound recall → **2.26** notes pad → **2.27–2.31** letter→class→tone spine rebuild → **2.32** all-42 Letters boss → **2.33** reliable progress reset → **2.34** explicit app-wide audio contract → **2.35** integrated hear/read/understand/retrieve/compare lesson flow with separate script, listening and speaking evidence → **2.36** explicit core/recognition/decode lesson-vocabulary roles → **v3.0** 45-minute Today plan, depth-first progression, Library unlocks and quieter reward economy → **v3.1** decode-first first-use lesson flow → **v3.2** no answer-audio on sound recall.

## 7. Roadmap

- **Phase 2 — vocabulary + grammar patterns:** frequency-ranked themed packs (~1,000–1,500 words); grammar as sentence patterns with substitution drills (classifiers, จะ/แล้ว/กำลัง aspect, question words, comparisons, ให้); Stats: gate on Phase 1 capstone + user data review (lap %, tone meters, 45-trigger feel).
- **Phase 3 — conversational:** scripted dialogues (taxi/market/staffroom), varied natural-speed listening, sentence construction and interaction. The microphone plumbing now exists for local comparison, but objective pronunciation certification remains deferred.
- **Candidates parked:** adaptive difficulty (needs usage data), story-pack unlocks as a future useful spender, bet-on-yourself commitment stakes (declined for now), push reminders (**not feasible** — Web Push needs a server; Pages is static).

## 8. Working agreements (read before doing anything)

**Brainstorm first, build only when told.** When the owner asks about new features, directions, or "what could we do" — discuss options and seek explicit approval BEFORE touching any files. Do not start building until the owner clearly says to (e.g. "build it", "ship that", "do it"). Default to a conversation, not a commit. This is the single most important rule here.

**Push approved versioned builds.** The owner tests on the installed mobile PWA, so an unpushed local patch is not testable. Once the owner has approved a versioned app build, complete the full workflow after validation and documentation sync: commit and push to `main` unless the owner explicitly says not to.

**Separate established fact from conjecture** in any analysis or recommendation — what's evidence-backed vs. inference. The owner relies on this distinction.

**Surgical, version-locked patches** — never rewrite working code without cause. Make the smallest change that achieves the goal. The app has survived 15+ versions clean because of this.

**Validate before every commit (non-negotiable):**
- Extract the embedded `<script>` and run `node --check` on it.
- Run the standalone tone/decodability validation (see section 2) for any content change. Every Thai word must be tone-verified against the standard grid before shipping. For multi-syllable phrases, check the positionally-first toned syllable.
- Never commit a build that fails either check.

**Version discipline:** bump the version string (bottom of Today tab) on every shipped change and tell the owner the expected version string so they can confirm the deploy landed.

**Documentation sync is a shipping gate (non-negotiable):** every versioned app change must update, in the same commit, **all three** documentation surfaces: `AGENTS.md` (canonical working instructions), `CHANGELOG.md` (version/date + user-visible and technical changes), and the local `CLAUDE.md` mirror when present. Update the Current state, affected architecture/pedagogy/state-schema sections, and version history—not only the changelog line. Before committing, verify the app footer version, `AGENTS.md` Current state, and newest `CHANGELOG.md` entry all match. A versioned app commit that omits these updates must not be committed or pushed. Documentation-only corrections do not require an app version bump.

**Content rules (see section 2 for detail):** male particle ครับ only; or-scheme transliteration; class-colour system load-bearing; NFC-normalise patches; never rename state keys (section 5).

## 9. Deploy process (Claude)

The repo is the working directory. Claude edits files in place and deploys via git:
```bash
# after validation and documentation sync pass:
git add index.html AGENTS.md CHANGELOG.md README.md CLAUDE.md vercel.json
git commit -m "vX.Y.Z — <summary>"
git push
```
GitHub Pages rebuilds in ~60s. Vercel also deploys from `main` once the GitHub integration has been connected; `vercel.json` keeps it as a static/no-framework project with no build step and root output. The owner then opens the PWA on his iPhone 16 (Chrome, installed to home screen) **while online**, swipes it closed, and reopens — the service worker fetches the new shell network-first, so the second launch is fresh. Confirm the version string with the owner.

No web-upload step anymore (that was the pre-Codex workflow). Keep `manifest.json`, `sw.js`, `vercel.json`, and icons in the repo root; bump the `CACHE` constant in `sw.js` only if cached asset filenames change.
