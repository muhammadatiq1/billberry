# Billberry — Medical Billing Management

Website for **Billberry**, a medical billing and revenue cycle management (RCM) company. The site presents Billberry's billing services across medical specialties, builds trust with performance metrics and testimonials, and converts visitors through booking and lead-capture flows.

> Enterprise-grade medical billing, revenue cycle management, and healthcare financial solutions.

## Pages & features

- **Home** — hero, trust badges, a "struggles" pain-points section, about and value-proposition blocks, services overview, partners, testimonials, blog and gallery sections, and lead-magnet / lead-capture forms with call-to-action bands
- **Services** — data-driven service catalogue (`lib/services-data.ts`) with an index page and per-service detail pages (`/services/[slug]`), covering:
  - Medical billing & coding, charge entry and payment posting
  - Denial management, AR management and old-AR recovery
  - Eligibility/benefits verification, authorisation & referrals
  - Billing & coding audits, revenue cycle optimisation
  - Patient billing, statements and collections
  - Billing for **50+ specialties** — cardiology, gastroenterology, orthopedics, neurosurgery, pediatrics, behavioral health, ophthalmology and more
- **About** — company story with vision, growth and achievements sections
- **Book** — appointment/consultation booking page
- **Contact** — contact form, info blocks and map section
- **Admin — Media Library** (`/admin/media`) — internal media management backed by an upload API route (`/api/upload`)
- **Site-wide** — live-chat widget, scroll progress indicator, dark/light theme toggle

## Tech stack

- **Framework:** Next.js 16 (App Router) · React 19 · TypeScript
- **Styling:** Tailwind CSS 4 · Plus Jakarta Sans · lucide-react icons
- **Motion:** Framer Motion
- **Theming:** next-themes
- **Data:** static, typed content modules in `lib/` (services, specialties, metrics, testimonials)

## Getting started

```bash
# Install
npm install

# Develop
npm run dev

# Build & run
npm run build && npm start
```

Open http://localhost:3000.

## Project structure

```
app/          # Routes — home, about, services (+ [slug]), book,
              # contact, admin/media, api/upload
components/   # home / about / services / contact / admin / layout / ui
lib/          # services-data.ts — services, specialties, metrics, testimonials
```

## License

© Billberry. All rights reserved — code is shown for portfolio purposes.
