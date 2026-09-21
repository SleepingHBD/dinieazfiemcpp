import { ChartNoAxesCombined, Mountain, Plane, UsersRound } from "lucide-react";
import type { Article } from "@/data/articles";

const brandVisuals = {
  field: {
    name: "Patagonia",
    label: "Ownership / purpose / environment",
    detail: "Corporate storytelling",
    Icon: Mountain,
  },
  crisis: {
    name: "Singapore Airlines",
    label: "SQ321 / response under pressure",
    detail: "Crisis communication",
    Icon: Plane,
  },
  memo: {
    name: "Airbnb",
    label: "Employee letter / May 2020",
    detail: "Internal communication",
    Icon: UsersRound,
  },
  report: {
    name: "DBS",
    label: "Annual Report 2025",
    detail: "Stakeholder communication",
    Icon: ChartNoAxesCombined,
  },
} satisfies Record<Article["variant"], {
  name: string;
  label: string;
  detail: string;
  Icon: typeof Mountain;
}>;

export function ArticleBrandVisual({ article }: { article: Article }) {
  const visual = brandVisuals[article.variant];
  const Icon = visual.Icon;

  return (
    <div
      className={`brand-visual brand-visual--${article.variant}`}
      role="img"
      aria-label={`${visual.name} brand reference for ${article.title}`}
    >
      <div className="brand-visual__topline">
        <span>Case study / {article.articleNumber}</span>
        <span>The Communications Observer</span>
      </div>

      <div className="brand-visual__symbol" aria-hidden="true">
        <Icon />
      </div>

      <div className="brand-visual__identity">
        <p>{visual.detail}</p>
        <strong>{visual.name}</strong>
        <span>{visual.label}</span>
      </div>

      <div className="brand-visual__reference" aria-hidden="true">
        <span>{article.articleNumber}</span>
        <i />
        <small>Observed / analysed</small>
      </div>
    </div>
  );
}
