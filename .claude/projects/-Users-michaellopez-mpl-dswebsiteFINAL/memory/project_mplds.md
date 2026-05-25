---
name: Project: MPL Digital Services Website
description: Full Next.js 16 landing page for MPLDS digital marketing agency, rebuilt on redesign/v2 branch
type: project
---

Full redesign of mpldigitalservices.com on branch `redesign/v2`.

**Stack:** Next.js 16 (App Router), React 19, TypeScript strict, Tailwind CSS v4 (CSS-based @theme inline), Framer Motion v12, lucide-react, react-hook-form + zod, @radix-ui primitives

**Design system:** Light theme only (`globals.css`). CSS variables in `:root`, mapped via `@theme inline`. Key tokens: `--brand: 211 72% 40%` (placeholder — user needs to swap real hex from logo). `bg-brand`, `text-brand`, `text-brand-dark` are Tailwind utilities.

**Why:** User wants professional/luxurious look (Stripe/Linear quality), not a generic agency template. Generous whitespace, bold tracking-tight display headings, refined micro-details.

**Structure:**
- `components/layout/` — Nav, Footer (each page renders its own Nav+Footer)
- `components/sections/` — HomeHero, ServicesGrid, FeaturedProject, CtaStrip, ContactHero, ContactFormCircled
- `components/motion/` — FadeIn, StaggerChildren+StaggerItem, MagneticButton, TextReveal, ScrollProgress
- `components/ui/` — WelcomeModal (sessionStorage + localStorage suppression), BackgroundBoxes (light blue tints, NOT dark neon)

**Pages built:** /, /services, /services/web-design, /services/data-solutions, /services/social-media, /portfolio, /portfolio/web-design, /portfolio/data-solutions, /portfolio/social-media, /about, /contact

**Contact form:** POST to /api/contact/route.ts (stub — logs to console, TODO: wire Resend/Formspree). Hand-drawn brand-blue SVG circle animates on scroll-into-view (framer-motion pathLength).

**Placeholder assets to swap:** `/public/og-image.png` (missing), hero background (using Unsplash fallback), brand-blue hex in globals.css `:root { --brand: 211 72% 40%; }`.

**Old components:** Original `components/blocks/` files remain but are no longer imported.
