<template>
  <div id="mapContainer" class="basemap"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import axios from "axios"

export default {
  name: "Map",
  components:{
  },
  data() {
    return {
      accessToken: `${process.env.VUE_APP_TOKEN}`,
    };
  },

  methods: {

  },

  async mounted(){
    mapboxgl.accessToken = this.accessToken;

    const res = await axios.get('http://localhost:4000/testFile')
    console.log(res)

    let map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/outdoors-v11",
      center: [151.2,-33.9],
      zoom: 10,
    })

    map.on('load', function () {
      //const testArray = ["https://raw.githubusercontent.com/CalvinDong/WaterMap/api_test/frontend/src/Files/test.geojson","https://raw.githubusercontent.com/CalvinDong/WaterMap/api_test/frontend/src/Files/testStuff.geojson"]

      map.addSource('mapbox-dem', {
      'type': 'raster-dem',
      'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
      'tileSize': 512,
      'maxzoom': 14
      });

      map.addSource('testing', {
        type: 'geojson',
        // Use a URL for the value for the `data` property.
        data: 'http://localhost:4000/testFile'
      });

      map.addLayer({
          'id':  `test-layer`,
          'type': 'fill',
          'source': 'testing',
          'paint': {
            'fill-color': 'rgba(200, 100, 240, 0.4)',
            'fill-outline-color': 'rgba(200, 100, 240, 1)'
          },
        });

      /*testArray.forEach((link)=>{
        console.log(link)
        const strArr = link.split("/")
        const name = strArr[strArr.length - 1]
        console.log(name)

        map.addSource(name, {
          'type': 'geojson',
          'data': link
        });
        
        map.addLayer({
          'id':  `${name}-layer`,
          'type': 'fill',
          'source': name,
          'paint': {
            'fill-color': 'rgba(200, 100, 240, 0.4)',
            'fill-outline-color': 'rgba(200, 100, 240, 1)'
          },
        });
      })*/

      map.addSource('earthquakes', {
        type: 'geojson',
        // Use a URL for the value for the `data` property.
        data: 'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson'
      });

      map.addLayer({
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

      // add the DEM source as a terrain layer with exaggerated height
      map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.2 });

      map.addLayer({
        'id': 'sky',
        'type': 'sky',
        'paint': {
          'sky-type': 'atmosphere',
          'sky-atmosphere-sun': [1.0, 1.0],
          'sky-atmosphere-sun-intensity': 15
        }
      });

      

    })
  }
}
</script>

<style>
  #mapContainer {
    position: absolute;
    height: 100vh;
    width: 100vw;
  }
</style>