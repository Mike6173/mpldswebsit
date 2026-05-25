import type { Metadata } from "next";
import { Target, Zap, Eye, TrendingUp } from "lucide-react";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { CtaStrip } from "@/components/sections/cta-strip";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";

export const metadata: Metadata = {
  title: "About",
  description:
    "MPL Digital Services is a full-service digital agency based in NJ, run by Mike Lopez. We build digital systems that scale businesses online.",
};

const values = [
  { icon: Target,    title: "Results",      description: "Every decision traces back to measurable outcomes for your business." },
  { icon: Zap,       title: "Speed",        description: "We move fast without cutting corners. Rapid delivery, solid execution." },
  { icon: Eye,       title: "Transparency", description: "No jargon, no black boxes. You see exactly what we're doing and why." },
  { icon: TrendingUp,title: "Quality",      description: "We hold every project to the standard we'd want for our own business." },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-navy-deep py-32 md:py-40">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60 mb-6">About MPL Digital Services</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-6 max-w-3xl">
                Built to scale businesses online.
              </h1>
              <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
                A New Jersey-based digital agency run by Mike Lopez. We specialize in three things and do them well — web design, data solutions, and social media marketing.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="bg-muted/40 py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <FadeIn direction="left">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">Our story</p>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">One mission, zero shortcuts</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>MPL Digital Services was built by Mike Lopez — driven by the belief that too many growing businesses were being held back by outdated websites, messy data, and inconsistent social media.</p>
                    <p>Based in New Jersey and serving clients nationwide, we specialize in three things: web design, data solutions, and social media marketing. Not because we can't do more — but because we believe depth beats breadth.</p>
                    <p>Every project we take on is treated like it's our own business on the line. Because when you win, we win.</p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn direction="right">
                <div className="bg-white border border-border rounded p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">From the founder</p>
                  <blockquote className="text-lg font-medium text-foreground leading-relaxed mb-6 italic">
                    &ldquo;We started MPLDS because too many businesses were getting left behind digitally. We&apos;re here to fix that — one project at a time.&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-soft flex items-center justify-center">
                      <span className="text-sm font-bold text-brand">M</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Mike Lopez</p>
                      <p className="text-xs text-muted-foreground">Co-founder · MPL Digital Services</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <FadeIn className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">What drives us</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Our values</h2>
            </FadeIn>
            <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
              {values.map((value) => (
                <StaggerItem key={value.title}>
                  <div className="p-6 bg-muted/40 border border-border rounded h-full hover:border-brand hover:bg-white transition-all duration-300 group">
                    <div className="w-10 h-10 rounded bg-brand-soft flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                      <value.icon className="w-5 h-5 text-brand" />
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        <CtaStrip />
      </main>
      <Footer />
    </>
  );
}
