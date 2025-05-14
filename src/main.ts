
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router' 
import '@/assets/styles/main.scss'; // Asegúrate que sea "router" y no "routes"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
