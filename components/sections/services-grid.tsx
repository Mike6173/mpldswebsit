"use client";
import Link from "next/link";
import { Code2, Database, Megaphone, ArrowRight } from "lucide-react";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { FadeIn } from "@/components/motion/fade-in";

const services = [
  {
    icon: Code2,
    title: "Web Design & Development",
    description:
      "Custom Next.js and WordPress builds engineered for performance, conversions, and brand trust.",
    href: "/services/web-design",
    color: "text-navy",
    bg: "bg-cloud",
  },
  {
    icon: Database,
    title: "Excel & Data Solutions",
    description:
      "Automation, dashboards, and data pipelines that eliminate busywork and surface real insight.",
    href: "/services/data-solutions",
    color: "text-navy",
    bg: "bg-cloud",
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description:
      "Content strategy, creative production, and paid social — consistently delivering reach and engagement.",
    href: "/services/social-media",
    color: "text-navy",
    bg: "bg-cloud",
  },
];

export function ServicesGrid() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <FadeIn className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground max-w-2xl">
            Full-stack digital services
          </h2>
        </FadeIn>
        <StaggerChildren className="grid md:grid-cols-3 gap-6" staggerDelay={0.12}>
          {services.map((service) => (
            <StaggerItem key={service.href}>
              <Link
                href={service.href}
                className="group flex flex-col h-full bg-white border border-border rounded p-8 hover:border-brand transition-all duration-300"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded ${service.bg} mb-6`}
                >
                  <service.icon className={`w-5 h-5 ${service.color}`} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 mt-6 text-sm font-medium text-brand">
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
