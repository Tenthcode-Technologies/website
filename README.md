# Tenthcode Technologies Website

The corporate website for [Tenthcode Technologies](https://tenthcode.com), an
African technology company building software and hardware products for
real-world needs and global relevance.

## Tech stack

- Next.js 16 with the App Router
- React 19 and React Compiler
- TypeScript
- Tailwind CSS 4
- Inter through `next/font`

## Development setup

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

This Next.js release requires a current Node.js runtime (Node.js 20.9 or newer).

## Commands

```bash
npm run dev    # Start local development
npm run lint   # Run ESLint
npm run build  # Create a production build
npm run start  # Run the production build
```

## Configuration

Site navigation, contact information, social profile placeholders, and the
canonical domain are centralized in `src/config/site.ts`.

The corporate website does not require environment variables or external
services. Do not commit secrets if future integrations are added.

## Brand assets

The official monochrome logo is stored at
`public/brand/tenthcode-logo.svg`. A Cloud White variant is available at
`public/brand/tenthcode-logo-white.svg` for dark brand surfaces. The favicon
uses the Cloud White mark on a transparent background. Keep every variant
monochrome and preserve its proportions.

## Deployment

The production domain is `https://tenthcode.com`. Vercel is the recommended
deployment target. Run `npm run lint` and `npm run build` successfully before
deploying, then configure the domain in the Vercel project settings.
