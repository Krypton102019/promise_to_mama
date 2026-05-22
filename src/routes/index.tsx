import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
} from "@/components/apology/steps";

const backgroundMusicSrc = new URL("../assets/background-music.mp3", import.meta.url).href;

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const [step, setStep] = useState(1);

  const go = (s?: number) => {
    setStep(s ?? step + 1);
  };

  return (
    <>
      <BackgroundMusic />

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4 }}
        >
          {step === 1 && <Step1 onNext={go} />}
          {step === 2 && <Step2 onNext={go} />}
          {step === 3 && <Step3 onNext={go} />}
          {step === 4 && <Step4 onNext={go} />}
          {step === 5 && <Step5 />}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(backgroundMusicSrc);

    audio.loop = true;
    audio.volume = 0.5;

    audioRef.current = audio;

    // Autoplay may fail until user interacts
    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

 return (
  <button
    onClick={toggle}
    aria-label={playing ? "Mute music" : "Play music"}
    className="
      fixed top-5 right-5 z-50
      flex items-center gap-3
      px-5 py-3
      rounded-full
      backdrop-blur-xl
      bg-white/10
      border border-white/20
      shadow-2xl
      text-red-300
      font-medium
      transition-all duration-300
      hover:scale-105
      hover:bg-white/20
      active:scale-95
    "
  >
    <div
      className={`
        flex items-center justify-center
        w-10 h-10 rounded-full
        transition-all duration-300
        ${
          playing
            ? "bg-red-300/20 animate-pulse"
            : "bg-red-200/10"
        }
      `}
    >
      <span className="text-xl drop-shadow-[0_0_10px_rgba(255,0,0,0.7)]">
        {playing ? "❤️" : "🔈"}
      </span>
    </div>

    <div className="flex flex-col items-start leading-none">
      <span className="text-xs tracking-wide text-red-200/70">
        Our Song
      </span>

      <span className="text-base font-semibold text-red-300 drop-shadow-[0_0_8px_rgba(252,165,165,0.8)]">
        {playing ? "Playing for You ❤️" : "Play Love Music 🌹"}
      </span>
    </div>
  </button>
);
}