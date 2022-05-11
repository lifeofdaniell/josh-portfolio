import Vue from 'vue'
import Vue2Filters from 'vue2-filters'

import metaUtils from '@/commons/meta-utils'
const textVersion = require('textversionjs')

Vue.mixin(Vue2Filters.mixin)

Vue.mixin({
  computed: {
    mxDescription () {
      return 'Vumele'
    }
  },
  methods: {
    mxMetaUtils (meta) {
      if (!(meta && meta.url)) {
        meta.url = process.env.siteURL
      }
      // Ensures description doesn't contain html tags (160 characters)
      meta.description = textVersion(meta.description).substring(0, 157) + '...'

      return metaUtils(meta)
    }
  }
})
