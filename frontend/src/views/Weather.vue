<template>
  <div class="weather">
    <h1>Hello</h1>
    <div class="card border-primary mb-3" style="max-width: 30rem;">
      <div class="card-header">{{weather.timezone}}</div>
      <div class="card-body">
        <h4 class="card-title">Primary card title</h4>
        <p
          class="card-text"
        >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  </div>
</template>

<script>
import API from "../lib/API.js";

export default {
  name: "weather",
  components: {},
  data() {
    return {
      weather: {}
    };
  },
  mounted() {
    API.getWeather().then(result => {
      console.log(result);
      this.weather = result;
    });
  }
};
</script>
