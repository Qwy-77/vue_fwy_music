<template>
  <div class="TabBar">
    <div class="content-bar">
      <div class="content-left" @click="goHome"></div>

      <ul class="content-center">
        <li><router-link to="/home">发现音乐</router-link></li>
        <li><router-link to="/ranking">排行榜</router-link></li>
        <li><router-link to="/songList">歌单</router-link></li>
        <li><router-link to="/singer">歌手</router-link></li>
        <li><router-link to="/video">视频</router-link></li>
        <li><router-link to="/mv">MV</router-link></li>
      </ul>

      <div class="content-right">
        <i class="el-icon-search"></i>
        <span class="right-sod"></span>
        <div class="content-user">
          <span class="img">
            <img src="~assets/images/top-bg.jpg" alt="" />
          </span>
          <span>{{ userId }} <i class="el-icon-arrow-down"></i> </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      userId: "李思琦",
    };
  },
  methods: {
    goHome() {
      this.$router.push("/home");
    },
  },
};
</script>

<style  scoped>
.TabBar {
  background-color: #fff;
  height: 70px;
  width: 100%;
}
.content-bar {
  position: relative;
  max-width: 1388px;
  padding: 0 20px;
  display: flex;
  height: 70px;
  line-height: 70px;
  font-size: 15px;
}
.content-left {
  width: 147px;
  background: url("~assets/images/logo_black.png") no-repeat center;
  vertical-align: middle;
  cursor: pointer;
}

.content-center {
  margin-left: 32px;
  display: flex;
}
.content-center li a {
  position: relative;
  margin: 0 16px;
  outline: none;
}
.content-center li a::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -12px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #fa2800;
}

.content-right {
  position: absolute;
  right: 20px;
  display: flex;
  align-items: center;
}
.el-icon-search {
  font-size: 17px;
}
.right-sod {
  width: 1px;
  height: 25px;
  border: 1px solid #eee;
  margin: 0 20px;
}
.content-user .img {
  line-height: 40px;
  margin-right: 20px;
}
.content-user .img img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  vertical-align: middle;
}
.el-icon-arrow-down {
  margin-left: 6px;
}
</style>