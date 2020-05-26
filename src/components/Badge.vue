<template>
  <b-badge pill variant="dark" class="mr-2" v-bind="attributes" v-on="events">{{ text }}</b-badge>
</template>

<script>
import { BBadge } from "bootstrap-vue";

export default {
  name: "Badge",
  components: { BBadge },
  props: {
    text: {
      type: String,
      required: true
    },
    attributes: Object,
    events: Object
  }
};
</script>