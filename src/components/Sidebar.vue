<template>
  <div id="header">
    <b-navbar type="dark" variant="dark">
      <b-button v-b-toggle.sidebar-component>Menu</b-button>

      <b-sidebar id="sidebar-component" title="Menu">
        <div class="px-3 py-2">
          <h2>Races</h2>
          <BadgeRace v-for="race in races" :key="race.id" :race="race"/>
        </div>
        <hr>
        <div class="px-3 py-2">
          <h2>Categories</h2>
          <BadgeCategory v-for="category in categories" :key="category.id" :category="category"/>
        </div>
      </b-sidebar>
    </b-navbar>
  </div>
</template>

<script>
import { BButton, BSidebar } from "bootstrap-vue";
import { mapState } from "vuex";

import BadgeCategory from "./BadgeCategory";
import BadgeRace from "./BadgeRace";

export default {
  name: "Sidebar",
  components: { BadgeCategory, BadgeRace, BButton, BSidebar },
  computed: {
    ...mapState({
      races: state => state.races,
      categories: state => state.categories
    })
  }
};
</script>