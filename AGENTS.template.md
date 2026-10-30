# AGENTS.md — <Client Business Name> Website

## Workflow (always follow)
1. Read this file.
2. Read any skills named in the prompt (`.agents/skills/`).
3. Inspect existing code before planning.
4. Ask only if something is truly ambiguous (one focused question).
5. Write an implementation prompt to `prompts/NN-<feature>.md` using `prompts/_TEMPLATE.md`.
6. Say: "I prepared the implementation prompt at prompts/<name>.md. Good to execute?"
7. Implement ONLY after approval.
8. Run `npm run lint`, `npx tsc --noEmit`, and `npm run build` (if routes/server code changed).
9. Share exact steps to verify, including a mobile-width check.

## Product
Business: <name, type, city>
Goal of site: <calls / bookings / quote requests>
Audience: <who>
Tone: <friendly, premium, etc.>

In scope: <pages list, contact form, SEO, analytics>
Out of scope: user accounts, database, e-commerce, blog (unless stated), admin panel.
Do not overbuild.

## Tech stack
Next.js (App Router) + TypeScript + Tailwind CSS, deployed on Vercel.
Contact form: <Resend / Formspree>.
Do not use: heavy UI kits, unnecessary client-side state libraries, CMS, ORMs, extra dependencies without asking.

## Design
Brand colors: <hex>   Fonts: <heading/body>   Logo: <path>
Style references: <sites/notes>
Mobile-first. Min touch target 44px. Contrast WCAG AA.

## Content
All copy lives in `content/` or page files, sourced from `intake.md`. Never invent facts (prices, awards, testimonials, hours). Mark unknowns with `TODO(client)`.

## SEO
Unique title/description per page, Open Graph, sitemap, robots, LocalBusiness JSON-LD (name, address, phone, hours), semantic headings (one h1), alt text on all images, `next/image` for images.

## Security
- Secrets only in env vars, never committed or sent to the browser.
- Contact form: server-side validation, honeypot/rate limit, no raw HTML rendering.
- No third-party scripts without approval.

## Code standards
Small components, explicit types, no unrelated refactors, no dead code, accessible markup (labels, focus states, aria only where needed).

## When in doubt
Keep it small. Ask one focused question. Save a prompt. Get approval.
