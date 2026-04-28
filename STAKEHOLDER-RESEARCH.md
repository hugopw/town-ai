# Town.AI — stakeholder research

Synthesis of UX research across four stakeholder personas, run as
parallel research streams on 2026-04-28. Findings drive the per-place
config schema in `site/places/_types.ts` and the questions Hugo's
content-research prompt has to answer for each new town.

## How to read this

For each persona we capture:
- **Mental model on arrival** - the first 30-second internal narrative
- **Top questions** - what they're scanning for
- **Trust signals** - what makes the page believable
- **Dealbreakers** - what bounces them
- **Conversion triggers** - what gets them to act
- **What MUST change per place** - schema implications
- **What can stay universal**

The "what must change per place" sections are the canonical input to
the `Place` type. Anything any persona needs to see localised has to
be a field in the schema.

---

## 1. Council stakeholders

Elected councillors, council leader/chair, council officers (clerk,
comms, regeneration, community engagement), committee chairs.

**Mental model on arrival.** "Is this another consultancy with a
deck? Will I be expected to fund anything? Will residents thank me
or eat me alive for getting involved?" Council stakeholders read
defensively. They're scanning for political risk, budget risk, and
whether the proposer understands how a council actually operates.

**Top questions.**
1. What does this cost the council?
2. What is the council actually being asked to do — concretely?
3. Who is liable if it goes wrong?
4. Has any other council done this?
5. Does it align with our adopted strategy / Local Plan?
6. What's the political downside if this fails publicly?
7. What's our exit if it doesn't work?

**Trust signals.**
- Named local press outlets the council actually uses (not "press").
- The "what we're not asking for" panel.
- Specific named council assets (Town Hall, civic events, mayoral
  engagements) — recognisably theirs.
- Awareness as the named north star, not "engagement".
- An identified human (Hugo's bio + photo + LinkedIn).

**Dealbreakers.**
- Anything that requires a procurement process.
- Anything that asks for money up front.
- Anything that smells of "our solution" before establishing a
  problem the council recognises.
- Generic "your community" language.
- Hype / future-tense AI claims.

**Conversion triggers.**
- "Book a 30-45 min meeting" CTA, framed as low-effort.
- A named partnership offer, not a sales pitch.
- A worked example that the council can imagine themselves walking
  through with constituents.
- Visible governance hygiene — no procurement, no liability, no
  surrender of editorial control.

**What MUST change per place.**
- Council name + council type + council website
- Press outlets the council uses (e.g. *The Herts Ad* vs *Grantham Journal*)
- Civic events to lean on (Carnival, Christmas lights, mayoral evenings)
- Named partner organisations the council can introduce (Rothamsted,
  Secondary Schools Trust, Age UK Herts → place equivalents)
- Asset inventory wording (council socials, noticeboards, civic
  spaces) tuned to scale (town vs district vs unitary)
- Festival framing tied to the place's actual civic calendar

**What stays universal.**
- The "full partnership / awareness north star" framing
- The six-module Town Council Accelerator structure
- "What we're not asking for" boilerplate
- The structure of the council asset inventory

**Council-type notes.** Town councils have small budgets and large
political appetite for visible community wins. District councils have
larger budgets, more process, and read this through a regeneration /
inclusion / digital-strategy lens. Unitaries cross both. Wording
should adapt: "letterbox drop" for towns becomes "Resident
Communications" for districts.

---

## 2. Local business stakeholders

Independent retailers, hospitality, small professional services, sole
traders, agencies, light-manufacturing — owner-operator scale, not
corporate satellite offices.

**Mental model on arrival.** "Is this another digital-marketing
upsell? I haven't got time. Will I look stupid in a cohort with
20-somethings? Could AI actually save me a day a week, or is that
hype?" Open to the offer but conditioned to expect SaaS bloat.

**Top questions.**
1. Is this for businesses like mine, or only for big-tech types?
2. How much time does it take?
3. What does it cost?
4. Will I look stupid?
5. Have any local independents already done this?
6. What specifically will I leave able to do?
7. Who's running it (and do they understand my world)?

**Trust signals.**
- A named local business in a quote (their patch, their language).
- Named high street / shopping district.
- The Small-Business AI Opportunity Diagnostic — branded, scoped,
  time-boxed.
- "One hour" / "a day a week" specifics, not "transformative".
- Hugo as a real person, not "the team".

**Dealbreakers.**
- Marketing-speak ("unlock", "leverage", "ecosystem").
- A signup form that asks too much before saying what you get.
- Implied need to bring your own laptop / be tech-savvy.
- Cohort prices not shown anywhere.

**Conversion triggers.**
- A pre-bookable diagnostic ("45 minutes, 3 specific moves").
- A free first session at a local venue.
- A named other independent already doing it.
- A clear "this isn't a marketing thing, it's a productivity thing"
  framing.

**What MUST change per place.**
- Named high street / market place / shopping districts
- Dominant local business types (high-end retail vs market-town
  independents vs agricultural-services vs consultancies)
- Named example businesses (with permission)
- Local industry associations / BIDs (Harpenden BID vs
  Stamford BID vs South Kesteven Business Network)
- Sub-segment-aware copy (the page has to land for retail AND
  professional services AND trades)

**What stays universal.**
- AI Night School cohort framing
- Speaker series structure
- The diagnostic tool itself

**Sub-segment risk.** A single page that tries to land for both
"high-street retail" and "trades" reads as speaking to neither. The
recommended mitigation: a quick on-page chooser that filters
language ("I run a shop / I run a service business / I'm a sole
trader") and surfaces sub-segment-relevant examples. Less code than
separate URLs.

---

## 3. Parent stakeholders

Parents of school-age children. Cuts across socioeconomic brackets.

**Mental model on arrival.** Single gating question dominates: **"is
my child the product?"** Until that's answered, nothing else lands.
Once it's answered, the next gate is "do other parents around here
trust this?"

**Top questions.**
1. Is my child going to be safe? (DBS, safeguarding, supervision)
2. Is this real or hype?
3. What do other parents around here think?
4. Does my child's school know about this?
5. What does it cost?
6. What will my child actually leave able to do?
7. Will it eat their summer / weekends?

**Trust signals.**
- Named local schools (recognised by name).
- Hugo himself, with photo, bio, LinkedIn.
- Quoted real parents from the same town.
- DBS / safeguarding language explicit on the teen path.
- Plain-English commitments.
- Photos of past Sherpas cohorts.

**Dealbreakers.**
- Any whiff of selling-to-the-kid.
- Vague language about "outcomes" or "AI literacy" without showing
  what gets built.
- A teen sign-up form with no parent loop.
- Stock photos of teenagers at laptops.

**Conversion triggers.**
- "Take 2 minutes, then we'll send a friendly note to a parent."
- A named family clinic at a familiar venue.
- A previous teen's project shown by name.
- Clear "this is part of education, not extraction" framing.

**What MUST change per place.**
- Named local secondary schools
- Named family-pace community spaces (library, leisure centre, etc.)
- Named local Facebook groups / parenting channels
- Family-relevant local problems (school-run, childcare, transport)

**What stays universal.**
- Sherpas AI offer structure
- Safeguarding / DBS language
- The five-segment model

**Family-shape notes.** Most copy serves all family shapes if it's
written warmly and in plain English. The exception is
neurodivergent-child households — they need an explicit one-sentence
signal that Sherpas welcomes them ("Our cohorts have included autistic
teens, dyslexic teens, and teens who don't love a classroom.").
This should be a universal sentence, not a per-place one.

---

## 4. Community leader stakeholders

Foodbank managers, charity directors, faith leaders, headteachers,
residents' association chairs, U3A conveners, sports-club secretaries,
befriending charity leaders.

**Mental model on arrival.** "Another initiative that wants our
logo. Will I get a phone call from a salesperson tomorrow? Who
actually does the work — me or them? What happens to my
organisation's data if I submit a problem?" Time-pressed, mission-
driven, sceptical of buzzwords, very aware of what's possible inside
a small org.

**Top questions.**
1. What happens to my org's name and data?
2. Who actually does the work?
3. Will I get a sales call?
4. What's expected of us if we engage?
5. Who's seen this work before?
6. Who's running it (real human, please)?
7. Can we say no later without it being awkward?

**Trust signals.**
- Named, real community-org examples (Kings Pantry, Harpenden Trust)
   — not stock NGOs.
- Hugo's real bio with photo.
- Plain-English commitments ("we won't send sales calls").
- DBS / safeguarding for any youth-touching activity.
- Visible working-group operating model — "the residents do the
  work, with you".
- The submission form's explicit consent toggle.

**Dealbreakers.**
- Generic NGO photography.
- "Logo goes here" energy.
- Any ambiguity about who pays / who delivers.
- Buzzwords (synergies, ecosystems, transformative).

**Conversion triggers.**
- A pre-filled submission form with realistic placeholder text.
- A clear "what happens after you submit" promise (3 steps,
  named owner, timeline).
- Existing community projects already on the page (not zero state).
- A named other community leader doing this.

**What MUST change per place.**
- Named local foodbank-equivalents
- Named local charities + trusts
- Named local Facebook groups / community channels
- Named local civic anchors (church halls, community centres)
- Named local crises (current local issues every leader will
  recognise)

**What stays universal.**
- Submission form structure + privacy commitments
- Working-group operating model
- "What happens after you submit" promise structure
- Sub-segment language for foodbank / school / faith / charity / club

---

## Cross-cutting design tensions

The four personas don't all want the same thing.

**Tension 1: council pitch vs community credibility.** Council
stakeholders read defensively, want governance hygiene and
political-risk control. Community leaders read suspiciously, want
plain-English commitments and the absence of corporate framing. The
same page section has to land both ways. Practical resolution: keep
governance language in the council-facing content (`/council`,
`/journey`); keep plain-English-promise language in resident-facing
content (`/welcome`, `/our-organisation`, `/submit-a-problem`).
The view-mode header switch already does this work. **Hold this
discipline as we generalise.**

**Tension 2: parents vs business owners.** Parents need warmth and
patience. Business owners need brevity and time-back. The page has
to do both because they live in the same households. Resolution:
let the persona doors do the segmenting. The leader path can be
brisk; the volunteer path warm; both use the same shell.

**Tension 3: hyper-local specificity vs universal template.** Every
persona, in every research stream, named "named locality" as the
primary trust signal. So the schema has to make hyper-local
specificity *cheap* to author per place. That's the schema design
problem — make it easy to give each council a page that names their
specific streets, schools, charities, press, businesses, by name.

**Tension 4: scope vs sophistication.** Each new place needs ~12
named entities (schools, anchors, charities, press, civic events,
high streets, businesses) to feel real. Less than that and trust
collapses. The research-prompt SOP and the content-team workflow
have to reliably hit that bar.

---

## Schema implications (driving `places/_types.ts`)

Every "must change per place" item above maps to a schema field. The
strawman in `_types.ts` covers the substantive list. Additions
prompted by this research:

1. ✅ **Press outlets array** (council research)
2. ✅ **Civic events array** (council research)
3. ✅ **Council partner names array** (council, community-leader research)
4. ✅ **Anchors array — 6-8 named institutions** (all four)
5. ✅ **Challenges + worked example** (all four)
6. ✅ **Seed problems with named real organisations** (community-leader)
7. ✅ **Persona-page schools / org examples** (parent, community-leader)
8. ➕ **Sub-segment language for businesses** — captured in the
   `personaPages` field as "businessSubsegments" hooks (deferred to
   v2; v1 page can serve the four sub-segments with one piece of
   warm copy if we get the wording right).
9. ➕ **Family-shape inclusivity sentence** — universal, kept in
   page copy not config (parent research).
10. ➕ **DBS / safeguarding sentence on the teen path** — universal,
    kept in page copy not config.

## Open questions for Hugo

1. **Diagnostic-as-personalisation device.** Business research suggested
   adding a quick on-page chooser ("retail / services / trades / sole
   trader") that filters wording. Worth scoping in v2 — flagged here
   because it'd add a small schema field (`businessSubsegments`).
2. **Real-named local businesses + community orgs.** All four research
   streams said named entities are the primary trust signal. We need
   a permission process before publishing real names per place. For
   the 80% drafts (SK + Suffolk-Menta) we should use plausible
   placeholders flagged as "to confirm".
3. **Council-level differentiation.** Town vs district vs unitary
   councils need different power-and-budget framing. Consider a
   `councilTypeFraming` field if we want to do this in copy. For now,
   the `council.type` enum field carries the data; copy adaptation can
   live in shared helper functions.
4. **Brand override per place.** v1 ships with one accent (lime). The
   schema has `brand.accentColour` already. Recommend: don't use it
   yet. Wait for the first council to ask.
5. **Crest / logo per council.** Same as above — schema has
   `brand.crestUrl` and `brand.councilLogoUrl` as optional. Recommend
   off in v1.

These should be revisited after the first council walk-through, not
solved before.
