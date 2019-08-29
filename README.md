# TrustBox module for Nuxt

[![npm (scoped with tag)](https://img.shields.io/npm/v/nuxt-trustbox-module/latest.svg)](https://npmjs.com/package/nuxt-trustbox-module)
[![npm](https://img.shields.io/npm/dt/nuxt-trustbox-module.svg)](https://npmjs.com/package/nuxt-trustbox-module)

> A NuxtJS module thats injects Trustpilot TrustBox code and provide a `<trustbox />` component
CodeSandebox: [Code reproduction](https://codesandbox.io/s/nuxt-trustbox-module-example-yzm19) | [Full page](https://yzm19.sse.codesandbox.io/)

## Table of Contents

* [Requirements](#requirements)
* [Installation](#installation)
* [Getting Started](#getting-started)
* [i18n Translation](#with-i18n)
* [Warnings](#warnings)

## Requirements

* yarn
* NuxtJS
* NodeJS

## Installation

```bash
yarn add nuxt-trustbox-module
```

## Getting Started

Add `nuxt-trustbox-module` to `modules` section of `nuxt.config.js`:

```js
{
  modules: [

    // Simple usage
    'nuxt-trustbox-module',

    // With options
    ['nuxt-trustbox-module', {
      businessunitId: 'TRUSTPILOT_BUSINESS_ID',
      businessunitName: 'TRUSTPILOT_BUSINESS_NAME',
    }],

 ]
}
```

```vue
<trustbox
  template-id="my_trustbox_template_id"
  style-height="150px"
  style-width="400px"
  theme="dark"
  locale="fr-FR" />
```

## i18n Translation

It's very simple to automatically translate the TrustBox if you are using `nuxt-i18n`:

```vue
<trustbox
  template-id="my_trustbox_template_id"
  :locale="$i18n.locales.find(l => l.code === $i18n.locale).iso"
  :key="$i18n.locale" />
```

> The `key` attribute is very important to refresh the component when the locale is switched.

## Module options

List of possible options in the module which can be passed through the module options or by props:

| Option              | Default  | Required | Description                                                                                                       |
|---------------------|----------|----------|-------------------------------------------------------------------------------------------------------------------|
| businessunitId      | `''`     | true     | Your Trustpilot Business ID, you can find it [here](https://businessapp.b2b.trustpilot.com/#/trustbox/library).   |
| businessunitName    | `''`     | true     | Your Trustpilot Business Name/URL, it's what comes after `https://trustpilot.com/review/businessunitName`.        |
| templateId          | `''`     | true     | The template ID of the TrustBox.                                                                                  |
| styleHeight         | `auto`   | false    | The height of the TrustBox.                                                                                       |
| styleWidth          | `100%`   | false    | The widrg of the TrustBox.                                                                                        |
| locale              | `en-US`  | false    | The locale to display on the TrustBox into a valid ISO format supported by Trustpilot.                            |
| theme               | `light`  | false    | The theme of the TrustBox (can be `light` or `dark`).                                                             |

> Note that the options passed through `nuxt.config.js` are `pascalCase` while options passed through `props` are `camel-case`. 

## Warnings

You may have an error in the console saying:

```
[Vue warn]: The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.
```

You can solve it by wrapping your TrustBox component with `<client-only>` (or `<no-ssr>` for Nuxt 2.9.0 and lower).
