<template>
  <div id="images">
    <div v-if="!images || !images.length">
      <span>Aucune image chargée</span>
    </div>
    <div v-else>
      <h1>{{ title() }}</h1>
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
import { mapState } from "vuex";
import { BCarousel, BCarouselSlide } from "bootstrap-vue";

export default {
  name: "Images",
  components: { BCarousel, BCarouselSlide },
  computed: {
    ...mapState({
      images: state => state.images,
      currentRace: state => state.currentRace,
      currentCategory: state => state.currentCategory
    })
  },
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    title() {
      const prefix = this.currentCategory !== null ? "Catégorie" : "Race";
      const item =
        this.currentCategory !== null ? this.currentCategory : this.currentRace;

      return `${prefix} : ${item.name}`;
    },
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>