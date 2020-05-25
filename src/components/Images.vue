<template>
  <div id="images">
    <div v-if="!images || !images.length">
      <span>Aucune image chargée</span>
    </div>
    <div v-for="image in images" :key="image.id" style="width:40%; padding: 1rem">
      <img :src="image.url" style="width:100%;">
    </div>
  </div>
</template>

<script>
export default {
  name: "Images",
  props: {
    images: {
      type: Array,
      required: true
    }
  }
};
</script>