<template>
  <n-card v-bind:title="this.name" closable @close="handleClose"> {{this.info}} </n-card>
</template>

<script>
import { NCard } from 'naive-ui';

import axios from "axios";

export default {
  components: {
    NCard
  },

  props:["geoInfo"],

  data(){
    return {
      name: null,
      info: null,
      img: null
    }
  },

  watch: {
    async geoInfo(infoGeo){
      await this.populateInfo(infoGeo)
    }
  },

  methods: {
    async populateInfo(infoGeo){
      const info = await axios.post(`http://localhost:4000/queries/${infoGeo.type}/${infoGeo.id}`)
      //this.name = info.data.name;
      this.name = infoGeo.name;
      this.info = info.data.description
    },

    handleClose(){
      this.$emit('park-info-close')
    }
  }
}
</script>
  
<style>
  .n-card {
    min-width: 300px;
  }

</style>