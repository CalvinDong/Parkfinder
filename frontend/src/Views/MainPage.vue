<template>
  <div class="container">
    <Map :mapStyle="mapStyle" :filters="filters" @layer-clicked="parkChosen"/>
    <div class="child child-1">
      <Radio @style-chosen="changeStyle"/>
    </div>
    <div class="child child-2">
      <transition name="fade">
        <About @exit-about="onClick" v-show="showAbout"/>
      </transition>
    </div>
    <div class="child child-3">
      <NButton type="primary" v-on:click="onClick()"> About </NButton>
    </div>
    <div class="child child-4">
      <ParkInfo :geoInfo="geoInfo" @park-info-close="handleParkClose" v-show="showParkInfo"/>
    </div>
    <div class="child child-5">
      <Filter @filter-chosen="changeFilter"/>
    </div>
  </div>
</template>

<script>
import Radio from "../components/Radio"
import Map from "../components/Map"
import About from "../components/About"
import ParkInfo from "../components/ParkInfo.vue"
import Filter from "../components/Filter.vue"

import { NButton } from "naive-ui"

export default {
  name: 'MainPage',
  components: {
    Map,
    About,
    Radio,
    ParkInfo,
    Filter,
    NButton
  },

  data(){
    return{
      mapStyle: "",
      showAbout: false,
      geoInfo: null,
      showParkInfo: false,
      filters: null
    }
  },

  methods: {
    changeStyle(mapValue){
      this.mapStyle = mapValue;
    },

    onClick(){
      this.showAbout = !this.showAbout;
    },

    parkChosen(geoInfo){ // Make it so it doesn't send a request to backend if park already selected
      this.showParkInfo = true;
      this.geoInfo = geoInfo;
    },

    handleParkClose(){
      this.showParkInfo = false;
    },

    changeFilter(selection){
      this.filters = selection;
    }
  },

  props: {
    
  }
}
//Map container CSS located in Map.vue component
</script>

<style scoped>
  .container{
    position: relative;
    z-index: 3;
    background: yellow;
  }
  .container-2{
    position: relative;
    z-index: 3;
    background: yellow;
  }

  .child{
    position: absolute;
  }

  .child-1{
    top: 1vh;
    left: 1vw;
    width: 35%;
    height: auto;
  }

  .child-2{
    margin: 0 auto;
    position: absolute;
    left: 50%;
    top: 50%;
    vertical-align: middle;
    transform: translate(-50%, 50%)
  }

  .child-3{
    top: 1vh;
    right: 20px;
    width: auto;
    height: auto;
  }

  .child-4{
    top: 50vh;
    left: 1vw;
    transform: translate(0, -50%);
    max-width: 200px;
  }

  .child-5{
    top: 50vh;
    right: 1vw;
    transform: translate(0, -50%);
    max-width: 200px;
  }

  .fade-enter-from-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter-from, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }



</style>