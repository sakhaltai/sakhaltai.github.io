import React from "react";
import { featured } from "../content";

export default function Featured() {
  return (
    <section
      id="featured"
      className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-6 md:p-8 shadow-card"
    >
      <h2 className="text-xl md:text-2xl font-bold text-[var(--text)] mb-6">
        Featured Work
      </h2>
      <ul className="grid md:grid-cols-2 gap-4">
        {featured.items.map((f) => (
          <li
            key={f.title}
            className="group rounded-xl border border-[var(--border)] p-5 bg-[color:var(--bg-elev)] hover:border-cyan-300/60 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-[var(--text)] leading-tight">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{f.desc}</p>
              </div>
              <a href={f.url} target="_blank" rel="noreferrer" className="btn">
                Watch
              </a>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {f.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-full border border-[var(--border)] bg-[var(--card)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
