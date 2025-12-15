import React, { useMemo, useState } from "react";
import { work } from "../content";

export default function WorkHistory() {
  // multiple-open: store indices that are open
  const [openSet, setOpenSet] = useState<Set<number>>(() => new Set([0]));

  const jobs = work.jobs;

  function toggle(i: number) {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
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

      <div className="space-y-3 md:space-y-4">
        {jobs.map((job, i) => {
          const isOpen = openSet.has(i);
          const contentId = `workhistory-panel-${i}`;
          const buttonId = `workhistory-button-${i}`;

          return (
            <div
              key={job.company + job.role + i}
              className="rounded-xl border border-[var(--border)] bg-[color:var(--bg-elev)] overflow-hidden"
            >
              <button
                id={buttonId}
                type="button"
                className="w-full text-left cursor-pointer flex items-start justify-between gap-4 p-5"
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => toggle(i)}
              >
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
                  className={`mt-1 size-5 shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-90" : "rotate-0"
                  }`}
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
              </button>

              {/* Always-in-DOM panel so animation works every time */}
              <div
                id={contentId}
                role="region"
                aria-labelledby={buttonId}
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div
                    className={`transition-all duration-200 ease-out ${
                      isOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-1"
                    }`}
                  >
                    <ul className="px-5 pb-5 pt-2 list-disc pl-6 text-sm text-[var(--muted)] space-y-1">
                      {job.points.map((p: string, idx: number) => (
                        <li key={idx}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
