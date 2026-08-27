# v8.1.0 Street Arcade

## Purpose

v8.1.0 adds optional short-form play and more worthwhile cosmetic spenders after the Phase 1 visual release. It does not create a second progression system: lessons still determine what can appear, the existing drills remain free, and arcade play never changes SRS, mastery, blockers or required Today work.

## Cabinets

- **Parcel Sort** — free after Lesson 2. Ten class/ending-job sorting rounds. Thai prompts remain neutral until feedback so class colour cannot reveal the answer.
- **Night Market Hunt** — 50 tokens after Lesson 4. Eight device-voice-to-Thai sign rounds using covered lesson words. This stays explicitly practice, not listening proof.
- **Tuk-Tuk Tone Run** — 60 tokens after Lesson 13. Ten Thai-to-tone lane choices with the full class → mark → live/dead → length → tone route shown after each answer.

Every session rebuilds from `state.done` through the existing taught-glyph, mechanism and `thaiItemPrereqsMet()` checks. `FRESH_DECODE`, `ASSESSMENT_BANK` and `RETENTION_DECODE_BANK` are excluded. Weakness scores influence sampling, while personal best, combo and stars reuse optional entries under `drillLog`. If an exact unlock gate has fewer unique eligible prompts than the cabinet's advertised length, the session repeats a covered prompt rather than shortening the cabinet or reaching ahead into untaught material.

## Retention and economy boundary

Owned, lesson-eligible cabinets can appear as one optional featured Practice item after required Today work is clear. Games award no repeatable tokens, do not complete daily depth, do not extend streaks and do not create review cards. Ownership reuses `packs[]`; the free Parcel Sort cabinet needs no purchase record.

## Theme expansion

- **Ekkamai Sunset** — 40 tokens.
- **Yaowarat Neon** — 50 tokens.
- **Tuk-Tuk Chrome** — 60 tokens.

The new themes and existing paid themes receive code-native background motifs that carry into arcade scenes. Shop previews are temporary and never write to learner state. Thai mid/high/low class colours remain reserved for class meaning.

## Sound design

Arcade start, correct, wrong, combo and completion events use synthesized Web Audio only. Parcel Sort uses crisp sorting clicks, Night Market Hunt uses bell-like cues and Tuk-Tuk Tone Run uses a short engine sweep. The existing Default/Ranat selection and Progress sound toggle control all arcade sounds; no audio asset or network request is added.

## Release guard

`validateV81ArcadeContracts()` verifies game ids, gates and prices; advertised round counts at the exact unlock gates; early pool supply; target prerequisite safety; sealed-bank isolation; `packs[]`/`drillLog` reuse; no progression or token mutation; synthesized sound boundaries; theme tokens/swatches; accessible cabinet/preview names; reduced motion; current version identity; and a real Parcel Sort round render when a DOM is available.

`node tools/arcade-smoke.js` is the deterministic interaction gate. It starts and completes all three games with correct and wrong answers, checks rendered feedback and saved records, confirms that progression/currency/SRS/mastery/streak state stays unchanged, exercises temporary theme restore, and verifies distinct Default scheduling plus the Ranat and muted sound paths.
