import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
axios.defaults.baseURL='http://localhost:8000'
import ElementPlus from 'element-plus'

createApp(App).mount('#app')
