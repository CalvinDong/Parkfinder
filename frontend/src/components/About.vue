<template>
  <div class="card">
    <img class="image" src="https://firebasestorage.googleapis.com/v0/b/parkfinder-cd1be.appspot.com/o/safe_image.jpg?alt=media&token=95f57db5-59a8-4db8-a98a-afa82f4ba8a0">
    <div class="close">
      <i v-on:click="onClick()" class="material-icons">close</i>
    </div>
    <div class="bio">
      <h4>
        <b>It's a me Mario</b>
      </h4>
      <p>Swimming with the fishes</p>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'About',

  async data() {
    return {
      image: await axios.get("http://localhost:4000/getAbout")
    }
  },

  methods: {
    onClick(){
      this.$emit('exit-about')
    }
  }
}
</script>

<style scoped>
  .card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 25vw;
    height: 25vw;
    position: relative
  }

  .card:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  .image{
    max-width: 24vw;
    max-height: 24vw;
  }

  .bio{
    padding: 2px 16px;
  }

  .close{
    position: absolute;
    right: 1%;
    top: 1%;
  }

</style>