import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WelcomeModal } from "@/components/ui/welcome-modal";
import { ScrollProgress } from "@/components/motion/scroll-progress";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://mpldigitalservices.com"),
  title: { default: "MPL Digital Services", template: "%s | MPL Digital Services" },
  description: "Web design, data solutions, and social media marketing — engineered for results.",
  openGraph: {
    siteName: "MPL Digital Services",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        <ScrollProgress />
        {children}
        <WelcomeModal />
      </body>
    </html>
  );
}
