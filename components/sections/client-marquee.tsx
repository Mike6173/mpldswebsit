const clients = [
  "Aqua-Pro Restoration",
  "Global BMU",
  "Upgrade Services",
  "One Source Solutions",
  "Gradiant Services",
  "Modern Sober",
];

// Duplicate for seamless loop
const marqueeList = [...clients, ...clients];

export function ClientMarquee() {
  return (
    <div className="border-y border-border bg-white overflow-hidden py-8 select-none">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "scroll-marquee 36s linear infinite" }}
      >
        {marqueeList.map((client, i) => (
          <span key={i} className="inline-flex items-center shrink-0">
            <span className="text-2xl font-medium text-muted-foreground px-8 md:px-10 tracking-tight">
              {client}
            </span>
            <span className="text-border text-lg" style={{ color: "hsl(var(--muted-foreground))", opacity: 0.3 }}>
              ✦
            </span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes scroll-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
