export type ArticleVariant = "field" | "crisis" | "memo" | "report";

export interface SourceEntry {
  label: string;
  url: string;
}

export interface TextRun {
  text: string;
  href?: string;
  strong?: boolean;
  emphasis?: boolean;
}

export type ArticleBodyBlock =
  | { type: "paragraph" | "lead" | "question" | "conclusion"; runs: TextRun[] }
  | { type: "theory"; name: string; citation: string; sourceUrl: string; runs: TextRun[] }
  | { type: "feature" };

export type ArticleFeature = (
  | {
      type: "ownership";
      company: string;
      period: string;
      routes: { title: string; detail: string }[];
      statistics: { value: string; label: string }[];
    }
  | {
      type: "timeline";
      steps: {
        date: string;
        dateTime: string;
        title: string;
        detail?: string;
        perspective: "event" | "airline" | "passenger";
        later?: boolean;
      }[];
    }
  | {
      type: "memo";
      quote: string;
      attribution: string;
      supportGroups: { title: string; items: string[] }[];
    }
  | {
      type: "report";
      value: string;
      label: string;
      stakeholders: string[];
      focusCategory: string;
      note: string;
    }
) & { sources: SourceEntry[] };

export interface Article {
  slug: string;
  articleNumber: string;
  title: string;
  subtitle: string;
  category: string;
  caseStudy: string;
  date: string;
  readTime: string;
  heroImage: string;
  imageAlt: string;
  excerpt: string;
  variant: ArticleVariant;
  body: ArticleBodyBlock[];
  feature: ArticleFeature;
  marginNotes: string[];
  sources: SourceEntry[];
}

const text = (value: string): TextRun => ({ text: value });
const strong = (value: string): TextRun => ({ text: value, strong: true });
const emphasis = (value: string): TextRun => ({ text: value, emphasis: true });
const link = (value: string, href: string, options: Pick<TextRun, "strong" | "emphasis"> = {}): TextRun => ({ text: value, href, ...options });

export const articles: Article[] = [
  {
    slug: "patagonia-corporate-storytelling",
    articleNumber: "01",
    title: "When Companies Try to Look Human",
    subtitle: "Patagonia, corporate storytelling and the question of authenticity",
    category: "Corporate Storytelling",
    caseStudy: "Patagonia",
    date: "22.09.26",
    readTime: "4 min read",
    heroImage: "/images/patagonia-storytelling.webp",
    imageAlt: "A person repairing a weathered outdoor jacket beside a rugged coastline",
    excerpt: "How Patagonia turns a complex ownership structure into a story of purpose — and where that story still needs qualification.",
    variant: "field",
    body: [
      {
        type: "lead",
        runs: [strong("“Earth is now our only shareholder.”"), text(" It’s a memorable line, but it leaves me with a fairly basic question: who actually owns the company?")],
      },
      {
        type: "paragraph",
        runs: [
          text("Patagonia’s "),
          link("2022 announcement", "https://www.patagonia.com/ownership/"),
          text(" explains that voting shares went to the Patagonia Purpose Trust and non-voting shares to the Holdfast Collective. Excess profits, after reinvestment and reserves, would support environmental work (Chouinard, 2022)."),
        ],
      },
      {
        type: "paragraph",
        runs: [text("The headline makes a complicated arrangement approachable. The founder’s letter then explains his search for a way to protect the company’s values, including why he rejected selling the business or taking it public (Chouinard, 2022). Rather than just announcing a decision, he takes readers through the problem behind it.")],
      },
      {
        type: "theory",
        name: "Narrative transportation",
        citation: "Green and Brock (2000, pp. 701–702)",
        sourceUrl: "https://www.communicationcache.com/uploads/1/0/8/8/10887248/the_role_of_transportation_in_the_persuasiveness_of_public_narratives.pdf",
        runs: [text("Green and Brock’s (2000, pp. 701–702) concept of narrative transportation helps explain the potential appeal. It describes becoming absorbed in a story through attention, emotion and mental imagery. I can see how following Chouinard’s dilemma could draw readers into his perspective. That is a possible explanation of its persuasiveness, though, not evidence that Patagonia’s readers actually experienced it.")],
      },
      {
        type: "paragraph",
        runs: [
          text("What gives me more to assess is the "),
          link("2025 ", "https://www.patagonia.com/progress-report/"),
          link("Work in Progress Report", "https://www.patagonia.com/progress-report/", { emphasis: true }),
          text(". Patagonia reports repairing 174,799 products globally during FY25, while acknowledging that around 85% of its products lacked an end-of-life solution (Patagonia, 2025)."),
        ],
      },
      { type: "feature" },
      {
        type: "paragraph",
        runs: [text("Including both figures makes the report more useful to me than a list of achievements. It gives readers something to question, although Patagonia still chooses what to disclose.")],
      },
      {
        type: "conclusion",
        runs: [text("The two formats do different jobs: the letter makes the purpose understandable, while the report gives it detail. I would keep them together rather than let the headline stand on its own. Earth does not literally hold the shares, and the environmental work is clearly unfinished. "), strong("Those qualifications are part of the story too.")],
      },
    ],
    feature: {
      type: "ownership",
      sources: [
        { label: "Ownership announcement (2022)", url: "https://www.patagonia.com/ownership/" },
        { label: "Progress report (2025)", url: "https://www.patagonia.com/progress-report/" },
      ],
      company: "Patagonia",
      period: "Ownership, 2022",
      routes: [
        { title: "Patagonia Purpose Trust", detail: "Voting shares" },
        { title: "Holdfast Collective", detail: "Non-voting shares" },
      ],
      statistics: [
        { value: "174,799", label: "Products repaired globally during FY25" },
        { value: "≈85%", label: "Products reported without an end-of-life solution" },
      ],
    },
    marginNotes: ["Who actually owns the company?", "Story first. Evidence next."],
    sources: [
      { label: "Chouinard, Y. (2022) ‘Earth is now our only shareholder’, Patagonia, 14 September. Accessed 21 September 2026.", url: "https://www.patagonia.com/ownership/" },
      { label: "Green, M.C. and Brock, T.C. (2000) ‘The role of transportation in the persuasiveness of public narratives’, Journal of Personality and Social Psychology, 79(5), pp. 701–721. doi: 10.1037/0022-3514.79.5.701. Accessed 21 September 2026.", url: "https://doi.org/10.1037/0022-3514.79.5.701" },
      { label: "Patagonia (2025) Work in Progress Report 2025. Accessed 21 September 2026.", url: "https://www.patagonia.com/progress-report/" },
    ],
  },
  {
    slug: "singapore-airlines-crisis-communication",
    articleNumber: "02",
    title: "When Things Go Wrong",
    subtitle: "Singapore Airlines SQ321 and the limits of a public apology",
    category: "Crisis Communication",
    caseStudy: "Singapore Airlines SQ321",
    date: "29.09.26",
    readTime: "4 min read",
    heroImage: "/images/singapore-airlines-crisis.webp",
    imageAlt: "Airline operations staff reviewing updates at an airport gate",
    excerpt: "What SQ321 shows about the difference between a public apology and useful information for affected passengers.",
    variant: "crisis",
    body: [
      {
        type: "lead",
        runs: [text("A public apology and a useful answer are not always the same thing. Singapore Airlines’ response to SQ321 made that distinction stand out to me.")],
      },
      {
        type: "paragraph",
        runs: [
          text("On "), strong("22 May 2024"), text(", following the previous day’s turbulence incident in which one passenger died and others were injured, chief executive Goh Choon Phong appeared in a "),
          link("social-media video", "https://mothership.sg/2024/05/sia-ceo-sq321-apology/"),
          text(". He apologised for passengers’ “traumatic experience” and promised assistance (Tan, 2024)."),
        ],
      },
      {
        type: "paragraph",
        runs: [text("That wording acknowledges what people went through instead of describing the incident as an inconvenience. Having the CEO speak also makes leadership visible. For the wider public, it provides a direct acknowledgement from the airline.")],
      },
      { type: "feature" },
      {
        type: "question",
        runs: [strong("But what about someone waiting for answers in hospital?")],
      },
      {
        type: "theory",
        name: "Situational crisis communication theory",
        citation: "Coombs (2007, p. 165)",
        sourceUrl: "https://doi.org/10.1057/palgrave.crr.1550049",
        runs: [text("Coombs’ (2007) situational crisis communication theory links responses to the responsibility stakeholders attribute to an organisation. He also puts affected people’s physical and psychological needs before reputation protection (Coombs, 2007, p. 165). For SQ321, I would separate blame for the incident from SIA’s responsibility to keep passengers informed.")],
      },
      {
        type: "paragraph",
        runs: [
          text("On 23 May, "), link("CNA reported", "https://www.channelnewsasia.com/singapore/sq321-turbulence-singapore-airlines-apology-injured-passenger-complaint-lack-information-4358606"),
          text(" that passenger Keith Davis felt left without answers about insurance and his wife’s medical evacuation. SIA apologised and said a customer-care representative had been providing updates and assistance (CNA, 2024)."),
        ],
      },
      {
        type: "paragraph",
        runs: [
          text("The airline’s later "), link("AGM presentation", "https://www.singaporeair.com/content/dam/sia/web-assets/pdfs/about-us/information-for-investors/agm-egm/2024/AGM_2024_CEO_Presentation.pdf#page=5"),
          text(" describes medical support and reviews of turbulence procedures (Singapore Airlines, 2024, slide 5). Those actions support its public commitment, but do not establish how clearly information reached each passenger."),
        ],
      },
      {
        type: "paragraph",
        runs: [text("One account cannot represent everyone’s experience. Still, comparing the public statement with this report shows why I would not assess the response from the video alone.")],
      },
      {
        type: "conclusion",
        runs: [text("For me, effective crisis communication would also mean knowing whom to contact, what support was available and when to expect another update. The apology matters, but "), strong("a passenger should not have to rely on the same information as someone watching the news.")],
      },
    ],
    feature: {
      type: "timeline",
      sources: [
        { label: "Mothership", url: "https://mothership.sg/2024/05/sia-ceo-sq321-apology/" },
        { label: "CNA", url: "https://www.channelnewsasia.com/singapore/sq321-turbulence-singapore-airlines-apology-injured-passenger-complaint-lack-information-4358606" },
        { label: "SIA AGM, slide 5", url: "https://www.singaporeair.com/content/dam/sia/web-assets/pdfs/about-us/information-for-investors/agm-egm/2024/AGM_2024_CEO_Presentation.pdf#page=5" },
      ],
      steps: [
        { date: "21 May 2024", dateTime: "2024-05-21", title: "SQ321 turbulence", perspective: "event" },
        { date: "22 May 2024", dateTime: "2024-05-22", title: "CEO apology", detail: "Acknowledgement and a promise of assistance", perspective: "airline" },
        { date: "23 May 2024", dateTime: "2024-05-23", title: "Information concerns", detail: "CNA reports a passenger’s unanswered questions", perspective: "passenger" },
        { date: "29 July 2024", dateTime: "2024-07-29", title: "Later: AGM update", detail: "Support and procedure reviews outlined", perspective: "airline", later: true },
      ],
    },
    marginNotes: ["An apology is not the whole response.", "Who needs information first?"],
    sources: [
      { label: "Tan, M.-W. (2024) ‘SIA CEO apologises to SQ321 passengers for “traumatic experience”’, Mothership, 22 May. Accessed 21 September 2026.", url: "https://mothership.sg/2024/05/sia-ceo-sq321-apology/" },
      { label: "Coombs, W.T. (2007) ‘Protecting organization reputations during a crisis: The development and application of Situational Crisis Communication Theory’, Corporate Reputation Review, 10(3), pp. 163–176. doi: 10.1057/palgrave.crr.1550049. Accessed 21 September 2026.", url: "https://doi.org/10.1057/palgrave.crr.1550049" },
      { label: "CNA (2024) ‘SQ321 turbulence: Singapore Airlines apologises after injured passenger complains about carrier’s silence’, 23 May. Accessed 21 September 2026.", url: "https://www.channelnewsasia.com/singapore/sq321-turbulence-singapore-airlines-apology-injured-passenger-complaint-lack-information-4358606" },
      { label: "Singapore Airlines (2024) SIA Annual General Meeting 2024: Presentation by the Chief Executive Officer, 29 July.", url: "https://www.singaporeair.com/content/dam/sia/web-assets/pdfs/about-us/information-for-investors/agm-egm/2024/AGM_2024_CEO_Presentation.pdf" },
    ],
  },
  {
    slug: "airbnb-internal-communication",
    articleNumber: "03",
    title: "Talking to the People Inside",
    subtitle: "Airbnb and communicating a decision nobody wants to hear",
    category: "Internal Communication",
    caseStudy: "Airbnb employee layoffs",
    date: "06.10.26",
    readTime: "4 min read",
    heroImage: "/images/airbnb-internal.webp",
    imageAlt: "A remote employee reading a long internal message at a kitchen table",
    excerpt: "How Airbnb’s 2020 layoff letter balanced empathy, practical detail and competing internal and public audiences.",
    variant: "memo",
    body: [
      {
        type: "lead",
        runs: [text("How do you tell someone they are losing their job without sounding as though you are mainly protecting the company?")],
      },
      {
        type: "paragraph",
        runs: [
          text("In Airbnb’s "), link("May 2020 employee letter", "https://news.airbnb.com/a-message-from-co-founder-and-ceo-brian-chesky"),
          text(", Brian Chesky announced that nearly 1,900 employees would leave, around a quarter of the workforce. One sentence caught my attention: "), strong("“Please know this is not your fault”"), text(" (Airbnb, 2020)."),
        ],
      },
      {
        type: "paragraph",
        runs: [text("It separates the business decision from an employee’s sense of personal failure. But I would find that reassurance rather empty without practical information.")],
      },
      {
        type: "paragraph",
        runs: [text("The letter sets out severance, healthcare and job-search support under clear headings. Employees can return to the written details, while planned individual conversations and a company Q&A offer opportunities to ask questions (Airbnb, 2020).")],
      },
      { type: "feature" },
      {
        type: "theory",
        name: "A stakeholder approach to internal communication",
        citation: "Welch and Jackson (2007, pp. 183–184)",
        sourceUrl: "https://www.researchgate.net/publication/242085269_Rethinking_internal_communication_a_stakeholder_approach",
        runs: [text("Welch and Jackson’s (2007, pp. 183–184) stakeholder approach to internal communication challenges treating employees as one uniform audience. Applying that distinction here, someone leaving needs information about their departure and support; someone staying may be worried about their role and the company’s future.")],
      },
      {
        type: "paragraph",
        runs: [text("Airbnb addresses both groups and explains that arrangements differ between countries (Airbnb, 2020). That makes the message more responsive to employees’ circumstances.")],
      },
      {
        type: "paragraph",
        runs: [text("Still, the language about belonging is awkward in a letter announcing layoffs. It could reassure some employees while feeling difficult to accept for others. Their accounts would be needed to judge how it actually landed.")],
      },
      {
        type: "paragraph",
        runs: [text("There is also a second audience: the letter appears in Airbnb’s public Newsroom, where outsiders can assess its treatment of staff (Airbnb, 2020). An internal message becomes part of its external reputation.")],
      },
      {
        type: "conclusion",
        runs: [text("What I take from this is the importance of answering different people’s questions. A warm tone helps, but "), strong("employees should not have to search through it to work out what happens to them next.")],
      },
    ],
    feature: {
      type: "memo",
      sources: [{ label: "Employee letter / 5 May 2020", url: "https://news.airbnb.com/a-message-from-co-founder-and-ceo-brian-chesky" }],
      quote: "Please know this is not your fault.",
      attribution: "Brian Chesky · Employee letter, 5 May 2020",
      supportGroups: [
        { title: "Practical support", items: ["Severance", "Healthcare", "Job-search support"] },
        { title: "Questions & conversations", items: ["Individual conversations", "Company Q&A"] },
      ],
    },
    marginNotes: ["Employees first. Public second.", "Empathy needs practical detail."],
    sources: [
      { label: "Airbnb (2020) ‘A message from Co-Founder and CEO Brian Chesky’, Airbnb Newsroom, 5 May. Accessed 21 September 2026.", url: "https://news.airbnb.com/a-message-from-co-founder-and-ceo-brian-chesky" },
      { label: "Welch, M. and Jackson, P.R. (2007) ‘Rethinking internal communication: a stakeholder approach’, Corporate Communications: An International Journal, 12(2), pp. 177–198. doi: 10.1108/13563280710744847. Accessed 21 September 2026.", url: "https://doi.org/10.1108/13563280710744847" },
    ],
  },
  {
    slug: "dbs-stakeholder-communication",
    articleNumber: "04",
    title: "When Reporting Becomes Reputation",
    subtitle: "DBS and the story behind the numbers",
    category: "Stakeholder Communication",
    caseStudy: "DBS Annual Report",
    date: "13.10.26",
    readTime: "4 min read",
    heroImage: "/images/dbs-reporting.webp",
    imageAlt: "An analyst annotating an annual report with charts beside the Singapore skyline",
    excerpt: "How DBS uses metaphor, labels and selected figures to frame stability and stakeholder value in its annual report.",
    variant: "report",
    body: [
      {
        type: "lead",
        runs: [
          text("A lighthouse is not what I would expect on the cover of a bank’s annual report. Yet DBS places one beneath the title "), emphasis("A Beacon of Stability"), text(" in its "),
          link("2025 report", "https://www.dbs.com/annualreports/2025/i/pdf/dbs-ar-2025.pdf"), text(" (DBS, 2026). Before reaching the figures, I am already being offered an image of reassurance."),
        ],
      },
      {
        type: "paragraph",
        runs: [text("That makes the report interesting as communication, not just a financial document.")],
      },
      {
        type: "theory",
        name: "Stakeholder theory",
        citation: "Harrison, Freeman and de Abreu (2015, p. 859)",
        sourceUrl: "https://rbgn.fecap.br/RBGN/article/download/2647/pdf/20848#page=2",
        runs: [text("Harrison, Freeman and de Abreu (2015, p. 859) explain that stakeholder theory considers the interests and wellbeing of groups such as employees, customers and suppliers alongside shareholders. It gives me a useful question for DBS: whose interests does the report make visible, and how does it describe the benefits they receive?")],
      },
      {
        type: "paragraph",
        runs: [
          text("On "), link("printed page 72", "https://www.dbs.com/annualreports/2025/i/pdf/dbs-ar-2025.pdf#page=38"),
          text(", a diagram allocates SGD14.9 billion in financial value created during 2025 between employees, society, shareholders and retained earnings. The explanation beneath “society” includes taxes and money set aside for corporate social responsibility (DBS, 2026, p. 72)."),
        ],
      },
      { type: "feature" },
      {
        type: "paragraph",
        runs: [text("That detail is worth slowing down for. I might initially read “society” as community giving, but the category is broader than donations. The definition is there; the risk is relying on the impression of the label without reading it.")],
      },
      {
        type: "paragraph",
        runs: [
          text("The "), link("interactive report", "https://www.dbs.com/annualreports/2025/index.html"),
          text(" offers a quicker route through selected financial and sustainability highlights, with links to further detail (DBS, 2026). I find that useful for getting my bearings, although it also makes it easy to stop at the headline figures."),
        ],
      },
      {
        type: "paragraph",
        runs: [text("Together, the cover, labels and layout present DBS as dependable and attentive to different stakeholders. Listing those groups, however, does not establish that their interests were equally served.")],
      },
      {
        type: "conclusion",
        runs: [text("My main lesson is to "), strong("read the explanation beneath a chart as carefully as the number inside it"), text(". The figures matter, but so do the choices about how to present them.")],
      },
    ],
    feature: {
      type: "report",
      sources: [{ label: "DBS Annual Report 2025 / p. 72", url: "https://www.dbs.com/annualreports/2025/i/pdf/dbs-ar-2025.pdf#page=38" }],
      value: "SGD 14.9bn",
      label: "Financial value created during 2025",
      stakeholders: ["Employees", "Society", "Shareholders", "Retained earnings"],
      focusCategory: "Society",
      note: "“Society” includes taxes and money set aside for corporate social responsibility.",
    },
    marginNotes: ["Read the label beneath the number.", "Who is this page reassuring?"],
    sources: [
      { label: "DBS (2026) Annual Report 2025: A Beacon of Stability. Singapore: DBS Group Holdings Ltd. Accessed 21 September 2026.", url: "https://www.dbs.com/annualreports/2025/i/pdf/dbs-ar-2025.pdf" },
      { label: "DBS (2026) Annual Report 2025: interactive edition. Accessed 21 September 2026.", url: "https://www.dbs.com/annualreports/2025/index.html" },
      { label: "Harrison, J.S., Freeman, R.E. and de Abreu, M.C.S. (2015) ‘Stakeholder theory as an ethical approach to effective management: applying the theory to multiple contexts’, Review of Business Management, 17(55), pp. 858–869. doi: 10.7819/rbgn.v17i55.2647. Accessed 21 September 2026.", url: "https://doi.org/10.7819/rbgn.v17i55.2647" },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
