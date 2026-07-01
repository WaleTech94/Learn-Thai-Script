# v6 UI Pass Notes

## Screens reviewed

- Today route, Course Map and optional practice.
- Practice.
- Tones.
- Read.
- Progress and settings.
- Bottom navigation on narrow mobile widths.

## Main UI problems found

- The first action on Today was not summarised before the step list.
- Practice was a single undifferentiated grid.
- Library mixed controlled reading, optional phrases, class reference and progress diagnostics.
- Streaks mixed progress, settings and optional extras under a narrow label.
- Thai class colours were also used for generic progress, rewards, heatmaps and tab accents.
- Bottom navigation labels made Read look like speaking and Progress look like only streaks/shop.

## Summary of changes made

- Added semantic UI tokens and reusable hierarchy/action/status classes in `index.html`.
- Added a display-only Today route summary card derived from existing route helpers.
- Renamed the bottom tabs to Today, Practice, Tones, Read and Progress while preserving internal routes.
- Reorganised Practice into due review, script/reading, tone/hearing/recall and transfer groups.
- Reframed Tones around the written Tone route and moved class reference there.
- Reframed Library as Read and moved the skill profile into Progress.
- Changed generic colour/status uses away from `--mid`, `--high` and `--low`.
- Added tab `aria-label` values and active `aria-current="page"` handling.

## Second visual engagement pass

### Visual direction

- Completed v6.0.0 as a premium dark-mode product surface: dark Thai script dojo, neon ink, night-market glow and tactile mobile cards.
- Kept the first-pass information architecture intact: Today, Practice, Tones, Read and Progress keep the same jobs and existing launch IDs.
- Kept visual reward cues small and learning-bound: card glows, completion pulses, brief reward bursts and token glints without casino mechanics.

### Palette and surface changes

- Added a richer semantic UI palette for generic UI: violet/cyan primary, blue review, teal reading, orange transfer/reward, amber progress/warning, green success and rose danger.
- Added aurora CSS background layers, glass/raised surfaces, stronger hairline borders, reusable card/action styles and tactile press states.
- Kept `--mid`, `--high` and `--low` reserved for Thai class/tone meaning: class chips, class-coloured glyphs, class tiles, letter wall class states and tone/class examples.

### Screen-specific upgrades

- Today route summary became a `hero-card route-hero` with route state classes, progress ring/bar, dominant primary CTA, optional-next hint and richer done/recovery/foundation visuals.
- Optional practice chips gained semantic accents by job while staying visually secondary to the route hero.
- Practice groups now read as a training arcade: due review, script/reading, tone/hearing/recall and transfer panels each have semantic accents and tactile action cards.
- Tones now has a tone-lab treatment with a six-step written route, lab-note TTS safety copy, badge shelf styling and class-reference tiles that still use true class colours.
- Read now prioritises controlled reading as premium reading cards, keeps bonus phrases visually secondary and marks optional phrase work as enrichment.
- Progress now reads as a trophy shelf: richer KPI chips, token glint, improved letter wall/progress surfaces, starfield-style skill profile, semantic heatmap and polished danger zone.
- Bottom navigation gained active pills, icon glow, press state, safe-area glass and display-only due badges from existing due-count helpers.
- Overlay/review stage gained dark glass treatment, stronger progress bar, clearer correct/wrong/weak feedback and brief reward bursts for major completions only.

## v6.0.2 Answer-Feedback Refinement

- Wrong objective quiz/review answers now pause on a rose feedback panel until the learner taps Continue; correct-answer dwell timing remains unchanged.
- Class-question misses now show structured class feedback: answer line, mid/high class tiles, low-class default reminder and separated mid-class chant words.
- Quiz stages top-align the prompt/options cluster, simple 2- or 3-option text choices stack full-width, and 4-option Thai/component-grid choices keep their grid.
- Neutral class prompts gain their class colour only after answer settle, preserving the no-colour-giveaway rule.

## v6.0.3 Progress Honesty and Interaction Weight

- Today route progress now uses actual step pips instead of the fixed 0/34/67/100 percent ring; the small bar mirrors the same completed-step fraction.
- The route hero foregrounds review when 25+ due cards are waiting before the first review slice, while keeping v5.2.5 lesson-blocking rules unchanged.
- Takeable mastery checks now show one concrete ready state across hero and route card, naming the lesson the check unlocks.
- Practice owns the display-only due badge; ordinary due cards use the review accent and danger red is reserved for the 45+ overload state.
- The letter wall counter now reports started and known counts from the same `learning` / `growing` / `mastered` tile states it renders.
- Lesson stages top-align, Back is visually quiet, disabled CTAs are flat/inert, Quick decode model strings render as numbered steps, and transliteration uses a muted-warm non-link colour.
- Progress-tab polish: `Test notes` became `Notes`, Freeze moved out of the heatmap header, and the Progress summary row uses a chevron affordance instead of the word `Open`.

### Motion and rewards

- Added controlled keyframes for card entry, soft pop, glow pulse, shimmer, check pulse, wrong nudge, token glint and short completion bursts.
- Added `triggerRewardBurst()` for major completions only: lesson completion, daily win, tone badge, checkpoint pass, Letters boss and fluency/read completion.
- Added a reduced-motion fallback that collapses animations and transitions for users who prefer reduced motion.

### Inline-style cleanup result

- Baseline inline style attributes before editing: 193.
- After the second pass: 127.
- Removed high-impact static shell styles from fixed screen markup and replaced them with reusable utility/component classes.
- Remaining inline styles are concentrated in dynamic widths/custom values, generated SVG/progress fills, deliberate Thai class-colour teaching spans, recording/audio display toggles and legacy lesson/player templates that were not refactored in this no-architecture-change pass.

## Intentionally deferred work

- A broader component split or module refactor.
- New curriculum, Phase 2 content, new drills, backend services or analytics.
- Any change to review scheduling, state migration or lesson gates.
- Real-device installed iPhone QA after deploy.

## Manual iPhone/PWA checks still required

- Installed iPhone PWA safe-area top/bottom chrome.
- Narrow iPhone bottom-tab label fit.
- Today route card and End today redirect behaviour with fresh, review-due, recovery and foundation-refresh states.
- Service-worker update flow after the `aan-thai-v6-0-3` cache lands.

## Scope confirmation

The v6.0.0 UI work changed visual hierarchy, copy, styling, navigation labelling, display-only route summary output, tactile feedback and completion visuals. Curriculum sequencing, SRS/review scheduling, state key, migration semantics, lesson gates, vocabulary roles and Phase 1 pedagogy were not changed.
