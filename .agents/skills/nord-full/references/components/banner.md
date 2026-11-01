# nord-banner

> Banner informs users about important changes or conditions in the
> interface. Use this component if you need to communicate to users
> in a prominent way.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use this component if you need to communicate in a prominent way.
- Place banner at the top of the section it applies to.
- Use for highlighting errors and success statuses.
- Put banner close to the context it’s referring to.
- Move focus to the banner if it’s relevant to the current workflow.

> **Don't:** - Move focus to banner if it appears on page load.
- Use for highlighting general content or as a banner.
- Use to replace an error page.

---

## Content guidelines

Banner content should be clear, accurate and easy to understand:

> **Do:** We’re experiencing an incident. Please see our status page for more details.

> **Don't:** There was an error.

When writing banner content, always write it in sentence case, not title case. The first word should be capitalized and the rest lowercase (unless a proper noun):

> **Do:** We’re experiencing an incident.

> **Don't:** We’re Experiencing An Incident.

Always end in punctuation:

> **Do:** We’re experiencing an incident.

> **Don't:** We’re experiencing an incident

## Examples

### Basic

```html
<nord-stack>
      <nord-banner variant="info">
        We’ve updated your plan, make sure you know how these changes affect it.
        <a href="#">Learn more</a>.
      </nord-banner>
      <nord-banner variant="danger">
        We’re experiencing an incident. Please see our <a href="#">status page</a> for more details.
      </nord-banner>
      <nord-banner variant="warning">
        Payment details missing. To stay on your current plan, <a href="#">add payment details</a>.
      </nord-banner>
      <nord-banner variant="success">
        Your order has been shipped and will arrive on May 27th. <a href="#">Track order</a>.
      </nord-banner>
    </nord-stack>
```

### Overview

```html
<nord-banner variant="info">
      We’ve updated your plan, make sure you know how these changes affect it.
      <a href="#">Learn more</a>.
    </nord-banner>
```

### With Actions

```html
<nord-stack>
      <nord-banner variant="info">
        <strong>Update available</strong>
        <p>A new version is ready to install.</p>
        <nord-button slot="actions" size="s" variant="primary">Update now</nord-button>
      </nord-banner>
      <nord-banner variant="info">
        <strong>Update available</strong>
        <p>A new version is ready to install.</p>
        <nord-button
          slot="actions"
          size="s"
          square
          aria-label="Dismiss"
          onclick="this.closest('nord-banner').remove()"
        >
          <nord-icon name="interface-close-small"></nord-icon>
        </nord-button>
      </nord-banner>
    </nord-stack>
```

### Info Banner

```html
<nord-banner>
      We’ve updated your plan, make sure you know how these changes affect it.
      <a href="#">Learn more</a>.
    </nord-banner>
```

### Inside Card

```html
<nord-card>
      <h2 slot="header">Paid invoices</h2>
      <nord-stack>
        <nord-banner variant="info">
          We’ve updated your plan, make sure you know how these changes affect it.
          <a href="#">Learn more</a>.
        </nord-banner>
        <nord-banner variant="danger">
          We’re experiencing an incident. Please see our <a href="#">status page</a> for more details.
        </nord-banner>
        <nord-banner variant="warning">
          Payment details missing. To stay on your current plan, <a href="#">add payment details</a>.
        </nord-banner>
        <nord-banner variant="success">
          Your order has been shipped and will arrive on May 27th. <a href="#">Track order</a>.
        </nord-banner>
      </nord-stack>
    </nord-card>
```

### Next To Button

```html
<nord-stack direction="horizontal" justify-content="start">
      <nord-button href="#" variant="primary" size="l">Submit ticket</nord-button>
      <nord-banner>You need to be logged in with a Nordhealth account to submit tickets.</nord-banner>
    </nord-stack>
```

### With Form

```html
<nord-stack class="n:max-inline-[340px] n:my-xl n:mx-auto">
      <nord-banner shadow variant="warning">You’ve been signed out. Please sign in to continue.</nord-banner>
      <nord-card padding="l">
        <h1 slot="header">Sign in to Nord</h1>
        <form action="#">
          <nord-stack>
            <nord-input
              label="Username"
              expand
              required
              hide-required
              name="username"
              type="email"
              placeholder="user@example.com"
            ></nord-input>
            <nord-input
              label="Password"
              expand
              required
              hide-required
              name="password"
              type="password"
              placeholder="••••••••"
            >
            </nord-input>
            <nord-button type="submit" expand variant="primary">Sign in</nord-button>
          </nord-stack>
        </form>
      </nord-card>
      <nord-card class="n-align-center"> New to Nord? <a href="#">Create an account</a>. </nord-card>
    </nord-stack>
```

## API Reference

### Properties

- **variant** (`'info' | 'danger' | 'success' | 'warning'`, default: `'info'`) — The style variant of the banner.

### Slots

- **(default)** — default slot
- **actions** — Optional slot for action buttons (a call to action and/or a dismiss button), shown at the trailing end of the banner.

### CSS Custom Properties

- `--n-banner-border-radius` (default: `var(--n-border-radius)`) — Controls how rounded the corners are, using <a href="/tokens/#border-radius">border radius tokens</a>.
- `--n-banner-box-shadow` (default: `var(--n-box-shadow-card)`) — Controls the surrounding shadow, using <a href="/tokens/#box-shadow">box shadow tokens</a>.

### Dependencies

- `icon`
- `stack`

<!--
Source: https://nordhealth.design/raw/components/banner.md
-->
