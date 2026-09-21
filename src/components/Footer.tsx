import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__simple shell">
        <Link className="footer__mark" href="/" aria-label="The Communications Observer home">TCO.</Link>
        <nav aria-label="Footer navigation">
          <Link href="/">Home</Link>
          <span aria-hidden="true">·</span>
          <Link href="/#articles">Articles</Link>
        </nav>
      </div>
      <p className="footer__base shell">© 2026</p>
    </footer>
  );
}
