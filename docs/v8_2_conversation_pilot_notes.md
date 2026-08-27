# v8.2.0–v8.2.1 Conversation Pilot Notes

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

1. Hear the complete scene and choose its gist.
2. Meet, hear and say the six learner moves with Thai, transliteration and meaning visible.
3. Choose an appropriate response to four vendor prompts and see immediate functional feedback.
4. Read the learner side aloud, make a temporary local recording and compare it with the device preview.
5. Substitute one food item into the order frame.
6. Answer the four vendor prompts aloud before revealing the supported model.
7. Save a private support-level self-rating.

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
- reset copy, Today-card placement and v8.2.1 identity.

`validateV821ConversationFrontDoorContracts()` separately checks the speaking-first onboarding, automatic launch, masthead/About/manifest identity, Today DOM order and explicit reading-companion boundary.

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
