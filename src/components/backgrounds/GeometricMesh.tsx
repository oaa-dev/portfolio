"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/components/ui/ThemeProvider";

interface Shape {
  id: number;
  type: "hexagon" | "triangle" | "diamond" | "circle";
  x: number;
  y: number;
  size: number;
  rotation: number;
  duration: number;
  delay: number;
  opacity: number;
}

const shapes: Shape[] = [
  { id: 1, type: "hexagon", x: 15, y: 20, size: 80, rotation: 0, duration: 20, delay: 0, opacity: 0.12 },
  { id: 2, type: "triangle", x: 75, y: 15, size: 60, rotation: 45, duration: 25, delay: -5, opacity: 0.1 },
  { id: 3, type: "diamond", x: 85, y: 60, size: 70, rotation: 0, duration: 18, delay: -3, opacity: 0.08 },
  { id: 4, type: "hexagon", x: 25, y: 75, size: 90, rotation: 30, duration: 22, delay: -8, opacity: 0.1 },
  { id: 5, type: "circle", x: 60, y: 80, size: 50, rotation: 0, duration: 15, delay: -2, opacity: 0.12 },
  { id: 6, type: "triangle", x: 45, y: 35, size: 55, rotation: 120, duration: 28, delay: -10, opacity: 0.08 },
  { id: 7, type: "diamond", x: 10, y: 50, size: 45, rotation: 60, duration: 24, delay: -6, opacity: 0.1 },
  { id: 8, type: "circle", x: 90, y: 30, size: 40, rotation: 0, duration: 20, delay: -4, opacity: 0.09 },
];

function hexagonPoints(size: number): string {
  const pts: string[] = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 2;
    pts.push(`${Math.cos(angle) * size},${Math.sin(angle) * size}`);
  }
  return pts.join(" ");
}

function trianglePoints(size: number): string {
  const h = (size * Math.sqrt(3)) / 2;
  return `0,${(-h * 2) / 3} ${-size},${h / 3} ${size},${h / 3}`;
}

function diamondPoints(size: number): string {
  return `0,${-size} ${size * 0.6},0 0,${size} ${-size * 0.6},0`;
}

export function GeometricMesh() {
  const { theme } = useTheme();
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  const isDark = theme === "dark";
  const strokeColor = isDark ? "#818cf8" : "#6366f1";
  const fillColor = isDark ? "#818cf8" : "#6366f1";

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <style>{`
          @keyframes geo-spin-pulse {
            0% { transform: rotate(0deg) scale(1); }
            25% { transform: rotate(90deg) scale(1.1); }
            50% { transform: rotate(180deg) scale(1.15); }
            75% { transform: rotate(270deg) scale(1.1); }
            100% { transform: rotate(360deg) scale(1); }
          }
          .geo-shape {
            animation: ${reducedMotion ? "none" : "geo-spin-pulse var(--dur) linear infinite"};
            animation-delay: var(--delay);
          }
        `}</style>
      </defs>
      {shapes.map((s) => {
        const shapeElement =
          s.type === "hexagon" ? (
            <polygon
              points={hexagonPoints(s.size / 10)}
              fill={fillColor}
              fillOpacity={s.opacity}
              stroke={strokeColor}
              strokeOpacity={s.opacity * 2}
              strokeWidth="0.15"
            />
          ) : s.type === "triangle" ? (
            <polygon
              points={trianglePoints(s.size / 10)}
              fill={fillColor}
              fillOpacity={s.opacity}
              stroke={strokeColor}
              strokeOpacity={s.opacity * 2}
              strokeWidth="0.15"
            />
          ) : s.type === "diamond" ? (
            <polygon
              points={diamondPoints(s.size / 10)}
              fill={fillColor}
              fillOpacity={s.opacity}
              stroke={strokeColor}
              strokeOpacity={s.opacity * 2}
              strokeWidth="0.15"
            />
          ) : (
            <circle
              r={s.size / 10}
              fill={fillColor}
              fillOpacity={s.opacity}
              stroke={strokeColor}
              strokeOpacity={s.opacity * 2}
              strokeWidth="0.15"
            />
          );

        return (
          <g
            key={s.id}
            transform={`translate(${s.x}, ${s.y}) rotate(${s.rotation})`}
            className="geo-shape"
            style={
              {
                "--dur": `${s.duration}s`,
                "--delay": `${s.delay}s`,
                transformOrigin: `${s.x}px ${s.y}px`,
                transformBox: "fill-box" as const,
              } as React.CSSProperties
            }
          >
            {shapeElement}
          </g>
        );
      })}
    </svg>
  );
}
