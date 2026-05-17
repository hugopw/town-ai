import type { Metadata } from "next";
import { CommunityLandingPage } from "@/components/CommunityLandingPage";
import { getPlace } from "@/lib/place";

export function generateMetadata(): Metadata {
  const place = getPlace();
  return {
    title: "For schools",
    description: `AI fluency for ${place.name}'s heads, teachers and school communities.`,
  };
}

export default function SchoolsPage() {
  return (
    <CommunityLandingPage
      audienceSlug="schools"
      eyebrow="For schools"
      headline="Schools are the front line of an AI conversation parents aren't ready for."
      lede="Heads, teachers and pastoral teams in {name} are fielding questions about AI - from sixth-formers, from parents, from governors - faster than the curriculum is changing. We work with school communities to turn that pressure into a coherent, grown-up AI position - and to give pupils the practical fluency they will leave you with."
      whyMatters={[
        "Pupils are already using generative AI for coursework, revision and identity exploration - the question is whether their school is shaping how, or watching it happen.",
        "Parents are looking to schools for a credible position. Most schools don't have one yet because no one has had time to write one.",
        "Teachers' workload is the single highest-leverage place AI can give time back - lesson planning, differentiation, marking, parent comms - if the policy frame is right.",
        "School leadership teams in {name} who get ahead of this become the trusted voice the {noun} turns to. The ones that wait become the ones quoted in the local paper when something goes wrong.",
      ]}
      offerCards={[
        {
          title: "A whole-school AI position in a term",
          body: "We facilitate the SLT conversation, draft the policy in your voice, train your DSL and DPO on the data implications, and brief governors. Not a deck. A position your community can hold to.",
        },
        {
          title: "Practical fluency for teachers",
          body: "Subject-specific workshops that show teachers how AI saves them time without compromising the craft. Marking, differentiation, planning, parent comms. Honest about what AI does badly.",
        },
        {
          title: "Sixth-form AI builders",
          body: "Partner with Sherpas AI to give your sixth-formers a summer cohort that ships real AI tools for real local organisations. The opposite of theory. The thing they put on a personal statement.",
        },
      ]}
    />
  );
}
