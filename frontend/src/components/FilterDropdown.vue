<template>
  <n-dropdown trigger="hover" size="medium" :options="options">
    <n-button type="primary"> Types </n-button>
  </n-dropdown>
</template>

<script>
import{ h } from "vue"
import { NDropdown, NButton } from "naive-ui"
import Filter from "./Filter.vue"

export default {
  name: "FilterDropdown",

  components: {
    NDropdown,
    NButton,
    Filter
  },

  data() {
    return{
      options: [
        {
          key: 'header',
          type: 'render',
          render: this.customRender
        },
        {
          label: 'Jay Gatsby',
          key: 'jay gatsby'
        },
        {
          label: 'Daisy Buchanan',
          key: 'daisy buchanan'
        },
        {
          type: 'divider',
          key: 'd1'
        },
        {
          label: 'Nick Carraway',
          key: 'nick carraway'
        }
      ]
    }
  },

  methods:{
    changeFilter(selection){
      console.log("hello")
    },

    customRender(){
      return h(
        'div',
        {
          style: 'display: flex; align-items: center; padding: 8px 12px;'
        },
        [h(Filter)]
      )
    }
  }
}
</script>

<style>

</style>