# 🧩 DESIGN_SYSTEM.md – Yatzy Lab 05

## 🎨 Theme Overview
The **Tech Minimalist (Cyber Violet)** theme focuses on clean structure, futuristic color accents, and soft glowing motion.  
It uses a dark background with bright violet highlights and subtle blur effects to create depth and clarity.

---

## 🌈 Color Palette
| Name | Hex Code | Use |
|------|-----------|-----|
| **bg-950** | `#0A0A12` | Main page background |
| **panel-900** | `#0F0F1A` | Card and section backgrounds |
| **line-700** | `#26263A` | Borders and separators |
| **ink-100** | `#EAEAF4` | Primary text color |
| **ink-400** | `#A1A1BC` | Muted or secondary text |
| **violet-500** | `#8B5CF6` | Accent color for buttons and highlights |
| **violet-600** | `#7C3AED` | Hover and focus color |
| **glow-500** | `#B794F6` | Dice glow and ambient effects |
| **danger-500** | `#EF4444` | Error or warning use only |

> The palette balances legibility and vibrancy, using high contrast between violet accents and muted dark panels.

---

## 🖋 Typography
| Element | Font | Weight | Size | Purpose |
|----------|------|---------|------|----------|
| **Headings** | Inter / system sans-serif | 600–700 | 24–32px | Titles & sections |
| **Body Text** | Inter / system sans-serif | 400–500 | 14–16px | Main readable text |
| **Buttons & Labels** | Inherit font | 500–600 | 14px | UI interactions |

Spacing: `1.5` line height, `0.25px` letter spacing for modern readability.

---

## 🧱 Layout & Spacing
- Base spacing unit: 8px
- Section padding: 32px
- Component gaps: 16px
- Card radius: 16px
- Dice radius: 12px
- Button radius: full pill (9999px)
- Max width: 1024px

> All elements follow a consistent 8px grid for alignment and rhythm.

---

## ⚡ Motion & Interaction
| Interaction | Animation | Duration | Easing | Description |
|--------------|------------|-----------|---------|--------------|
| Hover | Scale `1.02` + soft glow | 0.25s | ease-in-out | Adds feedback & depth |
| Roll (dice) | 360° spin rotation | 0.36s | cubic-bezier(0.45, 0, 0.55, 1) | Mimics dice roll motion |
| Press/Hold | Violet glow intensifies | 0.15s | ease-out | Highlights held dice |
| Page panels | Fade-in + blur | 0.4s | ease-out | Smooth content entry |

### Accessibility Motion
- Uses `prefers-reduced-motion` to disable spins and transitions if user prefers reduced motion.
- Focus rings are always visible with a soft violet outer glow.

---

## ♿ Accessibility Guidelines
- Contrast ratio ≥ 4.5:1 for all text and interactive elements.
- Clear keyboard navigation for dice and buttons.
- Use of `aria-label` and `aria-pressed` for dice buttons.
- Avoid relying only on color for feedback (use glow, borders, or scale).

---

## 🧩 Component Summary
**Dice** → Rounded glass cubes with inner violet glow.  
**Buttons** → Glass violet gradients with hover brightness.  
**Panels** → Semi-transparent dark cards with subtle blur.  
**Score Table** → Clean layout with hover row highlight.

---

## ✍️ Author
**Lab 05 – Yatzy Styling Project**  
Created for CST3106 (Web Design & Front-End Fundamentals)  
By: [Mahmoud Ahmed]
