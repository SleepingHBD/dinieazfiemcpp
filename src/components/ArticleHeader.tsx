import type { Article } from "@/data/articles";
import { ArticleBrandVisual } from "@/components/ArticleBrandVisual";

export function ArticleHeader({ article }: { article: Article }) {
  return (
    <header className={`article-hero article-hero--${article.variant}`}>
      <div className="article-hero__heading shell reveal">
        <p className="field-label"><span>Article</span> {article.articleNumber}</p>
        <p className="eyebrow">{article.category} / {article.caseStudy}</p>
        <h1>{article.title}</h1>
        <p className="article-hero__subtitle">{article.subtitle}</p>
      </div>
      <div className="article-hero__media shell">
        <div className="article-hero__image">
          <ArticleBrandVisual article={article} />
        </div>
        <p className="article-hero__caption">Brand reference <span>Fig. {article.articleNumber}</span></p>
        <p className="article-hero__note" aria-hidden="true">{article.marginNotes[0]} <span>↙</span></p>
      </div>
    </header>
  );
}
