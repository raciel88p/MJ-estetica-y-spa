# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   └── api-server/         # Express API server
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts (single workspace package)
│   └── src/                # Individual .ts scripts, run via `pnpm --filter @workspace/scripts run <script>`
├── pnpm-workspace.yaml     # pnpm workspace (artifacts/*, lib/*, lib/integrations/*, scripts)
├── tsconfig.base.json      # Shared TS options (composite, bundler resolution, es2022)
├── tsconfig.json           # Root TS project references
└── package.json            # Root package with hoisted devDeps
```

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references. This means:

- **Always typecheck from the root** — run `pnpm run typecheck` (which runs `tsc --build --emitDeclarationOnly`). This builds the full dependency graph so that cross-package imports resolve correctly. Running `tsc` inside a single package will fail if its dependencies haven't been built yet.
- **`emitDeclarationOnly`** — we only emit `.d.ts` files during typecheck; actual JS bundling is handled by esbuild/tsx/vite...etc, not `tsc`.
- **Project references** — when package A depends on package B, A's `tsconfig.json` must list B in its `references` array. `tsc --build` uses this to determine build order and skip up-to-date packages.

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages that define it
- `pnpm run typecheck` — runs `tsc --build --emitDeclarationOnly` using project references

## Packages

### `artifacts/api-server` (`@workspace/api-server`)

Express 5 API server. Routes live in `src/routes/` and use `@workspace/api-zod` for request and response validation and `@workspace/db` for persistence.

- Entry: `src/index.ts` — reads `PORT`, starts Express
- App setup: `src/app.ts` — mounts CORS, JSON/urlencoded parsing, routes at `/api`
- Routes: `src/routes/index.ts` mounts sub-routers; `src/routes/health.ts` exposes `GET /health` (full path: `/api/health`)
- Depends on: `@workspace/db`, `@workspace/api-zod`
- `pnpm --filter @workspace/api-server run dev` — run the dev server
- `pnpm --filter @workspace/api-server run build` — production esbuild bundle (`dist/index.cjs`)
- Build bundles an allowlist of deps (express, cors, pg, drizzle-orm, zod, etc.) and externalizes the rest

### `lib/db` (`@workspace/db`)

Database layer using Drizzle ORM with PostgreSQL. Exports a Drizzle client instance and schema models.

- `src/index.ts` — creates a `Pool` + Drizzle instance, exports schema
- `src/schema/index.ts` — barrel re-export of all models
- `src/schema/<modelname>.ts` — table definitions with `drizzle-zod` insert schemas (no models definitions exist right now)
- `drizzle.config.ts` — Drizzle Kit config (requires `DATABASE_URL`, automatically provided by Replit)
- Exports: `.` (pool, db, schema), `./schema` (schema only)

Production migrations are handled by Replit when publishing. In development, we just use `pnpm --filter @workspace/db run push`, and we fallback to `pnpm --filter @workspace/db run push-force`.

### `lib/api-spec` (`@workspace/api-spec`)

Owns the OpenAPI 3.1 spec (`openapi.yaml`) and the Orval config (`orval.config.ts`). Running codegen produces output into two sibling packages:

1. `lib/api-client-react/src/generated/` — React Query hooks + fetch client
2. `lib/api-zod/src/generated/` — Zod schemas

Run codegen: `pnpm --filter @workspace/api-spec run codegen`

### `lib/api-zod` (`@workspace/api-zod`)

Generated Zod schemas from the OpenAPI spec (e.g. `HealthCheckResponse`). Used by `api-server` for response validation.

### `lib/api-client-react` (`@workspace/api-client-react`)

Generated React Query hooks and fetch client from the OpenAPI spec (e.g. `useHealthCheck`, `healthCheck`).

### `scripts` (`@workspace/scripts`)

Utility scripts package. Each script is a `.ts` file in `src/` with a corresponding npm script in `package.json`. Run scripts via `pnpm --filter @workspace/scripts run <script>`. Scripts can import any workspace package (e.g., `@workspace/db`) by adding it as a dependency in `scripts/package.json`.

### `artifacts/mj-spa` (`@workspace/mj-spa`)

React + Vite frontend-only website for **MJ Fisio Estética y Spa** (Turrialba, Costa Rica). No backend — all booking via WhatsApp.

**Design:** Bold serif typography, dark hero sections, alternating light/dark sections. Brand palette: primary `#1378A2` (deep teal-blue, HSL 200 79% 35%), secondary `#7FBCD2` (sky blue, HSL 196 48% 66%), dark sections navy `#0c3e5a`/`#08293c`. Inspired by consultoriocardenas.com and wellclinicleon.com.

**WhatsApp CTA:** `https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0`

**Key pages:**
- `/` — Home with 3-slide auto-advancing hero, stats bar, intro banner, services preview, testimonials
- `/nosotros` — About page
- `/testimonios` — 25 testimonials + TestimonialGrid (tabs: testimonios / antes-después / chat)
- `/contacto` — Contact page
- `/buzon-sugerencias` — Suggestions form
- `/tratamientos/corporales` — Category page: corporal treatments (7+)
- `/tratamientos/faciales` — Category page: facial treatments (6+)
- `/tratamientos/piernas` — Category page: leg treatments (3)
- `/medicos-esteticos` — Medical aesthetics page (Botox, fillers, nutrition, etc.)
- `/servicios/:slug` — Individual service pages (generated from `services.ts`)
- `/reductivos-turrialba` — CRO landing page (reductivos): Hero→Problem→Solution→Results→Testimonials→Pricing→FAQ→CTA
- `/faciales` — CRO landing page (faciales): same CRO funnel for facial treatments
- `/promociones` — Promotions page: 4 packages with discounts (up to 40%), urgency bar

**Phase 2 — CRO & Testimonial System:**
- `src/data/testimonials.ts` — Structured testimonial data (Testimonial, BeforeAfterItem, ChatMessage types + WA URL constants)
- `src/components/testimonials/TestimonialCard.tsx` — Anonymous testimonial card (age shown, no face, verified badge, result highlight)
- `src/components/testimonials/BeforeAfterCard.tsx` — Before/after visual card (no face, body area icon, result badge)
- `src/components/testimonials/ChatProof.tsx` — WhatsApp-style chat simulation with real client messages
- `src/components/testimonials/TestimonialGrid.tsx` — Tabbed grid (Testimonios / Antes & Después / Mensajes reales)
- GTM tracking: `window.dataLayer.push()` on all WhatsApp CTA clicks with `event: "click_whatsapp"` + label

**Navbar structure:**
- Servicios dropdown: 3-column layout (Corporales / Faciales / Piernas) with category links + service sub-links
- Médicos y Estéticos dropdown: 6 medical/aesthetic services

**Key files:**
- `src/data/services.ts` — All service definitions + category link arrays (`serviceCategoryLinks`, `medicoEsteticosLinks`)
- `src/pages/ServicePage.tsx` — Generic service detail page template
- `src/pages/TratamientosCorporales|Faciales|Piernas.tsx` — Category hub pages
- `src/components/layout/Navbar.tsx` — Transparent-on-hero, white-on-scroll with dropdown menus
- `src/components/Breadcrumb.tsx` — Auto-prepends "Inicio" home link
- `public/sitemap.xml`, `public/robots.txt` — SEO files
- `index.html` — Schema.org JSON-LD for the business
