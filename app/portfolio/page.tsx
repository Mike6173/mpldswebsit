import type { Metadata } from "next";
import { Container, Label, PageTop } from "@/components/ui";
import { CallToAction, WorkCard, breadcrumbs } from "@/components/blocks";
import { JsonLd } from "@/components/json-ld";
import { ecommerceProjects, serviceProjects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Website Portfolio: Service & E-commerce Sites",
  description:
    "Websites built by MPL Digital Services in Marlboro, NJ. Service business sites and online stores. Click any one to see it live.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={breadcrumbs([{ name: "Website Portfolio", path: "/portfolio" }])} />
      <PageTop
        label="Website Portfolio"
        title="Sites I've built."
        intro="These are all real and live. Click any one to check it out."
      >
        <nav aria-label="Jump to" className="flex flex-wrap gap-2">
          <a href="#service-based" className="rounded-full border border-ink/25 px-5 py-2.5 text-[15px] hover:bg-ink hover:text-paper">
            Service businesses ({serviceProjects.length})
          </a>
          <a href="#ecommerce" className="rounded-full border border-ink/25 px-5 py-2.5 text-[15px] hover:bg-ink hover:text-paper">
            Online stores ({ecommerceProjects.length})
          </a>
        </nav>
      </PageTop>

      <section id="service-based" className="scroll-mt-24 border-t border-line py-16 md:py-24">
        <Container>
          <Label>Service-based</Label>
          <h2 className="display mt-4 text-[clamp(2rem,4.5vw,3.25rem)] font-bold">Service businesses</h2>
          <p className="mt-3 max-w-lg text-[17px] text-ink-2">Sites built to get calls and quote requests.</p>
          <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2">
            {serviceProjects.map((p, i) => (
              <WorkCard key={p.url} project={p} priority={i < 2} />
            ))}
          </div>
        </Container>
      </section>

      <section id="ecommerce" className="scroll-mt-24 border-t border-line bg-paper-2/40 py-16 md:py-24">
        <Container>
          <Label>E-commerce</Label>
          <h2 className="display mt-4 text-[clamp(2rem,4.5vw,3.25rem)] font-bold">Online stores</h2>
          <p className="mt-3 max-w-lg text-[17px] text-ink-2">Shops built to sell products online.</p>
          <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2">
            {ecommerceProjects.map((p) => (
              <WorkCard key={p.url} project={p} />
            ))}
          </div>
        </Container>
      </section>

      <CallToAction title="Want yours on this page?" />
    </>
  );
}
