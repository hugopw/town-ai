# Place research SOP

How to produce a Town.AI place config for a new UK location. The
output is a TypeScript file at `places/<slug>.ts` that conforms to
the `Place` shape in `_types.ts`.

The bar: **the result must pass the "unswappable" test.** If you
delete the place name and read the page, a local should still
recognise their town. Named streets, named schools, named
charities, named local press, named local stats. No generic
"your high street" or "your school".

This SOP has two parts:
1. **The research brief** - the LLM prompt and what to feed it.
2. **The QA checklist** - what to verify before merging.

---

## 1. Research brief

### Inputs you provide

```
Place name:        e.g. South Kesteven
Council name:      e.g. South Kesteven District Council
Council type:      town | parish | district | borough | city | unitary | county
Council website:   e.g. https://www.southkesteven.gov.uk/
Hugo's hypothesis (optional): the angle you suspect lands - e.g.
  commuter-displacement, rural-decline, youth-retention,
  high-street-decline, industrial-transition, entrepreneurial-cluster
Stakeholders already engaged (optional): names, roles
```

### What the research must produce

A draft `places/<slug>.ts` with **every** field of the `Place` type
filled in. Specifically:

#### Identity
- `slug`, `name`, `formalName`, `wordmark`, `wordmarkAccent`, `domainHint`

#### Council
- `name`, `shortName`, `type`, `website`
- `pressOutlets[]` - 3-6 named local outlets the council uses
- `civicEvents[]` - 3-6 named local civic events

#### Thesis
- `eyebrow`, `headline` (one strong sentence), `paragraphs[]` (3-4)
- `angle` (pick from the enum, justify in research notes)
- `secondQuestion` (one card on the homepage)

#### Hero
- `pills[]` (3 short labels, including formal name + summer year)
- `headline.lead/emphasis/tail` (the "What happens when X" H1)
- `lede` (one paragraph)
- `bigQuestion` (the second card on the homepage's "two questions" section)

#### Stats
- `hero[]` - 4 sourced numerical stats with labels
- `community[]` - 8 sourced numerical stats with labels
- `communityCaption` - one paragraph attributing sources

#### Anchors
- 6-8 `Anchor` entries, each with `name`, `role`, `use`. These are
  named local institutions that read as "ours" to a resident.

#### Segment archetypes
- Five short phrases that paint the typical commuter, elder, teen,
  independent, and council officer for this place.

#### Challenges
- 6-8 `Challenge` entries (full form for `/challenges`)
- 6-8 `priorityItems` (short form for the homepage interactive picker)

#### Worked example
- Pick ONE local problem to be the worked example
- Fill in `WorkedExample` fully (slug, title, shortLabel, narrative,
  roles, steps, whyFirst)

#### Resident offer
- `speakerSeries[]` - usually Laura + Chris + rolling roster, with
  per-place tuning to topics that fit local economy
- `festivalName` - e.g. "South Kesteven AI Summer"
- `physicalVenueExamples[]` - 3-5 named venues

#### Council partnership
- `councilAssets[]` - 9 asset cards covering socials, email, direct
  mail, noticeboards, relationships, press, meetings, civic events,
  venues. Each tuned to this place's actual assets.
- `councilPartners[]` - 6-10 named partner organisations the council
  is asked to introduce.

#### Persona pages
- `teenSchoolExamples[]` - 4-6 named local secondary schools
- `organisationExamples[]` - 4 named local community orgs with
  one-line problems each could submit.

#### Seed problems
- 2 `SeedProblem` entries that will appear on `/community-projects`
  on first load. Use real-named local organisations where you have
  permission; otherwise use plausible-sounding "TBC" placeholders.

#### Brand (optional)
- Leave undefined unless the council has asked for an accent override.

#### Contact
- `email` - sub-addressed mailto, e.g. `hugo+southkesteven-ai@pdubs.co`
- `bookingUrl` (optional)

### Sources to draw from

- **ONS Census 2021** (TS-series tables on Nomis, especially TS006
  age, TS021 ethnic group, TS061 travel-to-work, TS062 NS-SeC,
  TS063 occupation, TS067 highest qualification).
- **ONS mid-year estimates** for current population.
- **ORR Estimates of Station Usage** for rail data.
- **English Indices of Deprivation** for IMD figures.
- **Council's own published data** - corporate plan, annual reports,
  Local Plan, JSNA chapters.
- **Local press** - read 2-3 months of their reporting to surface
  the live local issues.
- **Local Facebook groups** (read-only) - to identify what residents
  actually argue about.
- **Companies House** for active-business counts where the council
  doesn't publish them.
- **NFU / RFR / sector bodies** for industry-specific framing in
  rural and food-economy places.

### What "good" looks like

A draft is ready for Hugo's review when:
- Every field on `Place` is populated.
- Every stat is sourced.
- The thesis has one clear angle that's TRUE for this place (not a
  Harpenden-shaped angle with the names swapped).
- The challenges read as if written by someone who actually lives
  there.
- The worked example would make a local journalist nod.
- The council assets list is recognisably this council's.

---

## 2. QA checklist (before merging)

Run through every item:

- [ ] **Schema** - file compiles; `bunx tsc --noEmit` is clean.
- [ ] **Build** - `NEXT_PUBLIC_PLACE_SLUG=<slug> bun run build` is clean.
- [ ] **Stats sourced** - every `StatTile.source` has a real source URL or
      named publication (the `_research-prompt` checklist above).
- [ ] **Thesis angle** - distinct from Harpenden's commuter-displacement angle
      where appropriate. Reads as TRUE for this place.
- [ ] **Anchors named** - all 6-8 are real named institutions that exist.
- [ ] **Press outlets named** - real local papers, not generic "press".
- [ ] **Civic events named** - real events on the council's actual calendar.
- [ ] **Schools named** - real local secondaries.
- [ ] **Org examples** - 4 plausible local orgs (real if permission obtained;
      "TBC" placeholders otherwise, flagged for follow-up).
- [ ] **Worked example tractable** - the proposed prototype is something
      Sherpas teens + AI Night School alumni could plausibly ship in 90 days.
- [ ] **Speaker tuning** - speakers list reflects local economy
      (e.g. agricultural-AI for South Kesteven, founder-AI for Suffolk).
- [ ] **Council asset cards** scaled to council type - town vs district
      vs unitary need different framing.
- [ ] **Festival name** - place-specific, not "Harpenden AI Summer".
- [ ] **Wordmark** consistent - matches `name` plus `.AI` in 99% of cases.
- [ ] **Email contact** - sub-addressed (`hugo+<slug>@pdubs.co`).
- [ ] **The unswappable test** - delete the place name from a paragraph;
      can a local still recognise their town?

When all checks pass, commit and deploy a new Vercel project with
`NEXT_PUBLIC_PLACE_SLUG=<slug>`.

---

## 3. Iterating after first contact

A first draft will need 1-2 hours of editing after a real council
conversation. Common revisions:

- Replace placeholder organisations with named real ones (with
  permission).
- Sharpen the thesis angle based on what the council leader cares
  about.
- Adjust the worked example to match the council's actual top
  priority.
- Add specific named partners the council has surfaced.
- Sharpen press outlets to whichever the comms officer prefers.

Ship the v1 with placeholders flagged. Refine after first meeting.
The pattern is "draft fast, refine in conversation".

## 4. Reference - what makes Harpenden's config work

- **Specific stats:** 31,128 residents, 60.5% degree-holders, 2.6M
  station journeys, top-1% IMD - all named from named sources.
- **Named anchors:** Rothamsted, the Common, the Leisure Centre,
  St Nicholas, Roundwood Park, the BID, Town Hall, Facebook groups.
- **Named press:** Herts Ad, Harpenden Life, Harpenden Connect,
  BBC Three Counties.
- **Named partners:** Rothamsted Research, Secondary Schools Trust,
  Age UK Herts, Harpenden Leisure Centre, the BID, faith groups,
  resident associations, Facebook group admins.
- **Specific challenges:** Southdown traffic, the A1081, the
  pothole map, the council-paper digest, Kings Pantry, Harpenden
  Trust.
- **Specific archetypes:** "the marketing director on the 07:42",
  "the retiree at the Leisure Centre", "the teenager at Roundwood",
  "the butcher on the High Street".

This level of specificity is the bar.
