<template>
  <div class="Login">
    <div class="login-user">
      <div class="login-content">
        <img src="~assets/images/logo-a.png" alt="" />
        <p>NICEMUSIC</p>
        <div class="login-form">
          <el-form label-width="80px">
            <!-- 手机号-->
            <el-input
              prefix-icon="el-icon-mobile-phone"
              placeholder="请输入手机号"
              v-model="phone"
              class="input"
            >
            </el-input>
            <!-- 密码-->
            <el-input
              prefix-icon="el-icon-lock"
              placeholder="请输入密码"
              show-password
              v-model="password"
              class="input"
            >
            </el-input>
          </el-form>
          <el-row>
            <el-button
              type="primary"
              class="button"
              @click="loginClick"
              :disabled="!isLogin"
              >登录</el-button
            >
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getLogin, getUserDetail } from "api/login/login";
import { mapMutations } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  computed: {
    isLogin() {
      return /^1[35789]\d{9}$/.test(this.phone) && this.password;
    },
  },
  methods: {
    loginClick() {
      // 发送登录请求
      getLogin(this.phone, this.password)
        .then((res) => {
          if (res.data.code === 200) {
            // 用户登录成功后就调用此方法来获取用户信息
            this.getUserDetail(res.data.profile.userId);
            console.log(res);
            // 保存 token
            window.localStorage.setItem("token", res.data.token);
            window.localStorage.setItem("cokie", res.data.cookie);
            window.localStorage.setItem("loginStatu", true);
            // 把登录状态 存储在 stote 中
            this.setLoginStatus(true);
          } else {
            this.$message.error("手机号或密码错误,请重新输入");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // 获取用户信息
    getUserDetail(uid) {
      getUserDetail(uid)
        .then((res) => {
          if (res.data.code === 200) {
            let userInfo = res.data.profile;
            // 把一些需要的用户信息数据存放在本地
            userInfo.createDays = res.data.createDays;
            userInfo.createTime = res.data.createTime;
            userInfo.level = res.data.level;
            userInfo.listenSongs = res.data.listenSongs;
            window.localStorage.setItem("userInfo", JSON.stringify(userInfo));
            // 把所有的用户信息数据存放在 store
            this.steUserInfo(res.data.profile);
            this.$message.success("登陆成功!");
            // 跳转到主页面
            setTimeout(() => {
              this.$router.push("/home");
            }, 1500);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // 调用store里面的 Mutations 属性
    ...mapMutations({
      setLoginStatus: "getLoginStatus",
      steUserInfo: "getUserInfo",
    }),
  },
};
</script>

<style  scoped>
.Login {
  width: 100%;
  min-height: 100vh;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #5dd5c8 url("~assets/images/newbg1.png") center bottom no-repeat;
}
.login-user {
  box-sizing: border-box;
  width: 350px;
  height: 450px;
  background: url("~assets/images/logbg.jpg") no-repeat;
  border-radius: 8px;
}
.login-content {
  text-align: center;
}
.login-content img {
  width: 55px;
  margin-top: 45px;
}
.login-form {
  padding: 0 25px;
  margin-top: 45px;
}
.input {
  margin-bottom: 20px;
}
.button {
  width: 100%;
  margin-top: 10px;
  font-size: 15px;
}
</style>