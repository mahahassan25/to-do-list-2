import { createApp } from 'vue'
import App from './App.vue'
import '@mdi/font/css/materialdesignicons.css' 
//vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './router'
import store from './store'
import { createI18n } from 'vue-i18n'
import en from './locals/en'
import ar from './locals/ar'
const vuetify = createVuetify({
  components,
  directives,
})


 const i18n = createI18n({
  // locale: localStorage.getItem('locale'),
  locale:document.cookie.split("=")[1],
  messages: {
    en,
    ar
  },
  fallbackLocale: 'en',
})
export default i18n
createApp(App)
          .use(router)
          .use(store)
          .use(i18n)
          .use(vuetify)
          .mount('#app')
