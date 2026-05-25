import type { Metadata } from "next";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { ContactHero } from "@/components/sections/contact-hero";
import { ContactFormCircled } from "@/components/sections/contact-form-circled";
import { FadeIn } from "@/components/motion/fade-in";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with MPL Digital Services. Free consultation, no commitment. Web design, data solutions, and social media marketing.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <ContactHero />
        <section className="bg-white py-24 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <FadeIn className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">Get In Touch</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">Start your project</h2>
              <p className="text-lg text-muted-foreground max-w-lg mx-auto">
                Tell us about your business and what you&apos;re looking to build. We&apos;ll get back to you within 24 hours.
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
