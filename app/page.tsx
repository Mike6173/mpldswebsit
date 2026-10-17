import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container, Label, QuoteButtons, Scribble } from "@/components/ui";
import { CallToAction, Points, TextLink, WorkCard } from "@/components/blocks";
import { ecommerceProjects, platforms, serviceProjects, site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Web Design & Digital Services in Marlboro, NJ | MPLDS" },
  description:
    "Mike Lopez builds websites, apps and social media for small businesses in Marlboro, NJ and Monmouth County. Any platform, SEO included. Get a free quote.",
  alternates: { canonical: "/" },
};

const services = [
  {
    title: "Websites & Apps",
    text: "New site or a redo of your old one. Any platform. I set up the SEO so people can actually find you on Google.",
    href: "/services/web-design",
  },
  {
    title: "Social Media",
    text: "I can post for you, or set things up so your posts go out on their own every week.",
    href: "/services/social-media",
  },
  {
    title: "Tech & AI Consulting",
    text: "Tell me what's eating up your time. I'll find the tool or AI automation that fixes it and set it up.",
    href: "/services/tech-consulting",
  },
];

const steps = [
  { title: "You tell me the problem", text: "Call or fill out the form. Tell me what you have and what's not working." },
  { title: "I give you a price", text: "A real number, with what's included. No surprise bills later." },
  { title: "I build it", text: "You see it before it goes live and we change whatever you don't like." },
  { title: "It goes live", text: "I launch it, make sure Google can find it, and I'm still around if you need anything." },
];

export default function HomePage() {
  const [a, b] = serviceProjects;
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 md:pt-36">
        <Container className="grid items-center gap-14 pb-16 md:pb-24 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Label className="animate-rise">
              {site.owner} · {site.town}, {site.state}
            </Label>
            <h1 className="display mt-6 text-[clamp(3rem,9vw,6.5rem)] font-extrabold animate-rise [animation-delay:80ms]">
              Need a website? I&apos;ll <Scribble>build it.</Scribble>
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-ink-2 md:text-xl animate-rise [animation-delay:160ms]">
              Hey, I&apos;m Mike. I do web design, apps, social media and AI help for small businesses
              in {site.town}, NJ and around {site.county}. Tell me what you need and I&apos;ll give you a
              straight quote.
            </p>
            <div className="mt-9 animate-rise [animation-delay:240ms]">
              <QuoteButtons />
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl animate-rise [animation-delay:200ms] lg:max-w-none">
            <div className="relative z-10 w-[86%] rotate-[-2deg] overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_30px_60px_-30px_rgba(23,21,15,0.5)]">
              <Image src={a.image} alt={`${a.name} website I built`} width={1440} height={900} priority sizes="(max-width: 1024px) 90vw, 45vw" />
            </div>
            <div className="absolute -bottom-10 right-0 w-[62%] rotate-[3deg] overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_30px_60px_-30px_rgba(23,21,15,0.5)]">
              <Image src={ecommerceProjects[0].image} alt={`${ecommerceProjects[0].name} online store I built`} width={1440} height={900} sizes="(max-width: 1024px) 60vw, 30vw" />
            </div>
            <Link
              href="/portfolio"
              className="absolute -left-2 -top-6 z-20 rotate-[-6deg] rounded-full bg-accent px-4 py-2 text-[14px] font-medium text-white shadow-lg transition-transform hover:rotate-0"
            >
              Real sites I built ↗
            </Link>
          </div>
        </Container>

        {/* Platforms ticker */}
        <div className="mt-6 border-y border-line bg-paper-2/50 py-5">
          <p className="sr-only">Platforms I build on: {platforms.join(", ")}.</p>
          <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]" aria-hidden="true">
            <div className="flex shrink-0 animate-ticker items-center gap-10 pr-10">
              {[...platforms, ...platforms].map((p, i) => (
                <span key={i} className="flex items-center gap-10 whitespace-nowrap font-display text-2xl font-semibold tracking-tight text-ink-2 md:text-3xl">
                  {p}
                  <span className="size-1.5 rounded-full bg-accent" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What I do */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="display text-[clamp(2.2rem,5vw,3.75rem)] font-bold">Here&apos;s how I can help.</h2>
            </div>
            <TextLink href="/services">All services</TextLink>
          </div>

          <ul className="mt-12 border-t border-ink">
            {services.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="group grid gap-3 border-b border-line py-8 md:grid-cols-[1fr_1.2fr_auto] md:items-center md:gap-10">
                  <h3 className="display text-[clamp(1.9rem,4vw,3rem)] font-bold transition-colors group-hover:text-accent">{s.title}</h3>
                  <p className="text-[17px] leading-relaxed text-ink-2">{s.text}</p>
                  <span className="hidden size-12 place-items-center rounded-full border border-line transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-white md:grid">
                    <ArrowRight className="size-5" />
                  </span>
                </Link>
              </li>
            ))}
            <li className="grid gap-3 border-b border-line py-8 text-ink-3 md:grid-cols-[1fr_1.2fr_auto] md:items-center md:gap-10">
              <h3 className="display text-[clamp(1.9rem,4vw,3rem)] font-bold">Video Editing</h3>
              <p className="text-[17px]">Coming soon.</p>
              <span className="hidden w-12 md:block" />
            </li>
          </ul>
        </Container>
      </section>

      {/* Work */}
      <section className="border-t border-line bg-paper-2/40 py-20 md:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="display text-[clamp(2.2rem,5vw,3.75rem)] font-bold">Some sites I&apos;ve built.</h2>
            </div>
            <Link href="/portfolio" className="group inline-flex items-center gap-1.5 font-medium hover:text-accent">
              See all of them <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2">
            <WorkCard project={b} />
            <WorkCard project={serviceProjects[2]} />
            <WorkCard project={serviceProjects[4]} />
            <WorkCard project={serviceProjects[3]} />
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-28">
        <Container>
          <h2 className="display mb-12 text-[clamp(2.2rem,5vw,3.75rem)] font-bold">Pretty simple.</h2>
          <Points items={steps} />
        </Container>
      </section>

      {/* Local */}
      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid gap-10 rounded-3xl bg-accent p-8 text-white md:grid-cols-[1.2fr_1fr] md:p-14">
            <div>
              <h2 className="display text-[clamp(2.2rem,5vw,3.5rem)] font-bold">
                I live in {site.town}.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-white/90">
                If you&apos;re a business around here, we can sit down in person and figure it out.
                If you&apos;re not, that&apos;s fine too. Most of the work happens online anyway.
              </p>
            </div>
            <ul className="flex flex-wrap content-end gap-2">
              {[site.town, ...site.nearby].map((t) => (
                <li key={t} className="rounded-full border border-white/35 px-4 py-2 text-[15px]">{t}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CallToAction />
    </>
  );
}
