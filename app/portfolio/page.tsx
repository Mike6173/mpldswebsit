import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Our work across web design, data solutions, and social media marketing.",
};

const categories = [
  {
    title: "Web Design",
    description: "Websites, landing pages, and web applications built for performance and conversion.",
    href: "/portfolio/web-design",
  },
  {
    title: "Data Solutions",
    description: "Dashboards, automation tools, and reporting systems that surface real insight.",
    href: "/portfolio/data-solutions",
  },
  {
    title: "Social Media",
    description: "Content, campaigns, and paid social results across every major platform.",
    href: "/portfolio/social-media",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <section className="bg-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <FadeIn className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
                Portfolio
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
                Work in progress
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Case studies are being polished. In the meantime, explore by category or get in touch.
              </p>
            </FadeIn>
            <StaggerChildren className="grid md:grid-cols-3 gap-6" staggerDelay={0.12}>
              {categories.map((cat) => (
                <StaggerItem key={cat.href}>
                  <Link
                    href={cat.href}
                    className="group flex flex-col h-full bg-white border border-border rounded-2xl p-8 hover:border-brand hover:shadow-md transition-all duration-300"
                  >
                    <h2 className="text-xl font-bold text-foreground mb-3">{cat.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {cat.description}
                    </p>
                    <div className="flex items-center gap-2 mt-6 text-sm font-medium text-brand">
                      View work{" "}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
