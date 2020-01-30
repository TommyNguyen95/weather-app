<template>
  <div class="weather">
    <div class="row">
      <div class="col-6 offset-3">
        <div class="card border-primary mb-3">
          <div class="card-header">{{weather.timezone}}</div>
          <div class="card-body" v-if="!!weather.currently">
            <h4 class="card-title">{{weather.currently.summary}}</h4>
            <skycon condition="clear-day" width="40" height="40"></skycon>
            <p class="card-text">{{weather.currently.temperature}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueSkycons from 'vue-skycon'
Vue.use(VueSkycons)


export default {
  name: "weather",
  components: {},
  created() {
    this.$store.dispatch("loadWeather");
  },
  computed: {
    weather() {
      return this.$store.getters["getWeather"];
    }
  }
};
</script>
