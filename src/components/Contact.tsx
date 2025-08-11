import React from "react";
import { site } from "../content";

export default function Contact() {
  return (
    <section
      id="contact"
      className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-6 md:p-10 shadow-card text-center"
    >
      <h2 className="text-xl md:text-2xl font-bold text-[var(--text)] mb-2">
        What’s Next?
      </h2>
      <p className="text-[var(--muted)] max-w-prose mx-auto mb-5">
        I'm currently open for motion design, editing, and AE instruction. Need
        clean transitions, narrative chops, or help leveling up your team? Let’s
        talk.
      </p>
      <a className="btn primary" href={site.contactHref}>
        Hit Me Up
      </a>
    </section>
  );
}
