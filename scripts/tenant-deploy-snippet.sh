#!/usr/bin/env bash
# Print the two deployment artefacts needed to host a new Town.AI
# tenant under ainightschool.org/<slug>-ai.
#
# Usage:
#   ./scripts/tenant-deploy-snippet.sh york
#   ./scripts/tenant-deploy-snippet.sh brent
#   ./scripts/tenant-deploy-snippet.sh st-neots
#
# Output: human-readable instructions + copy-paste blocks for
#   (a) the Vercel project env vars on the tenant project
#   (b) the rewrite entries to add to ainightschool-website-pr/vercel.json
#   (c) the optional nested-tool rewrite pair (commented out)
#
# This script does NOT touch any deployment. It only prints what to
# do, so the human stays in control of the production change.

set -euo pipefail

slug="${1:-}"
if [[ -z "$slug" ]]; then
  echo "usage: $0 <slug>" >&2
  echo "example: $0 york" >&2
  exit 1
fi

if [[ ! -f "site/places/${slug}.ts" ]]; then
  echo "error: site/places/${slug}.ts does not exist. Create the place config first." >&2
  exit 1
fi

cat <<EOF
=== Tenant deployment snippet for: ${slug} ===

STEP 1 — Tenant Vercel project (one-time)
-----------------------------------------
Create a new Vercel project pointed at this repo, root = site/.
Set the following Environment Variables (all environments):

  NEXT_PUBLIC_PLACE_SLUG=${slug}
  TOWN_AI_BASE_PATH=/${slug}-ai

NEXT_PUBLIC_PLACE_SLUG (NOT PLACE_SLUG) — the NEXT_PUBLIC_ prefix
makes the value visible in the client bundle. Without it, client
components fall back to the default place and silently render the
wrong town's name on resident-mode buttons.

Production URL will be: https://${slug}-ai.vercel.app
Pages will be served under: https://${slug}-ai.vercel.app/${slug}-ai/...

STEP 2 — ainightschool-website-pr proxy rewrites
------------------------------------------------
Add these two entries to ainightschool-website-pr/vercel.json
inside the "rewrites" array:

  {
    "source": "/${slug}-ai",
    "destination": "https://${slug}-ai.vercel.app/${slug}-ai"
  },
  {
    "source": "/${slug}-ai/:path*",
    "destination": "https://${slug}-ai.vercel.app/${slug}-ai/:path*"
  }

After ainightschool deploys, the tenant is live at:
  https://ainightschool.org/${slug}-ai

STEP 3 — Optional nested tool rewrites
--------------------------------------
If the place has its own data tool deployed separately (the way
Harpenden has harpenden-traffic-ecosystem-explore), add a matching
pair BEFORE the two above, e.g.:

  {
    "source": "/${slug}-ai/<tool-slug>",
    "destination": "https://<tool-vercel-url>"
  },
  {
    "source": "/${slug}-ai/<tool-slug>/:path*",
    "destination": "https://<tool-vercel-url>/:path*"
  }

Order matters: nested entries MUST come before the general
/${slug}-ai/:path* rewrite, otherwise the general rule wins.

EOF
