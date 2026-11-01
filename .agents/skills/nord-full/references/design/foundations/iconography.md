# Iconography

> 

*Nord Design System uses icons to provide additional meaning or in places where text label doesn’t fit. They communicate messages at a glance and draw attention to important information.*

Our icon library is called [Nordicons](/icons/). Nordicons are designed to be used at small sizes and were built on a 20px grid which ensures that they render well when used with inline text or inside small interface items and buttons. Their design language is friendly and matches closely the shape and thickness of [Nordhealth’s logomark](/design/foundations/brand/).

When designing new icons, try to stick to symbols that represent the most basic ideas, objects or actions. Always prioritize representing the function, rather than how nice the icon looks.

## Base grid

A 20 × 20px grid is used as the foundation for all [Nordicons](/icons/) to determine line thickness, proportions, and shape across the entire icon set. This foundational grid guides you when designing new icons and ensures a unified visual look.

![](/img/iconography/grid.svg){style="max-width:700px;"}---

## Keyshapes

Predefined key lines give you consistent sizing for basic shapes and proportions across the icon set. This helps to establish relationships between similar icons.

![](/img/iconography/guidelines.svg){style="max-width:700px;"}---

## Style and Anatomy

The stylistic conventions of Nordicons create a meaningful connection with our [UI typeface](/design/foundations/typography/) and the [Nordhealth logomark](/design/foundations/brand/). The overall style is friendly, rounded, and matches closely the shape and thickness of both Nordhealth’s logomark and the typeface we use to set text in user interfaces.

1. Corner
2. Stroke
3. Stroke terminal
4. Bounding area
5. Counter stroke
6. Counter area

![](/img/iconography/shape.svg){style="max-width:700px;"}---

## Stroke

Nordicons use a consistent stroke width of 2px, including curves and angles. When designing new icons, maintain the same visual weight by using this stroke thickness for all new icons.

The only exception to this rule is when designing icons for tiny contexts. These icons use a stroke width of 3px and are marked with `-small` suffix in our [icon library](/icons/).

![](/img/iconography/stroke.svg){style="max-width:700px;"}---

## Icon sizes

Nordicons are drawn on a 20 × 20px grid and are scaled up and down linearly to different sizes. The most common sizes Nordicons are used in are:

- `--n-size-icon-xxs`: `8px` — This is a xx-small size for icons. Most commonly used for the caret icons inside navigation items and page progress icons.
- `--n-size-icon-xs`: `10px` — This is a x-small size for icons. Most commonly used inside small form fields and buttons.
- `--n-size-icon-s`: `12px` — This is a small size for icons. Most commonly used for icons inside buttons and select menu toggles.
- `--n-size-icon-m`: `16px` — This is a medium size for icons. Most commonly used for icons that sit inside large buttons.
- `--n-size-icon-l`: `24px` — This is a large size for icons. Most commonly used for illustrative purposes.
- `--n-size-icon-xl`: `36px` — This is a x-large size for icons. Most commonly used for illustrative purposes.
- `--n-size-top-bar`: `52px` — This is the default height of the top bar. It is also used for the small header variant.
- `--n-size-icon-xxl`: `72px` — This is a xx-large size for icons. Most commonly used for illustrative purposes.

## Creating an icon

1. Create a 20 × 20px artboard for each icon.
2. Use 2px stroke to draw regular icons and 3px stroke to draw `-small` versions.
3. In most cases Nordicons shouldn’t have padding around them.
4. Set your workspace to snap to pixels and round most values to whole pixels.
5. Don’t use borders or strokes to draw the icon.
6. All possible shapes and paths should be combined into one.
7. Make sure to properly name layers and artboards.

---

## Figma usage

You can find the design guidelines for Nordicons from our Figma Toolkit.

**[Iconography Guidelines](https://www.figma.com/file/BzNVNU56npd4nCLVShMmor/Iconography-Guidelines?node-id=0%3A1)** - Updated 25.1.2023

---

## Getting support

Have a question about iconography guidelines? Please head over to the [Support page](/resources/support/) for more guidelines and ways to contact us.

<!--
Source: https://nordhealth.design/raw/design/foundations/iconography.md
-->
