import clsx from "clsx";
import { getPlace } from "@/lib/place";

type Tone = "default" | "light" | "midnight" | "lime" | "sherpas";

export function Wordmark({
  tone = "default",
  size = "md",
  className,
  /** Optional override - useful for client components that can't call getPlace() directly. */
  text: overrideText,
  accent: overrideAccent,
}: {
  tone?: Tone;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  text?: string;
  accent?: string;
}) {
  const place = getPlace();
  // We split the wordmark on the configured accent character so
  // the dot can be coloured separately.
  const accent = overrideAccent ?? place.wordmarkAccent;
  const wm = overrideText ?? place.wordmark;
  const idx = wm.lastIndexOf(accent);
  const head = idx === -1 ? wm : wm.slice(0, idx);
  const tail = idx === -1 ? "" : wm.slice(idx + accent.length);
  const text = {
    default: "text-ink",
    light: "text-chalk",
    midnight: "text-midnight",
    lime: "text-midnight",
    sherpas: "text-white",
  }[tone];
  const dot = {
    default: "text-lime-deep",
    light: "text-lime",
    midnight: "text-lime",
    lime: "text-midnight",
    sherpas: "text-white",
  }[tone];
  const sizing = {
    sm: "text-base md:text-lg",
    md: "text-lg md:text-xl",
    lg: "text-2xl md:text-3xl",
    xl: "text-4xl md:text-5xl",
  }[size];
  return (
    <span
      className={clsx(
        "font-display tracking-tight",
        sizing,
        text,
        className
      )}
    >
      {head}
      <span className={clsx("font-display", dot)}>{accent}</span>
      {tail}
    </span>
  );
}
