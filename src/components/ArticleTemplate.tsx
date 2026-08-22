import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import type { Article } from "@/data/articles";
import { articles } from "@/data/articles";
import { ArticleHeader } from "@/components/ArticleHeader";
import { ArticleProgress } from "@/components/ArticleProgress";
import { ArticleSpecial } from "@/components/ArticleSpecial";
import { EvaluationBlock } from "@/components/EvaluationBlock";
import { TheoryLens } from "@/components/TheoryLens";

function SectionHeading({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="article-section__heading"><span>{number}</span><h2>{children}</h2></div>;
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
          <section className="article-section" id="observation">
            <SectionHeading number="01">The Observation</SectionHeading>
            <div className="article-prose article-prose--lead">
              {article.observation.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>

          <section className="article-section" id="context">
            <SectionHeading number="02">What Happened?</SectionHeading>
            <div className="article-prose">{article.context.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            <ArticleSpecial article={article} />
          </section>

          <section className="article-section" id="strategy">
            <SectionHeading number="03">The Communication Strategy</SectionHeading>
            <p className="section-intro">Rather than judging the message by tone alone, I separated it into three communication moves.</p>
            <div className="strategy-grid">
              {article.strategies.map((strategy, strategyIndex) => (
                <div className="strategy-card" key={strategy.title}>
                  <span>0{strategyIndex + 1}</span><h3>{strategy.title}</h3><p>{strategy.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="article-section" id="theory">
            <SectionHeading number="04">Theory Lens</SectionHeading>
            <TheoryLens theory={article.theory} />
          </section>

          <section className="article-section" id="evaluation">
            <SectionHeading number="05">Did It Work?</SectionHeading>
            <p className="section-intro">This is an analytical checkpoint, not a verdict. Items marked [VERIFY] should be supported with primary material or credible reporting before submission.</p>
            <EvaluationBlock evaluation={article.evaluation} />
          </section>

          <section className="article-section article-section--takeaway" id="takeaway">
            <p className="eyebrow">Field note {article.fieldNoteNumber} / Closing thought</p>
            <SectionHeading number="06">The Takeaway</SectionHeading>
            <blockquote>{article.takeaway}</blockquote>
          </section>

          <section className="article-sources" aria-labelledby="article-sources-title">
            <div><p className="eyebrow">Working file</p><h2 id="article-sources-title">Sources for this note</h2></div>
            <ul>{article.sources.map((source) => (
              <li key={source.label}>
                {source.url ? <a href={source.url} target="_blank" rel="noreferrer">{source.label}</a> : <span>{source.label}</span>}
                <ExternalLink aria-hidden="true" />
              </li>
            ))}</ul>
          </section>
        </div>
      </div>

      <nav className="article-navigation shell" aria-label="Adjacent Field Notes">
        <Link href={`/blog/${previous.slug}`}><ArrowLeft /><span><small>Previous note / {previous.fieldNoteNumber}</small><strong>{previous.title}</strong></span></Link>
        <Link href={`/blog/${next.slug}`}><span><small>Next note / {next.fieldNoteNumber}</small><strong>{next.title}</strong></span><ArrowRight /></Link>
      </nav>
    </article>
  );
}
