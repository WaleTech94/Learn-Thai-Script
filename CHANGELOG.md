# Changelog

Every versioned app release must update this file and `AGENTS.md` in the same commit. The local `CLAUDE.md` mirror must also be synchronized when present.

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
