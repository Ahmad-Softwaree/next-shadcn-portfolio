# 🚀 Portfolio - Next.js 15 + TypeScript + Tailwind CSS 4

A modern, multilingual portfolio website built with Next.js 15, TypeScript, and Tailwind CSS 4. Features dark/light mode, internationalization (i18n), and a component-based architecture following strict coding standards.

---

## 📋 Table of Contents

- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Features](#-features)
- [Development Guidelines](#-development-guidelines)
- [Documentation](#-documentation)
- [License](#-license)

---

## 🛠️ Tech Stack

### Core

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **React 19** - UI library with Server Components
- **Bun** - Fast JavaScript runtime and package manager

### Styling & UI

- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Re-usable UI components
- **Lucide React** - Icon library
- **Framer Motion** - Animation library

### Internationalization

- **next-intl** - i18n for Next.js
- Supported languages: English (en), Arabic (ar), Kurdish (ckb)

### State & URL Management

- **nuqs** - Type-safe URL parameter management

### Theme

- **next-themes** - Dark/light mode management

---

## 📁 Project Structure

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

---

## 🚀 Getting Started

### Prerequisites

- **Bun** (v1.0.0 or higher)
- **Node.js** (v18.0.0 or higher)

### Installation

```bash
# Clone the repository
git clone https://github.com/Ahmad-Softwaree/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies using Bun (ONLY package manager allowed)
bun install
```

### Environment Setup

Create a `.env` file in the root directory:

```env
# Add your environment variables here
# Note: ONLY use .env - no .env.local or other variants
```

### Development

```bash
# Start development server
bun run dev

# Build for production
bun run build

# Start production server
bun run start

# Lint code
bun run lint
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

---

## ✨ Features

### 🌍 Internationalization (i18n)

- Support for multiple languages: English (en), Arabic (ar), Kurdish (ckb)
- URL-based locale switching: `/en`, `/ar`, `/ckb`
- Translation files in `messages/` directory
- Powered by **next-intl**

### 🎨 Dark/Light Mode

- System preference detection
- Manual theme switching
- Persistent theme selection
- Powered by **next-themes**

### 📱 Responsive Design

- Mobile-first approach
- Fully responsive across all devices
- Tailwind CSS breakpoints

### 🎯 Portfolio Sections

1. **Hero** - Introduction and call-to-action
2. **About** - Personal information
3. **Services** - Offered services
4. **Experiences** - Work history
5. **Skills** - Technical skills with filtering
6. **Projects** - Portfolio projects with filtering
7. **Certifications** - Professional certifications
8. **Tools** - Technologies and tools
9. **Contact** - Contact form

### 🔍 Advanced Filtering

- **Projects**: Filter by type, tags, and technologies
- **Skills**: Filter by type and level
- **Certifications**: Filter by type
- **Tools**: Filter by category
- URL parameter-based filtering with **nuqs**

### ⚡ Performance

- React Server Components (RSC) by default
- Static data for fast loading
- Optimized images and fonts
- Code splitting and lazy loading

---

## 📝 Development Guidelines

### ⚠️ Critical Rules

1. **Package Manager**: ONLY use `bun` - never npm, yarn, or pnpm
2. **Environment Files**: ONLY use `.env` - no other variants
3. **UI Components**: ONLY use shadcn/ui - no other UI libraries
4. **Icons**: ONLY use Lucide React
5. **Styling**: Tailwind CSS with `cn()` utility
6. **Data Fetching**: Static data (no external API calls)

### 📦 Component Organization

- Extract components when pages exceed ~100 lines
- Place components in appropriate folders:
  - `ui/` - shadcn/ui primitives ONLY
  - `cards/` - Card components
  - `layout/` - Layout components
  - `sections/` - Page sections
  - `shared/` - Globally shared components
  - `btn/` - Button components

### 🎯 Code Quality

- All files must be TypeScript (`.ts` or `.tsx`)
- Use `'use client'` for client components
- Use `'use server'` for server actions
- Use `cn()` for conditional Tailwind classes
- Use next-intl for all text content

### 📚 Adding New Features

Before adding ANY new library:

1. Check if it's in the APPROVED list in `AGENTS.md`
2. Check if existing approved libraries can solve the problem
3. If not listed, **ASK FOR PERMISSION** - do not proceed

---

## 📖 Documentation

Comprehensive documentation is available in the `docs/` directory:

- **[Component Organization](docs/component-organization.md)** - Component structure and organization
- **[UI Components](docs/ui-components.md)** - shadcn/ui usage and styling
- **[Internationalization](docs/internationalization.md)** - i18n setup and usage
- **[Theme Management](docs/theme-dark-light-mode.md)** - Dark/light mode implementation
- **[URL Parameters](docs/url-parameters.md)** - nuqs usage for URL state
- **[Motion & Animations](docs/motion.md)** - Framer Motion usage
- **[Package Management](docs/package-management.md)** - Bun usage guidelines
- **[Folder & File Conventions](docs/folder-file-conventions.md)** - Naming conventions
- **[Documentation Standards](docs/documentation-standards.md)** - How to document code

For AI agents and developers, see **[AGENTS.md](AGENTS.md)** for strict coding standards.

---

## 🤝 Contributing

1. Follow the coding standards in `AGENTS.md`
2. Use ONLY approved libraries
3. Write TypeScript (no JavaScript)
4. Test thoroughly before submitting
5. Follow the component organization guidelines

---

## 📄 License

This project is private and proprietary.

---

## 👨‍💻 Author

**Ahmad Omer**

- Portfolio: [Your Portfolio URL]
- GitHub: [@Ahmad-Softwaree](https://github.com/Ahmad-Softwaree)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [next-intl](https://next-intl-docs.vercel.app/)
- [Lucide Icons](https://lucide.dev/)
- [Framer Motion](https://www.framer.com/motion/)

---

**Built with ❤️ using Next.js 15 and TypeScript**
