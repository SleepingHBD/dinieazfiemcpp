import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__simple shell">
        <div>
          <p className="footer__mark"><span>The</span> Communications <em>Observer</em></p>
          <p className="footer__tagline">Real-world insights from corporate messaging.</p>
        </div>
        <nav aria-label="Footer navigation">
          <Link href="/">Home</Link>
          <Link href="/#field-notes">Field Notes</Link>
        </nav>
        <div className="footer__social" aria-label="Social media">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">IG</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">IN</a>
          <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X">X</a>
        </div>
      </div>
      <div className="footer__base shell">
        <span>© 2026 The Communications Observer.</span><span>Designed with purpose.</span>
      </div>
    </footer>
  );
}
