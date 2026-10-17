import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MobileBar } from "@/components/mobile-bar";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/lib/site";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
});
const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Web Design & Digital Services in Marlboro, NJ | MPLDS",
    template: "%s | MPLDS",
  },
  description:
    "Websites, apps, social media and AI help for small businesses in Marlboro, NJ and Monmouth County. Any platform. Call or fill out the form for a free quote.",
  applicationName: site.name,
  authors: [{ name: site.owner }],
  openGraph: {
    siteName: site.name,
    type: "website",
    locale: "en_US",
    url: site.url,
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#f4f1ea",
};

const business = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#business`,
  name: site.name,
  alternateName: site.short,
  url: site.url,
  logo: `${site.url}/mplds.png`,
  image: `${site.url}/opengraph-image`,
  email: site.email,
  ...(site.phone ? { telephone: site.phone } : {}),
  description:
    "Website and app development, social media management and automation, and technology and AI consulting for small businesses.",
  address: {
    "@type": "PostalAddress",
    addressLocality: site.town,
    addressRegion: site.state,
    postalCode: site.zip,
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Marlboro, NJ" },
    ...site.nearby.map((t) => ({ "@type": "City", name: `${t}, NJ` })),
    { "@type": "AdministrativeArea", name: "Monmouth County, NJ" },
  ],
  founder: { "@type": "Person", name: site.owner, url: `${site.url}/about` },
  knowsAbout: [
    "Web design",
    "App development",
    "Search engine optimization",
    "Social media management",
    "Social media automation",
    "AI automation",
    "Technology consulting",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website & App Development", url: `${site.url}/services/web-design` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Management & Automation", url: `${site.url}/services/social-media` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Technology & AI Consulting", url: `${site.url}/services/tech-consulting` } },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${geist.variable} ${geistMono.variable}`}>
      <body className="min-h-dvh flex flex-col">
        <JsonLd data={business} />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:bg-ink focus:text-paper focus:px-4 focus:py-2 focus:rounded">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
