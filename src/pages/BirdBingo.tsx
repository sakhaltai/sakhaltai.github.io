// BirdBingo.tsx

import React, { useEffect, useRef, useState } from "react";

// for adding new fields for the BirdInfo modals,
// just add a new entry in the type below,
// and make sure it allows strings or arrays of strings.

type BirdInfo = {
  songs?: string | string[];
  calls?: string | string[];
  otherSounds?: string | string[];
  sourceUrl?: string;
};

type Bird = {
  id: string;
  name: string;
  image: string;
  voice: string;
  call: string;
  info?: BirdInfo;
};

const birds: Bird[] = [
  {
    id: "american-coot",
    name: "American Coot",
    image: "/birds/img/american-coot.jpg",
    voice: "/birds/audio/american-coot-voice.mp3",
    call: "/birds/audio/american-coot-call.mp3",
    info: {
      songs: [
        "Pacific Northwest birds often sing 3–4 notes on the same pitch.",
        "Females also sing occasionally.",
        "Song frequency increases through winter.",
      ],
      calls: [
        "The chickadee-dee alarm call increases number of 'dee' notes with danger.",
        "The high-pitched 'see' call means freeze — predator nearby.",
      ],
      // otherSounds: "...",
      /*  funFacts: [
        "",
        "",
      ],
      */
      // sourceUrl: "https://example.com/cornell-page",
    },
  },
  {
    id: "american-crow",
    name: "American Crow",
    image: "/birds/img/american-crow.jpg",
    voice: "/birds/audio/american-crow-voice.mp3",
    call: "/birds/audio/american-crow-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "american-goldfinch",
    name: "American Goldfinch",
    image: "/birds/img/american-goldfinch.jpg",
    voice: "/birds/audio/american-goldfinch-voice.mp3",
    call: "/birds/audio/american-goldfinch-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "american-redstart",
    name: "American Redstart",
    image: "/birds/img/american-redstart.jpg",
    voice: "/birds/audio/american-redstart-voice.mp3",
    call: "/birds/audio/american-redstart-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "american-robin",
    name: "American Robin",
    image: "/birds/img/american-robin.jpg",
    voice: "/birds/audio/american-robin-voice.mp3",
    call: "/birds/audio/american-robin-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "bald-eagle",
    name: "Bald Eagle",
    image: "/birds/img/bald-eagle.jpg",
    voice: "/birds/audio/bald-eagle-voice.mp3",
    call: "/birds/audio/bald-eagle-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "baltimore-oriole",
    name: "Baltimore Oriole",
    image: "/birds/img/baltimore-oriole.jpg",
    voice: "/birds/audio/baltimore-oriole-voice.mp3",
    call: "/birds/audio/baltimore-oriole-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "belted-kingfisher",
    name: "Belted Kingfisher",
    image: "/birds/img/belted-kingfisher.jpg",
    voice: "/birds/audio/belted-kingfisher-voice.mp3",
    call: "/birds/audio/belted-kingfisher-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "black-capped-chickadee",
    name: "Black-Capped Chickadee",
    image: "/birds/img/black-capped-chickadee.jpg",
    voice: "/birds/audio/black-capped-chickadee-voice.mp3",
    call: "/birds/audio/black-capped-chickadee-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "black-phoebe",
    name: "Black Phoebe",
    image: "/birds/img/black-phoebe.jpg",
    voice: "/birds/audio/black-phoebe-voice.mp3",
    call: "/birds/audio/black-phoebe-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "blue-jay",
    name: "Blue Jay",
    image: "/birds/img/blue-jay.jpg",
    voice: "/birds/audio/blue-jay-voice.mp3",
    call: "/birds/audio/blue-jay-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "brown-pelican",
    name: "Brown Pelican",
    image: "/birds/img/brown-pelican.jpg",
    voice: "/birds/audio/brown-pelican-voice.mp3",
    call: "/birds/audio/brown-pelican-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "california-quail",
    name: "California Quail",
    image: "/birds/img/california-quail.jpg",
    voice: "/birds/audio/california-quail-voice.mp3",
    call: "/birds/audio/california-quail-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "california-scrub-jay",
    name: "California Scrub-Jay",
    image: "/birds/img/california-scrub-jay.jpg",
    voice: "/birds/audio/california-scrub-jay-voice.mp3",
    call: "/birds/audio/california-scrub-jay-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "canada-goose",
    name: "Canada Goose",
    image: "/birds/img/canada-goose.jpg",
    voice: "/birds/audio/canada-goose-voice.mp3",
    call: "/birds/audio/canada-goose-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "carolina-wren",
    name: "Carolina Wren",
    image: "/birds/img/carolina-wren.jpg",
    voice: "/birds/audio/carolina-wren-voice.mp3",
    call: "/birds/audio/carolina-wren-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "cedar-waxwing",
    name: "Cedar Waxwing",
    image: "/birds/img/cedar-waxwing.jpg",
    voice: "/birds/audio/cedar-waxwing-voice.mp3",
    call: "/birds/audio/cedar-waxwing-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "common-loon",
    name: "Common Loon",
    image: "/birds/img/common-loon.jpg",
    voice: "/birds/audio/common-loon-voice.mp3",
    call: "/birds/audio/common-loon-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "dark-eyed-junco",
    name: "Dark-Eyed Junco",
    image: "/birds/img/dark-eyed-junco.jpg",
    voice: "/birds/audio/dark-eyed-junco-voice.mp3",
    call: "/birds/audio/dark-eyed-junco-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "eastern-bluebird",
    name: "Eastern Bluebird",
    image: "/birds/img/eastern-bluebird.jpg",
    voice: "/birds/audio/eastern-bluebird-voice.mp3",
    call: "/birds/audio/eastern-bluebird-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "great-blue-heron",
    name: "Great Blue Heron",
    image: "/birds/img/great-blue-heron.jpg",
    voice: "/birds/audio/great-blue-heron-voice.mp3",
    call: "/birds/audio/great-blue-heron-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "great-horned-owl",
    name: "Great Horned Owl",
    image: "/birds/img/great-horned-owl.jpg",
    voice: "/birds/audio/great-horned-owl-voice.mp3",
    call: "/birds/audio/great-horned-owl-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "house-finch",
    name: "House Finch",
    image: "/birds/img/house-finch.jpg",
    voice: "/birds/audio/house-finch-voice.mp3",
    call: "/birds/audio/house-finch-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "house-sparrow",
    name: "House Sparrow",
    image: "/birds/img/house-sparrow.jpg",
    voice: "/birds/audio/house-sparrow-voice.mp3",
    call: "/birds/audio/house-sparrow-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "indigo-bunting",
    name: "Indigo Bunting",
    image: "/birds/img/indigo-bunting.jpg",
    voice: "/birds/audio/indigo-bunting-voice.mp3",
    call: "/birds/audio/indigo-bunting-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "killdeer",
    name: "Killdeer",
    image: "/birds/img/killdeer.jpg",
    voice: "/birds/audio/killdeer-voice.mp3",
    call: "/birds/audio/killdeer-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "laughing-gull",
    name: "Laughing Gull",
    image: "/birds/img/laughing-gull.jpg",
    voice: "/birds/audio/laughing-gull-voice.mp3",
    call: "/birds/audio/laughing-gull-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "mallard",
    name: "Mallard",
    image: "/birds/img/mallard.jpg",
    voice: "/birds/audio/mallard-voice.mp3",
    call: "/birds/audio/mallard-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "mourning-dove",
    name: "Mourning Dove",
    image: "/birds/img/mourning-dove.jpg",
    voice: "/birds/audio/mourning-dove-voice.mp3",
    call: "/birds/audio/mourning-dove-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "mute-swan",
    name: "Mute Swan",
    image: "/birds/img/mute-swan.jpg",
    voice: "/birds/audio/mute-swan-voice.mp3",
    call: "/birds/audio/mute-swan-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "northern-cardinal",
    name: "Northern Cardinal",
    image: "/birds/img/northern-cardinal.jpg",
    voice: "/birds/audio/northern-cardinal-voice.mp3",
    call: "/birds/audio/northern-cardinal-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "northern-flicker",
    name: "Northern Flicker",
    image: "/birds/img/northern-flicker.jpg",
    voice: "/birds/audio/northern-flicker-voice.mp3",
    call: "/birds/audio/northern-flicker-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "northern-mockingbird",
    name: "Northern Mockingbird",
    image: "/birds/img/northern-mockingbird.jpg",
    voice: "/birds/audio/northern-mockingbird-voice.mp3",
    call: "/birds/audio/northern-mockingbird-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "pileated-woodpecker",
    name: "Pileated Woodpecker",
    image: "/birds/img/pileated-woodpecker.jpg",
    voice: "/birds/audio/pileated-woodpecker-voice.mp3",
    call: "/birds/audio/pileated-woodpecker-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "red-tailed-hawk",
    name: "Red-Tailed Hawk",
    image: "/birds/img/red-tailed-hawk.jpg",
    voice: "/birds/audio/red-tailed-hawk-voice.mp3",
    call: "/birds/audio/red-tailed-hawk-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "ring-billed-gull",
    name: "Ring-Billed Gull",
    image: "/birds/img/ring-billed-gull.jpg",
    voice: "/birds/audio/ring-billed-gull-voice.mp3",
    call: "/birds/audio/ring-billed-gull-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "rock-pigeon",
    name: "Rock Pigeon",
    image: "/birds/img/rock-pigeon.jpg",
    voice: "/birds/audio/rock-pigeon-voice.mp3",
    call: "/birds/audio/rock-pigeon-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "rose-breasted-grosbeak",
    name: "Rose-breasted Grosbeak",
    image: "/birds/img/rose-breasted-grosbeak.jpg",
    voice: "/birds/audio/rose-breasted-grosbeak-voice.mp3",
    call: "/birds/audio/rose-breasted-grosbeak-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "ruby-throated-hummingbird",
    name: "Ruby Throated Hummingbird",
    image: "/birds/img/ruby-throated-hummingbird.jpg",
    voice: "/birds/audio/ruby-throated-hummingbird-voice.mp3",
    call: "/birds/audio/ruby-throated-hummingbird-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "sandhill-crane",
    name: "Sandhill Crane",
    image: "/birds/img/sandhill-crane.jpg",
    voice: "/birds/audio/sandhill-crane-voice.mp3",
    call: "/birds/audio/sandhill-crane-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "scarlet-tanager",
    name: "Scarlet Tanager",
    image: "/birds/img/scarlet-tanager.jpg",
    voice: "/birds/audio/scarlet-tanager-voice.mp3",
    call: "/birds/audio/scarlet-tanager-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "spotted-towhee",
    name: "Spotted Towhee",
    image: "/birds/img/spotted-towhee.jpg",
    voice: "/birds/audio/spotted-towhee-voice.mp3",
    call: "/birds/audio/spotted-towhee-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "swainsons-thrush",
    name: "Swainson's Thrush",
    image: "/birds/img/swainsons-thrush.jpg",
    voice: "/birds/audio/swainsons-thrush-voice.mp3",
    call: "/birds/audio/swainsons-thrush-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "tree-swallow",
    name: "Tree Swallow",
    image: "/birds/img/tree-swallow.jpg",
    voice: "/birds/audio/tree-swallow-voice.mp3",
    call: "/birds/audio/tree-swallow-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "tufted-titmouse",
    name: "Tufted Titmouse",
    image: "/birds/img/tufted-titmouse.jpg",
    voice: "/birds/audio/tufted-titmouse-voice.mp3",
    call: "/birds/audio/tufted-titmouse-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "western-meadowlark",
    name: "Western Meadowlark",
    image: "/birds/img/western-meadowlark.jpg",
    voice: "/birds/audio/western-meadowlark-voice.mp3",
    call: "/birds/audio/western-meadowlark-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "western-tanager",
    name: "Western Tanager",
    image: "/birds/img/western-tanager.jpg",
    voice: "/birds/audio/western-tanager-voice.mp3",
    call: "/birds/audio/western-tanager-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "white-breasted-nuthatch",
    name: "White-Breasted Nuthatch",
    image: "/birds/img/white-breasted-nuthatch.jpg",
    voice: "/birds/audio/white-breasted-nuthatch-voice.mp3",
    call: "/birds/audio/white-breasted-nuthatch-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "white-throated-sparrow",
    name: "White-Throated Sparrow",
    image: "/birds/img/white-throated-sparrow.jpg",
    voice: "/birds/audio/white-throated-sparrow-voice.mp3",
    call: "/birds/audio/white-throated-sparrow-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "wood-duck",
    name: "Wood Duck",
    image: "/birds/img/wood-duck.jpg",
    voice: "/birds/audio/wood-duck-voice.mp3",
    call: "/birds/audio/wood-duck-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  {
    id: "yellow-rumped-warbler",
    name: "Yellow-Rumped Warbler",
    image: "/birds/img/yellow-rumped-warbler.jpg",
    voice: "/birds/audio/yellow-rumped-warbler-voice.mp3",
    call: "/birds/audio/yellow-rumped-warbler-call.mp3",
    info: {
      songs: "",
      // sourceUrl: "https://example.com/cornell-page-url",
    },
  },
  // your many birds go here…
];

export default function BirdBingo() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const queueRef = useRef<string[] | null>(null);

  const [nowPlaying, setNowPlaying] = useState("");
  const [selectedBird, setSelectedBird] = useState<Bird | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showNerdMode, setShowNerdMode] = useState(false);

  // AUDIO SEQUENCING
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      if (!queueRef.current || queueRef.current.length === 0) {
        queueRef.current = null;
        setNowPlaying("");
        return;
      }

      // remove the one we just finished
      queueRef.current.shift();

      if (!queueRef.current || queueRef.current.length === 0) {
        queueRef.current = null;
        setNowPlaying("");
        return;
      }

      const nextSrc = queueRef.current[0];
      audio.src = nextSrc;
      audio.play().catch(() => {});
    };

    audio.addEventListener("ended", handleEnded);
    return () => audio.removeEventListener("ended", handleEnded);
  }, []);

  // PLAY LOGIC
  const handlePlay = (bird: Bird) => {
    const audio = audioRef.current;
    if (!audio) return;

    setSelectedBird(bird);

    // your voice, then bird call
    queueRef.current = [bird.voice, bird.call];
    audio.src = queueRef.current[0];

    audio
      .play()
      .then(() =>
        setNowPlaying(`Playing: ${bird.name} – your voice, then bird call`)
      )
      .catch(() => {});
  };

  // INFO CLICK (opens MODAL)
  const handleInfoClick = (e: React.MouseEvent, bird: Bird) => {
    e.stopPropagation(); // don't trigger sound
    if (!bird.info) return;
    setSelectedBird(bird);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const shouldShowModal = showModal && selectedBird && selectedBird.info;

  return (
    <>
      <main className="grid gap-6 md:gap-8">
        <section className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-6 md:p-8 shadow-card">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--text)]">
            Sibley Backyard Birding Bingo – Sounds
          </h1>
          <p className="text-[var(--muted)] mt-2">
            Tap a bird card to hear Nic say the name, followed by the call.
          </p>

          <p className="mt-3 text-xs text-[var(--muted)]">
            Tip: some phones need a second tap to activate audio.
          </p>

          <div className="mt-4 text-xs text-center text-[var(--muted)] min-h-[1.25rem]">
            {nowPlaying}
          </div>

          {/* Grown-up toggle */}
          <div className="mt-3 flex items-center justify-between gap-3 text-xs text-[var(--muted)]">
            <div>Tap any card to play its sounds.</div>
            <label className="inline-flex items-center gap-2 cursor-pointer select-none">
              <span>Grown-up info</span>
              <input
                type="checkbox"
                className="accent-cyan-300"
                checked={showNerdMode}
                onChange={(e) => setShowNerdMode(e.target.checked)}
              />
            </label>
          </div>

          {/* Card grid */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {birds.map((bird) => (
              <div
                key={bird.id}
                role="button"
                tabIndex={0}
                onClick={() => handlePlay(bird)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handlePlay(bird);
                  }
                }}
                className="group flex flex-col items-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] active:translate-y-[1px] active:scale-[0.97] transition-transform duration-100 ease-out"
              >
                {/* Card outer */}
                <div className="relative w-full max-w-[220px] mx-auto pt-[138%] rounded-[20px] border-[3px] border-[#F6C94B] bg-white shadow-md transition-shadow duration-100 ease-out active:shadow-sm">
                  {/* Card inner */}
                  <div className="absolute inset-[10px] rounded-[14px] bg-white flex flex-col items-center justify-between">
                    {/* Info icon (grown-up mode only, and only if info exists) */}
                    {showNerdMode && bird.info && (
                      <button
                        type="button"
                        onClick={(e) => handleInfoClick(e, bird)}
                        className="absolute top-2 right-2 h-6 w-6 rounded-full bg-black/60 text-white text-[0.7rem] font-semibold flex items-center justify-center shadow-md hover:bg-black/80 focus:outline-none focus:ring-1 focus:ring-cyan-300/80"
                        aria-label={`More info about ${bird.name}`}
                      >
                        i
                      </button>
                    )}

                    {/* Illustration */}
                    <div className="w-full flex-1 flex items-center justify-center px-3 pt-3">
                      <img
                        src={bird.image}
                        alt={bird.name}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>

                    {/* Label – Sibley-ish all caps with tracking */}
                    <div className="pb-4 px-3 text-center">
                      <div className="text-[0.7rem] leading-[1.3] tracking-[0.25em] text-black/80 font-medium">
                        {bird.name.toUpperCase()}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Helper text */}
                <div className="mt-1 text-[0.65rem] uppercase tracking-wide text-[var(--muted)]">
                  Tap to play
                </div>
              </div>
            ))}
          </div>

          {/* Shared audio element */}
          <audio ref={audioRef} />
        </section>
      </main>

      {/* MODAL — simple + animated via CSS classes */}
      {shouldShowModal && selectedBird && selectedBird.info && (
        <div
          className="modal-backdrop fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50"
          onClick={closeModal}
        >
          <div
            role="dialog"
            aria-modal="true"
            className="modal-panel bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl max-w-md w-full p-6 shadow-xl text-[var(--text)] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-[var(--muted)] text-xl leading-none hover:text-[var(--text)]"
              onClick={closeModal}
              aria-label="Close"
            >
              ×
            </button>

            <h2 className="text-xl font-semibold mb-4">{selectedBird.name}</h2>

            <div className="space-y-4 text-sm text-[var(--muted)] leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              {selectedBird.info.songs && (
                <div>
                  <div className="uppercase text-xs tracking-[0.18em] font-semibold mb-1">
                    Songs
                  </div>
                  <p>{selectedBird.info.songs}</p>
                </div>
              )}

              {selectedBird.info.calls && (
                <div>
                  <div className="uppercase text-xs tracking-[0.18em] font-semibold mb-1">
                    Calls
                  </div>
                  <p>{selectedBird.info.calls}</p>
                </div>
              )}

              {selectedBird.info.otherSounds && (
                <div>
                  <div className="uppercase text-xs tracking-[0.18em] font-semibold mb-1">
                    Other sounds
                  </div>
                  <p>{selectedBird.info.otherSounds}</p>
                </div>
              )}

              {selectedBird.info.sourceUrl && (
                <a
                  href={selectedBird.info.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-300 hover:underline inline-flex items-center gap-1 text-xs"
                >
                  View full details at Cornell Lab ↗
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
