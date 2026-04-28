import type { Place } from "./_types";

// High Town, Luton.
//
// One neighbourhood, two populations: the creatives who have moved
// in for affordable studio space and the long-standing diverse
// communities who have been here for decades. AI lands unevenly on
// the two populations, and that unequal landing is the story.
//
// Council partner: Luton Borough Council (unitary). The pitch is
// that High Town is a microcosm of big-city dynamics, compressed
// to a postcode, where AI fluency is the single intervention that
// bridges - or splits - the neighbourhood.
//
// Stats flagged "TBC" are plausible directional estimates; the
// place-research SOP will sharpen them with sourced figures.

export const highTown: Place = {
  slug: "high-town",
  name: "High Town",
  formalName: "High Town, Luton",
  wordmark: "HighTown.AI",
  wordmarkAccent: ".",
  domainHint: "hightown.ai",

  council: {
    name: "Luton Borough Council",
    shortName: "the council",
    type: "unitary",
    website: "https://www.luton.gov.uk/",
    pressOutlets: [
      "Luton News",
      "Luton on Sunday",
      "BBC Three Counties",
      "Luton Today",
    ],
    civicEvents: [
      "Luton Carnival",
      "the Mela",
      "the Bedfordshire Year of Culture moments",
      "Mayor of Luton civic engagements",
    ],
  },

  thesis: {
    eyebrow: "The honest bit",
    headline:
      "High Town has two populations. AI is coming for both. Pretending either side is safe isn't a kindness.",
    paragraphs: [
      "High Town is 10,503 residents living one of the most concentrated contradictions in the country. The Hat District has just had £9.7 million spent on it. The Hat Factory put 99,000 visitors through its doors last year - tripled in five years. Three hundred metres away, one of High Town's six neighbourhoods sits in the top 5% nationally for crime deprivation. 39% of children in Luton live in poverty. 24% of homes in this ward are overcrowded. Forty per cent of households privately rent. The creatives moved here because they could afford a Victorian terrace twenty-six minutes from St Pancras. The long-standing communities can't afford the rent rises that the creatives are bringing.",
      "Both populations are now facing AI from positions of dramatically unequal preparation. The creatives - designers, music promoters, makers - are watching AI come for creative work itself, the very thing they moved here to make. The long-standing communities - Pakistani, Bangladeshi, Black, Roma, Romanian, recent asylum-seekers from Afghanistan and Eritrea - are watching AI come for the warehouse, taxi, hospitality and care-sector jobs that fund their families. The capital that protects one side at speed isn't the capital the other side has. The risk isn't theoretical. It's already unfolding on the same streets.",
      "We don't think the answer is another conversation about gentrification. We think the answer is fluency - shared, hands-on AI capability across both High Towns, taught in the same rooms, building tools the whole neighbourhood can use. Done well, AI is the first thing in twenty years that could give High Town's two populations a reason to build something together. Done badly, it widens the gap that the Hat District is already widening. The choice is now.",
    ],
    angle: "industrial-transition",
    secondQuestion: {
      eyebrow: "Question two",
      body: "When the two High Towns sit in the same room and build a tool the whole neighbourhood actually uses - the multilingual council digest, the Luton Foodbank volunteer matcher, the creative-careers gig board, the asylum-seeker first-week guide for hotel arrivals.",
    },
  },

  hero: {
    pills: [
      "High Town, Luton",
      "A vision for Luton Borough Council",
      "Summer 2026",
    ],
    headline: {
      lead: "What happens when ",
      emphasis: "two High Towns",
      tail: " in the same postcode get AI-fluent together?",
    },
    lede:
      "High Town is one of the most diverse neighbourhoods in the East of England, twenty-six minutes from St Pancras, sat in Luton - the first majority-minority town outside London - and now home to the £9.7 million Hat District. We think High Town is the right place to prove that AI fluency can bridge populations rather than divide them. One summer. Both High Towns. Built together.",
    bigQuestion: {
      eyebrow: "Question one",
      body: "Not just the early adopters at the Hat Factory. Everyone - the parent on the school run from Hitchin Road, the volunteer at Luton Foodbank, the studio holder in the Hat District, the cab driver doing nights from the station, the officer at the Town Hall.",
    },
  },

  stats: {
    hero: [
      {
        value: "10,503",
        label: "High Town ward residents",
        source: "ONS Census 2021",
      },
      {
        value: "Top 5%",
        label: "Crime deprivation - one of High Town's six LSOAs sits among the worst 5% in England",
        source: "Indices of Deprivation, Luton 022D",
      },
      {
        value: "£9.7M",
        label: "Spent on the Hat District - 300 metres from terraces with 24% overcrowding",
        source: "Culture Trust Luton",
      },
      {
        value: "26 min",
        label: "Luton to St Pancras on Thameslink - cheaper rent, same line as Camden",
        source: "East Midlands Railway, 2026",
      },
    ],
    community: [
      {
        value: "10,503",
        label: "High Town ward residents",
        source: "ONS Census 2021",
      },
      {
        value: "225,261",
        label: "Luton total - the first majority-minority town outside London",
        source: "ONS Census 2021",
      },
      {
        value: "39%",
        label: "Of Luton children living in poverty (after housing costs, 2023)",
        source: "End Child Poverty / Luton Today",
      },
      {
        value: "24%",
        label: "Of High Town homes overcrowded - one of the five most-overcrowded wards in Luton",
        source: "Luton Housing Strategy 2022-27",
      },
      {
        value: "40%+",
        label: "Private rented households in High Town - nearly double the borough average",
        source: "Luton Housing Strategy",
      },
      {
        value: "449",
        label: "Knife-crime incidents recorded in Luton in 14 months (Jan 2023 - Mar 2024)",
        source: "Luton Today / Bedfordshire Police",
      },
      {
        value: "99,000",
        label: "Visitors to The Hat District in 2024/25 - tripled from 2018/19",
        source: "Culture Trust Luton",
      },
      {
        value: "£5,480",
        label: "Annual season ticket Luton-London - the price of one-side gentrification",
        source: "Trainline, 2026",
      },
    ],
    communityCaption:
      "Figures drawn from ONS Census 2021, Luton Borough Council housing strategy, the English Indices of Deprivation, Bedfordshire Police, Culture Trust Luton and the Trainline. Ward-level 2021 ethnicity figures for High Town remain unpublished; the 2011 Census ward profile recorded 61.8% White, 17.9% Asian, 12.2% Black, 5.2% Mixed. Borough-wide 2021 figures show Luton is now majority-minority, with 27.5% Pakistani-or-Bangladeshi residents, 10% Black residents, and 31.8% White British. Once Luton Borough Council shares ward-level 2021 detail, every figure here will be sharpened.",
  },

  anchors: [
    {
      name: "The Hat Factory",
      role: "Luton's flagship creative venue and home to artists, music, comedy and theatre",
      use: "The natural anchor for the residents-only speaker series and the festival closing night.",
    },
    {
      name: "Culture Trust Luton",
      role: "the council-aligned cultural organisation behind The Hat District",
      use: "The most natural civic-cultural partner for the programme.",
    },
    {
      name: "The Hat District",
      role: "the post-industrial creative quarter built around the old hat-trade buildings",
      use: "Where Sherpas AI cohorts meet the people moving in.",
    },
    {
      name: "Luton Foodbank &amp; community pantries",
      role: "the front line for High Town's food insecurity",
      use: "First call for AI tools that help match donations to need at scale.",
    },
    {
      name: "High Town's mosques, churches and community centres",
      role: "the trusted institutions long-standing residents actually go to",
      use: "Where in-person AI clinics need to live - not at the Hat Factory.",
    },
    {
      name: "Cardinal Newman, Denbigh High &amp; Lea Manor",
      role: "the secondary schools serving High Town families",
      use: "Sherpas AI cohorts; family AI nights; teen AI Coaches.",
    },
    {
      name: "Luton Borough Council &amp; the Town Hall",
      role: "the unitary authority for one of the youngest, most-diverse and most-deprived towns outside London",
      use: "The convening power that makes High Town more than a neighbourhood-only project.",
    },
    {
      name: "Luton News &amp; BBC Three Counties",
      role: "where Luton actually gets its news",
      use: "The press story writes itself when both High Towns show up in the same room.",
    },
  ],

  segmentArchetypes: {
    typicalCommuter: "the designer on the 07:46 to St Pancras",
    typicalElder: "the grandmother who runs the Saturday food sorting at the foodbank",
    typicalTeen: "the sixth-former at Cardinal Newman with a beat on SoundCloud",
    typicalIndependent: "the printer on Hitchin Road who's been here since 1987",
    typicalCouncilOfficer: "the community-engagement officer at the Town Hall",
  },

  challenges: [
    {
      id: "two-towns",
      title: "Tools built by both High Towns, for the whole neighbourhood",
      pitch:
        "A working group with creatives and long-standing residents in the same room, building one shared tool the whole neighbourhood needs. Method matters as much as output.",
      why: "If we can't build something jointly, we can't claim to be one neighbourhood. This challenge is the project's stress-test.",
      owner: "Culture Trust + community organisations + AI Optimist",
      first: "A six-week joint cohort, kick-off at the Hat Factory, midpoint at the foodbank.",
    },
    {
      id: "council-multilingual",
      title: "Council English in the languages High Town actually speaks",
      pitch:
        "Translate every Luton Borough Council decision into plain-English and the languages residents actually use - Urdu, Bengali, Romanian, Polish, Pashto, Tigrinya - searchable by ward and life-impact.",
      why: "The single highest-leverage civic-AI project in a town where two-thirds of residents are minority ethnic and many speak English as a second or third language.",
      owner: "Luton Borough Council + community translators + civic volunteers",
      first: "A weekly bilingual digest pilot for the next three full-council meetings.",
    },
    {
      id: "asylum-seeker-onboarding",
      title: "The first-week guide for new arrivals to Luton",
      pitch:
        "An AI-assisted guide built with Luton's refugee charities for the first week of someone's life in the town - housing, GP, school, food, language support, rights - in their language.",
      why: "Luton is a major asylum-seeker placement town. The guide is a hand on the shoulder when there isn't a caseworker available.",
      owner: "Luton Refugee Forum, the Town Hall, faith communities",
      first: "A pilot in Pashto, Tigrinya and Arabic, autumn 2026.",
    },
    {
      id: "creative-careers",
      title: "Creative careers built for the AI decade, not against it",
      pitch:
        "A working group of High Town creatives helping each other deploy AI in their actual practice - and helping each other with the harder question of what creative work pays for in five years.",
      why: "The creatives moved here to make work. AI is reshaping the work they make. Helping each other is what the Hat District was always for.",
      owner: "Hat Factory + Culture Trust + AI Optimist",
      first: "Cohort one, ten creatives, summer 2026.",
    },
    {
      id: "youth-knife-crime",
      title: "Youth-violence prevention that uses every tool, including AI",
      pitch:
        "A joint working group with Luton's youth charities, schools and the police to apply AI carefully and ethically to early-warning, signposting, and case-load support - in service of the workers already doing this work.",
      why: "Youth violence in Luton is a real, named problem. Done well, AI is a tool for the people fighting it. Done badly, it's another way to over-police a community. We have to choose.",
      owner: "Luton youth charities + the council + ethics-led coaches",
      first: "An ethics-first scoping cohort, autumn 2026.",
    },
    {
      id: "gig-economy",
      title: "AI fluency for the workers being asked to compete with it",
      pitch:
        "Hands-on AI cohorts pitched specifically at gig-economy workers - drivers, delivery, hospitality, care - run in evening sessions at venues they actually go to.",
      why: "Most AI fluency programmes are built for desk workers. High Town's displacement risk is hourly: warehouse, taxi, hospitality, care. The same offer doesn't fit. Pretending it does isn't a kindness.",
      owner: "AI Optimist + community organisations + faith institutions",
      first: "Two pilots: one at a Hitchin Road community space, one at a creative-quarter venue.",
    },
    {
      id: "older-residents-multilingual",
      title: "Older residents who built High Town and are being left behind by digital services",
      pitch:
        "Multilingual, in-person AI clinics at the mosques, churches and community centres older residents actually go to - patient, deliberate, and tea-led.",
      why: "Digital council services exclude the people who put down roots in this town. AI - properly applied - can change that. So can a tea round.",
      owner: "Volunteer coaches + faith communities + the council",
      first: "Two pilot venues, weekly, from autumn 2026.",
    },
    {
      id: "schools-multilingual",
      title: "Schools where most pupils have English as a second language",
      pitch:
        "AI tools that help High Town's secondary schools support the parent communication, homework support, and pupil-progress conversations that monolingual systems are quietly failing.",
      why: "School is the most important institution in a young person's life. If the council's tools can't reach the parent, the child loses.",
      owner: "Schools + Luton Borough Council + AI Optimist",
      first: "A pilot at one secondary, parent-facing, in three languages, summer 2026.",
    },
  ],

  priorityItems: [
    {
      id: "two-towns",
      title: "Tools built by both High Towns, for everyone",
      description:
        "Creatives and long-standing residents in the same room, building one shared tool. Method matters as much as output.",
      rough: "Stress-test cohort",
    },
    {
      id: "council-multilingual",
      title: "Council English in High Town's actual languages",
      description:
        "Plain-English and multilingual digests of every Luton council decision, ward by ward.",
      rough: "Flagship civic-AI project",
    },
    {
      id: "asylum-seeker-onboarding",
      title: "First-week guide for new arrivals to Luton",
      description:
        "Housing, GP, school, food, rights - in the language someone arrives speaking.",
      rough: "Pilot in 3 languages",
    },
    {
      id: "creative-careers",
      title: "Creative careers built for the AI decade",
      description:
        "Cohort of High Town creatives helping each other deploy AI in their actual practice.",
      rough: "Hat Factory cohort",
    },
    {
      id: "youth-knife-crime",
      title: "Youth-violence prevention with every tool, used carefully",
      description:
        "AI applied ethically in service of youth workers, schools and police already doing this work.",
      rough: "Ethics-first scoping",
    },
    {
      id: "gig-economy",
      title: "AI fluency for the workers being asked to compete with it",
      description:
        "Evening cohorts for drivers, delivery, hospitality, care - at venues they actually go to.",
      rough: "Two-venue pilot",
    },
    {
      id: "older-residents-multilingual",
      title: "Older residents being left behind by digital services",
      description:
        "Multilingual, in-person, tea-led AI clinics at mosques, churches and community centres.",
      rough: "Faith-community led",
    },
    {
      id: "schools-multilingual",
      title: "Schools where most parents speak English as a second language",
      description:
        "AI tools for parent communication, homework support, pupil-progress conversations.",
      rough: "One-school pilot",
    },
  ],

  workedExample: {
    slug: "worked-example",
    title: "Council English for High Town",
    shortLabel: "Council English",
    shortDescription:
      "Worked example - a multilingual, plain-English digest of every Luton council decision, indexed by ward and by life-impact, accessible to both new arrivals and long-standing residents.",
    heroHeadline:
      "Council English is the first thing AI gives back to a town that's been told to read between the lines.",
    narrative: [
      "Ask anyone in High Town what their council decided last month and you'll get a stare. The papers are public. The minutes are online. The decisions land in living rooms across the ward. But the language, the format, the assumptions - all of it is built for the resident the council imagines, not the resident High Town actually has. And in a town where 60%+ of residents are minority ethnic and many speak English as a second or third language, the gap between what the council says and what residents understand isn't a gap. It's a wall.",
      "That's the promise of this worked example. HighTown.AI puts the modelling tools, the multilingual translation, the plain-English simplification, and the ward-level indexing directly into the hands of residents and civic volunteers. Coached, not contracted. Owned by the people who actually need to read the decision. The Council English project is the first proof that an AI-fluent neighbourhood can speak with the council, not just at it.",
      "And every method that works for council communications ports to the next thing we choose: the asylum-seeker first-week guide, the schools' parent communications, the foodbank donation match, the youth-charity case-load support. Council English is the prototype. Two High Towns reading the same decision is the prize.",
    ],
    roles: [
      {
        name: "Long-standing residents",
        role: "Tell us which council decisions actually land in their lives, and which ones never make sense in any language. Annotate the source documents. Bring the lived experience.",
      },
      {
        name: "Recent arrivals and refugee communities",
        role: "Bring the languages and the felt-need for arrival information - what wasn't there, what would have helped on day one.",
      },
      {
        name: "Sherpas AI teenagers",
        role: "Build the translation and simplification pipeline. Bring the technical depth. Pair with creative-quarter mentors.",
      },
      {
        name: "Hat District creatives",
        role: "Bring the design and storytelling craft - so the digest reads like something residents want, not a council-template PDF.",
      },
      {
        name: "Council officers",
        role: "Validate the source decisions, share what data can be shared, and raise the work into formal communications conversations.",
      },
      {
        name: "AI Optimist (Hugo)",
        role:
          "Coaches the team across both populations, keeps the scope honest, and connects the output into wider conversations with Luton Borough Council and central government.",
      },
    ],
    steps: [
      {
        n: "01",
        title: "Frame the problem with Problemarium",
        body: "Turn &ldquo;council communications don't reach us&rdquo; into specific, answerable questions - which decisions, which residents, which languages, which formats. Each becomes a tractable mini-project.",
      },
      {
        n: "02",
        title: "Gather the source decisions",
        body: "Combine Luton Borough Council's published papers with resident-submitted real questions about what those decisions mean. Flag where AI translation needs human review.",
      },
      {
        n: "03",
        title: "Build the translator",
        body: "A simple, transparent multilingual plain-English pipeline - the kind a Sherpas cohort can build and explain in a fortnight. Not a black box. Not a procurement.",
      },
      {
        n: "04",
        title: "Test in both High Towns",
        body: "Show the digest to creatives and to long-standing residents. Iterate based on what each population actually needs. The test isn't accuracy - it's usefulness.",
      },
      {
        n: "05",
        title: "Publish, invite challenge",
        body: "Share it on the HighTown.AI site, in print at community venues, and through the council's communications. Invite challenge in any language. Update transparently.",
      },
      {
        n: "06",
        title: "Feed into real council decisions",
        body: "With the council's help, the digest becomes the canonical resident-facing format. Resident voice, in council process - finally.",
      },
    ],
    whyFirst: {
      headline:
        "Because High Town has been talked at by the council for thirty years. Now the neighbourhood gets to do the listening.",
      body: "The whole point of an AI-fluent neighbourhood is that residents stop being the audience for civic decisions and start being authors of them. Council English is where we prove it - because every resident has a story about a council letter they couldn't read, the data is largely public, and the visible signal, when the work lands, is felt at every front door in High Town.",
    },
  },

  residentOffer: {
    speakerSeries: [
      {
        name: "Laura",
        topic: "AI for direct-to-consumer creative businesses",
        blurb:
          "A practitioner's session on the AI moves that shift the needle for a small D2C creative brand - tuned to High Town's makers and music promoters.",
      },
      {
        name: "Chris",
        topic: "Creating and protecting IP in the AI age",
        blurb:
          "What's changed, what hasn't, and the steps a creator should take before their idea gets scraped - especially relevant for the Hat District.",
      },
      {
        name: "Rolling roster",
        topic: "Guest speakers across creative industries, community organising and gig-economy futures",
        blurb:
          "Hugo brings one headline speaker a month - exclusively for High Town residents, deliberately rotating between creative-quarter venues and community spaces, so both High Towns show up.",
      },
    ],
    festivalName: "High Town AI Summer",
    physicalVenueExamples: [
      "the Hat Factory",
      "Luton Central Library",
      "High Town's mosques, churches and community centres",
      "Luton Town Hall",
    ],
  },

  councilAssets: [
    {
      title: "Council social channels",
      body: "Coordinated content across Luton Borough Council's Facebook, Instagram, X and LinkedIn. We supply assets in council voice, in multiple languages where it counts.",
    },
    {
      title: "Resident communications",
      body: "Inclusion in the council's regular resident bulletins and any opt-in lists. Each phase gets a dedicated send. Translations matter here more than anywhere else.",
    },
    {
      title: "Direct mail across High Town",
      body: "Reach the residents that no digital channel touches. In a ward this diverse and this multilingual, a printed flyer in three languages does work nothing else can do.",
    },
    {
      title: "Council noticeboards &amp; civic spaces",
      body: "Town Hall, Central Library, community centres. The places residents already trust for what's going on locally.",
    },
    {
      title: "Community relationships",
      body: "The council's relationships with mosques, churches, community centres, refugee charities, the Hat Factory and Culture Trust - the relationships paid marketing can't replicate.",
    },
    {
      title: "Press &amp; local media",
      body: "Luton News, Luton on Sunday, BBC Three Counties, Luton Today. Plus community-language press where it exists.",
    },
    {
      title: "Council meetings &amp; agendas",
      body: "A regular HighTown.AI standing item gives residents a visible signal that this is real, sustained civic work - not a one-off announcement.",
    },
    {
      title: "Civic events &amp; town moments",
      body: "Luton Carnival, the Mela, Mayor of Luton civic engagements, the Bedfordshire Year of Culture. Each becomes a touchpoint where residents encounter the programme in person.",
    },
    {
      title: "Venues &amp; physical hosting",
      body: "Steers on which council-controlled or council-friendly venues across High Town can host kick-offs, graduations, multilingual clinics and the festival.",
    },
  ],

  councilPartners: [
    "Culture Trust Luton (the Hat Factory, Hat House, Hat Works tenants)",
    "Luton Foodbank (incl. the Hightown Community Sports &amp; Arts Centre distribution)",
    "Luton All Women's Centre",
    "All Saints Asylum Seeker &amp; Refugee Support Project",
    "Luton City of Sanctuary network",
    "Luton Council of Mosques",
    "St Matthew's Church and High Town Methodist Church",
    "Cardinal Newman, Denbigh High and Lea Manor",
    "BEDS Creative and the University of Bedfordshire",
    "Wingman Mentors and Luton's youth-violence partnership",
    "Cllr Umme Ali (Deputy Leader, High Town ward) and Cllr James Taylor (High Town ward)",
  ],

  personaPages: {
    teenSchoolExamples: [
      "Cardinal Newman",
      "Denbigh High",
      "Lea Manor",
      "Putteridge",
    ],
    organisationExamples: [
      {
        org: "Luton Foodbank",
        problem:
          "Match donations to need across High Town's growing demand without anyone going hungry - in the languages our volunteers actually speak.",
      },
      {
        org: "Luton Refugee Forum",
        problem:
          "Help new arrivals navigate their first week in Luton without depending on whether a caseworker happened to pick up the phone.",
      },
      {
        org: "The Hat Factory",
        problem:
          "Help High Town's creatives build AI into their practice without losing the soul that brought them here.",
      },
      {
        org: "A High Town mosque",
        problem:
          "Help older members access digital council services with the dignity and language they deserve.",
      },
    ],
  },

  seedProblems: [
    {
      organisation: "Luton Foodbank - Hightown Community Sports &amp; Arts Centre",
      contactName: "Foodbank coordinator",
      contactEmail: "tbc@lutonfoodbank.org.uk",
      shortTitle:
        "Match donations to need in the languages our volunteers actually speak",
      description:
        "We run our High Town distribution from the Hightown Community Sports &amp; Arts Centre on York Street, Fridays 1-3pm. Donations arrive unpredictably. The families we serve speak Urdu, Bengali, Romanian, Polish, Pashto and Tigrinya among others. Matching food to family is a manual scramble made harder by the language gap at the front desk. Could AI forecast demand, suggest fair allocations, and bridge the language gap in real time?",
      whoFeelsIt:
        "Volunteers at the York Street desk on Friday afternoons. The families who come on the wrong day in the wrong language. The trustees watching food go to waste while need rises (39% child poverty in our wards).",
      alreadyTried:
        "Spreadsheets. WhatsApp groups in three languages. A volunteer rota that depends on who's available and what languages they speak.",
      successIn90Days:
        "A simple AI-assisted weekly plan that reduces wasted donations by 50%, lets families know in their language what's coming, and reduces the front-desk language barrier on Fridays.",
      tags: ["food", "matching", "multilingual", "demo-seed"],
    },
    {
      organisation: "All Saints Asylum Seeker &amp; Refugee Support Project",
      contactName: "Project coordinator",
      contactEmail: "tbc@allsaintsluton.org",
      shortTitle:
        "Help new arrivals to Luton survive their first week with dignity",
      description:
        "We run a twice-weekly drop-in for asylum seekers placed in Luton hotels. Most arrive with almost no information in their first language about housing, GP, school, food and their rights. A friendly AI helper in their language - paired with a human caseworker - could change the first week from terrifying to navigable.",
      whoFeelsIt:
        "Recent arrivals at the Luton hotels. The two over-stretched caseworkers. The volunteers who speak the language but can't be on call 24/7. The British Red Cross team running Wednesday support at Hope Church.",
      alreadyTried: "Printed leaflets. Phone trees. WhatsApp groups. Volunteers walking arrivals through forms.",
      successIn90Days:
        "A working assistant new arrivals can talk to in Pashto, Tigrinya and Arabic that signposts the right service in under two minutes - reviewed weekly by caseworkers and Luton City of Sanctuary.",
      tags: ["asylum", "multilingual", "first-week", "demo-seed"],
    },
  ],

  contact: {
    email: "hugo+hightown-ai@pdubs.co",
  },
};
