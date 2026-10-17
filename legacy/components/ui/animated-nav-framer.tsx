"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Work",     href: "/work" },
  { name: "Services", href: "/services" },
  { name: "Studio",   href: "/about" },
  { name: "Journal",  href: "/journal" },
];

export function AnimatedNavFramer() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* ── Desktop nav ──────────────────────────────────── */}
      <nav
        className={cn(
          "fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center",
          "rounded-full border border-border-strong",
          "bg-bg/[0.72] backdrop-blur-md",
          "px-2 py-1.5 gap-1"
        )}
        style={{ backdropFilter: "blur(12px) saturate(150%)" }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3 py-1.5 mr-2 select-none"
        >
          <span
            className="w-[5px] h-[5px] rounded-full bg-blue"
            style={{ boxShadow: "0 0 8px #98c0ef" }}
          />
          <span className="font-display font-medium text-[14px] text-fg tracking-tight">
            MPLDS
          </span>
        </Link>

        {/* Nav items */}
        <div
          className="flex items-center"
          onMouseLeave={() => setHoveredItem(null)}
        >
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={() => setHoveredItem(item.name)}
                className={cn(
                  "relative px-3.5 py-1.5 text-[13px] font-sans font-medium transition-colors duration-200",
                  active ? "text-fg" : "text-fg-muted hover:text-fg"
                )}
              >
                {hoveredItem === item.name && (
                  <motion.span
                    layoutId="nav-hover-bg"
                    className="absolute inset-0 rounded-full"
                    style={{ background: "rgba(216,236,248,0.05)" }}
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className={cn(
            "ml-2 px-4 py-1.5 text-[13px] font-sans font-medium rounded-full",
            "bg-fg text-bg hover:bg-blue transition-colors duration-200"
          )}
        >
          Get in touch
        </Link>
      </nav>

      {/* ── Mobile nav ───────────────────────────────────── */}
      <div className="fixed top-4 left-4 right-4 z-50 flex md:hidden items-center justify-between px-4 py-2.5 rounded border border-border-strong bg-bg/[0.72] backdrop-blur-md"
        style={{ backdropFilter: "blur(12px) saturate(150%)" }}
      >
        <Link href="/" className="flex items-center gap-1.5">
          <span
            className="w-[5px] h-[5px] rounded-full bg-blue"
            style={{ boxShadow: "0 0 8px #98c0ef" }}
          />
          <span className="font-display font-medium text-[14px] text-fg tracking-tight">
            MPLDS
          </span>
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-fg-muted hover:text-fg transition-colors p-1"
          aria-label="Toggle menu"
        >
          <motion.div
            animate={mobileOpen ? "open" : "closed"}
            className="w-5 h-3.5 flex flex-col justify-between"
          >
            <motion.span
              variants={{ open: { rotate: 45, y: 6 }, closed: { rotate: 0, y: 0 } }}
              className="block h-px bg-current origin-center transition-all"
            />
            <motion.span
              variants={{ open: { opacity: 0, scaleX: 0 }, closed: { opacity: 1, scaleX: 1 } }}
              className="block h-px bg-current"
            />
            <motion.span
              variants={{ open: { rotate: -45, y: -6 }, closed: { rotate: 0, y: 0 } }}
              className="block h-px bg-current origin-center transition-all"
            />
          </motion.div>
        </button>
      </div>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-4 right-4 z-40 rounded border border-border-strong bg-bg/95 backdrop-blur-md p-4 flex flex-col gap-1 md:hidden"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block px-3 py-2.5 text-[14px] font-sans font-medium rounded transition-colors",
                    pathname === item.href ? "text-fg bg-fg/5" : "text-fg-muted hover:text-fg hover:bg-fg/5"
                  )}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <div className="mt-2 pt-2 border-t border-border">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-4 py-2.5 text-[13px] font-sans font-medium bg-fg text-bg rounded hover:bg-blue transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
