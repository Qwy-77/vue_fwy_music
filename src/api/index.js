import axios from "axios";
export function request(config) {
  // 1.创建 axios 实例
  const instance = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 5000
  });

  // 2. 拦截器
  instance.interceptors.request.use(
    config => {
      // console.log(config);
      return config;
    },
    error => {
      console.log(error);
    }
  );

  // 3.发送请求
  return instance(config);
}
