<template>
  <div>
    <div id="mapContainer" class="basemap"/>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import axios from "axios"

export default {
  name: "Map",
  components:{

  },

  props:['mapStyle', 'filters'],

  data() {
    return {
      backend: "http://localhost:4000",
      testFile: null,
      layersRegex: /park-layer$/,
      layerIds: "-park-layer",
      colours: [
        {name: "park", fillColor: 'rgba(200, 100, 240, 0.4)', fillOutlineColor: 'rgba(200, 100, 240, 1)'}, 
        {name: "lakes", fillColor: 'rgba(0, 230, 0, 0.4)', fillOutlineColor: 'rgba(0, 0, 240, 1)'}
      ],
      currentLayers: null,
    };
  },

  watch:{
    mapStyle(){
      this.changeStyle();
    },
    filters(){
      this.updateSource();
      this.updateLayers()
    }
  },

  methods: {

    async getFile(){
      const res = await axios.post(`${this.backend}/filter`)
      return res.data
    },


    getPaint(filter){
       let result = this.colours.find(({ name }) => name === filter)
       if (result === undefined){
         result = {name: filter, fillColor: 'rgba(255, 255, 255, 0.4)', fillOutlineColor: 'rgba(0, 0, 0, 1)'}
       }
       return result
    },

    async removeLayers(){
      for (const layer in this.currentLayers){
        if (this.map.getLayer(`${this.currentLayers[layer]}${this.layerIds}`)){
          this.map.removeLayer(`${this.currentLayers[layer]}${this.layerIds}`);
        }
      }
    },

    async updateLayers(){
      this.map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.2 });
      this.removeLayers();

      for (const filter in this.filters) {
        const layerColours = this.getPaint(this.filters[filter])
        
        this.map.addLayer({
          'id':  `${this.filters[filter]}${this.layerIds}`,
          'type': 'fill',
          'source': 'park-source',
          'paint': {
            'fill-color': layerColours.fillColor,
            'fill-outline-color': layerColours.fillOutlineColor
          },
          'filter': ['==', this.filters[filter], ["get", "type"]]
        });
      }

      this.currentLayers = this.filters;
    },


    async updateSource(){
      this.getTestFile = await this.getFile()
      const geoJSONSrc = this.map.getSource('park-source')
      geoJSONSrc.setData(`http://localhost:4000/filter/${this.getTestFile}`)
    },


    async changeStyle(){
      await this.map.setStyle('mapbox://styles/mapbox/' + this.mapStyle)
      this.map.on('style.load', ()=> {
        this.updateSource();
        this.updateLayers();
      })
    },

    async getParkInfo(geoInfo){
      this.$emit('layer-clicked', geoInfo)
    }
  },

  created(){
    mapboxgl.accessToken = `${process.env.VUE_APP_TOKEN}`;
    this.map = null;
    this.currentLayers = this.filters; 
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

      this.map.addSource('park-source', {
        type: 'geojson',
        data: `http://localhost:4000/filter/${this.getTestFile}`
      });

      this.updateLayers()

    })

    this.map.on('click', async (e) => {
      const features = this.map.queryRenderedFeatures(e.point);
      const parkLayers = features.filter((layer) => this.layersRegex.test(layer.layer.id) == true); // Using regular expressions to find our geoJSON layers
      if (parkLayers.length > 0){
        const geoInfo = parkLayers[0].properties
        this.getParkInfo(geoInfo)
        this.$emit('layer-clicked', geoInfo) // Have to figure out if we want different behaviours on bbq, parks, lakes, etc layers clicked
      }
    })

    
  },
  
}
</script>

<style>
  #mapContainer {
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: -1
  }
</style>