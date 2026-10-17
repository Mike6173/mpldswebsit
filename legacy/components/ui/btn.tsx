"use client";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost";
  asChild?: boolean;
}

export const Btn = forwardRef<HTMLButtonElement, BtnProps>(
  ({ variant = "default", className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group inline-flex items-center gap-2 font-sans text-[13px] font-medium tracking-[0.02em] transition-all duration-200 cursor-pointer",
          variant === "default" &&
            "bg-fg text-bg hover:bg-blue rounded px-5 py-3.5",
          variant === "ghost" &&
            "bg-transparent text-fg border border-border-strong hover:border-fg-muted hover:bg-blue/5 rounded px-5 py-3.5",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Btn.displayName = "Btn";

export function BtnArrow({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span>
    </>
  );
}
