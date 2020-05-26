<template>
  <div id="app">
    <Sidebar :races="races" :handleSelectRace="handleSelectRace"/>

    <div id="body" class="container">
      <Images :images="images" v-if="currentRace !== null"/>
    </div>
  </div>
</template>

<script>
import { getImages } from "./services/images";
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
      currentRace: null
    };
  },
  methods: {
    async handleSelectRace(event) {
      this.$data.currentRace = this.races.find(
        race => race.id === event.target.dataset.raceId
      );

      await this.loadImages();
    },
    async loadRaces() {
      const response = await getRaces();
      const races = await response.json();

      this.$data.races = races.map(({ id, name }) => {
        return { id, name };
      });
    },
    async loadImages() {
      const response = await getImages(this.currentRace);
      const images = await response.json();

      this.$data.images = images.map(({ id, url }) => {
        return { id, url };
      });
    }
  },
  async created() {
    this.loadRaces();
  }
};
</script>