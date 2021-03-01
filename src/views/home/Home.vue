<template>
  <div class="home">
    <HomeSwiper :banners="banners"></HomeSwiper>
    <HomePersona :personalized="personalized"></HomePersona>
    <HomeNewSong :newSong="newSong"></HomeNewSong>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import HomePersona from "./childComps/HomePersona";
import HomeNewSong from "./childComps/HomeNewSong";

import { getBanner, getPersonalized, getNewSong } from "api/home/home";
export default {
  name: "Home",
  components: {
    HomeSwiper,
    HomePersona,
    HomeNewSong,
  },
  data() {
    return {
      banners: [],
      token: null,
      personalized: [],
      newSong: [],
    };
  },
  created() {
    // 用户的 token
    this.token = window.localStorage.getItem("token");
    // 轮播数据
    this.getBanner();
    // 推荐歌单数据
    this.getPersonalized(this.token);
    // 推荐歌曲数据
    this.getNewSong();
  },
  methods: {
    // 1 请求轮播图数据
    getBanner() {
      getBanner().then((res) => {
        // console.log(res);
        this.banners = res.data.banners;
      });
    },
    //2 获取推荐歌单数据
    getPersonalized(token) {
      getPersonalized(token).then((res) => {
        // console.log(res);
        this.personalized = res.data.result;
      });
    },
    //3 获取 推荐歌曲
    getNewSong() {
      getNewSong().then((res) => {
        console.log(res);
        this.newSong = res.data.result;
      });
    },
  },
};
</script>
<style scoped>
</style>