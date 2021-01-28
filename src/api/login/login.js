import { request } from "../index";

export function getLogin(phone, password) {
  return request({
    url: "/login/cellphone",
    params: {
      phone,
      password
    }
  });
}

export function getUserDetail(uid) {
  return request({
    url: "/user/detail",
    params: {
      uid
    }
  });
}
