---
name: Prestige Global Identity
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#4e4639'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#7f7667'
  outline-variant: '#d1c5b4'
  surface-tint: '#775a19'
  primary: '#775a19'
  on-primary: '#ffffff'
  primary-container: '#c5a059'
  on-primary-container: '#4e3700'
  inverse-primary: '#e9c176'
  secondary: '#5d5e61'
  on-secondary: '#ffffff'
  secondary-container: '#e2e2e5'
  on-secondary-container: '#636467'
  tertiary: '#5a5f64'
  on-tertiary: '#ffffff'
  tertiary-container: '#a1a6ac'
  on-tertiary-container: '#363c41'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdea5'
  primary-fixed-dim: '#e9c176'
  on-primary-fixed: '#261900'
  on-primary-fixed-variant: '#5d4201'
  secondary-fixed: '#e2e2e5'
  secondary-fixed-dim: '#c6c6c9'
  on-secondary-fixed: '#1a1c1e'
  on-secondary-fixed-variant: '#454749'
  tertiary-fixed: '#dee3e9'
  tertiary-fixed-dim: '#c2c7cd'
  on-tertiary-fixed: '#171c21'
  on-tertiary-fixed-variant: '#42474c'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  caption:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

This design system is built to communicate prestige, global authority, and architectural precision. It targets a high-end B2B audience and discerning consumers who value reliability and sophisticated craftsmanship. The visual language is anchored in "Executive Minimalism"—a style that prioritizes content clarity through generous white space, refined metallic accents, and a structured layout.

The emotional response should be one of immediate trust and exclusivity. By blending high-contrast charcoal elements with warm gold highlights, the UI feels both modern and established. The aesthetic avoids fleeting trends, opting instead for a timeless, corporate polish that reflects the "Global Solutions" aspect of the brand.

## Colors

The palette is derived from the material qualities of the brand's physical presence:
- **Primary (Champagne Gold):** Used for primary calls to action, active states, and decorative brand elements. It should be used purposefully to guide the eye without overwhelming the interface.
- **Secondary (Charcoal Grey):** The foundation for typography and structural elements. It provides a deep, professional contrast that is softer and more sophisticated than pure black.
- **Tertiary (Metallic Silver):** Utilized for borders, secondary icons, and disabled states. It mimics the brushed metal texture found in the brand's logo.
- **Neutral (Soft Alabaster):** A clean, off-white background color that reduces eye strain and provides a premium "gallery" feel for product catalogues.

## Typography

The design system utilizes **Manrope** across all levels to maintain a clean, contemporary, and highly legible corporate look. Its geometric foundations provide stability, while its subtle humanist features keep the interface approachable.

- **Headlines:** Use Bold or Semi-Bold weights in Charcoal Grey. Large display sizes should use slight negative letter-spacing to appear tighter and more "editorial."
- **Body Text:** Set in Regular weight with generous line height (1.5x) to ensure readability in dense catalogue descriptions.
- **Labels:** Small caps or increased letter-spacing should be applied to labels to create a distinct visual hierarchy for metadata and categories.

## Layout & Spacing

This design system employs a **12-column fluid grid** for desktop and a **4-column grid** for mobile. The spacing rhythm is based on an 8px scale to ensure mathematical harmony across all components.

- **Catalogue Layout:** Product grids should favor 3 or 4 items per row on desktop to maintain large, high-resolution imagery.
- **Margins:** Desktop screens use wide 64px margins to create a "letterboxed" luxury feel, focusing the user's attention on the center-stage content.
- **Vertical Rhythm:** Use the `xl` (80px) spacing for section transitions to allow the design to "breathe," emphasizing the premium nature of the brand through deliberate whitespace.

## Elevation & Depth

To maintain a "High-End" feel, depth is created through **Tonal Layering** and **Low-Contrast Outlines** rather than heavy shadows.

- **Surface Levels:** The base background is the Neutral Alabaster. Cards and modals sit on a pure white surface with a 1px Silver (#A8ADB3) border at 30% opacity.
- **Shadows:** When necessary (e.g., floating action buttons or active dropdowns), use "Ambient Shadows"—extremely diffused, 10% opacity Charcoal blurs with no offset, simulating a soft glow rather than a hard drop shadow.
- **Interactive Depth:** On hover, elements should not "lift" significantly; instead, a subtle shift in border-color (from Silver to Gold) indicates interactivity, maintaining the flat, architectural integrity of the layout.

## Shapes

The shape language is **Soft (0.25rem / 4px)**. This minimal rounding provides a precise, engineered feel that aligns with "Global Solutions" and professional services. It is soft enough to feel modern but sharp enough to remain authoritative.

- **Buttons & Inputs:** Use the standard `rounded` (4px) corner radius.
- **Product Cards:** Use `rounded-lg` (8px) to slightly distinguish content containers from functional UI elements.
- **Icons:** Should be stroke-based (2px weight) with slightly rounded terminals to match the typography.

## Components

### Buttons
- **Primary:** Solid Gold background with White or Charcoal text. No gradient. High-contrast.
- **Secondary:** Transparent background with a 1px Charcoal border. Text in Charcoal.
- **Tertiary:** Text-only in Gold with a 2px underline appearing on hover.

### Input Fields
- Understated design with a 1px Silver bottom-border only, or a full-border with 4px radius. 
- Focus state: Border changes to Gold with a subtle 2px outer "halo" of the same color at 10% opacity.

### Catalogue Cards
- Image-first approach. The container has a subtle Silver border.
- Product titles in `headline-md`, price/details in `label-md` using Gold.
- Subtle zoom-in effect on the image upon hover to provide a tactile feel.

### Chips & Tags
- Used for categories (e.g., "New Arrival", "Global Edition").
- Light Silver background with Charcoal text, using the `label-md` typographic style.

### Navigation
- A "Sticky" header with a frosted-glass (backdrop-blur) effect using the Alabaster neutral color at 80% opacity. This keeps the navigation accessible while maintaining the premium depth of the site.