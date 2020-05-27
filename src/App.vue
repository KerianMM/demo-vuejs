<template>
  <div id="app">
    <Sidebar
      :races="races"
      :handleSelectRace="handleSelectRace"
      :categories="categories"
      :handleSelectCategory="handleSelectCategory"
    />

    <div id="body" class="container">
      <Images :images="images" v-if="currentRace !== null"/>
    </div>
  </div>
</template>

<script>
import { getCategories } from "./services/categories";
import { getImagesByRace, getImagesByCategory } from "./services/images";
import { getRaces } from "./services/races";

import Images from "./components/Images";
import Sidebar from "./components/Sidebar";

export default {
  name: "App",
  components: { Images, Sidebar },
  data: () => {
    return {
      images: [],
      races: [],
      currentRace: undefined,
      categories: [],
      currentCategory: undefined
    };
  },
  methods: {
    async handleSelectRace(event) {
      this.$data.currentRace = this.races.find(
        race => race.id === event.target.dataset.raceId
      );
      this.$data.currentCategory = undefined;

      await this.loadImages();
    },
    async handleSelectCategory(event) {
      const categoryId = parseInt(event.target.dataset.categoryId, 10);

      this.$data.currentCategory = this.categories.find(
        category => category.id === categoryId
      );
      this.$data.currentRace = undefined;

      await this.loadImages();
    },
    async loadCategories() {
      const response = await getCategories();
      const categories = await response.json();

      this.$data.categories = categories.map(({ id, name }) => {
        return { id, name };
      });
    },
    async loadRaces() {
      const response = await getRaces();
      const races = await response.json();

      this.$data.races = races.map(({ id, name }) => {
        return { id, name };
      });
    },
    async loadImages() {
      let response;

      if (this.currentRace !== undefined) {
        response = await getImagesByRace(this.currentRace);
      } else {
        response = await getImagesByCategory(this.currentCategory);
      }

      const images = await response.json();

      this.$data.images = images.map(({ id, url }) => {
        return { id, url };
      });
    }
  },
  async created() {
    this.loadRaces();
    this.loadCategories();
  }
};
</script>