import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected engagements across web design, data solutions, and social media.",
};

const projects = [
  {
    client:  "One Source Solutions",
    scope:   "Web design · Local SEO · Lead generation",
    slug:    "one-source",
    initials: "OS",
  },
  {
    client:  "Aqua-Pro Restoration",
    scope:   "Web design · Brand identity",
    slug:    "aqua-pro",
    initials: "AP",
  },
  {
    client:  "Modern Sober",
    scope:   "Social media · Content strategy",
    slug:    "modern-sober",
    initials: "MS",
  },
  {
    client:  "Global BMU",
    scope:   "Web design · SEO",
    slug:    "global-bmu",
    initials: "GB",
  },
  {
    client:  "Upgrade Services",
    scope:   "Web design · Data solutions",
    slug:    "upgrade",
    initials: "US",
  },
  {
    client:  "Gradiant Services",
    scope:   "Web design · Brand identity",
    slug:    "gradiant",
    initials: "GP",
  },
];

const filters = ["All", "Web", "Brand", "Social", "Data"];

export default function WorkPage() {
  return (
    <main className="pt-24">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 pt-16 pb-12">
        <Eyebrow className="mb-8">Work</Eyebrow>
        <h1 className="font-display font-medium text-[clamp(3rem,7vw,6rem)] leading-[0.94] tracking-[-0.03em] text-fg mb-12">
          Selected work
        </h1>

        {/* Filter — text links, not pills */}
        <div className="flex items-center gap-0 mb-16 font-sans text-[13px]">
          {filters.map((f, i) => (
            <span key={f} className="flex items-center gap-0">
              <span className={i === 0 ? "text-fg cursor-default" : "text-fg-faint hover:text-fg-muted transition-colors cursor-pointer"}>
                {f}
              </span>
              {i < filters.length - 1 && (
                <span className="mx-3 text-fg-faint opacity-40"> · </span>
              )}
            </span>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-16">
          {projects.map((p) => (
            <div key={p.slug} className="group">
              <div
                className="w-full rounded-lg overflow-hidden mb-4 bg-bg2 border border-border relative"
                style={{ aspectRatio: "4/5" }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div
                      className="w-12 h-12 rounded mx-auto mb-3 flex items-center justify-center"
                      style={{ background: "rgba(152,192,239,0.08)" }}
                    >
                      <span className="font-display font-medium text-base text-fg-muted">
                        {p.initials}
                      </span>
                    </div>
                    <p className="font-sans text-[12px] text-fg-faint tracking-[0.12em]">
                      Case study coming soon
                    </p>
                  </div>
                </div>
                {/* Hover reveal */}
                <div className="absolute inset-0 bg-bg/60 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Link
                    href="/contact"
                    className="font-sans text-[12px] font-medium text-fg-muted hover:text-fg transition-colors"
                  >
                    View case →
                  </Link>
                </div>
              </div>
              <p className="font-display font-medium text-xl tracking-[-0.02em] text-fg mb-1">
                {p.client}
              </p>
              <p className="font-sans text-[13px] text-fg-dim">{p.scope}</p>
            </div>
          ))}
        </div>
      </div>

      <Section className="pb-32">
        <h2 className="font-display font-medium text-[clamp(2rem,5vw,4rem)] leading-[0.96] tracking-[-0.03em] text-fg max-w-xl mb-10">
          Want to be on this list?
        </h2>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 px-5 py-3.5 text-[13px] font-sans font-medium bg-fg text-bg rounded hover:bg-blue transition-all duration-200"
        >
          Start a project
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span>
        </Link>
      </Section>
    </main>
  );
}
