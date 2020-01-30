import Vue from 'vue'
import VueRouter from 'vue-router'
import Weather from '../views/Weather.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'weather',
    component: Weather
  }
]

const router = new VueRouter({
  routes
})

export default router
