"use client";
import { BackgroundBoxes } from "@/components/ui/background-boxes";
import { FadeIn } from "@/components/motion/fade-in";

export function ContactHero() {
  return (
    <section className="relative bg-muted/30 py-32 md:py-40 overflow-hidden">
      <BackgroundBoxes />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-6">
            Free consultation
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
            Let&apos;s build something.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Tell us about your business. We&apos;ll put together a custom strategy — no charge, no commitment.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
