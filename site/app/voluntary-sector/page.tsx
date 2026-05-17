import type { Metadata } from "next";
import { CommunityLandingPage } from "@/components/CommunityLandingPage";
import { getPlace } from "@/lib/place";

export function generateMetadata(): Metadata {
  const place = getPlace();
  return {
    title: "For the voluntary sector",
    description: `AI fluency for ${place.name}'s charities, community groups and CVS-equivalent organisations.`,
  };
}

export default function VoluntarySectorPage() {
  return (
    <CommunityLandingPage
      audienceSlug="voluntary-sector"
      eyebrow="For the voluntary sector"
      headline="Small charities run on goodwill and admin. AI takes the admin."
      lede="Charities and community groups in {name} carry a quarter of every staff member's week in admin - funding bids, volunteer scheduling, impact reporting, case-load triage, the third draft of the same letter. AI moves that work in a fraction of the time, so the people you exist to help spend less of theirs waiting."
      whyMatters={[
        "The voluntary sector reaches residents that no council channel touches. When AI gives a small charity time back, the time gets given to people the {noun} would otherwise miss.",
        "Funders increasingly expect AI-ready applications - well-structured, evidence-led, properly scoped. Charities without that fluency will lose ground to ones who have it.",
        "Case-work triage, beneficiary communications and impact reporting are the three highest-leverage AI use cases in any small charity. Get those right and every team member gets a week of their month back.",
        "The local CVS is the multiplier. A single charity that adopts AI well is helpful; a cohort of five, coordinated by the CVS, becomes the {noun}'s evidence base.",
      ]}
      offerCards={[
        {
          title: "A 90-day charity AI engagement",
          body: "We embed with one charity for ninety days, work through the admin that quietly eats your week, and leave you with prompts, templates and a workflow your team owns. Not consultancy. Coaching.",
        },
        {
          title: "A CVS-convened cohort of five",
          body: "Your CVS picks five charities, we run them through the same 90-day arc in parallel, and we document the lift in measurable hours-per-month returned to frontline work. Replicable model.",
        },
        {
          title: "AI for funding bids",
          body: "A focused workshop on writing better grant applications faster, without losing your charity's voice. Two-hour session, three real bids drafted in the room.",
        },
      ]}
    />
  );
}
