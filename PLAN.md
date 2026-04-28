# Plan - Multi-place architecture for Harpenden.AI

Status: **proposal — awaiting Hugo's approval before any code changes.**

The brief: clone Harpenden.AI for South Kesteven Council
(www.southkesteven.gov.uk) without forking the codebase. Then do
the same again for Menta / Suffolk. Each new location should feel
like it was built for that council — "unswappable" — while 90-95%
of the engineering effort gets done once.

This is a multi-tenant problem. The plan below is for solving it
properly, not for one-off copy-paste forks (which would be cheaper
to start but ruinous to maintain).

---

## 1. The shape of the answer

**One codebase, many "places". Each place is a config file.**

```
site/
  app/                       (unchanged structurally - reads place.X)
  components/                (unchanged)
  lib/
    place.ts                 NEW - loads the active place at build time
    submissions.ts           (unchanged)
  places/
    _types.ts                NEW - the Place type
    _research-prompt.md      NEW - the LLM-driven place-research SOP
    harpenden.ts             NEW - current Harpenden content extracted here
    southkesteven.ts         NEW - generated from research
    suffolk-menta.ts         (future)
```

`PLACE_SLUG=harpenden` is set at build time (Vercel env var). The
codebase reads from `places/${PLACE_SLUG}.ts` and renders. Pages
become "render whatever the configured place tells you to render".

Adding a new location is **a content task, not a code task**. New
places spin up via:

1. Run the research prompt against the new place
2. Edit + fact-check the generated `places/X.ts`
3. Create a new Vercel project pointing at the same repo with
   `PLACE_SLUG=X`
4. Deploy

No code in `app/`, `components/` or `lib/` changes when adding a
new place. That's the design goal.

## 2. What's universal vs place-specific

Carefully distinguishing these is 90% of the work. Walking the
existing Harpenden site:

### Universal (no per-place changes — leave alone)

- **The five-segment model** (already in / already-overwhelmed /
  knows-they-should / reluctant / scared). Every town has these
  five groups in some mix.
- **The four persona doors** (leader, teen, volunteer,
  organisation) and their layouts.
- **AI Night School + Sherpas + AI Optimist branding**, the
  Mini Hugo SVGs, the llama, the Wordmark, the lavender / lime /
  midnight palette.
- **The interventions directory** (AI Night School, Sherpas AI,
  AI Optimist Strategy, Accelerator, Imaginarium, Problemarium,
  Chooser, the named diagnostics). The programmes are the same
  product wherever you sell it.
- **The journey phases** (website → cohorts → community groups →
  train-the-trainer → festival → physical spaces → port).
- **The council-partnership *structure*** (what we ask for, what
  we don't, awareness as the north star, the six-module
  Accelerator for councils). Wording changes, structure doesn't.
- **The signup forms, problem submissions, and community-projects
  flow.** Fully generic.
- **The AI Optimist video catalogue.** Same videos work for every
  town.
- **Inclusive design** (18px floor, focus rings, reduced motion,
  skip links). All universal.

### Place-specific (move into `places/X.ts`)

| Bucket | What changes per place |
|---|---|
| **Identity** | Place name, formal name, council name, council type, council URL |
| **Thesis** | The headline risk paragraph + 2-3 supporting paragraphs. Harpenden = London-commuter displacement. South Kesteven probably = rural / market-town / agricultural-decline. Suffolk = different again. |
| **Stat tiles** | Population, demographic mix, education, key economic indicator, transport metric. Sourced from ONS / IMD / local equivalents. |
| **Local anchors** | The 6-8 named institutions ("Rothamsted Research", "the Leisure Centre", "St Nicholas"). Replaced with the new place's equivalents. |
| **Five-segment context** | The segment cards themselves are universal but the *examples* ("the marketing director on the 07:42") name the place's typical commuter / archetype. |
| **Community challenges** | The 6-8 local problems on `/challenges` and the `PriorityChooser`. Harpenden has Southdown traffic + the High Street + loneliness. South Kesteven has different problems. |
| **Worked example** | Harpenden has Harpenden Traffic. Each new place needs its own worked example (or links to a planned one). |
| **Seed problems** for `/community-projects` | Kings Pantry, Harpenden Trust → their local equivalents (foodbanks, community trusts, schools known to that place). |
| **Speaker series** | Laura on D2C, Chris on IP — these may travel to other councils, but the *list* is editable per place to add local relevance (e.g. an agricultural-AI talk for South Kesteven). |
| **Council asset inventory** | Council socials / direct mail / civic events — wording changes; for example "The Herts Ad" becomes "Grantham Journal". |
| **Council partners** | "Rothamsted, Secondary Schools Trust, Age UK Herts" → place's actual community partners. |
| **Festival framing** | "Harpenden AI Summer" → place-shaped equivalent. |
| **Wordmark text** | "Harpenden.AI" → "SouthKesteven.AI" (or whatever Hugo brands it). |

### Visual identity (probably universal, optionally per-place)

- The default: every place uses the same AINS / Sherpas brand
  system. Visual identity stays consistent so you and the partner
  brands carry across.
- **Optional per-place override:** a single accent colour token
  (currently `lime #B4F863`) could swap to a council-aligned
  colour. Don't do this in v1; ship one colour and decide if
  councils ask.

## 3. The `Place` data model

Sketched out as a TypeScript shape for `places/_types.ts`. Final
schema is the design discussion - this is the strawman.

```ts
export type PlaceSlug = "harpenden" | "southkesteven" | "suffolk-menta";

export type StatTile = {
  value: string;
  label: string;
  source: string;
};

export type Anchor = {
  name: string;       // "Rothamsted Research"
  role: string;       // "world-class research institution on our doorstep"
  use: string;        // "a natural partner for the ambition of an AI-fluent town"
};

export type Challenge = {
  id: string;
  title: string;
  pitch: string;
  why: string;
  owner: string;
  first: string;
  href?: string;      // optional link to the worked example
};

export type SeedProblem = {
  organisation: string;
  contactName: string;
  contactEmail: string;
  shortTitle: string;
  description: string;
  whoFeelsIt: string;
  alreadyTried?: string;
  successIn90Days: string;
  tags: string[];
};

export type WorkedExample = {
  slug: string;                 // 'harpenden-traffic'
  title: string;
  description: string;
  liveToolUrl?: string;         // external URL if the demo lives elsewhere
};

export type CouncilAsset = {
  title: string;
  body: string;
};

export type Speaker = {
  name: string;
  topic: string;
  blurb: string;
};

export type Place = {
  // identity
  slug: PlaceSlug;
  name: string;                 // 'Harpenden'
  formalName: string;           // 'Harpenden, Hertfordshire'
  wordmark: string;             // 'Harpenden.AI' (override if not just `${name}.AI`)
  domainHint: string;           // 'harpenden.ai' or the live URL prefix

  // the council
  council: {
    name: string;               // 'Harpenden Town Council'
    type: "town" | "district" | "parish" | "unitary" | "borough";
    website: string;
    pressOutlets: string[];     // ['The Herts Ad', 'Harpenden Life']
  };

  // the thesis
  thesis: {
    eyebrow: string;            // 'The honest bit'
    headline: string;
    paragraphs: string[];       // 3-4 paragraphs
    angle:
      | "commuter-displacement"
      | "rural-decline"
      | "youth-retention"
      | "high-street-decline"
      | "industrial-transition";
  };

  // homepage stats
  stats: StatTile[];            // 4 tiles for the hero, 4 more for /community

  // local geography
  anchors: Anchor[];            // 6-8 named institutions

  // five-segment context (overrides for the universal cards)
  segmentContext: {
    typicalCommute?: string;    // 'the 07:42 to St Pancras'
    typicalRole?: string;       // 'marketing director'
    typicalStreet?: string;     // 'the butcher on the High Street'
    typicalElder?: string;      // 'the retiree at the Leisure Centre'
  };

  // community challenges
  challenges: Challenge[];      // 6-8 problems
  workedExample: WorkedExample;

  // resident offer
  residentOffer: {
    speakerSeries: Speaker[];
    festivalName: string;       // 'Harpenden AI Summer'
    physicalVenueExamples: string[];
  };

  // council partnership
  councilAssets: CouncilAsset[];
  councilPartners: string[];

  // seed data for the community-projects page
  seedProblems: SeedProblem[];

  // optional visual identity overrides (default = inherit)
  brand?: {
    accentColour?: string;      // overrides `lime`
  };
};
```

The Harpenden config (`places/harpenden.ts`) is just a literal of
this shape with all the current strings extracted into it.

## 4. The place-research workflow

The hardest, most-valuable part. Producing a believable, sourced,
"unswappable" config for a new place is a 2-4 hour research
exercise. This needs to be **systematic** so we don't reinvent it
for each new town.

### What it looks like

A markdown SOP at `places/_research-prompt.md` plus a Claude /
ChatGPT prompt template that:

1. **Takes inputs:**
   - Place name + council name
   - Optional: Hugo's hypothesis on the angle
     (commuter-displacement / rural-decline / etc.)
   - Optional: any council contacts already engaged

2. **Produces a sourced research report:**
   - Demographic profile (ONS Census, NOMIS, IMD, local LSOA data)
   - Economic profile (occupation mix, dominant industries, income)
   - Geographic anchors (named institutions, schools, civic spaces)
   - Press outlets and community channels
   - Five well-evidenced "this place specifically" facts that go
     into the thesis
   - 6-8 candidate community problems with rough scoping notes
   - 3-5 candidate worked examples (rank by tractability)
   - Suggested resident-segment archetypes ("the X on the Y")
   - Open questions / gaps where data was thin

3. **Produces a draft `places/${slug}.ts`** with stats, anchors,
   challenges, seed problems and angle pre-filled. Hugo edits +
   fact-checks before merging.

The research prompt is its own deliverable — and it's the asset
that makes the second, third, tenth town cheap.

### What the prompt covers (sketch)

```
You are researching the town of {PLACE} ({COUNCIL}) for a
council-pitch website that argues this council should make their
community AI-fluent first. The website's structure is fixed; you
are filling in:

1. The Risk Thesis - what makes THIS place specifically at risk
   from AI economic change, and specifically capable of leading?
   The Harpenden version (London-commuter knowledge-worker
   displacement) is one shape. Yours might be different. Tell me
   the most truthful version for this place.

2. Stats - 8 sourced numeric facts that tell the story...
3. Anchors - 6-8 named institutions...
4. Local problems - 6-8 community problems AI could help with...
5. Press / channels - what does this council use?
6. Worked example proposal - the strongest candidate for a 90-day
   community-AI prototype...

Cite every fact. Flag gaps. Output as TypeScript matching the
Place type schema attached.
```

A thoughtful prompt + 1-2 hours of editing per place is the goal.

## 5. Refactoring plan - incremental, non-breaking

Important: the current Harpenden site is going to a council meeting
this week. The refactor cannot break it. Steps below are
sequenced so Harpenden keeps working at every step.

**Phase 1 - Lift Harpenden into a place config (no behavioural change)**

1. Add `places/_types.ts` with the `Place` type.
2. Add `places/harpenden.ts` with all current Harpenden strings
   extracted from across the codebase.
3. Add `lib/place.ts` exporting `getPlace()` that reads
   `PLACE_SLUG` env var (defaulting to `'harpenden'`).
4. Refactor pages and components to read from `getPlace()` instead
   of hardcoded strings. **One file at a time, verify after each.**
5. Verify Harpenden site still renders identically. Push to its
   Vercel project. No URL change, no content change.

This is the bulk of the engineering work. Estimated 4-6 hours of
careful refactoring + verification.

**Phase 2 - Build the research SOP**

1. Write `places/_research-prompt.md`.
2. Run it against South Kesteven as the validation case. Record
   what works, what needs fixing.
3. Iterate the prompt. The output should be 80%+ usable as a
   `places/southkesteven.ts` draft after one editing pass.

**Phase 3 - Ship South Kesteven**

1. Generate `places/southkesteven.ts`.
2. Hugo edits + fact-checks (1-2 hours).
3. Create a new Vercel project pointing at the same repo with
   `PLACE_SLUG=southkesteven`.
4. Decide hosting (see §7).
5. Smoke-test all routes for the new place.
6. Hand off to Hugo for the South Kesteven council meeting.

**Phase 4 - Suffolk / Menta**

1. Run the research prompt.
2. Edit + fact-check.
3. Deploy.

By Phase 4 the marginal cost of a new place should be a half-day,
not a project.

## 6. South Kesteven specifically - what we know, what to research

Quick orientation so we can scope the research:

- **Geography:** South Kesteven District Council covers Grantham,
  Stamford, Bourne, the Deepings (Market Deeping, Deeping
  St James), and surrounding rural areas in south Lincolnshire.
- **Council type:** District (not town/parish). Different politics,
  different scale. Larger budget. More wards. The council
  partnership ask probably looks different from Harpenden Town
  Council.
- **Likely angle (hypothesis - to validate in research):** rural
  market-town economy, ageing population, agricultural workforce
  facing automation, town-centre decline, young people leaving
  for cities. NOT London-commuter displacement.
- **Possible anchor partnerships:** Lincolnshire County Council,
  RAF Wittering (Stamford), Belton House (NT), Burghley House,
  Lincolnshire Co-op, the Grantham Journal, Stamford Mercury.
- **Worked-example candidates worth scoping in research:**
  - Town-centre revitalisation in Grantham
  - Rural transport gaps for older residents
  - School-leaver retention / careers AI for Lincolnshire teens
  - Agricultural-workforce AI adoption (CLAAS, Bakkavor in the area)
  - Local-government engagement across a dispersed district

These are hypotheses. The research SOP would test, refine, and
source them.

## 7. Deployment topology

Each place needs its own Vercel project (same repo, different env
var). The open question is *where each place is hosted*.

### Harpenden (current)

- Standalone Vercel project deployed at `harpenden-ai.vercel.app`
- Proxied via AINS at `ainightschool.org/harpenden-ai/`
- This is the only "owned by AI Night School" placement.

### South Kesteven (proposed)

Three options, ranked by my preference:

**A. Sub-domain of `ainightschool.org`** —
`southkesteven.ainightschool.org`. Same proxy pattern, separate
subdomain. Pros: keeps the AINS umbrella visible; council owns the
content but AINS owns the platform. Cons: requires DNS config on
the AINS domain.

**B. Standalone domain** — e.g. `southkesteven-ai.org`. Pros:
councils sometimes prefer their own URL. Cons: domain costs;
weaker AINS umbrella; SEO scattered.

**C. Proxied off the council's own domain** —
`southkesteven.gov.uk/ai-vision` or similar. Pros: maximally
"theirs". Cons: requires gov.uk-side configuration which is
historically slow and political. Bad for early stage.

**My recommendation:** Option A for Phase 3, optionally migrate to
Option C once a council formally engages and wants to own the URL.
For Suffolk / Menta, same default.

## 8. The "unswappable" test

You said "we can make it feel like it is unswappable with another
location". That phrase is the design north star. The test for any
proposed place config should be:

> If you delete the place name and read the page, can a local
> still recognise their town?

Things that pass that test:
- Named local streets, schools, parks, train stations, businesses
- Local press outlets quoted by name
- Specific local statistics
- A worked example that's recognisably about *here*
- A thesis paragraph that names the local industries / commute
- Speaker-series topics that fit local economy
- Seed problems that name real local organisations

Things that fail:
- Generic "your high street" with no street name
- Generic "your school" with no school name
- Generic "your council" instead of "South Kesteven District Council"
- Stats that read as if scraped from a national average

The research SOP should produce content that passes this test, not
just content that compiles.

## 9. What this implies for the existing PRs

Three open PRs right now:
- `harpenden-traffic-ecosystem-explorer/fix/proxy-safe-back-link`
  (now also has the data-fetch fix)
- `ainightschool-website/feat/harpenden-ai-proxy`
- (`harpenden-ai` itself is on `main` already)

**Recommendation:** merge all three first, get the Harpenden site
fully proven on production at `ainightschool.org/harpenden-ai`,
then begin the multi-place refactor. Refactoring on top of a
shipped, working site is much less risky than refactoring on top
of in-flight changes.

## 10. Open questions for Hugo

Numbered so you can answer with one-liners.

1. **Wordmark per place.** Are the wordmarks `Harpenden.AI`,
   `SouthKesteven.AI`, `Suffolk.AI` (Menta-tied)? Or do the
   non-Harpenden ones use a different brand structure (Menta
   branding for Suffolk, etc.)?

2. **Visual identity per place.** Default = same AINS palette
   everywhere. Acceptable? Or do you want one accent-colour
   override capability (e.g. council brand colour) from day one?

3. **Hosting for South Kesteven.** Option A
   (`southkesteven.ainightschool.org`)? Or pre-emptively get a
   standalone domain?

4. **Audience for South Kesteven.** Is this a council pitch first,
   or is there a Menta-style commercial audience embedded? In
   other words - same two-mode (council view + resident view) as
   Harpenden, or a different IA?

5. **Research timing.** Want me to draft `_research-prompt.md`
   first, or do the Phase 1 refactor first? Phase 1 is more code,
   Phase 2 is more thinking. Doing Phase 1 first means the second
   and third places spin up faster but South Kesteven is delayed
   by ~6 hours of refactoring.

6. **Worked-example tooling.** For South Kesteven, is the
   expectation that *you* build a separate worked-example tool
   (the equivalent of `harpenden-traffic-ecosystem-explorer`)?
   Or just a description of the worked example in the vision site
   for v1, with the tool deferred?

7. **The "unswappable" bar.** How strict should the research SOP
   be? Minimum-viable place content (~3 sourced facts, basic
   stats) vs. fully-research-loaded (~12 sourced facts, named
   streets, named schools, real council-paper references). The
   second is much higher quality but takes longer.

8. **Visual differentiation.** When a council walks through, do
   they need to see explicit "this is for our town" markers (a
   council coat of arms in the header? a postcode-validated
   resident gate? a council-logo footer?), or is the content
   doing all the work?

Once you answer these, I'll either start Phase 1 or write the
research SOP first - depending on §5.

---

## Summary

- **One codebase, many places.** Don't fork. Configure.
- **Place = a TypeScript config file** under `places/`.
- **A research SOP makes new places cheap.** Targeted at 80%
  draft-from-prompt, 20% Hugo edit.
- **Universal stuff (90-95% of the site) doesn't change.**
  Brand, IA, components, persona doors, intervention directory,
  forms.
- **Place-specific stuff (5-10% of the site) does change.**
  Thesis, stats, anchors, challenges, seed problems, speakers,
  council assets, partners, worked example.
- **Each place gets its own Vercel project, same repo.**
- **South Kesteven is rural-shaped, not commuter-shaped.** The
  thesis has to be different, not a find-and-replace.

Ready to go on your call.
