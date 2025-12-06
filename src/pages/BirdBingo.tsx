// BirdBingo.tsx

import React, { useEffect, useRef, useState } from "react";

type Bird = {
  id: string;
  name: string;
  image: string; // URL to image
  voice: string; // Nic saying the name
  call: string; // Bird call
};

// TODO: Nic keep fleshing out this array here with all 50 cards or whatever
const birds: Bird[] = [
  {
    id: "american-coot",
    name: "American Coot",
    image: "/birds/img/american-coot.jpg",
    voice: "/birds/audio/american-coot-voice.mp3",
    call: "/birds/audio/american-coot-call.mp3",
  },
  {
    id: "american-redstart",
    name: "American Redstart",
    image: "/birds/img/american-redstart.jpg",
    voice: "/birds/audio/american-redstart-voice.mp3",
    call: "/birds/audio/american-redstart-call.mp3",
  },
  {
    id: "american-robin",
    name: "American Robin",
    image: "/birds/img/american-robin.jpg",
    voice: "/birds/audio/american-robin-voice.mp3",
    call: "/birds/audio/american-robin-call.mp3",
  },
  {
    id: "bald-eagle",
    name: "Bald Eagle",
    image: "/birds/img/bald-eagle.jpg",
    voice: "/birds/audio/bald-eagle-voice.mp3",
    call: "/birds/audio/bald-eagle-call.mp3",
  },
  {
    id: "black-phoebe",
    name: "Black Phoebe",
    image: "/birds/img/black-phoebe.jpg",
    voice: "/birds/audio/black-phoebe-voice.mp3",
    call: "/birds/audio/black-phoebe-call.mp3",
  },
  {
    id: "blue-jay",
    name: "Blue Jay",
    image: "/birds/img/blue-jay.jpg",
    voice: "/birds/audio/blue-jay-voice.mp3",
    call: "/birds/audio/blue-jay-call.mp3",
  },
  {
    id: "california-scrub-jay",
    name: "California Scrub-Jay",
    image: "/birds/img/california-scrub-jay.jpg",
    voice: "/birds/audio/california-scrub-jay-voice.mp3",
    call: "/birds/audio/california-scrub-jay-call.mp3",
  },
  {
    id: "canada-goose",
    name: "Canada Goose",
    image: "/birds/img/canada-goose.jpg",
    voice: "/birds/audio/canada-goose-voice.mp3",
    call: "/birds/audio/canada-goose-call.mp3",
  },
  {
    id: "carolina-wren",
    name: "Carolina Wren",
    image: "/birds/img/carolina-wren.jpg",
    voice: "/birds/audio/carolina-wren-voice.mp3",
    call: "/birds/audio/carolina-wren-call.mp3",
  },
  {
    id: "great-horned-owl",
    name: "Great Horned Owl",
    image: "/birds/img/great-horned-owl.jpg",
    voice: "/birds/audio/great-horned-owl-voice.mp3",
    call: "/birds/audio/great-horned-owl-call.mp3",
  },
  {
    id: "killdeer",
    name: "Killdeer",
    image: "/birds/img/killdeer.jpg",
    voice: "/birds/audio/killdeer-voice.mp3",
    call: "/birds/audio/killdeer-call.mp3",
  },
  {
    id: "mourning-dove",
    name: "Mourning Dove",
    image: "/birds/img/mourning-dove.jpg",
    voice: "/birds/audio/mourning-dove-voice.mp3",
    call: "/birds/audio/mourning-dove-call.mp3",
  },
  {
    id: "northern-flicker",
    name: "Northern Flicker",
    image: "/birds/img/northern-flicker.jpg",
    voice: "/birds/audio/northern-flicker-voice.mp3",
    call: "/birds/audio/northern-flicker-call.mp3",
  },
  {
    id: "pileated-woodpecker",
    name: "Pileated Woodpecker",
    image: "/birds/img/pileated-woodpecker.jpg",
    voice: "/birds/audio/pileated-woodpecker-voice.mp3",
    call: "/birds/audio/pileated-woodpecker-call.mp3",
  },
  {
    id: "rock-pigeon",
    name: "Rock Pigeon",
    image: "/birds/img/rock-pigeon.jpg",
    voice: "/birds/audio/rock-pigeon-voice.mp3",
    call: "/birds/audio/rock-pigeon-call.mp3",
  },
  {
    id: "rose-breasted-grosbeak",
    name: "Rose-breasted Grosbeak",
    image: "/birds/img/rose-breasted-grosbeak.jpg",
    voice: "/birds/audio/rose-breasted-grosbeak-voice.mp3",
    call: "/birds/audio/rose-breasted-grosbeak-call.mp3",
  },
  {
    id: "ruby-throated-hummingbird",
    name: "Ruby Throated Hummingbird",
    image: "/birds/img/ruby-throated-hummingbird.jpg",
    voice: "/birds/audio/ruby-throated-hummingbird-voice.mp3",
    call: "/birds/audio/ruby-throated-hummingbird-call.mp3",
  },
  {
    id: "sandhill-crane",
    name: "Sandhill Crane",
    image: "/birds/img/sandhill-crane.jpg",
    voice: "/birds/audio/sandhill-crane-voice.mp3",
    call: "/birds/audio/sandhill-crane-call.mp3",
  },
  {
    id: "spotted-towhee",
    name: "Spotted Towhee",
    image: "/birds/img/spotted-towhee.jpg",
    voice: "/birds/audio/spotted-towhee-voice.mp3",
    call: "/birds/audio/spotted-towhee-call.mp3",
  },
  {
    id: "tufted-titmouse",
    name: "Tufted Titmouse",
    image: "/birds/img/tufted-titmouse.jpg",
    voice: "/birds/audio/tufted-titmouse-voice.mp3",
    call: "/birds/audio/tufted-titmouse-call.mp3",
  },
  {
    id: "western-meadowlark",
    name: "Western Meadowlark",
    image: "/birds/img/western-meadowlark.jpg",
    voice: "/birds/audio/western-meadowlark-voice.mp3",
    call: "/birds/audio/western-meadowlark-call.mp3",
  },
  // add more birds here…
];

export default function BirdBingo() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const queueRef = useRef<string[] | null>(null);
  const [nowPlaying, setNowPlaying] = useState("");

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
      audio.play().catch((err) => console.warn("Audio play failed:", err));
    };

    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const handlePlay = (bird: Bird) => {
    const audio = audioRef.current;
    if (!audio) return;

    // play your voice, then the bird call
    queueRef.current = [bird.voice, bird.call];

    audio.src = queueRef.current[0];
    audio
      .play()
      .then(() =>
        setNowPlaying(`Playing: ${bird.name} – your voice, then bird call`)
      )
      .catch((err) => console.warn("Audio play failed:", err));
  };

  return (
    <main className="grid gap-6 md:gap-8">
      <section className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-6 md:p-8 shadow-card">
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--text)]">
          Sibley Backyard Birding Bingo – Sounds
        </h1>
        <p className="text-[var(--muted)] mt-2">
          Tap a bird card to hear Nic say the name, followed by the bird&apos;s
          call. Great for when Jojo draws a card.
        </p>

        <p className="mt-3 text-xs text-[var(--muted)]">
          Tip: phone volume up, and if a sound doesn&apos;t fire on the first
          tap (mobile quirks), just tap again.
        </p>

        <div className="mt-4 text-xs text-center text-[var(--muted)] min-h-[1.25rem]">
          {nowPlaying}
        </div>

        {/* Mobile: 2 columns, small gap. Scales up on larger screens. */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {birds.map((bird) => (
            <button
              key={bird.id}
              type="button"
              onClick={() => handlePlay(bird)}
              className="group flex flex-col items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] active:translate-y-[1px] active:scale-[0.97] transition-transform duration-100 ease-out"
            >
              {/* Outer playing-card shell (yellow border, rounded corners) */}
              <div className="relative w-full max-w-[220px] mx-auto pt-[138%] rounded-[20px] border-[3px] border-[#F6C94B] bg-white shadow-md transition-shadow duration-100 ease-out active:shadow-sm group-active:shadow-sm">
                {/* Inner white panel, mimicking the printed card */}
                <div className="absolute inset-[10px] rounded-[14px] bg-white flex flex-col items-center justify-between">
                  {/* Illustration area */}
                  <div className="w-full flex-1 flex items-center justify-center px-3 pt-3">
                    <img
                      src={bird.image}
                      alt={bird.name}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  {/* Label area – Sibley-style all caps with generous tracking */}
                  <div className="pb-4 px-3 text-center">
                    <div className="text-[0.7rem] leading-[1.3] tracking-[0.25em] text-black/80 font-medium">
                      {bird.name.toUpperCase()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Little helper text under card */}
              <div className="mt-1 text-[0.65rem] uppercase tracking-wide text-[var(--muted)]">
                Tap to play
              </div>
            </button>
          ))}
        </div>

        {/* Shared audio element */}
        <audio ref={audioRef} />
      </section>
    </main>
  );
}
