# v8.4 Conversation Builder — Implementation Plan and Shipped Contract

**Status:** implemented in v8.4.0. This document supersedes the learner-flow, workload and learner-facing-copy portions of the v8.3 Week 1 specification. The canonical Thai lines, interaction IDs, gate forms, delayed forms and schema-2 authority remain unchanged.

## Product decision

Week 1 must feel useful within the first minute. A new learner should never be asked to infer an untaught conversation, work through a long explanation or perform a passive sequence of playback screens. The compulsory loop is:

1. See the immediate Bangkok goal in English.
2. Hear one vendor turn.
3. Build the learner reply from tappable phrase parts.
4. Hear and say the reply.
5. Rebuild it with less support in context.
6. Change one part to create a useful variant.

Reading remains available separately and never unlocks speaking. Thai script stays visible alongside transliteration because gradual familiarity is useful, but script recall is not required in the conversation route.

## Interaction architecture

- **Teaching builder:** shows Thai, pronunciation spelling and English meaning on each phrase tile. Tiles begin in a deterministic non-answer order. A wrong order is repaired in place and recorded only once.
- **Use-it builder:** repeats the same reply without English on the tiles. The learner must first identify the vendor's intention, then assemble, hear and say the response.
- **Conversation playback:** vendor and learner turns are separate utterances with a one-second default pause. Lesson 2 inserts a longer pause between finishing the order and asking for the bill.
- **Transfer:** each lesson changes one phrase through the same builder, rather than presenting substitution as passive text. Consolidation transfers use the reduced-support builder.
- **Speaking:** saying the reply is required; recording is not. Pronunciation is not scored.

## Voice contract

The app uses only Thai voices exposed by the device. If two or more are available, the preferred installed/default voice is assigned to the vendor and the next Thai voice to the learner. If only one is available, both roles use it with a small rate difference and the visual/pause separation remains explicit. Pitch is never manipulated because Thai is tonal. Native recordings and native review are not prerequisites.

## Week 1 workload

| Task | Core | Ordinary repair | Total |
|---|---:|---:|---:|
| Lesson 1 — order food and ask for no spice | 8 min | 2 min | 10 min |
| Lesson 2 — eat here, order water and ask to pay | 10 min | 2 min | 12 min |
| Lesson 3 — ask for help when you miss something | 10 min | 2 min | 12 min |
| Week 1 mix | 8 min | 2 min | 10 min |
| Week 1 check | 10 min | 2 min | 12 min |
| Next-day / one-week / one-month review | 2 / 4 / 6 min | 1 / 1 / 2 min | 3 / 5 / 8 min |

The two-review daily governor remains. These figures describe expected active learner time, not a target that adds filler.

## Copy rules

- Use direct learner language: “Build your reply,” “Hear the vendor,” “Try again,” “Ready tomorrow.”
- Do not expose implementation terms such as authority, schema, evidence, cold form, bounded workload or frozen registry.
- Describe communication problems as a learner would: “You did not understand,” “They spoke too quickly,” or “You missed it.”
- Keep the device-audio limitation once in onboarding/setup/About; do not repeat it throughout lessons.
- All complete learner and partner Thai lines remain male-polite with `ครับ`; `ค่ะ` is forbidden.

## Migration and preservation

- No learner-state schema change is introduced.
- In-session builder state is ephemeral and is reconstructed from existing action evidence after reload.
- Old partial `map`, `objective`, `roleplay`, `resolution` and `record` resumes route forward into the new pair, guided or substitution stages.
- Existing completed Week 1 records remain valid.
- Gate forms, delayed-form rotation, first-attempt scoring, repair separation, Bangkok dates, import validation and corruption quarantine remain unchanged.
- Phase 1 reading state, SRS, mastery, tokens, streaks and optional activities remain untouched.

## Release gates

`validateV840ConversationBuilderContracts()` and `tools/conversation-smoke.js` must verify:

- all Week 1 workload figures;
- builder order, retry and completion behavior;
- supported then less-supported building;
- successful device speech before action credit;
- distinct role voices when two Thai voices exist;
- the single-voice rate fallback and absence of pitch manipulation;
- explicit conversation pauses;
- male-polite Thai and no remote/authored audio;
- unchanged schema-2 import, migration, resume, gate and delayed-form contracts.
