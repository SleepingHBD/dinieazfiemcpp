import { Quote } from "lucide-react";

export function PullQuote() {
  return (
    <section className="pull-quote" aria-label="Editorial quote">
      <div className="pull-quote__inner shell">
        <Quote aria-hidden="true" />
        <blockquote>
          Communication isn’t just about what is said.<br />
          It’s about what is <mark>understood</mark> — and what is <mark>believed</mark>.
        </blockquote>
        <p>That’s where the real message lives.</p>
      </div>
    </section>
  );
}
