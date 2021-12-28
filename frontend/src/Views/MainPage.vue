<template>
  <div class="container">
    <Map :mapStyle="mapStyle"/>
    <div class="child child-1">
      <Radio @style-chosen="changeStyle"/>
    </div>
    <div class="child child-2">
      <About/>
    </div>
  </div>
</template>

<script>
//import Radio from "../components/Radio"
import Map from "../components/Map"
import About from "../components/About"
import Radio from "../components/Radio"

export default {
  name: 'MainPage',
  components: {
    Map,
    About,
    Radio
  },

  data(){
    return{
      mapStyle: ""
    }
  },

  methods: {
    changeStyle(mapValue){
      this.mapStyle = mapValue;
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

  .child{
    position: absolute;
    background: red;
  }

  .child-1{
    top: 100px;
    right: 0px;
    width: 50%;
    height: auto;
    background: blue
  }

  .child-2{
    top: 100px;
    left: 100px;
    min-width: 10%;
    min-height: 100%;
    float: left;
  }



</style>