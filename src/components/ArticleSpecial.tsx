import type { ReactNode } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import type { Article } from "@/data/articles";
import styles from "./ArticleEditorial.module.css";

function Evidence({ article, title, children }: { article: Article; title: string; children: ReactNode }) {
  const note = article.variant === "memo" ? article.marginNotes[1] : article.marginNotes[0];

  return (
    <figure className={styles.evidence}>
      <figcaption className={styles.evidenceHeading}>
        <span className={styles.label}>{title}</span>
        <span className={styles.figureNumber}>Fig. {article.articleNumber}</span>
      </figcaption>
      {children}
      <div className={styles.evidenceFooter}>
        <div className={styles.evidenceSources}>
          {article.feature.sources.map((source) => (
            <a href={source.url} key={source.url} target="_blank" rel="noreferrer">
              {source.label}<ArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className={styles.annotation}><span aria-hidden="true">↖</span> {note}</p>
      </div>
    </figure>
  );
}

export function ArticleSpecial({ article }: { article: Article }) {
  const { feature } = article;

  if (feature.type === "ownership") {
    return (
      <Evidence article={article} title="Purpose, in practice">
        <div className={styles.ownership}>
          <div className={styles.ownershipStructure}>
            <p className={styles.detailLabel}>Ownership / 2022</p>
            <blockquote>“{feature.headline}”</blockquote>
            <div className={styles.ownershipRoutes}>
              {feature.routes.map((route) => (
                <div key={route.title}>
                  <ArrowDownRight aria-hidden="true" />
                  <span>{route.detail}</span><strong>{route.title}</strong>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.statistics}>
            <p className={styles.detailLabel}>Reported progress / FY25</p>
            <div className={styles.statisticPair}>
              {feature.statistics.map((statistic) => (
                <div key={statistic.value}><strong>{statistic.value}</strong><span>{statistic.label}</span></div>
              ))}
            </div>
          </div>
        </div>
      </Evidence>
    );
  }

  if (feature.type === "timeline") {
    return (
      <Evidence article={article} title="The response, in sequence">
        <ol className={styles.timeline}>
          {feature.steps.map((step) => (
            <li key={`${step.date}-${step.title}`}>
              <span className={styles.timelineDate}>{step.date}</span>
              <strong>{step.title}</strong>
              <p>{step.detail}</p>
            </li>
          ))}
        </ol>
      </Evidence>
    );
  }

  if (feature.type === "memo") {
    return (
      <Evidence article={article} title="Inside the employee letter">
        <div className={styles.memo}>
          <p className={styles.audience}><span>Audience</span> Employees first <span>/</span> Public second</p>
          <blockquote>“{feature.quote}”</blockquote>
          <div className={styles.memoSupport}>
            <p className={styles.detailLabel}>Alongside the reassurance</p>
            <ul>{feature.supports.map((support) => <li key={support}>{support}</li>)}</ul>
          </div>
        </div>
      </Evidence>
    );
  }

  return (
    <Evidence article={article} title="Reading beneath the headline">
      <div className={styles.report}>
        <div className={styles.reportValue}>
          <p className={styles.detailLabel}>Financial value / 2025</p>
          <strong>{feature.value}</strong>
          <span>{feature.label}</span>
        </div>
        <div className={styles.stakeholders}>
          <p className={styles.detailLabel}>Categories in the report</p>
          <ul>{feature.stakeholders.map((stakeholder) => (
            <li key={stakeholder}>
              {stakeholder === "Society" ? <><mark>{stakeholder}</mark><span aria-hidden="true">↴</span></> : stakeholder}
            </li>
          ))}</ul>
          <p className={styles.reportNote}>{feature.note}</p>
        </div>
      </div>
    </Evidence>
  );
}
