import React from "react";
import { about } from "../content";

export default function About() {
  return (
    <section
      id="about"
      className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-6 md:p-8 shadow-card"
    >
      <h2 className="text-xl md:text-2xl font-bold text-[var(--text)] mb-4">
        About Me
      </h2>
      <div className="space-y-4 text-[var(--muted)]">
        {about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <div className="mt-6">
        <h3 className="font-semibold text-[var(--text)] mb-2">Tools I use</h3>
        <div className="flex flex-wrap gap-2">
          {about.skills.map((s) => (
            <span
              key={s}
              className="text-xs px-2 py-1 rounded-full border border-[var(--border)] bg-[var(--card)]"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
