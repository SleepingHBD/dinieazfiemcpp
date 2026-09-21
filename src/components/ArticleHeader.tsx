import type { Article } from "@/data/articles";
import { ArticleBrandVisual } from "@/components/ArticleBrandVisual";
import styles from "./ArticleHeader.module.css";

export function ArticleHeader({ article }: { article: Article }) {
  return (
    <header className={styles.header}>
      <div className={`${styles.heading} reveal`}>
        <p className={styles.kicker}><span>Article {article.articleNumber}</span><span>{article.category}</span></p>
        <h1>{article.title}</h1>
        <p className={styles.subtitle}>{article.subtitle}</p>
      </div>
      <figure className={styles.media}>
        <div className={styles.image}>
          <ArticleBrandVisual article={article} eager />
        </div>
        <figcaption><span>{article.caseStudy}</span><span>Brand identity / {article.articleNumber}</span></figcaption>
      </figure>
    </header>
  );
}
