"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { useReducedMotion, motion } from "framer-motion";
import Link from "next/link";

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  size: number; opacity: number;
}

export function ParticleHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef  = useRef<number>(0);
  const [goldMode, setGoldMode] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const goldRef = useRef(goldMode);
  goldRef.current = goldMode;

  const startCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: Particle[] = [];

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = Math.max(window.innerHeight, 800);
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    for (let i = 0; i < 90; i++) {
      particles.push({
        x:       Math.random() * canvas.width,
        y:       Math.random() * canvas.height,
        vx:      (Math.random() - 0.5) * 0.28,
        vy:      (Math.random() - 0.5) * 0.28,
        size:    Math.random() * 1.2 + 0.4,
        opacity: Math.random() * 0.35 + 0.08,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const baseColor = goldRef.current ? "#d8bd10" : "#98c0ef";

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.strokeStyle = baseColor;
            ctx.globalAlpha = (1 - dist / 110) * 0.07;
            ctx.lineWidth   = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle  = baseColor;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    let cleanup: (() => void) | undefined;

    const launch = () => { cleanup = startCanvas() ?? undefined; };
    if ("requestIdleCallback" in window) {
      (window as typeof window & { requestIdleCallback: (cb: () => void) => number }).requestIdleCallback(launch);
    } else {
      const t = setTimeout(launch, 200);
      return () => clearTimeout(t);
    }

    return () => {
      cancelAnimationFrame(animRef.current);
      cleanup?.();
    };
  }, [prefersReducedMotion, startCanvas]);

  // Accent grid lines (subtle horizontal rules)
  const gridLines = [20, 40, 60, 80].map(pct => (
    <div
      key={pct}
      className="absolute left-0 right-0 border-t border-border pointer-events-none"
      style={{ top: `${pct}%` }}
    />
  ));

  // Spotlight beams
  const spotlights = (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute top-0 left-[30%] w-px h-full origin-top"
        style={{
          background: "linear-gradient(to bottom, rgba(152,192,239,0.18), transparent 60%)",
          transform: "rotate(8deg)",
        }}
      />
      <div
        className="absolute top-0 right-[28%] w-px h-full origin-top"
        style={{
          background: "linear-gradient(to bottom, rgba(152,192,239,0.10), transparent 50%)",
          transform: "rotate(-10deg)",
        }}
      />
    </div>
  );

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-bg">
      {/* Canvas */}
      {!prefersReducedMotion && (
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      )}
      {/* Fallback static gradient when reduced motion */}
      {prefersReducedMotion && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(152,192,239,0.08), transparent)",
          }}
        />
      )}

      {gridLines}
      {spotlights}

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="mx-auto max-w-[1280px] w-full px-6 md:px-10 pt-36 pb-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[11px] font-sans font-medium uppercase tracking-[0.32em] text-fg-muted mb-8"
            >
              Independent Digital Studio · Est. 2023
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-display font-medium text-[clamp(3rem,8vw,7rem)] leading-[0.94] tracking-[-0.03em] text-fg mb-8 max-w-4xl"
            >
              Build something{" "}
              <em
                className="not-italic"
                style={{
                  backgroundImage: goldMode
                    ? "linear-gradient(90deg, #d8bd10 0%, #f0d84a 40%, #d8bd10 60%, #b09608 100%)"
                    : "linear-gradient(90deg, #d8ecf8 0%, #ffffff 35%, #98c0ef 55%, #d8ecf8 80%, #ffffff 100%)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "shimmer 3.5s ease-in-out infinite",
                }}
              >
                extraordinary
              </em>
              .
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="font-sans text-[17px] leading-[1.55] text-fg-dim max-w-xl mb-12"
            >
              A senior team for ambitious brands. We design and engineer interfaces, identities, and
              growth systems that compound — not vibe-coded sites that decay.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-5 py-3.5 text-[13px] font-sans font-medium bg-fg text-bg rounded hover:bg-blue transition-all duration-200"
              >
                Start a project
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </Link>
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 px-5 py-3.5 text-[13px] font-sans font-medium text-fg border border-border-strong hover:border-fg-muted hover:bg-blue/5 rounded transition-all duration-200"
              >
                View selected work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Gold mode toggle */}
      <div className="relative z-10 flex flex-col items-center pb-10 gap-2">
        <button
          onClick={() => setGoldMode((g) => !g)}
          className="transition-transform duration-200 hover:scale-125"
          aria-label="Toggle gold palette"
        >
          <span
            className="block w-2 h-2 rounded-full transition-all duration-300"
            style={{
              backgroundColor: goldMode ? "#d8bd10" : "#98c0ef",
              boxShadow: goldMode ? "0 0 8px #d8bd10" : "0 0 8px #98c0ef",
            }}
          />
        </button>
        <span className="text-[9px] font-sans uppercase tracking-[0.32em] text-fg-faint">
          — Click to switch palette —
        </span>
      </div>

      {/* Bottom meta strips */}
      <div className="absolute bottom-6 left-6 md:left-10 z-10 hidden md:flex flex-col gap-1">
        <span className="text-[10px] font-sans uppercase tracking-[0.28em] text-fg-faint">NJ / NYC</span>
        <span className="text-[10px] font-sans uppercase tracking-[0.28em] text-fg-faint">40.7° N, 74.0° W</span>
      </div>
      <div className="absolute bottom-6 right-6 md:right-10 z-10 hidden md:flex flex-col items-end gap-1">
        <span className="text-[10px] font-sans uppercase tracking-[0.28em] text-fg-faint">v.05.26</span>
        <span className="text-[10px] font-sans uppercase tracking-[0.28em] text-fg-faint">Currently — accepting Q3 work</span>
      </div>
    </section>
  );
}
