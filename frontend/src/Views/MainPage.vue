<template>
  <div class="container">
    <Map :mapStyle="mapStyle"/>
    <div class="child child-1">
      <Radio @style-chosen="changeStyle"/>
    </div>
    <div class="child child-2">
      <transition name="fade">
        <About @exit-about="onClick" v-show="showAbout"/>
      </transition>
    </div>
    <div class="child child-3">
      <Button v-on:click="onClick()"> About </Button>
    </div>
  </div>
</template>

<script>
import Radio from "../components/Radio"
import Map from "../components/Map"
import About from "../components/About"

export default {
  name: 'MainPage',
  components: {
    Map,
    About,
    Radio
  },

  data(){
    return{
      mapStyle: "",
      showAbout: false
    }
  },

  methods: {
    changeStyle(mapValue){
      this.mapStyle = mapValue;
    },

    onClick(){
      this.showAbout = !this.showAbout;
    },
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
  }

  .child-1{
    top: 1vh;
    left: 1vw;
    width: 35%;
    height: auto;
    background: blue
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
    background: blue
  }

  .fade-enter-from-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter-from, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }



</style>