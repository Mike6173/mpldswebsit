import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { ServiceHero } from "@/components/sections/service-hero";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { FadeIn } from "@/components/motion/fade-in";

export const metadata: Metadata = {
  title: "Excel & Data Solutions | MPL Digital Services",
  description:
    "We build the dashboards, automations, and Excel tools that turn your spreadsheets into a real operating system. Built for finance teams, ops managers, and small business owners.",
};

const problemStatements = [
  "Your team spends Monday mornings rebuilding the same report.",
  "Three people maintain the same spreadsheet — and they don't agree.",
  "Your dashboard breaks every time someone opens it on a different machine.",
  "You're paying for Power BI but still pulling numbers manually.",
  "The 'master file' is actually six files in three different inboxes.",
  "Your bookkeeper sends you data; you have no idea what to do with it.",
];

const subServices = [
  {
    title: "Power BI Dashboards",
    description:
      "We design and build Power BI dashboards that give you real-time visibility into your business — revenue, operations, marketing, or whatever you're tracking. Includes data modeling, custom visuals, and user access setup.",
  },
  {
    title: "VBA Macros & Automation",
    description:
      "We write VBA macros to automate repetitive Excel tasks: report generation, data formatting, email triggers, and multi-sheet consolidation. Delivered with documentation and error handling built in.",
  },
  {
    title: "Power Automate Workflows",
    description:
      "We build Power Automate flows that connect your Microsoft 365 tools — automating approvals, notifications, data intake, and cross-platform triggers without custom code.",
  },
  {
    title: "Excel Financial Models",
    description:
      "Custom financial models for budgeting, forecasting, scenario analysis, and reporting. Built to be used by your team — not just readable by the person who built them.",
  },
  {
    title: "Data Pipelines & Connections",
    description:
      "We connect your data sources — QuickBooks, Xero, NetSuite, CRMs, and more — into a single reporting environment. Export-based, API, or Power Query connector depending on what's available.",
  },
  {
    title: "Reporting Templates",
    description:
      "Structured Excel or Power BI templates that your team populates on a cadence. Clean formatting, locked structure, clear input fields, and auto-calculating outputs.",
  },
  {
    title: "Data Cleanup & Transformation",
    description:
      "We clean, normalize, and restructure messy data sets — deduplication, format standardization, field mapping, and import-ready output. One-time projects or repeatable processes.",
  },
  {
    title: "Power Query Solutions",
    description:
      "We use Power Query to build automated data refresh pipelines inside Excel and Power BI — pulling from files, databases, and web sources on a schedule without manual intervention.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Workflow Audit",
    description:
      "We start with a 30–45 minute call and a review of your current files, tools, and processes. We ask specific questions about where time is being lost and what the output should look like. Most clients are surprised by how much we can identify in one call.",
  },
  {
    num: "02",
    title: "Build Proposal",
    description:
      "We send a written proposal with a fixed price, timeline, and clear deliverable list. No hourly estimates, no surprises. If the scope changes mid-project, we tell you before we do the work.",
  },
  {
    num: "03",
    title: "Build & Review",
    description:
      "We build in a copy of your environment and share progress checkpoints before final delivery. You review the working version before we finalize, and we address feedback in one consolidated round.",
  },
  {
    num: "04",
    title: "Handoff & Training",
    description:
      "Delivery includes a written handoff document and a screen-recording walkthrough of every component. We explain what it does, how to use it, and what to do if something breaks. 30-day support window included.",
  },
];

const techStack = ["Excel", "Power BI", "Power Automate", "Power Query", "VBA", "Python", "SQL", "Office Scripts", "Microsoft 365"];

const fitGood = [
  "An ops or finance team spending hours on reports that should be automated",
  "Messy spreadsheets that need to become a real system",
  "A Power BI or Microsoft 365 license you're not fully using",
  "A one-time build you can maintain yourself post-handoff",
  "A team that needs training, not just a file drop",
];

const fitBad = [
  "A full-time data analyst hire — we work project by project",
  "A full Salesforce or enterprise ERP implementation",
  "Real-time streaming data infrastructure at scale",
  "Python ML model development from scratch",
];

const faqItems = [
  {
    q: "How is this different from hiring someone on Fiverr?",
    a: "The difference is scope and accountability. A Fiverr freelancer builds what you specify; we audit your workflow first and design what you actually need. We also document and train — you're not locked out of your own file.",
  },
  {
    q: "Do I need to own Microsoft 365 licenses?",
    a: "You need to own the relevant Microsoft 365 licenses to use Power BI, Power Automate, or Office Scripts at full capability. We'll tell you what's required during scoping. We don't mark up licenses.",
  },
  {
    q: "Will the macros break when Excel updates?",
    a: "VBA macros are stable across Excel versions. We write defensive code with error handling and test across versions before delivery. The things that do break (usually) are external data connections, not the logic itself.",
  },
  {
    q: "Do you work in our existing files or build from scratch?",
    a: "Either. We can work in a copy of your file or directly in the original depending on the situation. We always version-control before making changes.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes.",
  },
  {
    q: "How much does a project cost?",
    a: "One-time projects typically run $500–$4,000 depending on complexity. Straightforward macro automation is on the low end; multi-source Power BI dashboards with custom data models are on the high end. We quote fixed price after the workflow audit.",
  },
  {
    q: "How long does a project take?",
    a: "Most projects take 1–3 weeks. A single report automation can be done in days. A full Power BI dashboard setup with data modeling takes 2–4 weeks.",
  },
  {
    q: "Will my team be able to use and edit the output?",
    a: "Yes. We build with your team's skill level in mind. Simple models get simple controls; complex models get a locked structure with clearly labeled input fields. We include a written handoff doc and a screen-recording walkthrough.",
  },
  {
    q: "Is ongoing support available?",
    a: "30-day support window is included in every project. Beyond that, we offer optional retainer arrangements for clients who need ongoing iterations.",
  },
  {
    q: "Can you connect to our accounting software?",
    a: "Yes — we regularly pull data from QuickBooks, Xero, and NetSuite via export files, API connections, or Power Query connectors. We'll assess what's available during the workflow audit.",
  },
];

export default function DataSolutionsPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Section 1: Hero */}
        <ServiceHero
          eyebrow="EXCEL & DATA SOLUTIONS"
          heading="Stop copying, pasting, and reformatting reports every week."
          subhead="We build the dashboards, automations, and Excel tools that turn your spreadsheets into a real operating system. Built for finance teams, ops managers, and small business owners who are tired of manual work."
          primaryCta={{ label: "Book a free 30-min consult", href: "/contact" }}
          secondaryCta={{ label: "See sample work", href: "/portfolio/data-solutions" }}
          stats={[
            { number: "8+", label: "Years in finance ops" },
            { number: "100K+", label: "Hours of manual work eliminated" },
            { number: "70%", label: "Avg. time saved" },
            { number: "Excel · Power BI", label: "Python · SQL" },
          ]}
        />

        {/* Section 2: The Problem */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <FadeIn className="mb-14">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">If any of this sounds familiar, we should talk.</h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-x-20 gap-y-12 items-start">
              <div className="divide-y divide-line">
                {problemStatements.map((stmt) => (
                  <p key={stmt} className="text-xl font-light text-slate-700 py-6 leading-snug">{stmt}</p>
                ))}
              </div>
              <div className="md:pt-6">
                <blockquote className="border-l-2 border-navy pl-8">
                  <p className="text-2xl font-medium text-foreground leading-relaxed">
                    &ldquo;We rebuild this kind of work into a system that runs itself — and that your team can actually use.&rdquo;
                  </p>
                  <p className="mt-6 text-sm text-muted-foreground uppercase tracking-widest">MPL Digital Services</p>
                </blockquote>
              </div>
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
              <p className="text-lg text-muted-foreground max-w-2xl">Four phases, fixed price, documented handoff. Smaller projects skip straight to phase 3.</p>
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

        {/* Final CTA */}
        <section className="bg-navy-deep py-24 text-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Have a data problem to solve?</h2>
            <p className="text-xl text-white/70 mb-10">Tell us what you&apos;re working with. We&apos;ll respond within one business day.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-navy font-bold rounded hover:bg-cloud transition-colors duration-200">
              Book a free consult <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
