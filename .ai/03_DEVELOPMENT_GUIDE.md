# Healthmed Enterprise AI Memory System - Development Guide

> **IMPORTANT FOR ALL AI ASSISTANTS**
> Read all files inside the `.ai` folder before making any code changes. This guide outlines local project conventions, directory structures, Tailwind utility restrictions, and implementation rules.

This guide provides the official software engineering rules, folder patterns, and style compilation rules for the Healthmed web platform.

---

## 1. Directory Structure Blueprint

All directories and core files are arranged within a logical, clean layout. Maintain this structure and do not introduce arbitrary top-level subfolders.

```text
src/
├── assets/             # Raw media assets, SVG logos, and mockup images
├── components/         # Shared, site-wide UI widgets and elements
│   ├── common/         # Standalone cross-cutting behaviors (e.g., ScrollToTop, WhatsApp)
│   ├── layout/         # Base framework scaffolding (e.g., Header, Footer)
│   └── ui/             # Atomic design components (Button, Badge, Heading)
├── data/               # Typed JSON collections and data records (avoid hardcoding lists in JSX)
├── hooks/              # Global custom React hooks (useGsapAnimation, useIntersectionObserver)
├── layouts/            # Page structures and container layouts
├── pages/              # High-level page routing files (Home, Product, Solutions)
├── sections/           # Modular page-specific sub-sections (organized by route)
│   └── home/           # Home-page specific blocks (Hero, Modules, Partners, WhyChooseUs)
├── styles/             # Stylesheet configuration, CSS modules, variables
└── utils/              # Independent formatting engines and clinical utility libraries
```

---

## 2. React Authoring Standards

* **Functional Component Model:** All components must use ES6 arrow syntax and state their typescript interface clearly:
  ```tsx
  export const ClinicalWidget: React.FC<WidgetProps> = ({ id, active }) => {
    return (
      <div id={id} className={`clinical-widget ${active ? 'widget-active' : ''}`}>
        {/* Content */}
      </div>
    );
  };
  ```
* **Memoization Protocols:** Optimize rendering pipelines on heavy statistics blocks, data views, and mapping lists using `useMemo` and `useCallback`:
  ```tsx
  const sortedReports = useMemo(() => {
    return [...reports].sort((a, b) => b.timestamp - a.timestamp);
  }, [reports]);
  ```
* **Separation of Concerns:** Keep your JSX files focused on component rendering. Extract complex static data structures to the `src/data/` folder and business helper utilities to `src/utils/`.

---

## 3. Strict Tailwind CSS Constraints (CRITICAL)

The Healthmed frontend is styled using **semantic CSS stylesheets**. Tailwind utility classes are restricted to **Structural and Layout-only roles**.

```
                        STRICT WORKSPACE STYLING RULES
       ┌──────────────────────────────────────────────────────────────┐
       │   ALLOWED TAILWIND UTILITIES (Layout Engine Only)            │
       ├──────────────────────────────────────────────────────────────┤
       │  - flex, grid, gap, items-*, justify-*                       │
       │  - block, inline-block, hidden                               │
       │  - relative, absolute, sticky, fixed, inset-*                │
       │  - overflow-*, z-*                                           │
       └──────────────────────────────┬───────────────────────────────┘
                                      │
                                      ▼
       ┌──────────────────────────────────────────────────────────────┐
       │   STRICTLY FORBIDDEN TAILWIND UTILITIES (Must go in CSS)     │
       ├──────────────────────────────────────────────────────────────┤
       │  - Color classes: bg-[#...], text-[#...], border-[#...]       │
       │  - Typography details: font-serif, leading-*, tracking-*     │
       │  - Spacing blocks: p-*, m-*, px-*, py-*, pt-*                │
       │  - Corner styles & Shadow elements: rounded-*, shadow-*      │
       └──────────────────────────────────────────────────────────────┘
```

### Visual Styling Rules & Class Matching Examples

* **❌ INCORRECT / FORBIDDEN JSX COMPOSITION:**
  ```tsx
  /* DO NOT use raw Tailwind styling utilities in JSX */
  <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-8 md:p-14 shadow-[0_10px_45px_rgba(0,0,0,0.03)] flex flex-col space-y-6">
    <h3 className="font-serif text-3xl md:text-[38px] text-brand-charcoal leading-tight">
      Patient Care
    </h3>
  </div>
  ```

* **✅ CORRECT EXECUTABLE COMPOSITION:**
  ```tsx
  /* DO use descriptive class names and reference structural layouts */
  import './Modules.css';

  export default function HealthcareCard() {
    return (
      <div className="modules-card flex flex-col">
        <h3 className="modules-card-title">
          Patient Care
        </h3>
      </div>
    );
  }
  ```
  ```css
  /* (Modules.css) Define all layout styles inside the stylesheet */
  .modules-card {
    background-color: var(--color-brand-white);
    border: 1px solid var(--color-brand-gray-100);
    border-radius: var(--radius-3xl);
    padding: var(--spacing-lg);
    box-shadow: var(--shadow-stage);
  }

  .modules-card-title {
    font-family: var(--font-serif);
    font-size: 1.875rem;
    color: var(--color-brand-charcoal);
    line-height: 1.12;
  }

  @media (min-width: 768px) {
    .modules-card {
      padding: var(--spacing-xl);
    }
    .modules-card-title {
      font-size: 2.375rem;
    }
  }
  ```

---

## 4. CSS Organization Rules

* Every component or page section must maintain its own stylesheet inside its local workspace (e.g. `src/sections/home/Modules.css` for `src/sections/home/Modules.tsx`).
* Components must import their local stylesheet directly at the top of the file.
* Keep class structures modular and flat. Do not build overly deep nesting loops, as this complicates future code adjustments.

---

## 5. State Management System

* **Local Component State:** Standardize state management using `useState`. Avoid synchronizing props directly inside redundant `useEffect` triggers.
* **Derived State Patterns:** Always compute downstream indicators dynamically during rendering:
  ```ts
  // ✅ Correct derived state implementation
  const activeTabsCount = tabs.filter(t => t.enabled).length;
  ```
* **Context Utilization:** Leverage shared React context *only* for global configuration settings (such as active user sessions, clinical notification hubs, or workspace view modes).

---

## 6. Route Scaffolding

* Pages must reside in `src/pages/`.
* Below-the-fold heavy modules on key pages must be code-split and loaded using React's lazy loading:
  ```tsx
  import React, { Suspense, lazy } from 'react';
  const Modules = lazy(() => import('../sections/home/Modules'));
  ```

---

## 7. Motion & Interaction Standards

All structural transitions must run cleanly on GPU threads using **Framer Motion** or **GSAP**:

* **Spring Transitions for UI Elements:** Use spring dynamics for structural elements such as active underlines:
  ```tsx
  <motion.div 
    layoutId="activeTabUnderline" 
    className="modules-tab-underline absolute bottom-0 left-0 right-0 z-10" 
    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
  />
  ```
* **Subtle Fades for Backgrounds:** Use tween/ease curves for gradient background entries:
  ```tsx
  <motion.div
    layoutId="activeTabBackground"
    className="modules-tab-bg-gradient absolute inset-x-0 top-0 bottom-0"
    transition={{ type: 'tween', duration: 0.25 }}
  />
  ```
* **Always Clean Up Animation Events:** Ensure any GSAP or manual event handlers are correctly cleaned up on component unmount:
  ```ts
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create animations
    });
    return () => ctx.revert();
  }, []);
  ```

---

## 8. Development Verification Protocols

Before committing or pushing any features, verify that your code adheres to these coding guidelines:

```
[ ] Visual styling uses semantic custom CSS classes, NOT raw utility Tailwind.
[ ] CSS variables map to official design system tokens.
[ ] All heavy visual modules load lazily via Suspense.
[ ] TypeScript declarations are strictly typed, avoiding the use of 'any'.
[ ] Custom layouts preserve correct accessibility tags, focus rings, and ARIA attributes.
[ ] Static asset collections (e.g., menus, feature items) reside in data modules inside `src/data/`.
```
