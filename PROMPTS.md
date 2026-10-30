# Prompt Snippets

## Kickoff (once per client)
```
Read the client intake below and draft an AGENTS.md based on AGENTS.template.md.
Ask me any focused questions first. Fill brand, scope, stack, and SEO sections.

Intake:
<paste intake.md>
```

## Feature prompt (everyday)
```
Implement <one feature>. Use @.agents/skills/<skill-a> and @.agents/skills/<skill-b>.
```
Examples:
- `Implement the design system: colors, typography, buttons, header, footer. Use @.agents/skills/design-system.`
- `Implement the Home page (hero, services preview, testimonials, CTA). Use @.agents/skills/design-system.`
- `Implement the Contact page and form with server-side validation and email delivery. Use @.agents/skills/forms.`
- `Implement SEO: metadata, sitemap, robots, LocalBusiness schema. Use @.agents/skills/seo.`

## Revision prompt
```
Client feedback: <one item>. Make only this change. Save a short plan to prompts/ first.
```

## Pre-build check (60 seconds)
- Feature is one clearly defined thing
- Rules are in AGENTS.md, not repeated in prompt
- Right skills named
- Plan saved and I've read it
- Secrets/env vars handled
