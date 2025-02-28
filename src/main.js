import './assets/nullstyle.css'
import 'vue-toastification/dist/index.css'

import { createApp } from 'vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { plugin, defaultConfig } from '@formkit/vue'
import { createRouter, createMemoryHistory } from 'vue-router'
import CIcon from '@/components/CIcon.vue'

import App from './App.vue'
import PortfolioView from './pages/PortfolioView.vue'
import AboutView from './pages/AboutView.vue'

const routes = [
  { path: '', redirect: 'Portfolio' },
  {
    path: '/Portfolio',
    name: 'Portfolio',
    component: PortfolioView,
    meta: {
      enterClass: 'animate__animated animate__fadeInLeft',
      leaveClass: 'animate__animated animate__fadeOutRight',
    },
  },
  {
    path: '/About',
    name: 'About',
    component: AboutView,
    meta: {
      enterClass: 'animate__animated animate__fadeInRight',
      leaveClass: 'animate__animated animate__fadeOutLeft',
    },
  },
]
const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

const app = createApp(App)
app.use(autoAnimatePlugin)
app.use(plugin, defaultConfig())
app.component('CIcon', CIcon)
app.use(router)
app.mount('#app')
