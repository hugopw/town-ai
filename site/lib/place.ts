// Loads the active place. The build system writes places/_active.ts
// from NEXT_PUBLIC_PLACE_SLUG before next dev / next build runs (see
// scripts/select-place.ts and package.json). Importing only the
// active place keeps every OTHER tenant's strings out of the bundle —
// which is the only way "I live in Harpenden" can never appear on
// the York site. Structural fix, not a runtime check.

import type { Place } from "@/places/_types";
import { activePlace } from "@/places/_active";

export function getPlace(): Place {
  return activePlace;
}
