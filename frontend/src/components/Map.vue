<template>
  <div id="mapContainer" class="basemap"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import axios from "axios"

//import geoTheJson from "../assets/features.geojson"

export default {
  name: "Map",
  components:{
  },
  data() {
    return {
      accessToken: `${process.env.VUE_APP_TOKEN}`,
      //testData: geoTheJson
    };
  },

  methods: {
    async getJson(){
      /*const dataJ = axios.get('https://api.mapbox.com/datasets/v1/kahuzi/{ckq7kkxb90fu321pfk1v7kqkt}/features?access_token=sk.eyJ1Ijoia2FodXppIiwiYSI6ImNrcXZ0dGk5NzBodmYycm5sYWh3aGFjNGIifQ.qwTMQaGERPVfsxAMCJvJPw')
      //const dataJ = await axios.get("https://api.mapbox.com/datasets/v1/{kahuzi}?access_token=sk.eyJ1Ijoia2FodXppIiwiYSI6ImNrcXZ0dGk5NzBodmYycm5sYWh3aGFjNGIifQ.qwTMQaGERPVfsxAMCJvJPw")
      console.log(dataJ)
      return dataJ*/  

      axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (console.log(response)))

      axios
        .get(`https://api.mapbox.com/datasets/v1/kahuzi/{ckq7kkxb90fu321pfk1v7kqkt}/features?access_token=${process.env.VUE_APP_SECRETKEY}`)
        .then(response => (console.log(response)))
        .catch(error => console.log(error))

      axios.get(`https://api.mapbox.com/datasets/v1/kahuzi?access_token=${process.env.VUE_APP_SECRETKEY}`)
        .then(response => (console.log(response)))
    }
  },

  mounted(){
    let testData = this.getJson()
    console.log(testData)
    
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

      /*map.addSource('test-parks', {
        'type': 'geojson',
        'data': '../assets/features.geojson'
      });*/

      map.addSource('test-parks', {
        'type': 'geojson',
        'data': {
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Pioneers Memorial Park",
        "id": "LP00001"
      },
      "geometry": {
        "coordinates": [
          [
            [
              151.156402,
              -33.877553
            ],
            [
              151.156631,
              -33.879682
            ],
            [
              151.157123,
              -33.879658
            ],
            [
              151.157141,
              -33.879805
            ],
            [
              151.157501,
              -33.879767
            ],
            [
              151.157535,
              -33.87991
            ],
            [
              151.157661,
              -33.8799
            ],
            [
              151.15765,
              -33.879744
            ],
            [
              151.158211,
              -33.879701
            ],
            [
              151.158239,
              -33.879853
            ],
            [
              151.158531,
              -33.879834
            ],
            [
              151.158257,
              -33.87742
            ],
            [
              151.158165,
              -33.877368
            ],
            [
              151.156454,
              -33.877463
            ],
            [
              151.156402,
              -33.877553
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "2a291db8f631557f3bea7b17cf2ec031"
    },
    {
      "type": "Feature",
      "properties": {
        "id": "LP00002",
        "name": "War Memorial Park"
      },
      "geometry": {
        "coordinates": [
          [
            [
              151.16336,
              -33.877686
            ],
            [
              151.162926,
              -33.878937
            ],
            [
              151.164068,
              -33.879176
            ],
            [
              151.164502,
              -33.877976
            ],
            [
              151.16336,
              -33.877686
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "73551427014be48e77d10f4dd2d7bd24"
    }
  ],
  "type": "FeatureCollection"
}
      });

      map.addLayer({
        'id': 'parks-layer',
        'type': 'fill',
        'source': 'test-parks',
        'paint': {
        'fill-color': 'rgba(200, 100, 240, 0.4)',
        'fill-outline-color': 'rgba(200, 100, 240, 1)'
        }
      });

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