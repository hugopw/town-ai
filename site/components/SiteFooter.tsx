import Link from "next/link";
import { getPlace } from "@/lib/place";
import { Wordmark } from "./Wordmark";

export function SiteFooter() {
  const place = getPlace();
  const placeNoun = place.placeNoun;
  const initial = place.name.charAt(0);
  return (
    <footer className="mt-32 border-t border-ink/10 bg-ink text-chalk">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sun text-ink">
                <span className="font-display">{initial}</span>
              </span>
              <Wordmark size="md" tone="light" />
            </div>
            <p className="mt-6 max-w-md text-chalk/70">
              A vision for {place.name} - the UK&rsquo;s most AI-fluent {placeNoun}.
              A place where residents protect their livelihoods and solve
              community problems together using AI as a shared civic tool.
            </p>
            <p className="mt-6 text-sm text-chalk/50">
              Developed by{" "}
              <a
                href="https://www.linkedin.com/in/hugopickfordwardle/"
                className="underline decoration-chalk/30 underline-offset-4 hover:text-sun"
              >
                Hugo Pickford-Wardle
              </a>{" "}
              - AI Optimist.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-chalk/60">
              Explore
            </p>
            <ul className="mt-4 space-y-2 text-chalk/80">
              <li><Link href="/community">The {placeNoun}</Link></li>
              <li><Link href="/challenges">Community challenges</Link></li>
              <li><Link href="/interventions">Interventions directory</Link></li>
              <li><Link href="/resident-offer">Resident-only offer</Link></li>
              <li><Link href="/free-dreamers">Free Dreamers</Link></li>
              <li><Link href="/journey">The journey</Link></li>
              <li><Link href="/council">For the {place.council.type} council</Link></li>
              <li><Link href="/worked-example">Worked example - {place.workedExample.shortLabel}</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-chalk/60">
              Partners
            </p>
            <ul className="mt-4 space-y-2 text-chalk/80">
              <li>
                <a href="https://www.ainightschool.org" className="hover:text-sun">
                  AI Night School
                </a>
              </li>
              <li>
                <a href="https://www.startupsherpas.co.uk" className="hover:text-sun">
                  Startup Sherpas
                </a>
              </li>
              <li>
                <a href="https://www.aioptimist.org" className="hover:text-sun">
                  AI Optimist
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-chalk/10 pt-6 text-xs text-chalk/50 md:flex-row">
          <p>
            This is a vision document. Demographic figures are drawn from
            publicly available sources and will be refined with council data.
          </p>
          <p>&copy; {new Date().getFullYear()} Hugo Pickford-Wardle.</p>
        </div>
      </div>
    </footer>
  );
}
