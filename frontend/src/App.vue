<template>
  <div id="app">
    <Navbar />
    <main class="container mt-2">
      <SearchCity />
      <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import SearchCity from "./components/Searchcity.vue";

export default {
  components: {
    Navbar,
    SearchCity
  },
};
</script>