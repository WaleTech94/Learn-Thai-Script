# Phase 1 Content Pedagogy Notes

Updated: 2026-07-01
Release: v5.4.6

## Summary

v5.4.6 is a targeted Phase 1 content/pedagogy hardening pass. It does not add Phase 2, broad vocabulary, grammar lessons, native audio, speech scoring, dependencies, a backend, a framework or an architecture split.

The pass keeps the current letter -> class -> tone spine, SRS model, review governor, TTS safety boundary and final controlled-reading standard. It tightens learner-facing copy, rare-letter fairness, optional phrasebook scope, story wording, feedback specificity and final checkpoint coverage.

## Content Changes Made

- Lesson 1 now frames the full tone route as a preview and states that the first lesson only needs the easiest case: live syllable + no tone mark -> mid tone.
- Lesson 4 is now a tone-mark preview and adds อ่าน as the app-name/course-goal teaching item. อ่าน is `recognition` and `review:false`, so it does not seed normal axis-review burden.
- Lessons 7, 8 and 11 now label low-class and dead-syllable tone outcomes as previews before Unit C.
- Lesson 7 and Lesson 13 now frame consolidation/review days as normal learning design rather than failure.
- Lessons 13-17 repeat a compact Tone route so formal tone logic uses one procedure.
- Lessons 8, 10, 19, 20 and 21 have clearer objective framing.
- Lesson 21 now has `classOnlyGlyphs` plus four rare/formal class-recognition quiz items for Letters boss fairness without normal review seeding for those rare rows.
- Stories no longer include `เรา ไป อาหาร`, `ไม่ นาน ผม พูด เก่ง` or `เรา พูด เก่ง`. Late reading outcomes now point to controlled reading, not speaking fluency.
- The phrasebook is now explicitly optional/bonus. Weekly phrase suggestions no longer auto-add `w:` cards to SRS; learners add phrase cards only if they want extra vocabulary load.
- Final Phase 1 checkpoint now samples class, final jobs, live/dead, vowel length, tone marks, tone result, silent leaders, true/fake clusters, three-piece vowels, public-sign chunking and gaaran.
- `targetedWrongFeedback()` and tone explanations now point more directly to class row, ending job, vowel length, silent leader, tone mark, rare-letter, chunk, font, cluster and gaaran axes.

## Rare-Letter Boss Fairness

The Letters boss still tests class recall for all consonants in `GLYPHS`. The rare-letter fairness gap is handled in Lesson 21:

- Mid rare: ฎ ฏ
- High rare: ฐ
- Low rare: ณ ฌ ฑ ฒ ฆ ฬ
- Formal/high already met: ศ ษ

The rare Lesson 21 additions are class-recognition only. The `classOnlyGlyphs` list makes them count as introduced for prerequisite fairness, while avoiding normal glyph/axis review seeding. Retired keyboard-only letters are not tested by the boss.

## Tone-Route Rationale

Unit C now uses one repeated route:

1. Find the initial consonant or cluster leader.
2. Identify the class: mid, high or low.
3. Check for a tone mark.
4. If there is no mark, decide live/dead.
5. For low-class dead syllables, check vowel length.
6. Name the tone.

Earlier lessons can preview tone outcomes, but copy now tells learners those are previews and that Unit C organises the full system.

## Phrasebook Scope

Phrasebook content remains useful Bangkok survival support, but it is not part of Phase 1 mastery. Phase 1 mastery is controlled script reading. Phrase cards are now opt-in review vocabulary; weekly suggestions do not auto-seed review.

## Checkpoint Coverage

The final checkpoint is 15 questions. It still requires 85% plus a smooth or slow-but-correct final controlled read. It now covers a broader sample of Phase 1 mechanisms instead of over-reusing direct consonant class recall, because the Letters boss already handles all-42 class recall.

## Thai-Native Review Flags

- No native-speaker validation was performed in this pass.
- The replacement controlled-reading lines are intentionally simple and decodable. A Thai-native review could still improve naturalness without expanding Phase 1 scope.
- Tone and transliteration changes should continue to be checked against the existing tone-grid validation approach before any future content ships.

## Deferred Work

- Phase 2 vocabulary, grammar patterns, conversations, listening expansion and broader survival Thai remain deferred.
- Native audio, AI audio, scraped audio, speech recognition and pronunciation scoring remain out of scope.
- A v6 UI/content pass and any architecture split remain future work only.
