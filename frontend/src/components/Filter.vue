<template>
  <n-checkbox-group v-model:value="selection" @update:value="handleUpdateValue">
    <n-space item-style="display: flex;">
      <n-checkbox value="Park" label="Park" />
      <n-checkbox value="Lakes" label="Lakes" />
    </n-space>
  </n-checkbox-group>
</template>

<script>
import { NCheckbox } from "naive-ui";
import { NCheckboxGroup } from "naive-ui";
import { NSpace } from "naive-ui";

export default {
  name: "Filter",

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
      console.log(this.selection)
    }
  }
}
</script>

<style>

</style>