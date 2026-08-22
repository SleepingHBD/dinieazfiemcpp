export type ArticleVariant = "field" | "crisis" | "memo" | "report";

export interface SourceEntry {
  label: string;
  url?: string;
}

export interface Article {
  slug: string;
  fieldNoteNumber: string;
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
  observation: string[];
  context: string[];
  strategies: { title: string; description: string }[];
  theory: {
    name: string;
    authors: string;
    explanation: string;
    application: string;
  };
  evaluation: { well: string[]; improve: string[] };
  takeaway: string;
  marginNotes: string[];
  sources: SourceEntry[];
}

export const articles: Article[] = [
  {
    slug: "patagonia-corporate-storytelling",
    fieldNoteNumber: "01",
    title: "When Companies Try to Look Human",
    subtitle: "Corporate Storytelling in Action",
    category: "Corporate Storytelling",
    caseStudy: "Patagonia",
    date: "22.09.26",
    readTime: "7 min read",
    heroImage: "/images/patagonia-storytelling.webp",
    imageAlt: "A person repairing a weathered red outdoor jacket beside a rugged coastline",
    excerpt: "How Patagonia uses storytelling, environmental purpose and organisational values to communicate an identity that audiences are encouraged to trust.",
    variant: "field",
    observation: [
      "I kept returning to one question: when a company speaks like a person, what makes that voice feel credible rather than constructed? Patagonia is a useful case through which to examine that tension.",
      "What caught my attention was not a single advertisement, but the relationship between message, identity and visible action. This note is designed to test whether those parts genuinely support one another.",
    ],
    context: [
      "[ADD VERIFIED CAMPAIGN CONTEXT, DATE AND SOURCE HERE.] This section should briefly introduce the material being analysed without turning the article into a company history.",
      "The campaign title “Don’t Buy This Jacket” is included because it is central to the selected communication example. Add a verified campaign image, publication context and direct link before submission.",
    ],
    strategies: [
      { title: "Storytelling", description: "Examine the story the organisation asks audiences to enter, and the role it assigns to the customer." },
      { title: "Consistency", description: "Compare the campaign language with other visible parts of the organisation’s identity and behaviour." },
      { title: "Action-led communication", description: "Ask whether the message is supported by evidence that can be independently verified." },
    ],
    theory: {
      name: "Narrative Paradigm / Corporate Identity",
      authors: "[AUTHOR(S) AND YEAR TO BE ADDED]",
      explanation: "[ADD A SHORT, CITED EXPLANATION OF THE SELECTED THEORY. Do not rely on uncited lecture notes.]",
      application: "Use the theory to test narrative coherence: does the story feel consistent with the identity the organisation performs elsewhere? (Author, Year)",
    },
    evaluation: {
      well: ["Creates a recognisable narrative position", "Connects communication to organisational values", "Invites audiences to evaluate behaviour, not only copy"],
      improve: ["Add verified evidence of audience response", "Test whether the same message reaches different stakeholders", "Separate brand narrative from independently verifiable impact"],
    },
    takeaway: "A human voice is not automatically a human organisation. The stronger question is whether the story remains coherent when the audience looks beyond the campaign and into the company’s choices.",
    marginNotes: ["Words vs actions?", "Does the audience believe it?", "Notice the narrative role."],
    sources: [{ label: "[PATAGONIA CORPORATE SOURCE TO BE ADDED]" }, { label: "[CAMPAIGN MATERIAL SOURCE TO BE ADDED]" }, { label: "[ACADEMIC REFERENCE TO BE ADDED]" }],
  },
  {
    slug: "singapore-airlines-crisis-communication",
    fieldNoteNumber: "02",
    title: "When Things Go Wrong",
    subtitle: "Crisis Communication Under Pressure",
    category: "Crisis Communication",
    caseStudy: "Singapore Airlines SQ321",
    date: "29.09.26",
    readTime: "8 min read",
    heroImage: "/images/singapore-airlines-crisis.webp",
    imageAlt: "Airline operations staff reviewing updates at a rain-darkened airport gate",
    excerpt: "How organisations communicate when reassurance, responsibility and reputation suddenly become inseparable.",
    variant: "crisis",
    observation: [
      "Crisis messages are read differently from ordinary corporate communication. Every delay, omission and choice of phrase can carry more weight because people are looking for both information and care.",
      "I chose SQ321 to observe how an organisation balances speed, responsibility and passenger support under intense public attention. All event details below remain marked for verification before assessment.",
    ],
    context: [
      "[ADD VERIFIED INCIDENT SUMMARY, DATE, LOCATION AND SOURCE HERE.] Keep this account concise, factual and sensitive to those affected.",
      "[ADD LINKS TO THE OFFICIAL STATEMENT, VERIFIED NEWS COVERAGE AND RELEVANT SOCIAL POSTS.] Screenshots should include source captions and access dates.",
    ],
    strategies: [
      { title: "Reassurance", description: "Identify the language used to reduce uncertainty without minimising the seriousness of the event." },
      { title: "Responsibility", description: "Look for what the organisation acknowledges, what it commits to, and what remains unsaid." },
      { title: "Speed of response", description: "Build a verified timeline before judging whether the response was appropriately prompt." },
    ],
    theory: {
      name: "Situational Crisis Communication Theory",
      authors: "[AUTHOR(S) AND YEAR TO BE ADDED]",
      explanation: "[ADD A SHORT, CITED EXPLANATION OF SCCT AND ITS CRISIS-RESPONSE CATEGORIES.]",
      application: "Classify the crisis only after checking the evidence, then compare the response strategy with the theory’s recommendations. (Author, Year)",
    },
    evaluation: {
      well: ["Communicated quickly [VERIFY]", "Acknowledged the incident [VERIFY]", "Provided ongoing updates [VERIFY]", "Communicated passenger support [VERIFY]"],
      improve: ["[ADD YOUR CRITICAL ASSESSMENT]", "[COMPARE WORDING ACROSS CHANNELS]", "[ASSESS THE NEEDS OF DIFFERENT STAKEHOLDERS]"],
    },
    takeaway: "In a crisis, polished language matters less than useful, timely and humane communication. The eventual judgment depends on whether the organisation’s words help people understand what happened and what support follows.",
    marginNotes: ["Public pressure changes the message.", "Who needs reassurance first?", "What changed between updates?"],
    sources: [{ label: "[OFFICIAL SINGAPORE AIRLINES STATEMENT TO BE ADDED]" }, { label: "[VERIFIED NEWS REPORT TO BE ADDED]" }, { label: "[ACADEMIC REFERENCE TO BE ADDED]" }],
  },
  {
    slug: "airbnb-internal-communication",
    fieldNoteNumber: "03",
    title: "Talking to the People Inside",
    subtitle: "When Employees Become the Most Important Audience",
    category: "Internal Communication",
    caseStudy: "Airbnb employee layoffs",
    date: "06.10.26",
    readTime: "7 min read",
    heroImage: "/images/airbnb-internal.webp",
    imageAlt: "A remote employee reading a long internal message at a kitchen table",
    excerpt: "What happens when corporate communication is directed towards employees rather than customers?",
    variant: "memo",
    observation: [
      "Internal communication becomes especially revealing when leaders have to deliver news people do not want to hear. Tone can signal empathy, but structure and practical detail determine whether that empathy is useful.",
      "This case offers a way to compare two audiences at once: employees who experience the decision directly, and a wider public that later encounters the same message as evidence of leadership and culture.",
    ],
    context: [
      "[ADD VERIFIED CONTEXT FOR THE EMPLOYEE COMMUNICATION, INCLUDING DATE AND ORIGINAL SOURCE.] Avoid quoting from secondary summaries where the primary communication is available.",
      "[ADD AN ACCURATE, SHORT EXCERPT ONLY AFTER CHECKING THE ORIGINAL MEMO.] Keep quotation length appropriate and add a Harvard-style citation.",
    ],
    strategies: [
      { title: "Transparency", description: "Assess which reasons, implications and next steps are made clear—and which remain vague." },
      { title: "Leadership tone", description: "Look at pronouns, accountability and whether empathy is expressed through concrete support." },
      { title: "Audience sequencing", description: "Consider how employees are addressed before the communication becomes a public reputation artefact." },
    ],
    theory: {
      name: "Internal Communication Theory",
      authors: "[SELECT THEORY, AUTHOR(S) AND YEAR]",
      explanation: "[ADD A SHORT, CITED EXPLANATION OF AN APPROPRIATE INTERNAL COMMUNICATION OR EMPLOYEE-RELATIONSHIP FRAMEWORK.]",
      application: "Use the selected theory to evaluate whether the communication enables understanding, voice and trust—not merely message delivery. (Author, Year)",
    },
    evaluation: {
      well: ["Explains the leadership position [VERIFY]", "Uses direct, human language [VERIFY WITH TEXT]", "Provides practical next steps [VERIFY]"],
      improve: ["Examine who is absent from the message", "Test whether empathy is matched by process", "Compare employee and public interpretations"],
    },
    takeaway: "An internal message can become external almost immediately, but that does not make both audiences equal. The communication should first work for the people whose working lives it changes.",
    marginNotes: ["Employees first.", "Empathy needs evidence.", "Who gets a voice here?"],
    sources: [{ label: "[ORIGINAL AIRBNB EMPLOYEE COMMUNICATION TO BE ADDED]" }, { label: "[VERIFIED COMPANY CONTEXT TO BE ADDED]" }, { label: "[ACADEMIC REFERENCE TO BE ADDED]" }],
  },
  {
    slug: "dbs-stakeholder-communication",
    fieldNoteNumber: "04",
    title: "When Reporting Becomes Reputation",
    subtitle: "Corporate Reports as Communication",
    category: "Stakeholder Communication",
    caseStudy: "DBS Annual Report",
    date: "13.10.26",
    readTime: "9 min read",
    heroImage: "/images/dbs-reporting.webp",
    imageAlt: "An analyst annotating an annual report with charts beside the Singapore skyline",
    excerpt: "How organisations use reports, statistics and corporate narratives to communicate legitimacy and responsibility to stakeholders.",
    variant: "report",
    observation: [
      "Annual reports can look neutral because they are dense with numbers, governance language and formal structure. But every selection, sequence and headline still frames the organisation in a particular way.",
      "I chose a DBS annual report to look beyond the data itself and ask what the document is trying to make different stakeholders feel: informed, reassured, impressed—or all three.",
    ],
    context: [
      "[ADD THE EXACT DBS REPORT TITLE, REPORTING YEAR, PUBLICATION DATE AND OFFICIAL URL.] Use only figures copied directly from the verified report.",
      "[ADD CAPTIONED SCREENSHOTS OF THE PAGES ANALYSED.] Explain why each page was selected and who appears to be its intended audience.",
    ],
    strategies: [
      { title: "Framing", description: "Notice which outcomes receive visual emphasis and how challenges are positioned around them." },
      { title: "Legitimacy", description: "Examine how evidence, governance and institutional language establish permission to be trusted." },
      { title: "Stakeholder mapping", description: "Identify which audiences are explicitly addressed and whose concerns receive the most space." },
    ],
    theory: {
      name: "Stakeholder Theory / Framing",
      authors: "[AUTHOR(S) AND YEAR TO BE ADDED]",
      explanation: "[ADD A SHORT, CITED EXPLANATION OF THE SELECTED THEORY OR THEORIES.]",
      application: "Map the report’s audiences and examine how design, ordering and data selection frame value for each group. (Author, Year)",
    },
    evaluation: {
      well: ["Makes performance information scannable [VERIFY]", "Signals accountability through structure [VERIFY]", "Addresses multiple stakeholder groups [VERIFY]"],
      improve: ["Compare prominence of positive and negative information", "Test whether key terms are defined consistently", "Separate transparency from strategic framing"],
    },
    takeaway: "A report does not simply contain reputation; it actively builds it. Reading critically means paying attention to what the document foregrounds, what it compresses and who it works hardest to reassure.",
    marginNotes: ["Why this number?", "Who is this page reassuring?", "Transparency—or strategic framing?"],
    sources: [{ label: "[DBS ANNUAL REPORT URL TO BE ADDED]" }, { label: "[RELEVANT DBS CORPORATE SOURCE TO BE ADDED]" }, { label: "[ACADEMIC REFERENCE TO BE ADDED]" }],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
