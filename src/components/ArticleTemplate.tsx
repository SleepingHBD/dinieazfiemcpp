import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import type { Article, TextRun } from "@/data/articles";
import { articles } from "@/data/articles";
import { ArticleHeader } from "@/components/ArticleHeader";
import { ArticleProgress } from "@/components/ArticleProgress";
import { ArticleSpecial } from "@/components/ArticleSpecial";
import styles from "./ArticleEditorial.module.css";

function RichText({ runs }: { runs: TextRun[] }) {
  return runs.map((run, index) => {
    let content: ReactNode = run.text;
    if (run.emphasis) content = <em>{content}</em>;
    if (run.strong) content = <strong>{content}</strong>;
    if (run.href) content = <a href={run.href} target="_blank" rel="noreferrer">{content}</a>;
    return <Fragment key={`${run.text}-${index}`}>{content}</Fragment>;
  });
}

export function ArticleTemplate({ article }: { article: Article }) {
  const index = articles.findIndex((item) => item.slug === article.slug);
  const previous = articles[(index - 1 + articles.length) % articles.length];
  const next = articles[(index + 1) % articles.length];

  return (
    <article className={`article article--${article.variant}`}>
      <ArticleProgress />
      <ArticleHeader article={article} />

      <div className={styles.body}>
        <section className={styles.copy} aria-label="Article text">
          {article.body.map((block, blockIndex) => {
            if (block.type === "feature") {
              return <ArticleSpecial article={article} key={`feature-${blockIndex}`} />;
            }

            if (block.type === "theory") {
              return (
                <aside className={styles.theory} key={`theory-${blockIndex}`} aria-labelledby={`theory-${blockIndex}`}>
                  <div className={styles.theoryHeading}>
                    <p className={styles.label}>Theory lens</p>
                    <h2 id={`theory-${blockIndex}`}>{block.name}</h2>
                  </div>
                  <div>
                    <a className={styles.citation} href={block.sourceUrl} target="_blank" rel="noreferrer">
                      {block.citation} <ExternalLink aria-hidden="true" />
                    </a>
                    <p><RichText runs={block.runs} /></p>
                  </div>
                </aside>
              );
            }

            if (block.type === "conclusion") {
              return (
                <section className={styles.takeaway} key={`conclusion-${blockIndex}`} aria-labelledby="takeaway-title">
                  <h2 className={styles.label} id="takeaway-title">The takeaway</h2>
                  <p><RichText runs={block.runs} /></p>
                </section>
              );
            }

            return (
              <p className={block.type === "paragraph" ? styles.paragraph : `${styles.paragraph} ${styles[block.type]}`} key={`${block.type}-${blockIndex}`}>
                <RichText runs={block.runs} />
              </p>
            );
          })}
        </section>

        <section className={styles.sources} aria-labelledby="article-sources-title">
          <div><p className={styles.label}>Sources &amp; reading</p><h2 id="article-sources-title">References for this article</h2></div>
          <ol>{article.sources.map((source, sourceIndex) => (
            <li key={source.url}>
              <span>{String(sourceIndex + 1).padStart(2, "0")}</span>
              <a href={source.url} target="_blank" rel="noreferrer">{source.label}</a>
              <ExternalLink aria-hidden="true" />
            </li>
          ))}</ol>
        </section>
      </div>

      <nav className={styles.navigation} aria-label="Adjacent articles">
        <Link href={`/blog/${previous.slug}`}><ArrowLeft /><span><small>Previous article / {previous.articleNumber}</small><strong>{previous.title}</strong></span></Link>
        <Link href={`/blog/${next.slug}`}><span><small>Next article / {next.articleNumber}</small><strong>{next.title}</strong></span><ArrowRight /></Link>
      </nav>
    </article>
  );
}
