<template>
  <div class="weather">
    <div class="row">
      <div class="col-6 offset-3">
        <div class="card border-primary mb-3">
          <div class="card-header">{{location.city}}</div>
          <div class="card-body" v-if="!!weather">
            <h4 class="card-title">{{weather.summary}}</h4>
            <skycon :condition="weather.icon" width="40" height="40"></skycon>
            <p class="card-text">{{Math.round(weather.temperature)}}°C</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueSkycons from "vue-skycon";
Vue.use(VueSkycons);

export default {
  name: "weather",
  components: {},
  computed: {
    weather() {
      return this.$store.getters["getWeather"].currently;
    },
    location() {
      return this.$store.getters["getLocation"];
    }
  }
};
</script>
