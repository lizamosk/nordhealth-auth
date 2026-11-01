# Content Delivery Network

> Load Nord's packages directly from the CDN — available packages, URL structure, and subresource integrity.

*Nord Design System serves all of its packages via a Content Delivery Network for better performance and stability. Nord CDN also makes it faster to implement and use our packages in production.*

A Content Delivery Network (CDN) is a group of geographically distributed servers that speed up the delivery of web content by bringing it closer to where users are. CDNs cache content like web pages, images, and video in proxy servers near to your physical location. Some of the benefits of using Nord’s CDN includes:

- Faster load times and better performance for all users
- CDN scales more rapidly during heavy traffic
- Minimizes risk of traffic spikes at point of origin, ensuring stability
- Decreases infrastructure costs due to traffic offloading
- Faster to get up and running with development work

---

## Available packages

The following packages are available for usage via Nord CDN:

- **[Web Components](/components/):** `https://nordcdn.net/ds/components/`
- **[Design Tokens](/tokens/):** `https://nordcdn.net/ds/tokens/`
- **[Themes](/themes/):** `https://nordcdn.net/ds/themes/`
- **[Webfonts](/docs/developer/webfonts/):** `https://nordcdn.net/ds/fonts/`
- **[CSS Framework](/docs/developer/css-framework/):** `https://nordcdn.net/ds/css/`
- **[Nordicons](/icons/):** `https://nordcdn.net/ds/icons/`
- **[Color Utilities](/design/foundations/color-utilities/):** `https://nordcdn.net/ds/color/`
- **[Ag Theme Nord](/components/table/#recommendation-for-component-based-libraries):** `https://nordcdn.net/ds/ag-theme-nord/`

---

## URL structure

Nord CDN uses the following URL structure for the hosted packages:

```html
https://nordcdn.net/ds/<package
  >/<version>/<file> </file></version
></package>
```

To fetch e.g. the Webfonts using the above format, you would write it like:

```html
https://nordcdn.net/ds/fonts/2.0.0/fonts.css
```

- To find URLs for Webfonts, see [Webfonts documentation](/docs/developer/webfonts/)
- To find URLs for Design Tokens, see [Design Tokens documentation](/tokens/#usage)
- To find URLs for Themes, see [Themes documentation](/themes/)
- To find URLs for Nordicons, see [Nordicons documentation](/icons/)
- To find URLs for Color Utilities, scroll down.
- To find URLs for AG Theme Nord, scroll down.

---

## Subresource Integrity

Subresource Integrity is a security feature that enables browsers to verify that resources they fetch from a CDN are delivered without unexpected manipulation. It works by allowing you to provide a cryptographic hash that a fetched resource must match ([source: MDN](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity){rel="[\"nofollow\"]"}).

Our documentation automatically provides cryptographic hashes for the latest available package versions. To enable SRI verification, use the following tags in the `<head>` of your application:

### Design Tokens

```html
<link rel="stylesheet" href="https://nordcdn.net/ds/tokens/9.0.4/tokens.custom-properties.css" />
```

### Webfonts

```html
<link rel="stylesheet" href="https://nordcdn.net/ds/fonts/3.0.4/fonts.css" />
```

### Web Components

```html
<script type="module" src="https://nordcdn.net/ds/components/5.4.4/index.js"></script>
```

### CSS Framework

```html
<link rel="stylesheet" href="https://nordcdn.net/ds/css/5.3.0/nord.min.css" />
```

### Nordicons

```html
<img src="https://nordcdn.net/ds/icons/3.21.0/assets/[ICON NAME].svg" height="24" width="24" alt="" />
```

### Themes



<div className="[\"n-theme-nord\"]">





</div>

<div className="[\"n-theme-nord-high-contrast\"]">





</div>

<div className="[\"n-theme-nord-dark\"]">





</div>

<div className="[\"n-theme-nord-dark-high-contrast\"]">





</div>

### Color Utilities

```html
<script src="https://nordcdn.net/ds/color/3.0.23/index.min.js"></script>
```

### AG Theme Nord

```html
<link rel="stylesheet" href="https://nordcdn.net/ds/ag-theme-nord/3.0.24/ag-theme-nord.min.css" />
```

---

## Available versions

Nord CDN includes versioned releases of the following packages starting from:

- **@nordhealth/tokens:** `1.0.0` and newer
- **@nordhealth/themes:** `2.0.0` and newer
- **@nordhealth/fonts:** `2.0.0` and newer
- **@nordhealth/components:** `1.0.0-alpha.23` and newer
- **@nordhealth/css:** `1.0.0-alpha.0` and newer
- **@nordhealth/color:** `1.0.0` and newer
- **@nordhealth/ag-theme-nord:** `1.0.0` and newer

---

## Can I use Nord CDN in my own project?

Nord Design System is solely meant for building digital products and experiences for [Nordhealth](https://nordhealth.com){rel="[\"nofollow\"]"}. Please see the [terms of use](/resources/terms/) for full license details.

## Getting support

Need help with Nord CDN? Please head over to the [Support page](/resources/support/) for more guidelines and ways to contact us.

<!--
Source: https://nordhealth.design/raw/docs/developer/cdn.md
-->
