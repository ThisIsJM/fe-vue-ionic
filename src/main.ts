import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { IonicVue } from '@ionic/vue';
import { createPinia } from 'pinia'

const pinia = createPinia()

const app = createApp(App).use(IonicVue).use(router).use(pinia);

app.use(router)

app.mount('#app')
