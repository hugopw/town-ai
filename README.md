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
4. Run `./scripts/tenant-deploy-snippet.sh <slug>` — it prints
   the env vars for the tenant Vercel project AND the rewrite
   pair to paste into `ainightschool-website-pr/vercel.json`.
5. Create the tenant Vercel project (root = `site/`) with those
   env vars. It deploys to `<slug>-ai.vercel.app`.
6. Paste the rewrite pair into `ainightschool-website-pr/vercel.json`
   and deploy that repo. The tenant goes live at
   `ainightschool.org/<slug>-ai`.

## Cross-tenant leak guardrail

Before every tenant deploy, run:

    ./scripts/check-place-leaks.sh <slug>

It builds the tenant and greps the rendered output for every OTHER
tenant's display name. Any hit is a leak (e.g. "I live in Harpenden"
appearing on the York site) and fails the build. Wire it into the
deploy gate. Non-negotiable.

The build itself is structurally protected: `scripts/select-place.ts`
runs before `next dev` / `next build` and writes `places/_active.ts`
as a single-export re-export of the active place, so only that one
config gets bundled. The leak guardrail is the belt-and-braces check
that proves the protection is still working as the codebase evolves.

## Hosting model (the repeatable pattern)

Each tenant is **two Vercel projects glued by a rewrite**:

- **Tenant project** — `town-ai/site/` repo, with env vars
  `PLACE_SLUG=<slug>` and `TOWN_AI_BASE_PATH=/<slug>-ai`. The
  basePath makes Next.js render every route under the sub-path.
- **Master proxy** — `ainightschool-website-pr/vercel.json` has a
  pair of rewrite entries per tenant that forward
  `ainightschool.org/<slug>-ai[/:path*]` to the tenant deployment.
- **Optional nested tools** — if a place has its own data tool
  (e.g. Harpenden's traffic ecosystem explorer), an extra rewrite
  pair forwards `ainightschool.org/<slug>-ai/<tool>` to that
  tool's Vercel URL. These nested entries MUST appear BEFORE the
  general `/<slug>-ai/:path*` rewrite in the JSON, or the general
  rule swallows them.

Harpenden is the live reference implementation
(`ainightschool.org/harpenden-ai`). Every new place reuses this
pattern unchanged.

## Attribution

Developed by Hugo Pickford-Wardle - AI Optimist.
