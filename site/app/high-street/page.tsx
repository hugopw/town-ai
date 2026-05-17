import type { Metadata } from "next";
import { CommunityLandingPage } from "@/components/CommunityLandingPage";
import { getPlace } from "@/lib/place";

export function generateMetadata(): Metadata {
  const place = getPlace();
  return {
    title: "For high-street businesses",
    description: `AI fluency for ${place.name}'s independent traders, retailers and hospitality operators.`,
  };
}

export default function HighStreetPage() {
  return (
    <CommunityLandingPage
      audienceSlug="high-street"
      eyebrow="For high-street businesses"
      headline="The chains have AI teams. Your high street has you."
      lede="Independents in {name} are competing with national chains who already use AI for pricing, marketing, customer service and inventory. The gap isn't budget - the gap is one hour with someone who can show you which three moves actually shift the needle. We close that gap."
      whyMatters={[
        "Independent retailers and hospitality operators carry the {noun}'s character. If they fold, the high street loses what makes it ours.",
        "AI moves first into the back-office work that quietly eats an indie owner's week - bookings, comms, social, stock, payroll. Time saved is the only currency that matters.",
        "National chains are using AI in dynamic pricing, personalised email and automated reviews. Indies competing on price alone will lose; indies who use AI to compound their local relationships will win.",
        "Customers are already using ChatGPT to plan their day before they leave the house. The shops that show up in those suggestions are the ones thinking about how AI describes them.",
      ]}
      offerCards={[
        {
          title: "One-hour AI diagnostic",
          body: "We sit with you in your shop, look at your actual operation, and leave you with a shortlist of three AI moves that buy you back a day a week. No SaaS upsell. No hype.",
        },
        {
          title: "The indie hospitality AI coach",
          body: "Bookings, reviews, pricing, social, supplier comms. A short, practical programme built around what indie operators in {name} actually do all day.",
        },
        {
          title: "A high-street trader cohort",
          body: "Eight businesses, eight weeks, one shared coach. Peer support that doubles the value of the individual coaching - and turns the high street into a working group.",
        },
      ]}
    />
  );
}
