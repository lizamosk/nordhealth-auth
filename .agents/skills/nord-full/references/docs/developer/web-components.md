# Using Web Components

> Install, bundle, and use Nord Web Components across frameworks or plain HTML.

*Nord makes it effortless to implement and use its components across any framework or no framework at all. We accomplish this by using standardized web platform APIs and Web Components.*

Web Components are a set of technologies that provide a standards based component model for the Web. They allow us to create reusable [Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements){rel="[\"nofollow\"]"} with their functionality encapsulated away from the rest of the code.

This page covers setup, installation, bundling, and usage patterns. Looking for the reference pages for each Nord component? Browse the [Components library](/components/).

We've chosen to use Web Components because there is a strong requirement for Nord to be used in many different contexts and with varying technologies — from static HTML pages to server-rendered apps, through to single page applications authored with frameworks such as [React](https://reactjs.org/){rel="[\"nofollow\"]"} and [Vue](https://vuejs.org/){rel="[\"nofollow\"]"}. Web Components work great for Nord, because they:

- Are tech-agnostic instead of tech-specific
- Future proof our system with Web Standards
- Allow us to use any framework or no framework at all
- Provide great encapsulation for styles and functionality



[Browse components](/components/)

---

## Quick start

There are two necessary parts to using Nord's components — the [Components library](/components/) itself, and the [CSS Framework](/docs/developer/css-framework/). Everything else is optional. The fastest way to get started is to include the following directly into your page with `<script>` and `<link>` tags:

```html
<link rel="stylesheet" href="https://nordcdn.net/ds/css/5.3.0/nord.min.css" />
```

```html
<script type="module" src="https://nordcdn.net/ds/components/5.4.4/index.js"></script>
```

With these, you now have access to all of Nord's components! You can now for example add a button to your page:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>Nord Design System</title>
    <link rel="stylesheet" href="https://nordcdn.net/ds/css/4.2.0/nord.min.css" />
    <script type="module" src="https://nordcdn.net/ds/components/4.11.0/index.js"></script>
  </head>
  <body>
    <nord-button variant="primary">Hello Nordie</nord-button>
  </body>
</html>
```

> [!WARNING]
> Whilst this is a fast way to get started, the above method is not recommended for production since it will result in many small HTTP requests. This has a negative effect on page load times. We recommend using a 
> [
> bundler
> ](#bundling)
>  for production, for optimal performance.

---

## Installation

We strive to support as many use-cases as possible for consuming Nord's components. In its purest form, you can include our components and styles via `<script>` and `<link>` tags served from our CDN.

This approach is best for rapid prototyping, for use in static HTML pages, or for integrating into existing apps which do not have a JavaScript build step. For all other cases we recommend installing the packages locally via npm/yarn.

### CDN installation

Include the following in the `<head>` of your web page:

```html
<link rel="stylesheet" href="https://nordcdn.net/ds/css/5.3.0/nord.min.css" />
```

```html
<script type="module" src="https://nordcdn.net/ds/components/5.4.4/index.js"></script>
```

If working on a custom themed app, you should also include the [theme](/themes/) after the CSS Framework:

```html
<link rel="stylesheet" href="https://nordcdn.net/ds/css/5.3.0/nord.min.css" />
```



```html
<script type="module" src="https://nordcdn.net/ds/components/5.4.4/index.js"></script>
```

### Local installation

Before moving further with the installation, please make sure you have [Node.js](https://nodejs.org/en/){rel="[\"nofollow\"]"} installed on your machine. You can install the latest version through their website.

If you're planning on using Nord's Web Components in a project that doesn't yet use [Node Package Manager](https://www.npmjs.com){rel="[\"nofollow\"]"}, you'll have to first create a [package.json](https://docs.npmjs.com/files/package.json){rel="[\"nofollow\"]"} file. To do this, run `npm init` and follow the steps provided. Once finished, you can install Nord's Web Components by following the instructions below.

Run in your project or website root directory (where package.json lives):

```bash
# With NPM
npm install @nordhealth/css @nordhealth/components --save

# With Yarn
yarn add @nordhealth/css @nordhealth/components
```

### Required styles

It's a requirement that you use our [CSS framework](/css/) alongside the Web Components. The CSS framework includes all our [design tokens](/tokens/), a [default theme](/themes/) for the components, as well as a number of helpful utility classes.

Outside of the components themselves, we recommend leveraging the included [design tokens](/tokens/) and [utility classes](/css/) as much as possible to achieve a consistent look and feel.

If working in Veterinary or Healthcare space, you will also need a specific theme from our [themes package](/themes/) in your application:

```bash
# With NPM
npm install @nordhealth/themes --save

# With Yarn
yarn add @nordhealth/themes
```

### Bundling

Bundling and transpiling are considered application concerns. We cannot anticipate all requirements, loading strategies, and so on. So we publish our components as ES modules, written for modern browsers. These can then be bundled, tree shaken, and optimized by individual applications.

To import all components:

```js
import '@nordhealth/components'
```

To import specific components, which allows for optimal tree shaking:

```js
import '@nordhealth/components/lib/Badge'
import '@nordhealth/components/lib/Button'
import '@nordhealth/components/lib/Input'
```

These imports automatically register the Web Components (side effects).

### Browser support

Nord is tested in the latest two versions of all major browsers. See [browser support](/docs/developer/#browser-support) on the Getting Started page for the full list and our policy on older versions.

---

## Usage

### Properties

In browsers, elements have attributes in HTML and properties in JavaScript. Our attributes are always in `dash-case`, and the properties are in `camelCase`.

All attributes have corresponding underlying properties, but not all properties have corresponding attributes. Since HTML only has two types of values, strings and booleans, any property which is not a string or a boolean cannot exist as an attribute. For instance, a function cannot be passed via an attribute, so it must be passed via JavaScript:

```html
<nord-calendar></nord-calendar>

<script type="module">
  const calendar = document.querySelector('nord-calendar')

  // this could not be set via an attribute
  calendar.isDateDisabled = function isWeekend(date) {
    return date.getDay() === 0 || date.getDay() === 6
  }
</script>
```

Boolean attributes are considered `false` by omission, and `true` by inclusion. For instance, to set the `hideLabel` property of an input to `true`, you include the `hide-label` attribute without a value:

```html
<!-- hideLabel property is set to true -->
<nord-input label="Name" hide-label></nord-input>
```

It's recommended, as much as possible, to leverage attributes in HTML rather than properties in JavaScript.

---

### Events

Components emit custom DOM events, which can be listened to via `addEventListener` or whatever mechanism your framework of choice offers. It's worth noting that all our events bubble.

Where our components are drop-in replacements for native elements we follow native event names. For instance, our [Input](/components/input/#events) and other form components, emit `change`, `input`, `blur`, `focus` events.

```html
<nord-input id="events-example" label="Name" />
<script type="module">

  document.querySelector("#events-example").addEventListener("focus", e => {
    console.log("focus", e.target)
  })
</script>
```

Where there is no equivalent native event, we prefix our event names with `nord-`. For instance, the [Command Menu](/components/command-menu/#events) emits a `nord-select` event when a command is chosen from the menu.

> [!WARNING]
> It's best to consult the documentation for each component to be sure of event names.

---

### Methods

Some components offer methods which you can call to invoke behavior. Interactive components like [Input](/components/input/#methods), [Button](/components/button/#methods) etc. offer `focus()`, `blur()`, and `click()` methods, which behave like the native equivalents. Some components offer methods for which there is no native equivalent. For instance, [Date Picker](/components/date-picker/#methods) offers a `show()` and `hide()` method:

```html
<nord-stack>
<p>
Open date picker</p>
<nord-date-picker id="methods-example-picker" label="Date of birth" /></nord-stack>
<script type="module">

  const button = document.querySelector("#methods-example-button")
  const picker = document.querySelector("#methods-example-picker")

  button.addEventListener("click", () => {
    picker.show()
  })
</script>
```

If you are using a framework like React or Vue, you will need to get a reference to the DOM element to call the methods on. Please refer to the [Vue](https://vuejs.org/guide/essentials/template-refs.html){rel="[\"nofollow\"]"} or [React](https://reactjs.org/docs/refs-and-the-dom.html){rel="[\"nofollow\"]"} docs for further information.

> [!WARNING]
> It's best to consult the documentation for each component to get a full description of methods and their parameters.

---

### Slots

Web Components offer a feature called [slots](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots#adding_flexibility_with_slots){rel="[\"nofollow\"]"}. As with events, properties and methods, slots form part of the public API of a component. Slots allow web components to receive content as children, and place the content into their internal DOM.

The most common slot is the default slot, which captures any content placed as a child of a component that does not have a `slot` attribute. For instance, the [Button](/components/button/#slots) component has a default slot:

```html
<p>
Log in</p>
```

In the above example the text "Log in" is placed into the Button's default slot. You can also place elements inside the default slot, as can be seen here with the [Card](/components/card/) component:

```html
<nord-card>
  
<p>
Hello world</p></nord-card>
```

Some components also offer named slots. Slot names are decided by the components themselves. Named slots are used to differentiate certain types of content, giving components control over style and position. Here we use the [Button](/components/button/) component's `start` slot to position an icon. Notice the `slot="start"` attribute:

```html
<p>
Delete</p>
```

Slotted elements can be placed anywhere inside a component. The component will always place it in the correct place internally. Therefore, the below example will produce the exact same result as above, despite the order being changed:

```html
<p>
Delete</p>
```

> [!WARNING]
> Refer to a component's documentation for a complete list of available slots.

---

### Composition

Composition is how we give you more flexibility and customisability. Rather than configuring a single element through a long list of properties, many of our presentational components are built to be assembled by nesting dedicated child components — for example [Accordion](/components/accordion/) with its accordion items, [Item](/components/item/) with its media, content and action parts, or [Pagination](/components/pagination/) with its links and controls:

```html
<nord-item variant="outline">
  <nord-item-media variant="icon">
    <!-- icon, avatar or image -->
  </nord-item-media>
  <nord-item-content>
    <nord-item-title>Title</nord-item-title>
    <nord-item-description>Secondary line of text.</nord-item-description>
  </nord-item-content>
  <nord-item-actions>
    <!-- buttons or a chevron -->
  </nord-item-actions>
</nord-item>
```

Because these are real elements in your own markup, you can arrange, restyle and extend them, and interleave your own content — customisation that a single fixed element can't offer. This is the direction we favour for new presentational components.

---

### CSS Properties

Our Web Components offer CSS Custom Properties to allow for fine grained control over their presentation. These aren't offered as an alternative to [properties](#properties), you should use properties whenever possible, but more as an "escape hatch" for when a component needs to meet an edge case.

Component custom properties are prefixed with `--n-` followed by the name of the component and the property in question. For example consider this [Banner](/components/banner/) component that we want to add a `box-shadow` to:

```html
<nord-stack>
<p>
> [!WARNING]
> Default banner presentation</p>
<p>
> [!WARNING]
> Banner with box-shadow added</p></nord-stack>
```

Custom properties are inheritable as well which means they can be applied to any parent, or even the `:root` element, and their respective component will inherit the value(s).

```html
<nord-stack>
<p>
> [!NOTE]
> Example banner</p>
<p>
> [!WARNING]
> Example banner</p>
<p>
> [!WARNING]
> Example banner</p></nord-stack>
<style>

  .custom-property-banners {
    --n-banner-box-shadow: var(--n-box-shadow);
  }
</style>
```

You can see all the available custom properties for the Banner component on [its respective docs page](/components/banner/?example=inside+card#css-properties). Custom properties differ from component to component, refer to the component's documentation for a complete list of available custom properties.

> [!WARNING]
> Always use a component's properties over a CSS custom property wherever possible. CSS Custom properties are built with a counterpart "private" property, prefixed with 
> `
> --_n-
> `
> . Please refrain from using private properties as they are always subject to change and intended for internal component use only.

---

### Themes

We offer light and dark [themes](/themes/) for components in addition to high contrast variants. Themes operate at a global level, rather than per component. The [CSS Framework](/docs/developer/css-framework/) includes the light theme by default. For theme specific documentation, please see [themes documentation](/themes/). Make sure to try [theme playground](/themes/playground/){target="_blank"} as well to get familiar with theming and how to customize it.

```bash
# Install themes using NPM
npm install @nordhealth/themes --save

# Install themes using Yarn
yarn add @nordhealth/themes
```

[](/themes/)[Themes documentation](/themes/)

---

### Waiting for components to load

Web Components are entirely self-contained (both styles and behavior), and can be loaded/defined asynchronously. Therefore a component may not be ready for use immediately.

When a component is loading, it should be hidden from view to avoid a Flash Of Un-styled Component (see [FOUC](https://en.wikipedia.org/wiki/Flash_of_unstyled_content){rel="[\"nofollow\"]"}). Our CSS framework will do this for you, as long as it is loaded *before* the components.

If you set a property/attribute on a custom element before it's loaded, it will be applied correctly and will use the values once it's loaded. However, you *cannot* call a method on a component before the component is loaded.

Most of the time this is not an issue, as you will be calling methods in event handlers etc, when the component has already loaded. In cases where you want to call a method as soon as possible, for example on page load, you need to wait for the component to be defined, using [`customElements.whenDefined`](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/whenDefined){rel="[\"nofollow\"]"}:

```html
<nord-date-picker id="loading-example" label="Enter date" />
<script type="module">

  const picker = document.querySelector("#loading-example")

  // It's fine to set properties while components are still loading
  picker.isDateDisabled = function isWeekend(date) {
    return date.getDay() === 0 || date.getDay() === 6
  }

  // but if you want to immediately call a method,
  // you should wait for the component to be defined
  await customElements.whenDefined("nord-date-picker")
  picker.click()
</script>
```

---

### Code completion for VS Code

We generate TypeScript type definitions for all our Web Components. This will allow VS Code, and other editors, to offer code completion and type information for properties and methods, whether using TypeScript or not.

Refer to our specific instructions for [React](#types-and-editor-integration-with-react) and [Vue](#types-and-editor-integration-with-vue).

---

### Form controls

All our input components raise `change` events, and where it makes sense `input` events. These are useful for client-side validation, or for gathering values in javascript-based apps like with [Vue](#vue) or [React](#react).

Data inputs take a different approach to composition: they are standalone by default. A single element such as [Input](/components/input/) bundles its label, hint and error message, so the common case works with no extra markup. When you need more control over layout, you can opt out of this built-in chrome and compose the parts yourself — place the control inside a [Field](/components/field/), which supplies the label, helper text and error, or hide individual parts with attributes like `hide-label`. Convenient by default, composable when you need it.

```html
<form id="form-events-example">

  
<nord-stack>

    
<nord-input label="First name" name="firstName" />

    
<nord-input label="Last name" name="lastName" />

    
<p>
Submit</p>

    
<output />

  </nord-stack></form>
<script type="module">

  const data = {}
  const form = document.querySelector("#form-events-example")
  const output = form.querySelector("output")

  // Input events bubbling up from input components
  form.addEventListener("input", e => {
    data[e.target.name] = e.target.value
  })

  form.addEventListener("submit", e=> {
    e.preventDefault()
    output.innerHTML = `<code>${JSON.stringify(data)}</code>`
  })
</script>
```

For server-rendered apps, our components hook into the browser's [`formdata`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/formdata_event){rel="[\"nofollow\"]"} event, which means that our components' values will be submitted as part of POST/GET traditional form submissions, like native HTML elements:

```html
<form id="form-submission-example">

  
<nord-stack>

    
<nord-input label="First name" name="firstName" />

    
<nord-input label="Last name" name="lastName" />

    
<p>
Submit</p>

    
<output />

  </nord-stack></form>
<script type="module">

  const form = document.querySelector("#form-submission-example")
  const output = form.querySelector("output")

  const url = new URL(location.href)

  if (url.searchParams) {
    output.innerHTML = `<code>${url.searchParams}</code>`
  }
</script>
```

The browser's built-in [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData){rel="[\"nofollow\"]"} object can also be used to get all values from a form via JavaScript:

```html
<form id="form-data-example">

  
<nord-stack>

    
<nord-input label="First name" name="firstName" />

    
<nord-input label="Last name" name="lastName" />

    
<p>
Submit</p>

    
<output />

  </nord-stack></form>
<script type="module">

  const form = document.querySelector("#form-data-example")
  const output = form.querySelector("output")

  form.addEventListener("submit", e => {
    e.preventDefault()
    const data = new FormData(form)

    // This is an example, refer to MDN for more info about FormData.
    output.innerHTML = `<code>${JSON.stringify(Object.fromEntries(data))}</code>`
  })
</script>
```

---

### Localization

Nord provides a lightweight solution for localizing its components. Not all components need localizing, as for the most part snippets of text are set per instance. For example, the label on an [Input](/components/input) will likely be changed every time you use it. Those cases are an app-level concern.

However, some components have text which has no reason to change per instance. For example, the usage instructions in the footer of the [Command menu](/components/command-menu/), or the accessible labels for next/previous month buttons of the [Calendar](/components/calendar/).

For the latter cases, we provide a localization mechanism. It is not possible or feasible for Nord to anticipate every locale in which the components might be consumed, so we rely on individual teams and applications to translate and configure localization. To ensure Nord components work out of the box, we bundle translations for `en-US`.

[View localization documentation](/docs/developer/localization/)

---

## React

As of version 19, React has [excellent support](https://custom-elements-everywhere.com/#react){rel="[\"nofollow\"]"} for Web Components. They can now be used directly, with no [wrappers](#react-wrappers) or setup necessary.

[View example React project](https://github.com/nordhealth/react-example-project)



### Installation

Install with npm:

```bash
npm install @nordhealth/components @nordhealth/css --save
```

or yarn:

```bash
yarn add @nordhealth/components @nordhealth/css
```

### Usage

Import the `@nordhealth/components` and `@nordhealth/css` packages in your main entry point:

```jsx
// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import '@nordhealth/css'
import '@nordhealth/components'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
```

Then you can use the Nord's components throughout your app. For instance, here is an example using a JSX component:

```js
import { useState } from 'react'

function CounterButton() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nord-button variant="primary" onClick={() => setCount(count + 1)}>
        Clicks:
        {' '}
        {count}
      </nord-button>
    </>
  )
}

export default CounterButton
```

For optimal tree shaking, don't import the `@nordhealth/components` package in the main entry point. Instead, import the specific Nord components you're using in each component. For example:

```js
import { useState } from 'react'
import '@nordhealth/components/lib/Button'

function CounterButton() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nord-button variant="primary" onClick={() => setCount(count + 1)}>
        Clicks:
        {' '}
        {count}
      </nord-button>
    </>
  )
}

export default CounterButton
```

The following example shows how to use refs in a TypeScript application:

```tsx
import type { Input } from '@nordhealth/components'
import { useRef } from 'react'

function FocusInput() {
  const inputRef = useRef<Input>(null)

  return (
    <>
      <nord-button onClick={() => inputRef.current?.focus()} variant="primary">
        Focus input
      </nord-button>
      <nord-input label="Name" ref={inputRef}></nord-input>
    </>
  )
}

export default FocusInput
```

React requires that event listeners for Web Components use the event name **verbatim**. For instance, if a Web Component has an event named `exampleEvent`, you must listen for the `onexampleEvent` event. If a Web Component has an event named `example-event`, you must listen for the `onexample-event` event. This is unusual for React, which typically expects events to be like `onExampleEvent`. For example, this is how you would listen to the [`nord-focus-date` event of the Calendar component](/components/calendar#events):

```js
import { useState } from 'react'

function Calendar() {
  const [focusedDate, setFocusedDate] = useState('')

  return (
    <>
      <p>
        Focused date:
        {focusedDate}
      </p>
      <nord-calendar
        onnord-focus-date={e =>
          setFocusedDate(
            e.date.toLocaleDateString('en', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          )}
      >
      </nord-calendar>
    </>
  )
}

export default Calendar
```

> [!WARNING]
> Note: For events that have the same name as a native event, you can still use the syntax you would expect. For example, 
> `
> onChange
> `
>  or 
> `
> onInput
> `
> .

### Types and editor integration with React

Nord's components work out of the box with React, but they don't provide any TypeScript support or editor integration. To improve the developer experience, we offer React-specific types for our components. They allow you to get IntelliSense for Nord components in JSX. Both in TypeScript and JavaScript projects.

To integrate these into your project, install `@nordhealth/components` as you normally would. Then add the following to your `tsconfig.json` in a TypeScript project, or `jsconfig.json` in a JavaScript project:

```json
{
  "compilerOptions": {
    "types": ["@nordhealth/components/lib/react.d.ts"]
  }
}
```

Now you should get full type support for Nord components in your React project. Including IntelliSense for Nord components in JSX.

### Server-side rendering (SSR) with React

Nord components can be imported in non-browser environments, for *shallowly* rendering on the server (within Next.js, for example). That is, the Nord component's tag and attributes set via JSX will be rendered, but the component's shadow DOM with all the styles and HTML in it will not be rendered on the server.

You might get hydration mismatch errors for some components, since Nord components reflect default values for properties to attributes after being defined, and some render to the light DOM. You can resolve these hydration mismatch errors by disabling server-side rendering for the component, or by adding `suppressHydrationWarning` to the component.

If you are using Next.js App Router, you must make sure any Nord components you import are beyond the `"use client";` boundary.

> [!WARNING]
> Note: we currently don't support server-side rendering of Nord components with the shadow DOM included.

### React wrappers

Whilst React supports Web Components, they were very awkward to use as-is [before React 19](https://react.dev/blog/2024/12/05/react-19#support-for-custom-elements){rel="[\"nofollow\"]"}. For this reason, we provide React-specific wrapper components in the package `@nordhealth/react`. This will allow you to use the Nord components as you would any other React component.

> [!WARNING]
> Note: React 19 makes these wrapper components unnecessary, so the 
> `@nordhealth/react`
>  package has been deprecated and will be removed in the next major release.
> 
> 
> 
> 
> For now, 
> `@nordhealth/react`
>  will continue to receive updates as its build is fully automated, but you should start planning on utilizing the 
> `@nordhealth/components`
>  package directly where possible.
> 
> 
> 
> 
> To continue having full type checking and auto-completion in your JSX, you can use 
> [the new type definition file for React](#types-and-editor-integration-with-react)
> .

Install with npm:

```bash
npm install @nordhealth/react @nordhealth/css --save
```

or yarn:

```bash
yarn add @nordhealth/react @nordhealth/css
```

You must import `@nordhealth/css` once in your main entry point, then import components from `@nordhealth/react` wherever they are needed:

```jsx
import { Button } from '@nordhealth/react'
import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import '@nordhealth/css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Button
      variant="primary"
      onClick={() => setCount(count + 1)}
    >
      Clicks:
      {' '}
      {count}
    </Button>
  )
}

const root = createRoot(document.querySelector('#app'))
root.render(<App />)
```

The React wrapper components forward their refs, so that you can get access to the underlying web component instance with `useRef`. The `@nordhealth/react` package also exports types for all the Web Components for convenience.

The following example shows how to use refs in a TypeScript application:

```tsx
import type { InputWC } from '@nordhealth/react'
import { Button, Input } from '@nordhealth/react'
import { useRef } from 'react'
import { createRoot } from 'react-dom/client'
import '@nordhealth/css'

function App() {
  const inputRef = useRef<InputWC>(null)

  function handleClick() {
    inputRef.current?.focus()
  }

  return (
    <>
      <Button variant="primary" onClick={handleClick}>
        Focus input
      </Button>
      <Input label="Name" ref={inputRef} />
    </>
  )
}

const root = createRoot(document.querySelector('#app'))
root.render(<App />)
```

### Disabling server-side rendering within Next.js

If you are using the React wrapper components within Next.js, then the easiest way of disabling server-side rendering is by importing them from our Next.js specific integration:

```js
// instead of:
import { Button } from "@nordhealth/react"

// do this:
import { Button } from "@nordhealth/react/lib/next.js"
```

This creates [dynamic imports with `ssr` set to `false`](https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading#skipping-ssr){rel="[\"nofollow\"]"} for you, so they only get loaded on the client side.

If you are using Next.js App Router, you must make sure any Nord components you import are beyond the `"use client";` boundary.

> [!WARNING]
> Note: the 
> `@nordhealth/react`
>  package (which includes the Next.js integration) has been deprecated and will be removed in the next major release.

---

## Vue

Vue has [excellent support](https://custom-elements-everywhere.com/#vue){rel="[\"nofollow\"]"} for Web Components out of the box, it only requires a little configuration.

[View example Vue project](https://github.com/nordhealth/vue-example-project)



### Installation

Install with npm:

```bash
npm install @nordhealth/components @nordhealth/css --save
```

or yarn:

```bash
yarn add @nordhealth/components @nordhealth/css
```

### Configuration

Vue needs to be configured to recognize Web Components. If you're using Vite, it can be done like this:

```js
// vite.config.js
import vue from '@vitejs/plugin-vue'

export default {
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: tag => tag.includes('-')
        }
      }
    })
  ]
}
```

For more information, and how to configure for other setups (e.g. Vue CLI), please see the [Vue docs](https://vuejs.org/guide/extras/web-components.html#using-custom-elements-in-vue){rel="[\"nofollow\"]"}.

### Usage

Import the `@nordhealth/components` and `@nordhealth/css` packages in your main entry point:

```js
import { createApp } from 'vue'
import App from './App.vue'

// main.js
import '@nordhealth/css'
import '@nordhealth/components'

createApp(App).mount('#app')
```

Then you can use the Nord's components throughout your app. For instance, here is an example using a single-file component:

```html
<script setup>
  import { ref } from 'vue'

  const count = ref(0)
</script>

<template>
  <nord-button variant="primary" @click="count++"> Count is: {{ count }} </nord-button>
</template>
```

For optimal tree shaking, don't import the `@nordhealth/components` package in the main entry point. Instead, import the specific Nord components you're using in each component. For example:

```html
<script setup>
  import { ref } from 'vue'
  import '@nordhealth/components/lib/Button'

  const count = ref(0)
</script>

<template>
  <nord-button variant="primary" @click="count++"> Count is: {{ count }} </nord-button>
</template>
```

Our components also support the [`v-model`](https://vuejs.org/api/built-in-directives.html#v-model){rel="[\"nofollow\"]"} directive for two-way data binding:

```html
<script setup>
  import { ref } from 'vue'

  const name = ref('')
</script>

<template>
  <nord-input v-model="name" label="Name"></nord-input>
  <output>{{ name }}</output>
</template>
```

However, for our [Checkbox](/components/checkbox/), [Toggle](/components/toggle/), and [Tag](/components/tag/) components you need to add `type="checkbox"` to get [`v-model`](https://vuejs.org/api/built-in-directives.html#v-model){rel="[\"nofollow\"]"} working. Otherwise, Vue has no way of knowing that it should bind to the `checked` property instead of the `value` property. For example:

```html
<script setup>
  import { ref } from 'vue'

  const selected = ref(false)
</script>

<template>
  <nord-checkbox v-model="selected" type="checkbox" label="Label"></nord-checkbox>
  <output>{{ selected }}</output>
</template>
```

Alternatively, you can always use the more verbose equivalent to [`v-model`](https://vuejs.org/api/built-in-directives.html#v-model){rel="[\"nofollow\"]"}:

```html
<script setup>
  import { ref } from 'vue'

  const selected = ref(false)
</script>

<template>
  <nord-checkbox :checked="selected" label="Label" @change="selected = $event.target.checked"></nord-checkbox>
  <output>{{ selected }}</output>
</template>
```

Sometimes, you may need to pass complex data such as objects, arrays, and functions. These must be passed to a Web Component as *properties* rather than *attributes*. For the most part, Vue does the correct thing, and will handle this without any particular treatment.

However, there may be rare cases where you need to be more explicit that you're supplying a property. For this, Vue has the syntax `.propName="value"`, where `propName` is the name of the property.

For instance, here is an example of passing a function to a component:

```html
<script setup>
  const isWeekend = (date) => date.getDay() === 0 || date.getDay() === 6
</script>

<template>
  <nord-date-picker label="Date of birth" .isDateDisabled="isWeekend"></nord-date-picker>
</template>
```

You can integrate Nord components with RouterLink components from Vue Router like this:

```html
<router-link to="/home" custom v-slot="{ navigate, href, route }">
  <nord-button :href="href" @click="navigate">{{ route.fullPath }}</nord-button>
</router-link>
```

Check out [the Vue Router](https://router.vuejs.org/api/#custom){rel="[\"nofollow\"]"} documentation for more information.

### Styling

Because our Web Components come with their styles built in, and our [CSS Framework](/docs/developer/css-framework/) comes with [utility helpers](/docs/developer/css-framework/#utilities), you should very rarely need to add CSS to Vue components. However, if you need to add custom styles, please use our [tokens](/tokens/) instead of fixed values and add scoped CSS within [Single-File Components](https://vuejs.org/guide/scaling-up/sfc.html){rel="[\"nofollow\"]"}:

```html
<template>
  <nord-badge>Status</nord-badge>
</template>

<style scoped>
  nord-badge {
    text-transform: capitalize;
  }
</style>
```

Using the `scoped` attribute will ensure the styles don't leak out of your component and affect other components.

Check out [the official Vue](https://vuejs.org/api/sfc-css-features.html){rel="[\"nofollow\"]"} documentation for more information.

### Types and editor integration with Vue

Nord's components work out of the box with Vue, but they don't provide any TypeScript support or editor integration. To improve the developer experience, we offer Vue-specific types for our components. They allow you to get IntelliSense for Nord components in templates of Vue Single-File Components. Both in TypeScript and JavaScript projects.

To integrate these into your project, install `@nordhealth/components` as you normally would. Then add the following to your `tsconfig.json` in a TypeScript project, or `jsconfig.json` in a JavaScript project:

```json
{
  "compilerOptions": {
    "types": ["@nordhealth/components/lib/vue.d.ts"]
  }
}
```

Now you should get full type support for Nord components in your Vue project. Including IntelliSense for Nord components in templates of Vue Single-File Components.

> [!WARNING]
> Note: previously these types lived in a dedicated 
> `
> @nordhealth/vue
> `
>  package, but this package has been deprecated and will be removed in the next major version.
> 
> 
> 
> 
> For now, 
> `@nordhealth/vue`
>  will continue to receive updates as its build is fully automated, but you should start planning on utilizing the new 
> `@nordhealth/components/lib/vue.d.ts`
>  type definition file instead.

### Server-side rendering (SSR) with Vue

Nord components can be imported in non-browser environments, for *shallowly* rendering on the server (within Nuxt, for example). That is, the Nord component's tag and attributes set via the Vue template will be rendered, but the component's shadow DOM with all the styles and HTML in it will not be rendered on the server.

You might get hydration mismatch errors for some components, since Nord components reflect default values for properties to attributes after being defined, and some render to the light DOM. You can resolve these hydration mismatch errors by disabling server-side rendering for the component, or by using the [data-allow-mismatch](https://vuejs.org/api/ssr.html#data-allow-mismatch){rel="[\"nofollow\"]"} attribute on the component.

> [!WARNING]
> Note: we currently don't support server-side rendering of Nord components with the shadow DOM included.

---

## Can I use this in my own project?

Nord Design System is solely meant for building digital products and experiences for [Nordhealth](https://nordhealth.com/){rel="[\"nofollow\"]"}. Please see the [terms of use](/resources/terms/) for full license details.

---

## Support

Need help with our Web Components? Please head over to the [Support page](/resources/support/) for more guidelines and ways to contact us.

---

## Attribution

Special thanks to the following projects that help make Nord possible.

- Components are built with [Lit](https://lit.dev/){rel="[\"nofollow\"]"}.
- Component metadata is generated by the [Custom Elements Manifest Analyzer](https://github.com/open-wc/custom-elements-manifest){rel="[\"nofollow\"]"}.
- Documentation is powered by [Nuxt Content](https://content.nuxt.com/){rel="[\"nofollow\"]"}.

<!--
Source: https://nordhealth.design/raw/docs/developer/web-components.md
-->
