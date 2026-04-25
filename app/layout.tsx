import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MPL Digital Services | Digital Marketing Agency",
  description:
    "MPL Digital Services — We build digital systems that scale businesses online. Web design, social media management, Meta Ads, Google Ads, SEO, AI automation, and more.",
  keywords: "digital marketing, social media management, meta ads, google ads, SEO, web design, AI automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
