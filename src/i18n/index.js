import Vue from 'vue'
import VueI18n from 'vue-i18n'
import {LANGS} from './lang'

Vue.use(VueI18n)

// export default new VueI18n({
//   locale: 'en-US',
//   messages: LANGS,
//   // silentTranslationWarn: true
// })

// set lang
Vue.config.lang = 'en-US'

// set locales
Object.keys(LANGS).forEach(function (lang) {
  Vue.locale(lang, LANGS[lang])
})
