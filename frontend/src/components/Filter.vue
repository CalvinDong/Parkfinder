<template>
  <n-checkbox-group v-model:value="cities" @update:value="handleUpdateValue">
    <n-space item-style="display: flex;">
      <n-checkbox value="Beijing" label="Beijing" />
      <n-checkbox value="Shanghai" label="Shanghai" />
      <n-checkbox value="Guangzhou" label="Guangzhou" />
      <n-checkbox value="Shenzen" label="Shenzhen" />
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
      selection: 'local',
      cities: null
    }
  },

  methods: {
    handleUpdateValue(){
      console.log(this.cities)
    }
  }
}
</script>

<style>

</style>