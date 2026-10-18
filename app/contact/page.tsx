import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container, Label } from "@/components/ui";
import { QuoteForm } from "@/components/quote-form";
import { breadcrumbs } from "@/components/blocks";
import { JsonLd } from "@/components/json-ld";
import { site, telHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Free Quote | Web Design in Marlboro, NJ",
  description:
    "Get a free quote for a website, app, social media or AI help. Based in Marlboro, NJ. Call or fill out the form and Mike will get back to you, usually within a day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbs([{ name: "Contact", path: "/contact" }])} />
      <section className="pt-24 pb-20 md:pt-36 md:pb-28">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <Label className="animate-rise">Contact</Label>
            <h1 className="display mt-5 text-[clamp(2.8rem,7vw,5rem)] font-extrabold animate-rise [animation-delay:80ms]">
              Get a free quote.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-2 animate-rise [animation-delay:160ms]">
              {site.phone ? "Call me, or fill out" : "Fill out"}{" "}the form and tell me what you need. I&apos;ll get
              back to you with a price, usually within a day.
            </p>
            <ul className="mt-10 space-y-4 text-[17px] animate-rise [animation-delay:240ms]">
              {site.phone && (
                <li>
                  <a href={telHref} className="inline-flex items-center gap-3 hover:text-accent">
                    <Phone className="size-5 text-accent" /> {site.phone}
                  </a>
                </li>
              )}
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 break-all hover:text-accent">
                  <Mail className="size-5 shrink-0 text-accent" /> {site.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-3 text-ink-2">
                <MapPin className="size-5 text-accent" /> {site.town}, {site.state}
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-line bg-paper p-6 shadow-[0_30px_60px_-40px_rgba(23,21,15,0.4)] md:p-10 animate-rise [animation-delay:200ms]">
            <QuoteForm />
          </div>
        </Container>
      </section>
    </>
  );
}
