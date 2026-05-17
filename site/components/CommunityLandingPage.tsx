import Link from "next/link";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { getPlace } from "@/lib/place";

/**
 * Shared template for community-segment landing pages (schools,
 * sports clubs, high street, publicans, voluntary sector, faith).
 * One page per audience; all driven by per-tenant config.
 *
 * The structure is: hero (eyebrow + headline + lede + primary CTA)
 * → why this community matters in {tenant} → what AI fluency means
 * for them → repeat CTA. Copy is tenant-agnostic by default; place
 * config can override anything that needs to be local.
 */

export type CommunityOfferCard = {
  title: string;
  body: string;
};

export type CommunityLandingProps = {
  /** Used for tags, source attribution, and mailto subject. */
  audienceSlug: string;
  /** Short label shown above the H1. */
  eyebrow: string;
  /** Hero headline. Should land for any tenant without name substitution. */
  headline: string;
  /** Hero lede. {place.name} and {noun} are interpolated via template. */
  lede: string;
  /** 3-4 short sentences explaining why THIS community matters. */
  whyMatters: string[];
  /** Three cards describing what AI fluency means in practical terms. */
  offerCards: CommunityOfferCard[];
  /** Optional override for the bottom-section sign-off paragraph. */
  signOff?: string;
};

export function CommunityLandingPage({
  audienceSlug,
  eyebrow,
  headline,
  lede,
  whyMatters,
  offerCards,
  signOff,
}: CommunityLandingProps) {
  const place = getPlace();
  const noun = place.placeNoun;
  const managerName = place.manager.name;
  const subject = encodeURIComponent(
    `${place.wordmark} - ${eyebrow.toLowerCase()}`
  );
  const body = encodeURIComponent(
    `${managerName} - I'd like to talk about ${eyebrow.toLowerCase()} in ${place.name}.`
  );
  const mailto = `mailto:${place.manager.emailAlias}?subject=${subject}&body=${body}`;
  const ledeInterpolated = lede
    .replace(/\{name\}/g, place.name)
    .replace(/\{noun\}/g, noun)
    .replace(/\{wordmark\}/g, place.wordmark);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-lavender">
        <div className="absolute inset-0 bg-lavender-glow" />
        <div className="container-page relative pb-20 pt-16 md:pb-28 md:pt-24">
          <span className="inline-flex items-center gap-2 rounded-full bg-midnight px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-lime">
            {eyebrow}
          </span>
          <h1 className="display-xl mt-6 max-w-4xl text-balance text-midnight">
            {headline}
          </h1>
          <p className="prose-body mt-6 max-w-3xl text-midnight/85">
            {ledeInterpolated}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={mailto}
              className="btn-primary bg-midnight text-lime hover:bg-midnight-soft"
            >
              Email {managerName}
            </a>
            <Link href="/welcome" className="btn-ghost">
              See every door
            </Link>
          </div>
        </div>
      </section>

      {/* WHY THIS COMMUNITY MATTERS */}
      <Section tone="white">
        <div className="container-page">
          <Eyebrow>Why this matters in {place.name}</Eyebrow>
          <h2 className="display-md mt-3 max-w-3xl text-balance">
            Your community sits in front of the AI conversation,
            whether you asked to or not.
          </h2>
          <ul className="mt-8 space-y-4 text-base text-midnight/80 md:text-lg">
            {whyMatters.map((line, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-midnight/60" />
                <span>
                  {line
                    .replace(/\{name\}/g, place.name)
                    .replace(/\{noun\}/g, noun)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* WHAT AI FLUENCY LOOKS LIKE FOR YOU */}
      <Section tone="chalk">
        <div className="container-page">
          <Eyebrow>What we'd build with you</Eyebrow>
          <h2 className="display-md mt-3 max-w-3xl text-balance">
            Three concrete shapes the offer takes for {eyebrow.toLowerCase()}.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {offerCards.map((c) => (
              <article
                key={c.title}
                className="rounded-3xl border border-midnight/15 bg-white p-6 md:p-7"
              >
                <h3 className="font-display text-xl leading-snug text-midnight">
                  {c.title}
                </h3>
                <p className="mt-3 text-base text-midnight/80">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-midnight py-20 text-chalk md:py-24">
        <div className="container-page max-w-3xl">
          <Eyebrow tone="sun">Next step</Eyebrow>
          <h2 className="display-md mt-3 text-balance text-chalk">
            {signOff ??
              `One conversation. ${managerName} replies to every email personally.`}
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={mailto}
              className="btn-primary bg-lime text-midnight hover:bg-lime-deep"
              data-source={`/${audienceSlug}`}
            >
              Email {managerName}
            </a>
            <Link
              href="/community-projects"
              className="btn-ghost border-chalk/40 text-chalk hover:bg-chalk/10"
            >
              See live community projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
