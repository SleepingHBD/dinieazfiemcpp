import { ArticleCard } from "@/components/ArticleCard";
import { Masthead } from "@/components/Masthead";
import { PullQuote } from "@/components/PullQuote";
import { articles } from "@/data/articles";

export default function Home() {
  return (
    <main id="main-content">
      <Masthead />
      <section className="articles home-articles shell" id="articles" aria-labelledby="articles-heading">
        <header className="section-heading">
          <div><p className="eyebrow">Latest analysis</p><h2 id="articles-heading">Articles</h2></div>
        </header>
        <div className="articles__grid">
          {articles.map((article, index) => <ArticleCard key={article.slug} article={article} index={index} />)}
        </div>
      </section>

      <PullQuote />
    </main>
  );
}
