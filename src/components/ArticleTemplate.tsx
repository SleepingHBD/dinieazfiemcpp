import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, ExternalLink } from "lucide-react";
import type { Article, TextRun } from "@/data/articles";
import { articles } from "@/data/articles";
import { ArticleHeader } from "@/components/ArticleHeader";
import { ArticleProgress } from "@/components/ArticleProgress";
import { ArticleSpecial } from "@/components/ArticleSpecial";

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

      <div className="article-layout shell">
        <div className="article-body">
          <section className="article-copy" aria-label="Article text">
            {article.body.map((block, blockIndex) => {
              if (block.type === "feature") {
                return <ArticleSpecial article={article} key={`feature-${blockIndex}`} />;
              }

              if (block.type === "theory") {
                return (
                  <aside className="integrated-theory" key={`theory-${blockIndex}`}>
                    <div className="integrated-theory__heading">
                      <BookOpen aria-hidden="true" />
                      <div>
                        <p>Theory lens</p>
                        <h2>{block.name}</h2>
                      </div>
                    </div>
                    <div className="integrated-theory__copy">
                      <a className="integrated-theory__citation" href={block.sourceUrl} target="_blank" rel="noreferrer">
                        {block.citation} <ExternalLink aria-hidden="true" />
                      </a>
                      <p><RichText runs={block.runs} /></p>
                    </div>
                  </aside>
                );
              }

              return (
                <p className={`article-copy__block article-copy__block--${block.type}`} key={`${block.type}-${blockIndex}`}>
                  <RichText runs={block.runs} />
                </p>
              );
            })}
          </section>

          <section className="article-sources" aria-labelledby="article-sources-title">
            <div><p className="eyebrow">Sources &amp; reading</p><h2 id="article-sources-title">References for this article</h2></div>
            <ol>{article.sources.map((source, sourceIndex) => (
              <li key={source.url}>
                <span>{String(sourceIndex + 1).padStart(2, "0")}</span>
                <a href={source.url} target="_blank" rel="noreferrer">{source.label}</a>
                <ExternalLink aria-hidden="true" />
              </li>
            ))}</ol>
          </section>
        </div>
      </div>

      <nav className="article-navigation shell" aria-label="Adjacent articles">
        <Link href={`/blog/${previous.slug}`}><ArrowLeft /><span><small>Previous article / {previous.articleNumber}</small><strong>{previous.title}</strong></span></Link>
        <Link href={`/blog/${next.slug}`}><span><small>Next article / {next.articleNumber}</small><strong>{next.title}</strong></span><ArrowRight /></Link>
      </nav>
    </article>
  );
}
