import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import VButton from '@/components/UI/v-button.vue'
import VInput from '@/components/UI/v-input.vue'
import VDialog from '@/components/UI/v-dialog.vue'

const app = createApp(App)

app.use(createPinia())
// app.use(router)

app.component('v-button', VButton)
app.component('v-input', VInput)
app.component('v-dialog', VDialog)
app.mount('#app')
