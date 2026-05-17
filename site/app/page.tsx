import Link from "next/link";
import { ArrowRight, Check, MapPin, Sparkles } from "lucide-react";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { SegmentCard } from "@/components/SegmentCard";
import { VideoCard } from "@/components/VideoCard";
import { StatTile } from "@/components/StatTile";
import { InterventionCard } from "@/components/InterventionCard";
import { PriorityChooser } from "@/components/PriorityChooser";
import { getInterventions } from "@/lib/interventions";
import { videoByTheme, videos } from "@/lib/videos";
import { getPlace } from "@/lib/place";

export default function Home() {
  const place = getPlace();
  const featured = getInterventions().slice(0, 6);
  const placeNoun = place.placeNoun;
  const homepageAssets = place.councilAssets.slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-chalk">
        <div className="absolute inset-0 bg-dawn-radial" />
        <div className="absolute inset-0 bg-chalk-grid bg-[length:48px_48px] opacity-40" />
        <div className="container-page relative pb-24 pt-20 md:pb-36 md:pt-28">
          <div className="flex flex-wrap items-center gap-2">
            <span className="chip chip-sun">
              <MapPin className="h-3.5 w-3.5" /> {place.hero.pills[0]}
            </span>
            {place.hero.pills.slice(1).map((pill, i) => (
              <span
                key={pill}
                className={i === 1 ? "chip chip-sky" : "chip"}
              >
                {pill}
              </span>
            ))}
          </div>

          <h1 className="display-xl mt-8 max-w-5xl text-balance">
            {place.hero.headline.lead}
            <span className="text-sky-deep">{place.hero.headline.emphasis}</span>
            {place.hero.headline.tail}
          </h1>

          <p className="prose-body mt-6 max-w-3xl text-balance">
            {place.hero.lede}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link href="/council#meet" className="btn-primary">
              Walk the council through this <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/resident-offer" className="btn-ghost">
              See the resident-only offer
            </Link>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-4">
            {place.stats.hero.map((s) => (
              <StatTile key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* RISK */}
      <Section tone="white">
        <div className="container-page grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
          <div>
            <Eyebrow tone="ink">{place.thesis.eyebrow}</Eyebrow>
            <h2 className="display-md mt-3 text-balance">
              {place.thesis.headline}
            </h2>
            <div className="prose-body mt-6 space-y-5">
              {place.thesis.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/community" className="btn-ghost">
                See the {placeNoun} in detail
              </Link>
              <Link href="/journey" className="btn-ghost">
                The journey to fluency
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <VideoCard
              youtubeId={videoByTheme("displacement").id}
              title={videoByTheme("displacement").title}
              description={videoByTheme("displacement").description}
              tag={videoByTheme("displacement").tag}
            />
            <p className="text-sm text-ink/60">
              From AI Optimist - Hugo&rsquo;s weekly note on how to
              respond to AI rather than react to it.
            </p>
          </div>
        </div>
      </Section>

      {/* BIG QUESTIONS */}
      <Section tone="chalk">
        <div className="container-page">
          <Eyebrow>Two questions we&rsquo;d like to answer in public</Eyebrow>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="card-dark">
              <p className="eyebrow text-sun">{place.hero.bigQuestion.eyebrow}</p>
              <p className="mt-4 font-display text-3xl leading-tight md:text-4xl">
                {place.hero.headline.lead}
                {place.hero.headline.emphasis} in your community is fluent in AI?
              </p>
              <p className="mt-5 text-chalk/80">
                {place.hero.bigQuestion.body}
              </p>
            </div>
            <div className="card-dark bg-sky-deep">
              <p className="eyebrow text-sun-glow">{place.thesis.secondQuestion.eyebrow}</p>
              <p className="mt-4 font-display text-3xl leading-tight md:text-4xl">
                What happens when a community comes together to solve its
                own problems using the easy magic of AI?
              </p>
              <p className="mt-5 text-chalk/80">
                {place.thesis.secondQuestion.body}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* FIVE SEGMENTS */}
      <Section tone="white">
        <div className="container-page">
          <div className="max-w-3xl">
            <Eyebrow>Five {place.name}s, not one</Eyebrow>
            <h2 className="display-md mt-3 text-balance">
              Every {placeNoun} has five groups. A plan that only serves the first
              isn&rsquo;t a plan for the {placeNoun} - it&rsquo;s a plan for a club.
            </h2>
            <p className="prose-body mt-5">
              {place.wordmark} is designed to pull all five groups forward at
              their own pace, together. Every intervention below is mapped
              to at least one segment.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            <SegmentCard
              number="1"
              title="Already in it"
              blurb="Early adopters. Building with AI at work or at home. Want peers, not beginners, and bigger projects to sink their teeth into."
              need="Community of practice, harder projects, train-the-trainer."
              tone="sun"
            />
            <SegmentCard
              number="2"
              title="Started - now overwhelmed"
              blurb="Can see the potential. Have tried half a dozen tools. Feel the ground shifting and don&rsquo;t know what to double down on."
              need="Coaching, a simple personal AI stack, and a peer group."
              tone="sky"
            />
            <SegmentCard
              number="3"
              title="Know they should"
              blurb="Say they&rsquo;re doing it. Privately, not really. Confidence low, appetite real. Will move given the right first step."
              need="A friendly first class, a low-stakes win, a mentor."
              tone="meadow"
            />
            <SegmentCard
              number="4"
              title="Reluctant"
              blurb="Sceptical. Tired of hype. Not opposed - unconvinced. Will engage if the frame is local, practical, and on their terms."
              need="Local relevance, proof on their patch, no hype."
              tone="warm"
            />
            <SegmentCard
              number="5"
              title="Scared"
              blurb="Lean into every worry they read online. Often older residents, sometimes parents of teens. Need to be met with warmth."
              need="Patient, in-person, human-led clinics and time."
              tone="ink"
            />
          </div>
          <p className="mt-8 text-sm text-ink/60">
            The council&rsquo;s role is specifically to help us reach
            groups 3, 4 and 5 - the ones our marketing can&rsquo;t.
          </p>
        </div>
      </Section>

      {/* COMMUNITY PROBLEMS */}
      <Section tone="sky">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Eyebrow>Vision - the easy magic of AI, used together</Eyebrow>
              <h2 className="display-md mt-3 text-balance">
                Pick the community problems we solve together first.
              </h2>
              <p className="prose-body mt-5">
                These are {place.name} problems. Each can become a visible,
                resident-led AI project inside a summer. Re-order the
                list to show us how you&rsquo;d sequence them.
              </p>
            </div>
            <Link href="/challenges" className="btn-ghost">
              See all community challenges <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10">
            <PriorityChooser items={place.priorityItems} contactEmail={place.contact.email} wordmark={place.wordmark} placeName={place.name} placeNoun={place.placeNoun} />
          </div>
        </div>
      </Section>

      {/* INTERVENTIONS PREVIEW */}
      <Section tone="chalk">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Eyebrow tone="sun">Interventions directory</Eyebrow>
              <h2 className="display-md mt-3 text-balance">
                A full shelf of ways to help - all ready to draw on.
              </h2>
              <p className="prose-body mt-5">
                Every one of these is already live or ready to run in
                {" "}{place.name}. The council doesn&rsquo;t have to build any of
                it - just let residents know which door to open.
              </p>
            </div>
            <Link href="/interventions" className="btn-primary">
              View the directory <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((it) => (
              <InterventionCard key={it.name} {...it} />
            ))}
          </div>
        </div>
      </Section>

      {/* RESIDENT OFFER TEASER */}
      <Section tone="white">
        <div className="container-page grid gap-12 md:grid-cols-[1fr_0.9fr] md:gap-20">
          <div>
            <Eyebrow tone="sun">The resident-only offer</Eyebrow>
            <h2 className="display-md mt-3 text-balance">
              Exclusive {place.name} pricing on AI Night School and Sherpas AI -
              plus a local programme the rest of the country can&rsquo;t buy.
            </h2>
            <ul className="prose-body mt-6 space-y-3">
              <li className="flex gap-3">
                <Check className="mt-1.5 h-5 w-5 flex-none text-meadow" />
                <span>
                  <strong>{place.name}-priced AI Night School cohorts</strong> -
                  with a physical kick-off night and a graduation evening
                  in {placeNoun}.
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="mt-1.5 h-5 w-5 flex-none text-meadow" />
                <span>
                  <strong>Sherpas AI - {place.name} edition</strong> - teen
                  cohorts working on {place.name} businesses, with local
                  community groups that meet in person.
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="mt-1.5 h-5 w-5 flex-none text-meadow" />
                <span>
                  <strong>Exclusive talks and workshops</strong> - Laura
                  on AI for D2C. Chris on creating and protecting IP. A
                  rolling roster of guest speakers from Hugo&rsquo;s network,
                  {" "}{place.name} only.
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="mt-1.5 h-5 w-5 flex-none text-meadow" />
                <span>
                  <strong>The Free Dreamers</strong> - a small, deliberately
                  curated {place.name} community where we push the boundaries
                  of what AI can do for the {placeNoun}.
                </span>
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/resident-offer" className="btn-primary">
                See the full offer <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/free-dreamers" className="btn-ghost">
                The Free Dreamers
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-ink/10 bg-gradient-to-br from-optimist via-optimist-deep to-ink p-8 text-chalk md:p-12">
            <Sparkles className="h-8 w-8 text-sun-glow" />
            <p className="mt-6 font-display text-3xl leading-tight md:text-4xl">
              AI for teens. AI for the high street. AI for older residents.
              AI for <em>anyone</em> in {place.name} who wants to get involved in
              their community&rsquo;s AI project.
            </p>
            <p className="mt-6 text-chalk/80">
              The resident offer is designed so that every door - teenager,
              commuter, independent, retiree - leads back to the same
              community.
            </p>
          </div>
        </div>
      </Section>

      {/* VIDEOS */}
      <Section tone="chalk">
        <div className="container-page">
          <div className="max-w-2xl">
            <Eyebrow>Watch, then read</Eyebrow>
            <h2 className="display-md mt-3 text-balance">
              Hugo&rsquo;s weekly note. Fifteen minutes of context, in
              plain English.
            </h2>
            <p className="prose-body mt-5">
              These AI Optimist videos make the case better than any page
              ever will. Start anywhere - they&rsquo;re short by design.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
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
          <p className="mt-6 text-sm text-ink/60">
            Full archive:{" "}
            <a
              href="https://www.youtube.com/@aioptimist"
              className="underline underline-offset-4"
              target="_blank"
              rel="noreferrer"
            >
              youtube.com/@aioptimist
            </a>
            .
          </p>
        </div>
      </Section>

      {/* HOW THE COUNCIL HELPS */}
      <Section tone="ink">
        <div className="container-page grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <div>
            <Eyebrow tone="sun">For the council</Eyebrow>
            <h2 className="display-md mt-3 text-balance">
              A full partnership. North star: awareness.
            </h2>
            <p className="mt-6 text-chalk/80">
              We&rsquo;re not asking the council for permission. We&rsquo;re
              asking the council to be a full partner - bringing every
              asset it already has (socials, email lists, direct mail,
              noticeboards, civic events, community relationships) into
              a coordinated push to make sure every {place.name} resident
              knows this is happening.
            </p>
            <Link
              href="/council"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-sun px-5 py-3 text-sm font-medium text-ink shadow-warm transition hover:bg-sun-warm hover:text-chalk"
            >
              Read the council pack <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ul className="grid gap-4 md:grid-cols-2">
            {homepageAssets.map((a) => (
              <li
                key={a.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <p
                  className="font-display text-xl"
                  dangerouslySetInnerHTML={{ __html: a.title }}
                />
                <p
                  className="mt-2 text-sm text-chalk/80"
                  dangerouslySetInnerHTML={{ __html: a.body }}
                />
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* CTA */}
      <Section tone="sun">
        <div className="container-narrow text-center">
          <Eyebrow tone="ink">The ask</Eyebrow>
          <h2 className="display-lg mt-3 text-balance">
            Read this site. Then let&rsquo;s meet this week and plan the summer.
          </h2>
          <p className="prose-body mx-auto mt-6 max-w-2xl">
            This is a vision document. Nothing on this site needs the
            council to build anything. It needs the council to decide
            that {place.name} is worth being first - and to help us reach
            the residents who would otherwise never hear.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/council#meet" className="btn-primary">
              Book the meeting
            </Link>
            <Link href="/journey" className="btn-ghost">
              Walk the journey first
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
