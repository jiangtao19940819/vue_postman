<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import main from "@/page/main.vue"
export default {
  name: 'App',
  components : {
    "v-main" : main
  }
}
</script>