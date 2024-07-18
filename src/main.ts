import { createApp } from 'vue'
import store from './store'
import "./styles/css/common.css"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.use(FloatingVue)
app.mount('#app')

app.directive('focus', {
  mounted(el) {
    el.focus(); // el:directive 적용 element
  }
})