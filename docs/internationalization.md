# Internationalization (i18n) with next-intl

**⚠️ CRITICAL: READ BEFORE IMPLEMENTING MULTI-LANGUAGE FEATURES**

This document outlines the internationalization standards and patterns used in this project with **next-intl**.

## 📋 Overview

This project uses **next-intl** for multi-language support with the following languages:

- **English (en)** - Default language, LTR
- **Arabic (ar)** - RTL
- **Kurdish/Sorani (ckb)** - RTL

## 🏗️ Architecture

### Directory Structure

```
i18n/
  ├── navigation.ts        # next-intl navigation configuration
  ├── request.ts           # next-intl request configuration
  └── routing.ts           # next-intl routing configuration
messages/
  ├── en.json              # English translations
  ├── ar.json              # Arabic translations
  └── ckb.json             # Kurdish translations
```

### Configuration Files

**File**: `i18n/request.ts`

```typescript
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
```

**File**: `i18n/routing.ts`

```typescript
import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "ar", "ckb"],
  defaultLocale: "en",
});
```

**Key Points**:

- Configure locales and default locale
- Set up routing for internationalized paths
- Messages are loaded dynamically per locale

### TypeScript Definitions

**next-intl** provides built-in TypeScript support. You can create type-safe translations by:

1. Using the `useTranslations` hook with namespace parameter
2. TypeScript will infer types from your JSON message files
3. Autocomplete works automatically in supported IDEs

**Benefits**:

- Full TypeScript autocomplete for translation keys
- Type safety for all translations
- Compile-time errors for missing keys

## 🎨 Next.js Integration

**File**: `providers/language-provider.tsx`

````typescript
"use client";

**File**: `app/[locale]/layout.tsx`

```typescript
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming locale is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client side
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' || locale === 'ckb' ? 'rtl' : 'ltr'}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
````

**Key Responsibilities**:

1. Wrap app with `NextIntlClientProvider`
2. Validate incoming locale parameter
3. Load messages for the current locale
4. Set text direction (`ltr` or `rtl`) based on locale
5. Apply language-specific attributes to HTML tag

## 🔄 Language Toggle Component

**File**: `components/lang-toggle.tsx`

```typescript
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';

export function LangToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const setSelectedLang = (selectedLang: string) => {
    router.replace(pathname, { locale: selectedLang });
  };

  return <DropdownMenu>{/* Dropdown implementation */}</DropdownMenu>;
}}
```

**Pattern**:

- Export `setLanguage` helper function
- Change i18n language
- Save to cookie
- Update DOM classes and direction
- Dynamic language list from i18n resources

## 📝 Translation JSON Structure

**File**: `i18n/locale/en.json`

```json
{
  "app": {
    "title": "Link Shortener",
    "description": "Shorten your links with ease"
  },
  "header": {
    "sign_in": "Sign In",
    "sign_up": "Sign Up"
  },
  "home": {
    "hero": {
      "title_line1": "Shorten Your Links,",
      "description": "Transform long URLs..."
    }
  }
}
```

**Standards**:

- Use nested objects for organization
- Group by feature/section (e.g., `home`, `header`, `dashboard`)
- Use descriptive, hierarchical keys
- Keep structure identical across all language files
- All JSON files must have the exact same keys

## 🎯 Usage in Components

### Client Components

```typescript
"use client";

import { useTranslations } from "next-intl";

export function MyComponent() {
  const t = useTranslations("home");

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </div>
  );
}
```

### Server Components

```typescript
import { useTranslations } from "next-intl";

export default function ServerComponent() {
  const t = useTranslations("namespace");

  return <div>{t("key")}</div>;
}
```

**Key Points**:

- `useTranslations` works in both Server and Client Components
- Pass namespace as parameter: `useTranslations("namespace")`
- Use keys without namespace prefix: `t("key")` not `t("namespace.key")`
- For root-level keys, omit namespace or use empty string

## 🔗 Navigation

**File**: `i18n/navigation.ts`

```typescript
import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
```

**Usage**:

```typescript
import { Link, useRouter, usePathname } from '@/i18n/navigation';

// Automatically handles locale prefixes
<Link href="/about">About</Link>

// In components
const router = useRouter();
router.push('/projects');

const pathname = usePathname();
```

## 🎨 Font & Direction Handling

### CSS Classes

**File**: `app/globals.css`

```css
.english_font {
  /* English font styles */
}

.arabic_font {
  /* Arabic font styles */
}

.kurdish_font {
  /* Kurdish font styles */
}
```

### RTL Support

**Always set text direction on the body element**:

```typescript
document.dir = "ltr"; // For English
document.dir = "rtl"; // For Arabic/Kurdish
```

## 🔄 Adding a New Language

1. **Create translation file**: `messages/[lang-code].json`
2. **Update routing config** in `i18n/routing.ts`:
   ```typescript
   export const routing = defineRouting({
     locales: ["en", "ar", "ckb", "new-lang"],
     defaultLocale: "en",
   });
   ```
3. **Add font class** in `globals.css` (if needed)
4. **Update layout** to handle new locale's text direction
5. **Add language names** to translation files:
   ```json
   "langs": {
     "newLang": "New Language Name"
   }
   ```

## 📚 Best Practices

### ✅ DO

- Always use the `t()` function for user-facing text
- Keep translation keys descriptive and hierarchical
- Maintain identical structure across all language files
- Use `useTranslations` with namespace parameter for better organization
- Test with all languages, especially RTL
- Use TypeScript autocomplete for translation keys
- Leverage Server Components for better performance

### ❌ DON'T

- Don't hardcode user-facing strings
- Don't forget to add new keys to ALL language files
- Don't nest keys too deeply (max 3-4 levels)
- Don't use special characters in translation keys
- Don't forget to set text direction for RTL languages

## 🚀 Quick Start Checklist

When adding new translatable content:

1. ☐ Add translation keys to all JSON files (`en.json`, `ar.json`, `ckb.json`)
2. ☐ Import `useTranslations` from `next-intl`
3. ☐ Use `const t = useTranslations('namespace')` with appropriate namespace
4. ☐ Use `t("key")` for translations (without namespace prefix in key)
5. ☐ Test in all languages
6. ☐ Verify RTL layout for Arabic/Kurdish

## 📦 Required Packages

```json
{
  "dependencies": {
    "next-intl": "latest"
  }
}
```

Install with: `bun add next-intl`

---

**Version**: 2.0.0  
**Last Updated**: January 23, 2026
