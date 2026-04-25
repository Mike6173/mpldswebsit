import NavHeader from "@/components/blocks/nav-header";
import { HeroSection } from "@/components/blocks/hero-section";
import { ServicesSection } from "@/components/blocks/services-section";
import { RecentProjectSection } from "@/components/blocks/recent-project-section";
import { SplineSection } from "@/components/blocks/spline-section";
import { ContactSection } from "@/components/blocks/contact-section";
import { Footer } from "@/components/blocks/footer";
import { BackgroundOrbs } from "@/components/ui/background-orbs";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <BackgroundOrbs />
      <div className="relative z-10">
        <NavHeader />
        <HeroSection />
        <ServicesSection />
        <RecentProjectSection />
        <SplineSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
