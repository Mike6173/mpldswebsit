"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { site, telHref } from "@/lib/site";

// Small floating button on phones. Tapping it pops up Call / Get a quote.
// A floating button avoids the gap Safari leaves under bars pinned to the bottom.
export function MobileBar() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 360);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  if (pathname === "/contact") return null;

  return (
    <div
      className={cn(
        "fixed right-4 z-40 flex flex-col items-end gap-3 transition-all duration-300 sm:hidden",
        show || open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))" }}
    >
      {open && (
        <div
          id="quick-contact"
          className="w-64 rounded-2xl border border-line bg-paper p-4 shadow-[0_20px_50px_-15px_rgba(18,23,34,0.45)] animate-rise"
        >
          <p className="font-display text-xl font-semibold tracking-tight">Need a hand?</p>
          <p className="mt-1 text-[14px] text-ink-2">Call or send a quick message.</p>
          <div className="mt-4 space-y-2">
            {site.phone && (
              <a
                href={telHref}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-ink/25 py-3 text-[15px] font-medium"
              >
                <Phone className="size-4" /> {site.phone}
              </a>
            )}
            <Link
              href="/contact"
              className="flex w-full items-center justify-center rounded-full bg-ink py-3 text-[15px] font-medium text-paper"
            >
              Get a free quote
            </Link>
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="quick-contact"
        aria-label={open ? "Close contact options" : "Contact options"}
        className="flex items-center gap-2 rounded-full bg-accent py-3.5 pl-4 pr-5 text-[15px] font-medium text-white shadow-[0_12px_30px_-8px_rgba(226,84,43,0.6)]"
      >
        {open ? <X className="size-5" /> : <MessageCircle className="size-5" />}
        {open ? "Close" : "Get a quote"}
      </button>
    </div>
  );
}
