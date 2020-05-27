import Vue from 'vue'
import VueRouter from 'vue-router'
import Weather from '../views/Weather.vue'
import CityPic from '../views/CityPic.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'weather',
    component: Weather
  },
  {
    path: '/picture/:city',
    name: 'citypic',
    component: CityPic,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
