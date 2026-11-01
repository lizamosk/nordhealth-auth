# nord-avatar

> Avatar is used for showing a thumbnail representation of a single user or entity.
> Default avatar illustration is displayed when no src is specified.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use the circle avatar to represent a single user or an animal.
- Use the square avatar for organizations or group of animals.
- Always add the name of the user, animal, organization, or group of animals using the `name` property.
- For the best results, use square images or images cropped into a square.

> **Don't:** - Don’t use the circle avatar to represent organizations or group of animals.
- Don’t use the square avatar to represent a single user or an animal.
- Don’t use an avatar when an icon is more suitable, for example when denoting groups or "things".
- Try to avoid using landscape or portrait images as avatars. Let users crop their images before or after uploading if possible.

## Examples

### Basic

```html
<nord-stack align-items="center" direction="horizontal" wrap>
      <nord-avatar name="Laura Williams" size="s"></nord-avatar>
      <nord-avatar name="Laura Williams" size="m"></nord-avatar>
      <nord-avatar name="Laura Williams" size="l"></nord-avatar>
      <nord-avatar name="Laura Williams" size="xl"></nord-avatar>
      <nord-avatar name="Laura Williams" size="xxl"></nord-avatar>
      <nord-avatar name="Laura Williams" size="xxxl"></nord-avatar>
    </nord-stack>
```

### Overview

```html
<nord-avatar name="Laura Williams"></nord-avatar>
```

### Image

```html
<nord-avatar src="https://nordhealth.design/img/avatar.jpg" name="Laura Williams" size="l"></nord-avatar>
```

### Icon

```html
<nord-avatar icon="generic-canine" name="Patient" size="l"></nord-avatar>
```

### Square Single

```html
<nord-avatar name="Bath Clinic" variant="square" size="l"></nord-avatar>
```

### Custom Image

```html
<nord-stack align-items="center" direction="horizontal" wrap>
      <nord-avatar src="https://nordhealth.design/img/avatar.jpg" name="Laura Williams" size="s"></nord-avatar>
      <nord-avatar src="https://nordhealth.design/img/avatar.jpg" name="Laura Williams" size="m"></nord-avatar>
      <nord-avatar src="https://nordhealth.design/img/avatar.jpg" name="Laura Williams" size="l"></nord-avatar>
      <nord-avatar src="https://nordhealth.design/img/avatar.jpg" name="Laura Williams" size="xl"></nord-avatar>
      <nord-avatar src="https://nordhealth.design/img/avatar.jpg" name="Laura Williams" size="xxl"></nord-avatar>
      <nord-avatar src="https://nordhealth.design/img/avatar.jpg" name="Laura Williams" size="xxxl"></nord-avatar>
    </nord-stack>
```

### Patients And Clients

```html
<style>strong {
    font-weight: var(--n-font-weight-heading);
    margin-inline-end: var(--n-space-s);
  }
  ul {
    padding: var(--n-space-m);
    padding-inline-start: var(--n-space-l);
  }
  nord-stack {
    margin-block-end: var(--n-space-xxl);
  }</style>
    <nord-stack>
      <h3 class="n-typeset">Patient</h3>
      <nord-divider></nord-divider>
      <nord-stack align-items="center" direction="horizontal" wrap>
        <nord-avatar name="Default" icon="generic-pet-paw" size="l"></nord-avatar>
        <p><strong>Default (animal) / Uncategorized / Other</strong></p>
      </nord-stack>
      <nord-stack align-items="center" direction="horizontal" wrap>
        <nord-avatar name="Amphibia" icon="generic-amphibia" size="l"></nord-avatar>
        <p><strong>Amphibia</strong> frog, toad</p>
      </nord-stack>
      <nord-stack align-items="center" direction="horizontal" wrap>
        <nord-avatar name="Arachnida" icon="generic-arachnida" size="l"></nord-avatar>
        <p><strong>Arachnida</strong> spider, tarantula, scorpion, other insects</p>
      </nord-stack>
      <nord-stack align-items="center" direction="horizontal" wrap>
        <nord-avatar name="Arachnida" icon="generic-birds" size="l"></nord-avatar>
        <p><strong>Bird</strong> parakeets, lovebirds, canaries, parrots</p>
      </nord-stack>
      <nord-stack align-items="center" direction="horizontal" wrap>
        <nord-avatar name="Canine" icon="generic-canine" size="l"></nord-avatar>
        <p><strong>Canine</strong> dog, fox, wolf, jackal, coyote</p>
      </nord-stack>
      <nord-stack align-items="center" direction="horizontal" wrap>
        <nord-avatar name="Caprinae" icon="generic-sheep" size="l"></nord-avatar>
        <p><strong>Caprinae</strong> sheep, goat, ram, gazelle</p>
      </nord-stack>
      <nord-stack align-items="center" direction="horizontal" wrap>
        <nord-avatar name="Cattle" icon="generic-cattle" size="l"></nord-avatar>
        <p><strong>Cattle</strong> cow, ox, buffalo, bison, bovinae</p>
      </nord-stack>
      <nord-stack align-items="center" direction="horizontal" wrap>
        <nord-avatar name="Equidae" icon="generic-equidae" size="l"></nord-avatar>
        <p><strong>Equidae</strong> horse, donky, mule, zebra</p>
      </nord-stack>
      <nord-stack align-items="center" direction="horizontal" wrap>
        <nord-avatar name="Feline" icon="generic-feline" size="l"></nord-avatar>
        <p><strong>Feline</strong> cat, lynx, leopard, ocelot</p>
      </nord-stack>
      <nord-stack align-items="center" direction="horizontal" wrap>
        <nord-avatar name="Fish" icon="generic-fish" size="l"></nord-avatar>
        <p><strong>Fish</strong> goldfish, neon tetra, betta fish, clownfish</p>
      </nord-stack>
      <nord-stack align-items="center" direction="horizontal" wrap>
        <nord-avatar name="Leporidae" icon="generic-leporidae" size="l"></nord-avatar>
        <p><strong>Leporidae</strong> rabbit, hare</p>
      </nord-stack>
      <nord-stack align-items="center" direction="horizontal" wrap>
        <nord-avatar name="Reptilia" icon="generic-reptilia" size="l"></nord-avatar>
        <p><strong>Reptilia</strong> snake, reptile, turtle, tortoise, lizard, dragons</p>
      </nord-stack>
      <nord-stack align-items="center" direction="horizontal" wrap>
        <nord-avatar name="Rodents" icon="generic-rodents" size="l"></nord-avatar>
        <p><strong>Rodents</strong> mouse, hamster, rat, guinae pig, squirrel</p>
      </nord-stack>
      <nord-stack align-items="center" direction="horizontal" wrap>
        <nord-avatar name="Suidae" icon="generic-suidae" size="l"></nord-avatar>
        <p><strong>Suidae</strong> pig, boar, hog</p>
      </nord-stack>
    </nord-stack>

    <nord-stack>
      <h3 class="n-typeset">Client (person)</h3>
      <nord-divider></nord-divider>
      <nord-stack align-items="center" direction="horizontal" wrap>
        <nord-avatar name="John Dorian" size="l">JD</nord-avatar>
        <p><strong>John Dorian</strong></p>
      </nord-stack>
      <nord-stack align-items="center" direction="horizontal" wrap>
        <nord-avatar name="Sir John Michael Dorian Jr." size="l">JD</nord-avatar>
        <p><strong>Sir John Michael Dorian Jr.</strong></p>
      </nord-stack>
      <nord-stack align-items="center" direction="horizontal" wrap>
        <nord-avatar name="John" size="l">J</nord-avatar>
        <p><strong>John</strong></p>
      </nord-stack>
      <nord-stack align-items="center" direction="horizontal" wrap>
        <nord-avatar name="Mx. Dorian III" size="l">D</nord-avatar>
        <p><strong>Mx. Dorian III</strong></p>
      </nord-stack>
      <nord-stack align-items="center" direction="horizontal" wrap>
        <nord-avatar name="J. D." size="l">JD</nord-avatar>
        <p><strong>J. D.</strong></p>
      </nord-stack>
      <ul>
        <li>Use 2 letters: First+Last initial</li>
        <li>No middle name</li>
        <li>If no first or last name, use 1 letter instead of 2</li>
        <li>No titles, suffixes, etc.</li>
      </ul>
    </nord-stack>

    <nord-stack>
      <h3 class="n-typeset">Herd or group of animals</h3>
      <nord-divider></nord-divider>
      <nord-stack align-items="center" direction="horizontal" wrap>
        <nord-avatar variant="square" name="Cattle" icon="generic-cattle" size="l"></nord-avatar>
        <p><strong>Herd name</strong></p>
      </nord-stack>
    </nord-stack>

    <nord-stack>
      <h3 class="n-typeset">Client (organization)</h3>
      <nord-divider></nord-divider>
      <nord-stack align-items="center" direction="horizontal" wrap>
        <nord-avatar class="n:[--n-avatar-color:var(--n-color-text-weaker)]" variant="square" name="Acme Co." size="l">
          A
        </nord-avatar>
        <p><strong>Acme Co.</strong></p>
      </nord-stack>
    </nord-stack>

    <nord-stack>
      <h3 class="n-typeset">Patient with a photo</h3>
      <nord-divider></nord-divider>
      <nord-stack align-items="center" direction="horizontal" wrap>
        <nord-avatar name="Scooby" icon="generic-canine" size="l"></nord-avatar>
        <p><strong>Scooby</strong></p>
      </nord-stack>
      <nord-stack align-items="center" direction="horizontal" wrap>
        <nord-avatar src="https://nordhealth.design/img/avatar-animal.jpg" name="Scooby" icon="generic-canine" size="l">
        </nord-avatar>
        <p><strong>Scooby</strong></p>
      </nord-stack>
    </nord-stack>

    <nord-stack>
      <h3 class="n-typeset">When to use circle / square</h3>
      <nord-divider></nord-divider>
      <nord-stack align-items="center" direction="horizontal" wrap>
        <nord-avatar
          class="n:[--n-avatar-color:var(--n-color-surface)] n:[--n-avatar-box-shadow:0_0_0_1px_var(--n-color-text-weaker)]"
          name="Circle"
          size="l"
        ></nord-avatar>
        <p><strong>Use circle for individuals or single animal</strong></p>
      </nord-stack>
      <nord-stack align-items="center" direction="horizontal" wrap>
        <nord-avatar
          class="n:[--n-avatar-color:var(--n-color-surface)] n:[--n-avatar-box-shadow:0_0_0_1px_var(--n-color-text-weaker)]"
          variant="square"
          name="square"
          size="l"
        >
        </nord-avatar>
        <p><strong>Use square for organizations or group of animals</strong></p>
      </nord-stack>
    </nord-stack>
```

### Square

```html
<nord-stack align-items="center" direction="horizontal" wrap>
      <nord-avatar name="Laura Williams" size="s" variant="square">L</nord-avatar>
      <nord-avatar name="Laura Williams" size="m" variant="square">LW</nord-avatar>
      <nord-avatar name="Laura Williams" size="l" variant="square">LW</nord-avatar>
      <nord-avatar name="Laura Williams" size="xl" variant="square">LW</nord-avatar>
      <nord-avatar name="Laura Williams" size="xxl" variant="square">LW</nord-avatar>
      <nord-avatar name="Laura Williams" size="xxxl" variant="square">LW</nord-avatar>
    </nord-stack>
```

### Users

```html
<style>strong {
    font-weight: var(--n-font-weight-heading);
    margin-inline-end: var(--n-space-s);
  }
  ul {
    padding: var(--n-space-m);
    padding-inline-start: var(--n-space-l);
  }
  nord-stack {
    margin-block-end: var(--n-space-xxl);
  }
  p {
    max-inline-size: 500px;
  }</style>
    <nord-stack>
      <h3 class="n-typeset">Users: Staff</h3>
      <nord-divider></nord-divider>
      <nord-stack align-items="center" direction="horizontal">
        <nord-avatar class="n:[--n-avatar-color:var(--n-color-accent)]" name="Anne Williams" size="l">AW</nord-avatar>
        <p><strong>Anne Williams</strong></p>
      </nord-stack>
      <nord-stack align-items="center" direction="horizontal">
        <nord-avatar
          src="https://nordhealth.design/img/avatar.jpg"
          name="Sir John Michael Dorian Jr."
          size="l"
        ></nord-avatar>
        <p><strong>Anne Williams</strong></p>
      </nord-stack>
      <ul>
        <li>If no photo is uploaded: use initials</li>
        <li>If photo is uploaded: use photo</li>
      </ul>
    </nord-stack>

    <nord-stack>
      <h3 class="n-typeset">Users: Clinic</h3>
      <nord-divider></nord-divider>
      <nord-stack align-items="center" direction="horizontal">
        <nord-avatar variant="square" name="Acme Clinic" size="l">A</nord-avatar>
        <p><strong>Acme Clinic</strong></p>
      </nord-stack>
    </nord-stack>

    <nord-stack>
      <h3 class="n-typeset">Blank</h3>
      <nord-divider></nord-divider>
      <nord-avatar size="l"></nord-avatar>
      <p>
        When creating a new user, since there are no photos or names attached to the new empty profile, there will be a
        blank (silhouette) as placeholder until a name is entered or a photo is uploaded.
      </p>
      <nord-avatar
        class="n:[--n-avatar-color:var(--n-color-border)] n:[--n-avatar-box-shadow:none]"
        variant="square"
        name="square"
        size="l"
      >
      </nord-avatar>
      <p>
        Similarly, if there are no names for the organization yet (during the creation process) use a blank version of the
        avatar.
      </p>
    </nord-stack>
```

### With Icon

```html
<nord-stack align-items="center" direction="horizontal" wrap>
      <nord-avatar name="Norfryd" icon="generic-pet-paw" size="s"></nord-avatar>
      <nord-avatar name="Norfryd" icon="generic-pet-paw" size="m"></nord-avatar>
      <nord-avatar name="Norfryd" icon="generic-pet-paw" size="l"></nord-avatar>
      <nord-avatar name="Norfryd" icon="generic-pet-paw" size="xl"></nord-avatar>
      <nord-avatar name="Norfryd" icon="generic-pet-paw" size="xxl"></nord-avatar>
      <nord-avatar name="Norfryd" icon="generic-pet-paw" size="xxxl"></nord-avatar>
    </nord-stack>
```

### With Initials

```html
<nord-stack align-items="center" direction="horizontal" wrap>
      <nord-avatar name="Laura Williams" size="s">L</nord-avatar>
      <nord-avatar name="Laura Williams" size="m">LW</nord-avatar>
      <nord-avatar name="Laura Williams" size="l">LW</nord-avatar>
      <nord-avatar name="Laura Williams" size="xl">LW</nord-avatar>
      <nord-avatar name="Laura Williams" size="xxl">LW</nord-avatar>
      <nord-avatar name="Laura Williams" size="xxxl">LW</nord-avatar>
    </nord-stack>
```

### With Tooltip

```html
<nord-avatar aria-describedby="tooltip" name="Laura Williams" size="l"></nord-avatar>
    <nord-tooltip id="tooltip" position="inline-end">Laura Williams (online)</nord-tooltip>
```

## API Reference

### Properties

- **size** (`'s' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'`, default: `'m'`) — The size of the avatar.
- **src** (`string | undefined`) — The URL of the avatar image uploaded by the user.
- **name** (`string`, default: `''`) — The name of the person or entity.
- **icon** (`string | undefined`) — The fallback icon.
- **variant** (`'default' | 'square'`, default: `'default'`) — The style variant of the avatar.

### CSS Custom Properties

- `--n-avatar-color` (default: `var(--n-color-status-highlight)`) — Controls the color of the avatar fallback, using <a href="/tokens/#color">color tokens</a>.
- `--n-avatar-size` (default: `var(--n-size-icon-l)`) — Controls the size of the avatar, using <a href="/tokens/#size">icon sizing tokens</a>.
- `--n-avatar-box-shadow` (default: `none`) — Controls the box shadow for the avatar.
- `--n-avatar-text-color` (default: `var(--n-color-text-on-accent)`) — Controls the color of the avatar’s text and icon, using <a href="/tokens/#color">color tokens</a>.

### Dependencies

- `visually-hidden`
- `icon`

<!--
Source: https://nordhealth.design/raw/components/avatar.md
-->
