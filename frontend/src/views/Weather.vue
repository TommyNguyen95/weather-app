<template>
  <div class="weather">
    <div class="row">
      <SearchCity />
      <div class="col-8">
        <div class="card border-primary mb-3">
          <div class="card-header">{{location.city}}</div>
          <div class="card-body" v-if="!!weather">
            <h4 class="card-title">{{weather.summary}}</h4>
            <div class="weather-icon">
              <skycon :condition="weather.icon" width="150" height="150"></skycon>
            </div>
            <div class="detail-section">
              <div class="detail">
                <p class="card-text">Temperatur</p>
                <p class="card-text">{{Math.round(weather.temperature)}}°C</p>
              </div>
              <div class="detail">
                <p class="card-text">Vind</p>
                <p class="card-text">{{Math.round(weather.windSpeed)}}💨</p>
              </div>
              <div class="detail">
                <p class="card-text">Nederbörd</p>
                <p class="card-text">{{Math.round(weather.precipIntensity)}}%</p>
              </div>
              <div class="detail">
                <p class="card-text">Luftfuktighet</p>
                <p class="card-text">{{Math.round(weather.humidity)}}%</p>
              </div>
            </div>
          </div>
        </div>
        <router-link v-if="location.city" :to="{ name: 'citypic', params: { city: location.city }}">
          <button class="btn btn-outline-secondary" style="width: 100%;">Klicka här för att se bilder från {{ location.city }}</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import SearchCity from "../components/Searchcity.vue";
import Vue from "vue";
import VueSkycons from "vue-skycon";
Vue.use(VueSkycons);

export default {
  name: "weather",
  components: {
    SearchCity
  },
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

<style scoped>
.detail-section {
  display: flex;
  justify-content: space-between;
}

.detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 0;
  flex-grow: 1;
  padding: 20px;
}

.card-title {
  text-align: center;
  font-weight: bold;
  margin: 0;
}

.card-text {
  font-weight: bold;
  font-size: 1rem;
}

.row {
  display: flex;
  justify-content: center;
}

.weather {
  display: flex;
  justify-content: center;
}

.weather-icon {
  text-align: center;
}
</style>
