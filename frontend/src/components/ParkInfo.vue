<template>
  <n-card v-bind:title="this.name" closable @close="handleClose">
    <template #cover class="cover"> 
      <vueper-slides fade: fixed-height="240px" touchable="false" class="carousel-img">
        <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image"/>
      </vueper-slides>
    </template>
    {{this.info}} 
  </n-card>
</template>

<script>
import { NCard, NCarousel, NButton } from 'naive-ui';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

import axios from "axios";

/*
<vueper-slides fade: touchable="false" >
  <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" />
</vueper-slides>

<n-carousel show-arrow>
  <img v-for="(slide, i) in slides" :key="i" :src="slide.image" class="carousel-img">
</n-carousel>

*/

export default {
  components: {
    NCarousel,
    NCard,
    NButton,
    VueperSlides,
    VueperSlide
  },

  props:["geoInfo"],

  data(){
    return {
      name: null,
      info: null,
      slides: null,
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
      let imgRes = await axios.post(`http://localhost:4000/getParkImages`,{
        name: info.data.name,
        type: info.data.type,
        id: info.data.id
      })
      this.slides = imgRes.data;
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

  .vueperslides__arrow{
    top:50%;
    background-color:transparent;
    border:none;
    opacity:.7
  }

  .vueperslide{
    white-space:normal;
    background-size:cover;
    -ms-flex-negative:0;
    flex-shrink:0;
    display:block;
    width:100%;
    position:relative
  }

  .bg-repeat {
    background-size: 100%;
    background-repeat: repeat;
    background-position: top;
  }

  .carousel-img {
    width: 100%;
    height: 240px;
    object-fit: cover;
  }

</style>