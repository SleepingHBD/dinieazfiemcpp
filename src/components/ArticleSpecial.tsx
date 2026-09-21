import type { ReactNode } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Article } from "@/data/articles";
import styles from "./ArticleEditorial.module.css";

function Evidence({ article, title, children }: { article: Article; title: string; children: ReactNode }) {
  const captionId = `figure-${article.articleNumber}`;

  return (
    <figure className={styles.evidence} aria-labelledby={captionId}>
      <figcaption className={styles.evidenceHeading} id={captionId}>
        <span className={styles.figureNumber}>Fig. {article.articleNumber}</span>
        <span className={styles.figureTitle}>{title}</span>
      </figcaption>
      {children}
      <div className={styles.evidenceFooter}>
        <span className={styles.sourceLabel}>Visual summary · Sources:</span>
        <div className={styles.evidenceSources}>
          {article.feature.sources.map((source) => (
            <a href={source.url} key={source.url} target="_blank" rel="noreferrer">
              {source.label}<ArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </figure>
  );
}

const perspectives = { event: "Incident", airline: "Airline", passenger: "Passenger account" };

export function ArticleSpecial({ article }: { article: Article }) {
  const { feature } = article;

  if (feature.type === "ownership") {
    return (
      <Evidence article={article} title="Who owns Patagonia?">
        <div className={styles.ownershipStructure}>
          <div className={styles.ownershipRoot}>
            <span className={styles.detailLabel}>{feature.period}</span>
            <strong>{feature.company}</strong>
          </div>
          <dl className={styles.ownershipRoutes}>
            {feature.routes.map((route) => (
              <div key={route.title}>
                <dt>{route.detail}</dt>
                <dd><ArrowDown aria-hidden="true" /><strong>{route.title}</strong></dd>
              </div>
            ))}
          </dl>
        </div>
        <div className={styles.statistics}>
          <p className={styles.detailLabel}>Separately: reported progress · FY25</p>
          <dl className={styles.statisticPair}>
            {feature.statistics.map((statistic) => (
              <div key={statistic.value}><dt>{statistic.label}</dt><dd>{statistic.value}</dd></div>
            ))}
          </dl>
        </div>
      </Evidence>
    );
  }

  if (feature.type === "timeline") {
    return (
      <Evidence article={article} title="One incident, different perspectives">
        <ol className={styles.timeline}>
          {feature.steps.map((step) => (
            <li key={step.dateTime} className={step.later ? styles.laterStep : undefined} data-perspective={step.perspective}>
              <time className={styles.timelineDate} dateTime={step.dateTime}>{step.date}</time>
              <div className={styles.timelineContent}>
                <span className={styles.perspective}>{perspectives[step.perspective]}</span>
                <strong>{step.title}</strong>
                {step.detail && <p>{step.detail}</p>}
              </div>
            </li>
          ))}
        </ol>
        <p className={styles.figureNote}>Selected events in sequence; spacing is not to scale.</p>
      </Evidence>
    );
  }

  if (feature.type === "memo") {
    return (
      <Evidence article={article} title="Reassurance, backed by practical detail">
        <div className={styles.memo}>
          <blockquote cite={feature.sources[0]?.url}>“{feature.quote}”</blockquote>
          <p className={styles.quoteAttribution}>{feature.attribution}</p>
          <dl className={styles.memoSupport}>
            {feature.supportGroups.map((group) => (
              <div key={group.title}>
                <dt>{group.title}</dt>
                <dd><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></dd>
              </div>
            ))}
          </dl>
        </div>
      </Evidence>
    );
  }

  const noteId = `category-note-${article.articleNumber}`;

  return (
    <Evidence article={article} title="Look closer at the label">
      <div className={styles.report}>
        <div className={styles.reportOverview}>
          <div className={styles.reportValue}>
            <strong>{feature.value}</strong>
            <span>{feature.label}</span>
          </div>
          <ArrowRight className={styles.reportArrow} aria-hidden="true" />
          <div className={styles.stakeholders}>
            <p className={styles.detailLabel}>Allocation categories</p>
            <ul>{feature.stakeholders.map((stakeholder) => (
              <li key={stakeholder}>
                {stakeholder === feature.focusCategory
                  ? <mark aria-describedby={noteId}>{stakeholder}<sup aria-hidden="true">1</sup></mark>
                  : stakeholder}
              </li>
            ))}</ul>
          </div>
        </div>
        <div className={styles.reportNote} id={noteId}>
          <span className={styles.noteMarker} aria-hidden="true">1</span>
          <div><strong>Not just donations</strong><p>{feature.note}</p></div>
          <span className={styles.annotation} aria-hidden="true">Read the small print.</span>
        </div>
      </div>
    </Evidence>
  );
}
