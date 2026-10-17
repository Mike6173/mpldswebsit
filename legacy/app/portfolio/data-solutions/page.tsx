import type { Metadata } from "next";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { ContactFormCircled } from "@/components/sections/contact-form-circled";
import { FadeIn } from "@/components/motion/fade-in";

export const metadata: Metadata = {
  title: "Data Solutions Portfolio",
  description:
    "Our Excel automation, Power BI, and data solutions work. Case studies coming soon — get in touch to see examples.",
};

export default function DataSolutionsPortfolioPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        {/* Header */}
        <section className="bg-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
                Portfolio · Data Solutions
              </p>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                Data Solutions
              </h1>
            </FadeIn>
          </div>
        </section>

        {/* Coming soon */}
        <section className="bg-muted/40 py-24 text-center">
          <div className="max-w-xl mx-auto px-6">
            <FadeIn>
              <div className="w-16 h-16 rounded-2xl bg-brand-soft flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔜</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                Coming Soon
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We&apos;re polishing case studies. Want to see live work? Get in touch.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Contact form */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <FadeIn className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
                Get In Touch
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                See live work first-hand
              </h2>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                Tell us about your project and we&apos;ll share relevant examples.
              </p>
            </FadeIn>
            <ContactFormCircled />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
