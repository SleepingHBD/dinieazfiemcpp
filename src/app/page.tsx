import { FieldNoteCard } from "@/components/FieldNoteCard";
import { Masthead } from "@/components/Masthead";
import { PullQuote } from "@/components/PullQuote";
import { articles } from "@/data/articles";

export default function Home() {
  return (
    <main id="main-content">
      <Masthead />
      <section className="field-notes home-field-notes shell" id="field-notes" aria-labelledby="field-notes-heading">
        <header className="section-heading">
          <div><p className="eyebrow">Dispatches from the journal</p><h2 id="field-notes-heading">Field Notes</h2></div>
          <p>Four close readings of the messages organisations use to build trust, manage pressure and define who they are.</p>
        </header>
        <div className="field-notes__grid">
          {articles.map((article, index) => <FieldNoteCard key={article.slug} article={article} index={index} />)}
        </div>
      </section>

      <PullQuote />
    </main>
  );
}
