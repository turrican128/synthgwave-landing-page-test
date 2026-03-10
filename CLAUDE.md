# CLAUDE.md — Synthwave Landing Page

## Project Overview

Static RTL Hebrew landing page for an FL Studio Synthwave course. Lead generation via Make.com webhook, deployed to GitHub Pages.

## Tech Stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS v4** — config lives in `app/globals.css` using `@theme {}` blocks. There is NO `tailwind.config.ts`.
- **shadcn/ui v4** — Tailwind v4 compatible. Components in `components/ui/`
- **Framer Motion v12** — scroll animations (`whileInView`)
- **Static export** → `out/` directory (`output: "export"` in next.config.ts)
- **Hosting:** GitHub Pages via GitHub Actions
- **Lead capture:** Make.com webhook (`NEXT_PUBLIC_WEBHOOK_URL`)

## Commands

```bash
npm run dev     # dev server at http://localhost:3000
npm run build   # static export to out/
npm test        # 3 Jest unit tests
```

## Environment Variables

`.env.local` (not committed):
```
NEXT_PUBLIC_WEBHOOK_URL=https://hook.eu1.make.com/YOUR_WEBHOOK_ID
NEXT_PUBLIC_BASE_PATH=   # empty in dev, /synthgwave-landing-page-test in prod
```

## Architecture

```
app/
  layout.tsx        RTL (dir="rtl"), Heebo font via <link>, Hebrew metadata
  page.tsx          Assembles all sections
  globals.css       Tailwind v4 @theme{} tokens + utility classes

components/
  HeroSection.tsx       Animated grid background + CTA
  ProblemSection.tsx    3 pain-point cards
  AudioPreview.tsx      Placeholder (no real audio yet)
  CourseModules.tsx     6 course module cards (shadcn Card)
  Testimonials.tsx      3 testimonials with RTL border (border-s-4)
  LeadForm.tsx          Form + validation + Make.com webhook

lib/
  submitLead.ts              POST to webhook, throws Hebrew errors
  __tests__/submitLead.test.ts   3 Jest tests

.github/workflows/deploy.yml   GitHub Actions: test → build → deploy
```

## Key Conventions

- All components are `"use client"` (Framer Motion requires it)
- RTL-aware CSS: use logical properties (`border-s`, `ps-`, `ms-`) not directional (`border-r`, `pr-`, `mr-`)
- Neon colors: `neon-magenta` (#FF00FF), `neon-cyan` (#00FFFF), `neon-purple` (#BF00FF)
- Text glow utilities: `text-glow-magenta`, `text-glow-cyan`
- `suppressHydrationWarning` on `<body>` to suppress browser extension conflicts
- Stable `key` props on list items (use content, not index)

## GitHub

- Repo: https://github.com/turrican128/synthgwave-landing-page-test
- Branch: main
- GitHub Pages: Settings → Pages → Source: GitHub Actions
- Required secrets: `NEXT_PUBLIC_WEBHOOK_URL`, `NEXT_PUBLIC_BASE_PATH`

## What's Still Missing

- Real audio in AudioPreview (MP3 or YouTube embed)
- Live Make.com webhook URL in GitHub Secrets
- GitHub Pages activation in repo settings
