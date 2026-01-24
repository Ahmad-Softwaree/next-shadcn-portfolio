# 🤖 Agent Instructions & Coding Standards

This file contains **strict coding standards and architecture patterns** for this project. All AI agents and developers **MUST** follow these rules to maintain consistency.

---

## 🚨 CRITICAL: Project Configuration

### 📦 Package Manager

- **ALWAYS use `bun`** - This is the ONLY package manager for this project
- **NEVER use `npm`, `yarn`, or `pnpm`**
- All installation commands MUST use `bun add` or `bun install`

### 🔐 Environment Variables

- **ALWAYS use `.env`** - This is the ONLY environment file
- **NEVER create `.env.local`, `.env.example`, `.env.development`, or any other .env variants**
- All environment variables go in the single `.env` file
- The `.env` file is gitignored and safe for local development

---

## 🚨 CRITICAL: Library Enforcement

**ONLY** use the libraries and tools specified in this document. **DO NOT** introduce any other libraries without explicit approval.

### ✅ APPROVED LIBRARIES & TOOLS

#### **UI & Styling**

- **shadcn/ui** - ONLY UI component library allowed
- **Tailwind CSS 4** - For styling (with CSS variables)
- **Lucide React** - Icon library
- **cn() utility** from `@/lib/utils` - For conditional styling
- **framer-motion** - Animation library (use via reusable components in animate.tsx)

#### **Data Fetching & State Management**

- **Static Data** - For portfolio content (projects, certifications, skills, services)

#### **Framework & Core**

- **Next.js** - React framework (App Router)
- **React Server Components (RSC)** - Default component pattern
- **TypeScript** - All code must be TypeScript
- **Bun** - Package manager and runtime (ONLY package manager allowed)

#### **Forms & Validation**

- **Zod** - Schema validation (if needed for contact forms)

#### **URL & State Management**

- **nuqs** - Type-safe URL parameter management

#### **Theming**

- **next-themes** - Dark/light mode management

#### **Internationalization**

- **next-intl** - Translation framework for Next.js

#### **File Uploads** (if needed)

- **uploadthing** - File upload service (already integrated)

### ❌ FORBIDDEN LIBRARIES

**DO NOT USE:**
Other form libraries: Formik (use react-hook-form with shadcn/ui Form)

- ❌ Custom HTTP clients: axios, fetch wrappers (use Server Actions instead)
- ❌ State management: Redux, Zustand, Jotai, Recoil, etc.
- ❌ CSS frameworks: Bootstrap, Bulma, Foundation, etc.
- ❌ Icon libraries: Font Awesome, React Icons, Heroicons (use Lucide only)
- ❌ Other validation: Yup, Joi, class-validator (use Zod only)
- ❌ Raw URL params: searchParams, useSearchParams, URLSearchParams (use nuq
  Before adding ANY new library:

1. Check if it's in the APPROVED list
2. Check if existing approved libraries can solve the problem
3. If not listed, **ASK FOR PERMISSION** - do not proceed

---

## 📚 Architecture Guidelines

### 1️⃣ Component Organization

**See:** [docs/component-organization.md](docs/component-organization.md)

**Key Rules:**

- ✅ Extract components when pages exceed ~100 lines
- ✅ Organize by type: `ui/`, `cards/`, `btn/`, `layout/`, `sections/`, `shared/`, `certifications/`, `projects/`, `skills/`, `tools/`
- ❌ NO massive page files with hundreds of lines of JSX
- ❌ NO mixing unrelated components in the same file

**Component Folders:**

- `ui/` - shadcn/ui primitives ONLY (Button, Card, Dialog, etc.)
- `cards/` - Card components for different entities (projects, skills, etc.)
- `btn/` - Custom button components for filters and actions
- `layout/` - Layout components (header, footer, navigation)
- `sections/` - Page sections (hero, about, services, etc.)
- `shared/` - Globally shared components (Loading, NoData, Search, etc.)
- `certifications/` - Certification page specific components
- `projects/` - Projects page specific components
- `skills/` - Skills page specific components
- `tools/` - Tools page specific components

**Folder Structure:**

```
Portfolio/
├── AGENTS.md                    # AI agent coding standards & rules
├── README.md                    # Project documentation
├── components.json              # shadcn/ui configuration
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies & scripts
├── postcss.config.mjs          # PostCSS configuration
├── proxy.ts                    # Middleware proxy configuration
│
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Root page
│   ├── not-found.tsx           # Global 404 page
│   ├── [locale]/               # Localized routes
│   │   ├── layout.tsx          # Locale layout
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global styles
│   │   ├── providers.tsx       # Context providers
│   │   ├── loading.tsx         # Loading state
│   │   ├── error.tsx           # Error boundary
│   │   ├── not-found.tsx       # Locale 404 page
│   │   ├── certifications/     # Certifications page
│   │   ├── projects/           # Projects page
│   │   ├── skills/             # Skills page
│   │   └── tools/              # Tools page
│   └── api/                    # API routes
│       └── contact/            # Contact form API
│
├── components/                 # React components
│   ├── ui/                     # shadcn/ui primitives (Button, Card, etc.)
│   ├── cards/                  # Card components
│   │   ├── certification-card.tsx
│   │   ├── experience-card.tsx
│   │   ├── project-card.tsx
│   │   ├── service-card.tsx
│   │   ├── skill-card.tsx
│   │   ├── special-tool-card.tsx
│   │   └── tool-card.tsx
│   ├── btn/                    # Button components
│   │   ├── certification-type-btn.tsx
│   │   ├── project-tag-btn.tsx
│   │   ├── project-tech-btn.tsx
│   │   ├── project-type-btn.tsx
│   │   ├── skill-level-btn.tsx
│   │   ├── skill-type-btn.tsx
│   │   └── tool-type-btn.tsx
│   ├── layout/                 # Layout components
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── logo.tsx
│   │   ├── nav-menu.tsx
│   │   └── mobile-navigation.tsx
│   ├── sections/               # Page sections
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── services.tsx
│   │   ├── experiences.tsx
│   │   ├── skills.tsx
│   │   ├── projects.tsx
│   │   ├── certifications.tsx
│   │   ├── tools.tsx
│   │   └── contact.tsx
│   ├── shared/                 # Shared components
│   │   ├── animate.tsx         # Animation wrapper
│   │   ├── Loading.tsx
│   │   ├── NoData.tsx
│   │   ├── Search.tsx
│   │   └── scroll-to-top.tsx
│   ├── certifications/         # Certification page components
│   │   ├── CertificationsHeader.tsx
│   │   ├── CertificationsContent.tsx
│   │   └── CertificationGrid.tsx
│   ├── projects/               # Projects page components
│   │   ├── ProjectsHeader.tsx
│   │   ├── ProjectsContent.tsx
│   │   └── ProjectsGrid.tsx
│   ├── skills/                 # Skills page components
│   │   ├── SkillsHeader.tsx
│   │   ├── SkillsFilter.tsx
│   │   └── SkillsGrid.tsx
│   ├── tools/                  # Tools page components
│   │   ├── ToolsHeader.tsx
│   │   ├── ToolsContent.tsx
│   │   ├── ToolsGrid.tsx
│   │   └── ContactHeader.tsx
│   ├── lang-toggle.tsx         # Language switcher
│   ├── theme-toggle.tsx        # Dark/light mode toggle
│   └── NotFound.tsx            # 404 component
│
├── hooks/                      # Custom React hooks
│   ├── useCertificationQueries.tsx
│   ├── useProjectQueries.tsx
│   ├── useSearchQuery.tsx
│   ├── useSkillQueries.tsx
│   └── useToolsQueries.tsx
│
├── lib/                        # Utility functions & configurations
│   ├── utils.ts                # cn() utility & helpers
│   ├── enums.ts                # TypeScript enums
│   ├── functions.ts            # Helper functions
│   ├── config/                 # Configuration files
│   ├── data/                   # Static data (projects, skills, etc.)
│   └── fetch/                  # Data fetching utilities
│
├── i18n/                       # Internationalization
│   ├── navigation.ts           # i18n navigation
│   ├── request.ts              # i18n request handler
│   └── routing.ts              # i18n routing config
│
├── messages/                   # Translation files
│   ├── en.json                 # English translations
│   ├── ar.json                 # Arabic translations
│   └── ckb.json                # Kurdish translations
│
├── types/                      # TypeScript types
│   └── types.ts                # Global type definitions
│
├── docs/                       # Documentation
│   ├── component-organization.md
│   ├── ui-components.md
│   ├── documentation-standards.md
│   ├── folder-file-conventions.md
│   ├── internationalization.md
│   ├── motion.md
│   ├── package-management.md
│   ├── theme-dark-light-mode.md
│   └── url-parameters.md
│
├── public/                     # Static assets
│   ├── certificates/           # Certificate images
│   ├── fonts/                  # Custom fonts
│   ├── pdf/                    # PDF files
│   ├── projects/               # Project images
│   ├── tools/                  # Tool images
│   └── works/                  # Work/experience images
│
└── project.inlang/             # Inlang i18n configuration
    ├── project_id
    ├── settings.json
    └── cache/
```

### 2️⃣ UI Components (shadcn/ui)

**See:** [docs/ui-components.md](docs/ui-components.md)

**Key Rules:**

- ✅ **ONLY use shadcn/ui** for all UI elements
- ✅ Install with: `npx shadcn@latest add <component>`
- ✅ Style: **New York**
- ✅ Icons: **Lucide React ONLY**
- ❌ **NO custom components** that replicate shadcn/ui functionality
- ❌ **NO other UI libraries**

**Installation:**

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@lateststatic data for portfolio content?

### Components

- [ ] Is this component in the correct folder (`ui/`, `cards/`, `btn/`, `layout/`, `sections/`, `shared/`, etc.)?
- [ ] Is the page file under ~100 lines?
- [ ] Am I using shadcn/ui components (not custom)?

### Data & Hooks

- [ ] Did I create hooks in `hooks/` directory?
- [ ] Did I add static data to `lib/data/` directory?
- [ ] Did I add helper functions to `lib/functions.ts`?
- [ ] Did I add enums to `lib/enums.ts`
### Components

- [ ] Is this component in the correct folder?
- [ ] Is the page file under ~100 lines?
- [ ] Am I using shadcn/ui components (not custom)?

### Data Fetching

- [ ] Did I create action file in `lib/react-query/actions/`?
- [ ] Did I create query hooks in `lib/react-query/queries/`?
- [ ] Did I add query keys to `lib/react-query/keys.ts`?
- [ ] Did I add URLs to `lib/constants/urls.ts` (if needed)?
- [ ] Did I implement all three patterns (limited, infinite, specific)?

### Code Quality

- [ ] All files are TypeScript (`.ts` or `.tsx`)?
- [ ] Server actions marked with `'use server'`?
- [ ] Client components marked with `'use client'`?
- [ ] Using `cn()` for conditional Tailwind classes?

---

## 🎯 Quick Reference

| Need          | Use                   | Location                              |
| ------------- | --------------------- | ------------------------------------- |
| Button        | `shadcn/ui`           | `npx shadcn@latest add button`        |
| Icons         | Lucide React          | `import { Icon } from "lucide-react"` |
| Styling       | Tailwind CSS + `cn()` | `className={cn("...")}`               |
| Page sections | Extract to component  | `components/sections/`                |
- **[Internationalization](docs/internationalization.md)** - i18n setup and usage with next-intl
- **[Theme Management](docs/theme-dark-light-mode.md)** - Dark/light mode implementation
- **[URL Parameters](docs/url-parameters.md)** - nuqs usage for URL state management
- **[Motion & Animations](docs/motion.md)** - Framer Motion usage guidelines
- **[Package Management](docs/package-management.md)** - Bun usage and best practices
- **[Folder & File Conventions](docs/folder-file-conventions.md)** - Naming conventions
- **[Documentation Standards](docs/documentation-standards.md)** - How to document code

### Code Quality

- [ ] All files are TypeScript (`.ts` or `.tsx`)?
- [ ] Server actions marked with `'use server'`?
- [ ] Client components marked with `'use client'`?
- [ ] Using `cn()` for conditional Tailwind classes?
- [ ] Using next-intl for all text content (not hardcoded strings)?
- [ ] Using `useTranslations()` hook for translations?
- [ ] All translation keys exist in `messages/en.json`, `messages/ar.json`, and `messages/ckb.json`?

### Before Submitting

1. Test all functionality
2. Verify translations work in all supported languages (en, ar, ckb)
3. Check dark/light mode compatibility
4. Ensure responsive design works on all devices
5. Run `bun run build` to check for build errors
6. Ask for clarification if uncertai

- [ ] Is the page file under ~100 lines?
- [ ] Am I using shadcn/ui components (not custom)?

### Code Quality

- [ ] All files are TypeScript (`.ts` or `.tsx`)?
- [ ] Client components marked with `'use client'`?
- [ ] Using `cn()` for conditional Tailwind classes?
- [ ] Using i18next for all text content

3. Ask for clarification - do NOT improvise

**Remember:** Consistency is key to maintainability. Follow the patterns, use the approved tools, and keep the codebase clean.
```
