import type { Place } from "./_types";

// Brent config. London Borough of Brent is a unitary authority.
// The thesis angle is industrial-transition: Brent has lived
// through manufacturing decline (Heinz at Harlesden, Park Royal's
// 1980s/90s shedding) and is now the most super-diverse borough
// in England and Wales, with a workforce concentrated in the
// retail/hospitality/admin lanes IPPR puts in AI's first wave -
// inside London's least affordable and fourth-most-deprived
// borough.

export const brent: Place = {
  slug: "brent",
  name: "Brent",
  formalName: "The London Borough of Brent",
  wordmark: "Brent.AI",
  wordmarkAccent: ".",
  domainHint: "brent.ai",
  placeNoun: "borough",

  council: {
    name: "Brent Council",
    shortName: "the council",
    type: "borough",
    website: "https://www.brent.gov.uk/",
    pressOutlets: [
      "Brent &amp; Kilburn Times",
      "MyLondon (Reach plc Brent desk)",
      "Your Brent (the council's quarterly magazine, c. 135,000 homes)",
      "Asian Voice",
      "BBC London",
    ],
    civicEvents: [
      "Wembley Park Diwali Weekend",
      "Ealing Road Diwali Parade",
      "Culture Splash town-centre festival programme",
      "Brent Black History Month",
      "Brent Eid civic celebrations",
      "Mayor of Brent's engagements",
    ],
  },

  thesis: {
    eyebrow: "The honest bit",
    headline:
      "Brent's most AI-exposed workers are also its most stretched. Pretending otherwise isn't a kindness.",
    paragraphs: [
      "Brent's biggest employment sector is wholesale and retail trade - around one in five jobs - followed by health and social work, with hospitality, logistics and front-line service work concentrated around Wembley Park and the Park Royal industrial estate. These are precisely the categories IPPR's task-level analysis identified as most exposed to generative AI in the first wave. The Greater London Authority's April 2026 analysis puts 46% of London's workforce in roles where AI can already automate some tasks - above the UK average, with over a million London jobs &quot;highly or significantly exposed&quot;.",
      "The borough hosting that exposure is also one of the least able to absorb it. Brent's median house-price-to-earnings ratio is 14.67x - among the twelve least-affordable local authorities in England and Wales - and it ranks as London's fourth-most-deprived borough, with no Brent LSOA sitting in the least-deprived national quintile. When a job changes shape here, the family can't simply follow it elsewhere. Brent Council itself employs over 2,500 people in administrative functions the Tony Blair Institute estimates could see a quarter of their tasks automated.",
      "Brent has navigated industrial transitions before - Heinz at Harlesden lost 3,500 jobs at peak when it closed in 2000, and Park Royal's light manufacturing shed thousands more through the 80s and 90s. The borough absorbed every shock, but the people who fell through the gaps tended to look like its current residents. Brent has a choice to make now: become a coal-mining borough of the 21st century, or one of the first places that figures out how to apply AI for the good of everyone in it. We don't think the answer is fear. We think the answer is fluency - enough AI literacy across residents, businesses, charities and council that Brent shapes AI's restructuring instead of receiving it.",
    ],
    angle: "industrial-transition",
    secondQuestion: {
      eyebrow: "Question two",
      body: "When Brent's own people build the tools the borough needs - the multilingual service navigator, the Park Royal workforce coach, the council-paper digest in 150 languages, the Wembley Park crowd-flow model, the foodbank demand forecaster.",
    },
  },

  hero: {
    pills: [
      "The London Borough of Brent",
      "A vision for Brent Council",
      "Summer 2026",
    ],
    headline: {
      lead: "What happens when ",
      emphasis: "everyone",
      tail: " in your borough is fluent in AI?",
    },
    lede:
      "Brent is unusually well placed to find out. London's most super-diverse borough, with 339,800 residents, 150+ languages spoken, the Wembley Park transformation on its doorstep, Park Royal at its western edge, and a council whose own people are reflective of the communities it serves. We think we can make it the UK's first truly AI-fluent borough - together, and in one summer.",
    bigQuestion: {
      eyebrow: "Question one",
      body: "Not the early adopters in the Wembley Park co-working spaces. Everyone - the retiree at Wembley Library, the sixth-former at Alperton Community School, the warehouse-team lead at Park Royal, the indie trader on Ealing Road, the planning officer at Brent Civic Centre.",
    },
  },

  stats: {
    hero: [
      {
        value: "2.87M",
        label:
          "Exits at Wembley Park Underground in summer 2024 alone - up 18.2% on summer 2019",
        source: "Quintain · Wembley Park visitor data 2024",
      },
      {
        value: "40,000+",
        label:
          "Workers across Park Royal - the UK's largest industrial estate, straddling Brent, Ealing and Hammersmith &amp; Fulham",
        source: "GLA / OPDC · Park Royal Business Group",
      },
      {
        value: "~20%",
        label:
          "Brent jobs in wholesale and retail trade - the borough's single largest sector, in the IPPR first-wave AI exposure zone",
        source: "ONS BRES via Brent Economy profile",
      },
      {
        value: "46%",
        label:
          "London workers in roles where AI could already automate some tasks - above the 38% UK average",
        source: "Greater London Authority · AI exposure analysis, April 2026",
      },
    ],
    community: [
      {
        value: "339,800",
        label:
          "Residents (Census 2021) - London's fifth-largest borough, up 9.2% since 2011",
        source: "ONS Census 2021",
      },
      {
        value: "85%",
        label:
          "Brent residents from ethnic minority groups - second-highest share in England and Wales after Newham",
        source: "Brent Open Data · ONS Census 2021",
      },
      {
        value: "150+",
        label:
          "Languages used across Brent - making it the most super-diverse borough in England and Wales",
        source: "Brent Council Open Data · Community Profile Evidence Pack",
      },
      {
        value: "43.9%",
        label:
          "Brent residents born in the UK - the lowest share of any local authority in England and Wales",
        source: "Brent Open Data · ONS Census 2021",
      },
      {
        value: "14.67x",
        label:
          "Median house-price-to-earnings ratio in 2024 - among the twelve least-affordable local authorities in England and Wales",
        source: "ONS Housing Affordability in England and Wales 2024",
      },
      {
        value: "4th",
        label:
          "Brent's rank as the most-deprived London borough - up from 9th in 2015 (IMD 2019). No Brent LSOA sits in the least-deprived national quintile.",
        source: "MHCLG · English Indices of Deprivation 2019",
      },
      {
        value: "2,553",
        label:
          "Brent Council employees (2023/24) - the Tony Blair Institute estimates around a quarter of council tasks could be automated by AI",
        source: "Brent Workforce Equalities Report 2023/24 · TBI 2024",
      },
      {
        value: "~9,000",
        label:
          "Staff across London North West University Healthcare NHS Trust - serving Brent, Ealing and Harrow from Northwick Park, Central Middlesex and Ealing Hospitals",
        source: "London North West University Healthcare NHS Trust",
      },
    ],
    communityCaption:
      "Figures drawn from ONS Census 2021, Brent Council Open Data, ONS Housing Affordability 2024, MHCLG English Indices of Deprivation 2019, Brent's Workforce Equalities Report 2023/24, the Greater London Authority AI exposure analysis (April 2026), and Quintain. Once Brent Council shares local insight, every number will be sharpened.",
  },

  anchors: [
    {
      name: "Brent Civic Centre &amp; Wembley Library",
      role:
        "The council HQ and the borough's busiest library, on Engineers Way next to Wembley Stadium",
      use: "The room and the front desk for every cohort kick-off, drop-in clinic and graduation.",
    },
    {
      name: "London North West University Healthcare NHS Trust",
      role:
        "One of the largest acute-care trusts in north-west London, with around 9,000 staff across Northwick Park, Central Middlesex and Ealing Hospitals",
      use: "Where AI fluency moves quickest from idea to patient impact.",
    },
    {
      name: "Quintain &amp; Wembley Park",
      role:
        "Master developer of the 85-acre Wembley Park estate - 6,000 homes delivered, c. 10,000 residents, 130+ apprentices to date",
      use: "Direct line to the workforce and apprenticeship pipeline AI is reshaping fastest.",
    },
    {
      name: "Wembley National Stadium Ltd &amp; The FA",
      role:
        "The 90,000-seat national stadium and one of the world's most recognised civic landmarks",
      use: "The convening venue and a magnet for press, sponsors and teen apprentices.",
    },
    {
      name: "College of North West London (CCCG)",
      role:
        "Brent's FE college with campuses at Willesden and Wembley Park, working with 500+ employers",
      use: "A natural home for teen cohorts, employer partnerships and adult retraining.",
    },
    {
      name: "BAPS Shri Swaminarayan Mandir (Neasden Temple)",
      role:
        "Major Hindu faith institution serving a 20,000+ congregation, one of London's defining civic-spiritual landmarks",
      use: "Trust-builder for South Asian engagement and a recognisable Brent room for headline events.",
    },
    {
      name: "Brent CVS",
      role:
        "Umbrella body for Brent's voluntary and community sector",
      use: "Gateway to over 100 local charities, faith groups and VCSE organisations.",
    },
    {
      name: "Sufra NW London",
      role:
        "Food bank and community-kitchen network across Brent, with a national reputation for innovation",
      use: "Reach for residents at the sharp end - and the evidence base to write up what changes.",
    },
  ],

  segmentArchetypes: {
    typicalCommuter:
      "the software QA tester on the Jubilee line from Wembley Park, phone out before the doors close",
    typicalElder:
      "the retiree at Wembley Library who comes for the Thursday craft group and still prefers a printed leaflet",
    typicalTeen:
      "the sixth-former at Alperton Community School eyeing an apprenticeship at the Wembley Park construction site",
    typicalIndependent:
      "the indie sari-and-jewellery trader on Ealing Road whose WhatsApp group is her entire marketing budget",
    typicalCouncilOfficer:
      "the planning officer at Brent Civic Centre managing three regeneration consultations simultaneously",
  },

  challenges: [
    {
      id: "wembley-flow",
      title: "When is Wembley Park about to overflow?",
      pitch:
        "Model real-time visitor flow around the 90,000-seat Wembley Stadium and the estate around it - using TfL footfall, event calendars, weather and Quintain's own data. Route residents and visitors away from the worst pinch points before the squeeze starts.",
      why: "Wembley Park Underground saw 2.87 million exits in summer 2024 alone. The residents who live around it have had no credible way to be heard about what the surges mean for them. A resident-built tool changes that.",
      owner: "Quintain + Brent Council Transport &amp; Highways + TfL",
      first: "See the /worked-example worked prototype.",
      href: "/worked-example",
    },
    {
      id: "service-navigator",
      title: "A council that speaks the languages its residents speak",
      pitch:
        "Build a multilingual AI service navigator for Brent - council services, NHS appointments, school admissions, housing rights - in the 150+ languages residents actually use. Fed by trusted council sources, not search-engine guesswork.",
      why: "Brent has the lowest UK-born share of any local authority in England and Wales (43.9%). Service-access friction here is a public-health and equality issue, not a UX issue.",
      owner: "Brent Council Digital + Brent ICP + community language partners",
      first: "Pilot in 10 languages on the most-asked-about services first.",
    },
    {
      id: "park-royal",
      title: "A Park Royal workforce that thrives in the AI age",
      pitch:
        "Every food-and-drink producer, logistics operator and warehouse on Park Royal gets one hour with an AI coach and a shortlist of AI moves that buy them back a day a week - scheduling, inventory, customer service, route optimisation - no SaaS bloat, no hype.",
      why: "Park Royal is the UK's largest industrial estate, home to 500 food and drink companies and 14,000+ manufacturing jobs - and one of the most AI-exposed sector clusters in London.",
      owner: "Park Royal Business Group + OPDC + AI Optimist",
      first: "30-business pilot with the Small-Business AI Opportunity Diagnostic.",
    },
    {
      id: "engagement",
      title: "Council engagement across the borough",
      pitch:
        "Translate every Brent Council paper, minute and decision into a plain-English digest - searchable by ward, topic and impact on you - then offer the same digest in the borough's most-spoken languages.",
      why: "The single highest-leverage civic-AI project we could run. Its output compounds every week and reaches Stonebridge, Harlesden and Kilburn as readily as Wembley Park.",
      owner: "Brent Council + civic volunteers",
      first: "A weekly digest pilot for the next three full council meetings.",
    },
    {
      id: "teens",
      title: "Teenagers who build, not just use, AI",
      pitch:
        "Sherpas AI - Brent edition. Summer work-experience cohorts where 15-18-year-olds ship AI tools for real Brent organisations - Sufra, Crisis Skylight, Brent Foodbank, the FA Foundation - coached by local alumni.",
      why: "Brent's teen population is large, multilingual and under-served by AI access. The borough that gives its teens hands-on AI experience is the borough they build their careers in.",
      owner: "Sherpas AI + Brent secondary schools + College of North West London",
      first: "Summer 2026 cohort, 18 teens, 4 shipped tools.",
    },
    {
      id: "older",
      title: "Older residents who feel confident, not left behind",
      pitch:
        "Weekly drop-in AI clinics at Wembley Library, Willesden Green Library and Kilburn Library. Warm, patient, jargon-free, deliberately slow. Tea and translation included.",
      why: "Brent's most-deprived wards compound digital exclusion with language access. Meet residents where they already are - and bring a translator.",
      owner: "Volunteer coaches + Brent Libraries + faith partners",
      first: "Three weekly clinics, starting first week of the festival.",
    },
    {
      id: "foodbank",
      title: "Brent Foodbank gets the week back",
      pitch:
        "AI demand forecasting across Brent Foodbank's distribution points - so volunteers arrive to a queue they were ready for and donations are matched to need by postcode, season and event calendar.",
      why: "Brent is the fourth-most-deprived borough in London. Demand on the foodbank rises and falls fast; right now matching is done by hand.",
      owner: "Brent Foodbank + Sufra NW London + volunteer engineers",
      first: "8-week pilot at the two highest-traffic distribution points.",
    },
    {
      id: "charities",
      title: "Brent's charities get a week of staff time back",
      pitch:
        "Brent CVS-convened cohort: 90-day AI engagements with Sufra, Crisis Skylight, Brent Foodbank, AWRC and Young Brent Foundation that each return one full week of staff time per month to frontline work.",
      why: "Small charities run on goodwill and admin. AI takes the admin - if someone shows them how. Brent CVS gives us the cohort, the trust, and the evidence base.",
      owner: "Brent CVS + AI Night School + AI Optimist",
      first: "5-charity pilot cohort, with Brent CVS as convenor.",
    },
  ],

  priorityItems: [
    {
      id: "wembley-flow",
      title: "Wembley Park crowd-flow intelligence",
      description:
        "Predict and ease overcrowding around the 90,000-seat stadium and Wembley Park estate using TfL, event and Quintain data - resident-built.",
      rough: "Worked example ready",
    },
    {
      id: "service-navigator",
      title: "Multilingual council service navigator",
      description:
        "A trusted AI service navigator across council, NHS and school services in the 150+ languages Brent residents actually speak.",
      rough: "Flagship digital-inclusion project",
    },
    {
      id: "park-royal",
      title: "A Park Royal workforce that thrives in the AI age",
      description:
        "Every food, logistics and warehouse business on Park Royal gets an hour with an AI coach and a shortlist of moves that buy back a day a week.",
      rough: "90-day programme",
    },
    {
      id: "engagement",
      title: "Council engagement across the borough",
      description:
        "Translate council papers, meetings and decisions into ward-level plain-English digests in Brent's most-spoken languages.",
      rough: "Flagship civic-AI project",
    },
    {
      id: "teens",
      title: "Teenagers who can build, not just use, AI",
      description:
        "Sherpas AI work-experience cohorts - Brent teens shipping real AI tools for Sufra, Brent Foodbank and the FA Foundation over the summer.",
      rough: "Runs annually",
    },
    {
      id: "older",
      title: "Older residents feel confident, not left behind",
      description:
        "Weekly drop-in AI clinics at Wembley, Willesden Green and Kilburn libraries - warm, patient and jargon-free, with translation.",
      rough: "Volunteer-led",
    },
    {
      id: "foodbank",
      title: "Brent Foodbank gets the week back",
      description:
        "AI demand forecasting across Brent Foodbank distribution points - matching donations to need by postcode, season and event.",
      rough: "Needs a council intro",
    },
    {
      id: "charities",
      title: "Brent's charities get a week of staff time back",
      description:
        "Brent CVS-convened cohort: 90-day AI engagements with Sufra, Crisis Skylight, Brent Foodbank, AWRC and Young Brent Foundation.",
      rough: "CVS-led",
    },
  ],

  workedExample: {
    slug: "worked-example",
    title: "Wembley Park flow",
    shortLabel: "wembley",
    shortDescription:
      "Worked-example prototype showing how Brent residents can use AI together to take on a real borough problem.",
    heroHeadline:
      "Crowding around Wembley is the first thing AI gives back to the borough that lives with it.",
    narrative: [
      "For decades, the people who feel Wembley's crowd surges most acutely - the residents who can't get out of their own street on event days, the shopkeepers on the High Road who close because the footfall went the wrong way, the parents whose pram won't fit through the post-match crush at Wembley Park station - have had no credible way to be heard. The footfall data lives behind dashboards. The route advice lives in event-day briefings. The residents who carry the consequences live with their elbows tucked.",
      "That's the promise of this worked example. Brent.AI puts the modelling tools, the data literacy and the storytelling skills directly in residents' hands. Coached, not contracted. Owned by the people who actually live here. The Wembley Park flow project is the first proof that an AI-fluent borough can take on its own problems - together - and have its work taken seriously by Quintain, TfL and the council's transport team.",
      "And every method that works for Wembley Park ports to the next problem we choose: Park Royal logistics, council-paper digests, foodbank forecasting, multilingual service navigation, charity admin. The Wembley example is the proof; the empowerment is the prize.",
    ],
    roles: [
      {
        name: "Residents",
        role: "Annotate the on-the-ground experience - the Engineers Way squeeze on match day, the post-concert exodus through Olympic Way, the school-run impact of Saturday events. No technical skill required.",
      },
      {
        name: "Sherpas AI teenagers",
        role: "Build the data ingest - TfL Wembley Park entries, event calendars, weather APIs, Quintain footfall, Google Maps busyness as a triangulating signal. Build the simple model. This is exactly the work they'd do on a summer cohort.",
      },
      {
        name: "AI Night School alumni",
        role: "Apply AI to the analysis and write the resident-facing summary. Own the narrative in the Brent &amp; Kilburn Times and Wembley Park's own channels.",
      },
      {
        name: "Quintain, TfL &amp; council officers",
        role: "Validate the assumptions, share what data can be shared, and decide the thresholds the alert system uses.",
      },
      {
        name: "AI Optimist (Hugo)",
        role:
          "Coaches the team, keeps the scope honest, and connects the output into wider conversations with the GLA and the West London partnership.",
      },
    ],
    steps: [
      {
        n: "01",
        title: "Frame the problem with Problemarium",
        body: 'Turn "Wembley is too busy" into a set of specific, answerable questions - which streets, which hours, which event types, which weeks. Each becomes a tractable mini-project.',
      },
      {
        n: "02",
        title: "Gather the data",
        body: "Combine TfL Wembley Park station entries/exits, the FA and Quintain event calendars, weather, and Google Maps busyness as a triangulating signal. Flag where assumptions stand in for missing data.",
      },
      {
        n: "03",
        title: "Model the flow",
        body: "A simple, transparent model - the kind a Sherpas AI cohort can build and explain in a week. Predicts crowd levels for the next four hours, by street segment. Not a black box. Not a million-pound procurement.",
      },
      {
        n: "04",
        title: "Write it up in plain English",
        body: "Translate the output into something a Brent resident or visitor can read in two minutes - and decide whether to leave now, in twenty minutes, or take an alternative route. AI Night School alumni own the writing.",
      },
      {
        n: "05",
        title: "Publish, invite challenge",
        body: "Share it on the Brent.AI site, trail it in the Brent &amp; Kilburn Times and on Wembley Park's own channels. Invite residents and traders to poke holes. Update transparently. That's the whole point.",
      },
      {
        n: "06",
        title: "Feed into real decisions",
        body: "With Quintain, TfL and the council's help, the output gets referenced in event-day planning - so resident work doesn't stay informal.",
      },
    ],
    whyFirst: {
      headline:
        "Because Brent has been told about its own crowds for twenty years. Now the borough gets to do the telling.",
      body: "The whole point of an AI-fluent borough is that residents stop being the audience for civic decisions and start being authors of them. Wembley is where we prove it, because every Brent resident already has an opinion, the data is largely public, and the visible signal - when the work lands - is felt on every pavement from Engineers Way to Forty Lane.",
    },
  },

  residentOffer: {
    speakerSeries: [
      {
        name: "Retail &amp; high-street independents",
        topic: "AI for indie traders on Ealing Road, Kilburn High Road and Wembley High Road",
        blurb:
          "A practitioner's session on the AI moves that actually shift the needle for an independent on Ealing Road or Kilburn High Road - bookings, marketing, multilingual customer service, inventory.",
      },
      {
        name: "Public services &amp; local government",
        topic: "AI in council, NHS and frontline public services",
        blurb:
          "Drawing on the Tony Blair Institute's local-government work, an honest tour of what's already deployed across UK councils and NHS trusts - and what that means for Brent's 2,500-strong council workforce.",
      },
      {
        name: "Multilingual &amp; community services",
        topic: "AI for a borough that speaks 150 languages",
        blurb:
          "What it actually takes to build trustworthy AI for a borough where the dominant household language is rarely English - translation, cultural calibration, evaluation, and the limits.",
      },
      {
        name: "Rolling roster",
        topic: "Guest speakers from Hugo's network",
        blurb:
          "Hugo brings one headline speaker a month from the AI Optimist network - exclusively for Brent residents, in a Brent room, over a Brent dinner.",
      },
    ],
    festivalName: "Brent AI Summer",
    physicalVenueExamples: [
      "Brent Civic Centre",
      "Wembley Library",
      "Troubadour Theatre Wembley",
      "Willesden Green Library",
      "BOXPARK Wembley",
      "College of North West London (Wembley Park campus)",
    ],
  },

  councilAssets: [
    {
      title: "Council social channels",
      body: "Coordinated content across Brent Council's Facebook (@BrentCouncil), Instagram, X and LinkedIn. We supply the assets in council voice; you decide cadence and timing.",
    },
    {
      title: "Resident email lists &amp; e-newsletter",
      body: "Inclusion in Brent Council's regular resident bulletins and segmented e-newsletters (library events, planning, business). Each programme phase gets its own dedicated send.",
    },
    {
      title: "Your Brent magazine",
      body: "Your Brent reaches around 135,000 households quarterly in print - the only channel that touches digitally-excluded residents at scale. Even one editorial feature transforms the programme's starting line.",
    },
    {
      title: "Direct mail &amp; letterbox drops",
      body: "Reach residents in Stonebridge, Harlesden, Kilburn and Church End that no digital channel touches. Coordinated drops by ward keep the programme local where it matters.",
    },
    {
      title: "Council noticeboards &amp; civic spaces",
      body: "Physical noticeboards at Brent Civic Centre, the nine Brent libraries, leisure centres and community centres. The places residents already trust for what's on in the borough.",
    },
    {
      title: "Community relationships",
      body: "The council's warm relationships with the Hindu Council Brent, mosques, churches, tenant and resident associations, Brent CVS, the College of North West London and the faith and community sector.",
    },
    {
      title: "Press &amp; local media",
      body: "Brent &amp; Kilburn Times, MyLondon, Asian Voice and BBC London. A council-endorsed launch makes the press story write itself - and the Brent &amp; Kilburn Times will run a human-interest first.",
    },
    {
      title: "Council meetings &amp; agendas",
      body: "A regular Brent.AI standing item at full council and scrutiny gives residents a visible signal that this is real, sustained civic work - not a one-off announcement.",
    },
    {
      title: "Civic events &amp; borough moments",
      body: "Wembley Park Diwali Weekend, the Ealing Road Diwali Parade, Culture Splash, Black History Month and Eid civic events. Each becomes a touchpoint for residents to encounter the programme in person.",
    },
  ],

  councilPartners: [
    "Quintain &amp; Wembley Park",
    "Brent Integrated Care Partnership / NHS North West London ICB",
    "London North West University Healthcare NHS Trust",
    "College of North West London",
    "Wembley National Stadium Ltd &amp; The FA",
    "Brent CVS",
    "Hindu Council Brent &amp; the BAPS Swaminarayan Mandir",
    "Park Royal Business Group &amp; OPDC",
    "BOXPARK Wembley &amp; London Designer Outlet",
    "Troubadour Theatre Wembley",
  ],

  personaPages: {
    teenSchoolExamples: [
      "Alperton Community School",
      "Ark Elvin Academy",
      "Ark Academy (Wembley)",
      "Kingsbury High School",
      "Preston Manor School",
      "Capital City Academy",
    ],
    organisationExamples: [
      {
        org: "Sufra NW London",
        problem:
          "Triage food bank and community-kitchen referrals across our Brent hubs so no family in crisis waits more than 24 hours.",
      },
      {
        org: "Crisis Skylight Brent",
        problem:
          "Match homeless clients to the right housing pathway on first contact - reduce failed referrals and the bounce-back that follows.",
      },
      {
        org: "Brent Foodbank",
        problem:
          "Forecast weekly demand across our Neasden and Kingsbury distribution points so volunteers and stock are matched to actual need.",
      },
      {
        org: "Brent CVS",
        problem:
          "Help our 100+ member organisations write better grant applications without losing their own voice - and free up the time funding bids quietly eat.",
      },
    ],
  },

  seedProblems: [
    {
      organisation: "Sufra NW London",
      contactName: "Sufra NW London team",
      contactEmail: "info@sufra-nwlondon.org.uk",
      shortTitle:
        "Triage food bank and community-kitchen referrals across Brent hubs",
      description:
        "Referrals arrive from across Brent - city centre, Harlesden, Kilburn, Stonebridge - with different needs, in different languages, at different urgency levels. Right now we triage by hand. Could AI help us route referrals to the right hub on first contact, in the language the family speaks, with the right onward signpost attached?",
      whoFeelsIt:
        "Volunteers at the front desk, the families who arrive on the wrong day, and our trustees watching the borough's poverty figures rise.",
      alreadyTried:
        "A shared spreadsheet. A WhatsApp group. A volunteer rota. They each help, but none of them solve the triage problem at borough scale.",
      successIn90Days:
        "An AI-assisted triage assistant in five languages that routes 70%+ of referrals to the right hub on first contact and cuts the wait to the right support in half.",
      tags: ["food", "triage", "multilingual", "demo-seed"],
    },
    {
      organisation: "Brent CVS",
      contactName: "Brent CVS office",
      contactEmail: "info@cvsbrent.org.uk",
      shortTitle:
        "Help Brent's small charities reclaim a week of staff time per month",
      description:
        "The Brent voluntary sector runs on goodwill and admin. Funding bids, volunteer scheduling, case-load triage, impact reporting, multilingual communications - each one alone is small, in aggregate they consume a quarter of every staff member's week. A Brent-wide AI fluency cohort could change that, with Sufra and Crisis Skylight as evaluation partners.",
      whoFeelsIt:
        "Every charity manager in Brent. Every funder waiting on a delayed bid. Every beneficiary who waits longer than they should.",
      alreadyTried:
        "Sector training, shared services, peer support. Useful, but the AI literacy gap in particular is widening fast.",
      successIn90Days:
        "Five Brent charities through a 90-day AI engagement, each demonstrating a measurable week of staff time per month returned to frontline work, written up as a replicable model.",
      tags: ["charities", "operations", "evaluation", "demo-seed"],
    },
  ],

  contact: {
    email: "hugo+brent-ai@pdubs.co",
  },
};
