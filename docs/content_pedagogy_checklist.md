# Content Pedagogy Checklist

Use this before shipping any Phase 1 curriculum, quiz, story, phrase or checkpoint change.

## Scope

- [ ] The change stays inside Phase 1 script mastery unless explicitly approved.
- [ ] No Phase 2 vocabulary, broad grammar lesson, conversation route or survival-course claim is added.
- [ ] No native audio, AI audio, scraped audio, speech scoring or pronunciation assessment claim is added.
- [ ] The visible learner outcome remains controlled Thai script reading, not full fluency.

## Decodability And Prerequisites

- [ ] Every Thai item is decodable at its unlock point or explicitly marked as a permitted whole-word/reference item.
- [ ] Visible glyphs/marks are taught before scored or reviewable use.
- [ ] Composite vowel patterns are taught before structural use.
- [ ] Mechanisms are taught before use: final jobs, hidden vowels, live/dead, vowel length, tone marks, silent leaders, clusters, fake clusters, gaaran and repeat sign.
- [ ] Reading-room stories and fluency reads stay within taught script at their gate.

## Letter, Class And Tone

- [ ] Consonant class is consistent with `GLYPHS`.
- [ ] Class-colour hints do not appear before neutral class-recall answers.
- [ ] Tone explanations follow the Tone route: initial/leader -> class -> tone mark -> live/dead -> low-class dead vowel length -> tone.
- [ ] Early tone examples are labelled as previews if the full Unit C rule has not been taught.
- [ ] Tone transliteration is a reading hint only; Thai-script tone logic remains primary.

## Structural Reading

- [ ] Final consonant jobs are named as ending jobs, not only tone support.
- [ ] Vowel length is explicit where it affects live/dead or tone.
- [ ] Vowel position/order is explicit for front, wrap and three-piece vowels.
- [ ] Silent ห/อ is explained as changing the class row, not adding a spoken start sound.
- [ ] True and fake clusters are framed as reading patterns.
- [ ] Gaaran ์ is explained as silencing the marked letter.

## Roles And Burden

- [ ] Lesson words use `vocab:"core"`, `vocab:"recognition"` or `vocab:"decode"`.
- [ ] `core` words are useful enough for active review burden.
- [ ] `recognition` words are not turned into spelling/production burden.
- [ ] `decode` words are not tested as vocabulary meanings.
- [ ] Any special recognition-only teaching item that should not seed axis review uses an explicit guard such as `review:false`.
- [ ] Rare-letter support is class recognition only unless there is an explicit reason to add review load.

## Feedback

- [ ] Wrong-answer feedback points to the missed axis where possible.
- [ ] Tone feedback explains the route rather than saying only the final answer.
- [ ] Final-job feedback contrasts start sound vs ending sound.
- [ ] Vowel, live/dead, silent-leader, cluster, font and chunk feedback stay compact.

## Controlled Reading

- [ ] Stories and fluency reads do not imply free conversation or speaking fluency.
- [ ] English glosses do not overclaim what the Thai line means.
- [ ] Controlled reading lines are simple, decodable and not misleading.
- [ ] Capstone/checkpoint language says controlled reading evidence, not native listening/speaking mastery.

## Phrasebook

- [ ] Phrasebook content is framed as bonus/optional.
- [ ] Phrase cards enter review only by clear learner opt-in.
- [ ] Non-decodable phrase content is recognition/audio support, not Phase 1 mastery evidence.
- [ ] Phrase rewards do not require live-human production.

## Validation And Review

- [ ] `node --check tools/phase1-audit.js` passes.
- [ ] Embedded app script parses with Node `vm.Script`.
- [ ] `node tools/phase1-audit.js` passes all validators.
- [ ] Generated `docs/phase1_audit.*` changes are inspected and expected.
- [ ] Any uncertain Thai naturalness, tone or usage point is flagged for Thai-native review instead of guessed.
