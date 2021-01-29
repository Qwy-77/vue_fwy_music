import { request } from "../index";

// 登录请求
export function getLogin(phone, password) {
  return request({
    url: "/login/cellphone",
    params: {
      phone,
      password
    }
  });
}

// 获取用户信息
export function getUserDetail(uid) {
  return request({
    url: "/user/detail",
    params: {
      uid
    }
  });
}

// 获取登录状态
export function getStatus() {
  return request({
    url: "/login/status"
  });
}

// 退出登录
export function logout() {
  return request({
    url: "/logout"
  });
}

// 刷新登陆
export function logoutRefresh() {
  return request({
    url: "/login/refresh"
  });
}
