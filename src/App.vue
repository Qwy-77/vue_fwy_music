<template>
  <div id="app">
    <TabBar class="tabbar"></TabBar>
    <router-view></router-view>
  </div>
</template>

<script>
import TabBar from "components/content/tabbar/TabBar";
export default {
  name: "app",
  components: {
    TabBar,
  },
};
</script>

<style scoped>
@import "assets/css/base.css";
.tabbar {
  background-color: rgb(168, 120, 128);
}
</style>
