import Image from "next/image";
import type { Article } from "@/data/articles";
import { assetPath } from "@/lib/site";

export function ArticleHeader({ article }: { article: Article }) {
  return (
    <header className={`article-hero article-hero--${article.variant}`}>
      <div className="article-hero__heading shell reveal">
        <p className="field-label"><span>Field Note</span> {article.fieldNoteNumber}</p>
        <p className="eyebrow">{article.category} / {article.caseStudy}</p>
        <h1>{article.title}</h1>
        <p className="article-hero__subtitle">{article.subtitle}</p>
        <p className="meta"><span>{article.date}</span><span>{article.readTime}</span><span>By [Your Name]</span></p>
      </div>
      <div className="article-hero__media shell">
        <div className="article-hero__image">
          <Image src={assetPath(article.heroImage)} alt={article.imageAlt} fill loading="eager" fetchPriority="high" sizes="100vw" />
        </div>
        <p className="article-hero__caption">Original editorial placeholder image / replace if required <span>Fig. {article.fieldNoteNumber}</span></p>
        <p className="article-hero__note" aria-hidden="true">{article.marginNotes[0]} <span>↙</span></p>
      </div>
    </header>
  );
}
