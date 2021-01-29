import { request } from "../index";

// 获取首页轮播图数据
export function getBanner() {
  return request({
    url: "/banner"
  });
}

//获取 推荐歌单
export function getPersonalized(token) {
  return request({
    url: "/personalized",
    params: {
      token
    }
  });
}
