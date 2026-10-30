i # Small-Business Website Workflow

Method: short prompts -> AI writes its own implementation prompt -> you approve -> AI builds -> checks run -> you verify.
(Adapted from The Vibe Engineering Guide.)

## Per-client folder layout
```
clients/<client-name>/
  AGENTS.md            # copy of ../../AGENTS.template.md, filled in
  intake.md            # copy of ../../intake/client-questionnaire.md, filled in
  prompts/             # AI-written implementation prompts (one per feature)
  .agents/skills/      # copy of ../../.agents/skills
  site/                # the Next.js project
```

## Phases

### 1. Lead -> Proposal
- Discovery call (15-30 min). Confirm goal: calls, bookings, quotes, or foot traffic.
- Send a fixed-price package (see `business/packages.md`) + 50% deposit.

### 2. Intake
- Client fills `intake/client-questionnaire.md`: business info, services, brand, photos, testimonials, domain, competitors/sites they like.
- Do not start building until you have: logo (or approval to make a simple one), service list, contact details, 5+ real photos.

### 3. Project setup
1. Create `clients/<name>/` using the layout above.
2. Run the **Kickoff Prompt** (see `PROMPTS.md`) with the intake pasted in. AI drafts the client's `AGENTS.md`. Review and edit.
3. Scaffold: `npx create-next-app@latest site --typescript --tailwind --eslint --app`

### 4. Build loop (repeat per feature, one feature per prompt)
1. Send a short prompt: "Implement <feature>. Use @.agents/skills/<x>."
2. AI saves a plan to `prompts/NN-feature.md` (format: `prompts/_TEMPLATE.md`).
3. **You read it and reply "yes"** (or request changes).
4. AI builds, then runs `npm run lint`, `npx tsc --noEmit`, and `npm run build`.
5. You verify using the AI's test steps (desktop + phone width).

### 5. Build order
1. Design system (colors, fonts, spacing, buttons, layout shell, header/footer)
2. Home page
3. Service/Product pages
4. About + Testimonials/Gallery
5. Contact page + form (email delivery via Resend/Formspree; spam protection)
6. SEO: metadata, Open Graph, sitemap, robots, LocalBusiness schema
7. Accessibility + performance pass
8. Analytics (Plausible/GA4) + cookie notice if required
9. Optional extras: booking embed (Calendly/Cal.com), blog, Google Maps

### 6. Client review
- Share the Vercel preview URL. Allow 2 revision rounds (put in contract).
- Collect feedback in one list; send each item as its own prompt.

### 7. Launch
- Run `LAUNCH-CHECKLIST.md`.
- Connect domain (client owns the registrar account), enable HTTPS.
- Submit sitemap to Google Search Console; set up Google Business Profile links.

### 8. Handoff + maintenance
- Handoff doc: logins, how to request changes, where the site is hosted.
- Offer monthly care plan (updates, backups, small edits, uptime).

## Rules of thumb
- Static-first. No database/auth/CMS unless the client truly needs it.
- Real content before design polish. Placeholder copy gets replaced, not shipped.
- Never put API keys in client code; use env vars.
- Keep each client in their own repo and hosting account when possible.
