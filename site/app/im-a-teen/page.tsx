import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { SherpasMark } from "@/components/SherpasMark";
import { VideoCard } from "@/components/VideoCard";
import { videoByTheme } from "@/lib/videos";
import { getPlace } from "@/lib/place";

export function generateMetadata(): Metadata {
  const place = getPlace();
  return {
    title: "I'm 14-18",
    description: `Sherpas AI - ${place.name} edition. Build real AI tools for real ${place.name} businesses. Get paid. Make stuff that matters.`,
  };
}

export default function TeenPage() {
  const place = getPlace();
  return (
    <>
      {/* HERO - Sherpas register, sunset bg + llama hero asset */}
      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/sherpas/desert-sunset.avif')" }}
      >
        <div className="absolute inset-0 bg-sherpas-gradient/85 mix-blend-multiply" />
        <div className="container-page relative grid gap-10 pb-20 pt-16 md:grid-cols-[1.2fr_0.8fr] md:items-center md:pb-28 md:pt-24">
          <div className="text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white">
              For 14-18
            </span>
            <h1 className="display-xl mt-6 text-balance">
              Get paid to bring your ideas to life.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
              Sherpas AI - {place.name} edition. You build real AI
              tools for real {place.name} organisations. You get paid.
              You meet other teens who are doing the same. And you
              walk into any uni or job interview with a portfolio
              most adults haven&rsquo;t got.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={place.externalLinks.summerOfAi}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sherpas"
              >
                Sign me up on Sherpas
              </a>
              <a
                href="https://www.startupsherpas.co.uk"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                See what Sherpas does
              </a>
            </div>
          </div>
          <div className="relative flex items-end justify-center md:justify-end">
            <div className="absolute -top-10 right-0 hidden md:block">
              <SherpasMark variant="white" className="h-12 opacity-95" />
            </div>
            <img
              src="/sherpas/llamas.png"
              alt="Sherpas AI llamas"
              className="-mb-12 h-auto w-72 select-none md:w-80"
            />
          </div>
        </div>
      </section>

      {/* THREE THINGS */}
      <Section tone="white">
        <div className="container-page">
          <Eyebrow>What you actually do</Eyebrow>
          <h2 className="display-md mt-3 max-w-3xl text-balance">
            Three ways in. Pick whichever fits your week.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                t: "Summer cohort",
                w: "August.",
                b: `Two weeks. Fifteen ${place.name} teens. Three real projects shipped for ${place.name} organisations. Coached, paid, and visible.`,
              },
              {
                t: "Year-round community",
                w: "Monthly.",
                b: `An evening a month with other ${place.name} teens building with AI. Bring a project, bring a question, bring a friend.`,
              },
              {
                t: "Work experience",
                w: "Bookable.",
                b: `We match you to a ${place.name} business that wants to use AI properly. You help them, you get the experience, everyone wins.`,
              },
            ].map((c) => (
              <article
                key={c.t}
                className="relative overflow-hidden rounded-3xl border border-midnight/10 bg-chalk p-6 md:p-7"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-sherpas-pink">
                  {c.w}
                </p>
                <h3 className="mt-3 font-display text-2xl">{c.t}.</h3>
                <p className="mt-3 text-base text-midnight/80">{c.b}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* WHY YOU */}
      <Section tone="chalk">
        <div className="container-page grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div>
            <Eyebrow>Why this matters for you</Eyebrow>
            <h2 className="display-md mt-3 text-balance">
              The world is changing fast. Your move.
            </h2>
            <p className="prose-body mt-5">
              The way our parents got into careers - university, then
              entry-level job, then climb the ladder - is shifting
              hard under everyone&rsquo;s feet. The teenagers who
              build now, who can show what they&rsquo;ve made, who
              can talk to AI like it&rsquo;s a tool not a toy, are
              the ones who&rsquo;ll have the most options.
            </p>
            <p className="mt-4 text-base md:text-lg">
              You don&rsquo;t need to be a coder. You don&rsquo;t need
              to be top of the class. You need an idea, a tiny bit of
              grit, and somewhere safe to try.
            </p>
          </div>
          <VideoCard
            youtubeId={videoByTheme("teens").id}
            title={videoByTheme("teens").title}
            description={videoByTheme("teens").description}
            tag={videoByTheme("teens").tag}
          />
        </div>
      </Section>

      {/* CLOSING CTA - hand off to Sherpas */}
      <section
        id="signup"
        className="relative overflow-hidden bg-cover bg-center py-20 md:py-24"
        style={{ backgroundImage: "url('/sherpas/desert-sunset.avif')" }}
      >
        <div className="absolute inset-0 bg-sherpas-gradient/90 mix-blend-multiply" />
        <div className="container-narrow relative text-center text-white">
          <SherpasMark variant="white" className="mx-auto h-12 opacity-95" />
          <h2 className="display-md mt-6 text-balance text-white">
            Sign up on the Sherpas site. Two minutes. Then we send you the
            next {place.name} cohort dates.
          </h2>
          <p className="mt-5 text-white/85">
            If you&rsquo;re under 18, Sherpas will send a quick note to a
            parent or guardian so they know you&rsquo;re joining. No
            spam, no sales calls.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={place.externalLinks.summerOfAi}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sherpas"
            >
              Sign me up on Sherpas
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
