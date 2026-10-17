"use client";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  name: string;
  url: string;
  image: string;
  description: string;
}

export function ProjectCard({ name, url, image, description }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${name} website`}
      className={cn(
        "group block rounded-md border border-border bg-card overflow-hidden",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:shadow-lg hover:border-brand/30",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
      )}
    >
      {/* Image */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-brand-soft">
        {/* Fallback */}
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center",
            imgError ? "opacity-100" : "opacity-0"
          )}
          aria-hidden="true"
        >
          <span className="text-5xl font-bold text-brand/20 select-none">
            {name.charAt(0)}
          </span>
        </div>

        {/* Screenshot */}
        {!imgError && (
          <Image
            src={image}
            alt={`Screenshot of ${name}`}
            fill
            unoptimized
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            onError={() => setImgError(true)}
          />
        )}

        {/* Hover overlay */}
        <div
          className="absolute inset-0 bg-brand/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10"
          aria-hidden="true"
        >
          <span className="text-white font-semibold text-base tracking-tight px-4 text-center">
            Visit Site →
          </span>
        </div>
      </div>

      {/* Text */}
      <div className="px-4 py-3 border-t border-border">
        <p className="text-sm font-semibold text-foreground leading-tight">{name}</p>
        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{description}</p>
      </div>
    </a>
  );
}
