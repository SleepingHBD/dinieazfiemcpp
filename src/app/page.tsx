import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FieldNoteCard } from "@/components/FieldNoteCard";
import { Masthead } from "@/components/Masthead";
import { PullQuote } from "@/components/PullQuote";
import { articles } from "@/data/articles";
import { assetPath } from "@/lib/site";

export default function Home() {
  return (
    <main id="main-content">
      <Masthead />
      <section className="featured shell" aria-labelledby="featured-title">
        <div className="featured__copy reveal">
          <p className="eyebrow">Featured analysis</p>
          <h1 id="featured-title">When Corporate Purpose Becomes Corporate Performance</h1>
          <p className="featured__dek">A personal examination of how brands communicate purpose, authenticity and responsibility — and whether audiences believe it.</p>
          <p className="meta featured__meta"><span>22.09.26</span><span>Branding &amp; Purpose</span><span>7 min read</span></p>
          <Link className="text-link" href="/blog/patagonia-corporate-storytelling">Read the analysis <ArrowUpRight aria-hidden="true" /></Link>
        </div>
        <div className="featured__visual reveal reveal--delay">
          <div className="image-frame">
            <Image src={assetPath("/images/featured-purpose.webp")} alt="Communications professionals annotating environmental campaign materials beside a forest" fill loading="eager" fetchPriority="high" sizes="(max-width: 900px) 100vw, 62vw" />
          </div>
          <aside className="sticky-note" aria-label="Observer note"><span>Purpose-led messaging</span><em>or reputation insurance?</em></aside>
          <span className="scribble-arrow" aria-hidden="true">↘</span>
          <p className="photo-caption">Field study / Corporate purpose <span>01</span></p>
        </div>
      </section>

      <section className="field-notes home-field-notes shell" id="field-notes" aria-labelledby="field-notes-heading">
        <header className="section-heading">
          <div><p className="eyebrow">Dispatches from the journal</p><h2 id="field-notes-heading">Field Notes</h2></div>
          <p>Four close readings of the messages organisations use to build trust, manage pressure and define who they are.</p>
        </header>
        <div className="field-notes__grid">
          {articles.map((article, index) => <FieldNoteCard key={article.slug} article={article} index={index} />)}
        </div>
      </section>

      <section className="observer-brief shell" aria-labelledby="observer-heading">
        <div className="observer-brief__portrait" aria-label="Author portrait placeholder"><span>Portrait<br />to add</span></div>
        <div className="observer-brief__copy">
          <p className="eyebrow">Behind the Observer</p>
          <h2 id="observer-heading">Looking closer at the messages around us.</h2>
          <p>I started this blog with a simple thought: organisations are talking to us constantly, even when we do not consciously recognise what we are seeing as corporate communication.</p>
          <p>This project is my attempt to stop, observe and look at those messages more closely.</p>
        </div>
        <p className="observer-brief__note">A personal communications field journal. <span>↙</span></p>
      </section>

      <PullQuote />
    </main>
  );
}
