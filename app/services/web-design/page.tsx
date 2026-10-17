import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ServicePage } from "@/components/service-page";
import { Container } from "@/components/ui";
import { platforms } from "@/lib/site";

export const metadata: Metadata = {
  title: "Website & App Development in Marlboro, NJ",
  description:
    "Web design and app development in Marlboro, NJ. WordPress, Shopify, Squarespace, Wix, Webflow or custom. SEO set up from day one. Call or fill out the form.",
  alternates: { canonical: "/services/web-design" },
};

export default function WebDesignPage() {
  return (
    <ServicePage
      path="/services/web-design"
      crumb="Website & App Development"
      label="Website & App Development · Marlboro, NJ"
      title="Websites and apps, on whatever platform you want."
      intro="New site, a redo of an old one, an online store, or an app. I build it, set up the SEO so Google can find you, and get it live."
      serviceName="Website & App Development"
      serviceDescription="Website design, redesigns, online stores and mobile apps for small businesses, with SEO set up from the start."
      pointsTitle="What you get."
      points={[
        { title: "A site that looks good on phones", text: "Most of your visitors are on their phone. It's built for that first." },
        { title: "SEO done right", text: "Page titles, Google Search Console, a sitemap, fast load times and local info so you show up when people search nearby." },
        { title: "Easy ways to reach you", text: "Call buttons and a quote form on every page, sent straight to your email." },
        { title: "Help after launch", text: "Need a change later? Just text or email me." },
      ]}
      middle={
        <section className="border-y border-line bg-paper-2/40 py-20 md:py-24">
          <Container className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
            <div>
              <h2 className="display text-[clamp(2rem,4.5vw,3.25rem)] font-bold">I can build on pretty much anything.</h2>
              <p className="mt-5 max-w-sm text-[17px] leading-relaxed text-ink-2">
                Already have a site on one of these? I can fix it up instead of starting over.
              </p>
              <Link href="/portfolio" className="mt-8 inline-flex items-center gap-1.5 font-medium hover:text-accent">
                See sites I&apos;ve built <ArrowUpRight className="size-4" />
              </Link>
            </div>
            <ul className="flex flex-wrap content-start gap-3">
              {platforms.map((p) => (
                <li key={p} className="rounded-full border border-ink/20 bg-paper px-5 py-3 font-display text-xl font-semibold tracking-tight">
                  {p}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      }
      faq={[
        { q: "How much does a website cost?", a: "It depends on how many pages you need and what it has to do. Tell me what you're after and I'll give you a real price up front." },
        { q: "How long does it take?", a: "A simple business site is usually a couple of weeks. Bigger sites, stores and apps take longer. I'll give you a timeline with the quote." },
        { q: "Can you fix my current website instead?", a: "Yes. If what you have is on WordPress, Shopify, Wix, Squarespace or something similar, I can update it rather than rebuild it." },
        { q: "Will I show up on Google?", a: "I set up everything Google needs to find and understand your site. Ranking takes time, but it starts with doing the basics right, and most sites skip them." },
      ]}
      ctaTitle="Want a new site?"
    />
  );
}
