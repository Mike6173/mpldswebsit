import { Container, Label, PageTop, QuoteButtons } from "@/components/ui";
import { CallToAction, Faq, Points, breadcrumbs, faqSchema } from "@/components/blocks";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/lib/site";

type Props = {
  path: string;
  crumb: string;
  label: string;
  title: React.ReactNode;
  intro: React.ReactNode;
  serviceName: string;
  serviceDescription: string;
  pointsTitle: string;
  points: { title: string; text: string }[];
  middle?: React.ReactNode;
  faq: { q: string; a: string }[];
  ctaTitle?: string;
};

/** Shared layout for the three service pages so they stay short and consistent. */
export function ServicePage(p: Props) {
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: p.serviceName,
    description: p.serviceDescription,
    url: `${site.url}${p.path}`,
    provider: { "@id": `${site.url}/#business` },
    areaServed: [`${site.town}, ${site.state}`, `${site.county}, ${site.state}`],
  };

  return (
    <>
      <JsonLd data={service} />
      <JsonLd data={breadcrumbs([{ name: "Services", path: "/services" }, { name: p.crumb, path: p.path }])} />
      <JsonLd data={faqSchema(p.faq)} />

      <PageTop label={p.label} title={p.title} intro={p.intro}>
        <QuoteButtons />
      </PageTop>

      <section className="pb-20 md:pb-24">
        <Container>
          <h2 className="display mb-10 text-[clamp(2rem,4.5vw,3.25rem)] font-bold">{p.pointsTitle}</h2>
          <Points items={p.points} />
        </Container>
      </section>

      {p.middle}

      <section className="py-20 md:py-24">
        <Container className="grid gap-10 md:grid-cols-[1fr_1.6fr]">
          <div>
            <Label>Questions</Label>
            <h2 className="display mt-4 text-[clamp(2rem,4vw,3rem)] font-bold">Quick answers.</h2>
          </div>
          <Faq items={p.faq} />
        </Container>
      </section>

      <CallToAction title={p.ctaTitle} />
    </>
  );
}
