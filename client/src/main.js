// import './assets/main.css'

import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

pinia.use(({ store }) => {
  console.log(store, 'store')
  store.router = markRaw(router)
})

app.use(router)
app.use(pinia)

app.mount('#app')
