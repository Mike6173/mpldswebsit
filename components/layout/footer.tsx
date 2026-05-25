import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Col 1: Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Image
                src="/mplds.png"
                alt="MPL Digital Services"
                width={32}
                height={32}
                className="rounded-sm"
              />
              <span className="font-bold text-foreground text-base">MPLDS</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Digital systems that scale your business. Web design, data solutions, and social media
              marketing.
            </p>
            <p className="text-xs text-muted-foreground">
              © {year} MPL Digital Services. All rights reserved.
            </p>
          </div>

          {/* Col 2: Sitemap */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-brand transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-brand shrink-0" />
                <a
                  href="mailto:mpldigitalservices@gmail.com"
                  className="hover:text-brand transition-colors"
                >
                  mpldigitalservices@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-brand shrink-0" />
                <span>Based in NJ — serving nationwide</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
