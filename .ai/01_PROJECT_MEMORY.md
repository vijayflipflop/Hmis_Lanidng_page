# Healthmed Enterprise AI Memory System - Project Memory

> **IMPORTANT FOR ALL AI ASSISTANTS**
> Read all files inside the `.ai` folder before making any code changes. These files override your default coding style, layout patterns, and engineering standards.

This document serves as the permanent core project memory, architectural philosophy, and decision framework for the Healthmed Frontend engineering workspace. It establishes the baseline rules of engagement, code authorship guidelines, and quality standards for all development iterations.

---

```
                                  HEALTHMED CORE METRIC
                               ┌─────────────────────────┐
                               │     Patient-First       │
                               │  Clinical-Grade Software│
                               └────────────┬────────────┘
                                            │
                                            ▼
                    ┌───────────────────────────────────────────────┐
                    │            CORE PILLARS OF DEVELOPMENT        │
                    ├───────────────────────┬───────────────────────┤
                    │   Structural Rigor    │    Visual Precision   │
                    │  - SOLID Design       │   - Pixel-Perfect UI  │
                    │  - Strict Semantics   │   - Zero Guesswork   │
                    │  - Component Hygiene  │   - Design-System Syn │
                    └───────────────────────┴───────────────────────┘
```

---

## 1. Project Philosophy

Healthmed is a high-availability, fully HIPAA-compliant enterprise healthcare Software-as-a-Service (SaaS) application. Clinical environments demand software that is secure, resilient, accessible, and visual. Therefore:

* **No Prototype-Quality Code:** Do not write temporary shortcuts, hardcoded hacks, or "TODO" items. Every line of code must be written as if it is destined immediately for a high-intensity clinical production environment.
* **Think Like a Principal Frontend Engineer:** Author your code with thoroughness. Prioritize type safety, structural predictability, modularity, and future-proof extensibility over quick implementation.
* **No AI-Looking Code ("Anti-AI Slop"):** 
  * Avoid placing artificial infrastructure statuses or useless telemetry markers (e.g., "● SERVER ONLINE", "PORT 3000 ACTIVE", "SYSTEM OPERATIONAL", "LIVE STREAM CONNECTED") in page margins, rails, footers, or headers unless explicitly requested by the user.
  * Avoid using dramatic, pseudo-intellectual, or marketing-heavy terms for simple modules (e.g., use "Time Tracker" or "Clinical Clock", never "Chronos Engine" or "Lunar Diagnostic Cycle").
  * Maintain clean backgrounds, ample white space, and logical structural flow. Do not clutter cards with redundant system logs or tech-larping stats.

---

## 2. AI Behaviour Rules

When modifying or expanding the Healthmed codebase, all AI agents must follow these operational guidelines:

* **Read and Audit Existing Architectures First:** Before writing a single line of code, search the existing directories and read relevant source files to understand the current engineering patterns.
* **Aggressive Reuse Over Recreation:**
  * **Design Tokens:** Always leverage existing CSS custom variables (found in `src/styles/design-system.css` and local component CSS files) instead of inventing inline Tailwind color utility mappings.
  * **Existing Components:** Reuse standard buttons, badges, typography headings, and layout structures (e.g. `src/components/ui/Badge.tsx`, `src/components/ui/Heading.tsx`, `src/components/ui/Button.tsx`).
  * **Existing Utilities & Hooks:** Ensure any animation uses existing GSAP triggers or custom hooks like `useGsapAnimation` instead of spinning up custom ScrollTrigger systems.
* **Zero Duplication:** If a helper function, CSS animation, or card template already exists, import and extend it. Never write duplicate classes, styles, or code-blocks.

---

## 3. UI Rules

User interfaces in Healthmed represent highly curated digital environments.

```
                      ┌─────────────────────────────────────────┐
                      │            UI IMPLEMENTATION FLOW       │
                      └────────────────────┬────────────────────┘
                                           │
                                           ▼
                      ┌─────────────────────────────────────────┐
                      │    Input: Reference Image / CSS Specs   │
                      └────────────────────┬────────────────────┘
                                           │
                                           ▼
                      ┌─────────────────────────────────────────┐
                      │       Strict Semantic Class Mapping     │
                      │       (No inline style/TW clutter)      │
                      └────────────────────┬────────────────────┘
                                           │
                                           ▼
                      ┌─────────────────────────────────────────┐
                      │      Verification: Pixel-Perfect Fit     │
                      └─────────────────────────────────────────┘
```

* **Absolute Fidelity (Figma / Screenshot Alignment):** The UI must match provided reference specifications and images exactly. This is not a starting point for creative liberties, modernizations, or stylistic variations. 
* **Maintain Spacing and Proportions:** Every line height, border-radius, font-weight, padding value, border color, margin, and shadow must align with the official design system definitions.
* **Aesthetic Intentionality:** Choose either a polished, high-contrast light theme (neutral off-whites paired with deep charcoal grays) or an immersive cosmic dark mode *only* when requested. No hybrid or uncoordinated styles.

---

## 4. Coding Standards

Every React component and TypeScript module must adhere to clean-code and enterprise-level standards:

### SOLID Principles in React Development
* **Single Responsibility Principle (SRP):**
  * Components must do one thing well. A card displays data; it does not perform data fetching or heavy business analytics.
  * Extrapolate complex sub-panels into modular sub-components instead of building 500+ line monolithic files.
* **Open/Closed Principle (OCP):**
  * Components should be open for extension but closed for modification. Use composition patterns (`props.children`, slot injection) rather than polluting a component with 20 different boolean flags.
* **Liskov Substitution Principle (LSP):**
  * Custom UI wrappers must correctly accept and pass down all standard HTML attributes of their underlying native elements (e.g., custom button must extend `React.ButtonHTMLAttributes<HTMLButtonElement>`).
* **Interface Segregation Principle (ISP):**
  * Do not pass heavy, monolithic data objects to small presentation components. Define narrow, specific prop interfaces.
* **Dependency Inversion Principle (DIP):**
  * Program against abstractions (types/interfaces) rather than direct concrete models or window-level globals.

### Design Standards: DRY & KISS
* **Don't Repeat Yourself (DRY):** If you find yourself copying layout blocks or lists, abstract them into typed JSON files (inside `src/data/`) and render them dynamically using lightweight mapping loops.
* **Keep It Simple, Stupid (KISS):** Avoid over-engineering state machines. Use derived state wherever possible instead of syncing state between 3 different `useEffect` hooks.

---

## 5. Component Rules

```
                      src/components/
                      ├── common/       <-- Global utilities (ScrollToTop, WhatsApp)
                      ├── layout/       <-- Site shell (Navbar, Footer, Section grid)
                      └── ui/           <-- Atom elements (Badge, Button, Heading)
```

### When to Create Components
1. **Reusability:** The element or structure appears in 2 or more distinct pages or layout sections.
2. **Complexity Isolation:** A local chunk of code exceeds 60 lines of JSX, or handles self-contained user interactions (such as modals, drop-down systems, or tabs navigation).

### Component Authoring Guidelines
* Always declare components with explicit TypeScript interfaces for props:
  ```tsx
  interface CardProps {
    id: string;
    title: string;
    description: string;
    children?: React.ReactNode;
  }
  ```
* Prefer functional components using standard React arrow syntax with explicit return types:
  ```tsx
  export const DiagnosticCard: React.FC<CardProps> = ({ id, title, description, children }) => {
    return (
      <div className="diagnostic-card" id={id}>
        <h4 className="card-title">{title}</h4>
        <p className="card-desc">{description}</p>
        {children}
      </div>
    );
  };
  ```

---

## 6. Refactoring Rules

* **Refactor, Don't Rebuild:** If a component is working perfectly and does not contain syntax errors, do not rewrite it from scratch just to fit personal preferences. Modify the component surgically.
* **Maintain Backwards Compatibility:** Ensure your additions do not break existing layouts or pages. Verify imports across all files if a helper function's signature changes.

---

## 7. Accessibility (a11y) Rules

Every component must satisfy WCAG 2.1 AA requirements:

* **Keyboard Navigation:** All interactive elements (tabs, accordions, dialogs, buttons) must be focusable using `Tab` and activatable via `Enter` or `Space`.
* **Focus States:** Never use outline-none without providing a visible focus indicator (e.g., `:focus-visible` with a custom ring or contrast shift).
* **ARIA Roles & Attributes:** Ensure custom widgets have correct roles:
  * Tab lists must have `role="tablist"`
  * Tabs must have `role="tab"`, `aria-selected={true/false}`, and `aria-controls="panel-id"`
  * Tab content containers must have `role="tabpanel"` and `aria-labelledby="tab-id"`
* **Semantic HTML:** Do not use `div` for buttons. Use the actual `button` element to preserve native screen-reader behaviors and click capabilities.
* **Reduced Motion Support:** Check for user preferences and skip animation transitions if active:
  ```ts
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mediaQuery.matches) {
    // Render static state or instant values
  }
  ```

---

## 8. Animation Rules

All animations must remain clean, purposeful, and lightweight:

* **Zero Layout Shifts (CLS):** Animations must never alter document layout geometry (such as height, width, padding, or margins). Animate exclusively using properties that run on the GPU: `opacity` and `transform` (`scale`, `translate`, `rotate`).
* **Trigger Timing:** Enter animations must trigger exactly when the container enters the viewport. Never set a threshold that requires more than 15% of the element to be visible, as this creates a delayed, laggy impression.
* **Fast and Smooth:** Duration must remain between `1.5` and `2.0` seconds for counters, and `0.3` to `0.6` seconds for standard fade/slide effects, using transition easings such as `easeOut`.

---

## 9. SEO Rules

* **Unified Metadata Handling:** Use the central SEO component (`src/components/ui/SEO.tsx`) inside page entry points.
* **Structured Data:** Use appropriate microdata tags and semantic structured layout models. Do not manually mutate page-level header documents in random JSX routines.

---

## 10. Performance Rules

* **Code Splitting & Lazy Loading:** Dynamically import heavy below-the-fold modules using React's `lazy` and `Suspense`:
  ```tsx
  const Modules = lazy(() => import('../sections/home/Modules'));
  ```
* **Image Optimization:** Always set explicit aspect ratios, dimensions, and use lazy loading flags for below-the-fold assets:
  ```tsx
  <img src={assetUrl} loading="lazy" width="600" height="450" className="lazy-image" />
  ```
* **Avoid Infinite Renders:** Never pass reference objects (arrays, inline functions, objects) as dependencies in standard `useEffect` hooks without stabilizing them or using primitive types.

---

## 11. Core Verification Checklist

Before certifying any task as completed, verify that the following assertions hold true:

```
[ ] No CSS variables have been duplicated or hardcoded with raw Hex colors in JSX.
[ ] No raw utility-first Tailwind classes are describing typography, colors, borders, or shadows.
[ ] The application passes full linter and static type-checking routines (`npm run lint`).
[ ] The build builds cleanly inside production pipelines without diagnostic errors.
[ ] Keyboard navigation and ARIA tags are functional on all custom interactive widgets.
[ ] Below-the-fold heavy visual blocks use lazy loading and Suspense setups.
```

---

## 12. AI Decision Engine

* **If in doubt, STOP and ask:** If a specification is missing, ambiguous, or conflicts with the existing design system, pause and ask the engineer for clarification instead of guessing.


Reference Image Priority Rule: Whenever a screenshot or Figma frame is provided, it takes precedence over any previous implementation. The AI must first analyze the reference image in detail and recreate it pixel-perfectly using the existing project architecture. It must never "interpret" or "improve" the design. This one rule alone will make Gemini much more consistent across all future UI generation tasks.