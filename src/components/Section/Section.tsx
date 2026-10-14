import type { ReactNode } from "react";
import css from "./Section.module.scss";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className={css.section}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </section>
  );
}
