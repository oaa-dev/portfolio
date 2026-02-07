"use client";

import type { BackgroundType } from "@/hooks/useBackgroundAnimation";

interface BackgroundSwitcherProps {
  current: BackgroundType;
  onChange: (bg: BackgroundType) => void;
}

const options: { type: BackgroundType; label: string }[] = [
  { type: "particles", label: "Particle Network" },
  { type: "geometric", label: "Geometric Mesh" },
  { type: "waves", label: "Gradient Waves" },
];

function ParticleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="3" cy="4" r="1.5" fill="currentColor" />
      <circle cx="12" cy="3" r="1.5" fill="currentColor" />
      <circle cx="8" cy="12" r="1.5" fill="currentColor" />
      <circle cx="13" cy="11" r="1.5" fill="currentColor" />
      <line x1="3" y1="4" x2="12" y2="3" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      <line x1="3" y1="4" x2="8" y2="12" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      <line x1="12" y1="3" x2="13" y2="11" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      <line x1="8" y1="12" x2="13" y2="11" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
    </svg>
  );
}

function GeoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <polygon points="8,1 14,5 14,11 8,15 2,11 2,5" stroke="currentColor" strokeWidth="1" fill="none" />
      <polygon points="8,4 11,6 11,10 8,12 5,10 5,6" stroke="currentColor" strokeWidth="0.5" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}

function WaveIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M0,8 C4,4 8,12 16,8" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M0,11 C4,7 8,15 16,11" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M0,5 C4,1 8,9 16,5" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
    </svg>
  );
}

const icons: Record<BackgroundType, () => JSX.Element> = {
  particles: ParticleIcon,
  geometric: GeoIcon,
  waves: WaveIcon,
};

export function BackgroundSwitcher({ current, onChange }: BackgroundSwitcherProps) {
  return (
    <div className="absolute bottom-6 right-6 z-20 flex gap-1.5 p-1.5 rounded-full bg-slate-200/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-300/50 dark:border-slate-600/50 shadow-lg">
      {options.map((opt) => {
        const Icon = icons[opt.type];
        return (
          <button
            key={opt.type}
            onClick={() => onChange(opt.type)}
            aria-label={opt.label}
            title={opt.label}
            className={`p-2 rounded-full transition-all ${
              current === opt.type
                ? "bg-primary text-white shadow-md ring-2 ring-primary/50"
                : "text-slate-600 dark:text-slate-400 hover:text-primary hover:bg-white/50 dark:hover:bg-slate-700/50"
            }`}
          >
            <Icon />
          </button>
        );
      })}
    </div>
  );
}
