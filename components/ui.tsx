import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { site, telHref } from "@/lib/site";

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 md:px-8", className)}>{children}</div>;
}

export function Label({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <p className={cn("text-[15px] font-medium text-ink-3", className)}>
      {children}
    </p>
  );
}

type BtnProps = { href: string; children: React.ReactNode; className?: string; variant?: "solid" | "ghost" | "light" };

export function Button({ href, children, className, variant = "solid" }: BtnProps) {
  const styles = {
    solid: "bg-ink text-paper hover:bg-accent",
    ghost: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper",
    light: "bg-paper text-ink hover:bg-accent hover:text-white",
  }[variant];
  const external = href.startsWith("tel:") || href.startsWith("mailto:");
  const cls = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-medium transition-colors duration-200",
    styles,
    className,
  );
  return external ? (
    <a href={href} className={cls}>{children}</a>
  ) : (
    <Link href={href} className={cls}>{children}</Link>
  );
}

export function QuoteButtons({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex flex-wrap gap-3">
      <Button href="/contact" variant={dark ? "light" : "solid"}>
        Get a free quote
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </Button>
      {site.phone && (
        <Button
          href={telHref}
          variant="ghost"
          className={dark ? "border-paper/30 text-paper hover:bg-paper hover:text-ink hover:border-paper" : ""}
        >
          <Phone className="size-4" /> {site.phone}
        </Button>
      )}
    </div>
  );
}

/** Hand-drawn underline around one word. */
export function Scribble({ children }: { children: React.ReactNode }) {
  return (
    <span className="scribble">
      {children}
      <svg viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M3 14 C 60 4, 120 5, 170 9 S 260 15, 297 6"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

/** Simple top section for inner pages. */
export function PageTop({
  label,
  title,
  intro,
  children,
}: {
  label: string;
  title: React.ReactNode;
  intro: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="pt-32 pb-14 md:pt-40 md:pb-20">
      <Container>
        <Label className="animate-rise">{label}</Label>
        <h1 className="display mt-5 max-w-4xl text-[clamp(2.6rem,7vw,5.5rem)] font-bold animate-rise [animation-delay:80ms]">
          {title}
        </h1>
        <div className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2 animate-rise [animation-delay:160ms]">
          {intro}
        </div>
        {children && <div className="mt-9 animate-rise [animation-delay:240ms]">{children}</div>}
      </Container>
    </section>
  );
}
