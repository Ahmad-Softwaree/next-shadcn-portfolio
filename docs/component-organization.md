# Component Organization - UI Structure & Code Separation

## Overview

To keep pages clean and maintainable, **separate complex UI into logical components**. Never let page files become bloated with hundreds of lines of JSX. This application follows a strict component organization pattern.

## Core Principles

- ✅ **Extract components when pages exceed ~100 lines**
- ✅ **Organize components by type and purpose**
- ✅ **Keep page files focused on layout and data fetching**
- ✅ **Reusable components go in organized folders**
- ❌ **NO massive page files with hundreds of lines of JSX**
- ❌ **NO mixing unrelated components in the same file**
- 🎯 **Single Responsibility Principle for components**

## Folder Structure

```
components/
├── ui/                    # shadcn/ui primitives (button, card, input, etc.)
│   ├── button.tsx
│   ├── card.tsx
│   └── ...
│
├── cards/                 # Card components for different entities
│   ├── certification-card.tsx
│   ├── experience-card.tsx
│   ├── project-card.tsx
│   ├── service-card.tsx
│   ├── skill-card.tsx
│   ├── special-tool-card.tsx
│   └── tool-card.tsx
│
├── btn/                   # Button components for filters and actions
│   ├── certification-type-btn.tsx
│   ├── project-tag-btn.tsx
│   ├── project-tech-btn.tsx
│   ├── project-type-btn.tsx
│   ├── skill-level-btn.tsx
│   ├── skill-type-btn.tsx
│   └── tool-type-btn.tsx
│
├── layout/                # Layout components
│   ├── header.tsx
│   ├── footer.tsx
│   ├── logo.tsx
│   ├── nav-menu.tsx
│   └── mobile-navigation.tsx
│
├── sections/              # Page sections (hero, about, services, etc.)
│   ├── hero.tsx
│   ├── about.tsx
│   ├── services.tsx
│   ├── experiences.tsx
│   ├── skills.tsx
│   ├── projects.tsx
│   ├── certifications.tsx
│   ├── tools.tsx
│   └── contact.tsx
│
├── shared/                # Globally shared components
│   ├── animate.tsx        # Animation wrapper (framer-motion)
│   ├── Loading.tsx
│   ├── NoData.tsx
│   ├── Search.tsx
│   └── scroll-to-top.tsx
│
├── certifications/        # Certification page specific components
│   ├── CertificationsHeader.tsx
│   ├── CertificationsContent.tsx
│   └── CertificationGrid.tsx
│
├── projects/              # Projects page specific components
│   ├── ProjectsHeader.tsx
│   ├── ProjectsContent.tsx
│   └── ProjectsGrid.tsx
│
├── skills/                # Skills page specific components
│   ├── SkillsHeader.tsx
│   ├── SkillsFilter.tsx
│   └── SkillsGrid.tsx
│
├── tools/                 # Tools page specific components
│   ├── ToolsHeader.tsx
│   ├── ToolsContent.tsx
│   ├── ToolsGrid.tsx
│   └── ContactHeader.tsx
│
├── lang-toggle.tsx        # Language switcher
├── theme-toggle.tsx       # Dark/light mode toggle
└── NotFound.tsx           # 404 component
```

## When to Extract a Component

### ✅ Extract when:

- Page file exceeds ~100 lines
- UI element is repeated across multiple pages
- Logic is complex or self-contained
- Component has its own state management
- Testing would benefit from isolation
- Readability is improved by separation

### ❌ Keep inline when:

- Component is used only once and is very simple (<20 lines)
- Logic is tightly coupled to parent and won't be reused
- Extraction would reduce clarity

## Component Categories

### 1. UI Primitives (`/components/ui`)

**shadcn/ui components** - managed by shadcn CLI, do not manually create here.

```bash
npx shadcn@latest add button
npx shadcn@latest add card
```

### 2. Cards (`/components/cards`)

Reusable card components that display portfolio content (projects, skills, certifications, etc.).

```tsx
// components/cards/project-card.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{project.description}</p>
        <div className="flex gap-2 mt-4 flex-wrap">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
```

### 3. Filter Buttons (`/components/btn`)

Custom button components for filtering and actions.

```tsx
// components/btn/skill-type-btn.tsx
"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SkillTypeButtonProps {
  type: string;
  isActive: boolean;
  onClick: () => void;
}

export function SkillTypeButton({
  type,
  isActive,
  onClick,
}: SkillTypeButtonProps) {
  return (
    <Button
      variant={isActive ? "default" : "outline"}
      size="sm"
      onClick={onClick}
      className={cn("rounded-full", isActive && "bg-primary")}>
      {type}
    </Button>
  );
}
```

### 4. Layout Components (`/components/layout`)

Structural components for page layouts (header, footer, navigation).

```tsx
// components/layout/header.tsx
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { LangToggle } from "@/components/lang-toggle";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        <NavMenu />
        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
```

### 5. Sections (`/components/sections`)

Page section components for the home page (hero, about, services, etc.).

```tsx
// components/sections/hero.tsx
import { useTranslations } from "next-intl";
import { AnimateOnScroll } from "@/components/shared/animate";
import { Button } from "@/components/ui/button";

export function Hero() {
  const t = useTranslations("home.hero");

  return (
    <section className="container mx-auto px-4 py-20">
      <AnimateOnScroll animation="fade-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{t("title")}</h1>
        <p className="text-xl text-muted-foreground mb-8">{t("description")}</p>
        <Button size="lg">{t("cta")}</Button>
      </AnimateOnScroll>
    </section>
  );
}
```

### 6. Page-Specific Components

Components organized by page feature (`/components/certifications`, `/components/projects`, `/components/skills`, `/components/tools`).

```tsx
// components/projects/ProjectsHeader.tsx
import { useTranslations } from "next-intl";

export function ProjectsHeader() {
  const t = useTranslations("projects");

  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-2">{t("title")}</h1>
      <p className="text-muted-foreground">{t("description")}</p>
    </div>
  );
}
```

### 7. Shared Utilities (`/components/shared`)

Globally reusable utility components.

````tsx
// components/shared/loading-spinner.tsx
export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
    </div>
  );
}

Globally reusable components (loading, no data, search, animations).

```tsx
// components/shared/NoData.tsx
import { useTranslations } from "next-intl";

interface NoDataProps {
  message?: string;
}

export function NoData({ message }: NoDataProps) {
  const t = useTranslations("common");

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <p className="text-muted-foreground">
        {message || t("no_data")}
      </p>
    </div>
  );
}
````

## Data & Static Content

### Static Data Pattern

This portfolio uses static data instead of API calls. Data is stored in `/lib/data/`.

```tsx
// lib/data/projects.ts
import type { Project } from "@/types/types";

export const projects: Project[] = [
  {
    id: 1,
    name: "Portfolio Website",
    description: "Personal portfolio built with Next.js 15",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/portfolio.png",
    url: "https://example.com",
    github: "https://github.com/user/portfolio",
  },
  // More projects...
];
```

### Custom Hooks for Data

Create hooks in `/hooks/` for data filtering and search logic.

```tsx
// hooks/useProjectQueries.tsx
"use client";

import { parseAsArrayOf, parseAsString, useQueryStates } from "nuqs";

export function useProjectQueries() {
  const [queries, setQueries] = useQueryStates({
    type: parseAsString,
    tags: parseAsArrayOf(parseAsString),
    tech: parseAsArrayOf(parseAsString),
  });

  return { queries, setQueries };
}
```

## Page File Pattern

Pages should be **thin** - focused on layout and composition.

### ❌ Bad - Bloated Page (500+ lines)

```tsx
// app/[locale]/projects/page.tsx - TOO MUCH CODE
export default function ProjectsPage() {
  return (
    <div>
      {/* 100 lines of header JSX */}
      {/* 200 lines of filter JSX */}
      {/* 200 lines of grid JSX */}
    </div>
  );
}
```

### ✅ Good - Clean Page (~30 lines)

```tsx
// app/[locale]/projects/page.tsx - CLEAN
import { ProjectsHeader } from "@/components/projects/ProjectsHeader";
import { ProjectsContent } from "@/components/projects/ProjectsContent";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ProjectsHeader />
      <ProjectsContent />
    </div>
  );
}

// components/projects/ProjectsContent.tsx
export function ProjectsContent() {
  const { queries } = useProjectQueries();
  const { search } = useSearchQuery();

  // Filter logic here

  return (
    <>
      {/* Filter buttons */}
      <ProjectsGrid projects={filteredProjects} />
    </>
  );
}
```

);
}

````

## Naming Conventions

### File Names

- **Pattern**: `kebab-case.tsx`
- **Examples**: `link-card.tsx`, `create-link-form.tsx`, `hero-section.tsx`

### Component Names

- **Pattern**: `PascalCase`
- **Examples**: `LinkCard`, `CreateLinkForm`, `HeroSection`

### Props Interfaces

- **Pattern**: `[ComponentName]Props`
- **Example**: `interface LinkCardProps { ... }`

## Client vs Server Components

### Server Components (default)

Components that:

- Fetch data
- Don't use hooks (`useState`, `useEffect`, etc.)
- Don't have interactivity
- Don't use browser APIs

```tsx
// components/dashboard/link-list.tsx (Server Component)
import { LinkCard } from "@/components/cards/link-card";

export function LinkList({ links }: { links: Link[] }) {
  return (
    <div className="grid gap-4">
      {links.map((link) => (
        <LinkCard key={link.id} link={link} />
      ))}
    </div>
  );
}
````

### Client Components

Components that:

- Use React hooks
- Handle user interactions
- Access browser APIs
- Use event handlers

```tsx
// components/forms/link-form.tsx (Client Component)
"use client";

import { useState } from "react";

export function LinkForm() {
  const [value, setValue] = useState("");
  // ... interactive logic
}
```

## Import Organization

Organize imports in this order:

```tsx
// 1. React & Next.js
import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { redirect } from "next/navigation";

// 2. Third-party libraries
import { UserButton } from "@clerk/nextjs";

// 3. UI components
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// 4. Custom components
import { LinkCard } from "@/components/cards/link-card";
import { HeroSection } from "@/components/sections/hero-section";

// 5. Actions & utilities
import { createLink } from "@/actions/links";
import { cn } from "@/lib/utils";

// 6. Types
import type { Link } from "@/db/schema";

// 7. Icons
import { Zap, Link2 } from "lucide-react";
```

## Extraction Checklist

When extracting a component:

- [ ] Identify logical boundaries (what belongs together)
- [ ] Determine the appropriate folder based on component type
- [ ] Create file with proper naming (`kebab-case.tsx`)
- [ ] Add `"use client"` directive if needed
- [ ] Define clear prop interface
- [ ] Add proper TypeScript types
- [ ] Import in parent file
- [ ] Verify component renders correctly
- [ ] Check for any missing dependencies

## Best Practices

1. **Keep it simple** - One component, one purpose
2. **Props over configuration** - Pass data via props, not global state
3. **Composition over complexity** - Break down complex components
4. **Type everything** - Use TypeScript interfaces for all props
5. **Client directive placement** - Only mark interactive components as client
6. **Consistent naming** - Follow established patterns
7. **Logical grouping** - Organize by feature/type, not arbitrarily
8. **Avoid prop drilling** - If passing props through 3+ levels, reconsider structure
9. **Toast notifications** - ALWAYS use toast inside react-query file functions (mutation callbacks) if available, NOT directly inside components

---

**Last Updated**: January 5, 2026
**Version**: 1.0.0
