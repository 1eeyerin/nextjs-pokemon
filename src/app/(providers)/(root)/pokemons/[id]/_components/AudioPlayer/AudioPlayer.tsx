"use client";

import { useEffect, useRef } from "react";
import type { Pokemon } from "@/types/pokemon";

type AudioPlayerProps = {
  src: Pokemon<true>["cries"]["latest"];
};

const AudioPlayer = ({ src }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.05;
    audio.play();
  }, [src]);

  return (
    <audio ref={audioRef} style={{ display: "none" }}>
      <source src={src} type="audio/ogg" />
    </audio>
  );
};

export default AudioPlayer;
