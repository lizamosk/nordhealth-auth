# Accessibility

> 

*This is an accessibility checklist that we use when building new features. It helps us improve the experience for everyone who uses our products and ensures our high standards are met.*

For our public commitment to accessibility, see the [accessibility statement](/resources/accessibility-statement/).

## Generic

- [ ] **Nord's automated accessibility tests pass.**
  You can run automated tests by running "pnpm test" in the [root of the project](https://github.com/nordhealth/design-system). Please note this runs Axe too.

- [ ] **Passes automated validation using Axe Chrome extension.**
  [Download and install](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US) Axe Chrome extension to check off this item.

- [ ] **Works with NVDA screen reader on Windows.**
  [Download and install](https://www.nvaccess.org/download/) NVDA for Windows to check off this item.

- [ ] **Works with Jaws screen reader on Windows.**
  [Download and install](https://support.freedomscientific.com/Downloads/JAWS) Jaws for Windows to check off this item.

- [ ] **Works with VoiceOver on macOS.**
  macOS ships with VoiceOver which can be enabled [through preferences](https://support.apple.com/guide/voiceover/welcome/mac).

- [ ] **Works with TalkBack on Android.**
  Android ships with TalkBack which can be enabled by following [these instructions](https://support.google.com/accessibility/android/answer/6007100?hl=en).

- [ ] **Works with Windows high contrast mode.**
  [High contrast mode](https://assistivlabs.com/assistive-tech/display/high-contrast-mode) uses a limited color palette with contrasting colors to make an interface easier to use.

- [ ] **Works when text size is increased to 200%.**
  Follow [these instructions](https://support.google.com/chrome/answer/96810?hl=en&co=GENIE.Platform%3DDesktop) to change the default text size in Chrome.

- [ ] **Works when zoomed in 400%.**
  Most browsers allow you to zoom in or out using Cmd and +/- keys.

## Content

- [ ] **Content is written in a plain and clear language.**
  Accessible writing ensures your content is understandable for everyone to read. Use [Readability Analyzer set to '8th grade level'](https://datayze.com/readability-analyzer.php) to check your writing.

- [ ] **<button>, <a>, and <label> contents are unique and descriptive.**
  Avoid terms like "click here" and "read more" which do not provide any context for the user.

- [ ] **There is only one <h1> heading per page.**
  The [h1 element](https://dequeuniversity.com/rules/axe/4.1/page-has-heading-one) should be used to communicate the high-level purpose of the page or view.

- [ ] **Heading elements appear in logical order.**
  The order of heading elements should descend, based on the depth of the content.

- [ ] **Heading levels aren't skipped.**
  If heading levels need to be skipped for a specific visual style, use CSS classes instead.

- [ ] **List elements (<ol>, <ul>, <dl>) are used for list content.**
  This may also include sections of related content and items displayed in a grid layout.

- [ ] **A skip link is provided that is keyboard focusable.**
  A skip link is used to provide direct access to the main content of a page or view.

- [ ] **Main content's line height is at least 1.5 times the font size.**
  People with low vision require increased space between lines to be able to read text.

## Markup

- [ ] **HTML has been validated with W3 validator.**
  [Valid HTML](https://validator.w3.org/nu/) helps to provide a consistent, expected experience across all browsers.

- [ ] **<html> element has correct lang attribute.**
  This [helps assistive technologies](https://dequeuniversity.com/rules/axe/4.1/html-has-lang), such as screen readers, to pronounce content correctly.

- [ ] **Each page has a unique <title>.**
  This [helps people](https://dequeuniversity.com/rules/axe/4.1/document-title) using assistive technologies to understand what view they are going to start navigating.

- [ ] **Markup uses landmarks to indicate content regions.**
  [Landmarks](https://dequeuniversity.com/rules/axe/4.1/region) help communicate the layout, and allow direct access to these regions.

- [ ] **No tabindex attribute values other than 0 or -1.**
  Elements that are inherently focusable [don't require a tabindex](https://dequeuniversity.com/rules/axe/4.1/tabindex).

- [ ] **No autofocus attributes in markup.**
  Autofocus HTML attribute should be avoided. Focus into fields programmatically instead where necessary.

- [ ] **No title attribute tooltips in markup.**
  The title attribute has [multiple issues](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title#accessibility_concerns) and should not be used.

- [ ] **<a> element is used for all links.**
  Links should always have a href attribute, even in SPAs. Without this, the link won't be properly recognized.

- [ ] **<button> element is used for all buttons.**
  Users of assistive technology expect a button to do an action. If you need to navigate into another view, use a link.

- [ ] **<table> element is used to describe tabular data.**
  Do you need to display data in rows and columns? Use table element.

- [ ] **<th> is used for table headers.**
  Correct use of table headers helps users of assistive technology to understand your data.

- [ ] **<caption> element is used to provide titles for tables.**
  A caption should describe what kind of information the table contains.

- [ ] **<nord-visually-hidden> is used instead of aria-label.**
  [Nord Visually Hidden](/components/visually-hidden/) provides wider support for assistive technology and different locales.

## Keyboard

- [ ] **Tested to be keyboard accessible.**
  Some people cannot use a mouse, so it's important that the interface can be navigated with a keyboard.

- [ ] **All interactive elements have visible focus styles.**
  Can a person navigating with a keyboard, [switch](https://axesslab.com/switches/), voice control, or screen reader see where they currently are?

- [ ] **Keyboard focus order matches the visual layout.**
  Can a person move around the page in a predictable way?

- [ ] **There are no invisible focusable elements.**
  Remove any elements that are not presently meant to be discoverable.

- [ ] **Buttons are accessible using space and enter keys.**
  Users of assistive technology expect a button to behave in a certain way.

- [ ] **Dialogs and overlays can be closed using esc key.**
  As well as using the "close" button, it should be possible to close a dialog by pressing the Esc key.

## Images

- [ ] **All <img> elements have alt attribute values.**
  alt attributes help explain images to people who may not be able to view them.

- [ ] **Complex charts and graphs have text alternatives.**
  Describe all visible information in text format as well. This includes graph axes, data points and labels.

- [ ] **Decorative <svg> elements use aria-hidden='true'.**
  Decorative images don't communicate information that is required to understand the interface's overall meaning.

- [ ] **<img> elements with an <svg> source use role='img' attribute.**
  If you are using embedded SVGs, [always set role="img"](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/img_role#svg_and_roleimg) and give the element a label.

## Forms

- [ ] **All inputs are associated with a corresponding label element.**
  Use a for/id pairing to guarantee the highest level of browser support.

- [ ] **<fieldset> and <legend> elements are used where appropriate.**
  Use fieldset to group sections of related inputs, and legend to provide a label for the section.

- [ ] **Form input fields support autocomplete where appropriate.**
  Supporting autocomplete allows users to utilise existing text entry features on their device, minimising friction when filling in forms.

- [ ] **Input error messages are associated with the inputs they correspond to.**
  This allows users to clearly understand the difference between the input and the error.

## Color contrast

- [ ] **All text contents have a contrast ratio of at least 4.5:1.**
  Level AA compliance requires a contrast ratio of 4.5:1.

- [ ] **All UI components have a contrast ratio of at least 3:1.**
  Level AA compliance requires a contrast ratio of 3:1.

- [ ] **Interface has been tested with a color blindness simulator.**
  If you are not suffering from a color vision deficiency, it's hard to imagine what it looks like to be colorblind.

- [ ] **Color isn't the only way information/meaning is conveyed.**
  This makes it impossible for people who are visually impaired, or who struggle to distinguish colors, to access information.

## Mobile

- [ ] **Website can be rotated to any orientation.**
  Does the interface allow both landscape and portrait orientations?

- [ ] **Website works on 320px wide viewport.**
  Make sure the interface stays usable even on the smallest viewports.

- [ ] **The whole page doesn't scroll horizontally.**
  Requiring users to scroll horizontally can be difficult for some people.

- [ ] **All touch targets are at least 44x44px, except when placed inline.**
  Ensure that touch target sizes are [large enough](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html) for users to activate them.

- [ ] **Viewport zooming isn't disabled.**
  Some users need to increase the size of content so that they can read it. Do not stop them from doing this.

<!--
Source: https://nordhealth.design/raw/design/foundations/accessibility-checklist.md
-->
