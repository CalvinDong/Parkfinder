<template>
  <div id="menu">
    <input id="satellite-v9" type="radio" name="mapStyle" value="satellite-v9" v-model="mapStyle">
    <label for="satellite-v9">satellite</label>

    <input id="light-v10" type="radio" name="mapStyle" value="light-v10" v-model="mapStyle">
    <label for="light-v10">light</label>

    <input id="dark-v10" type="radio" name="mapStyle" value="dark-v10" v-model="mapStyle">
    <label for="dark-v10">dark</label>

    <input id="streets-v11" type="radio" name="mapStyle" value="streets-v11" v-model="mapStyle">
    <label for="streets-v11">streets</label>
    
    <input id="outdoors-v11" type="radio" name="mapStyle" value="outdoors-v11" checked="checked" v-model="mapStyle">
    <label for="outdoors-v11">outdoors</label>

    <input id="satellite-streets-v11" type="radio" name="mapStyle" value="satellite-streets-v11" v-model="mapStyle">
    <label for="satellite-streets-v1">satellite+streets</label>

    <input id="navigation-day-v1" type="radio" name="mapStyle" value="navigation-day-v1" v-model="mapStyle">
    <label for="navigation-day-v1">navigation+day</label>

    <input id="navigation-night-v1" type="radio" name="mapStyle" value="navigation-night-v1" v-model="mapStyle">
    <label for="navigation-night-v1">navigation+night</label>
  </div>
</template>

<script>

export default {
  name: 'Radio',

  data(){
    return{
      mapStyle: ''
    }
  },

  watch: {
    mapStyle(mapValue){
      this.$emit('style-chosen', mapValue)
    }
  },
}
</script>

<style scoped>
  #menu {
    position: absolute;
    background: #efefef;
    font-family: 'Open Sans', sans-serif;
    height: auto;
    padding: 10px;
    border-radius: 5px;
  }
  label{
    padding: 5px;
  }
</style>