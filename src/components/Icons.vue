<template>
  <q-icon-picker
    v-model="name"
    :filter="filter"
    :icon-set="iconSet"
    :tags="tags"
    font-size="3em"
    tooltips
    @tags="onTags"
    style="height: calc(100vh - 140px)"
  />
</template>
<script setup>
import { ref } from "vue";

const loaded = false;
const tags = [];
const categories = [];
const selected = {};
const name = ref("");
const filter = ref("");
const value = ref("");
const onTags = (tags) => {
  if (this.loaded !== true) {
    let cats = [];
    let t = [...tags];
    cats.splice(0, 0, ...t);
    this.categories.splice(0, this.categories.length, ...cats);
    this.categories.concat(...cats);
    this.categories.forEach((cat) => {
      this.$set(this.selected, cat, false);
    });
    this.loaded = true;
  }
};
</script>
