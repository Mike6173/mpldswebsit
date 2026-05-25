"use client";
import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useScroll, useTransform, useSpring, useReducedMotion, motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Design & Development",
    description: "Custom Next.js and WordPress builds engineered for performance, conversions, and brand trust.",
    href: "/services/web-design",
    tag: "Next.js · WordPress · SEO",
  },
  {
    num: "02",
    title: "Excel & Data Solutions",
    description: "Automation, dashboards, and data pipelines that eliminate busywork and surface real insight.",
    href: "/services/data-solutions",
    tag: "Excel · Power BI · Python",
  },
  {
    num: "03",
    title: "Social Media Marketing",
    description: "Content strategy, creative production, and paid social — consistently delivering reach and engagement.",
    href: "/services/social-media",
    tag: "Organic · Paid Social · Strategy",
  },
];

function ServiceRows() {
  return (
    <div className="w-full">
      {services.map((s) => (
        <Link
          key={s.href}
          href={s.href}
          className="group relative flex items-center gap-6 md:gap-10 py-11 border-b border-border last:border-b-0 hover:bg-muted/20 transition-colors duration-200 px-6 md:px-12 lg:px-16 overflow-hidden"
        >
          {/* Left accent bar */}
          <span
            className="absolute left-0 top-0 bottom-0 w-[2px] bg-brand origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-200"
            aria-hidden
          />

          {/* Number */}
          <span className="font-mono text-[11px] tracking-widest text-muted-foreground/35 w-6 shrink-0 select-none">
            {s.num}
          </span>

          {/* Title */}
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-foreground group-hover:text-brand transition-colors duration-200 w-52 md:w-72 lg:w-80 shrink-0">
            {s.title}
          </h3>

          {/* Tag — visible on mid widths */}
          <span className="hidden lg:block text-xs font-mono tracking-widest text-muted-foreground/50 uppercase w-52 shrink-0">
            {s.tag}
          </span>

          {/* Description */}
          <p className="hidden md:block text-sm text-muted-foreground leading-relaxed flex-1 max-w-xs">
            {s.description}
          </p>

          {/* Arrow */}
          <div className="ml-auto shrink-0 w-8 h-8 flex items-center justify-center border border-border group-hover:border-brand group-hover:bg-brand group-hover:text-white text-muted-foreground transition-all duration-200">
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </Link>
      ))}
    </div>
  );
}

export function ScrollPopSection() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, { stiffness: 55, damping: 22, mass: 0.5 });

  // Words split apart — done by 55%
  const leftX      = useTransform(progress, [0, 0.55], ["0vw", "-52vw"]);
  const leftScale  = useTransform(progress, [0, 0.55], [1, 1.25]);
  const rightX     = useTransform(progress, [0, 0.55], ["0vw", "52vw"]);
  const rightScale = useTransform(progress, [0, 0.55], [1, 1.25]);
  const wordsOp    = useTransform(progress, [0.25, 0.5], [1, 0]);

  // Rows fade in while words are flying
  const rowsOp    = useTransform(progress, [0.45, 0.75], [0, 1]);
  const rowsY     = useTransform(progress, [0.45, 0.75], [28, 0]);

  /* Reduced-motion fallback */
  if (prefersReducedMotion) {
    return (
      <section className="bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-20 pb-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-12">
            Full-stack digital services
          </h2>
        </div>
        <ServiceRows />
      </section>
    );
  }

  return (
    <div ref={ref} className="relative border-t border-border" style={{ height: "130vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-white flex flex-col justify-center">

        {/* Eyebrow */}
        <div className="absolute top-10 left-6 md:left-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            What We Do
          </p>
        </div>

        {/* Service rows — below the words in z-order */}
        <motion.div
          style={{ opacity: rowsOp, y: rowsY }}
          className="absolute inset-0 flex flex-col justify-center"
        >
          <div className="border-t border-border">
            <ServiceRows />
          </div>
        </motion.div>

        {/* Words — on top, splitting apart */}
        <motion.div
          style={{ opacity: wordsOp }}
          className="flex items-center justify-center gap-4 md:gap-8 px-6 overflow-hidden absolute inset-0 pointer-events-none"
          aria-hidden
        >
          <motion.span
            style={{ x: leftX, scale: leftScale }}
            className="inline-block font-bold text-[clamp(3rem,9vw,8rem)] tracking-tight text-foreground leading-none select-none"
          >
            Digital
          </motion.span>
          <motion.span
            style={{ x: rightX, scale: rightScale }}
            className="inline-block font-light italic text-[clamp(3rem,9vw,8rem)] tracking-tight text-muted-foreground leading-none select-none"
          >
            Services.
          </motion.span>
        </motion.div>

      </div>
    </div>
  );
}
