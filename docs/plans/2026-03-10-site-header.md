# SiteHeader Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a sticky RTL header with the owner's name, 4 anchor nav links, and a CTA button.

**Architecture:** Pure CSS sticky header (`position: sticky`) with `backdrop-blur` background. No scroll JS needed. Anchor links use `href="#id"` smooth scroll via CSS `scroll-behavior: smooth`. Component is `"use client"` to match project convention.

**Tech Stack:** Next.js 16 App Router, Tailwind v4, Framer Motion v12 (optional entrance animation)

---

### Task 1: Add anchor IDs to section components

**Files:**
- Modify: `components/HeroSection.tsx` — outer `<section>` tag
- Modify: `components/ProblemSection.tsx` — outer `<section>` tag
- Modify: `components/AudioPreview.tsx` — outer element
- Modify: `components/CourseModules.tsx` — outer element
- Modify: `components/LeadForm.tsx` — outer element

**Step 1: Add `id="hero"` to HeroSection**

In `components/HeroSection.tsx`, find the outer `<section` tag and add `id="hero"`:
```tsx
<section id="hero" className="relative min-h-screen ...">
```

**Step 2: Add `id="problem"` to ProblemSection**

In `components/ProblemSection.tsx`, find the outer `<section` (or `<div`) tag and add `id="problem"`.

**Step 3: Add `id="audio-preview"` to AudioPreview**

In `components/AudioPreview.tsx`, find the outer element and add `id="audio-preview"`.

**Step 4: Add `id="modules"` to CourseModules**

In `components/CourseModules.tsx`, find the outer element and add `id="modules"`.

**Step 5: Add `id="lead-form"` to LeadForm**

In `components/LeadForm.tsx`, find the outer element and add `id="lead-form"`.

> Note: HeroSection already calls `document.getElementById("lead-form")` — adding this id makes it consistent.

**Step 6: Commit**
```bash
git add components/HeroSection.tsx components/ProblemSection.tsx components/AudioPreview.tsx components/CourseModules.tsx components/LeadForm.tsx
git commit -m "feat: add anchor ids to section components"
```

---

### Task 2: Create SiteHeader component

**Files:**
- Create: `components/SiteHeader.tsx`

**Step 1: Create the file**

```tsx
"use client";

import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "ראשי", href: "#hero" },
  { label: "האתגר", href: "#problem" },
  { label: "הצצה לקורס", href: "#audio-preview" },
  { label: "מודולים", href: "#modules" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neon-cyan/30 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Right: owner name */}
        <span className="text-lg font-bold text-glow-magenta text-neon-magenta">
          אלכס גולדבלט
        </span>

        {/* Center: nav links */}
        <nav className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/80 transition-colors hover:text-neon-cyan"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Left: CTA */}
        <Button
          asChild
          size="sm"
          className="border border-neon-magenta bg-transparent text-neon-magenta hover:bg-neon-magenta hover:text-black"
        >
          <a href="#lead-form">הרשמה</a>
        </Button>
      </div>
    </header>
  );
}
```

**Step 2: Commit**
```bash
git add components/SiteHeader.tsx
git commit -m "feat: add SiteHeader component"
```

---

### Task 3: Add SiteHeader to page and enable smooth scroll

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/globals.css`

**Step 1: Import and render SiteHeader in page.tsx**

```tsx
import { SiteHeader } from "@/components/SiteHeader";
// ...existing imports...

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ProblemSection />
        <AudioPreview />
        <CourseModules />
        <Testimonials />
        <LeadForm />
      </main>
    </>
  );
}
```

**Step 2: Add smooth scroll to globals.css**

At the top of `app/globals.css` (after `@import "tailwindcss"`), add:
```css
html {
  scroll-behavior: smooth;
}
```

**Step 3: Commit**
```bash
git add app/page.tsx app/globals.css
git commit -m "feat: wire SiteHeader into page, enable smooth scroll"
```

---

### Task 4: Verify in dev server

**Step 1: Run dev server**
```bash
npm run dev
```
Expected: Server starts at http://localhost:3000 with no errors.

**Step 2: Manual checks**
- [ ] Header is visible and sticky on scroll
- [ ] Name "אלכס גולדבלט" glows magenta on the right
- [ ] 4 nav links visible in center, each scrolls to correct section
- [ ] "הרשמה" button on the left scrolls to the form
- [ ] Background blurs content behind it while scrolling

**Step 3: Run build to confirm no TS/export errors**
```bash
npm run build
```
Expected: `out/` generated with no errors.
