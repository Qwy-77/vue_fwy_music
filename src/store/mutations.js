export default {
  getLoginStatus(state, loginStatus) {
    state.loginStatu = loginStatus;
  },
  getUserInfo(state, getUserInfo) {
    state.userInfo = getUserInfo;
  }
};
