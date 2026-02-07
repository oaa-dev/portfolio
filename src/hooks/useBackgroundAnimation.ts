"use client";

import { useState, useEffect } from "react";

export type BackgroundType = "particles" | "geometric" | "waves";

const STORAGE_KEY = "hero-background";
const DEFAULT: BackgroundType = "particles";

export function useBackgroundAnimation() {
  const [background, setBackground] = useState<BackgroundType>(DEFAULT);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as BackgroundType | null;
    if (stored && ["particles", "geometric", "waves"].includes(stored)) {
      setBackground(stored);
    }
  }, []);

  const setAndPersist = (bg: BackgroundType) => {
    setBackground(bg);
    localStorage.setItem(STORAGE_KEY, bg);
  };

  return { background, setBackground: setAndPersist };
}
