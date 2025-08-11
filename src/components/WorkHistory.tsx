import React from "react";
import { work } from "../content";

export default function WorkHistory() {
  const wrapRef = React.useRef<HTMLDivElement>(null);

  // Ensure only one <details> is open at a time
  function handleToggle(openIndex: number) {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const items = Array.from(wrap.querySelectorAll("details"));
    items.forEach((el, i) => {
      if (i !== openIndex && el.hasAttribute("open"))
        el.removeAttribute("open");
    });
  }

  return (
    <section
      id="work"
      className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-4 md:p-6 shadow-card"
    >
      <h2 className="text-xl md:text-2xl font-bold text-[var(--text)] mb-3 md:mb-4">
        Work History
      </h2>

      <div
        ref={wrapRef}
        className="space-y-3 md:space-y-4 [&_summary::-webkit-details-marker]:hidden"
      >
        {work.jobs.map((job, i) => (
          <details
            key={job.company + job.role + i}
            onToggle={() => handleToggle(i)}
            className="group rounded-xl border border-[var(--border)] bg-[color:var(--bg-elev)]"
            {...(i === 0 ? { open: true } : {})}
          >
            <summary className="list-none cursor-pointer flex items-start justify-between gap-4 p-5">
              <div className="min-w-0">
                <h3 className="font-semibold text-[var(--text)] leading-tight">
                  {job.role} · {job.company}
                </h3>
                <span className="text-xs text-[var(--muted)]">
                  {job.period}
                </span>
              </div>
              {/* chevron */}
              <svg
                className="mt-1 size-5 shrink-0 transition-transform duration-200 group-open:rotate-90"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M9 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </summary>

            <ul className="px-5 pb-5 -mt-2 list-disc pl-6 text-sm text-[var(--muted)] space-y-1">
              {job.points.map((p: string, idx: number) => (
                <li key={idx}>{p}</li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </section>
  );
}
