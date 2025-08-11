import React from "react";
import { work } from "../content";

export default function WorkHistory() {
  return (
    <section
      id="work"
      className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-6 md:p-8 shadow-card"
    >
      <h2 className="text-xl md:text-2xl font-bold text-[var(--text)] mb-6">
        Work Highlights
      </h2>
      <ul className="grid md:grid-cols-2 gap-4">
        {work.jobs.map((job) => (
          <li
            key={job.company + job.role}
            className="group rounded-xl border border-[var(--border)] p-5 bg-[color:var(--bg-elev)] hover:border-cyan-300/60 transition-colors"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-semibold text-[var(--text)]">
                {job.role} · {job.company}
              </h3>
              <span className="text-xs text-[var(--muted)] whitespace-nowrap">
                {job.period}
              </span>
            </div>
            <ul className="mt-3 list-disc pl-5 text-sm text-[var(--muted)] space-y-1">
              {job.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
