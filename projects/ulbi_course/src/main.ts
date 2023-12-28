import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import VButton from '@/components/UI/v-button.vue'
import VInput from '@/components/UI/v-input.vue'
import VDialog from '@/components/UI/v-dialog.vue'
import VSelect from '@/components/UI/v-select.vue'
import VPagination from '@/components/UI/v-pagination.vue';
import { router } from '@/router/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('v-button', VButton)
app.component('v-input', VInput)
app.component('v-dialog', VDialog)
app.component('v-select', VSelect)
app.component('v-pagination', VPagination)
app.mount('#app')
