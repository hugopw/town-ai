import type { Place } from "./_types";

// South Kesteven - 80% draft for visual QA.
//
// Hugo's content-research prompt will produce the production-grade
// version. This file exists to validate the schema, prove the
// codebase is multi-tenant, and give the council walk-through
// something to look at. Specific named entities (schools,
// charities, businesses) are flagged "to confirm" where Hugo
// hasn't yet given permission to publish real names.

export const southkesteven: Place = {
  slug: "southkesteven",
  name: "South Kesteven",
  formalName: "South Kesteven, Lincolnshire",
  wordmark: "SouthKesteven.AI",
  wordmarkAccent: ".",
  domainHint: "southkesteven.ai",

  council: {
    name: "South Kesteven District Council",
    shortName: "the council",
    type: "district",
    website: "https://www.southkesteven.gov.uk/",
    pressOutlets: [
      "Grantham Journal",
      "Stamford Mercury",
      "Lincolnshire Live",
      "BBC Radio Lincolnshire",
    ],
    civicEvents: [
      "Grantham Carnival",
      "Stamford Mid-Lent Fair",
      "Bourne Christmas lights switch-on",
      "Chair of Council civic engagements",
    ],
  },

  thesis: {
    eyebrow: "The honest bit",
    headline:
      "South Kesteven's young people leave. Pretending they're coming back isn't a plan.",
    paragraphs: [
      "Every year, our brightest 18-year-olds get on a train at Grantham and don't get off again. They go to cities for university, careers, salaries, and lives this district hasn't shown them how to build here. The schools are good. The houses are affordable. The countryside is beautiful. None of that is what they're leaving for.",
      "The same generation that's leaving is the one being asked to compete with AI-augmented graduates from anywhere on earth. Our market towns - Grantham, Stamford, Bourne, the Deepings - need them. Our agricultural and food businesses, our high streets, our growing care economy, our energy sector all need them. Without them, the district ages without a successor.",
      "We don't think the answer is to plead. We think the answer is fluency - enough AI capability across South Kesteven that a young person here can build a future as ambitious as anywhere, without leaving. And enough AI capability across the businesses they'd work for that those businesses are still here when they're ready.",
    ],
    angle: "youth-retention",
    secondQuestion: {
      eyebrow: "Question two",
      body: "When the district's own people build the tools the district needs - the rural-bus matcher, the high-street directory, the agricultural-skills navigator, the council-paper translator, the loneliness concierge for our dispersed villages.",
    },
  },

  hero: {
    pills: [
      "South Kesteven, Lincolnshire",
      "A vision for the district council",
      "Summer 2026",
    ],
    headline: {
      lead: "What happens when ",
      emphasis: "every market town",
      tail: " in your district is fluent in AI?",
    },
    lede:
      "South Kesteven is unusually well placed to find out. Four market towns each with their own character, an agricultural backbone of national importance, a serious defence-and-engineering footprint, and a council that knows its district. We think we can make South Kesteven the UK's first AI-fluent district - the one that gives its young people a reason to stay, and its businesses a reason to bet.",
    bigQuestion: {
      eyebrow: "Question one",
      body: "Not just the early adopters in Grantham or Stamford. Everyone - the dairy farmer outside Bourne, the teenager at the Deepings, the trader on Stamford High Street, the volunteer driver in a Lincolnshire village, the clerk at the council offices.",
    },
  },

  stats: {
    hero: [
      {
        value: "143,400",
        label: "South Kesteven residents (2021 Census)",
        source: "ONS Census 2021",
      },
      {
        value: "26%",
        label: "Aged 65+ - one of the highest shares in the East Midlands",
        source: "ONS Census 2021",
      },
      {
        value: "~24%",
        label:
          "Of working residents employed in agriculture, manufacturing or trades - vs ~17% nationally",
        source: "ONS Census 2021 (TBC by detailed analysis)",
      },
      {
        value: "4 towns",
        label:
          "Grantham, Stamford, Bourne, the Deepings - plus 80+ villages",
        source: "South Kesteven District Council",
      },
    ],
    community: [
      {
        value: "143,400",
        label: "Residents across the district (2021)",
        source: "ONS Census 2021",
      },
      {
        value: "57.5%",
        label: "Working-age (16-64) - the spine of the district economy",
        source: "ONS Census 2021",
      },
      {
        value: "16.5%",
        label: "Under 16 - young families across the four market towns",
        source: "ONS Census 2021",
      },
      {
        value: "26%",
        label:
          "Aged 65+ - higher than national average; rural-isolation matters",
        source: "ONS Census 2021",
      },
      {
        value: "~10%",
        label:
          "Of jobs in agriculture, forestry &amp; fishing - 4x the national average",
        source: "ONS Business Register (TBC)",
      },
      {
        value: "~30%",
        label: "Working-age residents with a degree (TBC)",
        source: "ONS Towns &amp; Cities 2021 (estimate, to confirm)",
      },
      {
        value: "30 min",
        label:
          "Grantham to Peterborough; 1h to King's Cross via East Coast Main Line",
        source: "National Rail",
      },
      {
        value: "Mid-deciles",
        label:
          "Mixed deprivation - rural villages and Grantham wards both flagged",
        source: "English Indices of Deprivation 2019",
      },
    ],
    communityCaption:
      "Figures drawn from ONS Census 2021, ONS mid-year estimates, and District Council published data. The South Kesteven picture is genuinely mixed - market-town prosperity sits alongside rural isolation and pockets of urban deprivation. Once the council shares local insight, every figure will be sharpened. (80% draft - to be upgraded by the content prompt.)",
  },

  anchors: [
    {
      name: "Grantham Town Centre",
      role: "the largest of the four market towns",
      use: "The natural setting for a high-street AI showcase.",
    },
    {
      name: "Stamford",
      role: "Georgian heritage town and a magnet for visitors and creatives",
      use: "A natural host for the residents-only speaker series.",
    },
    {
      name: "Bourne &amp; the Deepings",
      role: "the district's smaller market towns and rural service hubs",
      use: "Where rural-AI clinics matter most.",
    },
    {
      name: "Burghley House &amp; Belton House",
      role: "two of the country's most significant heritage estates",
      use: "Civic pride; potential venue partners for festival moments.",
    },
    {
      name: "RAF Wittering",
      role: "a major regional employer with serious technical capability",
      use: "Potential partner for skills, mentoring, and family programmes.",
    },
    {
      name: "Bakkavor &amp; the food sector",
      role: "Lincolnshire's outsized food-manufacturing footprint",
      use: "AI for workforce, logistics and scheduling - real local relevance.",
    },
    {
      name: "Lincolnshire Co-op &amp; the BID partnerships",
      role: "the trusted retail and town-centre infrastructure",
      use: "Working partner for high-street-AI projects.",
    },
    {
      name: "Grantham Journal &amp; Stamford Mercury",
      role: "where the district actually finds out what's happening",
      use: "",
    },
  ],

  segmentArchetypes: {
    typicalCommuter: "the project manager on the 07:11 to King's Cross",
    typicalElder: "the volunteer driver in a Lincolnshire village",
    typicalTeen: "the sixth-former at the Deepings",
    typicalIndependent: "the trader on Stamford High Street",
    typicalCouncilOfficer: "the officer at South Kesteven House",
  },

  challenges: [
    {
      id: "rural-transport",
      title: "Buses that work for everyone, even in the villages",
      pitch:
        "A resident-built directory of rural transport options - community cars, bookable buses, lift-share - matched to a friendly AI helper that finds you the next route from your village to where you need to be.",
      why: "The single biggest civic friction in a dispersed rural district. Every villager has a story.",
      owner: "District council + Lincolnshire County Council + community drivers",
      first: "A pilot covering five villages around Bourne, summer 2026.",
    },
    {
      id: "highstreet",
      title: "High streets that thrive across all four towns",
      pitch:
        "Every independent in Grantham, Stamford, Bourne and the Deepings gets one hour with an AI coach and a shortlist of moves that buy a day a week back - tuned to their kind of business.",
      why: "Protects the most visible part of district identity. Compounds quickly.",
      owner: "Town BIDs + AI Optimist + local independents",
      first: "20-business pilot with the Small-Business AI Opportunity Diagnostic.",
    },
    {
      id: "youth-retention",
      title: "Young people who can build a future here",
      pitch:
        "Sherpas AI - South Kesteven edition. Summer cohorts where 15-18-year-olds build AI tools for real local organisations, paid, coached, visible. So our young people see a future without leaving for cities.",
      why: "Youth retention is the long-game strategic question for any rural district.",
      owner: "Sherpas AI + secondary schools across the district",
      first: "Summer 2026 cohort, 12 teens, 3 shipped tools.",
    },
    {
      id: "older-residents",
      title: "Older residents in villages who feel reached",
      pitch:
        "Travelling AI clinics that visit a village hall a week, on rotation. Warm, patient, deliberately slow. Tea included. Run with the volunteer-driver network.",
      why: "Rural isolation hits older residents hardest. Bringing the clinic to them is the only thing that scales.",
      owner: "Volunteer coaches + local partners",
      first: "A six-village rota, autumn 2026.",
    },
    {
      id: "agricultural-workforce",
      title: "AI for the farms and food businesses that feed us",
      pitch:
        "A peer-led group of farms, growers and food manufacturers learning what AI is genuinely useful for in their world - workforce planning, traceability, paperwork, machinery uptime.",
      why: "Lincolnshire's food sector is national infrastructure. Helping it adopt AI well is community work.",
      owner: "AI Optimist + NFU contacts + local food businesses",
      first: "A six-business cohort, autumn 2026.",
    },
    {
      id: "engagement",
      title: "Council engagement across a dispersed district",
      pitch:
        "Translate every council decision into a plain-English digest searchable by ward and by topic. Close the gap between the council and the parts of the district that never engage.",
      why: "The single highest-leverage civic-AI project we could run. Compounds every week.",
      owner: "South Kesteven District Council + civic volunteers",
      first: "A weekly digest pilot for the next three council meetings.",
    },
    {
      id: "town-centres",
      title: "Town-centre revitalisation, town by town",
      pitch:
        "Each of the four towns gets its own working group asking what their town centre needs - using AI to shape evidence, not to write the answer.",
      why: "Not one town-centre problem; four. AI gives each its own voice.",
      owner: "Town councils + traders + residents",
      first: "Pilot in Grantham, replicate to Stamford, Bourne and the Deepings.",
    },
    {
      id: "loneliness",
      title: "No one in the district feels alone",
      pitch:
        "A warm, opt-in concierge that knows every group, club and drop-in across all four towns and surrounding villages, matching residents to things happening near them this week.",
      why: "Higher-than-average 65+ share + rural geography = real loneliness risk.",
      owner: "Age UK Lindsey + community groups + church networks",
      first: "Pilot at Grantham Library and a village hall, summer 2026.",
    },
  ],

  priorityItems: [
    {
      id: "rural-transport",
      title: "Buses that work for everyone, even in the villages",
      description:
        "Match villagers to community cars, bookable buses and lift-share with a friendly AI helper.",
      rough: "Pilot in Bourne villages",
    },
    {
      id: "highstreet",
      title: "High streets that thrive across all four towns",
      description:
        "AI coaching for every independent in Grantham, Stamford, Bourne and the Deepings.",
      rough: "Cross-town diagnostic",
    },
    {
      id: "youth-retention",
      title: "Young people who can build a future here",
      description:
        "Sherpas AI - South Kesteven edition. Paid teen cohorts shipping real AI tools.",
      rough: "Summer cohort",
    },
    {
      id: "older-residents",
      title: "Older residents in villages who feel reached",
      description:
        "Travelling AI clinics that visit a different village hall every week.",
      rough: "Six-village rota",
    },
    {
      id: "agricultural-workforce",
      title: "AI for the farms and food businesses",
      description:
        "Peer-led group helping our food sector adopt AI in workforce planning and paperwork.",
      rough: "Cohort of 6",
    },
    {
      id: "engagement",
      title: "Council engagement across a dispersed district",
      description:
        "Plain-English ward-searchable digests of every council decision.",
      rough: "Flagship civic-AI project",
    },
    {
      id: "town-centres",
      title: "Town-centre revitalisation, town by town",
      description:
        "Each of the four towns shapes its own AI evidence base for what the centre needs.",
      rough: "Four parallel groups",
    },
    {
      id: "loneliness",
      title: "No one in the district feels alone",
      description:
        "Warm AI concierge matching residents to local clubs and drop-ins, including in villages.",
      rough: "Volunteer-led",
    },
  ],

  workedExample: {
    slug: "worked-example",
    title: "South Kesteven rural transport",
    shortLabel: "rural transport",
    shortDescription:
      "Worked-example prototype showing how a dispersed district can use AI to match residents to actual transport that works.",
    heroHeadline:
      "Rural transport is the first thing AI hands back to the villages that have been told to wait their turn.",
    liveToolLabel: "Live tool coming soon",
    narrative: [
      "Ask anyone in a Lincolnshire village how they feel about rural transport and you'll get the same answer: nobody is listening. The bus that runs past at 4pm is no good to a parent picking children up at 3:15. The hospital appointment in Grantham is impossible from a village without a car. The bookable ride is in a system the resident has never been told exists. The data sits in transport-authority spreadsheets. The decisions sit in meetings villagers can't get to.",
      "That's the promise of this worked example. South Kesteven puts the modelling tools, the village-by-village knowledge, and the storytelling skills directly into residents' and volunteer-driver hands. Coached, not contracted. Owned by the people who actually wait at the stop. The transport project is the first proof that an AI-fluent district can take on its own problems - together - and have its work taken seriously by Lincolnshire County Council.",
      "And every method that works for transport ports to the next problem we choose: town-centre revival, the agricultural-skills gap, loneliness in villages, the council-paper digest. Transport is the prototype. Empowerment is the product.",
    ],
    roles: [
      {
        name: "Residents",
        role: "Collect on-the-ground observations - village stops that don't connect, services that miss the school day, evening routes that vanish. Annotate the map. No technical skill required.",
      },
      {
        name: "Sherpas AI teenagers",
        role: "Build the data-collection app and the matcher. Ingest open transport data. This is exactly the work they'd do on a summer cohort.",
      },
      {
        name: "AI Night School alumni",
        role: "Apply AI to the analysis and write it up in plain English. Produce the resident-facing summary. Own the narrative.",
      },
      {
        name: "Council officers",
        role: "Validate the assumptions, share what data can be shared, and raise the work into formal transport conversations.",
      },
      {
        name: "AI Optimist (Hugo)",
        role:
          "Coaches the team, keeps the scope honest, and connects the output into wider conversations with Lincolnshire County Council.",
      },
    ],
    steps: [
      {
        n: "01",
        title: "Frame the problem with Problemarium",
        body: 'Turn "rural transport is bad" into specific answerable questions - school runs, medical appointments, evening jobs, social travel. Each becomes a tractable mini-project.',
      },
      {
        n: "02",
        title: "Gather the data",
        body: "Combine open DfT data with resident-collected observations. Flag where assumptions stand in for missing data.",
      },
      {
        n: "03",
        title: "Model the matches",
        body: "A simple, transparent matcher - the kind a Sherpas AI cohort can build and explain in a week. Not a black box.",
      },
      {
        n: "04",
        title: "Write it up in plain English",
        body: "Translate the output into something a South Kesteven resident can read in five minutes and form an opinion on.",
      },
      {
        n: "05",
        title: "Publish, invite challenge",
        body: "Share it with residents and council officers. Invite people to poke holes. Update transparently.",
      },
      {
        n: "06",
        title: "Feed into real decisions",
        body: "With the council's help, the output gets referenced in formal transport conversations - so resident work doesn't stay informal.",
      },
    ],
    whyFirst: {
      headline:
        "Because the district has been told about its own transport for decades. Now its residents get to do the telling.",
      body: "The whole point of an AI-fluent district is that residents stop being the audience for civic decisions and start being authors of them. Transport is where we prove it because every villager has a story, the data is mostly public, and the visible signal - when the work lands - is felt at every village stop.",
    },
  },

  residentOffer: {
    speakerSeries: [
      {
        name: "Laura",
        topic: "AI for direct-to-consumer businesses",
        blurb:
          "A practitioner's session on the AI moves that shift the needle for a small D2C brand - tuned to market-town independents.",
      },
      {
        name: "Chris",
        topic: "Creating and protecting IP in the AI age",
        blurb:
          "What's changed, what hasn't, and the steps a founder or creator should take before their idea gets scraped.",
      },
      {
        name: "Rolling roster",
        topic:
          "Guest speakers from Hugo's network, with rural &amp; food-sector practitioners on the rotation",
        blurb:
          "Hugo brings one headline speaker a month - exclusively for South Kesteven residents, in a South Kesteven room.",
      },
    ],
    festivalName: "South Kesteven AI Summer",
    physicalVenueExamples: [
      "Grantham's town hall",
      "Stamford Arts Centre",
      "the Deepings community centres",
      "village halls across the district",
    ],
  },

  councilAssets: [
    {
      title: "Council social channels",
      body: "Coordinated content across the council's Facebook, Instagram, X and LinkedIn. We supply assets in council voice; you decide cadence and timing.",
    },
    {
      title: "Resident communications",
      body: "Inclusion in the council's regular resident bulletins, e-newsletters and any opt-in lists you maintain. Each programme phase gets its own dedicated send.",
    },
    {
      title: "Direct mail across the district",
      body: "Reach the rural villages and households no digital channel touches. Even one district-wide drop introducing the resident offer transforms the programme's starting line.",
    },
    {
      title: "Council noticeboards &amp; civic spaces",
      body: "Council offices, town halls, libraries, leisure centres. The places residents already trust for what's happening locally.",
    },
    {
      title: "Community relationships",
      body: "The council's warm relationships with the BIDs, town councils, faith groups, NFU contacts, RAF Wittering, and resident associations.",
    },
    {
      title: "Press &amp; local media",
      body: "Grantham Journal, Stamford Mercury, BBC Radio Lincolnshire, Lincolnshire Live. A council-endorsed launch makes the press story write itself.",
    },
    {
      title: "Council meetings &amp; agendas",
      body: "A regular SouthKesteven.AI standing item gives residents a visible signal that this is real, sustained civic work - not a one-off announcement.",
    },
    {
      title: "Civic events &amp; town moments",
      body: "Grantham Carnival, Stamford Mid-Lent Fair, Bourne Christmas lights switch-on, Chair of Council civic engagements. Each becomes a touchpoint.",
    },
    {
      title: "Venues &amp; physical hosting",
      body: "Steers on which council-friendly venues across the four towns can host kick-offs, graduations, clinics and the summer festival.",
    },
  ],

  councilPartners: [
    "the four town councils (Grantham, Stamford, Bourne, the Deepings)",
    "Lincolnshire County Council",
    "the BIDs",
    "RAF Wittering",
    "the Lincolnshire Co-op",
    "the NFU",
    "Age UK Lindsey",
    "faith groups across the district",
    "secondary schools in all four towns",
  ],

  personaPages: {
    teenSchoolExamples: [
      "King's School Grantham",
      "Stamford Endowed",
      "Deepings School",
      "Kesteven and Sleaford High",
    ],
    organisationExamples: [
      {
        org: "A district foodbank",
        problem:
          "Match donations to family need across four towns and 80 villages.",
      },
      {
        org: "Grantham community trust",
        problem:
          "Help residents find the right grant or service quickly, even if they've never heard of us.",
      },
      {
        org: "A Stamford secondary school",
        problem:
          "Triage parent and pupil enquiries so the office isn't the bottleneck.",
      },
      {
        org: "A village volunteer-driver scheme",
        problem:
          "Match drivers to passengers without making either of them phone round.",
      },
    ],
  },

  seedProblems: [
    {
      organisation: "South Kesteven foodbank network (TBC)",
      contactName: "Foodbank coordinator",
      contactEmail: "tbc@example.com",
      shortTitle:
        "Match donations to family need across four towns and 80 villages",
      description:
        "Donations come in unpredictably across the district. Matching the right food to the right family at the right time is a manual scramble. Could AI forecast demand, suggest fair allocations, and reduce waste across our distributed network?",
      whoFeelsIt:
        "Volunteers at four front desks, the families who travel for nothing, and trustees watching food spoil.",
      alreadyTried:
        "Spreadsheets, WhatsApp, a volunteer rota across multiple towns. None of them solve the matching problem.",
      successIn90Days:
        "A simple AI-assisted weekly plan that reduces wasted donations by 50% and lets families know two days in advance what's coming.",
      tags: ["food", "matching", "rural", "demo-seed"],
    },
    {
      organisation: "Lincolnshire village transport scheme (TBC)",
      contactName: "Scheme coordinator",
      contactEmail: "tbc@example.com",
      shortTitle:
        "Help villagers find a way to get to the medical appointment, even from the smallest village",
      description:
        "Hundreds of medical appointments a year are missed because the journey from a village to the hospital is genuinely impossible without a car. Could a friendly AI helper, working with our volunteer drivers, find a route - even if it's three hops - for any villager, in plain English?",
      whoFeelsIt:
        "Older villagers without cars. Volunteer drivers stretched thin. The two coordinators who triage every request.",
      alreadyTried: "Phone tree, paper diary, a Facebook group.",
      successIn90Days:
        "A working assistant villagers can talk to in plain English that suggests a workable route in under two minutes, drawing on volunteer-driver and bus data.",
      tags: ["rural-transport", "older-residents", "matching", "demo-seed"],
    },
  ],

  contact: {
    email: "hugo+southkesteven-ai@pdubs.co",
  },
};
