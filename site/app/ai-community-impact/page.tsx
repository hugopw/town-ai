import type { Metadata } from "next";
import { CommunityLandingPage } from "@/components/CommunityLandingPage";
import { getPlace } from "@/lib/place";

export function generateMetadata(): Metadata {
  const place = getPlace();
  return {
    title: "AI for community impact",
    description: `For ${place.name} residents who want to use AI to help their neighbours, their volunteering and their advocacy.`,
  };
}

export default function AiCommunityImpactPage() {
  return (
    <CommunityLandingPage
      audienceSlug="ai-community-impact"
      eyebrow="AI for community impact"
      headline="The most useful person in your neighbourhood with AI is the one who already shows up."
      lede="You volunteer. You sit on the residents' association. You run the school fete, the litter pick, the Sunday-night WhatsApp group. AI multiplies what you already do - drafting letters to the council, summarising consultation responses, finding grants, building petitions, writing the case for change. We teach the practical AI skills that turn your existing civic muscle into civic leverage."
      whyMatters={[
        "The {noun}'s civic life depends on the residents who carry the load already. AI doesn't replace them - it gives them tools that used to need a paid researcher or a comms agency.",
        "Local authorities respond best to clear, evidence-led, well-formatted asks. AI helps you get to that quality in an hour rather than a weekend.",
        "Consultations close before most residents know they were open. AI summarises them, drafts a response in your voice, and gets you through more of them than you used to.",
        "Grant funding for community projects favours applications that look professional. AI levels that playing field for the residents-association volunteer competing against a professional bid writer.",
      ]}
      offerCards={[
        {
          title: "A residents' AI toolkit",
          body: "Templates and workflows for the letters, summaries, comparisons and consultation responses every active resident writes again and again. Bring your actual examples; leave with prompts that fit your voice.",
        },
        {
          title: "AI for community fundraising",
          body: "Drafting grant bids, writing the case for support, structuring the impact narrative funders look for. Built around real {name} community causes, not generic charity work.",
        },
        {
          title: "An AI advocacy circle",
          body: "Monthly group session where {name} residents bring the campaigns they're running and the asks they're making, and we work through the AI moves that sharpen each one.",
        },
      ]}
    />
  );
}
