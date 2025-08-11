import React from "react";
import { teaching } from "../content";

export default function Teaching() {
  return (
    <main className="grid gap-6 md:gap-8">
      <section className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-6 md:p-8 shadow-card">
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--text)]">
          Teaching Archive
        </h1>
        <p className="text-[var(--muted)] mt-2">
          Classes and supplemental videos from Shoreline CC (AE, Blender,
          Unreal).
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {teaching.videos.map((src) => (
            <div
              key={src}
              className="aspect-video rounded-xl overflow-hidden border border-[var(--border)] bg-black/60"
            >
              <iframe
                className="w-full h-full"
                src={src}
                title="Teaching videos"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {teaching.playlists.map((p) => (
            <a
              key={p.url}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              {p.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
