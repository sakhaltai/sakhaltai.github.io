import React from "react";
import { site } from "../content";

export default function Contact() {
  const email = site.contactHref.replace("mailto:", "");
  const [copied, setCopied] = React.useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  }

  return (
    <section
      id="contact"
      className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-6 md:p-10 shadow-card text-center"
    >
      <h2 className="text-xl md:text-2xl font-bold text-[var(--text)] mb-2">
        What’s Next?
      </h2>
      <p className="text-[var(--muted)] max-w-prose mx-auto mb-5">
        I’m open for motion design, editing, and AE instruction. Reach out
        anytime.
      </p>

      <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-elev)] px-3 py-2">
        <code className="text-sm">{email}</code>
        <button onClick={copyEmail} className="btn">
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Optional: simple form later (Formspree/Getform/Netlify). */}
    </section>
  );
}
