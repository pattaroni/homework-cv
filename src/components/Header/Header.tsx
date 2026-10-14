"use client";

import { useEffect, useState } from "react";
import css from "./Header.module.scss";

type HeaderProps = {
  items: { id: string; label: string }[];
};

export default function Header({ items }: HeaderProps) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );

    items.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <ul className={css.list}>
          {items.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`${css.link} ${active === id ? css.active : ""}`}
                onClick={() => setActive(id)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
