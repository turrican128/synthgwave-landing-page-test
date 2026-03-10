# Design: SiteHeader Component

**Date:** 2026-03-10

## Summary

Add a sticky navigation header to the synthwave landing page with the owner's name, 4 anchor links, and a CTA button.

## Layout (RTL)

- **Right:** "אלכס גולדבלט" — `text-glow-magenta` neon style
- **Center:** Nav links — ראשי · האתגר · הצצה לקורס · מודולים
- **Left:** CTA button "הרשמה" → scrolls to `#lead-form`

## Behavior

- `position: sticky`, `top: 0`, `z-index: 50`
- Background: `bg-black/70 backdrop-blur-md`
- Bottom border: `border-b border-neon-cyan/30`

## Anchor IDs

| Section | ID |
|---|---|
| HeroSection | `hero` |
| ProblemSection | `problem` |
| AudioPreview | `audio-preview` |
| CourseModules | `modules` |
| LeadForm | `lead-form` |

## Files

1. **Create** `components/SiteHeader.tsx`
2. **Edit** `components/HeroSection.tsx` — add `id="hero"`
3. **Edit** `components/ProblemSection.tsx` — add `id="problem"`
4. **Edit** `components/AudioPreview.tsx` — add `id="audio-preview"`
5. **Edit** `components/CourseModules.tsx` — add `id="modules"`
6. **Edit** `components/LeadForm.tsx` — add `id="lead-form"`
7. **Edit** `app/page.tsx` — add `<SiteHeader />` above `<main>`
