import { cn } from "@/lib/utils";

// The pixel squares from the MPL logo, traced from public/mplds.png.
const squares: [number, number, number][] = [
  [782, 210, 28],
  [730, 264, 36],
  [818, 262, 30],
  [664, 290, 38],
  [780, 327, 26],
  [720, 349, 36],
  [662, 370, 38],
  [770, 380, 26],
  [720, 420, 30],
  [640, 430, 38],
];

/**
 * Clean, scalable version of the MPL Digital Services logo.
 * Size it with font-size (text-*), e.g. className="text-[22px]".
 */
export function Logo({ tone = "color", className }: { tone?: "color" | "white"; className?: string }) {
  const white = tone === "white";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-[0.4em] font-logo leading-none",
        white ? "text-white" : "text-brand-navy",
        className,
      )}
    >
      <span className="relative pr-[0.55em] text-[2.1em] font-extrabold tracking-[-0.03em]">
        MPL
        <svg
          viewBox="636 206 216 266"
          className="absolute right-0 top-[-0.32em] w-[0.78em]"
          aria-hidden="true"
        >
          {squares.map(([x, y, s]) => (
            <rect key={`${x}-${y}`} x={x} y={y} width={s} height={s} fill={white ? "#8cc4f5" : "var(--brand-blue)"} />
          ))}
        </svg>
      </span>
      <span className="text-[0.66em] font-bold uppercase tracking-[0.06em] leading-[1.08]">
        Digital
        <br />
        Services
      </span>
    </span>
  );
}
