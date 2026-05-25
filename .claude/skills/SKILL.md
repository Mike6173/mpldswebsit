# MPLDS Frontend Design Skill

This skill defines the design system for MPL Digital Services. Every component, section, and UI element must follow these rules. Do not invent new patterns — extend what exists.

---

## Design Philosophy

Dark, premium, space-tech aesthetic. The site should feel like a high-end SaaS product, not a marketing template. Restraint > decoration. Every visual element must earn its place.

Anti-patterns to avoid:
- Generic card grids with solid backgrounds
- Flat button designs (use gradients or glassmorphism)
- Rainbow color usage — keep palette tight (blue/cyan primary, white/gray neutral, single accent per card)
- Generic shadow-md/shadow-lg — use colored, low-opacity shadows (`shadow-blue-500/25`)
- Placeholder copy ("Lorem ipsum", "Your text here")
- Centered text walls longer than 2 lines

---

## Color Tokens

```
Background:      #080c14  (--background)
Foreground:      #ffffff  (--foreground)
Primary:         #2563eb  (blue-600)
Primary hover:   #3b82f6  (blue-500)
Primary light:   #60a5fa  (blue-400)
Accent:          #22d3ee  (cyan-400)
Text muted 1:    #d1d5db  (gray-300)
Text muted 2:    #9ca3af  (gray-400)
Text muted 3:    #6b7280  (gray-500)
Border glass:    rgba(255,255,255,0.08)  (white/8)
Border subtle:   rgba(255,255,255,0.10)  (white/10)
Border medium:   rgba(255,255,255,0.20)  (white/20)
```

Gradient brand: `from-blue-400 via-blue-300 to-cyan-400`
Gradient brand short: `from-blue-400 to-cyan-400`

Per-service accent colors (do not mix freely):
- Web/core: blue-400/blue-500
- Social: purple-400/purple-500
- Meta Ads: pink-400/pink-500
- Google Ads: yellow-400/yellow-500
- SEO: green-400/green-500
- Data: cyan-400/cyan-500
- AI: indigo-400/indigo-500

---

## Typography Scale

Font: Geist Sans (variable, `var(--font-sans)`)

```
Hero H1:        text-5xl md:text-7xl lg:text-8xl  font-bold  tracking-tight  leading-tight
Section H2:     text-4xl md:text-5xl              font-bold  leading-tight
Card H3:        text-lg                           font-semibold  leading-snug
Badge/label:    text-sm                           font-medium    tracking-wide
Hero body:      text-lg md:text-xl                text-gray-300  leading-relaxed
Section body:   text-lg                           text-gray-400  max-w-2xl mx-auto
Card body:      text-sm                           text-gray-400  leading-relaxed
Nav links:      text-sm                           text-gray-400
```

Gradient text: always use `bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent`

---

## Spacing System (8px base grid)

```
Section vertical padding:   py-24
Section horizontal padding: px-6
Container max-width:        max-w-7xl mx-auto
Card padding:               p-6
Card gap (grid):            gap-5
Button group gap:           gap-4
Section header margin:      mb-16
H2 to body gap:             mb-4
Body to CTA gap:            mb-10
Icon container:             w-12 h-12  (service cards)
```

---

## Component Patterns

### Section badge
```tsx
<span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-400 text-sm font-medium tracking-wide backdrop-blur-sm mb-6">
  Label Text
</span>
```

### Primary CTA button
```tsx
<motion.button
  whileHover={{ scale: 1.06, backgroundColor: "#3b82f6" }}
  whileTap={{ scale: 0.97 }}
  transition={{ duration: 0.18 }}
  className="px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-full shadow-lg shadow-blue-500/25 cursor-pointer"
>
  CTA Label
</motion.button>
```

### Ghost CTA button
```tsx
<motion.button
  whileHover={{ scale: 1.06, borderColor: "rgba(255,255,255,0.4)", backgroundColor: "rgba(255,255,255,0.1)" }}
  whileTap={{ scale: 0.97 }}
  transition={{ duration: 0.18 }}
  className="px-8 py-3.5 border border-white/20 bg-white/5 text-white font-semibold rounded-full backdrop-blur-sm cursor-pointer"
>
  Secondary CTA
</motion.button>
```

### Glassmorphism card
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: index * 0.08 }}
  whileHover={{ y: -6, scale: 1.01 }}
  className="group relative p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-[color]-500/20 to-[color]-600/10 backdrop-blur-sm transition-all duration-300"
>
```

### Icon container (service cards)
```tsx
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 mb-4 text-blue-400">
  <Icon size={22} />
</div>
```

### Section header structure
```tsx
<motion.div
  className="text-center mb-16"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
>
  <motion.span variants={fadeUpVariant}>Badge Text</motion.span>
  <motion.h2 variants={fadeUpVariant}>
    Plain Headline{" "}
    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
      Gradient Word
    </span>
  </motion.h2>
  <motion.p variants={fadeUpVariant} className="text-gray-400 text-lg max-w-2xl mx-auto">
    Supporting copy.
  </motion.p>
</motion.div>
```

### Standard grid layout
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
```

---

## Animation System

**All animations use Framer Motion. No CSS-only animations except marquee/keyframes in globals.css.**

Standard easing curve: `[0.16, 1, 0.3, 1]` (snappy spring feel)

Scroll reveal (single element):
```tsx
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
```

Stagger container + child variants:
```tsx
// Container
variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}

// Child
const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
}
```

Hero entrance sequence (staggered by delay):
```
Badge:   delay: 0
H1:      delay: 0.1
Body:    delay: 0.25
CTAs:    delay: 0.4
Scroll:  delay: 1.2
```

Button micro-interactions:
- Hover: `scale: 1.05` or `scale: 1.06`
- Tap: `scale: 0.96` or `scale: 0.97`
- Duration: `0.15`–`0.18`

---

## Background & Surface Rules

- Page background: `#080c14` — never deviate
- Noise texture + dot grid are applied globally via `body::before` and `body::after` in globals.css — do not add more global overlays
- Section backgrounds: use transparent or ultra-subtle gradients (`from-blue-900/10`) — not solid colors
- Card backgrounds: glassmorphism — `bg-white/5` + `backdrop-blur-sm` + `border-white/10`, or color-tinted `bg-gradient-to-br from-[color]-500/20 to-[color]-600/10`
- Glow effects: use `shadow-[color]-500/25` on CTAs; for cards use `opacity-0 group-hover:opacity-100` inner glow overlays

---

## Navigation Rules

- Height: `h-16`
- Scroll behavior: transparent → `bg-[#080c14]/90 backdrop-blur-xl border-b border-white/8` after 20px scroll
- Logo: image + `MPL` + `DS` in `text-blue-400`
- Links: `text-gray-400` → `text-white` on hover
- Primary CTA: `bg-blue-600 rounded-full px-5 py-2 text-sm font-semibold`
- Mobile: hamburger icon (Menu/X from lucide-react), full-width dropdown, animated with `AnimatePresence`

---

## Do Not

- Do not use `shadow-md`, `shadow-lg` without color context
- Do not use `bg-gray-900`, `bg-zinc-900`, `bg-slate-800` — always `bg-[#080c14]` or transparent
- Do not create new color combinations outside the palette
- Do not use `font-light` — minimum `font-normal`, prefer `font-medium`/`font-semibold`/`font-bold`
- Do not animate with `transition-all` alone — use Framer Motion
- Do not add sections without `id` attributes (nav scroll requires them)
- Do not use `cursor-default` on interactive elements — use `cursor-pointer`
- Do not use decorative emojis in UI copy
