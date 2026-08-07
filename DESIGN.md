# DESIGN.md

Visual system for the Thiago Carvalho portfolio. Follows the [DESIGN.md format spec](https://raw.githubusercontent.com/google-labs-code/design.md/main/docs/spec.md).

## Theme

Color strategy: **Committed** — one saturated dark navy carries the brand (hero, contact, footer), gold as the single accent. Identity-preserving: NAVY #142433 + GOLD #D9A441 are the palette of the approved resume (build_docx.js / PDF).

### Palette

| Role | Token | Value | Usage |
|---|---|---|---|
| Ink | `--navy` | `#142433` | Primary brand surface (hero, contact, footer) |
| Ink deep | `--navy-deep` | `#0d1a26` | Darker footer / overlay |
| Ink soft | `--navy-soft` | `#1f3347` | Borders/hovers on navy |
| Surface | `--surface` | `#ffffff` | Main content sections |
| Surface alt | `--surface-alt` | `#f4f5f7` | Alternating section bg |
| Text | `--ink` | `#1a1f26` | Body text on light |
| Text muted | `--muted` | `#5b6472` | Secondary text on light (≥4.5:1 on #fff) |
| Accent | `--gold` | `#d9a441` | Accent: links, dots, period chips, focus |
| Accent text | `--gold-soft` | `#e8c36a` | Small gold text on navy (≥4.5:1) |
| On-navy | `--on-navy` | `#f5f7fa` | Body text on navy (high contrast) |

Contrast verified: `--on-navy #f5f7fa` on `--navy #142433` ≈ 14:1 (AAA). `--gold-soft #e8c36a` on navy ≈ 8:1. `--muted #5b6472` on `#ffffff` ≈ 5.2:1 (AA). `--gold #d9a441` on navy ≈ 6:1 — used for large text/decorative only.

## Typography

Single family: **Bricolage Grotesque** (Google Fonts, weights 400–800). Distinctive grotesque with character — chosen deliberately, not a reflex pick (Inter/Space Grotesk rejected per skill's reflex-reject list).

| Style | Spec |
|---|---|
| Display / Hero | `clamp(2.9rem, 7vw, 4.6rem)` 800, `letter-spacing: -0.02em`, `text-wrap: balance` |
| H2 section | `clamp(1.8rem, 3.4vw, 2.4rem)` 700 |
| H3 card | `1.15rem` 700 |
| Body | `1.02rem` 400, `line-height: 1.6`, max-width 62ch |
| Mono labels | Bricolage 500 uppercase `0.72rem` letterspaced (sparingly: one kicker pattern, not per-section eyebrows) |
| Period chips | `0.72rem` 600 uppercase tracked |

## Layout

- Container: `max-width: 1100px`, `padding-inline: clamp(1.25rem, 4vw, 2.5rem)`
- Hero: full-bleed navy, 2-col grid (text / portrait), asymmetric (7/5)
- Sections alternate `--surface` / `--surface-alt` with generous `padding-block: clamp(4.5rem, 9vw, 7.5rem)`
- Experience: single timeline (2px rail, gold dots), real data, no card-grid template
- Skills: grouped tags with gold category labels — not identical icon cards
- Z-scale: sticky header 100 → modal 200 (none used higher)

## Components

- **Sticky header**: navy→translucent navy blur on scroll, name left, anchor links + "Currículo" download button right, hamburger < 820px
- **Buttons**: primary = gold bg + navy text (≥3:1 large, bold); secondary = outlined gold on navy. 44px min touch target, visible focus ring
- **Timeline**: rail 2px `--navy-soft`, dot 12px gold with white ring, role/company/period/bullets
- **Tags**: pill, `1px solid --navy-soft`, ink text on white, gold dot prefix per category
- **Contact grid**: 4 channel cards (email/LinkedIn/GitHub/WhatsApp) + prominent download card

## Motion

- Reveal on scroll: IntersectionObserver, translateY(14px)+fade, 400ms ease-out-quart, staggered by index (max 120ms)
- Typewriter in hero (200ms per char), disabled under `prefers-reduced-motion`
- Hover: only transform/box-shadow transitions, 200ms ease-out
- No infinite decorative animations. No layout-property animation. No bounce/elastic.

## Responsive

- Breakpoints: 1024px (hero stacks), 820px (header collapses to hamburger, skills tags wrap)
- Touch targets ≥44px on mobile
- No horizontal scroll; long tech names wrap

## Accessibility

- Semantic landmarks: header/nav/main/section/footer
- h1 once (hero), h2 per section, h3 per card
- `:focus-visible` gold ring on all interactive elements
- `prefers-reduced-motion: reduce` → kill reveals/typewriter, instant transitions
- All social links `rel="noopener"`, real hrefs
- Alt text on portrait: "Retrato de Thiago Carvalho"
