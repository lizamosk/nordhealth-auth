# nord-empty-state

> Empty state can be used when there is no data to display to
> describe what the user can do next. Empty state provides
> explanation and guidance to help user progress.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use when another component or part of UI has no items or data to show.
- Help users by clearly explaining the benefit and utility of a product or feature.
- Be encouraging and never make users feel unsuccessful or guilty.

> **Don't:** - Don’t use as a generic banner to highlight specific content.

---

## Content guidelines

Empty state headings should state to the user what’s wrong or why there’s no content:

> **Do:** No results found

> **Don't:** Error

When writing empty state headings, always write them in sentence case, not title case. The first word should be capitalized and the rest lowercase (unless a proper noun):

> **Do:** You don’t have access to this content

> **Don't:** You Don’t Have Access To This Content

Descriptions in empty states should add useful and relevant additional information:

> **Do:** We were unable to connect to the service. Click Retry to try again or View log to learn what happened.

> **Don't:** No connection.

Button labels should be clear, accurate and predictable. It should be possible for the user to understand what will happen when they click a button:

> **Do:** Clear filters

> **Don't:** Clear

When writing button labels, always write them in sentence case, not title case. The first word should be capitalized and the rest lowercase (unless a proper noun):

> **Do:** View log

> **Don't:** View Log

Avoid unnecessary words and articles in button labels, such as “the”, “an” or “a”:

> **Do:** Request access

> **Don't:** Request an access

## Examples

### Basic

```html
<nord-empty-state>
      <h2>Something’s wrong</h2>
      <p>We were unable to connect to the service. Click Retry to try again or View log to learn what happened.</p>
      <nord-stack justify-content="center" gap="s" direction="horizontal">
        <nord-button>View log</nord-button>
        <nord-button variant="primary">Retry</nord-button>
      </nord-stack>
    </nord-empty-state>
```

### Inside Card

```html
<nord-card>
      <h2 slot="header">Paid invoices</h2>
      <nord-empty-state>
        <h3>Something’s wrong</h3>
        <p>We were unable to connect to the service. Click Retry to try again or View log to learn what happened.</p>
        <nord-stack justify-content="center" gap="s" direction="horizontal">
          <nord-button>View log</nord-button>
          <nord-button variant="primary">Retry</nord-button>
        </nord-stack>
      </nord-empty-state>
    </nord-card>
```

### No Access

```html
<nord-card>
      <nord-empty-state>
        <h2>You don’t have access to this content</h2>
        <p>Make sure the content exists. If it does, ask an admin for a permission to see the content.</p>
        <nord-button variant="primary">Request access</nord-button>
      </nord-empty-state>
    </nord-card>
```

### No Results

```html
<nord-card>
      <nord-empty-state>
        <h2>No results found</h2>
        <p>Try adjusting your search term or filter options to find what you’re looking for.</p>
        <nord-button variant="primary">Clear filters</nord-button>
      </nord-empty-state>
    </nord-card>
```

## API Reference

### Slots

- **(default)** — default slot

<!--
Source: https://nordhealth.design/raw/components/empty-state.md
-->
