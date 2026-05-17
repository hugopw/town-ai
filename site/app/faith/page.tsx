import type { Metadata } from "next";
import { CommunityLandingPage } from "@/components/CommunityLandingPage";
import { getPlace } from "@/lib/place";

export function generateMetadata(): Metadata {
  const place = getPlace();
  return {
    title: "For faith organisations",
    description: `AI fluency for ${place.name}'s churches, mosques, temples, synagogues and inter-faith partners.`,
  };
}

export default function FaithPage() {
  return (
    <CommunityLandingPage
      audienceSlug="faith"
      eyebrow="For faith organisations"
      headline="Faith leaders are being asked the AI questions no one else will answer."
      lede="Churches, mosques, temples, synagogues and gurdwaras in {name} sit at the centre of conversations about meaning, work and what a good life looks like - exactly the conversations AI is forcing into the open. We help faith leaders engage honestly, run the practical operations, and reach the residents who trust them more than any other institution."
      whyMatters={[
        "Faith communities are often the most trusted institutions in the {noun}, and the ones that hold the room when major change comes. AI is major change.",
        "Congregants are bringing AI questions to clergy - about work, identity, ethics, education - faster than seminary curricula are updating. The honest answer is a conversation, not a sermon.",
        "Faith organisations run real operations - safeguarding, finance, comms, events, pastoral admin - that benefit from the same AI moves as any small charity, with the same time-back lift.",
        "Inter-faith partnerships in {name} are some of the few rooms where every ethnic, generational and income group meets. That makes them disproportionately valuable when AI fluency needs to reach beyond the usual suspects.",
      ]}
      offerCards={[
        {
          title: "A faith-leader AI conversation",
          body: "A morning with your leadership team, clergy and trustees on the AI questions your congregants are already asking - and how to engage them honestly, without overclaiming.",
        },
        {
          title: "AI for faith operations",
          body: "Pastoral admin, rota management, safeguarding workflows, newsletter drafting, fundraising appeals. The same time-back lift small charities get, tuned to a faith organisation's rhythm.",
        },
        {
          title: "Host an inter-faith AI conversation",
          body: "We co-design and facilitate a public conversation, hosted by your community, on AI and meaning. The room your faith building creates is the room this conversation needs.",
        },
      ]}
    />
  );
}
