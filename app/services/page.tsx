import type { Metadata } from "next";
import Link from "next/link";
import { Code2, Database, Megaphone, ArrowRight } from "lucide-react";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { CtaStrip } from "@/components/sections/cta-strip";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web design, Excel & data solutions, and social media marketing — full-stack digital services for growing businesses.",
};

const services = [
  {
    icon: Code2,
    title: "Web Design & Development",
    description:
      "We design and build high-performance websites using Next.js and WordPress. From stunning landing pages to full web applications — optimized for SEO, conversions, and brand credibility.",
    href: "/services/web-design",
    color: "text-navy",
    bg: "bg-cloud",
  },
  {
    icon: Database,
    title: "Excel & Data Solutions",
    description:
      "We automate Excel workflows, build Power BI dashboards, write Python scripts, and design SQL pipelines. If your business runs on data and spreadsheets, we make that faster and smarter.",
    href: "/services/data-solutions",
    color: "text-navy",
    bg: "bg-cloud",
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description:
      "From content calendars to ad creative production, we handle the full social media lifecycle. Organic growth, paid social, and consistent brand voice across every platform.",
    href: "/services/social-media",
    color: "text-navy",
    bg: "bg-cloud",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <section className="bg-white py-24 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">Services</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 max-w-2xl">
                What we build
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Three focused services. Each one engineered to drive real results for your business.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="bg-muted/40 py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <StaggerChildren className="grid md:grid-cols-3 gap-6" staggerDelay={0.12}>
              {services.map((service) => (
                <StaggerItem key={service.href}>
                  <Link
                    href={service.href}
                    className="group flex flex-col h-full bg-white border border-border rounded p-8 hover:border-brand transition-all duration-300"
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded ${service.bg} mb-6`}>
                      <service.icon className={`w-5 h-5 ${service.color}`} />
                    </div>
                    <h2 className="text-xl font-bold text-foreground mb-3 tracking-tight">{service.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{service.description}</p>
                    <div className="flex items-center gap-2 mt-6 text-sm font-medium text-brand">
                      Learn more
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        <CtaStrip />
      </main>
      <Footer />
    </>
  );
}
