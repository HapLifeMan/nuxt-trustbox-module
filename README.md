# TrustBox module for Nuxt

[![npm (scoped with tag)](https://img.shields.io/npm/v/nuxt-trustbox-module/latest.svg)](https://npmjs.com/package/nuxt-trustbox-module)
[![npm](https://img.shields.io/npm/dt/nuxt-trustbox-module.svg)](https://npmjs.com/package/nuxt-trustbox-module)

> A NuxtJS module thats injects Trustpilot TrustBox code and provide a `<trustbox />` component

**CodeSandbox: [CODE REPRODUCTION](https://codesandbox.io/s/nuxt-trustbox-module-example-yzm19) | [FULL PAGE EXAMPLE](https://yzm19.sse.codesandbox.io/)**

## Why this package/module?

Because I use Nuxt for a lot of my projects and the classic TrustBox installation (injection of the script into the `head.scripts` of the `nuxt.config.js` configuration file doesn't work).

First I tried to create a plugin that injects the Trustpilot's script, the widget were displayed but only on the first load (SSR). When I switched between pages, if the widget was into the page, it wasn't displayed anymore because **there's an initialize function into the script executed on its load**.

So I had to re-execute this initialization function when a new trustbox-widget is added to the DOM and after the script was loaded 1 or more pages before. Then I decided to create the `<trustbox />` component which calls the initialization function when it's mounted.

Also, as the businessunitId and businessunitName should always be the same on your site, if you want to display multiple TrustBoxes without specifying these attributes each time, I added a config file.

## Table of Contents

* [Requirements](#requirements)
* [Installation](#installation)
* [Getting Started](#getting-started)
* [i18n Translation](#i18n-translation)

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

Here's how to use it:

```vue
<!-- Wrapping with <client-only> (or <no-ssr>) to prevent mismatching content between server and client -->
<client-only>

    <trustbox
        template-id="my_trustbox_template_id"
        style-height="150px"
        style-width="400px" />

</client-only>
```

## i18n Translation

It's very simple to automatically translate the TrustBox if you are using `nuxt-i18n`:

> The `key` attribute is very important to refresh the component when the locale is switched.

```vue
<!-- Wrapping with <client-only> (or <no-ssr>) to prevent mismatching content between server and client -->
<client-only>

    <trustbox
      template-id="my_trustbox_template_id"
      :locale="$i18n.locales.find(l => l.code === $i18n.locale).iso"
      :key="$i18n.locale" />

</client-only>
```

## Module options

List of possible options in the module which can be passed through the module options or by props:

> Note that the options passed through `nuxt.config.js` are `camelCase` while options passed through `props` are `kebab-case`. 

| Option              | Default  | Required | Description                                                                                                       |
|---------------------|----------|----------|-------------------------------------------------------------------------------------------------------------------|
| businessunitId      | `''`     | true     | Your Trustpilot Business ID, you can find it [here](https://businessapp.b2b.trustpilot.com/#/trustbox/library).   |
| businessunitName    | `''`     | true     | Your Trustpilot Business Name/URL, it's what comes after `https://trustpilot.com/review/businessunitName`.        |
| templateId          | `''`     | true     | Template ID of the TrustBox.                                                                                      |
| styleHeight         | `auto`   | false    | Height of the TrustBox.                                                                                           |
| styleWidth          | `100%`   | false    | Width of the TrustBox.                                                                                            |
| locale              | `en-US`  | false    | Locale to display on the TrustBox into a valid ISO format supported by Trustpilot.                                |
| theme               | `light`  | false    | Theme of the TrustBox (can be `light` or `dark`).                                                                 |
| tags                | `''`     | false    | Template ID of the TrustBox.                                                                                      |
| schemaType          | `''`     | false    | Enabled SEO Rich Snippets if configured to `organization`.                                                        |
| stars               | `''`     | false    | Specify stars to display on some widgets (example: `3,4,5`).                                                      |
