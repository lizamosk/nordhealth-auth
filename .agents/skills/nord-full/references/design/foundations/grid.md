# Grid

> 

*The grid helps us achieve visual balance and makes the user interface easier to scan. With the grid we can create consistent layouts that work across devices, screen sizes, and environments.*

## Grid anatomy

Grids in Nord Design System contain columns (1), gutters (2), and margins (3).

![Grid anatomy](/img/grid/anatomy.png){className="[\"n:border\"]" style="border-radius: var(--n-border-radius)"}---

## Columns

Columns define the areas of a design that contain content. The column widths are defined by percentages, and will resize based on the viewport. The number of columns available will also be affected by the viewport. A general rule of thumb is to allow the content to determine the breakpoints and how many columns to show at each viewport size.

![Grid colums](/img/grid/columns.png){className="[\"n:border\"]" style="border-radius: var(--n-border-radius)"}---

## Gutters

Gutters are fixed-width spacing between columns that separate content. We use our [space tokens](/tokens/#space) to define the gutters for the grid.

![Grid gutters](/img/grid/gutters.png){className="[\"n:border\"]" style="border-radius: var(--n-border-radius)"}---

## Margins

Margins separate content from the left and right edges of the grid. Margins are fixed-width and defined by using our [space tokens](/tokens/#space). In general, wider margins are more suited for larger screens. Margins should either be the same width, or wider than the gutter width.

![Grid margins](/img/grid/margins.png){className="[\"n:border\"]" style="border-radius: var(--n-border-radius)"}---

## Applying the Grid

Nord Design System offers options for customizing the grid. We support up to 12 column layouts that can be fixed or fluid.

![Applying the grid](/img/grid/applying.png){className="[\"n:border\"]" style="border-radius: var(--n-border-radius)"}### Layout across columns

Content can span multiple columns or use a subset of columns in a grid.

![Layout across columns](/img/grid/across.png){className="[\"n:border\"]" style="border-radius: var(--n-border-radius)"}### Gutter and margin spacing

We offer three types of spacing for gutters and margins: S, L, and XL. These options align with our space tokens. Typically, larger spacing makes sense on larger screens.

![Gutter and margin spacing](/img/grid/spacing.png){className="[\"n:border\"]" style="border-radius: var(--n-border-radius)"}### Fixed-width or fluid grid

You can apply a fixed-width or a fluid grid to your design. The fixed-width grid works well when dealing with long pages of content (fixed grid behaves like fluid grid when the viewport is smaller than the grid’s max-width):

*[Video: /img/grid/fixed.mp4]*

The fluid grid work well when you’re dealing with screens that require lots of interaction or large datasets:

*[Video: /img/grid/fluid.mp4]*

---

## Layout

For laying out applications, we place navigation (2) on the left and page header (1) across the top of the screen. The grid is applied to the content area (3).

![Layout](/img/grid/layout.png){className="[\"n:border\"]" style="border-radius: var(--n-border-radius)"}---

## Figma usage

You can find the different grids from our [Figma Toolkit](/design/foundations/figma/).

---

## Getting support

Have a question about grid usage? Please head over to the [Support page](/resources/support/) for more guidelines and ways to contact us.

<!--
Source: https://nordhealth.design/raw/design/foundations/grid.md
-->
