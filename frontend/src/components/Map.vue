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
      testFile: null
    };
  },

  methods: {
    async getFile(){
      const res = await axios.post(`${this.backend}/filter`)
      return res.data
    },

    async updateLayers(){
      this.map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.2 });

      if (this.map.getLayer('test-layer')) { // Still works if I don't remove it, but it gives me angry red warnings in the console if I don't
        this.map.removeLayer('test-layer');
      }

      this.map.addLayer({
        'id':  `test-layer`,
        'type': 'fill',
        'source': 'testing',
        'paint': {
          'fill-color': 'rgba(200, 100, 240, 0.4)',
          'fill-outline-color': 'rgba(200, 100, 240, 1)'
        },
      });
    },

    async updateSource(){
      this.getTestFile = await this.getFile()
      const geoJSONSrc = this.map.getSource('testing')
      geoJSONSrc.setData(`http://localhost:4000/filter/${this.getTestFile}`)
    },

    async changeStyle(mapValue){
      await this.map.setStyle('mapbox://styles/mapbox/' + mapValue)
      this.map.on('style.load', ()=> {
        this.updateSource();
        this.updateLayers();
      })
    },
  },

  created(){
    mapboxgl.accessToken = `${process.env.VUE_APP_TOKEN}`;
    this.map = null
  },

  async mounted(){
    this.getTestFile = await this.getFile()

    this.map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/outdoors-v11",
      center: [151.2,-33.9],
      zoom: 10,
    })

    this.map.on('style.load', () => {
      this.map.addSource('mapbox-dem', {
        'type': 'raster-dem',
        'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
        'tileSize': 512,
        'maxzoom': 14
      });

      this.map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.2 });

      this.map.addSource('testing', {
        type: 'geojson',
        data: `http://localhost:4000/filter/${this.getTestFile}`
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