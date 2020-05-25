<template>
  <div id="app" class="container">
    <h1>Demo Vue JS</h1>

    <RaceForm :races="races" :currentRace="currentRace" :handleChange="handleRaceChange"/>

    <Images :images="images" v-if="currentRace !== null"/>
  </div>
</template>

<script>
import { getImages } from "./services/images";
import { getRaces } from "./services/races";

import Images from "./components/Images";
import RaceForm from "./components/RaceForm";

export default {
  name: "App",
  components: { Images, RaceForm },
  data: () => {
    return {
      images: [],
      races: [],
      currentRace: null
    };
  },
  methods: {
    async handleRaceChange(event) {
      this.$data.currentRace = this.races.find(
        race => race.id === event.target.value
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

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
