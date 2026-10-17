"use client";
import { useEffect, useRef, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] },
  },
};

/* ─── Particle canvas ─────────────────────────────────────── */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef   = useRef<number>(0);

  const start = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const particles = Array.from({ length: 70 }, () => ({
      x:  Math.random() * canvas.width,
      y:  Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r:  Math.random() * 1.2 + 0.3,
      o:  Math.random() * 0.35 + 0.08,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < 100) {
            ctx.beginPath();
            ctx.strokeStyle = "rgba(255,255,255,1)";
            ctx.globalAlpha = (1 - d / 100) * 0.09;
            ctx.lineWidth   = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Dots
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle  = "white";
        ctx.globalAlpha = p.o;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => { window.removeEventListener("resize", resize); };
  }, []);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    const launch = () => { cleanup = start() ?? undefined; };
    if ("requestIdleCallback" in window) {
      (window as Window & { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(launch);
    } else {
      const t = setTimeout(launch, 150);
      return () => clearTimeout(t);
    }
    return () => { cancelAnimationFrame(animRef.current); cleanup?.(); };
  }, [start]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 2 }}
    />
  );
}

/* ─── Hero ────────────────────────────────────────────────── */
export function HomeHero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2072&q=80"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" style={{ zIndex: 1 }} />
        {/* Gradient vignette at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent" style={{ zIndex: 1 }} />
      </div>

      {/* Particle canvas (above overlay, below content) */}
      {!prefersReducedMotion && <ParticleCanvas />}

      {/* Hero content */}
      <div className="relative flex-1 flex items-center" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 py-24 pt-36">
          <motion.div
            variants={prefersReducedMotion ? {} : containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.p
              variants={itemVariants}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-6"
            >
              MPL Digital Services
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-6"
            >
              Digital systems that scale your business.
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed text-white/75 max-w-2xl mb-10"
            >
              Web design, data solutions, and social media marketing — engineered for results. We
              build the digital backbone behind growing businesses.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-7 py-4 bg-brand text-white font-semibold rounded hover:bg-brand-dark transition-colors duration-200 text-sm"
              >
                View Our Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-4 bg-white/10 backdrop-blur-sm border border-white/25 text-white font-semibold rounded hover:bg-white/20 transition-all duration-200 text-sm"
              >
                Start a Project
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="relative flex justify-center pb-8"
        style={{ zIndex: 10 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-white/40 uppercase tracking-[0.15em]">Scroll</span>
          <motion.div
            className="w-[1px] h-8 bg-white/30"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
