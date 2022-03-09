<template>
  <n-checkbox-group v-model:value="selection" @update:value="handleUpdateValue">
    <n-checkbox v-for="filter in filters" v-bind:key="filter.label" :value="filter.value" :label="filter.label " />
  </n-checkbox-group>
</template>

<script>
import { NCheckbox } from "naive-ui";
import { NCheckboxGroup } from "naive-ui";
import { NSpace } from "naive-ui";
import config from "../assets/config"

export default {
  name: "Filter", // Keep all values of checkbox lowercase for processing

  components: {
    NCheckboxGroup,
    NSpace,
    NCheckbox
  },

  data() {
    return {
      selection: null,
      filters: config.PARKORDER
      //filters: [{value: "park", label: "Park"}, {value: "lakes", label: "Lakes"}]
    }
  },

  methods: {
    handleUpdateValue(){
      this.$emit('filter-chosen', this.selection) // emits to MainPage.vue
    }
  }
}
</script>

<style scoped>
  .test{
    display: flex; 
    align-items: center; 
    padding: 8px 12px;
  }
</style>