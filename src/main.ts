import { createApp } from 'vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'
import './style.css'

const app = createApp(App);

app.use(autoAnimatePlugin)
   .mount('#app')


