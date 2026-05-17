import type { Metadata } from "next";
import { CommunityLandingPage } from "@/components/CommunityLandingPage";
import { getPlace } from "@/lib/place";

export function generateMetadata(): Metadata {
  const place = getPlace();
  return {
    title: "AI for creatives",
    description: `For ${place.name}'s writers, designers, musicians, photographers and performers - AI that respects the craft.`,
  };
}

export default function AiCreativesPage() {
  return (
    <CommunityLandingPage
      audienceSlug="ai-creatives"
      eyebrow="AI for creatives"
      headline="The craft hasn't changed. The room around the craft has."
      lede="Writers, designers, musicians, photographers, performers - the ones in {name} who actually make things. AI is the loudest new voice in your studio, and it deserves an honest practitioner's response. We work through what AI does badly (most things), what it does well (a few things, very well), and how to fold those into your practice on your terms."
      whyMatters={[
        "Creatives in {name} are being told AI will replace them and that AI will liberate them - both by people who don't make anything. The truth needs a practitioner's room.",
        "AI is excellent at the unglamorous parts of creative work - briefs, contracts, scheduling, social posts, supplier emails - that already steal time from the work itself.",
        "Clients and commissioners are using AI in their own commissioning briefs. Creatives who understand how those briefs are now built can shape them, not just respond to them.",
        "The hardest part of using AI well in a creative practice is knowing where to draw the line. That's a conversation between practitioners, not a tutorial.",
      ]}
      offerCards={[
        {
          title: "An AI practice workshop",
          body: "Half a day with practising creatives from {name}, working through the specific AI moves that fit your medium - prose, design, image, audio, performance, code. Honest about what AI shouldn't do.",
        },
        {
          title: "The business-of-creativity AI kit",
          body: "Briefs, contracts, invoicing, social, supplier and client comms. The unglamorous half of a creative practice. AI takes the chore work; you keep the work.",
        },
        {
          title: "An AI-and-craft conversation circle",
          body: "Quarterly gathering where {name} creatives bring something AI helped them make and something AI failed at. The room is where the craft actually adapts.",
        },
      ]}
    />
  );
}
