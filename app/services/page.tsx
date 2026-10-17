import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, PageTop, QuoteButtons } from "@/components/ui";
import { CallToAction, breadcrumbs } from "@/components/blocks";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Services: Websites, Social Media & AI | Marlboro, NJ",
  description:
    "Website and app development, social media posting and automation, and tech and AI consulting for small businesses in Marlboro, NJ. Video editing coming soon.",
  alternates: { canonical: "/services" },
};

const list = [
  {
    title: "Website & App Development",
    text: "New websites, redesigns, online stores and apps. Any platform you want. SEO included.",
    href: "/services/web-design",
  },
  {
    title: "Social Media",
    text: "Posting, content and automation for Instagram, Facebook, TikTok and LinkedIn.",
    href: "/services/social-media",
  },
  {
    title: "Tech & AI Consulting",
    text: "Figure out the right tools, set up AI and automations, and stop doing the same tasks by hand.",
    href: "/services/tech-consulting",
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbs([{ name: "Services", path: "/services" }])} />
      <PageTop
        label="Services"
        title="What I can do for you."
        intro="Most people come to me with a problem, not a service in mind. That's fine. Tell me what's going on and I'll tell you what makes sense."
      >
        <QuoteButtons />
      </PageTop>

      <section className="pb-20 md:pb-28">
        <Container>
          <ul className="grid gap-4 md:grid-cols-2">
            {list.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="group flex h-full flex-col justify-between rounded-3xl border border-line p-8 transition-colors hover:border-ink hover:bg-paper-2/60 md:p-10"
                >
                  <div>
                    <h2 className="display text-[clamp(1.9rem,3.5vw,2.6rem)] font-bold">{s.title}</h2>
                    <p className="mt-4 max-w-md text-[17px] leading-relaxed text-ink-2">{s.text}</p>
                  </div>
                  <span className="mt-10 inline-flex items-center gap-2 font-medium group-hover:text-accent">
                    Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
            <li className="flex flex-col justify-between rounded-3xl border border-dashed border-line p-8 md:p-10">
              <div>
                <h2 className="display text-[clamp(1.9rem,3.5vw,2.6rem)] font-bold text-ink-3">Video Editing</h2>
                <p className="mt-4 max-w-md text-[17px] leading-relaxed text-ink-3">
                  Short clips, reels and promo videos for your business.
                </p>
              </div>
              <span className="mt-10 inline-flex w-fit rounded-full bg-paper-2 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-2">
                Coming soon
              </span>
            </li>
          </ul>
        </Container>
      </section>

      <CallToAction />
    </>
  );
}
