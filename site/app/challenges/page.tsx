import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { PriorityChooser } from "@/components/PriorityChooser";
import { getPlace } from "@/lib/place";

export function generateMetadata(): Metadata {
  const place = getPlace();
  return {
    title: "Community challenges",
    description: `The local problems a fluent ${place.name} can solve together - real, named, and ready to work on.`,
  };
}

export default function ChallengesPage() {
  const place = getPlace();
  return (
    <>
      <Section tone="chalk">
        <div className="container-page max-w-4xl">
          <Eyebrow>Community challenges</Eyebrow>
          <h1 className="display-lg mt-3 text-balance">
            The problems a fluent {place.name} can solve together - in public.
          </h1>
          <p className="prose-body mt-6">
            Each of these is a real {place.name} problem, framed as a
            resident-led AI project. None need the council to build
            anything. They need the council to help us signal that
            they&rsquo;re worth doing - and to connect the people who
            can run them.
          </p>
        </div>
      </Section>

      <Section tone="sky" className="pt-0 md:pt-0">
        <div className="container-page">
          <PriorityChooser
            items={place.priorityItems}
            contactEmail={place.contact.email}
            wordmark={place.wordmark}
            placeName={place.name}
          />
        </div>
      </Section>

      <Section tone="white">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2">
            {place.challenges.map((c) => (
              <article
                key={c.id}
                className="card flex h-full flex-col gap-4"
              >
                <h3 className="font-display text-2xl leading-tight">
                  {c.title}
                </h3>
                <p className="text-ink/80">{c.pitch}</p>
                <div className="mt-2 space-y-2 text-sm">
                  <p>
                    <span className="text-ink/55">Why this one: </span>
                    {c.why}
                  </p>
                  <p>
                    <span className="text-ink/55">Likely owner: </span>
                    {c.owner}
                  </p>
                  <p>
                    <span className="text-ink/55">First iteration: </span>
                    {c.first}
                  </p>
                </div>
                {c.href ? (
                  <Link
                    href={c.href}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-sky-deep"
                  >
                    See the worked example <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="ink">
        <div className="container-narrow text-center">
          <Eyebrow tone="sun">The frame</Eyebrow>
          <h2 className="display-md mt-3 text-balance">
            None of these challenges need the council to become a
            technology department.
          </h2>
          <p className="mt-6 text-chalk/80">
            They need the council to help us convene residents, signal
            that community AI projects are welcome, and share the data
            they&rsquo;re willing to share. The residents do the rest.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/council" className="btn-primary bg-sun text-ink hover:bg-sun-warm hover:text-chalk">
              The council&rsquo;s role, in detail
            </Link>
            <Link href="/journey" className="btn-ghost border-white/30 bg-white/10 text-chalk hover:bg-white/20">
              The journey to get there
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
