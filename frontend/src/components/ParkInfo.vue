<template>
  <n-card v-bind:title="this.name" closable @close="handleClose"> 
    <template #cover>
      <img :src=img>
    </template>
    {{this.info}} 
  </n-card>
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
      img: "https://firebasestorage.googleapis.com/v0/b/parkfinder-cd1be.appspot.com/o/IMG_5080-3.jpg?alt=media&token=89ee23ba-bf5c-4bc8-877c-5ef99f084678"
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
      this.name = info.data.name;
      //this.name = infoGeo.name;
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