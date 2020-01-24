import Vue from 'vue'
import VueRouter from 'vue-router'
import Weather from '../views/Weather.vue'
import City from '../views/City.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'weather',
    component: Weather
  },
  {
    path: '/city',
    name: 'city',
    component: City
  }
]

const router = new VueRouter({
  routes
})

export default router
