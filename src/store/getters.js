export default {
  // 用户登录状态
  loginStatu(state) {
    return (
      state.loginStatu || JSON.parse(window.localStorage.getItem("loginStatu"))
    );
  },

  // 用户个人信息
  userInfo(state) {
    return (
      state.userInfo || JSON.parse(window.localStorage.getItem("userInfo"))
    );
  }
};
