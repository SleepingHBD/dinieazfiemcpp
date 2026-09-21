import type { Article } from "@/data/articles";

export function ArticleSpecial({ article }: { article: Article }) {
  const { feature } = article;

  if (feature.type === "ownership") {
    return (
      <figure className="ownership-spread">
        <div className="ownership-structure">
          <p className="eyebrow">Ownership structure / 2022</p>
          <blockquote>{feature.headline}</blockquote>
          <div className="ownership-routes">
            {feature.routes.map((route) => (
              <div key={route.title}><span>{route.detail}</span><strong>{route.title}</strong></div>
            ))}
          </div>
        </div>
        <figcaption className="ownership-statistics">
          <p className="eyebrow">Reported progress / FY25</p>
          {feature.statistics.map((statistic) => (
            <div key={statistic.value}><strong>{statistic.value}</strong><span>{statistic.label}</span></div>
          ))}
          <small>Figures reported by Patagonia (2025)</small>
        </figcaption>
      </figure>
    );
  }

  if (feature.type === "timeline") {
    return (
      <figure className="crisis-timeline">
        <figcaption className="eyebrow">Communication timeline</figcaption>
        {feature.steps.map((step, index) => (
          <div className="timeline-step" key={`${step.date}-${step.title}`}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div><small>{step.date}</small><strong>{step.title}</strong></div>
            <p>{step.detail}</p>
          </div>
        ))}
      </figure>
    );
  }

  if (feature.type === "memo") {
    return (
      <figure className="memo-spread">
        <figcaption className="audience-stamp"><span>Audience:</span><strong>Employees first</strong><em>Public second</em></figcaption>
        <div className="memo-paper">
          <p>Employee communication / 5 May 2020</p>
          <blockquote>“{feature.quote}”</blockquote>
          <div className="memo-support">
            <span>Practical information</span>
            <ul>{feature.supports.map((support) => <li key={support}>{support}</li>)}</ul>
          </div>
          <small>Airbnb employee letter (2020)</small>
        </div>
      </figure>
    );
  }

  return (
    <figure className="report-spread">
      <div className="report-value">
        <p className="eyebrow">Financial value created / 2025</p>
        <strong>{feature.value}</strong>
        <span>{feature.label}</span>
      </div>
      <div className="report-stakeholders">
        <p className="eyebrow">Categories shown in the report</p>
        <ol>{feature.stakeholders.map((stakeholder, index) => (
          <li key={stakeholder}><span>{String(index + 1).padStart(2, "0")}</span>{stakeholder}</li>
        ))}</ol>
      </div>
      <figcaption className="report-note">{feature.note}</figcaption>
    </figure>
  );
}
