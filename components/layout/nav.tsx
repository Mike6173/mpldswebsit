"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const services: NavItem[] = [
  { label: "Web Design & Development", href: "/services/web-design" },
  { label: "Excel & Data Solutions",   href: "/services/data-solutions" },
  { label: "Social Media Marketing",   href: "/services/social-media" },
];

const portfolio: NavItem[] = [
  {
    label: "Web Design",
    href: "/portfolio/web-design",
    children: [
      { label: "Service-Based", href: "/portfolio/web-design/service-based" },
      { label: "E-commerce",    href: "/portfolio/web-design/ecommerce" },
    ],
  },
  { label: "Data Solutions", href: "/portfolio/data-solutions" },
  { label: "Social Media",   href: "/portfolio/social-media" },
];

export function Nav() {
  const [scrolled, setScrolled]           = useState(false);
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [openDropdown, setOpenDropdown]   = useState<string | null>(null);
  const [portfolioSubOpen, setPortfolioSubOpen] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded]     = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 72);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const atTop = !scrolled;

  return (
    <>
      {/* ── Floating pill nav ─────────────────────────────── */}
      <motion.header
        className={cn(
          "fixed top-5 left-1/2 -translate-x-1/2 z-50",
          "rounded-full border transition-all duration-300 hidden md:block",
          atTop
            ? "bg-black/30 backdrop-blur-md border-white/20 shadow-none"
            : "bg-white/95 backdrop-blur-md border-border shadow-sm"
        )}
        initial={false}
        style={{ backdropFilter: "blur(14px) saturate(160%)" }}
      >
        <div className="flex items-center gap-1 px-3 py-1.5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 px-2 py-1 mr-1 shrink-0">
            <Image src="/mplds.png" alt="MPL Digital Services" width={26} height={26} className="rounded-sm" />
            <span className={cn("font-bold tracking-tight text-[14px] hidden sm:block transition-colors duration-300",
              atTop ? "text-white" : "text-foreground"
            )}>
              MPLDS
            </span>
          </Link>

          {/* Home */}
          <NavPillLink href="/" atTop={atTop}>Home</NavPillLink>

          {/* Services dropdown */}
          <div className="relative" onMouseEnter={() => setOpenDropdown("services")} onMouseLeave={() => setOpenDropdown(null)}>
            <button className={cn(
              "flex items-center gap-0.5 px-3 py-1.5 rounded-full text-[13px] font-medium transition-colors duration-200",
              atTop
                ? "text-white/80 hover:text-white hover:bg-white/10"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}>
              Services
              <motion.span animate={{ rotate: openDropdown === "services" ? 180 : 0 }} transition={{ duration: 0.18 }}>
                <ChevronDown className="w-3 h-3 ml-0.5" />
              </motion.span>
            </button>
            <AnimatePresence>
              {openDropdown === "services" && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-0 top-full mt-2 w-62 bg-white border border-border rounded shadow-lg py-1.5 z-50"
                >
                  {services.map((item, i) => (
                    <motion.div key={item.href} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                      <Link href={item.href} className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Portfolio dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("portfolio")}
            onMouseLeave={() => { setOpenDropdown(null); setPortfolioSubOpen(null); }}
          >
            <button className={cn(
              "flex items-center gap-0.5 px-3 py-1.5 rounded-full text-[13px] font-medium transition-colors duration-200",
              atTop
                ? "text-white/80 hover:text-white hover:bg-white/10"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}>
              Portfolio
              <motion.span animate={{ rotate: openDropdown === "portfolio" ? 180 : 0 }} transition={{ duration: 0.18 }}>
                <ChevronDown className="w-3 h-3 ml-0.5" />
              </motion.span>
            </button>
            <AnimatePresence>
              {openDropdown === "portfolio" && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-0 top-full mt-2 w-52 bg-white border border-border rounded shadow-lg py-1.5 z-50"
                >
                  {portfolio.map((item, i) =>
                    item.children ? (
                      <motion.div
                        key={item.href}
                        className="relative"
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04 }}
                        onMouseEnter={() => setPortfolioSubOpen(item.href)}
                        onMouseLeave={() => setPortfolioSubOpen(null)}
                      >
                        <div className="flex items-center justify-between px-4 py-2.5 text-sm text-muted-foreground cursor-default select-none">
                          {item.label}
                          <ChevronRight className="w-3 h-3 opacity-40 shrink-0" />
                        </div>
                        <AnimatePresence>
                          {portfolioSubOpen === item.href && (
                            <motion.div
                              initial={{ opacity: 0, x: -4, scale: 0.97 }}
                              animate={{ opacity: 1, x: 0, scale: 1 }}
                              exit={{ opacity: 0, x: -4, scale: 0.97 }}
                              transition={{ duration: 0.15 }}
                              className="absolute left-full top-0 w-44 bg-white border border-border rounded shadow-lg py-1.5 z-50"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ) : (
                      <motion.div key={item.href} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                        <Link href={item.href} className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                          {item.label}
                        </Link>
                      </motion.div>
                    )
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavPillLink href="/about" atTop={atTop}>About</NavPillLink>
          <NavPillLink href="/contact" atTop={atTop}>Contact</NavPillLink>

          {/* CTA */}
          <Link
            href="/contact"
            className={cn(
              "ml-1 px-4 py-1.5 text-[13px] font-semibold rounded-full transition-all duration-200",
              atTop
                ? "bg-white/15 text-white border border-white/20 hover:bg-white/25"
                : "bg-brand text-white hover:bg-brand-dark"
            )}
          >
            Get Started
          </Link>
        </div>
      </motion.header>

      {/* ── Mobile bar ──────────────────────────────────── */}
      <motion.div
        className={cn(
          "fixed top-3 left-3 right-3 z-50 flex md:hidden items-center justify-between px-4 py-2.5 rounded-2xl border transition-all duration-300",
          atTop
            ? "bg-black/30 backdrop-blur-md border-white/20"
            : "bg-white/95 backdrop-blur-md border-border shadow-sm"
        )}
        style={{ backdropFilter: "blur(14px)" }}
        initial={false}
      >
        <Link href="/" className="flex items-center gap-2">
          <Image src="/mplds.png" alt="MPL Digital Services" width={24} height={24} className="rounded-sm" />
          <span className={cn("font-bold text-sm tracking-tight transition-colors duration-300", atTop ? "text-white" : "text-foreground")}>
            MPLDS
          </span>
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn("p-1.5 rounded-lg transition-colors", atTop ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-foreground hover:bg-muted")}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <X className="w-5 h-5" />
              </motion.span>
            ) : (
              <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <Menu className="w-5 h-5" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </motion.div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="fixed inset-0 z-40 bg-white pt-16 overflow-y-auto"
          >
            <nav className="px-6 py-8 space-y-1">
              <MobileLink href="/" label="Home" />
              <MobileAccordion label="Services" items={services} open={mobileExpanded === "services"} onToggle={() => setMobileExpanded(mobileExpanded === "services" ? null : "services")} />
              <MobileAccordion label="Portfolio" items={portfolio} open={mobileExpanded === "portfolio"} onToggle={() => setMobileExpanded(mobileExpanded === "portfolio" ? null : "portfolio")} />
              <MobileLink href="/about" label="About" />
              <MobileLink href="/contact" label="Contact" />
              <div className="pt-4">
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="block w-full text-center px-6 py-3 bg-brand text-white font-semibold rounded hover:bg-brand-dark transition-colors">
                  Get Started
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavPillLink({ href, atTop, children }: { href: string; atTop: boolean; children: React.ReactNode }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link href={href} className={cn(
      "px-3 py-1.5 rounded-full text-[13px] font-medium transition-colors duration-200",
      active && !atTop && "text-brand",
      !active && atTop && "text-white/80 hover:text-white hover:bg-white/10",
      !active && !atTop && "text-muted-foreground hover:text-foreground hover:bg-muted",
      active && atTop && "text-white"
    )}>
      {children}
    </Link>
  );
}

function MobileLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  return (
    <Link href={href} className={cn("block px-4 py-3 text-lg font-medium rounded transition-colors", pathname === href ? "text-brand bg-brand-soft" : "text-foreground hover:bg-muted")}>
      {label}
    </Link>
  );
}

function MobileAccordion({
  label,
  items,
  open,
  onToggle,
}: {
  label: string;
  items: NavItem[];
  open: boolean;
  onToggle: () => void;
}) {
  const [subExpanded, setSubExpanded] = useState<string | null>(null);

  return (
    <div>
      <button onClick={onToggle} className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium rounded hover:bg-muted transition-colors">
        {label}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden ml-4"
          >
            {items.map((item) =>
              item.children ? (
                <div key={item.href}>
                  <button
                    onClick={() => setSubExpanded(subExpanded === item.href ? null : item.href)}
                    className="flex items-center justify-between w-full px-4 py-2.5 text-base text-muted-foreground hover:text-foreground rounded hover:bg-muted transition-colors"
                  >
                    {item.label}
                    <motion.span
                      animate={{ rotate: subExpanded === item.href ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="block"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {subExpanded === item.href && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.18 }}
                        className="overflow-hidden ml-4"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded hover:bg-muted transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2.5 text-base text-muted-foreground hover:text-foreground rounded hover:bg-muted transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
