<template>
  <div v-for="filter in filters" :key="filter.label">
    <n-checkbox :value="filter.value" :label="filter.label" v-model:value="selection" @update:value="handleUpdateValue"/>
  </div>
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
      filters: [{value: "park", label: "Park"}, {value: "lakes", label: "Lakes"}]
    }
  },

  methods: {
    handleUpdateValue(){
      console.log(this.selection)
      this.$emit('filter-chosen', this.selection)
    }
  }
}
</script>

<style>

</style>