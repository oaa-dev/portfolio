"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/components/ui/ThemeProvider";

export function GradientWaves() {
  const { theme } = useTheme();
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  const isDark = theme === "dark";

  const wave1 = isDark ? ["#6366f1", "#818cf8"] : ["#6366f1", "#a5b4fc"];
  const wave2 = isDark ? ["#ec4899", "#f472b6"] : ["#ec4899", "#f9a8d4"];
  const wave3 = isDark ? ["#8b5cf6", "#a78bfa"] : ["#8b5cf6", "#c4b5fd"];

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 1440 900"
    >
      <defs>
        <linearGradient id="wg1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={wave1[0]} stopOpacity="0.18" />
          <stop offset="50%" stopColor={wave1[1]} stopOpacity="0.10" />
          <stop offset="100%" stopColor={wave1[0]} stopOpacity="0.18" />
        </linearGradient>
        <linearGradient id="wg2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={wave2[0]} stopOpacity="0.15" />
          <stop offset="50%" stopColor={wave2[1]} stopOpacity="0.08" />
          <stop offset="100%" stopColor={wave2[0]} stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="wg3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={wave3[0]} stopOpacity="0.12" />
          <stop offset="50%" stopColor={wave3[1]} stopOpacity="0.06" />
          <stop offset="100%" stopColor={wave3[0]} stopOpacity="0.12" />
        </linearGradient>
        <style>{`
          @keyframes wave-drift-1 {
            0% { transform: translateX(0); }
            50% { transform: translateX(-80px); }
            100% { transform: translateX(0); }
          }
          @keyframes wave-drift-2 {
            0% { transform: translateX(0); }
            50% { transform: translateX(60px); }
            100% { transform: translateX(0); }
          }
          @keyframes wave-drift-3 {
            0% { transform: translateX(0); }
            50% { transform: translateX(-40px); }
            100% { transform: translateX(0); }
          }
          .wave-1 { animation: ${reducedMotion ? "none" : "wave-drift-1 12s ease-in-out infinite"}; }
          .wave-2 { animation: ${reducedMotion ? "none" : "wave-drift-2 16s ease-in-out infinite"}; animation-delay: -3s; }
          .wave-3 { animation: ${reducedMotion ? "none" : "wave-drift-3 20s ease-in-out infinite"}; animation-delay: -7s; }
        `}</style>
      </defs>

      <g className="wave-3">
        <path
          d="M-100,400 C200,300 500,500 720,380 C940,260 1200,450 1540,380 L1540,900 L-100,900 Z"
          fill="url(#wg3)"
        />
      </g>
      <g className="wave-2">
        <path
          d="M-100,500 C300,400 500,600 720,480 C940,360 1150,550 1540,480 L1540,900 L-100,900 Z"
          fill="url(#wg2)"
        />
      </g>
      <g className="wave-1">
        <path
          d="M-100,580 C200,480 400,650 720,540 C1040,430 1200,620 1540,560 L1540,900 L-100,900 Z"
          fill="url(#wg1)"
        />
      </g>
    </svg>
  );
}
