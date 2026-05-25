import type { Metadata } from "next";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/motion/fade-in";
import { ProjectCard } from "@/components/ui/project-card";
import { ecommerceProjects } from "@/lib/portfolio-projects";

export const metadata: Metadata = {
  title: "E-commerce Web Design Portfolio | MPL Digital Services",
  description:
    "Browse our e-commerce website portfolio — conversion-focused online stores built to sell products and scale revenue.",
};

export default function EcommercePortfolioPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
                Portfolio · Web Design · E-commerce
              </p>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
                E-commerce
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Conversion-focused online stores built to sell products and scale revenue — from artisan brands to lifestyle companies.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Project Grid */}
        <section className="bg-muted/30 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ecommerceProjects.map((project, i) => (
                <FadeIn key={project.url} delay={i * 0.06}>
                  <ProjectCard {...project} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
