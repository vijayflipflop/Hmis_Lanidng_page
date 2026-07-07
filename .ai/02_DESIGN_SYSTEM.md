# Healthmed Enterprise AI Memory System - Design System Manual

> **IMPORTANT FOR ALL AI ASSISTANTS**
> Read all files inside the `.ai` folder before making any code changes. This file specifies typography, colors, borders, shadows, spacing, and structural components.

This manual documents the design token architecture, typography models, and semantic component styles of the Healthmed application.

---

```
                       DESIGN SYSTEM TOKENS SYNCHRONIZATION
      
               CSS VARIABLES [design-system.css] 
               ├── Colors (--color-brand-blue, --color-brand-charcoal, etc.)
               ├── Typography (--font-sans, --font-serif, --font-mono)
               └── Layout Elements (--radius-xl, --shadow-sm, etc.)
                                     │
                                     ▼
               SEMANTIC CUSTOM CSS CLASSES [e.g. Modules.css, index.css]
               ├── .modules-section   <-- Maps layout and padding
               ├── .modules-card      <-- Maps cards and background color
               └── .modules-tab-button <-- Maps tab triggers and states
                                     │
                                     ▼
               CLEAN DECLARATIVE JSX [Modules.tsx]
               ├── className="modules-section"
               └── className="modules-card"
```

---

## 1. Color System & Semantic Variables

Healthmed's visual language relies on a robust hierarchy of CSS custom variables. **Raw HEX, RGB, or HSL strings are strictly forbidden inside any React components or tailwind attributes.**

### Core Brand Colors (Palette)
```css
:root {
  /* Brand Specifics */
  --color-brand-blue: #2271e8;
  --color-brand-blue-hover: #1b5cbd;
  --color-brand-charcoal: #12151a;
  --color-brand-bg: #fbfbfc;
  --color-brand-white: #ffffff;

  /* Grays Palette */
  --color-brand-gray-50: #f8f9fa;
  --color-brand-gray-100: #eef1f4;
  --color-brand-gray-200: #e1e4e8;
  --color-brand-gray-500: #7b8491;
  --color-brand-gray-600: #555d6b;
  --color-brand-gray-900: #1a1e24;
}
```

### Mapping to Components (Alias Mapping)
Component CSS files must target semantic custom properties, preserving variable linking.
```css
/* ✅ CORRECT EXAMPLE (Modules.css) */
.modules-section {
  background-color: var(--color-brand-bg);
  border-bottom: 1px solid var(--color-brand-gray-100);
}

.modules-tab-underline {
  background-color: var(--color-brand-blue);
}

/* ❌ INCORRECT EXAMPLE */
.modules-section {
  background-color: #fbfbfc; /* Hardcoded hex colors are FORBIDDEN */
  border-bottom: 1px solid #eef1f4;
}
```

---

## 2. Typography Rules

Healthmed utilizes an expressive typography layout balancing clean modernist sans-serif elements with an elegant, traditional serif typeface.

### Approved Typography Hierarchy
* **Sans-Serif Font:** `Inter`, used for active dashboard interfaces, interactive UI elements, tabular data, metadata, forms, and general body text.
* **Serif Font:** `Lora` (or local standard serif), used for high-impact display titles, article headings, and editorial accent text.
* **Mono Font:** `JetBrains Mono`, used for technical outputs, numbers, and system logs.

### Typography Token Constraints
All typographic elements in components must be mapped using standard semantic CSS classes or dedicated global classes. **Never mix custom styles inside JSX.**

* **❌ INCORRECT / FORBIDDEN JSX COALESCENCE:**
  ```tsx
  /* Do not construct custom typography profiles using inline Tailwind utility classes */
  <h3 className="text-3xl md:text-4xl lg:text-[42px] font-serif leading-tight font-normal tracking-tight text-brand-charcoal">
    Patient Care
  </h3>
  ```

* **✅ CORRECT COMPONENT MAPPING:**
  ```tsx
  /* Reference a logical, descriptive class name in JSX */
  <h3 className="modules-card-title">
    Patient Care
  </h3>
  ```
  ```css
  /* Configure the visual profile cleanly inside the component's CSS stylesheet */
  .modules-card-title {
    font-family: var(--font-serif);
    font-size: 1.875rem; /* text-3xl */
    color: var(--color-brand-charcoal);
    line-height: 1.12;
    letter-spacing: -0.015em;
  }

  @media (min-width: 768px) {
    .modules-card-title {
      font-size: 2.375rem;
    }
  }
  ```

---

## 3. Layout Spacing System

All spacing (padding, margin, gap) must align with the global spacing standards, mapped via semantic class attributes in CSS stylesheets:

| Variable / Value | Standard Name | Clinical Application |
| :--- | :--- | :--- |
| `0.25rem` / `4px` | `--spacing-xxs` | Tight badge labels, focus rings, minor borders |
| `0.5rem` / `8px` | `--spacing-xs` | Component metadata spacing, small grid gaps |
| `1rem` / `16px` | `--spacing-sm` | Card body margins, medium element gutters |
| `1.5rem` / `24px` | `--spacing-md` | Subsystem dividers, general mobile paddings |
| `2rem` / `32px` | `--spacing-lg` | Standard card component paddings, large grid gaps |
| `3rem` / `48px` | `--spacing-xl` | Desktop component containers, segment separators |
| `5rem` / `80px` | `--spacing-xxl` | Mobile section top/bottom padding offsets |
| `7rem` / `112px` | `--spacing-xxxl` | Desktop section boundaries and structural ends |

---

## 4. Radii System (Borders)

Use specified CSS custom radius tokens to maintain a consistent rounding style across all component families:

```css
:root {
  --radius-sm: 4px;      /* Sharp tags, badges, input states */
  --radius-md: 6px;      /* Small buttons, checkbox indicators */
  --radius-lg: 8px;      /* Standard controls, dropdown menus */
  --radius-xl: 12px;     /* Action button bars, medium list frames */
  --radius-2xl: 16px;    /* Large sub-images, secondary graphics */
  --radius-3xl: 24px;    /* Main containers, modals, primary cards */
}
```

---

## 5. Shadows

Card elevations and panel depth states must be styled with established shadow variables. **Never compile custom hex shadows inside components.**

```css
:root {
  /* Soft, micro-elevations for high-contrast environments */
  --shadow-sm: 0 1px 2px rgba(18, 21, 26, 0.05);
  --shadow-md: 0 4px 12px -2px rgba(18, 21, 26, 0.08), 0 2px 4px -1px rgba(18, 21, 26, 0.04);
  --shadow-lg: 0 12px 24px -4px rgba(18, 21, 26, 0.12), 0 4px 8px -2px rgba(18, 21, 26, 0.06);
  
  /* Stage Cards (Used for modules, content tabs, bento structures) */
  --shadow-stage: 0 10px 45px -5px rgba(0, 0, 0, 0.03), 0 4px 16px rgba(0, 0, 0, 0.02);
}
```

---

## 6. Icons & Graphic Elements

* **Consistent Library Choice:** Always use `lucide-react` for system icons.
* **Consistent Sizing Frameworks:**
  * Inline tags & small links: `h-4 w-4`
  * Action button labels & standard cards: `h-5 w-5`
  * Section intros & diagnostic indicators: `h-6 w-6`
* **Stroke Consistency:** Maintain standard default line weights (`stroke-width: 2` or default Lucide weight).

---

## 7. Images & Graphics

* **Fixed / Explicit Aspect Ratios:** Always explicitly constrain media containers using aspect ratios (`aspect-video`, `aspect-square`, `aspect-[4/3]`) to prevent layout shifts.
* **Referrer Policy & Optimization:** Explicitly include `referrerPolicy="no-referrer"` on images to comply with workspace policies.
* **Rounded Framing:** Apply standard rounding elements (`rounded-2xl` or `rounded-xl`) and overlay a subtle border to establish boundary contrast against light off-white environments.

---

## 8. Card Components

```
                   ┌────────────────────────────────────────┐
                   │               CARD WRAPPER             │
                   │  - White bg, 1px Gray-200 border       │
                   │  - 24px rounded borders, Soft shadow   │
                   └───────────────────┬────────────────────┘
                                       │
                                       ▼
                   ┌────────────────────────────────────────┐
                   │             INTERNALS GRID             │
                   │  - 42px or 48px padding (lg/xl size)   │
                   │  - 2-column horizontal split structure │
                   └────────────────────────────────────────┘
```

Every information card follows this layout rule:
* **Background:** Clean solid white (`var(--color-brand-white)`) or very soft grey.
* **Borders:** Constant `1px solid #E5E7EB` or `var(--color-brand-gray-100)`.
* **Radius:** `rounded-[24px]` (3xl token equivalent).
* **Elevation:** Custom light drop shadow mapping `shadow-[0_10px_45px_-5px_rgba(0,0,0,0.03)]`.

---

## 9. Button States & Interactive Controls

Always structure states cleanly, applying transition properties (`transition-all duration-200`):

```css
/* ✅ CORRECT EXAMPLE */
.modules-action-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-brand-gray-50);
  border: 1px solid var(--color-brand-gray-100);
  border-radius: var(--radius-xl);
  color: var(--color-brand-charcoal);
  transition-property: all;
  transition-duration: 200ms;
}

.modules-action-link:hover {
  background-color: #F1F3F5;
  border-color: #DEE2E6;
}
```

---

## 10. Design Consistency Guidelines

### Good Layout vs. Bad Layout Comparison

```css
/* ❌ BAD WAY (Pollutes styling across different files using random classes) */
.some-card {
  background: white;
  margin: 15px;
  border-radius: 10px;
  font-family: serif;
  font-weight: normal;
  font-size: 30px;
}

/* ✅ GOOD WAY (Uses consistent design system variables and structure) */
.diagnostic-card {
  background-color: var(--color-brand-white);
  border: 1px solid var(--color-brand-gray-100);
  border-radius: var(--radius-3xl);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
}

.diagnostic-card-title {
  font-family: var(--font-serif);
  font-size: 1.875rem;
  color: var(--color-brand-charcoal);
  letter-spacing: -0.015em;
}
```
