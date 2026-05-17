import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { Wordmark } from "@/components/Wordmark";
import { PersonaCard } from "@/components/PersonaCard";
import { MiniHugo } from "@/components/MiniHugo";
import { Llama } from "@/components/Llama";
import { VideoCard } from "@/components/VideoCard";
import { videos } from "@/lib/videos";
import { CommunityProjectsTeaser } from "@/components/CommunityProjectsTeaser";
import { getPlace } from "@/lib/place";

export function generateMetadata(): Metadata {
  const place = getPlace();
  return {
    title: `Welcome to ${place.wordmark} - for residents`,
    description: `Your ${place.placeNoun}. Your AI. Whether you lead a business, you're 14-18, you've got hours to give, or you run an organisation that needs help - there's a door here for you.`,
  };
}

export default function WelcomePage() {
  const place = getPlace();
  const noun = place.placeNoun;
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-chalk">
        <div className="absolute inset-0 bg-lavender-glow" />
        <div className="container-page relative pb-20 pt-16 md:pb-28 md:pt-24">
          <div className="flex flex-wrap items-center gap-2">
            <span className="pill-lavender">Welcome, resident</span>
            <span className="chip">A {noun} learning AI together</span>
          </div>
          <h1 className="display-xl mt-6 max-w-5xl text-balance">
            Your {noun}. Your AI.{" "}
            <span className="text-lavender-deep">Yours to shape.</span>
          </h1>
          <p className="prose-body mt-6 max-w-3xl">
            {place.name} is becoming the UK&rsquo;s most AI-fluent {noun} -
            not by accident, and not by leaving anyone behind.
            Wherever you are on the journey, there&rsquo;s a door
            here that&rsquo;s yours.
          </p>
          <p className="mt-4 max-w-3xl text-base text-midnight/75 md:text-lg">
            Pick the door that fits you. You’ll find a clear
            first step, the people you’ll meet there, and a way
            to sign up that takes less than two minutes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#doors" className="btn-lime">
              Find my door <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/community-projects" className="btn-ghost">
              See live community projects
            </Link>
          </div>
        </div>
      </section>

      {/* PERSONA DOORS */}
      <section id="doors" className="bg-chalk py-20 md:py-24">
        <div className="container-page">
          <div className="max-w-3xl">
            <Eyebrow tone="ink">Six doors</Eyebrow>
            <h2 className="display-md mt-3 text-balance">
              Pick whichever describes you today. You can change your
              mind later.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <PersonaCard
              tone="leader"
              who="For business leaders"
              title="I run, lead, or work in a serious knowledge-economy job."
              blurb={`Get fluent in AI before your role does. The AI Leaders Fellowship runs alongside ${place.wordmark}.`}
              cta="See the AI Fellowship"
              href={place.externalLinks.aiFellowship}
              external
              decoration={<MiniHugo pose="laptop" size="fit" />}
            />
            <PersonaCard
              tone="teen"
              who="For 14-18-year-olds"
              title="I'm a teenager and I want to build with AI, not just use it."
              blurb={`Sherpas AI - ${place.name} edition. Get paid to bring real ideas to life, alongside other ${place.name} teens.`}
              cta="See the Summer of AI"
              href={place.externalLinks.summerOfAi}
              external
              decoration={<Llama size={190} className="-mb-2" />}
            />
            <PersonaCard
              tone="volunteer"
              who="For volunteers"
              title={`I've got time to give. I want to help my ${noun}.`}
              blurb={`Become an AI Coach, host a weekly clinic, or join a community working group. Your experience is exactly what your ${noun} needs.`}
              cta="See volunteer roles"
              href="/im-volunteering"
              decoration={<MiniHugo pose="thumbs-up" size="fit" />}
            />
            <PersonaCard
              tone="resident"
              who="For residents"
              title="AI for community impact - I want to use AI to help my neighbours."
              blurb={`A course for residents who want to use AI in their volunteering, their advocacy, and their role in ${place.name}'s civic life.`}
              cta="See the residents path"
              href="/ai-community-impact"
            />
            <PersonaCard
              tone="creative"
              who="For creatives"
              title="AI for creatives - I make things, and I want AI to make me sharper."
              blurb="Writers, designers, musicians, photographers, performers. A practitioner's path through AI that respects the craft and adds to it."
              cta="See AI for creatives"
              href="/ai-creatives"
            />
            <PersonaCard
              tone="parent"
              who="For parents & older residents"
              title={`${place.welcome?.parentsCardLabel ?? "AI for Parents"} - I want to understand what my children, my grandchildren, my pension is dealing with.`}
              blurb="A patient, jargon-free path through AI for parents, grandparents and older residents who'd rather understand it than be told what to think."
              cta={`See ${place.welcome?.parentsCardLabel ?? "AI for Parents"}`}
              href="/ai-parents"
            />
          </div>
          <p className="mt-8 max-w-2xl text-sm text-midnight/65">
            Not sure which door is yours? The doors aren't locked. Pick
            whichever feels closest and email {place.manager.name} - we'll
            help you find the right starting point.
          </p>
        </div>
      </section>

      {/* COMMUNITY SEGMENTS */}
      <Section tone="white">
        <div className="container-page">
          <Eyebrow tone="ink">Or you represent a community in {place.name}</Eyebrow>
          <h2 className="display-md mt-3 max-w-3xl text-balance">
            We work with whole communities, not just individual residents.
          </h2>
          <p className="mt-5 max-w-3xl text-base text-midnight/75 md:text-lg">
            Each of these is a dedicated page with the offer, the why,
            and a direct line to {place.manager.name}.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { href: "/schools", label: "Schools" },
              { href: "/sports-clubs", label: "Sports clubs" },
              { href: "/high-street", label: "High street businesses" },
              { href: "/publicans", label: "Pub landlords" },
              { href: "/voluntary-sector", label: "Voluntary sector" },
              { href: "/faith", label: "Faith organisations" },
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group flex items-center justify-between rounded-2xl border border-midnight/15 bg-chalk p-5 transition hover:border-midnight/40 hover:bg-white"
              >
                <span className="font-display text-lg text-midnight">
                  For {c.label.toLowerCase()}
                </span>
                <ArrowRight className="h-4 w-4 text-midnight/60 transition group-hover:translate-x-1 group-hover:text-midnight" />
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* PROJECTS TEASER */}
      <Section tone="white">
        <div className="container-page grid gap-10 md:grid-cols-[1fr_1fr] md:items-center md:gap-16">
          <div>
            <Eyebrow>Already in motion</Eyebrow>
            <h2 className="display-md mt-3 text-balance">
              Real {place.name} problems, posted by real {place.name}
              {" "}organisations.
            </h2>
            <p className="prose-body mt-5">
              When a local organisation tells us about a problem AI
              could help with, it goes here - so any resident can join
              the working group and help solve it. This is what an
              AI-fluent {noun} actually does on a Tuesday evening.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/community-projects" className="btn-primary">
                Browse all projects <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/our-organisation" className="btn-ghost">
                Add your organisation’s problem
              </Link>
            </div>
          </div>
          <CommunityProjectsTeaser />
        </div>
      </Section>

      {/* AI OPTIMIST VIDEOS */}
      <Section tone="chalk">
        <div className="container-page">
          <Eyebrow>From AI Optimist</Eyebrow>
          <h2 className="display-md mt-3 max-w-3xl text-balance">
            Short videos that explain why this matters - start
            anywhere.
          </h2>
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
        </div>
      </Section>

      {/* FOOTER CTA */}
      <Section tone="ink" className="py-20 md:py-24">
        <div className="container-narrow text-center">
          <Sparkles className="mx-auto h-8 w-8 text-lime" />
          <h2 className="display-md mt-4 text-balance">
            <Wordmark size="xl" tone="light" />
          </h2>
          <p className="mt-6 text-chalk/85 md:text-lg">
            Whichever door you walk through, you’ll find your
            neighbours already inside.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={place.externalLinks.aiFellowship}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lime"
            >
              AI Fellowship
            </a>
            <a
              href={place.externalLinks.summerOfAi}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost border-white/30 bg-white/10 text-chalk hover:bg-white/20"
            >
              Summer of AI
            </a>
            <Link href="/im-volunteering" className="btn-ghost border-white/30 bg-white/10 text-chalk hover:bg-white/20">
              Volunteer
            </Link>
            <Link href="/our-organisation" className="btn-ghost border-white/30 bg-white/10 text-chalk hover:bg-white/20">
              Our organisation
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
