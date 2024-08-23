import { createApp } from 'vue'
import { createPinia } from 'pinia'
import store from './stores'
import "./styles/css/common.css"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App);
const pinia = createPinia();
app.use(router)
app.use(pinia)
app.use(store)
app.use(ElementPlus)
app.use(FloatingVue)
app.mount('#app')

app.directive('focus', {
  mounted(el) {
    el.focus(); // el:directive 적용 element
  }
})