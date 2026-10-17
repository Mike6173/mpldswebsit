// One place for business facts. Change them here and the whole site updates.

export const site = {
  name: "MPL Digital Services",
  short: "MPLDS",
  url: "https://mpldigitalservices.com",
  owner: "Mike Lopez",
  email: "mpldigitalservices@gmail.com",
  // Add your number like "(732) 555-0123" and every Call button turns on.
  phone: "(732) 533-8578" as string,
  town: "Marlboro",
  state: "NJ",
  zip: "07746",
  county: "Monmouth County",
  nearby: [
    "Manalapan",
    "Morganville",
    "Freehold",
    "Holmdel",
    "Colts Neck",
    "Matawan",
    "Old Bridge",
    "Englishtown",
  ],
  formspree: "https://formspree.io/f/xeevdgbr",
} as const;

export const telHref = site.phone ? `tel:+1${site.phone.replace(/\D/g, "")}` : "";

export const platforms = [
  "WordPress",
  "Shopify",
  "Squarespace",
  "Wix",
  "Webflow",
  "GoDaddy",
  "Custom code",
  "iPhone & Android apps",
];

export type NavLink = { label: string; href: string; note?: string };
export type NavItem = NavLink & { children?: NavLink[] };

export const nav: NavItem[] = [
  {
    label: "Websites & Apps",
    href: "/services/web-design",
    children: [
      { label: "Website & App Development", href: "/services/web-design", note: "Any platform, SEO included" },
      { label: "Website Portfolio", href: "/portfolio", note: "Sites I've built" },
    ],
  },
  { label: "Social Media", href: "/services/social-media" },
  { label: "Tech & AI Consulting", href: "/services/tech-consulting" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Mike", href: "/about", note: "Who you'd be working with" },
      { label: "Newsletter", href: "/newsletter", note: "Short tips, once in a while" },
    ],
  },
];

export type Project = { name: string; url: string; image: string; blurb: string };

export const serviceProjects: Project[] = [
  { name: "Aqua-Pro Restoration", url: "https://aquapro-restoration.com", image: "/work/aquapro.jpg", blurb: "Water damage restoration, Long Island & NYC" },
  { name: "One Source Solutions", url: "https://one-source-solutions.com", image: "/work/onesource.jpg", blurb: "Facility maintenance" },
  { name: "Diverse Dynamics", url: "https://diversedynamicsinc.com", image: "/work/diversedynamics.jpg", blurb: "Business consulting" },
  { name: "Upgrade Services", url: "https://upgradeserve.com", image: "/work/upgrade.jpg", blurb: "Commercial window cleaning" },
  { name: "Gradiant Services", url: "https://gradiantserve.com", image: "/work/gradiant.jpg", blurb: "Painting, commercial & residential" },
  { name: "Global BMU", url: "https://globalbmu.com", image: "/work/globalbmu.jpg", blurb: "Building maintenance equipment" },
];

export const ecommerceProjects: Project[] = [
  { name: "Roma Syrups", url: "https://romasyrups.com", image: "/work/romasyrups.jpg", blurb: "Cocktail and drink syrups" },
  { name: "Modern Sober", url: "https://www.modernsober.com", image: "/work/modernsober.jpg", blurb: "Non-alcoholic lifestyle shop" },
];
