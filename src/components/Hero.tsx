import React from "react";
import { site } from "../content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-[var(--card)] border border-[var(--border)] shadow-card">
      <div className="absolute inset-0 opacity-40 [background:radial-gradient(900px_600px_at_10%_0%,theme(colors.cyan.300/.3),transparent_60%),radial-gradient(700px_500px_at_90%_20%,theme(colors.violet.300/.25),transparent_60%)]" />
      <div className="relative p-8 md:p-12 grid gap-6 md:grid-cols-[1.3fr_.7fr] items-center">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--text)]">
            {site.name}
            <span className="block text-lg md:text-2xl font-semibold text-cyan-300/90">
              {site.tagline}
            </span>
          </h1>
          <p className="text-[var(--muted)] max-w-prose">{site.blurb}</p>
          <div className="flex flex-wrap gap-3">
            {site.cta.map((c) => (
              <a
                key={c.href}
                href={c.href}
                className="btn primary"
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noreferrer" : undefined}
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
        <div className="aspect-video rounded-xl overflow-hidden border border-[var(--border)] bg-black/60">
          <iframe
            className="w-full h-full"
            src={site.reelEmbed}
            title="Portfolio Reel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
