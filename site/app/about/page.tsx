import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { getPlace } from "@/lib/place";

export function generateMetadata(): Metadata {
  const place = getPlace();
  return {
    title: "About",
    description: `Developed by Hugo Pickford-Wardle - AI Optimist. ${place.wordmark} is a vision document for ${place.council.name}.`,
  };
}

export default function AboutPage() {
  const place = getPlace();
  const noun = place.placeNoun;
  return (
    <>
      <Section tone="chalk">
        <div className="container-page max-w-3xl">
          <Eyebrow>About</Eyebrow>
          <h1 className="display-lg mt-3 text-balance">
            Developed by Hugo Pickford-Wardle - AI Optimist.
          </h1>
          <p className="prose-body mt-6">
            {place.wordmark} is a vision document developed by Hugo
            Pickford-Wardle under the AI Optimist brand. It is designed
            to be walked through by {place.council.name} - a
            fully-formed picture of what a {noun} can be when it embraces
            AI fluency together, rather than leaves every resident to
            work it out alone.
          </p>
        </div>
      </Section>

      <Section tone="white">
        <div className="container-page grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="display-sm">What AI Optimist is</h2>
            <p className="mt-4 text-ink/80">
              A weekly note and set of programmes for leaders who want
              to respond to the AI opportunity rather than react to the
              AI hype. Practical, human-first, and optimistic - hence
              the name.
            </p>
            <ul className="mt-6 space-y-2 text-ink/80">
              <li>
                <a href="https://www.aioptimist.org" className="underline underline-offset-4">aioptimist.org</a> - the note, the back catalogue, the archive.
              </li>
              <li>
                <a href="https://www.ainightschool.org" className="underline underline-offset-4">ainightschool.org</a> - the cohort programme for everyday professionals.
              </li>
              <li>
                <a href="https://www.startupsherpas.co.uk" className="underline underline-offset-4">startupsherpas.co.uk</a> - the Sherpas AI programme for teenagers.
              </li>
              <li>
                <a href="https://www.youtube.com/@aioptimist" className="underline underline-offset-4">youtube.com/@aioptimist</a> - videos.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="display-sm">Why {place.name}</h2>
            <p className="mt-4 text-ink/80">
              Hugo has seen up close the mix of capability, exposure
              and appetite that makes {place.name} the right place to
              try this. It is also a chargeable programme - AI Night
              School and Sherpas AI can pay the civic work forward.
            </p>
            <p className="mt-4 text-ink/80">
              If the programme works in {place.name}, the model
              ports - and {place.name} becomes the reference case other
              {" "}{noun} councils visit to see what&rsquo;s possible.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="ink">
        <div className="container-narrow">
          <Eyebrow tone="sun">Get in touch</Eyebrow>
          <h2 className="display-md mt-3">One email is enough.</h2>
          <p className="mt-6 text-chalk/85">
            Whether you&rsquo;re a council member, a resident who wants
            to get involved, a {place.name} business that wants AI
            coaching, or a journalist who wants to cover this - start
            with an email.
          </p>
          <a
            href={`mailto:${place.manager.emailAlias}?subject=${encodeURIComponent(place.wordmark)}`}
            className="mt-8 btn-primary inline-flex bg-sun text-ink hover:bg-sun-warm hover:text-chalk"
          >
            {place.manager.emailAlias}
          </a>
          <p className="mt-10 text-sm text-chalk/50">
            &copy; {new Date().getFullYear()} Hugo Pickford-Wardle. {place.wordmark}
            {" "}is a vision document and not a statutory programme.
          </p>
          <p className="mt-2 text-sm text-chalk/50">
            Attribution: Developed by Hugo Pickford-Wardle - AI Optimist.
          </p>
          <div className="mt-8">
            <Link href="/" className="btn-ghost border-white/30 bg-white/10 text-chalk hover:bg-white/20">
              Back to the vision
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
