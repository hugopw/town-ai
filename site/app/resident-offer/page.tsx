import type { Metadata } from "next";
import Link from "next/link";
import { Users, CalendarDays, Sparkles, Mic, Coffee } from "lucide-react";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { VideoCard } from "@/components/VideoCard";
import { videoByTheme, videos } from "@/lib/videos";
import { getPlace } from "@/lib/place";

export function generateMetadata(): Metadata {
  const place = getPlace();
  return {
    title: "The resident-only offer",
    description: `Exclusive ${place.name} pricing on AI Night School and Sherpas AI, local physical get-togethers, speaker series, community groups and the Free Dreamers - a programme the rest of the country cannot buy.`,
  };
}

export default function ResidentOfferPage() {
  const place = getPlace();
  const noun = place.placeNoun;
  const venueA = place.residentOffer.physicalVenueExamples[0] ?? "town venues";
  const venueB = place.residentOffer.physicalVenueExamples[1] ?? "community spaces";
  const speakerSummary = place.residentOffer.speakerSeries
    .filter((s) => s.name !== "Rolling roster")
    .map((s) => `${s.name} on ${s.topic.toLowerCase().replace(/^ai for /, "").replace(/^creating /, "")}`)
    .join(", ");
  const resident = [
    {
      icon: Users,
      title: `${place.name}-priced AI Night School`,
      body: `Our flagship six-week cohort, priced specifically for ${place.name} residents. Cohorts open and close with a physical event in ${noun} - so community is baked in from night one.`,
    },
    {
      icon: Sparkles,
      title: `Sherpas AI - ${place.name} edition`,
      body: `Teenagers build real AI tools for real ${place.name} organisations. Community groups meet in person through the year. Work experience, mentorship, and visible local wins.`,
    },
    {
      icon: Mic,
      title: "Exclusive talks and workshops",
      body: `Residents-only speaker series - ${speakerSummary}, and a rolling roster of Hugo's network. Not available outside ${place.name}.`,
    },
    {
      icon: CalendarDays,
      title: `${place.residentOffer.festivalName}`,
      body: `A visible summer closing event run by the community, for the community - talks, showcases, graduations, and a ${noun}-wide celebration of a year of fluency.`,
    },
    {
      icon: Coffee,
      title: "In-person clinics and drop-ins",
      body: `Weekly clinics at ${venueA} and ${venueB} for older residents. Parent sessions at schools. Small-business coaching across the high streets.`,
    },
    {
      icon: Sparkles,
      title: "The Free Dreamers",
      body: `A curated, small ${place.name} group pushing the boundaries of what AI can do for the ${noun}. See /free-dreamers.`,
    },
  ];
  const registerSubject = encodeURIComponent(
    `${place.name} resident offer`,
  );
  const registerInterestSubject = encodeURIComponent(
    `${place.name} resident offer - register interest`,
  );
  return (
    <>
      <Section tone="chalk">
        <div className="container-page max-w-4xl">
          <Eyebrow tone="sun">The resident-only offer</Eyebrow>
          <h1 className="display-lg mt-3 text-balance">
            Because you live in {place.name}, the door to AI fluency opens
            wider - and costs less.
          </h1>
          <p className="prose-body mt-6">
            The resident-only offer is exclusive {place.name} pricing on
            AI Night School and Sherpas AI, bundled with physical
            get-togethers, community groups, a rolling series of
            exclusive talks and workshops, and the Free Dreamers. None
            of it is available to residents of other {noun}s.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${place.contact.email}?subject=${registerSubject}`}
              className="btn-primary"
            >
              Register interest
            </a>
            <Link href="/free-dreamers" className="btn-ghost">
              The Free Dreamers
            </Link>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="container-page">
          <Eyebrow>What&rsquo;s inside</Eyebrow>
          <h2 className="display-md mt-3 max-w-3xl text-balance">
            Six elements - each designed to start online and end in a
            room with your neighbours.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {resident.map((r) => {
              const Icon = r.icon;
              return (
                <article key={r.title} className="card flex h-full flex-col gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sun-glow text-ink">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-xl leading-tight">
                    {r.title}
                  </h3>
                  <p className="text-ink/80">{r.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </Section>

      <Section tone="ink">
        <div className="container-page grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow tone="sun">The speaker series</Eyebrow>
            <h2 className="display-md mt-3 text-balance">
              A network of practitioners, in a {place.name} room, exclusively
              for residents.
            </h2>
            <p className="mt-6 text-chalk/85">
              These aren&rsquo;t webinars. They&rsquo;re small-room
              evenings in {noun}, with a speaker Hugo knows and trusts,
              and a residents-only audience. Bookings are first-come.
              Numbers are small on purpose.
            </p>
            <ul className="mt-8 space-y-5">
              {place.residentOffer.speakerSeries.map((s) => (
                <li
                  key={s.name}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-display text-xl">{s.name}</p>
                    <span className="chip chip-sun">{s.topic}</span>
                  </div>
                  <p
                    className="mt-3 text-chalk/80"
                    dangerouslySetInnerHTML={{ __html: s.blurb }}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <VideoCard
              youtubeId={videoByTheme("highstreet").id}
              title={videoByTheme("highstreet").title}
              description={videoByTheme("highstreet").description}
              tag={videoByTheme("highstreet").tag}
            />
            <VideoCard
              youtubeId={videoByTheme("teens").id}
              title={videoByTheme("teens").title}
              description={videoByTheme("teens").description}
              tag={videoByTheme("teens").tag}
            />
          </div>
        </div>
      </Section>

      <Section tone="sky">
        <div className="container-page">
          <Eyebrow>Who it&rsquo;s for</Eyebrow>
          <h2 className="display-md mt-3 max-w-3xl text-balance">
            Every door leads back to the same community.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {[
              {
                t: "AI for teens",
                b: `Sherpas AI summer cohorts, year-round community groups, work-experience with ${place.name} businesses.`,
              },
              {
                t: "AI for the high street",
                b: "Small-Business AI Opportunity Diagnostic, one-hour coaching, and a pragmatic shortlist of AI moves.",
              },
              {
                t: "AI for older residents",
                b: `Patient, in-person clinics at ${venueA} and ${venueB}. Warm, slow, practical.`,
              },
              {
                t: "How to get involved",
                b: "Join a community working group, train as an AI Coach, or come to the Imaginarium and bring an idea.",
              },
            ].map((c) => (
              <article key={c.t} className="rounded-3xl border border-ink/10 bg-white/80 p-6">
                <h3 className="font-display text-xl">{c.t}</h3>
                <p className="mt-3 text-sm text-ink/80">{c.b}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="chalk">
        <div className="container-page">
          <Eyebrow>More from AI Optimist</Eyebrow>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {videos.map((v) => (
              <VideoCard
                key={v.id + v.theme}
                youtubeId={v.id}
                title={v.title}
                description={v.description}
                tag={v.tag}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section tone="sun">
        <div className="container-narrow text-center">
          <Eyebrow tone="ink">Say yes</Eyebrow>
          <h2 className="display-md mt-3 text-balance">
            Register your interest. We&rsquo;ll let you know when the
            first {place.name} cohort opens.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${place.contact.email}?subject=${registerInterestSubject}`}
              className="btn-primary"
            >
              Email Hugo
            </a>
            <Link href="/challenges" className="btn-ghost">
              Pick a challenge to work on
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
