<template>
  <div class="HomePersona w">
    <div class="persona-title">推荐歌单</div>
    <Personalized>
      <PersonalizedItem
        v-for="(item, index) in personalized"
        :key="index"
        class="PersonalizedItem"
      >
        <a href="">
          <div class="item-img"><img :src="item.picUrl" alt="" /></div>
          <div class="item-name">{{ item.name }}</div>
        </a>
      </PersonalizedItem>
    </Personalized>
  </div>
</template>

<script>
import {
  Personalized,
  PersonalizedItem,
} from "components/content/personalized/index";
export default {
  name: "HomePersona",
  components: {
    Personalized,
    PersonalizedItem,
  },
  props: {
    personalized: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style  scoped>
.PersonalizedItem {
  margin: 10px 15px 60px 0;
}
.persona-title {
  color: #4a4a4a;
  font-size: 16px;
  font-weight: 700;
  margin-top: 10px;
}
.item-img img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
.item-name {
  font-size: 14px;
  color: #4a4a4a;
  font-weight: 700;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-top: 4px;
}
</style>