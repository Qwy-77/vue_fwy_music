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

// 获取推荐新歌 歌曲
export function getNewSong() {
  return request({
    url: "/personalized/newsong"
  });
}
