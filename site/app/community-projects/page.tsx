import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { CommunityProjectsList } from "@/components/CommunityProjectsList";
import { getPlace } from "@/lib/place";

export function generateMetadata(): Metadata {
  const place = getPlace();
  return {
    title: "Live community projects",
    description: `Real ${place.name} problems, posted by real ${place.name} organisations. Pick one to join - or submit your own.`,
  };
}

export default function CommunityProjectsPage() {
  const place = getPlace();
  return (
    <>
      <Section tone="chalk">
        <div className="container-page max-w-4xl">
          <Eyebrow>Live community projects</Eyebrow>
          <h1 className="display-lg mt-3 text-balance text-midnight">
            Real problems. Real organisations. Open for residents to
            join.
          </h1>
          <p className="prose-body mt-6">
            Each project below was submitted by a {place.name}
            {" "}organisation. Add your email to any project to join the
            working group - we’ll let you know when the
            kick-off is. Or, if you run an organisation,{" "}
            <Link href="/submit-a-problem" className="underline underline-offset-4">
              add your own problem
            </Link>
            .
          </p>
          <p className="mt-4 text-sm text-midnight/55">
            Demo note: this list is stored in your browser for the
            walk-through. The shared database goes in next.
          </p>
        </div>
      </Section>
      <Section tone="white" className="pt-0 md:pt-0">
        <div className="container-page max-w-4xl">
          <CommunityProjectsList />
        </div>
      </Section>

      <Section tone="ink">
        <div className="container-narrow text-center">
          <Eyebrow tone="sun">Got a problem to share?</Eyebrow>
          <h2 className="display-md mt-3 text-balance">
            Two minutes. Your organisation, on the list.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/submit-a-problem" className="btn-lime">
              Submit a problem
            </Link>
            <Link href="/our-organisation" className="btn-ghost border-white/30 bg-white/10 text-chalk hover:bg-white/20">
              Learn more first
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
