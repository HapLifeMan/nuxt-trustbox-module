<script>

    import { h } from 'vue'
    import { useRuntimeConfig } from '#imports'

    export default {

        render () {

            return h('div', {
            class: ['trustpilot-widget'],
            'data-locale': this.locale || this.options.locale,
            'data-template-id': this.templateId || this.options.templateId,
            'data-businessunit-id': this.businessunitId || this.options.businessunitId,
            'data-style-height': this.styleHeight || this.options.styleHeight,
            'data-style-width': this.styleWidth || this.options.styleWidth,
            'data-theme': this.theme || this.options.theme,
            'data-tags': this.tags || this.options.tags,
            'data-schema-type': this.schemaType || this.options.schemaType,
            'data-stars': this.stars || this.options.stars,
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
                default: null,
            },

            businessunitName: {
                type: String,
                default: null,
            },

            templateId: {
                type: String,
                default: null,
            },

            locale: {
                type: String,
                default: null,
            },

            styleHeight: {
                type: String,
                default: null,
            },

            styleWidth: {
                type: String,
                default: null,
            },

            theme: {
                type: String,
                default: null,
            },

            tags: {
                type: String,
                default: null,
            },

            schemaType: {
                type: String,
                default: null,
            },

            stars: {
                type: String,
                default: null,
            },

        },

        beforMount () {

            if (window.Trustpilot)
            this.$nextTick(() => window.Trustpilot.loadFromElement(this.$el))

        },

        computed: {

            options () {

                return { ...useRuntimeConfig()['trustbox'] || {} }

            },

            truspilotPageURL () {

            const locale = this.locale.split('-')[0]
            const prefix = (locale !== 'en' ? (locale + '.') : '')

            return 'https://' + prefix + 'trustpilot.com/review/' + this.businessunitName

            },

        },

    }

</script>