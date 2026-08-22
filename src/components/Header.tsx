import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="utility-bar">
        <div className="utility-bar__inner shell">
          <span>Observing. Analysing. Communicating.</span>
          <div className="social-links" aria-label="Social media">
            <a className="social-monogram" href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">IG</a>
            <a className="social-monogram" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">IN</a>
            <a className="social-x" href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X">X</a>
          </div>
        </div>
      </div>
      <div className="nav-wrap">
        <nav className="main-nav shell" aria-label="Primary navigation">
          <Link className="nav-home" href="/" aria-label="The Communications Observer home">TCO.</Link>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/#field-notes">Field Notes</Link>
          </div>
          <Link className="nav-issue" href="/#field-notes">Issue 01 / 2026</Link>
        </nav>
      </div>
    </header>
  );
}
