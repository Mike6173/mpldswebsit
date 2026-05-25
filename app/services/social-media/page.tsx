import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { ServiceHero } from "@/components/sections/service-hero";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { FadeIn } from "@/components/motion/fade-in";

export const metadata: Metadata = {
  title: "Social Media Marketing | MPL Digital Services",
  description:
    "Content production, paid social, and platform management for service businesses that want to look like the obvious choice in their market.",
};

const subServices = [
  {
    title: "Content Strategy",
    description:
      "We build a monthly content strategy grounded in your business goals, competitive landscape, and platform algorithms. No generic calendars — a plan built around what actually moves your audience.",
  },
  {
    title: "Creative Production",
    description:
      "We produce branded graphics, short-form video, and copy in-house. Every piece is sized and formatted for its platform. We develop your brand voice if you don't have one defined.",
  },
  {
    title: "Paid Social",
    description:
      "We run paid social campaigns on Meta, LinkedIn, TikTok, and other platforms. Campaign strategy, creative production, audience targeting, A/B testing, and optimization — all included in the engagement.",
  },
  {
    title: "Account Management",
    description:
      "We manage your accounts end-to-end: scheduling, publishing, comment monitoring, and DM response protocols. You stay informed without having to log in daily.",
  },
  {
    title: "LinkedIn for Service Businesses",
    description:
      "LinkedIn management specifically for B2B service providers, consultants, and operators. Content strategy, profile optimization, and outreach support to build authority and generate inbound.",
  },
  {
    title: "Reporting & Strategy Reviews",
    description:
      "Monthly reporting with the metrics that matter — reach, engagement rate, lead attribution, and ad spend efficiency. Quarterly strategy reviews to adjust direction based on what the data shows.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Audit & Onboarding",
    description:
      "We audit your existing accounts, review your competitors, and run a 60-minute onboarding call. We establish your brand voice, content pillars, and the platforms we'll prioritize. You'll approve the strategy before any content goes out.",
  },
  {
    num: "02",
    title: "Content Planning",
    description:
      "We build a monthly content calendar with post topics, formats, and copy outlines. You review and approve before production begins. We incorporate your feedback before month two — the process gets faster as we learn your brand.",
  },
  {
    num: "03",
    title: "Production",
    description:
      "We produce the approved content: graphics, video edits, captions, and hashtag sets. All assets are delivered for your review in a shared folder before scheduling. You have a clear window to request changes.",
  },
  {
    num: "04",
    title: "Publishing & Management",
    description:
      "We schedule and publish on your behalf. For paid social, we launch campaigns, monitor performance daily, and make adjustments within the first two weeks. We flag anything that needs your input.",
  },
  {
    num: "05",
    title: "Reporting",
    description:
      "Monthly performance report delivered on the first week of each new month. We cover what worked, what didn't, and what we're changing. No vanity metrics — we report on the numbers that connect to your business.",
  },
];

const fitGood = [
  "A service business doing $500K–$10M in revenue that needs consistent market presence",
  "An owner who knows they should be posting but doesn't have time or a team to do it",
  "A paid social budget of at least $1,500/month in ad spend",
  "Tired of relying on freelancers who disappear or deliver inconsistently",
];

const fitBad = [
  "DTC ecommerce brands needing UGC at scale — we work with service businesses",
  "30 Reels per week with no strategy or brand foundation",
  "Companies under $300K in revenue — the engagement math doesn't work at that budget",
  "Clients who need guaranteed follower counts as the primary KPI",
];

const faqItems = [
  {
    q: "How many posts per month do you produce?",
    a: "Typically 12–20 posts per month across your active platforms, depending on the package. We prioritize quality and consistency over volume — a 16-post month with strong creative outperforms a 30-post month of filler.",
  },
  {
    q: "Do you produce photo and video content?",
    a: "We produce branded graphics and short-form video in-house. Original photo/video shoots require your participation or a production budget — we'll scope this during onboarding. For most clients, a mix of produced graphics and repurposed footage covers the need.",
  },
  {
    q: "What is the minimum budget?",
    a: "Our management fee starts at $1,200/month. Paid social requires a separate media budget — we recommend a minimum of $1,500/month in ad spend to get meaningful data.",
  },
  {
    q: "Do you guarantee follower growth?",
    a: "No. Anyone who guarantees follower numbers is either buying followers or setting you up for disappointment. We optimize for reach, engagement rate, and leads — metrics that connect to revenue.",
  },
  {
    q: "Do you work from our existing accounts?",
    a: "We work from your existing accounts — we don't need to create new ones. We'll request admin access during onboarding.",
  },
  {
    q: "Do you write the captions?",
    a: "Yes, captions are included. We write in your brand voice — if you don't have a defined voice, we develop one during strategy onboarding.",
  },
  {
    q: "How long before paid social shows results?",
    a: "Paid social data becomes meaningful after 4–6 weeks of consistent spend. The first 2 weeks are learning phase for Meta's algorithm. We set expectations clearly during onboarding — don't expect ROAS optimization in week one.",
  },
  {
    q: "Do you produce TikTok and short-form video?",
    a: "Yes. Short-form video (Reels, TikTok, YouTube Shorts) is part of our standard production offering. We create 9:16 formats designed for each platform's algorithm.",
  },
  {
    q: "Who owns the content if we cancel?",
    a: "All content produced during the engagement is yours. We'll package and hand over all files and account access on the final day of service.",
  },
  {
    q: "How do I get started?",
    a: "Fill out the contact form and mention your current platforms and approximate monthly revenue. We'll schedule a 30-minute audit call and send a written proposal within 48 hours.",
  },
];

export default function SocialMediaPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Section 1: Hero */}
        <ServiceHero
          eyebrow="SOCIAL MEDIA MARKETING"
          heading="Content that earns attention. Ads that earn returns."
          subhead="We run social media for service businesses that want to look like the obvious choice in their market — content production, paid social, and platform management as one operation."
          primaryCta={{ label: "Get a content audit", href: "/contact" }}
          secondaryCta={{ label: "See recent work", href: "/portfolio/social-media" }}
          stats={[
            { number: "1,500+", label: "Posts produced" },
            { number: "Meta · LinkedIn", label: "TikTok · more" },
            { number: "3", label: "Platforms avg per client" },
            { number: "8+", label: "Active accounts" },
          ]}
        />

        {/* Section 2: Creative Grid */}
        <section className="py-16 bg-white border-b border-line">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-square bg-cloud border border-line flex items-center justify-center">
                  <span className="text-xs text-muted-foreground/40 font-mono">1080&times;1080</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground text-center tracking-wide">Recent posts and ad creative across client accounts.</p>
          </div>
        </section>

        {/* Section 3: What We Run */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <FadeIn className="mb-14">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">What we run</h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
              {subServices.map((s) => (
                <div key={s.title}>
                  <h3 className="text-lg font-bold text-ink mb-3">{s.title}</h3>
                  <p className="text-base text-slate-600 leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Platforms */}
        <section className="py-16 bg-white border-t border-line">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">Platforms we run</p>
              <div className="flex flex-wrap gap-3">
                {["Meta (Facebook & Instagram)", "LinkedIn", "TikTok", "YouTube", "X / Twitter", "Pinterest", "Threads", "Google Business Profile"].map((p) => (
                  <span key={p} className="px-4 py-2 bg-cloud border border-line text-sm font-medium text-foreground hover:border-navy hover:text-navy transition-colors duration-200">
                    {p}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Section 5: How We Work */}
        <section className="py-24 bg-cloud">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <FadeIn className="mb-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">How we work</h2>
            </FadeIn>
            <FadeIn className="mb-14">
              <p className="text-lg text-muted-foreground max-w-2xl">Five phases per engagement. The process becomes faster as we build familiarity with your brand and audience.</p>
            </FadeIn>
            <div className="space-y-16">
              {processSteps.map((step) => (
                <div key={step.num} className="grid md:grid-cols-[120px_1fr] gap-6 md:gap-12 items-start border-t border-line pt-10">
                  <span className="text-6xl font-light text-navy/25 leading-none">{step.num}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                    <p className="text-base text-slate-600 leading-relaxed max-w-2xl">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Right Fit */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <FadeIn className="mb-14">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Is this the right fit?</h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-0">
              <div className="pr-8 md:pr-16 pb-8 md:pb-0 md:border-r border-navy/20">
                <h3 className="text-lg font-bold text-foreground mb-6">We&apos;re a strong fit if you need:</h3>
                <ul className="space-y-4">
                  {fitGood.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base text-slate-700">
                      <span className="text-navy font-bold mt-0.5 shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pl-0 md:pl-16 pt-8 md:pt-0">
                <h3 className="text-lg font-bold text-foreground mb-6">We&apos;re probably not the fit if you need:</h3>
                <ul className="space-y-4">
                  {fitBad.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base text-slate-700">
                      <span className="text-muted-foreground mt-0.5 shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: FAQ */}
        <section className="py-24 bg-cloud">
          <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-16">
            <FadeIn className="mb-14">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Common questions</h2>
            </FadeIn>
            <FaqAccordion items={faqItems} />
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-navy-deep py-24 text-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to look like the obvious choice?</h2>
            <p className="text-xl text-white/70 mb-10">Tell us about your business. We&apos;ll respond within one business day.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-navy font-bold rounded hover:bg-cloud transition-colors duration-200">
              Get a content audit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
