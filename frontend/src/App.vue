<template>
  <div id="app">
    <Navbar />
    <main class="container mt-2">
      <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar
  }
};
</script>