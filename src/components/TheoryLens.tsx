import { BookOpen } from "lucide-react";
import type { Article } from "@/data/articles";

export function TheoryLens({ theory }: { theory: Article["theory"] }) {
  return (
    <aside className="theory-lens">
      <div className="theory-lens__label"><BookOpen aria-hidden="true" /><span>Academic lens / Reference required</span></div>
      <div className="theory-lens__grid">
        <div><p className="eyebrow">Theory</p><h3>{theory.name}</h3><p className="theory-author">{theory.authors}</p></div>
        <div><p className="eyebrow">In brief</p><p>{theory.explanation}</p></div>
        <div><p className="eyebrow">Applied here</p><p>{theory.application}</p></div>
      </div>
    </aside>
  );
}
