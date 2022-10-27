import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import NProgress from "nprogress";


createApp(App).use(store).use(NProgress).use(router).mount('#app')
