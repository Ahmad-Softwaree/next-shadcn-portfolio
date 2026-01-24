# Folder & File Naming Conventions

**⚠️ CRITICAL: READ BEFORE CREATING FILES OR FOLDERS**

This document defines the folder structure and file naming conventions used throughout this project. Consistency is mandatory for maintainability and collaboration.

## 📁 Root Folder Structure

```
/
├── .github/              # GitHub-specific configs and workflows
├── app/                  # Next.js App Router pages
├── components/           # React components
├── docs/                 # Documentation files (⚠️ NEVER create .md in root)
├── hooks/                # Custom React hooks
├── i18n/                 # Internationalization configs
├── lib/                  # Core utilities, configs, and business logic
├── messages/             # Translation files (en.json, ar.json, ckb.json)
├── public/               # Static assets
├── types/                # TypeScript type definitions
├── project.inlang/       # Inlang i18n configuration
└── [config files]        # Root-level config files only
```

## 🗂️ Detailed Folder Conventions

### `/app` - Next.js Routes

**Pattern**: Follow Next.js App Router conventions

```
app/
├── layout.tsx           # Root layout
├── page.tsx             # Root page redirect
├── not-found.tsx        # Global 404 page
├── [locale]/
│   ├── page.tsx         # Home page
│   ├── layout.tsx       # Locale layout
│   ├── globals.css      # Global styles
│   ├── providers.tsx    # Context providers
│   ├── loading.tsx      # Loading state
│   ├── error.tsx        # Error boundary
│   ├── not-found.tsx    # Locale 404 page
│   ├── certifications/  # Certifications page
│   ├── projects/        # Projects page
│   ├── skills/          # Skills page
│   └── tools/           # Tools page
└── api/
    └── contact/         # Contact form API
```

**Rules**:

- Use `page.tsx` for pages
- Use `layout.tsx` for layouts
- Use `route.ts` for API routes
- Use `[param]` for dynamic segments
- Keep route folders lowercase with hyphens

### `/components` - React Components

**Structure**:

```
components/
├── ui/                     # shadcn/ui components
│   ├── button.tsx
│   ├── card.tsx
│   └── [component].tsx
├── cards/                  # Card components
│   ├── certification-card.tsx
│   ├── experience-card.tsx
│   ├── project-card.tsx
│   ├── service-card.tsx
│   ├── skill-card.tsx
│   ├── special-tool-card.tsx
│   └── tool-card.tsx
├── btn/                    # Button components
│   ├── certification-type-btn.tsx
│   ├── project-tag-btn.tsx
│   ├── project-tech-btn.tsx
│   ├── project-type-btn.tsx
│   ├── skill-level-btn.tsx
│   ├── skill-type-btn.tsx
│   └── tool-type-btn.tsx
├── layout/                 # Layout components
│   ├── header.tsx
│   ├── footer.tsx
│   ├── logo.tsx
│   ├── nav-menu.tsx
│   └── mobile-navigation.tsx
├── sections/               # Page sections
│   ├── hero.tsx
│   ├── about.tsx
│   ├── services.tsx
│   ├── experiences.tsx
│   ├── skills.tsx
│   ├── projects.tsx
│   ├── certifications.tsx
│   ├── tools.tsx
│   └── contact.tsx
├── shared/                 # Shared/reusable components
│   ├── animate.tsx
│   ├── Loading.tsx
│   ├── NoData.tsx
│   ├── Search.tsx
│   └── scroll-to-top.tsx
├── certifications/         # Certification page components
│   ├── CertificationsHeader.tsx
│   ├── CertificationsContent.tsx
│   └── CertificationGrid.tsx
├── projects/               # Projects page components
│   ├── ProjectsHeader.tsx
│   ├── ProjectsContent.tsx
│   └── ProjectsGrid.tsx
├── skills/                 # Skills page components
│   ├── SkillsHeader.tsx
│   ├── SkillsFilter.tsx
│   └── SkillsGrid.tsx
├── tools/                  # Tools page components
│   ├── ToolsHeader.tsx
│   ├── ToolsContent.tsx
│   ├── ToolsGrid.tsx
│   └── ContactHeader.tsx
├── lang-toggle.tsx         # Language switcher
├── theme-toggle.tsx        # Dark/light mode toggle
└── NotFound.tsx            # 404 component
```

**Naming Rules**:

| Type              | Pattern               | Example                               |
| ----------------- | --------------------- | ------------------------------------- |
| UI Components     | `lowercase-kebab.tsx` | `button.tsx`, `card.tsx`              |
| Shared Components | `PascalCase.tsx`      | `Loading.tsx`, `NoData.tsx`           |
| Cards             | `[entity]-card.tsx`   | `project-card.tsx`, `skill-card.tsx`  |
| Buttons           | `[name]-btn.tsx`      | `skill-type-btn.tsx`                  |
| Sections          | `[name].tsx`          | `hero.tsx`, `about.tsx`               |
| Page Components   | `PascalCase.tsx`      | `ProjectsHeader.tsx`                  |
| Toggles/Utils     | `[name]-toggle.tsx`   | `theme-toggle.tsx`, `lang-toggle.tsx` |

**Key Principles**:

- `ui/` folder: Always lowercase with hyphens (shadcn convention)
- Other component folders: PascalCase for components
- Group by feature/type, not by component type alone
- Variants use dot notation: `Component.Variant.tsx`

### `/hooks` - Custom React Hooks

```
hooks/
├── useCertificationQueries.tsx
├── useProjectQueries.tsx
├── useSearchQuery.tsx
├── useSkillQueries.tsx
└── useToolsQueries.tsx
```

**Naming Rules**:

| Pattern         | When to Use          | Example                      |
| --------------- | -------------------- | ---------------------------- |
| `use[Name].tsx` | Hooks with JSX       | `useProjectQueries.tsx`      |
| `use-[name].ts` | Simple utility hooks | `use-date.ts`, `use-auth.ts` |

**Key Principles**:

- Always start with `use` prefix
- camelCase for `.tsx` files with JSX
- Lowercase with hyphens for `.ts` files

### `/i18n` - Internationalization

```
i18n/
├── navigation.ts        # i18n navigation
├── request.ts           # i18n request handler
└── routing.ts           # i18n routing config
```

**Rules**:

- Config files: lowercase with extension `.ts`
- Powered by next-intl
- No `.d.ts` files needed

### `/messages` - Translation Files

```
messages/
├── en.json              # English translations
├── ar.json              # Arabic translations
└── ckb.json             # Kurdish translations
```

**Rules**:

- Locale files: ISO 639-1 language code + `.json`
- All files must have identical structure
- Used by next-intl

### `/lib` - Core Library Code

```
lib/
├── config/              # Configuration files
│   └── [config-files]
├── data/                # Static data (projects, skills, etc.)
│   ├── projects.ts
│   ├── skills.ts
│   ├── certifications.ts
│   └── [entity].ts
├── fetch/               # Data fetching utilities
│   └── [fetch-utils]
├── enums.ts             # App-wide enums and constants
├── utils.ts             # General utility functions
└── functions.ts         # Business logic functions
```

**Naming Conventions**:

| File Type | Pattern               | Example                    |
| --------- | --------------------- | -------------------------- |
| Config    | `[name].config.ts`    | `cookie.config.ts`         |
| Data      | `[entity].ts`         | `projects.ts`, `skills.ts` |
| Utils     | `[purpose].ts`        | `utils.ts`, `functions.ts` |
| Constants | `[type]s.ts` (plural) | `enums.ts`                 |

**Key Principles**:

- Config files get `.config.ts` suffix
- Data files named after entity (plural)
- Use `index.ts` for main exports from a folder

### `/public` - Static Assets

```
public/
├── certificates/        # Certificate images
├── fonts/               # Custom fonts
├── pdf/                 # PDF files
├── projects/            # Project images
├── tools/               # Tool images
├── works/               # Work/experience images
└── [static-files]
```

**Rules**:

- Fonts: Organized by font family name
- Images: Organized by category (lowercase folders)
- All static files should be in meaningful subfolders

### `/types` - TypeScript Definitions

```
types/
└── types.ts             # Global type definitions
```

**Naming Rules**:

| Type          | Pattern        | Example      |
| ------------- | -------------- | ------------ |
| Global types  | `types.ts`     | `types.ts`   |
| Feature types | `[feature].ts` | `project.ts` |

**Key Principles**:

- Use `.ts` for exported types and interfaces
- Keep global types in `types.ts`

### `/docs` - Documentation

```
docs/
├── authentication.md
├── data-fetching.md
├── internationalization.md
└── [topic].md
```

**Pattern**: `[topic].md` (lowercase with hyphens)

**⚠️ CRITICAL**: NEVER create `.md` files in the root directory. All documentation goes in `/docs`.

## 📄 File Naming Rules Summary

### TypeScript/JavaScript Files

| File Type                | Extension | Pattern               | Example                     |
| ------------------------ | --------- | --------------------- | --------------------------- |
| React Component (shared) | `.tsx`    | `PascalCase.tsx`      | `Loading.tsx`, `NoData.tsx` |
| React Component (ui)     | `.tsx`    | `lowercase-kebab.tsx` | `button.tsx`                |
| Hook (with queries)      | `.tsx`    | `use[Name].tsx`       | `useProjectQueries.tsx`     |
| Hook (utility)           | `.ts`     | `use-[name].ts`       | `use-date.ts`               |
| Utility function         | `.ts`     | `[purpose].ts`        | `utils.ts`, `functions.ts`  |
| Configuration            | `.ts`     | `[name].config.ts`    | `cookie.config.ts`          |
| Data                     | `.ts`     | `[entity].ts`         | `projects.ts`, `skills.ts`  |
| Types                    | `.ts`     | `types.ts`            | `types.ts`                  |
| Constants                | `.ts`     | `enums.ts`            | `enums.ts`                  |

### Special Files

| File           | Purpose                      | Pattern                             |
| -------------- | ---------------------------- | ----------------------------------- |
| `enums.ts`     | App-wide constants and enums | Singular, exports constants         |
| `utils.ts`     | General utilities            | Singular, mixed utility functions   |
| `functions.ts` | Business logic               | Singular, domain-specific functions |
| `types.ts`     | Type definitions             | Singular, exports types/interfaces  |

## 🎯 Content Patterns

### `enums.ts` Pattern

````typescript
export const ENUMs = {
  [CATEGORY]: {
### `enums.ts` Pattern

```typescript
export const LOCALES = ["en", "ar", "ckb"] as const;
export type Locale = typeof LOCALES[number];

export const SKILL_LEVELS = ["beginner", "intermediate", "advanced", "expert"] as const;
export type SkillLevel = typeof SKILL_LEVELS[number];
````

### Static Data Pattern

```typescript
// lib/data/projects.ts
import type { Project } from "@/types/types";

export const projects: Project[] = [
  {
    id: 1,
    name: "Portfolio",
    description: "Personal portfolio website",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/portfolio.png",
    // ... more fields
  },
];
```

## ✅ Best Practices

### DO

- ✅ Use lowercase with hyphens for `ui/` components
- ✅ Use PascalCase for other React components
- ✅ Use `.config.ts` suffix for configuration files
- ✅ Group related files in feature folders
- ✅ Keep all documentation in `/docs`
- ✅ Use static data for portfolio content
- ✅ Create hooks for data filtering logic
- ✅ Use next-intl for all translations

### DON'T

- ❌ Don't mix naming conventions within the same folder
- ❌ Don't create `.md` files in root
- ❌ Don't use camelCase for file names (except hooks)
- ❌ Don't create deeply nested folder structures (max 3-4 levels)
- ❌ Don't put components in `/lib`
- ❌ Don't put utilities in `/components`
- ❌ Don't mix business logic with UI components
- ❌ Don't use abbreviations in file names
- ❌ Don't create generic folder names like `/misc` or `/other`

## 📋 Quick Reference Checklist

When creating a new file, ask:

1. ☐ Is it a React component? → `/components/[category]/[Name].tsx`
2. ☐ Is it a custom hook? → `/hooks/use[Name].tsx`
3. ☐ Is it a utility function? → `/lib/[purpose].ts`
4. ☐ Is it a configuration? → `/lib/config/[name].config.ts`
5. ☐ Is it static data? → `/lib/data/[entity].ts`
6. ☐ Is it a type definition? → `/types/types.ts`
7. ☐ Is it documentation? → `/docs/[topic].md`
8. ☐ Is it a translation? → `/messages/[locale].json`

## 🚀 Examples by Feature

### Adding Portfolio Content (e.g., "Projects")

```
lib/
└── data/
    └── projects.ts             # Project data

types/
└── types.ts                    # Add Project type

hooks/
└── useProjectQueries.tsx       # Filter hooks

components/
├── cards/
│   └── project-card.tsx        # Project card component
└── projects/
    ├── ProjectsHeader.tsx
    ├── ProjectsContent.tsx
    └── ProjectsGrid.tsx

app/
└── [locale]/
    └── projects/
        └── page.tsx            # Projects page
```

### Adding a New Page Section

```
components/
└── sections/
    └── [section-name].tsx

messages/
├── en.json                     # Add section translations
├── ar.json                     # Add section translations
└── ckb.json                    # Add section translations
```

---

**Version**: 2.0.0  
**Last Updated**: January 24, 2026
