<template>
  <div class="HomeSwiper w">
    <Swiper>
      <SwiperItem v-for="(item, index) in banners" :key="index">
        <img :src="item.imageUrl" alt="" />
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.HomeSwiper {
  padding: 20px;
}
</style>