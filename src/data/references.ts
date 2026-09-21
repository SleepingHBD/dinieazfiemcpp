export interface ReferenceLink {
  url: string;
  label?: string;
}

export interface Reference {
  author: string;
  year: number;
  title: string;
  format: "article" | "standalone";
  publication?: string;
  details?: string;
  links: ReferenceLink[];
  accessed: string;
}

// A single record per work, shared by article lists and the combined bibliography.
// Access dates were assigned to a user-requested timeline; they are not verified browsing records.
export const references = {
  airbnb2020: {
    author: "Airbnb", year: 2020,
    title: "A message from Co-Founder and CEO Brian Chesky",
    format: "article", publication: "Airbnb Newsroom", details: "5 May",
    links: [{ url: "https://news.airbnb.com/a-message-from-co-founder-and-ceo-brian-chesky" }],
    accessed: "17 September 2026",
  },
  chouinard2022: {
    author: "Chouinard, Y.", year: 2022,
    title: "Earth is now our only shareholder",
    format: "article", publication: "Patagonia", details: "14 September",
    links: [{ url: "https://www.patagonia.com/ownership/" }],
    accessed: "7 September 2026",
  },
  cna2024: {
    author: "CNA", year: 2024,
    title: "SQ321 turbulence: Singapore Airlines apologises after injured passenger complains about carrier’s silence",
    format: "article", details: "23 May",
    links: [{ url: "https://www.channelnewsasia.com/singapore/sq321-turbulence-singapore-airlines-apology-injured-passenger-complaint-lack-information-4358606" }],
    accessed: "14 September 2026",
  },
  coombs2007: {
    author: "Coombs, W.T.", year: 2007,
    title: "Protecting organization reputations during a crisis: The development and application of Situational Crisis Communication Theory",
    format: "article", publication: "Corporate Reputation Review", details: "10(3), pp. 163–176",
    links: [
      { label: "DOI", url: "https://doi.org/10.1057/palgrave.crr.1550049" },
      { label: "Full-text PDF", url: "https://scispace.com/pdf/protecting-organization-reputations-during-a-crisis-the-c56nbgq8xa.pdf" },
    ],
    accessed: "15 September 2026",
  },
  dbs2026: {
    author: "DBS", year: 2026,
    title: "Annual Report 2025: A Beacon of Stability",
    format: "standalone", details: "Singapore: DBS Group Holdings Ltd",
    links: [
      { label: "PDF", url: "https://www.dbs.com/annualreports/2025/i/pdf/dbs-ar-2025.pdf" },
      { label: "Interactive edition", url: "https://www.dbs.com/annualreports/2025/index.html" },
    ],
    accessed: "21 September 2026",
  },
  greenBrock2000: {
    author: "Green, M.C. and Brock, T.C.", year: 2000,
    title: "The role of transportation in the persuasiveness of public narratives",
    format: "article", publication: "Journal of Personality and Social Psychology", details: "79(5), pp. 701–721",
    links: [
      { label: "DOI", url: "https://doi.org/10.1037/0022-3514.79.5.701" },
      { label: "Full-text PDF", url: "https://www.communicationcache.com/uploads/1/0/8/8/10887248/the_role_of_transportation_in_the_persuasiveness_of_public_narratives.pdf" },
    ],
    accessed: "8 September 2026",
  },
  harrison2015: {
    author: "Harrison, J.S., Freeman, R.E. and de Abreu, M.C.S.", year: 2015,
    title: "Stakeholder theory as an ethical approach to effective management: applying the theory to multiple contexts",
    format: "article", publication: "Review of Business Management", details: "17(55), pp. 858–869",
    links: [
      { label: "DOI", url: "https://doi.org/10.7819/rbgn.v17i55.2647" },
      { label: "Full-text PDF", url: "https://www.scielo.br/j/rbgn/a/sWQfK377tPNwVLMWt46zhsv/?format=pdf&lang=en" },
    ],
    accessed: "20 September 2026",
  },
  patagonia2011: {
    author: "Patagonia", year: 2011,
    title: "Don’t Buy This Jacket, Black Friday and the New York Times",
    format: "article", publication: "Patagonia Stories", details: "25 November (updated with notes in 2022)",
    links: [{ url: "https://www.patagonia.com/stories/planet/activism/dont-buy-this-jacket-black-friday-and-the-new-york-times/story-18615.html" }],
    accessed: "9 September 2026",
  },
  patagonia2025: {
    author: "Patagonia", year: 2025,
    title: "Work in Progress Report 2025", format: "standalone",
    links: [{ url: "https://www.patagonia.com/progress-report/" }],
    accessed: "9 September 2026",
  },
  sia2024: {
    author: "Singapore Airlines", year: 2024,
    title: "SIA Annual General Meeting 2024: Presentation by the Chief Executive Officer",
    format: "standalone", details: "[Presentation], 29 July",
    links: [{ url: "https://www.singaporeair.com/content/dam/sia/web-assets/pdfs/about-us/information-for-investors/agm-egm/2024/AGM_2024_CEO_Presentation.pdf" }],
    accessed: "16 September 2026",
  },
  tan2024: {
    author: "Tan, M.-W.", year: 2024,
    title: "SIA CEO apologises to SQ321 passengers for “traumatic experience”",
    format: "article", publication: "Mothership", details: "22 May",
    links: [{ url: "https://mothership.sg/2024/05/sia-ceo-sq321-apology/" }],
    accessed: "14 September 2026",
  },
  welchJackson2007: {
    author: "Welch, M. and Jackson, P.R.", year: 2007,
    title: "Rethinking internal communication: a stakeholder approach",
    format: "article", publication: "Corporate Communications: An International Journal", details: "12(2), pp. 177–198",
    links: [
      { label: "DOI", url: "https://doi.org/10.1108/13563280710744847" },
      { label: "Author-uploaded full text", url: "https://www.researchgate.net/publication/242085269_Rethinking_internal_communication_a_stakeholder_approach" },
    ],
    accessed: "18 September 2026",
  },
} satisfies Record<string, Reference>;

export type ReferenceId = keyof typeof references;

export function getReferences(ids: readonly ReferenceId[]): Reference[] {
  return [...new Set(ids)].map((id) => references[id]).sort((a, b) =>
    a.author.localeCompare(b.author, "en-GB") || a.year - b.year || a.title.localeCompare(b.title, "en-GB")
  );
}

export const allReferences = getReferences(Object.keys(references) as ReferenceId[]);
