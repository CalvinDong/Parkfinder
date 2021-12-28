<template>
  <div class="card">
    <img src="https://www.boredpanda.com/blog/wp-content/uploads/2017/12/funny-weird-wtf-stock-photos-19-5a3926af95d9d__700.jpg" alt="Photo" style="width:100%">
    <div class="bio">
      <h4>
        <b>It's a me Mario</b>
      </h4>
      <p>Swimming with the fishes</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
  .card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 40%;
  }

  .card:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  .bio{
    padding: 2px 16px;
  }

</style>