import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/home-hero";
import { ClientMarquee } from "@/components/sections/client-marquee";
import { ScrollPopSection } from "@/components/sections/scroll-pop-section";
import { CtaStrip } from "@/components/sections/cta-strip";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "MPL Digital Services — Digital Systems That Scale Your Business",
  description:
    "Web design, data solutions, and social media marketing — engineered for results. We build the digital backbone behind growing businesses.",
  openGraph: {
    title: "MPL Digital Services",
    description: "Digital systems that scale your business.",
    url: "https://mpldigitalservices.com",
  },
};

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <HomeHero />
        <ClientMarquee />
        <ScrollPopSection />
<CtaStrip />
      </main>
      <Footer />
    </>
  );
}
