import type { Article } from "@/data/articles";

export function ArticleSpecial({ article }: { article: Article }) {
  if (article.variant === "field") {
    return (
      <div className="campaign-spread">
        <div className="campaign-poster"><span>Campaign material / image to add</span><strong>DON’T BUY<br />THIS JACKET</strong><small>[VERIFY ORIGINAL ARTWORK AND SOURCE]</small></div>
        <aside className="why-note"><p>Why this?</p><span>I chose Patagonia because the company doesn’t only communicate environmental values through advertising — those values appear throughout its wider corporate identity.</span></aside>
      </div>
    );
  }

  if (article.variant === "crisis") {
    const steps = ["Incident", "Initial response", "Public apology", "Passenger support", "Ongoing communication"];
    return (
      <div className="crisis-timeline" aria-label="Crisis communication timeline placeholder">
        <p className="eyebrow">Build from verified timestamps</p>
        {steps.map((step, index) => (
          <div className="timeline-step" key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong><small>[ADD VERIFIED TIME, ACTION &amp; SOURCE]</small></div>
        ))}
      </div>
    );
  }

  if (article.variant === "memo") {
    return (
      <div className="memo-spread">
        <div className="audience-stamp"><span>Audience:</span><strong>Employees first</strong><em>Public second</em></div>
        <div className="memo-paper">
          <p>Internal communication / primary source</p>
          <h3>To our team,</h3>
          <blockquote>“[SHORT, VERIFIED QUOTE FROM THE EMPLOYEE COMMUNICATION TO BE ADDED]”</blockquote>
          <div className="memo-lines" aria-hidden="true"><span /><span /><span /><span /></div>
          <small>[ADD ORIGINAL MEMO LINK, DATE AND HARVARD CITATION]</small>
        </div>
      </div>
    );
  }

  return (
    <div className="report-spread">
      <div className="report-figures">
        <div><span>[FIGURE]</span><small>Verified metric to add</small></div>
        <div><span>[YEAR]</span><small>Reporting period to add</small></div>
        <div><span>[PAGE]</span><small>Source page to add</small></div>
      </div>
      <div className="report-chart" aria-label="Chart placeholder. Verified data must be added.">
        <div className="chart-bars" aria-hidden="true"><span /><span /><span /><span /><span /></div>
        <p>[RECREATE CHART USING VERIFIED REPORT DATA]</p>
      </div>
      <p className="report-note">Why this number? <span>↖</span></p>
    </div>
  );
}
