<template>
  <div id="app">
    <div id="race-form">
      <select v-on:change="handleRaceChange">
        <option disabled :selected="currentRace === null">Sélectionner une race</option>
        <option v-for="race in races" :value="race.id" :key="race.id">{{ race.name }}</option>
      </select>
    </div>
    <span ref="race-span"/>
    <div id="images" v-if="images.length">
      <div v-for="image in images" :key="image.id" style="width:40%; padding: 1rem">
        <img :src="image.url" :alt="`{race.name} n°{image.id}`" style="width:100%;">
      </div>
    </div>
  </div>
</template>

<script>
import { getRaces } from "./services/races";
import { getImages } from "./services/images";

export default {
  name: "App",
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

      this.$refs["race-span"].innerHTML = this.$data.currentRace.name;

      const response = await getImages(this.$data.currentRace);
      const images = await response.json();

      this.$data.images = images.map(image => {
        return { id: image.id, url: image.url };
      });
    }
  },
  async created() {
    const response = await getRaces();
    const races = await response.json();

    this.$data.races = races.map(race => {
      return { id: race.id, name: race.name };
    });
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
