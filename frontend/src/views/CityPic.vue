<template>
    <div class="container">
      <a class="fake-button" href="/">GÅ TILLBAKA</a>
      <div class="row">
        <div v-for="(images, tag) in image.photos" :key="tag" class="col-12">
          <img class="city-picture" v-bind:src="images.src.landscape" alt="" />
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "cityPicture",
  props: {
    city: {
      type: String,
      required: true,
      default: ''
    }
  },
  created() { 
    this.$store.dispatch("fetchCityImage", this.city);
  },
  computed: {
    image() {
      return this.$store.getters["getCityPic"];
    }
  }
}
</script>

<style scoped>

.city-picture {
  margin: 10px 0px;
}

</style>