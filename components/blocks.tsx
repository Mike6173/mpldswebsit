import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, QuoteButtons } from "@/components/ui";
import { site, type Project } from "@/lib/site";

/** Dark closing section that sits above the footer on every page. */
export function CallToAction({ title = "Got something in mind?", text }: { title?: string; text?: string }) {
  return (
    <section className="bg-night text-paper">
      <Container className="border-b border-paper/10 py-20 md:py-28">
        <div className="grid items-end gap-10 md:grid-cols-[1.3fr_1fr]">
          <h2 className="display text-[clamp(2.4rem,6vw,4.75rem)] font-bold">{title}</h2>
          <div>
            <p className="mb-7 text-lg leading-relaxed text-paper/70">
              {text ??
                `${site.phone ? "Call me or fill out the form" : "Fill out the form"} and tell me what you need. I'll give you a straight answer and a price. No pressure.`}
            </p>
            <QuoteButtons dark />
          </div>
        </div>
      </Container>
    </section>
  );
}

export function WorkCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer" className="group block">
      <div className="overflow-hidden rounded-2xl border border-line bg-paper-2 shadow-[0_24px_50px_-30px_rgba(23,21,15,0.45)]">
        <div className="flex items-center gap-1.5 border-b border-line bg-paper px-3.5 py-2.5" aria-hidden="true">
          <span className="size-2 rounded-full bg-line" />
          <span className="size-2 rounded-full bg-line" />
          <span className="size-2 rounded-full bg-line" />
          <span className="ml-2 truncate font-mono text-[10.5px] text-ink-3">
            {project.url.replace(/^https?:\/\/(www\.)?/, "")}
          </span>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.name} website homepage`}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-xl font-semibold tracking-tight">{project.name}</p>
          <p className="mt-0.5 text-[14px] text-ink-3">{project.blurb}</p>
        </div>
        <ArrowUpRight className="mt-1 size-5 shrink-0 text-ink-3 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
      </div>
    </a>
  );
}

/** Numbered list of short points. Used instead of icon-card grids. */
export function Points({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ol className="border-t border-line">
      {items.map((it, i) => (
        <li key={it.title} className="grid gap-2 border-b border-line py-7 md:grid-cols-[80px_1fr_1.4fr] md:gap-8">
          <span className="font-mono text-[13px] text-accent">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="font-display text-2xl font-semibold tracking-tight">{it.title}</h3>
          <p className="text-[16px] leading-relaxed text-ink-2">{it.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="border-t border-line">
      {items.map((f) => (
        <details key={f.q} className="group border-b border-line py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[17px] font-medium [&::-webkit-details-marker]:hidden">
            {f.q}
            <span className="grid size-7 shrink-0 place-items-center rounded-full border border-line text-ink-3 transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-2">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbs(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${site.url}${t.path === "/" ? "" : t.path}`,
    })),
  };
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="font-medium underline decoration-accent decoration-2 underline-offset-4 hover:text-accent">
      {children}
    </Link>
  );
}
