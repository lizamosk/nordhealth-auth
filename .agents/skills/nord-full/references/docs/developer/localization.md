# Localization

> Localize Nord components — how it works, registering translations, and handling partial translations.

*Localization is the process of adapting a product's translation to a specific country or region. Our team is committed to providing a high-quality experience for all our international users.*

Nord provides a lightweight solution for localizing its components. Not all components need localizing, as for the most part snippets of text are set per instance. For example, the label on an [Input](/components/input) will likely be changed every time you use it. Those cases are an app-level concern.

However, some components have text which has no reason to change per instance. For example, the usage instructions in the footer of the [Command menu](/components/command-menu/), or the accessible labels for next/previous month buttons of the [Calendar](/components/calendar/).

For the latter cases, we provide a localization mechanism. It is not possible or feasible for Nord to anticipate every locale in which the components might be consumed, so we rely on individual teams and applications to translate and configure localization. To ensure Nord components work out of the box, we bundle translations for `en-US`.

## How does it work?

We observe the [`lang`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang){rel="[\"nofollow\"]"} attribute on the `<html>` element of a page, and use this to decide which translations to use for components. If a matching translation is found, the components will use this. Otherwise, the components will fall back to using the built-in `en-US` translations.

For this reason, it is imperative that you correctly set the `lang` attribute on the `<html>` element. Not doing so is considered an accessibility failure, and will also cause unexpected or incorrect localization of components.

We use a [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver){rel="[\"nofollow\"]"} to observe and respond to changes to the `lang` attribute on `<html>`. So whilst you can do a full page reload whenever the language is changed, we also support changing languages on the fly without a full reload.

In addition to setting the `lang` attribute on `<html>`, you can also set the `lang` attribute on individual Nord components if you need to override the document language for specific use cases. When set on a component, it will create its own `MutationObserver` to monitor and respond to changes to the `lang` attribute. Use this feature sparingly, as it can impact performance if overused.

## Registering translations

To add a translation, we provide a `registerTranslation` function, which accepts an object containing localized text for a specific language/region.

```js
import { registerTranslation } from '@nordhealth/components'

registerTranslation({
  $lang: 'fi',
  $name: 'Suomi',
  $dir: 'ltr',

  // translations go here
})
```

For a full example of a real world translation, see the [example translation](#example-translation) section.

If you use TypeScript, we export a `Translation` type which will guide you in creating translations, and will raise compile time errors if you are missing any pieces of text:

```ts
import { registerTranslation, Translation } from '@nordhealth/components'

const yourTranslation: Translation = {
  // translation goes here
}

registerTranslation(yourTranslation)
```

For convenience you can also register multiple translations at once:

```ts
import { registerTranslation, Translation } from '@nordhealth/components'

const fi: Translation = { /* translation */}
const no: Translation = { /* translation */}

registerTranslation(fi, no)
```

You may have to support many languages, and not want to pay the cost of registering all translations on page load. In this case, you can register translations as needed, by [dynamically importing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports){rel="[\"nofollow\"]"} your translations modules:

```ts
import { registerTranslation } from '@nordhealth/components'

function loadTranslation(lang) {
  import(`path/to/your/translations/${lang}.js`).then(({ default: translation }) => registerTranslation(translation))
}

someDropdown.addEventListener('change', (e) => {
  const lang = e.target.value

  loadTranslation(lang).then(() => {
    document.documentElement.lang = lang
  })
})
```

### Partial translations

You don't need to provide all translation keys when registering a translation. It's safe to register **partial translations** with only the fields you're changing. Missing fields will be merged with existing translations.

> **Only `$lang` is required.** The `$name` and `$dir` properties are optional in partial translations and will be preserved from the existing translation if not provided.

```ts
import { registerTranslation, type PartialTranslation } from '@nordhealth/components'

// Minimal: Only provide $lang and the fields you're changing
const partialEnglish: PartialTranslation = {
  $lang: 'en',
  'nord-command-menu': {
    placeholder: 'Search clients by name, ID, email, phone...',
  },
}

registerTranslation(partialEnglish)
```

Or with full metadata (also supported):

```ts
const partialEnglish: PartialTranslation = {
  $lang: 'en',
  $name: 'English',
  $dir: 'ltr',
  'nord-command-menu': {
    placeholder: 'Search clients by name, ID, email, phone...',
  },
}

registerTranslation(partialEnglish)
```

After registering a partial translation:

- Only the fields you provide are updated
- All other fields are preserved from the existing translation (or defaults)
- Other components like `nord-calendar`, `nord-modal` remain unchanged
- Function values (like `noResults` callbacks) are properly preserved
- `$name` and `$dir` are preserved from existing registration if not provided

This approach is fully supported and tested. You can safely update a single translation field without needing to specify all keys.

## Example translation

Each translation has the following top-level properties:

- `$lang`: the language code for the translation. This should conform to the expected values of the [`lang`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang){rel="[\"nofollow\"]"} attribute.
- `$name`: a human-readable name for the translation.
- `$dir`: the writing direction of the language. The value for this must either be `"ltr"` or `"rtl"`.

Other top-level properties correspond to the component name in which the text is used, and below that the identifiers for individually translated snippets.

Note that there are a mix of strings, arrays, and functions as values. This is to give maximum flexibility when translating, and to allow for properly handling language-specific grammar.

Below is an example translation for the Finnish locale, which can be used as a reference:

```js
export default {
  '$lang': 'fi',
  '$name': 'Suomi',
  '$dir': 'ltr',

  'nord-command-menu': {
    instructions: 'Paina \'Enter\' vahvistaaksesi valinnan tai \'Escape\' peruuttaaksesi',
    inputLabel: 'Kirjoita komento jonka haluat suorittaa.',
    footerArrowKeys: 'Siirry',
    footerEnterKey: 'Valitse',
    footerEscapeKey: 'Esc sulje',
    footerBackspaceKey: 'Siirry takaisin',
    noResults: searchTerm => `Ei tuloksia haulle "${searchTerm}"`,
    tip: 'Vinkki: jotkin haut vaativat tarkan hakutermin. Koita kirjoittaa koko hakutermi kokonaisuudessaan, tai kokeile toista sanaa tai fraasia.',
    placeholder: 'Kirjoita komento tai hakusana…',
  },

  'nord-calendar': {
    prevMonthLabel: 'Edellinen kuukausi',
    nextMonthLabel: 'Seuraava kuukausi',
    monthSelectLabel: 'Kuukausi',
    yearSelectLabel: 'Vuosi',
  },

  'nord-date-picker': {
    modalHeading: 'Valitse päivämäärä',
    closeLabel: 'Sulje ikkuna',
    buttonLabel: 'Valitse päivämäärä',
    selectedDateMessage: 'Valittu päivämäärä on',
  },

  'nord-modal': {
    closeLabel: 'Sulje ikkuna',
  },

  'nord-nav-toggle': {
    label: 'Näytä/Piilota valikko',
  },

  'nord-textarea': {
    remainingCharacters: remaining => `${remaining} merkkiä jäljellä`,
  },

  'nord-notification': {
    dismissLabel: 'Sulje ilmoitus',
  },

  'nord-message': {
    unreadLabel: 'Lukematon',
  },

  'nord-tag': {
    removeLabel: 'Poista',
  },
}
```

## Localization framework integration

You can integrate the Nord translations easily with a localization framework by writing a wrapper around it.

The following TypeScript example integrates with [i18next](https://www.i18next.com/){rel="[\"nofollow\"]"}:

```ts
import type { Translation } from '@nordhealth/components'
import i18next from 'i18next'
import { useSupportedLocales } from './useSupportedLocales.js'

export function useNordTranslation(locale: string) {
  const supportedLocales = useSupportedLocales()

  // we want to fix the t function, so that it always matches the given locale,
  // allowing us to control when the translations are switched over
  const t = i18next.getFixedT(locale)

  const translation: Translation = {
    '$lang': locale,
    '$name': supportedLocales[locale].name,
    '$dir': supportedLocales[locale].dir,

    'nord-command-menu': {
      placeholder: t('common.nordComponents.commandMenu.placeholder'),
      instructions: t('common.nordComponents.commandMenu.instructions'),
      inputLabel: t('common.nordComponents.commandMenu.inputLabel'),
      footerArrowKeys: t('common.nordComponents.commandMenu.footerArrowKeys'),
      footerEnterKey: t('common.nordComponents.commandMenu.footerEnterKey'),
      footerEscapeKey: t('common.nordComponents.commandMenu.footerEscapeKey'),
      footerBackspaceKey: t(
        'common.nordComponents.commandMenu.footerBackspaceKey'
      ),
      noResults: (searchTerm: string) =>
        t('common.nordComponents.commandMenu.noResults', {
          searchTerm,
        }),
      tip: t('common.nordComponents.commandMenu.tip'),
    },
  }

  return translation
}
```

---

## Support

Need help with localization? Please head over to the [Support page](/resources/support/) for more guidelines and ways to contact us.

<!--
Source: https://nordhealth.design/raw/docs/developer/localization.md
-->
