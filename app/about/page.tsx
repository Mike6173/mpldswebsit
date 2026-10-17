import type { Metadata } from "next";
import Image from "next/image";
import { Container, Label } from "@/components/ui";
import { CallToAction, TextLink, breadcrumbs } from "@/components/blocks";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Mike Lopez | Marlboro, NJ Tech & Web Help",
  description:
    "I'm Mike, a tech consultant in Marlboro, NJ. I help businesses with websites, apps, social media and AI. You tell me the problem, I help fix it.",
  alternates: { canonical: "/about" },
};

const things = [
  "Websites and apps",
  "Social media posting and automation",
  "Tech and AI consulting",
  "Digital art and graphics in Canva",
  "Video editing",
];

export default function AboutPage() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.owner,
    jobTitle: "Technology Consultant",
    worksFor: { "@id": `${site.url}/#business` },
    homeLocation: { "@type": "Place", name: `${site.town}, ${site.state}` },
    url: `${site.url}/about`,
  };

  return (
    <>
      <JsonLd data={person} />
      <JsonLd data={breadcrumbs([{ name: "About", path: "/about" }])} />

      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <Container className="grid gap-14 md:grid-cols-[1.4fr_1fr]">
          <div>
            <Label className="animate-rise">About</Label>
            <h1 className="display mt-5 text-[clamp(3rem,8vw,6rem)] font-extrabold animate-rise [animation-delay:80ms]">
              Hey, I&apos;m Mike.
            </h1>
            <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-ink-2 animate-rise [animation-delay:160ms]">
              <p>
                I&apos;ve always been into technology. These days I do a lot of tech consulting for
                businesses, mostly here in {site.town} and around {site.county}.
              </p>
              <p>
                A lot of my work comes from cold calling and networking. People tell me a problem in
                their business and I help them figure it out. Sometimes that&apos;s a new website.
                Sometimes it&apos;s getting their social media running on autopilot. Sometimes it&apos;s an
                app or an AI tool that saves them a few hours a week.
              </p>
              <p>Whatever it is, I keep it simple and I explain it in plain English.</p>
            </div>
          </div>

          <aside className="self-end animate-rise [animation-delay:240ms]">
            <div className="rounded-3xl border border-line bg-paper-2/60 p-8">
              <Image src="/mplds.png" alt="MPL Digital Services logo" width={64} height={64} className="rounded-xl" />
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">Stuff I do</p>
              <ul className="mt-4 space-y-3">
                {things.map((t) => (
                  <li key={t} className="flex items-baseline gap-3 text-[17px]">
                    <span className="size-1.5 shrink-0 translate-y-[-2px] rounded-full bg-accent" />
                    {t}
                    {t === "Video editing" && (
                      <span className="rounded-full bg-paper px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink-3">
                        soon
                      </span>
                    )}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-[15px] text-ink-2">
                Want short tips once in a while? <TextLink href="/newsletter">Join the newsletter</TextLink>.
              </p>
            </div>
          </aside>
        </Container>
      </section>

      <CallToAction title="Tell me what's going on." />
    </>
  );
}
