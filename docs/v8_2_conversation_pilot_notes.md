# v8.2.0–v8.2.3 Conversation-First Notes

## v8.2.3 complete beginner-practice loop

v8.2.3 makes the food-ordering scene the app's real A0 starting lesson and today's minimum. It no longer assumes that viewing content is evidence of practice: the learner must complete six taught cue/reply pair playbacks, the full 13-turn exchange, four functional response choices, one supported substitution, a one-phrase speaking step and four supported role-play reveals before the run is recorded.

The six moves are intentionally split into two polite routines and four active replies. Greeting and thanks are heard and copied; choosing the food, setting spice, choosing where to eat and ordering water are retrieved again in response choice and role-play. Reading stays visible as support—Thai script, pronunciation spelling, English meaning and meaningful phrase segments—but no script knowledge is assumed or tested.

The complete Phase 1 letter → class → tone course is preserved unchanged behind an optional reading-companion control. Conversation evidence and reading evidence remain separate.

## Earlier v8.2 corrections

v8.2.2 removed the cold uninterrupted Thai opener. It added an English-only situation map, exact cue/reply teaching pairs and separate full-scene utterances with a 900ms gap.

v8.2.1 made usable conversational Thai the product front door. The masthead, onboarding, Today hierarchy, About copy and manifest lead with speaking, while Phase 1 became an explicitly optional reading companion.

v8.2.0 introduced the isolated food-counter scene and the separate conversation state boundary.

## Scene

Stable scene id: `conv.food_counter_01`

Setting: ordering at a Bangkok food stall with a male vendor. The modeled learner moves are:

1. `สวัสดีครับ` — hello. Polite routine.
2. `เอาอันนี้ครับ` — I'll have this one. Active reply.
3. `ไม่เผ็ดครับ` — not spicy, please. Active reply.
4. `ทานที่นี่ครับ` — I'll eat here. Active reply.
5. `น้ำเปล่าขวดหนึ่งครับ` — one bottle of water, please. Active reply.
6. `ขอบคุณครับ` — thank you. Polite routine.

The supported substitution replaces `อันนี้` with pre-taught `กะเพราไก่` and models `เอากะเพราไก่ครับ`. Every modeled vendor and learner line uses male polite `ครับ`; `ค่ะ` is prohibited.

## Learning loop

The dedicated `conversation-pilot` player runs this sequence:

1. Explain the food-stall situation in English and distinguish routines from active replies.
2. Teach each vendor cue and learner reply as a pair: English meaning first, Thai and pronunciation support, meaningful segments, then vendor → 900ms pause → learner-model playback.
3. Play the full 13-turn exchange with a sticky now-playing panel, active-turn state, stop/restart controls and English meaning on every turn.
4. Shuffle three reply choices for each of the four active prompts. A wrong answer cannot continue: it plays the exact cue/reply repair and requires a retry.
5. Practise one useful reply aloud. Optional local recording shows elapsed time, can be stopped manually and is capped at 45 seconds.
6. Preteach the new food item and complete substituted order, then support production with the three phrase parts before revealing the joined model.
7. Return to all four active vendor prompts in supported role-play. The learner answers aloud before revealing and repeating the model.
8. Save a private support-level self-rating and the bounded evidence that the practice loop was completed.

The loop supports comprehension, retrieval, variation and interaction. It does not score or certify pronunciation.

## Audio and privacy boundary

- The device's Thai `speechSynthesis` voice generates every modeled Thai line. This is the product's fixed pronunciation-model constraint, not a temporary placeholder.
- No native recording, native reviewer, human-audio manifest, remote audio service or runtime network call is required.
- The same device voice may play both vendor and learner roles; labels, the now-playing panel and the 900ms gap establish turn-taking.
- Local recording reuses `MediaRecorder`, remains optional and temporary, and is never uploaded, persisted or scored.
- Closing, stopping or changing stage cancels in-flight speech; callbacks verify the current player and phase before continuing.
- The app makes no claim to assess tones, aspiration, vowel length or final stops from microphone input.

## State and Today boundary

The optional namespace remains schema 1. v8.2.3 adds `lastRun` inside an existing scene record:

```text
conversation: {
  schema: 1,
  scenes: {
    [sceneId]: {
      runs,
      firstCompleted,
      lastCompleted,
      selfRating,
      lastRun: {
        completed,
        pairAdvances,
        pairPlaybacks,
        scenePlaybackCompleted,
        responseChoices,
        responseFirstCorrect,
        roleplayReveals,
        swapRevealed,
        recordStepCompleted,
        recordingAttempted
      }
    }
  }
}
```

`recordingAttempted` is evidence of using the optional recorder, not a completion requirement. All other interaction counts/flags must meet the scene contract. Today is complete only when `lastCompleted` and `lastRun.completed` are today and `lastRun` is structurally complete. Legacy v8.2.0–v8.2.2 records remain valid run history but do not receive invented current-day practice credit. Malformed evidence repairs to `null`; malformed imports fail closed.

Conversation completion cannot write SRS cards, completed lessons, checks, tokens, streaks, reading-route days, active learning seconds, error profiles, drill records, captures or phrase-review cards. Reset clears conversation evidence and deliberately restores first-run onboarding.

## Accessibility and mobile contract

- Onboarding and learning overlays use modal semantics, focus containment, background inertness and focus restoration.
- Leaving after meaningful progress requires confirmation; the intro can close without a false warning.
- Pair, scene and response controls keep 44px minimum targets.
- The 320px layout has no horizontal document overflow; playback controls stack where needed.
- The reading companion is collapsed by default and exposes its state through `aria-expanded`.

## Validation

`validateV82ConversationPilotContracts()` preserves the original scene, male-polite and progression-isolation boundary.

`validateV821ConversationFrontDoorContracts()` guards speaking-first onboarding, automatic launch, identity, Today ordering and optional reading.

`validateV822BeginnerConversationContracts()` guards meaning → paired teaching → complete-scene order, cue alignment and the 900ms gap.

`validateV823ConversationPracticeContracts()` guards:

- two routines and four active replies;
- six segmented pair gates and exact four-prompt response/role-play coverage;
- stable shuffled choices and compulsory wrong-answer repair;
- one-phrase recording with at least a 30-second window;
- substitution preteach before supported production;
- active-turn, stop/restart and full-scene completion controls;
- bounded `lastRun` evidence, current-day credit and legacy/corrupt repair;
- reset/onboarding and exit-guard behavior;
- device-TTS-only content, male-polite Thai and v8.2.3 identity.

`tools/conversation-smoke.js` runs a dependency-free interaction/state harness and is invoked by `tools/precommit-check.js`. The generated Phase 1 audit now contains 63 validators.

## Expansion rule

Do not add scenes merely to increase content count. Field use should decide which functions transfer, where prompts fail and which substitutions are genuinely useful. Any next scene must preserve the same A0 contract: meaning before testing, limited active targets, compulsory repair, repeated retrieval, device-generated audio, male-polite modeled Thai and no claim of pronunciation certification.

Native audio and native review are explicitly not prerequisites. If expert feedback becomes available later it can improve wording, but the curriculum and product must remain operable without it. Phase 1 stays available as a parallel optional reading track.
