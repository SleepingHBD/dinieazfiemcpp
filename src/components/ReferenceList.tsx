import { Fragment } from "react";
import type { Reference } from "@/data/references";
import styles from "./ArticleEditorial.module.css";

export function ReferenceList({ references }: { references: readonly Reference[] }) {
  return (
    <ul className={styles.referenceList} role="list">
      {references.map((reference) => (
        <li key={`${reference.author}-${reference.year}-${reference.title}`}>
          {reference.author} ({reference.year}){" "}
          {reference.format === "article" ? <>‘{reference.title}’</> : <em>{reference.title}</em>}
          {reference.publication && <>, <em>{reference.publication}</em></>}
          {reference.details && <>{reference.format === "article" ? ", " : ". "}{reference.details}</>}.
          {" "}Available at:{" "}
          {reference.links.map((link, index) => (
            <Fragment key={link.url}>
              {index > 0 && "; "}
              {link.label && `${link.label}: `}
              <a href={link.url} target="_blank" rel="noreferrer">{link.url}</a>
            </Fragment>
          ))}{" "}(Accessed: {reference.accessed}).
        </li>
      ))}
    </ul>
  );
}
