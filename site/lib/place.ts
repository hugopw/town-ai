// Loads the active place at build time. PLACE_SLUG env var picks
// which config in places/<slug>.ts is rendered. Defaults to
// 'harpenden' so an undecorated `bun run dev` still yields the
// known-good baseline.

import type { Place, PlaceSlug } from "@/places/_types";
import { harpenden } from "@/places/harpenden";
import { southkesteven } from "@/places/southkesteven";
import { suffolkMenta } from "@/places/suffolk-menta";

const REGISTRY: Record<string, Place> = {
  harpenden,
  southkesteven,
  "suffolk-menta": suffolkMenta,
};

const FALLBACK: PlaceSlug = "harpenden";

// Place slug is resolved from env. NEXT_PUBLIC_PLACE_SLUG is preferred
// because it's available on both the server and the client bundle, so
// the same `getPlace()` works inside server pages and inside any
// client component that gets pulled into the browser bundle.
// PLACE_SLUG (server-only) is supported as a fallback for build-time
// configs that don't want to expose the slug.
export function getPlace(): Place {
  const slug =
    (process.env.NEXT_PUBLIC_PLACE_SLUG ??
      process.env.PLACE_SLUG ??
      FALLBACK).toLowerCase();
  const place = REGISTRY[slug];
  if (!place) {
    throw new Error(
      `Unknown place slug "${slug}". Known places: ${Object.keys(REGISTRY).join(", ")}`,
    );
  }
  return place;
}

export function listPlaces(): Place[] {
  return Object.values(REGISTRY);
}
