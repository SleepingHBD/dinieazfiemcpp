import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { articleBrandVisuals } from "@/components/ArticleBrandVisual";
import type { Article } from "@/data/articles";
import { assetPath } from "@/lib/site";

export function ArticleCard({ article, index }: { article: Article; index: number }) {
  const visual = articleBrandVisuals[article.variant];

  return (
    <article className="field-card">
      <header className="field-card__header">
        <p className="field-card__number" aria-label={`Article ${article.articleNumber}`}>{article.articleNumber}</p>
        <div>
          <p className="eyebrow">{article.category}</p>
          <p className="field-card__case">{article.caseStudy}</p>
        </div>
      </header>
      <Link
        className={`field-card__image field-card__brand-image field-card__brand-image--${article.variant}`}
        href={`/blog/${article.slug}`}
        aria-label={article.title}
        data-number={article.articleNumber}
      >
        <span className="field-card__brand-kicker">Case study / {article.articleNumber}</span>
        <span className="field-card__brand-logo">
          <Image
            src={assetPath(visual.logo)}
            alt={`${visual.name} official logo`}
            width={visual.width}
            height={visual.height}
            loading={index === 0 ? "eager" : "lazy"}
          />
        </span>
        <span className="field-card__brand-label">{visual.detail}</span>
      </Link>
      <div className="field-card__content">
        <h3><Link href={`/blog/${article.slug}`}>{article.title}</Link></h3>
        <p className="field-card__excerpt">{article.excerpt}</p>
        <footer className="field-card__footer">
          <p className="meta"><span>{article.date}</span><span>{article.readTime}</span></p>
          <Link className="text-link" href={`/blog/${article.slug}`}>Read the analysis <ArrowRight /></Link>
        </footer>
      </div>
    </article>
  );
}
