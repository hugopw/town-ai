import type { Place } from "./_types";

// York config. City of York Council is a unitary authority. The
// thesis angle is entrepreneurial-cluster: York holds an
// innovation crown (UNESCO City of Media Arts, rail engineering
// hub, two universities, a Russell Group research base) but the
// majority of its working population sits in tourism, hospitality
// and retail - the front-line jobs AI is reshaping fastest. The
// pitch is that an AI-fluent York shares the crown with the
// workforce that hasn't yet inherited it.

export const york: Place = {
  slug: "york",
  name: "York",
  formalName: "York, North Yorkshire",
  wordmark: "York.AI",
  wordmarkAccent: ".",
  domainHint: "york.ai",
  placeNoun: "city",

  council: {
    name: "City of York Council",
    shortName: "the council",
    type: "unitary",
    website: "https://www.york.gov.uk/",
    pressOutlets: [
      "The Press (York)",
      "YorkMix",
      "BBC Radio York",
      "Minster FM",
      "Yorkshire Post",
    ],
    civicEvents: [
      "JORVIK Viking Festival",
      "York Ice Trail",
      "York Food and Drink Festival",
      "St Nicholas Fair & Christmas Markets",
      "York Pride",
      "Lord Mayor's engagements",
    ],
  },

  thesis: {
    eyebrow: "The honest bit",
    headline:
      "AI exposure in York is unusually concentrated. Pretending otherwise isn't a kindness.",
    paragraphs: [
      "Around one in five York workers is in admin, secretarial, sales or customer-service occupations - the categories IPPR's task-level analysis identified as most exposed to generative AI in the first wave. Tourism supports another 16,788 full-time jobs and £2bn a year, and Centre for Cities ranks York second of all UK cities for the share of total spending that comes from visitors. The booking, pricing, concierge and front-of-house work AI is moving into is not peripheral here - it is the city's economic spine.",
      "Aviva's 2,000+ Wellington Row staff sit inside a programme that has deployed over 80 AI models in claims and saved more than £60m in 2024 alone. The NHS Trust employs 8,500+; the council and the two universities employ thousands more in the administrative work the Tony Blair Institute estimates could see a quarter of its tasks automated. And York has the highest house-price-to-earnings ratio in Yorkshire and the Humber at 8.5x - so when a job changes shape here, the family can't simply follow it elsewhere.",
      "York has lived through concentrated industrial shocks before - Rowntree's, Terry's, the Carriageworks - and absorbed every one only because it adapted, not because it waited. York has a choice to make now: become a coal-mining town of the 21st century - a place whose economic identity was built around work the world stopped needing - or become one of the first places that figures out how to apply AI for the good of everyone in it. We don't think the answer is fear. We think the answer is fluency - enough AI literacy across residents, businesses, charities and council that York shapes AI's restructuring instead of receiving it.",
    ],
    angle: "entrepreneurial-cluster",
    secondQuestion: {
      eyebrow: "Question two",
      body: "When York's own people build the tools the city needs - the Shambles crowd-flow model, the Fossgate hospitality AI coach, the Aviva-back-office reskilling pathway, the Foss-and-Ouse flood concierge, the council-paper digest, the rail-apprentice careers map.",
    },
  },

  hero: {
    pills: [
      "York, North Yorkshire",
      "A vision for City of York Council",
      "Summer 2026",
    ],
    headline: {
      lead: "What happens when ",
      emphasis: "everyone",
      tail: " in your city is fluent in AI?",
    },
    lede:
      "York is unusually well placed to find out. A UNESCO City of Media Arts with two universities, a global rail-engineering cluster, 9.4 million annual visitors, and the most-photographed street in England. We think we can make it the UK's first truly AI-fluent city - together, and in one summer.",
    bigQuestion: {
      eyebrow: "Question one",
      body: "Not a few early adopters at the games studio. Everyone - the retiree at Acomb Explore library, the sixth-former at Archbishop Holgate's, the rail engineer at York Station, the restaurant manager on Fossgate, the planning officer at West Offices.",
    },
  },

  stats: {
    hero: [
      {
        value: "9.4M",
        label:
          "Visitors a year - up 5% on 2023 - making York one of the UK's most-visited cities outside London",
        source: "Make It York 2024",
      },
      {
        value: "£2.01bn",
        label:
          "Tourism's annual contribution to York's economy - up 5.4% year on year",
        source: "Make It York 2024",
      },
      {
        value: "10.46M",
        label:
          "Journeys a year through York Station - LNER to King's Cross in under two hours",
        source: "ORR Estimates of Station Usage 2024/25",
      },
      {
        value: "16,788",
        label:
          "Full-time jobs supported by York's visitor economy - the part of the city most exposed to AI in hospitality and retail",
        source: "Make It York 2024",
      },
    ],
    community: [
      {
        value: "202,821",
        label:
          "Residents, Census 2021. ONS mid-2024 estimate: ~209,000.",
        source: "ONS Census 2021 · ONS mid-year estimates 2024",
      },
      {
        value: "65.8%",
        label: "Working-age (16-64) - the core of York's two-speed economy",
        source: "ONS Census 2021",
      },
      {
        value: "22,345",
        label:
          "Students at the University of York - a Russell Group research base on the city's southern edge",
        source: "University of York 2024/25",
      },
      {
        value: "~9,275",
        label:
          "York-campus students at York St John University - a teaching-led university in the city centre (excludes the London campus)",
        source: "HESA student data · York St John University 2024/25",
      },
      {
        value: "7,515",
        label:
          "Active businesses in York - up 25.2% since 2011",
        source: "ONS UK Business Counts · One City Plan 2023-27",
      },
      {
        value: "250+",
        label:
          "Creative media companies based in York, employing around 3,000 people - the cluster behind the UNESCO designation (figure dates from the original 2014 designation)",
        source: "City of York Council · UNESCO City of Media Arts",
      },
      {
        value: "5,500+",
        label:
          "Workers in York's rail sector - one of the largest rail engineering clusters in the north of England",
        source: "Make It York · Key Sectors",
      },
      {
        value: "8.5x",
        label:
          "House-price-to-earnings ratio - the highest in Yorkshire and the Humber, against an England & Wales median of 7.5x",
        source: "ONS Housing Affordability in England and Wales 2024",
      },
    ],
    communityCaption:
      "Figures are drawn from ONS Census 2021, ONS mid-year estimates, the Office of Rail and Road, Make It York, the One City Plan 2023-27, ONS Housing Affordability 2024 and HESA. York and Scarborough Teaching Hospitals NHS Foundation Trust employs over 8,500 people across the sub-region. Once the council shares local insight, every number will be sharpened.",
  },

  anchors: [
    {
      name: "University of York",
      role: "Russell Group research university with 22,345 students",
      use: "A natural partner for the technical mentorship, research credibility, and student volunteer base behind an AI-fluent city.",
    },
    {
      name: "York St John University",
      role:
        "teaching-led university in the city centre, strong in education, social work and sport science",
      use: "A natural home for community-facing programme design and teacher-training collaboration.",
    },
    {
      name: "Joseph Rowntree Foundation",
      role: "the UK's leading anti-poverty research charity, founded in York",
      use: "Evidence partner and convening power - York's social-impact tradition put on civic-AI footing.",
    },
    {
      name: "York Minster & the Guildhall",
      role:
        "the city's defining civic and spiritual landmarks",
      use: "The right rooms for the moments residents will remember - graduations, summer festival, headline speakers.",
    },
    {
      name: "National Railway Museum",
      role: "world's largest railway collection, partnered with the University of York",
      use: "A natural host for cohort kick-offs and a magnet for teen apprentices in rail and engineering.",
    },
    {
      name: "York and Scarborough Teaching Hospitals NHS Foundation Trust",
      role:
        "one of the largest employers in the sub-region, with over 8,500 staff",
      use: "Where AI fluency moves quickest from idea to patient impact.",
    },
    {
      name: "Make It York & the BID",
      role:
        "the destination management organisation that runs Shambles Market, the St Nicholas Fair, and the city's visitor-economy convening",
      use: "Direct line to the 16,788 hospitality FTEs the programme exists to reach.",
    },
    {
      name: "Explore York Libraries & Archives",
      role:
        "fifteen libraries and five reading cafes across the city, including Acomb and Tang Hall",
      use: "The community access points the programme uses to reach beyond the city centre.",
    },
  ],

  segmentArchetypes: {
    typicalCommuter: "the rail engineer arriving at York Station from Selby",
    typicalElder: "the retiree at Acomb Explore library on Front Street",
    typicalTeen: "the sixth-former at Archbishop Holgate's eyeing a placement at the National Railway Museum",
    typicalIndependent: "the indie bookseller on Gillygate",
    typicalCouncilOfficer: "the planning officer at West Offices",
  },

  challenges: [
    {
      id: "shambles",
      title: "When is the Shambles about to overflow?",
      pitch:
        "Model real-time visitor flow on the Shambles, Stonegate and Petergate using existing footfall sensors, station data and event calendars. Show residents and visitors when crowds are about to spike, and route people gently to Fossgate, Micklegate and the Museum Gardens.",
      why: "York's medieval streets cannot safely absorb peak surges from 9.4 million annual visitors. A resident-built tool turns a chronic safety and frustration into something the city manages with eyes open.",
      owner: "Make It York + City of York Council Transport & Highways",
      first: "See the /worked-example worked prototype.",
      href: "/worked-example",
    },
    {
      id: "hospitality",
      title: "A hospitality sector that thrives in the AI age",
      pitch:
        "Every independent restaurant, cafe and shop on Fossgate, Stonegate, Petergate and the Shambles gets one hour with an AI coach and a shortlist of AI moves that buy them back a day a week - bookings, pricing, reviews, social - no SaaS bloat, no hype.",
      why: "16,788 of York's jobs sit in tourism and hospitality. This is the workforce most exposed to AI and the one with the least access to credible coaching.",
      owner: "Make It York + AI Optimist",
      first: "30-business pilot with the Small-Business AI Opportunity Diagnostic.",
    },
    {
      id: "flooding",
      title: "When will the Foss rise next?",
      pitch:
        "A warm, opt-in flood concierge that takes Environment Agency gauge data on the Ouse and Foss, ties it to your postcode, and tells you in plain English what the next 48 hours mean for your street, your business, your school run.",
      why: "York floods every winter. Information is public but fragmented. A York-built tool turns scattered data into something residents and businesses can act on.",
      owner: "City of York Council + Environment Agency + community volunteers",
      first: "Pilot for the Bishopthorpe Road, Tower Street and Foss Islands streets first, autumn 2026.",
    },
    {
      id: "engagement",
      title: "Council engagement across the city",
      pitch:
        "Translate every council paper, minute and decision into a plain-English digest - searchable by ward, topic, and impact on you. Close the gap between West Offices and the parts of the city that never engage.",
      why: "The single highest-leverage civic-AI project we could run. Its output compounds every week and reaches Tang Hall, Acomb, Clifton and Westfield as readily as the city centre.",
      owner: "City of York Council + civic volunteers",
      first: "A weekly digest pilot for the next three full council meetings.",
    },
    {
      id: "teens",
      title: "Teenagers who build, not just use, AI",
      pitch:
        "Sherpas AI - York edition. Summer work-experience cohorts where 15-18-year-olds ship AI tools for real York organisations - the Foodbank, the Minster, the Theatre Royal, the NRM - coached by local alumni.",
      why: "York exports talent. The city that gives its teens hands-on AI experience is the city its teens come back to.",
      owner: "Sherpas AI + York secondary schools",
      first: "Summer 2026 cohort, 18 teens, 4 shipped tools.",
    },
    {
      id: "older",
      title: "Older residents who feel confident, not left behind",
      pitch:
        "Weekly drop-in AI clinics at Acomb Explore, Tang Hall Explore and York Explore Central. Warm, patient, jargon-free, deliberately slow. Tea included.",
      why: "York's most deprived wards - Tang Hall, parts of Acomb and Clifton - are the wards where digital exclusion compounds fastest. Meet residents where they already are.",
      owner: "Volunteer coaches + Explore York libraries",
      first: "Three weekly clinics, starting first week of the festival.",
    },
    {
      id: "rail-careers",
      title: "Rail and engineering careers, mapped for the next generation",
      pitch:
        "A teen-facing AI careers map for York's rail and engineering cluster - apprenticeships at the National Railway Museum, LNER, Network Rail and the Yorkshire Rail Academy - searchable by GCSE results, interests and home postcode.",
      why: "5,500+ rail-sector workers are based in York and most teens have no idea how to get in. This makes the door visible.",
      owner: "National Railway Museum + Yorkshire Rail Academy + careers leads",
      first: "First version on Sherpas AI by autumn 2026, refined with each apprentice cohort.",
    },
    {
      id: "charities",
      title: "York's charities back the time AI gives them",
      pitch:
        "York Foodbank, York Mind, IDAS, Kyra Women's Project, York CVS - each gets a 90-day AI engagement that returns one full week of staff time per month back to the people they exist to help.",
      why: "Small charities run on goodwill and admin. AI takes the admin - if someone shows them how. JRF's evidence base means we can measure what we change.",
      owner: "York CVS + AI Night School + AI Optimist",
      first: "5-charity pilot cohort, with York CVS as convenor.",
    },
  ],

  priorityItems: [
    {
      id: "shambles",
      title: "Shambles crowd-flow intelligence",
      description:
        "Predict and ease overcrowding on York's narrowest medieval streets using footfall sensors, station data, and resident-built models.",
      rough: "Worked example ready",
    },
    {
      id: "hospitality",
      title: "A hospitality sector that thrives in the AI age",
      description:
        "Every Fossgate, Stonegate and Shambles independent gets an hour with an AI coach and a shortlist of AI moves that buy back a day a week.",
      rough: "90-day programme",
    },
    {
      id: "flooding",
      title: "When will the Foss rise next?",
      description:
        "An opt-in flood concierge that turns Environment Agency gauge data into plain-English alerts for residents on the Ouse and Foss.",
      rough: "Needs a council partner",
    },
    {
      id: "engagement",
      title: "Council engagement across the city",
      description:
        "Translate council papers, meetings and decisions into ward-level plain-English digests so every York resident can meaningfully take part.",
      rough: "Flagship civic-AI project",
    },
    {
      id: "teens",
      title: "Teenagers who can build, not just use, AI",
      description:
        "Sherpas AI work-experience cohorts - York teens shipping real AI tools for the Minster, the NRM, the Theatre Royal and the Foodbank over the summer.",
      rough: "Runs annually",
    },
    {
      id: "older",
      title: "Older residents feel confident, not left behind",
      description:
        "Weekly drop-in AI clinics at Acomb, Tang Hall and York Explore Central - warm, patient, jargon-free, and deliberately slow.",
      rough: "Volunteer-led",
    },
    {
      id: "rail-careers",
      title: "Rail and engineering careers, mapped for teens",
      description:
        "An AI careers map for York's rail cluster - apprenticeships at the NRM, LNER, Network Rail and the Yorkshire Rail Academy, searchable by interests and postcode.",
      rough: "Co-built with NRM",
    },
    {
      id: "charities",
      title: "York's charities get a week of staff time back",
      description:
        "York CVS-convened cohort: 90-day AI engagements with York Foodbank, York Mind, IDAS and Kyra that return real time to staff.",
      rough: "JRF-evaluated",
    },
  ],

  workedExample: {
    slug: "worked-example",
    title: "York Shambles flow",
    shortLabel: "shambles",
    shortDescription:
      "Worked-example prototype showing how York residents can use AI together to take on a real city problem.",
    heroHeadline:
      "Crowding on the Shambles is the first thing AI gives back to the city that lives with it.",
    narrative: [
      "For decades, the people who feel York's overcrowding most acutely - the residents trying to walk to work through Stonegate, the shopkeepers on the Shambles fielding the same questions five hundred times a day, the parents whose pram won't fit between the half-timbered eaves on a Saturday afternoon - have had no credible way to be heard. The footfall data lives behind dashboards. The route advice lives in glossy guides. The residents who carry the consequences live with their elbows tucked.",
      "That's the promise of this worked example. York.AI puts the modelling tools, the data literacy, and the storytelling skills directly in residents' hands. Coached, not contracted. Owned by the people who actually live here. The Shambles flow project is the first proof that an AI-fluent city can take on its own problems - together - and have its work taken seriously by Make It York, the BID, and the council's transport team.",
      "And every method that works for the Shambles ports to the next problem we choose: hospitality coaching, flood alerts, council-paper digests, rail careers, charities' admin. The Shambles example is the proof; the empowerment is the prize.",
    ],
    roles: [
      {
        name: "Residents",
        role: "Annotate the on-the-ground experience - the Saturday squeeze on Low Petergate, the pram-impossible stretch by Little Shambles, the pinch at the King's Square cut-through. No technical skill required.",
      },
      {
        name: "Sherpas AI teenagers",
        role: "Build the data ingest. Pull from York BID footfall sensors, ORR station entry data, Make It York event calendars, weather APIs. Build the simple model. This is exactly the work they'd do on a summer cohort.",
      },
      {
        name: "AI Night School alumni",
        role: "Apply AI to the analysis and write the resident-facing summary. Own the narrative on YorkMix.",
      },
      {
        name: "Make It York & council officers",
        role: "Validate the assumptions, share what data can be shared, and decide the safety thresholds the alert system uses.",
      },
      {
        name: "AI Optimist (Hugo)",
        role:
          "Coaches the team, keeps the scope honest, and connects the output into wider conversations with the BID and the combined authority.",
      },
    ],
    steps: [
      {
        n: "01",
        title: "Frame the problem with Problemarium",
        body: 'Turn "the Shambles is too busy" into a set of specific, answerable questions - which streets, which hours, which events, which weeks. Each becomes a tractable mini-project.',
      },
      {
        n: "02",
        title: "Gather the data",
        body: "Combine York BID footfall sensors, ORR station-entry data, Make It York event calendars, Met Office weather, and Google Maps busyness as a triangulating signal. Flag where assumptions stand in for missing data.",
      },
      {
        n: "03",
        title: "Model the flow",
        body: "A simple, transparent model - the kind a Sherpas AI cohort can build and explain in a week. Predicts crowd levels for the next four hours, by street segment. Not a black box. Not a million-pound procurement.",
      },
      {
        n: "04",
        title: "Write it up in plain English",
        body: "Translate the output into something a York resident or visitor can read in two minutes - and decide whether to walk the Shambles now, in twenty minutes, or via Goodramgate. AI Night School alumni own the writing.",
      },
      {
        n: "05",
        title: "Publish, invite challenge",
        body: "Share it on the York.AI site, embed it on visityork.org via Make It York, and trail it in YorkMix. Invite residents and shopkeepers to poke holes. Update transparently. That's the whole point.",
      },
      {
        n: "06",
        title: "Feed into real decisions",
        body: "With Make It York and the council's help, the output gets referenced in the city centre's footstreets and event-day decisions - so resident work doesn't stay informal.",
      },
    ],
    whyFirst: {
      headline:
        "Because York has been told about its own crowds for twenty years. Now the city gets to do the telling.",
      body: "The whole point of an AI-fluent city is that residents stop being the audience for civic decisions and start being authors of them. The Shambles is where we prove it, because every York resident already has an opinion, the data is largely public, and the visible signal - when the work lands - is felt on every flagstone in the medieval quarter.",
    },
  },

  residentOffer: {
    speakerSeries: [
      {
        name: "Hospitality & visitor economy",
        topic: "AI for restaurants, hotels and independent retail",
        blurb:
          "A practitioner's session on the AI moves that actually shift the needle for an independent operator on Fossgate, Stonegate or the Shambles - bookings, pricing, reviews, social.",
      },
      {
        name: "Rail & engineering",
        topic: "AI in rail and engineering - what's already deployed",
        blurb:
          "An honest tour of where AI sits today across Network Rail, LNER, and the supplier base around the National Railway Museum - and what that means for York's 5,500 rail-sector workers and the next generation of apprentices.",
      },
      {
        name: "Charities & social research",
        topic: "AI for the voluntary sector",
        blurb:
          "Drawing on the Joseph Rowntree Foundation's evidence tradition, a session on how small charities use AI to give staff a week of their month back - without compromising the care.",
      },
      {
        name: "Rolling roster",
        topic: "Guest speakers from Hugo's network",
        blurb:
          "Hugo brings one headline speaker a month from the AI Optimist network - exclusively for York residents, in a York room, over a York dinner.",
      },
    ],
    festivalName: "York AI Summer",
    physicalVenueExamples: [
      "The Guildhall",
      "York Theatre Royal",
      "York Explore Central",
      "Spark:York",
      "Tang Hall Explore",
    ],
  },

  councilAssets: [
    {
      title: "Council social channels",
      body: "Coordinated content across City of York Council's Facebook, Instagram, X and LinkedIn. We supply the assets in council voice; you decide cadence and timing.",
    },
    {
      title: "Resident email lists",
      body: "Inclusion in the council's regular resident bulletins, e-newsletters and any opt-in lists you maintain. Each programme phase gets its own dedicated send.",
    },
    {
      title: "Direct mail & letterbox drops",
      body: "Reach the residents in Tang Hall, Acomb, Clifton and Westfield that no digital channel touches. Even a single city-wide drop introducing the resident offer transforms the programme's starting line.",
    },
    {
      title: "Council noticeboards & civic spaces",
      body: "West Offices, the Guildhall, the fifteen Explore York libraries, Spark:York. The places residents already trust for what's on in the city.",
    },
    {
      title: "Community relationships",
      body: "The council's warm relationships with the University of York, York St John, JRF, Make It York, York CVS, the BID, Explore York, faith groups, and resident associations.",
    },
    {
      title: "Press & local media",
      body: "The Press, YorkMix, BBC Radio York, Minster FM and the Yorkshire Post. A council-endorsed launch makes the press story write itself - and YorkMix will run a human-interest first.",
    },
    {
      title: "Council meetings & agendas",
      body: "A regular York.AI standing item gives residents a visible signal that this is real, sustained civic work - not a one-off announcement.",
    },
    {
      title: "Civic events & city moments",
      body: "JORVIK Viking Festival, the Ice Trail, the Food and Drink Festival, the St Nicholas Fair, York Pride, and the Lord Mayor's engagements. Each becomes a touchpoint for residents to encounter the programme in person.",
    },
    {
      title: "Venues & physical hosting",
      body: "Steers on which council-controlled or council-friendly venues - the Guildhall, Theatre Royal, Explore York libraries, Spark:York - host the cohort kick-offs, graduations, clinics and the summer festival.",
    },
  ],

  councilPartners: [
    "University of York",
    "York St John University",
    "Joseph Rowntree Foundation",
    "Make It York",
    "York CVS",
    "York and Scarborough Teaching Hospitals NHS Trust",
    "Explore York Libraries & Archives",
    "National Railway Museum",
    "York and North Yorkshire Combined Authority",
    "York Civic Trust",
  ],

  personaPages: {
    teenSchoolExamples: [
      "Archbishop Holgate's",
      "Fulford School",
      "Huntington School",
      "All Saints RC",
      "Joseph Rowntree School",
      "Millthorpe School",
    ],
    organisationExamples: [
      {
        org: "York Foodbank",
        problem:
          "Forecast donation supply against referral demand by postcode and season - reduce waste, end the shortfalls.",
      },
      {
        org: "York Mind",
        problem:
          "Triage referrals and signpost to the right support, so case workers spend their week on people, not on admin.",
      },
      {
        org: "IDAS (Independent Domestic Abuse Services)",
        problem:
          "Help the helpline route resources outside office hours, safely and confidentially - and surface escalating risk patterns.",
      },
      {
        org: "Kyra Women's Project",
        problem:
          "Schedule courses, coordinate volunteers and draft funding bids - the admin that quietly eats a small charity's week.",
      },
    ],
  },

  seedProblems: [
    {
      organisation: "York Foodbank",
      contactName: "York Foodbank team",
      contactEmail: "info@york.foodbank.org.uk",
      shortTitle:
        "Forecast donation supply against referral demand by postcode",
      description:
        "Donations from supermarkets, growers and the public are unpredictable. Referrals come in across the city - city centre, Acomb, Tang Hall, Clifton - with very different needs. Right now we match by hand. Could AI forecast weekly donation flow and suggest fair allocations across our distribution centres?",
      whoFeelsIt:
        "Volunteers at the front desk, the families who arrive on the wrong day, and our trustees watching food go to waste while elsewhere we run short.",
      alreadyTried:
        "A spreadsheet. A WhatsApp group. A volunteer rota. They each help, but none of them solve the matching problem at city scale.",
      successIn90Days:
        "An AI-assisted weekly plan that reduces wasted donations by 40% and lets families know two days in advance what's likely to be available at their nearest centre.",
      tags: ["food", "matching", "volunteer-led", "demo-seed"],
    },
    {
      organisation: "York CVS",
      contactName: "York CVS office",
      contactEmail: "info@yorkcvs.org.uk",
      shortTitle:
        "Help small York charities reclaim a week of staff time per month",
      description:
        "The York voluntary sector runs on goodwill and admin. Funding bids, volunteer scheduling, case-load triage, impact reporting - each one alone is small, in aggregate they consume a quarter of every staff member's week. A York-wide AI fluency cohort could change that, with JRF's evidence base measuring the difference.",
      whoFeelsIt:
        "Every charity manager in York. Every funder waiting on a delayed bid. Every beneficiary who waits longer than they should.",
      alreadyTried:
        "Sector training, shared services, peer support. Useful, but the AI literacy gap in particular is widening fast.",
      successIn90Days:
        "Five York charities through a 90-day AI engagement, each demonstrating a measurable week of staff time per month returned to frontline work, written up by JRF as a replicable model.",
      tags: ["charities", "operations", "evaluation", "demo-seed"],
    },
  ],

  manager: {
    name: "Kathy Walker",
    emailAlias: "hugo+yorkai@ainightschool.org",
  },

  externalLinks: {
    aiFellowship: "https://www.ainightschool.org/ai-leaders-fellowship", // TODO: confirm canonical URL
    summerOfAi: "https://www.startupsherpas.co.uk/summer-of-ai-york", // TODO: confirm Sherpas has a York-specific page
  },

  localSpeakers: [], // TODO: add named York speakers; empty hides the section

  contact: {
    email: "hugo+yorkai@ainightschool.org",
  },
};
