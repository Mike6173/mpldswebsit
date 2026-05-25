"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem { q: string; a: string; }

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y divide-border">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex items-start justify-between w-full py-6 text-left gap-6 group"
            aria-expanded={open === i}
          >
            <span className="text-base md:text-lg font-semibold text-foreground group-hover:text-navy transition-colors duration-150">
              {item.q}
            </span>
            <span className="shrink-0 mt-0.5 text-muted-foreground group-hover:text-navy transition-colors duration-150">
              {open === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
            </span>
          </button>
          {open === i && (
            <div className="pb-6 pr-8">
              <p className="text-base text-muted-foreground leading-relaxed">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
