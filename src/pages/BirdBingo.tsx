// src/pages/BirdBingo.tsx

import React, { useEffect, useRef, useState } from "react";
import type { Bird, BirdSongVariant } from "../birds-data";
import { birds } from "../birds-data";

type SexFilter = "male" | "female";
type Rect = { top: number; left: number; width: number; height: number };

// Choose correct image
function getBirdImage(bird: Bird, sex: SexFilter): string {
  if (sex === "female") {
    return (
      bird.imageFemale ||
      bird.imageMale ||
      bird.image ||
      "/birds/img/placeholder.jpg"
    );
  }
  return (
    bird.imageMale ||
    bird.image ||
    bird.imageFemale ||
    "/birds/img/placeholder.jpg"
  );
}

export default function BirdBingo() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const queueRef = useRef<string[] | null>(null);

  const [nowPlaying, setNowPlaying] = useState("");
  const [sexFilter, setSexFilter] = useState<SexFilter>("male");
  const [showNerdMode, setShowNerdMode] = useState(false);

  const [currentBirdId, setCurrentBirdId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playProgress, setPlayProgress] = useState(0);

  // Flip modal state
  const [isFlipped, setIsFlipped] = useState(false);

  // Optionally turn off voice before bird call
  const [playNameVoice, setPlayNameVoice] = useState(true);

  // Flying card state
  const [infoBird, setInfoBird] = useState<Bird | null>(null);
  const [infoOriginRect, setInfoOriginRect] = useState<Rect | null>(null);
  const [infoOpen, setInfoOpen] = useState(false);
  const [infoStyle, setInfoStyle] = useState<React.CSSProperties | null>(null);

  // AUDIO: handle queueing voice → call or variants
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      if (!queueRef.current?.length) {
        queueRef.current = null;
        setCurrentBirdId(null);
        setIsPlaying(false);
        setNowPlaying("");
        setPlayProgress(0);
        return;
      }
      queueRef.current.shift();

      if (!queueRef.current?.length) {
        queueRef.current = null;
        setCurrentBirdId(null);
        setIsPlaying(false);
        setNowPlaying("");
        setPlayProgress(0);
        return;
      }

      audio.src = queueRef.current[0];
      audio.play().catch(() => {});
    };

    audio.addEventListener("ended", handleEnded);
    return () => audio.removeEventListener("ended", handleEnded);
  }, []);

  // AUDIO progress
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const update = () => {
      if (!audio.duration || isNaN(audio.duration)) {
        setPlayProgress(0);
      } else {
        setPlayProgress(audio.currentTime / audio.duration);
      }
    };

    audio.addEventListener("timeupdate", update);
    return () => audio.removeEventListener("timeupdate", update);
  }, []);

  // CARD TAP → play/stop
  const handleCardTap = (bird: Bird) => {
    const audio = audioRef.current;
    if (!audio) return;

    // If same bird & playing → stop it
    if (currentBirdId === bird.id && isPlaying) {
      audio.pause();
      audio.currentTime = 0;
      queueRef.current = null;
      setIsPlaying(false);
      setCurrentBirdId(null);
      setPlayProgress(0);
      setNowPlaying("");
      return;
    }

    // Otherwise restart
    audio.pause();
    audio.currentTime = 0;

    queueRef.current = playNameVoice ? [bird.voice, bird.call] : [bird.call];
    setCurrentBirdId(bird.id);
    setIsPlaying(true);
    setPlayProgress(0);

    audio.src = queueRef.current[0];
    audio
      .play()
      .then(() =>
        setNowPlaying(
          playNameVoice
            ? `Playing: ${bird.name} – your voice, then call`
            : `Playing: ${bird.name} – call only`
        )
      )
      .catch(() => {
        setIsPlaying(false);
        setNowPlaying("");
      });
  };

  // Play a variant
  const handlePlayVariant = (bird: Bird, variant: BirdSongVariant) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;

    queueRef.current = [variant.audio];
    setCurrentBirdId(bird.id);
    setIsPlaying(true);
    setPlayProgress(0);

    audio.src = variant.audio;
    audio
      .play()
      .then(() => setNowPlaying(`Playing: ${bird.name} – ${variant.label}`))
      .catch(() => {
        setIsPlaying(false);
        setNowPlaying("");
      });
  };

  // INFO BUTTON → fly card upward + flip
  const handleInfoClick = (e: React.MouseEvent, bird: Bird) => {
    e.stopPropagation();
    if (!bird.info && !bird.variants?.length) return;

    const cardEl = (e.currentTarget as HTMLElement).closest(
      "[data-bird-card]"
    ) as HTMLElement | null;
    if (!cardEl) return;

    const rect = cardEl.getBoundingClientRect();

    // Origin in *viewport* coordinates
    const origin: Rect = {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    };

    setInfoBird(bird);
    setInfoOriginRect(origin);
    setIsFlipped(false);
    setInfoOpen(false);

    // Start the flying card exactly over the grid card
    setInfoStyle({
      top: origin.top,
      left: origin.left,
      width: origin.width,
      height: origin.height,
      position: "absolute",
    });

    // Next frame → animate to center of viewport
    requestAnimationFrame(() => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      const targetWidth = Math.min(vw - 32, 480);
      const targetHeight = Math.min(vh - 48, 640);

      const targetTop = vh / 2 - targetHeight / 2;
      const targetLeft = vw / 2 - targetWidth / 2;

      setInfoStyle((prev) => ({
        ...(prev || {}),
        top: targetTop,
        left: targetLeft,
        width: targetWidth,
        height: targetHeight,
      }));

      setInfoOpen(true);
      setIsFlipped(true);
    });
  };

  // Close info card → flip & fly back
  const closeInfo = React.useCallback(() => {
    if (!infoBird || !infoOriginRect) {
      setInfoBird(null);
      setInfoStyle(null);
      setInfoOriginRect(null);
      setIsFlipped(false);
      setInfoOpen(false);
      return;
    }

    setIsFlipped(false);
    setInfoOpen(false);

    // Fly back to the original viewport coords
    setInfoStyle((prev) => ({
      ...(prev || {}),
      top: infoOriginRect.top,
      left: infoOriginRect.left,
      width: infoOriginRect.width,
      height: infoOriginRect.height,
    }));
  }, [infoBird, infoOriginRect]);

  // ESC closes
  useEffect(() => {
    if (!infoBird) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeInfo();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [infoBird, closeInfo]);

  return (
    <>
      <main className="grid gap-6 md:gap-8">
        {/* overflow-x-hidden prevents any accidental horizontal scroll (mobile centering bug) */}
        <section className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-6 md:p-8 shadow-card overflow-x-hidden">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--text)]">
            Sibley Backyard Birding Bingo – Sounds
          </h1>

          <p className="text-[var(--muted)] mt-2">
            Tap a bird card to play the call
            {playNameVoice ? " (with voice intro)" : ""}.
          </p>

          <div className="mt-4 text-xs text-center text-[var(--muted)] min-h-[1.25rem]">
            {nowPlaying}
          </div>

          {/* Filters */}
          <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-[var(--muted)]">
            <div>Tap a card to play/stop.</div>

            {/* IMPORTANT: flex-wrap on mobile prevents horizontal overflow */}
            <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
              <div className="inline-flex items-center gap-2">
                <span>View:</span>
                <div className="inline-flex rounded-full border border-[var(--border)] bg-[var(--bg-elev)] p-0.5">
                  <button
                    onClick={() => setSexFilter("male")}
                    className={`px-2.5 py-1 rounded-full text-[0.7rem] font-semibold ${
                      sexFilter === "male"
                        ? "bg-white text-black shadow-sm"
                        : "text-[var(--muted)]"
                    }`}
                  >
                    Male ♂
                  </button>
                  <button
                    onClick={() => setSexFilter("female")}
                    className={`px-2.5 py-1 rounded-full text-[0.7rem] font-semibold ${
                      sexFilter === "female"
                        ? "bg-white text-black shadow-sm"
                        : "text-[var(--muted)]"
                    }`}
                  >
                    Female ♀
                  </button>
                </div>
              </div>

              <label className="inline-flex items-center gap-2 select-none">
                <span>Voice</span>

                <button
                  type="button"
                  onClick={() => setPlayNameVoice((v) => !v)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full border border-[var(--border)] transition ${
                    playNameVoice ? "bg-white" : "bg-[var(--bg-elev)]"
                  }`}
                  aria-pressed={playNameVoice}
                  aria-label={playNameVoice ? "Voice on" : "Voice off"}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-black transition ${
                      playNameVoice ? "translate-x-5" : "translate-x-1"
                    }`}
                  />
                </button>

                <span className="text-[0.7rem] text-[var(--muted)]">
                  {playNameVoice ? "on" : "off"}
                </span>
              </label>

              <label className="inline-flex items-center gap-2">
                <span>Grown-up info</span>
                <input
                  type="checkbox"
                  className="accent-lime-500"
                  checked={showNerdMode}
                  onChange={(e) => setShowNerdMode(e.target.checked)}
                />
              </label>
            </div>
          </div>

          {/* Grid */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {birds.map((bird) => {
              const imgSrc = getBirdImage(bird, sexFilter);
              const isInfoActive = infoBird?.id === bird.id;

              return (
                <div
                  key={bird.id}
                  data-bird-card-wrapper
                  style={{ visibility: isInfoActive ? "hidden" : "visible" }}
                >
                  <div
                    data-bird-card
                    role="button"
                    tabIndex={0}
                    onClick={() => handleCardTap(bird)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleCardTap(bird);
                      }
                    }}
                    className="relative group flex flex-col items-center cursor-pointer active:scale-[0.97]"
                  >
                    <div className="relative w-full max-w-[220px] mx-auto pt-[138%] rounded-[20px] border-[3px] border-[#F6C94B] bg-white shadow-md">
                      <div className="absolute inset-[10px] rounded-[14px] overflow-hidden bg-white">
                        <div className="relative w-full h-full flex flex-col items-center">
                          {/* Liquid fill */}
                          {currentBirdId === bird.id && isPlaying && (
                            <div
                              className="absolute inset-x-0 bottom-0 bg-slate-900/30"
                              style={{ height: `${playProgress * 100}%` }}
                            />
                          )}

                          {showNerdMode &&
                            (bird.info || bird.variants?.length) && (
                              <button
                                onClick={(e) => handleInfoClick(e, bird)}
                                className="absolute top-2 right-2 h-6 w-6 bg-black/60 text-white rounded-full text-xs flex items-center justify-center"
                              >
                                i
                              </button>
                            )}

                          <div className="w-full flex-1 flex items-center justify-center p-3">
                            <img
                              src={imgSrc}
                              alt={bird.name}
                              className="max-h-full max-w-full object-contain"
                            />
                          </div>

                          <div className="pb-4 text-center text-[0.7rem] tracking-[0.25em] text-black/80 font-medium">
                            {bird.name.toUpperCase()}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-1 text-[0.65rem] text-[var(--muted)] uppercase">
                      Tap to{" "}
                      {currentBirdId === bird.id && isPlaying ? "stop" : "play"}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <audio ref={audioRef} />
        </section>
      </main>

      {/* Flying + flipping info card */}
      {infoBird && infoStyle && (
        <div
          className={`fixed inset-0 z-50 transition-colors duration-150 ${
            infoOpen ? "bg-black/60" : "bg-black/0"
          }`}
          onClick={closeInfo}
        >
          <div
            className="absolute transition-all duration-200 ease-out will-change-[top,left,width,height]"
            style={infoStyle}
            onClick={(e) => e.stopPropagation()}
            onTransitionEnd={() => {
              if (!infoOpen && !isFlipped) {
                setInfoBird(null);
                setInfoStyle(null);
                setInfoOriginRect(null);
              }
            }}
          >
            {/* Close button */}
            <button
              onClick={closeInfo}
              className="absolute top-3 right-3 text-neutral-800 hover:text-white text-xl z-20"
            >
              ×
            </button>

            {/* 3D flip container */}
            <div className="card-3d-container h-full w-full">
              <div className={`card-3d ${isFlipped ? "card-3d-flipped" : ""}`}>
                {/* FRONT */}
                <div className="card-3d-face card-3d-front rounded-[20px] border-[3px] border-[#F6C94B] bg-white flex flex-col items-center justify-center gap-4 px-6 py-8">
                  <div className="w-32 h-32 flex items-center justify-center">
                    <img
                      src={getBirdImage(infoBird, sexFilter)}
                      alt={infoBird.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-[0.8rem] tracking-[0.25em] text-black/80 font-medium">
                      {infoBird.name.toUpperCase()}
                    </div>
                  </div>
                </div>

                {/* BACK – Cornell-style overview + your extras */}
                <div className="card-3d-face card-3d-back rounded-[20px] border-[3px] border-[#F6C94B] bg-white overflow-hidden">
                  <div className="p-4 sm:p-5 md:p-6 h-full overflow-y-auto flex flex-col gap-4">
                    {/* Top: image + group / order / family */}
                    <div className="flex flex-col items-center gap-3 text-center">
                      <div className="w-32 h-32 flex items-center justify-center">
                        <img
                          src={getBirdImage(infoBird, sexFilter)}
                          alt={infoBird.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <div>
                        <div className="text-[0.85rem] tracking-[0.25em] text-black/80 font-medium">
                          {infoBird.name.toUpperCase()}
                        </div>
                        {infoBird.info?.scientificName && (
                          <div className="mt-1 text-[0.8rem] italic text-neutral-600">
                            {infoBird.info.scientificName}
                          </div>
                        )}
                        {infoBird.info?.groupName && (
                          <div className="mt-1 text-[0.7rem] text-neutral-500">
                            {infoBird.info.groupName}
                          </div>
                        )}
                        {(infoBird.info?.order || infoBird.info?.family) && (
                          <div className="mt-2 text-[0.7rem] text-neutral-500 space-y-0.5">
                            {infoBird.info.order && (
                              <div>
                                <span className="font-semibold">ORDER: </span>
                                {infoBird.info.order}
                              </div>
                            )}
                            {infoBird.info.family && (
                              <div>
                                <span className="font-semibold">FAMILY: </span>
                                {infoBird.info.family}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="h-px bg-neutral-200" />

                    {/* Overview / basic description */}
                    {infoBird.info?.basicDescription && (
                      <div>
                        <div className="uppercase text-xs tracking-[0.18em] font-semibold mb-1">
                          Overview
                        </div>
                        <p className="text-sm text-neutral-700 leading-relaxed">
                          {infoBird.info.basicDescription}
                        </p>
                      </div>
                    )}

                    {/* Life-history chips built from individual fields */}
                    {(infoBird.info?.habitat ||
                      infoBird.info?.food ||
                      infoBird.info?.nesting ||
                      infoBird.info?.behavior ||
                      infoBird.info?.conservation) && (
                      <div>
                        <div className="uppercase text-xs tracking-[0.18em] font-semibold mb-2">
                          Life history
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {infoBird.info?.habitat && (
                            <div className="px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-[0.7rem] flex flex-col text-neutral-800">
                              <span className="font-semibold">Habitat</span>
                              <span>{infoBird.info.habitat}</span>
                            </div>
                          )}
                          {infoBird.info?.food && (
                            <div className="px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-[0.7rem] flex flex-col text-neutral-800">
                              <span className="font-semibold">Food</span>
                              <span>{infoBird.info.food}</span>
                            </div>
                          )}
                          {infoBird.info?.nesting && (
                            <div className="px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-[0.7rem] flex flex-col text-neutral-800">
                              <span className="font-semibold">Nesting</span>
                              <span>{infoBird.info.nesting}</span>
                            </div>
                          )}
                          {infoBird.info?.behavior && (
                            <div className="px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-[0.7rem] flex flex-col text-neutral-800">
                              <span className="font-semibold">Behavior</span>
                              <span>{infoBird.info.behavior}</span>
                            </div>
                          )}
                          {infoBird.info?.conservation && (
                            <div className="px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-[0.7rem] flex flex-col text-neutral-800">
                              <span className="font-semibold">
                                Conservation
                              </span>
                              <span>{infoBird.info.conservation}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Songs / calls / other sounds */}
                    {infoBird.info?.songs && (
                      <div>
                        <div className="uppercase text-xs tracking-[0.18em] font-semibold mb-1">
                          Songs
                        </div>
                        <p className="text-sm text-neutral-700 leading-relaxed">
                          {infoBird.info.songs}
                        </p>
                      </div>
                    )}

                    {infoBird.info?.calls && (
                      <div>
                        <div className="uppercase text-xs tracking-[0.18em] font-semibold mb-1">
                          Calls
                        </div>
                        <p className="text-sm text-neutral-700 leading-relaxed">
                          {infoBird.info.calls}
                        </p>
                      </div>
                    )}

                    {infoBird.info?.otherSounds && (
                      <div>
                        <div className="uppercase text-xs tracking-[0.18em] font-semibold mb-1">
                          Other sounds
                        </div>
                        <p className="text-sm text-neutral-700 leading-relaxed">
                          {infoBird.info.otherSounds}
                        </p>
                      </div>
                    )}

                    {/* Variant buttons */}
                    {infoBird.variants?.length ? (
                      <div>
                        <div className="uppercase text-xs tracking-[0.18em] font-semibold mb-2">
                          Songs / dialects
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {infoBird.variants.map((variant) => (
                            <button
                              key={variant.id}
                              onClick={() =>
                                handlePlayVariant(infoBird, variant)
                              }
                              className="px-3 py-1 rounded-full border border-neutral-200 bg-neutral-50 text-xs text-neutral-800 hover:border-cyan-400 hover:bg-cyan-50 active:translate-y-[1px] active:scale-[0.98] transition-transform"
                            >
                              {variant.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    {/* Link out to Cornell */}
                    {infoBird.info?.sourceUrl && (
                      <a
                        href={infoBird.info.sourceUrl}
                        className="mt-1 text-cyan-600 text-xs hover:underline inline-flex items-center gap-1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        More at Cornell Lab ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
