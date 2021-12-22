<template>
  <div>
    <div id="mapContainer" class="basemap"/>
    <div>
      <Radio @style-chosen="changeStyle"/>
    </div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import axios from "axios"

import Radio from "../components/Radio"

export default {
  name: "Map",
  components:{
    Radio
  },
  data() {
    return {
      backend: "http://localhost:4000",
    };
  },

  methods: {
    async getFile(){
      const res = await axios.post(`${this.backend}/filter`)
      return res.data
    },

    async changeStyle(mapValue){
      await this.map.setStyle('mapbox://styles/mapbox/' + mapValue)
    },

  },

  created(){
    mapboxgl.accessToken = `${process.env.VUE_APP_TOKEN}`;
    this.map = null
  },

  async mounted(){
    const getTestFile = await this.getFile()
    console.log(getTestFile)
    console.log(this.backend)

    this.map = await new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/outdoors-v11",
      center: [151.2,-33.9],
      zoom: 10,
    })

    this.map.on('load', () => {
      this.map.addSource('mapbox-dem', {
        'type': 'raster-dem',
        'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
        'tileSize': 512,
        'maxzoom': 14
      });

      // add the DEM source as a terrain layer with exaggerated height
      this.map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.2 });

      this.map.addSource('testing', {
        type: 'geojson',
        // Use a URL for the value for the `data` property.
        data: `http://localhost:4000/filter/${getTestFile}`
      });

      this.map.addLayer({
          'id':  `test-layer`,
          'type': 'fill',
          'source': 'testing',
          'paint': {
            'fill-color': 'rgba(200, 100, 240, 0.4)',
            'fill-outline-color': 'rgba(200, 100, 240, 1)'
          },
      });

      this.map.addSource('earthquakes', {
        type: 'geojson',
        // Use a URL for the value for the `data` property.
        data: 'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson'
      });

      this.map.addLayer({
        'id': 'earthquakes-layer',
        'type': 'circle',
        'source': 'earthquakes',
        'paint': {
        'circle-radius': 8,
        'circle-stroke-width': 2,
        'circle-color': 'red',
        'circle-stroke-color': 'white'
        }
      });

      this.map.addLayer({
        'id': 'sky',
        'type': 'sky',
        'paint': {
          'sky-type': 'atmosphere',
          'sky-atmosphere-sun': [1.0, 1.0],
          'sky-atmosphere-sun-intensity': 15
        }
      });

      
    })
  },
}
</script>

<style>
  #mapContainer {
    position: absolute;
    height: 100vh;
    width: 100vw;
  }
</style>