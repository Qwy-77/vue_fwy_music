<template>
  <div id="app">
    <TabBar></TabBar>
    <router-view></router-view>
  </div>
</template>

<script>
import TabBar from "./common/tabbar/TabBar";
export default {
  name: "app",
  components: {
    TabBar,
  },
};
</script>

<style scoped>
@import "assets/css/base.css";
</style>
