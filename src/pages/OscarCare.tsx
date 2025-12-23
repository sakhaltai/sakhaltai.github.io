// src/pages/OscarCare.tsx

import React, { useEffect, useMemo, useState } from "react";

function useNoIndexMeta(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;

    const existing = document.querySelector<HTMLMetaElement>(
      'meta[name="robots"]'
    );
    const meta = existing ?? document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex,nofollow";
    if (!existing) document.head.appendChild(meta);

    return () => {
      if (!existing && meta.parentNode) meta.parentNode.removeChild(meta);
    };
  }, [enabled]);
}

function Toast({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999] px-3">
      <div className="bg-[var(--bg-elev)] border border-[var(--border)] shadow-card rounded-2xl px-4 py-2 text-sm break-anywhere">
        {message}
      </div>
    </div>
  );
}

function SectionCard(props: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={props.id}
      className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-4 md:p-6 shadow-card overflow-hidden scroll-mt-24"
    >
      <div className="flex flex-col gap-1 min-w-0">
        <h2 className="text-lg md:text-xl font-semibold">{props.title}</h2>
        {props.subtitle ? (
          <p className="text-sm text-[var(--muted)] break-anywhere">
            {props.subtitle}
          </p>
        ) : null}
      </div>

      <div className="mt-4 min-w-0">{props.children}</div>
    </section>
  );
}

function KV(props: { k: string; v: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 py-2 border-b border-[var(--border)] last:border-b-0 min-w-0">
      <div className="text-sm text-[var(--muted)] sm:max-w-[45%] break-anywhere">
        {props.k}
      </div>
      <div className="text-sm sm:text-right sm:max-w-[55%] min-w-0 break-anywhere">
        {props.v}
      </div>
    </div>
  );
}

function Chip(props: {
  children: React.ReactNode;
  tone?: "quiet" | "nav";
  href?: string;
  onClick?: () => void;
}) {
  const base =
    "inline-flex items-center rounded-full text-xs border border-[var(--border)] transition";
  const quiet = "bg-[var(--bg-elev)] text-[var(--muted)] px-2.5 py-1";
  const nav =
    "bg-[var(--card)] text-[var(--text)] px-3 py-1.5 hover:border-[rgb(103_232_249_/_.8)]";

  const cls = `${base} ${props.tone === "nav" ? nav : quiet}`;

  if (props.href) {
    return (
      <a className={cls} href={props.href}>
        {props.children}
      </a>
    );
  }

  return (
    <button type="button" className={cls} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

function CopyPill(props: {
  label: string;
  value: string;
  toastMsg: string;
  onToast: (msg: string) => void;
}) {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-elev)]
                 px-3 py-1 text-xs text-[var(--muted)] hover:border-[rgb(103_232_249_/_.8)] transition
                 max-w-full overflow-hidden"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(props.value);
          props.onToast(props.toastMsg);
        } catch {}
      }}
      title={`Copy ${props.label}`}
    >
      <span className="truncate min-w-0 break-anywhere">
        {props.label}: <span className="text-[var(--text)]">{props.value}</span>
      </span>
      <span className="shrink-0 opacity-70">⧉</span>
    </button>
  );
}

function IconLink(props: {
  href: string;
  label: string;
  title: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-[var(--border)] bg-[var(--card)]
                 hover:border-[rgb(103_232_249_/_.8)] transition shrink-0"
      href={props.href}
      aria-label={props.label}
      title={props.title}
      target={props.external ? "_blank" : undefined}
      rel={props.external ? "noreferrer" : undefined}
    >
      {props.children}
    </a>
  );
}

export default function OscarCare() {
  useNoIndexMeta(true);

  const [toast, setToast] = useState<string | null>(null);
  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 1300);
    return () => window.clearTimeout(t);
  }, [toast]);

  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ====== EDIT THESE (optional, but nice for sitters) ======
  // ====== EDIT THESE ======
  const NIC_EMAIL = "sakhaltai@gmail.com";
  const NIC_DISCORD_USER = "nikkun";
  const NIC_DISCORD_URL = "https://discordapp.com/users/87359002417049600";

  const NIC_SIGNAL_USER = "nicromancer.05";
  const NIC_SIGNAL_URL =
    "https://signal.me/#eu/K5UOi9nwausEZEDRbVCgVEIdVL_qZQAqTXOYFYbENkwJ3uaIxwxFZZMnB9uXlRld";

  const JESSIE_EMAIL = "j.e.stein27@gmail.com";
  const JESSIE_DISCORD_USER = "jes5443";
  const JESSIE_DISCORD_URL = "https://discordapp.com/users/XXXXXXXXXXXXXXX";

  const JESSIE_SIGNAL_USER = "jeshartmann.27";
  const JESSIE_SIGNAL_URL = "https://signal.me/#eu/XXXXXXXXXXXXXXX";
  const NIC_PHONE = "509-670-6373";
  const JESSIE_PHONE = "206-992-7597";

  // ========================
  // ========================================================

  const sections = useMemo(
    () => [
      { id: "basics", label: "Basics" },
      { id: "routine", label: "Daily routine" },
      { id: "water", label: "Water changes" },
      { id: "feeding", label: "Feeding" },
      { id: "lighting", label: "Heat & light" },
      { id: "contacts", label: "Contacts" },
      { id: "notes", label: "Notes" },
    ],
    []
  );

  return (
    <main className="grid gap-6 md:gap-8">
      <style>{`
        @media print {
          .print-hide { display: none !important; }
          body { color: #000 !important; }
          a { color: #000 !important; text-decoration: underline !important; }
          .shadow-card { box-shadow: none !important; }
        }
      `}</style>

      <Toast message={toast} />
      <div id="top" />

      {/* HERO */}
      <section className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-6 md:p-8 shadow-card overflow-hidden">
        <div className="flex flex-col gap-4 min-w-0">
          <div className="min-w-0">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight break-anywhere">
              Oscar — Care Sheet
            </h1>

            <p className="text-sm md:text-base text-[var(--muted)] mt-1 break-anywhere">
              Key idea: clean water → feed → clean water. Minimum 2 water
              changes/day.
            </p>

            <div className="mt-3 flex flex-wrap gap-2 min-w-0">
              <Chip tone="quiet">Female</Chip>
              <Chip tone="quiet">Malayan snail eater</Chip>
              <Chip tone="quiet">~40 years old</Chip>
              <Chip tone="quiet">Heat bulb 24/7</Chip>
            </div>
          </div>

          {/* Quick actions */}
          <div className="print-hide grid gap-2 sm:grid-cols-3">
            <a className="btn primary" href="#water">
              Water rules
            </a>
            <a className="btn primary" href="#feeding">
              Feeding
            </a>
            <a className="btn primary" href="#emergency">
              Emergency
            </a>
          </div>

          {/* Jump links */}
          <div className="print-hide">
            <div className="text-xs font-semibold text-[var(--muted)] mb-2">
              Jump to section
            </div>
            <div className="flex flex-wrap gap-2">
              {sections.map((s) => (
                <Chip key={s.id} tone="nav" href={`#${s.id}`}>
                  {s.label}
                </Chip>
              ))}
              <Chip
                tone="nav"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Top
              </Chip>
            </div>
          </div>

          <div className="text-sm md:text-base leading-relaxed break-anywhere">
            Oscar is particular about water cleanliness. She’ll be happiest (and
            healthiest) when she can be in clean water as much as possible for
            her shell + skin.
          </div>
        </div>
      </section>

      {/* Basics */}
      <SectionCard id="basics" title="Basics">
        <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4 overflow-hidden">
          <KV k="Name" v="Oscar" />
          <KV k="Sex" v="Female" />
          <KV k="Species" v="Malayan snail eater" />
          <KV k="Age" v="~40 years old" />
          <KV k="Grooming" v="Nails and beak were trimmed before arrival." />
        </div>
      </SectionCard>

      {/* Routine */}
      <SectionCard
        id="routine"
        title="Daily routine"
        subtitle="The only non-negotiable is water cleanliness."
      >
        <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4 overflow-hidden">
          <div className="text-sm font-semibold mb-2">A simple day</div>
          <ol className="text-sm text-[var(--muted)] grid gap-2 list-decimal pl-5 break-anywhere">
            <li>Check water: clear? any poo? (if yes → change water first)</li>
            <li>Feed (sprinkle pellets into the water bowl)</li>
            <li>
              After she’s done eating, she leaves the bowl → change water again
            </li>
            <li>
              Repeat later in the day (minimum two total water changes/day)
            </li>
          </ol>
        </div>
      </SectionCard>

      {/* Water */}
      <SectionCard
        id="water"
        title="Water changes"
        subtitle="Minimum 2×/day. More is even better."
      >
        <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4 overflow-hidden">
          <div className="text-sm font-semibold">Change the water when:</div>

          <ul className="text-sm text-[var(--muted)] grid gap-2 list-disc pl-5 mt-3 break-anywhere">
            <li>
              <strong>After feeding</strong> — once she leaves her bowl, that
              means she’s done.
            </li>
            <li>If the water looks discolored.</li>
            <li>If there’s a poo in the water.</li>
            <li>
              Even if none of the above: do it anyway at least twice per day.
            </li>
          </ul>

          <div className="mt-4 rounded-2xl bg-[var(--card)] border border-[var(--border)] p-4 overflow-hidden">
            <div className="text-sm font-semibold mb-1">
              Important rule: change before feeding if there’s poo
            </div>
            <p className="text-sm text-[var(--muted)] break-anywhere">
              If you notice a poo in her water,{" "}
              <strong>don’t feed her until you’ve changed the water</strong>.
              She can get sick if she eats while the water is dirty (especially
              if she eats her poo).
            </p>
          </div>

          <p className="text-sm text-[var(--muted)] mt-4 break-anywhere">
            Yes, it’s a little weird that she eats and poops in the same bowl.
            That’s just how she is — the workaround is clean water, often.
          </p>
        </div>
      </SectionCard>

      {/* Feeding */}
      <SectionCard id="feeding" title="Feeding">
        <div className="grid md:grid-cols-2 gap-4 min-w-0">
          <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4 overflow-hidden">
            <div className="text-sm font-semibold mb-2">What to feed</div>
            <KV k="Food" v="Provided pellets" />
            <KV
              k="Amount"
              v={
                <>
                  Sprinkle{" "}
                  <strong className="font-semibold">~1/2 handful</strong> into
                  her water bowl
                  <div className="text-xs text-[var(--muted)] mt-1 break-anywhere">
                    Not scientific — just make sure there’s enough.
                  </div>
                </>
              }
            />
            <KV
              k="Overfeeding?"
              v="Not really a problem — she leaves the bowl when she’s full."
            />
          </div>

          <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4 overflow-hidden">
            <div className="text-sm font-semibold mb-2">Feeding order</div>
            <ol className="text-sm text-[var(--muted)] grid gap-2 list-decimal pl-5 break-anywhere">
              <li>
                Check bowl for poo / discoloration →{" "}
                <strong>change water if needed</strong>
              </li>
              <li>Sprinkle pellets into clean water</li>
              <li>When she’s done (leaves bowl) → change water again</li>
            </ol>
          </div>
        </div>
      </SectionCard>

      {/* Lighting */}
      <SectionCard id="lighting" title="Heat & light">
        <div className="grid md:grid-cols-2 gap-4 min-w-0">
          <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4 overflow-hidden">
            <div className="text-sm font-semibold mb-2">
              Heat bulb (over her log)
            </div>
            <p className="text-sm text-[var(--muted)] break-anywhere">
              <strong>On 24/7.</strong> She’s cold-blooded and needs steady
              warmth.
            </p>
          </div>

          <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4 overflow-hidden">
            <div className="text-sm font-semibold mb-2">Light</div>
            <p className="text-sm text-[var(--muted)] break-anywhere">
              The regular light can be:
            </p>
            <ul className="text-sm text-[var(--muted)] grid gap-2 list-disc pl-5 mt-2 break-anywhere">
              <li>on a timer, or</li>
              <li>turned on in the morning and off at night</li>
            </ul>
          </div>
        </div>
      </SectionCard>

      {/* Contacts */}
      <SectionCard id="contacts" title="Contacts">
        <div className="grid md:grid-cols-2 gap-4 min-w-0">
          {/* NIC */}
          <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4 overflow-hidden">
            <div className="text-sm font-semibold mb-3">Nic</div>

            <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-4 overflow-hidden">
              <div className="flex items-start justify-between gap-3 min-w-0">
                <div className="min-w-0">
                  <div className="text-sm font-semibold break-anywhere">
                    Nicholas (Nic) Hartmann
                  </div>
                  <div className="text-xs text-[var(--muted)] mt-1 break-anywhere">
                    Signal = urgent • Discord = async
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <IconLink
                    href={`mailto:${NIC_EMAIL}`}
                    label="Email Nic"
                    title={`Email ${NIC_EMAIL}`}
                  >
                    <span className="text-sm">✉</span>
                  </IconLink>
                  <IconLink
                    href={NIC_SIGNAL_URL}
                    label="Nic Signal"
                    title="Open Nic Signal link"
                    external
                  >
                    <span className="text-sm">✦</span>
                  </IconLink>
                  <IconLink
                    href={NIC_DISCORD_URL}
                    label="Nic Discord"
                    title="Open Nic Discord profile"
                    external
                  >
                    <span className="text-sm">≋</span>
                  </IconLink>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-2 min-w-0">
                <CopyPill
                  label="Email"
                  value={NIC_EMAIL}
                  toastMsg="Nic email copied!"
                  onToast={setToast}
                />
                {NIC_SIGNAL_USER && !NIC_SIGNAL_USER.includes("USERNAME") ? (
                  <CopyPill
                    label="Signal"
                    value={NIC_SIGNAL_USER}
                    toastMsg="Nic Signal username copied!"
                    onToast={setToast}
                  />
                ) : null}
                <CopyPill
                  label="Discord"
                  value={NIC_DISCORD_USER}
                  toastMsg="Nic Discord username copied!"
                  onToast={setToast}
                />
              </div>
            </div>
          </div>

          {/* JESSIE */}
          <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4 overflow-hidden">
            <div className="text-sm font-semibold mb-3">Jessie</div>

            <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-4 overflow-hidden">
              <div className="flex items-start justify-between gap-3 min-w-0">
                <div className="min-w-0">
                  <div className="text-sm font-semibold break-anywhere">
                    Jessica (Jessie) Hartmann
                  </div>
                  <div className="text-xs text-[var(--muted)] mt-1 break-anywhere">
                    Signal = urgent • Discord = async
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <IconLink
                    href={`mailto:${JESSIE_EMAIL}`}
                    label="Email Jessie"
                    title={`Email ${JESSIE_EMAIL}`}
                  >
                    <span className="text-sm">✉</span>
                  </IconLink>
                  <IconLink
                    href={JESSIE_SIGNAL_URL}
                    label="Jessie Signal"
                    title="Open Jessie Signal link"
                    external
                  >
                    <span className="text-sm">✦</span>
                  </IconLink>
                  <IconLink
                    href={JESSIE_DISCORD_URL}
                    label="Jessie Discord"
                    title="Open Jessie Discord profile"
                    external
                  >
                    <span className="text-sm">≋</span>
                  </IconLink>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-2 min-w-0">
                <CopyPill
                  label="Email"
                  value={JESSIE_EMAIL}
                  toastMsg="Jessie email copied!"
                  onToast={setToast}
                />
                {JESSIE_SIGNAL_USER &&
                !JESSIE_SIGNAL_USER.includes("USERNAME") ? (
                  <CopyPill
                    label="Signal"
                    value={JESSIE_SIGNAL_USER}
                    toastMsg="Jessie Signal username copied!"
                    onToast={setToast}
                  />
                ) : null}
                {JESSIE_DISCORD_USER ? (
                  <CopyPill
                    label="Discord"
                    value={JESSIE_DISCORD_USER}
                    toastMsg="Jessie Discord username copied!"
                    onToast={setToast}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* Emergency */}
      <SectionCard id="emergency" title="Emergency">
        <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4 overflow-hidden">
          <div className="text-sm font-semibold mb-2">What to do</div>
          <ul className="text-sm text-[var(--muted)] grid gap-2 list-disc pl-5 break-anywhere">
            <li>
              Call or message us first. We’ll advise and we’ll call the vet.
            </li>
            <li>
              In ~30 years of Jessie owning her, we’ve never seen an emergency —
              but still, reach out if anything feels off.
            </li>
          </ul>

          <div className="mt-4 flex flex-wrap gap-2 min-w-0 print-hide">
            {NIC_PHONE ? (
              <CopyPill
                label="Nic"
                value={NIC_PHONE}
                toastMsg="Nic phone copied!"
                onToast={setToast}
              />
            ) : (
              <div className="text-sm text-[var(--muted)]">
                Add phone numbers in <code>OscarCare.tsx</code> (NIC_PHONE /
                JESSIE_PHONE)
              </div>
            )}
            {JESSIE_PHONE ? (
              <CopyPill
                label="Jessie"
                value={JESSIE_PHONE}
                toastMsg="Jessie phone copied!"
                onToast={setToast}
              />
            ) : null}
          </div>
        </div>
      </SectionCard>

      {/* Notes */}
      <SectionCard id="notes" title="Notes">
        <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4 overflow-hidden">
          <div className="text-sm text-[var(--muted)] leading-relaxed break-anywhere">
            If Oscar seems grumpy, it’s almost always the same fix:{" "}
            <strong>fresh water.</strong>
            <br />
            <br />
            Clean water makes her more likely to hang out in the bowl (which she
            needs for healthy shell + skin).
          </div>
        </div>
      </SectionCard>

      {/* Floating Top button */}
      <div className="print-hide fixed bottom-4 right-4 z-[9999]">
        <button
          type="button"
          className={`btn transition-all duration-200 ${
            showTop
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          }`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          title="Back to top"
        >
          ↑ Top
        </button>
      </div>

      {/* Print (bottom) */}
      <section className="print-hide rounded-2xl bg-[var(--card)] border border-[var(--border)] p-4 md:p-6 shadow-card overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="text-sm text-[var(--muted)]">
            Want a paper copy for the fridge or counter?
          </div>
          <button className="btn primary" onClick={() => window.print()}>
            Print this page
          </button>
        </div>
      </section>

      <div className="h-8" />
    </main>
  );
}
