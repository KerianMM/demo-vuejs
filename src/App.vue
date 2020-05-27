<template>
  <div id="app">
    <Sidebar/>

    <div id="body" class="container">
      <Images/>
    </div>
  </div>
</template>

<script>
import Images from "./components/Images";
import Sidebar from "./components/Sidebar";

export default {
  name: "App",
  components: { Images, Sidebar },
  created() {
    this.$store.dispatch("loadRaces");
    this.$store.dispatch("loadCategories");
  }
};
</script>