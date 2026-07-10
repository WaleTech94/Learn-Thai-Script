# v8.0.0 Bangkok Street Atlas visual overhaul

## Direction

The app now reads as a contemporary Bangkok script atlas rather than a generic dark glass dashboard. Its visual vocabulary is route maps, printed tickets, workbook tabs, signboards, stamps and collected letter tiles. The work stays code-native inside `index.html`: no image asset, remote font, runtime request or build step was added.

## Learner-facing changes

- อ่าน / ÀAN masthead with a compact typographic lockup.
- Subtle route-grid background and solid, shaped surfaces instead of aurora glass.
- Printed Today ticket plus a transit line for required work.
- Two-column optional-practice field guide on narrow phones.
- Colour-tabbed Practice workbook sections.
- Six-stop written Tone route board.
- Reading signboards with large decorative Thai marks.
- Ticketed Phase 1 mastery map, coloured progress stamps and collectible letter wall.
- Ruled lesson sheet, tactile answer cards and shaped completion pieces.
- Real theme swatches in the unlock shop.

## Retention and dopamine boundary

The pass makes existing progress more visible instead of adding new incentives. Route stops change with the current daily state, completed letters become collected wall pieces, milestone feedback has a distinct visual shape, and different learning areas become easier to recognise on return. Existing streak, combo, token, completion, SRS, delayed-retention and maintenance rules are unchanged.

## Accessibility and theme rules

- Thai class colours remain reserved for mid/high/low teaching meaning.
- Decorative Thai screen and reading marks use `aria-hidden="true"`.
- Reduced-motion collapses the existing animations and transitions.
- The default, free and paid themes reuse the same Street Atlas structure with theme-specific atmosphere tokens.
- Mobile verification targets 360px, 390px and 430px widths, with the iPhone installed-PWA safe areas preserved.

## Contract

`validateV8VisualContracts()` checks the v8 identity marker and tokens, solid shared surfaces, glass retirement, Today ticket/route rail, ruled lesson sheet, theme swatches, class-colour isolation, accessibility markers, masthead, current version identity and the absence of a new visual learner-state key.
