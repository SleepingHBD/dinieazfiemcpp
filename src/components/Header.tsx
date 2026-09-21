import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="nav-wrap">
        <nav className="main-nav shell" aria-label="Primary navigation">
          <Link className="nav-home" href="/" aria-label="The Communications Observer home">TCO.</Link>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/#articles">Articles</Link>
          </div>
          <Link className="nav-issue" href="/#articles">Issue #1</Link>
        </nav>
      </div>
    </header>
  );
}
