import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";

interface Stat { number: string; label: string; }
interface ServiceHeroProps {
  eyebrow: string;
  heading: string;
  subhead: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  stats: Stat[];
}

export function ServiceHero({ eyebrow, heading, subhead, primaryCta, secondaryCta, stats }: ServiceHeroProps) {
  return (
    <section className="bg-navy-deep pt-32 pb-0 md:pt-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60 mb-6">
            {eyebrow}
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-6 max-w-4xl">
            {heading}
          </h1>
          <p className="text-xl text-white/70 leading-relaxed max-w-2xl mb-10">
            {subhead}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center gap-2 px-7 py-4 bg-white text-navy font-semibold rounded hover:bg-cloud transition-colors duration-200 text-sm"
            >
              {primaryCta.label} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center gap-2 px-7 py-4 border border-white/20 text-white font-semibold rounded hover:bg-white/10 transition-colors duration-200 text-sm"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </FadeIn>
      </div>

      {/* Stats row */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mt-16">
        <div className="border-t border-white/10 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i}>
              <p className="text-3xl md:text-4xl font-bold text-white">{stat.number}</p>
              <p className="text-sm text-white/60 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
