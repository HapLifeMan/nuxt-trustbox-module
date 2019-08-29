import Vue from 'vue'

Vue.component('trustbox', {

  render (h) {

    return h('div', {
      class: ['trustpilot-widget'],
      attrs: {
        'data-locale': this.locale,
        'data-template-id': this.templateId,
        'data-businessunit-id': this.businessunitId,
        'data-style-height': this.styleHeight,
        'data-style-width': this.styleWidth,
        'data-theme': this.theme,
      },
    }, [
      h('a', {
        attrs: {
          href: this.truspilotPageURL,
          target: '_blank',
          rel: 'noopener',
        },
        domProps: { innerHTML: 'Trustpilot' },
      }),
    ])

  },

  props: {

    businessunitId: {
      type: String,
      default: '<%= options.businessunitId %>',
    },

    businessunitName: {
      type: String,
      default: '<%= options.businessunitName %>',
    },

    templateId: {
      type: String,
      required: true,
    },

    locale: {
      type: String,
      default: '<%= options.locale %>',
    },

    styleHeight: {
      type: String,
      default: '<%= options.styleHeight %>',
    },

    styleWidth: {
      type: String,
      default: '<%= options.styleWidth %>',
    },

    theme: {
      type: String,
      default: '<%= options.theme %>',
      validate: () => ['dark', 'light'].includes('<%= options.theme %>'),
    },

  },

  mounted () {

    if (window.Trustpilot)
      this.$nextTick(() => window.Trustpilot.loadFromElement(this.$el))

  },

  computed: {

    truspilotPageURL () {

      const locale = this.locale.split('-')[0]
      const prefix = (locale !== 'en' ? `${locale}.` : '')

      return `https://${prefix}trustpilot.com/review/${this.businessunitName}`

    },

  },

})
