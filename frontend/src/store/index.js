import Vue from 'vue'
import Vuex from 'vuex'
import API from "../lib/API.js";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentWeather: {},
  },
  getters: {
    getWeather(state) {
      return state.currentWeather;
    }
  },
  mutations: {
    SET_WEATHER(state, weather) {
      state.currentWeather = weather;
    }
  },
  actions: {
    loadWeather({ commit }) {
      API.getWeather().then(result => {
        commit('SET_WEATHER', result)
        console.log(result)
      });
    },
  }
})
