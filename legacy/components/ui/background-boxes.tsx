"use client";
import { useReducedMotion, motion } from "framer-motion";
import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";

const COLS = 40;
const ROWS = 10;

const colors = [
  "rgb(219 234 254)",   // blue-100
  "rgb(191 219 254)",   // blue-200
  "rgb(147 197 253)",   // blue-300
  "rgb(96 165 250)",    // blue-400
  "rgb(59 130 246)",    // blue-500
  "rgb(186 230 253)",   // sky-200
  "rgb(125 211 252)",   // sky-300
];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

export function BackgroundBoxes({ className }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion();
  const [hoveredCell, setHoveredCell] = useState<string | null>(null);
  const [cellColors, setCellColors] = useState<Record<string, string>>({});

  const handleMouseEnter = useCallback(
    (key: string) => {
      if (prefersReducedMotion) return;
      setHoveredCell(key);
      setCellColors((prev) => ({ ...prev, [key]: getRandomColor() }));
    },
    [prefersReducedMotion]
  );

  const handleMouseLeave = useCallback(() => {
    setHoveredCell(null);
  }, []);

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden",
        "[mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,transparent_0%,white_100%)]",
        className
      )}
      style={{ transform: "skewY(-6deg) scale(1.5)", transformOrigin: "top left" }}
    >
      {Array.from({ length: ROWS }).map((_, row) => (
        <div key={row} className="flex">
          {Array.from({ length: COLS }).map((_, col) => {
            const key = `${row}-${col}`;
            return (
              <motion.div
                key={key}
                onMouseEnter={() => handleMouseEnter(key)}
                onMouseLeave={handleMouseLeave}
                animate={{
                  backgroundColor:
                    hoveredCell === key ? (cellColors[key] ?? "transparent") : "transparent",
                }}
                transition={{ duration: 0.3 }}
                className="w-8 h-8 border-r border-b border-border flex-shrink-0"
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
