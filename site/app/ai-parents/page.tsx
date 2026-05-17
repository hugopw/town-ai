import type { Metadata } from "next";
import { CommunityLandingPage } from "@/components/CommunityLandingPage";
import { getPlace } from "@/lib/place";

export function generateMetadata(): Metadata {
  const place = getPlace();
  const label = place.welcome?.parentsCardLabel ?? "AI for Parents";
  return {
    title: label,
    description: `${label} - for ${place.name}'s parents, grandparents and older residents who want to understand AI on their own terms.`,
  };
}

export default function AiParentsPage() {
  const place = getPlace();
  const label = place.welcome?.parentsCardLabel ?? "AI for Parents";
  return (
    <CommunityLandingPage
      audienceSlug="ai-parents"
      eyebrow={label}
      headline="AI is in your child's homework, your pension provider's letter and your GP's appointment system. Understanding it is the first step to staying yourself in front of it."
      lede="A patient, jargon-free path through AI for parents, grandparents and older residents in {name}. We do not push, we do not patronise, and we do not promise that AI will make your life better. We show you what's actually happening, give you tools to spot when it's helping and when it's not, and leave you better equipped for the conversations your family is already having."
      whyMatters={[
        "Older residents in {name} are the most targeted audience for AI-powered scams and the least supported in spotting them. Knowing what AI sounds like is a quiet form of protection.",
        "Parents of school-age children are being asked AI questions by their kids that schools haven't answered yet. Honest, calm answers from a parent matter more than a perfect one from a teacher.",
        "Pension providers, energy companies, councils and the NHS are all introducing AI into the letters, calls and forms older residents already have to deal with. Knowing it's there changes what to push back on.",
        "Grandparents who can talk credibly about AI with their grandchildren build relationships across two decades of technology change. That's worth a great deal more than the AI itself.",
      ]}
      offerCards={[
        {
          title: "A drop-in clinic at your library",
          body: "Weekly, slow, jargon-free. Bring your phone, your email inbox, your worried letter from the pension provider. We sit with you until it makes sense.",
        },
        {
          title: "An AI-and-family conversation",
          body: "Once a month, in a warm room with tea, an honest hour on the AI questions your family is asking. Real examples from {name}. No slides, no jargon.",
        },
        {
          title: "Spot-the-scam workshop",
          body: "A focused two-hour session on AI-generated scams, fake voice calls, fake emails and fake video. The patterns to look for and the people to call when something feels wrong.",
        },
      ]}
    />
  );
}
