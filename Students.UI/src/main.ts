import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router/index.ts'
import App from './App.vue'
import PrimeVue from "primevue/config"
import ToastService from "primevue/toastservice"

import 'primevue/resources/themes/aura-light-green/theme.css'
import './assets/style/styles.scss'
//import './assets/style/bootstrap.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.use(ToastService)
app.mount('#app')
