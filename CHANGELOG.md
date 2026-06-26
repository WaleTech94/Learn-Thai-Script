# Changelog

Every versioned app release must update this file and `AGENTS.md` in the same commit. The local `CLAUDE.md` mirror must also be synchronized when present.

## v5.0 — 2026-06-26

- Added `repairStateForV5()` as the existing-user stability pass: it preserves lessons/tokens/titles/checks, prunes stale `r:` cards and invalid review entries, rebuilds glyph/final eligibility from lesson gates and seeds missing current `g:`/`f:` cards for completed lessons.
- Added `validateV5MigrationContracts()` with simulated fresh, partial, leaked, legacy and completed states, including old `ไหม`, `เสือ/เสื้อ/เสื่อ`, `เล็ก`, `ภาษา`, `กีฬา`, `เปิด`, Day 23 residue, old `r:` cards, existing `f:` cards and completed Phase 1.
- Added the one-time learner notice: “Phase 1 has been reorganised…” with progress kept.
- Added late Phase 1 Thai spacing/chunking teaching plus the capped, definition-free Chunk this word drill.
- Added Seen in the wild / Sign Safari as a local checklist with no camera, upload, location or web access, plus +3💎 first-seen rewards and street-reading titles.
- Added Font Shock, Mouth Coach, four extra decodable micro-stories and the Phase 1 Readiness report.
- Added post-answer targeted mechanism hints without pre-answer leakage.
- Extended the generated Phase 1 audit with `v5Migration`/`v5Transfer` validators, named rows for Chunk this word, Seen in the wild, Font Shock and Mouth Coach, and clearer workload wording that separates lesson payload from the Today governor route.
- Kept the Today governor, SRS cap, mastery gates, one-file PWA architecture and Phase 1 scope unchanged. Daily win cards and boss rematches remain deferred rather than shipped in this stability release.
- Validation run: embedded script `node --check`, `tools/phase1-audit.js` syntax check and `node tools/phase1-audit.js`; generated audit validator suite PASS.

## v4.10 — 2026-06-26

- Added `validatePrerequisiteContracts()` so lesson words, generated quiz prompts, review pools, stories and role-sensitive surfaces are checked for visible glyphs, composite vowel patterns and script mechanisms before they can ship.
- Repaired the known Phase 1 sequence leaks: taught `เ◌า` in Lesson 5 for `เรา`; moved `ไหม` to silent-leader Lesson 17 and used `สี` as the Lesson 6 core replacement; gated `เสือ / เสื้อ / เสื่อ` until `เ◌ือ`; taught `็ / เ◌็` by Lesson 16; taught `เ◌อ`, `ษ` and a direct `์` check in Lesson 20; taught `ฬ` in Lesson 21; moved `ๆ` to Lesson 23; and taught `เ◌ิ` before the capstone `เปิด`.
- Renamed Lesson 23 from Thai digits to useful signs rather than adding untested Thai-digit scope.
- Extended review-pool readability from raw character coverage to concept-aware pattern/mechanism prerequisites, including Echo, tone listening, Sound Twins, Hear & Pick Thai and mixed-review phrase source pools.
- Expanded the generated Phase 1 audit with prerequisite validator status, machine-readable lesson/pool/role issue objects, named surface rows for Hear & Pick Thai, Spell It, Echo, Sound Twins, Tone listening, Mixed review and Reading/stories, and a workload section that separates available pool size from the Today governor’s served daily load.
- Kept the Today governor, SRS cap, mastery gates, lesson order and state keys unchanged.
- Validation run: embedded script `node --check`, `tools/phase1-audit.js` syntax check, `node tools/phase1-audit.js`, generated audit validator suite all PASS, targeted regression checks for `ไหม` before Lesson 17 and `เสือ / เสื้อ / เสื่อ` before Lesson 22 all PASS.

## v4.9 — 2026-06-26

- Promoted ending jobs into first-class teaching cards from Lesson 2 onward, so finals are taught like starts instead of only appearing inside word sublines.
- Added `f:` final/ending-job review cards, including a migration that seeds them for lessons already completed.
- Added ending-job recall to lesson quizzes, checkpoints, unit boss quizzes and mixed review, with review-choice and final-sound contracts guarding the coverage.
- Added a tracked Phase 1 audit extractor at `tools/phase1-audit.js`.
- Added generated audit surfaces at `docs/phase1_audit.md` and `docs/phase1_audit.json` so each day’s lessons, quiz prompts, final jobs, practice pools and validator results can be reviewed together.
- Kept lesson order, mastery gates and existing state keys unchanged.

## v4.8 — 2026-06-26

- Fixed a Lesson 5 review leak where Echo could surface `หมา` because the letters were known even though the silent-ห mechanism is not taught until Lesson 17.
- Added per-item lesson gates to global tone, Sound Twins and Echo practice pools, so covered practice now checks taught mechanisms as well as visible letters.
- Added `ห้า` to the early tone-listening examples so the Lesson 4 tone drill still has enough valid covered items after silent-leader examples are held back.
- Added a direct Lesson 17 frame explaining why `หมา` reads `mǎa`: silent `ห` makes `ม` follow high-class tone rules.
- Kept lesson order, mastery gates and the state schema unchanged.

## v4.7 — 2026-06-25

- Removed transliteration-cued `reading → Thai` questions from generated lesson quizzes, including Lesson 4 cases such as `bâan` → `บ้าน`.
- Kept Thai-script-first lesson checks in place through Mini Decode, tone, listening, class, final-sound and structural mechanism questions.
- Left Thai-choice practice available in sound-cued and review contexts where the prompt is not a Latin transliteration.
- Kept lesson order, mastery gates and the state schema unchanged.

## v4.6 — 2026-06-25

- Added shared class-colour rendering for connected Thai so consonant letters show mid/high/low colours on teaching and practice surfaces.
- Extended class-coloured Thai to lesson previews, Quick Decode prompts, word reveal/read-aloud, tone examples, Thai-word MCQ options, review cards, Spell It, Reading Room stories and phrase cards.
- Kept class-recall questions neutral before answer, including `Which class?` and `Pick the ... class consonant`, so colour does not give away the response.
- Grouped Thai combining marks with their base consonant in the renderer so tone marks stay attached visually.
- Kept lesson order, mastery gates and the state schema unchanged.

## v4.5 — 2026-06-25

- Reworked tone teaching so Thai tone marks (`่ ้ ๊ ๋`) and consonant class are the visible route to tone, with transliteration tone signs treated as reading hints only.
- Enlarged Lesson 4's class/mark/tone comparison into readable Thai-script tiles for `บ้าน`, `ห้า` and `ไม่`.
- Changed tone-focused Quick Decode checks to answer with tone names instead of transliteration spellings.
- Added visible class-colour badges to generated tone-rule questions and key manual tone-grid questions.
- Renamed the Thai Tones transliteration key so Latin diacritics are no longer called tone marks.
- Removed AI-ish wording from current app and project copy.
- Kept lesson order, mastery gates and the state schema unchanged.

## v4.4 — 2026-06-25

- Completed the balanced multiple-choice pass for Thai-script choices, not just Mini decode / Quick decode transliteration choices.
- Added coverage-checked two-axis Thai grids for eligible reading→Thai and listening→Thai options in lesson quizzes, Foundation Ear, mixed review, Hear & Pick Thai and legacy review cards.
- Filtered synthetic Thai grid options through taught glyph coverage before they can appear.
- Expanded `validateBalancedComponentChoiceContracts()` so it now rejects missing Thai-choice and lesson-local listening grids, including cases like Lesson 2 `ดี / บี / ดู / บู`.
- Kept lesson order, quiz size, mastery gates and the state schema unchanged.

## v4.3 — 2026-06-25

- Added balanced component-grid reading distractors for eligible Mini decode and Quick decode items, so options keep two axes live, such as start consonant × vowel/rime.
- Added `validateBalancedComponentChoiceContracts()` so eligible decode questions cannot regress to one-correct-plus-random distractors.
- Tightened vowel glyph misconception scoring so visual/sound traps such as `ไ/โ`, `เ/แ`, short/long vowel pairs and wrap vowels are preferred where covered.
- Kept lesson order, covered-content gating, quiz size, mastery gates and the state schema unchanged.

## v4.2 — 2026-06-24

- Added a structural clarity pass across Phase 1 for hidden vowels, written-vs-spoken vowel order, live/dead sound feel, short/long vowel length, and true/fake clusters.
- Marked the relevant lesson word decode frames so these ideas are named at the point of reading, not only learned by getting quiz items wrong.
- Added direct generated lesson-quiz checks for hidden vowels, vowel order, live/dead, vowel length and clusters.
- Added `validateStructuralClarityContracts()` so the named structural checks cannot silently disappear from their lesson touchpoints.
- Kept the lesson order, letter → class → tone spine, mastery gates and state schema unchanged.

## v4.1 — 2026-06-24

- Made consonant finals explicit as alphabet mastery content, not just tone support, starting in Lesson 2 while leaving Lesson 1's buildup unchanged.
- Added the reusable start job / ending job model: start sound + vowel + ending sound, then live/dead and tone.
- Updated consonant cards after Lesson 1 so they show each consonant's start job and ending job where applicable.
- Added decode frames to lesson word reveals across Phase 1, including early anchors such as `กิน`, `บาท`, `มาก`, later hidden-vowel words, clusters, formal spellings and capstone signs.
- Reworked selected Quick Decode examples and lesson notes so final sounds are named before tone/live-dead reasoning.
- Added generated final-sound quiz checks and a `validateFinalSoundContracts()` startup guard so the final-sound thread cannot silently disappear from lessons after finals are introduced.
- Kept the state schema unchanged; this is a content and lesson-engine pass only.

## v4.0 — 2026-06-24

- Rebuilt Today into a clear four-button route: Review, Main task, Depth block and End today.
- Added a Daily Practice strip so stable habits such as Tone drill, Class sprint, Hear & Pick Thai, Spell it, Reading and Echo are visible every day with locked/recommended/done states.
- Removed the Learn tab and moved lesson archive, guided path and journey progress into an expandable Course Map on Today.
- Split the old Review surface into a light Practice tab for retrieval/reading drills and a Thai Tones tab for tone, class and listening work.
- Made Today's depth block name the actual required task, including directing the learner to unread Reading Room stories as soon as they are available.
- Added a highlighted Today's tone task state: Thai Tones lights up and shows a start card when tone/class/listening is the required depth block.
- Moved the class reference into Library and the letter wall into Streaks.
- Added a Streaks tab for tokens, streak history, freezes, Shop, practice evidence, notes, import/export and reset controls.
- Added clearer bottom-tab colour accents for Today, Practice, Thai Tones, Library and Streaks.
- Made class more explicit: new consonant teaching cards now start with a large Mid/High/Low class banner, and class reference lists use spaced letter tiles instead of dense inline strings.
- Changed End Today into a guard: if review, the main task or depth is missing, it routes the learner back to that task before showing the “Mastery beats breadth” closeout.
- Replaced one-click reset with a four-warning flow whose final step requires typing `I Understand`.
- Added `days[].m` for non-lesson main blocks such as passed mastery gates, so passing a gate counts as the main task without also satisfying the depth block.
- Stopped the weekly Library pack from seeding five due phrase cards during startup; the first-use route now stays on the class primer until the learner opens Library.
- Polished the v4.0 launch copy without changing the visible version: removed long dashes and smart quotes from the app shell, softened heavier task/result wording, and renamed the visible depth step to a clearer Practice block.

## v3.14 — 2026-06-24

- Added guided audio setup when a user taps a speaker icon but the browser/device has no Thai speech voice available.
- The setup panel now distinguishes iPhone Chrome, iPhone Safari and installed-app mode, while explaining that all use the iPhone system voices.
- Added current and older iOS voice-install paths, copyable setup steps, an Apple guide link and a test-again button.
- Speaker taps now call `speechSynthesis.resume()` before speaking and surface real speech errors through the setup panel instead of failing silently.

## v3.13 — 2026-06-24

- Reworked generated multiple-choice options so wrong answers are chosen as likely misconceptions before falling back to generic same-bucket options.
- Applied the pass across glyph sound checks, hear→glyph checks, Quick decode, mini decode, reading→Thai, listening→Thai, boss/checkpoint questions, mixed review, Hear & Pick Thai and SRS glyph cards.
- Prioritised visual glyph neighbours, same-type glyphs, class traps, close readings, tone/length neighbours and similar covered Thai words instead of unrelated random choices.
- Added `validateMisconceptionChoiceContracts()` at app start so generated MCQs fail fast when they miss an available misconception-based distractor.

## v3.12 — 2026-06-24

- Made early pacing honest: Lessons 1–3 now present as shorter foundation days instead of full 45-minute course days.
- Added an optional second-foundation-lesson stretch: after Lesson 1 or Lesson 2, once review is clear and exactly one lesson has been completed today, the learner can continue to Lesson 2 or Lesson 3 instead of doing another shallow depth drill.
- Kept the acceleration strictly before Lesson 4; Lesson 4 and later return to one new lesson per day with stories, tone work, review and drills as depth.
- Counted the optional second foundation lesson as the day's extension block and marked the skipped early practice node complete so the guided path does not loop back to the same early drill.

## v3.11 — 2026-06-24

- Added Hear & Pick Thai as an optional depth drill: audio/transliteration prompt → choose the covered Thai word, with no definitions and no tone-licence shortcut.
- Rebalanced generated lesson quizzes across the whole course so checks rotate retrieval direction: hear→glyph, glyph→sound, spot-the-letter, mini decode, reading→Thai, tone and listening.
- Made class teaching more explicit on consonant teaching cards and kept class checks visually neutral: choose class from memory, with feedback explaining mid/high/low logic.
- Added class-from-category checks where the covered-letter pool makes a single correct answer possible.
- Kept all new lesson/depth activity pools restricted to covered lesson content.

## v3.10 — 2026-06-24

- Tightened SRS review multiple-choice logic for glyph cards.
- Consonant review cards now only offer consonant-sound options, vowel cards only offer vowel-sound options, and tone-mark cards only offer tone-mark-name options.
- Multi-label consonant sounds such as อ's "or / silent" no longer appear as distractors on ordinary consonant cards.
- The silencer mark keeps its own "what does this mark do?" prompt instead of leaking into tone-mark cards as an obvious distractor.
- Added a review-choice startup contract so mixed glyph-type distractors cannot return.

## v3.9 — 2026-06-22

- Gated Sound Twins to covered material only: every option in a set must use letters already taught in completed lessons.
- Moved Sound Twins and tone listening unlocks from Lesson 1 to Lesson 4, when the first usable tone-mark examples are readable.
- Removed Class Sprint's fallback to the full non-rare alphabet; it now drills learned letters only, even when the early pool is small.
- Filtered Tone Drill, Echo Chamber and visible tone example lists to covered Thai text.
- Added an app-start coverage contract that simulates lesson progress and rejects premature global tone/twin content.

## v3.8 — 2026-06-22

- Made Lesson 1's first tone rule explicit: no tone mark does not mean "no tone"; live unmarked Lesson 1 words read with a mid tone.
- Gated generated lesson, checkpoint, boss and mixed-review tone questions so they only appear once the matching tone rule has been taught.
- Kept early useful words like มาก as reading/listening material, but deferred their untaught tone derivation until Unit C.
- Locked the tone-rule trainer until Lesson 13, where live/dead tone derivation is taught as a full rule set.

## v3.7 — 2026-06-22

- Removed remaining definition cues from Sound Twins, Foundation Ear, Spell It, tone drills, tone-rule feedback, mixed review, boss quizzes and late sign checks.
- Sound Twins now asks which Thai word was heard, not which word means an English definition.
- Added a definition-free quiz contract guard so generic quiz surfaces fail validation if they use known English definitions as prompts, answers, options or explanations.

## v3.6 — 2026-06-22

- Added a separate carrier-letter audio row on vowel cards so learners can hear อ itself before seeing it used as a silent carrier.
- Kept the full carrier form audio for อา / อี, with clearer wording that อ is silent there and the form should still sound like the vowel.
- Clarified the first Lesson 1 vowel slides so the carrier letter is no longer implied to add a sound inside the carrier form.

## v3.5 — 2026-06-22

- Replaced lesson "Retrieve & say" English-cue production with script-cued "Read & say" practice.
- The speaking bridge now shows the Thai word, asks the learner to read it aloud, then reveals model audio and optional local recording.
- Deferred English→Thai vocabulary production out of Phase 1; lesson meaning remains on reveal, not as a spoken recall demand.

## v3.4 — 2026-06-22

- Split vowel-card audio labels into the target vowel sound and the carrier-form example.
- Added a short vowel-card note that อ is only the display carrier for isolated vowels, not an extra consonant sound.
- Kept vowel speech using the carrier form shown onscreen so iOS Thai voices have a stable Thai string to pronounce.

## v3.3 — 2026-06-22

- Removed routine "What does this mean?" / "Meaning?" definition questions from lesson quizzes and generated quiz-style review checks.
- Changed lesson listening checks from audio-to-English meaning to audio-to-Thai word recognition, keeping them useful without making early lessons feel vocabulary-tested.
- Kept important late sign-reading meaning checks where the meaning is the actual lesson objective.

## v3.2 — 2026-06-22

- Removed pre-answer audio from glyph sound-recall questions such as "What sound?" and "What sound is this?".
- Kept audio on true listening prompts and class questions where it does not reveal the answer.
- Added an audio-contract guard so sound-recall questions cannot ship with answer audio attached.

## v3.1 — 2026-06-22

- Reordered the guided path so a brand-new learner starts with the three class colours/code and Lesson 1, not a tone listening drill.
- Removed the mandatory sound-first lesson preview so script decoding comes before model audio.
- Reworked lesson word cards into a decode-first interaction: Thai appears first, then the learner reveals transliteration, enables audio, and sees the meaning.
- Renamed and tightened the worked-example slot to Quick decode, using a lighter class-colour/code reminder before the matched "you do" check.

## Unversioned deployment config — 2026-06-22

- Added `vercel.json` so the static PWA can deploy on Vercel in parallel with GitHub Pages.
- Documented the Vercel deploy path in `README.md`, `AGENTS.md`, and the local `CLAUDE.md` mirror.
- Left the learner-facing app version at v3.0 because no app behavior or content changed.

## v3.0 — 2026-06-22

- Reframed the app around a 45-minute Today plan: warm-up review, one lesson/consolidation block, then a depth block.
- Added depth-first progression: attempts to start the next lesson redirect into current review, stories or drills when review is due, the day already has a lesson, or it is a consolidation day.
- Simplified the bottom tabs to Today / Learn / Library / Review and moved the letter wall into Learn.
- Reworked Phrases into Library with unlockable enrichment packs, Reading room access, settings/export/import/reset, and a diagnostic evidence profile.
- Retired visible random reward layers: shop/gachapon, weekly showdown, phrase bounties, and constellation payout.
- Kept useful spenders: Street slang, Teacher, Food deep-dive, streak freezes, titles and quiet visual extras.
- Added extra lesson-quiz mechanism checks across Units C/D for tone grids, silent leaders, clusters, three-piece vowels and real signage.
- Kept the v2.36 vocabulary-role contract intact: decode-only words still cannot leak into meaning/listening production tests.

## v2.36 — 2026-06-22

- Audited all 96 lesson words by instructional purpose: 65 core, 23 recognition and 8 decode-only.
- Limited English→Thai spoken retrieval and Spell it to genuinely useful core vocabulary.
- Kept recognition vocabulary receptive: hear it, read it and identify its meaning without requiring production.
- Removed decode-only words from lesson meaning questions, listening checks and mixed vocabulary review while preserving them as script examples.
- Added visible RECOGNISE and DECODE ONLY labels on lesson word pages.
- Added an app-start vocabulary contract that rejects missing roles and decode-word leakage into vocabulary questions or distractors.
- Replaced the lesson-24 claim that every Thai text can be sounded out correctly with a narrower description of the decoding tools and real-world irregularities.

## v2.35 — 2026-06-22

- Integrated each lesson’s existing core words through hear-first exposure, script decoding, meaning, spoken retrieval and local record/playback comparison.
- Added objective spoken-word recognition questions and separate listening evidence.
- Added a diagnostic Foundations listening baseline after the Lesson 6 script checkpoint.
- Reworked Echo Chamber to record and compare locally; removed self-awarded pronunciation scores.
- Preserved the existing mastery system unchanged: cumulative ≥80% checkpoints every three lessons, free remediation/retries, lesson gating, and the all-42 ≥90% Letters boss.
- Added the `skillStats` state branch for listening results, speaking-practice counts and the Foundations ear baseline.

## v2.34 — 2026-06-21

- Rebuilt the app-wide glyph audio contract.
- Consonants now expose explicit sound anchors and full letter names.
- Vowels play exactly the carrier form displayed onscreen.
- Added automated audio-payload checks across lessons, quizzes, Review, Home, the letter wall and the Letters boss.

## v2.33 — 2026-06-21

- Fixed Reset progress so the wipe persists through `localStorage` in the installed PWA.
- Rebuilt reset state using the current schema while preserving test notes.
- Made the reset control visible and reloaded the app after a confirmed wipe.

## v2.32 — 2026-06-18

- Added the Letters boss: class of all 42 in-service consonants.
- Requires ≥90%, is untimed, and offers free retries plus a missed-item drill.
- First pass awards +30💎 and the นักอ่าน title.
