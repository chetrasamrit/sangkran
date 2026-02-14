import { createApp } from 'vue'
import App from './App.vue'
import './style.css'   // <-- Tailwind imported here
import router from './router'  // <-- import router
import { createPinia } from 'pinia'


const app = createApp(App)
app.use(router)  // <-- use the router
app.use(createPinia())  // <-- use Pinia for state management
app.mount('#app')