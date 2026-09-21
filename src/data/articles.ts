import type { ReferenceId } from "./references";

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
  referenceIds: ReferenceId[];
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
        runs: [text("The founder’s letter turns a legal arrangement into a problem and its resolution: Chouinard rejects selling the business or taking it public to protect its values (Chouinard, 2022).")],
      },
      {
        type: "theory",
        name: "Narrative transportation",
        citation: "Green and Brock (2000, pp. 701–702)",
        sourceUrl: "https://www.communicationcache.com/uploads/1/0/8/8/10887248/the_role_of_transportation_in_the_persuasiveness_of_public_narratives.pdf",
        runs: [text("Green and Brock (2000, pp. 701–702) describe narrative transportation as absorption through attention, emotion and imagery, which may reduce counterarguing. Following Chouinard’s dilemma invites readers to identify with his priorities and accept his solution. I can see how that could make purpose feel credible before the ownership mechanics are examined. Reader evidence would be needed to show that effect; the story alone cannot establish authenticity.")],
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
        runs: [text("The repair and end-of-life figures let me test the purpose story against reported actions, rather than treat narrative appeal as proof. They invite scrutiny, although Patagonia still selects the evidence.")],
      },
      {
        type: "paragraph",
        runs: [
          strong("Paid versus non-paid communication matters here. "),
          text("Patagonia’s 2011 "),
          link("“Don’t Buy This Jacket”", "https://www.patagonia.com/stories/planet/activism/dont-buy-this-jacket-black-friday-and-the-new-york-times/story-18615.html"),
          text(" advertisement used paid space in "), emphasis("The New York Times"), text(" (Patagonia, 2011). The letter and report use owned channels; non-paid placement does not mean cost-free production. The ad could reach readers beyond Patagonia’s website, but even its anti-consumption message promotes the brand. Owned channels offer detail, but neither format guarantees trust."),
        ],
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
    referenceIds: ["chouinard2022", "greenBrock2000", "patagonia2011", "patagonia2025"],
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
        runs: [text("Acknowledging trauma gives the CEO’s message an empathetic tone and makes leadership visible. It tells the wider public that the airline recognises passengers’ distress.")],
      },
      { type: "feature" },
      {
        type: "question",
        runs: [strong("But what about someone waiting for answers in hospital?")],
      },
      {
        type: "theory",
        name: "Situational crisis communication theory",
        citation: "Coombs (2007, pp. 165–166)",
        sourceUrl: "https://scispace.com/pdf/protecting-organization-reputations-during-a-crisis-the-c56nbgq8xa.pdf#page=3",
        runs: [text("SCCT links reputational responses to perceived responsibility, but Coombs (2007, pp. 165–166) puts victims’ needs first. He distinguishes physical-safety instructions from adjusting information that helps people cope. I read the CEO’s acknowledgement of trauma as the latter: concern, not proof of blame or adequate support. That makes passenger uncertainty a test of the response, not a side issue.")],
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
          text(" describes medical support and reviews of turbulence procedures (Singapore Airlines, 2024, slide 5). The procedure reviews fit Coombs’ emphasis on reassurance about future safety, but cannot establish how clearly information reached each passenger."),
        ],
      },
      {
        type: "paragraph",
        runs: [text("CNA’s editorial coverage illustrates earned media, not an airline-controlled advertisement (CNA, 2024). It challenges SIA’s own account rather than simply repeating it. One passenger’s experience cannot represent everyone, but the contrast shows why I would not assess the response from the video alone.")],
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
    referenceIds: ["cna2024", "coombs2007", "sia2024", "tan2024"],
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
        citation: "Welch and Jackson (2007, pp. 183–185)",
        sourceUrl: "https://www.researchgate.net/publication/242085269_Rethinking_internal_communication_a_stakeholder_approach",
        runs: [text("Welch and Jackson (2007, pp. 183–185) distinguish employee groups and one-way corporate messages from two-way exchanges. Here, the letter explains the decision to everyone; leavers need departure support, while those staying need role clarity. Individual conversations can address those different needs. I would therefore judge the follow-up by whether employees received relevant answers, not simply whether a Q&A was announced.")],
      },
      {
        type: "paragraph",
        runs: [text("Airbnb addresses both groups and explains that arrangements differ between countries (Airbnb, 2020). That makes the message more responsive to employees’ circumstances.")],
      },
      {
        type: "paragraph",
        runs: [text("Still, belonging is an awkward theme in a layoff letter. Employee accounts would be needed to judge whether the promised conversations actually helped.")],
      },
      {
        type: "paragraph",
        runs: [text("There is also a second audience: Airbnb’s public Newsroom lets outsiders assess its treatment of staff (Airbnb, 2020). This is non-paid, owned communication rather than advertising, but Airbnb still controls the account. An internal message becomes part of its external reputation.")],
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
    referenceIds: ["airbnb2020", "welchJackson2007"],
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
        runs: [text("The report is non-paid, owned communication rather than an advertisement. Yet its presentation still aims to reassure: a reporting format does not make it neutral.")],
      },
      {
        type: "theory",
        name: "Stakeholder theory",
        citation: "Harrison, Freeman and de Abreu (2015, p. 859)",
        sourceUrl: "https://www.scielo.br/j/rbgn/a/sWQfK377tPNwVLMWt46zhsv/?format=pdf&lang=en#page=2",
        runs: [text("Stakeholder theory asks how a business serves groups’ interests and wellbeing, not just shareholders’ returns (Harrison, Freeman and de Abreu, 2015, p. 859). For DBS, putting taxes and CSR allocations under “society” makes financial contributions visible, but does not show how different communities benefit. I would look for evidence of outcomes and fair treatment, not infer them from the total.")],
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
        runs: [text("The reassuring layout gives me a starting point, not a verdict. Applying stakeholder theory would also require evidence of how competing needs were considered and whose priorities shaped decisions.")],
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
    referenceIds: ["dbs2026", "harrison2015"],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
