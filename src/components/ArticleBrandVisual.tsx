import Image from "next/image";
import type { Article } from "@/data/articles";
import { assetPath } from "@/lib/site";

export const articleBrandVisuals = {
  field: {
    name: "Patagonia",
    label: "Ownership / purpose / environment",
    detail: "Corporate storytelling",
    logo: "/images/logos/patagonia.svg",
    width: 488,
    height: 91,
  },
  crisis: {
    name: "Singapore Airlines",
    label: "SQ321 / response under pressure",
    detail: "Crisis communication",
    logo: "/images/logos/singapore-airlines.svg",
    width: 496,
    height: 184,
  },
  memo: {
    name: "Airbnb",
    label: "Employee letter / May 2020",
    detail: "Internal communication",
    logo: "/images/logos/airbnb-lockup.svg",
    width: 3490,
    height: 1080,
  },
  report: {
    name: "DBS",
    label: "Annual Report 2025",
    detail: "Stakeholder communication",
    logo: "/images/logos/dbs.svg",
    width: 376,
    height: 112,
  },
} satisfies Record<Article["variant"], {
  name: string;
  label: string;
  detail: string;
  logo: string;
  width: number;
  height: number;
}>;

export function ArticleBrandVisual({ article }: { article: Article }) {
  const visual = articleBrandVisuals[article.variant];
  return (
    <div
      className={`brand-visual brand-visual--${article.variant}`}
    >
      <div className="brand-visual__topline">
        <span>Case study / {article.articleNumber}</span>
        <span>The Communications Observer</span>
      </div>

      <div className="brand-visual__symbol">
        <Image
          src={assetPath(visual.logo)}
          alt={`${visual.name} official logo`}
          width={visual.width}
          height={visual.height}
        />
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
