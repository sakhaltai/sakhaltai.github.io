// src/pages/Services.tsx
//
// ========== HOW TO ADD MEDIA ==========
// 1. Drop your image/gif/video files into:  public/services/
// 2. Reference them in content.ts in the `services.offerings` array
//    using the path relative to public, e.g. "services/rodeo-scrapers.png"
// 3. For videos (.mp4, .webm), the component auto-detects and renders a <video> tag.
// =======================================

import { services } from "../content";

function isVideo(src: string) {
  return /\.(mp4|webm|mov)$/i.test(src);
}

export default function Services() {
  return (
    <main className="grid gap-6 md:gap-8">
      {/* Intro */}
      <section className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-6 md:p-10 shadow-card">
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--text)]">
          {services.headline}
        </h1>
        <p className="text-[var(--muted)] mt-3 max-w-prose text-base md:text-lg leading-relaxed">
          {services.intro}
        </p>
      </section>

      {/* Offerings */}
      {services.offerings.map((o) => (
        <section
          key={o.title}
          className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-6 md:p-8 shadow-card"
        >
          <h2 className="text-xl md:text-2xl font-bold text-[var(--text)] mb-1">
            {o.title}
          </h2>
          <p className="text-[var(--muted)] mb-5 max-w-prose">{o.desc}</p>

          {/* Highlights */}
          {o.highlights && o.highlights.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {o.highlights.map((h) => (
                <span
                  key={h}
                  className="text-xs px-2 py-1 rounded-full border border-[var(--border)] bg-[var(--card)]"
                >
                  {h}
                </span>
              ))}
            </div>
          )}

          {/* Case study callout */}
          {o.caseStudy && (
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/[0.04] p-4 md:p-5 mb-5">
              <h3 className="font-semibold text-[var(--text)] text-sm mb-1">
                {o.caseStudy.label}
              </h3>
              <p className="text-sm text-[var(--muted)]">{o.caseStudy.text}</p>
            </div>
          )}

          {/* Media grid — screenshots, recordings, demos */}
          {o.media && o.media.length > 0 && (
            <div className="grid sm:grid-cols-2 gap-3">
              {o.media.map((m) => (
                <div
                  key={m.src}
                  className="rounded-xl border border-[var(--border)] overflow-hidden bg-[color:var(--bg-elev)]"
                >
                  {isVideo(m.src) ? (
                    <video
                      src={m.src}
                      controls
                      muted
                      playsInline
                      className="w-full aspect-video object-cover"
                    />
                  ) : (
                    <img
                      src={m.src}
                      alt={m.alt}
                      className="w-full aspect-video object-cover"
                    />
                  )}
                  {m.caption && (
                    <p className="text-xs text-[var(--muted)] px-3 py-2">
                      {m.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Empty state — remind Nic to add media */}
          {(!o.media || o.media.length === 0) && (
            <div className="rounded-xl border border-dashed border-[var(--border)] p-6 text-center text-sm text-[var(--muted)]">
              Screenshots / recordings coming soon.
            </div>
          )}
        </section>
      ))}

      {/* CTA */}
      <section className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-6 md:p-10 shadow-card text-center">
        <h2 className="text-xl md:text-2xl font-bold text-[var(--text)] mb-2">
          {services.ctaHeadline}
        </h2>
        <p className="text-[var(--muted)] max-w-prose mx-auto mb-5">
          {services.ctaBody}
        </p>
        <a href={services.ctaHref} className="btn primary">
          {services.ctaLabel}
        </a>
      </section>
    </main>
  );
}
