"use client";

import { useState, useMemo } from "react";
import clsx from "clsx";
import { ArrowDown, ArrowUp } from "lucide-react";
import type { PriorityItem } from "@/places/_types";

export function PriorityChooser({
  items: initial,
  contactEmail,
  wordmark,
  placeName,
  placeNoun = "town",
}: {
  items: PriorityItem[];
  contactEmail: string;
  wordmark: string;
  /** Optional - used in the explainer paragraph. Defaults to wordmark. */
  placeName?: string;
  /** Singular noun for the place ("town", "city", "district"). */
  placeNoun?: string;
}) {
  const [items, setItems] = useState<PriorityItem[]>(initial);
  const initialIds = useMemo(
    () => initial.map((it) => it.id).join("|"),
    [initial],
  );

  const move = (index: number, dir: -1 | 1) => {
    const next = [...items];
    const target = index + dir;
    if (target < 0 || target >= next.length) return;
    [next[index], next[target]] = [next[target], next[index]];
    setItems(next);
  };

  const shareMailto = () => {
    const lines = items.map((it, i) => `${i + 1}. ${it.title}`).join("%0A");
    const subject = encodeURIComponent(`My ${wordmark} priorities`);
    return `mailto:${contactEmail}?subject=${subject}&body=${lines}`;
  };

  const reset = () => {
    // restore the original order from props
    setItems(initial.slice());
  };

  return (
    <div
      className="rounded-3xl border border-ink/10 bg-white/80 p-6 shadow-glow backdrop-blur md:p-8"
      data-initial={initialIds}
    >
      <p className="eyebrow">Participate</p>
      <h3 className="mt-2 font-display text-3xl leading-tight md:text-4xl">
        What should we solve together first?
      </h3>
      <p className="mt-3 max-w-2xl text-ink/75">
        Drag-equivalent buttons. Re-order the list to match how you&rsquo;d
        prioritise {placeName ?? wordmark.split(".")[0]}&rsquo;s first community AI projects. This is a
        vision document - today this lives in your browser. When we launch,
        it will feed directly into the {placeNoun}&rsquo;s live project queue.
      </p>

      <ol className="mt-8 space-y-3">
        {items.map((item, i) => (
          <li
            key={item.id}
            className="group flex items-start gap-4 rounded-2xl border border-ink/10 bg-chalk p-4 md:p-5"
          >
            <span
              className={clsx(
                "mt-1 flex h-8 w-8 flex-none items-center justify-center rounded-full font-display text-sm",
                i === 0
                  ? "bg-sun text-ink"
                  : i === 1
                    ? "bg-sun-glow text-ink"
                    : "bg-ink/10 text-ink/70",
              )}
            >
              {i + 1}
            </span>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-3">
                <h4 className="font-display text-lg leading-snug">
                  {item.title}
                </h4>
                <span className="chip chip-sky hidden sm:inline-flex">
                  {item.rough}
                </span>
              </div>
              <p className="mt-1 text-sm text-ink/75">{item.description}</p>
            </div>
            <div className="flex flex-none flex-col gap-1">
              <button
                type="button"
                aria-label={`Move ${item.title} up`}
                onClick={() => move(i, -1)}
                disabled={i === 0}
                className="rounded-full border border-ink/10 bg-white p-1.5 text-ink/70 transition hover:bg-ink hover:text-chalk disabled:opacity-30"
              >
                <ArrowUp className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                aria-label={`Move ${item.title} down`}
                onClick={() => move(i, 1)}
                disabled={i === items.length - 1}
                className="rounded-full border border-ink/10 bg-white p-1.5 text-ink/70 transition hover:bg-ink hover:text-chalk disabled:opacity-30"
              >
                <ArrowDown className="h-3.5 w-3.5" />
              </button>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a href={shareMailto()} className="btn-primary">
          Email my priorities to Hugo
        </a>
        <button type="button" onClick={reset} className="btn-ghost">
          Reset order
        </button>
      </div>
    </div>
  );
}
