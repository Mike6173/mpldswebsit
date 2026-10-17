"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { site, telHref } from "@/lib/site";

// Sticky bar on phones so Call / Quote is always one tap away.
export function MobileBar() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 p-3 backdrop-blur-md sm:hidden">
      <div className="flex gap-2">
        {site.phone && (
          <a
            href={telHref}
            className="flex flex-1 items-center justify-center gap-2 rounded-full border border-ink/25 py-3 text-[15px] font-medium"
          >
            <Phone className="size-4" /> Call
          </a>
        )}
        <Link
          href="/contact"
          className="flex flex-1 items-center justify-center rounded-full bg-ink py-3 text-[15px] font-medium text-paper"
        >
          Get a free quote
        </Link>
      </div>
    </div>
  );
}
