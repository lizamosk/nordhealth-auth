# Migration to 3.0.0 Figma Toolkit

> 

*This guide will help you understand how to transition an existing project from using an older version of Nord Figma Toolkit to using the latest 3.0.0 version.*

## What’s changing?

This Figma Toolkit update follows the changes deployed in code for the [3.0.0 release of Nord](https://nordhealth.design/migrations/3.0.0/){rel="[\"nofollow\"]"}. The major differences include the addition of the [Top Bar](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7143%3A65291&t=J3Qw2e6LJhLHoSqu-1){rel="[\"nofollow\"]"} & [Notification](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7310%3A85081&t=J3Qw2e6LJhLHoSqu-1){rel="[\"nofollow\"]"} components. Plus, updates to the [Navigation](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7264%3A70342&t=J3Qw2e6LJhLHoSqu-1){rel="[\"nofollow\"]"} component, which now supports [Notifications](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7367%3A169940&t=J3Qw2e6LJhLHoSqu-1){rel="[\"nofollow\"]"}, [My Tasks](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7367%3A179409&t=J3Qw2e6LJhLHoSqu-1){rel="[\"nofollow\"]"}, and [Profile](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7367%3A184114&t=J3Qw2e6LJhLHoSqu-1){rel="[\"nofollow\"]"} functionality.

The color system for the Nord Light Theme and Nord Dark Theme have been updated in the Nord Figma Toolkit which extends the color system to better support our use cases. These color changes bring new styles and variants to the Nord Figma Toolkit and are most noticeable in components such as the [Badge](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=5862%3A40882&t=J3Qw2e6LJhLHoSqu-1){rel="[\"nofollow\"]"}, and [Banner](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=7489%3A190206&t=J3Qw2e6LJhLHoSqu-1){rel="[\"nofollow\"]"}.

The new color system introduces changes to the design tokens which will include breaking changes. For more information take a look at the [changes to the design tokens](/migrations/3.0.0/#changes-to-design-tokens) in the Migration to 3.0.0 Web Components document.

---

## What should I do?

### 1. Duplicate your current design file

In order to avoid disruptions to your workflow, it is recommended that you [duplicate](https://resources/support/.figma.com/hc/en-us/articles/360038511533-Duplicate-or-copy-files){rel="[\"nofollow\"]"} your project files before accepting this update. This allows you to migrate to the latest Nord Figma Toolkit while maintaining a reference to your original file.

![Duplicate your current design file](/img/migrations/figma-migration-1.png){height="475" width="800" className="[\"n:border\"]" style="border-radius: var(--n-border-radius); margin-bottom: 0;"}### 2. Update your duplicate with the latest 3.0.0 Cover Image

Use [this Figma Template](https://www.figma.com/file/le5n5hH9G7rcEvNOsMnZR9/Figma-template-(product-design)?type=design&node-id=0%3A1&t=AM9swKNtAc4glbXW-1){rel="[\"nofollow\"]"} to create a cover image for your new file which will be updated to the 3.0.0 Nord Figma Toolkit.

![Update your duplicate with the latest 3.0.0 Cover Image](/img/migrations/figma-migration-2.png){height="475" width="800" className="[\"n:border\"]" style="border-radius: var(--n-border-radius); margin-bottom: 0;"}### 3. Review and accept updates

In your duplicate file, review and accept the Nord Figma Toolkit library updates. You will see updates to three libraries which include the [Nord Figma Toolkit](https://www.figma.com/file/u32okMUqi5BlWsG2k1JZgH/Nord-Figma-Toolkit?type=design&node-id=1645%3A129905&t=A2tdfWus6EvDNtIz-1){rel="[\"nofollow\"]"}, [Nord Light Theme](https://www.figma.com/file/Bk4HaOsbRzp1gyoEZJMeG1/Nord-Light-Theme?type=design&node-id=1696%3A298217&t=otCTzNrAhntZXK2r-1){rel="[\"nofollow\"]"}, and [Nord Dark Theme](https://www.figma.com/file/CEv0wTXRONi30bZglrYzEm/Nord-Dark-Theme?type=design&node-id=1696%3A298217&t=DviBkLXcsVdvyGnt-1){rel="[\"nofollow\"]"}.

![Review and accept updates](/img/migrations/figma-migration-3.png){height="475" width="800" className="[\"n:border\"]" style="border-radius: var(--n-border-radius); margin-bottom: 0;"}### 4. Update colors

In your duplicate file, you might need to replace some colors. You can [follow this guide](/migrations/3.0.0/#changes-to-design-tokens) to see how colors might need to be updated.

### 5. Update components & content

This update includes breaking changes to components and may require that you update content in components with breaking changes.

> [!NOTE]
> Review the [Nord Figma Toolkit 3.0.0 changelog](/changelogs/figma) to get more information about these changes, new features, and improvements.

---

## How do I add the Provet theme?

If you’d like to add the new [Provet Light Theme](https://www.figma.com/file/aZDrttmLqVMrO1lQXk8Mbn/Provet-Light-Theme?type=design&node-id=0%3A1&mode=design&t=9QRU9QfiAhn8x9O1-1){rel="[\"nofollow\"]"} in your designs you can follow this guide. Before you get started, make sure that you’ve updated to the Nord Figma Toolkit 3.0.0.

Open the assets panel and find the [Nord Light Theme](https://www.figma.com/file/aZDrttmLqVMrO1lQXk8Mbn/%E2%9D%8C-Provet-Theme?type=design&node-id=0%3A1&mode=design&t=9QRU9QfiAhn8x9O1-1){rel="[\"nofollow\"]"}. Next, click Swap library.

![Updating Provet theme](/img/migrations/figma-migration-4.png){height="475" width="800" className="[\"n:border\"]" style="border-radius: var(--n-border-radius); margin-bottom: 0;"}Choose `Provet Light Theme` from the options. You should see that the color tokens for `accent`, `accent-secondary`, and `text-link` have matching color styles. Click Swap library to apply the Provet Theme to your design.

![Updating Provet theme](/img/migrations/figma-migration-5.png){height="475" width="800" className="[\"n:border\"]" style="border-radius: var(--n-border-radius); margin-bottom: 0;"}---

## What if I accepted this update without duplicating my design file?

You can use Figma’s version history feature to [restore the previous version](https://resources/support/.figma.com/hc/en-us/articles/360038006754-View-a-file-s-version-history#Restore_a_previous_version){rel="[\"nofollow\"]"} of your design file. After you’ve restored the previous version you can duplicate your original design file.

---

## Getting support

Have a question about migration to `3.0.0`? Please head over to the [Support page](/resources/support/) for more guidelines and ways to contact us.

<!--
Source: https://nordhealth.design/raw/migrations/figma-3.0.0.md
-->
