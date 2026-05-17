// Town.AI - place schema (v1).
//
// This is the contract for the per-place content config. Adding a
// new tenant means: write a TypeScript file at places/<slug>.ts
// that satisfies `Place`. Universal IA, components, and brand
// styling stay the same; only the values in this config change.
//
// The schema is also the contract Hugo's content-research prompt
// is targeting. Every field here should be answerable from a
// thoughtful research pass on a council and its town. Optional
// fields are explicitly marked.

export type PlaceSlug = string;

// ---------------------------------------------------------------------
// Reusable shapes
// ---------------------------------------------------------------------

export type StatTile = {
  /** Headline number, e.g. "31,128" or "60.5%". */
  value: string;
  /** Sentence-case explanation of what the number measures. */
  label: string;
  /** Citable source, shown as a small caption. */
  source: string;
};

export type Anchor = {
  /** Named local institution. e.g. "Rothamsted Research". */
  name: string;
  /** One-clause role label. */
  role: string;
  /** What it means for the programme. e.g. "a natural partner". */
  use: string;
};

export type Challenge = {
  id: string;
  title: string;
  pitch: string;
  why: string;
  owner: string;
  first: string;
  /** Optional in-app link, e.g. to the worked-example page. */
  href?: string;
};

/** A short version used in the homepage / challenges interactive picker. */
export type PriorityItem = {
  id: string;
  title: string;
  description: string;
  /** A short labelling phrase, e.g. "Worked example ready". */
  rough: string;
};

export type SeedProblem = {
  organisation: string;
  contactName: string;
  contactEmail: string;
  shortTitle: string;
  description: string;
  whoFeelsIt: string;
  alreadyTried?: string;
  successIn90Days: string;
  tags: string[];
};

export type WorkedExample = {
  /** Slug used by the page route, e.g. "worked-example". */
  slug: string;
  /** Display title, e.g. "Harpenden Traffic". */
  title: string;
  /** Short footer / nav label, e.g. "traffic". */
  shortLabel: string;
  /** One-sentence description for cards / nav. */
  shortDescription: string;
  /** Page hero H1 - hand-written so it lands properly per place. */
  heroHeadline: string;
  /** Optional external URL where the live tool lives. */
  liveToolUrl?: string;
  /** Optional human label for the live-tool button. */
  liveToolLabel?: string;
  /** Three paragraphs of the empowerment narrative for the page hero. */
  narrative: [string, string, string];
  /** Roles cards on the worked-example page. */
  roles: { name: string; role: string }[];
  /** Six-step method cards on the worked-example page. */
  steps: { n: string; title: string; body: string }[];
  /** Final "why this one first" framing for the closing section. */
  whyFirst: { headline: string; body: string };
};

export type CouncilAsset = {
  title: string;
  body: string;
};

export type Speaker = {
  name: string;
  topic: string;
  blurb: string;
};

// ---------------------------------------------------------------------
// Top-level Place
// ---------------------------------------------------------------------

export type CouncilType =
  | "town"
  | "parish"
  | "district"
  | "borough"
  | "city"
  | "unitary"
  | "county";

export type ThesisAngle =
  | "commuter-displacement"
  | "rural-decline"
  | "youth-retention"
  | "high-street-decline"
  | "industrial-transition"
  | "entrepreneurial-cluster";

export type Place = {
  // -----------------------------------------------------------------
  // Identity
  // -----------------------------------------------------------------
  slug: PlaceSlug;
  /** Short display name. e.g. "Harpenden". */
  name: string;
  /** Formal long form. e.g. "Harpenden, Hertfordshire". */
  formalName: string;
  /** Wordmark. e.g. "Harpenden.AI". */
  wordmark: string;
  /** Wordmark accent dot character, almost always ".". */
  wordmarkAccent: string;
  /** Apex domain hint shown in the site, e.g. "harpenden.ai". */
  domainHint: string;
  /**
   * Singular noun for the place itself - "town", "city", "district",
   * "borough", "county", "neighbourhood". Used wherever site copy
   * refers to "your town" / "your city" / "your county". This is
   * about the *place*, not the *council type* - High Town is a
   * "neighbourhood" even though Luton Borough Council is a borough.
   */
  placeNoun: string;

  // -----------------------------------------------------------------
  // The council
  // -----------------------------------------------------------------
  council: {
    /** Formal name. e.g. "Harpenden Town Council". */
    name: string;
    /** Short form for inline use. e.g. "the council". */
    shortName: string;
    type: CouncilType;
    /** Council homepage URL. */
    website: string;
    /** Local press / civic outlets the council can pull on. */
    pressOutlets: string[];
    /** Civic events to lean on (carnival, switch-on, mayoral
     *  engagements, etc.). */
    civicEvents: string[];
  };

  // -----------------------------------------------------------------
  // The thesis (the "why this place specifically")
  // -----------------------------------------------------------------
  thesis: {
    eyebrow: string;
    headline: string;
    /** 3-4 paragraphs telling the place's risk story. */
    paragraphs: string[];
    angle: ThesisAngle;
    /** A pull quote / second-question framing for the homepage. */
    secondQuestion: {
      eyebrow: string;
      body: string;
    };
  };

  // -----------------------------------------------------------------
  // Hero meta
  // -----------------------------------------------------------------
  hero: {
    /** Pills shown above the H1, e.g. ["Harpenden, Hertfordshire", "A vision for the town council", "Summer 2026"]. */
    pills: string[];
    /** H1 text - may include a coloured span. Authored as parts. */
    headline: {
      lead: string;       // "What happens when "
      emphasis: string;   // "everyone"
      tail: string;       // " in your community is fluent in AI?"
    };
    /** Lede paragraph. */
    lede: string;
    /** "Two questions" big card on the homepage. */
    bigQuestion: {
      eyebrow: string;
      body: string;
    };
  };

  // -----------------------------------------------------------------
  // Stats - 4 hero tiles + 8 community-page tiles
  // -----------------------------------------------------------------
  stats: {
    hero: StatTile[];          // 4 tiles
    community: StatTile[];     // 8 tiles
    /** Caption shown beneath the community-page stat block. */
    communityCaption: string;
  };

  // -----------------------------------------------------------------
  // Local geography
  // -----------------------------------------------------------------
  anchors: Anchor[];           // 6-8

  // -----------------------------------------------------------------
  // Five-segment archetypes - small overrides into universal cards
  // -----------------------------------------------------------------
  segmentArchetypes: {
    /** "the marketing director on the 07:42" - replaces in sections that name a typical commuter. */
    typicalCommuter: string;
    /** "the retiree at the Leisure Centre". */
    typicalElder: string;
    /** "the teenager at Roundwood". */
    typicalTeen: string;
    /** "the butcher on the High Street". */
    typicalIndependent: string;
    /** "the clerk at the Town Hall". */
    typicalCouncilOfficer: string;
  };

  // -----------------------------------------------------------------
  // Community challenges
  // -----------------------------------------------------------------
  /** 6-8 problems for /challenges. */
  challenges: Challenge[];
  /** 6-8 priorities for the homepage interactive picker (typically a subset / re-shape of challenges). */
  priorityItems: PriorityItem[];

  // -----------------------------------------------------------------
  // The worked example
  // -----------------------------------------------------------------
  workedExample: WorkedExample;

  // -----------------------------------------------------------------
  // Resident-only offer specifics
  // -----------------------------------------------------------------
  residentOffer: {
    /** Speakers in the residents-only series. */
    speakerSeries: Speaker[];
    /** Festival name, e.g. "Harpenden AI Summer". */
    festivalName: string;
    /** 3-6 in-person venue examples for the festival / clinics. */
    physicalVenueExamples: string[];
  };

  // -----------------------------------------------------------------
  // Council partnership
  // -----------------------------------------------------------------
  /** Asset cards on /council ("we'd use these together"). */
  councilAssets: CouncilAsset[];
  /** Named partner organisations the council is asked to introduce. */
  councilPartners: string[];

  // -----------------------------------------------------------------
  // Persona-page bits (small place-specific touches)
  // -----------------------------------------------------------------
  personaPages: {
    /** School-name examples used as placeholders in the teen sign-up form. */
    teenSchoolExamples: string[];
    /** Examples used in /our-organisation as worked org examples. */
    organisationExamples: { org: string; problem: string }[];
  };

  // -----------------------------------------------------------------
  // Seed data for /community-projects
  // -----------------------------------------------------------------
  seedProblems: SeedProblem[];

  // -----------------------------------------------------------------
  // Optional brand override
  // -----------------------------------------------------------------
  brand?: {
    /** Override Tailwind `lime` accent. Hex string. */
    accentColour?: string;
    /** Optional council logo URL for the council page. */
    councilLogoUrl?: string;
    /** Optional crest / badge for the header. */
    crestUrl?: string;
  };

  // -----------------------------------------------------------------
  // Contact
  // -----------------------------------------------------------------
  contact: {
    /** mailto target for "email Hugo" CTAs, with subject pre-filled per place. */
    email: string;
    /** Optional council-meeting-booking URL (calendar / typeform). */
    bookingUrl?: string;
  };
};
