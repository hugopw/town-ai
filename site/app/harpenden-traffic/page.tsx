import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { getPlace } from "@/lib/place";

export function generateMetadata(): Metadata {
  const place = getPlace();
  return {
    title: `Worked example - ${place.workedExample.title}`,
    description: place.workedExample.shortDescription,
  };
}

export default function TrafficPage() {
  const place = getPlace();
  const ex = place.workedExample;
  const noun =
    place.council.type === "county"
      ? "county"
      : place.council.type === "district"
        ? "district"
        : "town";
  return (
    <>
      <Section tone="chalk">
        <div className="container-page max-w-4xl">
          <Eyebrow>Worked example - community empowerment</Eyebrow>
          <h1 className="display-lg mt-3 text-balance">{ex.heroHeadline}</h1>
          {ex.narrative.map((p, i) => (
            <p key={i} className={i === 0 ? "prose-body mt-6" : "prose-body mt-4"}>
              {p}
            </p>
          ))}
        </div>
      </Section>

      <Section tone="sun" className="py-14 md:py-16">
        <div className="container-page">
          <div className="rounded-3xl border border-ink/15 bg-white/85 p-8 shadow-glow md:p-10">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="max-w-2xl">
                <Eyebrow tone="sun">Open the tool</Eyebrow>
                <h2 className="display-sm mt-2">
                  {ex.title} - the live, working version
                </h2>
                <p className="mt-3 text-ink/80">
                  This page tells the story of <em>why</em> we built it.
                  {ex.liveToolUrl ? (
                    <>
                      {" "}The live tool itself - the one residents actually use -
                      lives next door at{" "}
                      {ex.liveToolUrl.replace(/^https?:\/\//, "")}.
                      Open it, kick the tyres, and come back here for the method
                      behind it.
                    </>
                  ) : (
                    <>
                      {" "}The live tool is in development. This page sets the method;
                      the working app launches alongside the next council meeting.
                    </>
                  )}
                </p>
              </div>
              {ex.liveToolUrl ? (
                <a
                  href={ex.liveToolUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-chalk shadow-glow transition hover:bg-sky-deep"
                >
                  {ex.liveToolLabel ?? "Open the live tool"}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-full bg-ink/10 px-5 py-3 text-sm font-medium text-ink/60">
                  {ex.liveToolLabel ?? "Live tool coming soon"}
                </span>
              )}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="container-page">
          <Eyebrow>Who does what</Eyebrow>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ex.roles.map((r) => (
              <article key={r.name} className="card">
                <h3 className="font-display text-xl leading-tight">{r.name}</h3>
                <p
                  className="mt-3 text-ink/80"
                  dangerouslySetInnerHTML={{ __html: r.role }}
                />
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="sky">
        <div className="container-page">
          <Eyebrow>The six steps</Eyebrow>
          <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ex.steps.map((s) => (
              <li
                key={s.n}
                className="rounded-3xl border border-ink/10 bg-white/80 p-6 backdrop-blur"
              >
                <p className="font-display text-sm text-sky-deep">{s.n}</p>
                <h3
                  className="mt-3 font-display text-xl leading-tight"
                  dangerouslySetInnerHTML={{ __html: s.title }}
                />
                <p
                  className="mt-3 text-sm text-ink/80"
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="ink">
        <div className="container-narrow">
          <Eyebrow tone="sun">Why this one first</Eyebrow>
          <h2
            className="display-md mt-3 text-balance"
            dangerouslySetInnerHTML={{ __html: ex.whyFirst.headline }}
          />
          <p
            className="mt-6 text-chalk/85"
            dangerouslySetInnerHTML={{ __html: ex.whyFirst.body }}
          />
          <p className="mt-4 text-chalk/85">
            The same method ports straight to every other community problem
            this {noun} chooses to take on. {ex.title} is the prototype. Empowerment
            is the product.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {ex.liveToolUrl ? (
              <a
                href={ex.liveToolUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-sun px-5 py-3 text-sm font-medium text-ink shadow-warm transition hover:bg-sun-warm hover:text-chalk"
              >
                {ex.liveToolLabel ?? "Open the live tool"}{" "}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : null}
            <Link
              href="/challenges"
              className="btn-ghost border-white/30 bg-white/10 text-chalk hover:bg-white/20"
            >
              Browse all community challenges
            </Link>
            <Link
              href="/interventions"
              className="btn-ghost border-white/30 bg-white/10 text-chalk hover:bg-white/20"
            >
              See the Problemarium
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
