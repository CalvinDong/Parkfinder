<template>
  <n-radio-group v-model:value="mapStyle" name="radiogroup">
    <n-space>
      <n-radio v-for="style in styles" :key="style.value" :value="style.value">
        {{ style.label }}
      </n-radio>
    </n-space>
  </n-radio-group>
</template>

<script>
import { NRadio } from "naive-ui"

export default {
  name: 'Radio',

  components: {
    NRadio
  },

  data(){
    return{
      mapStyle: '',
      styles: [
        {
          value: satellite-v9,
          label: satellite-v9,
        },
        {
          value: light-v10,
          label: light-v10,
        },
        {
          value: dark-v10,
          label: dark-v10,
        },
        {
          value: streets-v11,
          label: streets-v11,
        },
        {
          value: outdoors-v11,
          label: outdoors-v11,
        },
        {
          value: satellite-streets-v11,
          label: satellite-streets-v11,
        },
        {
          value: navigation-day-v1,
          label: navigation-day-v1,
        },
        {
          value: navigation-night-v1,
          label: navigation-night-v1,
        },
      ]
    }
  },

  watch: {
    mapStyle(mapValue){
      this.$emit('style-chosen', mapValue)
    }
  },
}
</script>

<style scoped>
  #menu {
    position: absolute;
    background: #efefef;
    font-family: 'Open Sans', sans-serif;
    height: auto;
    padding: 10px;
    border-radius: 5px;
  }
  label{
    padding: 5px;
  }
</style>