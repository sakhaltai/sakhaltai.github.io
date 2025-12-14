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

    // Add or update: <meta name="robots" content="noindex,nofollow" />
    const existing = document.querySelector<HTMLMetaElement>(
      'meta[name="robots"]'
    );
    const meta = existing ?? document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex,nofollow";
    if (!existing) document.head.appendChild(meta);

    return () => {
      // Optional: remove meta when leaving the page.
      // If you prefer noindex site-wide, don't remove.
      if (!existing && meta.parentNode) meta.parentNode.removeChild(meta);
    };
  }, [enabled]);
}

function Toast(props: { message: string | null }) {
  if (!props.message) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999]">
      <div className="bg-[var(--bg-elev)] border border-[var(--border)] shadow-card rounded-2xl px-4 py-2 text-sm">
        {props.message}
      </div>
    </div>
  );
}

function IconCopyButton(props: {
  value: string;
  onCopied: (msg: string) => void;
  label?: string;
}) {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-[var(--border)] bg-[var(--card)] hover:border-[rgb(103_232_249_/_.8)] transition"
      aria-label={props.label ?? "Copy"}
      title={props.label ?? "Copy"}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(props.value);
          props.onCopied("Copied!");
        } catch {
          // Clipboard may be blocked; fail silently
        }
      }}
    >
      {/* Simple copy glyph */}
      <span className="text-sm">⧉</span>
    </button>
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
      className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 md:p-6 shadow-card scroll-mt-28"
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-lg md:text-xl font-semibold">{props.title}</h2>
        {props.subtitle ? (
          <p className="text-sm text-[var(--muted)]">{props.subtitle}</p>
        ) : null}
      </div>
      <div className="mt-4">{props.children}</div>
    </section>
  );
}

function KV(props: { k: string; v: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-3 py-2 border-b border-[var(--border)] last:border-b-0">
      <div className="text-sm text-[var(--muted)]">{props.k}</div>
      <div className="text-sm text-right">{props.v}</div>
    </div>
  );
}

function Chip(props: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs border border-[var(--border)] bg-[var(--card)]">
      {props.children}
    </span>
  );
}

function Gallery(props: { title?: string; photos: Photo[] }) {
  if (!props.photos.length) return null;

  return (
    <div className="mt-4">
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
            <figcaption className="p-3 text-xs text-[var(--muted)]">
              {p.caption ?? p.alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function MedImageGrid(props: { items: MedImage[]; note?: string }) {
  if (!props.items.length) return null;

  return (
    <div className="mt-3">
      {props.note ? (
        <div className="text-xs text-[var(--muted)] mb-2">{props.note}</div>
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
              className="w-full aspect-square object-cover"
              loading="lazy"
            />
            <div className="p-3 text-xs text-[var(--muted)]">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function RockyCare() {
  useNoIndexMeta(true);

  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 1200);
    return () => window.clearTimeout(t);
  }, [toast]);

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

  // Photos you’ll add later (put files in /public/rocky/gallery/)
  const galleryPhotos: Photo[] = [
    // { src: "/rocky/gallery/rocky-01.jpg", alt: "Rocky portrait", caption: "Rocky (16) — professional snuggler" },
    // { src: "/rocky/gallery/rocky-02.jpg", alt: "Rocky on a bed", caption: "One of seven beds (yes, seven)" },
  ];

  // Medication images (put files in /public/rocky/meds/)
  // Recommended size: 640x640 or 800x800 (square), simple “product photo” style.
  const medImages: MedImage[] = [
    {
      src: "/rocky/meds/gabapentin.jpg",
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
      {/* Page-specific print styling */}
      <style>{`
        @media print {
          /* Hide site chrome-ish elements inside this page */
          .print-hide { display: none !important; }
          /* Reduce padding so it prints tighter */
          .print-tight { padding: 0 !important; }
          /* Improve print contrast */
          body { color: #000 !important; }
          a { color: #000 !important; text-decoration: underline !important; }
          /* Remove shadows to save ink */
          .shadow-card { box-shadow: none !important; }
        }
      `}</style>

      <Toast message={toast} />

      {/* Hero */}
      <section className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 md:p-7 shadow-card">
        <div className="flex flex-col gap-3 md:gap-4">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-[240px]">
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Rocky — Rover Care Sheet
              </h1>
              <p className="text-sm md:text-base text-[var(--muted)] mt-1">
                Dec 26, 2025 – Jan 30, 2026
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                <Chip>Age 16</Chip>
                <Chip>~70 lbs coonhound</Chip>
                <Chip>Arthritis / mobility</Chip>
                <Chip>Sweet’s syndrome (managed)</Chip>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 print-hide">
              <button
                className="btn primary"
                type="button"
                onClick={() => window.print()}
              >
                Print this page
              </button>
              <a className="btn" href="#contacts">
                Emergency contacts
              </a>
              <a className="btn" href="#meds">
                Daily meds
              </a>
              <a className="btn" href="#vet">
                Vet info
              </a>
            </div>
          </div>

          <div className="text-sm md:text-base leading-relaxed">
            Rocky is a very mellow, sweet, people-oriented dog. He loves being
            near you, getting pets, and just existing together.
          </div>
        </div>
      </section>

      {/* Sticky bar: quick actions + section nav (so you never lose the “big 3”) */}
      <div className="sticky top-2 z-40 print-hide">
        <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl shadow-card px-3 py-2">
          <div className="flex flex-col gap-2">
            {/* Quick actions */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              <a className="btn primary whitespace-nowrap" href="#contacts">
                Emergency contacts
              </a>
              <a className="btn primary whitespace-nowrap" href="#meds">
                Daily meds
              </a>
              <a className="btn primary whitespace-nowrap" href="#vet">
                Vet info
              </a>
            </div>

            {/* Section nav */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              {sections.map((s) => (
                <a
                  key={s.id}
                  className="btn whitespace-nowrap"
                  href={`#${s.id}`}
                >
                  {s.label}
                </a>
              ))}
              <a
                className="btn whitespace-nowrap"
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Top
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Travel & Handoff */}
      <SectionCard id="handoff" title="Travel & Handoff">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4">
            <KV k="Owners away" v="Dec 25, 2025 – Jan 30, 2026" />
            <KV k="Drop-off date" v="Dec 26, 2025 (~10am–3pm)" />
            <KV
              k="Who drops off"
              v={
                <>
                  Maija & Louis Stein
                  <div className="text-xs text-[var(--muted)] mt-1">
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

          {/* Replaced the old “Quick Notes” vibe with timezone quick ref */}
          <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4">
            <div className="text-sm font-semibold mb-2">
              Japan time zone quick reference
            </div>
            <div className="text-sm text-[var(--muted)] grid gap-1">
              <div>
                Japan is <strong>+17 hours</strong> from PST (winter).
              </div>
              <div>PST 8am Monday → JST 1am Tuesday</div>
              <div>PST 5pm Monday → JST 10am Tuesday</div>
            </div>
            <p className="text-sm text-[var(--muted)] mt-3">
              If something feels time-sensitive, local help is fastest:
              Maija/Louis can assist in-person.
            </p>
          </div>
        </div>
      </SectionCard>

      {/* Contacts */}
      <SectionCard id="contacts" title="Contacts">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4">
            <div className="text-sm font-semibold mb-2">Parents</div>

            <KV
              k="Nicholas (Nic) Hartmann"
              v={
                <div className="inline-flex items-center gap-2 justify-end">
                  <a className="underline" href="mailto:sakhaltai@gmail.com">
                    sakhaltai@gmail.com
                  </a>
                  <IconCopyButton
                    value="sakhaltai@gmail.com"
                    onCopied={() => setToast("Nic email copied!")}
                    label="Copy Nic email"
                  />
                </div>
              }
            />
            <KV
              k="Jessica (Jessie) Hartmann"
              v={
                <div className="inline-flex items-center gap-2 justify-end">
                  <a className="underline" href="mailto:j.e.stein27@gmail.com">
                    j.e.stein27@gmail.com
                  </a>
                  <IconCopyButton
                    value="j.e.stein27@gmail.com"
                    onCopied={() => setToast("Jessie email copied!")}
                    label="Copy Jessie email"
                  />
                </div>
              }
            />

            <div className="mt-4 text-sm font-semibold">Reach us in Japan</div>
            <div className="mt-2 grid gap-2">
              <a
                className="btn primary"
                href="https://discordapp.com/users/87359002417049600"
                target="_blank"
                rel="noreferrer"
              >
                Discord (Nikkun)
              </a>

              <div className="flex items-center justify-between gap-2">
                <div className="text-sm text-[var(--muted)] truncate">
                  Username: <span className="text-[var(--text)]">Nikkun</span>
                </div>
                <IconCopyButton
                  value="Nikkun"
                  onCopied={() => setToast("Discord username copied!")}
                  label="Copy Discord username"
                />
              </div>

              <a
                className="btn primary"
                href="https://signal.me/#eu/K5UOi9nwausEZEDRbVCgVEIdVL_qZQAqTXOYFYbENkwJ3uaIxwxFZZMnB9uXlRld"
                target="_blank"
                rel="noreferrer"
              >
                Signal (link)
              </a>
            </div>
          </div>

          <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4">
            <div className="text-sm font-semibold mb-2">
              Emergency contacts (local)
            </div>

            <KV
              k="Maija Stein"
              v={
                <div className="inline-flex items-center gap-2 justify-end">
                  <a className="underline" href="tel:+12066172193">
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
                <div className="inline-flex items-center gap-2 justify-end">
                  <a className="underline" href="tel:+14258795159">
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

            <p className="text-sm text-[var(--muted)] mt-4">
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
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4">
            <div className="text-sm font-semibold mb-2">Basics</div>
            <KV k="Age" v="16" />
            <KV k="Breed / size" v="Coonhound (~70 lbs)" />
            <KV
              k="Health"
              v="Arthritis / mobility issues; Sweet’s syndrome (pentoxifylline)"
            />
          </div>

          <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4">
            <div className="text-sm font-semibold mb-2">Mobility & setup</div>
            <ul className="text-sm text-[var(--muted)] grid gap-2 list-disc pl-5">
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
                nighttime (so if you only want us to bring one dog bed, that’ll
                be the one).
              </li>
              <li>
                If he’s allowed on your bed and can make it up, he loves to
                snuggle.
              </li>
            </ul>
          </div>
        </div>
      </SectionCard>

      {/* Feeding */}
      <SectionCard id="feeding" title="Feeding">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4">
            <div className="text-sm font-semibold mb-2">Food</div>
            <KV
              k="Brand"
              v={
                <a
                  className="underline"
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
            <div className="text-sm text-[var(--muted)] mt-2 grid gap-1">
              <div>Breakfast: usually ~8am</div>
              <div>Dinner: usually ~4pm</div>
              <div>If breakfast is later, dinner can be later — he adapts.</div>
            </div>
          </div>

          <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4">
            <div className="text-sm font-semibold mb-2">Walks & treats</div>
            <ul className="text-sm text-[var(--muted)] grid gap-2 list-disc pl-5">
              <li>
                Short walk / backyard sniff after meals helps him poop (lol).
              </li>
              <li>Greenie after he goes pee or poo (we’ll provide).</li>
              <li>Please limit human food — sensitive stomach.</li>
              <li>If you run out of food, we’ll deliver same- or next-day.</li>
            </ul>
          </div>
        </div>
      </SectionCard>

      {/* Medications */}
      <SectionCard id="meds" title="Medications (Daily)">
        <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4">
          <div className="text-sm font-semibold">
            Important: pill pockets required
          </div>
          <p className="text-sm text-[var(--muted)] mt-1">
            If mixed into food, he tastes the meds and spits them out.
          </p>

          <MedImageGrid
            items={medImages}
            note="Optional: add simple “stock-style” med photos here (see paths + sizes below)."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4">
            <div className="text-sm font-semibold mb-2">Every Breakfast</div>
            <ul className="text-sm text-[var(--muted)] grid gap-2 list-disc pl-5">
              <li>Gabapentin 300 mg (1 yellow capsule)</li>
              <li>Pentoxifylline 400 mg (1 yellow tablet)</li>
            </ul>
          </div>

          <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4">
            <div className="text-sm font-semibold mb-2">Every Dinner</div>
            <ul className="text-sm text-[var(--muted)] grid gap-2 list-disc pl-5">
              <li>Gabapentin 300 mg (1 yellow capsule)</li>
              <li>Pentoxifylline 400 mg (1 yellow tablet)</li>
            </ul>
          </div>
        </div>

        <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4 mt-4">
          <div className="text-sm font-semibold">Extra (as needed)</div>
          <p className="text-sm text-[var(--muted)] mt-1">
            If he’s moving especially stiff at night, you can give one extra{" "}
            <strong>300 mg gabapentin</strong> in a pill pocket.
          </p>
        </div>
      </SectionCard>

      {/* Injections */}
      <SectionCard id="shots" title="Injections">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-sm font-semibold">Adequan</div>
                <div className="text-sm text-[var(--muted)] mt-1">
                  1.4 mL every 3 weeks. Adequan + needles provided.
                </div>
              </div>
              <a
                className="btn"
                href="https://www.adequancanine.com/for-pet-parents"
                target="_blank"
                rel="noreferrer"
              >
                Info
              </a>
            </div>
            <p className="text-sm text-[var(--muted)] mt-3">
              Swap injection sides each time (Jan 4 on the right, Jan 25 on the
              left).
              <br />
              You’re welcome to administer (we trust the live-in vet tech 😉).
            </p>
          </div>

          <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-sm font-semibold">Librela</div>
                <div className="text-sm text-[var(--muted)] mt-1">
                  Monthly injection at the vet.
                </div>
              </div>
              <a
                className="btn"
                href="https://www.zoetispetcare.com/products/librela"
                target="_blank"
                rel="noreferrer"
              >
                Info
              </a>
            </div>

            <div className="mt-3 text-sm text-[var(--muted)] grid gap-1">
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
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4">
            <div className="text-sm font-semibold">Bothell Pet Hospital</div>
            <div className="text-sm text-[var(--muted)] mt-2 grid gap-1">
              <div>9708 Ormbrek St, Bothell, WA 98011</div>
              <div>
                Phone:{" "}
                <a className="underline" href="tel:+14254863251">
                  425-486-3251
                </a>
              </div>
              <div>
                Website:{" "}
                <a
                  className="underline"
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

          <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4">
            <div className="text-sm font-semibold">
              Emergency: VEG — Lynnwood (24/7)
            </div>
            <div className="text-sm text-[var(--muted)] mt-2 grid gap-1">
              <div>4725 196th St SW, Lynnwood, WA 98036</div>
              <div>
                Phone:{" "}
                <a className="underline" href="tel:+14253297170">
                  (425) 329-7170
                </a>
              </div>
              <div>
                Website:{" "}
                <a
                  className="underline"
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
        <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4">
          <ul className="text-sm text-[var(--muted)] grid gap-2 list-disc pl-5">
            <li>Has never bitten a human or dog.</li>
            <li>No food guarding, no growling, no aggression.</li>
            <li>
              Fine with other animals (will chase squirrels/rabbits if given the
              chance 😉).
            </li>
            <li>Very calm and stoic, especially at the vet.</li>
            <li>
              Friendly, affectionate, and wants to be near people (hence the
              beds).
            </li>
            <li>Loves belly/chest/ear scritches.</li>
          </ul>
        </div>

        <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4 mt-4">
          <div className="text-sm font-semibold">Door knocks / barking</div>
          <p className="text-sm text-[var(--muted)] mt-1">
            He may bark briefly if someone knocks. Calmly saying{" "}
            <em>“Uh ohhhh Rocky, do you need a bath?”</em> usually stops him.
          </p>
        </div>
      </SectionCard>

      {/* Comfort */}
      <SectionCard id="comfort" title="Comfort Philosophy">
        <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4">
          <div className="text-sm font-semibold">Comfort &gt; rules</div>
          <p className="text-sm text-[var(--muted)] mt-2 leading-relaxed">
            If Rocky ever seems noticeably more uncomfortable than when you
            first met him, please contact us or Maija/Louis and we’ll consult
            together.
          </p>
          <p className="text-sm text-[var(--muted)] mt-2 leading-relaxed">
            He doesn’t have cancer, diabetes, or other major illnesses — just
            sore joints. We don’t expect any end-of-life issues during this
            stay. What matters most is that he’s comfortable, getting pets, and
            feels your presence.
          </p>
        </div>
      </SectionCard>

      {/* Accidents */}
      <SectionCard id="accidents" title="Accidents">
        <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4">
          <p className="text-sm text-[var(--muted)] leading-relaxed">
            Rocky has never peed indoors, but at his age, he may occasionally
            have a poop accident. If that happens, please know we’re very sorry
            and really appreciate your patience. We can provide our carpet
            cleaner and formula for the duration of his stay.
          </p>
        </div>
      </SectionCard>

      {/* Payment */}
      <SectionCard id="pay" title="Payment & Expenses">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4">
            <KV
              k="Venmo"
              v={
                <div className="inline-flex items-center gap-2 justify-end">
                  <span>@nichartmann</span>
                  <IconCopyButton
                    value="@nichartmann"
                    onCopied={() => setToast("Venmo copied!")}
                    label="Copy Venmo"
                  />
                </div>
              }
            />

            {/* Venmo QR */}
            <div className="mt-4 flex items-center justify-between gap-4 print-hide">
              <div className="text-sm text-[var(--muted)]">
                QR code (optional)
                <div className="text-xs text-[var(--muted)] mt-1">
                  File: <code>/public/rocky/venmo-qr.png</code>
                </div>
              </div>

              <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-2">
                <img
                  src="/rocky/venmo-qr.png"
                  alt="Venmo QR code for @nichartmann"
                  className="h-28 w-28 object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="text-sm text-[var(--muted)] mt-4">
              Reasonable expenses are pre-approved. Just keep us posted.
            </div>
          </div>

          <div className="bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-4">
            <div className="text-sm font-semibold mb-2">Address</div>
            <div className="text-sm text-[var(--muted)]">
              1605 Locust Way
              <br />
              Lynnwood, WA 98036
            </div>
            <div className="flex flex-wrap gap-2 mt-3 print-hide">
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

      {/* Appreciation + Gallery */}
      <section className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 md:p-6 shadow-card">
        <div className="text-sm md:text-base leading-relaxed">
          <div className="font-semibold mb-2">Appreciation</div>
          Rocky is basically our child (obviously). We really appreciate your
          patience, understanding, snuggles, and love. If anything comes up or a
          situation changes, don’t hesitate to reach out.
          <br />
          <br />
          As much as we love Rocky, we also appreciate anyone who watches him
          while we’re in Japan — your comfort and happiness matter to us too.
          Thank you so much for giving him a home while we’re away.
          <div className="mt-3 text-sm text-[var(--muted)]">
            — Nic, Jessie, Jojo, &amp; Rocky
          </div>
        </div>

        <Gallery title="Gallery" photos={galleryPhotos} />
      </section>

      <div className="h-8" />
    </main>
  );
}
