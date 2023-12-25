import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import CustomButton from '@/components/UI/v-button.vue'

const app = createApp(App)

app.use(createPinia())
// app.use(router)

app.component('v-button', CustomButton)
app.mount('#app')

