# Seedlore EDU Website - Project Overview

## Summary
This repository contains the Seedlore EDU marketing website built with Next.js (pages router).
It includes:
- A multi-page frontend for courses, FAQs, and contact flow.
- Shared navigation/footer components.
- A Netlify serverless function to process Contact Us submissions via Resend email.
- Static export output (`out/`) for deployment.

## Tech Stack
- Next.js `12.1.10` (pages directory)
- React `17.0.2`
- `dangerous-html` for inline script/style injection
- `next-intl` (present, currently minimal usage)
- Netlify Functions
- Resend SDK (`resend`) for transactional email

## Scripts
From `package.json`:
- `npm run dev` - start dev server
- `npm run build` - production build
- `npm run start` - run Next.js server
- `npm run export` - static export to `out/`

## Deployment
Netlify is configured via `netlify.toml`:
- Build command: `npm run build && npm run export`
- Publish directory: `out`
- Functions directory: `netlify/functions`
- Node version: `18`

## Runtime Environment Variables
Used by `netlify/functions/contact.mjs`:
- `RESEND_API_KEY` (required)
- `CONTACT_FROM` (optional, default sender is set in code)
- `CONTACT_TO` (optional, default recipient is set in code)

## App Structure
Top-level important paths:
- `pages/` - route pages and app-level bootstrapping
- `components/` - shared UI components (`navigation`, `footer`, home sections)
- `netlify/functions/contact.mjs` - Contact Us backend handler
- `public/` - static assets (images, video, favicon)
- `out/` - generated static export output
- `pages/style.css` - global site styling imported in `_app.js`

## Main Routes
- `/` -> Home page (`CoursesHub`, `WhyChoose`, `FaqSection`)
- `/courses` -> Detailed courses page
- `/contactus` -> Contact form page posting to Netlify function
- `/enroll-now` -> Enroll page shell
- `/whytolearn` -> Why learn emerging technologies page
- `/404` -> Custom 404 page

## Key Components
- `components/navigation.js`
  - Home link, ContactUs link, mobile menu toggle logic.
- `components/footer.js`
  - Quick links, program links, contact block, CTA, smooth-scroll helpers.
- `components/home/CoursesHub.jsx`
  - Tabbed course tracks (Robotics, AI/ML, Computer), hero video, branch marquee.
- `components/home/WhyChoose.jsx`
  - Value proposition cards and progress path section.
- `components/home/FaqSection.jsx`
  - Tabbed FAQ panels (General, Enrollment, Learning) with search/jump behavior.

## Contact Flow
Frontend:
- Contact form in `pages/contactus.js` validates email/phone and submits JSON to:
  - `/.netlify/functions/contact`

Backend:
- `netlify/functions/contact.mjs`
  - Accepts only `POST`
  - Requires phone field
  - Sends email through Resend
  - Returns JSON success/error responses

## Notable Implementation Details
- `next.config.js` uses:
  - `reactStrictMode: true`
  - `trailingSlash: true`
  - `images.unoptimized: true` (compatible with static export)
- `_app.js` wraps app in `GlobalProvider` and injects a floating WhatsApp button.
- `global-context.js` currently defaults locale to English and stores locale state.

## Local Development Quick Start
1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Open: `http://localhost:3000`

For Contact Us testing on Netlify/local function runtime, ensure environment variables are configured.
