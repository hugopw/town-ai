import type { Place } from "./_types";

// Harpenden config. All strings preserved exactly from the
// deployed harpenden-ai site so the visual QA test (byte-equivalent
// rendering vs production) passes after the multi-tenant refactor.

export const harpenden: Place = {
  slug: "harpenden",
  name: "Harpenden",
  formalName: "Harpenden, Hertfordshire",
  wordmark: "Harpenden.AI",
  wordmarkAccent: ".",
  domainHint: "harpenden.ai",

  council: {
    name: "Harpenden Town Council",
    shortName: "the council",
    type: "town",
    website: "https://www.harpenden.gov.uk/",
    pressOutlets: [
      "The Herts Ad",
      "Harpenden Life magazine",
      "Harpenden Connect",
      "BBC Three Counties",
    ],
    civicEvents: [
      "Carnival",
      "Christmas lights switch-on",
      "summer events",
      "Mayor's engagements",
    ],
  },

  thesis: {
    eyebrow: "The honest bit",
    headline:
      "The displacement risk in Harpenden is higher than average. Pretending otherwise isn't a kindness.",
    paragraphs: [
      "Harpenden sits on the Thameslink, and an unusually large share of its working-age residents commute into London for senior knowledge-economy roles - consulting, finance, technology, legal, marketing. These are the exact roles every large corporate is now quietly modelling for AI-driven headcount reduction.",
      "The same households have also invested heavily in their children's education on the assumption that university leads to a career like the parents'. That assumption deserves honest re-examination.",
      "We don't think the answer is fear. We think the answer is fluency - enough AI literacy to keep residents valuable, their children equipped, their businesses thriving, and their council ahead of the curve.",
    ],
    angle: "commuter-displacement",
    secondQuestion: {
      eyebrow: "Question two",
      body: "When the town's own people build the tools the town needs - the traffic model, the venue directory, the council-paper translator, the pothole tracker, the warm loneliness concierge.",
    },
  },

  hero: {
    pills: [
      "Harpenden, Hertfordshire",
      "A vision for the town council",
      "Summer 2026",
    ],
    headline: {
      lead: "What happens when ",
      emphasis: "everyone",
      tail: " in your community is fluent in AI?",
    },
    lede:
      "Harpenden is unusually well placed to find out. A town full of London knowledge workers, ambitious families, grounded independents, and a council that listens. We think we can make it the UK's first truly AI-fluent town - together, and in one summer.",
    bigQuestion: {
      eyebrow: "Question one",
      body: "Not a few early adopters. Everyone - the retiree at the Leisure Centre, the teenager at Roundwood, the marketing director on the 07:42, the butcher on the High Street, the clerk at the Town Hall.",
    },
  },

  stats: {
    hero: [
      {
        value: "31,128",
        label: "Harpenden residents",
        source: "ONS Census 2021",
      },
      {
        value: "~49%",
        label:
          "Of residents in professional and managerial occupations - 4th highest in England",
        source: "ONS Census 2021 · SADC",
      },
      {
        value: "60.5%",
        label:
          "Working-age residents with a degree, vs 29.8% peer-group average",
        source: "ONS Towns &amp; Cities 2021",
      },
      {
        value: "2.6M",
        label:
          "Journeys a year through Harpenden station - Thameslink to St Pancras in 26 minutes",
        source: "ORR 2023/24",
      },
    ],
    community: [
      {
        value: "31,128",
        label: "Residents, Census 2021. Mid-2024 estimate: 31,337.",
        source: "ONS Census 2021",
      },
      {
        value: "55.1%",
        label: "Working-age (18-64) - the core of the London commute",
        source: "ONS mid-2024 estimate",
      },
      {
        value: "26.9%",
        label: "Under 18 - Harpenden skews young and family-heavy",
        source: "ONS mid-2024 estimate",
      },
      {
        value: "18.0%",
        label: "Aged 65+ - a meaningful older-resident population",
        source: "ONS mid-2024 estimate",
      },
      {
        value: "~49%",
        label:
          "In professional / managerial occupations - vs 33% nationally",
        source: "ONS Census 2021, Harpenden North &amp; South wards",
      },
      {
        value: "60.5%",
        label:
          "Working-age residents with a degree, vs 29.8% peer-group average",
        source: "ONS Towns &amp; Cities 2021",
      },
      {
        value: "2.64M",
        label: "Journeys a year through Harpenden station",
        source: "ORR Estimates of Station Usage 2023/24",
      },
      {
        value: "Top 1%",
        label: "Least-deprived areas in England - Harpenden North LSOA",
        source: "English Indices of Deprivation 2019",
      },
    ],
    communityCaption:
      "Figures are drawn from ONS Census 2021, ONS mid-year estimates, the Office of Rail and Road, and the English Indices of Deprivation. St Albans District is the fourth-highest district in England for managerial, senior-official and professional occupations. Once the council shares local insight, every number will be sharpened.",
  },

  anchors: [
    {
      name: "Rothamsted Research",
      role: "world-class research institution on our doorstep",
      use: "A natural partner for the ambition of an AI-fluent town.",
    },
    {
      name: "Harpenden Leisure Centre",
      role: "a natural home for warm, in-person AI clinics",
      use: "For older residents and parents.",
    },
    {
      name: "The Common &amp; Rothamsted Park",
      role: "our civic front room",
      use: "And the right place for a summer festival.",
    },
    {
      name: "St Nicholas &amp; Harpenden Methodist",
      role:
        "halls and pastoral networks that reach residents digital channels miss",
      use: "",
    },
    {
      name: "Harpenden Secondary Schools",
      role: "a natural host for Sherpas AI teen cohorts and family-level programmes",
      use: "",
    },
    {
      name: "Harpenden BID &amp; the High Street",
      role:
        "the independents whose livelihoods can be protected with an hour of AI coaching",
      use: "",
    },
    {
      name: "Harpenden Town Council &amp; the Town Hall",
      role:
        "the convening power that turns this from a nice idea into a funded, visible, civic programme",
      use: "",
    },
    {
      name: "Harpenden Facebook groups &amp; The Herts Ad",
      role: "where residents actually find out what's going on",
      use: "",
    },
  ],

  segmentArchetypes: {
    typicalCommuter: "the marketing director on the 07:42",
    typicalElder: "the retiree at the Leisure Centre",
    typicalTeen: "the teenager at Roundwood",
    typicalIndependent: "the butcher on the High Street",
    typicalCouncilOfficer: "the clerk at the Town Hall",
  },

  challenges: [
    {
      id: "venues",
      title: "Where can I hold my event?",
      pitch:
        "Harpenden has brilliant venues hiding in plain sight - halls, studios, churches, gardens, cafes out-of-hours. A resident-built directory, maintained by the community, searchable by a simple AI concierge.",
      why: "Solves an everyday frustration. Builds the community habit of using AI together.",
      owner: "Community working group + local venues",
      first: "A 50-venue pilot directory, in 4 weeks.",
    },
    {
      id: "traffic",
      title: "Traffic from new developments",
      pitch:
        "Model the traffic impact of proposed developments on Southdown, the A1081 and the school-run network using open planning and transport data. Show residents the numbers, clearly.",
      why: "Gives residents an evidence-led voice in planning conversations that too often feel opaque.",
      owner: "Open data + council planning officers",
      first: "See the /worked-example worked prototype.",
      href: "/worked-example",
    },
    {
      id: "loneliness",
      title: "No one in Harpenden feels lonely",
      pitch:
        "A warm, opt-in AI concierge that knows every club, group and drop-in in town - and can match a resident to three things happening this week that would actually suit them.",
      why: "Community Life Survey data shows loneliness rises sharply for over-75s. Harpenden has a large 65+ cohort and a huge number of clubs; the gap is matching.",
      owner: "Age UK Herts + community groups",
      first: "Pilot at the Leisure Centre and the Library, summer 2026.",
    },
    {
      id: "potholes",
      title: "Fix the potholes",
      pitch:
        "A resident-reported pothole map with AI-generated priority scoring - rolled into the council's highways workflow rather than bolted on to it.",
      why: "A small, tangible win that proves AI + civic reporting can work end-to-end.",
      owner: "Council highways + resident volunteers",
      first: "WhatsApp bot + shared map, September 2026.",
    },
    {
      id: "engagement",
      title: "Council engagement across the town",
      pitch:
        "Translate every council paper, minute and decision into a plain-English digest - searchable by street, topic, and impact on you. Close the gap between the council and the parts of town that never engage.",
      why: "The single highest-leverage civic-AI project we could run. Its output compounds every week.",
      owner: "Harpenden Town Council + civic volunteers",
      first: "A weekly digest pilot for the next three council meetings.",
    },
    {
      id: "teens",
      title: "Teenagers who build, not just use, AI",
      pitch:
        "Sherpas AI - Harpenden edition. Summer work-experience cohorts where 15-18-year-olds ship AI tools for real Harpenden organisations, coached by local alumni.",
      why: "Hands-on experience is worth ten hours of theory. Proves to parents that the alternative path is already real.",
      owner: "Sherpas AI + Harpenden Secondary Schools Trust",
      first: "Summer 2026 cohort, 15 teens, 3 shipped tools.",
    },
    {
      id: "highstreet",
      title: "A high street that thrives in the AI age",
      pitch:
        "Every independent on the high street gets one hour with an AI coach and a shortlist of AI moves that buy them back a day a week - no SaaS bloat, no hype.",
      why: "Protects the most visible part of the town's identity. Compounds quickly.",
      owner: "Harpenden independents + AI Optimist",
      first: "20-business pilot with the Small-Business AI Opportunity Diagnostic.",
    },
    {
      id: "older",
      title: "Older residents who feel confident, not left behind",
      pitch:
        "Weekly drop-in AI clinics at the Leisure Centre and Library. Warm, patient, jargon-free, deliberately slow. Tea included.",
      why: "Meets scared and reluctant residents where they are. Builds trust the rest of the programme depends on.",
      owner: "Volunteer coaches + local partners",
      first: "Two weekly clinics, starting first week of the festival.",
    },
  ],

  priorityItems: [
    {
      id: "traffic",
      title: "Traffic from new developments",
      description:
        "Model the impact of planned builds on school-run routes, Southdown and the A1081, using open traffic and planning data.",
      rough: "Worked example ready",
    },
    {
      id: "loneliness",
      title: "No one in Harpenden feels alone",
      description:
        "Match residents to local groups, clubs and regular meetups using a warm, opt-in AI concierge built with Age UK Herts.",
      rough: "Needs a local partner",
    },
    {
      id: "venues",
      title: "Where can I hold my event?",
      description:
        "A living directory of hirable halls, rooms and gardens - searchable by size, price, date, and vibe.",
      rough: "Community-run directory",
    },
    {
      id: "potholes",
      title: "Fix the potholes",
      description:
        "A resident-reported pothole map with AI-generated repair-priority scoring, routed into the council highways workflow.",
      rough: "Council integration",
    },
    {
      id: "engagement",
      title: "Council engagement across the town",
      description:
        "Translate council papers, meetings and decisions into plain-English digests so every resident can meaningfully take part.",
      rough: "Flagship civic-AI project",
    },
    {
      id: "teens",
      title: "Teenagers who can build, not just use, AI",
      description:
        "Sherpas AI work-experience cohorts - Harpenden teens shipping real AI tools for local businesses over the summer.",
      rough: "Runs annually",
    },
    {
      id: "highstreet",
      title: "A high street that thrives in the AI age",
      description:
        "Every independent on the high street gets one hour with an AI coach and a shortlist of AI tools that save them a day a week.",
      rough: "90-day programme",
    },
    {
      id: "older",
      title: "Older residents feel confident, not left behind",
      description:
        "Weekly drop-in AI clinics at the Leisure Centre and Library - warm, patient, jargon-free, and deliberately slow.",
      rough: "Volunteer-led",
    },
  ],

  workedExample: {
    slug: "worked-example",
    title: "Harpenden traffic",
    shortLabel: "traffic",
    shortDescription:
      "Worked-example prototype showing how Harpenden residents can use AI together to take on a real community problem.",
    heroHeadline:
      "Traffic is the first thing AI gives back to the people who actually live with it.",
    liveToolUrl:
      "https://www.ainightschool.org/harpenden-ai/harpenden-traffic-example",
    liveToolLabel: "Open the live Harpenden Traffic tool",
    narrative: [
      "For decades, the people who feel Harpenden's traffic most acutely - the parents on the school run, the retirees crossing Southdown, the residents of streets where every new development quietly adds another rat-run - have had no credible way to be heard. The data lives in consultancy reports. The models live behind procurement walls. The residents who carry the consequences live with their hands tied.",
      "That's the promise of this worked example. Harpenden.AI puts the modelling tools, the data literacy, and the storytelling skills directly in residents' hands. Coached, not contracted. Owned by the people who actually live here. The traffic project is the first proof that an AI-fluent town can take on its own problems - together - and have its work taken seriously by the people who make decisions.",
      "And every method that works for traffic ports to the next problem we choose: hirable venues, loneliness, potholes, council engagement, the high street. The traffic example is the proof; the empowerment is the prize.",
    ],
    roles: [
      {
        name: "Residents",
        role: "Collect on-the-ground observations - school-run bottlenecks, the Southdown squeeze, the A1081 at 8.15, the new-development entry roads. Annotate maps. No technical skill required.",
      },
      {
        name: "Sherpas AI teenagers",
        role: "Build the data-collection app. Ingest open traffic and planning data. Build the simple model. This is exactly the work they'd do on a summer cohort.",
      },
      {
        name: "AI Night School alumni",
        role: "Apply AI to the analysis and write it up in plain English. Produce the resident-facing summary. Own the narrative.",
      },
      {
        name: "Council officers",
        role: "Validate the assumptions, share what data can be shared, and raise the work into formal planning conversations.",
      },
      {
        name: "AI Optimist (Hugo)",
        role:
          "Coaches the team, keeps the scope honest, and connects the output into wider conversations with the district and county.",
      },
    ],
    steps: [
      {
        n: "01",
        title: "Frame the problem with Problemarium",
        body: 'Turn "traffic is bad" into a set of specific, answerable questions - school-run, peak-hour, planning-led, parking-led. Each becomes a tractable mini-project.',
      },
      {
        n: "02",
        title: "Gather the data",
        body: "Combine open DfT and council planning data with resident-collected observations. Flag where assumptions have to stand in for missing data.",
      },
      {
        n: "03",
        title: "Model the impact",
        body: "A simple, transparent model - the kind a Sherpas AI cohort can build and explain in a week. Not a black box. Not a million-pound procurement.",
      },
      {
        n: "04",
        title: "Write it up in plain English",
        body: "Translate the output into something a Harpenden resident can read in five minutes and form an opinion on. AI Night School alumni own the writing.",
      },
      {
        n: "05",
        title: "Publish, invite challenge",
        body: "Share it on the Harpenden.AI site and with council officers. Invite residents to poke holes. Update transparently. That's the whole point.",
      },
      {
        n: "06",
        title: "Feed into real decisions",
        body: "With the council's help, the output gets referenced in formal planning conversations - so resident work doesn't stay informal.",
      },
    ],
    whyFirst: {
      headline:
        "Because Harpenden has been told about its own traffic for twenty years. Now the town gets to do the telling.",
      body: "The whole point of an AI-fluent town is that residents stop being the audience for civic decisions and start being authors of them. Traffic is where we prove it, because every resident already has an opinion, the data is largely public, and the visible signal - when the work lands - is felt on every pavement in town.",
    },
  },

  residentOffer: {
    speakerSeries: [
      {
        name: "Laura",
        topic: "AI for direct-to-consumer businesses",
        blurb:
          "A practitioner's session on the AI moves that actually shift the needle for a small D2C brand - marketing, ops, product, customer service.",
      },
      {
        name: "Chris",
        topic: "Creating and protecting IP in the AI age",
        blurb:
          "What's changed, what hasn't, and the concrete steps a founder or creator should take before their idea gets scraped.",
      },
      {
        name: "Rolling roster",
        topic: "Guest speakers from Hugo's network",
        blurb:
          "Hugo brings one headline speaker a month from the AI Optimist network - exclusively for Harpenden residents, in a Harpenden room, over a Harpenden dinner.",
      },
    ],
    festivalName: "Harpenden AI Summer",
    physicalVenueExamples: [
      "Harpenden Public Halls",
      "the Leisure Centre",
      "the Library",
      "Rothamsted Park",
    ],
  },

  councilAssets: [
    {
      title: "Council social channels",
      body: "Coordinated content across the council's Facebook, Instagram, X and LinkedIn. We supply the assets in council voice; you decide cadence and timing.",
    },
    {
      title: "Resident email lists",
      body: "Inclusion in the council's regular resident bulletins, e-newsletters and any opt-in lists you maintain. Each programme phase gets its own dedicated send.",
    },
    {
      title: "Direct mail &amp; letterbox drops",
      body: "Reach the residents that no digital channel touches. Even a single town-wide drop introducing the resident offer transforms the programme's starting line.",
    },
    {
      title: "Council noticeboards &amp; civic spaces",
      body: "Town Hall, Public Halls, library noticeboards, The Eric Morecambe Centre. The places residents already trust for what's on in town.",
    },
    {
      title: "Community relationships",
      body: "The council's warm relationships with Rothamsted, the Secondary Schools Trust, Age UK Herts, the Leisure Centre, the BID, faith groups, and resident associations.",
    },
    {
      title: "Press &amp; local media",
      body: "The Herts Ad, Harpenden Life magazine, Harpenden Connect, BBC Three Counties. A council-endorsed launch makes the press story write itself.",
    },
    {
      title: "Council meetings &amp; agendas",
      body: "A regular Harpenden.AI standing item gives residents a visible signal that this is real, sustained civic work - not a one-off announcement.",
    },
    {
      title: "Civic events &amp; town moments",
      body: "Carnival, Christmas lights switch-on, summer events, Mayor's engagements. Each becomes a touchpoint for residents to encounter the programme in person.",
    },
    {
      title: "Venues &amp; physical hosting",
      body: "Steers on which council-controlled or council-friendly venues can host the cohort kick-offs, graduations, clinics and the summer festival.",
    },
  ],

  councilPartners: [
    "Rothamsted Research",
    "the Secondary Schools Trust",
    "Age UK Herts",
    "Harpenden Leisure Centre",
    "the BID",
    "faith groups",
    "resident associations",
    "Harpenden Facebook group admins",
  ],

  personaPages: {
    teenSchoolExamples: [
      "Roundwood",
      "Sir John Lawes",
      "St George's",
      "Katherine Warington",
    ],
    organisationExamples: [
      {
        org: "Kings Pantry",
        problem:
          "Match donated food to family need without anyone going hungry - and without waste.",
      },
      {
        org: "Harpenden Trust",
        problem:
          "Help residents find the right grant or service quickly, even if they've never heard of us.",
      },
      {
        org: "Roundwood Park School",
        problem:
          "Triage parent and pupil enquiries so the office isn't the bottleneck.",
      },
      {
        org: "Sport for Confidence",
        problem:
          "Match volunteers to the right session, every week, without phoning round.",
      },
    ],
  },

  seedProblems: [
    {
      organisation: "Kings Pantry",
      contactName: "Kings Pantry team",
      contactEmail: "hello@kingspantry.example",
      shortTitle:
        "Match donated food to family need without anyone going hungry",
      description:
        "We get unpredictable food donations from supermarkets and growers. Matching the right food to the right family at the right time is currently a manual scramble. Could we use AI to forecast demand, suggest fair allocations, and reduce waste?",
      whoFeelsIt:
        "Volunteers at the front desk, the families who come on the wrong day, and our trustees watching food go to waste.",
      alreadyTried:
        "A spreadsheet. A WhatsApp group. A volunteer rota. They each help, but none of them solve the matching problem.",
      successIn90Days:
        "A simple AI-assisted weekly plan that reduces wasted donations by 50% and lets families know two days in advance what's coming.",
      tags: ["food", "matching", "volunteer-led", "demo-seed"],
    },
    {
      organisation: "Harpenden Trust",
      contactName: "Trust office",
      contactEmail: "office@harpendentrust.example",
      shortTitle: "Help residents find the right grant or service quickly",
      description:
        "We field hundreds of resident enquiries a year about grants, befriending, transport and more. A resident-facing AI helper that knew our services inside out could halve our triage time and reach the people who don't pick up the phone.",
      whoFeelsIt:
        "Older residents who don't know we exist. The two staff who triage every enquiry. Trustees who suspect we're missing many we could help.",
      alreadyTried: "Leaflets, a website FAQ, the Herts Ad column.",
      successIn90Days:
        "A confident, friendly assistant residents can talk to in plain English that signposts the right Trust service in under two minutes.",
      tags: ["older-residents", "signposting", "warm-front-door", "demo-seed"],
    },
  ],

  contact: {
    email: "hugo+harpenden-ai@pdubs.co",
  },
};
