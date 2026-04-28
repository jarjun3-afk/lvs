# Leela Vigil Solutions — PRD

## Original Problem Statement
User provided existing static HTML for "Leela Vigil Solutions" (security & surveillance company in Mysuru) and asked us to:
- Recreate as a full website with graphics, same dark + neon green/cyan theme, and uploaded logo
- Quote/contact form that sends email to leelavigils@gmail.com (later expanded to also contact@leelavigils.com) and WhatsApp to +91 63625 54499
- Show office timings: 9:30 AM – 6:30 PM, Sunday holiday
- Detailed information for each service on a separate page with a "Back to home" button on each

## Architecture
- **Backend**: FastAPI + MongoDB (Motor). `/api/quote` saves submissions, sends email via Resend (async), returns pre-filled WhatsApp URL.
- **Frontend**: React + React Router + Tailwind + shadcn/lucide-react. Multi-page (Home + 7 Service Detail pages).
- **Design**: Dark navy (`#05080f`/`#0f1b2e`) + neon green (`#00ff9c`) + cyan (`#00cfff`). Fonts: Space Grotesk (display), Manrope (body), JetBrains Mono (labels). Surveillance HUD motifs (radar pulse, scan-lines, corner brackets).

## Core Requirements (Static)
- Branding: Leela Vigil Solutions logo + dark navy + neon palette
- Office address: 22 Chikkaharadanahalli, Jayanagar, Mysuru – 570034
- Email: contact@leelavigils.com, leelavigils@gmail.com
- Phones: Bharath Kumar CM (+91 97436 26883, +91 63625 54499) · Arjun J (+91 99800 91299)
- Office hours: Mon–Sat · 9:30 AM – 6:30 PM · Sunday Closed
- 7 services with detail pages: CCTV, LAN, Biometric, Fire & Smoke, Door, Shutter, Motion sensors

## User Personas
- Bank/branch facilities manager evaluating CCTV + access control vendors
- Retail/showroom owner needing shutter/intrusion alarms
- Home owner / apartment manager looking for residential surveillance
- Factory / warehouse manager needing networking + fire safety integrations

## Implemented (Iteration 1 — Feb 2026)
- ✅ Backend `/api/quote` (POST), `/api/quotes` (GET), `/api/status` endpoints
- ✅ Resend email integration (async, gracefully no-ops without API key, sends to both contact addresses)
- ✅ MongoDB persistence with `_id` excluded; ISO datetime stringification
- ✅ Pydantic `QuoteRequest` validation (EmailStr + min/max lengths)
- ✅ React Router: `/` Home + `/services/:slug` for 7 services + 404 fallback to home
- ✅ Hero with surveillance HUD (radar pulse, scanlines, corner brackets), client marquee
- ✅ Services bento grid with hover-lift cards and per-service icons
- ✅ Service detail pages: Back-to-home button, hero image, features grid, use-cases, embedded quote form, "Other services"
- ✅ Quote form: posts to backend, opens pre-filled WhatsApp link in new tab on success, sonner toasts
- ✅ Floating WhatsApp button with radar-pulse animation linked to +91 63625 54499
- ✅ Office timings shown in Contact + Footer
- ✅ Brand title + meta description in `index.html`
- ✅ Backend tests (8/8 passing) at `/app/backend/tests/backend_test.py`
- ✅ Testing agent end-to-end pass: 100% backend + 100% frontend

## Pending / Backlog
### P0
- [ ] User to provide a Resend API key (re_…) → set `RESEND_API_KEY` in `/app/backend/.env` to enable real email delivery. Until then `email_sent=false` is intentional but submissions are still saved and WhatsApp redirect works.
- [ ] User to verify `contact@leelavigils.com` (or own domain) on Resend so production emails can be sent from a branded `from` address.

### P1
- Admin dashboard at `/admin/quotes` (token-protected) to view/export submissions
- Service-page SEO metadata (per-page `<title>` & og tags) via react-helmet
- Sitemap.xml + robots.txt for Mysuru local SEO

### P2
- Testimonials / case studies section
- Pricing/package tiers per service
- Blog with security tips for SEO traffic
- Integrate a Google Maps embed of the office in Contact

## File Map
- `/app/backend/server.py` — APIs, Resend integration, Mongo persistence
- `/app/frontend/src/App.js` — Router + global Toaster
- `/app/frontend/src/pages/HomePage.jsx` — Landing experience
- `/app/frontend/src/pages/ServiceDetailPage.jsx` — Slug-driven service detail
- `/app/frontend/src/data/services.js` — Static service catalog (7 entries)
- `/app/frontend/src/components/{Header,Footer,WhatsAppFloat,QuoteForm}.jsx`
- `/app/frontend/src/index.css` — Theme tokens, scanlines, radar pulse, marquee, fade-up
- `/app/design_guidelines.json` — Source design system
