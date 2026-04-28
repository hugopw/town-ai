# Town.AI

Multi-tenant council-pitch website. The same codebase serves
Harpenden, South Kesteven, Suffolk-Menta, and any future UK
council that wants its community AI-fluent at town scale.

**Owner:** Hugo Pickford-Wardle (AI Optimist)
**Status:** v0 - extracting Harpenden content from harpenden-ai
into the multi-tenant pattern.

## How it works

- One Next.js codebase under `site/`.
- Place-specific content lives in `site/places/<slug>.ts`.
- `PLACE_SLUG=<slug>` env var picks the active place at build
  time. Each council gets its own Vercel project pointed at the
  same repo with a different env var.
- Universal stuff (brand, IA, components, persona doors,
  intervention directory, forms, video catalogue, journey,
  inclusive-design rules) doesn't change.
- Place-specific stuff (thesis, stats, anchors, challenges, seed
  problems, council assets, partners, worked example, speaker
  series) all lives in the config.

## Files

- `PLAN.md` — multi-place architecture plan.
- `STAKEHOLDER-RESEARCH.md` — UX research findings driving the
  per-place content schema.
- `site/places/_types.ts` — the `Place` TypeScript shape.
- `site/places/_research-prompt.md` — the LLM-driven place-research
  SOP for new locations.
- `site/places/harpenden.ts` — Harpenden config (extracted from
  the existing site).
- `site/places/southkesteven.ts` — South Kesteven config (80%
  draft for visual QA).
- `site/places/suffolk-menta.ts` — Suffolk / Menta config (80%
  draft for visual QA).

## Adding a new place

1. Run the research prompt at `site/places/_research-prompt.md`
   against the new location.
2. Save output as `site/places/<slug>.ts`.
3. Edit and fact-check (1-2 hours).
4. Create a new Vercel project with `PLACE_SLUG=<slug>`.
5. Deploy.

## Attribution

Developed by Hugo Pickford-Wardle - AI Optimist.
