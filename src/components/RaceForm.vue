<template>
  <div id="race-form">
    <select v-on:change="handleChange">
      <option disabled :selected="currentRace === null">Sélectionner une race</option>
      <option v-for="race in races" :value="race.id" :key="race.id">{{ race.name }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "RaceForm",
  props: {
    currentRace: {
      type: Object,
      default: null
    },
    races: {
      type: Array,
      required: true
    },
    handleChange: {
      type: Function,
      required: true
    }
  }
};
</script>