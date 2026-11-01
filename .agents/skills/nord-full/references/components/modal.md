# nord-modal

> Modal component is used to display content that temporarily blocks interactions
> with the main view of an application. Modal should be used sparingly and
> only when necessary.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use for confirmations and conditional changes.
- Use when the user is required to take an action.
- Use when you need to display content that temporarily blocks interactions with the main view of an application.
- Use when you need to ask a confirmation from a user before proceeding.
- Use for important warnings, as a way to prevent or correct critical errors.

> **Don't:** - Don’t use for nonessential information that is not related to the current userflow.
- Don’t use when the modal requires additional information for decision making that is unavailable in the modal itself.
- Don’t open a modal window on top of another modal.

---

## Content guidelines

Modal title should be clear, accurate and predictable. Always lead with a strong verb that encourages action. To provide enough context to user, use the {verb} + {noun} content formula:

> **Do:** Edit patient

> **Don't:** Edit the patient called John Doe

> **Do:** Discard changes?

> **Don't:** Discard?

> **Do:** Delete patient?

> **Don't:** Are you sure you want to delete this patent?

When writing modal titles, always write them in sentence case, not title case. The first word should be capitalized and the rest lowercase (unless a proper noun):

> **Do:** New appointment

> **Don't:** New Appointment

Avoid unnecessary words and articles in modal titles, such as “the”, “an” or “a”:

> **Do:** Change theme

> **Don't:** Change the theme

Avoid ending in punctuation:

> **Do:** Edit patient

> **Don't:** Edit patient.

---

## Focus behaviour

- Use the `autofocus` attribute to set the initial focus to the first location that accepts user input.
- If it is a transactional modal without form inputs, then `autofocus` should be set on the primary button in the modal footer. This is for efficiency since most users will simply dismiss the dialog as soon as they have read the message.
- If the modal contains a form, use `autofocus` in the first form field.
- Focus remains trapped inside the modal dialog until it is closed.
- For more examples and best practices, please see [WAI-ARIA Authoring Practices Modal Dialog Example](https://www.w3.org/TR/2017/NOTE-wai-aria-practices-1.1-20171214/examples/dialog-modal/dialog.html){rel="[\"nofollow\"]"}.

## Dismissing other overlays

Opening a modal dismisses any open overlays that share the browser top layer — `nord-popout`, `nord-dropdown`, `nord-combobox`, `nord-autocomplete` and `nord-tooltip` — so the modal is the topmost surface. This happens however the modal is opened, including from a keyboard shortcut with no pointer event. Toasts (`nord-toast-group`) are intentionally left visible.

The modal does this by dispatching a `nord-dismiss-overlays` event on `document` immediately **before** it opens; those overlays listen for it and hide. The event name and class are exported so an application can participate with its own (non-Nord) overlays. Dispatch it when you open your overlay:

```js
import { DismissOverlaysEvent } from '@nordhealth/components'

function openMyOverlay() {
  // 1. Ask any open Nord overlays to dismiss — BEFORE yours becomes visible.
  document.dispatchEvent(new DismissOverlaysEvent())
  // 2. Then open your own overlay.
  myOverlay.showModal()
}

// Runs client-side (a user interaction), so `document` is available.
openButton.addEventListener('click', openMyOverlay)
```

If you don't have the event name imported (e.g. plain HTML/JS), you can dispatch it by name — the two are equivalent:

```js
document.dispatchEvent(new Event('nord-dismiss-overlays'))
```

**Dispatch before opening, never after.** Dispatching once your overlay is already visible would dismiss overlays rendered *inside* it; dispatching first leaves them alone, because they are not open yet.

**Dispatch from the client only.** Do it in a browser context — an interaction handler or after mount — not during server-side rendering, since there is no `document` on the server (as with any DOM API in an SSR app such as Nuxt). In Nuxt, guard with `import.meta.client` or run it in `onMounted`.

The event is dispatched on `document` and does not cross iframe boundaries.

<style>

html pre.shiki code .szBVR, html code.shiki .szBVR{--shiki-default:#D73A49;--shiki-dark:#F97583}html pre.shiki code .sVt8B, html code.shiki .sVt8B{--shiki-default:#24292E;--shiki-dark:#E1E4E8}html pre.shiki code .sZZnC, html code.shiki .sZZnC{--shiki-default:#032F62;--shiki-dark:#9ECBFF}html pre.shiki code .sScJk, html code.shiki .sScJk{--shiki-default:#6F42C1;--shiki-dark:#B392F0}html pre.shiki code .sJ8bj, html code.shiki .sJ8bj{--shiki-default:#6A737D;--shiki-dark:#6A737D}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}html.dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}

</style>

## Examples

### Basic

```html
<nord-button variant="primary" id="openButton">Open modal</nord-button>

<nord-modal id="modal" size="s" aria-labelledby="basic-title">
  <h2 slot="header" id="basic-title">Modal title</h2>
  <p class="n-reset">Modal body text goes here.</p>

  <nord-button-group slot="footer" variant="spaced">
    <nord-button expand id="cancelButton">Cancel</nord-button>
    <nord-button expand id="confirmButton" variant="primary" autofocus>Save changes</nord-button>
  </nord-button-group>
</nord-modal>
```

### Composed

```html
<nord-button variant="primary" id="openButton">Open modal</nord-button>

<nord-modal id="modal" size="s" aria-labelledby="title">
  <nord-modal-header>
    <h2 id="title" class="n-typescale-l" style="margin: 0">Modal title</h2>
  </nord-modal-header>

  <nord-modal-body>
    <p class="n-reset">Modal body text goes here.</p>
  </nord-modal-body>

  <nord-modal-footer>
    <nord-button-group variant="spaced">
      <nord-button expand id="cancelButton">Cancel</nord-button>
      <nord-button expand id="confirmButton" variant="primary" autofocus>Save changes</nord-button>
    </nord-button-group>
  </nord-modal-footer>
</nord-modal>
```

### Custom Content

```html
<nord-button variant="primary" id="openButton">Open modal</nord-button>

<nord-modal id="modal" size="l" aria-labelledby="custom-title">
  <!-- No header zone: the close button is a standalone part floated over the
       content, so it no longer depends on the modal header. It is positioned
       against the modal frame (position: relative) by the consumer. -->
  <nord-modal-close style="position: absolute; inset-block-start: var(--n-space-s); inset-inline-end: var(--n-space-s)"></nord-modal-close>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--n-space-l); align-items: center">
    <div style="background: var(--n-color-surface-active); border-radius: var(--n-border-radius); padding: var(--n-space-l); block-size: 100%; display: flex; align-items: center; justify-content: center">
      <nord-icon name="interface-content-book" size="xxl"></nord-icon>
    </div>

    <div>
      <h2 id="custom-title" class="n-typescale-l" style="margin: 0 0 var(--n-space-s)">Completely custom layout</h2>
      <p class="n-reset">The modal holds a two-column layout with no header, body or footer zones. The close control is a composable <code>nord-modal-close</code> part positioned with utilities.</p>

      <nord-stack gap="s" style="margin-block-start: var(--n-space-m)">
        <nord-button variant="primary" id="confirmButton" expand>Get started</nord-button>
        <nord-modal-close><nord-button expand>Not now</nord-button></nord-modal-close>
      </nord-stack>
    </div>
  </div>
</nord-modal>
```

### Custom Footer

```html
<nord-button variant="primary" id="openButton">Open modal</nord-button>

<nord-modal id="modal" aria-labelledby="custom-footer-title" size="s">
  <h2 slot="header" id="custom-footer-title">Delete patient?</h2>

  <form method="dialog" id="delete-form">
    <p class="n-reset">All information you have entered will be deleted.</p>
  </form>

  <nord-stack slot="footer" direction="horizontal" align-items="center" gap="s">
    <nord-stack class="n:flex-1" direction="horizontal" gap="s" align-items="center">
      <nord-icon name="interface-warning"></nord-icon>
      <p>This cannot be undone</p>
    </nord-stack>

    <nord-button-group variant="spaced">
      <nord-button form="delete-form">Cancel</nord-button>
      <nord-button form="delete-form" variant="danger" autofocus>Delete</nord-button>
    </nord-button-group>
  </nord-stack>
</nord-modal>
```

### Destructive

```html
<nord-button variant="primary" id="openButton">Open modal</nord-button>

<nord-modal id="modal" size="s" aria-labelledby="destructive-title">
  <h2 slot="header" id="destructive-title">Discard changes?</h2>
  <p class="n-reset">All information you have entered will be deleted.</p>

  <nord-button-group slot="footer" variant="spaced">
    <nord-button expand id="cancelButton">Cancel</nord-button>
    <nord-button expand id="confirmButton" variant="danger" autofocus>Discard</nord-button>
  </nord-button-group>
</nord-modal>
```

### Feature

```html
<nord-button variant="primary" id="openButton">Open modal</nord-button>

<nord-modal size="m" id="modal" aria-labelledby="feature-title">
  <h2 slot="header" id="feature-title">Feature slot</h2>

  <div slot="feature">
    <svg width="782" height="412" viewBox="0 0 782 412" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="782" height="412" fill="#FF857D" />
    <g clip-path="url(#clip0_5_211)">
      <rect width="782" height="412" fill="#F6F8F8" />
      <rect x="391" width="206" height="206" fill="#CBD2D7" />
      <rect x="391" y="206" width="206" height="206" fill="#F6F8F8" />
      <rect x="597" width="195.5" height="206" fill="#D8DDE1" />
      <rect x="597" y="206" width="195.5" height="206" fill="#E3E9EB" />
      <rect x="389" y="266" width="4.00002" height="400" transform="rotate(90 389 266)" fill="#D8DDE1" />
      <rect x="389" y="326" width="4.00002" height="400" transform="rotate(90 389 326)" fill="#D8DDE1" />
      <rect x="389" y="386" width="4.00002" height="400" transform="rotate(90 389 386)" fill="#D8DDE1" />
      <path d="M-11 208H389V416H-11V208Z" stroke="#D8DDE1" stroke-width="4" />
      <rect x="327" y="210" width="4" height="198" fill="#D8DDE1" />
      <rect x="267" y="210" width="4" height="202" fill="#D8DDE1" />
      <rect x="207" y="210" width="4" height="202" fill="#D8DDE1" />
      <rect x="147" y="210" width="4" height="202" fill="#D8DDE1" />
      <rect x="87" y="210" width="4" height="202" fill="#D8DDE1" />
      <rect x="27" y="210" width="4" height="202" fill="#D8DDE1" />
      <rect x="391" y="206" width="206" height="206" rx="103" fill="#3559C7" />
      <circle opacity="0.1" cx="269" cy="328" r="60" stroke="white" stroke-width="4" />
      <rect x="-65" y="268" width="394" height="210" rx="60" stroke="#FC685E" stroke-width="4" />
      <path
        d="M180.384 167H206.256L163.248 48.392H134.52L91.512 167H117.384L124.44 146.168H173.328L180.384 167ZM131.832 124.328L148.968 74.264L165.936 124.328H131.832ZM289.781 148.016C287.429 148.016 286.085 146.336 286.085 143.312V111.56C286.085 92.744 272.981 81.656 250.301 81.656C230.981 81.656 217.709 91.568 213.509 108.536L233.837 113.576C235.181 105.344 241.397 100.472 249.965 100.472C258.197 100.472 263.069 104.336 263.069 110.384V110.72C263.069 114.248 260.885 116.936 256.685 117.608L235.181 120.968C219.221 123.32 209.981 131.888 209.981 144.656C209.981 160.112 220.229 169.016 237.869 169.016C249.797 169.016 259.037 164.816 264.581 157.256C267.101 163.64 272.981 167 281.549 167H293.813V148.016H289.781ZM245.429 152.384C237.701 152.384 232.997 149.024 232.997 143.48C232.997 138.44 237.029 135.08 243.413 134.072L263.069 131.048V134.072C263.069 145.16 256.013 152.384 245.429 152.384Z"
        fill="#667680"
      />
    </g>
    <defs>
      <clipPath id="clip0_5_211">
        <rect width="782" height="412" fill="white" />
      </clipPath>
    </defs>
  </svg>

    <div class="n-reset n-typeset n-padding-l">
      <h2>A blank canvas for rich content</h2>
      <p>
        The <code>feature</code> slot renders its content flush to the edges of the modal, with no padding or styling
        applied by the modal itself. The illustration above fills the top edge to edge because of it.
      </p>
      <p>
        Treat it as an empty canvas: place any markup inside — an image, illustration, video or fully custom layout —
        and control its presentation entirely. The modal contributes nothing of its own.
      </p>
    </div>
  </div>

  <form method="dialog" slot="footer">
    <nord-button expand variant="primary">Finish</nord-button>
  </form>
</nord-modal>
```

### Feature Without Header Or Footer

```html
<nord-button variant="primary" id="openButton">Open modal</nord-button>

<nord-modal size="m" id="modal" aria-labelledby="feature-without-header-or-footer-title">
  <div slot="feature">
    <svg width="782" height="412" viewBox="0 0 782 412" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="782" height="412" fill="#FF857D" />
    <g clip-path="url(#clip0_5_211)">
      <rect width="782" height="412" fill="#F6F8F8" />
      <rect x="391" width="206" height="206" fill="#CBD2D7" />
      <rect x="391" y="206" width="206" height="206" fill="#F6F8F8" />
      <rect x="597" width="195.5" height="206" fill="#D8DDE1" />
      <rect x="597" y="206" width="195.5" height="206" fill="#E3E9EB" />
      <rect x="389" y="266" width="4.00002" height="400" transform="rotate(90 389 266)" fill="#D8DDE1" />
      <rect x="389" y="326" width="4.00002" height="400" transform="rotate(90 389 326)" fill="#D8DDE1" />
      <rect x="389" y="386" width="4.00002" height="400" transform="rotate(90 389 386)" fill="#D8DDE1" />
      <path d="M-11 208H389V416H-11V208Z" stroke="#D8DDE1" stroke-width="4" />
      <rect x="327" y="210" width="4" height="198" fill="#D8DDE1" />
      <rect x="267" y="210" width="4" height="202" fill="#D8DDE1" />
      <rect x="207" y="210" width="4" height="202" fill="#D8DDE1" />
      <rect x="147" y="210" width="4" height="202" fill="#D8DDE1" />
      <rect x="87" y="210" width="4" height="202" fill="#D8DDE1" />
      <rect x="27" y="210" width="4" height="202" fill="#D8DDE1" />
      <rect x="391" y="206" width="206" height="206" rx="103" fill="#3559C7" />
      <circle opacity="0.1" cx="269" cy="328" r="60" stroke="white" stroke-width="4" />
      <rect x="-65" y="268" width="394" height="210" rx="60" stroke="#FC685E" stroke-width="4" />
      <path
        d="M180.384 167H206.256L163.248 48.392H134.52L91.512 167H117.384L124.44 146.168H173.328L180.384 167ZM131.832 124.328L148.968 74.264L165.936 124.328H131.832ZM289.781 148.016C287.429 148.016 286.085 146.336 286.085 143.312V111.56C286.085 92.744 272.981 81.656 250.301 81.656C230.981 81.656 217.709 91.568 213.509 108.536L233.837 113.576C235.181 105.344 241.397 100.472 249.965 100.472C258.197 100.472 263.069 104.336 263.069 110.384V110.72C263.069 114.248 260.885 116.936 256.685 117.608L235.181 120.968C219.221 123.32 209.981 131.888 209.981 144.656C209.981 160.112 220.229 169.016 237.869 169.016C249.797 169.016 259.037 164.816 264.581 157.256C267.101 163.64 272.981 167 281.549 167H293.813V148.016H289.781ZM245.429 152.384C237.701 152.384 232.997 149.024 232.997 143.48C232.997 138.44 237.029 135.08 243.413 134.072L263.069 131.048V134.072C263.069 145.16 256.013 152.384 245.429 152.384Z"
        fill="#667680"
      />
    </g>
    <defs>
      <clipPath id="clip0_5_211">
        <rect width="782" height="412" fill="white" />
      </clipPath>
    </defs>
  </svg>

    <div class="n-reset n-typeset n-padding-l">
      <h2 id="feature-without-header-or-footer-title">A blank canvas for rich content</h2>
      <p>
        The <code>feature</code> slot renders its content flush to the edges of the modal, with no padding or styling
        applied by the modal itself. The illustration above fills the top edge to edge because of it.
      </p>
      <p>
        Treat it as an empty canvas: place any markup inside — an image, illustration, video or fully custom layout —
        and control its presentation entirely. Here there is no header and no footer, just the feature slot.
      </p>
    </div>
  </div>
</nord-modal>
```

### Form Complex

```html
<style>nord-textarea {
    --n-textarea-block-size: 150px;
  }

  @media (max-width: 640px) {
    nord-stack {
      flex-direction: column;
    }
  }</style>
    <nord-button variant="primary" id="openButton">Open modal</nord-button>

<nord-modal id="modal" size="l" aria-labelledby="form-complex-title">
  <h2 id="form-complex-title" slot="header">Add note</h2>

  <form method="dialog" id="note-form">
    <nord-stack>
      <nord-stack direction="horizontal">
        <nord-select expand label="Type" autofocus>
          <option value="1">Other note</option>
          <option value="2">Another note</option>
          <option value="3">Yet another note</option>
        </nord-select>
        <nord-input label="Title" expand></nord-input>
      </nord-stack>

      <nord-stack direction="horizontal">
        <nord-input label="Client" expand type="search"></nord-input>
        <nord-input label="Patients" expand type="search"></nord-input>
      </nord-stack>

      <nord-stack direction="horizontal">
        <nord-select expand label="Consultation">
          <option value="1">22/03/2022 16:02 - Sargo hair loss</option>
          <option value="2">Consultation 2</option>
          <option value="3">Consultation 3</option>
          <option value="4">Consultation 4</option>
        </nord-select>
        <nord-select label="Diagnostic imaging request" expand placeholder="---">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
          <option value="4">Option 4</option>
        </nord-select>
      </nord-stack>

      <nord-select label="Consultation laboratory request" expand class="n:w-[calc(50%-0.5em)]" placeholder="---">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
      </nord-select>

      <nord-textarea expand label="Note" resize="auto"></nord-textarea>
    </nord-stack>
  </form>

  <nord-button-group slot="footer" variant="spaced">
    <nord-button form="note-form" expand>Cancel</nord-button>
    <nord-button form="note-form" expand variant="primary">Save</nord-button>
  </nord-button-group>
</nord-modal>
```

### Form Method Dialog

```html
<nord-button variant="primary" id="openButton">Open modal</nord-button>

<nord-modal id="modal" aria-labelledby="form-method-dialog-title">
  <h2 slot="header" id="form-method-dialog-title">Using the "dialog" method for forms</h2>

  <form id="dialog-method-form" method="dialog" class="n-reset n-typeset">
    <p>
      If you set a form's method to <code>"dialog"</code>, a modal can be dismissed by submitting that form. This is
      convenient as it requires no additional javascript.
    </p>
    <p>
      When the form is submitted, the modal's <code>returnValue</code> is set to the <code>value</code> of the submit
      button that was clicked.
    </p>
    <p>
      A button can be associated with a form, by setting the button's <code>form</code> attribute to the form's
      <code>id</code>.
    </p>
  </form>

  <nord-button-group slot="footer" variant="spaced">
    <nord-button form="dialog-method-form" expand value="cancel">Cancel</nord-button>
    <nord-button form="dialog-method-form" expand value="yes" variant="primary" autofocus>Save</nord-button>
  </nord-button-group>
</nord-modal>
```

### Form

```html
<nord-button id="trigger" variant="primary">Open modal</nord-button>

<nord-modal id="modal" aria-labelledby="form-title">
  <h2 slot="header" id="form-title">Give us feedback</h2>

  <form method="dialog" id="feedback-form">
    <nord-stack>
      <nord-select
        autofocus
        expand
        name="input-1"
        label="How would you describe the interface?"
        placeholder="Pick an option"
      >
        <option value="1">Something is missing</option>
        <option value="2">I'm confused or surprised</option>
        <option value="3">It's missing a feature</option>
        <option value="4">It's broken</option>
        <option value="5">Something else</option>
      </nord-select>
      <nord-textarea
        expand
        label="Is there anything else you'd like to add?"
        hint="(Optional)"
        placeholder="Ex. I had an idea…"
        name="input-2"
      ></nord-textarea>
      <p>
        <strong>Note:</strong> some additional information may be included, including your email address. If you're
        looking to send feedback unrelated to this interface, email us.
      </p>
    </nord-stack>
  </form>

  <nord-button-group slot="footer" variant="spaced">
    <nord-button expand form="feedback-form" value="cancel">Cancel</nord-button>
    <nord-button expand form="feedback-form" type="submit" value="add" variant="primary">Submit</nord-button>
  </nord-button-group>
</nord-modal>

<div class="n:mbs-m">
  <output id="output"></output>
  <pre id="values"></pre>
</div>
```

### Managing Focus

```html
<nord-button variant="primary" id="openButton">Open modal</nord-button>

<nord-modal id="modal" aria-labelledby="managing-focus-title">
  <h2 slot="header" id="managing-focus-title">Managing focus in modals</h2>

  <form id="form" method="dialog" class="n-reset n-typeset">
    <p>
      Add the <code>autofocus</code> attribute to any interactive element within the modal, to have it automatically
      focus whenever the modal is opened.
    </p>

    <p>In this example the attribute has been added to the Submit element</p>
  </form>

  <nord-button-group slot="footer" variant="spaced">
    <nord-button form="form" expand>Cancel</nord-button>
    <nord-button form="form" expand variant="primary" autofocus>Submit</nord-button>
  </nord-button-group>
</nord-modal>
```

### Multiple Modals

```html
<nord-button id="trigger" variant="primary">Open modal</nord-button>

<nord-modal id="modal" aria-labelledby="multiple-modals-title">
  <h2 slot="header" id="multiple-modals-title">Give us feedback</h2>

  <div class="n-typeset n:mbe-m!">
    <p>
      This example demonstrates how to use multiple modals to get confirmation from a user before discarding their work.
      If you attempt to close this modal via the close button, pressing the <kbd>Esc</kbd> key, or clicking outside the
      modal, a second modal will be shown asking you to confirm your action.
    </p>

    <p>
      The first modal can only be closed by submitting its form or by confirming you want to discard your work in the
      second modal.
    </p>
  </div>

  <form method="dialog" id="message-form">
    <nord-textarea
      expand
      label="Your message"
      value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, iure?"
    ></nord-textarea>
  </form>

  <nord-button slot="footer" expand form="message-form" type="submit" variant="primary">Submit feedback</nord-button>
</nord-modal>

<nord-modal id="confirmModal" size="s" aria-labelledby="confirm-title">
  <h2 slot="header" id="confirm-title">Discard changes?</h2>
  <p class="n-reset">All information you have entered will be deleted.</p>

  <nord-button-group slot="footer" variant="spaced">
    <nord-button expand id="cancelButton">Cancel</nord-button>
    <nord-button expand id="confirmButton" variant="danger" autofocus>Discard</nord-button>
  </nord-button-group>
</nord-modal>
```

### Preventing Close

```html
<nord-button variant="primary" id="openButton">Open modal</nord-button>

<nord-modal id="modal" size="s" aria-labelledby="preventing-close-title">
  <h2 slot="header" id="preventing-close-title">Preventing close</h2>

  <form method="dialog" id="prevent-close-form">
    <nord-stack>
      <p>
        When a user hits Escape key, clicks the close button, or clicks outside, the modal emits a
        <code>cancel</code> event.
      </p>
      <p>If <code>preventDefault()</code> is called on the cancel event, then the modal will not close.</p>
      <nord-checkbox autofocus id="checkbox" label="Prevent close?"></nord-checkbox>
    </nord-stack>
  </form>

  <nord-button-group slot="footer" variant="spaced">
    <nord-button expand form="prevent-close-form">Cancel</nord-button>
    <nord-button expand form="prevent-close-form" variant="primary">Submit</nord-button>
  </nord-button-group>
</nord-modal>
```

### Persistent

```html
<nord-button variant="primary" id="openButton">Open modal</nord-button>

<nord-modal id="modal" size="s" persistent aria-labelledby="persistent-title">
  <h2 slot="header" id="persistent-title">Persistent modal</h2>

  <nord-stack>
    <p class="n-reset">
      This modal uses the <code>persistent</code> attribute. It cannot be dismissed
      by clicking the backdrop or pressing Escape, and the close button is automatically hidden.
    </p>
    <p>Only the action buttons below can close it.</p>
  </nord-stack>

  <nord-button-group slot="footer" variant="spaced">
    <nord-button expand id="cancelButton">Cancel</nord-button>
    <nord-button expand id="confirmButton" variant="primary" autofocus>Confirm</nord-button>
  </nord-button-group>
</nord-modal>
```

### Scroll Behavior

```html
<nord-button-group variant="spaced" wrap>
  <nord-button id="outerButton" variant="primary">Scroll externally</nord-button>
  <nord-button id="innerButton" variant="primary">Scroll internally</nord-button>
</nord-button-group>

<nord-modal id="outerModal" aria-labelledby="outerHeader">
  <h2 slot="header" id="outerHeader">Scroll externally</h2>

  <form method="dialog" id="outerForm" class="n-typeset n:mbe-m!">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
    </p>
    <div class="n:h-[80vh]"></div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis tenetur amet temporibus nulla? Quisquam, quaerat
      sed! Assumenda itaque dolor ratione id voluptatum, excepturi eius voluptas iste facilis ut, quas minus.
    </p>
  </form>

  <nord-button-group slot="footer" variant="spaced">
    <nord-button form="outerForm" expand value="cancel">Cancel</nord-button>
    <nord-button form="outerForm" expand variant="primary" value="accept">Accept terms</nord-button>
  </nord-button-group>
</nord-modal>

<nord-modal id="innerModal" aria-labelledby="innerHeader" scrollable>
  <h2 slot="header" id="innerHeader">Scroll internally</h2>

  <form method="dialog" id="innerForm" class="n-typeset n:mbe-m!">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
    </p>
    <div class="n:h-[80vh]"></div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis tenetur amet temporibus nulla? Quisquam, quaerat
      sed! Assumenda itaque dolor ratione id voluptatum, excepturi eius voluptas iste facilis ut, quas minus.
    </p>
  </form>

  <nord-button-group slot="footer" variant="spaced">
    <nord-button form="innerForm" expand value="cancel">Cancel</nord-button>
    <nord-button form="innerForm" expand variant="primary" value="accept">Accept terms</nord-button>
  </nord-button-group>
</nord-modal>
```

### Size

```html
<nord-button-group variant="spaced" wrap>
  <nord-button id="buttonSmall" variant="primary">Open small modal</nord-button>
  <nord-button id="buttonMedium" variant="primary">Open medium modal</nord-button>
  <nord-button id="buttonLarge" variant="primary">Open large modal</nord-button>
  <nord-button id="buttonExtraLarge" variant="primary">Open extra large modal</nord-button>
</nord-button-group>

<nord-modal id="modalSmall" size="s" aria-labelledby="smallHeader">
  <h2 id="smallHeader" slot="header">Small modal</h2>
  <form method="dialog" id="smallForm" class="n-reset">
    <p>Small modals are best used for confirmation dialogs.</p>
  </form>

  <nord-button-group slot="footer" variant="spaced">
    <nord-button expand form="smallForm">Cancel</nord-button>
    <nord-button expand form="smallForm" variant="primary" autofocus>Save</nord-button>
  </nord-button-group>
</nord-modal>

<nord-modal id="modalMedium" size="m" aria-labelledby="mediumHeader">
  <h2 id="mediumHeader" slot="header">Medium modal</h2>

  <form method="dialog" id="mediumForm" class="n-reset">
    <p>Medium is the default size, and is suitable for most use cases.</p>
  </form>

  <nord-button-group slot="footer" variant="spaced">
    <nord-button expand form="mediumForm">Cancel</nord-button>
    <nord-button expand form="mediumForm" variant="primary" autofocus>Save</nord-button>
  </nord-button-group>
</nord-modal>

<nord-modal id="modalLarge" size="l" aria-labelledby="largeHeader">
  <h2 id="largeHeader" slot="header">Large modal</h2>

  <form method="dialog" id="largeForm" class="n-reset n-typeset">
    <p>Large modals are best suited for complex forms which require lots of space.</p>
    <p>When using large modals, please ensure the layout continues to work in narrow viewports.</p>
  </form>

  <nord-button-group slot="footer" variant="spaced">
    <nord-button expand form="largeForm">Cancel</nord-button>
    <nord-button expand form="largeForm" variant="primary" autofocus>Save</nord-button>
  </nord-button-group>
</nord-modal>

<nord-modal id="modalExtraLarge" size="xl" aria-labelledby="extraLargeHeader">
  <h2 id="extraLargeHeader" slot="header">Extra large modal</h2>

  <form method="dialog" id="extraLargeForm" class="n-reset n-typeset">
    <p>Extra large modals are best suited for when you need to fill the full width of the viewport.</p>
    <p>When using extra large modals, please ensure the layout continues to work in narrow viewports.</p>
  </form>

  <nord-button-group slot="footer" variant="spaced">
    <nord-button expand form="extraLargeForm">Cancel</nord-button>
    <nord-button expand form="extraLargeForm" variant="primary" autofocus>Save</nord-button>
  </nord-button-group>
</nord-modal>
```

### Trigger Events

```html
<nord-button variant="primary" id="openButton">Open modal</nord-button>

<nord-modal id="modal" size="m" aria-labelledby="trigger-events-title">
  <h2 slot="header" id="trigger-events-title">Detecting Modal Close Triggers</h2>

  <nord-stack>
    <p class="n-reset">Try different ways to close the modal:</p>
    <ul class="n:m-0 n:[padding-left:1.5rem]">
      <li>Click outside (backdrop)</li>
      <li>Click the X button</li>
      <li>Press Escape key</li>
      <li>Click Cancel, Delete, or Save buttons</li>
      <li>Prevent close with checkbox, then Force Close</li>
    </ul>
    <p>Check the console to see the logged events. The original event that triggered the close is available on <code>event.trigger</code> in both <code>cancel</code> and <code>close</code> event handlers.</p>

    <nord-divider></nord-divider>

    <nord-checkbox id="preventClose" label="Prevent next close action"></nord-checkbox>
    <nord-checkbox id="preventXClose" label="Prevent X button from closing"></nord-checkbox>
  </nord-stack>

  <nord-button-group slot="footer" variant="spaced">
    <nord-button id="cancelBtn" expand>Cancel</nord-button>
    <nord-button id="deleteBtn" expand variant="danger">Delete</nord-button>
    <nord-button id="saveBtn" expand variant="primary" autofocus>Save</nord-button>
    <nord-button id="forceCloseBtn" expand variant="secondary">Force Close</nord-button>
  </nord-button-group>
</nord-modal>

<nord-toast-group id="toasts"></nord-toast-group>
```

### Terms

```html
<nord-button id="trigger" variant="primary">Open modal</nord-button>

<nord-modal id="modal" aria-labelledby="heading" class="n-typeset" scrollable>
  <h2 slot="header" id="heading">Terms &amp; agreements</h2>

  <form method="dialog" id="termsForm">
    <h3 class="n-typescale-l n:mbs-0!">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit
    </h3>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate.
    </p>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis tenetur amet temporibus nulla? Quisquam, quaerat
      sed! Assumenda itaque dolor ratione id voluptatum, excepturi eius voluptas iste facilis ut, quas minus.
    </p>

    <h3 class="n-typescale-l">Lorem ipsum dolor sit</h3>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate.
    </p>

    <h3 class="n-typescale-l">Lorem ipsum dolor sit amet consectetur</h3>

    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid repellat nam dolorum ab? Optio ex facere commodi
      aspernatur, laboriosam labore dicta totam ab repudiandae ullam quibusdam soluta odio, quis possimus.
    </p>

    <h3 class="n-typescale-l">Consectetur adipiscing elit</h3>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt amet eaque corrupti alias sint tempora dolorum,
      incidunt fugit architecto veritatis, eum id nulla doloribus aut numquam earum natus vero repellat.
    </p>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione rem officia hic odit laboriosam sed temporibus
      amet reprehenderit quod. Natus sit quia veniam accusantium officiis minus, deleniti a ipsam quisquam.
    </p>

    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit voluptas aperiam sit facilis excepturi hic ad
      iusto magni vel. Exercitationem iusto dolor placeat quisquam eaque cumque at incidunt, officia doloremque in earum
      nobis perspiciatis quo mollitia. Debitis eum fuga, excepturi quo dicta, deserunt ea quidem et, perspiciatis
      necessitatibus veritatis autem.
    </p>
  </form>

  <nord-button-group slot="footer" variant="spaced">
    <nord-button form="termsForm" expand value="cancel">Cancel</nord-button>
    <nord-button form="termsForm" expand variant="primary" autofocus value="accept">Accept terms</nord-button>
  </nord-button-group>
</nord-modal>
```

## API Reference

### Properties

- **open** (`boolean`, default: `false`) — Controls whether the modal is open or not.
- **size** (`'s' | 'm' | 'l' | 'xl'`, default: `'m'`) — Controls the max-width of the modal when open.
- **scrollable** (`boolean`, default: `false`) — By default if a modal is too big for the browser window,
the entire modal will scroll. This setting changes that behavior
so that the body of the modal scrolls instead, with the modal
itself remaining fixed.
- **persistent** (`boolean`, default: `false`) — When true, the modal will not close when clicking the backdrop or pressing Escape,
and the close button will be hidden. Only programmatic close or custom action buttons
can dismiss the modal.

### Events

- **cancel** (`ModalCancelEvent`) — Dispatched before the modal has closed when a user attempts to dismiss a modal. The event includes a trigger property containing the original event that caused the dismiss. Call preventDefault() on the event to prevent the modal closing.
- **close** (`ModalCloseEvent`) — Dispatched when a modal is closed for any reason. The event includes an optional trigger property containing the original event that caused the close, if the modal was closed by a user action.

### Slots

- **(default)** — Default slot
- **header** — Slot which holds the header of the modal, positioned next to the close button.
- **feature** — Slot for full bleed content like an image.
- **footer** — Slot which is typically used to hold call to action buttons, but can also be used to build custom footers.

### Methods

- **showModal** — `showModal() => void` — Show the modal, automatically moving focus to the modal or a child
element with an <code>autofocus</code> attribute.
- **close** — `close(returnValue?: string, trigger?: Event) => void` — Programmatically close the modal.
- **focus** — `focus(options?: FocusOptions) => void` — Programmatically focus the modal.

### CSS Custom Properties

- `--n-modal-padding-inline` (default: `var(--n-space-m)`) — Controls the padding on the sides of the modal, using our <a href="/tokens/#space">spacing tokens</a>.
- `--n-modal-padding-block` (default: `var(--n-space-m)`) — Controls the padding above and below the header of the modal, using our <a href="/tokens/#space">spacing tokens</a>.
- `--n-modal-max-inline-size` (default: `620px`) — Controls the width of the modal.

### Dependencies

- `icon`
- `footer`

<!--
Source: https://nordhealth.design/raw/components/modal.md
-->
