import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { stateSymbol, createState } from './store'

import './index.css'

const app = createApp(App)

// 通过use 将 路由插件安装到 app 中
app
  .use(router)
  .provide(stateSymbol, createState())
  .mount('#app')
