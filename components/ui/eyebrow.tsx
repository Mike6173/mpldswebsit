import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3.5 text-[11px] font-medium uppercase tracking-[0.32em] text-fg-muted font-sans",
        className
      )}
    >
      <span className="h-px w-7 bg-current opacity-40" />
      {children}
      <span className="h-px w-7 bg-current opacity-40" />
    </span>
  );
}
