<template>
  <div class="col-6 offset-3 mb-3">
    <div class="input-group">
      <input
        type="text"
        id="city-search"
        class="form-control"
        placeholder="Type in the location..."
        aria-label="Type in the location..."
        aria-describedby="basic-addon2"
        v-model="location"
        @keyup.enter="updateLocation"
      />
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" @click="updateLocation" type="button">Search</button>
      </div>
    </div>
  </div>
</template>

<script>
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
  height: auto;
}
</style>

