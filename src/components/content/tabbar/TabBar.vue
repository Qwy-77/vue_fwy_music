<template>
  <div class="TabBar" v-if="isShow">
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
        <div class="content-user" v-if="loginStatu">
          <span class="img">
            <img :src="userInfo.avatarUrl" alt="" />
          </span>
          <span
            >{{ userInfo.nickname }}
            <i class="el-icon-arrow-down" @click="modeClick"></i>
          </span>
        </div>
        <div class="content-user" v-else>
          <span @click="goLogin" class="user">登录</span>
        </div>

        <!-- 个人状态栏-->
        <div class="tab-user" v-show="show">
          <ul>
            <li>
              <router-link to="/">
                <i class="el-icon-user"></i>
                个人主页
              </router-link>
            </li>
            <li>
              <router-link to="/">
                <i class="el-icon-medal"></i>
                我的等级
              </router-link>
            </li>
            <li>
              <router-link to="/">
                <i class="el-icon-setting"></i>
                个人设置
              </router-link>
            </li>
            <li class="tab-user-item" @click="logout">
              <router-link to="/">
                <i class="el-icon-switch-button"></i>
                退出登录
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getStatus, logout, logoutRefresh } from "api/login/login";
export default {
  name: "TabBar",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    goHome() {
      this.$router.push("/home");
    },
    goLogin() {
      this.$router.push("/login");
    },
    modeClick() {
      this.show = !this.show;
    },
    // 退出登录
    logout() {
      window.localStorage.removeItem("loginStatu");
      window.localStorage.removeItem("userInfo");
      this.modeClick();
    },
  },
  computed: {
    isShow() {
      // 如果是登录页面就隐藏导航
      return this.$route.path.indexOf("/login");
    },

    // 获取 stote 里面数据信息
    ...mapGetters(["loginStatu", "userInfo"]),
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
.user {
  cursor: pointer;
}

/*
* 个人状态栏的样式
*/
.tab-user {
  position: absolute;
  top: 58px;
  right: 2px;
  z-index: 2;
  width: 125px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
.tab-user::after {
  content: "";
  position: absolute;
  top: -12px;
  right: 40px;
  border: 6px solid transparent;
  border-bottom: 6px dotted #f1f3f6;
}
.tab-user ul {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  font-size: 14px;
}
.tab-user ul li {
  height: 35px;
  line-height: 35px;
  color: #606266;
  cursor: pointer;
}
.tab-user-item {
  position: relative;
  margin-top: 17px;
}
.tab-user-item::after {
  content: "";
  position: absolute;
  width: 125px;
  border: 1px solid #ebeef5;
  top: -8px;
  left: -25px;
}
.tab-user a {
  outline: none;
}
</style>