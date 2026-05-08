import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/style/app.less'
const app = createApp(App)
app.use(router)
app.use(ElementPlus, { size: '' })
app.mount('#app')