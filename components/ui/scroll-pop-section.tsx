"use client";
import { useRef } from "react";
import {
  useScroll,
  useTransform,
  useReducedMotion,
  motion,
  useSpring,
} from "framer-motion";

export function ScrollPopSection() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.5 });

  // Left word: translate left, scale up
  const leftX     = useTransform(progress, [0, 1], ["0vw", "-55vw"]);
  const leftScale = useTransform(progress, [0, 1], [1, 1.35]);

  // Right word: translate right, scale up
  const rightX     = useTransform(progress, [0, 1], ["0vw", "55vw"]);
  const rightScale = useTransform(progress, [0, 1], [1, 1.35]);

  // Ghost numeral fades in
  const ghostOpacity = useTransform(progress, [0, 0.5], [0, 1]);

  // Caption fades out
  const captionOpacity = useTransform(progress, [0, 0.5], [1, 0]);

  if (prefersReducedMotion) {
    return (
      <section className="border-t border-border py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <p className="text-[11px] font-sans font-medium uppercase tracking-[0.32em] text-fg-muted inline-flex items-center gap-3.5 mb-12">
            <span className="h-px w-7 bg-current opacity-40" />
            Selected work · 2024 — 2026
            <span className="h-px w-7 bg-current opacity-40" />
          </p>
          <div className="flex items-baseline gap-6">
            <span className="font-display font-medium text-[clamp(4rem,12vw,10rem)] leading-[0.94] tracking-[-0.03em] text-fg">
              Built.
            </span>
            <span className="font-display font-light italic text-[clamp(4rem,12vw,10rem)] leading-[0.94] tracking-[-0.03em] text-fg-muted">
              Differently.
            </span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div
      ref={ref}
      className="relative border-t border-border"
      style={{ height: "280vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        {/* Eyebrow */}
        <div className="absolute top-16 left-6 md:left-10">
          <span className="text-[11px] font-sans font-medium uppercase tracking-[0.32em] text-fg-muted inline-flex items-center gap-3.5">
            <span className="h-px w-7 bg-current opacity-40" />
            Selected work · 2024 — 2026
            <span className="h-px w-7 bg-current opacity-40" />
          </span>
        </div>

        {/* Ghost numeral */}
        <motion.div
          style={{ opacity: ghostOpacity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden
        >
          <span
            className="font-display italic font-light select-none"
            style={{
              fontSize: "60vw",
              lineHeight: 1,
              color: "rgba(152, 192, 239, 0.025)",
              userSelect: "none",
            }}
          >
            23
          </span>
        </motion.div>

        {/* Words */}
        <div className="relative flex items-center justify-center gap-6 md:gap-10 px-6">
          <motion.span
            style={{ x: leftX, scale: leftScale }}
            className="font-display font-medium text-[clamp(3.5rem,10vw,9rem)] leading-[0.94] tracking-[-0.03em] text-fg inline-block"
          >
            Built.
          </motion.span>
          <motion.span
            style={{ x: rightX, scale: rightScale }}
            className="font-display font-light italic text-[clamp(3.5rem,10vw,9rem)] leading-[0.94] tracking-[-0.03em] text-fg-muted inline-block"
          >
            Differently.
          </motion.span>
        </div>

        {/* Caption */}
        <motion.div
          style={{ opacity: captionOpacity }}
          className="absolute bottom-16 left-6 md:left-10 max-w-lg"
        >
          <p className="font-sans text-[15px] leading-[1.55] text-fg-dim">
            Twenty-three engagements across{" "}
            <em className="not-italic text-fg-muted">
              SaaS, services, and luxury commerce.
            </em>{" "}
            Senior-only delivery. No juniors learning on your invoice.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
