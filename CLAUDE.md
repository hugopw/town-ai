# Town.AI

A multi-tenant council-pitch website. One codebase, many UK
locations. The current single-tenant ancestor lives at
`/Users/hugopw/AI Projects/harpenden-ai/` and is deployed at
`ainightschool.org/harpenden-ai`. This project carries the same
structure forward but with all place-specific content extracted
into `site/places/${slug}.ts` config files so a new location
spins up by writing one config, not by forking.

## Working here

- Place identity is selected at build time via
  `NEXT_PUBLIC_PLACE_SLUG=<slug>` (required — there is no default).
  The active config is loaded by `site/lib/place.ts`. The
  `NEXT_PUBLIC_` prefix is non-negotiable: it is the only way the
  slug reaches the client bundle, so client components render the
  right place's name. Setting `PLACE_SLUG` alone is rejected on
  purpose and throws at startup.
- The QA bar for the Harpenden tenant is a **byte-equivalent
  visual rendering** of the current `harpenden-ai` deployment. If
  the Harpenden site looks any different after refactor, that's a
  bug.
- The `places/` config files are the contract for the content
  prompt Hugo is writing separately. Treat the `Place` TypeScript
  type as the schema; everything below it is content.

## Tech stack (inherited from harpenden-ai)

- Next.js 15 (App Router) + Tailwind + shadcn-style components
- Bun for package management and scripts
- TypeScript strict
- Static-rendered pages, deployed to Vercel
- localStorage data store for demo, Supabase swap documented

## Voice

- Optimistic, grounded, specific. Avoid AI hype clichés.
- Talk about people first (residents, businesses, teens, retirees,
  council), not technology.
- Frame risk honestly without fear-mongering.
- Each place's voice must sound like it was written for that
  council, not adapted from a template.

## Attribution

Developed by Hugo Pickford-Wardle - AI Optimist.
