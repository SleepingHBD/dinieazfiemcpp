import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Article } from "@/data/articles";
import { assetPath } from "@/lib/site";

export function FieldNoteCard({ article, index }: { article: Article; index: number }) {
  return (
    <article className={`field-card field-card--${index + 1}`}>
      <p className="field-card__number" aria-label={`Field note ${article.fieldNoteNumber}`}>{article.fieldNoteNumber}</p>
      <Link className="field-card__image" href={`/blog/${article.slug}`} aria-label={article.title}>
        <Image src={assetPath(article.heroImage)} alt={article.imageAlt} fill loading={index === 0 ? "eager" : "lazy"} sizes="(max-width: 700px) 100vw, 42vw" />
      </Link>
      <div className="field-card__content">
        <p className="eyebrow">{article.category} <span>/ {article.caseStudy}</span></p>
        <h3><Link href={`/blog/${article.slug}`}>{article.title}</Link></h3>
        <p className="field-card__excerpt">{article.excerpt}</p>
        <p className="meta"><span>{article.date}</span><span>{article.readTime}</span></p>
        <Link className="text-link" href={`/blog/${article.slug}`}>Read the analysis <ArrowRight /></Link>
      </div>
    </article>
  );
}
