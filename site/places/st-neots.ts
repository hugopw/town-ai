import type { Place } from "./_types";

// St Neots config. The largest town in Huntingdonshire, on the
// East Coast Main Line - 40 minutes from King's Cross, 22 miles
// from Cambridge. The thesis angle is industrial-transition:
// St Neots has lived through manufacturing loss before (Paine's
// Brewery 1987, Little Paxton paper mill in the early 20th
// century) and replaced those jobs with the back-office, retail
// and light-industrial work that IPPR puts in AI's first wave.
// Cambridge is 22 miles down the A14 but its productivity gains
// only reach the residents qualified to commute into the cluster.

export const stNeots: Place = {
  slug: "st-neots",
  name: "St Neots",
  formalName: "St Neots, Cambridgeshire",
  wordmark: "StNeots.AI",
  wordmarkAccent: ".",
  domainHint: "stneots.ai",
  placeNoun: "town",

  council: {
    name: "St Neots Town Council",
    shortName: "the town council",
    type: "town",
    website: "https://www.stneots-tc.gov.uk/",
    pressOutlets: [
      "The Hunts Post",
      "Cambridgeshire Live",
      "Cambridge Independent",
      "BBC Radio Cambridgeshire",
      "Black Cat Radio (102.5FM)",
      "Ouse Valley Radio (104FM)",
    ],
    civicEvents: [
      "St Neots Carnival",
      "St Neots Folk Festival",
      "St Neots Charity Dragon Boat Race",
      "Bands in the Park",
      "Christmas Lights Switch-On on the Market Square",
      "Farm & Craft Market",
    ],
  },

  thesis: {
    eyebrow: "The honest bit",
    headline:
      "St Neots has weathered industrial loss before. Whether it leads this one is a choice.",
    paragraphs: [
      "St Neots sits at the meeting point of two opposing economic forces - a 40-minute East Coast Main Line ride to King's Cross that has made it one of Cambridgeshire's fastest-growing commuter towns, and a Huntingdonshire workforce still concentrated in administrative, secretarial and customer-service roles. Around one in five of the district's 97,700 jobs sit in the categories IPPR identifies as most exposed to first-wave generative AI. The Tony Blair Institute puts potential time savings at 46% for administrative roles and 33% for sales.",
      "Twenty-two miles down the A14 is one of Europe's most productive AI clusters - but only the residents qualified to commute into Cambridge benefit directly. The workers who stay - at Bosch Rexroth on Cromwell Road, in town-centre retail, in care, in the back offices on Eatons Industrial Estate - are precisely the ones AI is reshaping first. Huntingdonshire's house-price-to-earnings ratio is 7.6x: relatively affordable for a Cambridge commuter, still unaffordable for a local-wage worker.",
      "St Neots has lived through this before. Paine's Brewery anchored the Market Square for 156 years until brewing ceased in 1987; the Little Paxton paper mill, once employing 200 people, fell silent the previous century. The town absorbed both, but the livelihoods that replaced them are now the ones AI restructures first. St Neots has a choice to make: become a coal-mining town of the 21st century, or one of the first places that figures out how to apply AI for the good of everyone in it. We don't think the answer is fear. We think the answer is fluency - enough AI literacy across residents, businesses, charities, the town council and Huntingdonshire that St Neots shapes AI's restructuring instead of receiving it.",
    ],
    angle: "industrial-transition",
    secondQuestion: {
      eyebrow: "Question two",
      body: "When St Neots' own people build the tools the town needs - the Market Square footfall model, the commuter-time AI coach, the council-paper digest, the Wintringham new-resident concierge, the foodbank demand forecaster, the indie-trader AI bookkeeper.",
    },
  },

  hero: {
    pills: [
      "St Neots, Cambridgeshire",
      "A vision for St Neots Town Council & Huntingdonshire District Council",
      "Summer 2026",
    ],
    headline: {
      lead: "What happens when ",
      emphasis: "everyone",
      tail: " in your town is fluent in AI?",
    },
    lede:
      "St Neots is unusually well placed to find out. The largest town in Huntingdonshire, 40 minutes from King's Cross, 22 miles from the Cambridge cluster, growing fast at Loves Farm and Wintringham, with a Market Square that has been the heart of the town for nine centuries. We think we can make it the UK's first truly AI-fluent market town - together, and in one summer.",
    bigQuestion: {
      eyebrow: "Question one",
      body: "Not the QA testers on the 07:42 to King's Cross. Everyone - the retiree at St Neots Library, the sixth-former at Astrea Sixth Form, the indie deli on the Market Square, the warehouse-team lead on Cromwell Road, the planning officer at Pathfinder House.",
    },
  },

  stats: {
    hero: [
      {
        value: "40 min",
        label:
          "Fastest train from St Neots to King's Cross - among the top 100 most-expensive UK commuter journeys",
        source: "LNER · Hunts Post",
      },
      {
        value: "+118.5%",
        label:
          "Population growth in St Neots East ward 2011-2021 - the second-highest in Cambridgeshire & Peterborough",
        source: "ONS Census 2021 · Cambridgeshire & Peterborough Insight",
      },
      {
        value: "~1 in 5",
        label:
          "Huntingdonshire jobs in admin, secretarial, sales and customer-service - the IPPR first-wave AI exposure categories",
        source: "ONS Census 2021 / Annual Population Survey",
      },
      {
        value: "46%",
        label:
          "Potential time savings AI could deliver in administrative roles, per the Tony Blair Institute",
        source: "Tony Blair Institute · Impact of AI on the Labour Market, Nov 2024",
      },
    ],
    community: [
      {
        value: "33,410",
        label:
          "St Neots residents at the 2021 Census - the largest town in Huntingdonshire",
        source: "ONS Census 2021",
      },
      {
        value: "180,830",
        label:
          "Huntingdonshire district residents - covering St Neots, Huntingdon, St Ives, Ramsey and Godmanchester",
        source: "ONS Census 2021",
      },
      {
        value: "2,800",
        label:
          "Homes planned at Wintringham, the new community east of St Neots, with 63,500m² of employment land alongside",
        source: "Urban & Civic · St Neots Masterplan for Growth",
      },
      {
        value: "1,400+",
        label:
          "Homes built at Loves Farm, with a further ~1,020 in Phase 2 - the engine of St Neots' eastward growth",
        source: "St Neots Masterplan for Growth",
      },
      {
        value: "97,700",
        label:
          "Employed residents in Huntingdonshire (year to Dec 2023) - the district workforce that the AI overlay applies to",
        source: "ONS Labour Market Local · Huntingdonshire",
      },
      {
        value: "7.6x",
        label:
          "Median house-price-to-earnings ratio in Huntingdonshire - relatively affordable vs Cambridge (10.6x), still unaffordable for local-wage workers",
        source: "ONS Housing Affordability in England & Wales · HDC Sustainability Appraisal",
      },
      {
        value: "£5.8m",
        label:
          "CPCA investment in St Neots town-centre regeneration via the St Neots Masterplan for Growth",
        source: "Cambridgeshire & Peterborough Combined Authority",
      },
      {
        value: "26%",
        label:
          "Council tasks the Tony Blair Institute estimates could be automated by AI - around £30m a year for one local authority studied",
        source: "TBI · Potential Impact of AI on the Public-Sector Workforce, July 2024",
      },
    ],
    communityCaption:
      "Figures drawn from ONS Census 2021, ONS Labour Market Local, ONS Housing Affordability 2024, the Cambridgeshire & Peterborough Combined Authority, the St Neots Masterplan for Growth, Urban & Civic, Tony Blair Institute (Nov 2024 and Jul 2024), and IPPR's Transformed by AI (Mar 2024). Once the town council, HDC and the CPCA share local insight, every number will be sharpened.",
  },

  anchors: [
    {
      name: "St Neots Town Council",
      role:
        "Parish-level civic authority for the town - custodian of the Market Square, Riverside Park and the annual events calendar",
      use: "The closest civic relationship to residents and the natural convenor for the resident-facing programme.",
    },
    {
      name: "Huntingdonshire District Council",
      role:
        "District authority at Pathfinder House, Huntingdon - planning, regeneration, the Local Plan, Loves Farm Phase 2 and Wintringham",
      use: "Holds the district-scale strategic levers and the relationships with the CPCA and Whitehall.",
    },
    {
      name: "Hinchingbrooke Hospital",
      role:
        "District general hospital for the St Neots catchment, part of North West Anglia NHS Foundation Trust",
      use: "Where AI fluency moves quickest from idea to patient impact - and a major district employer.",
    },
    {
      name: "Bosch Rexroth UK",
      role:
        "UK headquarters at 15 Cromwell Road, St Neots - manufacture of automation, hydraulics and Industry 4.0 systems; 501-1,000 employees",
      use: "The town's largest named private manufacturing employer and a natural partner for the workforce strand.",
    },
    {
      name: "St Mary's Church",
      role:
        "The medieval parish church on the Market Square, known locally as the Cathedral of Huntingdonshire",
      use: "Faith-community anchor and a physical landmark recognised across every demographic in the town.",
    },
    {
      name: "St Neots Library, Priory Lane",
      role:
        "Cambridgeshire County Council library with free PCs, WiFi, study space and community programmes",
      use: "Trusted neutral space for clinics, drop-ins and the older-residents strand.",
    },
    {
      name: "Loves Farm House & The Priory Centre",
      role:
        "Loves Farm community centre at 17 Kester Way, and the town council's main civic venue on Priory Lane (reopening 2026 after refurbishment)",
      use: "The two convening rooms for the cohort programme - one anchored to the new community, one to the town centre.",
    },
    {
      name: "Cambridge Regional College (Huntingdon Campus)",
      role:
        "The primary FE provider serving St Neots 16-18 learners, including the St Neots Town FC Football Scholarship",
      use: "Natural home for teen cohorts, apprenticeships and adult retraining.",
    },
  ],

  segmentArchetypes: {
    typicalCommuter:
      "the project manager on the LNER from St Neots station, laptop open, who needs to explain AI to their employer before the 07:42 reaches King's Cross",
    typicalElder:
      "the retiree at St Neots Library on Priory Lane who attends the weekly coffee morning and worries about whether ChatGPT will read their pension letters",
    typicalTeen:
      "the sixth-former at Astrea Sixth Form, St Neots wondering whether AI will make their BTEC portfolio irrelevant or irresistible",
    typicalIndependent:
      "the indie deli owner on the Market Square who hand-writes the specials board and suspects AI could do their Instagram captions",
    typicalCouncilOfficer:
      "the planning officer at Pathfinder House, Huntingdon, drowning in Loves Farm Phase 2 and Wintringham consultation responses",
  },

  challenges: [
    {
      id: "market-square",
      title: "When is the Market Square about to overflow?",
      pitch:
        "Model real-time footfall on the Market Square, the riverside and the surrounding streets - on Carnival day, Charity Dragon Boat Race weekend, Christmas Lights night, Farm & Craft Market Saturdays. Help indie traders staff up, and help residents pick a good time to visit.",
      why: "The Market Square is the heart of the town and the test bed for everything else. A resident-built tool turns a known frustration into something the town manages with eyes open.",
      owner: "St Neots Town Council + the Town Centre Initiative + market traders",
      first: "See the /worked-example worked prototype.",
      href: "/worked-example",
    },
    {
      id: "commuter-coach",
      title: "An AI coach for the workforce Cambridge leaves behind",
      pitch:
        "Every back-office worker, retail manager and care lead in St Neots gets an hour with an AI coach and a shortlist of AI moves that buy them back a day a week - so the town's productivity rises with Cambridge's, not behind it.",
      why: "Around one in five Huntingdonshire workers sit in the IPPR first-wave exposure categories. They are the same people least likely to benefit from Cambridge's spillover. This is the bridge.",
      owner: "St Neots Town Council + HDC + Cambridge Regional College",
      first: "30-worker pilot with the Workforce AI Diagnostic.",
    },
    {
      id: "engagement",
      title: "Council engagement that spans the three layers",
      pitch:
        "Translate every St Neots Town Council, Huntingdonshire DC and Cambridgeshire & Peterborough Combined Authority paper, minute and decision into a plain-English digest - searchable by ward, topic and impact on you. Close the gap between Pathfinder House, Priory Lane and the kitchen table.",
      why: "St Neots residents have three civic authorities making decisions about them. AI can turn that complexity into clarity - the highest-leverage civic-AI project we could run.",
      owner: "St Neots Town Council + HDC + civic volunteers",
      first: "A weekly digest pilot for the next three full meetings at each layer.",
    },
    {
      id: "wintringham-loves-farm",
      title: "A new-resident concierge for Loves Farm and Wintringham",
      pitch:
        "Build an AI concierge for residents moving into Loves Farm Phase 2 and Wintringham - school catchments, GP registration, bin collection days, the Bands in the Park calendar, the right WhatsApp groups - all the institutional knowledge a 30-year resident has and a new arrival doesn't.",
      why: "St Neots' growth is real - 2,800 homes planned at Wintringham alone - and the integration challenge is the difference between a town and a dormitory.",
      owner: "Urban & Civic + Loves Farm House CIO + St Neots Town Council",
      first: "Pilot with the next 50 Wintringham move-ins.",
    },
    {
      id: "teens",
      title: "Teenagers who build, not just use, AI",
      pitch:
        "Sherpas AI - St Neots edition. Summer work-experience cohorts where 15-18-year-olds ship AI tools for real St Neots organisations - the Foodbank, the Museum, the Town FC, the Priory Centre, the Cancer Network - coached by local alumni.",
      why: "Astrea Sixth Form serves Longsands and Ernulf students who deserve to leave St Neots with shipped AI work on their CVs, not just BTEC theory.",
      owner: "Sherpas AI + Astrea Sixth Form + Longsands Academy + Ernulf Academy",
      first: "Summer 2026 cohort, 18 teens, 4 shipped tools.",
    },
    {
      id: "older",
      title: "Older residents who feel confident, not left behind",
      pitch:
        "Weekly drop-in AI clinics at St Neots Library, Loves Farm House and the Eatons Centre. Warm, patient, jargon-free, deliberately slow. Tea included.",
      why: "St Neots has a large older population, growing village hinterland and a national-scale loneliness conversation. Meet residents where they already are.",
      owner: "Volunteer coaches + Cambridgeshire Libraries + Care Network Cambridgeshire",
      first: "Three weekly clinics, starting first week of the festival.",
    },
    {
      id: "foodbank",
      title: "St Neots Foodbank gets the week back",
      pitch:
        "AI demand forecasting across St Neots Foodbank distribution points so volunteers arrive to a queue they were ready for, and donations are matched to need by postcode, school holiday and event calendar.",
      why: "Cost-of-living pressure is real in St Neots. Demand on the foodbank rises and falls fast; right now matching is done by hand.",
      owner: "St Neots Foodbank + Care Network Cambridgeshire + volunteer engineers",
      first: "8-week pilot at the two highest-traffic distribution points.",
    },
    {
      id: "charities",
      title: "St Neots' charities get a week of staff time back",
      pitch:
        "90-day AI engagements with St Neots Foodbank, Hunts Community Cancer Network, Care Network Cambridgeshire and Huntingdon Mencap that each return one full week of staff time per month to frontline work.",
      why: "Small charities run on goodwill and admin. AI takes the admin - if someone shows them how. The pattern is proven; the cohort is the multiplier.",
      owner: "Cambridgeshire ACRE + AI Night School + AI Optimist",
      first: "4-charity pilot cohort.",
    },
  ],

  priorityItems: [
    {
      id: "market-square",
      title: "Market Square footfall intelligence",
      description:
        "Predict and ease overcrowding on the Market Square on Carnival, Dragon Boat Race, Christmas Lights and Farm & Craft Market days - resident-built.",
      rough: "Worked example ready",
    },
    {
      id: "commuter-coach",
      title: "An AI coach for the workforce Cambridge leaves behind",
      description:
        "Every back-office, retail and care worker in St Neots gets an hour with an AI coach and a shortlist of moves that buy back a day a week.",
      rough: "90-day programme",
    },
    {
      id: "engagement",
      title: "Council engagement across three layers",
      description:
        "Translate St Neots Town Council, HDC and CPCA papers and decisions into plain-English digests so residents can take part in all three.",
      rough: "Flagship civic-AI project",
    },
    {
      id: "wintringham-loves-farm",
      title: "A new-resident concierge for Loves Farm and Wintringham",
      description:
        "An AI concierge for the next thousand families moving into the new estates - school catchments, GPs, refuse, community life, all in one place.",
      rough: "Needs a developer partner",
    },
    {
      id: "teens",
      title: "Teenagers who can build, not just use, AI",
      description:
        "Sherpas AI work-experience cohorts - St Neots teens shipping real AI tools for the Foodbank, the Museum, the Town FC and the Priory Centre.",
      rough: "Runs annually",
    },
    {
      id: "older",
      title: "Older residents feel confident, not left behind",
      description:
        "Weekly drop-in AI clinics at St Neots Library, Loves Farm House and the Eatons Centre - warm, patient and deliberately slow.",
      rough: "Volunteer-led",
    },
    {
      id: "foodbank",
      title: "St Neots Foodbank gets the week back",
      description:
        "AI demand forecasting across St Neots Foodbank distribution points - matching donations to need by postcode, school holiday and event.",
      rough: "Needs a council intro",
    },
    {
      id: "charities",
      title: "St Neots' charities get a week of staff time back",
      description:
        "90-day AI engagements with St Neots Foodbank, Hunts Community Cancer Network, Care Network Cambridgeshire and Huntingdon Mencap.",
      rough: "ACRE-convened",
    },
  ],

  workedExample: {
    slug: "worked-example",
    title: "St Neots Market Square flow",
    shortLabel: "market-square",
    shortDescription:
      "Worked-example prototype showing how St Neots residents can use AI together to take on a real town problem.",
    heroHeadline:
      "Crowding on the Market Square is the first thing AI gives back to the town that lives with it.",
    narrative: [
      "For decades, the people who feel St Neots' busiest days most acutely - the indie traders on the Market Square who can't tell when a Carnival surge is about to hit, the parents whose pram won't fit through the Dragon Boat Race crowd, the older residents who time their visits around guessing where the cars will be - have had no credible way to be heard. The data lives in spreadsheets. The event briefings live in council inboxes. The residents who carry the consequences live with their elbows tucked.",
      "That's the promise of this worked example. StNeots.AI puts the modelling tools, the data literacy and the storytelling skills directly in residents' hands. Coached, not contracted. Owned by the people who actually live here. The Market Square flow project is the first proof that an AI-fluent town can take on its own problems - together - and have its work taken seriously by St Neots Town Council, Huntingdonshire DC and the market traders themselves.",
      "And every method that works for the Market Square ports to the next problem we choose: commuter coaching, council-paper digests, new-resident concierge, foodbank forecasting, charity admin. The Market Square is the proof; the empowerment is the prize.",
    ],
    roles: [
      {
        name: "Residents",
        role: "Annotate the on-the-ground experience - the Carnival squeeze on the south end, the Christmas Lights pinch at the High Street junction, the Dragon Boat Race overflow into Riverside Park. No technical skill required.",
      },
      {
        name: "Sherpas AI teenagers",
        role: "Build the data ingest - HDC car park counts, the LNER station entry data, the town council event calendar, weather, Google Maps busyness. Build the simple model. This is exactly the work they'd do on a summer cohort.",
      },
      {
        name: "AI Night School alumni",
        role: "Apply AI to the analysis and write the resident-facing summary. Own the narrative in the Hunts Post and on Black Cat Radio.",
      },
      {
        name: "Town council & market traders",
        role: "Validate the assumptions, share what data can be shared, and decide the thresholds the alert system uses.",
      },
      {
        name: "AI Optimist (Hugo)",
        role:
          "Coaches the team, keeps the scope honest, and connects the output into wider conversations with HDC and the CPCA.",
      },
    ],
    steps: [
      {
        n: "01",
        title: "Frame the problem with Problemarium",
        body: 'Turn "the Market Square is too busy" into a set of specific, answerable questions - which event days, which hours, which streets, which weather. Each becomes a tractable mini-project.',
      },
      {
        n: "02",
        title: "Gather the data",
        body: "Combine the LNER station entries, HDC car park counts, the town council event calendar, weather and Google Maps busyness as a triangulating signal. Flag where assumptions stand in for missing data.",
      },
      {
        n: "03",
        title: "Model the flow",
        body: "A simple, transparent model - the kind a Sherpas AI cohort can build and explain in a week. Predicts crowd levels for the next four hours, by street segment. Not a black box. Not a million-pound procurement.",
      },
      {
        n: "04",
        title: "Write it up in plain English",
        body: "Translate the output into something a St Neots resident or visitor can read in two minutes - and decide whether to visit now, in twenty minutes, or skip the market and walk Riverside Park instead. AI Night School alumni own the writing.",
      },
      {
        n: "05",
        title: "Publish, invite challenge",
        body: "Share it on the StNeots.AI site, trail it in the Hunts Post and on Black Cat Radio. Invite residents and traders to poke holes. Update transparently. That's the whole point.",
      },
      {
        n: "06",
        title: "Feed into real decisions",
        body: "With the town council and HDC's help, the output gets referenced in event-day planning - so resident work doesn't stay informal.",
      },
    ],
    whyFirst: {
      headline:
        "Because the Market Square has been the heart of St Neots for nine centuries. The town deserves to do the talking about it.",
      body: "The whole point of an AI-fluent town is that residents stop being the audience for civic decisions and start being authors of them. The Market Square is where we prove it, because every St Neots resident already has an opinion, the data is largely public, and the visible signal - when the work lands - is felt on every paving slab between the parish church and the river.",
    },
  },

  residentOffer: {
    speakerSeries: [
      {
        name: "Commuter economy & remote work",
        topic: "AI for the King's Cross and Cambridge workforce",
        blurb:
          "A practitioner's session on the AI moves that actually shift the needle for a project manager, consultant or developer who spends an hour a day on the train - whether their employer is in London, Cambridge or remote.",
      },
      {
        name: "Market town independents",
        topic: "AI for the Market Square and Eaton Socon high street",
        blurb:
          "An honest tour of what's working for indie traders nationally - bookings, marketing, multilingual customer service, inventory - tuned to a St Neots market trader's reality.",
      },
      {
        name: "Public services & local government",
        topic: "AI in town councils, district councils and combined authorities",
        blurb:
          "Drawing on the Tony Blair Institute's work on AI in local government, an honest tour of what's already deployed across UK councils and what it means for St Neots, HDC and the CPCA.",
      },
      {
        name: "Rolling roster",
        topic: "Guest speakers from Hugo's network",
        blurb:
          "Hugo brings one headline speaker a month from the AI Optimist network - exclusively for St Neots residents, in a St Neots room, over a St Neots dinner.",
      },
    ],
    festivalName: "St Neots AI Summer",
    physicalVenueExamples: [
      "The Priory Centre (reopening 2026)",
      "St Neots Library",
      "Loves Farm House",
      "The Eatons Centre",
      "St Neots Museum",
    ],
  },

  councilAssets: [
    {
      title: "Town council social channels",
      body: "St Neots Town Council's Facebook page is the primary real-time civic noticeboard for the town, regularly reaching residents of Loves Farm, Wintringham and Eaton Socon who may not engage with district-level communications. We supply the assets; you decide cadence.",
    },
    {
      title: "Resident e-newsletter",
      body: "HDC distributes a resident e-newsletter via Mailchimp and a separate Town & Parish Councils Newsletter. St Neots Town Council sends its own email updates. Both lists are opt-in and represent a self-selected civic audience already interested in local matters.",
    },
    {
      title: "Direct mail & council tax inserts",
      body: "HDC retains the ability to write to all households in St Neots via council tax bills, planning notices and direct mail drops - particularly valuable for reaching residents on Loves Farm and Wintringham who are new to the area and not yet embedded in community networks.",
    },
    {
      title: "Noticeboards",
      body: "St Neots Town Council maintains physical noticeboards at key points including the Market Square, Loves Farm House and Eaton Socon village centre. These are the primary channel for residents who do not use social media, notably older residents in the Eatons and Eynesbury.",
    },
    {
      title: "Community relationships",
      body: "St Neots Town Council and HDC both have direct relationships with the town's community groups, St Mary's Church and the voluntary sector. The Loves Farm community networks and Riverside Park event organisers can carry programme messaging peer-to-peer.",
    },
    {
      title: "Press & local media",
      body: "The Hunts Post, Cambridgeshire Live and Black Cat Radio (102.5FM/DAB) are the fastest routes to mass local awareness. HDC has a media enquiries team and St Neots Town Council issues regular press releases, making earned coverage straightforward.",
    },
    {
      title: "Council meetings & agendas",
      body: "St Neots Town Council meetings are held in public and attended by residents, community group representatives and local press. Full agendas and minutes are published on stneots-tc.gov.uk. A programme item at a public meeting creates a formal record.",
    },
    {
      title: "Civic events & town moments",
      body: "The council co-organises the Charity Dragon Boat Race, Christmas Lights Switch-On, Bands in the Park and the Farm & Craft Market. These events bring thousands of residents to Riverside Park and the Market Square - the highest-footfall civic touchpoints in the annual calendar.",
    },
    {
      title: "Venues",
      body: "Key hireable venues include the Priory Centre (Great Hall, Guest Hall and river terrace; reopening 2026 after refurbishment), Loves Farm House, the New Street and Eatons Centres, and St Neots Library on Priory Lane for community digital-skills sessions.",
    },
  ],

  councilPartners: [
    "Huntingdonshire District Council",
    "Cambridgeshire & Peterborough Combined Authority (Mayor's office)",
    "Cambridgeshire County Council (libraries, schools transport)",
    "North West Anglia NHS Foundation Trust (Hinchingbrooke Hospital)",
    "Urban & Civic (Wintringham developer)",
    "Loves Farm House CIO",
    "Cambridge Regional College (Huntingdon Campus)",
    "Cambridgeshire ACRE (rural community council)",
    "Bosch Rexroth UK",
    "Jobcentre Plus St Neots",
  ],

  personaPages: {
    teenSchoolExamples: [
      "Longsands Academy",
      "Ernulf Academy",
      "Astrea Sixth Form, St Neots",
      "Kimbolton School",
      "Sawtry Village Academy",
      "Hinchingbrooke School",
    ],
    organisationExamples: [
      {
        org: "St Neots Foodbank",
        problem:
          "Triage referrals faster and match households in crisis to the right support agencies before their three-day emergency parcel runs out.",
      },
      {
        org: "Hunts Community Cancer Network",
        problem:
          "Personalise wellness and exercise recommendations for our 700+ cancer patients so a tiny team reaches more people without burning out.",
      },
      {
        org: "Care Network Cambridgeshire",
        problem:
          "Identify isolated older people in St Neots and surrounding villages who fall through the gaps between NHS discharge and home support.",
      },
      {
        org: "Huntingdon Mencap Society",
        problem:
          "Help adults with learning disabilities in our supported tenancies communicate their preferences and access community services more independently.",
      },
    ],
  },

  seedProblems: [
    {
      organisation: "St Neots Foodbank",
      contactName: "St Neots Foodbank team",
      contactEmail: "info@stneots.foodbank.org.uk",
      shortTitle:
        "Triage referrals and match households to the right support before the parcel runs out",
      description:
        "Referrals arrive from across St Neots and the surrounding villages - the town centre, Loves Farm, Eatons, Eynesbury, Eaton Socon - with different needs, urgency levels and onward signposts. Right now we triage by hand. Could AI help us route referrals to the right support on first contact, with the onward signpost attached, so no household waits more than 24 hours in crisis?",
      whoFeelsIt:
        "Volunteers at the front desk, the households who arrive on the wrong day, and our trustees watching Huntingdonshire's cost-of-living figures rise.",
      alreadyTried:
        "A shared spreadsheet. A WhatsApp group. A volunteer rota. They each help, but none of them solve the triage problem at town scale.",
      successIn90Days:
        "An AI-assisted triage assistant that routes 70%+ of referrals to the right support on first contact and cuts the wait to the right signpost in half.",
      tags: ["food", "triage", "demo-seed"],
    },
    {
      organisation: "Hunts Community Cancer Network",
      contactName: "HCCN team",
      contactEmail: "info@hccn.co.uk",
      shortTitle:
        "Personalise wellness and exercise recommendations for 700+ cancer patients",
      description:
        "HCCN supports cancer patients across Huntingdonshire with exercise, wellness and peer-support programmes. Our team is tiny; demand is rising. Could AI help us personalise wellness and exercise recommendations for each patient - adapted to their treatment phase, their preferences, their local options - so we reach more people without burning out?",
      whoFeelsIt:
        "Every patient on a six-week wait for a one-to-one. Every volunteer organising the same WhatsApp group thread for the fifth time.",
      alreadyTried:
        "Group sessions, peer-led WhatsApp, paper recommendations. Useful, but the personalisation gap is widening.",
      successIn90Days:
        "An AI-assisted wellness recommendation tool that returns a personalised weekly plan for each patient in under a minute, validated by an HCCN coach, with measurable engagement uplift.",
      tags: ["health", "wellness", "personalisation", "demo-seed"],
    },
  ],

  manager: {
    name: "James Maclaine",
    emailAlias: "hugo+stneotsai@ainightschool.org",
  },

  externalLinks: {
    aiFellowship: "https://www.ainightschool.org/ai-leaders-fellowship", // TODO: confirm canonical URL
    summerOfAi: "https://www.startupsherpas.co.uk/summer-of-ai-st-neots", // TODO: confirm Sherpas has a St Neots-specific page
  },

  localSpeakers: [], // TODO: add named St Neots speakers; empty hides the section

  contact: {
    email: "hugo+stneotsai@ainightschool.org",
  },
};
