import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old URLs from the previous site go to the closest new page (308, permanent).
  async redirects() {
    return [
      { source: "/work", destination: "/portfolio", permanent: true },
      { source: "/portfolio/web-design", destination: "/portfolio", permanent: true },
      { source: "/portfolio/web-design/service-based", destination: "/portfolio#service-based", permanent: true },
      { source: "/portfolio/web-design/ecommerce", destination: "/portfolio#ecommerce", permanent: true },
      { source: "/portfolio/social-media", destination: "/services/social-media", permanent: true },
      { source: "/portfolio/data-solutions", destination: "/services/tech-consulting", permanent: true },
      { source: "/services/data-solutions", destination: "/services/tech-consulting", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/quote", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
