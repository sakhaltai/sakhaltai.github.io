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
            className="group rounded-xl border border-[var(--border)] overflow-hidden bg-[color:var(--bg-elev)] hover:border-cyan-300/60 transition-colors"
          >
            {f.thumb && (
              <a
                href={f.url}
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={f.thumb}
                    alt={f.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            )}
            <div className="p-5">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-semibold text-[var(--text)] leading-tight">
                  {f.title}
                </h3>
                <a
                  href={f.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Watch
                </a>
              </div>
              <p className="mt-2 text-sm text-[var(--muted)]">{f.desc}</p>
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
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
