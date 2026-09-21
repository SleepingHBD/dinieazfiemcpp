import Image from "next/image";
import type { Article } from "@/data/articles";
import { assetPath } from "@/lib/site";
import styles from "./ArticleBrandVisual.module.css";

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
    // Light-background asset supplied on Singapore Airlines' official website:
    // https://singaporeairlines.com/content/dam/sia/web-assets/images/ppsclub-krisflyer/kf-promo/kfmilesparadise/Singapore_Airlines_Logo_2.svg
    logo: "/images/logos/singapore-airlines-light.svg",
    width: 350,
    height: 128,
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

export function ArticleBrandVisual({ article, eager = false }: { article: Article; eager?: boolean }) {
  const visual = articleBrandVisuals[article.variant];
  return (
    <div className={`${styles.artwork} ${styles[article.variant]}`}>
      <div className={styles.mount}>
        <Image
          src={assetPath(visual.logo)}
          alt={`${visual.name} official logo`}
          width={visual.width}
          height={visual.height}
          loading={eager ? "eager" : "lazy"}
        />
      </div>
    </div>
  );
}
