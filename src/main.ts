import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./styles/css/common.css"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.directive('focus', {
  mounted(el) {
    el.focus(); // el:directive 적용 element
  }
})
app.mount('#app')
