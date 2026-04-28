import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { StatTile } from "@/components/StatTile";
import { SegmentCard } from "@/components/SegmentCard";
import { getPlace } from "@/lib/place";

export function generateMetadata(): Metadata {
  const place = getPlace();
  const noun =
    place.council.type === "county"
      ? "county"
      : place.council.type === "district"
        ? "district"
        : "town";
  return {
    title: `The ${noun}`,
    description: `Who lives in ${place.name}, what they do, and why this ${noun} is the right place to try something bold with AI.`,
  };
}

export default function CommunityPage() {
  const place = getPlace();
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
          <Eyebrow>The {noun}</Eyebrow>
          <h1 className="display-lg mt-3 text-balance">
            {place.name}, drawn from public data.
          </h1>
          <p className="prose-body mt-6">
            This is a vision document, so every figure on this page comes
            from publicly available sources - primarily ONS Census 2021 and
            open district-level data. When the council shares its own
            insight we&rsquo;ll refine these numbers. Until then, the
            directional picture is enough to make the case.
          </p>
        </div>
      </Section>

      <Section tone="white" className="pt-0 md:pt-0">
        <div className="container-page">
          <div className="grid gap-4 md:grid-cols-4">
            {place.stats.community.map((s) => (
              <StatTile key={s.label} {...s} />
            ))}
          </div>
          <p className="mt-6 text-sm text-ink/55">
            {place.stats.communityCaption}
          </p>
        </div>
      </Section>

      <Section tone="chalk">
        <div className="container-page grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow>The thesis</Eyebrow>
            <h2 className="display-md mt-3 text-balance">
              Why {place.name} specifically - and why now.
            </h2>
            <div className="prose-body mt-6 space-y-5">
              {place.thesis.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className="card-dark">
            <p className="eyebrow text-sun">Local anchors</p>
            <ul className="mt-5 space-y-3 text-chalk/85">
              {place.anchors.map((a) => (
                <li key={a.name}>
                  <strong dangerouslySetInnerHTML={{ __html: a.name }} />
                  {a.role ? (
                    <> - <span>{a.role}</span></>
                  ) : null}
                  {a.use ? <>. {a.use}</> : "."}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="container-page">
          <Eyebrow tone="sun">Five {place.name}s</Eyebrow>
          <h2 className="display-md mt-3 max-w-3xl text-balance">
            Every intervention is mapped to the segments it serves.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            <SegmentCard
              number="1"
              title="Already in it"
              blurb="Early adopters. Building with AI. Want peer-level depth."
              need="Advanced cohorts, train-the-trainer, harder projects."
              tone="sun"
            />
            <SegmentCard
              number="2"
              title="Started - overwhelmed"
              blurb="Tried half a dozen tools. Can feel the shift. Needs focus."
              need="Coaching, a simple personal AI stack."
              tone="sky"
            />
            <SegmentCard
              number="3"
              title="Know they should"
              blurb="Intention high, confidence low. Needs a friendly first step."
              need="AI Night School, a mentor, a cohort."
              tone="meadow"
            />
            <SegmentCard
              number="4"
              title="Reluctant"
              blurb="Sceptical of hype. Not opposed - unconvinced."
              need="Local proof, practical wins, no hype."
              tone="warm"
            />
            <SegmentCard
              number="5"
              title="Scared"
              blurb="Often older residents. Needs warmth and patience."
              need="In-person clinics, one-to-one support, time."
              tone="ink"
            />
          </div>
        </div>
      </Section>

      <Section tone="ink">
        <div className="container-page max-w-3xl">
          <Eyebrow tone="sun">A multi-generational {noun}</Eyebrow>
          <h2 className="display-md mt-3 text-balance">
            The offers are deliberately designed so a teenager, their parent,
            and their grandparent can each find a door that&rsquo;s right
            for them.
          </h2>
          <p className="mt-6 text-chalk/80">
            Sherpas AI for teenagers. AI Night School for parents and
            working-age residents. In-person clinics for older residents.
            The Transformation Accelerator for the businesses they all
            depend on. And a council-facing version for the institution
            that connects them all.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/interventions" className="btn-primary bg-sun text-ink hover:bg-sun-warm hover:text-chalk">
              Browse the interventions
            </Link>
            <Link href="/resident-offer" className="btn-ghost border-white/30 bg-white/10 text-chalk hover:bg-white/20">
              The resident-only offer
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
