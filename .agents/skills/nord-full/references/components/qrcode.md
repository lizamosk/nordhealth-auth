# nord-qrcode

> QR Code component is used for providing information or links
> to users which they can quickly scan with their smartphone.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use to allow people to access information on their smartphone without the need to type.
- Always provide an alternative way to access the same information.

> **Don't:** - Don’t hide important information behind a QR Code only.

## Examples

### Basic

```html
<nord-stack>
      <nord-qrcode value="https://nordhealth.design"></nord-qrcode>
      <nord-input value="https://nordhealth.design" label="Value"></nord-input>
    </nord-stack>
```

### Color

```html
<nord-qrcode color="var(--n-color-accent)" value="https://nordhealth.design"></nord-qrcode>
```

### Error Correction

```html
<nord-stack direction="horizontal" wrap>
      <nord-qrcode correction="L" value="https://nordhealth.design"></nord-qrcode>
      <nord-qrcode correction="M" value="https://nordhealth.design"></nord-qrcode>
      <nord-qrcode correction="Q" value="https://nordhealth.design"></nord-qrcode>
      <nord-qrcode correction="H" value="https://nordhealth.design"></nord-qrcode>
    </nord-stack>
```

### Label

```html
<nord-qrcode label="Link to our website" value="https://nordhealth.design"></nord-qrcode>
```

### Size

```html
<nord-qrcode size="256" value="https://nordhealth.design"></nord-qrcode>
```

## API Reference

### Properties

- **value** (`string`, default: `''`) — The value of the QR Code, most commonly an URL.
- **label** (`string`, default: `''`) — Label used by assistive technology. If unspecified, the value will
be used instead.
- **size** (`number`, default: `128`) — The size of the rendered QR Code in pixels.
- **color** (`string`, default: `'var(--n-color-text)'`) — The fill color of the QR Code.
Can accept any valid CSS color value, including custom properties.
- **background** (`string`, default: `'var(--n-color-surface)'`) — The background color of the QR Code.
Can accept any valid CSS color value, including custom properties.
- **correction** (`'L' | 'M' | 'Q' | 'H'`, default: `'H'`) — Error correction level makes the QR Code bigger and helps users to
scan it without issues. L, M, Q and H values will use 7%, 15%, 25%
and 30% of the QR code for error correction respectively.

<!--
Source: https://nordhealth.design/raw/components/qrcode.md
-->
