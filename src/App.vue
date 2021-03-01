<template>
  <div id="app">
    <TabBar class="tabbar"></TabBar>
    <router-view></router-view>
    <PlayBar></PlayBar>
  </div>
</template>

<script>
import TabBar from "components/content/tabbar/TabBar";
import PlayBar from "components/content/playbar/PlayBar";
export default {
  name: "app",
  components: {
    TabBar,
    PlayBar,
  },
};
</script>

<style scoped>
@import "assets/css/base.css";
.tabbar {
  background-color: rgb(168, 120, 128);
}
</style>
