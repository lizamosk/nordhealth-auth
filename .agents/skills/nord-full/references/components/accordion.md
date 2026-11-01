# nord-accordion

> Accordion is a set of collapsible sections, each with a header that toggles
> the visibility of its content. It coordinates a group of
> <a href="/components/accordion-item/">Accordion Item</a> elements, keyboard focus
> movement between them, and which items are open.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use to group several related sections of content, such as a list of frequently asked questions or grouped settings.
- Give each [Accordion Item](/components/accordion-item/) a unique `value` so the open state can be tracked.
- Use the `multiple` attribute when more than one section should be expandable at the same time.
- Control which sections are open with the `value` property (an array of item values); it is the single source of truth. Render the full set of items up front rather than adding or removing them after the accordion has connected.
- Keep [Accordion Trigger](/components/accordion-trigger/) labels short and descriptive so users can scan the sections.

> **Don't:** - Don’t use for a single disclosure of content, use [Collapsible](/components/collapsible/) instead.
- Don’t nest interactive controls inside a trigger that compete with toggling the section.
- Don’t hide content that the user always needs, such as primary actions or critical information.

## Examples

### Basic

```html
<nord-accordion .value=${['shipping']} class="n:container-xs">
      <nord-accordion-item value="shipping">
        <nord-accordion-header>
          <nord-accordion-trigger>
            What are your shipping options?
            <nord-icon name="arrow-expand-down-small" size="xxs"></nord-icon>
          </nord-accordion-trigger>
        </nord-accordion-header>
        <nord-accordion-panel>
          We offer standard (5-7 days), express (2-3 days), and overnight shipping. Free shipping on
          international orders.
        </nord-accordion-panel>
      </nord-accordion-item>
      <nord-accordion-item value="returns">
        <nord-accordion-header>
          <nord-accordion-trigger>
            What is your return policy?
            <nord-icon name="arrow-expand-down-small" size="xxs"></nord-icon>
          </nord-accordion-trigger>
        </nord-accordion-header>
        <nord-accordion-panel>
          Returns accepted within 30 days. Items must be unused and in original packaging. Refunds
          processed within 5-7 business days.
        </nord-accordion-panel>
      </nord-accordion-item>
      <nord-accordion-item value="support">
        <nord-accordion-header>
          <nord-accordion-trigger>
            How can I contact customer support?
            <nord-icon name="arrow-expand-down-small" size="xxs"></nord-icon>
          </nord-accordion-trigger>
        </nord-accordion-header>
        <nord-accordion-panel>
          Reach us via email, live chat, or phone. We respond within 24 hours during business days.
        </nord-accordion-panel>
      </nord-accordion-item>
    </nord-accordion>
```

### Overview

```html
<nord-accordion .value=${['shipping']} class="n:container-xs">
      <nord-accordion-item value="shipping">
        <nord-accordion-header>
          <nord-accordion-trigger>
            What are your shipping options?
            <nord-icon name="arrow-expand-down-small" size="xxs"></nord-icon>
          </nord-accordion-trigger>
        </nord-accordion-header>
        <nord-accordion-panel>
          We offer standard (5-7 days), express (2-3 days), and overnight shipping. Free shipping on
          international orders.
        </nord-accordion-panel>
      </nord-accordion-item>
      <nord-accordion-item value="returns">
        <nord-accordion-header>
          <nord-accordion-trigger>
            What is your return policy?
            <nord-icon name="arrow-expand-down-small" size="xxs"></nord-icon>
          </nord-accordion-trigger>
        </nord-accordion-header>
        <nord-accordion-panel>
          Returns accepted within 30 days. Items must be unused and in original packaging.
        </nord-accordion-panel>
      </nord-accordion-item>
    </nord-accordion>
```

### Disabled

```html
<nord-accordion disabled .value=${['shipping']} class="n:container-xs">
      <nord-accordion-item value="shipping">
        <nord-accordion-header>
          <nord-accordion-trigger>
            What are your shipping options?
            <nord-icon name="arrow-expand-down-small" size="xxs"></nord-icon>
          </nord-accordion-trigger>
        </nord-accordion-header>
        <nord-accordion-panel>
          We offer standard (5-7 days), express (2-3 days), and overnight shipping.
        </nord-accordion-panel>
      </nord-accordion-item>
      <nord-accordion-item value="returns">
        <nord-accordion-header>
          <nord-accordion-trigger>
            What is your return policy?
            <nord-icon name="arrow-expand-down-small" size="xxs"></nord-icon>
          </nord-accordion-trigger>
        </nord-accordion-header>
        <nord-accordion-panel>
          Returns accepted within 30 days. Items must be unused and in original packaging.
        </nord-accordion-panel>
      </nord-accordion-item>
    </nord-accordion>
```

### Multiple

```html
<nord-accordion multiple .value=${['notifications']} class="n:container-xs">
      <nord-accordion-item value="notifications">
        <nord-accordion-header>
          <nord-accordion-trigger>
            Notification Settings
            <nord-icon name="arrow-expand-down-small" size="xxs"></nord-icon>
          </nord-accordion-trigger>
        </nord-accordion-header>
        <nord-accordion-panel>
          Manage how you receive notifications. You can enable email alerts for updates or push
          notifications for mobile devices.
        </nord-accordion-panel>
      </nord-accordion-item>
      <nord-accordion-item value="privacy">
        <nord-accordion-header>
          <nord-accordion-trigger>
            Privacy &amp; Security
            <nord-icon name="arrow-expand-down-small" size="xxs"></nord-icon>
          </nord-accordion-trigger>
        </nord-accordion-header>
        <nord-accordion-panel>
          Control your privacy settings and security preferences. Enable two-factor authentication,
          manage connected devices, review active sessions, and configure data sharing preferences.
          You can also download your data or delete your account.
        </nord-accordion-panel>
      </nord-accordion-item>
      <nord-accordion-item value="billing">
        <nord-accordion-header>
          <nord-accordion-trigger>
            Billing &amp; Subscription
            <nord-icon name="arrow-expand-down-small" size="xxs"></nord-icon>
          </nord-accordion-trigger>
        </nord-accordion-header>
        <nord-accordion-panel>
          View your current plan, payment history, and upcoming invoices. Update your payment
          method, change your subscription tier, or cancel your subscription.
        </nord-accordion-panel>
      </nord-accordion-item>
    </nord-accordion>
```

### Start

```html
<nord-accordion .value=${['shipping']} class="n:container-xs">
      <nord-accordion-item value="shipping">
        <nord-accordion-header>
          <nord-accordion-trigger justify-content="start">
            What are your shipping options?
            <nord-icon name="arrow-expand-down-small" size="xxs"></nord-icon>
          </nord-accordion-trigger>
        </nord-accordion-header>
        <nord-accordion-panel>
          We offer standard (5-7 days), express (2-3 days), and overnight shipping. Free shipping on
          international orders.
        </nord-accordion-panel>
      </nord-accordion-item>
      <nord-accordion-item value="returns">
        <nord-accordion-header>
          <nord-accordion-trigger justify-content="start">
            What is your return policy?
            <nord-icon name="arrow-expand-down-small" size="xxs"></nord-icon>
          </nord-accordion-trigger>
        </nord-accordion-header>
        <nord-accordion-panel>
          Returns accepted within 30 days. Items must be unused and in original packaging.
        </nord-accordion-panel>
      </nord-accordion-item>
    </nord-accordion>
```

### Custom Icon

```html
<nord-accordion .value=${['shipping']} class="n:container-xs">
      <nord-accordion-item value="shipping">
        <nord-accordion-header>
          <nord-accordion-trigger>
            What are your shipping options?
            <nord-icon name="arrow-down-small" size="xxs"></nord-icon>
          </nord-accordion-trigger>
        </nord-accordion-header>
        <nord-accordion-panel>
          We offer standard (5-7 days), express (2-3 days), and overnight shipping. Free shipping on
          international orders.
        </nord-accordion-panel>
      </nord-accordion-item>
      <nord-accordion-item value="returns">
        <nord-accordion-header>
          <nord-accordion-trigger>
            What is your return policy?
            <nord-icon name="arrow-down-small" size="xxs"></nord-icon>
          </nord-accordion-trigger>
        </nord-accordion-header>
        <nord-accordion-panel>
          Returns accepted within 30 days. Items must be unused and in original packaging.
        </nord-accordion-panel>
      </nord-accordion-item>
    </nord-accordion>
```

### Custom Gap

```html
<nord-accordion .value=${['shipping']} class="n:container-xs" style="--n-accordion-trigger-gap: var(--n-space-m)">
      <nord-accordion-item value="shipping">
        <nord-accordion-header>
          <nord-accordion-trigger>
            What are your shipping options?
            <nord-icon name="arrow-expand-down-small" size="xxs"></nord-icon>
          </nord-accordion-trigger>
        </nord-accordion-header>
        <nord-accordion-panel>
          We offer standard (5-7 days), express (2-3 days), and overnight shipping. Free shipping on
          international orders.
        </nord-accordion-panel>
      </nord-accordion-item>
      <nord-accordion-item value="returns">
        <nord-accordion-header>
          <nord-accordion-trigger>
            What is your return policy?
            <nord-icon name="arrow-expand-down-small" size="xxs"></nord-icon>
          </nord-accordion-trigger>
        </nord-accordion-header>
        <nord-accordion-panel>
          Returns accepted within 30 days. Items must be unused and in original packaging.
        </nord-accordion-panel>
      </nord-accordion-item>
    </nord-accordion>
```

## API Reference

### Properties

- **multiple** (`boolean`, default: `false`) — Whether multiple items can be open at the same time.
- **disabled** (`boolean`, default: `false`) — Whether the component should ignore user interaction.
- **orientation** (`'vertical' | 'horizontal'`, default: `'vertical'`) — The visual orientation of the accordion. Controls whether roving focus uses
left/right or up/down arrow keys.
- **loop-focus** (`boolean`, default: `true`) — Whether to loop keyboard focus back to the first item when the end of the
list is reached while using the arrow keys.

### Events

- **change** (`AccordionChangeEvent`) — Dispatched when an item is expanded or collapsed. The event includes a <code>value</code> array of the currently open item values.

### Slots

- **(default)** — Default slot for <a href="/components/accordion-item/">Accordion Item</a> elements.

### CSS Custom Properties

- `--n-accordion-item-gap` — Spacing between accordion items.

<!--
Source: https://nordhealth.design/raw/components/accordion.md
-->
