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

    let map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/outdoors-v11",
      center: [151.2,-33.9],
      zoom: 10,
    })

    map.on('load', function () {
      map.addSource('mapbox-dem', {
      'type': 'raster-dem',
      'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
      'tileSize': 512,
      'maxzoom': 14
      });
      // add the DEM source as a terrain layer with exaggerated height
      map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });
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