<template>
  <div id="images">
    <div v-if="!images || !images.length">
      <span>Aucune image chargée</span>
    </div>
    <div v-else>
      <b-carousel
        id="images-carousel"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        fade
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide
          v-for="image in images"
          :key="image.id"
          :caption="image.id"
          :img-src="image.url"
        />
      </b-carousel>
    </div>
  </div>
</template>

<script>
import { BCarousel, BCarouselSlide } from "bootstrap-vue";

export default {
  name: "Images",
  components: { BCarousel, BCarouselSlide },
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>