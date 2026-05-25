"use client";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";

export function CtaStrip() {
  return (
    <section className="bg-brand py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-4">
            Let&apos;s Work Together
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Ready to scale?
          </h2>
          <p className="text-lg text-white/75 mb-10">Free consultation, no commitment.</p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-brand font-bold rounded hover:bg-cloud transition-colors duration-200 text-base"
          >
            Start a Project
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
