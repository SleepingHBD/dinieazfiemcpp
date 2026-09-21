import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArticleBrandVisual } from "@/components/ArticleBrandVisual";
import type { Article } from "@/data/articles";

export function ArticleCard({ article, index }: { article: Article; index: number }) {
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
        className="field-card__artwork"
        href={`/blog/${article.slug}`}
        aria-label={article.title}
      >
        <ArticleBrandVisual article={article} eager={index < 2} />
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
