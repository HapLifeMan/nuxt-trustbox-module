import path from 'path'
import defu from 'defu'

import { defineNuxtModule, addComponent, isNuxt2 as _isNuxt2 } from '@nuxt/kit'
import { resolveRuntimeDir } from './dirs'

export default defineNuxtModule({

  defaults: (nuxt) => ({
        businessunitId: '',
        businessunitName: '',
        templateId: '',
        locale: 'en-US',
        styleHeight: 'auto',
        styleWidth: '100%',
        theme: 'light',
        tags: '',
        schemaType: '',
        stars: '',
  }),

  setup (options, nuxt) {

    if (!options.businessunitId)
      throw new Error('[nuxt-trustbox-module] The `businessunitId` option is required.')

    if (!options.businessunitName)
      throw new Error('[nuxt-trustbox-module] The `businessunitName` option is required.')

    const isNuxt2 = _isNuxt2(nuxt)

    const useNuxtMeta = fn => fn(isNuxt2 ? nuxt.options.head : nuxt.options.app.head)

    useNuxtMeta(head => {

        head.script = head.script ?? []

      head.script.push({
        defer: true,
        async: true,
        // crossorigin: 'anonymous',
        src: `//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js`
      })

    })

    addComponent({
        name: 'trustbox',
      filePath: resolveRuntimeDir('components', 'trustbox.vue'),
    })

    if (isNuxt2) nuxt.options.publicRuntimeConfig['trustbox'] = defu(nuxt.options.publicRuntimeConfig['trustbox'], options)
    else nuxt.options.runtimeConfig.public['trustbox'] = defu(nuxt.options.runtimeConfig.public['trustbox'], options)

  },

})

module.exports.meta = require('../package.json')
