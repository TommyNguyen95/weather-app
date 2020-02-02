import Vue from 'vue'
import Vuex from 'vuex'
import API from "../lib/API.js";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentLocation: {},
    currentWeather: {},
  },
  getters: {
    getLocation(state) {
      return state.currentLocation;
    },
    getWeather(state) {
      return state.currentWeather;
    }
  },
  mutations: {
    SET_WEATHER(state, weather) {
      state.currentWeather = weather;
    },
    SET_LOCATION(state, location) {
      state.currentLocation = location;
    },
    SET_CITY(state, city) {
      state.currentLocation = {
        ...state.currentLocation,
        city
      }
    }
  },
  actions: {
    fetch({ dispatch }, city) {
      dispatch('fetchLocation', city).then((res) => {
        console.log("fetchLocation SUCCESS: ", res)
        dispatch('fetchCity', res);
        dispatch('loadWeather', res)
      });
    },
    fetchLocation({ commit }, city) {
      return API.getCordinates(city)
        .then(res => {
          console.log(res)
          commit('SET_LOCATION', res);
          return res;
        })
    },
    fetchCity({ commit }, { latitude, longitude }) {
      API.getAddress(latitude, longitude).then((res) => {
        console.log('getAdress: ', res.name);
        commit('SET_CITY', res.name);
      });
    },
    loadWeather({ commit }, { latitude, longitude }) {
      API.getWeather(latitude, longitude).then(result => {
        commit('SET_WEATHER', result)
        console.log(result)
      });
    },
  }
})
