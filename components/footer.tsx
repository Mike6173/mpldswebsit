import Link from "next/link";
import Image from "next/image";
import { site, telHref } from "@/lib/site";
import { Container } from "@/components/ui";

const cols = [
  {
    title: "Services",
    links: [
      { label: "Website & App Development", href: "/services/web-design" },
      { label: "Social Media", href: "/services/social-media" },
      { label: "Tech & AI Consulting", href: "/services/tech-consulting" },
      { label: "All services", href: "/services" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Website Portfolio", href: "/portfolio" },
      { label: "About Mike", href: "/about" },
      { label: "Newsletter", href: "/newsletter" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-night pb-28 pt-16 text-paper sm:pb-12">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/mplds.png" alt="" width={32} height={32} className="rounded-[6px]" />
              <span className="font-display text-lg font-bold">{site.name}</span>
            </Link>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-paper/65">
              Websites, apps, social media and tech help for small businesses. Run by Mike out of{" "}
              {site.town}, {site.state}.
            </p>
            <ul className="mt-6 space-y-1.5 text-[15px]">
              {site.phone && (
                <li>
                  <a href={telHref} className="hover:text-accent">{site.phone}</a>
                </li>
              )}
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-accent">{site.email}</a>
              </li>
            </ul>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/45">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[15px] text-paper/80 hover:text-paper">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-paper/10 pt-6 text-[13px] leading-relaxed text-paper/45">
          <p>
            Based in {site.town}, {site.state} {site.zip}. Working with businesses in {site.town},{" "}
            {site.nearby.join(", ")} and the rest of {site.county}, plus remote clients anywhere.
          </p>
          <p className="mt-3">© {new Date().getFullYear()} {site.name}</p>
        </div>
      </Container>
    </footer>
  );
}
