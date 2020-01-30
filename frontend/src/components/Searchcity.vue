<template>
  <div class="search">
    <div class="row">
      <div class="col-8 offset-3 mb-3">
        <input
          type="text"
          id="city-search"
          placeholder="Type in the location..."
          v-model="location"
        />
        <button @click="updateLocation">Search</button>
        {{location}}
      </div>
    </div>
  </div>
</template>

<script>
import API from "../lib/API.js";
export default {
  name: "Searchcity",
  data() {
    return {
      location: '',
    };
  },
  methods: {
    updateLocation() {
      API.getCordinates(this.location)
      .then(res => {
        console.log(res)
      })
    }
  }
};
</script>

<style scoped>
input {
  width: 400px;
}
</style>

