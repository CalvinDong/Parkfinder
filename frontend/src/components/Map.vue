<template>
  <div id="mapContainer" class="basemap"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";
//import dotenv from "dotenv";

export default {
  name: "Map",
  data() {
    //const test = dotenv.config();
    //console.log(test.parsed)
    return {
      accessToken: `${process.env.VUE_APP_TOKEN}`,
    };
  },

  mounted(){
    mapboxgl.accessToken = this.accessToken;

    new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [151.2,-33.9],
      zoom: 10
    })
  }

}
</script>

<style>
  #mapContainer {
    height: 100vh;
    width: 100vw;
  }
</style>