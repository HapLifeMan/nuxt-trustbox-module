import path from 'path'

module.exports = function trustboxModule (moduleOptions) {

  const defaultConfig = {
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
  }

  const options = Object.assign({}, defaultConfig, moduleOptions)

  if (!options.businessunitId)
    throw new Error('[nuxt-trustbox-module] The `businessunitId` option is required.')

  if (!options.businessunitName)
    throw new Error('[nuxt-trustbox-module] The `businessunitName` option is required.')

  this.addPlugin({ src: path.resolve(__dirname, './plugin.js') })

  this.addPlugin({
    src: path.resolve(__dirname, './component.js'),
    options,
  })

}

module.exports.meta = require('../package.json')
