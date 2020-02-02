<template>
  <div class="search">
    <div class="row">
      <div class="col-8 offset-3 mb-3">
        <input
          type="text"
          id="city-search"
          placeholder="Type in the location..."
          v-model="location"
          @keyup.enter="updateLocation"
        />
        <button @click="updateLocation">Search</button>
      </div>
    </div>
  </div>
</template>

<script>
// import API from "../lib/API.js";
export default {
  name: "Searchcity",
  data() {
    return {
      location: ""
    };
  },
  created() {
    this.$store.dispatch("fetch", "Stockholm");
  },
  methods: {
    updateLocation() {
      console.log("updateLocation");
      this.$store.dispatch("fetch", this.location);
    }
  },
  computed: {
    latlong() {
      return this.$store.getters["getLocation"];
    }
  }
};
</script>

<style scoped>
input {
  width: 400px;
}
</style>

