import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const i18n = createI18n({
  locale: 'fr-FR',
  fallbackLocale: 'en-US',
  messages
})

app.use(i18n)

app.mount('#app')
