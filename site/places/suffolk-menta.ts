import type { Place } from "./_types";

// Suffolk / Menta - 80% draft for visual QA.
//
// Menta is the Suffolk-based business support and entrepreneurship
// charity (mentasuffolk.co.uk). The "council" stakeholder here is
// the Menta board / Suffolk-County partnership rather than a
// single town council. Angle: entrepreneurial-cluster + rural
// adjacency. Hugo's content prompt will produce the production
// version; this file is for schema validation and visual QA.

export const suffolkMenta: Place = {
  slug: "suffolk-menta",
  name: "Suffolk",
  formalName: "Suffolk, with Menta",
  wordmark: "Suffolk.AI",
  wordmarkAccent: ".",
  domainHint: "suffolk-ai.org",
  placeNoun: "county",

  council: {
    name: "Menta and Suffolk County Council",
    shortName: "the partnership",
    type: "county",
    website: "https://www.suffolk.gov.uk/",
    pressOutlets: [
      "East Anglian Daily Times",
      "Suffolk News",
      "BBC Radio Suffolk",
      "Mustard TV / ITV Anglia",
    ],
    civicEvents: [
      "Suffolk Show",
      "the New Anglia LEP business conference",
      "the Menta annual showcase",
      "Mayor of Ipswich civic events",
    ],
  },

  thesis: {
    eyebrow: "The honest bit",
    headline:
      "Every Suffolk founder has heard about AI. Almost none have built with it. Pretending that gap closes itself isn't a kindness.",
    paragraphs: [
      "Suffolk has the deepest founder network outside London. Thirty years of Menta. The New Anglia ecosystem. Adastral Park's R&amp;D footprint. Agricultural and energy supply chains of national importance. Few counties have this combination of capability, mentorship and technical depth - and we've spent two years now telling our founders that AI matters.",
      "Telling isn't teaching. The founders we'd back to lead Suffolk's next decade have heard the AI talks, watched the conference panels, downloaded the playbooks. They haven't, mostly, built anything inside their own businesses with AI. Not because they can't - because nobody's sat with them, in a Suffolk room, and shown them how. That's the gap.",
      "We don't think the answer is more talks. We think the answer is a Menta-shaped, founder-shaped, peer-led cohort - the kind of practical, hands-on coaching Suffolk's founders already trust Menta to deliver in every other domain. AI fluency, the way Suffolk's always done founder support: at scale, locally, with each other.",
    ],
    angle: "entrepreneurial-cluster",
    secondQuestion: {
      eyebrow: "Question two",
      body: "When Suffolk's own founders, growers, energy operators and tech teams build the tools the county needs - the supply-chain matcher, the rural-skills navigator, the founder-grant translator, the loneliness concierge for our coastal communities.",
    },
  },

  hero: {
    pills: [
      "Suffolk, with Menta",
      "A vision for the county's entrepreneurial cluster",
      "Summer 2026",
    ],
    headline: {
      lead: "What happens when ",
      emphasis: "every Suffolk founder",
      tail: " is fluent in AI?",
    },
    lede:
      "Suffolk is unusually well placed to find out. Thirty years of Menta-built founder support. Serious technical depth at Adastral Park. Agricultural and energy supply chains of national importance. A community fabric that knows how to back its own. We think we can make Suffolk the UK's first AI-fluent county - the one that turns talk into building, at Menta scale, across every market town and coast.",
    bigQuestion: {
      eyebrow: "Question one",
      body: "Not just the early adopters in Ipswich or the BT campus. Everyone - the founder at a Menta cohort, the grower in High Suffolk, the engineer at Sizewell, the volunteer at a coastal community trust, the officer at Endeavour House.",
    },
  },

  stats: {
    hero: [
      {
        value: "766,000",
        label: "Suffolk residents",
        source: "ONS Census 2021",
      },
      {
        value: "~64,000",
        label: "Active businesses across Suffolk - mostly small",
        source: "ONS UK Business Counts (TBC)",
      },
      {
        value: "30+ years",
        label: "Menta has been supporting Suffolk's founders",
        source: "mentasuffolk.co.uk",
      },
      {
        value: "BT Adastral Park",
        label:
          "One of the UK's largest single-site R&amp;D campuses, on Suffolk soil",
        source: "BT Group",
      },
    ],
    community: [
      {
        value: "766,000",
        label: "Residents across Suffolk",
        source: "ONS Census 2021",
      },
      {
        value: "60%",
        label: "Working-age residents (TBC)",
        source: "ONS Census 2021 (TBC)",
      },
      {
        value: "~22%",
        label:
          "Aged 65+ - higher than national average; coastal communities skew older",
        source: "ONS Census 2021 (TBC)",
      },
      {
        value: "~64,000",
        label: "Active businesses; mostly micro and small",
        source: "ONS UK Business Counts (TBC)",
      },
      {
        value: "~6.5%",
        label:
          "Of jobs in agriculture, forestry &amp; fishing - several times the national average",
        source: "ONS (TBC)",
      },
      {
        value: "Adastral Park",
        label:
          "BT's R&amp;D campus, with serious AI and networks capability on the doorstep",
        source: "BT Group",
      },
      {
        value: "1h 10m",
        label: "Ipswich to London Liverpool Street, Greater Anglia",
        source: "National Rail",
      },
      {
        value: "Mixed",
        label:
          "Coastal deprivation pockets sit alongside affluent market-town wards",
        source: "English Indices of Deprivation 2019",
      },
    ],
    communityCaption:
      "Figures drawn from ONS Census 2021, ONS Business Counts, and county-published data. Suffolk's character is plural - founder-dense around Ipswich, agricultural across High Suffolk, coastal in Lowestoft and Aldeburgh, R&amp;D-heavy at Adastral Park. Once Menta and SCC share local insight, every figure will be sharpened. (80% draft - to be upgraded by the content prompt.)",
  },

  anchors: [
    {
      name: "Menta",
      role: "Suffolk's 30-year-old founder support charity",
      use: "The convening partner for the entire AI-fluent-county programme.",
    },
    {
      name: "BT Adastral Park",
      role:
        "one of the UK's largest single-site R&amp;D campuses, with deep AI capability",
      use: "Potential mentoring partner; an obvious AI-coach pipeline.",
    },
    {
      name: "Suffolk County Council",
      role: "the county's strategic civic partner",
      use: "Convening power, partnership endorsement, channel access.",
    },
    {
      name: "New Anglia LEP &amp; partner growth networks",
      role: "the wider business-support ecosystem",
      use: "Distribution channel; programme partner.",
    },
    {
      name: "University of Suffolk &amp; Suffolk New College",
      role: "skills, talent, and student-led research capacity",
      use: "Partner for Sherpas AI cohorts and AI Coach training.",
    },
    {
      name: "Sizewell &amp; the energy sector",
      role: "Suffolk's serious low-carbon energy footprint",
      use: "AI in critical infrastructure; long-horizon talent partner.",
    },
    {
      name: "Suffolk's market towns &amp; coastal communities",
      role: "Bury, Newmarket, Lowestoft, Aldeburgh, Halesworth and others",
      use: "Each gets its own working group; one county, many places.",
    },
    {
      name: "East Anglian Daily Times &amp; BBC Radio Suffolk",
      role: "where the county actually finds out what's happening",
      use: "",
    },
  ],

  segmentArchetypes: {
    typicalCommuter:
      "the founder coming back from a Menta meeting in Bury",
    typicalElder: "the volunteer at a Lowestoft community trust",
    typicalTeen: "the sixth-former at One Sixth Form College",
    typicalIndependent:
      "the Halesworth high-street shop owner",
    typicalCouncilOfficer: "the officer at Endeavour House",
  },

  challenges: [
    {
      id: "founders",
      title: "Founders fluent in AI, not just informed about it",
      pitch:
        "Menta-shaped peer cohorts where founders learn to deploy AI inside their actual business with practical, hands-on coaching - not webinars.",
      why: "Suffolk's competitive moat is its founder density. AI fluency among them is county economic strategy.",
      owner: "Menta + AI Optimist",
      first: "Menta-AI cohort one in Bury, summer 2026.",
    },
    {
      id: "youth-talent",
      title: "Young Suffolk talent that stays in Suffolk",
      pitch:
        "Sherpas AI - Suffolk edition. Paid summer cohorts where 15-18-year-olds build for real Suffolk businesses, coached by alumni and mentored by Adastral engineers.",
      why: "Talent retention is the long game. Pairing young people with serious local employers is the unlock.",
      owner: "Sherpas AI + Suffolk schools + Adastral Park",
      first: "Summer 2026 cohort, 15 teens, 3 shipped tools.",
    },
    {
      id: "agricultural-supply",
      title: "AI for the supply chains that feed the country",
      pitch:
        "Suffolk's growers and food businesses learning what AI is genuinely useful for - workforce, traceability, paperwork, machinery uptime - in a peer cohort with no SaaS pressure.",
      why: "Suffolk's agricultural sector is national infrastructure. Helping it adopt AI well is a county-level intervention.",
      owner: "Menta + AI Optimist + NFU",
      first: "A six-business cohort, autumn 2026.",
    },
    {
      id: "coastal",
      title: "Coastal communities that don't get left behind",
      pitch:
        "Travelling AI clinics across Lowestoft, Felixstowe and the coast - warm, in-person, deliberately slow, embedded in existing community spaces.",
      why: "Coastal Suffolk is older, more isolated, and easy to under-serve from Ipswich.",
      owner: "Volunteer coaches + coastal community trusts",
      first: "Two coastal venues, autumn 2026.",
    },
    {
      id: "highstreet",
      title: "Market-town high streets that thrive",
      pitch:
        "Bury, Halesworth, Beccles, Hadleigh, Saxmundham - every independent gets one hour with an AI coach and a shortlist of moves that buy them a day a week back.",
      why: "Suffolk's high streets carry the county's character. AI fluency at independent scale is how each market town keeps that character through the next decade.",
      owner: "Town traders + Menta + AI Optimist",
      first: "20-business pilot with the Small-Business AI Opportunity Diagnostic.",
    },
    {
      id: "engagement",
      title: "Civic engagement across a long county",
      pitch:
        "Translate every council decision into a plain-English digest searchable by district and topic. Close the gap between Suffolk County Council and the parts of the county that don't engage.",
      why: "Suffolk geography is genuinely long. AI is the only thing that scales civic communication across it.",
      owner: "Suffolk County Council + civic volunteers",
      first: "Weekly digest pilot for the next three SCC meetings.",
    },
    {
      id: "energy",
      title: "AI in critical infrastructure, properly",
      pitch:
        "A founder-shaped working group around Sizewell, energy, and grid - so Suffolk's energy economy adopts AI well, not breathlessly.",
      why: "Suffolk hosts national-scale energy infrastructure. The county's AI fluency in this space is strategic.",
      owner: "Energy operators + AI Optimist + universities",
      first: "Closed-door cohort, autumn 2026.",
    },
    {
      id: "loneliness",
      title: "No one in Suffolk feels alone",
      pitch:
        "A warm, opt-in concierge that knows every group, club and drop-in across the county, matching residents to things happening near them this week.",
      why: "Long county + older coastal communities = real loneliness risk. Bringing matching to scale is community work.",
      owner: "Age UK Suffolk + community trusts",
      first: "Pilot at Ipswich + a Lowestoft community space.",
    },
  ],

  priorityItems: [
    {
      id: "founders",
      title: "Founders fluent in AI, not just informed about it",
      description:
        "Menta-shaped peer cohorts deploying AI inside real businesses with practical coaching.",
      rough: "Menta cohort one",
    },
    {
      id: "youth-talent",
      title: "Young Suffolk talent that stays in Suffolk",
      description:
        "Sherpas AI - Suffolk edition. Paid teen cohorts shipping for real Suffolk businesses.",
      rough: "Adastral mentored",
    },
    {
      id: "agricultural-supply",
      title: "AI for the supply chains that feed the country",
      description:
        "A peer cohort helping Suffolk's growers and food businesses adopt AI well.",
      rough: "Cohort of 6",
    },
    {
      id: "coastal",
      title: "Coastal communities that don't get left behind",
      description:
        "Travelling AI clinics across Lowestoft, Felixstowe and the coast.",
      rough: "Two-venue pilot",
    },
    {
      id: "highstreet",
      title: "Market-town high streets that thrive",
      description:
        "AI coaching for every independent in Bury, Halesworth, Beccles and beyond.",
      rough: "Cross-town diagnostic",
    },
    {
      id: "engagement",
      title: "Civic engagement across a long county",
      description:
        "Plain-English district-searchable digests of every county decision.",
      rough: "Flagship civic-AI",
    },
    {
      id: "energy",
      title: "AI in critical infrastructure, properly",
      description:
        "Founder-shaped working group around Sizewell, energy and grid.",
      rough: "Closed cohort",
    },
    {
      id: "loneliness",
      title: "No one in Suffolk feels alone",
      description:
        "Warm AI concierge matching residents to local groups across the county.",
      rough: "Volunteer-led",
    },
  ],

  workedExample: {
    slug: "worked-example",
    title: "Suffolk founder-AI fluency",
    shortLabel: "founder-AI",
    shortDescription:
      "Worked-example prototype showing how Menta's founders adopt AI inside real businesses, in cohort, with practical coaching.",
    heroHeadline:
      "The Menta cohort is the first thing AI offers Suffolk founders that isn't another conference panel.",
    liveToolLabel: "Live tool coming soon",
    narrative: [
      "Suffolk's founders are the most-told and least-shown audience in the AI economy. They've been to the webinars. They've watched the conference panels. They've downloaded the playbooks. What they haven't had is a peer cohort, in a Suffolk room, where they learn AI inside their own business - with the kind of coaching Menta has delivered for everything else for 30 years.",
      "That's the promise of this worked example. Suffolk - through Menta - puts the practical AI tools, the founder-shaped coaching, and the peer network directly into the founders' hands. Not a webinar. Not a SaaS pitch. A cohort, in a Suffolk room, owned by the people who are already running businesses here.",
      "And every method that works for founders ports to the next thing we choose: agricultural-AI, coastal-community fluency, market-town high streets, the energy supply chain. The founder cohort is the proof. County-wide fluency is the prize.",
    ],
    roles: [
      {
        name: "Suffolk founders",
        role: "Bring the real business problem. Apply AI tooling under coaching. Build something useful before the cohort ends.",
      },
      {
        name: "Sherpas AI teenagers",
        role: "Build the supporting tooling and dashboards. Paired with founders for mutual learning.",
      },
      {
        name: "Menta coaches",
        role: "Bring the founder-coaching tradition. Keep the cohort honest about commercial realities.",
      },
      {
        name: "Adastral / university mentors",
        role: "Technical depth where the founder needs it. Deep AI capability on tap.",
      },
      {
        name: "AI Optimist (Hugo)",
        role:
          "Sets the curriculum, keeps the cohort moving, and connects the output into wider conversations.",
      },
    ],
    steps: [
      {
        n: "01",
        title: "Frame the founder problem",
        body: "Each founder picks one problem in their own business that AI could plausibly help with. Specific. Tractable. Worth shipping.",
      },
      {
        n: "02",
        title: "Hands-on tooling week",
        body: "Working sessions with the actual tools founders will use - in a Suffolk room, with peer support.",
      },
      {
        n: "03",
        title: "Build inside the business",
        body: "Each founder builds in their own context, between sessions. Coaching on call.",
      },
      {
        n: "04",
        title: "Showcase to the cohort",
        body: "Founders present what they built. Honest critique. Real numbers.",
      },
      {
        n: "05",
        title: "Refine, ship, measure",
        body: "Each founder leaves with a working AI workflow inside their business, with measurable impact.",
      },
      {
        n: "06",
        title: "Cohort 2 - become the coach",
        body: "Cohort-1 founders coach cohort-2 founders. Suffolk's AI capability compounds.",
      },
    ],
    whyFirst: {
      headline:
        "Because Suffolk has been told about AI for years. Now its founders get to do the building.",
      body: "The whole point of an AI-fluent county is that founders, growers, and operators stop being the audience for AI talks and start being authors of AI workflows. The Menta founder cohort is where we prove it - because Suffolk has the strongest founder-support tradition outside London, the talent is here, and the showcase moment lands across every market town.",
    },
  },

  residentOffer: {
    speakerSeries: [
      {
        name: "Laura",
        topic: "AI for direct-to-consumer businesses",
        blurb:
          "A practitioner's session on the AI moves that shift the needle for a small D2C brand - tuned to Suffolk founders.",
      },
      {
        name: "Chris",
        topic: "Creating and protecting IP in the AI age",
        blurb:
          "What's changed, what hasn't, and the steps a founder or creator should take before their idea gets scraped.",
      },
      {
        name: "Rolling roster",
        topic: "Guest speakers from Hugo's network and Menta's alumni",
        blurb:
          "One headline speaker a month - exclusively for Suffolk founders and residents, in a Suffolk room.",
      },
    ],
    festivalName: "Suffolk AI Summer",
    physicalVenueExamples: [
      "Menta's Bury and Ipswich offices",
      "Adastral Park",
      "the Apex (Bury St Edmunds)",
      "coastal community spaces in Lowestoft and Aldeburgh",
    ],
  },

  councilAssets: [
    {
      title: "Menta channels &amp; alumni network",
      body: "30 years of founder-support reach: alumni, current cohorts, partner network, social channels, mailing list. The single largest founder-reach asset in Suffolk.",
    },
    {
      title: "SCC social channels",
      body: "Coordinated content across Suffolk County Council's Facebook, Instagram, X and LinkedIn.",
    },
    {
      title: "Resident communications",
      body: "Inclusion in SCC's regular resident bulletins, e-newsletters and any opt-in lists.",
    },
    {
      title: "Direct mail across the county",
      body: "Reach the rural and coastal communities no digital channel touches.",
    },
    {
      title: "Council noticeboards &amp; civic spaces",
      body: "Endeavour House, town halls across the county, libraries, community spaces.",
    },
    {
      title: "Community relationships",
      body: "Warm relationships with the BIDs, town councils, faith groups, NFU, Adastral, the universities, and resident associations.",
    },
    {
      title: "Press &amp; local media",
      body: "East Anglian Daily Times, BBC Radio Suffolk, ITV Anglia, Suffolk News. A council-and-Menta-endorsed launch makes the story write itself.",
    },
    {
      title: "Civic events &amp; county moments",
      body: "Suffolk Show, the New Anglia LEP business conference, Menta's annual showcase. Each becomes a touchpoint.",
    },
    {
      title: "Venues &amp; physical hosting",
      body: "Steers on which Menta and SCC venues across the county can host kick-offs, graduations, clinics and the summer festival.",
    },
  ],

  councilPartners: [
    "Menta cohort coaches and alumni",
    "Suffolk County Council",
    "Suffolk's district and borough councils",
    "BT Adastral Park",
    "the New Anglia LEP",
    "the University of Suffolk &amp; Suffolk New College",
    "the NFU",
    "Age UK Suffolk",
    "coastal community trusts",
  ],

  personaPages: {
    teenSchoolExamples: [
      "One Sixth Form College",
      "Northgate High",
      "Stowmarket High",
      "East Bergholt High",
    ],
    organisationExamples: [
      {
        org: "FIND (Ipswich foodbank)",
        problem:
          "Match donations to family need across Ipswich and the surrounding villages.",
      },
      {
        org: "A Suffolk community trust",
        problem:
          "Help residents find the right grant or service quickly, even if they've never heard of us.",
      },
      {
        org: "A coastal secondary school",
        problem:
          "Triage parent and pupil enquiries so the office isn't the bottleneck.",
      },
      {
        org: "A High Suffolk grower co-op",
        problem:
          "Match seasonal labour to growers without phoning round.",
      },
    ],
  },

  seedProblems: [
    {
      organisation: "Suffolk founder cohort (TBC)",
      contactName: "Menta cohort coordinator",
      contactEmail: "tbc@example.com",
      shortTitle:
        "Help Suffolk founders adopt AI inside their real business",
      description:
        "Founders are told AI matters but not shown how to deploy it inside their own work. A Menta-shaped peer cohort with practical coaching could close the gap county-wide.",
      whoFeelsIt:
        "Founders running 1-50-person businesses across Suffolk. Their teams. Their families.",
      alreadyTried:
        "Webinars, conference panels, scattered tooling experiments.",
      successIn90Days:
        "Twelve Suffolk founders each ship one AI workflow inside their business with measurable impact, and the cohort produces a public showcase.",
      tags: ["founders", "menta", "demo-seed"],
    },
    {
      organisation: "A coastal community trust (TBC)",
      contactName: "Trust coordinator",
      contactEmail: "tbc@example.com",
      shortTitle:
        "Help older coastal residents feel reached, not left behind",
      description:
        "Coastal Suffolk is older, more isolated, and easy to under-serve. A travelling AI clinic - in person, deliberately slow - could change that.",
      whoFeelsIt:
        "Older coastal residents. The two coordinators triaging every request.",
      alreadyTried: "Leaflets, drop-ins, phone helplines.",
      successIn90Days:
        "Two coastal venues running weekly AI clinics with a network of trained volunteer coaches.",
      tags: ["coastal", "older-residents", "demo-seed"],
    },
  ],

  contact: {
    email: "hugo+suffolk-ai@pdubs.co",
  },
};
