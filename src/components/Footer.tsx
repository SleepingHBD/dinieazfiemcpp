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
      </div>
      <div className="footer__base shell">
        <span>© 2026 The Communications Observer.</span><span>Designed with purpose.</span>
      </div>
    </footer>
  );
}
