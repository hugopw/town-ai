import type { Metadata } from "next";
import { CommunityLandingPage } from "@/components/CommunityLandingPage";
import { getPlace } from "@/lib/place";

export function generateMetadata(): Metadata {
  const place = getPlace();
  return {
    title: "For pub landlords and licensees",
    description: `AI fluency for ${place.name}'s pubs - bookings, rotas, stock and the community room above the bar.`,
  };
}

export default function PublicansPage() {
  return (
    <CommunityLandingPage
      audienceSlug="publicans"
      eyebrow="For pub landlords"
      headline="Your pub is the only place in the {noun} where everyone shows up. AI keeps the lights on."
      lede="Landlords in {name} are running tighter margins than ever, on more shifts, with less staff. AI does the rota, the bookings, the supplier emails and the social posts - so the time you spend on the floor is actually on the floor, with the people who came in to see you."
      whyMatters={[
        "Pubs are the {noun}'s most stubborn third places. When one closes, a neighbourhood loses a room that nothing else replaces.",
        "Pub margins are squeezed by energy, supplier costs and staffing. AI's quickest wins - rotas, stock orders, booking reminders, supplier comms - all take pressure off the same week.",
        "Pubs that host community events (quiz nights, sports screenings, charity nights) are quietly the {noun}'s best AI test bed - they bring residents who'd never sit in a workshop into the same room.",
        "Customers booking dinner are already using AI to choose. The pubs whose menus, reviews and descriptions are AI-legible will get found; the ones that aren't, won't.",
      ]}
      offerCards={[
        {
          title: "The publican's AI hour",
          body: "We sit at the bar with you between lunch and dinner, look at how you actually spend your week, and show you three AI moves that buy back a shift. No tech bro talk. No subscription pitch.",
        },
        {
          title: "An AI back-of-house pack",
          body: "Rota templates, supplier-email drafts, stock-take prompts, booking-reminder flows. The things every publican does badly because there isn't time to do them well.",
        },
        {
          title: "Host an AI Night School session",
          body: "The function room above the bar is the perfect venue. We bring the cohort, the coach and the residents; you bring the room and the chips. Pubs that host become the {noun}'s civic AI hub.",
        },
      ]}
    />
  );
}
