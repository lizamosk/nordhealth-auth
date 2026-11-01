# Migration to 4.0.0 Figma Toolkit

> 

*This guide will help you understand how to transition an existing project from using an older version of Nord Figma Toolkit to using the latest 4.0.0 version.*

## What's changing?

This [Figma Toolkit](/design/foundations/figma/) update follows the theming architecture changes deployed in code for the [4.0.0 release of Nord](https://nordhealth.design/migrations/4.0.0/){rel="[\"nofollow\"]"}. In the Figma Toolkit, the major improvement is the migration from the previous theming system to [Figma Variables](https://resources/support/.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma){rel="[\"nofollow\"]"}.

### Improved theming system

The previous Figma Toolkit allowed theming through separate Figma Libraries, but it required manual steps like swapping libraries and checking boxes to preserve theming. The new system leverages **Figma Variables**, which:

- **Reduces manual steps**: Theme switching is now more streamlined and intuitive.
- **Eliminates library juggling**: You no longer need to manage multiple separate libraries for theming.
- **Automatic theme application**: When you drag a component from the asset panel, it will immediately have the theme of your page or frame applied, eliminating the need to swap libraries after inserting components.
- **Multiple themes on one page**: You can apply different themes to individual frames, allowing you to view and compare multiple themes side by side within the same page.
- **Future-proofs the toolkit**: Variables provide a more robust foundation for future updates.
- **Enables better tooling**: Supports improved code generation and AI tooling integration.

### Expanded theme and brand support

The 4.0.0 Figma Toolkit now includes comprehensive theme support for both the therapy and veterinary brands. All themes are available for both brands. With Figma Variables, switching between these themes is as simple as selecting a different mode from the Tokens variable collection, without any manual library swapping.

*[Video: /img/figma/nord-figma-toolkit-v4-theme-switching.mp4]*

---

## What should I do?

### 1. Duplicate your current design file

Before migrating, [duplicate](https://resources/support/.figma.com/hc/en-us/articles/360038511533-Duplicate-or-copy-files){rel="[\"nofollow\"]"} your project files to avoid disruptions to your workflow. This allows you to migrate to the latest Nord Figma Toolkit while maintaining a reference to your original file.

### 2. Swap to the new library

In your duplicate file, [swap the following libraries](https://resources/support/.figma.com/hc/en-us/articles/4404856784663-Swap-style-and-component-libraries){rel="[\"nofollow\"]"} to "Nord Figma Toolkit v4" (if applicable):

- **Nord Light Theme** → Nord Figma Toolkit v4
- **Nord Dark Theme** → Nord Figma Toolkit v4
- **Provet Light Theme** → Nord Figma Toolkit v4
- **Nord Figma Toolkit** → Nord Figma Toolkit v4

### 3. Apply theme

With the new variable-based system, you'll need to select which theme to apply to your pages or frames:

1. To apply a theme to an entire page, deselect everything on the canvas. To apply a theme to a specific frame only, select that frame.
2. In the right sidebar, click the "Apply variable mode" button (swatch icon).
3. Select the "Tokens" variable collection.
4. Choose your desired theme from the dropdown.

> [!WARNING]
> Variable modes are applied per page or frame, not per file. For files with many pages, you can use the [Apply Variable Modes to All Pages plugin](https://www.figma.com/community/plugin/1450499516821653817/apply-variable-modes-to-all-pages) to streamline this process.

> [!NOTE]
> When creating new pages, Figma automatically applies the variable mode from your current page. Consider creating a Figma template with your preferred theme already applied to use as a starting point for new files.

### 4. Migrate to Variables over Styles

To make this migration possible, the new Figma Toolkit still includes Color Styles, but they are now linked with Figma Variables. These Color Styles should be removed in a future update, so it's recommended to migrate to using Variables over Color Styles where possible. You can easily do this by [detaching the Color Styles](https://resources/support/.figma.com/hc/en-us/articles/360040316193-Apply-styles-to-layers-and-objects#01H8Q2P6WP355JETEAP0C2QRP6){rel="[\"nofollow\"]"}.

### 5. Replace Number Input with Input component

The Number Input component has been removed from the Figma Toolkit in this release, as it never had a coded component counterpart. To maintain design-code parity and ensure what you design can be implemented, use the **Input component with stepper functionality** instead.

If you have existing Number Input instances in your designs:

1. Replace them with the Input component.
2. Use the start and end slots to add increase and decrease buttons.
3. Reference the [Stepper example in the Figma Toolkit](https://www.figma.com/design/yarhTRV8eFffff0BIpevi6/-v4-WIP--Nord-Figma-Toolkit?node-id=7020-56569&t=hTn0MV3alhmLVqgI-0){rel="[\"nofollow\"]"} for the correct implementation.
4. Review the [coded Stepper example](/components/input/?example=stepper) to understand how it works in implementation.

### 6. Verify your migration

After completing the migration:

- Test theme switching by changing the variable mode and confirming colors update correctly.
- Check that all components display as expected.
- Verify any custom overrides are preserved.

---

## Getting support

Have a question about migration to `4.0.0`? Please head over to the [Support page](/resources/support/) for more guidelines and ways to contact us.

<!--
Source: https://nordhealth.design/raw/migrations/figma-4.0.0.md
-->
