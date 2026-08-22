import { Check, CircleX } from "lucide-react";
import type { Article } from "@/data/articles";

export function EvaluationBlock({ evaluation }: { evaluation: Article["evaluation"] }) {
  return (
    <div className="evaluation-grid">
      <section className="evaluation evaluation--well">
        <p className="evaluation__heading"><Check aria-hidden="true" /> What they did well</p>
        <ul>{evaluation.well.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>
      <section className="evaluation evaluation--improve">
        <p className="evaluation__heading"><CircleX aria-hidden="true" /> What they could improve</p>
        <ul>{evaluation.improve.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>
    </div>
  );
}
