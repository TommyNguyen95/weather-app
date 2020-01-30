import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGmaps from 'vue-gmaps'

Vue.use(VueGmaps, {
  key: 'AIzaSyCKD3w741387m4aEGr5QqGlT35g20AWFdg'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
