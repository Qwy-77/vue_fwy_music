import { request } from "../index";

// 获取首页轮播图数据
export function getBanner() {
  return request({
    url: "/banner"
  });
}
