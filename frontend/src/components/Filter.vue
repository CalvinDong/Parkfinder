<template>
  <n-checkbox-group v-model:value="selection" @update:value="handleUpdateValue">
    <n-space item-style="display: flex;">
      <n-checkbox value="park" label="Park" />
      <n-checkbox value="lakes" label="Lakes" />
    </n-space>
  </n-checkbox-group>
</template>

<script>
import { NCheckbox } from "naive-ui";
import { NCheckboxGroup } from "naive-ui";
import { NSpace } from "naive-ui";

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
    }
  },

  methods: {
    handleUpdateValue(){
      this.$emit('filter-chosen', this.selection)
    }
  }
}
</script>

<style>

</style>