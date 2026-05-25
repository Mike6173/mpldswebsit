import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { ServiceHero } from "@/components/sections/service-hero";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { FadeIn } from "@/components/motion/fade-in";

export const metadata: Metadata = {
  title: "Web Design & Development | MPL Digital Services",
  description:
    "Custom Next.js and WordPress websites engineered for performance, SEO, and conversions. Strategy, UX, copy direction, and development under one roof.",
};

const subServices = [
  {
    title: "Marketing Websites",
    description:
      "Full marketing sites for service businesses, brokerages, and operators. We handle strategy, wireframing, design, development, and launch — including copy direction and on-page SEO.",
  },
  {
    title: "Next.js Custom Builds",
    description:
      "High-performance sites built in Next.js with TypeScript and Tailwind. Best for businesses that need fast load times, custom functionality, or scalable architecture.",
  },
  {
    title: "WordPress Sites",
    description:
      "WordPress builds with a structured CMS your team can actually use. We configure clean editorial controls so your staff can update content without touching code.",
  },
  {
    title: "Landing Pages",
    description:
      "Conversion-focused single pages for campaigns, products, or services. Built fast — most single landing pages are delivered in 2–3 weeks from kickoff.",
  },
  {
    title: "Site Audits",
    description:
      "A full technical and conversion audit of your existing site: Core Web Vitals, heading structure, SEO signals, CRO friction points, and a prioritized fix list.",
  },
  {
    title: "Migrations & Redesigns",
    description:
      "We handle migrations from Wix, Squarespace, and legacy WordPress with redirect mapping, content migration, and canonical continuity. Redesigns without ranking loss.",
  },
  {
    title: "Conversion Rate Optimization",
    description:
      "We audit your existing site and implement targeted changes to improve conversion rates: layout, copy hierarchy, CTAs, forms, and trust signals.",
  },
  {
    title: "Ongoing Maintenance",
    description:
      "Monthly retainers for updates, plugin management, performance monitoring, and minor page additions. Available as an add-on to any new build or as a standalone engagement.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discovery & Scoping",
    description:
      "We start with a 30–45 minute call to understand your business, audience, and what success looks like. We review your current site if one exists, assess competitors, and define the project scope in writing. You get a fixed-price proposal before anything starts.",
  },
  {
    num: "02",
    title: "Content & Structure",
    description:
      "Before design begins, we establish the page structure and content hierarchy. We provide a content brief for each page — what information goes where and why. If copywriting is in scope, we write first drafts at this stage. Most delays in web projects come from the content phase; we front-load this work to avoid them.",
  },
  {
    num: "03",
    title: "Design",
    description:
      "We design in Figma, presenting desktop and mobile layouts for your review. We work through one round of consolidated feedback before moving to development. We don't use off-the-shelf templates — every site is designed from scratch against your brand and goals.",
  },
  {
    num: "04",
    title: "Development",
    description:
      "Once designs are approved, we build in Next.js or WordPress depending on what was scoped. Development includes full mobile responsiveness, accessibility basics, on-page SEO implementation, performance optimization, and a staging environment for your review before launch.",
  },
  {
    num: "05",
    title: "Launch & Handoff",
    description:
      "We handle DNS, deploy, and go-live. You get a walkthrough of the site, documentation on how to manage content, and a 30-day support window for bug fixes and minor adjustments. If you need ongoing maintenance beyond that, we scope a retainer.",
  },
];

const techStack = ["Next.js", "React", "TypeScript", "Tailwind CSS", "WordPress", "Vercel", "Sanity", "Figma"];

const fitGood = [
  "A professional site that works as a sales tool, not just a brochure",
  "A development partner who can handle strategy, design, and code",
  "Clear timelines, fixed pricing, and written proposals",
  "Next.js performance or WordPress editorial flexibility",
  "Local SEO and conversion optimization baked in from the start",
];

const fitBad = [
  "A $500 website — we work in a different price range",
  "A site built in an hour with a page builder and no strategy",
  "Ongoing design retainers with unlimited revision cycles",
  "A full-time in-house developer (we're a project-based studio)",
];

const faqItems = [
  {
    q: "How much does a website cost?",
    a: "Most marketing sites run between $3,500 and $12,000 depending on page count, custom functionality, and whether copywriting is in scope. Landing pages start around $1,500. We quote fixed prices after a scoping call — no hourly billing.",
  },
  {
    q: "How long does a project take?",
    a: "Most projects take 4–8 weeks from kickoff to launch. Single landing pages can move in 2–3 weeks. Timeline depends on how quickly the client side can review and approve — that's usually the variable.",
  },
  {
    q: "Should I use Next.js or WordPress?",
    a: "Depends on who's editing the site post-launch. If your team needs to add pages and update content regularly, WordPress is the right call. If performance and custom functionality matter more, we build in Next.js. We'll tell you which makes sense after scoping.",
  },
  {
    q: "Will I be able to edit the site myself?",
    a: "Yes, if we build in WordPress. We set up a structured CMS with clear editorial controls so your team can add content without touching code. For Next.js builds, we integrate Sanity or a similar headless CMS when needed.",
  },
  {
    q: "Do you handle copywriting?",
    a: "We provide content direction and structure for every page — what goes where and why. Full copywriting is available as an add-on. Most clients come with rough content and we shape it; a few hand off copywriting entirely.",
  },
  {
    q: "Is SEO included?",
    a: "On-page SEO is included in every build: proper heading structure, meta titles and descriptions, image alt text, schema markup, Core Web Vitals optimization, and sitemap generation. Off-page SEO — link building, ongoing content — is a separate engagement.",
  },
  {
    q: "Do you handle hosting and maintenance?",
    a: "We handle launch and deploy. Ongoing hosting and maintenance retainers are available — ask about this during scoping if you need it.",
  },
  {
    q: "Can you redesign my site without losing my search rankings?",
    a: "Yes. Redirect mapping, content migration, canonical URL continuity, and a pre-launch crawl are standard on redesign projects. We've handled migrations from Wix, Squarespace, and legacy WordPress.",
  },
  {
    q: "What are your payment terms?",
    a: "We split larger projects into 50% upfront, 50% at launch. For projects over $8,000 we can discuss a three-payment structure.",
  },
  {
    q: "Can I add pages after the site launches?",
    a: "Standard — we scope and quote page additions as needed post-launch. If you're on a maintenance retainer, minor additions are often included.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, we sign NDAs. Send us your standard agreement or request ours.",
  },
  {
    q: "How do I get started?",
    a: "Fill out the contact form or email us at mpldigitalservices@gmail.com. We'll schedule a 30-minute scoping call, send a written proposal, and go from there.",
  },
];

export default function WebDesignPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Section 1: Hero */}
        <ServiceHero
          eyebrow="WEB DESIGN & DEVELOPMENT"
          heading="Websites engineered to convert, not just to launch."
          subhead="We design and build marketing sites for service businesses, brokerages, and operators who need more than a template. Strategy, UX, copy direction, and Next.js or WordPress builds — under one roof."
          primaryCta={{ label: "Start a project", href: "/contact" }}
          secondaryCta={{ label: "See our work", href: "/portfolio" }}
          stats={[
            { number: "15+", label: "Sites shipped" },
            { number: "2.4s", label: "Avg. load time" },
            { number: "100%", label: "Mobile optimized" },
            { number: "Built", label: "For SEO" },
          ]}
        />

        {/* Section 2: Client Logo Bar */}
        <section className="py-12 bg-white border-b border-line">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8 text-center">
              Trusted by operators across the East Coast
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-60">
              {["Upgrade Services", "Global BMU", "Gradiant Services", "One Source Solutions", "Aqua-Pro Restoration"].map((name) => (
                <span key={name} className="text-sm font-semibold text-muted-foreground tracking-wide">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: What We Build */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <FadeIn className="mb-14">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">What we build</h2>
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

        {/* Section 5: How We Work */}
        <section className="py-24 bg-cloud">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <FadeIn className="mb-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">How a project runs</h2>
            </FadeIn>
            <FadeIn className="mb-14">
              <p className="text-lg text-muted-foreground max-w-2xl">Most engagements move through five phases. Smaller projects compress phases 1–2 into a single discovery call.</p>
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

        {/* Section 6: Tech Stack */}
        <section className="py-16 bg-white border-t border-line">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">Tools we build with</p>
              <div className="flex flex-wrap gap-3">
                {techStack.map((t) => (
                  <span key={t} className="px-4 py-2 bg-cloud border border-line text-sm font-medium text-foreground hover:border-navy hover:text-navy transition-colors duration-200">
                    {t}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Section 7: Right Fit */}
        <section className="py-24 bg-cloud">
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

        {/* Section 8: FAQ */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-16">
            <FadeIn className="mb-14">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Common questions</h2>
            </FadeIn>
            <FaqAccordion items={faqItems} />
          </div>
        </section>

        {/* Section 9: Final CTA */}
        <section className="bg-navy-deep py-24 text-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Have a project in mind?</h2>
            <p className="text-xl text-white/70 mb-10">Tell us about it. We&apos;ll respond within one business day.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-navy font-bold rounded hover:bg-cloud transition-colors duration-200">
              Start a project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
