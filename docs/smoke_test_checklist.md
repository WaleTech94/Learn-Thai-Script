# v8.4.1 Smoke-Test Checklist

Use this as the manual pass before external source review or live deploy. Keep exported/imported progress JSON private.

## Validation Gate

- Run `node tools/arcade-smoke.js` and confirm all three games, theme preview and sound paths pass.
- Run `node tools/conversation-smoke.js` and confirm the exact Week 1 registry, workload, schema-2 state, resume/recovery, form rotation and device-TTS-only paths pass.
- Run `node tools/precommit-check.js` (now includes the fresh-decode corpora gate).
- Run `node --check tools/phase1-audit.js`.
- Run `node tools/phase1-audit.js`.
- Confirm `docs/phase1_audit.json` reports app version `v8.4.1`, 60 validators passing and 0 lesson/pool/role prerequisite issues.
- Confirm `docs/phase1_audit.md` includes `PASS v8Visual`, `PASS v79RetentionDecode`, `PASS v78RequiredLoop`, `PASS v77ColourFade`, `PASS freshDecode`, `PASS timeAwareRoute`, `PASS v74StreetRead`, `PASS v73ReadingMileage`, `PASS v72Shop`, `PASS themeContracts`, `PASS v71VisualSound`, `PASS v70Onboarding`, `PASS v67CompletionJourney`, `PASS v66DataSafety` and `PASS v601FirstRun`.
- Confirm `docs/phase1_audit.md` includes `PASS v841ConversationTeaching`.
- Confirm `sw.js` cache marker is `aan-thai-v8-4-1` and caches `conversation-course.js` with the shell.

## v8.4.1 Week 1 Model Before Practice

- On a fresh state at 390 × 844, confirm Lesson 1 is the first primary task, says `10 min · learn, practise and speak`, and the complete reading course is collapsed and optional.
- Open Lesson 1. Pass: the first screen gives the food-stall goal and three short outcomes in English, with no curriculum/evidence terminology and no autoplay.
- On every `Learn phrase` screen, pass: no builder or shuffled Thai is visible. The complete learner reply appears first in correct Thai order with its English meaning, pronunciation spelling and a `What each part means` breakdown in that same order.
- On phrase 2, pass: `I will have this one.` is explicitly taught as `เอาอันนี้ครับ` / `ao an níi khráp`, with `เอา` = `I will have`, `อันนี้` = `this one` and `ครับ` = the male polite ending.
- Before playing the model, pass: `Practise this reply` is disabled. Tap `Hear the complete phrase`; only successful learner-role device playback enables practice.
- Continue to practice. Pass: the vendor turn and its meaning are visible and playable before the builder is checkable. The builder starts in a non-answer order and every tile shows the already-taught Thai, pronunciation spelling and English meaning.
- Deliberately submit a wrong order. Pass: the learner gets one short retry message, can move tiles back, and the first miss is recorded only once.
- Build the correct answer. Pass: the learner voice plays, the next button unlocks only after successful audio completion and the screen asks the learner to say the reply once.
- Repeat for all three phrases. Pass: there is no passive map, separate six-question objective block, duplicated supported/reduced role-play or required recording screen.
- Play the complete 8-turn scene. Pass: current speaker is visible, stop/restart works and every turn has a clear one-second gap.
- In `Use it`, listen and choose what the vendor means, then rebuild the reply. Pass: English is absent from the phrase tiles, wrong intent/order choices repair in place and `Next turn` stays locked until the reply has played.
- In `Change one part`, build the new food phrase. Pass: transfer is an active builder, not a passive explanation.
- Close/reload during a teaching model, its builder, scene, use-it turn and substitution. Pass: an unfinished phrase returns to its full teaching model; completed actions survive and old v8.3 partial stage names route into the nearest safe stage without deadlock.
- Finish with a support rating. Pass: Lesson 1 schedules +1 and +7 from the Bangkok completion date, advances only the conversation cursor and changes no reading/SRS/check/token/streak progress.
- Complete Lesson 2. Pass: it says 12 minutes, keeps payment learner-initiated and inserts a longer pause after the meal before `คิดเงินด้วยครับ`.
- Complete Lesson 3. Pass: it says 12 minutes and uses plain distinctions: did not understand, speaker too fast, or missed what was said.
- Complete the Week 1 mix and gate. Pass: they say 10 and 12 minutes, retain their original item/form counts and show no `cold`, `authority`, `evidence`, `bounded` or `schema` language to the learner.
- Check next-day, one-week and one-month workload metadata. Pass: they report 3, 5 and 8 minutes and the two-review daily governor remains.
- Fail and retake the gate on a later Bangkok day. Pass: form rotation, immutable first result, separate repair and +30 scheduling remain unchanged.
- Export/import valid schema-2 progress. Pass: form consumption, due dates and resume survive; malformed or forged progress rejects/quarantines closed.
- At 320px, 360px, 390px and 430px, pass: builder tiles wrap without horizontal overflow, 44px controls remain tappable and feedback does not shift the primary action off-screen.
- Reset all progress. Pass: schema-2 conversation progress and recovery are removed and the two-screen onboarding appears once.

## Conversation Voices

- On a device with two installed Thai voices, open onboarding and tap `Test vendor`, then `Test your reply`. Pass: the roles use different voice objects and no audio autoplays.
- Play a lesson scene. Pass: every vendor turn uses the vendor voice and every learner turn uses the learner voice, including resolved chunk turns, assessment options and substitution playback.
- On a device with one Thai voice, pass: both roles use that voice with small rate separation, the UI says only one voice is installed and pauses still separate turns.
- Pass: no code path changes speech pitch, no native recording/reviewer is promised and pronunciation is never scored.

## Fresh-State Onboarding

- Clear `localStorage["thai_state_v1"]` and any Codex/browser artifact storage for the app origin, then open the app online.
- Pass: the first-run onboarding overlay appears once with Skip visible.
- Step through the two screens. Pass: the first promises a useful food order through Learn → Practise → Use it, explicitly says the complete phrase comes before reconstruction and positions reading as a separate option.
- On the final screen, pass: device TTS and the two-role/one-role fallback are clear and no native resource is promised.
- Tap `Test vendor`, then `Test your reply`.
- Pass: no audio autoplays before the tap. If no Thai voice exists, the existing Audio setup panel opens; if one exists, the sample plays from device voice support.
- Finish with `Start Lesson 1`. Pass: canonical Lesson 1 opens immediately and `state.notices.onboarded` is true.
- Reload. Pass: onboarding does not repeat.

## Onboarding Skip And Existing Learners

- Clear storage again, open the app and tap Skip on the first onboarding screen.
- Pass: onboarding closes, `state.notices.onboarded` is true, and reload does not repeat it.
- Load a saved blank-state blob with no completed lessons and no SRS cards.
- Pass: onboarding does not appear because a saved blob already existed.
- Import or create a state with `done: ["l1"]`.
- Pass: onboarding never appears.
- Import or create a state with any SRS card.
- Pass: onboarding never appears.
- Confirm no legacy Phase 1 progress-kept modal appears for a blank first-ever state.

## About And Conversation-First Identity

- Open Progress → Progress tools → About this app.
- Pass: About leads with `Thai for daily life in Bangkok`, explains that the complete reply and each part are taught before practice, makes speaking required but recording optional/unscored and describes reading as separate and optional.
- Confirm the masthead says `Bangkok Thai for daily life` and the header version pill and Today footer both read `Bangkok Thai · v8.4.1`.
- Confirm Progress shows conversation authority first as lessons out of 24 and gates out of 8; Phase 1 reading progress remains inside its optional companion panel.
- Confirm exported backup JSON uses `appVersion: "v8.4.1"`.
- Confirm `manifest.json` foregrounds conversational Thai and describes reading as a gradual companion.

## v8.0.0 Bangkok Street Atlas Visual Pass

- At 390 x 844, pass: Today shows the อ่าน / ÀAN masthead, printed next-action ticket, transit rail with task stops, compact two-column optional practice and the solid route-strip navigation with no horizontal overflow.
- At 360px and 430px widths, pass: version/streak controls fit, route CTA remains tappable, optional practice keeps two columns, and bottom labels remain readable above the safe area.
- Open Practice, Tones, Read and Progress. Pass: each has a distinct workbook / tone-board / signboard / collectible-map identity while the same controls and routes remain available.
- Open a lesson and an objective quiz. Pass: the ruled lesson sheet, class-coloured Thai, answer choices, correct/wrong feedback and Continue flow fit without clipping or hidden controls.
- Open the shop. Pass: all fourteen themes show a visual swatch; selecting each owned/free theme preserves the Street Atlas structure and the Thai mid/high/low colours.
- Select Day market in a test profile. Pass: text, muted text, ticket surfaces, buttons, class tiles and bottom navigation remain readable.
- With reduced motion enabled, pass: card entrances, tile movement, combo/reward pieces and transitions collapse without hiding final state.
- Inspect the accessibility tree. Pass: the four screen marks and five reading-card marks do not enter button names or reading order; tab `aria-current` and 44pt targets remain intact.

## v8.1.0 Street Arcade and Theme Expansion

- On a fresh state, open Practice and the shop. Pass: all three cabinet silhouettes show their exact lesson gate; none can be opened or purchased early.
- Complete Lesson 2. Pass: Parcel Sort becomes free and playable; its neutral Thai prompt gains class colour only after answering.
- At Lesson 4 with Night Market Hunt unowned, pass: Practice links to the shop rather than starting the cabinet. Buy it for 50 tokens; the purchase changes only `packs[]`/token balance and the cabinet then opens.
- In Night Market Hunt, pass: all four Thai signs use covered words, Replay speaks the same target, wrong feedback reveals the reading, and the copy says device voice is practice rather than listening proof.
- Before Lesson 13, pass: Tuk-Tuk Tone Run remains locked even if an imported state contains its pack id. At Lesson 13, pass: its five tone lanes become playable and every answer reveals a valid six-step tone route.
- Finish each cabinet. Pass: score, best combo and 0-3 stars save under `drillLog`; no SRS card, lesson/check flag, required Today step, streak or repeatable token reward changes.
- Check Today before and after required work. Pass: no arcade cabinet appears before required work is clear; afterwards at most one owned, lesson-eligible featured cabinet appears as optional practice.
- Open the shop and preview Ekkamai Sunset, Yaowarat Neon and Tuk-Tuk Chrome. Pass: the whole shell changes temporarily, a clear Stop preview control appears, the owned/active theme remains unchanged, and closing the shop restores it.
- Run correct/wrong/combo/completion paths with Default and Ranat selected, then turn Sounds off. Pass: arcade sorting, market, engine and completion cues are distinct when enabled and silent when disabled.
- At 390 x 844 and 430px widths, pass: cabinet cards, sign buttons, parcel conveyors, five tone lanes, feedback route and result ticket remain tappable with no horizontal overflow.
- With reduced motion enabled, pass: game state remains clear without relying on animated movement.

## Dialog Accessibility Polish

- Open Audio setup from a missing Thai voice or the onboarding voice test.
- Press Escape. Pass: the panel closes and focus returns to the triggering control.
- Open End today.
- Press Escape. Pass: the modal closes and focus returns to End today.
- Open About this app.
- Press Escape. Pass: the modal closes and focus returns to About this app.
- Open Reset all progress and press Escape on warning steps 1-3.
- Pass: the modal closes and focus returns to Reset all progress.
- Reopen Reset all progress and continue to the typed `I Understand` step.
- Press Escape. Pass: the typed-confirmation step does not close on Escape; Cancel still closes safely.

## v6.7 Completion Journey

- Import or create a completed Phase 1 state with `checks.phase1Completion` true.
- Pass: Today says `Phase 1 complete · Maintenance`, does not offer a new lesson, and routes first to due review if due cards exist.
- Clear due review in that completed state.
- Pass: the main action routes to an existing maintenance surface such as a fluency re-read, Wild deck, readiness report or boss rematch.
- Use a completed state with no `phase1Completion.celebrated`.
- Pass: the one-time completion overlay appears, uses bounded can-do / keep-practising wording, then sets `phase1Completion.celebrated`.
- Reload the same state.
- Pass: the completion overlay does not repeat.
- Open Progress. Pass: the Phase 1 dashboard shows lesson, checkpoint, fluency-read, Letters boss and final-completion counts.

## Optional Drill Surfacing

- With early progress through Lesson 2, open Practice.
- Pass: Write it is available only when its learned-letter/ending pool exists and it creates no SRS cards.
- With progress through Lesson 13, open Tones.
- Pass: Route talk appears and reveals derived route tiles only after the learner self-explains.
- With progress through Lesson 4+, open Practice.
- Pass: Decode Gym appears once enough gate-checked non-lesson word reps are available.
- With at least one saved capture, open Read.
- Pass: Wild deck is visible and uses saved local captures only.
- With progress through Lesson 21, open Practice.
- Pass: Rare-letter class appears as a class-only drill with neutral pre-answer prompts and no meaning questions.

## Streak, Return And Overload

- Set a state whose last active day was two calendar days ago with one freeze.
- Pass: one freeze is consumed, the streak continues, and the copy says one freeze covers one missed day.
- Set a state whose last active day was four calendar days ago with two freezes.
- Pass: no freeze is consumed and the streak resets because three missed days need three freezes.
- Use a state returning after at least three inactive days.
- Pass: Today includes a welcome-back line and a smaller return-after-gap review route.
- Use a state with 45+ due review cards.
- Pass: overload copy explains that clearing the deck takes a few steady days while short task labels stay compact.

## Capture Count And Export

- Save local Thai captures until the count is visible.
- Pass: Capture Thai and Wild deck show `N/200 saved`.
- Near 180 captures, pass: the app warns that at 200 captures the oldest saved Thai drops off first.
- Tap `Copy captures`.
- Pass: saved captures copy or appear in the fallback prompt as plain text lines with Thai, note and date.

## Export And Import

- In Progress tools, tap `Download backup`.
- Pass: a file/share-sheet backup named `aan-thai-progress-YYYY-MM-DD.json` is offered and progress remains in place.
- Open the JSON and confirm it is an envelope with `app: "aan-thai"`, `appVersion: "v8.4.1"`, `key: "thai_state_v1"`, `exportedAt` and full `state`.
- Tap `Copy backup`; pass: the same envelope can be copied or shown in the fallback prompt.
- Import the new envelope and confirm `Progress imported` appears with lessons/tokens/cards preserved.
- Import a legacy raw-state JSON blob and confirm it still follows the normal import repair path.
- Import a malformed envelope such as `{"app":"aan-thai","key":"thai_state_v1"}`.
- Pass: invalid import toast appears, existing progress stays unchanged, and the app does not reload.

## Corrupt-State Recovery

- Put malformed JSON in `localStorage["thai_state_v1"]`, then reload.
- Pass: the app falls back to a fresh safe state, copies the raw blob to `localStorage["thai_state_v1_corrupt"]`, and shows `Your saved progress could not be read. A copy has been kept.`
- Tap `Copy recovery data`; pass: the corrupt blob copies to clipboard or appears in the fallback prompt.
- Dismiss the notice and confirm the quarantine key is not auto-deleted.
- Put a malformed or future-version object only under `state.conversation`, then reload. Pass: Phase 1 data is preserved, safe schema-2 conversation state loads, `thai_state_v1_conversation_recovery` contains the quarantined subtree and Copy/Download/Dismiss controls are available.

## Save, Error And Update Notices

- Simulate unavailable storage or use a constrained/private context where both storage writes fail.
- Pass: a persistent banner says `Progress is not saving on this device. Export a backup now.`
- Tap `Export backup`; pass: backup export opens from the banner.
- Trigger one uncaught test error in a local debug session.
- Pass: one banner says `Something went wrong. Your saved progress is safe. Reload the app.` with a reload button.
- Trigger another error; pass: a second banner does not stack.
- After deploy, open the installed PWA online and wait for the new service worker.
- Pass: `Update ready - reload to get the latest version.` appears with a reload button and the app never auto-reloads during an active quiz/review.

## Backup Nudge

- Use a state with at least one completed lesson and no `lastExportAt` after 14 active days.
- Pass: Progress shows `Back up your progress` with Export and Dismiss.
- Pass: Today can show one short backup hint for the day.
- Tap Dismiss; pass: `backupNudgeSnooze` is set about 14 days ahead and no lesson/review route is blocked.
- Export a backup; pass: `lastExportAt` is set to today and the nudge clears.

## v6.5 Feedback Layer

- With Sounds on, answer objective MCQ/typed questions correctly and incorrectly.
- Pass: synthesized correct/wrong feedback sounds play after the user gesture, including on iPhone/PWA.
- In Practice, answer Write it, Spell it and Glyph Ghost correctly and incorrectly.
- Pass: objective correct/wrong sounds play on these surfaces.
- In Practice → Contrast block, answer the listening MCQ correctly and incorrectly.
- Pass: objective correct/wrong sounds play on the MCQ step; the later self-rated read-aloud step stays silent.
- In a lesson Quick decode/class-check inline MCQ, answer correctly and incorrectly.
- Pass: objective correct/wrong sounds play.
- Open Echo, Route talk, Decode Gym and Wild deck.
- Pass: these self-graded/read-aloud surfaces do not play objective feedback sounds.
- Answer three objective questions correctly in a row.
- Pass: the combo chip appears; fifth-answer milestones give the small milestone sound/pop.
- Complete an objective session.
- Pass: completion sound is distinct from the milestone sound, and best-run/streak-extension lines appear where relevant.
- Toggle `Sounds: on/off` in Progress tools.
- Pass: SFX mute is respected and no audio assets or network requests are added.

## v7.1 Visual Repair And Exit Guard

- Buy/select Day market or set `state.theme = "day"` in a test profile.
- Pass: Today, lesson stages, quiz feedback, Review flashcards and grade buttons, Practice, Tones, Read, Progress, shop, onboarding/About and safety banners remain legible with visible controls.
- Switch to Skytrain and Songkran.
- Pass: cards, the tab bar and the lesson player sit in each theme palette while mid/high/low class colours stay teal/pink/marigold.
- Confirm reading accents on Read/reading cards use cyan rather than the mid-class teal.
- Start a lesson, advance past the first stage, then tap the close button.
- Pass: a confirm dialog says `Leave this lesson? This attempt restarts from the beginning next time.` Stay/Escape keeps the lesson open; Leave closes it.
- Start a mastery checkpoint, Letters boss or Phase 1 completion checkpoint, answer at least one question, then tap the close button.
- Pass: the same discard confirmation appears. Ordinary shop/read/drill overlays with no meaningful mastery attempt still close immediately.

## v7.2 Shop Expansion

- On a test profile with enough tokens, open the shop and confirm groups read Phrase & story packs / Sounds / Themes / Titles.
- Buy Taxi & Grab and Market bargaining. Pass: both appear as Read categories, each has 12 phrases, and tapping `+ deck` is still required before any `w:` card enters review.
- Buy Bangkok reads. Pass: four extra Reading-room stories become visible, remain lesson-gated, and first read gives the normal +3 token reward.
- Buy/select Ranat. Pass: objective feedback sounds use the brighter synthesized voice; switching back to Default works; `Sounds: off` mutes both voices.
- Buy/select Temple gold, Monsoon and Loy Krathong. Pass: Today, lesson player, review grades, Read, Progress and shop remain legible, and mid/high/low class colours keep their meaning.
- Import a pre-v7.2 backup. Pass: progress imports without `soundPacks[]` or `sfxVoice`, shop opens, Default sound is active, and existing packs/themes/titles remain owned.

## v7.3 Reading Mileage And Automaticity

- Fresh state: open Read before Lesson 8. Pass: the new v7.3 Reading-room stories are not visible, completed-story timed re-read controls are absent, and Tone sprint is not visible before Lesson 13.
- Mid-course Lesson 10 state: open Read. Pass: the Lesson 8 and Lesson 10 new stories are visible, first read uses the normal reading flow, and the `Timed re-read` button appears only after the story has been completed.
- Background the app during a story or fluency read before finishing. Pass: no unreliable timing sample is stored.
- Complete a story or fluency read, then use `Timed re-read`. Pass: the repeat sample stores in `readTimes`, does not award tokens, does not create SRS/review cards, and the Progress dashboard shows a Reading mileage line with story count, timed-read count and pace wording.
- Lesson 18+ state with at least 20 tone-rule answers and 85%+ rule accuracy: open Tones. Pass: Tone sprint is visible, has no countdown, wrong answers show the rose panel plus `Continue`, and the end screen reports seconds per answer.
- Complete Tone sprint. Pass: `drillLog["tone-sprint"]` records last/best pace, no new lesson blocker appears, and no sprint-specific token reward is awarded.
- Lesson 18+ Decode Gym: start several sessions. Pass: each 10-rep set includes at least two true-cluster words when the pool allows, while remaining self-checked and outside SRS.
- Wild deck with a route-eligible taught capture: tap `Drill this`. Pass: the route is hidden first, reveal shows the existing tone-route tiles, and only the capture practice count/date changes.
- Import a pre-v7.3 backup with no `readTimes` or `drillLog`. Pass: import succeeds, Progress opens, and the new surfaces remain optional.

## v7.4 Street Reads And LOW-Tail Stories

- Lesson 17 state with no completed story: open Read and start the Lesson 17 free stories. Pass: first reads are spaced by default, no Street read toggle appears before the story is completed, and the first-read +3 reward path is unchanged.
- Complete a story, reopen it, then switch `Street read`. Pass: words render edge-to-edge on each line, line breaks remain, class colouring remains, and tapping an unspaced word still speaks/shows its reading and meaning.
- In Street read mode, tap `Timed street read`, finish the pass, and inspect progress state. Pass: the sample stores under `readTimes["street:<storyId>"]`, while spaced re-read samples stay under `readTimes["story:<storyId>"]`.
- Switch back to `Spaced`. Pass: the original word spacing returns in place and the timed button returns to `Timed re-read`.
- Lesson 17, 19 and 23 states: confirm free stories `s19`, `s20` and `s21` are visible at their gates, not pack-gated, and first reads still award only the existing +3 story reward.
- Confirm the generated recurrence table marks คน, ใน, พา, ไฟฟ้า, รอ, ไหน, ถุง, ทางเข้า, ทางออก and ครับ as OK.
- Confirm completed fluency reads do not offer Street read mode in this release.

## v7.5 Time-Aware Today Fill

- Complete the required Today route with measured time below target. Pass: a single keep-going card appears with an active-minutes line and one existing unlocked suggestion.
- Tap Skip on the keep-going card. Pass: the card hides for that in-memory suggestion, no progress reward/streak/SRS card changes, and no new persisted skip key appears.
- Set today's `days[date].secs` at or above the displayed target. Pass: the fill card shows `Target met` or stays out of the route instead of offering more work.
- Use a lite-day state. Pass: after the required route is complete, the fill layer is suppressed.
- Use a state with due review, 45+ overload, consolidation/recovery mode or a missing mastery gate. Pass: the fill layer does not offer a next lesson until the normal lesson-blocker rules are clear.
- Use a fresh or very early state. Pass: the fill layer never links to locked Tone sprint, Decode Gym, Street read or fluency re-read surfaces.

## Core Installed-PWA Checks

- Open the installed PWA online, swipe it closed, reopen it, and confirm progress remains.
- Confirm footer string `Bangkok Thai · v8.4.1`, 44pt taps, safe-area top/bottom chrome and Thai device voice setup still behave normally.
- Confirm bottom tabs read Today / Practice / Tones / Read / Progress and fit on the target iPhone viewport.
- Confirm Today route hero pips/bar match real steps and End today states stay short: `Review first`, `Main task first`, `Practice first`, `Ready` or `Done`.

## Review And Practice Regression Checks

- Correct routine objective review answers show green feedback with adaptive dwell and no `Felt shaky` / `Solid` choice.
- Wrong objective quiz/review answers pause on a rose panel until `Continue` is tapped.
- Class-question misses show answer text, class tiles where appropriate and separated chant text.
- Write it accepts Thai keyboard return, shows the green `Correct` panel with revealed glyph, then auto-advances.
- Capture Thai accepts Thai keyboard return and saves typed local captures only.
- Decode Gym shows non-lesson word-reading reps, reading reveal only and no SRS creation.

## Fresh Decode (v7.6.0)

- Open a Lesson 4+ lesson quiz. Pass: it contains never-taught words - a two-question route chain (mechanism first, then the reading), one full reading MCQ and one single-axis check - all with class colours.
- Answer a fresh question wrong. Pass: the rose panel explains the route (class · mark · live/dead → tone) and waits for Continue; grading behaves like any other quiz question.
- Open a mastery checkpoint. Pass: its fresh words render in plain glyphs (no class colours) and colour appears only in the post-answer explanation.
- Confirm no fresh word ever shows an English meaning, creates a review card or appears in Decode Gym.
- On a completed-course state, confirm the maintenance rotation can land on `Fresh decode` and serves five words with mixed question shapes.
- Before Lesson 13, confirm fresh questions ask live/dead, vowel length or reading - never the tone name.

## Tone Colour Fade (v7.7.0)

- Open a Lesson 13+ lesson quiz. Pass: it always contains a tone question whose Thai prompt is plain (no class colours) while the class badge chip is still visible.
- Answer that tone question wrong. Pass: wrong sound plays, the same question re-appears with class colours restored, the missed option disabled and a one-line note; no answer is revealed yet.
- Answer correctly on the colour-assisted attempt. Pass: green feedback with the route explanation, and the question scores as correct for the lesson quiz.
- Answer wrong twice. Pass: the normal rose panel with the full route explanation and Continue; the question scores as wrong.
- Open a mastery checkpoint covering Lesson 13+. Pass: tone prompts are plain and a miss goes straight to the explanation - no second attempt.
- Confirm a pre-Lesson-13 lesson quiz tone question (when one appears) still shows class colours with no retry.
- Confirm daily review cards, Leech clinic, tone-rule trainer and Tone sprint tone questions still show class colours.
- After settling any faded question (including v7.6.0 bank words), pass: the prompt glyphs regain class colour in the feedback state.

## Mastery Loop And Gate Chains (v7.8.0)

- Miss at least one question in a lesson quiz. Pass: after the last question a `Clear your misses` phase re-presents each missed question until answered correctly once; the final score still reflects first attempts.
- Miss a re-presented question. Pass: it goes to the back of the loop and returns; the session cannot end with it unresolved.
- Open a mastery checkpoint or unit boss. Pass: it contains an adjacent two-question chain - live/dead or vowel length first, then which tone / how it reads on the same word - and a miss reveals normally with no second attempt.
- Open the Phase 1 completion checkpoint. Pass: มาก and รัก appear as chained pairs and no standalone Live/Dead or Short/Long question exists.
- With existing wrong-answer history, open a lesson quiz repeatedly. Pass: quizzes lean toward previously-missed territory in one filler slot; with a fresh profile they behave as before.
- On a completed-course state, open the maintenance Fresh decode block. Pass: five words serve normally; over several days the words containing your weakest letters recur more often.

## Sealed Retention Transfer (v7.9.0)

- Complete a Lesson 4+ lesson and open its +1-day check when due. Pass: the check still has 6 questions; exactly 3 are neutral unseen-word questions built from two words assigned only to that lesson's `retained` stage.
- Open the same lesson's +7-day check when due. Pass: it still has 8 questions and uses two different neutral words assigned only to `stabilised`; no +1 word repeats.
- Confirm Lessons 1–3 retain the existing familiar-only delayed check because the sealed real-word bank opens at Lesson 4.
- Miss a delayed check, then retry. Pass: the original first-attempt percentage remains in `retention[lesson].firstPct`; the retry is remediation and cannot overwrite it.
- Inspect `docs/phase1_audit.md`. Pass: the v7.9 table contains exactly 96 verified entries: 42 `retained`, 42 `stabilised`, and 12 `cold30`, with no overlap against the other corpora.
- On a completed state whose `phase1Completion.firstPassedAt` is 30 days ago and whose SRS due list is empty, open Today. Pass: `30-day cold decode` is the main maintenance task.
- Start it. Pass: 14 neutral questions use all 12 reserved `cold30` words, with two mechanism-first/read pairs kept adjacent; 85% is required.
- Fail it. Pass: Phase 1 remains complete, the first percentage is retained, End today is not blocked by the failure, and `Repair with Fresh decode` opens the separate maintenance corpus rather than any `cold30` word.
- Pass it. Pass: the Progress dashboard shows the `30-day cold decode` tile as complete and the task does not recur.
- Import a legacy completed state. Pass: `repairStateForV79()` adds only nested `firstPassedAt` / `retention30` fields and preserves lessons, reviews, rewards, completion and all prior dates.

## Offline And Weak Network

- Open the deployed PWA online once, then disable network and reload.
- Pass: cached shell opens and progress remains available.
- With a throttled or unreliable connection, reload the installed app.
- Pass: shell fetch does not hang indefinitely; cached shell appears after the bounded timeout if the network stalls.
