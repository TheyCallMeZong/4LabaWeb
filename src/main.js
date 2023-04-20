import { createApp } from 'vue'
import App from './App.vue'
import store from './lib/store.js'
import router from './lib/router.js'
import 'material-design-icons-iconfont'

const app = createApp(App)
app.use(router).use(store).mount('#app')

