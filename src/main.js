import router from "./router"
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { clerkPlugin } from 'vue-clerk'

const app = createApp(App)


app.use(clerkPlugin, {
    publishableKey: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
  })



app.use(router)

app.mount('#app')
