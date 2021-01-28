<template>
  <div class="home">
    <HomeSwiper :banners="banners"></HomeSwiper>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";

import { getBanner } from "api/home/home";
export default {
  name: "Home",
  components: {
    HomeSwiper,
  },
  data() {
    return {
      banners: [],
    };
  },
  created() {
    // 轮播数据
    this.getBanner();
  },
  methods: {
    // 1 请求轮播图数据
    getBanner() {
      getBanner().then((res) => {
        // console.log(res);
        this.banners = res.data.banners;
      });
    },
  },
};
</script>
<style scoped>
</style>