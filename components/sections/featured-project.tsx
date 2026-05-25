"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";

const tags = ["Web Design", "Local SEO", "Lead Generation", "Mobile Responsive"];

export function FeaturedProject() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [-30, 30]
  );

  return (
    <section ref={ref} className="bg-muted/40 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <FadeIn className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
            Recent Project
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            One Source Solutions
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <FadeIn direction="left">
            <motion.div
              style={{ y: imageY }}
              className="relative bg-white rounded border border-border overflow-hidden aspect-[16/10]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-soft to-blue-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 rounded bg-brand mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">OS</span>
                  </div>
                  <p className="font-bold text-foreground text-lg">One Source Solutions</p>
                  <p className="text-sm text-muted-foreground">one-source-solutions.com</p>
                </div>
              </div>
            </motion.div>
          </FadeIn>

          {/* Content */}
          <FadeIn direction="right">
            <div>
              <a
                href="https://one-source-solutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-brand hover:underline mb-4"
              >
                one-source-solutions.com <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A full website built for One Source Solutions Cleaning Services, serving the Long
                Island area. Designed to build trust, rank locally, and convert visitors into
                cleaning service bookings.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-white border border-border rounded text-xs font-medium text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Testimonial */}
              <div className="bg-white border border-border rounded p-6">
                <p className="text-base font-medium text-foreground italic mb-4">
                  &ldquo;It&apos;s Perfect. Thank you so much!&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-soft flex items-center justify-center">
                    <span className="text-xs font-bold text-brand">BF</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Brianna F.</p>
                    <p className="text-xs text-muted-foreground">
                      One Source Solutions · Long Island, NY
                    </p>
                  </div>
                  <div className="ml-auto flex items-center gap-1 text-xs text-green-600 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Client
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
