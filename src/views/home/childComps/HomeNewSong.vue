<template>
  <div class="HomeNewSong w">
    <h4>推荐新歌曲</h4>
    <div class="newSong">
      <div class="newSong-item" v-for="(item, index) in newSong" :key="index">
        <div class="item-disc">{{ (index + 1) | formatZero }}</div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatZero } from "common/utils";
export default {
  name: "HomeNewSong",
  props: {
    newSong: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  filters: {
    formatZero: function (value) {
      return formatZero(value, 2);
    },
  },
};
</script>

<style  scoped>
.newSong {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.newSong-item {
  height: 80px;
  display: flex;
}
</style>