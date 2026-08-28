# Bangkok Conversation Foundation — Form and Recurrence Manifest

**Manifest revision:** 1.0
**Date:** 2026-08-28
**Course:** `bangkok-conversation-foundation-v1`
**Curriculum revision:** `1`
**Status:** frozen at revision 1; all freeze assertions passed

This file is the binding cross-course assignment layer for the canonical implementation specification and the four week registries. It freezes the ordered main-task path, scored form membership, delayed-maintenance forms, recurrence evidence, assessment-signature separation and workload simulation inputs. App code is outside this document's scope.

## 1. Immutable 40-task path

The `cursor` is the zero-based row below. `nominalOffset` is display-only and is measured in Bangkok calendar days from the first credited L01 completion. A missed day never skips a row or creates authority. Actual `+1`, `+7` and `+30` dates derive from actual completion/pass dates.

Every lesson includes four minutes of ordinary repair; every consolidation includes five; every Week 1–7 gate and the final gate include eight. `core + repair = total` in every row.

| Cursor | Offset | Authoritative task ID | Kind | Core | Repair | Total |
|---:|---:|---|---|---:|---:|---:|
| 0 | 0 | `cv1.lesson.w01.l01.food-order` | lesson | 23 | 4 | 27 |
| 1 | 1 | `cv1.lesson.w01.l02.food-options` | lesson | 25 | 4 | 29 |
| 2 | 2 | `cv1.lesson.w01.l03.repair` | lesson | 26 | 4 | 30 |
| 3 | 3 | `cv1.activity.w01.consolidation` | consolidation | 23 | 5 | 28 |
| 4 | 4 | `cv1.gate.w01` | gate | 22 | 8 | 30 |
| 5 | 7 | `cv1.lesson.w02.l04.taxi-destination` | lesson | 23 | 4 | 27 |
| 6 | 8 | `cv1.lesson.w02.l05.taxi-route` | lesson | 25 | 4 | 29 |
| 7 | 9 | `cv1.lesson.w02.l06.street-directions` | lesson | 25 | 4 | 29 |
| 8 | 10 | `cv1.activity.w02.consolidation` | consolidation | 23 | 5 | 28 |
| 9 | 11 | `cv1.gate.w02` | gate | 22 | 8 | 30 |
| 10 | 14 | `cv1.lesson.w03.l07.cafe` | lesson | 25 | 4 | 29 |
| 11 | 15 | `cv1.lesson.w03.l08.checkout` | lesson | 25 | 4 | 29 |
| 12 | 16 | `cv1.lesson.w03.l09.market` | lesson | 25 | 4 | 29 |
| 13 | 17 | `cv1.activity.w03.consolidation` | consolidation | 23 | 5 | 28 |
| 14 | 18 | `cv1.gate.w03` | gate | 22 | 8 | 30 |
| 15 | 21 | `cv1.lesson.w04.l10.introduction` | lesson | 25 | 4 | 29 |
| 16 | 22 | `cv1.lesson.w04.l11.limited-thai` | lesson | 25 | 4 | 29 |
| 17 | 23 | `cv1.lesson.w04.l12.lunch-plan` | lesson | 25 | 4 | 29 |
| 18 | 24 | `cv1.activity.w04.consolidation` | consolidation | 23 | 5 | 28 |
| 19 | 25 | `cv1.gate.w04` | gate | 22 | 8 | 30 |
| 20 | 28 | `cv1.lesson.w05.l13.reception` | lesson | 25 | 4 | 29 |
| 21 | 29 | `cv1.lesson.w05.l14.delivery` | lesson | 25 | 4 | 29 |
| 22 | 30 | `cv1.lesson.w05.l15.maintenance` | lesson | 25 | 4 | 29 |
| 23 | 31 | `cv1.activity.w05.consolidation` | consolidation | 23 | 5 | 28 |
| 24 | 32 | `cv1.gate.w05` | gate | 22 | 8 | 30 |
| 25 | 35 | `cv1.lesson.w06.l16.clothing` | lesson | 25 | 4 | 29 |
| 26 | 36 | `cv1.lesson.w06.l17.delivery-correction` | lesson | 25 | 4 | 29 |
| 27 | 37 | `cv1.lesson.w06.l18.repair-escalation` | lesson | 26 | 4 | 30 |
| 28 | 38 | `cv1.activity.w06.consolidation` | consolidation | 23 | 5 | 28 |
| 29 | 39 | `cv1.gate.w06` | gate | 22 | 8 | 30 |
| 30 | 42 | `cv1.lesson.w07.l19.pharmacy-facts` | lesson | 26 | 4 | 30 |
| 31 | 43 | `cv1.lesson.w07.l20.label-language` | lesson | 24 | 4 | 28 |
| 32 | 44 | `cv1.lesson.w07.l21.urgent-help` | lesson | 26 | 4 | 30 |
| 33 | 45 | `cv1.activity.w07.consolidation` | consolidation | 24 | 5 | 29 |
| 34 | 46 | `cv1.gate.w07` | gate | 22 | 8 | 30 |
| 35 | 49 | `cv1.lesson.w08.l22.hours-services` | lesson | 25 | 4 | 29 |
| 36 | 50 | `cv1.lesson.w08.l23.service-problem` | lesson | 25 | 4 | 29 |
| 37 | 51 | `cv1.lesson.w08.l24.bangkok-day` | lesson | 26 | 4 | 30 |
| 38 | 52 | `cv1.activity.w08.consolidation` | consolidation | 25 | 5 | 30 |
| 39 | 53 | `cv1.gate.final` | final gate | 30 | 8 | 38 |

Offsets 5–6, 12–13, 19–20, 26–27, 33–34, 40–41, 47–48 and 54–55 are optional field rehearsal, catch-up or rest labels only. They are not task IDs and hold no completion authority.

## 2. Required consolidation forms

Every required consolidation has one immutable form. Four ordinary interactions expand in source order to eight objectives (`.01/.02` through `.07/.08`), producing exactly four cue-intent and four contextual-response items. Context IDs are obtained by replacing `interaction` with `context` in the interaction ID; the exact card is frozen below. These signatures are consolidation-only and occur in no lesson, delayed check, gate or distractor.

| Interaction ID | Exact context card | Cue → accepted set / three-option set |
|---|---|---|
| `cv1.interaction.consolidation.w01.01` | Food-counter cue; its meaning is unknown, so choose the explicit non-understanding repair. | `cv1.cue-variant.food.what-would-you-like.v02` → `cv1.accepted.w01.l03.dont-understand` / `cv1.options.w01.l03.meaning-unknown` |
| `cv1.interaction.consolidation.w01.02` | Food-counter cue is too fast; request slower speech. | `cv1.cue-variant.food.spice-choice.v02` → `cv1.accepted.w01.l03.slower` / `cv1.options.w01.l03.too-fast` |
| `cv1.interaction.consolidation.w01.03` | Food-court display; choose the pointed item. | `cv1.cue-variant.food.what-would-you-like.v01` → `cv1.accepted.w01.l01.order-this` / `cv1.options.w01.l01.order` |
| `cv1.interaction.consolidation.w01.04` | Food-hall drink counter; ask for one taught water. | `cv1.cue-variant.food.drink-choice.v01` → `cv1.accepted.w01.l02.water-one` / `cv1.options.w01.l02.water` |
| `cv1.interaction.consolidation.w02.01` | Late-afternoon taxi; fixed destination is Ekkamai Station. | `cv1.cue-variant.transport.destination-question.v01` → `cv1.accepted.w02.l04.destination-ekkamai-station` / `cv1.options.w02.l04.destination` |
| `cv1.interaction.consolidation.w02.02` | Driver proposes no meter; require the meter. | `cv1.cue-variant.transport.no-meter-proposal.v01` → `cv1.accepted.w02.l04.meter-request` / `cv1.options.w02.l04.meter` |
| `cv1.interaction.consolidation.w02.03` | Route card requires straight travel. | `cv1.cue-variant.transport.which-way.v01` → `cv1.accepted.w02.l05.straight` / `cv1.options.w02.l05.straight` |
| `cv1.interaction.consolidation.w02.04` | Station information point; the learner needs the BTS station. | `cv1.cue-variant.location.offer-help.v01` → `cv1.accepted.w02.l06.ask-bts` / `cv1.options.w02.l06.ask-place` |
| `cv1.interaction.consolidation.w03.01` | Convenience checkout; one water is the only extra item. | `cv1.cue-variant.checkout.extra-item.v02` → `cv1.accepted.checkout.water-one` / `cv1.options.checkout.water-one` |
| `cv1.interaction.consolidation.w03.02` | Café drink is fixed as not sweet. | `cv1.cue-variant.cafe.sweetness.v01` → `cv1.accepted.cafe.sweetness-none` / `cv1.options.cafe.sweetness-none` |
| `cv1.interaction.consolidation.w03.03` | Convenience checkout; no bag is wanted. | `cv1.cue-variant.checkout.bag.v01` → `cv1.accepted.checkout.no-bag` / `cv1.options.checkout.no-bag` |
| `cv1.interaction.consolidation.w03.04` | Open market; unit price is known and the fixed quantity is two bags. | `cv1.cue-variant.market.unit-price-statement.v01` → `cv1.accepted.market.take-two` / `cv1.options.market.take-two` |
| `cv1.interaction.consolidation.w04.01` | A new male colleague asks the learner's fixed course name. | `cv1.cue-variant.introduction.name.v01` → `cv1.accepted.introduction.name-full` / `cv1.options.introduction.name-full` |
| `cv1.interaction.consolidation.w04.02` | A colleague asks whether the learner can speak Thai; use the bounded limited-Thai phrase. | `cv1.cue-variant.limited-thai.ability.v01` → `cv1.accepted.limited-thai.ability-full` / `cv1.options.limited-thai.ability-full` |
| `cv1.interaction.consolidation.w04.03` | Noon does not work for lunch; counter with 12:30 only. | `cv1.cue-variant.lunch.time.v01` → `cv1.accepted.lunch.counter-twelve-thirty` / `cv1.options.lunch.counter-twelve-thirty` |
| `cv1.interaction.consolidation.w04.04` | Lunch meeting place is the front of the school; time is already settled. | `cv1.cue-variant.lunch.place.v02` → `cv1.accepted.lunch.meet-school` / `cv1.options.lunch.meet-school` |
| `cv1.interaction.consolidation.w05.01` | Fictional condo desk; the keycard does not work. | `cv1.cue-variant.w05.l13.help.v02` → `cv1.accept.w05.l13.keycard-not-working` / `cv1.options.w05.l13.keycard` |
| `cv1.interaction.consolidation.w05.02` | Fictional delivery; learner is in the lobby. | `cv1.cue-variant.w05.l14.location.v01` → `cv1.accept.w05.l14.location-lobby` / `cv1.options.w05.l14.location-lobby` |
| `cv1.interaction.consolidation.w05.03` | Fictional delivery should be left in the lobby. | `cv1.cue-variant.w05.l14.dropoff.v02` → `cv1.accept.w05.l14.leave-lobby` / `cv1.options.w05.l14.leave-lobby` |
| `cv1.interaction.consolidation.w05.04` | Delivery payment branch is fixed as cash. | `cv1.cue-variant.w05.l14.payment.v01` → `cv1.accept.w05.l14.pay-cash` / `cv1.options.w05.l14.pay-cash` |
| `cv1.interaction.consolidation.w06.01` | Male seller; the taught item choice is the shirt. | `cv1.cue-variant.w06.l16.item.v02` → `cv1.accept.w06.l16.want-shirt` / `cv1.options.w06.l16.shirt` |
| `cv1.interaction.consolidation.w06.02` | Fictional delivery total says 100; fixed correct total is 80. | `cv1.cue-variant.w06.l17.price.v01` → `cv1.accept.w06.l17.correct-eighty` / `cv1.options.w06.l17.correct-eighty` |
| `cv1.interaction.consolidation.w06.03` | Ordinary repair has occurred; confirm the lobby meaning. | `cv1.cue-variant.w06.l18.detail.v04` → `cv1.accept.w06.l18.confirm-lobby` / `cv1.options.w06.l18.confirm-lobby` |
| `cv1.interaction.consolidation.w06.04` | English is unavailable after ordinary repair; request typed translation and return to the task. | `cv1.cue-variant.w06.l18.english.v02` → `cv1.accept.w06.l18.type-translation` / `cv1.options.w06.l18.type-translation` |
| `cv1.interaction.consolidation.w07.01` | Fictional adult has a headache; no learner health fact is requested or stored. | `cv1.cue-variant.health.symptom.v01` → `cv1.accepted.health.symptom.headache-full` / `cv1.option-set.health.headache-full` |
| `cv1.interaction.consolidation.w07.02` | Fictional-label warning is visible; confirm one tablet each time exactly as heard. | `cv1.cue-variant.label.amount.one.v01` → `cv1.accepted.label.amount.one-full` / `cv1.option-set.label.amount.one` |
| `cv1.interaction.consolidation.w07.03` | Fictional unconscious person at Ekkamai Station, Exit 2; state the fixed event. | `cv1.cue-variant.emergency.fact.v01` → `cv1.accepted.emergency.fact.full` / `cv1.option-set.emergency.fact.full` |
| `cv1.interaction.consolidation.w07.04` | Fictional emergency card already supplies Ekkamai Station, Exit 2; give that exact location. | `cv1.cue-variant.emergency.location.v01` → `cv1.accepted.emergency.location.full` / `cv1.option-set.emergency.location.full` |
| `cv1.interaction.consolidation.w08.01` | Fictional room 123; the parcel shown belongs to room 213. | `cv1.cue-variant.service.wrong-item.v01` → `cv1.accepted.service.wrong-item-full` / `cv1.option-set.service.wrong-full` |
| `cv1.interaction.consolidation.w08.02` | Fictional room 123 has not received the requested towel. | `cv1.cue-variant.service.missing.v01` → `cv1.accepted.service.missing-towel` / `cv1.option-set.service.missing-towel` |
| `cv1.interaction.consolidation.w08.03` | Staff has heard the fictional parcel problem; ask for a check. | `cv1.cue-variant.service.check.v01` → `cv1.accepted.service.check-full` / `cv1.option-set.service.check-full` |
| `cv1.interaction.consolidation.w08.04` | Market price per bag is known; take exactly two bags. | `cv1.cue-variant.market.unit-price-statement.v04` → `cv1.accepted.market.take-two` / `cv1.options.market.take-two` |

For every week `WW`, `cv1.form.consolidation.wWW.a` contains `cv1.interaction.consolidation.wWW.01..04`; objective IDs are `cv1.objective.consolidation.wWW.a.01..08`. There is no sampled form and no alternate consolidation form.

The six answer-before-reveal prompts and two transfers are also immutable. A semicolon inside a transfer denotes ordered turns with separate model reveal; it never joins two learner answers into one utterance.

| Week | `cv1.spoken.consolidation.wWW.01..06` in order | `cv1.transfer.consolidation.wWW.01..02` in order |
|---|---|---|
| W1 | `w01.l01.order-this`; `w01.l01.not-spicy`; `w01.l02.dine-here`; `w01.l02.water-one`; `w01.l02.bill`; `w01.l03.again` | `w01.l01.order-gaprao-chicken`; `w01.l03.slow-again` |
| W2 | `w02.l04.destination-ekkamai-station`; `w02.l04.meter-request`; `w02.l05.straight`; `w02.l05.turn-left-ahead`; `w02.l05.stop-here`; `w02.l06.ask-bts` | `w02.l06.ask-toilet`; `w02.l05.turn-right-ahead` |
| W3 | `cafe.order-americano`; `cafe.temperature-iced`; `cafe.sweetness-none`; `checkout.no-bag`; `checkout.pay-card-question`; `market.take-two-bags` | `cafe.order-latte; cafe.sweetness-less`; `checkout.pay-qr-question` |
| W4 | `introduction.name-full`; `introduction.origin-full`; `introduction.job-full`; `limited-thai.ability-full`; `lunch.counter-twelve-thirty`; `lunch.meet-restaurant` | `introduction.job-teacher`; `lunch.counter-at-twelve-thirty; lunch.meet-school` |
| W5 | `w05.l13.keycard-not-working`; `w05.l13.room-a`; `w05.l13.show-card`; `w05.l14.leave-lobby`; `w05.l15.aircon-not-working`; `w05.l15.allow-entry` | `w05.l13.lift-not-working`; `w05.l15.time-half` |
| W6 | `w06.l16.want-shirt`; `w06.l16.size-l`; `w06.l16.ask-black`; `w06.l17.wrong-order`; `w06.l17.missing-water`; `w06.l18.confirm-lobby` | `w06.l17.correct-size-l`; `w01.l03.dont-understand; w01.l03.again; w06.l18.type-translation` |
| W7 | `health.symptom.headache-full`; `health.fever.yes-full`; `health.allergy.unsure-full`; `label.amount.one-full`; `label.timing.after`; `emergency.location.full` | `label.combined.two-after`; `emergency.call-ambulance.full` |
| W8 | `hours.ask-opening-tomorrow`; `hours.ask-closing-today`; `service.ask-laundry-full`; `service.wrong-item-full`; `service.missing-towel`; `service.check-full` | `w02.l05.stop-here; market.take-two-bags; w05.l14.leave-lobby`; `w01.l03.dont-understand; w01.l03.again; w06.l18.type-translation` |

W8 transfer `.01` requires the same visible, learner-controlled Taxi → Market → Delivery transition cards as L24; each scene is attempted and revealed separately. It is never rendered as one continuous unexplained exchange.

Every shorthand in this table expands by prefixing `cv1.response.`. The weakness-repair pool is the exact union of the week's four consolidation interactions and six spoken prompts. Selection is highest stored function weakness, then lowest stable ID; empty diagnostics choose the lowest stable ID. It contains one required item, may repeat after a miss, and creates no scored or transfer evidence.

## 3. Scored gate forms

Each Week 1–7 form contains exactly 12 immutable objective IDs. A/B/C forms are pairwise source- and signature-disjoint. The final contains exactly 20 objectives per form.

### 3.1 Closed Week 1–6 forms

| Gate | Exact forms | Binding membership authority | Objectives / pass |
|---|---|---|---:|
| `cv1.gate.w01` | `cv1.form.gate.w01.a/.b/.c` | W1–W2 registry §12.3 | 12 / 10 |
| `cv1.gate.w02` | `cv1.form.gate.w02.a/.b/.c` | W1–W2 registry §12.6 | 12 / 10 |
| `cv1.gate.w03` | `cv1.form.gate.w03.a/.b/.c` | W3–W4 registry §12.4 | 12 / 10 |
| `cv1.gate.w04` | `cv1.form.gate.w04.a/.b/.c` | W3–W4 registry §12.5 | 12 / 10 |
| `cv1.gate.w05` | `cv1.form.gate.w05.a/.b/.c` | W5–W6 registry §14.4 | 12 / 10 |
| `cv1.gate.w06` | `cv1.form.gate.w06.a/.b/.c` | W5–W6 registry §14.4 | 12 / 10 |

### 3.2 Week 7 earlier-unit sources and forms

These six ordinary interactions are sealed for the W7 gate. Their context IDs are obtained by replacing `interaction` with `context`; the exact cards below make generic cues uniquely gradable.

| Interaction ID | Exact context card | Cue → accepted / options | Unit evidence |
|---|---|---|---|
| `cv1.interaction.assessment.w07.cumulative.a.01` | New office-canteen context; the fixed meal goal is not spicy. | `food.spice-choice.v03` → `accepted.w01.l01.not-spicy` / `options.w01.l01.spice` | W1 |
| `cv1.interaction.assessment.w07.cumulative.a.02` | New late-taxi context; fixed destination is Ekkamai Station. | `transport.destination-question.v04` → `accepted.w02.l04.destination-ekkamai-station` / `options.w02.l04.destination` | W2 |
| `cv1.interaction.assessment.w07.cumulative.b.01` | New bookshop-checkout context; total is known and fixed payment method is cash. | `checkout.payment.v03` → `accepted.checkout.pay-cash` / `options.checkout.pay-cash` | W3 |
| `cv1.interaction.assessment.w07.cumulative.b.02` | New condo-small-talk context; answer the Thai-ability question with the bounded limited-Thai phrase. | `limited-thai.ability.v04` → `accepted.limited-thai.ability-short` / `options.limited-thai.ability-short` | W4 |
| `cv1.interaction.assessment.w07.cumulative.c.01` | New parcel-handoff context; fixed drop-off is the lobby. | `w05.l14.dropoff.v02` → `accept.w05.l14.leave-lobby` / `options.w05.l14.leave-lobby` | W5 |
| `cv1.interaction.assessment.w07.cumulative.c.02` | New maintenance-handoff context; ordinary repair occurred and fictional room 123 must be confirmed. | `w06.l18.detail.v06` → `accept.w06.l18.confirm-room-a` / `options.w06.l18.confirm-room` | W6 |

Every abbreviated ID in the cue/authority columns expands under `cv1.cue-variant.` or `cv1.` exactly as its prefix indicates.

```text
cv1.form.gate.w07.a =
  cv1.manifest.contribution.w07-unit-gate.a,
  cv1.interaction.assessment.w07.cumulative.a.01,.02

cv1.form.gate.w07.b =
  cv1.manifest.contribution.w07-unit-gate.b,
  cv1.interaction.assessment.w07.cumulative.b.01,.02

cv1.form.gate.w07.c =
  cv1.manifest.contribution.w07-unit-gate.c,
  cv1.interaction.assessment.w07.cumulative.c.01,.02
```

The three contribution IDs expand exactly under W7–W8 registry §9.2. Each form has six ordinary interactions/twelve objectives, at least two objectives from every W7 lesson and four earlier-unit objectives.

### 3.3 Final earlier-unit sources and forms

Each final cumulative source is new, sealed and ordinary. The cue-intent objective carries the cue's owning-unit evidence; the response objective carries the accepted response's owning-unit evidence. Thus each four-interaction group samples W1–W6 despite having only eight objectives.

| Interaction ID | Exact context card | Cue → accepted / options | Objective provenance |
|---|---|---|---|
| `cv1.interaction.assessment.final.cumulative.a.01` | New colleague-service context; speech is too fast. | `limited-thai.speed.v04` → `accepted.repair.slower` / `options.repair.slower` | W4 intent; W1 response |
| `cv1.interaction.assessment.final.cumulative.a.02` | New airport-taxi context; fixed destination is Ekkamai Station. | `transport.destination-question.v04` → `accepted.w02.l04.destination-ekkamai-station` / `options.w02.l04.destination` | W2/W2 |
| `cv1.interaction.assessment.final.cumulative.a.03` | New delivery-payment context; fixed method is cash. | `w05.l14.payment.v01` → `accepted.checkout.pay-cash` / `options.checkout.pay-cash` | W5 intent; W3 response |
| `cv1.interaction.assessment.final.cumulative.a.04` | New fictional order desk; shown item is not the learner's order. | `w06.l17.order.v05` → `accept.w06.l17.wrong-order` / `options.w06.l17.wrong-order` | W6/W6 |
| `cv1.interaction.assessment.final.cumulative.b.01` | New colleague-lobby context; meaning is not understood. | `limited-thai.understanding.v03` → `accepted.repair.dont-understand` / `options.repair.dont-understand` | W4 intent; W1 response |
| `cv1.interaction.assessment.final.cumulative.b.02` | New taxi-junction context; route continues straight. | `transport.which-way.v02` → `accepted.w02.l05.straight` / `options.w02.l05.straight` | W2/W2 |
| `cv1.interaction.assessment.final.cumulative.b.03` | New condo-delivery payment context; fixed method is QR. | `w05.l14.payment.v02` → `accepted.checkout.pay-qr` / `options.checkout.pay-qr` | W5 intent; W3 response |
| `cv1.interaction.assessment.final.cumulative.b.04` | New service-time context; ordinary repair occurred and 12:30 must be confirmed. | `w06.l18.detail.v05` → `accept.w06.l18.confirm-time-half` / `options.w06.l18.confirm-half` | W6/W6 |
| `cv1.interaction.assessment.final.cumulative.c.01` | New school-office context; speech is too fast. | `limited-thai.speed.v02` → `accepted.repair.slower` / `options.repair.slower` | W4 intent; W1 response |
| `cv1.interaction.assessment.final.cumulative.c.02` | New evening-taxi context; driver declines the meter. | `transport.no-meter-proposal.v02` → `accepted.w02.l04.meter-request` / `options.w02.l04.meter` | W2/W2 |
| `cv1.interaction.assessment.final.cumulative.c.03` | New lobby-checkout context; fixed method is QR. | `w05.l14.payment.v01` → `accepted.checkout.pay-qr` / `options.checkout.pay-qr` | W5 intent; W3 response |
| `cv1.interaction.assessment.final.cumulative.c.04` | New fictional delivery desk; one taught water is missing. | `w06.l17.missing.v04` → `accept.w06.l17.missing-water` / `options.w06.l17.missing-water` | W6/W6 |

```text
cv1.form.gate.final.a =
  gate-a.01 from w07.l19,w07.l20,w07.l21,w08.l22,w08.l23,w08.l24,
  cv1.interaction.assessment.final.cumulative.a.01,.02,.03,.04

cv1.form.gate.final.b =
  gate-a.02 from w07.l19,w07.l20,w07.l21,w08.l22,w08.l23,w08.l24,
  cv1.interaction.assessment.final.cumulative.b.01,.02,.03,.04

cv1.form.gate.final.c =
  gate-a.03 from w07.l19,w07.l20,w07.l21,w08.l22,w08.l23,w08.l24,
  cv1.interaction.assessment.final.cumulative.c.01,.02,.03,.04
```

The local six-interaction contribution expands under W7–W8 registry §9.2. Each form has ten interactions/twenty objectives, two objectives from each W7–W8 lesson, all eight units represented, and at least eight sealed recombinations.

## 4. Unit and final +30 forms

Each unit check has two immutable, pairwise-disjoint 12-objective forms and requires 11/12. The final has two disjoint 20-objective forms and requires 17/20. Form selection is persisted before first playback using the parent specification's deterministic form cycle; reload never rerolls it.

| Assignment | Exact forms | Binding membership authority | Due anchor |
|---|---|---|---|
| `cv1.retention.w01.d30` | `cv1.form.retention.w01.d30.a/.b` | W1–W2 registry §13.1 | `gates["cv1.gate.w01"].passedAt + 30` |
| `cv1.retention.w02.d30` | `cv1.form.retention.w02.d30.a/.b` | W1–W2 registry §13.2 | `gates["cv1.gate.w02"].passedAt + 30` |
| `cv1.retention.w03.d30` | `cv1.form.retention.w03.d30.a/.b` | W3–W4 registry §13 | `gates["cv1.gate.w03"].passedAt + 30` |
| `cv1.retention.w04.d30` | `cv1.form.retention.w04.d30.a/.b` | W3–W4 registry §13 | `gates["cv1.gate.w04"].passedAt + 30` |
| `cv1.retention.w05.d30` | `cv1.form.retention.w05.d30.a/.b` | W5–W6 registry §15 | `gates["cv1.gate.w05"].passedAt + 30` |
| `cv1.retention.w06.d30` | `cv1.form.retention.w06.d30.a/.b` | W5–W6 registry §15 | `gates["cv1.gate.w06"].passedAt + 30` |
| `cv1.retention.w07.d30` | `cv1.form.retention.w07.d30.a/.b` | W7–W8 registry §9.3 | `gates["cv1.gate.w07"].passedAt + 30` |
| `cv1.retention.final.d30` | `cv1.form.retention.final.d30.a/.b` | W7–W8 registry §9.3 | `gates["cv1.gate.final"].passedAt + 30` |

Four unit spoken prompts are `cv1.spoken.retention.wWW.d30.01..04`; their exact response suffixes are listed below. Final `cv1.spoken.retention.final.d30.01..08` uses one row per unit. All are answer-before-reveal, unscored and additional to objective items.

| Assignment | Exact spoken response IDs, in order |
|---|---|
| W1 | `w01.l01.order-this`; `w01.l02.water-one`; `w01.l02.bill`; `w01.l03.again` |
| W2 | `w02.l04.destination-ekkamai-station`; `w02.l04.meter-request`; `w02.l05.stop-here`; `w02.l06.ask-bts` |
| W3 | `cafe.order-americano`; `cafe.sweetness-none`; `checkout.pay-cash-question`; `market.take-two-bags` |
| W4 | `introduction.job-full`; `limited-thai.ability-full`; `lunch.counter-twelve-thirty`; `lunch.meet-school` |
| W5 | `w05.l13.keycard-not-working`; `w05.l14.leave-lobby`; `w05.l15.aircon-not-working`; `w05.l15.allow-entry` |
| W6 | `w06.l16.size-l`; `w06.l17.wrong-order`; `w06.l18.confirm-lobby`; `w06.l18.type-translation` |
| W7 | `health.symptom.stomach-full`; `health.allergy.unsure-full`; `label.combined.two-after`; `emergency.call-ambulance.full` |
| Final | `w01.l03.again`; `w02.l04.destination-ekkamai-station`; `checkout.pay-cash-question`; `limited-thai.ability-full`; `w05.l13.keycard-not-working`; `w06.l18.type-translation`; `emergency.location.full`; `service.check-full` |

Every suffix above expands under `cv1.response.`. No spoken prompt enters the objective denominator.

## 5. Exact recurrence closure

An active frame requires introduction, `+1`, `+7`, at least two later answer-before-reveal uses and `+30` eligibility. One later use must change domain when the function is portable; a domain-bound function instead changes setting, interlocutor or goal. This prevents contrived transfers such as forcing café sweetness into a clothing interaction. Week 7 health and emergency facts remain further restricted to explicit fictional safety rehearsals.

The registry ledgers are binding: W1–W2 §15, W3–W4 §14, W5–W6 §16 and W7–W8 §10. The consolidation in §2 is a later scene only for a function actually present in its objective, spoken or transfer membership. The following exact maintenance interactions close the otherwise terminal or single-later-use rows; each uses a fresh `cv1.context.maintenance.<scope>.<slug>` carrying the exact card below.

| Interaction ID | Exact context card | Cue/event → accepted / options; actual reply when learner-led |
|---|---|---|
| `cv1.interaction.maintenance.w03.l09.ask-unit-price` | Different open-air fruit stall; no price is displayed and bargaining has not begun. | `cv1.event.w03.l09.ask-unit-price.v04` → `cv1.accepted.market.ask-this-price` / `cv1.options.market.ask-this-price`; reply `cv1.cue-variant.market.price-followup.v04` |
| `cv1.interaction.maintenance.w03.l09.discount` | Different open market; seller has explicitly offered a reduction. | `cv1.cue-variant.market.bargain-open.v04` → `cv1.accepted.market.discount-plain` / `cv1.options.market.discount-plain` |
| `cv1.interaction.maintenance.w04.l12.accept` | Different colleague lunch invitation; no time or place is being negotiated yet. | `cv1.cue-variant.lunch.invitation.v04` → `cv1.accepted.lunch.accept-okay` / `cv1.options.lunch.accept-okay` |
| `cv1.interaction.maintenance.w05.not-working` | Different building service desk; the fictional lift is the item that has failed. | `cv1.cue-variant.w05.l13.help.v03` → `cv1.accept.w05.l13.lift-not-working` / `cv1.options.w05.l13.lift` |
| `cv1.interaction.maintenance.w05.reception-card` | Different building security desk asks to see the generic practice ID card again. | `cv1.cue-variant.w05.l13.card.v04` → `cv1.accept.shared.here` / `cv1.options.w05.l13.here` |
| `cv1.interaction.maintenance.w05.access` | Different return maintenance visit; fictional entry at 12:30 is explicitly allowed. | `cv1.cue-variant.w05.l15.access.v06` → `cv1.accept.w05.l15.allow-entry` / `cv1.options.w05.l15.allow` |
| `cv1.interaction.maintenance.w07.l19.symptom` | Explicit fictional health-language rehearsal; fictional adult has stomach ache. | `cv1.cue-variant.health.symptom.v04` → `cv1.accepted.health.symptom.stomach-full` / `cv1.option-set.health.stomach-full` |
| `cv1.interaction.maintenance.w07.l19.fever` | Explicit fictional health-language rehearsal; fictional adult has no fever. | `cv1.cue-variant.health.fever.v04` → `cv1.accepted.health.fever.no-full` / `cv1.option-set.health.fever.no-full` |
| `cv1.interaction.maintenance.w07.l19.allergy` | Explicit fictional health-language rehearsal; allergy status is fixed as unsure. | `cv1.cue-variant.health.allergy.v04` → `cv1.accepted.health.allergy.unsure-full` / `cv1.option-set.health.allergy.unsure-full` |
| `cv1.interaction.maintenance.w07.l20.amount` | Fictional-language warning; example says two tablets each time and is not real advice. | `cv1.cue-variant.label.amount.two.v04` → `cv1.accepted.label.amount.two-short` / `cv1.option-set.label.amount.two-short` |
| `cv1.interaction.maintenance.w07.l20.timing` | Fictional-language warning; example says before bed and is not real advice. | `cv1.cue-variant.label.timing.bedtime.v04` → `cv1.accepted.label.timing.bedtime` / `cv1.option-set.label.timing.bedtime` |
| `cv1.interaction.maintenance.w07.l21.fact` | Explicit fictional emergency-language rehearsal at Ekkamai Station, Exit 2. | `cv1.cue-variant.emergency.fact.v04` → `cv1.accepted.emergency.fact.full` / `cv1.option-set.emergency.fact.full` |
| `cv1.interaction.maintenance.w07.l21.location` | Fictional location is supplied as Ekkamai Station, Exit 2 before playback. | `cv1.cue-variant.emergency.location.v03` → `cv1.accepted.emergency.location.short` / `cv1.option-set.emergency.location.short` |
| `cv1.interaction.maintenance.w07.l21.call` | Explicit fictional emergency-language rehearsal; ask a nearby man to call an ambulance. | `cv1.cue-variant.emergency.help.v04` → `cv1.accepted.emergency.call-ambulance.full` / `cv1.option-set.emergency.call-ambulance.full` |
| `cv1.interaction.maintenance.w08.l22.opening` | Fictional serviced-apartment desk; today is established and opening time is needed. | `cv1.event.w08.l22.ask-opening-today` → `cv1.accepted.hours.ask-opening-today` / `cv1.option-set.hours.request.open-today`; reply `cv1.response.hours.reply-opening-short` / `cv1.option-set.hours.reply.open-short` |
| `cv1.interaction.maintenance.w08.l22.closing` | Fictional serviced-apartment desk; tomorrow is established and closing time is needed. | `cv1.event.w08.l22.ask-closing-tomorrow` → `cv1.accepted.hours.ask-closing-tomorrow` / `cv1.option-set.hours.request.close-tomorrow`; reply `cv1.response.hours.reply-closing-short` / `cv1.option-set.hours.reply.close-short` |
| `cv1.interaction.maintenance.w08.l22.laundry` | Fictional serviced apartment; ask whether laundry exists. | `cv1.event.w08.l22.ask-laundry-short` → `cv1.accepted.service.ask-laundry-short` / `cv1.option-set.service.request.laundry-short`; reply `cv1.response.service.reply-no-full` / `cv1.option-set.service.reply.no-full` |
| `cv1.interaction.maintenance.w08.l23.wrong-item` | Fictional room 123; towel sheet belongs to room 213. | `cv1.cue-variant.service.wrong-item.v03` → `cv1.accepted.service.wrong-item-full` / `cv1.option-set.service.wrong-full` |
| `cv1.interaction.maintenance.w08.l23.missing` | Fictional room 213 is still awaiting a parcel. | `cv1.cue-variant.service.missing.v04` → `cv1.accepted.service.missing-parcel` / `cv1.option-set.service.missing-parcel` |
| `cv1.interaction.maintenance.w08.l23.check` | Staff heard the fictional room-213 parcel problem; ask to check the parcel. | `cv1.cue-variant.service.check.v04` → `cv1.accepted.service.check-parcel` / `cv1.option-set.service.check-parcel` |

These rows add no new Thai. Medical/emergency rows never accept personal facts, never store values and never escape their fictional safety context. L24 creates no new active frame; its taxi, market and delivery recurrences already inherit the earlier-unit ledger and continue through final `+1`, `+7`, gate, `+30` and maintenance.

## 6. Signature collision and leakage closure

Canonical signature is `contextId|cueVariantId-or-eventId|acceptedSetId`; none of the three IDs may contain `|`. Context IDs in this manifest are unique and their cards are semantically distinct, not aliases created only to defeat a duplicate check.

| Surface block | Pairwise comparison | Result |
|---|---|---|
| lesson / practice / consolidation | against all sealed delayed and assessment blocks | zero sealed-source reuse |
| `+1` | against model | exactly the registry-declared `rehearsalOf` rows; reported as familiar retention |
| `+7` A/B | against model, practice, `+1`, each other | zero undeclared collisions |
| gates W1–W7 A/B/C | within gate and against every earlier surface | zero source or signature collisions |
| final gate A/B/C | within final and against all earlier surfaces | zero source or signature collisions |
| unit/final `+30` A/B | within assignment and against gates/earlier checks | zero source or signature collisions |
| maintenance | against sealed signatures before their first eligible attempt | zero pre-exposure leakage; maintenance is eligible only after its owning gate/course point |

A later practice may reuse a formerly sealed signature only after that gate/check was attempted and only with an explicit `recurrenceOf`; none of the new rows above relies on that exception. Build validation expands every registry generator and this manifest before performing the same structural comparison.

## 7. Deterministic timing simulation assumptions

The release simulation uses these immutable inputs:

- Timezone: `Asia/Bangkok`; dates, due stages and one-main-credit limits use Bangkok civil dates.
- Pace anchor: actual first L01 completion date; nominal offsets never schedule retention.
- Main route: the 40 rows in section 1, in order, at most one credited main task per Bangkok day.
- Required duration is authored `coreMinutes + ordinaryRepairMinutes`, not observed elapsed time.
- Delayed tasks: `+1 = 6` minutes (`4 + 2` repair), `+7 = 8` (`6 + 2`), unit `+30 = 14` (`10 + 4`) and final `+30 = 20` (`15 + 5`).
- Daily hard ceiling: 45 required minutes. Optional work is excluded.
- Serving cap: at most two due assignments are attempted on one Bangkok date; each assignment is attempted at most once on that date. More assignments may share a due date and enter the governed backlog.
- Never-attempted order: due date, then `d1`, `d7`, `d30`, then assignment ID.
- Failed-recheck order: least-recent attempt, original due date, stage, assignment ID.
- Backlog mode: more than two never-attempted checks or more than 16 never-attempted objective prompts; no main task is reserved that day.
- Outside backlog mode, reserve the next main task, then walk the due queue in order. If the oldest due item and main exceed 45 minutes, the due item wins and main defers. A newer shorter due item never bypasses an older one.
- One ordinary repair pass is already included. Repeated voluntary repair is optional and cannot make the required route exceed the ceiling.
- Same-day replay, field rehearsal and optional reading never create task, gate or retention authority.
- Simulation scenarios required: perfect attendance, one missed weekday per unit, a seven-day absence beginning after W2, every delayed check failing once, every gate failing once, and completion with all due checks packed under the governor.
- Required assertions: no packed day exceeds 45; no due assignment is starved; the finite never-attempted backlog strictly decreases on each completed backlog day; no main task is skipped; no optional/rest row gains authority; final and final-`+30` routes remain reachable.

### 7.1 Executed simulation evidence

The deterministic simulator parsed the 40 rows in §1 rather than carrying a second task list. Day 0 is the L01 anchor. “Course” is the first valid final-gate pass; “all checks” includes the final `+30`. The nominal policy chooses the next task on or after its displayed offset; the accelerated policy exercises the permitted no-hidden-wait boundary. The missed-day fixture withholds all work at nominal offsets `2,9,16,23,30,37,44,51`; the seven-day fixture withholds offsets `12…18`, immediately after the Week 2 gate pass at offset 11. A first-attempt failure completes its separate repair that day and becomes recheck-eligible only on the next Bangkok date.

| Scenario | Course day | All-checks day | Peak required minutes | Peak checks/day | Longest overdue | Backlog days | Result |
|---|---:|---:|---:|---:|---:|---:|---|
| Nominal perfect attendance | 53 | 83 | 44 | 2 | 0 days | 1 | pass |
| Accelerated daily main | 41 | 71 | 44 | 2 | 1 day | 4 | pass |
| One missed nominal weekday per unit | 55 | 85 | 44 | 2 | 1 day | 3 | pass |
| Seven-day absence after Week 2 | 53 | 83 | 44 | 2 | 5 days | 3 | pass |
| Every delayed check fails once | 60 | 91 | 44 | 2 | 10 days | 12 | pass |
| Every gate fails once | 55 | 85 | 44 | 2 | 0 days | 3 | pass |
| Combined stress: eight missed days plus every delayed check and gate failing once | 70 | 101 | 45 | 2 | 10 days | 7 | pass |

All seven runs created exactly 56 delayed assignments (48 lesson `+1/+7`, seven unit `+30`, one final `+30`). The delayed-failure runs made 112 delayed attempts and still terminated. Every run preserved the exact main-task order, packed no more than two checks, stayed at or below 45 minutes, strictly reduced a finite never-attempted backlog on each worked backlog day, passed every assignment and reached final `+30`. Optional/rest labels produced no authority.

## 8. Freeze assertions

This manifest was promoted from freeze candidate only after the following assertions passed together:

- all form objective counts are exact;
- all references resolve to one canonical registry entity;
- every active response and assessed cue family passes the recurrence ledger;
- the signature table reports zero undeclared collisions and zero pre-exposure leakage;
- every modeled learner/partner utterance referenced here is male-polite and the prohibited female particle is absent;
- the deterministic timing scenarios pass the 45-minute ceiling.

There is no implementation-author choice in the main-task path, consolidation membership, gate membership, `+1`/`+7`/`+30` membership, final-gate composition or maintenance closure. A representation change is allowed; a content, form or evidence change requires a revision increment and another audit.

### 8.1 Freeze evidence — 2026-08-28

| Audit surface | Executed result |
|---|---|
| Document integrity | Seven binding files; balanced fences, consistent Markdown table widths and no duplicate same-level headings. |
| Identifier and lesson structure | 2,004 distinct canonical `cv1` IDs passed the lowercase grammar; 24 canonical lessons and inventory lessons L01–L24 occur in exact order. |
| Lesson completeness | Every lesson has situation, outcome, prerequisites, target/anchor functions, controlled variation, `d1`, `d7`, gate, `d30`, misconception and later-recurrence declarations. |
| Model scenes | 262 spoken turns across 24 lessons; every lesson matches its binding registry turn count and remains within the authored 8–14-turn limit. L24 is three four-turn scenes with explicit learner-controlled transitions. |
| Course/form closure | 40 ordered main tasks = 24 lessons + eight consolidations + eight gates; 32 consolidation interactions, eight six-prompt/two-transfer consolidation rows, six W7 cumulative interactions, 12 final cumulative interactions and 20 maintenance interactions. |
| Language and pronunciation | 823 modeled-language occurrences checked as male-polite; zero authored female-particle records. 500 distinct Thai payloads with explicit pronunciation spellings produced zero conflicting spellings. |
| Reference and leakage reconciliation | All four registry closure ledgers and this manifest resolve their exact cross-course records; zero unresolved/TBD fields, undeclared signature collisions or known pre-exposure leaks remain. |
| Workload governor | All seven scenarios in §7.1 terminate, reach final `+30`, serve all 56 delayed assignments, attempt at most two checks per day and peak at 45 required minutes. |
| Dependency boundary | Device TTS only; zero native-audio, native-review, remote-audio or pronunciation-assessment dependency; reading gates = zero. |
| Review independence | Week-level registry reviews and the final cross-document reconciliation were separate passes; the deterministic structural, language, pronunciation and timing checks were then rerun together. |

The reconciliation explicitly synchronized the compact and machine-authoritative model scenes, including the learner-led L02 bill request, L03 return to the original food task, separate L12 time/place turns, the exact L13/L15 help cue, L18's post-translation return to the unresolved delivery detail, and the L22–L24 closing scenes. No application file was edited during specification freeze.
