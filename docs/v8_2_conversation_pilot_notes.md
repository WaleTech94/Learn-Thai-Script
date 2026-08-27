# v8.2.0–v8.2.2 Conversation Pilot Notes

## v8.2.2 zero-knowledge lesson correction

v8.2.2 removes the assumption that a brand-new learner can infer an uninterrupted Thai conversation. The flow now starts with an English-only map of the six things the exchange accomplishes. It then teaches six exact vendor-cue/learner-reply pairs with English meaning before Thai, separate audio controls, speaker labels and a visible `pause · then you answer` divider.

The complete exchange appears only after all six pairs. Its transcript keeps English on every turn, and full playback uses separate speech utterances with a 900ms gap between speakers. The greeting sequence and every later cue are aligned with the pair that was taught. This changes teaching order and presentation only; the state, privacy, evidence and progression boundaries below remain unchanged.

## v8.2.1 front-door correction

v8.2.1 promotes this field test to the recommended first action without coupling it to the literacy progression system. The masthead, onboarding, Today hierarchy, About copy and manifest now say that usable conversational Thai for Bangkok is primary. Finishing onboarding launches the scene; the complete Phase 1 course appears underneath as an optional gradual reading companion.

This is a product-hierarchy change, not a claim that one scene is already a complete conversation curriculum. The separate state, privacy, teacher-review, device-voice and no-progression-mutation boundaries below remain unchanged.

## Purpose

v8.2.0 was the first implementation step from the conversation-first curriculum audit. It placed one isolated field-test scene on Today so the owner could judge whether the proposed interaction loop was useful before the app gained conversational SRS or eight weeks of content.

The scene is recommended first, available from a fresh state and designed for an 8–12 minute run. It remains optional in the progression sense: skipping it blocks nothing. The frozen v8.1.0 reading course remains fully usable and unchanged underneath it.

## Scene

Stable scene id: `conv.food_counter_01`

Setting: ordering at a Bangkok food stall. The six learner moves are:

1. `สวัสดีครับ` — hello.
2. `เอาอันนี้ครับ` — I’ll take this one.
3. `ไม่เผ็ดครับ` — not spicy.
4. `ทานที่นี่ครับ` — eat here.
5. `น้ำเปล่าขวดหนึ่งครับ` — one bottle of water.
6. `ขอบคุณครับ` — thank you.

The supported substitution is `เอากะเพราไก่ครับ`. Vendor prompts and every modeled polite learner response use male `ครับ` throughout.

This wording is intentionally marked **Thai-teacher review pending** in the product. It is plausible pilot copy, not a claim of native editorial sign-off.

## Learning loop

The pilot uses a dedicated `conversation-pilot` player rather than the lesson or generic-quiz engine:

1. Understand the six-step food-stall situation through an English-only map; nothing is tested cold.
2. Learn six exact vendor-cue/learner-reply pairs with English meaning first and a visible pause between turns.
3. Hear the complete exchange only after the pairs are familiar, with English on every turn and a 900ms inter-speaker gap.
4. Choose an appropriate response to four vendor prompts and see immediate functional feedback.
5. Read the learner side aloud, make a temporary local recording and compare it with the device preview.
6. Substitute one food item into the order frame.
7. Answer the four vendor prompts aloud before revealing the supported model.
8. Save a private support-level self-rating.

The flow tests comprehension, retrieval, variation and interaction. It does not award a speaking score or certify pronunciation.

## Audio and privacy boundary

- Speech uses the existing device voice and is labelled a rough preview, not native listening evidence.
- Local recording reuses the existing `MediaRecorder` path.
- Recording is temporary, never uploaded, never scored and never persisted in learner state.
- Pilot transitions cancel in-flight device speech, and delayed callbacks verify the current player, phase and item, so closing or quickly advancing cannot carry an old prompt into the next screen.
- The app does not claim to assess tones, aspiration, vowel length or final stops from microphone input.

Native-speaker audio remains a prerequisite before this loop could become the main listening curriculum.

## State and progression boundary

The only new optional state is:

```text
conversation: {
  schema: 1,
  scenes: {
    [sceneId]: {
      runs,
      firstCompleted,
      lastCompleted,
      selfRating
    }
  }
}
```

Dates are bounded ISO calendar days and self-ratings use a fixed three-value enum. Repair is idempotent, drops invalid scene records, preserves unknown future fields and stores no per-turn answer history. Import validates the namespace before merge. Reset removes conversation evidence with all other progress.

Pilot completion cannot write SRS cards, completed lessons, checks, tokens, streaks, daily-route credit, active learning seconds, error profiles, drill records, captures or phrase-review cards. The conversation content is a separate source object and cannot leak into the Phase 1 word/review pools.

## Validation

`validateV82ConversationPilotContracts()` checks:

- the stable scene id and exactly six learner chunks;
- male-polite endings on modeled learner/vendor Thai;
- response references and the substitution frame;
- self-rating ids;
- repair, future-field preservation, import acceptance/rejection and run aggregation;
- no use of literacy progression, reward, streak, daily or SRS mutation calls;
- exclusion from active-time types and phrase-review pools;
- reset copy, Today-card placement and current v8.2.2 identity.

`validateV821ConversationFrontDoorContracts()` separately checks the speaking-first onboarding, automatic launch, masthead/About/manifest identity, Today DOM order and explicit reading-companion boundary.

`validateV822BeginnerConversationContracts()` checks meaning → paired teaching → complete-scene order, no cold intro playback, English-before-Thai pair copy, visible spacing CSS, cue-to-full-scene alignment, separately guarded utterances with the 900ms gap, no new learner-state key and v8.2.2 identity.

The normal precommit, generated audit, arcade smoke, embedded-script syntax and browser walkthrough remain release gates.

## Decision after real use

Do not scale the pilot merely because it functions technically. Run it during real Bangkok food orders and collect simple observations: whether the prompt felt retrievable, which vendor turns were missed, whether the substitution transferred, and whether the session felt useful enough to repeat.

Only after Thai-teacher review and owner field use should the project decide whether to:

- keep the loop and commission native audio;
- revise its step order or support fade;
- decide whether conversation needs its own compulsory route or should remain a recommended independent scene;
- add conversational spaced retrieval; or
- build the proposed eight-week scene sequence.

Phase 1 remains preserved as a parallel reading track whatever that decision is.
