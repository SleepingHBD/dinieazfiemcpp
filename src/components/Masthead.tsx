export function Masthead() {
  return (
    <section className="masthead" aria-label="Publication masthead">
      <div className="masthead__grid shell">
        <div className="issue-stamp"><span>Issue 01</span><br /><span>Sep 2026</span></div>
        <p className="masthead__title" aria-label="The Communications Observer">
          <span className="the">The</span>Communications<span className="observer">Observer</span>
        </p>
        <p className="masthead__note">Real-world insights from corporate messaging</p>
      </div>
    </section>
  );
}
