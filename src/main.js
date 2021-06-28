import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//按需加载elementui组件
import {useElement} from "./useElement.js"

const app = createApp(App)
useElement(app)

app.use(store).use(router)

app.mount('#app')
