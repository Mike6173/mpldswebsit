export type Project = {
  name: string;
  url: string;
  image: string;
  description: string;
};

function screenshot(url: string): string {
  return `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;
}

export const serviceBasedProjects: Project[] = [
  {
    name: "Aqua-Pro Restoration",
    url: "https://aquapro-restoration.com",
    image: screenshot("https://aquapro-restoration.com"),
    description: "Professional water damage restoration and remediation services.",
  },
  {
    name: "Diverse Dynamics Inc.",
    url: "https://diversedynamicsinc.com",
    image: screenshot("https://diversedynamicsinc.com"),
    description: "Multidisciplinary business consulting and professional services.",
  },
  {
    name: "One Source Solutions",
    url: "https://one-source-solutions.com",
    image: screenshot("https://one-source-solutions.com"),
    description: "Comprehensive facility maintenance and integrated property solutions.",
  },
  {
    name: "Upgrade Services",
    url: "https://upgradeserve.com",
    image: screenshot("https://upgradeserve.com"),
    description: "Commercial window cleaning services for businesses and properties.",
  },
  {
    name: "Gradiant Services",
    url: "https://gradiantserve.com",
    image: screenshot("https://gradiantserve.com"),
    description: "Commercial and residential painting and surface finishing.",
  },
  {
    name: "Global BMU",
    url: "https://globalbmu.com",
    image: screenshot("https://globalbmu.com"),
    description: "Building maintenance unit equipment sales, installation, and service.",
  },
];

export const ecommerceProjects: Project[] = [
  {
    name: "Roma Syrups",
    url: "https://romasyrups.com",
    image: screenshot("https://romasyrups.com"),
    description: "Artisan cocktail and beverage syrups crafted for home bartenders and professionals.",
  },
  {
    name: "Modern Sober",
    url: "https://www.modernsober.com",
    image: screenshot("https://www.modernsober.com"),
    description: "Non-alcoholic lifestyle brand offering curated sober-curious products.",
  },
];
