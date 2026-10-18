"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { nav, site, telHref } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-paper transition-[border-color,box-shadow] duration-300",
        scrolled || open ? "border-b border-line" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link href="/" className="flex items-center" aria-label={`${site.name} home`}>
          <Logo className="text-[17px] md:text-[20px]" />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-[14px] transition-colors",
                    isActive(item.href) || item.children?.some((c) => isActive(c.href))
                      ? "text-ink"
                      : "text-ink-2 hover:text-ink",
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="size-3.5 opacity-50 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
                  )}
                </Link>
                {item.children && (
                  <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <ul className="w-64 rounded-2xl border border-line bg-paper p-2 shadow-[0_18px_40px_-20px_rgba(23,21,15,0.35)]">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} className="block rounded-xl px-3.5 py-2.5 hover:bg-paper-2">
                            <span className="block text-[14px] font-medium text-ink">{c.label}</span>
                            {c.note && <span className="block text-[12.5px] text-ink-3">{c.note}</span>}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {site.phone && (
            <a href={telHref} className="hidden items-center gap-2 whitespace-nowrap px-3 text-[14px] text-ink-2 hover:text-ink md:flex lg:hidden xl:flex">
              <Phone className="size-4" /> {site.phone}
            </a>
          )}
          <Link
            href="/contact"
            className="hidden whitespace-nowrap rounded-full bg-ink px-5 py-2.5 text-[14px] font-medium text-paper transition-colors hover:bg-accent sm:inline-flex"
          >
            Get a quote
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="-mr-2 grid size-11 place-items-center rounded-full lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-[68px] md:top-20 overflow-y-auto overscroll-contain border-t border-line bg-paper lg:hidden">
          <nav aria-label="Mobile" className="mx-auto max-w-6xl px-5 pb-12 pt-4">
            <ul>
              <li>
                <Link href="/" className="block border-b border-line py-4 font-display text-2xl font-semibold">
                  Home
                </Link>
              </li>
              {nav.map((item) =>
                item.children ? (
                  <li key={item.label} className="border-b border-line py-4">
                    <p className="font-display text-2xl font-semibold">{item.label}</p>
                    <ul className="mt-2 space-y-1">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} className="block py-1.5 text-[17px] text-ink-2">
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link href={item.href} className="block border-b border-line py-4 font-display text-2xl font-semibold">
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
              <li>
                <Link href="/contact" className="block border-b border-line py-4 font-display text-2xl font-semibold">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
