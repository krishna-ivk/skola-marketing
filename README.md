# Skola — Competency Learning Network for Schools

**Skola** helps Indian schools move beyond marks. Track every child's skills, misconceptions, evidence, projects, and next learning actions — across students, teachers, and parents.

## What Skola does

- **Skill mapping** — map every question and activity to micro-skills and competencies
- **Adaptive practice** — personalised drill with automatic reinforcement for wrong answers
- **Teacher heatmaps** — see class-wide competency gaps at a glance
- **Parent weekly reports** — practice sessions, accuracy, skills improved, suggested focus
- **Evidence portfolios** — students submit project evidence, teachers assess against rubrics
- **STEM Studio** — hands-on activities mapped to competencies

## Tech stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4
- **Testing:** Playwright (E2E), Webwright (exploratory QA)
- **Deployment:** Cloudflare Pages + Workers
- **Mobile:** Flutter (future)

## Quickstart

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # production server
npm run test:e2e   # Playwright E2E tests
```

## Project structure

```
src/
  app/
    page.tsx                 # Homepage
    layout.tsx               # Root layout (nav + footer)
    globals.css              # Global styles + Skola theme
    for-schools/page.tsx     # For Schools page
    product/page.tsx         # Product overview
    book-demo/page.tsx       # Demo booking
    competency-maps/         # Competency map explorer
    contact/page.tsx         # Contact form
    privacy/page.tsx         # Privacy policy
tests/
  smoke/marketing.spec.ts    # Playwright smoke tests
```

## E2E Tests

```bash
npm run test:e2e          # all tests
npm run test:e2e:smoke    # critical path smoke
```

Uses system-installed Chromium at `/usr/bin/chromium-browser`.

## Deployment

The site is deployed to **Cloudflare Pages**:

```bash
npm run build      # produces out/
npx wrangler deploy # deploys to Cloudflare
```

---

Built by Skyforce. © 2026 Skola.
