// src/pages/RockyCare.tsx

import React, { useEffect, useMemo, useState } from "react";

type Photo = {
  src: string;
  alt: string;
  caption?: string;
};

type MedImage = {
  src: string;
  alt: string;
  label: string;
};

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

function IconCopyButton(props: {
  value: string;
  onCopied: (msg: string) => void;
  label?: string;
}) {
  const [copied, setCopied] = React.useState(false);

  return (
    <button
      type="button"
      className="relative inline-flex items-center justify-center h-8 w-8 rounded-full border border-[var(--border)] bg-[var(--card)]
                 hover:border-[rgb(103_232_249_/_.8)] transition shrink-0"
      aria-label={props.label ?? "Copy"}
      title={props.label ?? "Copy"}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(props.value);
          setCopied(true);
          props.onCopied("Copied!");
          window.setTimeout(() => setCopied(false), 800);
        } catch {
          // ignore
        }
      }}
    >
      <span
        className={`absolute text-sm transition-all duration-150 ease-out ${
          copied ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"
        }`}
      >
        ⧉
      </span>
      <span
        className={`absolute text-sm transition-all duration-150 ease-out ${
          copied ? "opacity-100 -translate-y-1" : "opacity-0 translate-y-0"
        }`}
      >
        ✓
      </span>
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

function Gallery(props: { title?: string; photos: Photo[] }) {
  if (!props.photos.length) return null;

  return (
    <div className="mt-5">
      <div className="text-sm font-semibold mb-3">
        {props.title ?? "Gallery"}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {props.photos.map((p) => (
          <figure
            key={p.src}
            className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl overflow-hidden"
          >
            <img
              src={p.src}
              alt={p.alt}
              className="w-full aspect-square object-cover"
              loading="lazy"
            />
            <figcaption className="p-3 text-xs text-[var(--muted)] break-anywhere">
              {p.caption ?? p.alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function MedImageGrid(props: { items: MedImage[]; note?: string }) {
  const [open, setOpen] = useState<MedImage | null>(null);
  if (!props.items.length) return null;

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="mt-3">
      {props.note ? (
        <div className="text-xs text-[var(--muted)] mb-2 break-anywhere">
          {props.note}
        </div>
      ) : null}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {props.items.map((m) => (
          <div
            key={m.src}
            className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl overflow-hidden"
          >
            <img
              src={m.src}
              alt={m.alt}
              className="w-full aspect-square object-cover bg-white cursor-zoom-in"
              loading="lazy"
              onClick={() => setOpen(m)}
            />
            <div className="p-3 text-xs text-[var(--muted)] break-anywhere">
              {m.label}
            </div>
          </div>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center p-4"
          onClick={() => setOpen(null)}
        >
          <div
            className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl shadow-card max-w-[900px] w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-3 border-b border-[var(--border)] min-w-0">
              <div className="text-sm font-semibold min-w-0 truncate break-anywhere">
                {open.label}
              </div>
              <button className="btn shrink-0" onClick={() => setOpen(null)}>
                Close
              </button>
            </div>

            <div className="p-4">
              <img
                src={open.src}
                alt={open.alt}
                className="w-full max-h-[75vh] object-contain bg-white rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function RockyCare() {
  useNoIndexMeta(true);

  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 1300);
    return () => window.clearTimeout(t);
  }, [toast]);

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 120);
    };

    onScroll(); // seed on load
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
  // ========================

  const sections = useMemo(
    () => [
      { id: "handoff", label: "Handoff" },
      { id: "contacts", label: "Contacts" },
      { id: "rocky", label: "About Rocky" },
      { id: "feeding", label: "Feeding" },
      { id: "meds", label: "Daily meds" },
      { id: "shots", label: "Injections" },
      { id: "vet", label: "Vet" },
      { id: "behavior", label: "Behavior" },
      { id: "comfort", label: "Comfort" },
      { id: "accidents", label: "Accidents" },
      { id: "pay", label: "Payment" },
    ],
    []
  );

  const galleryPhotos: Photo[] = [];

  const medImages: MedImage[] = [
    {
      src: "/rocky/meds/gabapentin.png",
      alt: "Gabapentin capsule",
      label: "Gabapentin 300 mg capsule",
    },
    {
      src: "/rocky/meds/pentoxifylline.jpg",
      alt: "Pentoxifylline tablet",
      label: "Pentoxifylline 400 mg tablet",
    },
    {
      src: "/rocky/meds/adequan.jpg",
      alt: "Adequan vial",
      label: "Adequan vial (1.4 mL / q3w)",
    },
    {
      src: "/rocky/meds/librela.jpg",
      alt: "Librela vial",
      label: "Librela (monthly @ vet)",
    },
  ];

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

      {/* HERO (clean hierarchy: vitals → quick actions → jump links) */}
      <section className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-6 md:p-8 shadow-card overflow-hidden">
        <div className="flex flex-col gap-4 min-w-0">
          <div className="min-w-0">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight break-anywhere">
              Rocky — Rover Care Sheet
            </h1>
            <p className="text-sm md:text-base text-[var(--muted)] mt-1 break-anywhere">
              Dec 26, 2025 – Jan 30, 2026
            </p>

            {/* Vitals (quiet, non-action) */}
            <div className="mt-3 flex flex-wrap gap-2 min-w-0">
              <Chip tone="quiet">Age 16</Chip>
              <Chip tone="quiet">~70 lbs coonhound</Chip>
              <Chip tone="quiet">Arthritis / mobility</Chip>
              <Chip tone="quiet">Sweet’s syndrome (managed)</Chip>
            </div>
          </div>

          {/* Quick actions (clearly “do this now”) */}
          <div className="print-hide grid gap-2 sm:grid-cols-3">
            <a className="btn primary" href="#contacts">
              Emergency contacts
            </a>
            <a className="btn primary" href="#meds">
              Daily meds
            </a>
            <a className="btn primary" href="#vet">
              Vet info
            </a>
          </div>

          {/* Jump links (small, consistent chips) */}
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
            Rocky is a very mellow, sweet, people-oriented dog. He loves being
            near you, getting pets, and just existing together.
          </div>
        </div>
      </section>

      {/* Travel & Handoff */}
      <SectionCard id="handoff" title="Travel & Handoff">
        <div className="grid md:grid-cols-2 gap-4 min-w-0">
          <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4 overflow-hidden">
            <KV k="Owners away" v="Dec 25, 2025 – Jan 30, 2026" />
            <KV k="Drop-off date" v="Dec 26, 2025 (~10am–3pm)" />
            <KV
              k="Who drops off"
              v={
                <>
                  Maija &amp; Louis Stein
                  <div className="text-xs text-[var(--muted)] mt-1 break-anywhere">
                    Blue Subaru Impreza or silver Toyota RAV4
                  </div>
                </>
              }
            />
            <KV
              k="They will bring"
              v="Rocky, food, leash, meds, and supplies"
            />
          </div>

          <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4 overflow-hidden">
            <div className="text-sm font-semibold mb-2">
              Japan time zone quick reference
            </div>
            <div className="text-sm text-[var(--muted)] grid gap-1 break-anywhere">
              <div>
                Japan is <strong>+17 hours</strong> from PST (winter).
              </div>
              <div>PST 8am Monday → JST 1am Tuesday</div>
              <div>PST 5pm Monday → JST 10am Tuesday</div>
            </div>
            <p className="text-sm text-[var(--muted)] mt-3 break-anywhere">
              If something feels time-sensitive, local help is fastest:
              Maija/Louis can assist in-person.
            </p>
          </div>
        </div>
      </SectionCard>

      {/* Contacts */}
      <SectionCard id="contacts" title="Contacts">
        <div className="grid md:grid-cols-2 gap-4 min-w-0">
          {/* Parents */}
          <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4 overflow-hidden">
            <div className="text-sm font-semibold mb-3">Parents</div>

            <div className="grid gap-3 min-w-0">
              {/* NIC */}
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

              {/* JESSIE */}
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

          {/* Emergency contacts (local) */}
          <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4 overflow-hidden">
            <div className="text-sm font-semibold mb-2">
              Emergency contacts (local)
            </div>

            <KV
              k="Maija Stein"
              v={
                <div className="flex flex-wrap items-center gap-2 sm:justify-end min-w-0">
                  <a
                    className="underline break-anywhere min-w-0"
                    href="tel:+12066172193"
                  >
                    206-617-2193
                  </a>
                  <IconCopyButton
                    value="206-617-2193"
                    onCopied={() => setToast("Maija phone copied!")}
                    label="Copy Maija phone"
                  />
                </div>
              }
            />

            <KV
              k="Louis Stein"
              v={
                <div className="flex flex-wrap items-center gap-2 sm:justify-end min-w-0">
                  <a
                    className="underline break-anywhere min-w-0"
                    href="tel:+14258795159"
                  >
                    425-879-5159
                  </a>
                  <IconCopyButton
                    value="425-879-5159"
                    onCopied={() => setToast("Louis phone copied!")}
                    label="Copy Louis phone"
                  />
                </div>
              }
            />

            <p className="text-sm text-[var(--muted)] mt-4 break-anywhere">
              If you ever need local, in-person help (or need to leave Rocky
              alone longer than planned), they’re happy to assist. They’re the
              ones to call in case of any medical emergencies and know where to
              take him (and will cover costs until we’re back).
            </p>
          </div>
        </div>
      </SectionCard>

      {/* About Rocky */}
      <SectionCard id="rocky" title="About Rocky">
        <div className="grid md:grid-cols-2 gap-4 min-w-0">
          <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4 overflow-hidden">
            <div className="text-sm font-semibold mb-2">Basics</div>
            <KV k="Age" v="16" />
            <KV k="Breed / size" v="Coonhound (~70 lbs)" />
            <KV
              k="Health"
              v="Arthritis / mobility issues; Sweet’s syndrome (pentoxifylline)"
            />
          </div>

          <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4 overflow-hidden">
            <div className="text-sm font-semibold mb-2">Mobility & setup</div>
            <ul className="text-sm text-[var(--muted)] grid gap-2 list-disc pl-5 break-anywhere">
              <li>
                Stairs are ok if <strong>carpet</strong> or{" "}
                <strong>natural (non-slippery) wood</strong>.
              </li>
              <li>
                Slippery floors are tough — we’ll provide paw grippies + mats.
              </li>
              <li>He does not need help getting up.</li>
              <li>
                Usually sleeps in a dog bed. He has an extra cushy bed just for
                nighttime.
              </li>
              <li>If he’s allowed on your bed, he loves to snuggle.</li>
            </ul>
          </div>
        </div>
      </SectionCard>

      {/* Feeding */}
      <SectionCard id="feeding" title="Feeding">
        <div className="grid md:grid-cols-2 gap-4 min-w-0">
          <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4 overflow-hidden">
            <div className="text-sm font-semibold mb-2">Food</div>

            <KV
              k="Brand"
              v={
                <a
                  className="underline break-anywhere"
                  href="https://www.purina.com/dogs/shop/pro-plan-specialized-nutrition-sensitive-skin-stomach-salmon-rice-dry-dog-food"
                  target="_blank"
                  rel="noreferrer"
                >
                  Purina Pro Plan Sensitive Skin &amp; Stomach (Salmon)
                </a>
              }
            />
            <KV k="Amount" v="1 slightly heaping cup per meal" />
            <KV k="Storage" v="White bucket (provided)" />

            <div className="mt-4 text-sm font-semibold">
              Schedule (flexible)
            </div>
            <div className="text-sm text-[var(--muted)] mt-2 grid gap-1 break-anywhere">
              <div>Breakfast: usually ~8am</div>
              <div>Dinner: usually ~4pm</div>
              <div>If breakfast is later, dinner can be later — he adapts.</div>
            </div>
          </div>

          <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4 overflow-hidden">
            <div className="text-sm font-semibold mb-2">Walks & treats</div>
            <ul className="text-sm text-[var(--muted)] grid gap-2 list-disc pl-5 break-anywhere">
              <li>Short sniff after meals helps him poop (lol).</li>
              <li>Greenie after he goes pee or poo (we’ll provide).</li>
              <li>Please limit human food — sensitive stomach.</li>
              <li>If you run out of food, we’ll deliver same- or next-day.</li>
            </ul>
          </div>
        </div>
      </SectionCard>

      {/* Medications */}
      <SectionCard id="meds" title="Medications (Daily)">
        <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4 overflow-hidden">
          <div className="text-sm font-semibold">
            Important: pill pockets required
          </div>
          <p className="text-sm text-[var(--muted)] mt-1 break-anywhere">
            If mixed into food, he tastes the meds and spits them out.
          </p>

          <MedImageGrid
            items={medImages}
            note="Optional: add simple “stock-style” med photos here (see /public/rocky/meds/*)."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-4 min-w-0">
          <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4 overflow-hidden">
            <div className="text-sm font-semibold mb-2">Every Breakfast</div>
            <ul className="text-sm text-[var(--muted)] grid gap-2 list-disc pl-5 break-anywhere">
              <li>Gabapentin 300 mg (1 yellow capsule)</li>
              <li>Pentoxifylline 400 mg (1 yellow tablet)</li>
            </ul>
          </div>

          <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4 overflow-hidden">
            <div className="text-sm font-semibold mb-2">Every Dinner</div>
            <ul className="text-sm text-[var(--muted)] grid gap-2 list-disc pl-5 break-anywhere">
              <li>Gabapentin 300 mg (1 yellow capsule)</li>
              <li>Pentoxifylline 400 mg (1 yellow tablet)</li>
            </ul>
          </div>
        </div>

        <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4 mt-4 overflow-hidden">
          <div className="text-sm font-semibold">Extra (as needed)</div>
          <p className="text-sm text-[var(--muted)] mt-1 break-anywhere">
            If he’s moving especially stiff at night, you can give one extra{" "}
            <strong>300 mg gabapentin</strong> in a pill pocket.
          </p>
        </div>
      </SectionCard>

      {/* Injections */}
      <SectionCard id="shots" title="Injections">
        <div className="grid md:grid-cols-2 gap-4 min-w-0">
          <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4 overflow-hidden">
            <div className="flex items-start justify-between gap-3 min-w-0">
              <div className="min-w-0">
                <div className="text-sm font-semibold">Adequan</div>
                <div className="text-sm text-[var(--muted)] mt-1 break-anywhere">
                  1.4 mL every 3 weeks. Adequan + needles provided.
                </div>
              </div>
              <a
                className="btn shrink-0"
                href="https://www.adequancanine.com/for-pet-parents"
                target="_blank"
                rel="noreferrer"
              >
                Info
              </a>
            </div>
            <p className="text-sm text-[var(--muted)] mt-3 break-anywhere">
              Swap injection sides each time (Jan 4 on the right, Jan 25 on the
              left). You’re welcome to administer.
            </p>
          </div>

          <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4 overflow-hidden">
            <div className="flex items-start justify-between gap-3 min-w-0">
              <div className="min-w-0">
                <div className="text-sm font-semibold">Librela</div>
                <div className="text-sm text-[var(--muted)] mt-1 break-anywhere">
                  Monthly injection at the vet.
                </div>
              </div>
              <a
                className="btn shrink-0"
                href="https://www.zoetispetcare.com/products/librela"
                target="_blank"
                rel="noreferrer"
              >
                Info
              </a>
            </div>

            <div className="mt-3 text-sm text-[var(--muted)] grid gap-1 break-anywhere">
              <div>Last shot: Dec 16, 2025</div>
              <div>
                Next due: ~Jan 16, 2026 (appointment will be pre-scheduled)
              </div>
              <div>
                We’ll authorize you as caregiver; payment is on our card on
                file.
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* Vet */}
      <SectionCard id="vet" title="Vet Information">
        <div className="grid md:grid-cols-2 gap-4 min-w-0">
          <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4 overflow-hidden">
            <div className="text-sm font-semibold">Bothell Pet Hospital</div>
            <div className="text-sm text-[var(--muted)] mt-2 grid gap-1 break-anywhere">
              <div>9708 Ormbrek St, Bothell, WA 98011</div>
              <div>
                Phone:{" "}
                <a className="underline break-anywhere" href="tel:+14254863251">
                  425-486-3251
                </a>
              </div>
              <div>
                Website:{" "}
                <a
                  className="underline break-anywhere"
                  href="https://bothellpethospital.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  bothellpethospital.com
                </a>
              </div>
              <div className="mt-2">Hours: Mon–Sat 8am–6pm • Sun closed</div>
            </div>
          </div>

          <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4 overflow-hidden">
            <div className="text-sm font-semibold">
              Emergency: VEG — Lynnwood (24/7)
            </div>
            <div className="text-sm text-[var(--muted)] mt-2 grid gap-1 break-anywhere">
              <div>4725 196th St SW, Lynnwood, WA 98036</div>
              <div>
                Phone:{" "}
                <a className="underline break-anywhere" href="tel:+14253297170">
                  (425) 329-7170
                </a>
              </div>
              <div>
                Website:{" "}
                <a
                  className="underline break-anywhere"
                  href="https://www.veg.com/locations/washington/lynnwood"
                  target="_blank"
                  rel="noreferrer"
                >
                  veg.com/locations/washington/lynnwood
                </a>
              </div>
              <div className="mt-2">
                Or whichever emergency clinic is closest if needed.
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* Behavior */}
      <SectionCard id="behavior" title="Behavior & Temperament">
        <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4 overflow-hidden">
          <ul className="text-sm text-[var(--muted)] grid gap-2 list-disc pl-5 break-anywhere">
            <li>Has never bitten a human or dog.</li>
            <li>No food guarding, no growling, no aggression.</li>
            <li>
              Fine with other animals (will chase squirrels/rabbits if given the
              chance 😉).
            </li>
            <li>Very calm and stoic, especially at the vet.</li>
            <li>Friendly, affectionate, and wants to be near people.</li>
            <li>Loves belly/chest/ear scritches.</li>
          </ul>
        </div>

        <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4 mt-4 overflow-hidden">
          <div className="text-sm font-semibold">Door knocks / barking</div>
          <p className="text-sm text-[var(--muted)] mt-1 break-anywhere">
            He may bark briefly if someone knocks. Calmly saying{" "}
            <em>“Uh ohhhh Rocky, do you need a bath?”</em> usually stops him.
          </p>
        </div>
      </SectionCard>

      {/* Comfort */}
      <SectionCard id="comfort" title="Comfort Philosophy">
        <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4 overflow-hidden">
          <div className="text-sm font-semibold">Comfort &gt; rules</div>
          <p className="text-sm text-[var(--muted)] mt-2 leading-relaxed break-anywhere">
            If Rocky ever seems noticeably more uncomfortable than when you
            first met him, please contact us or Maija/Louis and we’ll consult
            together.
          </p>
          <p className="text-sm text-[var(--muted)] mt-2 leading-relaxed break-anywhere">
            He doesn’t have cancer, diabetes, or other major illnesses — just
            sore joints. We don’t expect any end-of-life issues during this
            stay. What matters most is that he’s comfortable, getting pets, and
            feels your presence.
          </p>
        </div>
      </SectionCard>

      {/* Accidents */}
      <SectionCard id="accidents" title="Accidents">
        <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4 overflow-hidden">
          <p className="text-sm text-[var(--muted)] leading-relaxed break-anywhere">
            Rocky has never peed indoors, but at his age, he may occasionally
            have a poop accident. If that happens, please know we’re very sorry
            and really appreciate your patience. We can provide our carpet
            cleaner and formula for the duration of his stay.
          </p>
        </div>
      </SectionCard>

      {/* Payment */}
      <SectionCard id="pay" title="Payment & Expenses">
        <div className="grid md:grid-cols-2 gap-4 min-w-0">
          <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4 overflow-hidden">
            <KV
              k="Venmo"
              v={
                <div className="flex flex-wrap items-center gap-2 sm:justify-end min-w-0">
                  <span className="break-anywhere min-w-0">@nichartmann</span>
                  <IconCopyButton
                    value="@nichartmann"
                    onCopied={() => setToast("Venmo copied!")}
                    label="Copy Venmo"
                  />
                </div>
              }
            />

            <div className="mt-4 flex items-center justify-between gap-4 print-hide min-w-0">
              <div className="text-sm text-[var(--muted)] min-w-0 break-anywhere">
                QR code (optional)
                <div className="text-xs text-[var(--muted)] mt-1 break-anywhere">
                  File: <code>/public/rocky/venmo-qr.png</code>
                </div>
              </div>

              <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-2 shrink-0">
                <img
                  src="/rocky/venmo-qr.png"
                  alt="Venmo QR code for @nichartmann"
                  className="h-28 w-28 object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="text-sm text-[var(--muted)] mt-4 break-anywhere">
              Reasonable expenses are pre-approved. Just keep us posted.
            </div>
          </div>

          <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4 overflow-hidden">
            <div className="text-sm font-semibold mb-2">Address</div>
            <div className="text-sm text-[var(--muted)] break-anywhere">
              1605 Locust Way
              <br />
              Lynnwood, WA 98036
            </div>

            <div className="flex flex-wrap gap-2 mt-3 print-hide min-w-0">
              <button
                className="btn"
                type="button"
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(
                      "1605 Locust Way, Lynnwood, WA 98036"
                    );
                    setToast("Address copied!");
                  } catch {}
                }}
              >
                Copy address
              </button>
              <a
                className="btn"
                href="https://www.google.com/maps/search/?api=1&query=1605%20Locust%20Way%2C%20Lynnwood%2C%20WA%2098036"
                target="_blank"
                rel="noreferrer"
              >
                Open in Maps
              </a>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* Appreciation */}
      <section className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-6 md:p-8 shadow-card overflow-hidden">
        <div className="text-sm md:text-base leading-relaxed break-anywhere">
          <div className="font-semibold mb-2">Appreciation</div>
          Rocky is basically our child (obviously). We really appreciate your
          patience, understanding, snuggles, and love. If anything comes up or a
          situation changes, don’t hesitate to reach out.
          <br />
          <br />
          As much as we love Rocky, we also appreciate anyone who watches him
          while we’re in Japan — your comfort and happiness matter to us too.
          Thank you so much for giving him a home while we’re away.
          <div className="mt-3 text-sm text-[var(--muted)] break-anywhere">
            — Nic, Jessie, Jojo, &amp; Rocky
          </div>
        </div>

        <Gallery title="Gallery" photos={galleryPhotos} />
      </section>

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
