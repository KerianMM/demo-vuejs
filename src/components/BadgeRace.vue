<template>
  <Badge :text="race.name" :attributes="attributes" :events="events"/>
</template>

<script>
import Badge from "./Badge";

export default {
  name: "BadgeRace",
  components: { Badge },
  props: {
    race: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      attributes: {
        "data-race-id": this.race.id,
        style: "cursor:pointer;"
      },
      events: {
        click: this.handleSelectRace
      }
    };
  },
  methods: {
    async handleSelectRace(event) {
      this.$store.dispatch("setCurrentRace", event.target.dataset.raceId);
    }
  }
};
</script>