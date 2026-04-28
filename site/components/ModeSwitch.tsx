"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import { getPlace } from "@/lib/place";

// Routes that belong to the resident view. Anything outside this list
// is treated as council view.
const RESIDENT_PREFIXES = [
  "/welcome",
  "/im-a-leader",
  "/im-a-teen",
  "/im-volunteering",
  "/our-organisation",
  "/submit-a-problem",
  "/community-projects",
];

export function ModeSwitch({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname() ?? "/";
  const isResident = RESIDENT_PREFIXES.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );

  const place = getPlace();
  const label = isResident ? "Council view" : `I live in ${place.name}`;
  const target = isResident ? "/" : "/welcome";

  return (
    <Link
      href={target}
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full border font-semibold transition",
        compact
          ? "px-3 py-1.5 text-xs"
          : "px-4 py-2 text-sm",
        isResident
          ? "border-midnight/15 bg-white text-midnight hover:bg-midnight hover:text-lime"
          : "border-lime bg-lime text-midnight hover:bg-lime-deep"
      )}
      aria-label={`Switch to ${label}`}
    >
      {label}
      <ArrowRight className={compact ? "h-3.5 w-3.5" : "h-4 w-4"} />
    </Link>
  );
}
