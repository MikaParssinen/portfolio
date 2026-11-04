"use client";

import { useEffect, useState } from "react";

const items = [
  { id: "about", label: "About me" },
  { id: "projects", label: "Projects" },
  { id: "about-you", label: "About you" },
];

export function Nav() {
  const [active, setActive] = useState(items[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Main">
      <p className="mb-6 text-lg font-bold">Mika</p>
      <ul className="space-y-1">
        {items.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-current={active === id ? "true" : undefined}
              className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                active === id
                  ? "bg-default font-medium text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}