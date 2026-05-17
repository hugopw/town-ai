#!/usr/bin/env bash
# Build a Town.AI tenant, then scan the rendered HTML/JS for any
# OTHER tenant's place name. Any hit is a cross-tenant leak — a
# silent rendering bug that would destroy credibility on launch
# (e.g. "I live in Harpenden" appearing on the York site).
#
# Usage:
#   ./scripts/check-place-leaks.sh york
#   ./scripts/check-place-leaks.sh brent
#
# Exit codes:
#   0 = clean, no other tenant's name appears in the rendered output
#   1 = leak found (script prints the offending file + lines)
#   2 = bad invocation / missing config
#
# Run this BEFORE every tenant deploy. Wire it into the deploy gate
# so the deploy fails noisily rather than the launch failing quietly.

set -euo pipefail

slug="${1:-}"
if [[ -z "$slug" ]]; then
  echo "usage: $0 <slug>" >&2
  exit 2
fi

if [[ ! -f "site/places/${slug}.ts" ]]; then
  echo "error: site/places/${slug}.ts does not exist." >&2
  exit 2
fi

# Collect every OTHER tenant's `name:` value from site/places/*.ts.
# That's the user-facing short name — the thing that must not appear
# on a different tenant's rendered page. Skip generated and shared
# files (_types.ts, _active.ts) and the slug we're building.
declare -a OTHER_NAMES=()
for cfg in site/places/*.ts; do
  base="$(basename "$cfg" .ts)"
  [[ "$base" == _* || "$base" == "$slug" ]] && continue
  # Extract the `name: "..."` value (first occurrence in the file).
  # `|| true` so a no-match grep doesn't kill pipefail.
  name="$(grep -oE 'name: "[^"]+"' "$cfg" 2>/dev/null | head -1 | sed -E 's/name: "([^"]+)"/\1/' || true)"
  if [[ -n "$name" ]]; then
    OTHER_NAMES+=("$name")
  fi
done

if [[ ${#OTHER_NAMES[@]} -eq 0 ]]; then
  echo "warning: no other tenant names extracted — nothing to check." >&2
  exit 0
fi

echo "=== Place-leak check for: ${slug} ==="
echo "Forbidden tokens (other tenants' display names):"
printf '  - %s\n' "${OTHER_NAMES[@]}"
echo

# Build the tenant. Use NEXT_PUBLIC_PLACE_SLUG (the only accepted env
# var) so the client bundle picks up the right slug.
echo "Building tenant with NEXT_PUBLIC_PLACE_SLUG=${slug}..."
(cd site && NEXT_PUBLIC_PLACE_SLUG="${slug}" bun run build) >/tmp/place-leak-build.log 2>&1 || {
  echo "build FAILED. See /tmp/place-leak-build.log" >&2
  exit 1
}

# Scan the build output for any forbidden token. We scan:
#   site/.next/server/app/**/*.html  — pre-rendered pages
#   site/.next/server/chunks/**/*.js — server chunks
#   site/.next/static/chunks/**/*.js — client chunks (the place where
#     "I live in Harpenden" would have actually been baked)
leak_found=0
for token in "${OTHER_NAMES[@]}"; do
  # Word-boundary match so we don't false-positive on substrings.
  # grep -F = literal, -w = word boundaries.
  hits="$(grep -rwlF "$token" site/.next/server site/.next/static 2>/dev/null || true)"
  if [[ -n "$hits" ]]; then
    leak_found=1
    echo "LEAK: token \"$token\" appears in this tenant's build:" >&2
    echo "$hits" | sed 's/^/    /' >&2
  fi
done

if [[ $leak_found -eq 1 ]]; then
  echo >&2
  echo "FAIL: cross-tenant leak detected. Do NOT deploy." >&2
  echo "Common causes:" >&2
  echo "  - A hardcoded place name in app/ or components/." >&2
  echo "  - A place config referencing another place by name." >&2
  echo "  - PLACE_SLUG set without NEXT_PUBLIC_PLACE_SLUG (client falls back)." >&2
  exit 1
fi

echo
echo "OK: no cross-tenant leaks detected for ${slug}."
