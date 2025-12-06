// BirdBingo.tsx

import React, { useEffect, useRef, useState } from "react";

type Bird = {
  id: string;
  name: string;
  image: string; // URL to image
  voice: string; // Nic saying the name
  call: string; // Bird call
};

// TODO: replace with the actual birds on Jojo's bingo cards + real filenames
const birds: Bird[] = [
  {
    id: "american-robin",
    name: "American Robin",
    image: "/birds/img/american-robin.jpg",
    voice: "/birds/audio/american-robin-voice.mp3",
    call: "/birds/audio/american-robin-call.mp3",
  },
  {
    id: "carolina-wren",
    name: "Carolina Wren",
    image: "/birds/img/carolina-wren.jpg",
    voice: "/birds/audio/carolina-wren-voice.mp3",
    call: "/birds/audio/carolina-wren-call.mp3",
  },
  {
    id: "carolina-wren",
    name: "Carolina Wren",
    image: "/birds/img/carolina-wren.jpg",
    voice: "/birds/audio/carolina-wren-voice.mp3",
    call: "/birds/audio/carolina-wren-call.mp3",
  },
  {
    id: "northern-flicker",
    name: "Northern Flicker",
    image: "/birds/img/northern-flicker.jpg",
    voice: "/birds/audio/northern-flicker-voice.mp3",
    call: "/birds/audio/northern-flicker-call.mp3",
  },
  {
    id: "tufted-titmouse",
    name: "Tufted Titmouse",
    image: "/birds/img/tufted-titmouse.jpg",
    voice: "/birds/audio/tufted-titmouse-voice.mp3",
    call: "/birds/audio/tufted-titmouse-call.mp3",
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
          Tap a bird tile to hear Nic say the name, followed by the bird&apos;s
          call. Great for when Jojo draws a card.
        </p>

        <p className="mt-3 text-xs text-[var(--muted)]">
          Tip: phone volume up, and if a sound doesn&apos;t fire on the first
          tap (mobile quirks), just tap again.
        </p>

        <div className="mt-4 text-xs text-center text-[var(--muted)] min-h-[1.25rem]">
          {nowPlaying}
        </div>

        {/* Mobile: 2 columns, small gap. Scales up nicely on bigger screens. */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {birds.map((bird) => (
            <button
              key={bird.id}
              type="button"
              onClick={() => handlePlay(bird)}
              className="group relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] shadow-card flex flex-col text-left transition-transform active:scale-[0.97]"
            >
              <div className="relative w-full pt-[75%] overflow-hidden bg-black/20">
                <img
                  src={bird.image}
                  alt={bird.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.03] transition-transform"
                />
              </div>
              <div className="px-2 py-2 text-center">
                <div className="text-sm font-semibold text-[var(--text)] leading-tight">
                  {bird.name}
                </div>
                <div className="text-[0.7rem] uppercase tracking-wide text-[var(--muted)]">
                  Tap to play
                </div>
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
