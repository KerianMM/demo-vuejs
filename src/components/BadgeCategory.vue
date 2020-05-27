<template>
  <Badge :text="category.name" :attributes="attributes" :events="events"/>
</template>

<script>
import Badge from "./Badge";

export default {
  name: "BadgeCategory",
  components: { Badge },
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      attributes: {
        "data-category-id": this.category.id,
        style: "cursor:pointer;"
      },
      events: {
        click: this.handleSelectCategory
      }
    };
  },
  methods: {
    async handleSelectCategory(event) {
      const categoryId = parseInt(event.target.dataset.categoryId, 10);

      this.$store.dispatch("setCurrentCategory", categoryId);
    }
  }
};
</script>