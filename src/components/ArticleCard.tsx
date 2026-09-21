import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArticleBrandVisual } from "@/components/ArticleBrandVisual";
import type { Article } from "@/data/articles";

export function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <article className="field-card">
      <Link
        className="field-card__artwork"
        href={`/blog/${article.slug}`}
        aria-label={article.title}
      >
        <ArticleBrandVisual article={article} eager={index < 2} />
      </Link>
      <header className="field-card__content">
        <p className="field-card__category">
          <span aria-label={`Article ${article.articleNumber}`}>{article.articleNumber}</span>
          <span aria-hidden="true">/</span>
          {article.category}
        </p>
        <h3>
          <Link href={`/blog/${article.slug}`}>
            <span>{article.title}</span>
            <ArrowRight aria-hidden="true" />
          </Link>
        </h3>
      </header>
    </article>
  );
}
