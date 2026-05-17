import type { Metadata } from "next";
import { CommunityLandingPage } from "@/components/CommunityLandingPage";
import { getPlace } from "@/lib/place";

export function generateMetadata(): Metadata {
  const place = getPlace();
  return {
    title: "For sports clubs",
    description: `AI fluency for ${place.name}'s sports clubs - admin, comms, fundraising and coaching.`,
  };
}

export default function SportsClubsPage() {
  return (
    <CommunityLandingPage
      audienceSlug="sports-clubs"
      eyebrow="For sports clubs"
      headline="Your club runs on volunteers. AI is the thing that gives them a Saturday back."
      lede="Local sports clubs in {name} run on a handful of people doing twenty jobs each - bookings, kit, comms, safeguarding paperwork, sponsorship asks, match reports, social media. AI does the admin so your volunteers can do what they joined to do: coach, organise, win."
      whyMatters={[
        "Sports clubs are some of the few institutions in {name} that reach every age, background and postcode. That makes them disproportionately important when AI fluency shifts whole communities.",
        "The admin burden is the single biggest reason volunteers quit. AI takes the worst of it - rotas, comms, fundraising letters, match reports - in a fraction of the time.",
        "Sponsorship and grant funding now expects an AI-ready application. Clubs that can write a good one in an hour will get funded; clubs that can't, won't.",
        "Coaches who use AI to personalise drills, review video and plan sessions consistently get more out of the same players - including in junior sport, where it matters most.",
      ]}
      offerCards={[
        {
          title: "One-evening volunteer rescue",
          body: "A 90-minute workshop with your committee on the three AI moves that buy you back the most volunteer hours - WhatsApp comms, fixture changes, fundraising appeals. Sleeves rolled up. Real club examples.",
        },
        {
          title: "An AI fundraising kit for grants and sponsors",
          body: "Templates, tone-of-voice prompts and a workflow your treasurer or club chair can re-use for every funding round. Built around your actual club, not a generic charity.",
        },
        {
          title: "AI for coaches and managers",
          body: "Practical use cases for personalising sessions, reviewing video clips, and planning a season - the things that turn a good volunteer coach into one who lasts.",
        },
      ]}
    />
  );
}
